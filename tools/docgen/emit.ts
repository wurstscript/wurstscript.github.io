import { dirname, join } from "@std/path";
import { stringify as yamlStringify } from "@std/yaml";
import type { Entity, PackageDoc } from "./types.ts";
import { CATEGORIES, categoryLabel, categoryOrder } from "./categories.ts";
import { hotdocToMarkdown, normalizeDashes } from "./hotdoc.ts";

export interface EmitContext {
  /** Website repo root (where _doc/, _data/, _includes/ live). */
  outDir: string;
  /** Package name -> curated page path (from _data/stdlib_curated.yml). */
  curated: Map<string, string>;
  /** Package names that have a _includes/stdlib_curated/<Package>.md transclude. */
  includes: Set<string>;
}

const REF_DIR = ["_doc", "stdlib", "ref"];

export async function emitAll(packages: PackageDoc[], ctx: EmitContext): Promise<string[]> {
  const written: string[] = [];

  // 1. JSON index.
  const jsonPath = join(ctx.outDir, "_data", "stdlib_index.json");
  await writeFile(jsonPath, JSON.stringify(packages, null, 2) + "\n");
  written.push(jsonPath);

  // 2. Clean + regenerate the ref subtree.
  const refRoot = join(ctx.outDir, ...REF_DIR);
  await removeIfExists(refRoot);

  // 3. Per-package pages.
  for (const pkg of packages) {
    const path = join(refRoot, pkg.category.replace(/^\./, "root"), `${pkg.package}.md`);
    await writeFile(path, renderPackagePage(pkg, ctx));
    written.push(path);
  }

  // 4. Reference index.
  const indexPath = join(refRoot, "index.md");
  await writeFile(indexPath, renderIndex(packages));
  written.push(indexPath);

  return written;
}

// --- per-package page --------------------------------------------------------

