---
title: WurstScript Compiler Update v2.0
excerpt: Versioned compiler releases replace nightlies, with compiler version pinning in VS Code, faster builds and tests, and more Lua improvements.
date: 2026-10-15 00:00:00 +0200
image: /assets/images/news/performance.png
layout: newsarticle
author: Frotty
---

Compiler development is picking up pace, and WurstScript is moving from nightly builds to proper releases using **semantic versioning**. The v2.0 release series also brings significantly faster map builds and test runs, more control over compiler updates in VS Code, and continued improvements to the Lua backend.

## Versioned Releases Instead of Nightlies

Previously, each push to the compiler's main development branch replaced the nightly build. Compiler updates now come from deliberate, versioned releases, starting with [v2.0.0](https://github.com/wurstscript/WurstScript/releases/tag/v2.0.0). Development continues between releases, but a development commit no longer automatically becomes a compiler update.

Versions follow the `MAJOR.MINOR.PATCH` format: major versions signal incompatible changes, minor versions add functionality while preserving compatibility, and patch versions deliver compatible fixes. This gives each compiler release a clear identity and makes it easier to track changes, compare versions, and report issues with the exact compiler version involved.

The first follow-up, [v2.0.1](https://github.com/wurstscript/WurstScript/releases/tag/v2.0.1), is already available with further build performance improvements and fixes.

## Choose When to Update in VS Code

The Wurst VS Code extension now lets you choose a compiler version and keep it pinned. Open the Command Palette and run **Wurst: Choose Compiler Version**, or use the compiler status menu to select a release. An explicit version choice stays pinned until you select **Follow latest stable** to resume update offers.

You can also disable compiler update notifications. This gives you control over when to move a project to a newer compiler, whether you want to follow new releases or stay with a known version while finishing a map.

Update the Wurst VS Code extension to get the new controls. Existing nightly installations are offered a migration to a stable release.

## Faster Map Builds and Test Runs

Recent compiler work removes repeated processing from the build pipeline. Compile-time execution, name resolution, and MPQ archive handling have all received optimizations, and map builds avoid unnecessary repeat type checks.

With v2.0.1, map builds and runs can reuse the editor's already checked project model, avoiding redundant project rebuilds, model copies, and type checks. Together, these changes make map builds and test runs significantly faster, shortening the wait between editing code and trying it out.

Build cancellation is safer too: cancelling a build or run preserves the editor's shared project state.

## More Lua Improvements

Work on the Lua backend continues alongside the build improvements. More standard library data structures now compile to near-native Lua, reducing runtime overhead and improving performance in maps using Lua mode.

The recent updates also include various other optimizations and bug fixes across the compiler and tooling. For background on choosing a backend, see [Jass and Lua Backends](/features/backends.html).

## Changelog and Feedback

Read the [compiler release notes and full changelogs](https://github.com/wurstscript/WurstScript/releases) for the changes in each version. The [WurstScript repository](https://github.com/wurstscript/WurstScript) is the place to follow compiler development and [report compiler issues](https://github.com/wurstscript/WurstScript/issues). Include your compiler version when reporting a problem so it is easier to reproduce.
