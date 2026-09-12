---
title: Support for Warcraft III 3.0
excerpt: Reforged 3.0 joins WurstScript's supported patch targets, with updated tools, standard library support, and new native APIs.
date: 2026-09-13
image: /assets/images/news/wurst-perfect.png
layout: newsarticle
author: Frotty
---

Warcraft III: Reforged 3.0.0 has arrived alongside **Forsaken Kingdom**, the first new official Warcraft III campaign in more than two decades. The paid campaign follows the last days of Lordaeron and the rise of the Forsaken, while the free 3.0 update brings substantial changes for players and mapmakers alike.

## Patch 3.0 Joins the Supported Targets

WurstScript supports building maps for different Warcraft III patches rather than tying every project to one game version. Projects can target older patches or current Reforged releases and compile to either Jass or Lua, with the appropriate core definitions and standard library for the selected target.

Support for Reforged 3.0 has now been added to the tools and standard library, including the patch's new flows and native API additions. You can select the version and backend that fit your map while still taking advantage of the latest functionality when targeting 3.0.

## Updating an Existing Project

Grill keeps an existing project's patch target unchanged, so `grill install` will not automatically move a project from 2.0 to 3.0. To opt in, update the target in `wurst.build`:

```yaml
wc3Patch: v3.0
```

Make sure the Wurst VS Code extension is up to date, then refresh the project dependencies:

```bash
grill install
```

The command updates dependencies such as the standard library and prepares the core JASS definitions for the selected patch. Your existing Jass or Lua backend choice remains unchanged. New projects, and older projects without a recorded `wc3Patch`, are offered the patch selector by Grill with 3.0 as the default.

The new scripting surface includes natives for resetting a unit's attack cooldown, changing the remaining cooldown of a unit ability, enabling or disabling a unit's aura abilities, and more. The update also adds a broad set of World Editor features, including expanded lighting, fog and water controls, a free camera, per-player HUD selection, and new doodad and minimap options.

Whether you are maintaining an older Jass map, building a modern project with Lua, or moving between supported patch targets, Wurst lets you keep the workflow that fits your project. Update your Wurst installation and project dependencies through the usual workflow to build for 3.0.

Read the full [Warcraft III: Reforged: Forsaken Kingdom patch notes](https://us.forums.blizzard.com/en/warcraft3/t/warcraft-iii-reforged-forsaken-kingdom-patch-notes/38400).
