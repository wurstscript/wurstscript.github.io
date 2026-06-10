import type { Deprecation, Entity, EntityKind, PackageDoc } from "./types.ts";
import { categoryLabel } from "./categories.ts";

const GITHUB_BASE = "https://github.com/wurstscript/WurstStdlib2/blob/master/";
/** Minimum line count for an entity's doc to be promoted to the package summary. */
const MIN_SUMMARY_LINES = 3;

const MODIFIER = /^(public|protected|private|abstract|static|override)\b\s*/;

export function isTestFile(path: string): boolean {
  return /Tests\.wurst$/.test(path);
}

interface PendingAnnos {
  configurable: boolean;
  deprecated: Deprecation;
  skip: boolean; // @test -> skip the next declaration
}

function emptyAnnos(): PendingAnnos {
  return { configurable: false, deprecated: { flag: false, message: null }, skip: false };
}

interface Frame {
  entity: Entity | null; // null when the container is internal (not emitted)
  indent: number;
}

export interface ParseInput {
  text: string;
  /** Path relative to the stdlib repo root, e.g. "wurst/data/LinkedList.wurst". */
  sourcePath: string;
  /** Top-level folder under wurst/, e.g. "data" (or "." for root). */
  category: string;
  /** Extra capability tags for this package (from tags.yml). */
  extraTags?: string[];
}

