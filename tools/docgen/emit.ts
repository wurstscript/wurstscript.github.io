import { dirname, join } from "@std/path";
import { stringify as yamlStringify } from "@std/yaml";
import type { Entity, PackageDoc } from "./types.ts";
import { CATEGORIES, categoryLabel, categoryOrder } from "./categories.ts";
import { hotdocToMarkdown, normalizeDashes } from "./hotdoc.ts";

export interface EmitContext {
  outDir: string;
  curated: Map<string, string>;
  includes: Set<string>;
  referenceLinks?: Map<string, string>;
  typeLinks?: Map<string, string>;
}
const REF_DIR = ["_doc", "stdlib", "ref"];
const TYPE_KINDS = new Set(["class", "interface", "module", "enum", "tuple"]);
export function isType(e: Entity): boolean {
  return TYPE_KINDS.has(e.kind);
}
function categoryPath(pkg: PackageDoc): string {
  return pkg.category.replace(/^\./, "root");
}
function packageUrl(pkg: PackageDoc): string {
  return `/stdlib/ref/${categoryPath(pkg)}/${pkg.package}.html`;
}
// Case-only type names need different filenames on Windows, too.
function typeStem(pkg: PackageDoc, e: Entity): string {
  const collision = pkg.entities.some((other) =>
    isType(other) && other.name !== e.name &&
    other.name.toLowerCase() === e.name.toLowerCase()
  );
  return collision
    ? `${e.name}-${[...e.name].map((c) => c.charCodeAt(0).toString(16)).join("")}`
    : e.name;
}
export function typeUrl(pkg: PackageDoc, e: Entity): string {
  return `/stdlib/ref/${categoryPath(pkg)}/${pkg.package}/${typeStem(pkg, e)}.html`;
}
function constantAnchor(className: string, memberName: string): string {
  return `${className}-${memberName}`;
}

