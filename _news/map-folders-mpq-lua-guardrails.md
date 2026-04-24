---
title: Map Folders, MPQ Tooling, and Lua Jass Shimming
excerpt: Map folder support, MPQ inspection and previews in VSCode, binary format read support, and the Jass shim pass for seamless Lua backend switching.
date: 2026-04-10
image: /assets/images/news/lua.png
layout: newsarticle
author: Frotty
---

This update brings map folder support for the Reforged editor, new MPQ tooling in the VSCode extension, rudimentary read support for most Warcraft III binary formats, and a significant Jass shim pass that makes the Lua backend behave like Jass for the cases that matter most.

## Map Folder Support

The Reforged World Editor can load and save maps as plain folders rather than packed MPQ archives, as long as the folder name ends in `.w3x` or `.w3m`. WurstScript now supports these map folders natively.

This means you can open, build, and run a map that lives as an unpacked directory on disk, which integrates naturally with version control and makes diffing map changes much easier.

## MPQ Inspection and Extraction in VSCode

The VSCode extension gained an MPQ inspector that lets you browse the contents of a `.w3x`/`.w3m` file directly in the editor without needing the World Editor.

From there you can extract individual files or use the new **Export to Folder** action, which unpacks the entire map archive into a folder — matching the `.w3x`/`.w3m` folder format described above. This pairs well with the map folder support: open a legacy map, export it to a folder, and from that point on work with it as a plain directory.

The inspector also has better asset integration now. Icons can be previewed directly, and Ctrl-clicking asset paths opens a preview for the referenced model or texture, making it much faster to check whether an imported path resolves to the file you expected.

Under the hood, there is now rudimentary read support for most Warcraft III binary formats. That gives the tooling a broader view into map data and lays the groundwork for richer inspection and editor features in future updates.

## Lua Jass Shimming

The Lua backend now applies a dedicated **Jass shim pass** to the generated Lua code. The goal is to emulate Jass runtime behavior in places where plain Lua would act differently — so that code written for the Jass backend keeps working on Lua without any user-side changes.

The most common case is natives called with `null`. In Jass, this is well-defined: most natives simply return a default value. In plain Lua the same call raises a nil error and crashes. With the shim pass, the behavior matches Jass:

```
GetUnitX(null)  -- Jass: returns 0.0
                -- plain Lua: nil error
                -- shimmed Lua: returns 0.0
```

The same principle applies across the native surface — integer, real, boolean, and string returns all fall back to their Jass defaults when called with null handles, rather than erroring.

**Handle ID safety.** `GetHandleId` in Jass returns stable integers that code commonly stores and compares. In Lua the equivalent is fragile and a known source of desyncs. The compiler replaces `GetHandleId` usage with a safe alternative that avoids this class of problem entirely.

The net effect is that switching a map from the Jass backend to the Lua backend should not require hunting down null-handling differences or desync-prone patterns in user code. See the [Jass and Lua Backends](/features/backends.html) page for a full breakdown.
