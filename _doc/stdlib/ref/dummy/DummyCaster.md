---
title: DummyCaster
layout: stdlibref
category: dummy
categoryLabel: Dummies
tags:
  - dummy
  - wc3-quirk
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/DummyCaster.wurst'
generated: true
curated: /stdlib/dummy_caster
---

Dummy casters are commonly used in custom spells to cast abilities dynamically onto targets or points.
For example hexing all units in an AoE, or impaling in multiple directions.
If your spell's effect is entirely instant, you should use `InstantDummyCaster`.
For many spells however, InstantDummyCaster is not feasible, because they
	 - are of type impale or channel
  - attach effects to the caster, like chain lightning
 - deal delayed damage (fireball, shockwave)
In all of these scenarios the unit has to stand in a place and the spell's effects are not instant.

DummyCaster uses one dummy per cast, and only removes it after a set delay, to allow effects and damage to process
Example with long delay for blizzard:

	new DummyCaster()
		..origin(casterPos)
		..owner(caster)
		..delay(15)
		..castPoint('A000', 1, OrderIds.OrderIds.blizzard, target)

The dummy caster will be recycled automatically, after the last spell's `delay` duration has expired.
You shouldn't destroy the object yourself. Just cast any amount of spells at once or shortly after and leave it.
Allocate DummyCasters dynamically on the spot and don't save them.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/DummyCaster.wurst)**

> 📖 Read the **[detailed guide](/stdlib/dummy_caster)** for hand-written examples and background.

## Classes

### DummyCaster

```wurst
public class DummyCaster
```

**Members:**

- `construct()`
- `origin(vec2 pos)`
  Sets the origin of the dummy with a z-value of 0
- `origin(vec3 pos)`
  Sets the origin of the dummy
- `owner(player owner)`
  Sets the owner of the dummy
- `delay(real delay)`
  Delay after which the dummy is recycled. Increase this if your spell is longer.
  		Default 5 seconds.
- `castImmediate(int abilityId, int lvl, int orderId) returns unit`
  Returns the casting dummy unit if the cast order was successful, or null if cast failed.
- `castTarget(int abilityId, int lvl, int orderId, widget target) returns unit`
  Returns the casting dummy unit if the cast order was successful, or null if cast failed.
- `castPoint(int abilityId, int lvl, int orderId, vec2 targetPos) returns unit`
  Returns the casting dummy unit if the cast order was successful, or null if cast failed.
