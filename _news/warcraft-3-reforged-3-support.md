---
title: Support for Warcraft III 3.0
excerpt: Reforged 3.0 joins WurstScript's patch targets with matching core definitions, native wrappers, and Grill-assisted alignment for Jass and Lua projects.
date: 2026-09-13 00:00:00 +0200
image: /assets/images/news/reforged-3.0.png
layout: newsarticle
author: Frotty
---

Warcraft III 3.0 is now a supported WurstScript target. The compiler tooling, core definitions, Grill workflow, and standard library have been updated so projects can opt into the new patch without giving up Wurst's support for older Warcraft III versions.

## Patch 3.0 Joins the Supported Targets

WurstScript keeps the Warcraft III patch target separate from the script backend. A project can target an older patch or Reforged 3.0 and independently compile to Jass or Lua. The selected patch controls the matching native definitions and standard library, while the backend remains the project's choice.

For 3.0 projects, Wurst now provides the matching core JASS files and standard library. The standard library also wraps the new native APIs with Wurst-friendly functions for cameras, doodads and destructables, effects, frames, equipment and items, input, units, cinematics, terrain fog, and HD water.

## Aligning a Project with Grill

Make sure the Wurst VS Code extension is up to date so the current compiler and Grill CLI are installed. You can then compare the project's target with the installed Warcraft III client:

```bash
grill patch
```

This check is read-only. If Grill reports a mismatch, align the project explicitly:

```bash
grill patch align
```

Grill detects the exact client patch from the Warcraft III path configured in VS Code, or through automatic installation detection. Alignment updates `wc3Patch`, the official standard library branch, and Grill-managed core JASS together. It creates a `wurst.build.bak` backup and preserves custom standard library forks.

`grill install` does not silently change an existing project's patch target. It keeps the official standard library on the branch required by the current `wc3Patch` and suggests alignment when the installed client targets a different supported patch.

## Manual Update

You can still select 3.0 manually by changing `wurst.build`:

```yaml
wc3Patch: v3.0
```

Then refresh the project dependencies and managed core definitions:

```bash
grill install
```

This changes only the Warcraft III target. Existing Jass or Lua backend settings remain unchanged, so projects can adopt the 3.0 APIs without changing how their map script is emitted.