export async function emitAll(packages: PackageDoc[], ctx: EmitContext): Promise<string[]> {
  const written: string[] = [];
  const referenceLinks = new Map<string, string>();
  const typeLinks = new Map<string, string>();
  const names = new Map<string, string[]>();
  for (const pkg of packages) {
    for (const e of pkg.entities.filter(isType)) {
      const url = typeUrl(pkg, e);
      typeLinks.set(`${pkg.package}.${e.name}`, url);
      names.set(e.name, [...(names.get(e.name) ?? []), url]);
      for (const m of e.members.filter((m) => m.kind === "constant")) {
        referenceLinks.set(`${e.name}.${m.name}`, `${url}#${constantAnchor(e.name, m.name)}`);
      }
    }
  }
  for (const [name, urls] of names) if (urls.length === 1) typeLinks.set(name, urls[0]);
  ctx = { ...ctx, referenceLinks, typeLinks };
  const jsonPath = join(ctx.outDir, "_data", "stdlib_index.json");
  await writeFile(jsonPath, renderPackageIndex(packages));
  written.push(jsonPath);
  const refRoot = join(ctx.outDir, ...REF_DIR);
  await removeIfExists(refRoot);
  const paths = new Set<string>();
  for (const pkg of packages) {
    const path = join(refRoot, categoryPath(pkg), `${pkg.package}.md`);
    await writeFile(path, renderPackagePage(pkg, ctx));
    written.push(path);
    for (const e of pkg.entities.filter(isType)) {
      const typePath = join(refRoot, categoryPath(pkg), pkg.package, `${typeStem(pkg, e)}.md`);
      if (paths.has(typePath.toLowerCase())) throw new Error(`Duplicate type path: ${typePath}`);
      paths.add(typePath.toLowerCase());
      await writeFile(typePath, renderTypePage(pkg, e, ctx));
      written.push(typePath);
    }
  }
  const indexPath = join(refRoot, "index.md");
  await writeFile(indexPath, renderIndex(packages));
  written.push(indexPath);
  return written;
}
export function renderPackageIndex(packages: PackageDoc[]): string {
  return JSON.stringify(packages.map(({ entities: _entities, ...metadata }) => metadata), null, 2) +
    "\n";
}
function pageMeta(pkg: PackageDoc): Record<string, unknown> {
  return {
    title: pkg.package,
    layout: "stdlibref",
    category: pkg.category,
    categoryLabel: pkg.categoryLabel,
    tags: pkg.tags,
    source: pkg.githubUrl,
    generated: true,
    toc: "sections",
    api_package: pkg.package,
    package_url: packageUrl(pkg),
  };
}
export function renderPackagePage(pkg: PackageDoc, ctx: EmitContext): string {
  const body: string[] = [];
  if (pkg.summary) body.push(hotdocToMarkdown(pkg.summary), "");
  const guide = ctx.curated.get(pkg.package);
  if (guide) body.push(`[Read the ${pkg.package} guide](${guide})`, "");
  if (ctx.includes.has(pkg.package)) {
    body.push(`{% include stdlib_curated/${pkg.package}.md %}`, "");
  }
  if (pkg.imports.length) {
    body.push(`**Re-exports:** ${pkg.imports.map((n) => `\`${n}\``).join(", ")}`, "");
  }
  const types = pkg.entities.filter(isType);
  if (types.length) {
    body.push("## Types", "", browserStart("Filter types by name, rawcode, or description"));
    for (const e of types) {
      body.push(
        `<a class="api-row" data-api-item data-legacy-anchor="${esc(legacyAnchor(e.name))}" href="${
          typeUrl(pkg, e)
        }"><span class="api-row-name">${esc(e.name)}</span><span class="api-kind">${
          esc(e.kind)
        }</span><span class="api-row-description">${esc(cleanDescription(e.doc))}</span></a>`,
      );
    }
    body.push(browserEnd(), "");
  }
  const functions = pkg.entities.filter((e) => !isType(e));
  if (functions.length) {
    body.push(
      "## Functions and constants",
      "",
      browserStart("Filter declarations by name or signature"),
    );
    functions.forEach((e, i) =>
      body.push(
        renderDeclaration(
          e,
          `${legacyAnchor(e.receiver ? `${e.receiver}.${e.name}` : e.name)}-${i}`,
          ctx,
        ),
      )
    );
    body.push(browserEnd(), "");
  }
  return frontmatter(pageMeta(pkg)) + body.join("\n").trimEnd() + "\n";
}
export function renderTypePage(pkg: PackageDoc, e: Entity, ctx: EmitContext): string {
  const fm = {
    ...pageMeta(pkg),
    title: e.name,
    api_type: true,
    source: `${pkg.githubUrl}#L${e.line}`,
  };
  const doc = e.doc || (e.name === pkg.package ? pkg.summary : "");
  const body = ["```wurst", e.signature, "```", "", renderDoc(doc, ctx), ""];
  if (e.deprecated.flag) body.push(`> **Deprecated.** ${e.deprecated.message ?? ""}`, "");
  const base = e.signature.match(/\bextends\s+(\w+)/)?.[1];
  const href = base && (ctx.typeLinks?.get(`${pkg.package}.${base}`) ?? ctx.typeLinks?.get(base));
  if (href) {
    body.push(`**Inherits from:** [${base}](${href}) · See this type for inherited members.`, "");
  }
  if (e.enumMembers.length) {
    body.push(
      "## Values",
      "",
      e.enumMembers.map((m) => `- \`${m}\``).join("\n"),
      "",
    );
  }
  const groups = [
    ["Constructors", e.members.filter((m) => m.name === "construct")],
    ["Methods", e.members.filter((m) => m.kind !== "constant" && m.name !== "construct")],
    ["Constants", e.members.filter((m) => m.kind === "constant")],
  ] as const;
  for (const [heading, members] of groups) {
    if (!members.length) continue;
    body.push(
      `## ${heading}`,
      "",
      browserStart(`Filter ${heading.toLowerCase()} by name or signature`),
    );
    members.forEach((m, i) =>
      body.push(
        renderDeclaration(
          m,
          m.kind === "constant" ? constantAnchor(e.name, m.name) : `${e.name}-${m.name}-${i}`,
          ctx,
        ),
      )
    );
    body.push(browserEnd(), "");
  }
  return frontmatter(fm) + body.join("\n").trimEnd() + "\n";
}
function renderDeclaration(e: Entity, id: string, ctx: EmitContext): string {
  const doc = renderDoc(e.doc, ctx);
  const status = e.deprecated.flag ? `\n> **Deprecated.** ${e.deprecated.message ?? ""}\n` : "";
  const config = e.configurable
    ? "\n> **Configurable.** Override it in your map's config package.\n"
    : "";
  const sig = e.signature.replace(/^function\s+/, "");
  if (!doc && !status && !config) {
    return `<div class="api-signature" data-api-item id="${esc(id)}" data-legacy-anchor="${
      esc(legacyAnchor(e.receiver ? `${e.receiver}.${e.name}` : e.name))
    }"><code>${esc(sig)}</code></div>`;
  }
  return `<details class="api-declaration" data-api-item id="${esc(id)}" data-legacy-anchor="${
    esc(legacyAnchor(e.receiver ? `${e.receiver}.${e.name}` : e.name))
  }" markdown="1">\n<summary><code>${esc(sig)}</code></summary>\n\n${
    doc || "Declaration shown above."
  }${status}${config}\n\n</details>`;
}
function renderDoc(doc: string, ctx: EmitContext): string {
  const ref = doc.trim().match(/^'([^']{4})' \/ (\w+\.\w+)$/);
  const href = ref ? ctx.referenceLinks?.get(ref[2]) : undefined;
  return href ? `'${ref![1]}' / [${ref![2]}](${href})` : hotdocToMarkdown(doc);
}
function browserStart(label: string): string {
  return `<div class="api-browser" data-api-browser markdown="1">\n<div class="api-tools" data-pagefind-ignore hidden><label>${
    esc(label)
  }<input type="search" data-api-search placeholder="Type to filter…" autocomplete="off"></label><p data-api-status role="status" aria-live="polite"></p></div>\n<div class="api-results" markdown="1">`;
}
function browserEnd(): string {
  return `</div>\n<div class="api-pagination" data-pagefind-ignore hidden><button type="button" data-api-prev>Previous</button><span data-api-page></span><button type="button" data-api-next>Next</button></div>\n</div>`;
}
export function renderIndex(packages: PackageDoc[]): string {
  const fm = {
    title: "API Reference",
    layout: "stdlibref",
    permalink: "/stdlib/ref/",
    toc: "sections",
  };
  const body = [
    "Find a package, then open a type or function. Search the site for a specific symbol or rawcode.",
    "",
    "[Explore the standard library guides](/stdlib.html)",
    "",
    browserStart("Filter packages by name, category, or description"),
  ];
  for (
    const cat of [...new Set(packages.map((p) => p.category))].sort((a, b) =>
      categoryOrder(a) - categoryOrder(b)
    )
  ) {
    for (
      const pkg of packages.filter((p) => p.category === cat).sort((a, b) =>
        a.package.localeCompare(b.package)
      )
    ) {
      body.push(
        `<a class="api-row" data-api-item href="${packageUrl(pkg)}"><span class="api-row-name">${
          esc(pkg.package)
        }</span><span class="api-kind">${
          esc(categoryLabel(cat))
        }</span><span class="api-row-description">${esc(cleanDescription(pkg.summary))}</span></a>`,
      );
    }
  }
  body.push(browserEnd());
  return frontmatter(fm) + body.join("\n") + "\n";
}
function legacyAnchor(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9_-]/g, "");
}
function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(
    /"/g,
    "&quot;",
  );
}
function cleanDescription(summary: string): string {
  let s = normalizeDashes(summary.split("\n")[0] ?? "").replace(/\*\*|`/g, "").trim();
  if (s.length > 180) s = s.slice(0, 177) + "…";
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
export { CATEGORIES };
