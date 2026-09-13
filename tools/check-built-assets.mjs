import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const site = join(root, "_site");
const htmlFiles = [];
const textFiles = [];

function collectSiteFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      collectSiteFiles(path);
    } else if (entry.isFile()) {
      if (entry.name.endsWith(".html")) {
        htmlFiles.push(path);
      }
      if (/\.(?:html|css|js|json|txt|xml)$/.test(entry.name)) {
        textFiles.push(path);
      }
    }
  }
}

if (!existsSync(site) || !statSync(site).isDirectory()) {
  throw new Error("Build output is missing. Run `bundle exec jekyll build` first.");
}

collectSiteFiles(site);

const missing = new Set();
const missingNewsPages = new Set();
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
  const newsReferences = html.matchAll(
    /href=["'](\/news\/[^"'?#]+\.html)/g
  );
  for (const [, reference] of newsReferences) {
    const page = join(site, reference.slice(1));
    if (!existsSync(page)) {
      missingNewsPages.add(`${reference} (from ${relative(site, htmlFile)})`);
    }
  }
}

if (missing.size > 0) {
  throw new Error(`Missing built assets:\n${[...missing].join("\n")}`);
}

if (missingNewsPages.size > 0) {
  throw new Error(`Missing built news pages:\n${[...missingNewsPages].join("\n")}`);
}

const forbiddenDashes = textFiles
  .filter((file) => /[\u2013\u2014]/.test(readFileSync(file, "utf8")))
  .map((file) => relative(site, file));

if (forbiddenDashes.length > 0) {
  throw new Error(
    `Built files contain en or em dashes:\n${forbiddenDashes.join("\n")}`
  );
}

console.log(`Checked ${checked} local asset references across ${htmlFiles.length} pages.`);
