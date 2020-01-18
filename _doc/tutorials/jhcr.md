---
title: Hot Code Reload Guide
excerpt: Learn how to update code in a running map with JHCR
date: 2019-03-29
icon:
  type: fa
  name: fa-share-square
color: green
author: peq
layout: tutorialdoc
---

# Jass Hot Code Reload

Wurst has integrated support for JHCR to reload code while the map is running.
This allows you to iterate quickly, because it is not necessary to test the map from the beginning after every code change.

## Installation

If you have not installed Wurst and Visual Studio Code yet, you should first check out the [Setup Guide](/start).

Then to setup JHCR:

1. [Download JHCR](https://www.hiveworkshop.com/threads/jass-hot-code-reload.313811/) and extract it to a folder on your machine.
2. Open the Visual Studio Code settings and change the entry for `wurst.jhcrExe` to the jhcr executable you extracted in step 1. For example `C:\apps\jhcr.exe`. (This step is not necessary if you make jhcr.exe available on your system path)
3. (Not sure if necessary) Enable `Allow Local Files` by changing your registry.
4. (optional) Change the Visual Studio Code setting `wurst.customMapDataPath` to point to the path where Warcraft stores custom map data.
    This is usually something like `C:\Users\YourName\Documents\Warcraft III\CustomMapData` or `C:\Users\YourName\OneDrive\Dokumente\Warcraft III\CustomMapData`. This path will be passed to the `--preload-path` option of Jass Hot Code Reload (JHCR).
    If you do not specify this path, Wurst will try to find the correct folder automatically.

## Usage

To use Hot Code Reload, simply run your map using your map with the `wurst.hotstartmap` command:

 - Press `F1`
 - Search for `wurst: Run a Wurst map with Jass Hot Code Reload (JHCR)` and hit `Enter`
 - Select the map to run and press `Enter`

After Warcraft has started you can edit your code and when you want to load your changes into the running WC3 instance you simply run the the `wurst.hotreload` command:

 - Press `F1`
 - Search for `wurst: Reload code for a Wurst map started with Jass Hot Code Reload (JHCR)` and hit `Enter`
 - Wait until the compilation has finished
 - Switch back to the Game and hit `ESC` to trigger the reload.

## Advanced Usage

If you want to use these commands often, you can assign keyboard shortcuts for them in Visual Studio Code.