export function parseFile(input: ParseInput): PackageDoc {
  const { sourcePath, category } = input;
  const lines = input.text.split("\n").map((l) => l.replace(/\r$/, ""));

  const entities: Entity[] = [];
  const imports: string[] = [];
  const stack: Frame[] = [];
  let pkgName = pkgNameFromPath(sourcePath);
  let prePackageSummary: string | null = null;

  let pendingDoc: string | null = null;
  let blanksSinceDoc = 0;
  let annos = emptyAnnos();

  let i = 0;
  while (i < lines.length) {
    const raw = lines[i];
    const trimmed = raw.trim();
    const indent = leadingTabs(raw);

    // Blank line.
    if (trimmed === "") {
      if (pendingDoc !== null && ++blanksSinceDoc >= 2) pendingDoc = null;
      i++;
      continue;
    }

    // Hotdoc block: /** ... */
    if (trimmed.startsWith("/**")) {
      const { text, end } = collectDoc(lines, i);
      pendingDoc = text;
      blanksSinceDoc = 0;
      annos = emptyAnnos();
      i = end + 1;
      continue;
    }

    // Non-hotdoc block comment /* ... */ — skip its whole span, clear pending.
    if (trimmed.startsWith("/*")) {
      let j = i;
      while (j < lines.length && !lines[j].includes("*/")) j++;
      pendingDoc = null;
      annos = emptyAnnos();
      i = j + 1;
      continue;
    }

    // Standalone line comment — transparent (keep pending doc).
    if (trimmed.startsWith("//")) {
      i++;
      continue;
    }

    // Peel leading annotations (possibly same-line as a declaration).
    const peeled = peelAnnotations(trimmed);
    if (peeled.annos.configurable) annos.configurable = true;
    if (peeled.annos.deprecated.flag) annos.deprecated = peeled.annos.deprecated;
    if (peeled.annos.skip) annos.skip = true;
    const rest = peeled.rest;

    // Annotation-only line: keep buffering, keep pending doc.
    if (rest === "") {
      i++;
      continue;
    }

    // package declaration.
    const pkgMatch = rest.match(/^package\s+(\w+)/);
    if (pkgMatch) {
      pkgName = pkgMatch[1];
      if (pendingDoc !== null) prePackageSummary = pendingDoc;
      pendingDoc = null;
      annos = emptyAnnos();
      i++;
      continue;
    }

    // import declaration. We only record `import public` (re-exported) packages — those are
    // the doc-worthy ones (aggregator packages like Assets/Wurst bundle them).
    const impMatch = rest.match(/^import\s+(public\s+)?(?:initlater\s+)*(\w+)/);
    if (impMatch) {
      if (impMatch[1]) imports.push(impMatch[2]);
      pendingDoc = null;
      annos = emptyAnnos();
      i++;
      continue;
    }

    // Close any containers we've dedented out of.
    while (stack.length > 0 && indent <= stack[stack.length - 1].indent) stack.pop();
    const inContainer = stack.length > 0 ? stack[stack.length - 1] : null;

    // Try to read a declaration.
    const decl = matchDeclaration(rest);
    if (!decl) {
      // Body statement / field / init / etc.
      pendingDoc = null;
      annos = emptyAnnos();
      i++;
      continue;
    }

    // Assemble verbatim signature, joining continuation lines until parens balance.
    let signatureRaw = rest;
    let consumedTo = i;
    if (decl.hasParens && !parensBalanced(rest)) {
      let j = i;
      let acc = rest;
      while (j + 1 < lines.length && !parensBalanced(acc)) {
        j++;
        acc += " " + lines[j].trim();
      }
      signatureRaw = acc;
      consumedTo = j;
    }
    const signature = signatureRaw.replace(/\s+/g, " ").trim();

    const doc = (annos.skip ? "" : pendingDoc) ?? "";
    const entity: Entity = {
      kind: decl.kind,
      name: decl.name,
      typeParams: decl.typeParams,
      receiver: decl.receiver,
      signature,
      doc,
      deprecated: annos.deprecated,
      configurable: annos.configurable,
      members: [],
      enumMembers: [],
      line: i + 1,
    };

    const isMember = inContainer !== null &&
      (decl.kind === "function" || decl.kind === "extension-function");
    const skipDecl = annos.skip;

    // Reset per-declaration state up front; container/enum reads advance `i` themselves.
    pendingDoc = null;
    blanksSinceDoc = 0;
    annos = emptyAnnos();

    if (skipDecl) {
      i = consumedTo + 1;
      continue;
    }

    if (isMember) {
      // Public-by-default; skip explicitly restricted members and lifecycle.
      if (!peeled.mods.has("private") && !peeled.mods.has("protected")) {
        inContainer!.entity?.members.push(entity);
      }
      i = consumedTo + 1;
      continue;
    }

    // Top-level entity: visible if public or configurable.
    const visible = peeled.mods.has("public") || entity.configurable;

    if (decl.kind === "class" || decl.kind === "interface" || decl.kind === "module") {
      if (visible) entities.push(entity);
      stack.push({ entity: visible ? entity : null, indent });
      i = consumedTo + 1;
      continue;
    }

    if (decl.kind === "enum") {
      const { members, end } = readEnumMembers(lines, consumedTo + 1, indent);
      entity.enumMembers = members;
      if (visible) entities.push(entity);
      i = end;
      continue;
    }

    // function / extension-function / tuple / constant
    if (visible) entities.push(entity);
    i = consumedTo + 1;
  }

  const summary = resolveSummary(prePackageSummary, entities, pkgName);

  const tags = uniqueSorted([category.replace(/^_/, "") || "root", ...(input.extraTags ?? [])]);

  return {
    package: pkgName,
    category,
    categoryLabel: categoryLabel(category),
    sourcePath: sourcePath.replace(/\\/g, "/"),
    githubUrl: GITHUB_BASE + sourcePath.replace(/\\/g, "/"),
    summary,
    summaryFirstLine: firstLine(summary),
    tags,
    imports,
    entities,
  };
}

// --- declaration matching ----------------------------------------------------

interface DeclMatch {
  kind: EntityKind;
  name: string;
  typeParams: string;
  receiver: string | null;
  hasParens: boolean;
}

