---
title: Production-Ready Object Editing and Safer Calls
excerpt: A production-ready object editor in VSCode, null-safe calls, smarter project generation, quieter tooling, and major object generation and standard library updates.
date: 2026-07-16
image: /assets/images/news/w3u.png
layout: newsarticle
author: Frotty
---

The latest WurstScript updates bring one of our biggest VSCode workflows to production readiness, alongside improvements across the language, object generation, the Lua backend, Grill, and the standard library.

## A Production-Ready Object Editor in VSCode

The object editor inside the VSCode extension is now ready for production use. Warcraft III object data can be edited without leaving the editor, while the extension automatically keeps the map's binary object data and `.wts` string table in sync.

![Editing Warcraft III unit object data directly in VSCode](/assets/images/news/objeditor.png){: .img-responsive .center-block}

The editor is designed for real map data rather than isolated forms. Object references link across files, making it easy to follow the relationship between abilities, units, buffs, upgrades, and other definitions.

Rich tooltip fields also come with an in-game-style preview, so formatted text can be checked while it is being written instead of after launching Warcraft III.

![In-game-style preview of a rich Warcraft III tooltip](/assets/images/news/tooltip.webp){: .img-responsive .center-block}

Together with map archive inspection, asset previews, and map folder support from earlier releases, this turns VSCode into an increasingly complete home for day-to-day Warcraft III map development.

## Better High-Level Object Generation

High-level object generation received many fixes and enhancements. Definitions generated through the standard library wrappers are more reliable and expressive, reducing the need to fall back to raw field setters or manually repair generated data.

The Lua backend also continues to improve, with another round of fixes aimed at smoother builds and more consistent behavior between Jass and Lua output.

## First Draft of Null-Safe Calls

WurstScript now has a first version of the null-safe `?.` operator. It provides compact sugar for calls and member access that should only happen when the receiver is not `null`:

```wurst
target?.damage(50.)
```

For a basic call, this is equivalent to:

```wurst
if target != null
    target.damage(50.)
```

The receiver is evaluated only once, and call arguments are skipped when it is `null`. This first iteration intentionally covers the common cases; null-safe assignment targets and array member access are not supported yet.

## Quieter Grill Output and More Capable Workflows

Grill now keeps routine output quieter. That makes command results easier for humans to scan and, importantly, spends fewer tokens when coding agents read build and test output.

A new command can export object definitions, making existing map objects easier to bring into a source-driven workflow.

The `grill generate` wizard has also grown beyond the initial setup questions announced earlier this year. The complete workflow asks for the target Warcraft III patch and then automatically provisions Core Jass together with the matching standard library branch. A newly generated project therefore starts with the right game API and dependencies instead of requiring manual version alignment.

## Updated Standard Library and Reforged Assets

The standard library's bundled assets and related data have been refreshed against the latest Warcraft III: Reforged game files. This keeps asset-backed systems and object editing helpers aligned with the current game.

Multibyte string support has also been improved and is now enabled by default. Standard library systems can properly handle non-Latin text without requiring projects to opt into special handling first.

These changes add up to a smoother path from a new project to a production map: generate the correctly versioned workspace, edit linked object data directly in VSCode, write safer code with less boilerplate, and build with cleaner output across both Jass and Lua targets.
