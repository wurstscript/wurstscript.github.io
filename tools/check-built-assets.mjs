import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const site = join(root, "_site");
const htmlFiles = [];

function collectHtml(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      collectHtml(path);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      htmlFiles.push(path);
    }
  }
}

if (!existsSync(site) || !statSync(site).isDirectory()) {
  throw new Error("Build output is missing. Run `bundle exec jekyll build` first.");
}

collectHtml(site);

const missing = new Set();
let checked = 0;
for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, "utf8");
  const references = html.matchAll(
    /(?:href|src)=["'](\/assets\/plugins\/[^"'?#]+)/g
  );
  for (const [, reference] of references) {
    checked += 1;
    const asset = join(site, reference.slice(1));
    if (!existsSync(asset)) {
      missing.add(`${reference} (from ${relative(site, htmlFile)})`);
    }
  }
}

if (missing.size > 0) {
  throw new Error(`Missing built assets:\n${[...missing].join("\n")}`);
}

console.log(`Checked ${checked} local asset references across ${htmlFiles.length} pages.`);
