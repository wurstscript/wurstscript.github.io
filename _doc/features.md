---
title: Features
excerpt: WurstScript as an integrated Warcraft III development platform.
date: 2026-04-10
icon:
  type: fa
  name: fa-cube
color: blue
layout: tutorials
heading: Features
navigation:
  - /features/vscode
  - /features/backends
  - /features/map-formats
  - /features/agents
---

WurstScript is more than a programming language. It is a patch-aware Warcraft III development toolchain: Grill selects the target game patch and fetches the matching core Jass definitions and standard library, while the compiler, CLI, and VS Code tooling use that same target consistently.

This lets one ecosystem support classic Warcraft III installations and modern Reforged clients at the same time. Older patches can receive Jass output and layered MPQ game data, while Reforged projects can use Lua and CASC game data. The editor, client detection, map runner, asset browser, and model viewer all fit into that same workflow.

| Target | Typical output | Installed game data |
| --- | --- | --- |
| Classic / pre-Reforged patch | Jass | Layered MPQ archives |
| Reforged | Lua or Jass | CASC storage |
