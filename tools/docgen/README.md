# stdlib docgen

Generates the auto-documentation for the [Wurst standard library](https://github.com/wurstscript/WurstStdlib2)
that powers the API reference under `/stdlib/ref/`.

It is a small, dependency-light [Deno](https://deno.com) + TypeScript tool. It parses the
`/** … */` "hotdoc" comments and public declarations out of every `.wurst` package and emits:

- `_data/stdlib_index.json`: package metadata, summaries, tags, and source links. The API
  declaration tree is rendered in the reference pages and is not duplicated in this index.
- `_doc/stdlib/ref/<category>/<Package>.md`: one reference page per package.
- `_doc/stdlib/ref/index.md`: the exhaustive grouped index.

The generator **owns** the `_doc/stdlib/ref/**` subtree and `_data/stdlib_index.json`; it
`rm -rf`s and rewrites them on every run. Hand-curated pages elsewhere under `_doc/stdlib/` are
never touched.

## Run it locally

Requires Deno 2.x and a checkout of `WurstStdlib2` next to this repo.

```sh
cd tools/docgen
# default --src is ../../../WurstStdlib2/wurst, default --out is the website repo root
deno task gen
# or point at an explicit stdlib checkout / scratch output:
deno task gen --src /path/to/WurstStdlib2/wurst --out ./_scratch
# parse-only coverage report, writes nothing:
deno task check
# regression tests for constant values, constructor docs, and rawcode links:
deno task test
```

## How parsing works

Hotdoc is intentionally simple: a `/** … */` block on the line(s) immediately above a
declaration (`function` / `class` / `interface` / `enum` / `tuple` / `module` / `constant`).
Wurst enforces indented blocks, so there is no nesting to worry about. A line-based pass is
enough. See `parser.ts` for the details and `types.ts` for the data model.

Both tab and four-space indentation are supported. Public class constants retain their
initializer values and documentation in the member list, alongside constructors and methods.
Class constants have case-sensitive anchors such as `#AbilityIds-blizzard`. Compact generated rawcode
comments (`'AHbz' / AbilityIds.blizzard`) link to those anchors when the referenced constant is
part of the generated API. Code examples and unknown references are left unchanged.

A package's summary is, in order of preference: a doc block directly above the `package` line;
the doc of the entity whose name matches the package (e.g. `HashMap`); or the first multi-line
narrative block in the file.

## Augmenting a generated page

- Add `Package: /stdlib/<path>` to [`_data/stdlib_curated.yml`](../../_data/stdlib_curated.yml)
  to link a hand-written guide from the reference page.
- Add `_includes/stdlib_curated/<Package>.md` to transclude extra prose into the page.
- Add capability tags in [`tags.yml`](./tags.yml).

The generator reads all of these but never writes them, so regeneration stays idempotent.

## Files

| File | Purpose |
| --- | --- |
| `main.ts` | CLI: walk source, parse, sort, emit, report coverage |
| `parser.ts` | Line-based hotdoc + declaration extractor |
| `types.ts` | `PackageDoc` / `Entity` data model |
| `categories.ts` | Folder → label map and display ordering |
| `hotdoc.ts` | Hotdoc body → Jekyll markdown (fences `>` examples) |
| `emit.ts` | JSON + per-package pages + reference index |
| `tags.yml` | Optional capability tags |