export function renderPackagePage(pkg: PackageDoc, ctx: EmitContext): string {
  const fm: Record<string, unknown> = {
    title: pkg.package,
    layout: "stdlibref",
    category: pkg.category,
    categoryLabel: pkg.categoryLabel,
    tags: pkg.tags,
    source: pkg.githubUrl,
    generated: true,
  };
  const curatedPath = ctx.curated.get(pkg.package);
  if (curatedPath) fm.curated = curatedPath;

  const body: string[] = [];
  if (pkg.summary) body.push(hotdocToMarkdown(pkg.summary), "");
  body.push(`**[Source on GitHub](${pkg.githubUrl})**`, "");
  if (curatedPath) {
    body.push(`> 📖 Read the **[detailed guide](${curatedPath})** for hand-written examples and background.`, "");
  }
  if (ctx.includes.has(pkg.package)) {
    body.push(`{% include stdlib_curated/${pkg.package}.md %}`, "");
  }

  if (pkg.imports.length > 0) {
    const links = pkg.imports.map((name) => `\`${name}\``).join(", ");
    body.push(`**Re-exports:** ${links}`, "");
  }

  body.push(...renderEntities(pkg.entities));

  return frontmatter(fm) + body.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

interface KindGroup {
  heading: string;
  kinds: Entity["kind"][];
}

const GROUPS: KindGroup[] = [
  { heading: "Classes", kinds: ["class"] },
  { heading: "Interfaces", kinds: ["interface"] },
  { heading: "Enums", kinds: ["enum"] },
  { heading: "Tuples", kinds: ["tuple"] },
  { heading: "Modules", kinds: ["module"] },
  { heading: "Functions", kinds: ["function"] },
  { heading: "Extension Functions", kinds: ["extension-function"] },
  { heading: "Constants", kinds: ["constant"] },
];

function renderEntities(entities: Entity[]): string[] {
  const out: string[] = [];
  for (const group of GROUPS) {
    const items = entities.filter((e) => group.kinds.includes(e.kind));
    if (items.length === 0) continue;
    out.push(`## ${group.heading}`, "");
    for (const e of items) out.push(...renderEntity(e));
  }
  return out;
}

function renderEntity(e: Entity): string[] {
  const out: string[] = [];
  const title = e.receiver ? `${e.receiver}.${e.name}` : e.name;
  out.push(`### ${title}`, "");
  out.push("```wurst", e.signature, "```", "");
  if (e.deprecated.flag) {
    out.push(`> ⚠️ **Deprecated.**${e.deprecated.message ? " " + e.deprecated.message : ""}`, "");
  }
  if (e.configurable) {
    out.push(`> 🔧 **Configurable.** Override it in your map's config package.`, "");
  }
  if (e.doc) out.push(hotdocToMarkdown(e.doc), "");
  if (e.enumMembers.length > 0) {
    out.push("**Values:** " + e.enumMembers.map((m) => `\`${m}\``).join(", "), "");
  }
  if (e.members.length > 0) {
    out.push("**Members:**", "");
    for (const m of e.members) out.push(...renderMember(m));
    out.push("");
  }
  return out;
}

function renderMember(m: Entity): string[] {
  const sig = m.signature.replace(/^function\s+/, "");
  const head = `- \`${sig}\``;
  if (!m.doc && !m.deprecated.flag) return [head];
  const lines: string[] = [head];
  if (m.deprecated.flag) {
    lines.push(`  ⚠️ _Deprecated.${m.deprecated.message ? " " + m.deprecated.message : ""}_`);
  }
  if (m.doc) {
    // Inline the member doc as indented continuation of the list item.
    const docText = hotdocToMarkdown(m.doc).split("\n").map((l) => "  " + l).join("\n");
    lines.push(docText);
  }
  return lines;
}

// --- reference index ---------------------------------------------------------

export function renderIndex(packages: PackageDoc[]): string {
  const fm = { title: "API Reference", layout: "doc", permalink: "/stdlib/ref/" };
  const body: string[] = [];
  body.push(
    "Auto-generated reference for every package in the " +
      "[Wurst standard library](https://github.com/wurstscript/WurstStdlib2). " +
      "For orientation and guidance on _which_ package to use, see the " +
      "[standard library overview](/stdlib.html).",
    "",
  );

  const byCat = new Map<string, PackageDoc[]>();
  for (const p of packages) {
    const list = byCat.get(p.category) ?? [];
    list.push(p);
    byCat.set(p.category, list);
  }

  const cats = [...byCat.keys()].sort((a, b) => categoryOrder(a) - categoryOrder(b));
  for (const cat of cats) {
    body.push(`## ${categoryLabel(cat)}`, "");
    const list = byCat.get(cat)!.sort((a, b) => a.package.localeCompare(b.package));
    for (const p of list) {
      const href = `/stdlib/ref/${p.category.replace(/^\./, "root")}/${p.package}.html`;
      const desc = cleanDescription(p.summary);
      body.push(desc ? `- [${p.package}](${href}): ${desc}` : `- [${p.package}](${href})`);
    }
    body.push("");
  }

  return frontmatter(fm) + body.join("\n").trimEnd() + "\n";
}

// --- helpers -----------------------------------------------------------------

/**
 * A short, clean one-line description for index listings: the first sentence of the summary,
 * with trailing colons, dangling open quotes and bold markers removed. Returns "" when the
 * summary doesn't yield a tidy sentence.
 */
function cleanDescription(summary: string): string {
  if (!summary) return "";
  let s = normalizeDashes(summary.split("\n")[0]).trim();
  // Prefer the first sentence when the line runs on.
  const sentenceEnd = s.search(/[.!?](\s|$)/);
  if (sentenceEnd > 0) s = s.slice(0, sentenceEnd + 1);
  s = s.replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  s = s.replace(/\s*:$/, ""); // drop a trailing colon (fragment header)
  if (/^["'].*[^"']$/.test(s)) s = s.replace(/^["']/, ""); // drop an unmatched opening quote
  s = s.replace(/[.\s]+$/, (m) => (m.includes(".") ? "." : ""));
  return s;
}

function frontmatter(obj: Record<string, unknown>): string {
  return "---\n" + yamlStringify(obj, { lineWidth: -1 }).trimEnd() + "\n---\n\n";
}

async function writeFile(path: string, content: string): Promise<void> {
  await Deno.mkdir(dirname(path), { recursive: true });
  await Deno.writeTextFile(path, content);
}

async function removeIfExists(path: string): Promise<void> {
  try {
    await Deno.remove(path, { recursive: true });
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) throw err;
  }
}

/** Exposed so main.ts can report the canonical category ordering. */
export { CATEGORIES };
