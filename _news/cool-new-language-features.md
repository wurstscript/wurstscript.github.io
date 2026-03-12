---
title: Cool New Language Features
excerpt: New control-flow and closure features from the recent months.
date: 2026-03-12
image: /assets/images/news/wscode.png
layout: newsarticle
author: Frotty
---

In the past months, WurstScript gained several small but very useful language improvements. Here is a quick roundup.

## `continue` in Loops

You can now use `continue` in loop bodies to skip directly to the next iteration.

```wurst
for u in allUnits
	if not u.isAlive()
		continue
	u.heal(25.)
```
See the manual section on [Loops](/manual#loops).

## `return` Anywhere in Closure Statement Blocks

For closure statement blocks (`begin ... end` or lambda blocks), `return` is no longer restricted to the final statement.

```wurst
doAfter(0.5) ->
	if caster == null
		return
	caster.say("Still here.")
```
See [Lambdas and Closures](/manual#lambdas-and-closures) and the [begin-end expression](/manual#begin-end-expression) section in the manual.

## Closure Self-Reference via `it`

Inside a closure body, `it` now references the closure object itself. This makes self-management patterns simpler and avoids passing the closure as an extra parameter.

```wurst
let cb = doPeriodically(0.05) ->
	if not missile.exists()
		destroy it
		return
	missile.update()
```
More context is in [Lambdas and Closures](/manual#lambdas-and-closures).

## Overriding the Index Operator `[]`

Operator overloading now also supports the index operator `[]`, making custom container APIs more natural to use.

```wurst
let value = myContainer[3]
myContainer[3] = 42
```
For naming and operator details, see [Operator Overloading](/manual#operator-overloading) in the manual.

These features are all about reducing boilerplate while keeping code explicit and readable.
