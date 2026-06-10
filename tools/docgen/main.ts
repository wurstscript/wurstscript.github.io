import { walk } from "@std/fs";
import { basename, join, relative, resolve } from "@std/path";
import { parse as yamlParse } from "@std/yaml";
import { isTestFile, parseFile } from "./parser.ts";
import { categoryOrder } from "./categories.ts";
import { emitAll, type EmitContext } from "./emit.ts";
import type { PackageDoc } from "./types.ts";

interface Args {
  src: string;
  out: string;
  check: boolean;
}

function parseArgs(): Args {
  // Default website root = two levels up from tools/docgen/.
  const websiteRoot = resolve(import.meta.dirname!, "..", "..");
  let src = resolve(websiteRoot, "..", "WurstStdlib2", "wurst");
  let out = websiteRoot;
  let check = false;

  const argv = Deno.args;
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--src") src = resolve(argv[++i]);
    else if (a === "--out") out = resolve(argv[++i]);
    else if (a === "--check") check = true;
    else if (a === "-h" || a === "--help") {
      console.log(
        "Usage: deno task gen [--src <wurst dir>] [--out <website root>] [--check]\n" +
          "  --src    path to WurstStdlib2/wurst (default: sibling repo)\n" +
          "  --out    website repo root to write into (default: repo root)\n" +
          "  --check  parse + report coverage, write nothing",
      );
      Deno.exit(0);
    }
  }
  return { src, out, check };
}

async function loadExtraTags(toolDir: string): Promise<Map<string, string[]>> {
  const path = join(toolDir, "tags.yml");
  const map = new Map<string, string[]>();
  try {
    const data = yamlParse(await Deno.readTextFile(path)) as Record<string, string[]> | null;
    if (data) for (const [k, v] of Object.entries(data)) map.set(k, v ?? []);
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) throw err;
  }
  return map;
}

async function loadCurated(outDir: string): Promise<Map<string, string>> {
  const path = join(outDir, "_data", "stdlib_curated.yml");
  const map = new Map<string, string>();
  try {
    const data = yamlParse(await Deno.readTextFile(path)) as Record<string, string> | null;
    if (data) for (const [k, v] of Object.entries(data)) map.set(k, v);
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) throw err;
  }
  return map;
}

async function loadIncludes(outDir: string): Promise<Set<string>> {
  const dir = join(outDir, "_includes", "stdlib_curated");
  const set = new Set<string>();
  try {
    for await (const e of Deno.readDir(dir)) {
      if (e.isFile && e.name.endsWith(".md")) set.add(e.name.replace(/\.md$/, ""));
    }
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) throw err;
  }
  return set;
}

function categoryOf(relPath: string): string {
  const parts = relPath.replace(/\\/g, "/").split("/");
  return parts.length > 1 ? parts[0] : ".";
}

async function main() {
  const args = parseArgs();
  const toolDir = import.meta.dirname!;

  const srcInfo = await Deno.stat(args.src).catch(() => null);
  if (!srcInfo?.isDirectory) {
    console.error(`error: --src is not a directory: ${args.src}`);
    Deno.exit(1);
  }

  const extraTags = await loadExtraTags(toolDir);

  const packages: PackageDoc[] = [];
  let fileCount = 0;
  for await (const entry of walk(args.src, { exts: [".wurst"], includeDirs: false })) {
    if (isTestFile(entry.path)) continue;
    fileCount++;
    const rel = relative(args.src, entry.path);
    const category = categoryOf(rel);
    const text = await Deno.readTextFile(entry.path);
    packages.push(
      parseFile({
        text,
        sourcePath: "wurst/" + rel.replace(/\\/g, "/"),
        category,
        extraTags: extraTags.get(basename(entry.path, ".wurst")),
      }),
    );
  }

  packages.sort((a, b) =>
    categoryOrder(a.category) - categoryOrder(b.category) || a.package.localeCompare(b.package)
  );

  if (args.check) {
    report(packages, fileCount);
    return;
  }

  const ctx: EmitContext = {
    outDir: args.out,
    curated: await loadCurated(args.out),
    includes: await loadIncludes(args.out),
  };
  const written = await emitAll(packages, ctx);
  console.log(`Parsed ${packages.length} packages from ${fileCount} files.`);
  console.log(`Wrote ${written.length} files under ${args.out}`);
  report(packages, fileCount);
}

function report(packages: PackageDoc[], fileCount: number) {
  const noSummary = packages.filter((p) => !p.summary);
  const noEntities = packages.filter((p) => p.entities.length === 0);
  const totalEntities = packages.reduce((n, p) => n + p.entities.length, 0);
  console.log(
    `\nCoverage: ${packages.length}/${fileCount} packages, ${totalEntities} public entities.`,
  );
  if (noSummary.length) {
    console.log(`  ${noSummary.length} without a package summary:`);
    console.log("    " + noSummary.map((p) => p.package).join(", "));
  }
  if (noEntities.length) {
    console.log(`  ${noEntities.length} with no public entities:`);
    console.log("    " + noEntities.map((p) => p.package).join(", "));
  }
}

if (import.meta.main) {
  await main();
}
