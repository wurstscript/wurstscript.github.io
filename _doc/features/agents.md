---
title: AI Agent Support
excerpt: Built-in AGENTS.md files so AI coding agents understand and verify your Wurst project.
date: 2026-04-10
icon:
  type: fa
  name: fa-magic
color: purple
author: Frotty
layout: doc
---

WurstScript projects include built-in support for AI coding agents. `grill` can add an `AGENTS.md` file to the project root that gives AI assistants (Claude, Copilot, Cursor, and others) the information they need to work effectively with WurstScript code.

## How It Works

`AGENTS.md` is opt-in: `grill generate` and `grill install` ask whether to add it, and you can decide explicitly with the `--with-agents` / `--no-agents` flags. The generated file describes:

- The WurstScript language essentials, preferred style, and common pitfalls
- Project structure conventions (`wurst/`, `wurst.build`, dependencies)
- The stdlib-first rule: use library wrappers instead of raw Jass natives
- The two compiler backends (Jass and Lua) and how they differ
- Verification commands agents should run before finishing changes
- Where to read more on demand (stdlib and dependency notes, the online manual), so agents keep their context lean and pull in details only when needed

AI agents reading this file can answer questions, suggest code, and make changes that fit the conventions of a Wurst project without needing to be trained on WurstScript specifically.

## Verification Commands

The generated agent instructions point agents at the same small verification commands humans use:

```bash
grill typecheck --quiet
grill test --quiet
```

Quiet mode only prints errors and the final result, keeping agent context small. When something fails, agents rerun narrowly, e.g. `grill test NAME` for a specific unit test.

## Adding It to a Project

For a new project:

```bash
grill generate my-map --with-agents
```

For an existing project:

```bash
grill install --with-agents
```

Without the flag, `grill` simply asks during setup.

## Keeping It Up to Date

The template is versioned. `grill install` detects when a project's `AGENTS.md` was generated from an older template and suggests refreshing it. Commit the file to version control so the whole team — and their agents — benefit.