function matchDeclaration(rest: string): DeclMatch | null {
  // Peel modifiers off (mods already recorded separately by caller).
  let s = rest;
  while (MODIFIER.test(s)) s = s.replace(MODIFIER, "");

  let m: RegExpMatchArray | null;

  if ((m = s.match(/^class\s+(\w+)(<[^>]*>)?/))) {
    return { kind: "class", name: m[1], typeParams: m[2] ?? "", receiver: null, hasParens: false };
  }
  if ((m = s.match(/^interface\s+(\w+)(<[^>]*>)?/))) {
    return {
      kind: "interface",
      name: m[1],
      typeParams: m[2] ?? "",
      receiver: null,
      hasParens: false,
    };
  }
  if ((m = s.match(/^module\s+(\w+)(<[^>]*>)?/))) {
    return { kind: "module", name: m[1], typeParams: m[2] ?? "", receiver: null, hasParens: false };
  }
  if ((m = s.match(/^enum\s+(\w+)/))) {
    return { kind: "enum", name: m[1], typeParams: "", receiver: null, hasParens: false };
  }
  if ((m = s.match(/^tuple\s+(\w+)/))) {
    return { kind: "tuple", name: m[1], typeParams: "", receiver: null, hasParens: true };
  }
  if (s.startsWith("constant ")) {
    return { kind: "constant", name: constantName(s), typeParams: "", receiver: null, hasParens: false };
  }
  // Extension function: function <Recv>.<name>(...)
  if ((m = s.match(/^function\s+([A-Za-z_]\w*(?:<[^>]*>)?)\.([A-Za-z_]\w*)(<[^>]*>)?\s*\(/))) {
    return {
      kind: "extension-function",
      name: m[2],
      typeParams: m[3] ?? "",
      receiver: m[1],
      hasParens: true,
    };
  }
  // Normal function.
  if ((m = s.match(/^function\s+([A-Za-z_]\w*)(<[^>]*>)?\s*\(/))) {
    return { kind: "function", name: m[1], typeParams: m[2] ?? "", receiver: null, hasParens: true };
  }
  // Constructor (only meaningful inside a container; caller decides).
  if (/^construct\s*\(/.test(s)) {
    return { kind: "function", name: "construct", typeParams: "", receiver: null, hasParens: true };
  }
  return null; // ondestroy, fields, statements, init, etc.
}

function constantName(s: string): string {
  // `constant [Type] NAME = value` — the last token of the lhs before '='.
  const afterKw = s.replace(/^constant\s+/, "");
  const lhs = afterKw.split("=")[0].trim();
  const tokens = lhs.split(/\s+/).filter((t) => t.length > 0);
  const last = tokens[tokens.length - 1] ?? lhs;
  return last.replace(/<[^>]*>/g, "");
}

// --- annotations -------------------------------------------------------------

interface PeelResult {
  annos: PendingAnnos;
  mods: Set<string>;
  rest: string;
}

function peelAnnotations(trimmed: string): PeelResult {
  const annos = emptyAnnos();
  let s = trimmed;
  // Strip leading @annotations (with optional (...) args).
  while (s.startsWith("@")) {
    const m = s.match(/^@(\w+)\s*(\([^)]*\))?\s*/);
    if (!m) break;
    const name = m[1].toLowerCase();
    if (name === "configurable") annos.configurable = true;
    else if (name === "test") annos.skip = true;
    else if (name === "deprecated") {
      const argMatch = (m[2] ?? "").match(/["']([^"']*)["']/);
      annos.deprecated = { flag: true, message: argMatch ? argMatch[1] : null };
    }
    s = s.slice(m[0].length);
  }
  // Record (but do not strip) leading visibility/abstract modifiers for the caller.
  const mods = new Set<string>();
  let t = s;
  let mm: RegExpMatchArray | null;
  while ((mm = t.match(MODIFIER))) {
    mods.add(mm[1]);
    t = t.replace(MODIFIER, "");
  }
  return { annos, mods, rest: s };
}

// --- doc-comment collection --------------------------------------------------

function collectDoc(lines: string[], start: number): { text: string; end: number } {
  const first = lines[start];
  const afterOpen = first.slice(first.indexOf("/**") + 3);

  // Single-line /** ... */
  if (afterOpen.includes("*/")) {
    const body = afterOpen.slice(0, afterOpen.indexOf("*/"));
    return { text: cleanDoc([body]), end: start };
  }

  const buf: string[] = [];
  if (afterOpen.trim() !== "") buf.push(afterOpen);
  let i = start + 1;
  while (i < lines.length) {
    const line = lines[i];
    if (line.includes("*/")) {
      const body = line.slice(0, line.indexOf("*/"));
      if (body.trim() !== "") buf.push(body);
      return { text: cleanDoc(buf), end: i };
    }
    buf.push(line);
    i++;
  }
  return { text: cleanDoc(buf), end: lines.length - 1 };
}

function cleanDoc(rawLines: string[]): string {
  let ls = [...rawLines];
  while (ls.length && ls[0].trim() === "") ls.shift();
  while (ls.length && ls[ls.length - 1].trim() === "") ls.pop();
  if (ls.length === 0) return "";

  const nonBlank = ls.filter((l) => l.trim() !== "");
  const starStyle = nonBlank.every((l) => /^\s*\*/.test(l));
  if (starStyle) {
    ls = ls.map((l) => l.replace(/^\s*\*\s?/, ""));
  } else {
    // Dedent by the common indentation of the *indented* lines only. The first content line
    // often sits flush after `/**` (zero indent) while continuations are indented; including it
    // would defeat the dedent. Stripping the shared prefix preserves relative indent in examples.
    const indented = nonBlank.filter((l) => /^\s/.test(l));
    const prefix = indented.length ? commonWhitespacePrefix(indented) : "";
    if (prefix) ls = ls.map((l) => (l.startsWith(prefix) ? l.slice(prefix.length) : l));
  }
  return ls.join("\n").trim();
}

function commonWhitespacePrefix(lines: string[]): string {
  let prefix: string | null = null;
  for (const l of lines) {
    const ws = l.match(/^\s*/)![0];
    if (prefix === null) {
      prefix = ws;
    } else {
      let k = 0;
      while (k < prefix.length && k < ws.length && prefix[k] === ws[k]) k++;
      prefix = prefix.slice(0, k);
    }
    if (prefix === "") break;
  }
  return prefix ?? "";
}

// --- enum members ------------------------------------------------------------

function readEnumMembers(
  lines: string[],
  from: number,
  enumIndent: number,
): { members: string[]; end: number } {
  const members: string[] = [];
  let i = from;
  while (i < lines.length) {
    const raw = lines[i];
    const trimmed = raw.trim();
    if (trimmed === "") {
      i++;
      continue;
    }
    if (leadingTabs(raw) <= enumIndent) break;
    const name = trimmed.replace(/\/\/.*$/, "").trim();
    if (/^[A-Za-z_]\w*$/.test(name)) {
      members.push(name);
      i++;
    } else {
      break;
    }
  }
  return { members, end: i };
}

// --- summary resolution ------------------------------------------------------

function resolveSummary(prePackage: string | null, entities: Entity[], pkgName: string): string {
  // 1. An explicit doc block directly above the `package` line wins.
  if (prePackage && prePackage.trim() !== "") return prePackage;
  // 2. The "main type" of the package: an entity whose name equals the package name.
  //    Its doc (any length, e.g. HashMap's one-line "Generic Table Wrapper") is the summary.
  const main = entities.find((e) => e.name === pkgName && e.doc);
  if (main) {
    const summary = main.doc;
    main.doc = ""; // consumed -> don't render twice
    return summary;
  }
  // 3. Otherwise the first narrative block (e.g. ClosureEvents' overview above OnCastListener).
  for (const e of entities) {
    if (e.doc && lineCount(e.doc) >= MIN_SUMMARY_LINES) {
      const summary = e.doc;
      e.doc = "";
      return summary;
    }
  }
  return "";
}

// --- small helpers -----------------------------------------------------------

function leadingTabs(s: string): number {
  let n = 0;
  while (n < s.length && s[n] === "\t") n++;
  return n;
}

function parensBalanced(s: string): boolean {
  let depth = 0;
  for (const c of s) {
    if (c === "(") depth++;
    else if (c === ")") depth--;
  }
  return depth <= 0;
}

function lineCount(s: string): number {
  return s.split("\n").filter((l) => l.trim() !== "").length;
}

function firstLine(s: string): string {
  for (const l of s.split("\n")) {
    if (l.trim() !== "") return l.trim();
  }
  return "";
}

function pkgNameFromPath(p: string): string {
  const base = p.replace(/\\/g, "/").split("/").pop() ?? p;
  return base.replace(/\.wurst$/, "");
}

function uniqueSorted(xs: string[]): string[] {
  return [...new Set(xs.map((x) => x.toLowerCase()))].sort();
}
