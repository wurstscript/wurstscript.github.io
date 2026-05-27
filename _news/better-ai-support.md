---
title: Better AI & CI Support
excerpt: Optional AGENTS.md context, targeted verification commands, macOS support, generated GitHub workflows, and refreshed Docker-backed CI for Wurst projects.
date: 2026-05-14
image: /assets/images/news/wurst-ai.png
layout: newsarticle
author: Frotty
---

Wurst projects are getting better AI and CI support: they are easier to work on with coding agents, cleaner to verify locally, and simpler to run across development machines and continuous integration.

## Agent-Ready Projects

New and existing Wurst repositories can now add an `AGENTS.md` file for AI coding tools. It is not forced into every project by default: `grill` can ask whether to add it during project setup or updates, and the VSCode extension can surface a prompt when a project does not have one yet.

The file gives coding agents the project context they need: where Wurst source lives, how the build file is structured, which commands are expected, and how to verify changes before handing them back.

The important verification commands are intentionally small and predictable:

```bash
grill typecheck
grill test NAME
```

`grill typecheck` checks the project without running the full test suite. `grill test NAME` runs a specific unit test, which gives agents a fast way to validate the exact area they changed.

## macOS Support

Wurst now fully supports macOS alongside Windows and Linux. That means the local toolchain and the usual `grill` workflow can be used across the three major desktop platforms.

## Better Project Generation and CI Scaffolding

`grill generate` was also improved. It now asks a few setup questions during project creation, including the patch target and whether the project should use Lua or Jass mode.

The generator can also provide premade GitHub workflows, giving new projects a ready starting point for continuous integration.

## Docker for CI

For CI environments, the existing Wurst Docker image was updated so builds can run with a consistent, current toolchain. This pairs well with the generated GitHub workflows and keeps verification close to the same commands developers and agents run locally.
