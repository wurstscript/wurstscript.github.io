---
title: VS Code Integration
excerpt: Rich editor support for the full Wurst development workflow.
date: 2026-04-10
icon:
  type: fa
  name: fa-code
color: blue
author: Frotty
layout: doc
---

The [Wurst VS Code extension](https://marketplace.visualstudio.com/items?itemName=peterzeller.wurst) turns VS Code into a full Warcraft III development environment. Installing it is all that is needed to get started — the extension manages the compiler and CLI automatically.

## Language Support

The extension provides first-class editing support for `.wurst` files:

- **Syntax highlighting** and semantic tokens
- **Hover documentation** for functions, types, and variables — including native documentation pulled from [JassDoc](https://github.com/lep/jassdoc) where available
- **Inlay hints** for type information and code flow
- **Go-to-definition** and **find references** across the full project
- **Inline diagnostics** from the compiler — errors and warnings appear in the editor as you type
- **Code completion** for identifiers, packages, and native functions

## Build and Run

The play button in VS Code runs your map directly:

1. Open any `.wurst` file or a `.w3x`/`.w3m` map file.
2. Click the run button (or use `F1` → `Wurst: Run`).

The extension builds the project, patches the map, and launches Warcraft III. No terminal needed for the common path.

## Asset Preview

The extension can render common Warcraft III asset formats directly in the editor without needing the World Editor or external tools:

| Format | Description |
|---|---|
| `.blp` | Blizzard texture format |
| `.dds` | DirectDraw Surface texture |
| `.mdx` | Warcraft III model format |

Open any of these files from the VS Code explorer and they are displayed inline.

## Installed Game Data

The extension is the editor-facing part of Wurst’s broader patch-aware workflow. It detects the available Warcraft III client when possible and uses the selected game data for previews and map tooling, whether the project targets classic Jass or modern Reforged Lua.

Wurst can also read assets directly from the Warcraft III installation — not only from files inside your project. This works with both Reforged CASC storage and classic Warcraft III MPQ installations.

For classic installations, Wurst follows the game’s layered archive model, resolving files through the base game, expansion, locale, and patch archives so patched assets override their older versions:

`war3.mpq` → `war3local.mpq` → `war3x.mpq` → `war3xlocal.mpq` → `war3patch.mpq`

That means the asset browser, object metadata, icons, model viewer, textures, and model thumbnails can use the same game data that an older Warcraft III installation uses. Set `wurst.wc3path` to your Warcraft III installation directory if it is not detected automatically.

## MPQ Inspector

`.w3x` and `.w3m` map archives can be browsed directly in VS Code:

- **Browse** the archive file tree without unpacking
- **Extract** individual files from the archive
- **Export to Folder** — unpacks the entire archive into a `.w3x` or `.w3m` folder for use with version control or the map folder workflow (see [Map Formats](/features/map-formats.html))

## Command Palette

Common Wurst actions are available via `F1`:

- `Wurst: Run` — build and launch the map
- `Wurst: Build` — compile without running
- `Wurst: Install` — install/update the toolchain
- `Wurst: New Wurst Project` — project scaffolding
