---
title: Hot Code Reload Guide
excerpt: Learn how to update code in a running map with JHCR
date: 2025-01-06
icon:
  type: fa
  name: fa-share-square
color: green
author: peq
layout: doc
---

# Jass Hot Code Reload

**Jass Hot Code Reload (JHCR)** is an integrated feature in Wurst that allows you to reload your Warcraft III map's code while the game is still running. This drastically speeds up iteration because you do not need to restart the map (and replay from the beginning) whenever you change your code.

## Why Use Hot Code Reload?

- **Faster Iterations**: Quickly test and validate changes without fully restarting Warcraft III.
- **Smooth Development**: Keep your in-game session active, preventing the overhead of reloading your entire map.
- **Testing Flexibility**: Tweak specific features or values on the fly to see how they behave in real time.

## Installation

> **Prerequisite**: If you have not installed Wurst and Visual Studio Code yet, start with the [Wurst Setup Guide](/start) to get your environment ready.

Once you have Wurst and Visual Studio Code, follow these steps to set up JHCR:

1. **Download JHCR**
   [Download the latest version here](https://www.hiveworkshop.com/threads/jass-hot-code-reload.313811/) and extract it to a folder on your machine.

2. **Configure the JHCR Executable Path**
   - Open the Visual Studio Code settings.
   - Locate the setting `wurst.jhcrExe`.
   - Point it to the JHCR executable you extracted in step 1 (e.g., `C:\apps\jhcr.exe`).

3. **Set the Custom Map Data Path**
   - In Visual Studio Code, find the `wurst.customMapDataPath` setting.
   - Set it to the folder where Warcraft III stores custom map data. Typically, this is one of the following:
     ```
     C:\Users\YourName\Documents\Warcraft III\CustomMapData
     ```
     or
     ```
     C:\Users\YourName\OneDrive\Documents\Warcraft III\CustomMapData
     ```
   - This path is passed to JHCR’s `--preload-path` option.
   - If you do not specify this path, Wurst will attempt to detect the correct folder automatically.

## Usage

Once everything is set up, you can run your map with JHCR directly from Visual Studio Code. This is called **Hot Code Reload**.

### 1. Start Your Map with JHCR

1. Press `F1` in Visual Studio Code.
2. Search for the command: `wurst: Hot Run a Wurst map with Jass Hot Code Reload (JHCR)`
3. Press `Enter` to select it.
4. Choose the map you want to run and press `Enter` again.

Warcraft III will now start and load your map with JHCR support.

### 2. Reload Your Code On-the-Fly

Once your map is running in Warcraft III:

1. Make changes to your Wurst code in Visual Studio Code.
2. Press `F1`.
3. Search for the command: `wurst: Hot reload code for a Wurst map started with Jass Hot Code Reload (JHCR)`
4. Press `Enter`.
5. Wait for the compilation to finish in the VS Code console.
6. Switch back to the Warcraft III window and press `ESC` to trigger the actual reload.

You should see a message like: `Code reloaded, status: 1`

This indicates a successful reload. Other status codes include:
- **Status 2**: No reload was necessary (no changes detected).
- **Status 3**: Reload failed (often due to too many changes or incompatible edits).

## Advanced Usage

If you find yourself reloading and restarting your map frequently, you can speed up your workflow even more by assigning keyboard shortcuts in Visual Studio Code for the following commands:

- `wurst: Hot Run a Wurst map with Jass Hot Code Reload (JHCR)`
- `wurst: Hot reload code for a Wurst map started with Jass Hot Code Reload (JHCR)`

To do this, open **Keyboard Shortcuts** in VS Code (usually under **File > Preferences > Keyboard Shortcuts** or by pressing `Ctrl+K, Ctrl+S` on Windows) and set bindings for the commands above.

## Limitations

- **Existing Data**: Only function calls made after the reload will use the updated code. Data created beforehand (such as existing class instances) will not be retroactively changed.
- **Package Initializers**: These are not re-run after a reload. For example, a print statement in a package initializer will not be called again.
- **Stateful Objects**: If you have objects that rely on initialization logic, they won’t automatically re-initialize on reload.

### Example 1: Static Print

```wurst
init
    print("Hello")
```

After reloading, you will not see this message re-printed, because initializers aren’t re-run.

### Example 2: Periodic Print

```
init
    doPeriodically(1.) cb ->
        print("Hello") // If you change this to "There" and reload, the new text will show.
```

Here, the text printed every second will change after a successful reload.

Despite these constraints, JHCR is still extremely useful for experimenting with small features, fine-tuning values, and rapidly iterating on game logic.

Enjoy faster development and real-time testing with Jass Hot Code Reload!
