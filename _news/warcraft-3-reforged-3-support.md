---
title: Support for Warcraft III 3.0
excerpt: Warcraft III 3.0 is now supported by the Wurst tools and standard library.
date: 2026-09-13 00:00:00 +0200
image: /assets/images/news/reforged-3.0.png
layout: newsarticle
author: Frotty
---

WurstScript now supports Warcraft III 3.0. The tools include matching core JASS definitions, and the standard library provides Wurst wrappers for the new natives. Projects targeting 3.0 can compile to either Jass or Lua.

## Update with Grill

Update the Wurst VS Code extension, then check the project against the installed Warcraft III client:

```bash
grill patch
```

If Grill reports a mismatch, align the project:

```bash
grill patch align
```

This updates `wc3Patch`, the official standard library branch, and managed core JASS. Grill creates `wurst.build.bak` before changing the project and leaves custom standard library forks unchanged.

## Manual Update

To select 3.0 manually, change `wurst.build`:

```yaml
wc3Patch: v3.0
```

Then run:

```bash
grill install
```

`grill install` does not change an existing patch target automatically. The project's Jass or Lua backend setting is unaffected by either update method.
