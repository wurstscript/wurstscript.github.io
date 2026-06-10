---
title: UpgradeObjEditing
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - object-data
  - objediting
  - upgrades
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/UpgradeObjEditing.wurst'
generated: true
curated: /stdlib/upg_objed
---

Use this class to create upgrade definitions. Constructors provide a "Clean"
	upgrade definition, without any research cost or effects. Using the
	addEffectXXX() methods will add additional effects, with a limit of 4
	effects. Do not use the setEffect methods from the W3Q baseclass.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/UpgradeObjEditing.wurst)**

> 📖 Read the **[detailed guide](/stdlib/upg_objed)** for hand-written examples and background.

**Re-exports:** `ObjEditingCommons`

## Classes

### W3QDefinition

```wurst
public class W3QDefinition
```

**Members:**

- `getNewId() returns int`
- `getBaseId() returns int`
- `getLevels() returns int`
- `construct(int newId, int baseId)`
- `construct(int newId, int levels, int baseId)`
- `setButtonPositionX(int value)`
- `setButtonPositionY(int value)`
- `setClass(UpgradeClass value)`
- `setGoldCostBase(int value)`
- `setGoldCostIncrement(int value)`
- `setLevels(int value)`
- `setLumberCostBase(int value)`
- `setLumberCostIncrement(int value)`
- `setRace(Race value)`
- `setTimeBase(int value)`
- `setTimeIncrement(int value)`
- `setTransferWithUnitOwnership(bool value)`
- `setIcon(int level, string value)`
- `setRequirements(int level, string value)`
  Comma separated list of ids for tech requirements.
- `setRequirementsLevels(int level, string value)`
  Comma separated list of ints corresponding to list of tech requirements
  		provided by setRequirements.
- `setEditorSuffix(int level, string value)`
- `setHotkey(int level, string value)`
- `setName(int level, string value)`
- `setTooltip(int level, string value)`
- `setTooltipExtended(int level, string value)`
- `presetIcon(StringLevelClosure lc)`
- `presetRequirements(StringLevelClosure lc)`
  Comma separated list of ids for tech requirements.
- `presetRequirementsLevels(StringLevelClosure lc)`
  Comma separated list of ints corresponding to list of tech requirements
  		provided by setRequirements.
- `presetEditorSuffix(StringLevelClosure lc)`
- `presetHotkey(StringLevelClosure lc)`
- `presetName(StringLevelClosure lc)`
- `presetTooltip(StringLevelClosure lc)`
- `presetTooltipExtended(StringLevelClosure lc)`
- `setEffectType(int effectIndex, UpgradeEffectType effectType)`
- `setEffectBase(int effectIndex, real value)`
- `setEffectIncrement(int effectIndex, real value)`
- `setEffectCode(int effectIndex, string value)`
- `setEffect(int effectIndex, UpgradeEffectType effectType, real base)`
- `setEffect(int effectIndex, UpgradeEffectType effectType, real base, real increment)`
- `setEffect(int effectIndex, UpgradeEffectType effectType, real base, real increment, string codeId)`

### UpgradeDefinition

```wurst
public class UpgradeDefinition extends W3QDefinition
```

**Members:**

- `getEffectCount() returns int`
- `construct(int newId)`
- `construct(int newId, int levels)`
- `override function setEffectType(int effectIndex, UpgradeEffectType effectType)`
- `override function setEffectBase(int effectIndex, real value)`
- `override function setEffectIncrement(int effectIndex, real value)`
- `override function setEffectCode(int effectIndex, string value)`
- `override function setEffect(int effectIndex, UpgradeEffectType effectType, real base)`
- `override function setEffect(int effectIndex, UpgradeEffectType effectType, real base, real increment)`
- `override function setEffect(int effectIndex, UpgradeEffectType effectType, real base, real increment, string codeId)`
- `addEffectAbilityLevelBonus(int base, int increment, string abilCode)`
  Increases the level of an ability
- `addEffectAddUltravision()`
  Allows effected units to see as far at night as they see during the day.
- `addEffectApplyAttackUpgradeBonus()`
  Increases the base damage of units by their "Attack Upgrade Bonus" field
- `addEffectApplyDefenseUpgradeBonus()`
  Increases the defense of units by their "Defense Upgrade Bonus" field
- `addEffectAttackDamageBonus(int base, int increment)`
  Bonus to base damage of attacks. Supports negative bonuses.
- `addEffectAttackDamageLoss(int base, int increment)`
  Increases the unit's damage loss by a set amount. This effects line or bounce attacks!
- `addEffectAttackDiceBonus(int base, int increment)`
  Increases the number of Attack Dice on attacks
- `addEffectAttackRangeBonus(int base, int increment)`
  Increases the attack range of attacks
- `addEffectAttackSpeedBonus(real base, real increment)`
  Percentage increase on attack speed. Note: 0.1 = 10%.
- `addEffectAttackSpillDistanceBonus(int base, int increment)`
  Upgrades the distance "Artillery (Line)" attack types travel. For example
  		Glaive Throwers use this.
