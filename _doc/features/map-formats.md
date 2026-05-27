---
title: Map Formats
excerpt: Work with MPQ archives and unpacked map folders transparently.
date: 2026-04-10
icon:
  type: fa
  name: fa-folder-open
color: green
author: Frotty
layout: doc
---

WurstScript supports both of Warcraft III's map storage formats: the classic MPQ archive and the unpacked folder format introduced with Reforged.

## MPQ Archives

`.w3x` and `.w3m` files are MPQ archives — binary containers that pack all map assets and data into a single file. This is the traditional format and remains the default output of the World Editor.

Wurst reads MPQ archives natively for building and running. No unpacking step is needed.

## Map Folders

The Reforged World Editor can also load and save maps as plain folders, as long as the folder name ends in `.w3x` or `.w3m`. All the files that would normally be packed into the MPQ archive are stored directly on disk instead.

Wurst supports map folders as a first-class input. A map stored as a folder behaves identically to a packed archive from Wurst's perspective — open, build, and run work the same way.

**Why use folders:**

- Full version control over map data — every file is a plain file, so diffs and history work naturally
- No binary merge conflicts
- Works well with the Export to Folder workflow described below

## Export to Folder

The VS Code extension can convert an existing MPQ map to folder format directly:

1. Open a `.w3x` or `.w3m` map in VS Code using the MPQ inspector.
2. Use **Export to Folder** from the context menu or command palette.
3. The extension unpacks the entire archive into a new folder with the same `.w3x`/`.w3m` name.

From that point, the folder can be opened in the World Editor and used with Wurst exactly like the original archive — but now all files are accessible individually for editing, scripting, and version control.

## Which Format to Use

For new projects, starting with the folder format and keeping it in version control from the beginning is the cleanest approach.

For existing maps, use Export to Folder once and commit the result. The history before the export will be the original binary archive; everything after will be readable diffs.
