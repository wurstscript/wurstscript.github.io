---
title: VSCode + JassDoc + Performance Update
excerpt: Tooling and performance improvements across WurstScript.
date: 2026-03-03
image: /assets/images/news/wurst-perfect.png
layout: newsarticle
author: Frotty
---


Today's release focuses on developer workflow and reliability.

## Better VSCode Workflow

We expanded VSCode integration to reduce context switching and make the day-to-day edit/build/test loop smoother. More project actions are now available directly in the editor workflow, so common tasks need fewer manual steps and less setup friction.

Rich highlight support via inlay hints was also improved, making important type and code-flow details visible directly while editing.

![](/assets/images/news/run-btn.webp){: .img-responsive}

The overall goal was to keep focus in one place: write code, run, iterate, and inspect results without jumping between tools.

## JassDoc for Natives

We integrated [JassDoc](https://github.com/lep/jassdoc), a cool community project, directly into the tooling.

If JassDoc is available for a native, or if a function is a pure wrapper around that native, the JassDoc entry is shown in documentation info. This gives faster context while coding and reduces the need to search external references.

## Faster Builds and Fixes

This update includes targeted performance work across the compiler/toolchain plus a broad set of bug fixes. The optimization focus is on keeping compile times lower for real projects and reducing overhead in repeated build cycles.

Alongside speedups, we addressed reliability issues to make diagnostics and generated output more predictable.
