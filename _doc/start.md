---
title: Installation
excerpt: Install WurstScript and set up your first project.
date: 2025-12-08
icon:
  type: fa
  name: fa-paper-plane
color: green
------------

WurstScript is a programming language and modding toolkit working in unison to create Warcraft 3 maps.
This guide explains the streamlined setup using the updated VSCode extension, which now manages compiler updates and the CLI automatically.

## Prerequisites

WurstScript editor support is provided via the VSCode extension.
The extension now **downloads, installs, and updates both the compiler and the CLI (`grill`) automatically**, requiring no manual setup for most users.

### VSCode

[* *{: .fa .fa-download} Download VSCode](https://code.visualstudio.com/){: .btn .btn-primary}

### Wurst Extension

Install the VSCode [Wurst language support extension](https://marketplace.visualstudio.com/items?itemName=peterzeller.wurst).

## Activate the Extension

After installation, open a Wurst project or any `.wurst` file.
The extension initializes itself and installs all required components.
You can also trigger setup manually via the command palette (F1):

* `>wurst: Install`
* `>wurst: New Wurst Project`

Once activated, the extension will keep your compiler up-to-date in the background.

## Creating and Working With Projects

The extension ships with `grill`, which it installs for you.
Add the `~/.wurst` folder to your PATH so the `grill` command is available everywhere.
See this guide: [https://www.java.com/en/download/help/path.xml](https://www.java.com/en/download/help/path.xml)

For regular users, the only grill command you normally need is:

### Install project dependencies

Run inside your project root:

```
grill install
```

This sets up dependencies for a new project or updates an existing one.

### Add a new dependency

```
grill install https://github.com/Frotty/wurst-astar-jps
```

This adds the dependency to your project and updates it.

### Opening a project

Open the project’s root folder in VSCode:

```
code my-wurst-project
```

{: .answer}
* *{: .fa .fa-exclamation-circle} Open the folder containing your `wurst.build` file.

After opening the project, selecting a `.wurst` file will activate the language server.
Compilation, map building, and other workflows are available directly through VSCode commands (`F1` → search for “wurst”).

---

## Optional: CLI Usage for Non-VSCode Users

If you prefer using WurstScript without VSCode, or you want full manual control, you can enable standalone CLI usage.

### Create a new project (CLI-only)

```
grill generate my-wurst-project
```

### Update the compiler manually

```
grill install wurstscript
```

This is no longer required when using VSCode, as the extension manages compiler updates automatically.

---

## Graphical User Interface

> Deprecated

Running `WurstSetup.jar` without arguments opens the legacy GUI installer.
This workflow is no longer recommended.

---

If you are new to WurstScript but not new to programming, continue with the
[* *{: .fa .fa-external-link-square} Beginner's Guide](tutorials/wurstbeginner.html).
