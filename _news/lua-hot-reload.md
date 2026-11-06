---
title: Lua hot reload for single-player maps
excerpt: Save a compatible Wurst edit in VS Code and try it in the same running Warcraft III game.
date: 2026-11-06
image: /assets/images/news/hot-reload.png
layout: newsarticle
author: Frotty
---

Start a Lua map from VS Code, change a Wurst function, and save. Compatible edits take effect in the running Warcraft III game, so you can test changes without losing your place or resetting live state.

## Try it

Use **WurstScript 2.1.0 or newer**, **Wurst for VS Code 0.12.32 or newer**, and a project with `scriptMode: LUA` in `wurst.build`. We verified the full workflow on Windows with Warcraft III Reforged `3.0.1.24371`. [Compiler release](https://github.com/wurstscript/WurstScript/releases/tag/v2.1.0) · [VS Code extension](https://marketplace.visualstudio.com/items?itemName=peterzeller.wurst)

1. In the VS Code Command Palette, run **Wurst: Hot run wurstscript map** and select your map.
2. Once the single-player game is running, edit a Wurst function that the map calls during play and save the file.
3. Check the in-game hot-reload message and try the changed behavior. If you've turned off `wurst.hotReloadOnSave`, run **Wurst: Hot reload code** manually.

## If a reload is refused

Read the full reason in VS Code's **Wurstscript Language Server** output channel. For example, changing an existing field from `int` to `real` requires a fresh game because the running map still holds values of the original type.

To keep playing, undo the incompatible part and save again. To keep the edit, close the current game and use **Hot run** again to start with the new code. If the save failed because of a compile error, fix it and save again in the same session. [Lua hot reload guide](https://github.com/wurstscript/WurstScript/blob/master/docs/LUA_HOT_RELOAD.md)
