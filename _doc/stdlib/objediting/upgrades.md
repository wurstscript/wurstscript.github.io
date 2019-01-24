---
title: Creating upgrade object data
sections:
- Intro
- UpgradeDefinition
---

### Intro

In warcraft III upgrades are researchable technologies that improve or unlock certain effects.
Each upgrade can have 4 of those effects, chosen from a fixed pool wrapped by the `UpgradeEffectType` enum.

### UpgradeDefinition

`UpgradeDefinition` will create a clean upgrade without effects based on magic sentry.
Use the `addEffectXXX` functions to add additional effects, with a maximum of 4 per upgrade.
Each function has detailed documentation which you should check out to understand what it does.

Example:

```wurst
let MY_UPGRADE_ID = compiletime(UPGD_ID_GEN.next())

@compiletime function genUpg()
	new UpgradeDefinition(MY_UPGRADE_ID)
	..setLevels(10)
	..presetName(lvl -> "Damage Upgrade level -" + lvl.toString())
	..presetTooltip(lvl -> "Research Damage Upgrade " + lvl.toString())
	..setGoldCostBase(25)
	..setGoldCostIncrement(10)
	..addEffectAttackDamageBonus(5, 10)
```
