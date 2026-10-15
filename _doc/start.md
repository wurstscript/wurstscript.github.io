---
title: Installation
excerpt: Install WurstScript and set up your first project.
date: 2026-03-02
icon:
  type: fa
  name: fa-paper-plane
color: green
---

WurstScript is a patch-aware programming language and modding toolkit for Warcraft 3 maps.
This guide covers setup with VS Code and the Grill command-line tool.

## Prerequisites

### VS Code

[*&nbsp;*{: .fa .fa-download} Download VS Code](https://code.visualstudio.com/){: .btn .btn-primary}

### Wurst Extension

Install the VS Code [Wurst language support extension](https://marketplace.visualstudio.com/items?itemName=peterzeller.wurst).

The extension now installs and updates the compiler and CLI for you.
`grill` is added to PATH automatically by the extension setup.

## Quick Start

After installing the extension, use one of these paths:

> **Important:** Open the Wurst project folder itself as the VS Code workspace root. Wurst projects do not work reliably when opened as a subfolder of a larger workspace. After `grill generate my-wurst-project`, either run `code ./my-wurst-project` as shown by `grill`, or use VS Code's `File -> Open Folder...` command and select the folder that `grill generate` created.

### A) Open an existing project

1. Clone/open the project folder from version control.
2. If the project has dependencies, run:

```bash
grill install
```

3. If language features do not initialize immediately, run `F1` -> `Developer: Reload Window`.

### B) Create a new project

1. In VS Code, press `F1`.
2. Run `Wurst: New Wurst Project`.
3. Follow the prompts to choose the project name, target Warcraft III patch, and Jass or Lua output.

This command opens a terminal and runs `grill generate`, the same project wizard you can use directly from the command line.

For this flow, you usually do not need to run `grill install` manually right away.

## Target a Warcraft III Patch

Wurst supports multiple Warcraft III generations from one toolchain. The project wizard asks which patch to target and downloads the matching core Jass definitions and standard library branch. When installing dependencies in an existing project with `grill install`, Grill also asks for a patch if none is recorded in `wurst.build` yet.

This is useful for both ends of Warcraft III’s history:

- **Older MPQ-era classic patches** use Jass output and layered MPQ game data.
- **Classic CASC-era patches such as 1.30/1.31** use Jass output and CASC game data.
- **Reforged** projects can use Lua or Jass output and modern CASC game data.

The VS Code extension detects the installed client when it can, and the asset and map tooling follows the same game-data selection. You can use the current editor tools with an older MPQ installation too.

### Change an Existing Project's Patch

After updating Warcraft III, compare the installed client with your project's target. Run these commands from the project folder:

```bash
grill patch
```

If you want to move the project to the detected client's patch, run:

```bash
grill patch align
```

This updates `wc3Patch` in `wurst.build`, the official standard library branch, and managed core Jass definitions. Grill backs up changed configuration to `wurst.build.bak` and preserves the project's Jass or Lua output choice. If you use a custom standard library fork, update that dependency yourself.

To select another Warcraft III installation, pass `--wc3-path "/path/to/Warcraft III"` to either command. Running `grill install` on its own keeps an existing patch target.

## Running Your Map

Use the play button in VS Code to run your project quickly.

- Open any `.wurst` file and click the play button.
- You can also open a `.w3x` or `.w3m` map and use the same run action.

From a terminal in the project folder, `grill run` builds the map and launches it in Warcraft III. It detects the map automatically when the project root contains exactly one `.w3x` or `.w3m` map archive or folder. Otherwise, specify the map:

```bash
grill run MyMap.w3x
```

Grill uses the Warcraft III path selected during project setup, or detects an installation. You can override it with `--wc3-path "/path/to/Warcraft III"`.

## Useful Commands

- `>wurst: Install`
- `>wurst: New Wurst Project`

Open the command palette with `F1` and search for `wurst`.

## Using Grill from the Command Line

Once the toolchain is installed and `grill` is on PATH, you can create, build, and run projects from a terminal.

Create a new project and enter its folder:

```bash
grill generate my-wurst-project
cd my-wurst-project
```

The wizard is the same one launched by **Wurst: New Wurst Project** in VS Code. It configures the patch target and output mode, installs the matching standard library, and sets up the starter map.

Build and launch the starter map:

```bash
grill run
```

Use `grill build` to build without launching Warcraft III, `grill typecheck` to check your code, or `grill test` to run unit tests.

Add a dependency:

```bash
grill install https://github.com/Frotty/wurst-astar-jps
```

---

If you are new to WurstScript, continue with the beginner walkthrough:

[*&nbsp;*{: .fa .fa-external-link-square} Open Beginner Guide](https://wurstlang.org/wurstbeginner){: .btn .btn-primary}
