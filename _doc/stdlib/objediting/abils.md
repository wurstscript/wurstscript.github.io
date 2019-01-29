---
title: Creating ability object data
sections:
- Intro
- Normal Spells
- Level dependent values
- Channel Spells
- Tooltip Generation
---

### Intro

In Warcraft III most abilities, unlike units, are unique and thus the parent ability must be specified to gain access to custom data fields.
The standard library wraps this nicely by providing classes for each unique spell in `AbilityObjEditing` and presets for channel based custom spells `ChannelAbilityPreset`.

### Normal Spells

To generate and modify normal spells, use the correspoding class from `AbilityObjEditing`.
E.g. if you want to generate a fireball ability, use `AbilityDefinitionFireBolt` or `AbilityDefinitionPaladinDivineShield` for divine shield.


```wurst
public constant FIREBOLT_ID = compiletime(ABIL_ID_GEN.next())

@compiletime function gen()
	new AbilityDefinitionFireBolt(FIREBOLT_ID, AbilityIds.firebolt)
		..setLevels(3)
		..setName("My Fireball Spell")
		..presetDamage(lvl -> 100. * lvl)
```

#### Level dependent values

Another specialty of abilities is that they have multiple levels, which allow some fields to have different values depending on the level.
In the example above we used `lvl -> 100. * lvl` to atuomatically fill levels based on a simple calculation.
Essentially it is the same as writing the following lines:

```wurst
	..setDamage(1, 100.)
	..setDamage(2, 200.)
	..setDamage(3, 300.)
```

But in a more condensed form, and one which automatically adapts if you change the amount of levels the spell has.

### Channel Spells

Most custom spells are based on channel. It is a very customizable ability without an effect made exactly for this purpose.
By default channel spells emit some odd behaviour, like being invisible and having to "channel" the spell for a duration of time, like Blizzard or Fire Rain.
You can reset all these properties by passing `true` as last argument in the constructor.

Take a look at this example jump spell:

```wurst
public constant JUMP_ID = compiletime(ABIL_ID_GEN.next())

@compiletime function genJump()
	new ChannelAbilityPreset(JUMP_ID, 3, true) // by passing true, we disable channel behaviour
	..presetTargetTypes(Targettype.POINT) // Set the target type for all levels
	..presetTooltipNormal(lvl -> "[|cffFFCC00W|r] |cff7BB5F7Jump - Level " + lvl.toString())
	..presetTooltipNormalExtended(lvl -> "Jumps into the target direction. Allows you to jump down, but not up, cliffs.")
	..presetCooldown(lvl -> 5. - lvl) // [4, 3, 2] seconds cooldown
	..setManaCost(lvl -> 0)
	..presetCastRange(lvl -> 9999.)
	..presetHotkey("W")
	..presetButtonPosNormal(1, 2)
	..presetIcon(Icons.bTNBootsOfSpeed)
```

### Tooltip Generation

The standard library provides an interface to listen to each data field that has been set on an ability definition. Using a snippet like [Ability-Tooltip-Generator](https://github.com/Frotty/Ability-Tooltip-Generator) you can easily generate tooltips.

![](/assets/images/stdlib/tooltipgen.png){: .img-responsive}

```wurst
	let tgen = new AbilityTooltipGenerator("An ordinary snowball.")
	new ChannelAbilityPreset(SNOWBALL_SPELL_ID, 4, true, tgen)
	..setHeroAbility(false)
	..presetButtonPosNormal(0, 2)
	..presetTargetTypes(Targettype.POINT)
	..tooltipStartListen()
	..presetHotkey("Q")
	..setName("Snowball")
	..presetIcon("BTNFrostBolt")
	..presetCooldown(lvl -> 1.75 - (lvl / 4))
	..presetManaCost(lvl -> 4 - (lvl / 3).toInt())
	..presetCastRange(RANGE)
	..setLevelSkipRequirement(0)
	..tooltipStopListen()
```
