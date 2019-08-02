---
title: Dummy Casting
sections:
- Intro
- Making dummy spells
- Casting instant spells
- Casting delayed spells
---

### Intro

Dummy casters are commonly used in custom spells to cast abilities dynamically onto targets or points.
For example hexing all units in an AoE, or impaling in multiple directions.

### Making dummy spells

Since a regular unit will be used to dummy cast abilities, the passed abilities must have special properties.
Namely no cooldown, no manacost, high cast range, no dependencies and not being a hero spell.
The easy way to achieve this is to use `.setDummyAbility()` (recent addition, make sure your stdlib is up2date).
Then set spell dependent values like duration. Take a look at this polymorph example:

```wurst
constant POLY_DUMMY_ID = compiletime(ABIL_ID_GEN.next())

@compiletime function genPolymorph()
	new AbilityDefinitionPolymorph(POLY_DUMMY_ID)
	..setDummyAbility()
	..setDurationNormal(1, 5.)
```


### Casting instant spells

For spells that aren't channel or impale, which only deal instant or no damage and have no effects attached to the caster, you should use `InstantDummyCaster`.
It will use only one unit to cast all spells. Take a look at this example with the polymorph dummy from above, which works because it is instant:

```wurst
import InstantDummyCaster

InstantDummyCaster.castTarget(DUMMY_PLAYER, POLY_DUMMY_ID, 1, OrderIds.polymorph, target)
```

### Casting delayed spells

Channeled spells, impale, or any that do damage after the cast has occured, should be cast with a `DummyCaster` object which will stay for a while.
Therefore damage will be dealt from the correct player and effects attached to the caster such as chainlightning will stay intact.
Adjust the delay parameter according to your spell's duration. You can cast multiple spells with one object, as long as they all happen before the last spell's delay time expires. `BLIZZARD_DUMMY_ID` refers to a blizzard dummy spell created equally to the polymorph one above.
Never destroy `DummyCaster` instances manually and allocate them on the spot.

```wurst
// Casts blizzard 4 times in cross formation around target point
new DummyCaster(casterPos)
	..owner(caster)
	..delay(15)
	..castPoint(BLIZZARD_DUMMY_ID, 1, OrderIds.blizzard, target + vec2(128, 0))
	..castPoint(BLIZZARD_DUMMY_ID, 1, OrderIds.blizzard, target + vec2(-128, 0))
	..castPoint(BLIZZARD_DUMMY_ID, 1, OrderIds.blizzard, target + vec2(0, 128))
	..castPoint(BLIZZARD_DUMMY_ID, 1, OrderIds.blizzard, target + vec2(0, -128))
```

### Applying orb effects

Using `DummyCaster`, you can also apply orb effects, like frost attack or poison attack, to a target unit. You should use the `attackonce` order.

```wurst
// Poisons target unit
new DummyCaster().castTarget(AbilityIds.poisonSting, 1, OrderIds.attackonce, target)
```
