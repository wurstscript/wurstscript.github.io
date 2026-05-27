---
title: AI Agent Support
excerpt: Built-in AGENT.md files so AI coding agents understand and verify your Wurst project.
date: 2026-04-10
icon:
  type: fa
  name: fa-magic
color: purple
author: Frotty
layout: doc
---

WurstScript projects include built-in support for AI coding agents. When you create or install a project with `grill`, an `AGENT.md` file is added to the project root that gives AI assistants (Claude, Copilot, Cursor, and others) the information they need to work effectively with WurstScript code.

## How It Works

`grill` writes `AGENT.md` to new and updated projects automatically. This file describes:

- The WurstScript language and its relationship to Jass and Lua
- Project structure conventions (`wurst/`, `wurst.build`, dependencies)
- The standard library and how packages are imported
- The two compiler backends and when each is used
- Common patterns used in Wurst maps
- Verification commands agents should run before finishing changes

AI agents reading this file can answer questions, suggest code, and make changes that fit the conventions of a Wurst project without needing to be trained on WurstScript specifically.

## Verification Commands

The generated agent instructions point agents at the same small verification commands humans use:

```bash
grill typecheck
grill test NAME
```

Use `grill typecheck` to check the whole project quickly. Use `grill test NAME` to run a specific unit test after changing a focused part of the codebase.

## No Setup Required

`AGENT.md` is created automatically. If you are starting a new project:

```bash
grill generate my-map
```

If you are adding Wurst to an existing project:

```bash
grill install
```

In both cases `AGENT.md` is written alongside the rest of the project scaffolding.

## Keeping It Up to Date

`AGENT.md` is managed by `grill`. Running `grill install` on an existing project will update it to the current version. You can commit it to version control so the whole team benefits.
