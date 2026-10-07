---
title: TargetsAllowed
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/TargetsAllowed.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/TargetsAllowed.wurst)**

## Classes

### TargetsAllowed

```wurst
public class TargetsAllowed
```

**Members:**

- <a id="targetsallowed-air"></a> `static constant air = "air"`
  Can only target air units.
- <a id="targetsallowed-alive"></a> `static constant alive = "alive"`
  Can only target alive units (non-skeleton).
- <a id="targetsallowed-allies"></a> `static constant allies = "allies"`
  Can only target allied units, but not units on the same team as casting unit.
- <a id="targetsallowed-ancient"></a> `static constant ancient = "ancient"`
  Can only target ancients i.e only the night elf buildings that can uproot.
- <a id="targetsallowed-dead"></a> `static constant dead = "dead"`
  Can only target dead units (corpses, skeletons).
- <a id="targetsallowed-debris"></a> `static constant debris = "debris"`
  Can only target debris, e.g crates.
- <a id="targetsallowed-decoration"></a> `static constant decoration = "decoration"`
  TODO: unknown what this target allows.
- <a id="targetsallowed-enemies"></a> `static constant enemies = "enemies"`
  Can only target enemy units.
- <a id="targetsallowed-friend"></a> `static constant friend = "friend"`
  Can only target allied and own units.
- <a id="targetsallowed-ground"></a> `static constant ground = "ground"`
  Can only target units without flying/hover movement type.
- <a id="targetsallowed-hero"></a> `static constant hero = "hero"`
  Can only target hero units.
- <a id="targetsallowed-invulnerable"></a> `static constant invulnerable = "invulnerable"`
  Can only target invulnerable targets.
- <a id="targetsallowed-item_t"></a> `static constant item_t = "item" // Suffixed with _t to prevent collision with native type item`
  Can only target items lying on the ground.
- <a id="targetsallowed-mechanical"></a> `static constant mechanical = "mechanical"`
  Can only target mechanical units catapults etc.
- <a id="targetsallowed-neutral"></a> `static constant neutral = "neutral"`
  Can only target units which belong to neutral players (Neutral Hostile, Neutral Passive)
- <a id="targetsallowed-nonancient"></a> `static constant nonancient = "nonancient"`
  Can only target non-ancient units.
- <a id="targetsallowed-none"></a> `static constant none = "none"`
  No targets allowed.
- <a id="targetsallowed-nonhero"></a> `static constant nonhero = "nonhero"`
  Can only target non-heroes.
- <a id="targetsallowed-nonsapper"></a> `static constant nonsapper = "nonsapper"`
  Can only target non-suicidal units.
- <a id="targetsallowed-notself"></a> `static constant notself = "notself"`
  Cannot target casting unit.
- <a id="targetsallowed-organic"></a> `static constant organic = "organic"`
  Can only target non-mechanical units.
- <a id="targetsallowed-player_t"></a> `static constant player_t = "player" // Suffixed with _t to prevent collision with native type player`
  TODO: this is unknown what it does.
- <a id="targetsallowed-playerunits"></a> `static constant playerunits = "playerunits"`
  Only able to target units from the same player as casting unit.
- <a id="targetsallowed-sapper"></a> `static constant sapper = "sapper"`
  Can only target suicidal units such as Goblin Sapper.
- <a id="targetsallowed-self"></a> `static constant self = "self"`
  Can only target caster.
- <a id="targetsallowed-structure"></a> `static constant structure = "structure"`
  Can target buildings.
- <a id="targetsallowed-terrain"></a> `static constant terrain = "terrain"`
  Can only target landscape such as grass, water or dirt.
- <a id="targetsallowed-tree"></a> `static constant tree = "tree"`
  Can only target trees.
- <a id="targetsallowed-vulnerable"></a> `static constant vulnerable = "vulnerable"`
  Can only target units that can take damage.
- <a id="targetsallowed-wall"></a> `static constant wall = "wall"`
  TODO: uncertain if this limits valid targets to gates.
- <a id="targetsallowed-ward"></a> `static constant ward = "ward"`
  Limit to units which are wards (Statis Traps, etc).