- `addEffectAttackSpillRadiusBonus(int base, int increment)`
  Upgrades the radius of "Artillery (Line)" attack types (over the distance
  		they travel).
- `addEffectAttackTargetCountBonus(int base, int increment)`
  Increases the number of attack targets that a Missile (bounce) weapon type will bounce to.
- `addEffectAuraDataBonus(real base, real increment)`
  This is used to increase the damage of Kodo's command auras in melee. Use
  		at your own risk on other auras.
- `addEffectDefenseTypeChange(int base)`
  Changes the effected units' armor type by *adding or removing this value
  		from their current armor type*.The following table describes the index
  		for each armor type:
  			small = 0
  			medium = 1
  			large = 2
  			fortified = 3
  			normal = 4
  			hero = 5
  			divine = 6
  			unarmored = 7
  
  		Resulting armor type indexes under 0 or greater than 7 will result in
  		broken unit armors. Negative integers also do work.
  
  		Examples. Unit has "Large" armor. You upgrade a type change of 1, the unit
  		now has fortified armor (this is what Orc Reinforced Burrows does). Having
  		an armor type of large and applying 7 to it will give the unit an undefined,
  		breaking their armor type.
- `addEffectEnableAttacks(AttacksEnabled base)`
  Changes the attacks enabled for the effected units.
- `addEffectEnableAttacksRooted(AttacksEnabled base)`
  Changes the attacks enabled for the effected units when rooted.
- `addEffectEnableAttacksUprooted(AttacksEnabled base)`
  Changes the attacks enabled for the effected units when rooted.
- `addEffectGoldHarvestBonus(int base, int increment)`
  Increases gold harvested by Harvest abilities.
- `addEffectGoldHarvestBonusEntangle(int base, int increment)`
  Increases gold harvested by Gold Harvest Entangled abilities. Apply to the
  		entangled mine.
- `addEffectHitPointBonus(int base, int increment)`
  Flat increase to hitpoints.
- `addEffectHitPointBonusPercent(real base, real increment)`
  Percent increase to base hitpoints. Note: 0.1 = 10% increase
- `addEffectHitPointRegeneration(real base, real increment)`
  Percent bonus increase to hitpoint regeneration. Note: 0.1 = 10% increase
- `addEffectLumberHarvestBonus(int base, int increment)`
  Increases lumber capcity on "gather" type abilities.
- `addEffectMagicImmunity()`
  Adds magic immunity to unit's effected
- `addEffectManaPointBonus(int base, int increment)`
  Flat bonus to max mana points.
- `addEffectManaPointBonusPercent(real base, real increment)`
  Percent bonus to max mana. Note: 0.1 = 10%.
- `addEffectManaRegeneration(real base, real increment)`
  Percent bonus to mana regeneration. Note: 0.1 = 10%.
- `addEffectMovementSpeedBonus(int base, int increment)`
  Flat bonus to movement speed.
- `addEffectMovementSpeedBonusPercent(real base, real increment)`
  Percent bonus to base movement speed. Note: 0.1 = 10%.
- `addEffectRaiseDeadDurationBonus(int base, int increment)`
  Increases the lifetime of skeletons raised via the Raise Dead ability.
- `addEffectSightRangeBonus(int base, int increment)`
  Increases sight range of units effected.
- `addEffectSpikedBarricades(int base, int increment)`
  Damage dealt by the Spiked Barricades ability to melee enemy attackers on attack.
- `addEffectUnitAvailabilityChange(bool available, string unitId)`
  Changes availabilty of units. Note: the unit MUST have this upgrade as
  		an "Upgrade Used" or it will have no effect. Look at Troll Berserker upgrade
  		for an example of this usage.

## Enums

### UpgradeClass

```wurst
public enum UpgradeClass
```

**Values:** `NONE`, `Armor`, `Artillery`, `Melee`, `Ranged`, `Caster`

### UpgradeEffectType

```wurst
public enum UpgradeEffectType
```

**Values:** `NONE`, `AbilityLevelBonus`, `AddUltravision`, `ApplyAttackUpgradeBonus`, `ApplyDefenseUpgradeBonus`, `AttackDamageBonus`, `AttackDamageLoss`, `AttackDiceBonus`, `AttackRangeBonus`, `AttackSpeedBonus`, `AttackSpillDistanceBonus`, `AttackSpillRadiusBonus`, `AttackTargetCountBonus`, `AuraDataBonus`, `DefenseTypeChange`, `EnableAttacks`, `EnableAttacksRooted`, `EnableAttacksUprooted`, `GoldHarvestBonus`, `GoldHarvestBonusEntangle`, `HitPointBonus`, `HitPointBonusPercent`, `HitPointRegeneration`, `LumberHarvestBonus`, `MagicImmunity`, `ManaPointBonus`, `ManaPointBonusPercent`, `ManaRegeneration`, `MovementSpeedBonus`, `MovementspeedBonusPercent`, `RaiseDeadDurationBonus`, `SightRangeBonus`, `SpikedBarricades`, `UnitAvailabilityChange`
