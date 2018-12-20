---
title: Dummy Casting
sections:
- Intro
---

### Intro

Dummy casters are commonly used in custom spells to cast abilities dynamically onto targets or points.
For example hexing all units in an AoE, or impaling in multiple directions.

### Instant spells

For spells that aren't channel or impale, which only deal instant or no damage and have no effects attached to the caster, you should use `InstantDummyCaster`.
It will use only one unit to cast all spells.

```wurst
import InstantDummyCaster

InstantDummyCaster.castTarget(DUMMY_PLAYER, AbilityIds.polymorph, 1, OrderIds.polymorph, target)
```

### Delayed spells

Channeled spells, impale, or any that do damage after the cast has occured, should be cast with a `DummyCaster` object which will stay for a while.
Therefore damage will be dealt from the correct player and effects attached to the caster such as chainlightning will stay intact.
Adjust the delay parameter according to your spell's duration. You can cast multiple spells with one object, as long as they all happen before the last spell's delay time expires.
Never destroy `DummyCaster` instances manually and allcoate them on the spot.

```wurst
// Casts blizzard 4 times in cross formation around target point
new DummyCaster(casterPos)
	..owner(caster)
	..delay(15)
	..castPoint(AbilityIds.blizzard1, 1, OrderIds.OrderIds.blizzard, target + vec2(128, 0))
	..castPoint(AbilityIds.blizzard1, 1, OrderIds.OrderIds.blizzard, target + vec2(-128, 0))
	..castPoint(AbilityIds.blizzard1, 1, OrderIds.OrderIds.blizzard, target + vec2(0, 128))
	..castPoint(AbilityIds.blizzard1, 1, OrderIds.OrderIds.blizzard, target + vec2(0, -128))
```
