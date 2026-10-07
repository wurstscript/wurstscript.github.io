import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const site = path.join(root, "_site");
async function files(dir, extension) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => entry.isDirectory()
    ? files(path.join(dir, entry.name), extension)
    : entry.name.endsWith(extension) ? [path.join(dir, entry.name)] : []));
  return nested.flat();
}
const sources = await files(path.join(root, "_doc/stdlib/ref"), ".md");
const anchors = new Map();
const pages = new Map();
for (const source of sources) {
  const relative = path.relative(path.join(root, "_doc"), source).replace(/\\/g, "/");
  const url = "/" + relative.replace(/\.md$/, ".html");
  const html = await readFile(path.join(site, url.slice(1)), "utf8");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, `Duplicate anchors in ${url}`);
  anchors.set(url, new Set(ids));
  pages.set(url, html);
}
let links = 0;
for (const [url, html] of pages) {
  for (const match of html.matchAll(/href="(\/stdlib\/ref\/[^"#]+\.html)(?:#([^"\s]+))?"/g)) {
    const target = match[1];
    assert(anchors.has(target), `${url} links to missing page ${target}`);
    if (match[2]) assert(anchors.get(target).has(decodeURIComponent(match[2])), `Missing fragment ${target}#${match[2]}`);
    links++;
  }
}
const index = JSON.parse(await readFile(path.join(root, "_data/stdlib_index.json"), "utf8"));
assert(index.every((pkg) => !("entities" in pkg)), "Package index contains a duplicate API tree");
assert((await stat(path.join(root, "_data/stdlib_index.json"))).size < 1024 * 1024, "Package index exceeds 1 MB");
const ability = pages.get("/stdlib/ref/objediting/AbilityObjEditing.html");
assert(ability.includes("data-api-browser"), "Missing package browser");
assert(!ability.includes("<details"), "Ability directory contains expanded member documentation");
assert(ability.length < 1024 * 1024, "Ability directory exceeds 1 MB");
console.log(`Verified ${pages.size} reference pages and ${links} internal links; package index is compact.`);
