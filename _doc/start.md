---
title: Installation
excerpt: Install WurstScript and set up your first project.
date: 2026-03-02
icon:
  type: fa
  name: fa-paper-plane
color: green
---

WurstScript is a programming language and modding toolkit for Warcraft 3 maps.
This guide covers the current streamlined setup with VS Code.

## Prerequisites

### VS Code

[*&nbsp;*{: .fa .fa-download} Download VS Code](https://code.visualstudio.com/){: .btn .btn-primary}

### Wurst Extension

Install the VS Code [Wurst language support extension](https://marketplace.visualstudio.com/items?itemName=peterzeller.wurst).

The extension now installs and updates the compiler and CLI for you.
`grill` is added to PATH automatically by the extension setup.

## Quick Start

After installing the extension, use one of these paths:

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
3. Follow the prompts.

For this flow, you usually do not need to run `grill install` manually right away.

## Running Your Map

Use the play button in VS Code to run your project quickly.

- Open any `.wurst` file and click the play button.
- You can also open a `.w3x` or `.w3m` map and use the same run action.

## Useful Commands

- `>wurst: Install`
- `>wurst: New Wurst Project`

Open the command palette with `F1` and search for `wurst`.

## Optional: CLI-Only Usage

If you are not using VS Code, you can still use `grill` directly.

Create a new project:

```bash
grill generate my-wurst-project
```

Add a dependency:

```bash
grill install https://github.com/Frotty/wurst-astar-jps
```

---

If you are new to WurstScript, continue with the beginner walkthrough:

[*&nbsp;*{: .fa .fa-external-link-square} Open Beginner Guide](https://wurstlang.org/wurstbeginner){: .btn .btn-primary}
