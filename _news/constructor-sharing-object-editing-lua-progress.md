---
title: Asset Preview and More
excerpt: Asset previews in VSCode, plus constructor chaining, object editing updates, and Lua fixes.
date: 2026-03-31
image: /assets/images/news/wire_wurst.png
layout: newsarticle
author: Frotty
---

This update is led by a new asset preview feature in the VSCode extension, together with language improvements, object editing updates, and more steady progress on the Lua backend.

## Constructor Chaining

Constructors can now call another constructor of the same class by using `this()` as the first call inside a `construct()` constructor.

That makes it much easier to reuse setup logic between constructors without duplicating code, while still keeping initialization explicit and readable.

## Updated Object Editing Packages

The standard library object editing packages have been updated and fixed to stay in line with the latest Warcraft III game data.

This means generated object editing code can rely on more accurate and up-to-date wrappers again, which should make object definitions easier to understand and maintain.

## Enriched Wurst Output for Existing Map Data

Object editing Wurst output generated from existing map data is now enriched by using standard library wrappers instead of raw setters.

So code that previously looked like this:

```wurst
@compiletime function create_w3a_A03H()
	let def = createObjectDefinition("w3a", 'A03H', 'AHre')
	..setLvlDataUnreal("acdn", 1, 0, 40.0)
	..setLvlDataInt("amcs", 1, 0, 70)
	..setLvlDataInt("Hre1", 1, 1, 1)
	..setLvlDataInt("aher", 0, 0, 0)
```

now becomes:

```wurst
@compiletime function create_w3a_A03H()
	new AbilityDefinitionPaladinResurrection('A03H')
	..setCooldown(1, 40.0)
	..setManaCost(1, 70)
	..setNumberofCorpsesRaised(1, 1)
	..setHeroAbility(false)
```

The new form is much more descriptive, easier to scan, and a better starting point when working with generated object data.

## VSCode Asset Preview

The VSCode extension can now display `.blp`, `.dds`, and `.mdx` files directly, giving you a quick preview of common asset files in a Wurst repository without needing the Warcraft III editor or other external tools.

![Preview of the VSCode asset viewer](/assets/images/news/model_viewer.png){: .img-responsive .center-block}

## Lua Backend Stabilization

There have also been more Lua updates continuing the stabilization of the Lua backend.

This area has made great progress recently, and most maps now seem to work fine on Battle.net. The main remaining compatibility problems appear to be around W3Champions.
