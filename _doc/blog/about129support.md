---
title: About 1.29 Support
layout: post
excerpt: Short headsup about 1.29 and Wurst
icon:
  type: fa
  name: fa-rss
color: green
author: Frotty
date: 2018-04-13
banner: /assets/images/empty.png
---
------
## Patch Compatability

As of yesterday the 1.29 compatability changes have been merged and are available as update via the setup tool.
This also contains the new natives and classes with instance limit increased to 32768.

Community member @crojewsk already created a Pull Request for the standard library containing extension function wrappers for the new natives, which will soon be merged.

With everything up to date, runmap should work as expected.

## 24 Players

Our wurst.build integration still doesn't support configuring players, forces and loadingscreen options.
These features will soon be implemented however, and then provide direct access to all new features from this patch.

For more information on the new patch [click here](https://www.hiveworkshop.com/threads/warcraft-iii-patch-1-29.304803/).

## Troubleshooting

> __I get wurst errors when trying to use the new natives!__

- Try deleting `common.j` and `Blizzard.j` files from your `_build` folder. Then use runmap to regenerate them.

> __Runmap starts, but the game window is black with a black error dialog__

- This happens when a map with the same name exists in the game's root maps directory and the user-data map directory. Try deleting `/Maps/Test/WurstRunMap.w3x` from your game root directory.
