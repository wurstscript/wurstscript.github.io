---
title: AbilityObjEditing
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - abilities
  - object-data
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/AbilityObjEditing.wurst'
generated: true
toc: sections
curated: /stdlib/abil_objed
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/AbilityObjEditing.wurst)**

> 📖 Read the **[detailed guide](/stdlib/abil_objed)** for hand-written examples and background.

**Re-exports:** `ObjEditingNatives`, `UnitObjEditing`, `AbilityIds`

## Classes

### AbilityDefinition

```wurst
public class AbilityDefinition
```

Create ability object data at compile time. Levels start at 1; generated field presets set all levels and add tooltip properties.

**Members:**

- `getNewId() returns int`
- `getBaseId() returns int`
- `getLevels() returns int`
- `construct(int newId, int baseId)`
- `construct(int newId, int baseId, int lvls)`
- `addTooltipProperty(string pName, StringLevelClosure lc)`
- `addTooltipProperty(string pName, IntLevelClosure lc)`
- `addTooltipProperty(string pName, RealLevelClosure lc)`
- `addTooltipProperty(string pName, BooleanLevelClosure lc)`
- `registerTooltipGenerator(TooltipGenerator tgen)`
- `tooltipStartListen()`
- `tooltipStopListen()`
- `tooltipStopListen(boolean build)`
- `setName(string value)`
- `setEditorSuffix(string value)`
- `setHeroAbility(bool value)`
- `setItemAbility(bool value)`
- `setRace(Race rce)`
- `setButtonPositionNormalX(int value)`
- `setButtonPositionNormalY(int value)`
- `setButtonPositionTurnOffX(int value)`
- `setButtonPositionTurnOffY(int value)`
- `setButtonPositionResearchX(int value)`
- `setButtonPositionResearchY(int value)`
- `presetButtonPosNormal(int x, int y)`
- `presetButtonPosTurnOff(int x, int y)`
- `presetButtonPosResearch(int x, int y)`
- `setIconNormal(string value)`
- `setIconTurnOff(string value)`
- `setIconResearch(string value)`
- `presetIcon(string name)`
- `setArtCaster(string value)`
- `setArtTarget(string value)`
- `setArtSpecial(string value)`
- `setArtEffect(string value)`
- `setAreaEffect(string value)`
- `setLightningEffects(string value)`
- `setMissileArt(string value)`
- `setMissileSpeed(int value)`
- `setMissileArc(real value)`
- `setMissileHomingEnabled(bool value)`
- `setTargetAttachments(int value)`
- `setTargetAttachmentPoint(string value)`
  Target Attachment Point 1 / 'ata0'
- `setTargetAttachmentPoint1(string value)`
  Target Attachment Point 2 / 'ata1'
- `setTargetAttachmentPoint2(string value)`
  Target Attachment Point 3 / 'ata2'
- `setTargetAttachmentPoint3(string value)`
  Target Attachment Point 4 / 'ata3'
- `setTargetAttachmentPoint4(string value)`
  Target Attachment Point 5 / 'ata4'
- `setTargetAttachmentPoint5(string value)`
  Target Attachment Point 6 / 'ata5'
- `setCasterAttachments(int value)`
- `setCasterAttachmentPoint(string value)`
  Caster Attachment Point 1 / 'acap'
- `setCasterAttachmentPoint1(string value)`
  Caster Attachment Point 2 / 'aca1'
- `setSpecialAttachmentPoint(string value)`
- `setAnimationNames(string value)`
- `setTooltipNormal(int level, string value)`
- `presetTooltipNormal(StringLevelClosure lc)`
- `setTooltipTurnOff(int level, string value)`
- `presetTooltipTurnOff(StringLevelClosure lc)`
- `setTooltipNormalExtended(int level, string value)`
- `presetTooltipNormalExtended(StringLevelClosure lc)`
- `setTooltipTurnOffExtended(int level, string value)`
- `presetTooltipTurnOffExtended(StringLevelClosure lc)`
- `setTooltipLearn(string value)`
- `setTooltipLearnExtended(string value)`
- `setHotkeyLearn(string value)`
- `setHotkeyNormal(string value)`
- `setHotkeyTurnOff(string value)`
- `presetHotkey(string value)`
- `setRequirements(string value)`
- `setRequirementsLevels(string value)`
- `setCheckDependencies(bool value)`
- `setPriorityforSpellSteal(int value)`
- `setOrderStringUseTurnOn(string value)`
  Order String - Use/Turn On / 'aord'
- `setOrderStringTurnOff(string value)`
- `setOrderStringActivate(string value)`
- `setOrderStringDeactivate(string value)`
- `setEffectSound(string value)`
- `setEffectSoundLooping(string value)`
- `setLevels(int value)`
- `setRequiredLevel(int value)`
- `setLevelSkipRequirement(int value)`
- `setTargetsAllowed(int level, string value)`
- `presetTargetsAllowed(StringLevelClosure lc)`
- `setCastingTime(int level, real value)`
- `presetCastingTime(RealLevelClosure lc)`
- `setDurationNormal(int level, real value)`
- `presetDurationNormal(RealLevelClosure lc)`
- `setDurationHero(int level, real value)`
- `presetDurationHero(RealLevelClosure lc)`
- `setCooldown(int level, real value)`
- `presetCooldown(RealLevelClosure lc)`
- `setManaCost(int level, int value)`
- `presetManaCost(IntLevelClosure lc)`
- `setAreaofEffect(int level, real value)`
- `presetAreaofEffect(RealLevelClosure lc)`
- `setCastRange(int level, real value)`
- `presetCastRange(RealLevelClosure lc)`
- `setBuffs(int level, string value)`
- `presetBuffs(StringLevelClosure lc)`
- `setEffects(int level, string value)`
- `presetEffects(StringLevelClosure lc)`
- `setUnitSkinList(string value)`

### AbilityDefinitionTaunt

```wurst
public class AbilityDefinitionTaunt extends AbilityDefinition
```

'Atau' / [AbilityIds.taunt](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-taunt)

**Members:**

- `construct(int newAbilityId)`
- `setPreferFriendlies(int level, int value)`
- `presetPreferFriendlies(IntLevelClosure lc)`
- `setPreferHostiles(int level, int value)`
- `presetPreferHostiles(IntLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`
- `setNumberOfPulses(int level, int value)`
- `presetNumberOfPulses(IntLevelClosure lc)`
- `setIntervalBetweenPulses(int level, real value)`
- `presetIntervalBetweenPulses(RealLevelClosure lc)`
- `presetIntervalbetweenPulses(RealLevelClosure lc)`
- `presetNumberofPulses(IntLevelClosure lc)`
- `setIntervalbetweenPulses(int level, real value)`
- `setNumberofPulses(int level, int value)`

### AbilityDefinitionPoisonArrows

```wurst
public class AbilityDefinitionPoisonArrows extends AbilityDefinition
```

'AEpa' / [AbilityIds.poisonArrows](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-poisonArrows)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingTypes(IntLevelClosure lc)`
- `presetStackingType(StackingType stackingType, boolean flag)`
- `hasStackingType(StackingType stackingType) returns boolean`
- `setExtraDamage(int level, real value)`
- `presetExtraDamage(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionRangerColdArrows

```wurst
public class AbilityDefinitionRangerColdArrows extends AbilityDefinition
```

'AHca' / [AbilityIds.coldArrows](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-coldArrows)

**Members:**

- `construct(int newAbilityId)`
- `setStackFlags(int level, int value)`
- `presetStackFlags(IntLevelClosure lc)`
- `presetStackFlag(StackFlag stackFlag, boolean flag)`
- `hasStackFlag(StackFlag stackFlag) returns boolean`
- `setExtraDamage(int level, real value)`
- `presetExtraDamage(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionSeaWitchTornado

```wurst
public class AbilityDefinitionSeaWitchTornado extends AbilityDefinition
```

'ANto' / [AbilityIds.tornado](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tornado)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus4

```wurst
public class AbilityDefinitionAgilityBonusPlus4 extends AbilityDefinition
```

'AIa4' / [AbilityIds.agilityBonusPlus4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus4)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionAlchemistTransmute

```wurst
public class AbilityDefinitionAlchemistTransmute extends AbilityDefinition
```

'ANtm' / [AbilityIds.transmute](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-transmute)

**Members:**

- `construct(int newAbilityId)`
- `setLumberCostFactor(int level, real value)`
- `presetLumberCostFactor(RealLevelClosure lc)`
- `setAllowBounty(int level, bool value)`
- `presetAllowBounty(BooleanLevelClosure lc)`
- `setMaxCreepLevel(int level, int value)`
- `presetMaxCreepLevel(IntLevelClosure lc)`
- `setGoldCostFactor(int level, real value)`
- `presetGoldCostFactor(RealLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus3

```wurst
public class AbilityDefinitionAgilityBonusPlus3 extends AbilityDefinition
```

'AIa3' / [AbilityIds.agilityBonusPlus3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus3)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus1

```wurst
public class AbilityDefinitionAgilityBonusPlus1 extends AbilityDefinition
```

'AIa1' / [AbilityIds.agilityBonusPlus1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus1)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus2

```wurst
public class AbilityDefinitionAgilityBonusPlus2 extends AbilityDefinition
```

'AIa2' / [AbilityIds.agilityBonusPlus2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus2)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus5

```wurst
public class AbilityDefinitionAgilityBonusPlus5 extends AbilityDefinition
```

'AIa5' / [AbilityIds.agilityBonusPlus5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus5)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionThornyShieldCreep

```wurst
public class AbilityDefinitionThornyShieldCreep extends AbilityDefinition
```

'ANth' / [AbilityIds.thornyShieldCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-thornyShieldCreep)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, real value)`
- `presetDefenseBonus(RealLevelClosure lc)`
- `setReceivedDamageFactor(int level, real value)`
- `presetReceivedDamageFactor(RealLevelClosure lc)`
- `setReturnedDamageFactor(int level, real value)`
- `presetReturnedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus6

```wurst
public class AbilityDefinitionAgilityBonusPlus6 extends AbilityDefinition
```

'AIa6' / [AbilityIds.agilityBonusPlus6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus6)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionBloodMageSiphonMana

```wurst
public class AbilityDefinitionBloodMageSiphonMana extends AbilityDefinition
```

'AHdr' / [AbilityIds.siphonMana](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-siphonMana)

**Members:**

- `construct(int newAbilityId)`
- `setBonusLifeDecay(int level, real value)`
- `presetBonusLifeDecay(RealLevelClosure lc)`
- `setDrainIntervalseconds(int level, real value)`
- `presetDrainIntervalseconds(RealLevelClosure lc)`
- `setHitPointsDrained(int level, real value)`
- `presetHitPointsDrained(RealLevelClosure lc)`
- `setBonusLifeFactor(int level, real value)`
- `presetBonusLifeFactor(RealLevelClosure lc)`
- `setManaPointsDrained(int level, real value)`
- `presetManaPointsDrained(RealLevelClosure lc)`
- `setManaTransferredPerSecond(int level, real value)`
- `presetManaTransferredPerSecond(RealLevelClosure lc)`
- `setBonusManaDecay(int level, real value)`
- `presetBonusManaDecay(RealLevelClosure lc)`
- `setBonusManaFactor(int level, real value)`
- `presetBonusManaFactor(RealLevelClosure lc)`
- `setLifeTransferredPerSecond(int level, real value)`
- `presetLifeTransferredPerSecond(RealLevelClosure lc)`

### AbilityDefinitionPossessioncreep

```wurst
public class AbilityDefinitionPossessioncreep extends AbilityDefinition
```

'ACps' / [AbilityIds.possessioncreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-possessioncreep)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionPaladinDivineShield

```wurst
public class AbilityDefinitionPaladinDivineShield extends AbilityDefinition
```

'AHds' / [AbilityIds.divineShield](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-divineShield)

**Members:**

- `construct(int newAbilityId)`
- `setCanDeactivate(int level, bool value)`
- `presetCanDeactivate(BooleanLevelClosure lc)`

### AbilityDefinitionDivineShieldCreep

```wurst
public class AbilityDefinitionDivineShieldCreep extends AbilityDefinition
```

'ACds' / [AbilityIds.divineShield1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-divineShield1)

**Members:**

- `construct(int newAbilityId)`
- `setCanDeactivate(int level, bool value)`
- `presetCanDeactivate(BooleanLevelClosure lc)`

### AbilityDefinitionPurgeCreep

```wurst
public class AbilityDefinitionPurgeCreep extends AbilityDefinition
```

'ACpu' / [AbilityIds.purgeCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-purgeCreep)

**Members:**

- `construct(int newAbilityId)`
- `setHeroPauseDuration(int level, real value)`
- `presetHeroPauseDuration(RealLevelClosure lc)`
- `setUnitPauseDuration(int level, real value)`
- `presetUnitPauseDuration(RealLevelClosure lc)`
- `setMovementUpdateFrequency(int level, int value)`
- `presetMovementUpdateFrequency(IntLevelClosure lc)`
- `setAttackUpdateFrequency(int level, int value)`
- `presetAttackUpdateFrequency(IntLevelClosure lc)`
- `setManaLoss(int level, int value)`
- `presetManaLoss(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionRoarcreepSkeletalOrc

```wurst
public class AbilityDefinitionRoarcreepSkeletalOrc extends AbilityDefinition
```

'ACr1' / [AbilityIds.roarcreepSkeletalOrc](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-roarcreepSkeletalOrc)

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `presetDamageIncrease(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setPreferHostiles(int level, bool value)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `setManaRegen(int level, real value)`
- `presetManaRegen(RealLevelClosure lc)`
- `setLifeRegenerationRate(int level, real value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `setPreferFriendlies(int level, bool value)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionTauntCreep

```wurst
public class AbilityDefinitionTauntCreep extends AbilityDefinition
```

'ANta' / [AbilityIds.taunt1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-taunt1)

**Members:**

- `construct(int newAbilityId)`
- `setPreferFriendlies(int level, int value)`
- `presetPreferFriendlies(IntLevelClosure lc)`
- `setPreferHostiles(int level, int value)`
- `presetPreferHostiles(IntLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`
- `setNumberOfPulses(int level, int value)`
- `presetNumberOfPulses(IntLevelClosure lc)`
- `setIntervalBetweenPulses(int level, real value)`
- `presetIntervalBetweenPulses(RealLevelClosure lc)`
- `presetIntervalbetweenPulses(RealLevelClosure lc)`
- `presetNumberofPulses(IntLevelClosure lc)`
- `setIntervalbetweenPulses(int level, real value)`
- `setNumberofPulses(int level, int value)`

### AbilityDefinitionRejuvinationFurbolg

```wurst
public class AbilityDefinitionRejuvinationFurbolg extends AbilityDefinition
```

'ACr2' / [AbilityIds.rejuvenation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rejuvenation)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, real value)`
- `presetManaPointsGained(RealLevelClosure lc)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionPulverizecreep

```wurst
public class AbilityDefinitionPulverizecreep extends AbilityDefinition
```

'ACpv' / [AbilityIds.pulverize1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pulverize1)

**Members:**

- `construct(int newAbilityId)`
- `setHalfDamageRadius(int level, real value)`
- `presetHalfDamageRadius(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setChancetoStomp(int level, real value)`
  Chance to Stomp (%) / 'War1'
- `presetChancetoStomp(RealLevelClosure lc)`

### AbilityDefinitionBeastMasterSummonHawk

```wurst
public class AbilityDefinitionBeastMasterSummonHawk extends AbilityDefinition
```

'ANsw' / [AbilityIds.beastMasterSummonHawk](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-beastMasterSummonHawk)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionTinkererSummonFactoryLevel0

```wurst
public class AbilityDefinitionTinkererSummonFactoryLevel0 extends AbilityDefinition
```

'ANsy' / [AbilityIds.tinkererSummonFactoryLevel0](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererSummonFactoryLevel0)

**Members:**

- `construct(int newAbilityId)`
- `setSpawnInterval(int level, real value)`
- `presetSpawnInterval(RealLevelClosure lc)`
- `setLeashRange(int level, real value)`
- `presetLeashRange(RealLevelClosure lc)`
- `setSpawnUnitID(int level, string value)`
- `presetSpawnUnitID(StringLevelClosure lc)`
- `setFactoryUnitID(int level, string value)`
- `presetFactoryUnitID(StringLevelClosure lc)`
- `setSpawnUnitOffset(int level, real value)`
- `presetSpawnUnitOffset(RealLevelClosure lc)`
- `setSpawnUnitDuration(int level, real value)`
- `presetSpawnUnitDuration(RealLevelClosure lc)`

### AbilityDefinitionPolymorphcreep

```wurst
public class AbilityDefinitionPolymorphcreep extends AbilityDefinition
```

'ACpy' / [AbilityIds.polymorphcreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-polymorphcreep)

**Members:**

- `construct(int newAbilityId)`
- `setMorphUnitsGround(int level, string value)`
- `presetMorphUnitsGround(StringLevelClosure lc)`
- `setMorphUnitsWater(int level, string value)`
- `presetMorphUnitsWater(StringLevelClosure lc)`
- `setMorphUnitsAmphibious(int level, string value)`
- `presetMorphUnitsAmphibious(StringLevelClosure lc)`
- `setMorphUnitsAir(int level, string value)`
- `presetMorphUnitsAir(StringLevelClosure lc)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionBeastMasterStampede

```wurst
public class AbilityDefinitionBeastMasterStampede extends AbilityDefinition
```

'ANst' / [AbilityIds.beastMasterStampede](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-beastMasterStampede)

**Members:**

- `construct(int newAbilityId)`
- `setBeastsPerSecond(int level, int value)`
- `presetBeastsPerSecond(IntLevelClosure lc)`
- `setDamageDelay(int level, real value)`
- `presetDamageDelay(RealLevelClosure lc)`
- `setDamageRadius(int level, real value)`
- `presetDamageRadius(RealLevelClosure lc)`
- `setBeastCollisionRadius(int level, real value)`
- `presetBeastCollisionRadius(RealLevelClosure lc)`
- `setDamageAmount(int level, real value)`
- `presetDamageAmount(RealLevelClosure lc)`

### AbilityDefinitionFirelordSoulBurn

```wurst
public class AbilityDefinitionFirelordSoulBurn extends AbilityDefinition
```

'ANso' / [AbilityIds.soulBurn](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-soulBurn)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nso5'
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setDamageAmount(int level, real value)`
- `presetDamageAmount(RealLevelClosure lc)`
- `setDamagePeriod(int level, real value)`
- `presetDamagePeriod(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nso4'
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `setDamagePenalty(int level, real value)`
- `presetDamagePenalty(RealLevelClosure lc)`

### AbilityDefinitionBeastMasterSummonQuilbeast

```wurst
public class AbilityDefinitionBeastMasterSummonQuilbeast extends AbilityDefinition
```

'ANsq' / [AbilityIds.beastMasterSummonQuilbeast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-beastMasterSummonQuilbeast)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionFrenzy

```wurst
public class AbilityDefinitionFrenzy extends AbilityDefinition
```

'Afzy' / [AbilityIds.frenzy](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frenzy)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Blo2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Blo1'
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `setScalingFactor(int level, real value)`
- `presetScalingFactor(RealLevelClosure lc)`

### AbilityDefinitionMalganisSoulPreservation

```wurst
public class AbilityDefinitionMalganisSoulPreservation extends AbilityDefinition
```

'ANsl' / [AbilityIds.soulPreservation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-soulPreservation)

**Members:**

- `construct(int newAbilityId)`
- `setUnittoPreserve(int level, string value)`
- `presetUnittoPreserve(StringLevelClosure lc)`

### AbilityDefinitionBeastMasterSummonBear

```wurst
public class AbilityDefinitionBeastMasterSummonBear extends AbilityDefinition
```

'ANsg' / [AbilityIds.beastMasterSummonBear](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-beastMasterSummonBear)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionDarkRangerSilence

```wurst
public class AbilityDefinitionDarkRangerSilence extends AbilityDefinition
```

'ANsi' / [AbilityIds.silence](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-silence)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
  Chance To Miss (%) / 'Nsi2'
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionSanctuary

```wurst
public class AbilityDefinitionSanctuary extends AbilityDefinition
```

'ANsa' / [AbilityIds.sanctuary](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sanctuary)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsPerSecond(int level, real value)`
- `presetHitPointsPerSecond(RealLevelClosure lc)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`
- `setBuildingTypesAllowed(int level, string value)`
- `presetBuildingTypesAllowed(StringLevelClosure lc)`
- `setHeroRegenerationDelay(int level, real value)`
- `presetHeroRegenerationDelay(RealLevelClosure lc)`
- `setUnitRegenerationDelay(int level, real value)`
- `presetUnitRegenerationDelay(RealLevelClosure lc)`

### AbilityDefinitionShadowMeldInstant

```wurst
public class AbilityDefinitionShadowMeldInstant extends AbilityDefinition
```

'Sshm' / [AbilityIds.shadowMeldInstant](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowMeldInstant)

**Members:**

- `construct(int newAbilityId)`
- `setDayNightDuration(int level, real value)`
  Day/Night Duration / 'Shm2'
- `presetDayNightDuration(RealLevelClosure lc)`
- `setActionDuration(int level, real value)`
- `presetActionDuration(RealLevelClosure lc)`
- `setFadeDuration(int level, real value)`
- `presetFadeDuration(RealLevelClosure lc)`
- `setPermanentCloak(int level, bool value)`
- `presetPermanentCloak(BooleanLevelClosure lc)`

### AbilityDefinitionSpellShieldAOE

```wurst
public class AbilityDefinitionSpellShieldAOE extends AbilityDefinition
```

'ANse' / [AbilityIds.spellShieldAOE](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spellShieldAOE)

**Members:**

- `construct(int newAbilityId)`
- `setShieldCooldownTime(int level, real value)`
- `presetShieldCooldownTime(RealLevelClosure lc)`

### AbilityDefinitionItemAuraEndurance

```wurst
public class AbilityDefinitionItemAuraEndurance extends AbilityDefinition
```

'AIae' / [AbilityIds.itemAuraEndurance](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraEndurance)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionSpiritPigcreep

```wurst
public class AbilityDefinitionSpiritPigcreep extends AbilityDefinition
```

'ACs9' / [AbilityIds.feralSpirit1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-feralSpirit1)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionUnstableConcoction

```wurst
public class AbilityDefinitionUnstableConcoction extends AbilityDefinition
```

'Auco' / [AbilityIds.unstableConcoction](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unstableConcoction)

**Members:**

- `construct(int newAbilityId)`
- `setPartialDamageAmount(int level, real value)`
- `presetPartialDamageAmount(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`
- `setMoveSpeedBonus(int level, real value)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setPartialDamageRadius(int level, real value)`
- `presetPartialDamageRadius(RealLevelClosure lc)`

### AbilityDefinitionItemAuraDevotion

```wurst
public class AbilityDefinitionItemAuraDevotion extends AbilityDefinition
```

'AIad' / [AbilityIds.itemAuraDevotion](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraDevotion)

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `setArmorBonus(int level, real value)`
- `presetArmorBonus(RealLevelClosure lc)`

### AbilityDefinitionAttackMod

```wurst
public class AbilityDefinitionAttackMod extends AbilityDefinition
```

'AIaa' / [AbilityIds.itemAttackDamageGain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackDamageGain)

**Members:**

- `construct(int newAbilityId)`
- `setAttackModification(int level, int value)`
- `presetAttackModification(IntLevelClosure lc)`

### AbilityDefinitionMountainKingAvatar

```wurst
public class AbilityDefinitionMountainKingAvatar extends AbilityDefinition
```

'AHav' / [AbilityIds.avatar](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-avatar)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`
- `setDefenseBonus(int level, real value)`
- `presetDefenseBonus(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setHitPointBonus(int level, real value)`
- `presetHitPointBonus(RealLevelClosure lc)`

### AbilityDefinitionAIab

```wurst
public class AbilityDefinitionAIab extends AbilityDefinition
```

'AIab' / [AbilityIds.itemHeroStatBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHeroStatBonus)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionMannorothReincarnation

```wurst
public class AbilityDefinitionMannorothReincarnation extends AbilityDefinition
```

'ANrn' / [AbilityIds.reincarnation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-reincarnation)

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`
- `presetReincarnationDelay(RealLevelClosure lc)`

### AbilityDefinitionAnimateDead

```wurst
public class AbilityDefinitionAnimateDead extends AbilityDefinition
```

'AIan' / [AbilityIds.itemAnimateDead](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAnimateDead)

**Members:**

- `construct(int newAbilityId)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`
- `setNumberofCorpsesRaised(int level, int value)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`
- `setInheritUpgrades(int level, bool value)`
- `presetInheritUpgrades(BooleanLevelClosure lc)`

### AbilityDefinitionAgilityMod

```wurst
public class AbilityDefinitionAgilityMod extends AbilityDefinition
```

'AIam' / [AbilityIds.itemAgilityGain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAgilityGain)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionRainofFirecreep

```wurst
public class AbilityDefinitionRainofFirecreep extends AbilityDefinition
```

'ACrf' / [AbilityIds.rainofFire1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rainofFire1)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDamageperWave(int level, real value)`
- `presetMaximumDamageperWave(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setNumberofWaves(int level, int value)`
- `presetNumberofWaves(IntLevelClosure lc)`
- `setNumberofShards(int level, int value)`
- `presetNumberofShards(IntLevelClosure lc)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionDreadlordSleep

```wurst
public class AbilityDefinitionDreadlordSleep extends AbilityDefinition
```

'AUsl' / [AbilityIds.sleep2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sleep2)

**Members:**

- `construct(int newAbilityId)`
- `setStunDuration(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`

### AbilityDefinitionRaiseDeadCreep

```wurst
public class AbilityDefinitionRaiseDeadCreep extends AbilityDefinition
```

'ACrd' / [AbilityIds.raiseDeadCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-raiseDeadCreep)

**Members:**

- `construct(int newAbilityId)`
- `setUnitsSummonedTypeOne(int level, int value)`
- `presetUnitsSummonedTypeOne(IntLevelClosure lc)`
- `setUnitTypeForLimitCheck(int level, string value)`
- `presetUnitTypeForLimitCheck(StringLevelClosure lc)`
- `setUnitsSummonedTypeTwo(int level, int value)`
- `presetUnitsSummonedTypeTwo(IntLevelClosure lc)`
- `setUnitTypeTwo(int level, string value)`
- `presetUnitTypeTwo(StringLevelClosure lc)`
- `setUnitTypeOne(int level, string value)`
- `presetUnitTypeOne(StringLevelClosure lc)`

### AbilityDefinitionFaerieFireAfa2

```wurst
public class AbilityDefinitionFaerieFireAfa2 extends AbilityDefinition
```

'Afa2' / [AbilityIds.faerieFireAfa2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-faerieFireAfa2)

**Members:**

- `construct(int newAbilityId)`
- `setAlwaysAutocast(int level, bool value)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`
- `setDefenseReduction(int level, int value)`
- `presetDefenseReduction(IntLevelClosure lc)`

### AbilityDefinitionUnholyFrenzyWarlock

```wurst
public class AbilityDefinitionUnholyFrenzyWarlock extends AbilityDefinition
```

'Suhf' / [AbilityIds.unholyFrenzy1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unholyFrenzy1)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonus(int level, real value)`
  Attack Speed Bonus (%) / 'Uhf1'
- `presetAttackSpeedBonus(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionPaladinDevotionAura

```wurst
public class AbilityDefinitionPaladinDevotionAura extends AbilityDefinition
```

'AHad' / [AbilityIds.devotionAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-devotionAura)

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `setArmorBonus(int level, real value)`
- `presetArmorBonus(RealLevelClosure lc)`

### AbilityDefinitionTinkererRoboGoblinLevel0

```wurst
public class AbilityDefinitionTinkererRoboGoblinLevel0 extends AbilityDefinition
```

'ANrg' / [AbilityIds.tinkererRoboGoblinLevel0](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererRoboGoblinLevel0)

**Members:**

- `construct(int newAbilityId)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionRejuvinationcreep

```wurst
public class AbilityDefinitionRejuvinationcreep extends AbilityDefinition
```

'ACrj' / [AbilityIds.rejuvinationcreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rejuvinationcreep)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, real value)`
- `presetManaPointsGained(RealLevelClosure lc)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionRainofFire

```wurst
public class AbilityDefinitionRainofFire extends AbilityDefinition
```

'ANrf' / [AbilityIds.rainofFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rainofFire)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDamageperWave(int level, real value)`
- `presetMaximumDamageperWave(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setNumberofWaves(int level, int value)`
- `presetNumberofWaves(IntLevelClosure lc)`
- `setNumberofShards(int level, int value)`
- `presetNumberofShards(IntLevelClosure lc)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemAuraVampiric

```wurst
public class AbilityDefinitionItemAuraVampiric extends AbilityDefinition
```

'AIav' / [AbilityIds.itemAuraVampiric](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraVampiric)

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageStolen(int level, real value)`
  Attack Damage Stolen (%) / 'Uav1'
- `presetAttackDamageStolen(RealLevelClosure lc)`

### AbilityDefinitionItemAuraUnholy

```wurst
public class AbilityDefinitionItemAuraUnholy extends AbilityDefinition
```

'AIau' / [AbilityIds.itemAuraUnholy](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraUnholy)

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `setLifeRegenerationIncrease(int level, real value)`
  Life Regeneration Increase (%) / 'Uau2'
- `presetLifeRegenerationIncrease(RealLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Uau1'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionArchMageBrillianceAura

```wurst
public class AbilityDefinitionArchMageBrillianceAura extends AbilityDefinition
```

'AHab' / [AbilityIds.brillianceAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-brillianceAura)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationIncrease(int level, real value)`
- `presetManaRegenerationIncrease(RealLevelClosure lc)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`

### AbilityDefinitionNeutralRegenmanaonly

```wurst
public class AbilityDefinitionNeutralRegenmanaonly extends AbilityDefinition
```

'ANre' / [AbilityIds.manaRegeneration](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaRegeneration)

**Members:**

- `construct(int newAbilityId)`
- `setPercentage(int level, bool value)`
- `presetPercentage(BooleanLevelClosure lc)`
- `setAmountRegenerated(int level, real value)`
- `presetAmountRegenerated(RealLevelClosure lc)`

### AbilityDefinitionRoarcreep

```wurst
public class AbilityDefinitionRoarcreep extends AbilityDefinition
```

'ACro' / [AbilityIds.roarcreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-roarcreep)

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `presetDamageIncrease(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setPreferHostiles(int level, bool value)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `setManaRegen(int level, real value)`
- `presetManaRegen(RealLevelClosure lc)`
- `setLifeRegenerationRate(int level, real value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `setPreferFriendlies(int level, bool value)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionAttackBonus

```wurst
public class AbilityDefinitionAttackBonus extends AbilityDefinition
```

'AIat' / [AbilityIds.itemDamageBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDamageBonus)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAIas

```wurst
public class AbilityDefinitionAIas extends AbilityDefinition
```

'AIas' / [AbilityIds.itemAttackSpeedBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedBonus)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionReincarnationcreep

```wurst
public class AbilityDefinitionReincarnationcreep extends AbilityDefinition
```

'ACrn' / [AbilityIds.reincarnation1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-reincarnation1)

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`
- `presetReincarnationDelay(RealLevelClosure lc)`

### AbilityDefinitionItemAuraTrueshot

```wurst
public class AbilityDefinitionItemAuraTrueshot extends AbilityDefinition
```

'AIar' / [AbilityIds.itemAuraTrueshot](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraTrueshot)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `setRangedBonus(int level, bool value)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `setDamageBonus(int level, real value)`
  Damage Bonus (%) / 'Ear1'
- `presetDamageBonus(RealLevelClosure lc)`
- `setMeleeBonus(int level, bool value)`
- `presetMeleeBonus(BooleanLevelClosure lc)`

### AbilityDefinitionThunderClapThunderLizard

```wurst
public class AbilityDefinitionThunderClapThunderLizard extends AbilityDefinition
```

'ACt2' / [AbilityIds.slam1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-slam1)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setExtraDamageToTarget(int level, real value)`
- `presetExtraDamageToTarget(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionWardenShadowStrike

```wurst
public class AbilityDefinitionWardenShadowStrike extends AbilityDefinition
```

'AEsh' / [AbilityIds.shadowStrike](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowStrike)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setInitialDamage(int level, real value)`
- `presetInitialDamage(RealLevelClosure lc)`
- `setDecayPower(int level, real value)`
- `presetDecayPower(RealLevelClosure lc)`
- `setDecayingDamage(int level, real value)`
- `presetDecayingDamage(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionBloodMageBanish

```wurst
public class AbilityDefinitionBloodMageBanish extends AbilityDefinition
```

'AHbn' / [AbilityIds.banish](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-banish)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Hbn2'
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Hbn1'
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionItemAuraBrilliance

```wurst
public class AbilityDefinitionItemAuraBrilliance extends AbilityDefinition
```

'AIba' / [AbilityIds.itemAuraBrilliance](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraBrilliance)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationIncrease(int level, real value)`
- `presetManaRegenerationIncrease(RealLevelClosure lc)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`

### AbilityDefinitionRainofChaos

```wurst
public class AbilityDefinitionRainofChaos extends AbilityDefinition
```

'ANrc' / [AbilityIds.rainofChaos](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rainofChaos)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityforUnitCreation(int level, string value)`
- `presetAbilityforUnitCreation(StringLevelClosure lc)`
- `setNumberofUnitsCreated(int level, int value)`
- `presetNumberofUnitsCreated(IntLevelClosure lc)`

### AbilityDefinitionBuildTinyGreatHall

```wurst
public class AbilityDefinitionBuildTinyGreatHall extends AbilityDefinition
```

'AIbg' / [AbilityIds.buildTinyGreatHall](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-buildTinyGreatHall)

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionCryptLordSpikedCarapace

```wurst
public class AbilityDefinitionCryptLordSpikedCarapace extends AbilityDefinition
```

'AUts' / [AbilityIds.cryptLordSpikedCarapace](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cryptLordSpikedCarapace)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, real value)`
- `presetDefenseBonus(RealLevelClosure lc)`
- `setReceivedDamageFactor(int level, real value)`
- `presetReceivedDamageFactor(RealLevelClosure lc)`
- `setReturnedDamageFactor(int level, real value)`
- `presetReturnedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionCenariusBeefyStarfall

```wurst
public class AbilityDefinitionCenariusBeefyStarfall extends AbilityDefinition
```

'AEsb' / [AbilityIds.starfall1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-starfall1)

**Members:**

- `construct(int newAbilityId)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionMoonPriestessStarfall

```wurst
public class AbilityDefinitionMoonPriestessStarfall extends AbilityDefinition
```

'AEsf' / [AbilityIds.starfall](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-starfall)

**Members:**

- `construct(int newAbilityId)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionArchMageBlizzard

```wurst
public class AbilityDefinitionArchMageBlizzard extends AbilityDefinition
```

'AHbz' / [AbilityIds.blizzard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blizzard)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDamageperWave(int level, real value)`
- `presetMaximumDamageperWave(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setNumberofWaves(int level, int value)`
- `presetNumberofWaves(IntLevelClosure lc)`
- `setNumberofShards(int level, int value)`
- `presetNumberofShards(IntLevelClosure lc)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus1

```wurst
public class AbilityDefinitionDefenseBonusPlus1 extends AbilityDefinition
```

'AId1' / [AbilityIds.itemArmorBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorBonus)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionSearingArrowscreep

```wurst
public class AbilityDefinitionSearingArrowscreep extends AbilityDefinition
```

'ACsa' / [AbilityIds.searingArrows](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-searingArrows)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionTinkererSummonFactoryLevel1

```wurst
public class AbilityDefinitionTinkererSummonFactoryLevel1 extends AbilityDefinition
```

'ANs1' / [AbilityIds.tinkererSummonFactoryLevel1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererSummonFactoryLevel1)

**Members:**

- `construct(int newAbilityId)`
- `setSpawnInterval(int level, real value)`
- `presetSpawnInterval(RealLevelClosure lc)`
- `setLeashRange(int level, real value)`
- `presetLeashRange(RealLevelClosure lc)`
- `setSpawnUnitID(int level, string value)`
- `presetSpawnUnitID(StringLevelClosure lc)`
- `setFactoryUnitID(int level, string value)`
- `presetFactoryUnitID(StringLevelClosure lc)`
- `setSpawnUnitOffset(int level, real value)`
- `presetSpawnUnitOffset(RealLevelClosure lc)`
- `setSpawnUnitDuration(int level, real value)`
- `presetSpawnUnitDuration(RealLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus3

```wurst
public class AbilityDefinitionDefenseBonusPlus3 extends AbilityDefinition
```

'AId3' / [AbilityIds.defenseBonusPlus3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defenseBonusPlus3)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus2

```wurst
public class AbilityDefinitionDefenseBonusPlus2 extends AbilityDefinition
```

'AId2' / [AbilityIds.defenseBonusPlus2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defenseBonusPlus2)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionTinkererSummonFactoryLevel3

```wurst
public class AbilityDefinitionTinkererSummonFactoryLevel3 extends AbilityDefinition
```

'ANs3' / [AbilityIds.tinkererSummonFactoryLevel3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererSummonFactoryLevel3)

**Members:**

- `construct(int newAbilityId)`
- `setSpawnInterval(int level, real value)`
- `presetSpawnInterval(RealLevelClosure lc)`
- `setLeashRange(int level, real value)`
- `presetLeashRange(RealLevelClosure lc)`
- `setSpawnUnitID(int level, string value)`
- `presetSpawnUnitID(StringLevelClosure lc)`
- `setFactoryUnitID(int level, string value)`
- `presetFactoryUnitID(StringLevelClosure lc)`
- `setSpawnUnitOffset(int level, real value)`
- `presetSpawnUnitOffset(RealLevelClosure lc)`
- `setSpawnUnitDuration(int level, real value)`
- `presetSpawnUnitDuration(RealLevelClosure lc)`

### AbilityDefinitionSpiritWolfcreep

```wurst
public class AbilityDefinitionSpiritWolfcreep extends AbilityDefinition
```

'ACsf' / [AbilityIds.feralSpirit](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-feralSpirit)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionTinkererSummonFactoryLevel2

```wurst
public class AbilityDefinitionTinkererSummonFactoryLevel2 extends AbilityDefinition
```

'ANs2' / [AbilityIds.tinkererSummonFactoryLevel2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererSummonFactoryLevel2)

**Members:**

- `construct(int newAbilityId)`
- `setSpawnInterval(int level, real value)`
- `presetSpawnInterval(RealLevelClosure lc)`
- `setLeashRange(int level, real value)`
- `presetLeashRange(RealLevelClosure lc)`
- `setSpawnUnitID(int level, string value)`
- `presetSpawnUnitID(StringLevelClosure lc)`
- `setFactoryUnitID(int level, string value)`
- `presetFactoryUnitID(StringLevelClosure lc)`
- `setSpawnUnitOffset(int level, real value)`
- `presetSpawnUnitOffset(RealLevelClosure lc)`
- `setSpawnUnitDuration(int level, real value)`
- `presetSpawnUnitDuration(RealLevelClosure lc)`

### AbilityDefinitionMaxManaBonusMost

```wurst
public class AbilityDefinitionMaxManaBonusMost extends AbilityDefinition
```

'AIbm' / [AbilityIds.maxManaBonusMost](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-maxManaBonusMost)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionShockwaveCreep

```wurst
public class AbilityDefinitionShockwaveCreep extends AbilityDefinition
```

'ACsh' / [AbilityIds.shockwave](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shockwave)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionBuildTinyCastle

```wurst
public class AbilityDefinitionBuildTinyCastle extends AbilityDefinition
```

'AIbl' / [AbilityIds.buildTinyCastle](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-buildTinyCastle)

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionSilenceCreep

```wurst
public class AbilityDefinitionSilenceCreep extends AbilityDefinition
```

'ACsi' / [AbilityIds.silenceCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-silenceCreep)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
  Chance To Miss (%) / 'Nsi2'
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionSleepcreep

```wurst
public class AbilityDefinitionSleepcreep extends AbilityDefinition
```

'ACsl' / [AbilityIds.sleep1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sleep1)

**Members:**

- `construct(int newAbilityId)`
- `setStunDuration(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`

### AbilityDefinitionBashitem

```wurst
public class AbilityDefinitionBashitem extends AbilityDefinition
```

'AIbx' / [AbilityIds.bashitem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bashitem)

**Members:**

- `construct(int newAbilityId)`
- `setNeverMiss(int level, bool value)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `setChancetoBash(int level, real value)`
- `presetChancetoBash(RealLevelClosure lc)`
- `setDamageMultiplier(int level, real value)`
- `presetDamageMultiplier(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus5

```wurst
public class AbilityDefinitionDefenseBonusPlus5 extends AbilityDefinition
```

'AId5' / [AbilityIds.defenseBonusPlus5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defenseBonusPlus5)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionMountainKingBash

```wurst
public class AbilityDefinitionMountainKingBash extends AbilityDefinition
```

'AHbh' / [AbilityIds.bash](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bash)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoBash(int level, real value)`
- `presetChancetoBash(RealLevelClosure lc)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setNeverMiss(int level, bool value)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `setDamageMultiplier(int level, real value)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionSiphonManaCreep

```wurst
public class AbilityDefinitionSiphonManaCreep extends AbilityDefinition
```

'ACsm' / [AbilityIds.siphonManaCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-siphonManaCreep)

**Members:**

- `construct(int newAbilityId)`
- `setBonusLifeDecay(int level, real value)`
- `presetBonusLifeDecay(RealLevelClosure lc)`
- `setManaTransferredPerSecond(int level, real value)`
- `presetManaTransferredPerSecond(RealLevelClosure lc)`
- `setBonusManaDecay(int level, real value)`
- `presetBonusManaDecay(RealLevelClosure lc)`
- `setBonusLifeFactor(int level, real value)`
- `presetBonusLifeFactor(RealLevelClosure lc)`
- `setBonusManaFactor(int level, real value)`
- `presetBonusManaFactor(RealLevelClosure lc)`
- `setLifeTransferredPerSecond(int level, real value)`
- `presetLifeTransferredPerSecond(RealLevelClosure lc)`
- `setHitPointsDrained(int level, real value)`
- `presetHitPointsDrained(RealLevelClosure lc)`
- `setManaPointsDrained(int level, real value)`
- `presetManaPointsDrained(RealLevelClosure lc)`
- `setDrainIntervalseconds(int level, real value)`
- `presetDrainIntervalseconds(RealLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus4

```wurst
public class AbilityDefinitionDefenseBonusPlus4 extends AbilityDefinition
```

'AId4' / [AbilityIds.defenseBonusPlus4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defenseBonusPlus4)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionBuildTinyScoutTower

```wurst
public class AbilityDefinitionBuildTinyScoutTower extends AbilityDefinition
```

'AIbt' / [AbilityIds.buildTinyScoutTower](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-buildTinyScoutTower)

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionItemCloakOfFlames

```wurst
public class AbilityDefinitionItemCloakOfFlames extends AbilityDefinition
```

'AIcf' / [AbilityIds.itemImmolation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemImmolation)

**Members:**

- `construct(int newAbilityId)`
- `setExtraManaRequired(int level, int value)`
- `presetExtraManaRequired(IntLevelClosure lc)`
- `setDamagePerDuration(int level, int value)`
- `presetDamagePerDuration(IntLevelClosure lc)`
- `setManaUsedPerSecond(int level, int value)`
- `presetManaUsedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemAuraCommand

```wurst
public class AbilityDefinitionItemAuraCommand extends AbilityDefinition
```

'AIcd' / [AbilityIds.itemAuraCommand](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraCommand)

**Members:**

- `construct(int newAbilityId)`
- `setRangedBonus(int level, bool value)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `setFlatBonus(int level, bool value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `setAttackDamageIncrease(int level, real value)`
- `presetAttackDamageIncrease(RealLevelClosure lc)`
- `setMeleeBonus(int level, bool value)`
- `presetMeleeBonus(BooleanLevelClosure lc)`

### AbilityDefinitionHarvest

```wurst
public class AbilityDefinitionHarvest extends AbilityDefinition
```

'Ahar' / [AbilityIds.harvest](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-harvest)

**Members:**

- `construct(int newAbilityId)`
- `setGoldCapacity(int level, int value)`
- `presetGoldCapacity(IntLevelClosure lc)`
- `setLumberCapacity(int level, int value)`
- `presetLumberCapacity(IntLevelClosure lc)`
- `setDamagetoTree(int level, int value)`
- `presetDamagetoTree(IntLevelClosure lc)`

### AbilityDefinitionMagicImmunityDragons

```wurst
public class AbilityDefinitionMagicImmunityDragons extends AbilityDefinition
```

'ACm3' / [AbilityIds.spellImmunity1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spellImmunity1)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionMagicImmunityArchimonde

```wurst
public class AbilityDefinitionMagicImmunityArchimonde extends AbilityDefinition
```

'ACm2' / [AbilityIds.spellImmunity](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spellImmunity)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionOrbofCorruption

```wurst
public class AbilityDefinitionOrbofCorruption extends AbilityDefinition
```

'AIcb' / [AbilityIds.orbofCorruption](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orbofCorruption)

**Members:**

- `construct(int newAbilityId)`
- `setArmorPenalty(int level, int value)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setDamageBonusDice(int level, int value)`
- `presetDamageBonusDice(IntLevelClosure lc)`

### AbilityDefinitionWardenSpiritofVengeance

```wurst
public class AbilityDefinitionWardenSpiritofVengeance extends AbilityDefinition
```

'AEsv' / [AbilityIds.wardenSpiritofVengeance](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-wardenSpiritofVengeance)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionItemChangeTOD

```wurst
public class AbilityDefinitionItemChangeTOD extends AbilityDefinition
```

'AIct' / [AbilityIds.itemChangeTOD](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemChangeTOD)

**Members:**

- `construct(int newAbilityId)`
- `setNewTimeofDayMinute(int level, int value)`
- `presetNewTimeofDayMinute(IntLevelClosure lc)`
- `setNewTimeofDayHour(int level, int value)`
- `presetNewTimeofDayHour(IntLevelClosure lc)`

### AbilityDefinitionMoonPriestessScout

```wurst
public class AbilityDefinitionMoonPriestessScout extends AbilityDefinition
```

'AEst' / [AbilityIds.scout](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-scout)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionCycloneAIcy

```wurst
public class AbilityDefinitionCycloneAIcy extends AbilityDefinition
```

'AIcy' / [AbilityIds.cycloneAIcy](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cycloneAIcy)

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`
- `presetCanBeDispelled(BooleanLevelClosure lc)`

### AbilityDefinitionExhume

```wurst
public class AbilityDefinitionExhume extends AbilityDefinition
```

'Aexh' / [AbilityIds.exhume](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-exhume)

**Members:**

- `construct(int newAbilityId)`
- `setUnitType(int level, string value)`
- `presetUnitType(StringLevelClosure lc)`
- `setMaximumNumberofCorpses(int level, int value)`
- `presetMaximumNumberofCorpses(IntLevelClosure lc)`

### AbilityDefinitionItemCommand

```wurst
public class AbilityDefinitionItemCommand extends AbilityDefinition
```

'AIco' / [AbilityIds.itemCommand](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCommand)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionExperienceModgreater

```wurst
public class AbilityDefinitionExperienceModgreater extends AbilityDefinition
```

'AIe2' / [AbilityIds.experienceModgreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-experienceModgreater)

**Members:**

- `construct(int newAbilityId)`
- `setExperienceGained(int level, int value)`
- `presetExperienceGained(IntLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus7

```wurst
public class AbilityDefinitionDefenseBonusPlus7 extends AbilityDefinition
```

'AId7' / [AbilityIds.defenseBonusPlus7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defenseBonusPlus7)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus8

```wurst
public class AbilityDefinitionDefenseBonusPlus8 extends AbilityDefinition
```

'AId8' / [AbilityIds.defenseBonusPlus8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defenseBonusPlus8)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus10

```wurst
public class AbilityDefinitionDefenseBonusPlus10 extends AbilityDefinition
```

'AId0' / [AbilityIds.defenseBonusPlus10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defenseBonusPlus10)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionDefendItem

```wurst
public class AbilityDefinitionDefendItem extends AbilityDefinition
```

'AIdd' / [AbilityIds.defendItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defendItem)

**Members:**

- `construct(int newAbilityId)`
- `setDamageTaken(int level, real value)`
  Damage Taken (%) / 'Def1'
- `presetDamageTaken(RealLevelClosure lc)`
- `setChancetoDeflect(int level, real value)`
- `presetChancetoDeflect(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
  Damage Dealt (%) / 'Def2'
- `presetDamageDealt(RealLevelClosure lc)`
- `setDeflectDamageTakenSpells(int level, real value)`
- `presetDeflectDamageTakenSpells(RealLevelClosure lc)`
- `setDeflectDamageTakenPiercing(int level, real value)`
- `presetDeflectDamageTakenPiercing(RealLevelClosure lc)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionOrbofDarkness

```wurst
public class AbilityDefinitionOrbofDarkness extends AbilityDefinition
```

'AIdf' / [AbilityIds.orbofDarkness](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orbofDarkness)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setEffectAbility(int level, string value)`
- `presetEffectAbility(StringLevelClosure lc)`

### AbilityDefinitionItemDispelAoe

```wurst
public class AbilityDefinitionItemDispelAoe extends AbilityDefinition
```

'AIdi' / [AbilityIds.itemDispel](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDispel)

**Members:**

- `construct(int newAbilityId)`
- `setDamageToSummonedUnits(int level, int value)`
- `presetDamageToSummonedUnits(IntLevelClosure lc)`
- `setManaLossPerUnit(int level, int value)`
- `presetManaLossPerUnit(IntLevelClosure lc)`

### AbilityDefinitionLightningShieldcreep

```wurst
public class AbilityDefinitionLightningShieldcreep extends AbilityDefinition
```

'ACls' / [AbilityIds.lightningShieldcreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lightningShieldcreep)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldShip

```wurst
public class AbilityDefinitionCargoHoldShip extends AbilityDefinition
```

'Sch5' / [AbilityIds.cargoHoldShip](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cargoHoldShip)

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionCannibalize

```wurst
public class AbilityDefinitionCannibalize extends AbilityDefinition
```

'Acan' / [AbilityIds.cannibalize](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cannibalize)

**Members:**

- `construct(int newAbilityId)`
- `setMaxHitPoints(int level, real value)`
- `presetMaxHitPoints(RealLevelClosure lc)`
- `setHitPointsperSecond(int level, real value)`
- `presetHitPointsperSecond(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldTank

```wurst
public class AbilityDefinitionCargoHoldTank extends AbilityDefinition
```

'Sch4' / [AbilityIds.cargoHoldTank](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cargoHoldTank)

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionItemDefenseAoe

```wurst
public class AbilityDefinitionItemDefenseAoe extends AbilityDefinition
```

'AIda' / [AbilityIds.itemTemporaryAreaArmorBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTemporaryAreaArmorBonus)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionCargoHoldTransport

```wurst
public class AbilityDefinitionCargoHoldTransport extends AbilityDefinition
```

'Sch3' / [AbilityIds.cargoHoldTransport](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cargoHoldTransport)

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionCargoHoldMeatWagon

```wurst
public class AbilityDefinitionCargoHoldMeatWagon extends AbilityDefinition
```

'Sch2' / [AbilityIds.cargoHoldMeatWagon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cargoHoldMeatWagon)

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionItemDispelChain

```wurst
public class AbilityDefinitionItemDispelChain extends AbilityDefinition
```

'AIdc' / [AbilityIds.itemDispelChain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDispelChain)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDispelledUnits(int level, int value)`
- `presetMaximumDispelledUnits(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `setManaLossPerUnit(int level, real value)`
- `presetManaLossPerUnit(RealLevelClosure lc)`

### AbilityDefinitionTaurenChieftainEnduranceAura

```wurst
public class AbilityDefinitionTaurenChieftainEnduranceAura extends AbilityDefinition
```

'AOae' / [AbilityIds.enduranceAura1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-enduranceAura1)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemDefenseAoePlusHealing

```wurst
public class AbilityDefinitionItemDefenseAoePlusHealing extends AbilityDefinition
```

'AIdb' / [AbilityIds.itemDefenseAoePlusHealing](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDefenseAoePlusHealing)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionMagicImmunityCreep

```wurst
public class AbilityDefinitionMagicImmunityCreep extends AbilityDefinition
```

'ACmi' / [AbilityIds.magicImmunityCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-magicImmunityCreep)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionKeeperoftheGroveTranquility

```wurst
public class AbilityDefinitionKeeperoftheGroveTranquility extends AbilityDefinition
```

'AEtq' / [AbilityIds.tranquility](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tranquility)

**Members:**

- `construct(int newAbilityId)`
- `setHealInterval(int level, real value)`
- `presetHealInterval(RealLevelClosure lc)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setLifeHealed(int level, real value)`
- `presetLifeHealed(RealLevelClosure lc)`
- `setInitialImmunityDuration(int level, real value)`
- `presetInitialImmunityDuration(RealLevelClosure lc)`

### AbilityDefinitionWindWalk

```wurst
public class AbilityDefinitionWindWalk extends AbilityDefinition
```

'ANwk' / [AbilityIds.windWalk1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-windWalk1)

**Members:**

- `construct(int newAbilityId)`
- `setBackstabDamage(int level, real value)`
- `presetBackstabDamage(RealLevelClosure lc)`
- `setBackstabDamage(int level, bool value)`
- `presetBackstabDamage(BooleanLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Owk2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setTransitionTime(int level, real value)`
- `presetTransitionTime(RealLevelClosure lc)`
- `setStartCooldownWhenDecloak(int level, bool value)`
- `presetStartCooldownWhenDecloak(BooleanLevelClosure lc)`
- `setStartCooldownwhenDecloak(int level, bool value)`
- `presetStartCooldownwhenDecloak(BooleanLevelClosure lc)`
- `setBackstabDamage1(int level, bool value)`
- `presetBackstabDamage1(BooleanLevelClosure lc)`

### AbilityDefinitionManaShieldCreep

```wurst
public class AbilityDefinitionManaShieldCreep extends AbilityDefinition
```

'ACmf' / [AbilityIds.manaShieldCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaShieldCreep)

**Members:**

- `construct(int newAbilityId)`
- `setDamageAbsorbed(int level, real value)`
  Damage Absorbed (%) / 'Nms2'
- `presetDamageAbsorbed(RealLevelClosure lc)`
- `setManaperHitPoint(int level, real value)`
- `presetManaperHitPoint(RealLevelClosure lc)`

### AbilityDefinitionWateryMinion

```wurst
public class AbilityDefinitionWateryMinion extends AbilityDefinition
```

'ANwm' / [AbilityIds.wateryMinion](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-wateryMinion)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionItemDispelAoeWithCooldown

```wurst
public class AbilityDefinitionItemDispelAoeWithCooldown extends AbilityDefinition
```

'AIds' / [AbilityIds.itemDispelAoeWithCooldown](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDispelAoeWithCooldown)

**Members:**

- `construct(int newAbilityId)`
- `setDamageToSummonedUnits(int level, int value)`
- `presetDamageToSummonedUnits(IntLevelClosure lc)`
- `setManaLossPerUnit(int level, int value)`
- `presetManaLossPerUnit(IntLevelClosure lc)`

### AbilityDefinitionEvilIllidanMetamorphosis

```wurst
public class AbilityDefinitionEvilIllidanMetamorphosis extends AbilityDefinition
```

'AEvi' / [AbilityIds.evilIllidanMetamorphosis](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-evilIllidanMetamorphosis)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormHitPointBonus(int level, real value)`
- `presetAlternateFormHitPointBonus(RealLevelClosure lc)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionImpaleCreep

```wurst
public class AbilityDefinitionImpaleCreep extends AbilityDefinition
```

'ACmp' / [AbilityIds.impaleCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-impaleCreep)

**Members:**

- `construct(int newAbilityId)`
- `setWaveTimeseconds(int level, real value)`
- `presetWaveTimeseconds(RealLevelClosure lc)`
- `setAirTimeseconds(int level, real value)`
- `presetAirTimeseconds(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setWaveDistance(int level, real value)`
- `presetWaveDistance(RealLevelClosure lc)`
- `setUninterruptible(int level, bool value)`
- `presetUninterruptible(BooleanLevelClosure lc)`
- `setAirborneTargetsVulnerable(int level, bool value)`
- `presetAirborneTargetsVulnerable(BooleanLevelClosure lc)`

### AbilityDefinitionMonsooncreep

```wurst
public class AbilityDefinitionMonsooncreep extends AbilityDefinition
```

'ACmo' / [AbilityIds.monsooncreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-monsooncreep)

**Members:**

- `construct(int newAbilityId)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionDevourMagic

```wurst
public class AbilityDefinitionDevourMagic extends AbilityDefinition
```

'Advm' / [AbilityIds.devourMagic](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-devourMagic)

**Members:**

- `construct(int newAbilityId)`
- `setManaPerBuff(int level, real value)`
- `presetManaPerBuff(RealLevelClosure lc)`
- `setLifePerUnit(int level, real value)`
- `presetLifePerUnit(RealLevelClosure lc)`
- `setManaPerUnit(int level, real value)`
- `presetManaPerUnit(RealLevelClosure lc)`
- `setIgnoreFriendlyBuffs(int level, bool value)`
- `presetIgnoreFriendlyBuffs(BooleanLevelClosure lc)`
- `setLifePerBuff(int level, real value)`
- `presetLifePerBuff(RealLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionEvasion

```wurst
public class AbilityDefinitionEvasion extends AbilityDefinition
```

'ACev' / [AbilityIds.evasion](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-evasion)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldDevour

```wurst
public class AbilityDefinitionCargoHoldDevour extends AbilityDefinition
```

'Advc' / [AbilityIds.devourCargo](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-devourCargo)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionExperienceMod

```wurst
public class AbilityDefinitionExperienceMod extends AbilityDefinition
```

'AIem' / [AbilityIds.itemExperienceGain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemExperienceGain)

**Members:**

- `construct(int newAbilityId)`
- `setExperienceGained(int level, int value)`
- `presetExperienceGained(IntLevelClosure lc)`

### AbilityDefinitionCloudofFogItem

```wurst
public class AbilityDefinitionCloudofFogItem extends AbilityDefinition
```

'AIfg' / [AbilityIds.cloudofFogItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cloudofFogItem)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
  Chance To Miss (%) / 'Nsi2'
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionDisenchantold

```wurst
public class AbilityDefinitionDisenchantold extends AbilityDefinition
```

'Adch' / [AbilityIds.disenchantold](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-disenchantold)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `presetManaLoss(RealLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionPillage

```wurst
public class AbilityDefinitionPillage extends AbilityDefinition
```

'Asal' / [AbilityIds.pillage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pillage)

**Members:**

- `construct(int newAbilityId)`
- `setAccumulationStep(int level, int value)`
- `presetAccumulationStep(IntLevelClosure lc)`
- `setSalvageCostRatio(int level, real value)`
- `presetSalvageCostRatio(RealLevelClosure lc)`

### AbilityDefinitionInventoryPackMule

```wurst
public class AbilityDefinitionInventoryPackMule extends AbilityDefinition
```

'Apak' / [AbilityIds.inventoryPackMule](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inventoryPackMule)

**Members:**

- `construct(int newAbilityId)`
- `setCanDropItems(int level, bool value)`
- `presetCanDropItems(BooleanLevelClosure lc)`
- `setCanUseItems(int level, bool value)`
- `presetCanUseItems(BooleanLevelClosure lc)`
- `setDropItemsOnDeath(int level, bool value)`
- `presetDropItemsOnDeath(BooleanLevelClosure lc)`
- `setCanGetItems(int level, bool value)`
- `presetCanGetItems(BooleanLevelClosure lc)`
- `setItemCapacity(int level, int value)`
- `presetItemCapacity(IntLevelClosure lc)`

### AbilityDefinitionFigurineFurbolg

```wurst
public class AbilityDefinitionFigurineFurbolg extends AbilityDefinition
```

'AIff' / [AbilityIds.itemFurbolgSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemFurbolgSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionFigurineFelHound

```wurst
public class AbilityDefinitionFigurineFelHound extends AbilityDefinition
```

'AIfh' / [AbilityIds.itemFelhoundSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemFelhoundSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionFireDamageBonus

```wurst
public class AbilityDefinitionFireDamageBonus extends AbilityDefinition
```

'AIfb' / [AbilityIds.itemAttackFireBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackFireBonus)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionHealReductionBonus

```wurst
public class AbilityDefinitionHealReductionBonus extends AbilityDefinition
```

'AIf2' / [AbilityIds.itemAttackHealReduction](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackHealReduction)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setHealingMultiplier(int level, real value)`
- `presetHealingMultiplier(RealLevelClosure lc)`

### AbilityDefinitionDetectMagicSentinel

```wurst
public class AbilityDefinitionDetectMagicSentinel extends AbilityDefinition
```

'Adts' / [AbilityIds.magicSentry](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-magicSentry)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionFirelordVolcano

```wurst
public class AbilityDefinitionFirelordVolcano extends AbilityDefinition
```

'ANvc' / [AbilityIds.volcano](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-volcano)

**Members:**

- `construct(int newAbilityId)`
- `setDestructibleID(int level, string value)`
- `presetDestructibleID(StringLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`
- `setRockRingCount(int level, int value)`
- `presetRockRingCount(IntLevelClosure lc)`
- `setWaveInterval(int level, real value)`
- `presetWaveInterval(RealLevelClosure lc)`
- `setHalfDamageFactor(int level, real value)`
- `presetHalfDamageFactor(RealLevelClosure lc)`
- `setWaveCount(int level, int value)`
- `presetWaveCount(IntLevelClosure lc)`

### AbilityDefinitionFigurineRedDrake

```wurst
public class AbilityDefinitionFigurineRedDrake extends AbilityDefinition
```

'AIfd' / [AbilityIds.itemRedDrakeSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRedDrakeSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionHealingWard

```wurst
public class AbilityDefinitionHealingWard extends AbilityDefinition
```

'Ahwd' / [AbilityIds.healingWard1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-healingWard1)

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionFlareGun

```wurst
public class AbilityDefinitionFlareGun extends AbilityDefinition
```

'AIfa' / [AbilityIds.flareGun](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-flareGun)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`
- `setDelayForTargetEffect(int level, real value)`
- `presetDelayForTargetEffect(RealLevelClosure lc)`

### AbilityDefinitionLoadEntangledGoldMine

```wurst
public class AbilityDefinitionLoadEntangledGoldMine extends AbilityDefinition
```

'Slo2' / [AbilityIds.loadWisp](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-loadWisp)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionNeutralRegenhealthonly

```wurst
public class AbilityDefinitionNeutralRegenhealthonly extends AbilityDefinition
```

'ACnr' / [AbilityIds.lifeRegenerationAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lifeRegenerationAura)

**Members:**

- `construct(int newAbilityId)`
- `setPercentage(int level, bool value)`
- `presetPercentage(BooleanLevelClosure lc)`
- `setAmountofHitPointsRegenerated(int level, real value)`
- `presetAmountofHitPointsRegenerated(RealLevelClosure lc)`

### AbilityDefinitionAuraRegenerationHealingWard

```wurst
public class AbilityDefinitionAuraRegenerationHealingWard extends AbilityDefinition
```

'Aoar' / [AbilityIds.healingWardAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-healingWardAura)

**Members:**

- `construct(int newAbilityId)`
- `setPercentage(int level, bool value)`
- `presetPercentage(BooleanLevelClosure lc)`
- `setAmountofHitPointsRegenerated(int level, real value)`
- `presetAmountofHitPointsRegenerated(RealLevelClosure lc)`

### AbilityDefinitionLoadNavies

```wurst
public class AbilityDefinitionLoadNavies extends AbilityDefinition
```

'Slo3' / [AbilityIds.loadNavies](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-loadNavies)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionInvisibility

```wurst
public class AbilityDefinitionInvisibility extends AbilityDefinition
```

'Aivs' / [AbilityIds.invisibility](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-invisibility)

**Members:**

- `construct(int newAbilityId)`
- `setTransitionTimeseconds(int level, real value)`
- `presetTransitionTimeseconds(RealLevelClosure lc)`

### AbilityDefinitionSentryWard

```wurst
public class AbilityDefinitionSentryWard extends AbilityDefinition
```

'Aeye' / [AbilityIds.sentryWard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sentryWard)

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionFigurineRockGolem

```wurst
public class AbilityDefinitionFigurineRockGolem extends AbilityDefinition
```

'AIfr' / [AbilityIds.itemRockGolemSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRockGolemSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionFigurineSkeleton

```wurst
public class AbilityDefinitionFigurineSkeleton extends AbilityDefinition
```

'AIfs' / [AbilityIds.itemSkeletonSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSkeletonSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionSubmergeMyrmidon

```wurst
public class AbilityDefinitionSubmergeMyrmidon extends AbilityDefinition
```

'Asb1' / [AbilityIds.submergeMyrmidon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-submergeMyrmidon)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionSubmergeRoyalGuard

```wurst
public class AbilityDefinitionSubmergeRoyalGuard extends AbilityDefinition
```

'Asb2' / [AbilityIds.submergeRoyalGuard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-submergeRoyalGuard)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionFigurineDoomGuard

```wurst
public class AbilityDefinitionFigurineDoomGuard extends AbilityDefinition
```

'AIfu' / [AbilityIds.itemDoomGuardSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDoomGuardSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionSubmergeSnapDragon

```wurst
public class AbilityDefinitionSubmergeSnapDragon extends AbilityDefinition
```

'Asb3' / [AbilityIds.submergeSnapDragon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-submergeSnapDragon)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionItemHealLesser

```wurst
public class AbilityDefinitionItemHealLesser extends AbilityDefinition
```

'AIh1' / [AbilityIds.itemHealLesser](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealLesser)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionItemHealGreater

```wurst
public class AbilityDefinitionItemHealGreater extends AbilityDefinition
```

'AIh2' / [AbilityIds.itemHealGreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealGreater)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionItemHealLeast

```wurst
public class AbilityDefinitionItemHealLeast extends AbilityDefinition
```

'AIh3' / [AbilityIds.itemHealLeast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealLeast)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionGiveGold

```wurst
public class AbilityDefinitionGiveGold extends AbilityDefinition
```

'AIgo' / [AbilityIds.giveGold](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-giveGold)

**Members:**

- `construct(int newAbilityId)`
- `setGoldGiven(int level, int value)`
- `presetGoldGiven(IntLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus1

```wurst
public class AbilityDefinitionIntelligenceBonusPlus1 extends AbilityDefinition
```

'AIi1' / [AbilityIds.intelligenceBonusPlus1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus1)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus2

```wurst
public class AbilityDefinitionIntelligenceBonusPlus2 extends AbilityDefinition
```

'AIi2' / [AbilityIds.intelligenceBonusPlus2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus2)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus5

```wurst
public class AbilityDefinitionIntelligenceBonusPlus5 extends AbilityDefinition
```

'AIi5' / [AbilityIds.intelligenceBonusPlus5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus5)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionBurrowscarablvl2

```wurst
public class AbilityDefinitionBurrowscarablvl2 extends AbilityDefinition
```

'Abu2' / [AbilityIds.burrowscarablvl2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-burrowscarablvl2)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus4

```wurst
public class AbilityDefinitionIntelligenceBonusPlus4 extends AbilityDefinition
```

'AIi4' / [AbilityIds.intelligenceBonusPlus4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus4)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionFirelordSummonLavaSpawn

```wurst
public class AbilityDefinitionFirelordSummonLavaSpawn extends AbilityDefinition
```

'ANlm' / [AbilityIds.summonLavaSpawn](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-summonLavaSpawn)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setLifeDurationSplitBonus(int level, real value)`
- `presetLifeDurationSplitBonus(RealLevelClosure lc)`
- `setMaxHitpointFactor(int level, real value)`
- `presetMaxHitpointFactor(RealLevelClosure lc)`
- `setGenerationCount(int level, int value)`
- `presetGenerationCount(IntLevelClosure lc)`
- `setSplitDelay(int level, real value)`
- `presetSplitDelay(RealLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `setSplitAttackCount(int level, int value)`
- `presetSplitAttackCount(IntLevelClosure lc)`

### AbilityDefinitionBurrowscarablvl3

```wurst
public class AbilityDefinitionBurrowscarablvl3 extends AbilityDefinition
```

'Abu3' / [AbilityIds.burrowscarablvl3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-burrowscarablvl3)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionHeal

```wurst
public class AbilityDefinitionHeal extends AbilityDefinition
```

'Ahea' / [AbilityIds.heal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus3

```wurst
public class AbilityDefinitionIntelligenceBonusPlus3 extends AbilityDefinition
```

'AIi3' / [AbilityIds.intelligenceBonusPlus3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus3)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus6

```wurst
public class AbilityDefinitionIntelligenceBonusPlus6 extends AbilityDefinition
```

'AIi6' / [AbilityIds.intelligenceBonusPlus6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus6)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionBerserk

```wurst
public class AbilityDefinitionBerserk extends AbilityDefinition
```

'Absk' / [AbilityIds.berserkerRage1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-berserkerRage1)

**Members:**

- `construct(int newAbilityId)`
- `setDamageTakenIncrease(int level, real value)`
- `presetDamageTakenIncrease(RealLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionReplenishLifeMana

```wurst
public class AbilityDefinitionReplenishLifeMana extends AbilityDefinition
```

'Arpb' / [AbilityIds.replenishLifeMana](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-replenishLifeMana)

**Members:**

- `construct(int newAbilityId)`
- `setMinimumManaRequired(int level, real value)`
- `presetMinimumManaRequired(RealLevelClosure lc)`
- `setMaximumUnitsChargedToCaster(int level, int value)`
- `presetMaximumUnitsChargedToCaster(IntLevelClosure lc)`
- `setMinimumLifeRequired(int level, real value)`
- `presetMinimumLifeRequired(RealLevelClosure lc)`
- `setManaPointsGained(int level, real value)`
- `presetManaPointsGained(RealLevelClosure lc)`
- `setMaximumUnitsAffected(int level, int value)`
- `presetMaximumUnitsAffected(IntLevelClosure lc)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionUltraVisionGlyph

```wurst
public class AbilityDefinitionUltraVisionGlyph extends AbilityDefinition
```

'AIgu' / [AbilityIds.ultraVisionGlyph](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ultraVisionGlyph)

**Members:**

- `construct(int newAbilityId)`
- `setUpgradeLevels(int level, int value)`
- `presetUpgradeLevels(IntLevelClosure lc)`
- `setUpgradeType(int level, string value)`
- `presetUpgradeType(StringLevelClosure lc)`

### AbilityDefinitionReplenishLife

```wurst
public class AbilityDefinitionReplenishLife extends AbilityDefinition
```

'Arpl' / [AbilityIds.replenishLife](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-replenishLife)

**Members:**

- `construct(int newAbilityId)`
- `setMinimumLifeRequired(int level, real value)`
- `presetMinimumLifeRequired(RealLevelClosure lc)`
- `setMaximumUnitsChargedToCaster(int level, int value)`
- `presetMaximumUnitsChargedToCaster(IntLevelClosure lc)`
- `setMaximumUnitsAffected(int level, int value)`
- `presetMaximumUnitsAffected(IntLevelClosure lc)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionInventory2slotunitUndead

```wurst
public class AbilityDefinitionInventory2slotunitUndead extends AbilityDefinition
```

'Aiun' / [AbilityIds.inventory2slotunitUndead](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inventory2slotunitUndead)

**Members:**

- `construct(int newAbilityId)`
- `setCanDropItems(int level, bool value)`
- `presetCanDropItems(BooleanLevelClosure lc)`
- `setCanUseItems(int level, bool value)`
- `presetCanUseItems(BooleanLevelClosure lc)`
- `setDropItemsOnDeath(int level, bool value)`
- `presetDropItemsOnDeath(BooleanLevelClosure lc)`
- `setCanGetItems(int level, bool value)`
- `presetCanGetItems(BooleanLevelClosure lc)`
- `setItemCapacity(int level, int value)`
- `presetItemCapacity(IntLevelClosure lc)`

### AbilityDefinitionManaBattery

```wurst
public class AbilityDefinitionManaBattery extends AbilityDefinition
```

'Ambt' / [AbilityIds.replenishManaandLife](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-replenishManaandLife)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`
- `setWaterHeight(int level, real value)`
- `presetWaterHeight(RealLevelClosure lc)`
- `setAutocastRequirement(int level, real value)`
- `presetAutocastRequirement(RealLevelClosure lc)`
- `setManaGained(int level, real value)`
- `presetManaGained(RealLevelClosure lc)`
- `setRegenerateOnlyAtNight(int level, bool value)`
- `presetRegenerateOnlyAtNight(BooleanLevelClosure lc)`

### AbilityDefinitionReplenishMana

```wurst
public class AbilityDefinitionReplenishMana extends AbilityDefinition
```

'Arpm' / [AbilityIds.replenishMana](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-replenishMana)

**Members:**

- `construct(int newAbilityId)`
- `setMinimumManaRequired(int level, real value)`
- `presetMinimumManaRequired(RealLevelClosure lc)`
- `setMaximumUnitsChargedToCaster(int level, int value)`
- `presetMaximumUnitsChargedToCaster(IntLevelClosure lc)`
- `setManaPointsGained(int level, real value)`
- `presetManaPointsGained(RealLevelClosure lc)`
- `setMaximumUnitsAffected(int level, int value)`
- `presetMaximumUnitsAffected(IntLevelClosure lc)`

### AbilityDefinitionHealCreepNormal

```wurst
public class AbilityDefinitionHealCreepNormal extends AbilityDefinition
```

'Anh1' / [AbilityIds.healCreepNormal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-healCreepNormal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionHealCreepHigh

```wurst
public class AbilityDefinitionHealCreepHigh extends AbilityDefinition
```

'Anh2' / [AbilityIds.healCreepHigh](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-healCreepHigh)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionAuraSlow

```wurst
public class AbilityDefinitionAuraSlow extends AbilityDefinition
```

'Aasl' / [AbilityIds.slowAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-slowAura)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAlwaysAutocast(int level, bool value)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionCurse

```wurst
public class AbilityDefinitionCurse extends AbilityDefinition
```

'Acrs' / [AbilityIds.curse](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-curse)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionSuperEarthquake

```wurst
public class AbilityDefinitionSuperEarthquake extends AbilityDefinition
```

'SNeq' / [AbilityIds.earthquake](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-earthquake)

**Members:**

- `construct(int newAbilityId)`
- `setUnitsSlowed(int level, real value)`
  Units Slowed (%) / 'Oeq3'
- `presetUnitsSlowed(RealLevelClosure lc)`
- `setEffectDelay(int level, real value)`
- `presetEffectDelay(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setDamageperSecondtoBuildings(int level, real value)`
- `presetDamageperSecondtoBuildings(RealLevelClosure lc)`

### AbilityDefinitionFortificationGlyph

```wurst
public class AbilityDefinitionFortificationGlyph extends AbilityDefinition
```

'AIgf' / [AbilityIds.fortificationGlyph](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-fortificationGlyph)

**Members:**

- `construct(int newAbilityId)`
- `setUpgradeLevels(int level, int value)`
- `presetUpgradeLevels(IntLevelClosure lc)`
- `setUpgradeType(int level, string value)`
- `presetUpgradeType(StringLevelClosure lc)`

### AbilityDefinitionManaBurndemonAmbd

```wurst
public class AbilityDefinitionManaBurndemonAmbd extends AbilityDefinition
```

'Ambd' / [AbilityIds.manaBurn](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaBurn)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaDrained(int level, real value)`
- `presetMaxManaDrained(RealLevelClosure lc)`
- `setBoltLifetime(int level, real value)`
- `presetBoltLifetime(RealLevelClosure lc)`
- `setBoltDelay(int level, real value)`
- `presetBoltDelay(RealLevelClosure lc)`

### AbilityDefinitionFarseerFarSight

```wurst
public class AbilityDefinitionFarseerFarSight extends AbilityDefinition
```

'AOfs' / [AbilityIds.farSight](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-farSight)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionAgilityModPlus2

```wurst
public class AbilityDefinitionAgilityModPlus2 extends AbilityDefinition
```

'AIgm' / [AbilityIds.agilityModPlus2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityModPlus2)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionHarvestLumberArchimondeghouls

```wurst
public class AbilityDefinitionHarvestLumberArchimondeghouls extends AbilityDefinition
```

'Ahr2' / [AbilityIds.harvestLumberArchimondeghouls](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-harvestLumberArchimondeghouls)

**Members:**

- `construct(int newAbilityId)`
- `setLumberCapacity(int level, int value)`
- `presetLumberCapacity(IntLevelClosure lc)`
- `setDamagetoTree(int level, int value)`
- `presetDamagetoTree(IntLevelClosure lc)`

### AbilityDefinitionHealingWardAIhw

```wurst
public class AbilityDefinitionHealingWardAIhw extends AbilityDefinition
```

'AIhw' / [AbilityIds.healingWardAIhw](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-healingWardAIhw)

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionIllidanMetamorphosis

```wurst
public class AbilityDefinitionIllidanMetamorphosis extends AbilityDefinition
```

'AEIl' / [AbilityIds.metamorphosis1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-metamorphosis1)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormHitPointBonus(int level, real value)`
- `presetAlternateFormHitPointBonus(RealLevelClosure lc)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionHexCreep

```wurst
public class AbilityDefinitionHexCreep extends AbilityDefinition
```

'AChx' / [AbilityIds.hexCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-hexCreep)

**Members:**

- `construct(int newAbilityId)`
- `setMorphUnitsGround(int level, string value)`
- `presetMorphUnitsGround(StringLevelClosure lc)`
- `setMorphUnitsWater(int level, string value)`
- `presetMorphUnitsWater(StringLevelClosure lc)`
- `setMorphUnitsAmphibious(int level, string value)`
- `presetMorphUnitsAmphibious(StringLevelClosure lc)`
- `setMorphUnitsAir(int level, string value)`
- `presetMorphUnitsAir(StringLevelClosure lc)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionHealingWardcreep

```wurst
public class AbilityDefinitionHealingWardcreep extends AbilityDefinition
```

'AChw' / [AbilityIds.healingWard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-healingWard)

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionBattlestations

```wurst
public class AbilityDefinitionBattlestations extends AbilityDefinition
```

'Abtl' / [AbilityIds.battleStations](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-battleStations)

**Members:**

- `construct(int newAbilityId)`
- `setSummonBusyUnits(int level, bool value)`
- `presetSummonBusyUnits(BooleanLevelClosure lc)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionHealingWaveCreep

```wurst
public class AbilityDefinitionHealingWaveCreep extends AbilityDefinition
```

'AChv' / [AbilityIds.healingWaveCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-healingWaveCreep)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperTarget(int level, real value)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `setNumberofTargetsHit(int level, int value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `setDamageReductionperTarget(int level, real value)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionInnerFireCreep

```wurst
public class AbilityDefinitionInnerFireCreep extends AbilityDefinition
```

'ACif' / [AbilityIds.innerFireCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-innerFireCreep)

**Members:**

- `construct(int newAbilityId)`
- `setAutocastRange(int level, real value)`
- `presetAutocastRange(RealLevelClosure lc)`
- `setLifeRegenRate(int level, real value)`
- `presetLifeRegenRate(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Inf1'
- `presetDamageIncrease(RealLevelClosure lc)`

### AbilityDefinitionAncestralSpirit

```wurst
public class AbilityDefinitionAncestralSpirit extends AbilityDefinition
```

'Aast' / [AbilityIds.ancestralSpirit](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ancestralSpirit)

**Members:**

- `construct(int newAbilityId)`
- `setLifeRestoredFactor(int level, real value)`
- `presetLifeRestoredFactor(RealLevelClosure lc)`
- `setManaRestoredFactor(int level, real value)`
- `presetManaRestoredFactor(RealLevelClosure lc)`

### AbilityDefinitionHarvestLumbershredder

```wurst
public class AbilityDefinitionHarvestLumbershredder extends AbilityDefinition
```

'Ahr3' / [AbilityIds.harvest2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-harvest2)

**Members:**

- `construct(int newAbilityId)`
- `setLumberCapacity(int level, int value)`
- `presetLumberCapacity(IntLevelClosure lc)`
- `setDamagetoTree(int level, int value)`
- `presetDamagetoTree(IntLevelClosure lc)`

### AbilityDefinitionItemHealAoeGreater

```wurst
public class AbilityDefinitionItemHealAoeGreater extends AbilityDefinition
```

'AIhb' / [AbilityIds.itemHealAoeGreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealAoeGreater)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionPulverize

```wurst
public class AbilityDefinitionPulverize extends AbilityDefinition
```

'Awar' / [AbilityIds.pulverize](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pulverize)

**Members:**

- `construct(int newAbilityId)`
- `setHalfDamageRadius(int level, real value)`
- `presetHalfDamageRadius(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setChancetoStomp(int level, real value)`
  Chance to Stomp (%) / 'War1'
- `presetChancetoStomp(RealLevelClosure lc)`

### AbilityDefinitionItemHealAoe

```wurst
public class AbilityDefinitionItemHealAoe extends AbilityDefinition
```

'AIha' / [AbilityIds.itemAreaHealing](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAreaHealing)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionAIhe

```wurst
public class AbilityDefinitionAIhe extends AbilityDefinition
```

'AIhe' / [AbilityIds.itemHealing](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealing)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionFarseerEarthquake

```wurst
public class AbilityDefinitionFarseerEarthquake extends AbilityDefinition
```

'AOeq' / [AbilityIds.earthquake1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-earthquake1)

**Members:**

- `construct(int newAbilityId)`
- `setUnitsSlowed(int level, real value)`
  Units Slowed (%) / 'Oeq3'
- `presetUnitsSlowed(RealLevelClosure lc)`
- `setEffectDelay(int level, real value)`
- `presetEffectDelay(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setDamageperSecondtoBuildings(int level, real value)`
- `presetDamageperSecondtoBuildings(RealLevelClosure lc)`

### AbilityDefinitionDemonHunterImmolation

```wurst
public class AbilityDefinitionDemonHunterImmolation extends AbilityDefinition
```

'AEim' / [AbilityIds.immolation1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-immolation1)

**Members:**

- `construct(int newAbilityId)`
- `setManaDrainedperSecond(int level, real value)`
- `presetManaDrainedperSecond(RealLevelClosure lc)`
- `setBufferManaRequired(int level, real value)`
- `presetBufferManaRequired(RealLevelClosure lc)`
- `setDamageperInterval(int level, real value)`
- `presetDamageperInterval(RealLevelClosure lc)`

### AbilityDefinitionNeutralDetectionRevealability

```wurst
public class AbilityDefinitionNeutralDetectionRevealability extends AbilityDefinition
```

'Andt' / [AbilityIds.reveal1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-reveal1)

**Members:**

- `construct(int newAbilityId)`
- `setLumberCost(int level, int value)`
- `presetLumberCost(IntLevelClosure lc)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`
- `setGoldCost(int level, int value)`
- `presetGoldCost(IntLevelClosure lc)`

### AbilityDefinitionWeb

```wurst
public class AbilityDefinitionWeb extends AbilityDefinition
```

'Aweb' / [AbilityIds.web](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-web)

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`
- `setStunDuration(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`

### AbilityDefinitionFigurineIceRevenant

```wurst
public class AbilityDefinitionFigurineIceRevenant extends AbilityDefinition
```

'AIir' / [AbilityIds.figurineIceRevenant](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-figurineIceRevenant)

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionSuperDeathandDecay

```wurst
public class AbilityDefinitionSuperDeathandDecay extends AbilityDefinition
```

'SNdd' / [AbilityIds.deathAndDecay](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathAndDecay)

**Members:**

- `construct(int newAbilityId)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setMaxLifeDrainedperSecond(int level, real value)`
  Max Life Drained per Second (%) / 'Udd1'
- `presetMaxLifeDrainedperSecond(RealLevelClosure lc)`

### AbilityDefinitionDarkConversionFast

```wurst
public class AbilityDefinitionDarkConversionFast extends AbilityDefinition
```

'SNdc' / [AbilityIds.darkConversionFast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkConversionFast)

**Members:**

- `construct(int newAbilityId)`
- `setConversionUnit(int level, string value)`
- `presetConversionUnit(StringLevelClosure lc)`
- `setRacetoConvert(int level, string value)`
- `presetRacetoConvert(StringLevelClosure lc)`

### AbilityDefinitionImmolationcreep

```wurst
public class AbilityDefinitionImmolationcreep extends AbilityDefinition
```

'ACim' / [AbilityIds.immolation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-immolation)

**Members:**

- `construct(int newAbilityId)`
- `setManaDrainedperSecond(int level, real value)`
- `presetManaDrainedperSecond(RealLevelClosure lc)`
- `setBufferManaRequired(int level, real value)`
- `presetBufferManaRequired(RealLevelClosure lc)`
- `setDamageperInterval(int level, real value)`
- `presetDamageperInterval(RealLevelClosure lc)`

### AbilityDefinitionIntelligenceMod

```wurst
public class AbilityDefinitionIntelligenceMod extends AbilityDefinition
```

'AIim' / [AbilityIds.itemIntelligenceGain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemIntelligenceGain)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionItemInferno

```wurst
public class AbilityDefinitionItemInferno extends AbilityDefinition
```

'AIin' / [AbilityIds.itemInferno](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemInferno)

**Members:**

- `construct(int newAbilityId)`
- `setDuration(int level, real value)`
- `presetDuration(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `setImpactDelay(int level, real value)`
- `presetImpactDelay(RealLevelClosure lc)`

### AbilityDefinitionItemIllusion

```wurst
public class AbilityDefinitionItemIllusion extends AbilityDefinition
```

'AIil' / [AbilityIds.itemIllusions](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemIllusions)

**Members:**

- `construct(int newAbilityId)`
- `setDamageReceivedMultiplier(int level, real value)`
- `presetDamageReceivedMultiplier(RealLevelClosure lc)`
- `setDamageDealtofnormal(int level, real value)`
  Damage Dealt (% of normal) / 'Iild'
- `presetDamageDealtofnormal(RealLevelClosure lc)`

### AbilityDefinitionMagicDefense

```wurst
public class AbilityDefinitionMagicDefense extends AbilityDefinition
```

'Amdf' / [AbilityIds.magicDefense](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-magicDefense)

**Members:**

- `construct(int newAbilityId)`
- `setDamageTaken(int level, real value)`
  Damage Taken (%) / 'Def1'
- `presetDamageTaken(RealLevelClosure lc)`
- `setChancetoDeflect(int level, real value)`
- `presetChancetoDeflect(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
  Damage Dealt (%) / 'Def2'
- `presetDamageDealt(RealLevelClosure lc)`
- `setDeflectDamageTakenSpells(int level, real value)`
- `presetDeflectDamageTakenSpells(RealLevelClosure lc)`
- `setDeflectDamageTakenPiercing(int level, real value)`
- `presetDeflectDamageTakenPiercing(RealLevelClosure lc)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionAvengerForm

```wurst
public class AbilityDefinitionAvengerForm extends AbilityDefinition
```

'Aave' / [AbilityIds.avengerForm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-avengerForm)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setLifeRegenerationRatepersecond(int level, real value)`
- `presetLifeRegenerationRatepersecond(RealLevelClosure lc)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionHarvestLumber

```wurst
public class AbilityDefinitionHarvestLumber extends AbilityDefinition
```

'Ahrl' / [AbilityIds.harvest1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-harvest1)

**Members:**

- `construct(int newAbilityId)`
- `setLumberCapacity(int level, int value)`
- `presetLumberCapacity(IntLevelClosure lc)`
- `setDamagetoTree(int level, int value)`
- `presetDamagetoTree(IntLevelClosure lc)`

### AbilityDefinitionNeutralBuilding

```wurst
public class AbilityDefinitionNeutralBuilding extends AbilityDefinition
```

'Aneu' / [AbilityIds.selectHero](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-selectHero)

**Members:**

- `construct(int newAbilityId)`
- `setShowUnitIndicator(int level, bool value)`
- `presetShowUnitIndicator(BooleanLevelClosure lc)`
- `setActivationRadius(int level, real value)`
- `presetActivationRadius(RealLevelClosure lc)`
- `setShowSelectUnitButton(int level, bool value)`
- `presetShowSelectUnitButton(BooleanLevelClosure lc)`
- `setInteractionType(int level, string value)`
- `presetInteractionType(StringLevelClosure lc)`

### AbilityDefinitionShopSharing

```wurst
public class AbilityDefinitionShopSharing extends AbilityDefinition
```

'Aall' / [AbilityIds.shopSharingAlliedBldg](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shopSharingAlliedBldg)

**Members:**

- `construct(int newAbilityId)`
- `setShowUnitIndicator(int level, bool value)`
- `presetShowUnitIndicator(BooleanLevelClosure lc)`
- `setActivationRadius(int level, real value)`
- `presetActivationRadius(RealLevelClosure lc)`
- `setShowSelectUnitButton(int level, bool value)`
- `presetShowSelectUnitButton(BooleanLevelClosure lc)`
- `setInteractionType(int level, string value)`
- `presetInteractionType(StringLevelClosure lc)`

### AbilityDefinitionRepairHuman

```wurst
public class AbilityDefinitionRepairHuman extends AbilityDefinition
```

'Ahrp' / [AbilityIds.repairHuman](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-repairHuman)

**Members:**

- `construct(int newAbilityId)`
- `setPowerbuildRate(int level, real value)`
- `presetPowerbuildRate(RealLevelClosure lc)`
- `setNavalRangeBonus(int level, real value)`
- `presetNavalRangeBonus(RealLevelClosure lc)`
- `setRepairTimeRatio(int level, real value)`
- `presetRepairTimeRatio(RealLevelClosure lc)`
- `setRepairCostRatio(int level, real value)`
- `presetRepairCostRatio(RealLevelClosure lc)`
- `setPowerbuildCost(int level, real value)`
- `presetPowerbuildCost(RealLevelClosure lc)`

### AbilityDefinitionAhrs

```wurst
public class AbilityDefinitionAhrs extends AbilityDefinition
```

'Ahrs' / [AbilityIds.ahrs](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ahrs)

**Members:**

- `construct(int newAbilityId)`
- `setTerrainDeformationAmplitude(int level, real value)`
- `presetTerrainDeformationAmplitude(RealLevelClosure lc)`
- `setTerrainDeformationDurationms(int level, int value)`
- `presetTerrainDeformationDurationms(IntLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionFirelordIncinerate

```wurst
public class AbilityDefinitionFirelordIncinerate extends AbilityDefinition
```

'ANic' / [AbilityIds.firelordIncinerate](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-firelordIncinerate)

**Members:**

- `construct(int newAbilityId)`
- `setDeathDamageHalfAmount(int level, real value)`
- `presetDeathDamageHalfAmount(RealLevelClosure lc)`
- `setDeathDamageFullArea(int level, real value)`
- `presetDeathDamageFullArea(RealLevelClosure lc)`
- `setBonusDamageMultiplier(int level, real value)`
- `presetBonusDamageMultiplier(RealLevelClosure lc)`
- `setDeathDamageFullAmount(int level, real value)`
- `presetDeathDamageFullAmount(RealLevelClosure lc)`
- `setDeathDamageDelay(int level, real value)`
- `presetDeathDamageDelay(RealLevelClosure lc)`
- `setDeathDamageHalfArea(int level, real value)`
- `presetDeathDamageHalfArea(RealLevelClosure lc)`

### AbilityDefinitionBearform

```wurst
public class AbilityDefinitionBearform extends AbilityDefinition
```

'Abrf' / [AbilityIds.bearForm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bearForm)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionCryptLordLocustSwarm

```wurst
public class AbilityDefinitionCryptLordLocustSwarm extends AbilityDefinition
```

'AUls' / [AbilityIds.cryptLordLocustSwarm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cryptLordLocustSwarm)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSwarmUnits(int level, int value)`
- `presetNumberofSwarmUnits(IntLevelClosure lc)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `presetUnitReleaseIntervalseconds(RealLevelClosure lc)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `presetMaxSwarmUnitsPerTarget(IntLevelClosure lc)`
- `setSwarmUnitType(int level, string value)`
- `presetSwarmUnitType(StringLevelClosure lc)`
- `setDamageReturnThreshold(int level, real value)`
- `presetDamageReturnThreshold(RealLevelClosure lc)`
- `setDamageReturnFactor(int level, real value)`
- `presetDamageReturnFactor(RealLevelClosure lc)`

### AbilityDefinitionRestoration

```wurst
public class AbilityDefinitionRestoration extends AbilityDefinition
```

'Arst' / [AbilityIds.restore](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-restore)

**Members:**

- `construct(int newAbilityId)`
- `setPowerbuildRate(int level, real value)`
- `presetPowerbuildRate(RealLevelClosure lc)`
- `setNavalRangeBonus(int level, real value)`
- `presetNavalRangeBonus(RealLevelClosure lc)`
- `setRepairTimeRatio(int level, real value)`
- `presetRepairTimeRatio(RealLevelClosure lc)`
- `setRepairCostRatio(int level, real value)`
- `presetRepairCostRatio(RealLevelClosure lc)`
- `setPowerbuildCost(int level, real value)`
- `presetPowerbuildCost(RealLevelClosure lc)`

### AbilityDefinitionFarseerChainLightning

```wurst
public class AbilityDefinitionFarseerChainLightning extends AbilityDefinition
```

'AOcl' / [AbilityIds.chainLightning1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chainLightning1)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperTarget(int level, real value)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `setNumberofTargetsHit(int level, int value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `setDamageReductionperTarget(int level, real value)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionMaxLifeBonusGreater

```wurst
public class AbilityDefinitionMaxLifeBonusGreater extends AbilityDefinition
```

'AIl2' / [AbilityIds.maxLifeBonusGreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-maxLifeBonusGreater)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionInferno

```wurst
public class AbilityDefinitionInferno extends AbilityDefinition
```

'ANin' / [AbilityIds.inferno1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inferno1)

**Members:**

- `construct(int newAbilityId)`
- `setDuration(int level, real value)`
- `presetDuration(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `setImpactDelay(int level, real value)`
- `presetImpactDelay(RealLevelClosure lc)`

### AbilityDefinitionMechanicalCritter

```wurst
public class AbilityDefinitionMechanicalCritter extends AbilityDefinition
```

'Amec' / [AbilityIds.mechanicalCritter](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-mechanicalCritter)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofUnitsCreated(int level, int value)`
- `presetNumberofUnitsCreated(IntLevelClosure lc)`

### AbilityDefinitionMaxLifeBonusLesser

```wurst
public class AbilityDefinitionMaxLifeBonusLesser extends AbilityDefinition
```

'AIl1' / [AbilityIds.maxLifeBonusLesser](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-maxLifeBonusLesser)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionPurgeApg2

```wurst
public class AbilityDefinitionPurgeApg2 extends AbilityDefinition
```

'Apg2' / [AbilityIds.purgeApg2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-purgeApg2)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, int value)`
- `presetManaLoss(IntLevelClosure lc)`
- `setMovementUpdateFrequency(int level, int value)`
- `presetMovementUpdateFrequency(IntLevelClosure lc)`
- `setAttackUpdateFrequency(int level, int value)`
- `presetAttackUpdateFrequency(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `setUnitPauseDuration(int level, real value)`
- `presetUnitPauseDuration(RealLevelClosure lc)`
- `setHeroPauseDuration(int level, real value)`
- `presetHeroPauseDuration(RealLevelClosure lc)`

### AbilityDefinitionBladeMasterCriticalStrike

```wurst
public class AbilityDefinitionBladeMasterCriticalStrike extends AbilityDefinition
```

'AOcr' / [AbilityIds.criticalStrike1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-criticalStrike1)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplier(int level, real value)`
- `presetDamageMultiplier(RealLevelClosure lc)`
- `setChancetoCriticalStrike(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `setNeverMiss(int level, bool value)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `setExcludeItemDamage(int level, bool value)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`

### AbilityDefinitionAuraPlagueAbomination

```wurst
public class AbilityDefinitionAuraPlagueAbomination extends AbilityDefinition
```

'Aap1' / [AbilityIds.auraPlagueAbomination](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-auraPlagueAbomination)

**Members:**

- `construct(int newAbilityId)`
- `setPlagueWardUnitType(int level, string value)`
- `presetPlagueWardUnitType(StringLevelClosure lc)`
- `setDurationofPlagueWard(int level, real value)`
- `presetDurationofPlagueWard(RealLevelClosure lc)`
- `setAuraDuration(int level, real value)`
- `presetAuraDuration(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionAuraPlagueCreep

```wurst
public class AbilityDefinitionAuraPlagueCreep extends AbilityDefinition
```

'Aap3' / [AbilityIds.auraPlagueCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-auraPlagueCreep)

**Members:**

- `construct(int newAbilityId)`
- `setPlagueWardUnitType(int level, string value)`
- `presetPlagueWardUnitType(StringLevelClosure lc)`
- `setDurationofPlagueWard(int level, real value)`
- `presetDurationofPlagueWard(RealLevelClosure lc)`
- `setAuraDuration(int level, real value)`
- `presetAuraDuration(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionPermanentImmolation

```wurst
public class AbilityDefinitionPermanentImmolation extends AbilityDefinition
```

'ANpi' / [AbilityIds.permanentImmolation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-permanentImmolation)

**Members:**

- `construct(int newAbilityId)`
- `setManaDrainedperSecond(int level, real value)`
- `presetManaDrainedperSecond(RealLevelClosure lc)`
- `setBufferManaRequired(int level, real value)`
- `presetBufferManaRequired(RealLevelClosure lc)`
- `setDamageperInterval(int level, real value)`
- `presetDamageperInterval(RealLevelClosure lc)`

### AbilityDefinitionAuraPlaguePlagueWard

```wurst
public class AbilityDefinitionAuraPlaguePlagueWard extends AbilityDefinition
```

'Aap2' / [AbilityIds.diseaseCloud](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-diseaseCloud)

**Members:**

- `construct(int newAbilityId)`
- `setPlagueWardUnitType(int level, string value)`
- `presetPlagueWardUnitType(StringLevelClosure lc)`
- `setDurationofPlagueWard(int level, real value)`
- `presetDurationofPlagueWard(RealLevelClosure lc)`
- `setAuraDuration(int level, real value)`
- `presetAuraDuration(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionCyclonecreep

```wurst
public class AbilityDefinitionCyclonecreep extends AbilityDefinition
```

'ACcy' / [AbilityIds.cyclonecreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cyclonecreep)

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`
- `presetCanBeDispelled(BooleanLevelClosure lc)`

### AbilityDefinitionAuraPlagueCreepnodamage

```wurst
public class AbilityDefinitionAuraPlagueCreepnodamage extends AbilityDefinition
```

'Aap4' / [AbilityIds.auraPlagueCreepnodamage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-auraPlagueCreepnodamage)

**Members:**

- `construct(int newAbilityId)`
- `setPlagueWardUnitType(int level, string value)`
- `presetPlagueWardUnitType(StringLevelClosure lc)`
- `setDurationofPlagueWard(int level, real value)`
- `presetDurationofPlagueWard(RealLevelClosure lc)`
- `setAuraDuration(int level, real value)`
- `presetAuraDuration(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionLightningDamageBonus

```wurst
public class AbilityDefinitionLightningDamageBonus extends AbilityDefinition
```

'AIlb' / [AbilityIds.itemAttackLightningBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackLightningBonus)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setDamageBonusDice(int level, int value)`
- `presetDamageBonusDice(IntLevelClosure lc)`

### AbilityDefinitionArtn

```wurst
public class AbilityDefinitionArtn extends AbilityDefinition
```

'Artn' / [AbilityIds.return111](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-return111)

**Members:**

- `construct(int newAbilityId)`
- `setAcceptsGold(int level, bool value)`
- `presetAcceptsGold(BooleanLevelClosure lc)`
- `setAcceptsLumber(int level, bool value)`
- `presetAcceptsLumber(BooleanLevelClosure lc)`

### AbilityDefinitionCrushingWave

```wurst
public class AbilityDefinitionCrushingWave extends AbilityDefinition
```

'ACcv' / [AbilityIds.crushingWave](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-crushingWave)

**Members:**

- `construct(int newAbilityId)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionColdArrowscreep

```wurst
public class AbilityDefinitionColdArrowscreep extends AbilityDefinition
```

'ACcw' / [AbilityIds.coldArrows1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-coldArrows1)

**Members:**

- `construct(int newAbilityId)`
- `setStackFlags(int level, int value)`
- `presetStackFlags(IntLevelClosure lc)`
- `presetStackFlag(StackFlag stackFlag, boolean flag)`
- `hasStackFlag(StackFlag stackFlag) returns boolean`
- `setExtraDamage(int level, real value)`
- `presetExtraDamage(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionEatTree

```wurst
public class AbilityDefinitionEatTree extends AbilityDefinition
```

'Aeat' / [AbilityIds.eatTree](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-eatTree)

**Members:**

- `construct(int newAbilityId)`
- `setEatDelay(int level, real value)`
- `presetEatDelay(RealLevelClosure lc)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`
- `setRipDelay(int level, real value)`
- `presetRipDelay(RealLevelClosure lc)`

### AbilityDefinitionPreservation

```wurst
public class AbilityDefinitionPreservation extends AbilityDefinition
```

'ANpr' / [AbilityIds.preservation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-preservation)

**Members:**

- `construct(int newAbilityId)`
- `setBuildingTypesAllowed(int level, string value)`
- `presetBuildingTypesAllowed(StringLevelClosure lc)`

### AbilityDefinitionShadowMeldAkama

```wurst
public class AbilityDefinitionShadowMeldAkama extends AbilityDefinition
```

'Ahid' / [AbilityIds.shadowMeldAkama](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowMeldAkama)

**Members:**

- `construct(int newAbilityId)`
- `setDayNightDuration(int level, real value)`
  Day/Night Duration / 'Shm2'
- `presetDayNightDuration(RealLevelClosure lc)`
- `setActionDuration(int level, real value)`
- `presetActionDuration(RealLevelClosure lc)`
- `setFadeDuration(int level, real value)`
- `presetFadeDuration(RealLevelClosure lc)`

### AbilityDefinitionCripplecreep

```wurst
public class AbilityDefinitionCripplecreep extends AbilityDefinition
```

'ACcr' / [AbilityIds.cripplecreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cripplecreep)

**Members:**

- `construct(int newAbilityId)`
- `setDamageReduction(int level, real value)`
- `presetDamageReduction(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Cri2'
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Cri1'
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionCursecreep

```wurst
public class AbilityDefinitionCursecreep extends AbilityDefinition
```

'ACcs' / [AbilityIds.cursecreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cursecreep)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionCriticalStrikecreep

```wurst
public class AbilityDefinitionCriticalStrikecreep extends AbilityDefinition
```

'ACct' / [AbilityIds.criticalStrike](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-criticalStrike)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplier(int level, real value)`
- `presetDamageMultiplier(RealLevelClosure lc)`
- `setChancetoCriticalStrike(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `setNeverMiss(int level, bool value)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `setExcludeItemDamage(int level, bool value)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`

### AbilityDefinitionCannibalizecreep

```wurst
public class AbilityDefinitionCannibalizecreep extends AbilityDefinition
```

'ACcn' / [AbilityIds.cannibalizecreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cannibalizecreep)

**Members:**

- `construct(int newAbilityId)`
- `setMaxHitPoints(int level, real value)`
- `presetMaxHitPoints(RealLevelClosure lc)`
- `setHitPointsperSecond(int level, real value)`
- `presetHitPointsperSecond(RealLevelClosure lc)`

### AbilityDefinitionCycloneCenarius

```wurst
public class AbilityDefinitionCycloneCenarius extends AbilityDefinition
```

'SCc1' / [AbilityIds.cyclone](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cyclone)

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`
- `presetCanBeDispelled(BooleanLevelClosure lc)`

### AbilityDefinitionItemManaRestoreGreater

```wurst
public class AbilityDefinitionItemManaRestoreGreater extends AbilityDefinition
```

'AIm2' / [AbilityIds.itemManaRestoreGreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRestoreGreater)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`

### AbilityDefinitionItemManaRestoreLesser

```wurst
public class AbilityDefinitionItemManaRestoreLesser extends AbilityDefinition
```

'AIm1' / [AbilityIds.itemManaRestoreLesser](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRestoreLesser)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`

### AbilityDefinitionStoneForm

```wurst
public class AbilityDefinitionStoneForm extends AbilityDefinition
```

'Astn' / [AbilityIds.stoneForm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-stoneForm)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setLifeRegenerationRatepersecond(int level, real value)`
- `presetLifeRegenerationRatepersecond(RealLevelClosure lc)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionChainLightningcreep

```wurst
public class AbilityDefinitionChainLightningcreep extends AbilityDefinition
```

'ACcl' / [AbilityIds.chainLightning](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chainLightning)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperTarget(int level, real value)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `setNumberofTargetsHit(int level, int value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `setDamageReductionperTarget(int level, real value)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionFaerieFire

```wurst
public class AbilityDefinitionFaerieFire extends AbilityDefinition
```

'Afae' / [AbilityIds.faerieFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-faerieFire)

**Members:**

- `construct(int newAbilityId)`
- `setAlwaysAutocast(int level, bool value)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`
- `setDefenseReduction(int level, int value)`
- `presetDefenseReduction(IntLevelClosure lc)`

### AbilityDefinitionCharm

```wurst
public class AbilityDefinitionCharm extends AbilityDefinition
```

'ACch' / [AbilityIds.charm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-charm)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionManaSteal

```wurst
public class AbilityDefinitionManaSteal extends AbilityDefinition
```

'Aste' / [AbilityIds.manaSteal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaSteal)

**Members:**

- `construct(int newAbilityId)`
- `setLeaveTargetAlive(int level, bool value)`
- `presetLeaveTargetAlive(BooleanLevelClosure lc)`
- `setLifeConvertedtoMana(int level, real value)`
- `presetLifeConvertedtoMana(RealLevelClosure lc)`
- `setLifeConvertedtoLife(int level, real value)`
- `presetLifeConvertedtoLife(RealLevelClosure lc)`
- `setLifeConversionAsPercent(int level, bool value)`
- `presetLifeConversionAsPercent(BooleanLevelClosure lc)`
- `setManaConversionAsPercent(int level, bool value)`
- `presetManaConversionAsPercent(BooleanLevelClosure lc)`

### AbilityDefinitionAuraEnduranceCreep

```wurst
public class AbilityDefinitionAuraEnduranceCreep extends AbilityDefinition
```

'SCae' / [AbilityIds.enduranceAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-enduranceAura)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionTichondriusInferno

```wurst
public class AbilityDefinitionTichondriusInferno extends AbilityDefinition
```

'SNin' / [AbilityIds.inferno](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inferno)

**Members:**

- `construct(int newAbilityId)`
- `setDuration(int level, real value)`
- `presetDuration(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `setImpactDelay(int level, real value)`
- `presetImpactDelay(RealLevelClosure lc)`

### AbilityDefinitionCryptLordImpale

```wurst
public class AbilityDefinitionCryptLordImpale extends AbilityDefinition
```

'AUim' / [AbilityIds.cryptLordImpale](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cryptLordImpale)

**Members:**

- `construct(int newAbilityId)`
- `setWaveTimeseconds(int level, real value)`
- `presetWaveTimeseconds(RealLevelClosure lc)`
- `setAirTimeseconds(int level, real value)`
- `presetAirTimeseconds(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setWaveDistance(int level, real value)`
- `presetWaveDistance(RealLevelClosure lc)`
- `setUninterruptible(int level, bool value)`
- `presetUninterruptible(BooleanLevelClosure lc)`
- `setAirborneTargetsVulnerable(int level, bool value)`
- `presetAirborneTargetsVulnerable(BooleanLevelClosure lc)`

### AbilityDefinitionFrostBolt

```wurst
public class AbilityDefinitionFrostBolt extends AbilityDefinition
```

'ACcb' / [AbilityIds.frostBolt](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostBolt)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionCarrionSwarmcreep

```wurst
public class AbilityDefinitionCarrionSwarmcreep extends AbilityDefinition
```

'ACca' / [AbilityIds.carrionSwarm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-carrionSwarm)

**Members:**

- `construct(int newAbilityId)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionDreadlordInferno

```wurst
public class AbilityDefinitionDreadlordInferno extends AbilityDefinition
```

'AUin' / [AbilityIds.inferno2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inferno2)

**Members:**

- `construct(int newAbilityId)`
- `setDuration(int level, real value)`
- `presetDuration(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `setImpactDelay(int level, real value)`
- `presetImpactDelay(RealLevelClosure lc)`

### AbilityDefinitionWispHarvestInvulnerable

```wurst
public class AbilityDefinitionWispHarvestInvulnerable extends AbilityDefinition
```

'Awh2' / [AbilityIds.gather1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-gather1)

**Members:**

- `construct(int newAbilityId)`
- `setArtAttachmentHeight(int level, real value)`
- `presetArtAttachmentHeight(RealLevelClosure lc)`
- `setIntervalsBeforeChangingTrees(int level, int value)`
- `presetIntervalsBeforeChangingTrees(IntLevelClosure lc)`
- `setLumberperInterval(int level, real value)`
- `presetLumberperInterval(RealLevelClosure lc)`

### AbilityDefinitionOrbofAnnihilation

```wurst
public class AbilityDefinitionOrbofAnnihilation extends AbilityDefinition
```

'Afak' / [AbilityIds.orbofAnnihilation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orbofAnnihilation)

**Members:**

- `construct(int newAbilityId)`
- `setSmallDamageFactor(int level, real value)`
- `presetSmallDamageFactor(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setHalfDamageRadius(int level, real value)`
- `presetHalfDamageRadius(RealLevelClosure lc)`
- `setMediumDamageFactor(int level, real value)`
- `presetMediumDamageFactor(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`

### AbilityDefinitionOrbOfAnnihilationQuillSpray

```wurst
public class AbilityDefinitionOrbOfAnnihilationQuillSpray extends AbilityDefinition
```

'ANak' / [AbilityIds.quillSpray](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-quillSpray)

**Members:**

- `construct(int newAbilityId)`
- `setSmallDamageFactor(int level, real value)`
- `presetSmallDamageFactor(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setHalfDamageRadius(int level, real value)`
- `presetHalfDamageRadius(RealLevelClosure lc)`
- `setMediumDamageFactor(int level, real value)`
- `presetMediumDamageFactor(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`

### AbilityDefinitionMaxManaBonusLeast

```wurst
public class AbilityDefinitionMaxManaBonusLeast extends AbilityDefinition
```

'AImb' / [AbilityIds.maxManaBonusLeast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-maxManaBonusLeast)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionNeutralBuildinganyunit

```wurst
public class AbilityDefinitionNeutralBuildinganyunit extends AbilityDefinition
```

'Ane2' / [AbilityIds.neutralBuildinganyunit](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-neutralBuildinganyunit)

**Members:**

- `construct(int newAbilityId)`
- `setShowUnitIndicator(int level, bool value)`
- `presetShowUnitIndicator(BooleanLevelClosure lc)`
- `setActivationRadius(int level, real value)`
- `presetActivationRadius(RealLevelClosure lc)`
- `setShowSelectUnitButton(int level, bool value)`
- `presetShowSelectUnitButton(BooleanLevelClosure lc)`
- `setInteractionType(int level, string value)`
- `presetInteractionType(StringLevelClosure lc)`

### AbilityDefinitionGhost

```wurst
public class AbilityDefinitionGhost extends AbilityDefinition
```

'Agho' / [AbilityIds.ghost](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ghost)

**Members:**

- `construct(int newAbilityId)`
- `setDoesNotBlockBuildings(int level, bool value)`
- `presetDoesNotBlockBuildings(BooleanLevelClosure lc)`
- `setImmunetoMorphEffects(int level, bool value)`
- `presetImmunetoMorphEffects(BooleanLevelClosure lc)`
- `setAutoAcquireAttackTargets(int level, bool value)`
- `presetAutoAcquireAttackTargets(BooleanLevelClosure lc)`

### AbilityDefinitionDevourCreep

```wurst
public class AbilityDefinitionDevourCreep extends AbilityDefinition
```

'ACdv' / [AbilityIds.devour](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-devour)

**Members:**

- `construct(int newAbilityId)`
- `setMaxCreepLevel(int level, int value)`
- `presetMaxCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionGiveLumber

```wurst
public class AbilityDefinitionGiveLumber extends AbilityDefinition
```

'AIlu' / [AbilityIds.giveLumber](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-giveLumber)

**Members:**

- `construct(int newAbilityId)`
- `setLumberGiven(int level, int value)`
- `presetLumberGiven(IntLevelClosure lc)`

### AbilityDefinitionFireBoltwarlock

```wurst
public class AbilityDefinitionFireBoltwarlock extends AbilityDefinition
```

'Awfb' / [AbilityIds.firebolt2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-firebolt2)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionDrainLifeCreep

```wurst
public class AbilityDefinitionDrainLifeCreep extends AbilityDefinition
```

'ACdr' / [AbilityIds.drainLifeCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-drainLifeCreep)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsDrained(int level, real value)`
- `presetHitPointsDrained(RealLevelClosure lc)`
- `setDrainInterval(int level, real value)`
- `presetDrainInterval(RealLevelClosure lc)`
- `setBonusLifeDecay(int level, real value)`
- `presetBonusLifeDecay(RealLevelClosure lc)`
- `setManaTransferredPerSecond(int level, real value)`
- `presetManaTransferredPerSecond(RealLevelClosure lc)`
- `setBonusManaDecay(int level, real value)`
- `presetBonusManaDecay(RealLevelClosure lc)`
- `setBonusLifeFactor(int level, real value)`
- `presetBonusLifeFactor(RealLevelClosure lc)`
- `setBonusManaFactor(int level, real value)`
- `presetBonusManaFactor(RealLevelClosure lc)`
- `setLifeTransferredPerSecond(int level, real value)`
- `presetLifeTransferredPerSecond(RealLevelClosure lc)`
- `setManaPointsDrained(int level, real value)`
- `presetManaPointsDrained(RealLevelClosure lc)`
- `presetDrainIntervalseconds(RealLevelClosure lc)`
- `setDrainIntervalseconds(int level, real value)`

### AbilityDefinitionPaladinHolyLight

```wurst
public class AbilityDefinitionPaladinHolyLight extends AbilityDefinition
```

'AHhb' / [AbilityIds.holyLight](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-holyLight)

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`
  Amount Healed/Damaged / 'Hhb1'
- `presetAmountHealedDamaged(RealLevelClosure lc)`

### AbilityDefinitionLevelMod

```wurst
public class AbilityDefinitionLevelMod extends AbilityDefinition
```

'AIlm' / [AbilityIds.itemLevelGain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLevelGain)

**Members:**

- `construct(int newAbilityId)`
- `setLevelsGained(int level, int value)`
- `presetLevelsGained(IntLevelClosure lc)`

### AbilityDefinitionOrbofLightning

```wurst
public class AbilityDefinitionOrbofLightning extends AbilityDefinition
```

'AIll' / [AbilityIds.orbofLightning](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orbofLightning)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setEffectAbility(int level, string value)`
- `presetEffectAbility(StringLevelClosure lc)`

### AbilityDefinitionLightningShieldAIls

```wurst
public class AbilityDefinitionLightningShieldAIls extends AbilityDefinition
```

'AIls' / [AbilityIds.lightningShieldAIls](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lightningShieldAIls)

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionAbolishMagicCreep

```wurst
public class AbilityDefinitionAbolishMagicCreep extends AbilityDefinition
```

'ACdm' / [AbilityIds.abolishMagicCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-abolishMagicCreep)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `presetManaLoss(RealLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionLightningPurge

```wurst
public class AbilityDefinitionLightningPurge extends AbilityDefinition
```

'AIlp' / [AbilityIds.itemPurge](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPurge)

**Members:**

- `construct(int newAbilityId)`
- `setHeroPauseDuration(int level, real value)`
- `presetHeroPauseDuration(RealLevelClosure lc)`
- `setUnitPauseDuration(int level, real value)`
- `presetUnitPauseDuration(RealLevelClosure lc)`
- `setMovementUpdateFrequency(int level, int value)`
- `presetMovementUpdateFrequency(IntLevelClosure lc)`
- `setAttackUpdateFrequency(int level, int value)`
- `presetAttackUpdateFrequency(IntLevelClosure lc)`
- `setManaLoss(int level, int value)`
- `presetManaLoss(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionMaxLifeBonusLeast

```wurst
public class AbilityDefinitionMaxLifeBonusLeast extends AbilityDefinition
```

'AIlf' / [AbilityIds.maxLifeBonusLeast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-maxLifeBonusLeast)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionParasite

```wurst
public class AbilityDefinitionParasite extends AbilityDefinition
```

'ANpa' / [AbilityIds.parasite](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-parasite)

**Members:**

- `construct(int newAbilityId)`
- `setStackingType(int level, int value)`
- `presetStackingTypes(IntLevelClosure lc)`
- `presetStackingType(StackingType stackingType, boolean flag)`
- `hasStackingType(StackingType stackingType) returns boolean`
- `setSummonedUnitDuration(int level, real value)`
- `presetSummonedUnitDuration(RealLevelClosure lc)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setUnitType(int level, string value)`
- `presetUnitType(StringLevelClosure lc)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionDemonHunterMetamorphosis

```wurst
public class AbilityDefinitionDemonHunterMetamorphosis extends AbilityDefinition
```

'AEme' / [AbilityIds.metamorphosis](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-metamorphosis)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormHitPointBonus(int level, real value)`
- `presetAlternateFormHitPointBonus(RealLevelClosure lc)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionDevourMagiccreep

```wurst
public class AbilityDefinitionDevourMagiccreep extends AbilityDefinition
```

'ACde' / [AbilityIds.devourMagiccreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-devourMagiccreep)

**Members:**

- `construct(int newAbilityId)`
- `setIgnoreFriendlyBuffs(int level, bool value)`
- `presetIgnoreFriendlyBuffs(BooleanLevelClosure lc)`
- `setLifePerUnit(int level, real value)`
- `presetLifePerUnit(RealLevelClosure lc)`
- `setManaPerUnit(int level, real value)`
- `presetManaPerUnit(RealLevelClosure lc)`
- `setLifePerBuff(int level, real value)`
- `presetLifePerBuff(RealLevelClosure lc)`
- `setManaPerBuff(int level, real value)`
- `presetManaPerBuff(RealLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionAapl

```wurst
public class AbilityDefinitionAapl extends AbilityDefinition
```

'Aapl' / [AbilityIds.diseaseCloud1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-diseaseCloud1)

**Members:**

- `construct(int newAbilityId)`
- `setPlagueWardUnitType(int level, string value)`
- `presetPlagueWardUnitType(StringLevelClosure lc)`
- `setDurationofPlagueWard(int level, real value)`
- `presetDurationofPlagueWard(RealLevelClosure lc)`
- `setAuraDuration(int level, real value)`
- `presetAuraDuration(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionDeathCoilcreep

```wurst
public class AbilityDefinitionDeathCoilcreep extends AbilityDefinition
```

'ACdc' / [AbilityIds.deathCoil](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathCoil)

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`
  Amount Healed/Damaged / 'Udc1'
- `presetAmountHealedDamaged(RealLevelClosure lc)`

### AbilityDefinitionDemonHunterManaBurn

```wurst
public class AbilityDefinitionDemonHunterManaBurn extends AbilityDefinition
```

'AEmb' / [AbilityIds.manaBurn1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaBurn1)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaDrained(int level, real value)`
- `presetMaxManaDrained(RealLevelClosure lc)`
- `setBoltLifetime(int level, real value)`
- `presetBoltLifetime(RealLevelClosure lc)`
- `setBoltDelay(int level, real value)`
- `presetBoltDelay(RealLevelClosure lc)`

### AbilityDefinitionLichFrostArmorAutocast

```wurst
public class AbilityDefinitionLichFrostArmorAutocast extends AbilityDefinition
```

'AUfu' / [AbilityIds.lichFrostArmorAutocast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lichFrostArmorAutocast)

**Members:**

- `construct(int newAbilityId)`
- `setArmorDuration(int level, real value)`
- `presetArmorDuration(RealLevelClosure lc)`
- `setArmorBonus(int level, real value)`
- `presetArmorBonus(RealLevelClosure lc)`

### AbilityDefinitionAnimateDeaditemspecial

```wurst
public class AbilityDefinitionAnimateDeaditemspecial extends AbilityDefinition
```

'AInd' / [AbilityIds.animateDeaditemspecial](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-animateDeaditemspecial)

**Members:**

- `construct(int newAbilityId)`
- `setInheritUpgrades(int level, bool value)`
- `presetInheritUpgrades(BooleanLevelClosure lc)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`
- `setNumberofCorpsesRaised(int level, int value)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`

### AbilityDefinitionFrostArmorcreep

```wurst
public class AbilityDefinitionFrostArmorcreep extends AbilityDefinition
```

'ACfa' / [AbilityIds.frostArmor](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostArmor)

**Members:**

- `construct(int newAbilityId)`
- `setArmorDuration(int level, real value)`
- `presetArmorDuration(RealLevelClosure lc)`
- `setArmorBonus(int level, real value)`
- `presetArmorBonus(RealLevelClosure lc)`

### AbilityDefinitionManaBatteryObsidianStatue

```wurst
public class AbilityDefinitionManaBatteryObsidianStatue extends AbilityDefinition
```

'Amb2' / [AbilityIds.manaBatteryObsidianStatue](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaBatteryObsidianStatue)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`
- `setWaterHeight(int level, real value)`
- `presetWaterHeight(RealLevelClosure lc)`
- `setAutocastRequirement(int level, real value)`
- `presetAutocastRequirement(RealLevelClosure lc)`
- `setManaGained(int level, real value)`
- `presetManaGained(RealLevelClosure lc)`
- `setRegenerateOnlyAtNight(int level, bool value)`
- `presetRegenerateOnlyAtNight(BooleanLevelClosure lc)`

### AbilityDefinitionFireBoltcreep

```wurst
public class AbilityDefinitionFireBoltcreep extends AbilityDefinition
```

'ACfb' / [AbilityIds.firebolt1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-firebolt1)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionEvasioncreep100

```wurst
public class AbilityDefinitionEvasioncreep100 extends AbilityDefinition
```

'ACes' / [AbilityIds.evasion1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-evasion1)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionVenomSpears

```wurst
public class AbilityDefinitionVenomSpears extends AbilityDefinition
```

'Aven' / [AbilityIds.envenomedSpears](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-envenomedSpears)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingTypes(IntLevelClosure lc)`
- `presetStackingType(StackingType stackingType, boolean flag)`
- `hasStackingType(StackingType stackingType) returns boolean`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionEvasioncreep

```wurst
public class AbilityDefinitionEvasioncreep extends AbilityDefinition
```

'AIev' / [AbilityIds.evasion3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-evasion3)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldBurrow

```wurst
public class AbilityDefinitionCargoHoldBurrow extends AbilityDefinition
```

'Abun' / [AbilityIds.cargoHold](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cargoHold)

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionMagicImmunityAImx

```wurst
public class AbilityDefinitionMagicImmunityAImx extends AbilityDefinition
```

'AImx' / [AbilityIds.magicImmunityAImx](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-magicImmunityAImx)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionBurrow

```wurst
public class AbilityDefinitionBurrow extends AbilityDefinition
```

'Abur' / [AbilityIds.burrow](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-burrow)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionCyclone

```wurst
public class AbilityDefinitionCyclone extends AbilityDefinition
```

'Acyc' / [AbilityIds.cyclone1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cyclone1)

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`
- `presetCanBeDispelled(BooleanLevelClosure lc)`

### AbilityDefinitionItemManaRestoreAoe

```wurst
public class AbilityDefinitionItemManaRestoreAoe extends AbilityDefinition
```

'AImr' / [AbilityIds.itemAreaManaRegain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAreaManaRegain)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`

### AbilityDefinitionStaffoTeleportation

```wurst
public class AbilityDefinitionStaffoTeleportation extends AbilityDefinition
```

'AImt' / [AbilityIds.staffoTeleportation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-staffoTeleportation)

**Members:**

- `construct(int newAbilityId)`
- `setUseTeleportClustering(int level, bool value)`
- `presetUseTeleportClustering(BooleanLevelClosure lc)`
- `setCastingDelay(int level, real value)`
- `presetCastingDelay(RealLevelClosure lc)`
- `setNumberofUnitsTeleported(int level, int value)`
- `presetNumberofUnitsTeleported(IntLevelClosure lc)`

### AbilityDefinitionEnsnareCreep

```wurst
public class AbilityDefinitionEnsnareCreep extends AbilityDefinition
```

'ACen' / [AbilityIds.ensnare](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ensnare)

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`
- `setStunDuration(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`

### AbilityDefinitionMoveSpeedBonus

```wurst
public class AbilityDefinitionMoveSpeedBonus extends AbilityDefinition
```

'AIms' / [AbilityIds.itemMoveSpeedBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMoveSpeedBonus)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedBonus(int level, int value)`
- `presetMovementSpeedBonus(IntLevelClosure lc)`

### AbilityDefinitionPhoenix

```wurst
public class AbilityDefinitionPhoenix extends AbilityDefinition
```

'Aphx' / [AbilityIds.phoenix2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-phoenix2)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionNeutralSpell

```wurst
public class AbilityDefinitionNeutralSpell extends AbilityDefinition
```

'AAns' / [AbilityIds.neutralSpell](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-neutralSpell)

**Members:**

- `construct(int newAbilityId)`
- `setChargeOwningPlayer(int level, bool value)`
- `presetChargeOwningPlayer(BooleanLevelClosure lc)`
- `setGoldCost(int level, int value)`
- `presetGoldCost(IntLevelClosure lc)`
- `setBaseOrderID(int level, string value)`
- `presetBaseOrderID(StringLevelClosure lc)`
- `setLumberCost(int level, int value)`
- `presetLumberCost(IntLevelClosure lc)`

### AbilityDefinitionAImm

```wurst
public class AbilityDefinitionAImm extends AbilityDefinition
```

'AImm' / [AbilityIds.itemManaBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaBonus)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionShadowHunterHealingWave

```wurst
public class AbilityDefinitionShadowHunterHealingWave extends AbilityDefinition
```

'AOhw' / [AbilityIds.shadowHunterHealingWave](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowHunterHealingWave)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperTarget(int level, real value)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `setNumberofTargetsHit(int level, int value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `setDamageReductionperTarget(int level, real value)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionShadowHunterHex

```wurst
public class AbilityDefinitionShadowHunterHex extends AbilityDefinition
```

'AOhx' / [AbilityIds.shadowHunterHex](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowHunterHex)

**Members:**

- `construct(int newAbilityId)`
- `setMorphUnitsGround(int level, string value)`
- `presetMorphUnitsGround(StringLevelClosure lc)`
- `setMorphUnitsWater(int level, string value)`
- `presetMorphUnitsWater(StringLevelClosure lc)`
- `setMorphUnitsAmphibious(int level, string value)`
- `presetMorphUnitsAmphibious(StringLevelClosure lc)`
- `setMorphUnitsAir(int level, string value)`
- `presetMorphUnitsAir(StringLevelClosure lc)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionItemMonsterLure

```wurst
public class AbilityDefinitionItemMonsterLure extends AbilityDefinition
```

'AImo' / [AbilityIds.itemMonsterLure](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMonsterLure)

**Members:**

- `construct(int newAbilityId)`
- `setLureUnitType(int level, string value)`
- `presetLureUnitType(StringLevelClosure lc)`
- `setNumberofLures(int level, int value)`
- `presetNumberofLures(IntLevelClosure lc)`
- `setActivationDelay(int level, real value)`
- `presetActivationDelay(RealLevelClosure lc)`
- `setLureIntervalseconds(int level, real value)`
- `presetLureIntervalseconds(RealLevelClosure lc)`

### AbilityDefinitionAImi

```wurst
public class AbilityDefinitionAImi extends AbilityDefinition
```

'AImi' / [AbilityIds.itemLifeGain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifeGain)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionAIml

```wurst
public class AbilityDefinitionAIml extends AbilityDefinition
```

'AIml' / [AbilityIds.itemLifeBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifeBonus)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionPermanentHitpointBonusfromchargeditem

```wurst
public class AbilityDefinitionPermanentHitpointBonusfromchargeditem extends AbilityDefinition
```

'AImh' / [AbilityIds.permanentHitpointBonusfromchargeditem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-permanentHitpointBonusfromchargeditem)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionFeedbackArcaneTower

```wurst
public class AbilityDefinitionFeedbackArcaneTower extends AbilityDefinition
```

'Afbt' / [AbilityIds.feedbackArcaneTower](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-feedbackArcaneTower)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaDrainedUnits(int level, real value)`
- `presetMaxManaDrainedUnits(RealLevelClosure lc)`
- `setDamageRatioUnits(int level, real value)`
  Damage Ratio - Units (%) / 'fbk2'
- `presetDamageRatioUnits(RealLevelClosure lc)`
- `setMaxManaDrainedHeros(int level, real value)`
- `presetMaxManaDrainedHeros(RealLevelClosure lc)`
- `setDamageRatioHeros(int level, real value)`
  Damage Ratio - Heros (%) / 'fbk4'
- `presetDamageRatioHeros(RealLevelClosure lc)`
- `setSummonedDamage(int level, real value)`
- `presetSummonedDamage(RealLevelClosure lc)`

### AbilityDefinitionChaosGrunt

```wurst
public class AbilityDefinitionChaosGrunt extends AbilityDefinition
```

'Sca1' / [AbilityIds.chaosGrunt](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chaosGrunt)

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionChaosRaider

```wurst
public class AbilityDefinitionChaosRaider extends AbilityDefinition
```

'Sca2' / [AbilityIds.chaosRaider](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chaosRaider)

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionStasisTrap

```wurst
public class AbilityDefinitionStasisTrap extends AbilityDefinition
```

'Asta' / [AbilityIds.stasisTrap](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-stasisTrap)

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`
- `setActivationDelay(int level, real value)`
- `presetActivationDelay(RealLevelClosure lc)`
- `setDetectionRadius(int level, real value)`
- `presetDetectionRadius(RealLevelClosure lc)`
- `setDetonationRadius(int level, real value)`
- `presetDetonationRadius(RealLevelClosure lc)`
- `setStunDuration(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`
- `setDetonationDelay(int level, real value)`
- `presetDetonationDelay(RealLevelClosure lc)`

### AbilityDefinitionPermanentImmolationgraphic

```wurst
public class AbilityDefinitionPermanentImmolationgraphic extends AbilityDefinition
```

'Apig' / [AbilityIds.permanentImmolationgraphic](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-permanentImmolationgraphic)

**Members:**

- `construct(int newAbilityId)`
- `setManaDrainedperSecond(int level, real value)`
- `presetManaDrainedperSecond(RealLevelClosure lc)`
- `setBufferManaRequired(int level, real value)`
- `presetBufferManaRequired(RealLevelClosure lc)`
- `setDamageperInterval(int level, real value)`
- `presetDamageperInterval(RealLevelClosure lc)`

### AbilityDefinitionChaosShaman

```wurst
public class AbilityDefinitionChaosShaman extends AbilityDefinition
```

'Sca3' / [AbilityIds.chaosShaman](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chaosShaman)

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionChaosKodo

```wurst
public class AbilityDefinitionChaosKodo extends AbilityDefinition
```

'Sca4' / [AbilityIds.chaosKodo](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chaosKodo)

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionChaosPeon

```wurst
public class AbilityDefinitionChaosPeon extends AbilityDefinition
```

'Sca5' / [AbilityIds.chaosPeon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chaosPeon)

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionFrostDamageBonus

```wurst
public class AbilityDefinitionFrostDamageBonus extends AbilityDefinition
```

'AIob' / [AbilityIds.itemAttackFrostBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackFrostBonus)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionChaosGrom

```wurst
public class AbilityDefinitionChaosGrom extends AbilityDefinition
```

'Sca6' / [AbilityIds.chaosGrom](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chaosGrom)

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionInnerFire

```wurst
public class AbilityDefinitionInnerFire extends AbilityDefinition
```

'Ainf' / [AbilityIds.innerFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-innerFire)

**Members:**

- `construct(int newAbilityId)`
- `setAutocastRange(int level, real value)`
- `presetAutocastRange(RealLevelClosure lc)`
- `setLifeRegenRate(int level, real value)`
- `presetLifeRegenRate(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Inf1'
- `presetDamageIncrease(RealLevelClosure lc)`

### AbilityDefinitionMoonPriestessSearingArrows

```wurst
public class AbilityDefinitionMoonPriestessSearingArrows extends AbilityDefinition
```

'AHfa' / [AbilityIds.searingArrows1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-searingArrows1)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionMonsoon

```wurst
public class AbilityDefinitionMonsoon extends AbilityDefinition
```

'ANmo' / [AbilityIds.monsoon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-monsoon)

**Members:**

- `construct(int newAbilityId)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionInventory

```wurst
public class AbilityDefinitionInventory extends AbilityDefinition
```

'AInv' / [AbilityIds.inventory](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inventory)

**Members:**

- `construct(int newAbilityId)`
- `setCanDropItems(int level, bool value)`
- `presetCanDropItems(BooleanLevelClosure lc)`
- `setCanUseItems(int level, bool value)`
- `presetCanUseItems(BooleanLevelClosure lc)`
- `setDropItemsOnDeath(int level, bool value)`
- `presetDropItemsOnDeath(BooleanLevelClosure lc)`
- `setCanGetItems(int level, bool value)`
- `presetCanGetItems(BooleanLevelClosure lc)`
- `setItemCapacity(int level, int value)`
- `presetItemCapacity(IntLevelClosure lc)`

### AbilityDefinitionnullroarsummoner

```wurst
public class AbilityDefinitionnullroarsummoner extends AbilityDefinition
```

'Ahnl' / [AbilityIds.nullroarsummoner](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-nullroarsummoner)

**Members:**

- `construct(int newAbilityId)`
- `setPreferFriendlies(int level, bool value)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`
- `setPreferHostiles(int level, bool value)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `setManaRegen(int level, real value)`
- `presetManaRegen(RealLevelClosure lc)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `presetDamageIncrease(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setLifeRegenerationRate(int level, real value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`

### AbilityDefinitionSeaWitchManaShield

```wurst
public class AbilityDefinitionSeaWitchManaShield extends AbilityDefinition
```

'ANms' / [AbilityIds.seaWitchManaShield](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-seaWitchManaShield)

**Members:**

- `construct(int newAbilityId)`
- `setDamageAbsorbed(int level, real value)`
  Damage Absorbed (%) / 'Nms2'
- `presetDamageAbsorbed(RealLevelClosure lc)`
- `setManaperHitPoint(int level, real value)`
- `presetManaperHitPoint(RealLevelClosure lc)`

### AbilityDefinitionSpawnSpiderlingOnDeath

```wurst
public class AbilityDefinitionSpawnSpiderlingOnDeath extends AbilityDefinition
```

'Assp' / [AbilityIds.spawnSpiderlings](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spawnSpiderlings)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofUnits(int level, int value)`
- `presetNumberofUnits(IntLevelClosure lc)`
- `setUnitType(int level, string value)`
- `presetUnitType(StringLevelClosure lc)`

### AbilityDefinitionScrollofRejuvII

```wurst
public class AbilityDefinitionScrollofRejuvII extends AbilityDefinition
```

'AIp6' / [AbilityIds.scrollofRejuvII](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-scrollofRejuvII)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionMindRot

```wurst
public class AbilityDefinitionMindRot extends AbilityDefinition
```

'ANmr' / [AbilityIds.mindRot](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-mindRot)

**Members:**

- `construct(int newAbilityId)`
- `setManaDrainedperSecond(int level, real value)`
- `presetManaDrainedperSecond(RealLevelClosure lc)`

### AbilityDefinitionFrostNovacreep

```wurst
public class AbilityDefinitionFrostNovacreep extends AbilityDefinition
```

'ACfn' / [AbilityIds.frostNova](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostNova)

**Members:**

- `construct(int newAbilityId)`
- `setAreaofEffectDamage(int level, real value)`
- `presetAreaofEffectDamage(RealLevelClosure lc)`
- `setSpecificTargetDamage(int level, real value)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionScrollofRejuvI

```wurst
public class AbilityDefinitionScrollofRejuvI extends AbilityDefinition
```

'AIp5' / [AbilityIds.scrollofRejuvI](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-scrollofRejuvI)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionPermanentInvisibility

```wurst
public class AbilityDefinitionPermanentInvisibility extends AbilityDefinition
```

'Apiv' / [AbilityIds.permanentInvisibility](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-permanentInvisibility)

**Members:**

- `construct(int newAbilityId)`
- `setAutoAcquireAttackTargets(int level, bool value)`
- `presetAutoAcquireAttackTargets(BooleanLevelClosure lc)`

### AbilityDefinitionFeedbackSpiritBeast

```wurst
public class AbilityDefinitionFeedbackSpiritBeast extends AbilityDefinition
```

'Afbb' / [AbilityIds.feedbackSpiritBeast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-feedbackSpiritBeast)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedDamage(int level, real value)`
- `presetSummonedDamage(RealLevelClosure lc)`
- `setMaxManaDrainedUnits(int level, real value)`
- `presetMaxManaDrainedUnits(RealLevelClosure lc)`
- `setDamageRatioUnits(int level, real value)`
  Damage Ratio - Units (%) / 'fbk2'
- `presetDamageRatioUnits(RealLevelClosure lc)`
- `setMaxManaDrainedHeros(int level, real value)`
- `presetMaxManaDrainedHeros(RealLevelClosure lc)`
- `setDamageRatioHeros(int level, real value)`
  Damage Ratio - Heros (%) / 'fbk4'
- `presetDamageRatioHeros(RealLevelClosure lc)`

### AbilityDefinitionPotionofRejuvIV

```wurst
public class AbilityDefinitionPotionofRejuvIV extends AbilityDefinition
```

'AIp4' / [AbilityIds.potionofRejuvIV](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-potionofRejuvIV)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionPotionofRejuvIII

```wurst
public class AbilityDefinitionPotionofRejuvIII extends AbilityDefinition
```

'AIp3' / [AbilityIds.potionofRejuvIII](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-potionofRejuvIII)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionFlameStrikeCreep

```wurst
public class AbilityDefinitionFlameStrikeCreep extends AbilityDefinition
```

'ACfs' / [AbilityIds.flameStrikeCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-flameStrikeCreep)

**Members:**

- `construct(int newAbilityId)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `setHalfDamageDealt(int level, real value)`
- `presetHalfDamageDealt(RealLevelClosure lc)`
- `setFullDamageDealt(int level, real value)`
- `presetFullDamageDealt(RealLevelClosure lc)`
- `setHalfDamageInterval(int level, real value)`
- `presetHalfDamageInterval(RealLevelClosure lc)`
- `setFullDamageInterval(int level, real value)`
- `presetFullDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionWispHarvest

```wurst
public class AbilityDefinitionWispHarvest extends AbilityDefinition
```

'Awha' / [AbilityIds.gather](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-gather)

**Members:**

- `construct(int newAbilityId)`
- `setArtAttachmentHeight(int level, real value)`
- `presetArtAttachmentHeight(RealLevelClosure lc)`
- `setIntervalsBeforeChangingTrees(int level, int value)`
- `presetIntervalsBeforeChangingTrees(IntLevelClosure lc)`
- `setLumberperInterval(int level, real value)`
- `presetLumberperInterval(RealLevelClosure lc)`

### AbilityDefinitionPotionofRejuvII

```wurst
public class AbilityDefinitionPotionofRejuvII extends AbilityDefinition
```

'AIp2' / [AbilityIds.potionofRejuvII](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-potionofRejuvII)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionHardenedSkin

```wurst
public class AbilityDefinitionHardenedSkin extends AbilityDefinition
```

'Assk' / [AbilityIds.hardenedSkin](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-hardenedSkin)

**Members:**

- `construct(int newAbilityId)`
- `setIncludeRangedDamage(int level, bool value)`
- `presetIncludeRangedDamage(BooleanLevelClosure lc)`
- `setMinimumDamage(int level, real value)`
- `presetMinimumDamage(RealLevelClosure lc)`
- `setIgnoredDamage(int level, real value)`
- `presetIgnoredDamage(RealLevelClosure lc)`
- `setChancetoReduceDamage(int level, real value)`
  Chance to Reduce Damage (%) / 'Ssk1'
- `presetChancetoReduceDamage(RealLevelClosure lc)`
- `setIncludeMeleeDamage(int level, bool value)`
- `presetIncludeMeleeDamage(BooleanLevelClosure lc)`

### AbilityDefinitionForceofNaturecreep

```wurst
public class AbilityDefinitionForceofNaturecreep extends AbilityDefinition
```

'ACfr' / [AbilityIds.forceofNature](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-forceofNature)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionPotionofRejuvI

```wurst
public class AbilityDefinitionPotionofRejuvI extends AbilityDefinition
```

'AIp1' / [AbilityIds.potionofRejuvI](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-potionofRejuvI)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionFeedback

```wurst
public class AbilityDefinitionFeedback extends AbilityDefinition
```

'Afbk' / [AbilityIds.feedback](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-feedback)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedDamage(int level, real value)`
- `presetSummonedDamage(RealLevelClosure lc)`
- `setDamageRatioUnits(int level, real value)`
  Damage Ratio - Units (%) / 'fbk2'
- `presetDamageRatioUnits(RealLevelClosure lc)`
- `setMaxManaDrainedHeros(int level, real value)`
- `presetMaxManaDrainedHeros(RealLevelClosure lc)`
- `setMaxManaDrainedUnits(int level, real value)`
- `presetMaxManaDrainedUnits(RealLevelClosure lc)`
- `setDamageRatioHeros(int level, real value)`
  Damage Ratio - Heros (%) / 'fbk4'
- `presetDamageRatioHeros(RealLevelClosure lc)`

### AbilityDefinitionStrengthModPlus2

```wurst
public class AbilityDefinitionStrengthModPlus2 extends AbilityDefinition
```

'AInm' / [AbilityIds.strengthModPlus2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthModPlus2)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionFaerieFirecreep

```wurst
public class AbilityDefinitionFaerieFirecreep extends AbilityDefinition
```

'ACff' / [AbilityIds.faerieFirecreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-faerieFirecreep)

**Members:**

- `construct(int newAbilityId)`
- `setAlwaysAutocast(int level, bool value)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`
- `setDefenseReduction(int level, int value)`
- `presetDefenseReduction(IntLevelClosure lc)`

### AbilityDefinitionAarm

```wurst
public class AbilityDefinitionAarm extends AbilityDefinition
```

'Aarm' / [AbilityIds.manaRegenerationAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaRegenerationAura)

**Members:**

- `construct(int newAbilityId)`
- `setPercentage(int level, bool value)`
- `presetPercentage(BooleanLevelClosure lc)`
- `setAmountRegenerated(int level, real value)`
- `presetAmountRegenerated(RealLevelClosure lc)`

### AbilityDefinitionBloodMageFlameStrike

```wurst
public class AbilityDefinitionBloodMageFlameStrike extends AbilityDefinition
```

'AHfs' / [AbilityIds.bloodMageFlameStrike](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bloodMageFlameStrike)

**Members:**

- `construct(int newAbilityId)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `setHalfDamageDealt(int level, real value)`
- `presetHalfDamageDealt(RealLevelClosure lc)`
- `setFullDamageDealt(int level, real value)`
- `presetFullDamageDealt(RealLevelClosure lc)`
- `setHalfDamageInterval(int level, real value)`
- `presetHalfDamageInterval(RealLevelClosure lc)`
- `setFullDamageInterval(int level, real value)`
- `presetFullDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionBloodlustCreep

```wurst
public class AbilityDefinitionBloodlustCreep extends AbilityDefinition
```

'ACbl' / [AbilityIds.bloodlust](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bloodlust)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Blo2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Blo1'
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `setScalingFactor(int level, real value)`
- `presetScalingFactor(RealLevelClosure lc)`

### AbilityDefinitionRoarAIrr

```wurst
public class AbilityDefinitionRoarAIrr extends AbilityDefinition
```

'AIrr' / [AbilityIds.roarAIrr](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-roarAIrr)

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `presetDamageIncrease(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setPreferHostiles(int level, bool value)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `setManaRegen(int level, real value)`
- `presetManaRegen(RealLevelClosure lc)`
- `setLifeRegenerationRate(int level, real value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `setPreferFriendlies(int level, bool value)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionResurrection

```wurst
public class AbilityDefinitionResurrection extends AbilityDefinition
```

'AIrs' / [AbilityIds.itemResurrection](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemResurrection)

**Members:**

- `construct(int newAbilityId)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`
- `setNumberofCorpsesRaised(int level, int value)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`

### AbilityDefinitionItemRecall

```wurst
public class AbilityDefinitionItemRecall extends AbilityDefinition
```

'AIrt' / [AbilityIds.itemRecall](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRecall)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumNumberofUnits(int level, int value)`
- `presetMaximumNumberofUnits(IntLevelClosure lc)`
- `setUseTeleportClustering(int level, bool value)`
- `presetUseTeleportClustering(BooleanLevelClosure lc)`

### AbilityDefinitionAttackBonusAIt6

```wurst
public class AbilityDefinitionAttackBonusAIt6 extends AbilityDefinition
```

'AIt6' / [AbilityIds.attackBonusAIt6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusAIt6)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionItemRevealMap

```wurst
public class AbilityDefinitionItemRevealMap extends AbilityDefinition
```

'AIrv' / [AbilityIds.itemRevealMap](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRevealMap)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionBashcreep

```wurst
public class AbilityDefinitionBashcreep extends AbilityDefinition
```

'ACbh' / [AbilityIds.bash1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bash1)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoBash(int level, real value)`
- `presetChancetoBash(RealLevelClosure lc)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setNeverMiss(int level, bool value)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `setDamageMultiplier(int level, real value)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionAlchemistChemicalRage

```wurst
public class AbilityDefinitionAlchemistChemicalRage extends AbilityDefinition
```

'ANcr' / [AbilityIds.alchemistChemicalRage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-alchemistChemicalRage)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonusInfoPanelOnly(int level, real value)`
- `presetAttackSpeedBonusInfoPanelOnly(RealLevelClosure lc)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setMoveSpeedBonusInfoPanelOnly(int level, real value)`
- `presetMoveSpeedBonusInfoPanelOnly(RealLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionTinkererClusterRocketsLevel0

```wurst
public class AbilityDefinitionTinkererClusterRocketsLevel0 extends AbilityDefinition
```

'ANcs' / [AbilityIds.tinkererClusterRocketsLevel0](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererClusterRocketsLevel0)

**Members:**

- `construct(int newAbilityId)`
- `setEffectDuration(int level, real value)`
- `presetEffectDuration(RealLevelClosure lc)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setMissileCount(int level, int value)`
- `presetMissileCount(IntLevelClosure lc)`
- `setDamageAmount(int level, real value)`
- `presetDamageAmount(RealLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionAttackBonusAIt9

```wurst
public class AbilityDefinitionAttackBonusAIt9 extends AbilityDefinition
```

'AIt9' / [AbilityIds.attackBonusAIt9](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusAIt9)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionPossession

```wurst
public class AbilityDefinitionPossession extends AbilityDefinition
```

'Apos' / [AbilityIds.possession](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-possession)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionPotionofLifeRegen

```wurst
public class AbilityDefinitionPotionofLifeRegen extends AbilityDefinition
```

'AIrl' / [AbilityIds.potionofLifeRegen](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-potionofLifeRegen)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionDarkRangerCharm

```wurst
public class AbilityDefinitionDarkRangerCharm extends AbilityDefinition
```

'ANch' / [AbilityIds.darkRangerCharm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkRangerCharm)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionBreathofFrostCreep

```wurst
public class AbilityDefinitionBreathofFrostCreep extends AbilityDefinition
```

'ACbf' / [AbilityIds.breathofFrostCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-breathofFrostCreep)

**Members:**

- `construct(int newAbilityId)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionItemRegenMana

```wurst
public class AbilityDefinitionItemRegenMana extends AbilityDefinition
```

'AIrm' / [AbilityIds.itemManaRegeneration](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegeneration)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemRegenManalesser

```wurst
public class AbilityDefinitionItemRegenManalesser extends AbilityDefinition
```

'AIrn' / [AbilityIds.itemRegenManalesser](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRegenManalesser)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionAuraBrilliancecreep

```wurst
public class AbilityDefinitionAuraBrilliancecreep extends AbilityDefinition
```

'ACba' / [AbilityIds.brillianceAura1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-brillianceAura1)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationIncrease(int level, real value)`
- `presetManaRegenerationIncrease(RealLevelClosure lc)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`

### AbilityDefinitionIllidanChannel

```wurst
public class AbilityDefinitionIllidanChannel extends AbilityDefinition
```

'ANcl' / [AbilityIds.channel](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-channel)

**Members:**

- `construct(int newAbilityId)`
- `setArtDuration(int level, real value)`
- `presetArtDuration(RealLevelClosure lc)`
- `setBaseOrderID(int level, string value)`
- `presetBaseOrderID(StringLevelClosure lc)`
- `setDisableOtherAbilities(int level, bool value)`
- `presetDisableOtherAbilities(BooleanLevelClosure lc)`
- `setFollowThroughTime(int level, real value)`
- `presetFollowThroughTime(RealLevelClosure lc)`
- `setTargetType(int level, int value)`
- `presetTargetType(IntLevelClosure lc)`
- `setOptions(int level, int value)`
- `presetOptions(IntLevelClosure lc)`

### AbilityDefinitionBreathofFireCreep

```wurst
public class AbilityDefinitionBreathofFireCreep extends AbilityDefinition
```

'ACbc' / [AbilityIds.breathofFireCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-breathofFireCreep)

**Members:**

- `construct(int newAbilityId)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionPitLordCleavingAttack

```wurst
public class AbilityDefinitionPitLordCleavingAttack extends AbilityDefinition
```

'ANca' / [AbilityIds.pitLordCleavingAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pitLordCleavingAttack)

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionCleavingAttackCreep

```wurst
public class AbilityDefinitionCleavingAttackCreep extends AbilityDefinition
```

'ACce' / [AbilityIds.cleavingAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cleavingAttack)

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionSilenceItem

```wurst
public class AbilityDefinitionSilenceItem extends AbilityDefinition
```

'AIse' / [AbilityIds.silenceItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-silenceItem)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
  Chance To Miss (%) / 'Nsi2'
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionSummonHeadhunteritem

```wurst
public class AbilityDefinitionSummonHeadhunteritem extends AbilityDefinition
```

'AIsh' / [AbilityIds.summonHeadhunteritem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-summonHeadhunteritem)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionSightBonus

```wurst
public class AbilityDefinitionSightBonus extends AbilityDefinition
```

'AIsi' / [AbilityIds.itemSightRangeBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSightRangeBonus)

**Members:**

- `construct(int newAbilityId)`
- `setSightRangeBonus(int level, int value)`
- `presetSightRangeBonus(IntLevelClosure lc)`

### AbilityDefinitionBlizzardcreep

```wurst
public class AbilityDefinitionBlizzardcreep extends AbilityDefinition
```

'ACbz' / [AbilityIds.blizzard1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blizzard1)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDamageperWave(int level, real value)`
- `presetMaximumDamageperWave(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setNumberofWaves(int level, int value)`
- `presetNumberofWaves(IntLevelClosure lc)`
- `setNumberofShards(int level, int value)`
- `presetNumberofShards(IntLevelClosure lc)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionCloudofFog

```wurst
public class AbilityDefinitionCloudofFog extends AbilityDefinition
```

'Aclf' / [AbilityIds.cloudofFog](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cloudofFog)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
  Chance To Miss (%) / 'Nsi2'
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionAntimagicShieldMatrix

```wurst
public class AbilityDefinitionAntimagicShieldMatrix extends AbilityDefinition
```

'Aam2' / [AbilityIds.antimagicShieldMatrix](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-antimagicShieldMatrix)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, int value)`
- `presetManaLoss(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`
- `setShieldLife(int level, int value)`
- `presetShieldLife(IntLevelClosure lc)`

### AbilityDefinitionLoad

```wurst
public class AbilityDefinitionLoad extends AbilityDefinition
```

'Aloa' / [AbilityIds.load](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-load)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionBladeMasterMirrorImage

```wurst
public class AbilityDefinitionBladeMasterMirrorImage extends AbilityDefinition
```

'AOmi' / [AbilityIds.mirrorImage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-mirrorImage)

**Members:**

- `construct(int newAbilityId)`
- `setDamageDealt(int level, real value)`
  Damage Dealt (%) / 'Omi2'
- `presetDamageDealt(RealLevelClosure lc)`
- `setNumberofImages(int level, int value)`
- `presetNumberofImages(IntLevelClosure lc)`
- `setDamageTaken(int level, real value)`
  Damage Taken (%) / 'Omi3'
- `presetDamageTaken(RealLevelClosure lc)`
- `setAnimationDelay(int level, real value)`
- `presetAnimationDelay(RealLevelClosure lc)`

### AbilityDefinitionWardenBlink

```wurst
public class AbilityDefinitionWardenBlink extends AbilityDefinition
```

'AEbl' / [AbilityIds.wardenBlink](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-wardenBlink)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumRange(int level, real value)`
- `presetMaximumRange(RealLevelClosure lc)`
- `setMinimumRange(int level, real value)`
- `presetMinimumRange(RealLevelClosure lc)`

### AbilityDefinitionPoisonAttack

```wurst
public class AbilityDefinitionPoisonAttack extends AbilityDefinition
```

'Apoi' / [AbilityIds.poisonSting](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-poisonSting)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingTypes(IntLevelClosure lc)`
- `presetStackingType(StackingType stackingType, boolean flag)`
- `hasStackingType(StackingType stackingType) returns boolean`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionOrbofSpells

```wurst
public class AbilityDefinitionOrbofSpells extends AbilityDefinition
```

'AIsb' / [AbilityIds.orbofSpells](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orbofSpells)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setEffectAbility(int level, string value)`
- `presetEffectAbility(StringLevelClosure lc)`

### AbilityDefinitionItemSpeedAoe

```wurst
public class AbilityDefinitionItemSpeedAoe extends AbilityDefinition
```

'AIsa' / [AbilityIds.itemSpeedAoe](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpeedAoe)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionUnholyFrenzy

```wurst
public class AbilityDefinitionUnholyFrenzy extends AbilityDefinition
```

'Auhf' / [AbilityIds.unholyFrenzy](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unholyFrenzy)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonus(int level, real value)`
  Attack Speed Bonus (%) / 'Uhf1'
- `presetAttackSpeedBonus(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionAntimagicShieldcreep

```wurst
public class AbilityDefinitionAntimagicShieldcreep extends AbilityDefinition
```

'ACam' / [AbilityIds.antimagicShell](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-antimagicShell)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`
- `setManaLoss(int level, int value)`
- `presetManaLoss(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `setShieldLife(int level, int value)`
- `presetShieldLife(IntLevelClosure lc)`

### AbilityDefinitionSpawnSpiderOnDeath

```wurst
public class AbilityDefinitionSpawnSpiderOnDeath extends AbilityDefinition
```

'Aspd' / [AbilityIds.spawnSpiders](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spawnSpiders)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofUnits(int level, int value)`
- `presetNumberofUnits(IntLevelClosure lc)`
- `setUnitType(int level, string value)`
- `presetUnitType(StringLevelClosure lc)`

### AbilityDefinitionDarkRangerDrain

```wurst
public class AbilityDefinitionDarkRangerDrain extends AbilityDefinition
```

'ANdr' / [AbilityIds.darkRangerDrain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkRangerDrain)

**Members:**

- `construct(int newAbilityId)`
- `setBonusLifeDecay(int level, real value)`
- `presetBonusLifeDecay(RealLevelClosure lc)`
- `setDrainIntervalseconds(int level, real value)`
- `presetDrainIntervalseconds(RealLevelClosure lc)`
- `setHitPointsDrained(int level, real value)`
- `presetHitPointsDrained(RealLevelClosure lc)`
- `setBonusLifeFactor(int level, real value)`
- `presetBonusLifeFactor(RealLevelClosure lc)`
- `setManaPointsDrained(int level, real value)`
- `presetManaPointsDrained(RealLevelClosure lc)`
- `setManaTransferredPerSecond(int level, real value)`
- `presetManaTransferredPerSecond(RealLevelClosure lc)`
- `setBonusManaDecay(int level, real value)`
- `presetBonusManaDecay(RealLevelClosure lc)`
- `setBonusManaFactor(int level, real value)`
- `presetBonusManaFactor(RealLevelClosure lc)`
- `setLifeTransferredPerSecond(int level, real value)`
- `presetLifeTransferredPerSecond(RealLevelClosure lc)`
- `setNdrA(int level, bool value)`
- `presetNdrA(BooleanLevelClosure lc)`
- `presetUseBlackArrowEffect(BooleanLevelClosure lc)`
- `setUseBlackArrowEffect(int level, bool value)`

### AbilityDefinitionFlare

```wurst
public class AbilityDefinitionFlare extends AbilityDefinition
```

'Afla' / [AbilityIds.flare](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-flare)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`
- `setFlareCount(int level, int value)`
- `presetFlareCount(IntLevelClosure lc)`
- `setEffectDelay(int level, real value)`
- `presetEffectDelay(RealLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus6

```wurst
public class AbilityDefinitionStrengthBonusPlus6 extends AbilityDefinition
```

'AIs6' / [AbilityIds.strengthBonusPlus6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus6)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionPitLordDoom

```wurst
public class AbilityDefinitionPitLordDoom extends AbilityDefinition
```

'ANdo' / [AbilityIds.pitLordDoom](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pitLordDoom)

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `setSummonedUnitDurationseconds(int level, real value)`
- `presetSummonedUnitDurationseconds(RealLevelClosure lc)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionSpellBook

```wurst
public class AbilityDefinitionSpellBook extends AbilityDefinition
```

'Aspb' / [AbilityIds.spellBook](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spellBook)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumSpells(int level, int value)`
- `presetMaximumSpells(IntLevelClosure lc)`
- `setSharedSpellCooldown(int level, bool value)`
- `presetSharedSpellCooldown(BooleanLevelClosure lc)`
- `setSpellList(int level, string value)`
- `presetSpellList(StringLevelClosure lc)`
- `setMinimumSpells(int level, int value)`
- `presetMinimumSpells(IntLevelClosure lc)`
- `setBaseOrderID(int level, string value)`
- `presetBaseOrderID(StringLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus3

```wurst
public class AbilityDefinitionStrengthBonusPlus3 extends AbilityDefinition
```

'AIs3' / [AbilityIds.strengthBonusPlus3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus3)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionDarkPortal

```wurst
public class AbilityDefinitionDarkPortal extends AbilityDefinition
```

'ANdp' / [AbilityIds.darkPortal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkPortal)

**Members:**

- `construct(int newAbilityId)`
- `setSpawnedUnits(int level, string value)`
- `presetSpawnedUnits(StringLevelClosure lc)`
- `setMaximumNumberofUnits(int level, int value)`
- `presetMaximumNumberofUnits(IntLevelClosure lc)`
- `setMinimumNumberofUnits(int level, int value)`
- `presetMinimumNumberofUnits(IntLevelClosure lc)`

### AbilityDefinitionMoonPriestessTrueshotAura

```wurst
public class AbilityDefinitionMoonPriestessTrueshotAura extends AbilityDefinition
```

'AEar' / [AbilityIds.trueshotAura1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-trueshotAura1)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `setRangedBonus(int level, bool value)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `setDamageBonus(int level, real value)`
  Damage Bonus (%) / 'Ear1'
- `presetDamageBonus(RealLevelClosure lc)`
- `setMeleeBonus(int level, bool value)`
- `presetMeleeBonus(BooleanLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus4

```wurst
public class AbilityDefinitionStrengthBonusPlus4 extends AbilityDefinition
```

'AIs4' / [AbilityIds.strengthBonusPlus4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus4)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionSpiderAttack

```wurst
public class AbilityDefinitionSpiderAttack extends AbilityDefinition
```

'Aspa' / [AbilityIds.spiderAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spiderAttack)

**Members:**

- `construct(int newAbilityId)`
- `setSpiderCapacity(int level, int value)`
- `presetSpiderCapacity(IntLevelClosure lc)`

### AbilityDefinitionSpiritLink

```wurst
public class AbilityDefinitionSpiritLink extends AbilityDefinition
```

'Aspl' / [AbilityIds.spiritLink](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spiritLink)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumNumberofTargets(int level, int value)`
- `presetMaximumNumberofTargets(IntLevelClosure lc)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionAuraWarDrumsKodobeast

```wurst
public class AbilityDefinitionAuraWarDrumsKodobeast extends AbilityDefinition
```

'Aakb' / [AbilityIds.warDrums](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warDrums)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `setRangedBonus(int level, bool value)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `setAttackDamageIncrease(int level, real value)`
- `presetAttackDamageIncrease(RealLevelClosure lc)`
- `setMeleeBonus(int level, bool value)`
- `presetMeleeBonus(BooleanLevelClosure lc)`
- `setPlayChannelAnimation(int level, bool value)`
- `presetPlayChannelAnimation(BooleanLevelClosure lc)`

### AbilityDefinitionArchMageMassTeleport

```wurst
public class AbilityDefinitionArchMageMassTeleport extends AbilityDefinition
```

'AHmt' / [AbilityIds.massTeleport](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-massTeleport)

**Members:**

- `construct(int newAbilityId)`
- `setUseTeleportClustering(int level, bool value)`
- `presetUseTeleportClustering(BooleanLevelClosure lc)`
- `setCastingDelay(int level, real value)`
- `presetCastingDelay(RealLevelClosure lc)`
- `setNumberofUnitsTeleported(int level, int value)`
- `presetNumberofUnitsTeleported(IntLevelClosure lc)`

### AbilityDefinitionGoldMine

```wurst
public class AbilityDefinitionGoldMine extends AbilityDefinition
```

'Agld' / [AbilityIds.goldMineability](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-goldMineability)

**Members:**

- `construct(int newAbilityId)`
- `setMiningCapacity(int level, int value)`
- `presetMiningCapacity(IntLevelClosure lc)`
- `setMaxGold(int level, int value)`
- `presetMaxGold(IntLevelClosure lc)`
- `setMiningDuration(int level, real value)`
- `presetMiningDuration(RealLevelClosure lc)`

### AbilityDefinitionAuraCommandCreep

```wurst
public class AbilityDefinitionAuraCommandCreep extends AbilityDefinition
```

'ACac' / [AbilityIds.auraCommandCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-auraCommandCreep)

**Members:**

- `construct(int newAbilityId)`
- `setRangedBonus(int level, bool value)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `setFlatBonus(int level, bool value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `setAttackDamageIncrease(int level, real value)`
- `presetAttackDamageIncrease(RealLevelClosure lc)`
- `setMeleeBonus(int level, bool value)`
- `presetMeleeBonus(BooleanLevelClosure lc)`

### AbilityDefinitionBrewmasterDrunkenHaze

```wurst
public class AbilityDefinitionBrewmasterDrunkenHaze extends AbilityDefinition
```

'ANdh' / [AbilityIds.brewmasterDrunkenHaze](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-brewmasterDrunkenHaze)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
  Chance To Miss (%) / 'Nsi2'
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionAnimateDeadcreep

```wurst
public class AbilityDefinitionAnimateDeadcreep extends AbilityDefinition
```

'ACad' / [AbilityIds.animateDead](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-animateDead)

**Members:**

- `construct(int newAbilityId)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`
- `setNumberofCorpsesRaised(int level, int value)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`
- `setInheritUpgrades(int level, bool value)`
- `presetInheritUpgrades(BooleanLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus1

```wurst
public class AbilityDefinitionStrengthBonusPlus1 extends AbilityDefinition
```

'AIs1' / [AbilityIds.strengthBonusPlus1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus1)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus5

```wurst
public class AbilityDefinitionStrengthBonusPlus5 extends AbilityDefinition
```

'AIs5' / [AbilityIds.strengthBonusPlus5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus5)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackSpeedIncreaseGreater

```wurst
public class AbilityDefinitionAttackSpeedIncreaseGreater extends AbilityDefinition
```

'AIs2' / [AbilityIds.attackSpeedIncreaseGreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackSpeedIncreaseGreater)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemRestore

```wurst
public class AbilityDefinitionItemRestore extends AbilityDefinition
```

'AIre' / [AbilityIds.itemHealManaRegain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealManaRegain)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsRestored(int level, int value)`
- `presetManaPointsRestored(IntLevelClosure lc)`
- `setHitPointsRestored(int level, int value)`
- `presetHitPointsRestored(IntLevelClosure lc)`

### AbilityDefinitionBrewmasterDrunkenBrawler

```wurst
public class AbilityDefinitionBrewmasterDrunkenBrawler extends AbilityDefinition
```

'ANdb' / [AbilityIds.brewmasterDrunkenBrawler](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-brewmasterDrunkenBrawler)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplier(int level, real value)`
- `presetDamageMultiplier(RealLevelClosure lc)`
- `setChancetoCriticalStrike(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `setNeverMiss(int level, bool value)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `setExcludeItemDamage(int level, bool value)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`

### AbilityDefinitionRaiseDeadItem

```wurst
public class AbilityDefinitionRaiseDeadItem extends AbilityDefinition
```

'AIrd' / [AbilityIds.raiseDeadItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-raiseDeadItem)

**Members:**

- `construct(int newAbilityId)`
- `setUnitsSummonedTypeOne(int level, int value)`
- `presetUnitsSummonedTypeOne(IntLevelClosure lc)`
- `setUnitTypeForLimitCheck(int level, string value)`
- `presetUnitTypeForLimitCheck(StringLevelClosure lc)`
- `setUnitsSummonedTypeTwo(int level, int value)`
- `presetUnitsSummonedTypeTwo(IntLevelClosure lc)`
- `setUnitTypeTwo(int level, string value)`
- `presetUnitTypeTwo(StringLevelClosure lc)`
- `setUnitTypeOne(int level, string value)`
- `presetUnitTypeOne(StringLevelClosure lc)`

### AbilityDefinitionSpawnHydraHatchling

```wurst
public class AbilityDefinitionSpawnHydraHatchling extends AbilityDefinition
```

'Aspt' / [AbilityIds.spawnHydraHatchling](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spawnHydraHatchling)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofUnits(int level, int value)`
- `presetNumberofUnits(IntLevelClosure lc)`
- `setUnitType(int level, string value)`
- `presetUnitType(StringLevelClosure lc)`

### AbilityDefinitionItemReincarnation

```wurst
public class AbilityDefinitionItemReincarnation extends AbilityDefinition
```

'AIrc' / [AbilityIds.itemReincarnation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemReincarnation)

**Members:**

- `construct(int newAbilityId)`
- `setRestoredLife(int level, int value)`
- `presetRestoredLife(IntLevelClosure lc)`
- `setDelayAfterDeathseconds(int level, int value)`
- `presetDelayAfterDeathseconds(IntLevelClosure lc)`
- `setRestoredManaforcurrent(int level, int value)`
  Restored Mana (-1 for current) / 'irc3'
- `presetRestoredManaforcurrent(IntLevelClosure lc)`

### AbilityDefinitionTinkererDemolishLevel0

```wurst
public class AbilityDefinitionTinkererDemolishLevel0 extends AbilityDefinition
```

'ANde' / [AbilityIds.tinkererDemolishLevel0](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererDemolishLevel0)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplierBuildings(int level, real value)`
- `presetDamageMultiplierBuildings(RealLevelClosure lc)`
- `setDamageMultiplierUnits(int level, real value)`
- `presetDamageMultiplierUnits(RealLevelClosure lc)`
- `setDamageMultiplierHeroes(int level, real value)`
- `presetDamageMultiplierHeroes(RealLevelClosure lc)`
- `setChancetoDemolish(int level, real value)`
- `presetChancetoDemolish(RealLevelClosure lc)`

### AbilityDefinitionRuneofSpiritLink

```wurst
public class AbilityDefinitionRuneofSpiritLink extends AbilityDefinition
```

'Aspp' / [AbilityIds.runeofSpiritLink](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runeofSpiritLink)

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`
- `setMaximumNumberofTargets(int level, int value)`
- `presetMaximumNumberofTargets(IntLevelClosure lc)`

### AbilityDefinitionSlowPoison

```wurst
public class AbilityDefinitionSlowPoison extends AbilityDefinition
```

'Aspo' / [AbilityIds.slowPoison](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-slowPoison)

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingTypes(IntLevelClosure lc)`
- `presetStackingType(StackingType stackingType, boolean flag)`
- `hasStackingType(StackingType stackingType) returns boolean`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionMalganisDarkConversion

```wurst
public class AbilityDefinitionMalganisDarkConversion extends AbilityDefinition
```

'ANdc' / [AbilityIds.darkConversion](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkConversion)

**Members:**

- `construct(int newAbilityId)`
- `setConversionUnit(int level, string value)`
- `presetConversionUnit(StringLevelClosure lc)`
- `setRacetoConvert(int level, string value)`
- `presetRacetoConvert(StringLevelClosure lc)`

### AbilityDefinitionAuraDevotionCreep

```wurst
public class AbilityDefinitionAuraDevotionCreep extends AbilityDefinition
```

'ACav' / [AbilityIds.devotionAura1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-devotionAura1)

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `setArmorBonus(int level, real value)`
- `presetArmorBonus(RealLevelClosure lc)`

### AbilityDefinitionAuraTrueshotCreep

```wurst
public class AbilityDefinitionAuraTrueshotCreep extends AbilityDefinition
```

'ACat' / [AbilityIds.trueshotAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-trueshotAura)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `setRangedBonus(int level, bool value)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `setDamageBonus(int level, real value)`
  Damage Bonus (%) / 'Ear1'
- `presetDamageBonus(RealLevelClosure lc)`
- `setMeleeBonus(int level, bool value)`
- `presetMeleeBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemRestoreAoe

```wurst
public class AbilityDefinitionItemRestoreAoe extends AbilityDefinition
```

'AIra' / [AbilityIds.itemAreaHealManaRegain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAreaHealManaRegain)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsRestored(int level, int value)`
- `presetManaPointsRestored(IntLevelClosure lc)`
- `setHitPointsRestored(int level, int value)`
- `presetHitPointsRestored(IntLevelClosure lc)`

### AbilityDefinitionKeeperoftheGroveThornsAura

```wurst
public class AbilityDefinitionKeeperoftheGroveThornsAura extends AbilityDefinition
```

'AEah' / [AbilityIds.thornsAura1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-thornsAura1)

**Members:**

- `construct(int newAbilityId)`
- `setDamageisPercentReceived(int level, bool value)`
- `presetDamageisPercentReceived(BooleanLevelClosure lc)`
- `setDamageDealttoAttackers(int level, real value)`
- `presetDamageDealttoAttackers(RealLevelClosure lc)`

### AbilityDefinitionThornsAuraCreep

```wurst
public class AbilityDefinitionThornsAuraCreep extends AbilityDefinition
```

'ACah' / [AbilityIds.thornsAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-thornsAura)

**Members:**

- `construct(int newAbilityId)`
- `setDamageisPercentReceived(int level, bool value)`
- `presetDamageisPercentReceived(BooleanLevelClosure lc)`
- `setDamageDealttoAttackers(int level, real value)`
- `presetDamageDealttoAttackers(RealLevelClosure lc)`

### AbilityDefinitionSpawnHydra

```wurst
public class AbilityDefinitionSpawnHydra extends AbilityDefinition
```

'Aspy' / [AbilityIds.spawnHydra](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spawnHydra)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofUnits(int level, int value)`
- `presetNumberofUnits(IntLevelClosure lc)`
- `setUnitType(int level, string value)`
- `presetUnitType(StringLevelClosure lc)`

### AbilityDefinitionAspx

```wurst
public class AbilityDefinitionAspx extends AbilityDefinition
```

'Aspx' / [AbilityIds.aspx](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-aspx)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionTinkererClusterRocketsLevel2

```wurst
public class AbilityDefinitionTinkererClusterRocketsLevel2 extends AbilityDefinition
```

'ANc2' / [AbilityIds.tinkererClusterRocketsLevel2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererClusterRocketsLevel2)

**Members:**

- `construct(int newAbilityId)`
- `setEffectDuration(int level, real value)`
- `presetEffectDuration(RealLevelClosure lc)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setMissileCount(int level, int value)`
- `presetMissileCount(IntLevelClosure lc)`
- `setDamageAmount(int level, real value)`
- `presetDamageAmount(RealLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionDreadlordVampiricAura

```wurst
public class AbilityDefinitionDreadlordVampiricAura extends AbilityDefinition
```

'AUav' / [AbilityIds.vampiricAura1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-vampiricAura1)

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageStolen(int level, real value)`
  Attack Damage Stolen (%) / 'Uav1'
- `presetAttackDamageStolen(RealLevelClosure lc)`

### AbilityDefinitionTinkererClusterRocketsLevel3

```wurst
public class AbilityDefinitionTinkererClusterRocketsLevel3 extends AbilityDefinition
```

'ANc3' / [AbilityIds.tinkererClusterRocketsLevel3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererClusterRocketsLevel3)

**Members:**

- `construct(int newAbilityId)`
- `setEffectDuration(int level, real value)`
- `presetEffectDuration(RealLevelClosure lc)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setMissileCount(int level, int value)`
- `presetMissileCount(IntLevelClosure lc)`
- `setDamageAmount(int level, real value)`
- `presetDamageAmount(RealLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionDeathKnightUnholyAura

```wurst
public class AbilityDefinitionDeathKnightUnholyAura extends AbilityDefinition
```

'AUau' / [AbilityIds.unholyAura1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unholyAura1)

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `setLifeRegenerationIncrease(int level, real value)`
  Life Regeneration Increase (%) / 'Uau2'
- `presetLifeRegenerationIncrease(RealLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Uau1'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemPotionVampirism

```wurst
public class AbilityDefinitionItemPotionVampirism extends AbilityDefinition
```

'AIpv' / [AbilityIds.itemPotionVampirism](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPotionVampirism)

**Members:**

- `construct(int newAbilityId)`
- `setAmountIsRawValue(int level, bool value)`
- `presetAmountIsRawValue(BooleanLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setLifeStealAmount(int level, real value)`
- `presetLifeStealAmount(RealLevelClosure lc)`

### AbilityDefinitionOrbofVenomPoisonAttack

```wurst
public class AbilityDefinitionOrbofVenomPoisonAttack extends AbilityDefinition
```

'Apo2' / [AbilityIds.orbofVenomPoisonAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orbofVenomPoisonAttack)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingTypes(IntLevelClosure lc)`
- `presetStackingType(StackingType stackingType, boolean flag)`
- `hasStackingType(StackingType stackingType) returns boolean`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionCoupleInstantArcher

```wurst
public class AbilityDefinitionCoupleInstantArcher extends AbilityDefinition
```

'Aco2' / [AbilityIds.coupleInstantArcher](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-coupleInstantArcher)

**Members:**

- `construct(int newAbilityId)`
- `setMoveToPartner(int level, bool value)`
- `presetMoveToPartner(BooleanLevelClosure lc)`
- `setResultingUnitType(int level, string value)`
- `presetResultingUnitType(StringLevelClosure lc)`
- `setPartnerUnitType(int level, string value)`
- `presetPartnerUnitType(StringLevelClosure lc)`

### AbilityDefinitionPotionofManaRegengreater

```wurst
public class AbilityDefinitionPotionofManaRegengreater extends AbilityDefinition
```

'AIpr' / [AbilityIds.potionofManaRegengreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-potionofManaRegengreater)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionTinkererClusterRocketsLevel1

```wurst
public class AbilityDefinitionTinkererClusterRocketsLevel1 extends AbilityDefinition
```

'ANc1' / [AbilityIds.tinkererClusterRocketsLevel1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererClusterRocketsLevel1)

**Members:**

- `construct(int newAbilityId)`
- `setEffectDuration(int level, real value)`
- `presetEffectDuration(RealLevelClosure lc)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setMissileCount(int level, int value)`
- `presetMissileCount(IntLevelClosure lc)`
- `setDamageAmount(int level, real value)`
- `presetDamageAmount(RealLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionCoupleInstantHippogryph

```wurst
public class AbilityDefinitionCoupleInstantHippogryph extends AbilityDefinition
```

'Aco3' / [AbilityIds.coupleInstantHippogryph](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-coupleInstantHippogryph)

**Members:**

- `construct(int newAbilityId)`
- `setMoveToPartner(int level, bool value)`
- `presetMoveToPartner(BooleanLevelClosure lc)`
- `setResultingUnitType(int level, string value)`
- `presetResultingUnitType(StringLevelClosure lc)`
- `setPartnerUnitType(int level, string value)`
- `presetPartnerUnitType(StringLevelClosure lc)`

### AbilityDefinitionSpawnOnDeathskeleton

```wurst
public class AbilityDefinitionSpawnOnDeathskeleton extends AbilityDefinition
```

'Asod' / [AbilityIds.spawnOnDeathskeleton](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spawnOnDeathskeleton)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofUnits(int level, int value)`
- `presetNumberofUnits(IntLevelClosure lc)`
- `setUnitType(int level, string value)`
- `presetUnitType(StringLevelClosure lc)`

### AbilityDefinitionPotionofManaRegenlesser

```wurst
public class AbilityDefinitionPotionofManaRegenlesser extends AbilityDefinition
```

'AIpl' / [AbilityIds.potionofManaRegenlesser](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-potionofManaRegenlesser)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionDeathKnightAnimateDead

```wurst
public class AbilityDefinitionDeathKnightAnimateDead extends AbilityDefinition
```

'AUan' / [AbilityIds.animateDead1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-animateDead1)

**Members:**

- `construct(int newAbilityId)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`
- `setInheritUpgrades(int level, bool value)`
- `presetInheritUpgrades(BooleanLevelClosure lc)`
- `setNumberofCorpsesRaised(int level, int value)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`

### AbilityDefinitionItemPlaceMine

```wurst
public class AbilityDefinitionItemPlaceMine extends AbilityDefinition
```

'AIpm' / [AbilityIds.itemPlaceGoblinLandMine](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPlaceGoblinLandMine)

**Members:**

- `construct(int newAbilityId)`
- `setUnitType(int level, string value)`
- `presetUnitType(StringLevelClosure lc)`

### AbilityDefinitionBloodMagePhoenix

```wurst
public class AbilityDefinitionBloodMagePhoenix extends AbilityDefinition
```

'AHpx' / [AbilityIds.phoenix](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-phoenix)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionAlchemistAcidBomb

```wurst
public class AbilityDefinitionAlchemistAcidBomb extends AbilityDefinition
```

'ANab' / [AbilityIds.acidBomb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-acidBomb)

**Members:**

- `construct(int newAbilityId)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setPrimaryDamage(int level, real value)`
- `presetPrimaryDamage(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nab1'
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `setArmorPenalty(int level, int value)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `setSecondaryDamage(int level, real value)`
- `presetSecondaryDamage(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nab2'
- `presetAttackSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionPermanentImmolationflying

```wurst
public class AbilityDefinitionPermanentImmolationflying extends AbilityDefinition
```

'Apmf' / [AbilityIds.permanentImmolationflying](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-permanentImmolationflying)

**Members:**

- `construct(int newAbilityId)`
- `setManaDrainedperSecond(int level, real value)`
- `presetManaDrainedperSecond(RealLevelClosure lc)`
- `setBufferManaRequired(int level, real value)`
- `presetBufferManaRequired(RealLevelClosure lc)`
- `setDamageperInterval(int level, real value)`
- `presetDamageperInterval(RealLevelClosure lc)`

### AbilityDefinitionTornadoSpin

```wurst
public class AbilityDefinitionTornadoSpin extends AbilityDefinition
```

'Atsp' / [AbilityIds.tornadoSpin](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tornadoSpin)

**Members:**

- `construct(int newAbilityId)`
- `setMinimumHitIntervalseconds(int level, real value)`
- `presetMinimumHitIntervalseconds(RealLevelClosure lc)`
- `setAirTimeseconds(int level, real value)`
- `presetAirTimeseconds(RealLevelClosure lc)`

### AbilityDefinitionAntimagicShield

```wurst
public class AbilityDefinitionAntimagicShield extends AbilityDefinition
```

'Aams' / [AbilityIds.antimagicShell1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-antimagicShell1)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`
- `setManaLoss(int level, int value)`
- `presetManaLoss(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `setShieldLife(int level, int value)`
- `presetShieldLife(IntLevelClosure lc)`

### AbilityDefinitionOrbofDarknessBlackArrow

```wurst
public class AbilityDefinitionOrbofDarknessBlackArrow extends AbilityDefinition
```

'ANbs' / [AbilityIds.orbofDarknessBlackArrow](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orbofDarknessBlackArrow)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `setSummonedUnitDurationseconds(int level, real value)`
- `presetSummonedUnitDurationseconds(RealLevelClosure lc)`

### AbilityDefinitionTinkererDemolishLevel3

```wurst
public class AbilityDefinitionTinkererDemolishLevel3 extends AbilityDefinition
```

'ANd3' / [AbilityIds.tinkererDemolishLevel3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererDemolishLevel3)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplierBuildings(int level, real value)`
- `presetDamageMultiplierBuildings(RealLevelClosure lc)`
- `setDamageMultiplierUnits(int level, real value)`
- `presetDamageMultiplierUnits(RealLevelClosure lc)`
- `setDamageMultiplierHeroes(int level, real value)`
- `presetDamageMultiplierHeroes(RealLevelClosure lc)`
- `setChancetoDemolish(int level, real value)`
- `presetChancetoDemolish(RealLevelClosure lc)`

### AbilityDefinitionSlowAIos

```wurst
public class AbilityDefinitionSlowAIos extends AbilityDefinition
```

'AIos' / [AbilityIds.slowAIos](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-slowAIos)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAlwaysAutocast(int level, bool value)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionBattleRoar

```wurst
public class AbilityDefinitionBattleRoar extends AbilityDefinition
```

'ANbr' / [AbilityIds.battleRoar](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-battleRoar)

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
- `presetDamageIncrease(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setPreferHostiles(int level, bool value)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `setLifeRegenerationRate(int level, real value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `setManaRegen(int level, real value)`
- `presetManaRegen(RealLevelClosure lc)`
- `setPreferFriendlies(int level, bool value)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionTinkererDemolishLevel1

```wurst
public class AbilityDefinitionTinkererDemolishLevel1 extends AbilityDefinition
```

'ANd1' / [AbilityIds.tinkererDemolishLevel1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererDemolishLevel1)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplierBuildings(int level, real value)`
- `presetDamageMultiplierBuildings(RealLevelClosure lc)`
- `setDamageMultiplierUnits(int level, real value)`
- `presetDamageMultiplierUnits(RealLevelClosure lc)`
- `setDamageMultiplierHeroes(int level, real value)`
- `presetDamageMultiplierHeroes(RealLevelClosure lc)`
- `setChancetoDemolish(int level, real value)`
- `presetChancetoDemolish(RealLevelClosure lc)`

### AbilityDefinitionTinkererDemolishLevel2

```wurst
public class AbilityDefinitionTinkererDemolishLevel2 extends AbilityDefinition
```

'ANd2' / [AbilityIds.tinkererDemolishLevel2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererDemolishLevel2)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplierBuildings(int level, real value)`
- `presetDamageMultiplierBuildings(RealLevelClosure lc)`
- `setDamageMultiplierUnits(int level, real value)`
- `presetDamageMultiplierUnits(RealLevelClosure lc)`
- `setDamageMultiplierHeroes(int level, real value)`
- `presetDamageMultiplierHeroes(RealLevelClosure lc)`
- `setChancetoDemolish(int level, real value)`
- `presetChancetoDemolish(RealLevelClosure lc)`

### AbilityDefinitionAttributeModifierSkill

```wurst
public class AbilityDefinitionAttributeModifierSkill extends AbilityDefinition
```

'Aamk' / [AbilityIds.attributeModifierSkill](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attributeModifierSkill)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionDispelMagic

```wurst
public class AbilityDefinitionDispelMagic extends AbilityDefinition
```

'Adis' / [AbilityIds.dispelMagic](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-dispelMagic)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `presetManaLoss(RealLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionBashBeastmasterBear

```wurst
public class AbilityDefinitionBashBeastmasterBear extends AbilityDefinition
```

'ANbh' / [AbilityIds.bashBeastmasterBear](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bashBeastmasterBear)

**Members:**

- `construct(int newAbilityId)`
- `setNeverMiss(int level, bool value)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `setChancetoBash(int level, real value)`
- `presetChancetoBash(RealLevelClosure lc)`
- `setDamageMultiplier(int level, real value)`
- `presetDamageMultiplier(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionBrewmasterBreathofFire

```wurst
public class AbilityDefinitionBrewmasterBreathofFire extends AbilityDefinition
```

'ANbf' / [AbilityIds.brewmasterBreathofFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-brewmasterBreathofFire)

**Members:**

- `construct(int newAbilityId)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionPolymorph

```wurst
public class AbilityDefinitionPolymorph extends AbilityDefinition
```

'Aply' / [AbilityIds.polymorph](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-polymorph)

**Members:**

- `construct(int newAbilityId)`
- `setMorphUnitsGround(int level, string value)`
- `presetMorphUnitsGround(StringLevelClosure lc)`
- `setMorphUnitsWater(int level, string value)`
- `presetMorphUnitsWater(StringLevelClosure lc)`
- `setMorphUnitsAmphibious(int level, string value)`
- `presetMorphUnitsAmphibious(StringLevelClosure lc)`
- `setMorphUnitsAir(int level, string value)`
- `presetMorphUnitsAir(StringLevelClosure lc)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionPurgeorb

```wurst
public class AbilityDefinitionPurgeorb extends AbilityDefinition
```

'AIpg' / [AbilityIds.purgeorb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-purgeorb)

**Members:**

- `construct(int newAbilityId)`
- `setHeroPauseDuration(int level, real value)`
- `presetHeroPauseDuration(RealLevelClosure lc)`
- `setUnitPauseDuration(int level, real value)`
- `presetUnitPauseDuration(RealLevelClosure lc)`
- `setMovementUpdateFrequency(int level, int value)`
- `presetMovementUpdateFrequency(IntLevelClosure lc)`
- `setAttackUpdateFrequency(int level, int value)`
- `presetAttackUpdateFrequency(IntLevelClosure lc)`
- `setManaLoss(int level, int value)`
- `presetManaLoss(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionDarkRangerBlackArrow

```wurst
public class AbilityDefinitionDarkRangerBlackArrow extends AbilityDefinition
```

'ANba' / [AbilityIds.darkRangerBlackArrow](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkRangerBlackArrow)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `setSummonedUnitDurationseconds(int level, real value)`
- `presetSummonedUnitDurationseconds(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldEntangledGoldMine

```wurst
public class AbilityDefinitionCargoHoldEntangledGoldMine extends AbilityDefinition
```

'Aenc' / [AbilityIds.load1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-load1)

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionAerialShackles

```wurst
public class AbilityDefinitionAerialShackles extends AbilityDefinition
```

'Amls' / [AbilityIds.aerialShackles](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-aerialShackles)

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionOrbofVenom

```wurst
public class AbilityDefinitionOrbofVenom extends AbilityDefinition
```

'AIpb' / [AbilityIds.orbofVenom](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orbofVenom)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setDamageBonusDice(int level, int value)`
- `presetDamageBonusDice(IntLevelClosure lc)`

### AbilityDefinitionDetectShade

```wurst
public class AbilityDefinitionDetectShade extends AbilityDefinition
```

'Atru' / [AbilityIds.trueSight2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-trueSight2)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionControlMagic

```wurst
public class AbilityDefinitionControlMagic extends AbilityDefinition
```

'Acmg' / [AbilityIds.controlMagic](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-controlMagic)

**Members:**

- `construct(int newAbilityId)`
- `setChargeforCurrentLife(int level, real value)`
- `presetChargeforCurrentLife(RealLevelClosure lc)`
- `setManaperSummonedHitpoint(int level, real value)`
- `presetManaperSummonedHitpoint(RealLevelClosure lc)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionDreadlordCarrionSwarm

```wurst
public class AbilityDefinitionDreadlordCarrionSwarm extends AbilityDefinition
```

'AUcs' / [AbilityIds.carrionSwarm1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-carrionSwarm1)

**Members:**

- `construct(int newAbilityId)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionAllPlus1

```wurst
public class AbilityDefinitionAllPlus1 extends AbilityDefinition
```

'AIx1' / [AbilityIds.allPlus1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-allPlus1)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionAllPlus2

```wurst
public class AbilityDefinitionAllPlus2 extends AbilityDefinition
```

'AIx2' / [AbilityIds.allPlus2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-allPlus2)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionCrownofKingsAllPlus5

```wurst
public class AbilityDefinitionCrownofKingsAllPlus5 extends AbilityDefinition
```

'AIx5' / [AbilityIds.crownofKingsAllPlus5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-crownofKingsAllPlus5)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionCorrosiveBreath

```wurst
public class AbilityDefinitionCorrosiveBreath extends AbilityDefinition
```

'Acor' / [AbilityIds.corrosiveBreath](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-corrosiveBreath)

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionRootAncients

```wurst
public class AbilityDefinitionRootAncients extends AbilityDefinition
```

'Aro1' / [AbilityIds.rootAncients](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rootAncients)

**Members:**

- `construct(int newAbilityId)`
- `setUprootedDefenseType(int level, string value)`
- `presetUprootedDefenseType(StringLevelClosure lc)`
- `setRootedTurning(int level, bool value)`
- `presetRootedTurning(BooleanLevelClosure lc)`
- `setUprootedWeapons(int level, string value)`
- `presetUprootedWeapons(StringLevelClosure lc)`
- `setRootedWeapons(int level, string value)`
- `presetRootedWeapons(StringLevelClosure lc)`

### AbilityDefinitionRootAncientProtector

```wurst
public class AbilityDefinitionRootAncientProtector extends AbilityDefinition
```

'Aro2' / [AbilityIds.rootAncientProtector](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rootAncientProtector)

**Members:**

- `construct(int newAbilityId)`
- `setUprootedDefenseType(int level, string value)`
- `presetUprootedDefenseType(StringLevelClosure lc)`
- `setRootedTurning(int level, bool value)`
- `presetRootedTurning(BooleanLevelClosure lc)`
- `setUprootedWeapons(int level, string value)`
- `presetUprootedWeapons(StringLevelClosure lc)`
- `setRootedWeapons(int level, string value)`
- `presetRootedWeapons(StringLevelClosure lc)`

### AbilityDefinitionFactory

```wurst
public class AbilityDefinitionFactory extends AbilityDefinition
```

'ANfy' / [AbilityIds.factory](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-factory)

**Members:**

- `construct(int newAbilityId)`
- `setSpawnUnitID(int level, string value)`
- `presetSpawnUnitID(StringLevelClosure lc)`
- `setLeashRange(int level, real value)`
- `presetLeashRange(RealLevelClosure lc)`
- `setSpawnInterval(int level, real value)`
- `presetSpawnInterval(RealLevelClosure lc)`

### AbilityDefinitionKeeperoftheGroveForceofNature

```wurst
public class AbilityDefinitionKeeperoftheGroveForceofNature extends AbilityDefinition
```

'AEfn' / [AbilityIds.forceofNature1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-forceofNature1)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionLichDeathandDecay

```wurst
public class AbilityDefinitionLichDeathandDecay extends AbilityDefinition
```

'AUdd' / [AbilityIds.deathAndDecay1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathAndDecay1)

**Members:**

- `construct(int newAbilityId)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setMaxLifeDrainedperSecond(int level, real value)`
  Max Life Drained per Second (%) / 'Udd1'
- `presetMaxLifeDrainedperSecond(RealLevelClosure lc)`

### AbilityDefinitionItemWeb

```wurst
public class AbilityDefinitionItemWeb extends AbilityDefinition
```

'AIwb' / [AbilityIds.itemWeb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemWeb)

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`
- `setStunDuration(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`

### AbilityDefinitionWardenFanofKnives

```wurst
public class AbilityDefinitionWardenFanofKnives extends AbilityDefinition
```

'AEfk' / [AbilityIds.wardenFanofKnives](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-wardenFanofKnives)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumSpeedAdjustment(int level, real value)`
- `presetMaximumSpeedAdjustment(RealLevelClosure lc)`
- `setMaximumNumberofTargets(int level, int value)`
- `presetMaximumNumberofTargets(IntLevelClosure lc)`
- `setDamagePerTarget(int level, real value)`
- `presetDamagePerTarget(RealLevelClosure lc)`
- `setMaximumTotalDamage(int level, real value)`
- `presetMaximumTotalDamage(RealLevelClosure lc)`

### AbilityDefinitionBattlestationsChaos

```wurst
public class AbilityDefinitionBattlestationsChaos extends AbilityDefinition
```

'Sbtl' / [AbilityIds.battlestationsChaos](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-battlestationsChaos)

**Members:**

- `construct(int newAbilityId)`
- `setSummonBusyUnits(int level, bool value)`
- `presetSummonBusyUnits(BooleanLevelClosure lc)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionCorporealForm

```wurst
public class AbilityDefinitionCorporealForm extends AbilityDefinition
```

'Acpf' / [AbilityIds.corporealForm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-corporealForm)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionDeathKnightDeathCoil

```wurst
public class AbilityDefinitionDeathKnightDeathCoil extends AbilityDefinition
```

'AUdc' / [AbilityIds.deathCoil1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathCoil1)

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`
  Amount Healed/Damaged / 'Udc1'
- `presetAmountHealedDamaged(RealLevelClosure lc)`

### AbilityDefinitionPhaseShift

```wurst
public class AbilityDefinitionPhaseShift extends AbilityDefinition
```

'Apsh' / [AbilityIds.phaseShift](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-phaseShift)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Hbn2'
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Hbn1'
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionSleepAlways

```wurst
public class AbilityDefinitionSleepAlways extends AbilityDefinition
```

'Asla' / [AbilityIds.sleepAlways](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sleepAlways)

**Members:**

- `construct(int newAbilityId)`
- `setSleepOnce(int level, bool value)`
- `presetSleepOnce(BooleanLevelClosure lc)`
- `setAllowOnAnyPlayerSlot(int level, bool value)`
- `presetAllowOnAnyPlayerSlot(BooleanLevelClosure lc)`

### AbilityDefinitionFigurineUrsaWarrior

```wurst
public class AbilityDefinitionFigurineUrsaWarrior extends AbilityDefinition
```

'AIuw' / [AbilityIds.figurineUrsaWarrior](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-figurineUrsaWarrior)

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionElunesGrace

```wurst
public class AbilityDefinitionElunesGrace extends AbilityDefinition
```

'Aegr' / [AbilityIds.elunesGrace](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-elunesGrace)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoDeflect(int level, real value)`
- `presetChancetoDeflect(RealLevelClosure lc)`
- `setDeflectDamageTakenSpells(int level, real value)`
- `presetDeflectDamageTakenSpells(RealLevelClosure lc)`
- `setDeflectDamageTakenPiercing(int level, real value)`
- `presetDeflectDamageTakenPiercing(RealLevelClosure lc)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`
- `setDamageTaken(int level, real value)`
  Damage Taken (%) / 'Def1'
- `presetDamageTaken(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
  Damage Dealt (%) / 'Def2'
- `presetDamageDealt(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionReturnLumber

```wurst
public class AbilityDefinitionReturnLumber extends AbilityDefinition
```

'Arlm' / [AbilityIds.returnLumber](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-returnLumber)

**Members:**

- `construct(int newAbilityId)`
- `setAcceptsGold(int level, bool value)`
- `presetAcceptsGold(BooleanLevelClosure lc)`
- `setAcceptsLumber(int level, bool value)`
- `presetAcceptsLumber(BooleanLevelClosure lc)`

### AbilityDefinitionRegenLifeArll

```wurst
public class AbilityDefinitionRegenLifeArll extends AbilityDefinition
```

'Arll' / [AbilityIds.regenLifeArll](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-regenLifeArll)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionDemonHunterEvasion

```wurst
public class AbilityDefinitionDemonHunterEvasion extends AbilityDefinition
```

'AEev' / [AbilityIds.evasion2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-evasion2)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionPitLordHowlofTerror

```wurst
public class AbilityDefinitionPitLordHowlofTerror extends AbilityDefinition
```

'ANht' / [AbilityIds.pitLordHowlofTerror](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pitLordHowlofTerror)

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `presetDamageIncrease(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setPreferHostiles(int level, bool value)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `setManaRegen(int level, real value)`
- `presetManaRegen(RealLevelClosure lc)`
- `setLifeRegenerationRate(int level, real value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `setPreferFriendlies(int level, bool value)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionAlchemistHealingSpray

```wurst
public class AbilityDefinitionAlchemistHealingSpray extends AbilityDefinition
```

'ANhs' / [AbilityIds.alchemistHealingSpray](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-alchemistHealingSpray)

**Members:**

- `construct(int newAbilityId)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setMaxDamage(int level, real value)`
- `presetMaxDamage(RealLevelClosure lc)`
- `setMissileCount(int level, int value)`
- `presetMissileCount(IntLevelClosure lc)`
- `setWaveCount(int level, int value)`
- `presetWaveCount(IntLevelClosure lc)`
- `setDamageAmount(int level, real value)`
- `presetDamageAmount(RealLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionEntangledGoldMine

```wurst
public class AbilityDefinitionEntangledGoldMine extends AbilityDefinition
```

'Aegm' / [AbilityIds.entangledGoldMineAbility](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-entangledGoldMineAbility)

**Members:**

- `construct(int newAbilityId)`
- `setIntervalDuration(int level, real value)`
- `presetIntervalDuration(RealLevelClosure lc)`
- `setGoldperInterval(int level, int value)`
- `presetGoldperInterval(IntLevelClosure lc)`

### AbilityDefinitionKeeperoftheGroveEntanglingRoots

```wurst
public class AbilityDefinitionKeeperoftheGroveEntanglingRoots extends AbilityDefinition
```

'AEer' / [AbilityIds.entanglingRoots1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-entanglingRoots1)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionLightningShield

```wurst
public class AbilityDefinitionLightningShield extends AbilityDefinition
```

'Alsh' / [AbilityIds.lightningShield](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lightningShield)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionVampiricattackAIva

```wurst
public class AbilityDefinitionVampiricattackAIva extends AbilityDefinition
```

'AIva' / [AbilityIds.itemLifeSteal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifeSteal)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionCoupleHippogryph

```wurst
public class AbilityDefinitionCoupleHippogryph extends AbilityDefinition
```

'Acoh' / [AbilityIds.pickupArcher](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pickupArcher)

**Members:**

- `construct(int newAbilityId)`
- `setResultingUnitType(int level, string value)`
- `presetResultingUnitType(StringLevelClosure lc)`
- `setPartnerUnitType(int level, string value)`
- `presetPartnerUnitType(StringLevelClosure lc)`

### AbilityDefinitionPaladinResurrection

```wurst
public class AbilityDefinitionPaladinResurrection extends AbilityDefinition
```

'AHre' / [AbilityIds.resurrection](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-resurrection)

**Members:**

- `construct(int newAbilityId)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`
- `setNumberofCorpsesRaised(int level, int value)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`

### AbilityDefinitionCryptLordCarrionScarabs

```wurst
public class AbilityDefinitionCryptLordCarrionScarabs extends AbilityDefinition
```

'AUcb' / [AbilityIds.cryptLordCarrionScarabs](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cryptLordCarrionScarabs)

**Members:**

- `construct(int newAbilityId)`
- `setUnitsSummonedTypeOne(int level, int value)`
- `presetUnitsSummonedTypeOne(IntLevelClosure lc)`
- `setUnitsSummonedTypeTwo(int level, int value)`
- `presetUnitsSummonedTypeTwo(IntLevelClosure lc)`
- `setKillOnCasterDeath(int level, bool value)`
- `presetKillOnCasterDeath(BooleanLevelClosure lc)`
- `setMaxUnitsSummoned(int level, int value)`
- `presetMaxUnitsSummoned(IntLevelClosure lc)`
- `setUnitTypeTwo(int level, string value)`
- `presetUnitTypeTwo(StringLevelClosure lc)`
- `setUnitTypeOne(int level, string value)`
- `presetUnitTypeOne(StringLevelClosure lc)`

### AbilityDefinitionBerserkerUpgrade

```wurst
public class AbilityDefinitionBerserkerUpgrade extends AbilityDefinition
```

'Sbsk' / [AbilityIds.berserkerUpgrade](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-berserkerUpgrade)

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionRuneofGreaterResurrection

```wurst
public class AbilityDefinitionRuneofGreaterResurrection extends AbilityDefinition
```

'APrr' / [AbilityIds.runeofGreaterResurrection](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runeofGreaterResurrection)

**Members:**

- `construct(int newAbilityId)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`
- `setNumberofCorpsesRaised(int level, int value)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`

### AbilityDefinitionManaFlare

```wurst
public class AbilityDefinitionManaFlare extends AbilityDefinition
```

'Amfl' / [AbilityIds.manaFlare](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaFlare)

**Members:**

- `construct(int newAbilityId)`
- `setHeroMaximumDamage(int level, real value)`
- `presetHeroMaximumDamage(RealLevelClosure lc)`
- `setHeroDamagePerManaPoint(int level, real value)`
- `presetHeroDamagePerManaPoint(RealLevelClosure lc)`
- `setCasterOnlySplash(int level, bool value)`
- `presetCasterOnlySplash(BooleanLevelClosure lc)`
- `setDamageCooldown(int level, real value)`
- `presetDamageCooldown(RealLevelClosure lc)`
- `setUnitDamagePerManaPoint(int level, real value)`
- `presetUnitDamagePerManaPoint(RealLevelClosure lc)`
- `setUnitMaximumDamage(int level, real value)`
- `presetUnitMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionTaurenChieftainReincarnation

```wurst
public class AbilityDefinitionTaurenChieftainReincarnation extends AbilityDefinition
```

'AOre' / [AbilityIds.reincarnation2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-reincarnation2)

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`
- `presetReincarnationDelay(RealLevelClosure lc)`

### AbilityDefinitionCoupleArcher

```wurst
public class AbilityDefinitionCoupleArcher extends AbilityDefinition
```

'Acoa' / [AbilityIds.mountHippogryph](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-mountHippogryph)

**Members:**

- `construct(int newAbilityId)`
- `setResultingUnitType(int level, string value)`
- `presetResultingUnitType(StringLevelClosure lc)`
- `setPartnerUnitType(int level, string value)`
- `presetPartnerUnitType(StringLevelClosure lc)`

### AbilityDefinitionBallsofFire

```wurst
public class AbilityDefinitionBallsofFire extends AbilityDefinition
```

'Abof' / [AbilityIds.ballsofFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ballsofFire)

**Members:**

- `construct(int newAbilityId)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `setHalfDamageDealt(int level, real value)`
- `presetHalfDamageDealt(RealLevelClosure lc)`
- `setFullDamageDealt(int level, real value)`
- `presetFullDamageDealt(RealLevelClosure lc)`
- `setHalfDamageInterval(int level, real value)`
- `presetHalfDamageInterval(RealLevelClosure lc)`
- `setFullDamageInterval(int level, real value)`
- `presetFullDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionPurge

```wurst
public class AbilityDefinitionPurge extends AbilityDefinition
```

'Aprg' / [AbilityIds.purge](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-purge)

**Members:**

- `construct(int newAbilityId)`
- `setHeroPauseDuration(int level, real value)`
- `presetHeroPauseDuration(RealLevelClosure lc)`
- `setUnitPauseDuration(int level, real value)`
- `presetUnitPauseDuration(RealLevelClosure lc)`
- `setMovementUpdateFrequency(int level, int value)`
- `presetMovementUpdateFrequency(IntLevelClosure lc)`
- `setAttackUpdateFrequency(int level, int value)`
- `presetAttackUpdateFrequency(IntLevelClosure lc)`
- `setManaLoss(int level, int value)`
- `presetManaLoss(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionSlow

```wurst
public class AbilityDefinitionSlow extends AbilityDefinition
```

'Aslo' / [AbilityIds.slow](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-slow)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAlwaysAutocast(int level, bool value)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionRuneofLesserResurrection

```wurst
public class AbilityDefinitionRuneofLesserResurrection extends AbilityDefinition
```

'APrl' / [AbilityIds.runeofLesserResurrection](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runeofLesserResurrection)

**Members:**

- `construct(int newAbilityId)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`
- `setNumberofCorpsesRaised(int level, int value)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`

### AbilityDefinitionItemTownPortal

```wurst
public class AbilityDefinitionItemTownPortal extends AbilityDefinition
```

'AItp' / [AbilityIds.itemTownPortal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTownPortal)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumNumberofUnits(int level, int value)`
- `presetMaximumNumberofUnits(IntLevelClosure lc)`
- `setUseTeleportClustering(int level, bool value)`
- `presetUseTeleportClustering(BooleanLevelClosure lc)`

### AbilityDefinitionTinkererRoboGoblinLevel1

```wurst
public class AbilityDefinitionTinkererRoboGoblinLevel1 extends AbilityDefinition
```

'ANg1' / [AbilityIds.tinkererRoboGoblinLevel1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererRoboGoblinLevel1)

**Members:**

- `construct(int newAbilityId)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionMilitia

```wurst
public class AbilityDefinitionMilitia extends AbilityDefinition
```

'Amil' / [AbilityIds.calltoArms](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-calltoArms)

**Members:**

- `construct(int newAbilityId)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`

### AbilityDefinitionVengeance

```wurst
public class AbilityDefinitionVengeance extends AbilityDefinition
```

'Avng' / [AbilityIds.vengeance](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-vengeance)

**Members:**

- `construct(int newAbilityId)`
- `setUnitsSummonedTypeTwo(int level, int value)`
- `presetUnitsSummonedTypeTwo(IntLevelClosure lc)`
- `setKillOnCasterDeath(int level, bool value)`
- `presetKillOnCasterDeath(BooleanLevelClosure lc)`
- `setMaxUnitsSummoned(int level, int value)`
- `presetMaxUnitsSummoned(IntLevelClosure lc)`
- `setUnitTypeOne(int level, string value)`
- `presetUnitTypeOne(StringLevelClosure lc)`
- `setUnitsSummonedTypeOne(int level, int value)`
- `presetUnitsSummonedTypeOne(IntLevelClosure lc)`
- `setUnitTypeForLimitCheck(int level, string value)`
- `presetUnitTypeForLimitCheck(StringLevelClosure lc)`
- `setUnitTypeTwo(int level, string value)`
- `presetUnitTypeTwo(StringLevelClosure lc)`

### AbilityDefinitionIntelligenceModPlus2

```wurst
public class AbilityDefinitionIntelligenceModPlus2 extends AbilityDefinition
```

'AItm' / [AbilityIds.intelligenceModPlus2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceModPlus2)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus8

```wurst
public class AbilityDefinitionAttackBonusPlus8 extends AbilityDefinition
```

'AItl' / [AbilityIds.attackBonusPlus8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus8)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus10

```wurst
public class AbilityDefinitionAttackBonusPlus10 extends AbilityDefinition
```

'AItn' / [AbilityIds.attackBonusPlus10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus10)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionTinkererRoboGoblinLevel3

```wurst
public class AbilityDefinitionTinkererRoboGoblinLevel3 extends AbilityDefinition
```

'ANg3' / [AbilityIds.tinkererRoboGoblinLevel3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererRoboGoblinLevel3)

**Members:**

- `construct(int newAbilityId)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionDeathDamageAOEsapper

```wurst
public class AbilityDefinitionDeathDamageAOEsapper extends AbilityDefinition
```

'Adda' / [AbilityIds.aOEdamageupondeath](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-aOEdamageupondeath)

**Members:**

- `construct(int newAbilityId)`
- `setPartialDamageAmount(int level, real value)`
- `presetPartialDamageAmount(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`
- `setPartialDamageRadius(int level, real value)`
- `presetPartialDamageRadius(RealLevelClosure lc)`

### AbilityDefinitionAroo

```wurst
public class AbilityDefinitionAroo extends AbilityDefinition
```

'Aroo' / [AbilityIds.root](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-root)

**Members:**

- `construct(int newAbilityId)`
- `setUprootedDefenseType(int level, string value)`
- `presetUprootedDefenseType(StringLevelClosure lc)`
- `setRootedTurning(int level, bool value)`
- `presetRootedTurning(BooleanLevelClosure lc)`
- `setUprootedWeapons(int level, string value)`
- `presetUprootedWeapons(StringLevelClosure lc)`
- `setRootedWeapons(int level, string value)`
- `presetRootedWeapons(StringLevelClosure lc)`

### AbilityDefinitionTinkererRoboGoblinLevel2

```wurst
public class AbilityDefinitionTinkererRoboGoblinLevel2 extends AbilityDefinition
```

'ANg2' / [AbilityIds.tinkererRoboGoblinLevel2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererRoboGoblinLevel2)

**Members:**

- `construct(int newAbilityId)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionLichFrostArmor

```wurst
public class AbilityDefinitionLichFrostArmor extends AbilityDefinition
```

'AUfa' / [AbilityIds.frostArmor1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostArmor1)

**Members:**

- `construct(int newAbilityId)`
- `setArmorDuration(int level, real value)`
- `presetArmorDuration(RealLevelClosure lc)`
- `setArmorBonus(int level, real value)`
- `presetArmorBonus(RealLevelClosure lc)`

### AbilityDefinitionTankUpgrade

```wurst
public class AbilityDefinitionTankUpgrade extends AbilityDefinition
```

'Srtt' / [AbilityIds.tankUpgrade](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tankUpgrade)

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionCripple

```wurst
public class AbilityDefinitionCripple extends AbilityDefinition
```

'Acri' / [AbilityIds.cripple](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cripple)

**Members:**

- `construct(int newAbilityId)`
- `setDamageReduction(int level, real value)`
- `presetDamageReduction(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Cri2'
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Cri1'
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionFlakCannon

```wurst
public class AbilityDefinitionFlakCannon extends AbilityDefinition
```

'Aflk' / [AbilityIds.flakCannon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-flakCannon)

**Members:**

- `construct(int newAbilityId)`
- `setSmallDamageRadius(int level, real value)`
- `presetSmallDamageRadius(RealLevelClosure lc)`
- `setSmallDamageAmount(int level, real value)`
- `presetSmallDamageAmount(RealLevelClosure lc)`
- `setMediumDamageAmount(int level, real value)`
- `presetMediumDamageAmount(RealLevelClosure lc)`
- `setMediumDamageRadius(int level, real value)`
- `presetMediumDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`

### AbilityDefinitionPossessionChanneling

```wurst
public class AbilityDefinitionPossessionChanneling extends AbilityDefinition
```

'Aps2' / [AbilityIds.possessionChanneling](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-possessionChanneling)

**Members:**

- `construct(int newAbilityId)`
- `setTargetIsMagicImmune(int level, bool value)`
- `presetTargetIsMagicImmune(BooleanLevelClosure lc)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`
- `setDamageAmplification(int level, real value)`
- `presetDamageAmplification(RealLevelClosure lc)`
- `setTargetIsInvulnerable(int level, bool value)`
- `presetTargetIsInvulnerable(BooleanLevelClosure lc)`

### AbilityDefinitionRocketAttack

```wurst
public class AbilityDefinitionRocketAttack extends AbilityDefinition
```

'Aroc' / [AbilityIds.rocketAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rocketAttack)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumNumberofTargets(int level, int value)`
- `presetMaximumNumberofTargets(IntLevelClosure lc)`
- `setDamagePerTarget(int level, real value)`
- `presetDamagePerTarget(RealLevelClosure lc)`
- `setMaximumTotalDamage(int level, real value)`
- `presetMaximumTotalDamage(RealLevelClosure lc)`

### AbilityDefinitionBrewmasterStormEarthandFire

```wurst
public class AbilityDefinitionBrewmasterStormEarthandFire extends AbilityDefinition
```

'ANef' / [AbilityIds.brewmasterStormEarthandFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-brewmasterStormEarthandFire)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitTypes(int level, string value)`
- `presetSummonedUnitTypes(StringLevelClosure lc)`

### AbilityDefinitionTinkererEngineeringUpgrade

```wurst
public class AbilityDefinitionTinkererEngineeringUpgrade extends AbilityDefinition
```

'ANeg' / [AbilityIds.tinkererEngineeringUpgrade](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tinkererEngineeringUpgrade)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `setMoveSpeedBonus(int level, real value)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionMine

```wurst
public class AbilityDefinitionMine extends AbilityDefinition
```

'Amin' / [AbilityIds.mineexploding](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-mineexploding)

**Members:**

- `construct(int newAbilityId)`
- `setActivationDelay(int level, real value)`
- `presetActivationDelay(RealLevelClosure lc)`
- `setInvisibilityTransitionTime(int level, real value)`
- `presetInvisibilityTransitionTime(RealLevelClosure lc)`

### AbilityDefinitionMagicImmunity

```wurst
public class AbilityDefinitionMagicImmunity extends AbilityDefinition
```

'Amim' / [AbilityIds.spellImmunity2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spellImmunity2)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionLichFrostNova

```wurst
public class AbilityDefinitionLichFrostNova extends AbilityDefinition
```

'AUfn' / [AbilityIds.frostNova1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostNova1)

**Members:**

- `construct(int newAbilityId)`
- `setAreaofEffectDamage(int level, real value)`
- `presetAreaofEffectDamage(RealLevelClosure lc)`
- `setSpecificTargetDamage(int level, real value)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionRoar

```wurst
public class AbilityDefinitionRoar extends AbilityDefinition
```

'Aroa' / [AbilityIds.roar](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-roar)

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `presetDamageIncrease(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setPreferHostiles(int level, bool value)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `setManaRegen(int level, real value)`
- `presetManaRegen(RealLevelClosure lc)`
- `setLifeRegenerationRate(int level, real value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `setPreferFriendlies(int level, bool value)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionRunedBracers

```wurst
public class AbilityDefinitionRunedBracers extends AbilityDefinition
```

'AIsr' / [AbilityIds.runedBracers](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runedBracers)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setDamageReduction(int level, real value)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionLichDarkRitual

```wurst
public class AbilityDefinitionLichDarkRitual extends AbilityDefinition
```

'AUdr' / [AbilityIds.darkRitual](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkRitual)

**Members:**

- `construct(int newAbilityId)`
- `setLeaveTargetAlive(int level, bool value)`
- `presetLeaveTargetAlive(BooleanLevelClosure lc)`
- `setLifeConvertedtoMana(int level, real value)`
- `presetLifeConvertedtoMana(RealLevelClosure lc)`
- `setLifeConvertedtoLife(int level, real value)`
- `presetLifeConvertedtoLife(RealLevelClosure lc)`
- `setLifeConversionAsPercent(int level, bool value)`
- `presetLifeConversionAsPercent(BooleanLevelClosure lc)`
- `setManaConversionAsPercent(int level, bool value)`
- `presetManaConversionAsPercent(BooleanLevelClosure lc)`

### AbilityDefinitionTichondriusDarkSummoning

```wurst
public class AbilityDefinitionTichondriusDarkSummoning extends AbilityDefinition
```

'AUds' / [AbilityIds.darkSummoning1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkSummoning1)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumUnits(int level, int value)`
- `presetMaximumUnits(IntLevelClosure lc)`
- `setUseTeleportClustering(int level, bool value)`
- `presetUseTeleportClustering(BooleanLevelClosure lc)`
- `setCastingDelayseconds(int level, real value)`
- `presetCastingDelayseconds(RealLevelClosure lc)`

### AbilityDefinitionItemSpeed

```wurst
public class AbilityDefinitionItemSpeed extends AbilityDefinition
```

'AIsp' / [AbilityIds.itemTemporarySpeedBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTemporarySpeedBonus)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionBloodlust

```wurst
public class AbilityDefinitionBloodlust extends AbilityDefinition
```

'Ablo' / [AbilityIds.bloodlust1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bloodlust1)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Blo2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Blo1'
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `setScalingFactor(int level, real value)`
- `presetScalingFactor(RealLevelClosure lc)`

### AbilityDefinitionDeathKnightDeathPact

```wurst
public class AbilityDefinitionDeathKnightDeathPact extends AbilityDefinition
```

'AUdp' / [AbilityIds.deathPact](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathPact)

**Members:**

- `construct(int newAbilityId)`
- `setLeaveTargetAlive(int level, bool value)`
- `presetLeaveTargetAlive(BooleanLevelClosure lc)`
- `setLifeConvertedtoMana(int level, real value)`
- `presetLifeConvertedtoMana(RealLevelClosure lc)`
- `setLifeConvertedtoLife(int level, real value)`
- `presetLifeConvertedtoLife(RealLevelClosure lc)`
- `setLifeConversionAsPercent(int level, bool value)`
- `presetLifeConversionAsPercent(BooleanLevelClosure lc)`
- `setManaConversionAsPercent(int level, bool value)`
- `presetManaConversionAsPercent(BooleanLevelClosure lc)`

### AbilityDefinitionBlightPlacement

```wurst
public class AbilityDefinitionBlightPlacement extends AbilityDefinition
```

'Ablp' / [AbilityIds.blightPlacement](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blightPlacement)

**Members:**

- `construct(int newAbilityId)`
- `setCreatesBlight(int level, bool value)`
- `presetCreatesBlight(BooleanLevelClosure lc)`
- `setExpansionAmount(int level, real value)`
- `presetExpansionAmount(RealLevelClosure lc)`

### AbilityDefinitionSeaWitchForkedLightning

```wurst
public class AbilityDefinitionSeaWitchForkedLightning extends AbilityDefinition
```

'ANfl' / [AbilityIds.seaWitchForkedLightning](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-seaWitchForkedLightning)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `setDamageperTarget(int level, real value)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionStrengthMod

```wurst
public class AbilityDefinitionStrengthMod extends AbilityDefinition
```

'AIsm' / [AbilityIds.itemStrengthGain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemStrengthGain)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionScrollofLifeRegen

```wurst
public class AbilityDefinitionScrollofLifeRegen extends AbilityDefinition
```

'AIsl' / [AbilityIds.scrollofLifeRegen](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-scrollofLifeRegen)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setDispelOnAttack(int level, bool value)`
- `presetDispelOnAttack(BooleanLevelClosure lc)`
- `setManaRegenerated(int level, real value)`
- `presetManaRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setLifeRegenerated(int level, real value)`
- `presetLifeRegenerated(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionHealCreepNormalAnhe

```wurst
public class AbilityDefinitionHealCreepNormalAnhe extends AbilityDefinition
```

'Anhe' / [AbilityIds.heal1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heal1)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionAttackSpeedIncrease

```wurst
public class AbilityDefinitionAttackSpeedIncrease extends AbilityDefinition
```

'AIsx' / [AbilityIds.attackSpeedIncrease](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackSpeedIncrease)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionDefend

```wurst
public class AbilityDefinitionDefend extends AbilityDefinition
```

'Adef' / [AbilityIds.defend](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defend)

**Members:**

- `construct(int newAbilityId)`
- `setDamageTaken(int level, real value)`
  Damage Taken (%) / 'Def1'
- `presetDamageTaken(RealLevelClosure lc)`
- `setChancetoDeflect(int level, real value)`
- `presetChancetoDeflect(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
  Damage Dealt (%) / 'Def2'
- `presetDamageDealt(RealLevelClosure lc)`
- `setDeflectDamageTakenSpells(int level, real value)`
- `presetDeflectDamageTakenSpells(RealLevelClosure lc)`
- `setDeflectDamageTakenPiercing(int level, real value)`
- `presetDeflectDamageTakenPiercing(RealLevelClosure lc)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionSentryWardAIsw

```wurst
public class AbilityDefinitionSentryWardAIsw extends AbilityDefinition
```

'AIsw' / [AbilityIds.sentryWardAIsw](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sentryWardAIsw)

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionGrabTree

```wurst
public class AbilityDefinitionGrabTree extends AbilityDefinition
```

'Agra' / [AbilityIds.grabTree](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-grabTree)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setMaximumAttacks(int level, int value)`
- `presetMaximumAttacks(IntLevelClosure lc)`
- `setAttachDelay(int level, real value)`
- `presetAttachDelay(RealLevelClosure lc)`
- `setDisabledAttackIndex(int level, int value)`
- `presetDisabledAttackIndex(IntLevelClosure lc)`
- `setRemoveDelay(int level, real value)`
- `presetRemoveDelay(RealLevelClosure lc)`

### AbilityDefinitionDecouple

```wurst
public class AbilityDefinitionDecouple extends AbilityDefinition
```

'Adec' / [AbilityIds.decouple](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-decouple)

**Members:**

- `construct(int newAbilityId)`
- `setPartnerUnitTypeOne(int level, string value)`
- `presetPartnerUnitTypeOne(StringLevelClosure lc)`
- `setPartnerUnitTypeTwo(int level, string value)`
- `presetPartnerUnitTypeTwo(StringLevelClosure lc)`

### AbilityDefinitionDustofAppearance

```wurst
public class AbilityDefinitionDustofAppearance extends AbilityDefinition
```

'AItb' / [AbilityIds.dustofAppearance](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-dustofAppearance)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionAttackBonusAItc

```wurst
public class AbilityDefinitionAttackBonusAItc extends AbilityDefinition
```

'AItc' / [AbilityIds.attackBonusAItc](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusAItc)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionItemDetectAoe

```wurst
public class AbilityDefinitionItemDetectAoe extends AbilityDefinition
```

'AIta' / [AbilityIds.itemAreaDetection](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAreaDetection)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionRadius(int level, string value)`
- `presetDetectionRadius(StringLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus5

```wurst
public class AbilityDefinitionAttackBonusPlus5 extends AbilityDefinition
```

'AItj' / [AbilityIds.attackBonusPlus5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus5)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus7

```wurst
public class AbilityDefinitionAttackBonusPlus7 extends AbilityDefinition
```

'AItk' / [AbilityIds.attackBonusPlus7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus7)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus2

```wurst
public class AbilityDefinitionAttackBonusPlus2 extends AbilityDefinition
```

'AIth' / [AbilityIds.attackBonusPlus2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus2)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionDevour

```wurst
public class AbilityDefinitionDevour extends AbilityDefinition
```

'Adev' / [AbilityIds.devour1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-devour1)

**Members:**

- `construct(int newAbilityId)`
- `setMaxCreepLevel(int level, int value)`
- `presetMaxCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus4

```wurst
public class AbilityDefinitionAttackBonusPlus4 extends AbilityDefinition
```

'AIti' / [AbilityIds.attackBonusPlus4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus4)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionMountainKingThunderClap

```wurst
public class AbilityDefinitionMountainKingThunderClap extends AbilityDefinition
```

'AHtc' / [AbilityIds.thunderClap](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-thunderClap)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Htc4'
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setSpecificTargetDamage(int level, real value)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`
- `setAOEDamage(int level, real value)`
- `presetAOEDamage(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Htc3'
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionAttackBonusAItf

```wurst
public class AbilityDefinitionAttackBonusAItf extends AbilityDefinition
```

'AItf' / [AbilityIds.attackBonusAItf](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusAItf)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAdet

```wurst
public class AbilityDefinitionAdet extends AbilityDefinition
```

'Adet' / [AbilityIds.detector](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-detector)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionFingerofDeath

```wurst
public class AbilityDefinitionFingerofDeath extends AbilityDefinition
```

'ANfd' / [AbilityIds.fingerofDeath](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-fingerofDeath)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDelay(int level, real value)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setGraphicDuration(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus1

```wurst
public class AbilityDefinitionAttackBonusPlus1 extends AbilityDefinition
```

'AItg' / [AbilityIds.attackBonusPlus1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus1)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionSeaWitchFrostArrows

```wurst
public class AbilityDefinitionSeaWitchFrostArrows extends AbilityDefinition
```

'ANfa' / [AbilityIds.seaWitchFrostArrows](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-seaWitchFrostArrows)

**Members:**

- `construct(int newAbilityId)`
- `setStackFlags(int level, int value)`
- `presetStackFlags(IntLevelClosure lc)`
- `presetStackFlag(StackFlag stackFlag, boolean flag)`
- `hasStackFlag(StackFlag stackFlag) returns boolean`
- `setExtraDamage(int level, real value)`
- `presetExtraDamage(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionFireBolt

```wurst
public class AbilityDefinitionFireBolt extends AbilityDefinition
```

'ANfb' / [AbilityIds.firebolt](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-firebolt)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionMountainKingThunderBolt

```wurst
public class AbilityDefinitionMountainKingThunderBolt extends AbilityDefinition
```

'AHtb' / [AbilityIds.stormBolt](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-stormBolt)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionSentinel

```wurst
public class AbilityDefinitionSentinel extends AbilityDefinition
```

'Aesn' / [AbilityIds.sentinel](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sentinel)

**Members:**

- `construct(int newAbilityId)`
- `setHoveringSightRadius(int level, real value)`
- `presetHoveringSightRadius(RealLevelClosure lc)`
- `setInFlightSightRadius(int level, real value)`
- `presetInFlightSightRadius(RealLevelClosure lc)`
- `setNumberofOwls(int level, int value)`
- `presetNumberofOwls(IntLevelClosure lc)`
- `setHoveringHeight(int level, real value)`
- `presetHoveringHeight(RealLevelClosure lc)`
- `setDurationOfOwls(int level, real value)`
- `presetDurationOfOwls(RealLevelClosure lc)`
- `presetDurationofOwls(RealLevelClosure lc)`
- `setDurationofOwls(int level, real value)`

### AbilityDefinitionArchMageSummonWaterElemental

```wurst
public class AbilityDefinitionArchMageSummonWaterElemental extends AbilityDefinition
```

'AHwe' / [AbilityIds.summonWaterElemental](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-summonWaterElemental)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionLoadBurrow

```wurst
public class AbilityDefinitionLoadBurrow extends AbilityDefinition
```

'Sloa' / [AbilityIds.loadBurrow](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-loadBurrow)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionDispelMagiccreep

```wurst
public class AbilityDefinitionDispelMagiccreep extends AbilityDefinition
```

'Adsm' / [AbilityIds.dispelMagic1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-dispelMagic1)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `presetManaLoss(RealLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionFragShards

```wurst
public class AbilityDefinitionFragShards extends AbilityDefinition
```

'Afsh' / [AbilityIds.fragShards](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-fragShards)

**Members:**

- `construct(int newAbilityId)`
- `setSmallDamageRadius(int level, real value)`
- `presetSmallDamageRadius(RealLevelClosure lc)`
- `setSmallDamageAmount(int level, real value)`
- `presetSmallDamageAmount(RealLevelClosure lc)`
- `setMediumDamageAmount(int level, real value)`
- `presetMediumDamageAmount(RealLevelClosure lc)`
- `setMediumDamageRadius(int level, real value)`
- `presetMediumDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`

### AbilityDefinitionDetectSentryWard

```wurst
public class AbilityDefinitionDetectSentryWard extends AbilityDefinition
```

'Adt1' / [AbilityIds.detectSentryWard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-detectSentryWard)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionPhoenixFire

```wurst
public class AbilityDefinitionPhoenixFire extends AbilityDefinition
```

'Apxf' / [AbilityIds.phoenixFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-phoenixFire)

**Members:**

- `construct(int newAbilityId)`
- `setInitialDamage(int level, real value)`
- `presetInitialDamage(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionRaiseDead

```wurst
public class AbilityDefinitionRaiseDead extends AbilityDefinition
```

'Arai' / [AbilityIds.raiseDead](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-raiseDead)

**Members:**

- `construct(int newAbilityId)`
- `setUnitsSummonedTypeOne(int level, int value)`
- `presetUnitsSummonedTypeOne(IntLevelClosure lc)`
- `setUnitTypeForLimitCheck(int level, string value)`
- `presetUnitTypeForLimitCheck(StringLevelClosure lc)`
- `setUnitsSummonedTypeTwo(int level, int value)`
- `presetUnitsSummonedTypeTwo(IntLevelClosure lc)`
- `setUnitTypeTwo(int level, string value)`
- `presetUnitTypeTwo(StringLevelClosure lc)`
- `setUnitTypeOne(int level, string value)`
- `presetUnitTypeOne(StringLevelClosure lc)`

### AbilityDefinitionAnwm

```wurst
public class AbilityDefinitionAnwm extends AbilityDefinition
```

'Anwm' / [AbilityIds.anwm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anwm)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionRayOfDisruption

```wurst
public class AbilityDefinitionRayOfDisruption extends AbilityDefinition
```

'Ache' / [AbilityIds.rayofDisruption](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rayofDisruption)

**Members:**

- `construct(int newAbilityId)`
- `setManaLossPerUnit(int level, real value)`
- `presetManaLossPerUnit(RealLevelClosure lc)`
- `setMaximumDispelledUnits(int level, int value)`
- `presetMaximumDispelledUnits(IntLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionShadowMeld

```wurst
public class AbilityDefinitionShadowMeld extends AbilityDefinition
```

'Ashm' / [AbilityIds.shadowMeld](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowMeld)

**Members:**

- `construct(int newAbilityId)`
- `setDayNightDuration(int level, real value)`
  Day/Night Duration / 'Shm2'
- `presetDayNightDuration(RealLevelClosure lc)`
- `setActionDuration(int level, real value)`
- `presetActionDuration(RealLevelClosure lc)`
- `setFadeDuration(int level, real value)`
- `presetFadeDuration(RealLevelClosure lc)`
- `setPermanentCloak(int level, bool value)`
- `presetPermanentCloak(BooleanLevelClosure lc)`

### AbilityDefinitionShadowMeldItem

```wurst
public class AbilityDefinitionShadowMeldItem extends AbilityDefinition
```

'AIhm' / [AbilityIds.itemShadowMeld](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemShadowMeld)

**Members:**

- `construct(int newAbilityId)`
- `setDayNightDuration(int level, real value)`
  Day/Night Duration / 'Shm2'
- `presetDayNightDuration(RealLevelClosure lc)`
- `setActionDuration(int level, real value)`
- `presetActionDuration(RealLevelClosure lc)`
- `setFadeDuration(int level, real value)`
- `presetFadeDuration(RealLevelClosure lc)`
- `setPermanentCloak(int level, bool value)`
- `presetPermanentCloak(BooleanLevelClosure lc)`

### AbilityDefinitionRoarAra2

```wurst
public class AbilityDefinitionRoarAra2 extends AbilityDefinition
```

'Ara2' / [AbilityIds.roarAra2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-roarAra2)

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `presetDamageIncrease(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setPreferHostiles(int level, bool value)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `setManaRegen(int level, real value)`
- `presetManaRegen(RealLevelClosure lc)`
- `setLifeRegenerationRate(int level, real value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `setPreferFriendlies(int level, bool value)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `setMaxUnits(int level, int value)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionGhostVisible

```wurst
public class AbilityDefinitionGhostVisible extends AbilityDefinition
```

'Aeth' / [AbilityIds.ghostVisible](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ghostVisible)

**Members:**

- `construct(int newAbilityId)`
- `setDoesNotBlockBuildings(int level, bool value)`
- `presetDoesNotBlockBuildings(BooleanLevelClosure lc)`
- `setImmunetoMorphEffects(int level, bool value)`
- `presetImmunetoMorphEffects(BooleanLevelClosure lc)`

### AbilityDefinitionDetectgeneral

```wurst
public class AbilityDefinitionDetectgeneral extends AbilityDefinition
```

'Adtg' / [AbilityIds.trueSight1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-trueSight1)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionPIlotTankRifleman

```wurst
public class AbilityDefinitionPIlotTankRifleman extends AbilityDefinition
```

'Stpr' / [AbilityIds.pIlotTankRifleman](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pIlotTankRifleman)

**Members:**

- `construct(int newAbilityId)`
- `setConvertedUnitType(int level, string value)`
- `presetConvertedUnitType(StringLevelClosure lc)`
- `setRequiredUnitType(int level, string value)`
- `presetRequiredUnitType(StringLevelClosure lc)`

### AbilityDefinitionFreezeDamageBonus

```wurst
public class AbilityDefinitionFreezeDamageBonus extends AbilityDefinition
```

'AIzb' / [AbilityIds.itemFreezeDamageBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemFreezeDamageBonus)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionEtherealForm

```wurst
public class AbilityDefinitionEtherealForm extends AbilityDefinition
```

'Aetf' / [AbilityIds.etherealForm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-etherealForm)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionDetonate

```wurst
public class AbilityDefinitionDetonate extends AbilityDefinition
```

'Adtn' / [AbilityIds.detonate](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-detonate)

**Members:**

- `construct(int newAbilityId)`
- `setDamagetoSummonedUnits(int level, real value)`
- `presetDamagetoSummonedUnits(RealLevelClosure lc)`
- `setManaLossperunit(int level, real value)`
- `presetManaLossperunit(RealLevelClosure lc)`

### AbilityDefinitionRavenFormMedivh

```wurst
public class AbilityDefinitionRavenFormMedivh extends AbilityDefinition
```

'Amrf' / [AbilityIds.crowForm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-crowForm)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionShadowHunterSerpentWard

```wurst
public class AbilityDefinitionShadowHunterSerpentWard extends AbilityDefinition
```

'AOsw' / [AbilityIds.shadowHunterSerpentWard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowHunterSerpentWard)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionAbsorbMana

```wurst
public class AbilityDefinitionAbsorbMana extends AbilityDefinition
```

'Aabs' / [AbilityIds.absorbMana](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-absorbMana)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumManaAbsorbed(int level, real value)`
- `presetMaximumManaAbsorbed(RealLevelClosure lc)`
- `setMaximumLifeAbsorbed(int level, real value)`
- `presetMaximumLifeAbsorbed(RealLevelClosure lc)`

### AbilityDefinitionAuraRegenerationStatue

```wurst
public class AbilityDefinitionAuraRegenerationStatue extends AbilityDefinition
```

'Aabr' / [AbilityIds.auraRegenerationStatue](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-auraRegenerationStatue)

**Members:**

- `construct(int newAbilityId)`
- `setPercentage(int level, bool value)`
- `presetPercentage(BooleanLevelClosure lc)`
- `setAmountofHitPointsRegenerated(int level, real value)`
- `presetAmountofHitPointsRegenerated(RealLevelClosure lc)`

### AbilityDefinitionUnsummon

```wurst
public class AbilityDefinitionUnsummon extends AbilityDefinition
```

'Auns' / [AbilityIds.unsummonBuilding](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unsummonBuilding)

**Members:**

- `construct(int newAbilityId)`
- `setAccumulationStep(int level, int value)`
- `presetAccumulationStep(IntLevelClosure lc)`
- `setSalvageCostRatio(int level, real value)`
- `presetSalvageCostRatio(RealLevelClosure lc)`

### AbilityDefinitionTaurenChieftainShockWave

```wurst
public class AbilityDefinitionTaurenChieftainShockWave extends AbilityDefinition
```

'AOsh' / [AbilityIds.shockwave2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shockwave2)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionCrippleWarlock

```wurst
public class AbilityDefinitionCrippleWarlock extends AbilityDefinition
```

'Scri' / [AbilityIds.cripple1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cripple1)

**Members:**

- `construct(int newAbilityId)`
- `setDamageReduction(int level, real value)`
- `presetDamageReduction(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Cri2'
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Cri1'
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionFarseerSpiritWolf

```wurst
public class AbilityDefinitionFarseerSpiritWolf extends AbilityDefinition
```

'AOsf' / [AbilityIds.feralSpirit2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-feralSpirit2)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `setNumberofSummonedUnits(int level, int value)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionPilotTankMortarTeam

```wurst
public class AbilityDefinitionPilotTankMortarTeam extends AbilityDefinition
```

'Stpm' / [AbilityIds.pilotTankMortarTeam](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pilotTankMortarTeam)

**Members:**

- `construct(int newAbilityId)`
- `setConvertedUnitType(int level, string value)`
- `presetConvertedUnitType(StringLevelClosure lc)`
- `setRequiredUnitType(int level, string value)`
- `presetRequiredUnitType(StringLevelClosure lc)`

### AbilityDefinitionAntimagicShieldAIxs

```wurst
public class AbilityDefinitionAntimagicShieldAIxs extends AbilityDefinition
```

'AIxs' / [AbilityIds.antimagicShieldAIxs](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-antimagicShieldAIxs)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`
- `setDamageToSummonedUnits(int level, real value)`
- `presetDamageToSummonedUnits(RealLevelClosure lc)`
- `setManaLoss(int level, int value)`
- `presetManaLoss(IntLevelClosure lc)`
- `setShieldLife(int level, int value)`
- `presetShieldLife(IntLevelClosure lc)`

### AbilityDefinitionPermanentAllPlus1

```wurst
public class AbilityDefinitionPermanentAllPlus1 extends AbilityDefinition
```

'AIxm' / [AbilityIds.itemIntAgiStrgain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemIntAgiStrgain)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `presetHideButton(BooleanLevelClosure lc)`
- `setIntelligenceBonus(int level, int value)`
- `presetIntelligenceBonus(IntLevelClosure lc)`
- `setAgilityBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `setStrengthBonus(int level, int value)`
- `presetStrengthBonus(IntLevelClosure lc)`

### AbilityDefinitionAbolishMagic

```wurst
public class AbilityDefinitionAbolishMagic extends AbilityDefinition
```

'Aadm' / [AbilityIds.abolishMagic](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-abolishMagic)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `presetManaLoss(RealLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionRavenFormDruidoftheTalon

```wurst
public class AbilityDefinitionRavenFormDruidoftheTalon extends AbilityDefinition
```

'Arav' / [AbilityIds.stormCrowForm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-stormCrowForm)

**Members:**

- `construct(int newAbilityId)`
- `setNormalFormUnit(int level, string value)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `setLandingDelayTime(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`
- `setMorphingFlags(int level, int value)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetMorphingFlag(MorphingFlag morphingFlag, boolean flag)`
- `hasMorphingFlag(MorphingFlag morphingFlag) returns boolean`
- `setAlternateFormUnit(int level, string value)`
- `presetAlternateFormUnit(StringLevelClosure lc)`

### AbilityDefinitionPlagueToss

```wurst
public class AbilityDefinitionPlagueToss extends AbilityDefinition
```

'Apts' / [AbilityIds.diseaseCloud2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-diseaseCloud2)

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionVampiricattack

```wurst
public class AbilityDefinitionVampiricattack extends AbilityDefinition
```

'SCva' / [AbilityIds.vampiricattack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-vampiricattack)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldDeath

```wurst
public class AbilityDefinitionCargoHoldDeath extends AbilityDefinition
```

'Achd' / [AbilityIds.cargoHoldDeath](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cargoHoldDeath)

**Members:**

- `construct(int newAbilityId)`
- `setMovementUpdateFrequency(int level, real value)`
- `presetMovementUpdateFrequency(RealLevelClosure lc)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `setAttackUpdateFrequency(int level, real value)`
- `presetAttackUpdateFrequency(RealLevelClosure lc)`

### AbilityDefinitionAcha

```wurst
public class AbilityDefinitionAcha extends AbilityDefinition
```

'Acha' / [AbilityIds.chaos](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chaos)

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionUnholyFrenzycreep

```wurst
public class AbilityDefinitionUnholyFrenzycreep extends AbilityDefinition
```

'ACuf' / [AbilityIds.unholyFrenzycreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unholyFrenzycreep)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonus(int level, real value)`
  Attack Speed Bonus (%) / 'Uhf1'
- `presetAttackSpeedBonus(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionRenew

```wurst
public class AbilityDefinitionRenew extends AbilityDefinition
```

'Aren' / [AbilityIds.renew](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-renew)

**Members:**

- `construct(int newAbilityId)`
- `setPowerbuildRate(int level, real value)`
- `presetPowerbuildRate(RealLevelClosure lc)`
- `setNavalRangeBonus(int level, real value)`
- `presetNavalRangeBonus(RealLevelClosure lc)`
- `setRepairTimeRatio(int level, real value)`
- `presetRepairTimeRatio(RealLevelClosure lc)`
- `setRepairCostRatio(int level, real value)`
- `presetRepairCostRatio(RealLevelClosure lc)`
- `setPowerbuildCost(int level, real value)`
- `presetPowerbuildCost(RealLevelClosure lc)`

### AbilityDefinitionRegenLife

```wurst
public class AbilityDefinitionRegenLife extends AbilityDefinition
```

'Arel' / [AbilityIds.itemLifeRegeneration](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifeRegeneration)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionBlightGrowthLarge

```wurst
public class AbilityDefinitionBlightGrowthLarge extends AbilityDefinition
```

'Abgl' / [AbilityIds.blightGrowthLarge](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blightGrowthLarge)

**Members:**

- `construct(int newAbilityId)`
- `setCreatesBlight(int level, bool value)`
- `presetCreatesBlight(BooleanLevelClosure lc)`
- `setExpansionAmount(int level, real value)`
- `presetExpansionAmount(RealLevelClosure lc)`

### AbilityDefinitionBlightedGoldmine

```wurst
public class AbilityDefinitionBlightedGoldmine extends AbilityDefinition
```

'Abgm' / [AbilityIds.blightedGoldMineAbility](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blightedGoldMineAbility)

**Members:**

- `construct(int newAbilityId)`
- `setGoldperInterval(int level, int value)`
- `presetGoldperInterval(IntLevelClosure lc)`
- `setRadiusofMiningRing(int level, real value)`
- `presetRadiusofMiningRing(RealLevelClosure lc)`
- `setIntervalDuration(int level, real value)`
- `presetIntervalDuration(RealLevelClosure lc)`
- `setMaxNumberofMiners(int level, int value)`
- `presetMaxNumberofMiners(IntLevelClosure lc)`

### AbilityDefinitionUnholyAuracreep

```wurst
public class AbilityDefinitionUnholyAuracreep extends AbilityDefinition
```

'ACua' / [AbilityIds.unholyAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unholyAura)

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `setLifeRegenerationIncrease(int level, real value)`
  Life Regeneration Increase (%) / 'Uau2'
- `presetLifeRegenerationIncrease(RealLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Uau1'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionRepairOrc

```wurst
public class AbilityDefinitionRepairOrc extends AbilityDefinition
```

'Arep' / [AbilityIds.repair](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-repair)

**Members:**

- `construct(int newAbilityId)`
- `setPowerbuildRate(int level, real value)`
- `presetPowerbuildRate(RealLevelClosure lc)`
- `setNavalRangeBonus(int level, real value)`
- `presetNavalRangeBonus(RealLevelClosure lc)`
- `setRepairTimeRatio(int level, real value)`
- `presetRepairTimeRatio(RealLevelClosure lc)`
- `setRepairCostRatio(int level, real value)`
- `presetRepairCostRatio(RealLevelClosure lc)`
- `setPowerbuildCost(int level, real value)`
- `presetPowerbuildCost(RealLevelClosure lc)`

### AbilityDefinitionEntanglingSeaweed

```wurst
public class AbilityDefinitionEntanglingSeaweed extends AbilityDefinition
```

'Aenw' / [AbilityIds.entanglingSeaweed](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-entanglingSeaweed)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionNeutralSpies

```wurst
public class AbilityDefinitionNeutralSpies extends AbilityDefinition
```

'Ansp' / [AbilityIds.neutralSpies](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-neutralSpies)

**Members:**

- `construct(int newAbilityId)`
- `setGoldCostperStructure(int level, int value)`
- `presetGoldCostperStructure(IntLevelClosure lc)`
- `setLumberCostperUse(int level, int value)`
- `presetLumberCostperUse(IntLevelClosure lc)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionEntangle

```wurst
public class AbilityDefinitionEntangle extends AbilityDefinition
```

'Aent' / [AbilityIds.entangleGoldMine](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-entangleGoldMine)

**Members:**

- `construct(int newAbilityId)`
- `setResultingUnitType(int level, string value)`
- `presetResultingUnitType(StringLevelClosure lc)`

### AbilityDefinitionRejuvination

```wurst
public class AbilityDefinitionRejuvination extends AbilityDefinition
```

'Arej' / [AbilityIds.rejuvenation1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rejuvenation1)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, real value)`
- `presetManaPointsGained(RealLevelClosure lc)`
- `setNoTargetRequired(int level, bool value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`
- `setAllowWhenFull(int level, AllowWhenFull value)`
- `presetAllowWhenFull(IntLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`

### AbilityDefinitionEntanglingRootscreep

```wurst
public class AbilityDefinitionEntanglingRootscreep extends AbilityDefinition
```

'Aenr' / [AbilityIds.entanglingRoots](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-entanglingRoots)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionSelfDestruct

```wurst
public class AbilityDefinitionSelfDestruct extends AbilityDefinition
```

'Asds' / [AbilityIds.kaboom](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-kaboom)

**Members:**

- `construct(int newAbilityId)`
- `setPartialDamageAmount(int level, real value)`
- `presetPartialDamageAmount(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`
- `setExplodesonDeath(int level, bool value)`
- `presetExplodesonDeath(BooleanLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`
- `setPartialDamageRadius(int level, real value)`
- `presetPartialDamageRadius(RealLevelClosure lc)`

### AbilityDefinitionBlightGrowthSmall

```wurst
public class AbilityDefinitionBlightGrowthSmall extends AbilityDefinition
```

'Abgs' / [AbilityIds.blightGrowthSmall](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blightGrowthSmall)

**Members:**

- `construct(int newAbilityId)`
- `setCreatesBlight(int level, bool value)`
- `presetCreatesBlight(BooleanLevelClosure lc)`
- `setExpansionAmount(int level, real value)`
- `presetExpansionAmount(RealLevelClosure lc)`

### AbilityDefinitionEnsnare

```wurst
public class AbilityDefinitionEnsnare extends AbilityDefinition
```

'Aens' / [AbilityIds.ensnare1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ensnare1)

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`
- `setStunDuration(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`

### AbilityDefinitionDeathDamageAOEmineBIG

```wurst
public class AbilityDefinitionDeathDamageAOEmineBIG extends AbilityDefinition
```

'Amnz' / [AbilityIds.deathDamageAOEmineBIG](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathDamageAOEmineBIG)

**Members:**

- `construct(int newAbilityId)`
- `setPartialDamageAmount(int level, real value)`
- `presetPartialDamageAmount(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`
- `setPartialDamageRadius(int level, real value)`
- `presetPartialDamageRadius(RealLevelClosure lc)`

### AbilityDefinitionSerpentWardtentacleForgottenone

```wurst
public class AbilityDefinitionSerpentWardtentacleForgottenone extends AbilityDefinition
```

'ACtn' / [AbilityIds.serpentWardtentacleForgottenone](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-serpentWardtentacleForgottenone)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionTornadoDamage

```wurst
public class AbilityDefinitionTornadoDamage extends AbilityDefinition
```

'Atdg' / [AbilityIds.tornadoDamage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tornadoDamage)

**Members:**

- `construct(int newAbilityId)`
- `setMediumDamageRadius(int level, real value)`
- `presetMediumDamageRadius(RealLevelClosure lc)`
- `setMediumDamagePerSecond(int level, real value)`
- `presetMediumDamagePerSecond(RealLevelClosure lc)`
- `setSmallDamageRadius(int level, real value)`
- `presetSmallDamageRadius(RealLevelClosure lc)`
- `setSmallDamagePerSecond(int level, real value)`
- `presetSmallDamagePerSecond(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionThunderBoltCreep

```wurst
public class AbilityDefinitionThunderBoltCreep extends AbilityDefinition
```

'ACtb' / [AbilityIds.hurlBoulder](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-hurlBoulder)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionThunderClapCreep

```wurst
public class AbilityDefinitionThunderClapCreep extends AbilityDefinition
```

'ACtc' / [AbilityIds.slam](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-slam)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setExtraDamageToTarget(int level, real value)`
- `presetExtraDamageToTarget(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionSelfDestructClockwerkGoblins

```wurst
public class AbilityDefinitionSelfDestructClockwerkGoblins extends AbilityDefinition
```

'Asdg' / [AbilityIds.selfDestructClockwerkGoblins](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-selfDestructClockwerkGoblins)

**Members:**

- `construct(int newAbilityId)`
- `setExplodesonDeath(int level, bool value)`
- `presetExplodesonDeath(BooleanLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`
- `setPartialDamageRadius(int level, real value)`
- `presetPartialDamageRadius(RealLevelClosure lc)`
- `setPartialDamageAmount(int level, real value)`
- `presetPartialDamageAmount(RealLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionDeathDamageAOEmine

```wurst
public class AbilityDefinitionDeathDamageAOEmine extends AbilityDefinition
```

'Amnx' / [AbilityIds.deathDamageAOEmine](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathDamageAOEmine)

**Members:**

- `construct(int newAbilityId)`
- `setPartialDamageAmount(int level, real value)`
- `presetPartialDamageAmount(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`
- `setPartialDamageRadius(int level, real value)`
- `presetPartialDamageRadius(RealLevelClosure lc)`

### AbilityDefinitionManaBurndemon

```wurst
public class AbilityDefinitionManaBurndemon extends AbilityDefinition
```

'Amnb' / [AbilityIds.manaBurndemon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaBurndemon)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaDrained(int level, real value)`
- `presetMaxManaDrained(RealLevelClosure lc)`
- `setBoltLifetime(int level, real value)`
- `presetBoltLifetime(RealLevelClosure lc)`
- `setBoltDelay(int level, real value)`
- `presetBoltDelay(RealLevelClosure lc)`

### AbilityDefinitionShockwaveTrap

```wurst
public class AbilityDefinitionShockwaveTrap extends AbilityDefinition
```

'ACst' / [AbilityIds.shockwave1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shockwave1)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `setDistance(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `setFinalArea(int level, real value)`
- `presetFinalArea(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionShadowStrikeCreep

```wurst
public class AbilityDefinitionShadowStrikeCreep extends AbilityDefinition
```

'ACss' / [AbilityIds.shadowStrikeCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowStrikeCreep)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setInitialDamage(int level, real value)`
- `presetInitialDamage(RealLevelClosure lc)`
- `setDecayPower(int level, real value)`
- `presetDecayPower(RealLevelClosure lc)`
- `setDecayingDamage(int level, real value)`
- `presetDecayingDamage(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionBashmaulSPBearlevel3

```wurst
public class AbilityDefinitionBashmaulSPBearlevel3 extends AbilityDefinition
```

'ANb2' / [AbilityIds.bashmaulSPBearlevel3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bashmaulSPBearlevel3)

**Members:**

- `construct(int newAbilityId)`
- `setNeverMiss(int level, bool value)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `setChancetoBash(int level, real value)`
- `presetChancetoBash(RealLevelClosure lc)`
- `setDamageMultiplier(int level, real value)`
- `presetDamageMultiplier(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionSlowCreep

```wurst
public class AbilityDefinitionSlowCreep extends AbilityDefinition
```

'ACsw' / [AbilityIds.slow1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-slow1)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAlwaysAutocast(int level, bool value)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionReturnGold

```wurst
public class AbilityDefinitionReturnGold extends AbilityDefinition
```

'Argd' / [AbilityIds.returnGold](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-returnGold)

**Members:**

- `construct(int newAbilityId)`
- `setAcceptsGold(int level, bool value)`
- `presetAcceptsGold(BooleanLevelClosure lc)`
- `setAcceptsLumber(int level, bool value)`
- `presetAcceptsLumber(BooleanLevelClosure lc)`

### AbilityDefinitionWarStompseagiant

```wurst
public class AbilityDefinitionWarStompseagiant extends AbilityDefinition
```

'Awrg' / [AbilityIds.warStompseagiant](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warStompseagiant)

**Members:**

- `construct(int newAbilityId)`
- `setTerrainDeformationAmplitude(int level, real value)`
- `presetTerrainDeformationAmplitude(RealLevelClosure lc)`
- `setTerrainDeformationDurationms(int level, int value)`
- `presetTerrainDeformationDurationms(IntLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionBladeMasterBladestorm

```wurst
public class AbilityDefinitionBladeMasterBladestorm extends AbilityDefinition
```

'AOww' / [AbilityIds.bladestorm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bladestorm)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageReduction(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionTaurenChieftainWarStomp

```wurst
public class AbilityDefinitionTaurenChieftainWarStomp extends AbilityDefinition
```

'AOws' / [AbilityIds.warStomp1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warStomp1)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionWarStomphydra

```wurst
public class AbilityDefinitionWarStomphydra extends AbilityDefinition
```

'Awrh' / [AbilityIds.warStomphydra](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warStomphydra)

**Members:**

- `construct(int newAbilityId)`
- `setTerrainDeformationAmplitude(int level, real value)`
- `presetTerrainDeformationAmplitude(RealLevelClosure lc)`
- `setTerrainDeformationDurationms(int level, int value)`
- `presetTerrainDeformationDurationms(IntLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionBladeMasterWindWalk

```wurst
public class AbilityDefinitionBladeMasterWindWalk extends AbilityDefinition
```

'AOwk' / [AbilityIds.windWalk](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-windWalk)

**Members:**

- `construct(int newAbilityId)`
- `setBackstabDamage(int level, bool value)`
- `presetBackstabDamage(BooleanLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Owk2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setTransitionTime(int level, real value)`
- `presetTransitionTime(RealLevelClosure lc)`
- `setBackstabDamage1(int level, real value)`
- `presetBackstabDamage1(RealLevelClosure lc)`
- `setStartCooldownWhenDecloak(int level, bool value)`
- `presetStartCooldownWhenDecloak(BooleanLevelClosure lc)`
- `presetStartCooldownwhenDecloak(BooleanLevelClosure lc)`
- `setBackstabDamage(int level, real value)`
- `presetBackstabDamage(RealLevelClosure lc)`
- `setStartCooldownwhenDecloak(int level, bool value)`
- `setBackstabDamage1(int level, bool value)`
- `presetBackstabDamage1(BooleanLevelClosure lc)`

### AbilityDefinitionSummonSeaElemental

```wurst
public class AbilityDefinitionSummonSeaElemental extends AbilityDefinition
```

'ACwe' / [AbilityIds.summonSeaElemental](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-summonSeaElemental)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionWebcreep

```wurst
public class AbilityDefinitionWebcreep extends AbilityDefinition
```

'ACwb' / [AbilityIds.webcreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-webcreep)

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`
- `setStunDuration(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`

### AbilityDefinitionReturnGoldLumber

```wurst
public class AbilityDefinitionReturnGoldLumber extends AbilityDefinition
```

'Argl' / [AbilityIds.returnGoldLumber](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-returnGoldLumber)

**Members:**

- `construct(int newAbilityId)`
- `setAcceptsGold(int level, bool value)`
- `presetAcceptsGold(BooleanLevelClosure lc)`
- `setAcceptsLumber(int level, bool value)`
- `presetAcceptsLumber(BooleanLevelClosure lc)`

### AbilityDefinitionSelfDestruct3ClockwerkGoblins

```wurst
public class AbilityDefinitionSelfDestruct3ClockwerkGoblins extends AbilityDefinition
```

'Asd3' / [AbilityIds.selfDestruct3ClockwerkGoblins](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-selfDestruct3ClockwerkGoblins)

**Members:**

- `construct(int newAbilityId)`
- `setExplodesonDeath(int level, bool value)`
- `presetExplodesonDeath(BooleanLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`
- `setPartialDamageRadius(int level, real value)`
- `presetPartialDamageRadius(RealLevelClosure lc)`
- `setPartialDamageAmount(int level, real value)`
- `presetPartialDamageAmount(RealLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionSelfDestruct2ClockwerkGoblins

```wurst
public class AbilityDefinitionSelfDestruct2ClockwerkGoblins extends AbilityDefinition
```

'Asd2' / [AbilityIds.selfDestruct2ClockwerkGoblins](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-selfDestruct2ClockwerkGoblins)

**Members:**

- `construct(int newAbilityId)`
- `setExplodesonDeath(int level, bool value)`
- `presetExplodesonDeath(BooleanLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setFullDamageAmount(int level, real value)`
- `presetFullDamageAmount(RealLevelClosure lc)`
- `setPartialDamageRadius(int level, real value)`
- `presetPartialDamageRadius(RealLevelClosure lc)`
- `setPartialDamageAmount(int level, real value)`
- `presetPartialDamageAmount(RealLevelClosure lc)`
- `setBuildingDamageFactor(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionGraveyard

```wurst
public class AbilityDefinitionGraveyard extends AbilityDefinition
```

'Agyd' / [AbilityIds.createCorpse](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-createCorpse)

**Members:**

- `construct(int newAbilityId)`
- `setRadiusofCorpses(int level, real value)`
- `presetRadiusofCorpses(RealLevelClosure lc)`
- `setMaximumNumberofCorpses(int level, int value)`
- `presetMaximumNumberofCorpses(IntLevelClosure lc)`
- `setRadiusofGravestones(int level, real value)`
- `presetRadiusofGravestones(RealLevelClosure lc)`
- `setCorpseUnitType(int level, string value)`
- `presetCorpseUnitType(StringLevelClosure lc)`

### AbilityDefinitionWarStompcreep

```wurst
public class AbilityDefinitionWarStompcreep extends AbilityDefinition
```

'Awrs' / [AbilityIds.warStomp](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warStomp)

**Members:**

- `construct(int newAbilityId)`
- `setTerrainDeformationAmplitude(int level, real value)`
- `presetTerrainDeformationAmplitude(RealLevelClosure lc)`
- `setTerrainDeformationDurationms(int level, int value)`
- `presetTerrainDeformationDurationms(IntLevelClosure lc)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionWarp

```wurst
public class AbilityDefinitionWarp extends AbilityDefinition
```

'Awrp' / [AbilityIds.waygateability](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-waygateability)

**Members:**

- `construct(int newAbilityId)`
- `setTeleportAreaWidth(int level, real value)`
- `presetTeleportAreaWidth(RealLevelClosure lc)`
- `setTeleportAreaHeight(int level, real value)`
- `presetTeleportAreaHeight(RealLevelClosure lc)`

### AbilityDefinitionVampiricAuracreep

```wurst
public class AbilityDefinitionVampiricAuracreep extends AbilityDefinition
```

'ACvp' / [AbilityIds.vampiricAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-vampiricAura)

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageStolen(int level, real value)`
  Attack Damage Stolen (%) / 'Uav1'
- `presetAttackDamageStolen(RealLevelClosure lc)`

### AbilityDefinitionVenomSpearsCreep

```wurst
public class AbilityDefinitionVenomSpearsCreep extends AbilityDefinition
```

'ACvs' / [AbilityIds.envenomedWeapons](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-envenomedWeapons)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingTypes(IntLevelClosure lc)`
- `presetStackingType(StackingType stackingType, boolean flag)`
- `hasStackingType(StackingType stackingType) returns boolean`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionBurrowDetectionFlyers

```wurst
public class AbilityDefinitionBurrowDetectionFlyers extends AbilityDefinition
```

'Abdt' / [AbilityIds.burrowDetectionFlyers](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-burrowDetectionFlyers)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionBlightDispelSmall

```wurst
public class AbilityDefinitionBlightDispelSmall extends AbilityDefinition
```

'Abds' / [AbilityIds.blightDispelSmall](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blightDispelSmall)

**Members:**

- `construct(int newAbilityId)`
- `setCreatesBlight(int level, bool value)`
- `presetCreatesBlight(BooleanLevelClosure lc)`
- `setExpansionAmount(int level, real value)`
- `presetExpansionAmount(RealLevelClosure lc)`

### AbilityDefinitionLiquidFire

```wurst
public class AbilityDefinitionLiquidFire extends AbilityDefinition
```

'Aliq' / [AbilityIds.liquidFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-liquidFire)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `setRepairsAllowed(int level, bool value)`
- `presetRepairsAllowed(BooleanLevelClosure lc)`
- `setExtraDamagePerSecond(int level, real value)`
- `presetExtraDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionDetectGyrocopter

```wurst
public class AbilityDefinitionDetectGyrocopter extends AbilityDefinition
```

'Agyv' / [AbilityIds.trueSight](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-trueSight)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionLightningAttack

```wurst
public class AbilityDefinitionLightningAttack extends AbilityDefinition
```

'Alit' / [AbilityIds.lightningAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lightningAttack)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDuration(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `setGraphicDelay(int level, real value)`
- `presetGraphicDelay(RealLevelClosure lc)`

### AbilityDefinitionBlightDispelLarge

```wurst
public class AbilityDefinitionBlightDispelLarge extends AbilityDefinition
```

'Abdl' / [AbilityIds.blightDispelLarge](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blightDispelLarge)

**Members:**

- `construct(int newAbilityId)`
- `setCreatesBlight(int level, bool value)`
- `presetCreatesBlight(BooleanLevelClosure lc)`
- `setExpansionAmount(int level, real value)`
- `presetExpansionAmount(RealLevelClosure lc)`

### AbilityDefinitionChaosCargoLoad

```wurst
public class AbilityDefinitionChaosCargoLoad extends AbilityDefinition
```

'Achl' / [AbilityIds.chaosCargoLoad](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chaosCargoLoad)

**Members:**

- `construct(int newAbilityId)`
- `setUnitTypeAllowed(int level, string value)`
- `presetUnitTypeAllowed(StringLevelClosure lc)`

### AbilityDefinitionSunderingBlades

```wurst
public class AbilityDefinitionSunderingBlades extends AbilityDefinition
```

'Ahsb' / [AbilityIds.sunderingBlades](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sunderingBlades)

**Members:**

- `construct(int newAbilityId)`
- `setBonusDamageFlat(int level, real value)`
- `presetBonusDamageFlat(RealLevelClosure lc)`
- `setBonusDamagePercent(int level, real value)`
- `presetBonusDamagePercent(RealLevelClosure lc)`
- `setDefenseTypeAffected(int level, int types)`
- `presetDefenseTypeAffected(IntLevelClosure lc)`
- `presetDefenseTypeAffected(ArmorType atype, boolean flag)`
- `hasStackingType(StackingType stackingType) returns boolean`

### AbilityDefinitionPenguinSqueek

```wurst
public class AbilityDefinitionPenguinSqueek extends AbilityDefinition
```

'AIpz' / [AbilityIds.penguinSqueek](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-penguinSqueek)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionPermanentHitPointBonusSmall

```wurst
public class AbilityDefinitionPermanentHitPointBonusSmall extends AbilityDefinition
```

'AIpx' / [AbilityIds.permanentHitPointBonusSmall](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-permanentHitPointBonusSmall)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionFrostArmorCreepAutocast

```wurst
public class AbilityDefinitionFrostArmorCreepAutocast extends AbilityDefinition
```

'ACf2' / [AbilityIds.frostArmorCreepAutocast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostArmorCreepAutocast)

**Members:**

- `construct(int newAbilityId)`
- `setArmorBonus(int level, real value)`
- `setArmorDuration(int level, real value)`
- `presetArmorBonus(RealLevelClosure lc)`
- `presetArmorDuration(RealLevelClosure lc)`

### AbilityDefinitionFingerOfPain21Button

```wurst
public class AbilityDefinitionFingerOfPain21Button extends AbilityDefinition
```

'ACf3' / [AbilityIds.fingerOfPain21Button](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-fingerOfPain21Button)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDelay(int level, real value)`
- `setGraphicDuration(int level, real value)`
- `setDamage(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionPurgeWandOfNegation

```wurst
public class AbilityDefinitionPurgeWandOfNegation extends AbilityDefinition
```

'AIpw' / [AbilityIds.purgeWandOfNegation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-purgeWandOfNegation)

**Members:**

- `construct(int newAbilityId)`
- `setAttackUpdateFrequency(int level, int value)`
- `setUnitPauseDuration(int level, real value)`
- `setHeroPauseDuration(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`
- `setManaLoss(int level, int value)`
- `setMovementUpdateFrequency(int level, int value)`
- `presetUnitPauseDuration(RealLevelClosure lc)`
- `presetMovementUpdateFrequency(IntLevelClosure lc)`
- `presetHeroPauseDuration(RealLevelClosure lc)`
- `presetManaLoss(IntLevelClosure lc)`
- `presetAttackUpdateFrequency(IntLevelClosure lc)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionPurgeTotemSP

```wurst
public class AbilityDefinitionPurgeTotemSP extends AbilityDefinition
```

'AIps' / [AbilityIds.purgeTotemSP](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-purgeTotemSP)

**Members:**

- `construct(int newAbilityId)`
- `setAttackUpdateFrequency(int level, int value)`
- `setUnitPauseDuration(int level, real value)`
- `setHeroPauseDuration(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`
- `setManaLoss(int level, int value)`
- `setMovementUpdateFrequency(int level, int value)`
- `presetUnitPauseDuration(RealLevelClosure lc)`
- `presetMovementUpdateFrequency(IntLevelClosure lc)`
- `presetHeroPauseDuration(RealLevelClosure lc)`
- `presetManaLoss(IntLevelClosure lc)`
- `presetAttackUpdateFrequency(IntLevelClosure lc)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`

### AbilityDefinitionInventory2SlotUnitOrc

```wurst
public class AbilityDefinitionInventory2SlotUnitOrc extends AbilityDefinition
```

'Aion' / [AbilityIds.inventory2SlotUnitOrc](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inventory2SlotUnitOrc)

**Members:**

- `construct(int newAbilityId)`
- `setItemCapacity(int level, int value)`
- `setCanGetItems(int level, bool value)`
- `setCanUseItems(int level, bool value)`
- `setDropItemsOnDeath(int level, bool value)`
- `setCanDropItems(int level, bool value)`
- `presetItemCapacity(IntLevelClosure lc)`
- `presetCanGetItems(BooleanLevelClosure lc)`
- `presetCanDropItems(BooleanLevelClosure lc)`
- `presetDropItemsOnDeath(BooleanLevelClosure lc)`
- `presetCanUseItems(BooleanLevelClosure lc)`

### AbilityDefinitionChenDrunkenHaze

```wurst
public class AbilityDefinitionChenDrunkenHaze extends AbilityDefinition
```

'Acdh' / [AbilityIds.chenDrunkenHaze](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chenDrunkenHaze)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `setAttacksPrevented(int level, int value)`
- `setChanceToMiss(int level, real value)`
  Chance To Miss (%) / 'Nsi2'
- `setMovementSpeedModifier(int level, real value)`
- `presetAttacksPrevented(IntLevelClosure lc)`
- `presetChanceToMiss(RealLevelClosure lc)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`

### AbilityDefinitionChenDrunkenBrawler

```wurst
public class AbilityDefinitionChenDrunkenBrawler extends AbilityDefinition
```

'Acdb' / [AbilityIds.chenDrunkenBrawler](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chenDrunkenBrawler)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplier(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setChancetoCriticalStrike(int level, real value)`
- `setNeverMiss(int level, bool value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageBonus(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetNeverMiss(BooleanLevelClosure lc)`

### AbilityDefinitionFrostArmorAutocastNaga

```wurst
public class AbilityDefinitionFrostArmorAutocastNaga extends AbilityDefinition
```

'ACfu' / [AbilityIds.frostArmorAutocastNaga](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostArmorAutocastNaga)

**Members:**

- `construct(int newAbilityId)`
- `setArmorBonus(int level, real value)`
- `setArmorDuration(int level, real value)`
- `presetArmorBonus(RealLevelClosure lc)`
- `presetArmorDuration(RealLevelClosure lc)`

### AbilityDefinitionResurrectionItem

```wurst
public class AbilityDefinitionResurrectionItem extends AbilityDefinition
```

'AIrx' / [AbilityIds.resurrectionItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-resurrectionItem)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofCorpsesRaised(int level, int value)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`

### AbilityDefinitionForkedLightningCreep

```wurst
public class AbilityDefinitionForkedLightningCreep extends AbilityDefinition
```

'ACfl' / [AbilityIds.forkedLightningCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-forkedLightningCreep)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDistance(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`

### AbilityDefinitionChenStormEarthAndFire

```wurst
public class AbilityDefinitionChenStormEarthAndFire extends AbilityDefinition
```

'Acef' / [AbilityIds.chenStormEarthAndFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chenStormEarthAndFire)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitTypes(int level, string value)`
- `presetSummonedUnitTypes(StringLevelClosure lc)`

### AbilityDefinitionFingerOfPain

```wurst
public class AbilityDefinitionFingerOfPain extends AbilityDefinition
```

'ACfd' / [AbilityIds.fingerOfPain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-fingerOfPain)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDelay(int level, real value)`
- `setGraphicDuration(int level, real value)`
- `setDamage(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionSlowPoisonItem

```wurst
public class AbilityDefinitionSlowPoisonItem extends AbilityDefinition
```

'AIsz' / [AbilityIds.slowPoisonItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-slowPoisonItem)

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `setMovementSpeedFactor(int level, real value)`
- `setStackingType(int level, int value)`
- `setAttackSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `presetStackingType(IntLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionUnholyFrenzyItem

```wurst
public class AbilityDefinitionUnholyFrenzyItem extends AbilityDefinition
```

'AIuf' / [AbilityIds.unholyFrenzyItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unholyFrenzyItem)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonus(int level, real value)`
  Attack Speed Bonus (%) / 'Uhf1'
- `setDamageperSecond(int level, real value)`
- `presetAttackSpeedBonus(RealLevelClosure lc)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus20

```wurst
public class AbilityDefinitionAttackBonusPlus20 extends AbilityDefinition
```

'AItx' / [AbilityIds.attackBonusPlus20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus20)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionItemTransmute

```wurst
public class AbilityDefinitionItemTransmute extends AbilityDefinition
```

'AIts' / [AbilityIds.itemTransmute](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTransmute)

**Members:**

- `construct(int newAbilityId)`
- `setGoldCostFactor(int level, real value)`
- `setAllowBounty(int level, bool value)`
- `setLumberCostFactor(int level, real value)`
- `setMaxCreepLevel(int level, int value)`
- `presetGoldCostFactor(RealLevelClosure lc)`
- `presetAllowBounty(BooleanLevelClosure lc)`
- `presetMaxCreepLevel(IntLevelClosure lc)`
- `presetLumberCostFactor(RealLevelClosure lc)`

### AbilityDefinitionManaBonus200

```wurst
public class AbilityDefinitionManaBonus200 extends AbilityDefinition
```

'AI2m' / [AbilityIds.manaBonus200](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaBonus200)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionItemInvulLesser

```wurst
public class AbilityDefinitionItemInvulLesser extends AbilityDefinition
```

'AIvl' / [AbilityIds.itemInvulLesser](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemInvulLesser)

**Members:**

- `construct(int newAbilityId)`
- `setData(int level, bool value)`
- `presetIsMagicImmune(BooleanLevelClosure lc)`
- `setIsMagicImmune(int level, bool value)`

### AbilityDefinitionFingerOfDeath1

```wurst
public class AbilityDefinitionFingerOfDeath1 extends AbilityDefinition
```

'Afod' / [AbilityIds.fingerOfDeath1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-fingerOfDeath1)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDelay(int level, real value)`
- `setGraphicDuration(int level, real value)`
- `setDamage(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemInvulDivinity

```wurst
public class AbilityDefinitionItemInvulDivinity extends AbilityDefinition
```

'AIvg' / [AbilityIds.itemInvulDivinity](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemInvulDivinity)

**Members:**

- `construct(int newAbilityId)`
- `setData(int level, bool value)`
- `presetIsMagicImmune(BooleanLevelClosure lc)`
- `setIsMagicImmune(int level, bool value)`

### AbilityDefinitionRevealArcaneTower

```wurst
public class AbilityDefinitionRevealArcaneTower extends AbilityDefinition
```

'AHta' / [AbilityIds.revealArcaneTower](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-revealArcaneTower)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionRadius(int level, string value)`
- `presetDetectionRadius(StringLevelClosure lc)`

### AbilityDefinitionHowlOfTerror

```wurst
public class AbilityDefinitionHowlOfTerror extends AbilityDefinition
```

'Acht' / [AbilityIds.howlOfTerror](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-howlOfTerror)

**Members:**

- `construct(int newAbilityId)`
- `setPreferFriendlies(int level, bool value)`
- `setPreferHostiles(int level, bool value)`
- `setMaxUnits(int level, int value)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `setManaRegen(int level, real value)`
- `setLifeRegenerationRate(int level, real value)`
- `setDefenseIncrease(int level, int value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `presetDamageIncrease(RealLevelClosure lc)`
- `presetManaRegen(RealLevelClosure lc)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionFigurineFurbolgTracker

```wurst
public class AbilityDefinitionFigurineFurbolgTracker extends AbilityDefinition
```

'AIut' / [AbilityIds.figurineFurbolgTracker](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-figurineFurbolgTracker)

**Members:**

- `construct(int newAbilityId)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount(IntLevelClosure lc)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionWateryMinionItem

```wurst
public class AbilityDefinitionWateryMinionItem extends AbilityDefinition
```

'AIwm' / [AbilityIds.wateryMinionItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-wateryMinionItem)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionPowerupDispelAoe

```wurst
public class AbilityDefinitionPowerupDispelAoe extends AbilityDefinition
```

'APdi' / [AbilityIds.powerupDispelAoe](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-powerupDispelAoe)

**Members:**

- `construct(int newAbilityId)`
- `setManaLossPerUnit(int level, int value)`
- `setDamageToSummonedUnits(int level, int value)`
- `presetManaLossPerUnit(IntLevelClosure lc)`
- `presetDamageToSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionItemAuraWarDrums

```wurst
public class AbilityDefinitionItemAuraWarDrums extends AbilityDefinition
```

'AIwd' / [AbilityIds.itemAuraWarDrums](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraWarDrums)

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageIncrease(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setPlayChannelAnimation(int level, bool value)`
- `setRangedBonus(int level, bool value)`
- `setMeleeBonus(int level, bool value)`
- `presetPlayChannelAnimation(BooleanLevelClosure lc)`
- `presetAttackDamageIncrease(RealLevelClosure lc)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `presetMeleeBonus(BooleanLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionAllPlus4

```wurst
public class AbilityDefinitionAllPlus4 extends AbilityDefinition
```

'AIx4' / [AbilityIds.allPlus4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-allPlus4)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `setStrengthBonus(int level, int value)`
- `setAgilityBonus(int level, int value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionAllPlus3

```wurst
public class AbilityDefinitionAllPlus3 extends AbilityDefinition
```

'AIx3' / [AbilityIds.allPlus3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-allPlus3)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `setStrengthBonus(int level, int value)`
- `setAgilityBonus(int level, int value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionBeserkItem

```wurst
public class AbilityDefinitionBeserkItem extends AbilityDefinition
```

'AIxk' / [AbilityIds.beserkItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-beserkItem)

**Members:**

- `construct(int newAbilityId)`
- `setDamageTakenIncrease(int level, real value)`
- `setAttackSpeedIncrease(int level, real value)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetDamageTakenIncrease(RealLevelClosure lc)`

### AbilityDefinitionPowerupHealAoeGreater

```wurst
public class AbilityDefinitionPowerupHealAoeGreater extends AbilityDefinition
```

'APh3' / [AbilityIds.powerupHealAoeGreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-powerupHealAoeGreater)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionPowerupHealAoeLesser

```wurst
public class AbilityDefinitionPowerupHealAoeLesser extends AbilityDefinition
```

'APh1' / [AbilityIds.powerupHealAoeLesser](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-powerupHealAoeLesser)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionPowerupHealAoe

```wurst
public class AbilityDefinitionPowerupHealAoe extends AbilityDefinition
```

'APh2' / [AbilityIds.powerupHealAoe](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-powerupHealAoe)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionBlinkBeastmasterBear

```wurst
public class AbilityDefinitionBlinkBeastmasterBear extends AbilityDefinition
```

'ANbl' / [AbilityIds.blinkBeastmasterBear](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blinkBeastmasterBear)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumRange(int level, real value)`
- `setMinimumRange(int level, real value)`
- `presetMinimumRange(RealLevelClosure lc)`
- `presetMaximumRange(RealLevelClosure lc)`

### AbilityDefinitionAvatarGarithos

```wurst
public class AbilityDefinitionAvatarGarithos extends AbilityDefinition
```

'ANav' / [AbilityIds.avatarGarithos](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-avatarGarithos)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointBonus(int level, real value)`
- `setMagicDamageReduction(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setDefenseBonus(int level, real value)`
- `presetMagicDamageReduction(RealLevelClosure lc)`
- `presetDefenseBonus(RealLevelClosure lc)`
- `presetHitPointBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionSummonLobstrokPrawns

```wurst
public class AbilityDefinitionSummonLobstrokPrawns extends AbilityDefinition
```

'Aslp' / [AbilityIds.summonLobstrokPrawns](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-summonLobstrokPrawns)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionChenBreathOfFire

```wurst
public class AbilityDefinitionChenBreathOfFire extends AbilityDefinition
```

'ANcf' / [AbilityIds.chenBreathOfFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chenBreathOfFire)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamage(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setFinalArea(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionCannibalizeAbomination

```wurst
public class AbilityDefinitionCannibalizeAbomination extends AbilityDefinition
```

'Acn2' / [AbilityIds.cannibalizeAbomination](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cannibalizeAbomination)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsperSecond(int level, real value)`
- `setMaxHitPoints(int level, real value)`
- `presetHitPointsperSecond(RealLevelClosure lc)`
- `presetMaxHitPoints(RealLevelClosure lc)`

### AbilityDefinitionEnsnareNaga

```wurst
public class AbilityDefinitionEnsnareNaga extends AbilityDefinition
```

'ANen' / [AbilityIds.ensnareNaga](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ensnareNaga)

**Members:**

- `construct(int newAbilityId)`
- `setMeleeAttackRange(int level, real value)`
- `setAirUnitHeight(int level, real value)`
- `setAirUnitLowerDuration(int level, real value)`
- `setStunDuration(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionAbolishMagicNaga

```wurst
public class AbilityDefinitionAbolishMagicNaga extends AbilityDefinition
```

'Andm' / [AbilityIds.abolishMagicNaga](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-abolishMagicNaga)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `presetManaLoss(RealLevelClosure lc)`

### AbilityDefinitionParasiteEredar

```wurst
public class AbilityDefinitionParasiteEredar extends AbilityDefinition
```

'ACpa' / [AbilityIds.parasiteEredar](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-parasiteEredar)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `setAttackSpeedFactor(int level, real value)`
- `setUnitType(int level, string value)`
- `setDamageperSecond(int level, real value)`
- `setStackingType(int level, int value)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitDuration(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `presetSummonedUnitDuration(RealLevelClosure lc)`
- `presetStackingType(IntLevelClosure lc)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetUnitType(StringLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionCycloneNaga

```wurst
public class AbilityDefinitionCycloneNaga extends AbilityDefinition
```

'Acny' / [AbilityIds.cycloneNaga](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cycloneNaga)

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`
- `presetCanBeDispelled(BooleanLevelClosure lc)`

### AbilityDefinitionManaBurnHotkeyB

```wurst
public class AbilityDefinitionManaBurnHotkeyB extends AbilityDefinition
```

'Ambb' / [AbilityIds.manaBurnHotkeyB](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-manaBurnHotkeyB)

**Members:**

- `construct(int newAbilityId)`
- `setBoltDelay(int level, real value)`
- `setBoltLifetime(int level, real value)`
- `setMaxManaDrained(int level, real value)`
- `presetBoltDelay(RealLevelClosure lc)`
- `presetMaxManaDrained(RealLevelClosure lc)`
- `presetBoltLifetime(RealLevelClosure lc)`

### AbilityDefinitionFlameStrikeImprovedCreep

```wurst
public class AbilityDefinitionFlameStrikeImprovedCreep extends AbilityDefinition
```

'ANfs' / [AbilityIds.flameStrikeImprovedCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-flameStrikeImprovedCreep)

**Members:**

- `construct(int newAbilityId)`
- `setHalfDamageDealt(int level, real value)`
- `setFullDamageDealt(int level, real value)`
- `setFullDamageInterval(int level, real value)`
- `setBuildingReduction(int level, real value)`
- `setHalfDamageInterval(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `presetFullDamageInterval(RealLevelClosure lc)`
- `presetFullDamageDealt(RealLevelClosure lc)`
- `presetHalfDamageDealt(RealLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `presetHalfDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionSentinelNoResearch

```wurst
public class AbilityDefinitionSentinelNoResearch extends AbilityDefinition
```

'Aesr' / [AbilityIds.sentinelNoResearch](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sentinelNoResearch)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofOwls(int level, int value)`
- `setInFlightSightRadius(int level, real value)`
- `setHoveringHeight(int level, real value)`
- `setHoveringSightRadius(int level, real value)`
- `setDurationOfOwls(int level, real value)`
- `presetInFlightSightRadius(RealLevelClosure lc)`
- `presetHoveringSightRadius(RealLevelClosure lc)`
- `presetHoveringHeight(RealLevelClosure lc)`
- `presetNumberofOwls(IntLevelClosure lc)`
- `presetDurationofOwls(RealLevelClosure lc)`
- `setDurationofOwls(int level, real value)`

### AbilityDefinitionRainOfFireCreepGreater

```wurst
public class AbilityDefinitionRainOfFireCreepGreater extends AbilityDefinition
```

'ACrg' / [AbilityIds.rainOfFireCreepGreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rainOfFireCreepGreater)

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `setNumberofWaves(int level, int value)`
- `setNumberofShards(int level, int value)`
- `setMaximumDamageperWave(int level, real value)`
- `setDamage(int level, real value)`
- `setBuildingReduction(int level, real value)`
- `presetMaximumDamageperWave(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetNumberofWaves(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetNumberofShards(IntLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionFeralSpiritAkama

```wurst
public class AbilityDefinitionFeralSpiritAkama extends AbilityDefinition
```

'ACs7' / [AbilityIds.feralSpiritAkama](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-feralSpiritAkama)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSummonedUnits(int level, int value)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionFeralSpiritSpiritBeast

```wurst
public class AbilityDefinitionFeralSpiritSpiritBeast extends AbilityDefinition
```

'ACs8' / [AbilityIds.feralSpiritSpiritBeast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-feralSpiritSpiritBeast)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSummonedUnits(int level, int value)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionRokhanHealingWave

```wurst
public class AbilityDefinitionRokhanHealingWave extends AbilityDefinition
```

'ANhw' / [AbilityIds.rokhanHealingWave](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rokhanHealingWave)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionRokhanHex

```wurst
public class AbilityDefinitionRokhanHex extends AbilityDefinition
```

'ANhx' / [AbilityIds.rokhanHex](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rokhanHex)

**Members:**

- `construct(int newAbilityId)`
- `setMorphUnitsWater(int level, string value)`
- `setMorphUnitsAir(int level, string value)`
- `setMaximumCreepLevel(int level, int value)`
- `setMorphUnitsGround(int level, string value)`
- `setMorphUnitsAmphibious(int level, string value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`
- `presetMorphUnitsAir(StringLevelClosure lc)`
- `presetMorphUnitsGround(StringLevelClosure lc)`
- `presetMorphUnitsWater(StringLevelClosure lc)`
- `presetMorphUnitsAmphibious(StringLevelClosure lc)`

### AbilityDefinitionHarvestNaga

```wurst
public class AbilityDefinitionHarvestNaga extends AbilityDefinition
```

'ANha' / [AbilityIds.harvestNaga](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-harvestNaga)

**Members:**

- `construct(int newAbilityId)`
- `setLumberCapacity(int level, int value)`
- `setDamagetoTree(int level, int value)`
- `setGoldCapacity(int level, int value)`
- `presetLumberCapacity(IntLevelClosure lc)`
- `presetGoldCapacity(IntLevelClosure lc)`
- `presetDamagetoTree(IntLevelClosure lc)`

### AbilityDefinitionInciteUnholyFrenzy

```wurst
public class AbilityDefinitionInciteUnholyFrenzy extends AbilityDefinition
```

'Auuf' / [AbilityIds.inciteUnholyFrenzy](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inciteUnholyFrenzy)

**Members:**

- `construct(int newAbilityId)`
- `setData(int level, bool value)`
- `setLeaveTargetAlive(int level, bool value)`
- `setData1(int level, string value)`
- `presetLeaveTargetAlive(BooleanLevelClosure lc)`
- `presetRequiresUndeadTarget(BooleanLevelClosure lc)`
- `presetTargetsAllowedforBuff(StringLevelClosure lc)`
- `setRequiresUndeadTarget(int level, bool value)`
- `setTargetsAllowedforBuff(int level, string value)`

### AbilityDefinitionRuneManaRestoreAoe

```wurst
public class AbilityDefinitionRuneManaRestoreAoe extends AbilityDefinition
```

'APmr' / [AbilityIds.runeManaRestoreAoe](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runeManaRestoreAoe)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`

### AbilityDefinitionRuneManaRestoreGreaterAoe

```wurst
public class AbilityDefinitionRuneManaRestoreGreaterAoe extends AbilityDefinition
```

'APmg' / [AbilityIds.runeManaRestoreGreaterAoe](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runeManaRestoreGreaterAoe)

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`

### AbilityDefinitionAuraPlagueAnimatedDead

```wurst
public class AbilityDefinitionAuraPlagueAnimatedDead extends AbilityDefinition
```

'Aap5' / [AbilityIds.auraPlagueAnimatedDead](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-auraPlagueAnimatedDead)

**Members:**

- `construct(int newAbilityId)`
- `setAuraDuration(int level, real value)`
- `setDurationofPlagueWard(int level, real value)`
- `setDamageperSecond(int level, real value)`
- `setPlagueWardUnitType(int level, string value)`
- `presetPlagueWardUnitType(StringLevelClosure lc)`
- `presetDurationofPlagueWard(RealLevelClosure lc)`
- `presetAuraDuration(RealLevelClosure lc)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionRokhanVoodooSpirits

```wurst
public class AbilityDefinitionRokhanVoodooSpirits extends AbilityDefinition
```

'AOls' / [AbilityIds.rokhanVoodooSpirits](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rokhanVoodooSpirits)

**Members:**

- `construct(int newAbilityId)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `setNumberofSwarmUnits(int level, int value)`
- `setSwarmUnitType(int level, string value)`
- `setDamageReturnFactor(int level, real value)`
- `setDamageReturnThreshold(int level, real value)`
- `presetNumberofSwarmUnits(IntLevelClosure lc)`
- `presetDamageReturnFactor(RealLevelClosure lc)`
- `presetSwarmUnitType(StringLevelClosure lc)`
- `presetUnitReleaseIntervalseconds(RealLevelClosure lc)`
- `presetMaxSwarmUnitsPerTarget(IntLevelClosure lc)`
- `presetDamageReturnThreshold(RealLevelClosure lc)`

### AbilityDefinitionBuildTinyLumberMill

```wurst
public class AbilityDefinitionBuildTinyLumberMill extends AbilityDefinition
```

'AIbr' / [AbilityIds.buildTinyLumberMill](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-buildTinyLumberMill)

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionBuildTinyBarracks

```wurst
public class AbilityDefinitionBuildTinyBarracks extends AbilityDefinition
```

'AIbs' / [AbilityIds.buildTinyBarracks](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-buildTinyBarracks)

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionRokhanSerpentWard

```wurst
public class AbilityDefinitionRokhanSerpentWard extends AbilityDefinition
```

'Arsw' / [AbilityIds.rokhanSerpentWard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rokhanSerpentWard)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionBlinkItem

```wurst
public class AbilityDefinitionBlinkItem extends AbilityDefinition
```

'AIbk' / [AbilityIds.blinkItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blinkItem)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumRange(int level, real value)`
- `setMinimumRange(int level, real value)`
- `presetMinimumRange(RealLevelClosure lc)`
- `presetMaximumRange(RealLevelClosure lc)`

### AbilityDefinitionBuildTinyAltar

```wurst
public class AbilityDefinitionBuildTinyAltar extends AbilityDefinition
```

'AIbh' / [AbilityIds.buildTinyAltar](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-buildTinyAltar)

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionRexxarSummonQuilbeast

```wurst
public class AbilityDefinitionRexxarSummonQuilbeast extends AbilityDefinition
```

'Arsq' / [AbilityIds.rexxarSummonQuilbeast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rexxarSummonQuilbeast)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `setSummonedUnitCount(int level, int value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionRexxarStampede

```wurst
public class AbilityDefinitionRexxarStampede extends AbilityDefinition
```

'Arsp' / [AbilityIds.rexxarStampede](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rexxarStampede)

**Members:**

- `construct(int newAbilityId)`
- `setDamageDelay(int level, real value)`
- `setBeastsPerSecond(int level, int value)`
- `setDamageRadius(int level, real value)`
- `setBeastCollisionRadius(int level, real value)`
- `setDamageAmount(int level, real value)`
- `presetBeastsPerSecond(IntLevelClosure lc)`
- `presetBeastCollisionRadius(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetDamageAmount(RealLevelClosure lc)`
- `presetDamageRadius(RealLevelClosure lc)`

### AbilityDefinitionBuildTinyFarm

```wurst
public class AbilityDefinitionBuildTinyFarm extends AbilityDefinition
```

'AIbf' / [AbilityIds.buildTinyFarm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-buildTinyFarm)

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionFigurineBlueDrake

```wurst
public class AbilityDefinitionFigurineBlueDrake extends AbilityDefinition
```

'AIbd' / [AbilityIds.figurineBlueDrake](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-figurineBlueDrake)

**Members:**

- `construct(int newAbilityId)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount(IntLevelClosure lc)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionBuildTinyBlacksmith

```wurst
public class AbilityDefinitionBuildTinyBlacksmith extends AbilityDefinition
```

'AIbb' / [AbilityIds.buildTinyBlacksmith](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-buildTinyBlacksmith)

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionRexxarSummonBear

```wurst
public class AbilityDefinitionRexxarSummonBear extends AbilityDefinition
```

'Arsg' / [AbilityIds.rexxarSummonBear](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rexxarSummonBear)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSummonedUnits(int level, int value)`
- `setSummonedUnit(int level, string value)`
- `presetSummonedUnit(StringLevelClosure lc)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`

### AbilityDefinitionBurrowBarbedArachnathid

```wurst
public class AbilityDefinitionBurrowBarbedArachnathid extends AbilityDefinition
```

'Abu5' / [AbilityIds.burrowBarbedArachnathid](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-burrowBarbedArachnathid)

**Members:**

- `construct(int newAbilityId)`
- `setAlternateFormUnit(int level, string value)`
- `setMorphingFlags(int level, int value)`
- `setLandingDelayTime(int level, real value)`
- `setNormalFormUnit(int level, string value)`
- `setAltitudeAdjustmentDuration(int level, real value)`
- `presetLandingDelayTime(RealLevelClosure lc)`
- `presetNormalFormUnit(StringLevelClosure lc)`
- `presetAlternateFormUnit(StringLevelClosure lc)`
- `presetMorphingFlags(IntLevelClosure lc)`
- `presetAltitudeAdjustmentDuration(RealLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus10

```wurst
public class AbilityDefinitionAgilityBonusPlus10 extends AbilityDefinition
```

'AIaz' / [AbilityIds.agilityBonusPlus10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus10)

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `setStrengthBonus(int level, int value)`
- `setAgilityBonus(int level, int value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionRuneRestoreAoe

```wurst
public class AbilityDefinitionRuneRestoreAoe extends AbilityDefinition
```

'APra' / [AbilityIds.runeRestoreAoe](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runeRestoreAoe)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRestored(int level, int value)`
- `setManaPointsRestored(int level, int value)`
- `presetManaPointsRestored(IntLevelClosure lc)`
- `presetHitPointsRestored(IntLevelClosure lc)`

### AbilityDefinitionCriticalStrikeItem

```wurst
public class AbilityDefinitionCriticalStrikeItem extends AbilityDefinition
```

'AIcs' / [AbilityIds.criticalStrikeItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-criticalStrikeItem)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `setNeverMiss(int level, bool value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageBonus(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`
- `presetNeverMiss(BooleanLevelClosure lc)`

### AbilityDefinitionControlMagicItem

```wurst
public class AbilityDefinitionControlMagicItem extends AbilityDefinition
```

'AIcm' / [AbilityIds.controlMagicItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-controlMagicItem)

**Members:**

- `construct(int newAbilityId)`
- `setChargeforCurrentLife(int level, real value)`
- `setMaximumCreepLevel(int level, int value)`
- `setManaperSummonedHitpoint(int level, real value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`
- `presetManaperSummonedHitpoint(RealLevelClosure lc)`
- `presetChargeforCurrentLife(RealLevelClosure lc)`

### AbilityDefinitionChainLightningItem

```wurst
public class AbilityDefinitionChainLightningItem extends AbilityDefinition
```

'AIcl' / [AbilityIds.chainLightningItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chainLightningItem)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionAttackTargetPriority

```wurst
public class AbilityDefinitionAttackTargetPriority extends AbilityDefinition
```

'Aatp' / [AbilityIds.attackTargetPriority](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackTargetPriority)

**Members:**

- `construct(int newAbilityId)`
- `setData(int level, bool value)`
- `presetInitiallyEnabled(BooleanLevelClosure lc)`
- `setInitiallyEnabled(int level, bool value)`

### AbilityDefinitionRuneSpeedAoe

```wurst
public class AbilityDefinitionRuneSpeedAoe extends AbilityDefinition
```

'APsa' / [AbilityIds.runeSpeedAoe](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runeSpeedAoe)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionDivineShieldItem

```wurst
public class AbilityDefinitionDivineShieldItem extends AbilityDefinition
```

'AIdv' / [AbilityIds.divineShieldItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-divineShieldItem)

**Members:**

- `construct(int newAbilityId)`
- `setCanDeactivate(int level, bool value)`
- `presetCanDeactivate(BooleanLevelClosure lc)`

### AbilityDefinitionDeathPactItem

```wurst
public class AbilityDefinitionDeathPactItem extends AbilityDefinition
```

'AIdp' / [AbilityIds.deathPactItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathPactItem)

**Members:**

- `construct(int newAbilityId)`
- `setLeaveTargetAlive(int level, bool value)`
- `setLifeConvertedtoLife(int level, real value)`
- `setManaConversionAsPercent(int level, bool value)`
- `setLifeConversionAsPercent(int level, bool value)`
- `setLifeConvertedtoMana(int level, real value)`
- `presetLeaveTargetAlive(BooleanLevelClosure lc)`
- `presetLifeConvertedtoMana(RealLevelClosure lc)`
- `presetManaConversionAsPercent(BooleanLevelClosure lc)`
- `presetLifeConvertedtoLife(RealLevelClosure lc)`
- `presetLifeConversionAsPercent(BooleanLevelClosure lc)`

### AbilityDefinitionShadowOrbAbility

```wurst
public class AbilityDefinitionShadowOrbAbility extends AbilityDefinition
```

'AIdn' / [AbilityIds.shadowOrbAbility](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowOrbAbility)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionCairneEnduranceAura

```wurst
public class AbilityDefinitionCairneEnduranceAura extends AbilityDefinition
```

'AOr2' / [AbilityIds.cairneEnduranceAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cairneEnduranceAura)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionCairneReincarnation

```wurst
public class AbilityDefinitionCairneReincarnation extends AbilityDefinition
```

'AOr3' / [AbilityIds.cairneReincarnation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cairneReincarnation)

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`
- `presetReincarnationDelay(RealLevelClosure lc)`

### AbilityDefinitionAIde

```wurst
public class AbilityDefinitionAIde extends AbilityDefinition
```

'AIde' / [AbilityIds.aIde](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-aIde)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionFigurineDragonspawnOverseer

```wurst
public class AbilityDefinitionFigurineDragonspawnOverseer extends AbilityDefinition
```

'AIes' / [AbilityIds.figurineDragonspawnOverseer](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-figurineDragonspawnOverseer)

**Members:**

- `construct(int newAbilityId)`
- `setSummonAmount(int level, int value)`
  Summon 2 - Amount / 'Isn2'
- `setSummonUnitType(int level, string value)`
  Summon 2 - Unit Type / 'Ist2'
- `setSummonUnitType1(int level, string value)`
  Summon 1 - Unit Type / 'Ist1'
- `setSummonAmount1(int level, int value)`
  Summon 1 - Amount / 'Isn1'
- `presetSummonAmount(IntLevelClosure lc)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionCairneShockWave

```wurst
public class AbilityDefinitionCairneShockWave extends AbilityDefinition
```

'AOs2' / [AbilityIds.cairneShockWave](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cairneShockWave)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionFingerOfDeathItem

```wurst
public class AbilityDefinitionFingerOfDeathItem extends AbilityDefinition
```

'AIfz' / [AbilityIds.fingerOfDeathItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-fingerOfDeathItem)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDelay(int level, real value)`
- `setGraphicDuration(int level, real value)`
- `setDamage(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionSearingBladeFireMelee

```wurst
public class AbilityDefinitionSearingBladeFireMelee extends AbilityDefinition
```

'AIfw' / [AbilityIds.searingBladeFireMelee](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-searingBladeFireMelee)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionFrostguardFrostMelee

```wurst
public class AbilityDefinitionFrostguardFrostMelee extends AbilityDefinition
```

'AIft' / [AbilityIds.frostguardFrostMelee](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostguardFrostMelee)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionInventory2SlotUnitNightElf

```wurst
public class AbilityDefinitionInventory2SlotUnitNightElf extends AbilityDefinition
```

'Aien' / [AbilityIds.inventory2SlotUnitNightElf](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inventory2SlotUnitNightElf)

**Members:**

- `construct(int newAbilityId)`
- `setItemCapacity(int level, int value)`
- `setCanGetItems(int level, bool value)`
- `setCanUseItems(int level, bool value)`
- `setDropItemsOnDeath(int level, bool value)`
- `setCanDropItems(int level, bool value)`
- `presetItemCapacity(IntLevelClosure lc)`
- `presetCanGetItems(BooleanLevelClosure lc)`
- `presetCanDropItems(BooleanLevelClosure lc)`
- `presetDropItemsOnDeath(BooleanLevelClosure lc)`
- `presetCanUseItems(BooleanLevelClosure lc)`

### AbilityDefinitionRainOfChaosButton02

```wurst
public class AbilityDefinitionRainOfChaosButton02 extends AbilityDefinition
```

'ANr3' / [AbilityIds.rainOfChaosButton02](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rainOfChaosButton02)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityforUnitCreation(int level, string value)`
- `setNumberofUnitsCreated(int level, int value)`
- `presetNumberofUnitsCreated(IntLevelClosure lc)`
- `presetAbilityforUnitCreation(StringLevelClosure lc)`

### AbilityDefinitionReincarnationGeneric

```wurst
public class AbilityDefinitionReincarnationGeneric extends AbilityDefinition
```

'ANr2' / [AbilityIds.reincarnationGeneric](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-reincarnationGeneric)

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`
- `presetReincarnationDelay(RealLevelClosure lc)`

### AbilityDefinitionAuraRegenerationItem

```wurst
public class AbilityDefinitionAuraRegenerationItem extends AbilityDefinition
```

'AIgx' / [AbilityIds.auraRegenerationItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-auraRegenerationItem)

**Members:**

- `construct(int newAbilityId)`
- `setAmountofHitPointsRegenerated(int level, real value)`
- `setPercentage(int level, bool value)`
- `presetAmountofHitPointsRegenerated(RealLevelClosure lc)`
- `presetPercentage(BooleanLevelClosure lc)`

### AbilityDefinitionOrbOfGuldan

```wurst
public class AbilityDefinitionOrbOfGuldan extends AbilityDefinition
```

'AIgd' / [AbilityIds.orbOfGuldan](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orbOfGuldan)

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionRexxarStormBolt

```wurst
public class AbilityDefinitionRexxarStormBolt extends AbilityDefinition
```

'ANsb' / [AbilityIds.rexxarStormBolt](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rexxarStormBolt)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemHealLeastest

```wurst
public class AbilityDefinitionItemHealLeastest extends AbilityDefinition
```

'AIhx' / [AbilityIds.itemHealLeastest](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealLeastest)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionHolyLightItem

```wurst
public class AbilityDefinitionHolyLightItem extends AbilityDefinition
```

'AIhl' / [AbilityIds.holyLightItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-holyLightItem)

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`
  Amount Healed/Damaged / 'Hhb1'
- `presetAmountHealedDamaged(RealLevelClosure lc)`

### AbilityDefinitionThornyShieldDragonTurtle

```wurst
public class AbilityDefinitionThornyShieldDragonTurtle extends AbilityDefinition
```

'ANt2' / [AbilityIds.thornyShieldDragonTurtle](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-thornyShieldDragonTurtle)

**Members:**

- `construct(int newAbilityId)`
- `setReturnedDamageFactor(int level, real value)`
- `setReceivedDamageFactor(int level, real value)`
- `setDefenseBonus(int level, real value)`
- `presetReceivedDamageFactor(RealLevelClosure lc)`
- `presetReturnedDamageFactor(RealLevelClosure lc)`
- `presetDefenseBonus(RealLevelClosure lc)`

### AbilityDefinitionInventory2SlotUnitHuman

```wurst
public class AbilityDefinitionInventory2SlotUnitHuman extends AbilityDefinition
```

'Aihn' / [AbilityIds.inventory2SlotUnitHuman](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inventory2SlotUnitHuman)

**Members:**

- `construct(int newAbilityId)`
- `setItemCapacity(int level, int value)`
- `setCanGetItems(int level, bool value)`
- `setCanUseItems(int level, bool value)`
- `setDropItemsOnDeath(int level, bool value)`
- `setCanDropItems(int level, bool value)`
- `presetItemCapacity(IntLevelClosure lc)`
- `presetCanGetItems(BooleanLevelClosure lc)`
- `presetCanDropItems(BooleanLevelClosure lc)`
- `presetDropItemsOnDeath(BooleanLevelClosure lc)`
- `presetCanUseItems(BooleanLevelClosure lc)`

### AbilityDefinitionRuneOfTheWatcher

```wurst
public class AbilityDefinitionRuneOfTheWatcher extends AbilityDefinition
```

'APwt' / [AbilityIds.runeOfTheWatcher](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runeOfTheWatcher)

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionCairneWarStomp

```wurst
public class AbilityDefinitionCairneWarStomp extends AbilityDefinition
```

'AOw2' / [AbilityIds.cairneWarStomp](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cairneWarStomp)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionGarithosShockWave

```wurst
public class AbilityDefinitionGarithosShockWave extends AbilityDefinition
```

'ANsh' / [AbilityIds.garithosShockWave](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garithosShockWave)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionDetectWarEagle

```wurst
public class AbilityDefinitionDetectWarEagle extends AbilityDefinition
```

'ANtr' / [AbilityIds.detectWarEagle](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-detectWarEagle)

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionHardenedSkinNagaTurtle

```wurst
public class AbilityDefinitionHardenedSkinNagaTurtle extends AbilityDefinition
```

'Ansk' / [AbilityIds.hardenedSkinNagaTurtle](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-hardenedSkinNagaTurtle)

**Members:**

- `construct(int newAbilityId)`
- `setIgnoredDamage(int level, real value)`
- `setIncludeMeleeDamage(int level, bool value)`
- `setChancetoReduceDamage(int level, real value)`
  Chance to Reduce Damage (%) / 'Ssk1'
- `setIncludeRangedDamage(int level, bool value)`
- `setMinimumDamage(int level, real value)`
- `presetMinimumDamage(RealLevelClosure lc)`
- `presetIncludeRangedDamage(BooleanLevelClosure lc)`
- `presetIncludeMeleeDamage(BooleanLevelClosure lc)`
- `presetChancetoReduceDamage(RealLevelClosure lc)`
- `presetIgnoredDamage(RealLevelClosure lc)`

### AbilityDefinitionMaxLifeBonusLeastest

```wurst
public class AbilityDefinitionMaxLifeBonusLeastest extends AbilityDefinition
```

'AIlz' / [AbilityIds.maxLifeBonusLeastest](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-maxLifeBonusLeastest)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionShamanClawsLightningMelee

```wurst
public class AbilityDefinitionShamanClawsLightningMelee extends AbilityDefinition
```

'AIlx' / [AbilityIds.shamanClawsLightningMelee](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shamanClawsLightningMelee)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `setEffectAbility(int level, string value)`
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `setEnabledAttackIndex(int level, int value)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `setDamageBonus(int level, real value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `presetEffectAbility(StringLevelClosure lc)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionMaxManaBonusLeastest

```wurst
public class AbilityDefinitionMaxManaBonusLeastest extends AbilityDefinition
```

'AImz' / [AbilityIds.maxManaBonusLeastest](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-maxManaBonusLeastest)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionCrushingWaveLesser

```wurst
public class AbilityDefinitionCrushingWaveLesser extends AbilityDefinition
```

'ACc3' / [AbilityIds.crushingWaveLesser](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-crushingWaveLesser)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamage(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setFinalArea(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionCrushingWaveDragonTurtle

```wurst
public class AbilityDefinitionCrushingWaveDragonTurtle extends AbilityDefinition
```

'ACc2' / [AbilityIds.crushingWaveDragonTurtle](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-crushingWaveDragonTurtle)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamage(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setFinalArea(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionMaxManaBonusLeastestReally

```wurst
public class AbilityDefinitionMaxManaBonusLeastestReally extends AbilityDefinition
```

'AImv' / [AbilityIds.maxManaBonusLeastestReally](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-maxManaBonusLeastestReally)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionAbolishMagicCreep12Pos

```wurst
public class AbilityDefinitionAbolishMagicCreep12Pos extends AbilityDefinition
```

'ACd2' / [AbilityIds.abolishMagicCreep12Pos](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-abolishMagicCreep12Pos)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `presetManaLoss(RealLevelClosure lc)`

### AbilityDefinitionBanishCreep

```wurst
public class AbilityDefinitionBanishCreep extends AbilityDefinition
```

'ACbn' / [AbilityIds.banishCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-banishCreep)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Hbn1'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Hbn2'
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionDisenchantNew

```wurst
public class AbilityDefinitionDisenchantNew extends AbilityDefinition
```

'Adcn' / [AbilityIds.disenchantNew](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-disenchantNew)

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `presetManaLoss(RealLevelClosure lc)`

### AbilityDefinitionBlackArrowMeleeCreep

```wurst
public class AbilityDefinitionBlackArrowMeleeCreep extends AbilityDefinition
```

'ACbk' / [AbilityIds.blackArrowMeleeCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blackArrowMeleeCreep)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitDurationseconds(int level, real value)`
- `setSummonedUnitType(int level, string value)`
- `setNumberofSummonedUnits(int level, int value)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`
- `presetSummonedUnitDurationseconds(RealLevelClosure lc)`

### AbilityDefinitionBloodlustCreepHotkeyB

```wurst
public class AbilityDefinitionBloodlustCreepHotkeyB extends AbilityDefinition
```

'ACbb' / [AbilityIds.bloodlustCreepHotkeyB](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bloodlustCreepHotkeyB)

**Members:**

- `construct(int newAbilityId)`
- `setScalingFactor(int level, real value)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Blo1'
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Blo2'
- `presetScalingFactor(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionPassiveHumanLumberHarvestingRhlh

```wurst
public class AbilityDefinitionPassiveHumanLumberHarvestingRhlh extends AbilityDefinition
```

'Ahlh' / [AbilityIds.passiveHumanLumberHarvestingRhlh](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveHumanLumberHarvestingRhlh)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveGhostIconOnlyUndeadAgho

```wurst
public class AbilityDefinitionPassiveGhostIconOnlyUndeadAgho extends AbilityDefinition
```

'Augh' / [AbilityIds.passiveGhostIconOnlyUndeadAgho](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveGhostIconOnlyUndeadAgho)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveUndeadGhoulFrenzyRugf

```wurst
public class AbilityDefinitionPassiveUndeadGhoulFrenzyRugf extends AbilityDefinition
```

'Augf' / [AbilityIds.passiveUndeadGhoulFrenzyRugf](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveUndeadGhoulFrenzyRugf)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFireUndead

```wurst
public class AbilityDefinitionOnFireUndead extends AbilityDefinition
```

'Afiu' / [AbilityIds.onFireUndead](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-onFireUndead)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFire

```wurst
public class AbilityDefinitionOnFire extends AbilityDefinition
```

'Afir' / [AbilityIds.onFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-onFire)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFireOrc

```wurst
public class AbilityDefinitionOnFireOrc extends AbilityDefinition
```

'Afio' / [AbilityIds.onFireOrc](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-onFireOrc)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFireNightElf

```wurst
public class AbilityDefinitionOnFireNightElf extends AbilityDefinition
```

'Afin' / [AbilityIds.onFireNightElf](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-onFireNightElf)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFireHuman

```wurst
public class AbilityDefinitionOnFireHuman extends AbilityDefinition
```

'Afih' / [AbilityIds.onFireHuman](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-onFireHuman)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionDrop1

```wurst
public class AbilityDefinitionDrop1 extends AbilityDefinition
```

'Sdro' / [AbilityIds.drop1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-drop1)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassivePhoenixFireAndEgg

```wurst
public class AbilityDefinitionPassivePhoenixFireAndEgg extends AbilityDefinition
```

'Ahpe' / [AbilityIds.passivePhoenixFireAndEgg](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passivePhoenixFireAndEgg)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveHumanRiflemanPlusRangeRhri

```wurst
public class AbilityDefinitionPassiveHumanRiflemanPlusRangeRhri extends AbilityDefinition
```

'Ahri' / [AbilityIds.passiveHumanRiflemanPlusRangeRhri](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveHumanRiflemanPlusRangeRhri)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionShadowSight

```wurst
public class AbilityDefinitionShadowSight extends AbilityDefinition
```

'Ashs' / [AbilityIds.shadowSight](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowSight)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionUltravision

```wurst
public class AbilityDefinitionUltravision extends AbilityDefinition
```

'Ault' / [AbilityIds.ultravision](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ultravision)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcGruntBerserkRobs

```wurst
public class AbilityDefinitionPassiveOrcGruntBerserkRobs extends AbilityDefinition
```

'Aobs' / [AbilityIds.passiveOrcGruntBerserkRobs](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveOrcGruntBerserkRobs)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcBerserkersRobk

```wurst
public class AbilityDefinitionPassiveOrcBerserkersRobk extends AbilityDefinition
```

'Aobk' / [AbilityIds.passiveOrcBerserkersRobk](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveOrcBerserkersRobk)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFrostAttack12

```wurst
public class AbilityDefinitionFrostAttack12 extends AbilityDefinition
```

'Afr2' / [AbilityIds.frostAttack12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostAttack12)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFrostBreathNewHasIcon

```wurst
public class AbilityDefinitionFrostBreathNewHasIcon extends AbilityDefinition
```

'Afrc' / [AbilityIds.frostBreathNewHasIcon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostBreathNewHasIcon)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFrostBreath

```wurst
public class AbilityDefinitionFrostBreath extends AbilityDefinition
```

'Afrb' / [AbilityIds.frostBreath](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostBreath)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFrostAttack

```wurst
public class AbilityDefinitionFrostAttack extends AbilityDefinition
```

'Afra' / [AbilityIds.frostAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-frostAttack)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFreezingBreath

```wurst
public class AbilityDefinitionFreezingBreath extends AbilityDefinition
```

'Afrz' / [AbilityIds.freezingBreath](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-freezingBreath)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel6

```wurst
public class AbilityDefinitionSphereSoVLevel6 extends AbilityDefinition
```

'Asp6' / [AbilityIds.sphereSoVLevel6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sphereSoVLevel6)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel5

```wurst
public class AbilityDefinitionSphereSoVLevel5 extends AbilityDefinition
```

'Asp5' / [AbilityIds.sphereSoVLevel5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sphereSoVLevel5)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel4

```wurst
public class AbilityDefinitionSphereSoVLevel4 extends AbilityDefinition
```

'Asp4' / [AbilityIds.sphereSoVLevel4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sphereSoVLevel4)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel3

```wurst
public class AbilityDefinitionSphereSoVLevel3 extends AbilityDefinition
```

'Asp3' / [AbilityIds.sphereSoVLevel3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sphereSoVLevel3)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel2

```wurst
public class AbilityDefinitionSphereSoVLevel2 extends AbilityDefinition
```

'Asp2' / [AbilityIds.sphereSoVLevel2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sphereSoVLevel2)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel1

```wurst
public class AbilityDefinitionSphereSoVLevel1 extends AbilityDefinition
```

'Asp1' / [AbilityIds.sphereSoVLevel1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sphereSoVLevel1)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveUndeadSkeletalMasteryRusm

```wurst
public class AbilityDefinitionPassiveUndeadSkeletalMasteryRusm extends AbilityDefinition
```

'Ausm' / [AbilityIds.passiveUndeadSkeletalMasteryRusm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveUndeadSkeletalMasteryRusm)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSpellSteal

```wurst
public class AbilityDefinitionSpellSteal extends AbilityDefinition
```

'Asps' / [AbilityIds.spellSteal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spellSteal)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSpikedBarricades

```wurst
public class AbilityDefinitionSpikedBarricades extends AbilityDefinition
```

'Aspi' / [AbilityIds.spikedBarricades](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spikedBarricades)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphere

```wurst
public class AbilityDefinitionSphere extends AbilityDefinition
```

'Asph' / [AbilityIds.sphere](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sphere)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionMoonGlaiveNoResearch

```wurst
public class AbilityDefinitionMoonGlaiveNoResearch extends AbilityDefinition
```

'Amgr' / [AbilityIds.moonGlaiveNoResearch](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-moonGlaiveNoResearch)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionMoonGlaive

```wurst
public class AbilityDefinitionMoonGlaive extends AbilityDefinition
```

'Amgl' / [AbilityIds.moonGlaive](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-moonGlaive)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionBouncingMissileFilter

```wurst
public class AbilityDefinitionBouncingMissileFilter extends AbilityDefinition
```

'Amgi' / [AbilityIds.bouncingMissileFilter](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bouncingMissileFilter)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionStormHammers

```wurst
public class AbilityDefinitionStormHammers extends AbilityDefinition
```

'Asth' / [AbilityIds.stormHammers](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-stormHammers)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionStandDown

```wurst
public class AbilityDefinitionStandDown extends AbilityDefinition
```

'Astd' / [AbilityIds.standDown](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-standDown)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSellUnit

```wurst
public class AbilityDefinitionSellUnit extends AbilityDefinition
```

'Asud' / [AbilityIds.sellUnitDynamic](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sellUnitDynamic)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcReinforcedDefenseRorb

```wurst
public class AbilityDefinitionPassiveOrcReinforcedDefenseRorb extends AbilityDefinition
```

'Aorb' / [AbilityIds.passiveOrcReinforcedDefenseRorb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveOrcReinforcedDefenseRorb)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFlagOrcBattleStandard

```wurst
public class AbilityDefinitionFlagOrcBattleStandard extends AbilityDefinition
```

'AIfx' / [AbilityIds.flagOrcBattleStandard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-flagOrcBattleStandard)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionMove

```wurst
public class AbilityDefinitionMove extends AbilityDefinition
```

'Amov' / [AbilityIds.move](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-move)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcSpikedBarricadeRosp

```wurst
public class AbilityDefinitionPassiveOrcSpikedBarricadeRosp extends AbilityDefinition
```

'Aosp' / [AbilityIds.passiveOrcSpikedBarricadeRosp](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveOrcSpikedBarricadeRosp)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcTrollRegenerationRotr

```wurst
public class AbilityDefinitionPassiveOrcTrollRegenerationRotr extends AbilityDefinition
```

'Aotr' / [AbilityIds.passiveOrcTrollRegenerationRotr](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveOrcTrollRegenerationRotr)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcGhostIconOnlyOrcAethUnused

```wurst
public class AbilityDefinitionPassiveOrcGhostIconOnlyOrcAethUnused extends AbilityDefinition
```

'Aoth' / [AbilityIds.passiveOrcGhostIconOnlyOrcAethUnused](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveOrcGhostIconOnlyOrcAethUnused)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionImpalingBolt

```wurst
public class AbilityDefinitionImpalingBolt extends AbilityDefinition
```

'Aimp' / [AbilityIds.impalingBolt](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-impalingBolt)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionDropPilot

```wurst
public class AbilityDefinitionDropPilot extends AbilityDefinition
```

'Atdp' / [AbilityIds.dropPilot](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-dropPilot)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemRandomItem

```wurst
public class AbilityDefinitionItemRandomItem extends AbilityDefinition
```

'AIri' / [AbilityIds.itemRandomItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRandomItem)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveNightelfImprovedBowsReib

```wurst
public class AbilityDefinitionPassiveNightelfImprovedBowsReib extends AbilityDefinition
```

'Aeib' / [AbilityIds.passiveNightelfImprovedBowsReib](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveNightelfImprovedBowsReib)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionRuneOfRebirth

```wurst
public class AbilityDefinitionRuneOfRebirth extends AbilityDefinition
```

'AIrb' / [AbilityIds.runeOfRebirth](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-runeOfRebirth)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionReinforcedBurrows

```wurst
public class AbilityDefinitionReinforcedBurrows extends AbilityDefinition
```

'Arbr' / [AbilityIds.reinforcedBurrows](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-reinforcedBurrows)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveSimple

```wurst
public class AbilityDefinitionPassiveSimple extends AbilityDefinition
```

'APai' / [AbilityIds.passiveSimple](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveSimple)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemInvisGreater

```wurst
public class AbilityDefinitionItemInvisGreater extends AbilityDefinition
```

'AIv2' / [AbilityIds.itemInvisGreater](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemInvisGreater)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemInvisLesser

```wurst
public class AbilityDefinitionItemInvisLesser extends AbilityDefinition
```

'AIv1' / [AbilityIds.itemInvisLesser](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemInvisLesser)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionReassignableAttributeBonusPlus1

```wurst
public class AbilityDefinitionReassignableAttributeBonusPlus1 extends AbilityDefinition
```

'AIvm' / [AbilityIds.reassignableAttributeBonusPlus1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-reassignableAttributeBonusPlus1)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemUltravision

```wurst
public class AbilityDefinitionItemUltravision extends AbilityDefinition
```

'AIuv' / [AbilityIds.itemUltravision](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemUltravision)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionRetrain

```wurst
public class AbilityDefinitionRetrain extends AbilityDefinition
```

'Aret' / [AbilityIds.retrain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-retrain)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveNightelfMarksmanshipRemk

```wurst
public class AbilityDefinitionPassiveNightelfMarksmanshipRemk extends AbilityDefinition
```

'Aemk' / [AbilityIds.passiveNightelfMarksmanshipRemk](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveNightelfMarksmanshipRemk)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionLoadPilot

```wurst
public class AbilityDefinitionLoadPilot extends AbilityDefinition
```

'Atlp' / [AbilityIds.loadPilot](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-loadPilot)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionEthereal

```wurst
public class AbilityDefinitionEthereal extends AbilityDefinition
```

'Aetl' / [AbilityIds.ethereal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ethereal)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionInvulnerable

```wurst
public class AbilityDefinitionInvulnerable extends AbilityDefinition
```

'Avul' / [AbilityIds.invulnerable](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-invulnerable)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionGyrocopterBombs

```wurst
public class AbilityDefinitionGyrocopterBombs extends AbilityDefinition
```

'Agyb' / [AbilityIds.gyrocopterBombs](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-gyrocopterBombs)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionRevenge

```wurst
public class AbilityDefinitionRevenge extends AbilityDefinition
```

'Arng' / [AbilityIds.revenge](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-revenge)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionAlarm

```wurst
public class AbilityDefinitionAlarm extends AbilityDefinition
```

'Aalr' / [AbilityIds.alarm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-alarm)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionRally

```wurst
public class AbilityDefinitionRally extends AbilityDefinition
```

'ARal' / [AbilityIds.rallyPoint](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rallyPoint)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionShadowHunterVoodooo

```wurst
public class AbilityDefinitionShadowHunterVoodooo extends AbilityDefinition
```

'AOvd' / [AbilityIds.bigBadVoodoo](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bigBadVoodoo)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionAcolyteHarvest

```wurst
public class AbilityDefinitionAcolyteHarvest extends AbilityDefinition
```

'Aaha' / [AbilityIds.gather2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-gather2)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionAwaken

```wurst
public class AbilityDefinitionAwaken extends AbilityDefinition
```

'Aawa' / [AbilityIds.awakenHero](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-awakenHero)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionBuildNeutral

```wurst
public class AbilityDefinitionBuildNeutral extends AbilityDefinition
```

'ANbu' / [AbilityIds.neutralBuild](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-neutralBuild)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionBuildHuman

```wurst
public class AbilityDefinitionBuildHuman extends AbilityDefinition
```

'AHbu' / [AbilityIds.humanBuild](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-humanBuild)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionBuildOrc

```wurst
public class AbilityDefinitionBuildOrc extends AbilityDefinition
```

'AObu' / [AbilityIds.orcBuild](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-orcBuild)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionBuildNightElf

```wurst
public class AbilityDefinitionBuildNightElf extends AbilityDefinition
```

'AEbu' / [AbilityIds.nightElfBuild](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-nightElfBuild)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionBuildNaga

```wurst
public class AbilityDefinitionBuildNaga extends AbilityDefinition
```

'AGbu' / [AbilityIds.nagaBuild](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-nagaBuild)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionCreepSleep

```wurst
public class AbilityDefinitionCreepSleep extends AbilityDefinition
```

'ACsp' / [AbilityIds.sleep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sleep)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionDropInstant

```wurst
public class AbilityDefinitionDropInstant extends AbilityDefinition
```

'Adri' / [AbilityIds.unloadInstant](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unloadInstant)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionDrop

```wurst
public class AbilityDefinitionDrop extends AbilityDefinition
```

'Adro' / [AbilityIds.unload](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unload)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionMeatDrop

```wurst
public class AbilityDefinitionMeatDrop extends AbilityDefinition
```

'Amed' / [AbilityIds.dropCorpse](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-dropCorpse)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionMeatLoad

```wurst
public class AbilityDefinitionMeatLoad extends AbilityDefinition
```

'Amel' / [AbilityIds.getCorpse](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-getCorpse)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionMilitiaConversion

```wurst
public class AbilityDefinitionMilitiaConversion extends AbilityDefinition
```

'Amic' / [AbilityIds.callToArms](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-callToArms)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPurchaseItem

```wurst
public class AbilityDefinitionPurchaseItem extends AbilityDefinition
```

'Apit' / [AbilityIds.shopPurchaseItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shopPurchaseItem)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionRevive

```wurst
public class AbilityDefinitionRevive extends AbilityDefinition
```

'Arev' / [AbilityIds.reviveHero](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-reviveHero)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSacrificeSacrificialPit

```wurst
public class AbilityDefinitionSacrificeSacrificialPit extends AbilityDefinition
```

'Asac' / [AbilityIds.sacrifice1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sacrifice1)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSacrificeAcolyte

```wurst
public class AbilityDefinitionSacrificeAcolyte extends AbilityDefinition
```

'Alam' / [AbilityIds.sacrifice](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sacrifice)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSellItem

```wurst
public class AbilityDefinitionSellItem extends AbilityDefinition
```

'Asid' / [AbilityIds.sellItems](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sellItems)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionTreeOfLifeForAttachingArt

```wurst
public class AbilityDefinitionTreeOfLifeForAttachingArt extends AbilityDefinition
```

'Atol' / [AbilityIds.treeofLifeupgradeability](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-treeofLifeupgradeability)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFlag

```wurst
public class AbilityDefinitionFlag extends AbilityDefinition
```

'AIfl' / [AbilityIds.itemCaptureTheFlag](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCaptureTheFlag)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFlagHuman

```wurst
public class AbilityDefinitionFlagHuman extends AbilityDefinition
```

'AIfm' / [AbilityIds.itemCaptureTheFlag1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCaptureTheFlag1)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFlagOrc

```wurst
public class AbilityDefinitionFlagOrc extends AbilityDefinition
```

'AIfo' / [AbilityIds.itemCaptureTheFlag3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCaptureTheFlag3)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFlagNightElf

```wurst
public class AbilityDefinitionFlagNightElf extends AbilityDefinition
```

'AIfn' / [AbilityIds.itemCaptureTheFlag2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCaptureTheFlag2)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFlagUndead

```wurst
public class AbilityDefinitionFlagUndead extends AbilityDefinition
```

'AIfe' / [AbilityIds.itemCaptureTheFlag4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCaptureTheFlag4)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSoulTrap

```wurst
public class AbilityDefinitionSoulTrap extends AbilityDefinition
```

'AIso' / [AbilityIds.itemSoulTheft](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSoulTheft)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSoulPossession

```wurst
public class AbilityDefinitionSoulPossession extends AbilityDefinition
```

'Asou' / [AbilityIds.itemSoulPossession](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSoulPossession)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemDamageAoe

```wurst
public class AbilityDefinitionItemDamageAoe extends AbilityDefinition
```

'AIdm' / [AbilityIds.itemAreatreewalldamage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAreatreewalldamage)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemInvulNormal

```wurst
public class AbilityDefinitionItemInvulNormal extends AbilityDefinition
```

'AIvu' / [AbilityIds.itemTemporaryInvulnerability](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTemporaryInvulnerability)

**Members:**

- `construct(int newAbilityId)`
- `setData(int level, bool value)`
- `presetIsMagicImmune(BooleanLevelClosure lc)`
- `setIsMagicImmune(int level, bool value)`

### AbilityDefinitionItemRitualDaggerInstant

```wurst
public class AbilityDefinitionItemRitualDaggerInstant extends AbilityDefinition
```

'AIdg' / [AbilityIds.ritualDaggerInstantHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ritualDaggerInstantHeal)

**Members:**

- `construct(int newAbilityId)`
- `setLeaveTargetAlive(int level, bool value)`
- `setData(int level, bool value)`
- `setData1(int level, bool value)`
- `setData2(int level, string value)`
- `setHitPointsGained(int level, int value)`
- `presetLeaveTargetAlive(BooleanLevelClosure lc)`
- `presetTargetsAllowedforHeal(StringLevelClosure lc)`
- `presetRequiresUndeadTarget(BooleanLevelClosure lc)`
- `presetAffectsInitialTarget(BooleanLevelClosure lc)`
- `presetHitPointsGained(IntLevelClosure lc)`
- `setTargetsAllowedforHeal(int level, string value)`
- `setRequiresUndeadTarget(int level, bool value)`
- `setAffectsInitialTarget(int level, bool value)`

### AbilityDefinitionItemRitualDaggerRegen

```wurst
public class AbilityDefinitionItemRitualDaggerRegen extends AbilityDefinition
```

'AIg2' / [AbilityIds.ritualDaggerRegenerate](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ritualDaggerRegenerate)

**Members:**

- `construct(int newAbilityId)`
- `setLeaveTargetAlive(int level, bool value)`
- `setData(int level, bool value)`
- `setData1(int level, bool value)`
- `setData2(int level, string value)`
- `setHitPointsGained(int level, int value)`
- `presetLeaveTargetAlive(BooleanLevelClosure lc)`
- `presetTargetsAllowedforHeal(StringLevelClosure lc)`
- `presetRequiresUndeadTarget(BooleanLevelClosure lc)`
- `presetAffectsInitialTarget(BooleanLevelClosure lc)`
- `presetHitPointsGained(IntLevelClosure lc)`
- `setTargetsAllowedforHeal(int level, string value)`
- `setRequiresUndeadTarget(int level, bool value)`
- `setAffectsInitialTarget(int level, bool value)`

### AbilityDefinitionSlow2

```wurst
public class AbilityDefinitionSlow2 extends AbilityDefinition
```

'AIno' / [AbilityIds.itemOrbOfVenom](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemOrbOfVenom)

**Members:**

- `construct(int newAbilityId)`
- `setAlwaysAutocast(int level, bool value)`
- `setAttackSpeedFactor(int level, real value)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionDeathKnightAnimateDead1

```wurst
public class AbilityDefinitionDeathKnightAnimateDead1 extends AbilityDefinition
```

'AUa2' / [AbilityIds.animateDeadDk](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-animateDeadDk)

**Members:**

- `construct(int newAbilityId)`
- `setInheritUpgrades(int level, bool value)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`
- `setNumberofCorpsesRaised(int level, int value)`
- `presetInheritUpgrades(BooleanLevelClosure lc)`
- `presetRaisedUnitsAreInvulnerable(BooleanLevelClosure lc)`
- `presetNumberofCorpsesRaised(IntLevelClosure lc)`

### AbilityDefinitionResistantSkinCreep

```wurst
public class AbilityDefinitionResistantSkinCreep extends AbilityDefinition
```

'ACrk' / [AbilityIds.resistantSkinCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-resistantSkinCreep)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionResistantSkin31PosCreep

```wurst
public class AbilityDefinitionResistantSkin31PosCreep extends AbilityDefinition
```

'ACsk' / [AbilityIds.resistantSkin31PosCreep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-resistantSkin31PosCreep)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionTankTurret

```wurst
public class AbilityDefinitionTankTurret extends AbilityDefinition
```

'Attu' / [AbilityIds.tankTurret](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tankTurret)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFirelordIncinerate1

```wurst
public class AbilityDefinitionFirelordIncinerate1 extends AbilityDefinition
```

'ANia' / [AbilityIds.firelordIncinerate1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-firelordIncinerate1)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveNightelfWellSpringRews

```wurst
public class AbilityDefinitionPassiveNightelfWellSpringRews extends AbilityDefinition
```

'Aews' / [AbilityIds.passiveNightelfWellSpringRews](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveNightelfWellSpringRews)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionTornadoWander

```wurst
public class AbilityDefinitionTornadoWander extends AbilityDefinition
```

'Atwa' / [AbilityIds.tornadoWander](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tornadoWander)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionResistantSkin

```wurst
public class AbilityDefinitionResistantSkin extends AbilityDefinition
```

'Arsk' / [AbilityIds.resistantSkin](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-resistantSkin)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionBuildUndead

```wurst
public class AbilityDefinitionBuildUndead extends AbilityDefinition
```

'AUbu' / [AbilityIds.undeadBuild](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-undeadBuild)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionAttack

```wurst
public class AbilityDefinitionAttack extends AbilityDefinition
```

'Aatk' / [AbilityIds.attack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attack)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveHumanAnimalBreedingRhan

```wurst
public class AbilityDefinitionPassiveHumanAnimalBreedingRhan extends AbilityDefinition
```

'Ahan' / [AbilityIds.passiveHumanAnimalBreedingRhan](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-passiveHumanAnimalBreedingRhan)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionHero

```wurst
public class AbilityDefinitionHero extends AbilityDefinition
```

'AHer' / [AbilityIds.hero](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-hero)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionWander

```wurst
public class AbilityDefinitionWander extends AbilityDefinition
```

'Awan' / [AbilityIds.wander](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-wander)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionLocust

```wurst
public class AbilityDefinitionLocust extends AbilityDefinition
```

'Aloc' / [AbilityIds.locust](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-locust)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSpellShield

```wurst
public class AbilityDefinitionSpellShield extends AbilityDefinition
```

'ANss' / [AbilityIds.spellShield](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-spellShield)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionAgilityBonusPlus12

```wurst
public class AbilityDefinitionAgilityBonusPlus12 extends AbilityDefinition
```

'AA12' / [AbilityIds.agilityBonusPlus12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus12)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemArmorCorrupt5

```wurst
public class AbilityDefinitionItemArmorCorrupt5 extends AbilityDefinition
```

'AACe' / [AbilityIds.itemArmorCorrupt5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorCorrupt5)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonusDice(int level, int value)`
- `setArmorPenalty(int level, int value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetDamageBonusDice(IntLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionItemArmorCorrupt2

```wurst
public class AbilityDefinitionItemArmorCorrupt2 extends AbilityDefinition
```

'AACq' / [AbilityIds.itemArmorCorrupt2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorCorrupt2)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonusDice(int level, int value)`
- `setArmorPenalty(int level, int value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetDamageBonusDice(IntLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionItemArmorCorrupt3

```wurst
public class AbilityDefinitionItemArmorCorrupt3 extends AbilityDefinition
```

'AACw' / [AbilityIds.itemArmorCorrupt3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorCorrupt3)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonusDice(int level, int value)`
- `setArmorPenalty(int level, int value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetDamageBonusDice(IntLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionItemSpellDamage8

```wurst
public class AbilityDefinitionItemSpellDamage8 extends AbilityDefinition
```

'AADe' / [AbilityIds.itemSpellDamage8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellDamage8)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellDamage7

```wurst
public class AbilityDefinitionItemSpellDamage7 extends AbilityDefinition
```

'AADi' / [AbilityIds.itemSpellDamage7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellDamage7)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellDamage2

```wurst
public class AbilityDefinitionItemSpellDamage2 extends AbilityDefinition
```

'AADo' / [AbilityIds.itemSpellDamage2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellDamage2)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellDamage3

```wurst
public class AbilityDefinitionItemSpellDamage3 extends AbilityDefinition
```

'AADq' / [AbilityIds.itemSpellDamage3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellDamage3)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellDamage4

```wurst
public class AbilityDefinitionItemSpellDamage4 extends AbilityDefinition
```

'AADr' / [AbilityIds.itemSpellDamage4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellDamage4)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellDamage10

```wurst
public class AbilityDefinitionItemSpellDamage10 extends AbilityDefinition
```

'AADt' / [AbilityIds.itemSpellDamage10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellDamage10)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellDamage6

```wurst
public class AbilityDefinitionItemSpellDamage6 extends AbilityDefinition
```

'AADu' / [AbilityIds.itemSpellDamage6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellDamage6)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellDamage5

```wurst
public class AbilityDefinitionItemSpellDamage5 extends AbilityDefinition
```

'AADw' / [AbilityIds.itemSpellDamage5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellDamage5)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellDamage12

```wurst
public class AbilityDefinitionItemSpellDamage12 extends AbilityDefinition
```

'AADy' / [AbilityIds.itemSpellDamage12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellDamage12)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp20

```wurst
public class AbilityDefinitionItemSpellAmp20 extends AbilityDefinition
```

'AAPa' / [AbilityIds.itemSpellAmp20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp20)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp3

```wurst
public class AbilityDefinitionItemSpellAmp3 extends AbilityDefinition
```

'AAPe' / [AbilityIds.itemSpellAmp3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp3)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp4

```wurst
public class AbilityDefinitionItemSpellAmp4 extends AbilityDefinition
```

'AAPi' / [AbilityIds.itemSpellAmp4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp4)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp6

```wurst
public class AbilityDefinitionItemSpellAmp6 extends AbilityDefinition
```

'AAPo' / [AbilityIds.itemSpellAmp6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp6)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp15

```wurst
public class AbilityDefinitionItemSpellAmp15 extends AbilityDefinition
```

'AAPp' / [AbilityIds.itemSpellAmp15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp15)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp12

```wurst
public class AbilityDefinitionItemSpellAmp12 extends AbilityDefinition
```

'AAPq' / [AbilityIds.itemSpellAmp12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp12)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp8

```wurst
public class AbilityDefinitionItemSpellAmp8 extends AbilityDefinition
```

'AAPr' / [AbilityIds.itemSpellAmp8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp8)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp101

```wurst
public class AbilityDefinitionItemSpellAmp101 extends AbilityDefinition
```

'AAPs' / [AbilityIds.itemSpellAmp101](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp101)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp13

```wurst
public class AbilityDefinitionItemSpellAmp13 extends AbilityDefinition
```

'AAPt' / [AbilityIds.itemSpellAmp13](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp13)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp18

```wurst
public class AbilityDefinitionItemSpellAmp18 extends AbilityDefinition
```

'AAPu' / [AbilityIds.itemSpellAmp18](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp18)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp5

```wurst
public class AbilityDefinitionItemSpellAmp5 extends AbilityDefinition
```

'AAPw' / [AbilityIds.itemSpellAmp5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp5)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp26

```wurst
public class AbilityDefinitionItemSpellAmp26 extends AbilityDefinition
```

'AAPx' / [AbilityIds.itemSpellAmp26](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp26)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemSpellAmp7

```wurst
public class AbilityDefinitionItemSpellAmp7 extends AbilityDefinition
```

'AAPy' / [AbilityIds.itemSpellAmp7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp7)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemHealthRegenAura3

```wurst
public class AbilityDefinitionItemHealthRegenAura3 extends AbilityDefinition
```

'AARe' / [AbilityIds.itemHealthRegenAura3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegenAura3)

**Members:**

- `construct(int newAbilityId)`
- `setAmountofHitPointsRegenerated(int level, real value)`
- `setPercentage(int level, bool value)`
- `presetAmountofHitPointsRegenerated(RealLevelClosure lc)`
- `presetPercentage(BooleanLevelClosure lc)`

### AbilityDefinitionItemHealthRegenAura1

```wurst
public class AbilityDefinitionItemHealthRegenAura1 extends AbilityDefinition
```

'AARq' / [AbilityIds.itemHealthRegenAura1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegenAura1)

**Members:**

- `construct(int newAbilityId)`
- `setAmountofHitPointsRegenerated(int level, real value)`
- `setPercentage(int level, bool value)`
- `presetAmountofHitPointsRegenerated(RealLevelClosure lc)`
- `presetPercentage(BooleanLevelClosure lc)`

### AbilityDefinitionItemHealthRegenAura2

```wurst
public class AbilityDefinitionItemHealthRegenAura2 extends AbilityDefinition
```

'AARw' / [AbilityIds.itemHealthRegenAura2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegenAura2)

**Members:**

- `construct(int newAbilityId)`
- `setAmountofHitPointsRegenerated(int level, real value)`
- `setPercentage(int level, bool value)`
- `presetAmountofHitPointsRegenerated(RealLevelClosure lc)`
- `presetPercentage(BooleanLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease101

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease101 extends AbilityDefinition
```

'AASa' / [AbilityIds.itemAttackSpeedIncrease101](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease101)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease4

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease4 extends AbilityDefinition
```

'AASd' / [AbilityIds.itemAttackSpeedIncrease4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease4)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease8

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease8 extends AbilityDefinition
```

'AASe' / [AbilityIds.itemAttackSpeedIncrease8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease8)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease24

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease24 extends AbilityDefinition
```

'AASf' / [AbilityIds.itemAttackSpeedIncrease24](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease24)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease30

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease30 extends AbilityDefinition
```

'AASg' / [AbilityIds.itemAttackSpeedIncrease30](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease30)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease201

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease201 extends AbilityDefinition
```

'AASh' / [AbilityIds.itemAttackSpeedIncrease201](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease201)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease12

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease12 extends AbilityDefinition
```

'AASi' / [AbilityIds.itemAttackSpeedIncrease12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease12)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease25

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease25 extends AbilityDefinition
```

'AASo' / [AbilityIds.itemAttackSpeedIncrease25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease25)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease20

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease20 extends AbilityDefinition
```

'AASp' / [AbilityIds.itemAttackSpeedIncrease20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease20)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease15

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease15 extends AbilityDefinition
```

'AASq' / [AbilityIds.itemAttackSpeedIncrease15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease15)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease10

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease10 extends AbilityDefinition
```

'AASr' / [AbilityIds.itemAttackSpeedIncrease10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease10)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease3

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease3 extends AbilityDefinition
```

'AASs' / [AbilityIds.itemAttackSpeedIncrease3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease3)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease16

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease16 extends AbilityDefinition
```

'AASu' / [AbilityIds.itemAttackSpeedIncrease16](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease16)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease9

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease9 extends AbilityDefinition
```

'AASw' / [AbilityIds.itemAttackSpeedIncrease9](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease9)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease6

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease6 extends AbilityDefinition
```

'AASy' / [AbilityIds.itemAttackSpeedIncrease6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease6)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed25

```wurst
public class AbilityDefinitionItemAbilitySpeed25 extends AbilityDefinition
```

'ACDa' / [AbilityIds.itemAbilitySpeed25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed25)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed15

```wurst
public class AbilityDefinitionItemAbilitySpeed15 extends AbilityDefinition
```

'ACDd' / [AbilityIds.itemAbilitySpeed15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed15)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed20

```wurst
public class AbilityDefinitionItemAbilitySpeed20 extends AbilityDefinition
```

'ACDf' / [AbilityIds.itemAbilitySpeed20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed20)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed8

```wurst
public class AbilityDefinitionItemAbilitySpeed8 extends AbilityDefinition
```

'ACDi' / [AbilityIds.itemAbilitySpeed8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed8)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed10

```wurst
public class AbilityDefinitionItemAbilitySpeed10 extends AbilityDefinition
```

'ACDo' / [AbilityIds.itemAbilitySpeed10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed10)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed2

```wurst
public class AbilityDefinitionItemAbilitySpeed2 extends AbilityDefinition
```

'ACDp' / [AbilityIds.itemAbilitySpeed2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed2)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed12

```wurst
public class AbilityDefinitionItemAbilitySpeed12 extends AbilityDefinition
```

'ACDq' / [AbilityIds.itemAbilitySpeed12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed12)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed5

```wurst
public class AbilityDefinitionItemAbilitySpeed5 extends AbilityDefinition
```

'ACDt' / [AbilityIds.itemAbilitySpeed5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed5)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed6

```wurst
public class AbilityDefinitionItemAbilitySpeed6 extends AbilityDefinition
```

'ACDu' / [AbilityIds.itemAbilitySpeed6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed6)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed3

```wurst
public class AbilityDefinitionItemAbilitySpeed3 extends AbilityDefinition
```

'ACDw' / [AbilityIds.itemAbilitySpeed3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed3)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemAbilitySpeed4

```wurst
public class AbilityDefinitionItemAbilitySpeed4 extends AbilityDefinition
```

'ACDy' / [AbilityIds.itemAbilitySpeed4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAbilitySpeed4)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionChronomasterSGlovesAlly

```wurst
public class AbilityDefinitionChronomasterSGlovesAlly extends AbilityDefinition
```

'ACGa' / [AbilityIds.chronomasterSGlovesAlly](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chronomasterSGlovesAlly)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionChronomasterSGlovesEnemy

```wurst
public class AbilityDefinitionChronomasterSGlovesEnemy extends AbilityDefinition
```

'ACGe' / [AbilityIds.chronomasterSGlovesEnemy](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chronomasterSGlovesEnemy)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemCleave30

```wurst
public class AbilityDefinitionItemCleave30 extends AbilityDefinition
```

'ACLw' / [AbilityIds.itemCleave30](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCleave30)

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance20

```wurst
public class AbilityDefinitionItemCriticalChance20 extends AbilityDefinition
```

'ACSb' / [AbilityIds.itemCriticalChance20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance20)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance12

```wurst
public class AbilityDefinitionItemCriticalChance12 extends AbilityDefinition
```

'ACSc' / [AbilityIds.itemCriticalChance12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance12)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance7

```wurst
public class AbilityDefinitionItemCriticalChance7 extends AbilityDefinition
```

'ACSd' / [AbilityIds.itemCriticalChance7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance7)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance3

```wurst
public class AbilityDefinitionItemCriticalChance3 extends AbilityDefinition
```

'ACSe' / [AbilityIds.itemCriticalChance3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance3)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance30

```wurst
public class AbilityDefinitionItemCriticalChance30 extends AbilityDefinition
```

'ACSg' / [AbilityIds.itemCriticalChance30](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance30)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance6

```wurst
public class AbilityDefinitionItemCriticalChance6 extends AbilityDefinition
```

'ACSj' / [AbilityIds.itemCriticalChance6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance6)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance16

```wurst
public class AbilityDefinitionItemCriticalChance16 extends AbilityDefinition
```

'ACSn' / [AbilityIds.itemCriticalChance16](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance16)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance8

```wurst
public class AbilityDefinitionItemCriticalChance8 extends AbilityDefinition
```

'ACSo' / [AbilityIds.itemCriticalChance8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance8)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance10

```wurst
public class AbilityDefinitionItemCriticalChance10 extends AbilityDefinition
```

'ACSq' / [AbilityIds.itemCriticalChance10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance10)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance2

```wurst
public class AbilityDefinitionItemCriticalChance2 extends AbilityDefinition
```

'ACSr' / [AbilityIds.itemCriticalChance2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance2)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance4

```wurst
public class AbilityDefinitionItemCriticalChance4 extends AbilityDefinition
```

'ACSu' / [AbilityIds.itemCriticalChance4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance4)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance18

```wurst
public class AbilityDefinitionItemCriticalChance18 extends AbilityDefinition
```

'ACSv' / [AbilityIds.itemCriticalChance18](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance18)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance15

```wurst
public class AbilityDefinitionItemCriticalChance15 extends AbilityDefinition
```

'ACSx' / [AbilityIds.itemCriticalChance15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance15)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance5

```wurst
public class AbilityDefinitionItemCriticalChance5 extends AbilityDefinition
```

'ACSy' / [AbilityIds.itemCriticalChance5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance5)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalChance25

```wurst
public class AbilityDefinitionItemCriticalChance25 extends AbilityDefinition
```

'ACSz' / [AbilityIds.itemCriticalChance25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalChance25)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalDamage10

```wurst
public class AbilityDefinitionItemCriticalDamage10 extends AbilityDefinition
```

'ACXe' / [AbilityIds.itemCriticalDamage10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalDamage10)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalDamage20

```wurst
public class AbilityDefinitionItemCriticalDamage20 extends AbilityDefinition
```

'ACXi' / [AbilityIds.itemCriticalDamage20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalDamage20)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalDamage12

```wurst
public class AbilityDefinitionItemCriticalDamage12 extends AbilityDefinition
```

'ACXo' / [AbilityIds.itemCriticalDamage12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalDamage12)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalDamage5

```wurst
public class AbilityDefinitionItemCriticalDamage5 extends AbilityDefinition
```

'ACXq' / [AbilityIds.itemCriticalDamage5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalDamage5)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalDamage13

```wurst
public class AbilityDefinitionItemCriticalDamage13 extends AbilityDefinition
```

'ACXr' / [AbilityIds.itemCriticalDamage13](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalDamage13)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalDamage30

```wurst
public class AbilityDefinitionItemCriticalDamage30 extends AbilityDefinition
```

'ACXt' / [AbilityIds.itemCriticalDamage30](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalDamage30)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalDamage25

```wurst
public class AbilityDefinitionItemCriticalDamage25 extends AbilityDefinition
```

'ACXu' / [AbilityIds.itemCriticalDamage25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalDamage25)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalDamage15

```wurst
public class AbilityDefinitionItemCriticalDamage15 extends AbilityDefinition
```

'ACXw' / [AbilityIds.itemCriticalDamage15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalDamage15)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemCriticalDamage40

```wurst
public class AbilityDefinitionItemCriticalDamage40 extends AbilityDefinition
```

'ACXy' / [AbilityIds.itemCriticalDamage40](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalDamage40)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus18

```wurst
public class AbilityDefinitionAttackBonusPlus18 extends AbilityDefinition
```

'AD18' / [AbilityIds.attackBonusPlus18](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus18)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionItemDamage20

```wurst
public class AbilityDefinitionItemDamage20 extends AbilityDefinition
```

'AD20' / [AbilityIds.itemDamage20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDamage20)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus24

```wurst
public class AbilityDefinitionAttackBonusPlus24 extends AbilityDefinition
```

'AD24' / [AbilityIds.attackBonusPlus24](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus24)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus45

```wurst
public class AbilityDefinitionAttackBonusPlus45 extends AbilityDefinition
```

'AD45' / [AbilityIds.attackBonusPlus45](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonusPlus45)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionItemDaybreakerAttack

```wurst
public class AbilityDefinitionItemDaybreakerAttack extends AbilityDefinition
```

'ADBa' / [AbilityIds.itemDaybreakerAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDaybreakerAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemDaybreakerFS

```wurst
public class AbilityDefinitionItemDaybreakerFS extends AbilityDefinition
```

'ADBf' / [AbilityIds.itemDaybreakerFS](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDaybreakerFS)

**Members:**

- `construct(int newAbilityId)`
- `setFullDamageInterval(int level, real value)`
- `setFullDamageDealt(int level, real value)`
- `setHalfDamageDealt(int level, real value)`
- `setBuildingReduction(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `setHalfDamageInterval(int level, real value)`
- `presetFullDamageInterval(RealLevelClosure lc)`
- `presetFullDamageDealt(RealLevelClosure lc)`
- `presetHalfDamageDealt(RealLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `presetHalfDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionDarkCommandersAura

```wurst
public class AbilityDefinitionDarkCommandersAura extends AbilityDefinition
```

'ADCa' / [AbilityIds.darkCommandersAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkCommandersAura)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemDiseaseCloud1

```wurst
public class AbilityDefinitionItemDiseaseCloud1 extends AbilityDefinition
```

'ADCq' / [AbilityIds.itemDiseaseCloud1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDiseaseCloud1)

**Members:**

- `construct(int newAbilityId)`
- `setPlagueWardUnitType(int level, string value)`
- `setDurationofPlagueWard(int level, real value)`
- `setAuraDuration(int level, real value)`
- `setDamageperSecond(int level, real value)`
- `presetPlagueWardUnitType(StringLevelClosure lc)`
- `presetDurationofPlagueWard(RealLevelClosure lc)`
- `presetAuraDuration(RealLevelClosure lc)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionDarkMistressAura

```wurst
public class AbilityDefinitionDarkMistressAura extends AbilityDefinition
```

'ADMa' / [AbilityIds.darkMistressAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkMistressAura)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionAttackBonus5

```wurst
public class AbilityDefinitionAttackBonus5 extends AbilityDefinition
```

'ADN5' / [AbilityIds.attackBonus5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackBonus5)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionItemDamageReflect15

```wurst
public class AbilityDefinitionItemDamageReflect15 extends AbilityDefinition
```

'ADRq' / [AbilityIds.itemDamageReflect15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDamageReflect15)

**Members:**

- `construct(int newAbilityId)`
- `setReceivedDamageFactor(int level, real value)`
- `setReturnedDamageFactor(int level, real value)`
- `setDefenseBonus(int level, real value)`
- `presetReceivedDamageFactor(RealLevelClosure lc)`
- `presetReturnedDamageFactor(RealLevelClosure lc)`
- `presetDefenseBonus(RealLevelClosure lc)`

### AbilityDefinitionItemDamageReflect20

```wurst
public class AbilityDefinitionItemDamageReflect20 extends AbilityDefinition
```

'ADRw' / [AbilityIds.itemDamageReflect20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDamageReflect20)

**Members:**

- `construct(int newAbilityId)`
- `setReceivedDamageFactor(int level, real value)`
- `setReturnedDamageFactor(int level, real value)`
- `setDefenseBonus(int level, real value)`
- `presetReceivedDamageFactor(RealLevelClosure lc)`
- `presetReturnedDamageFactor(RealLevelClosure lc)`
- `presetDefenseBonus(RealLevelClosure lc)`

### AbilityDefinitionAltarOfDarknessHealthRegen

```wurst
public class AbilityDefinitionAltarOfDarknessHealthRegen extends AbilityDefinition
```

'ADhr' / [AbilityIds.altarOfDarknessHealthRegen](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-altarOfDarknessHealthRegen)

**Members:**

- `construct(int newAbilityId)`
- `setAmountofHitPointsRegenerated(int level, real value)`
- `setPercentage(int level, bool value)`
- `presetAmountofHitPointsRegenerated(RealLevelClosure lc)`
- `presetPercentage(BooleanLevelClosure lc)`

### AbilityDefinitionAltarOfDarknessManaRegen

```wurst
public class AbilityDefinitionAltarOfDarknessManaRegen extends AbilityDefinition
```

'ADmr' / [AbilityIds.altarOfDarknessManaRegen](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-altarOfDarknessManaRegen)

**Members:**

- `construct(int newAbilityId)`
- `setAmountRegenerated(int level, real value)`
- `setPercentage(int level, bool value)`
- `presetAmountRegenerated(RealLevelClosure lc)`
- `presetPercentage(BooleanLevelClosure lc)`

### AbilityDefinitionPurifierBladeHolyLightItem

```wurst
public class AbilityDefinitionPurifierBladeHolyLightItem extends AbilityDefinition
```

'AEhl' / [AbilityIds.purifierBladeHolyLightItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-purifierBladeHolyLightItem)

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`
  Amount Healed/Damaged / 'Hhb1'
- `presetAmountHealedDamaged(RealLevelClosure lc)`

### AbilityDefinitionPurifierBladeItem

```wurst
public class AbilityDefinitionPurifierBladeItem extends AbilityDefinition
```

'AEpb' / [AbilityIds.purifierBladeItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-purifierBladeItem)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `setEffectAbility(int level, string value)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `setDamageBonus(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `presetEffectAbility(StringLevelClosure lc)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionEquipmentInventory1

```wurst
public class AbilityDefinitionEquipmentInventory1 extends AbilityDefinition
```

'AEqu' / [AbilityIds.equipmentInventory1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-equipmentInventory1)

**Members:**

- `construct(int newAbilityId)`
- `setEquipmentLevelThreshold(int level, int value)`
- `presetEquipmentLevelThreshold(IntLevelClosure lc)`

### AbilityDefinitionItemFeedback4

```wurst
public class AbilityDefinitionItemFeedback4 extends AbilityDefinition
```

'AFBq' / [AbilityIds.itemFeedback4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemFeedback4)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaDrainedUnits(int level, real value)`
- `setDamageRatioUnits(int level, real value)`
  Damage Ratio - Units (%) / 'fbk2'
- `setMaxManaDrainedHeros(int level, real value)`
- `setDamageRatioHeros(int level, real value)`
  Damage Ratio - Heros (%) / 'fbk4'
- `setSummonedDamage(int level, real value)`
- `presetMaxManaDrainedUnits(RealLevelClosure lc)`
- `presetDamageRatioUnits(RealLevelClosure lc)`
- `presetMaxManaDrainedHeros(RealLevelClosure lc)`
- `presetDamageRatioHeros(RealLevelClosure lc)`
- `presetSummonedDamage(RealLevelClosure lc)`

### AbilityDefinitionItemFingerOfDeath8

```wurst
public class AbilityDefinitionItemFingerOfDeath8 extends AbilityDefinition
```

'AFDe' / [AbilityIds.itemFingerOfDeath8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemFingerOfDeath8)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDuration(int level, real value)`
- `setGraphicDelay(int level, real value)`
- `setDamage(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemFingerOfDeath12

```wurst
public class AbilityDefinitionItemFingerOfDeath12 extends AbilityDefinition
```

'AFDq' / [AbilityIds.itemFingerOfDeath12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemFingerOfDeath12)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDuration(int level, real value)`
- `setGraphicDelay(int level, real value)`
- `setDamage(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemFingerOfDeath15

```wurst
public class AbilityDefinitionItemFingerOfDeath15 extends AbilityDefinition
```

'AFDw' / [AbilityIds.itemFingerOfDeath15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemFingerOfDeath15)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDuration(int level, real value)`
- `setGraphicDelay(int level, real value)`
- `setDamage(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionDarkRangerSBracersSummon

```wurst
public class AbilityDefinitionDarkRangerSBracersSummon extends AbilityDefinition
```

'AFRq' / [AbilityIds.darkRangerSBracersSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkRangerSBracersSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionDarkRangerSInsigniaSummon

```wurst
public class AbilityDefinitionDarkRangerSInsigniaSummon extends AbilityDefinition
```

'AFRw' / [AbilityIds.darkRangerSInsigniaSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkRangerSInsigniaSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionDarkRangerSBracersAttack

```wurst
public class AbilityDefinitionDarkRangerSBracersAttack extends AbilityDefinition
```

'AFRx' / [AbilityIds.darkRangerSBracersAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-darkRangerSBracersAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemDarkRangerSHoodSpellcast

```wurst
public class AbilityDefinitionItemDarkRangerSHoodSpellcast extends AbilityDefinition
```

'AFRy' / [AbilityIds.itemDarkRangerSHoodSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDarkRangerSHoodSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionGnomishZapperAttack

```wurst
public class AbilityDefinitionGnomishZapperAttack extends AbilityDefinition
```

'AGZa' / [AbilityIds.gnomishZapperAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-gnomishZapperAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionGnomishZapperFL

```wurst
public class AbilityDefinitionGnomishZapperFL extends AbilityDefinition
```

'AGZf' / [AbilityIds.gnomishZapperFL](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-gnomishZapperFL)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setDamageperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDistance(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`

### AbilityDefinitionGarekCleavingAttack

```wurst
public class AbilityDefinitionGarekCleavingAttack extends AbilityDefinition
```

'AGca' / [AbilityIds.garekCleavingAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekCleavingAttack)

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionGarekWarcryLifesteal

```wurst
public class AbilityDefinitionGarekWarcryLifesteal extends AbilityDefinition
```

'AGls' / [AbilityIds.garekWarcryLifesteal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekWarcryLifesteal)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionGarekWarcrySpellVamp

```wurst
public class AbilityDefinitionGarekWarcrySpellVamp extends AbilityDefinition
```

'AGsv' / [AbilityIds.garekWarcrySpellVamp](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekWarcrySpellVamp)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionItemHeroDamageX125

```wurst
public class AbilityDefinitionItemHeroDamageX125 extends AbilityDefinition
```

'AHDq' / [AbilityIds.itemHeroDamageX125](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHeroDamageX125)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplierBuildings(int level, real value)`
- `setDamageMultiplierUnits(int level, real value)`
- `setChancetoDemolish(int level, real value)`
- `setDamageMultiplierHeroes(int level, real value)`
- `presetDamageMultiplierBuildings(RealLevelClosure lc)`
- `presetDamageMultiplierUnits(RealLevelClosure lc)`
- `presetChancetoDemolish(RealLevelClosure lc)`
- `presetDamageMultiplierHeroes(RealLevelClosure lc)`

### AbilityDefinitionItemHeroDamageX115

```wurst
public class AbilityDefinitionItemHeroDamageX115 extends AbilityDefinition
```

'AHDw' / [AbilityIds.itemHeroDamageX115](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHeroDamageX115)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplierBuildings(int level, real value)`
- `setDamageMultiplierUnits(int level, real value)`
- `setChancetoDemolish(int level, real value)`
- `setDamageMultiplierHeroes(int level, real value)`
- `presetDamageMultiplierBuildings(RealLevelClosure lc)`
- `presetDamageMultiplierUnits(RealLevelClosure lc)`
- `presetChancetoDemolish(RealLevelClosure lc)`
- `presetDamageMultiplierHeroes(RealLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration51

```wurst
public class AbilityDefinitionItemHealthRegeneration51 extends AbilityDefinition
```

'AHRa' / [AbilityIds.rangerArrow](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-rangerArrow)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration10

```wurst
public class AbilityDefinitionItemHealthRegeneration10 extends AbilityDefinition
```

'AHRd' / [AbilityIds.itemHealthRegeneration10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegeneration10)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration15

```wurst
public class AbilityDefinitionItemHealthRegeneration15 extends AbilityDefinition
```

'AHRf' / [AbilityIds.itemHealthRegeneration15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegeneration15)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration8

```wurst
public class AbilityDefinitionItemHealthRegeneration8 extends AbilityDefinition
```

'AHRo' / [AbilityIds.itemHealthRegeneration8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegeneration8)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration3

```wurst
public class AbilityDefinitionItemHealthRegeneration3 extends AbilityDefinition
```

'AHRq' / [AbilityIds.itemHealthRegeneration3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegeneration3)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration7

```wurst
public class AbilityDefinitionItemHealthRegeneration7 extends AbilityDefinition
```

'AHRs' / [AbilityIds.itemHealthRegeneration7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegeneration7)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration5

```wurst
public class AbilityDefinitionItemHealthRegeneration5 extends AbilityDefinition
```

'AHRt' / [AbilityIds.itemHealthRegeneration5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegeneration5)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration6

```wurst
public class AbilityDefinitionItemHealthRegeneration6 extends AbilityDefinition
```

'AHRu' / [AbilityIds.itemHealthRegeneration6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegeneration6)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration31

```wurst
public class AbilityDefinitionItemHealthRegeneration31 extends AbilityDefinition
```

'AHRw' / [AbilityIds.itemHealthRegeneration31](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegeneration31)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHealthRegeneration4

```wurst
public class AbilityDefinitionItemHealthRegeneration4 extends AbilityDefinition
```

'AHRy' / [AbilityIds.itemHealthRegeneration4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealthRegeneration4)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionItemHardenedSkin1007MTRT

```wurst
public class AbilityDefinitionItemHardenedSkin1007MTRT extends AbilityDefinition
```

'AHSe' / [AbilityIds.itemHardenedSkin1007MTRT](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHardenedSkin1007MTRT)

**Members:**

- `construct(int newAbilityId)`
- `setMinimumDamage(int level, real value)`
- `setIncludeRangedDamage(int level, bool value)`
- `setIncludeMeleeDamage(int level, bool value)`
- `setChancetoReduceDamage(int level, real value)`
  Chance to Reduce Damage (%) / 'Ssk1'
- `setIgnoredDamage(int level, real value)`
- `presetMinimumDamage(RealLevelClosure lc)`
- `presetIncludeRangedDamage(BooleanLevelClosure lc)`
- `presetIncludeMeleeDamage(BooleanLevelClosure lc)`
- `presetChancetoReduceDamage(RealLevelClosure lc)`
- `presetIgnoredDamage(RealLevelClosure lc)`

### AbilityDefinitionItemHardenedSkin1002MTRT

```wurst
public class AbilityDefinitionItemHardenedSkin1002MTRT extends AbilityDefinition
```

'AHSq' / [AbilityIds.itemHardenedSkin1002MTRT](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHardenedSkin1002MTRT)

**Members:**

- `construct(int newAbilityId)`
- `setMinimumDamage(int level, real value)`
- `setIncludeRangedDamage(int level, bool value)`
- `setIncludeMeleeDamage(int level, bool value)`
- `setChancetoReduceDamage(int level, real value)`
  Chance to Reduce Damage (%) / 'Ssk1'
- `setIgnoredDamage(int level, real value)`
- `presetMinimumDamage(RealLevelClosure lc)`
- `presetIncludeRangedDamage(BooleanLevelClosure lc)`
- `presetIncludeMeleeDamage(BooleanLevelClosure lc)`
- `presetChancetoReduceDamage(RealLevelClosure lc)`
- `presetIgnoredDamage(RealLevelClosure lc)`

### AbilityDefinitionHighTemplarSFlameIncinerate

```wurst
public class AbilityDefinitionHighTemplarSFlameIncinerate extends AbilityDefinition
```

'AHTf' / [AbilityIds.highTemplarSFlameIncinerate](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-highTemplarSFlameIncinerate)

**Members:**

- `construct(int newAbilityId)`
- `setBonusDamageMultiplier(int level, real value)`
- `setDeathDamageHalfAmount(int level, real value)`
- `setDeathDamageHalfArea(int level, real value)`
- `setDeathDamageDelay(int level, real value)`
- `setDeathDamageFullAmount(int level, real value)`
- `setDeathDamageFullArea(int level, real value)`
- `presetBonusDamageMultiplier(RealLevelClosure lc)`
- `presetDeathDamageHalfAmount(RealLevelClosure lc)`
- `presetDeathDamageHalfArea(RealLevelClosure lc)`
- `presetDeathDamageDelay(RealLevelClosure lc)`
- `presetDeathDamageFullAmount(RealLevelClosure lc)`
- `presetDeathDamageFullArea(RealLevelClosure lc)`

### AbilityDefinitionHighTemplarSConquerorHeal

```wurst
public class AbilityDefinitionHighTemplarSConquerorHeal extends AbilityDefinition
```

'AHTh' / [AbilityIds.highTemplarSConquerorHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-highTemplarSConquerorHeal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionHighTemplarSVisageIF

```wurst
public class AbilityDefinitionHighTemplarSVisageIF extends AbilityDefinition
```

'AHTi' / [AbilityIds.highTemplarSVisageIF](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-highTemplarSVisageIF)

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Inf1'
- `setDefenseIncrease(int level, int value)`
- `setLifeRegenRate(int level, real value)`
- `setAutocastRange(int level, real value)`
- `presetDamageIncrease(RealLevelClosure lc)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `presetLifeRegenRate(RealLevelClosure lc)`
- `presetAutocastRange(RealLevelClosure lc)`

### AbilityDefinitionHighTemplarSJudgmentAttack

```wurst
public class AbilityDefinitionHighTemplarSJudgmentAttack extends AbilityDefinition
```

'AHTj' / [AbilityIds.highTemplarSJudgmentAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-highTemplarSJudgmentAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionHighTemplarSConquerorAttack

```wurst
public class AbilityDefinitionHighTemplarSConquerorAttack extends AbilityDefinition
```

'AHTq' / [AbilityIds.highTemplarSConquerorAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-highTemplarSConquerorAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionHighTemplarSJudgmentShockwave

```wurst
public class AbilityDefinitionHighTemplarSJudgmentShockwave extends AbilityDefinition
```

'AHTs' / [AbilityIds.highTemplarSJudgmentShockwave](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-highTemplarSJudgmentShockwave)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `setFinalArea(int level, real value)`
- `setDistance(int level, real value)`
- `presetDamage(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetDistance(RealLevelClosure lc)`

### AbilityDefinitionHighTemplarSVisageAttack

```wurst
public class AbilityDefinitionHighTemplarSVisageAttack extends AbilityDefinition
```

'AHTv' / [AbilityIds.highTemplarSVisageAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-highTemplarSVisageAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionIlastarSacredAuraTalent1

```wurst
public class AbilityDefinitionIlastarSacredAuraTalent1 extends AbilityDefinition
```

'AHa1' / [AbilityIds.ilastarSacredAuraTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarSacredAuraTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setMagicResistDecreaseforEnemies(int level, real value)`
  % Magic Resist Decrease for Enemies / 'hsa4'
- `setHealingIncreaseforAllies(int level, real value)`
  % Healing Increase for Allies / 'hsa2'
- `setCooldownIncreaseforEnemies(int level, real value)`
  % Cooldown Increase for Enemies / 'hsa6'
- `setMagicResistIncreaseforAllies(int level, real value)`
  % Magic Resist Increase for Allies / 'hsa1'
- `setCooldownReductionIncreaseforAllies(int level, real value)`
  % Cooldown Reduction Increase for Allies / 'hsa3'
- `setFlatManaRegenforAllies(int level, real value)`
- `setHealingDecreaseforEnemies(int level, real value)`
  % Healing Decrease for Enemies / 'hsa5'
- `presetMagicResistDecreaseforEnemies(RealLevelClosure lc)`
- `presetHealingIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownIncreaseforEnemies(RealLevelClosure lc)`
- `presetMagicResistIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownReductionIncreaseforAllies(RealLevelClosure lc)`
- `presetFlatManaRegenforAllies(RealLevelClosure lc)`
- `presetHealingDecreaseforEnemies(RealLevelClosure lc)`

### AbilityDefinitionIlastarSacredAuraTalent2

```wurst
public class AbilityDefinitionIlastarSacredAuraTalent2 extends AbilityDefinition
```

'AHa2' / [AbilityIds.ilastarSacredAuraTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarSacredAuraTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setMagicResistDecreaseforEnemies(int level, real value)`
  % Magic Resist Decrease for Enemies / 'hsa4'
- `setHealingIncreaseforAllies(int level, real value)`
  % Healing Increase for Allies / 'hsa2'
- `setCooldownIncreaseforEnemies(int level, real value)`
  % Cooldown Increase for Enemies / 'hsa6'
- `setMagicResistIncreaseforAllies(int level, real value)`
  % Magic Resist Increase for Allies / 'hsa1'
- `setCooldownReductionIncreaseforAllies(int level, real value)`
  % Cooldown Reduction Increase for Allies / 'hsa3'
- `setFlatManaRegenforAllies(int level, real value)`
- `setHealingDecreaseforEnemies(int level, real value)`
  % Healing Decrease for Enemies / 'hsa5'
- `presetMagicResistDecreaseforEnemies(RealLevelClosure lc)`
- `presetHealingIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownIncreaseforEnemies(RealLevelClosure lc)`
- `presetMagicResistIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownReductionIncreaseforAllies(RealLevelClosure lc)`
- `presetFlatManaRegenforAllies(RealLevelClosure lc)`
- `presetHealingDecreaseforEnemies(RealLevelClosure lc)`

### AbilityDefinitionIlastarSacredAuraTalent3

```wurst
public class AbilityDefinitionIlastarSacredAuraTalent3 extends AbilityDefinition
```

'AHa3' / [AbilityIds.ilastarSacredAuraTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarSacredAuraTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setMagicResistDecreaseforEnemies(int level, real value)`
  % Magic Resist Decrease for Enemies / 'hsa4'
- `setHealingIncreaseforAllies(int level, real value)`
  % Healing Increase for Allies / 'hsa2'
- `setCooldownIncreaseforEnemies(int level, real value)`
  % Cooldown Increase for Enemies / 'hsa6'
- `setMagicResistIncreaseforAllies(int level, real value)`
  % Magic Resist Increase for Allies / 'hsa1'
- `setCooldownReductionIncreaseforAllies(int level, real value)`
  % Cooldown Reduction Increase for Allies / 'hsa3'
- `setFlatManaRegenforAllies(int level, real value)`
- `setHealingDecreaseforEnemies(int level, real value)`
  % Healing Decrease for Enemies / 'hsa5'
- `presetMagicResistDecreaseforEnemies(RealLevelClosure lc)`
- `presetHealingIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownIncreaseforEnemies(RealLevelClosure lc)`
- `presetMagicResistIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownReductionIncreaseforAllies(RealLevelClosure lc)`
- `presetFlatManaRegenforAllies(RealLevelClosure lc)`
- `presetHealingDecreaseforEnemies(RealLevelClosure lc)`

### AbilityDefinitionAvatarOfLight

```wurst
public class AbilityDefinitionAvatarOfLight extends AbilityDefinition
```

'AHal' / [AbilityIds.avatarOfLight](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-avatarOfLight)

**Members:**

- `construct(int newAbilityId)`
- `setHealthCost(int level, int value)`
  % Health Cost / 'uvg1'
- `setDamageOnCast(int level, real value)`
- `setBonusSpellCritDamage(int level, int value)`
  % Bonus Spell Crit Damage / 'uvg9'
- `setBonusLifeSteal(int level, int value)`
  % Bonus Life Steal / 'uvg4'
- `setDoublebonusbellowhealth(int level, int value)`
  Double bonus bellow health % / 'uvg6'
- `setBonusResolve(int level, int value)`
  % Bonus Resolve / 'uvg3'
- `setBonusSpellVamp(int level, int value)`
  % Bonus Spell Vamp / 'uvg5'
- `setBonusSpellCrit(int level, int value)`
  % Bonus Spell Crit / 'uvg8'
- `setBonusstrength(int level, int value)`
- `presetHealthCost(IntLevelClosure lc)`
- `presetDamageOnCast(RealLevelClosure lc)`
- `presetBonusSpellCritDamage(IntLevelClosure lc)`
- `presetBonusLifeSteal(IntLevelClosure lc)`
- `presetDoublebonusbellowhealth(IntLevelClosure lc)`
- `presetBonusResolve(IntLevelClosure lc)`
- `presetBonusSpellVamp(IntLevelClosure lc)`
- `presetBonusSpellCrit(IntLevelClosure lc)`
- `presetBonusstrength(IntLevelClosure lc)`

### AbilityDefinitionApprehendAOETalent1

```wurst
public class AbilityDefinitionApprehendAOETalent1 extends AbilityDefinition
```

'AHap' / [AbilityIds.apprehendAOETalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-apprehendAOETalent1)

**Members:**

- `construct(int newAbilityId)`
- `setStunDuration(int level, real value)`
- `setAirUnitHeight(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setAirUnitLowerDuration(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `setMeleeAttackRange(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionIlastarSacredAura

```wurst
public class AbilityDefinitionIlastarSacredAura extends AbilityDefinition
```

'AHas' / [AbilityIds.ilastarSacredAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarSacredAura)

**Members:**

- `construct(int newAbilityId)`
- `setMagicResistDecreaseforEnemies(int level, real value)`
  % Magic Resist Decrease for Enemies / 'hsa4'
- `setHealingIncreaseforAllies(int level, real value)`
  % Healing Increase for Allies / 'hsa2'
- `setCooldownIncreaseforEnemies(int level, real value)`
  % Cooldown Increase for Enemies / 'hsa6'
- `setMagicResistIncreaseforAllies(int level, real value)`
  % Magic Resist Increase for Allies / 'hsa1'
- `setCooldownReductionIncreaseforAllies(int level, real value)`
  % Cooldown Reduction Increase for Allies / 'hsa3'
- `setFlatManaRegenforAllies(int level, real value)`
- `setHealingDecreaseforEnemies(int level, real value)`
  % Healing Decrease for Enemies / 'hsa5'
- `presetMagicResistDecreaseforEnemies(RealLevelClosure lc)`
- `presetHealingIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownIncreaseforEnemies(RealLevelClosure lc)`
- `presetMagicResistIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownReductionIncreaseforAllies(RealLevelClosure lc)`
- `presetFlatManaRegenforAllies(RealLevelClosure lc)`
- `presetHealingDecreaseforEnemies(RealLevelClosure lc)`

### AbilityDefinitionUnyieldingGuardT1DamageReflect

```wurst
public class AbilityDefinitionUnyieldingGuardT1DamageReflect extends AbilityDefinition
```

'AHb1' / [AbilityIds.unyieldingGuardT1DamageReflect](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unyieldingGuardT1DamageReflect)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
  % Attack Speed Increase / 'bld3'
- `setSweepRemainingCooldownReductionOnHit(int level, real value)`
- `setDamageReduction(int level, real value)`
  % Damage Reduction / 'bld1'
- `setAbilitySpeedIncrease(int level, real value)`
  % Ability Speed Increase / 'bld8'
- `setMovementSpeedreduction(int level, real value)`
  % Movement Speed reduction / 'bld2'
- `setDamageReflection(int level, real value)`
  % Damage Reflection / 'bld6'
- `setFlatDamageReflection(int level, real value)`
- `setOnDamageTakenBonusDuration(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetSweepRemainingCooldownReductionOnHit(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`
- `presetAbilitySpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedreduction(RealLevelClosure lc)`
- `presetDamageReflection(RealLevelClosure lc)`
- `presetFlatDamageReflection(RealLevelClosure lc)`
- `presetOnDamageTakenBonusDuration(RealLevelClosure lc)`

### AbilityDefinitionUnyieldingGuardT2SWCDReduce

```wurst
public class AbilityDefinitionUnyieldingGuardT2SWCDReduce extends AbilityDefinition
```

'AHb2' / [AbilityIds.unyieldingGuardT2SWCDReduce](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unyieldingGuardT2SWCDReduce)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
  % Attack Speed Increase / 'bld3'
- `setSweepRemainingCooldownReductionOnHit(int level, real value)`
- `setDamageReduction(int level, real value)`
  % Damage Reduction / 'bld1'
- `setAbilitySpeedIncrease(int level, real value)`
  % Ability Speed Increase / 'bld8'
- `setMovementSpeedreduction(int level, real value)`
  % Movement Speed reduction / 'bld2'
- `setDamageReflection(int level, real value)`
  % Damage Reflection / 'bld6'
- `setFlatDamageReflection(int level, real value)`
- `setOnDamageTakenBonusDuration(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetSweepRemainingCooldownReductionOnHit(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`
- `presetAbilitySpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedreduction(RealLevelClosure lc)`
- `presetDamageReflection(RealLevelClosure lc)`
- `presetFlatDamageReflection(RealLevelClosure lc)`
- `presetOnDamageTakenBonusDuration(RealLevelClosure lc)`

### AbilityDefinitionUnyieldingGuardT3DurationIncrease

```wurst
public class AbilityDefinitionUnyieldingGuardT3DurationIncrease extends AbilityDefinition
```

'AHb3' / [AbilityIds.unyieldingGuardT3DurationIncrease](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unyieldingGuardT3DurationIncrease)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
  % Attack Speed Increase / 'bld3'
- `setSweepRemainingCooldownReductionOnHit(int level, real value)`
- `setDamageReduction(int level, real value)`
  % Damage Reduction / 'bld1'
- `setAbilitySpeedIncrease(int level, real value)`
  % Ability Speed Increase / 'bld8'
- `setMovementSpeedreduction(int level, real value)`
  % Movement Speed reduction / 'bld2'
- `setDamageReflection(int level, real value)`
  % Damage Reflection / 'bld6'
- `setFlatDamageReflection(int level, real value)`
- `setOnDamageTakenBonusDuration(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetSweepRemainingCooldownReductionOnHit(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`
- `presetAbilitySpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedreduction(RealLevelClosure lc)`
- `presetDamageReflection(RealLevelClosure lc)`
- `presetFlatDamageReflection(RealLevelClosure lc)`
- `presetOnDamageTakenBonusDuration(RealLevelClosure lc)`

### AbilityDefinitionUnyieldingGuard

```wurst
public class AbilityDefinitionUnyieldingGuard extends AbilityDefinition
```

'AHbd' / [AbilityIds.unyieldingGuard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-unyieldingGuard)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
  % Attack Speed Increase / 'bld3'
- `setSweepRemainingCooldownReductionOnHit(int level, real value)`
- `setDamageReduction(int level, real value)`
  % Damage Reduction / 'bld1'
- `setAbilitySpeedIncrease(int level, real value)`
  % Ability Speed Increase / 'bld8'
- `setMovementSpeedreduction(int level, real value)`
  % Movement Speed reduction / 'bld2'
- `setDamageReflection(int level, real value)`
  % Damage Reflection / 'bld6'
- `setFlatDamageReflection(int level, real value)`
- `setOnDamageTakenBonusDuration(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetSweepRemainingCooldownReductionOnHit(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`
- `presetAbilitySpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedreduction(RealLevelClosure lc)`
- `presetDamageReflection(RealLevelClosure lc)`
- `presetFlatDamageReflection(RealLevelClosure lc)`
- `presetOnDamageTakenBonusDuration(RealLevelClosure lc)`

### AbilityDefinitionValiantChargeT1CritChance

```wurst
public class AbilityDefinitionValiantChargeT1CritChance extends AbilityDefinition
```

'AHc1' / [AbilityIds.valiantChargeT1CritChance](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-valiantChargeT1CritChance)

**Members:**

- `construct(int newAbilityId)`
- `setDashSpeed(int level, real value)`
- `setNormalBonusCriticalStrikeDuration(int level, real value)`
- `setTargetIntersectRadius(int level, real value)`
- `setRemoveBuffsOnAbilityStart(int level, bool value)`
- `setBonusCriticalStrike(int level, real value)`
- `setDashDamage(int level, real value)`
- `setHeroBonusCriticalStrikeDuration(int level, real value)`
- `presetDashSpeed(RealLevelClosure lc)`
- `presetNormalBonusCriticalStrikeDuration(RealLevelClosure lc)`
- `presetTargetIntersectRadius(RealLevelClosure lc)`
- `presetRemoveBuffsOnAbilityStart(BooleanLevelClosure lc)`
- `presetBonusCriticalStrike(RealLevelClosure lc)`
- `presetDashDamage(RealLevelClosure lc)`
- `presetHeroBonusCriticalStrikeDuration(RealLevelClosure lc)`

### AbilityDefinitionValiantChargeT2HeroStunDuration

```wurst
public class AbilityDefinitionValiantChargeT2HeroStunDuration extends AbilityDefinition
```

'AHc2' / [AbilityIds.valiantChargeT2HeroStunDuration](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-valiantChargeT2HeroStunDuration)

**Members:**

- `construct(int newAbilityId)`
- `setDashSpeed(int level, real value)`
- `setNormalBonusCriticalStrikeDuration(int level, real value)`
- `setTargetIntersectRadius(int level, real value)`
- `setRemoveBuffsOnAbilityStart(int level, bool value)`
- `setBonusCriticalStrike(int level, real value)`
- `setDashDamage(int level, real value)`
- `setHeroBonusCriticalStrikeDuration(int level, real value)`
- `presetDashSpeed(RealLevelClosure lc)`
- `presetNormalBonusCriticalStrikeDuration(RealLevelClosure lc)`
- `presetTargetIntersectRadius(RealLevelClosure lc)`
- `presetRemoveBuffsOnAbilityStart(BooleanLevelClosure lc)`
- `presetBonusCriticalStrike(RealLevelClosure lc)`
- `presetDashDamage(RealLevelClosure lc)`
- `presetHeroBonusCriticalStrikeDuration(RealLevelClosure lc)`

### AbilityDefinitionValiantChargeT3ManaCostDispel

```wurst
public class AbilityDefinitionValiantChargeT3ManaCostDispel extends AbilityDefinition
```

'AHc3' / [AbilityIds.valiantChargeT3ManaCostDispel](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-valiantChargeT3ManaCostDispel)

**Members:**

- `construct(int newAbilityId)`
- `setDashSpeed(int level, real value)`
- `setNormalBonusCriticalStrikeDuration(int level, real value)`
- `setTargetIntersectRadius(int level, real value)`
- `setRemoveBuffsOnAbilityStart(int level, bool value)`
- `setBonusCriticalStrike(int level, real value)`
- `setDashDamage(int level, real value)`
- `setHeroBonusCriticalStrikeDuration(int level, real value)`
- `presetDashSpeed(RealLevelClosure lc)`
- `presetNormalBonusCriticalStrikeDuration(RealLevelClosure lc)`
- `presetTargetIntersectRadius(RealLevelClosure lc)`
- `presetRemoveBuffsOnAbilityStart(BooleanLevelClosure lc)`
- `presetBonusCriticalStrike(RealLevelClosure lc)`
- `presetDashDamage(RealLevelClosure lc)`
- `presetHeroBonusCriticalStrikeDuration(RealLevelClosure lc)`

### AbilityDefinitionValiantCharge

```wurst
public class AbilityDefinitionValiantCharge extends AbilityDefinition
```

'AHch' / [AbilityIds.valiantCharge](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-valiantCharge)

**Members:**

- `construct(int newAbilityId)`
- `setDashSpeed(int level, real value)`
- `setNormalBonusCriticalStrikeDuration(int level, real value)`
- `setTargetIntersectRadius(int level, real value)`
- `setRemoveBuffsOnAbilityStart(int level, bool value)`
- `setBonusCriticalStrike(int level, real value)`
- `setDashDamage(int level, real value)`
- `setHeroBonusCriticalStrikeDuration(int level, real value)`
- `presetDashSpeed(RealLevelClosure lc)`
- `presetNormalBonusCriticalStrikeDuration(RealLevelClosure lc)`
- `presetTargetIntersectRadius(RealLevelClosure lc)`
- `presetRemoveBuffsOnAbilityStart(BooleanLevelClosure lc)`
- `presetBonusCriticalStrike(RealLevelClosure lc)`
- `presetDashDamage(RealLevelClosure lc)`
- `presetHeroBonusCriticalStrikeDuration(RealLevelClosure lc)`

### AbilityDefinitionCleansingFire

```wurst
public class AbilityDefinitionCleansingFire extends AbilityDefinition
```

'AHcl' / [AbilityIds.cleansingFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cleansingFire)

**Members:**

- `construct(int newAbilityId)`
- `setAllyDamageBonusPercentPerDebuffRemoved(int level, real value)`
- `setAllyHealingPerDebuffRemoved(int level, real value)`
- `setAllyBuffDuration(int level, real value)`
- `setSummonedDamage(int level, real value)`
- `setEnemyStunDuration(int level, real value)`
- `setAllyHealingBase(int level, real value)`
- `setAllyDamageBonusPercentBase(int level, real value)`
- `presetAllyDamageBonusPercentPerDebuffRemoved(RealLevelClosure lc)`
- `presetAllyHealingPerDebuffRemoved(RealLevelClosure lc)`
- `presetAllyBuffDuration(RealLevelClosure lc)`
- `presetSummonedDamage(RealLevelClosure lc)`
- `presetEnemyStunDuration(RealLevelClosure lc)`
- `presetAllyHealingBase(RealLevelClosure lc)`
- `presetAllyDamageBonusPercentBase(RealLevelClosure lc)`

### AbilityDefinitionConsecration

```wurst
public class AbilityDefinitionConsecration extends AbilityDefinition
```

'AHcr' / [AbilityIds.consecration](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-consecration)

**Members:**

- `construct(int newAbilityId)`
- `setAllyHealingPerSecond(int level, real value)`
- `setEnemyDamagePerSecond(int level, real value)`
- `setEnemyHealingReductionPercent(int level, real value)`
- `presetAllyHealingPerSecond(RealLevelClosure lc)`
- `presetEnemyDamagePerSecond(RealLevelClosure lc)`
- `presetEnemyHealingReductionPercent(RealLevelClosure lc)`

### AbilityDefinitionLandenRaiseTheBanner

```wurst
public class AbilityDefinitionLandenRaiseTheBanner extends AbilityDefinition
```

'AHct' / [AbilityIds.landenRaiseTheBanner](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenRaiseTheBanner)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionApprehendTalent2

```wurst
public class AbilityDefinitionApprehendTalent2 extends AbilityDefinition
```

'AHe2' / [AbilityIds.apprehendTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-apprehendTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setStunDuration(int level, real value)`
- `setAirUnitHeight(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setAirUnitLowerDuration(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `setMeleeAttackRange(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionApprehendTalent3

```wurst
public class AbilityDefinitionApprehendTalent3 extends AbilityDefinition
```

'AHe3' / [AbilityIds.apprehendTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-apprehendTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setStunDuration(int level, real value)`
- `setAirUnitHeight(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setAirUnitLowerDuration(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `setMeleeAttackRange(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionLandenApprehendSingleTarget

```wurst
public class AbilityDefinitionLandenApprehendSingleTarget extends AbilityDefinition
```

'AHen' / [AbilityIds.landenApprehendSingleTarget](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenApprehendSingleTarget)

**Members:**

- `construct(int newAbilityId)`
- `setStunDuration(int level, real value)`
- `setAirUnitHeight(int level, real value)`
- `setBonusDamageTakenPercent(int level, real value)`
- `setAttackSpeedReductionPercent(int level, real value)`
- `setAirUnitLowerDuration(int level, real value)`
- `setSilencesWhenEnsnared(int level, bool value)`
- `setMeleeAttackRange(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `presetBonusDamageTakenPercent(RealLevelClosure lc)`
- `presetAttackSpeedReductionPercent(RealLevelClosure lc)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `presetSilencesWhenEnsnared(BooleanLevelClosure lc)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionEvasionStackable

```wurst
public class AbilityDefinitionEvasionStackable extends AbilityDefinition
```

'AHes' / [AbilityIds.evasionStackable](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-evasionStackable)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionGritTalent1

```wurst
public class AbilityDefinitionGritTalent1 extends AbilityDefinition
```

'AHg1' / [AbilityIds.gritTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-gritTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setBonusAttackDamagePercentAtCap(int level, real value)`
- `setDefenseCap(int level, real value)`
- `setDefenseIncrease(int level, real value)`
- `setMagicResistanceAtCap(int level, real value)`
- `presetBonusAttackDamagePercentAtCap(RealLevelClosure lc)`
- `presetDefenseCap(RealLevelClosure lc)`
- `presetDefenseIncrease(RealLevelClosure lc)`
- `presetMagicResistanceAtCap(RealLevelClosure lc)`

### AbilityDefinitionGritTalent2

```wurst
public class AbilityDefinitionGritTalent2 extends AbilityDefinition
```

'AHg2' / [AbilityIds.gritTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-gritTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setBonusAttackDamagePercentAtCap(int level, real value)`
- `setDefenseCap(int level, real value)`
- `setDefenseIncrease(int level, real value)`
- `setMagicResistanceAtCap(int level, real value)`
- `presetBonusAttackDamagePercentAtCap(RealLevelClosure lc)`
- `presetDefenseCap(RealLevelClosure lc)`
- `presetDefenseIncrease(RealLevelClosure lc)`
- `presetMagicResistanceAtCap(RealLevelClosure lc)`

### AbilityDefinitionGritTalent3

```wurst
public class AbilityDefinitionGritTalent3 extends AbilityDefinition
```

'AHg3' / [AbilityIds.gritTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-gritTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setBonusAttackDamagePercentAtCap(int level, real value)`
- `setDefenseCap(int level, real value)`
- `setDefenseIncrease(int level, real value)`
- `setMagicResistanceAtCap(int level, real value)`
- `presetBonusAttackDamagePercentAtCap(RealLevelClosure lc)`
- `presetDefenseCap(RealLevelClosure lc)`
- `presetDefenseIncrease(RealLevelClosure lc)`
- `presetMagicResistanceAtCap(RealLevelClosure lc)`

### AbilityDefinitionGuidingHand

```wurst
public class AbilityDefinitionGuidingHand extends AbilityDefinition
```

'AHgh' / [AbilityIds.guidingHand](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-guidingHand)

**Members:**

- `construct(int newAbilityId)`
- `setBonusMoveSpeedPercent(int level, real value)`
- `setMakesUnitsUndying(int level, bool value)`
- `setBonusAttackSpeedPercent(int level, real value)`
- `setBonusCriticalHitPercent(int level, real value)`
- `setBonusCriticalDamagePercent(int level, real value)`
- `setBonusCooldownReductionPercent(int level, real value)`
- `setManaPerSecond(int level, real value)`
- `presetBonusMoveSpeedPercent(RealLevelClosure lc)`
- `presetMakesUnitsUndying(BooleanLevelClosure lc)`
- `presetBonusAttackSpeedPercent(RealLevelClosure lc)`
- `presetBonusCriticalHitPercent(RealLevelClosure lc)`
- `presetBonusCriticalDamagePercent(RealLevelClosure lc)`
- `presetBonusCooldownReductionPercent(RealLevelClosure lc)`
- `presetManaPerSecond(RealLevelClosure lc)`

### AbilityDefinitionGrit

```wurst
public class AbilityDefinitionGrit extends AbilityDefinition
```

'AHgr' / [AbilityIds.grit](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-grit)

**Members:**

- `construct(int newAbilityId)`
- `setBonusAttackDamagePercentAtCap(int level, real value)`
- `setDefenseCap(int level, real value)`
- `setDefenseIncrease(int level, real value)`
- `setMagicResistanceAtCap(int level, real value)`
- `presetBonusAttackDamagePercentAtCap(RealLevelClosure lc)`
- `presetDefenseCap(RealLevelClosure lc)`
- `presetDefenseIncrease(RealLevelClosure lc)`
- `presetMagicResistanceAtCap(RealLevelClosure lc)`

### AbilityDefinitionHeadsplitterTalent1

```wurst
public class AbilityDefinitionHeadsplitterTalent1 extends AbilityDefinition
```

'AHh1' / [AbilityIds.headsplitterTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-headsplitterTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setRefreshesCooldownOnKill(int level, bool value)`
- `setBonusDamageDebuffDurationNormal(int level, real value)`
- `setStunDurationNormal(int level, real value)`
- `setBonusDamageDebuffDurationHero(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setDebuffBonusDamageReceivedPercent(int level, real value)`
- `setStunDurationHero(int level, real value)`
- `presetRefreshesCooldownOnKill(BooleanLevelClosure lc)`
- `presetBonusDamageDebuffDurationNormal(RealLevelClosure lc)`
- `presetStunDurationNormal(RealLevelClosure lc)`
- `presetBonusDamageDebuffDurationHero(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDebuffBonusDamageReceivedPercent(RealLevelClosure lc)`
- `presetStunDurationHero(RealLevelClosure lc)`

### AbilityDefinitionHeadsplitterTalent2

```wurst
public class AbilityDefinitionHeadsplitterTalent2 extends AbilityDefinition
```

'AHh2' / [AbilityIds.headsplitterTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-headsplitterTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setRefreshesCooldownOnKill(int level, bool value)`
- `setBonusDamageDebuffDurationNormal(int level, real value)`
- `setStunDurationNormal(int level, real value)`
- `setBonusDamageDebuffDurationHero(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setDebuffBonusDamageReceivedPercent(int level, real value)`
- `setStunDurationHero(int level, real value)`
- `presetRefreshesCooldownOnKill(BooleanLevelClosure lc)`
- `presetBonusDamageDebuffDurationNormal(RealLevelClosure lc)`
- `presetStunDurationNormal(RealLevelClosure lc)`
- `presetBonusDamageDebuffDurationHero(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDebuffBonusDamageReceivedPercent(RealLevelClosure lc)`
- `presetStunDurationHero(RealLevelClosure lc)`

### AbilityDefinitionHeadsplitterTalent3

```wurst
public class AbilityDefinitionHeadsplitterTalent3 extends AbilityDefinition
```

'AHh3' / [AbilityIds.headsplitterTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-headsplitterTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setRefreshesCooldownOnKill(int level, bool value)`
- `setBonusDamageDebuffDurationNormal(int level, real value)`
- `setStunDurationNormal(int level, real value)`
- `setBonusDamageDebuffDurationHero(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setDebuffBonusDamageReceivedPercent(int level, real value)`
- `setStunDurationHero(int level, real value)`
- `presetRefreshesCooldownOnKill(BooleanLevelClosure lc)`
- `presetBonusDamageDebuffDurationNormal(RealLevelClosure lc)`
- `presetStunDurationNormal(RealLevelClosure lc)`
- `presetBonusDamageDebuffDurationHero(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDebuffBonusDamageReceivedPercent(RealLevelClosure lc)`
- `presetStunDurationHero(RealLevelClosure lc)`

### AbilityDefinitionHeroicChallengeAkaProvoke

```wurst
public class AbilityDefinitionHeroicChallengeAkaProvoke extends AbilityDefinition
```

'AHhc' / [AbilityIds.heroicChallengeAkaProvoke](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heroicChallengeAkaProvoke)

**Members:**

- `construct(int newAbilityId)`
- `setTauntedDefenseReduction(int level, real value)`
- `setShieldReflectPercent(int level, real value)`
- `setShieldDuration(int level, real value)`
- `setShieldHealth(int level, real value)`
- `presetTauntedDefenseReduction(RealLevelClosure lc)`
- `presetShieldReflectPercent(RealLevelClosure lc)`
- `presetShieldDuration(RealLevelClosure lc)`
- `presetShieldHealth(RealLevelClosure lc)`

### AbilityDefinitionHeadsplitter

```wurst
public class AbilityDefinitionHeadsplitter extends AbilityDefinition
```

'AHhr' / [AbilityIds.headsplitter](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-headsplitter)

**Members:**

- `construct(int newAbilityId)`
- `setRefreshesCooldownOnKill(int level, bool value)`
- `setBonusDamageDebuffDurationNormal(int level, real value)`
- `setStunDurationNormal(int level, real value)`
- `setBonusDamageDebuffDurationHero(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setDebuffBonusDamageReceivedPercent(int level, real value)`
- `setStunDurationHero(int level, real value)`
- `presetRefreshesCooldownOnKill(BooleanLevelClosure lc)`
- `presetBonusDamageDebuffDurationNormal(RealLevelClosure lc)`
- `presetStunDurationNormal(RealLevelClosure lc)`
- `presetBonusDamageDebuffDurationHero(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDebuffBonusDamageReceivedPercent(RealLevelClosure lc)`
- `presetStunDurationHero(RealLevelClosure lc)`

### AbilityDefinitionHeroicSlash

```wurst
public class AbilityDefinitionHeroicSlash extends AbilityDefinition
```

'AHhs' / [AbilityIds.heroicSlash](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heroicSlash)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `setBonusDamagePercentAgainstDebuffed(int level, real value)`
- `setHealPercentOnDamageDealt(int level, real value)`
- `setRefreshesCooldownOnKill(int level, bool value)`
- `presetDamage(RealLevelClosure lc)`
- `presetBonusDamagePercentAgainstDebuffed(RealLevelClosure lc)`
- `presetHealPercentOnDamageDealt(RealLevelClosure lc)`
- `presetRefreshesCooldownOnKill(BooleanLevelClosure lc)`

### AbilityDefinitionInspireCourageTalent1

```wurst
public class AbilityDefinitionInspireCourageTalent1 extends AbilityDefinition
```

'AHi1' / [AbilityIds.inspireCourageTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inspireCourageTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setSpellDamageResistance(int level, real value)`
- `setHealing(int level, real value)`
- `setDefense(int level, real value)`
- `setRemovesNegativeDebuffs(int level, bool value)`
- `presetSpellDamageResistance(RealLevelClosure lc)`
- `presetHealing(RealLevelClosure lc)`
- `presetDefense(RealLevelClosure lc)`
- `presetRemovesNegativeDebuffs(BooleanLevelClosure lc)`

### AbilityDefinitionInspireCourageTalent2

```wurst
public class AbilityDefinitionInspireCourageTalent2 extends AbilityDefinition
```

'AHi2' / [AbilityIds.inspireCourageTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inspireCourageTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setSpellDamageResistance(int level, real value)`
- `setHealing(int level, real value)`
- `setDefense(int level, real value)`
- `setRemovesNegativeDebuffs(int level, bool value)`
- `presetSpellDamageResistance(RealLevelClosure lc)`
- `presetHealing(RealLevelClosure lc)`
- `presetDefense(RealLevelClosure lc)`
- `presetRemovesNegativeDebuffs(BooleanLevelClosure lc)`

### AbilityDefinitionInspireCourageTalent3

```wurst
public class AbilityDefinitionInspireCourageTalent3 extends AbilityDefinition
```

'AHi3' / [AbilityIds.inspireCourageTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inspireCourageTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setSpellDamageResistance(int level, real value)`
- `setHealing(int level, real value)`
- `setDefense(int level, real value)`
- `setRemovesNegativeDebuffs(int level, bool value)`
- `presetSpellDamageResistance(RealLevelClosure lc)`
- `presetHealing(RealLevelClosure lc)`
- `presetDefense(RealLevelClosure lc)`
- `presetRemovesNegativeDebuffs(BooleanLevelClosure lc)`

### AbilityDefinitionInspireCourage

```wurst
public class AbilityDefinitionInspireCourage extends AbilityDefinition
```

'AHic' / [AbilityIds.inspireCourage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inspireCourage)

**Members:**

- `construct(int newAbilityId)`
- `setSpellDamageResistance(int level, real value)`
- `setHealing(int level, real value)`
- `setDefense(int level, real value)`
- `setRemovesNegativeDebuffs(int level, bool value)`
- `presetSpellDamageResistance(RealLevelClosure lc)`
- `presetHealing(RealLevelClosure lc)`
- `presetDefense(RealLevelClosure lc)`
- `presetRemovesNegativeDebuffs(BooleanLevelClosure lc)`

### AbilityDefinitionIlastarSurgeOfLightTalent1

```wurst
public class AbilityDefinitionIlastarSurgeOfLightTalent1 extends AbilityDefinition
```

'AHl1' / [AbilityIds.ilastarSurgeOfLightTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarSurgeOfLightTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setAllyPassiveCooldown(int level, real value)`
- `setHealPerSecondtoAlly(int level, real value)`
- `setManaRestoretoAlly(int level, real value)`
- `setInstantHealtoAlly(int level, real value)`
- `setAllyPassiveDuration(int level, real value)`
- `setAbilityPassiveRadius(int level, real value)`
- `setAllyPassiveStatAmplify(int level, int value)`
  % Ally Passive Stat Amplify / 'sol6'
- `setAttackSpeedGain(int level, int value)`
  % Attack Speed Gain / 'sol7'
- `setMovementSpeedGain(int level, int value)`
  % Movement Speed Gain / 'sol8'
- `presetAllyPassiveCooldown(RealLevelClosure lc)`
- `presetHealPerSecondtoAlly(RealLevelClosure lc)`
- `presetManaRestoretoAlly(RealLevelClosure lc)`
- `presetInstantHealtoAlly(RealLevelClosure lc)`
- `presetAllyPassiveDuration(RealLevelClosure lc)`
- `presetAbilityPassiveRadius(RealLevelClosure lc)`
- `presetAllyPassiveStatAmplify(IntLevelClosure lc)`
- `presetAttackSpeedGain(IntLevelClosure lc)`
- `presetMovementSpeedGain(IntLevelClosure lc)`

### AbilityDefinitionIlastarSurgeOfLightTalent2

```wurst
public class AbilityDefinitionIlastarSurgeOfLightTalent2 extends AbilityDefinition
```

'AHl2' / [AbilityIds.ilastarSurgeOfLightTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarSurgeOfLightTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setAllyPassiveCooldown(int level, real value)`
- `setHealPerSecondtoAlly(int level, real value)`
- `setManaRestoretoAlly(int level, real value)`
- `setInstantHealtoAlly(int level, real value)`
- `setAllyPassiveDuration(int level, real value)`
- `setAbilityPassiveRadius(int level, real value)`
- `setAllyPassiveStatAmplify(int level, int value)`
  % Ally Passive Stat Amplify / 'sol6'
- `setAttackSpeedGain(int level, int value)`
  % Attack Speed Gain / 'sol7'
- `setMovementSpeedGain(int level, int value)`
  % Movement Speed Gain / 'sol8'
- `presetAllyPassiveCooldown(RealLevelClosure lc)`
- `presetHealPerSecondtoAlly(RealLevelClosure lc)`
- `presetManaRestoretoAlly(RealLevelClosure lc)`
- `presetInstantHealtoAlly(RealLevelClosure lc)`
- `presetAllyPassiveDuration(RealLevelClosure lc)`
- `presetAbilityPassiveRadius(RealLevelClosure lc)`
- `presetAllyPassiveStatAmplify(IntLevelClosure lc)`
- `presetAttackSpeedGain(IntLevelClosure lc)`
- `presetMovementSpeedGain(IntLevelClosure lc)`

### AbilityDefinitionIlastarSurgeOfLightTalent3

```wurst
public class AbilityDefinitionIlastarSurgeOfLightTalent3 extends AbilityDefinition
```

'AHl3' / [AbilityIds.ilastarSurgeOfLightTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarSurgeOfLightTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setAllyPassiveCooldown(int level, real value)`
- `setHealPerSecondtoAlly(int level, real value)`
- `setManaRestoretoAlly(int level, real value)`
- `setInstantHealtoAlly(int level, real value)`
- `setAllyPassiveDuration(int level, real value)`
- `setAbilityPassiveRadius(int level, real value)`
- `setAllyPassiveStatAmplify(int level, int value)`
  % Ally Passive Stat Amplify / 'sol6'
- `setAttackSpeedGain(int level, int value)`
  % Attack Speed Gain / 'sol7'
- `setMovementSpeedGain(int level, int value)`
  % Movement Speed Gain / 'sol8'
- `presetAllyPassiveCooldown(RealLevelClosure lc)`
- `presetHealPerSecondtoAlly(RealLevelClosure lc)`
- `presetManaRestoretoAlly(RealLevelClosure lc)`
- `presetInstantHealtoAlly(RealLevelClosure lc)`
- `presetAllyPassiveDuration(RealLevelClosure lc)`
- `presetAbilityPassiveRadius(RealLevelClosure lc)`
- `presetAllyPassiveStatAmplify(IntLevelClosure lc)`
- `presetAttackSpeedGain(IntLevelClosure lc)`
- `presetMovementSpeedGain(IntLevelClosure lc)`

### AbilityDefinitionLightSMercyTalent1

```wurst
public class AbilityDefinitionLightSMercyTalent1 extends AbilityDefinition
```

'AHm1' / [AbilityIds.lightSMercyTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lightSMercyTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setDispellMagicDealBonusDamagetoSummoned(int level, bool value)`
- `setExplosionRadius(int level, real value)`
- `setBurnDamage(int level, real value)`
- `setHealAmounttoAllyUnits(int level, real value)`
- `setBurnDamagePulseFrequency(int level, real value)`
- `setBonusDamageToSummons(int level, real value)`
- `setEnableChainExplosion(int level, bool value)`
- `presetDispellMagicDealBonusDamagetoSummoned(BooleanLevelClosure lc)`
- `presetExplosionRadius(RealLevelClosure lc)`
- `presetBurnDamage(RealLevelClosure lc)`
- `presetHealAmounttoAllyUnits(RealLevelClosure lc)`
- `presetBurnDamagePulseFrequency(RealLevelClosure lc)`
- `presetBonusDamageToSummons(RealLevelClosure lc)`
- `presetEnableChainExplosion(BooleanLevelClosure lc)`

### AbilityDefinitionLightSMercyTalent2

```wurst
public class AbilityDefinitionLightSMercyTalent2 extends AbilityDefinition
```

'AHm2' / [AbilityIds.lightSMercyTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lightSMercyTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setDispellMagicDealBonusDamagetoSummoned(int level, bool value)`
- `setExplosionRadius(int level, real value)`
- `setBurnDamage(int level, real value)`
- `setHealAmounttoAllyUnits(int level, real value)`
- `setBurnDamagePulseFrequency(int level, real value)`
- `setBonusDamageToSummons(int level, real value)`
- `setEnableChainExplosion(int level, bool value)`
- `presetDispellMagicDealBonusDamagetoSummoned(BooleanLevelClosure lc)`
- `presetExplosionRadius(RealLevelClosure lc)`
- `presetBurnDamage(RealLevelClosure lc)`
- `presetHealAmounttoAllyUnits(RealLevelClosure lc)`
- `presetBurnDamagePulseFrequency(RealLevelClosure lc)`
- `presetBonusDamageToSummons(RealLevelClosure lc)`
- `presetEnableChainExplosion(BooleanLevelClosure lc)`

### AbilityDefinitionLightSMercyTalent3

```wurst
public class AbilityDefinitionLightSMercyTalent3 extends AbilityDefinition
```

'AHm3' / [AbilityIds.lightSMercyTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lightSMercyTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setDispellMagicDealBonusDamagetoSummoned(int level, bool value)`
- `setExplosionRadius(int level, real value)`
- `setBurnDamage(int level, real value)`
- `setHealAmounttoAllyUnits(int level, real value)`
- `setBurnDamagePulseFrequency(int level, real value)`
- `setBonusDamageToSummons(int level, real value)`
- `setEnableChainExplosion(int level, bool value)`
- `presetDispellMagicDealBonusDamagetoSummoned(BooleanLevelClosure lc)`
- `presetExplosionRadius(RealLevelClosure lc)`
- `presetBurnDamage(RealLevelClosure lc)`
- `presetHealAmounttoAllyUnits(RealLevelClosure lc)`
- `presetBurnDamagePulseFrequency(RealLevelClosure lc)`
- `presetBonusDamageToSummons(RealLevelClosure lc)`
- `presetEnableChainExplosion(BooleanLevelClosure lc)`

### AbilityDefinitionClericMindControl

```wurst
public class AbilityDefinitionClericMindControl extends AbilityDefinition
```

'AHmc' / [AbilityIds.clericMindControl](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-clericMindControl)

**Members:**

- `construct(int newAbilityId)`
- `setExplosionDamage(int level, real value)`
- `override function setDurationNormal(int level, real value)`
- `setMaximumCreepLevel(int level, int value)`
- `setMindControlledUnitLimit(int level, int value)`
- `setExplosionRadius(int level, real value)`
- `presetExplosionDamage(RealLevelClosure lc)`
- `override function presetDurationNormal(RealLevelClosure lc)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`
- `presetMindControlledUnitLimit(IntLevelClosure lc)`
- `presetExplosionRadius(RealLevelClosure lc)`

### AbilityDefinitionChallengingCall

```wurst
public class AbilityDefinitionChallengingCall extends AbilityDefinition
```

'AHnt' / [AbilityIds.challengingCall](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-challengingCall)

**Members:**

- `construct(int newAbilityId)`
- `setPreferHostiles(int level, int value)`
- `setBonusdefense(int level, real value)`
- `setBonusAttack(int level, real value)`
- `setUseattackvalueaspercentage(int level, bool value)`
- `setIntervalbetweenPulses(int level, real value)`
- `setUsedefensevalueaspercentage(int level, bool value)`
- `setMaxUnits(int level, int value)`
- `setNumberofPulses(int level, int value)`
- `setBonusesduration(int level, real value)`
- `setPreferFriendlies(int level, int value)`
- `presetPreferHostiles(IntLevelClosure lc)`
- `presetBonusdefense(RealLevelClosure lc)`
- `presetBonusAttack(RealLevelClosure lc)`
- `presetUseattackvalueaspercentage(BooleanLevelClosure lc)`
- `presetIntervalbetweenPulses(RealLevelClosure lc)`
- `presetUsedefensevalueaspercentage(BooleanLevelClosure lc)`
- `presetMaxUnits(IntLevelClosure lc)`
- `presetNumberofPulses(IntLevelClosure lc)`
- `presetBonusesduration(RealLevelClosure lc)`
- `presetPreferFriendlies(IntLevelClosure lc)`

### AbilityDefinitionForsakenPaladinSacredAura

```wurst
public class AbilityDefinitionForsakenPaladinSacredAura extends AbilityDefinition
```

'AHpa' / [AbilityIds.forsakenPaladinSacredAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-forsakenPaladinSacredAura)

**Members:**

- `construct(int newAbilityId)`
- `setMagicResistDecreaseforEnemies(int level, real value)`
  % Magic Resist Decrease for Enemies / 'hsa4'
- `setHealingIncreaseforAllies(int level, real value)`
  % Healing Increase for Allies / 'hsa2'
- `setCooldownIncreaseforEnemies(int level, real value)`
  % Cooldown Increase for Enemies / 'hsa6'
- `setMagicResistIncreaseforAllies(int level, real value)`
  % Magic Resist Increase for Allies / 'hsa1'
- `setCooldownReductionIncreaseforAllies(int level, real value)`
  % Cooldown Reduction Increase for Allies / 'hsa3'
- `setFlatManaRegenforAllies(int level, real value)`
- `setHealingDecreaseforEnemies(int level, real value)`
  % Healing Decrease for Enemies / 'hsa5'
- `presetMagicResistDecreaseforEnemies(RealLevelClosure lc)`
- `presetHealingIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownIncreaseforEnemies(RealLevelClosure lc)`
- `presetMagicResistIncreaseforAllies(RealLevelClosure lc)`
- `presetCooldownReductionIncreaseforAllies(RealLevelClosure lc)`
- `presetFlatManaRegenforAllies(RealLevelClosure lc)`
- `presetHealingDecreaseforEnemies(RealLevelClosure lc)`

### AbilityDefinitionHolyWrath

```wurst
public class AbilityDefinitionHolyWrath extends AbilityDefinition
```

'AHpb' / [AbilityIds.holyWrath](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-holyWrath)

**Members:**

- `construct(int newAbilityId)`
- `setDamageStrengthModifier(int level, int value)`
  Damage Strength Modifier (%) / 'pbl5'
- `setAttackAngle(int level, real value)`
- `setDamageDelay(int level, real value)`
- `setDispelSummonedDamage(int level, real value)`
- `setDamage(int level, real value)`
- `setAttackDistance(int level, real value)`
- `setUndeadBurnDamage(int level, real value)`
- `setDispelMagicOnHit(int level, bool value)`
- `presetDamageStrengthModifier(IntLevelClosure lc)`
- `presetAttackAngle(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetDispelSummonedDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetAttackDistance(RealLevelClosure lc)`
- `presetUndeadBurnDamage(RealLevelClosure lc)`
- `presetDispelMagicOnHit(BooleanLevelClosure lc)`

### AbilityDefinitionGuidingHandTalent1

```wurst
public class AbilityDefinitionGuidingHandTalent1 extends AbilityDefinition
```

'AHq1' / [AbilityIds.guidingHandTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-guidingHandTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setBonusMoveSpeedPercent(int level, real value)`
- `setMakesUnitsUndying(int level, bool value)`
- `setBonusAttackSpeedPercent(int level, real value)`
- `setBonusCriticalHitPercent(int level, real value)`
- `setBonusCriticalDamagePercent(int level, real value)`
- `setBonusCooldownReductionPercent(int level, real value)`
- `setManaPerSecond(int level, real value)`
- `presetBonusMoveSpeedPercent(RealLevelClosure lc)`
- `presetMakesUnitsUndying(BooleanLevelClosure lc)`
- `presetBonusAttackSpeedPercent(RealLevelClosure lc)`
- `presetBonusCriticalHitPercent(RealLevelClosure lc)`
- `presetBonusCriticalDamagePercent(RealLevelClosure lc)`
- `presetBonusCooldownReductionPercent(RealLevelClosure lc)`
- `presetManaPerSecond(RealLevelClosure lc)`

### AbilityDefinitionGuidingHandTalent2

```wurst
public class AbilityDefinitionGuidingHandTalent2 extends AbilityDefinition
```

'AHq2' / [AbilityIds.guidingHandTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-guidingHandTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setBonusMoveSpeedPercent(int level, real value)`
- `setMakesUnitsUndying(int level, bool value)`
- `setBonusAttackSpeedPercent(int level, real value)`
- `setBonusCriticalHitPercent(int level, real value)`
- `setBonusCriticalDamagePercent(int level, real value)`
- `setBonusCooldownReductionPercent(int level, real value)`
- `setManaPerSecond(int level, real value)`
- `presetBonusMoveSpeedPercent(RealLevelClosure lc)`
- `presetMakesUnitsUndying(BooleanLevelClosure lc)`
- `presetBonusAttackSpeedPercent(RealLevelClosure lc)`
- `presetBonusCriticalHitPercent(RealLevelClosure lc)`
- `presetBonusCriticalDamagePercent(RealLevelClosure lc)`
- `presetBonusCooldownReductionPercent(RealLevelClosure lc)`
- `presetManaPerSecond(RealLevelClosure lc)`

### AbilityDefinitionGuidingHandTalent3

```wurst
public class AbilityDefinitionGuidingHandTalent3 extends AbilityDefinition
```

'AHq3' / [AbilityIds.guidingHandTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-guidingHandTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setBonusMoveSpeedPercent(int level, real value)`
- `setMakesUnitsUndying(int level, bool value)`
- `setBonusAttackSpeedPercent(int level, real value)`
- `setBonusCriticalHitPercent(int level, real value)`
- `setBonusCriticalDamagePercent(int level, real value)`
- `setBonusCooldownReductionPercent(int level, real value)`
- `setManaPerSecond(int level, real value)`
- `presetBonusMoveSpeedPercent(RealLevelClosure lc)`
- `presetMakesUnitsUndying(BooleanLevelClosure lc)`
- `presetBonusAttackSpeedPercent(RealLevelClosure lc)`
- `presetBonusCriticalHitPercent(RealLevelClosure lc)`
- `presetBonusCriticalDamagePercent(RealLevelClosure lc)`
- `presetBonusCooldownReductionPercent(RealLevelClosure lc)`
- `presetManaPerSecond(RealLevelClosure lc)`

### AbilityDefinitionSweepingStrikeT1ASReduce

```wurst
public class AbilityDefinitionSweepingStrikeT1ASReduce extends AbilityDefinition
```

'AHs1' / [AbilityIds.sweepingStrikeT1ASReduce](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sweepingStrikeT1ASReduce)

**Members:**

- `construct(int newAbilityId)`
- `setHeroDurationAttackSpeedReduction(int level, real value)`
- `setDurationAttackSpeedReduction(int level, real value)`
- `setDurationDamageByTargetMaxHealth(int level, real value)`
- `setArmorReduction(int level, real value)`
- `setCooldownReductionOnHit(int level, real value)`
- `setHeroDurationArmorReduction(int level, real value)`
- `setAttackAngle(int level, real value)`
- `setHealingPerTargetHit(int level, real value)`
- `setDamageByTargetMaxHealth(int level, real value)`
  Damage By Target Max Health (%) / 'swpa'
- `setMaxTargetHit(int level, int value)`
- `setDamageStrengthModifier(int level, int value)`
  Damage Strength Modifier (%) / 'swp5'
- `setAttackDistance(int level, real value)`
- `setHeroDurationDamageByTargetMaxHealth(int level, real value)`
- `setDurationArmorReduction(int level, real value)`
- `setDamageDelay(int level, real value)`
- `setAttackSpeedReduction(int level, int value)`
  Attack Speed Reduction (%) / 'swp9'
- `setDamage(int level, real value)`
- `presetHeroDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetArmorReduction(RealLevelClosure lc)`
- `presetCooldownReductionOnHit(RealLevelClosure lc)`
- `presetHeroDurationArmorReduction(RealLevelClosure lc)`
- `presetAttackAngle(RealLevelClosure lc)`
- `presetHealingPerTargetHit(RealLevelClosure lc)`
- `presetDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetMaxTargetHit(IntLevelClosure lc)`
- `presetDamageStrengthModifier(IntLevelClosure lc)`
- `presetAttackDistance(RealLevelClosure lc)`
- `presetHeroDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetDurationArmorReduction(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetAttackSpeedReduction(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionSweepingStrikeT2ArmorReduce

```wurst
public class AbilityDefinitionSweepingStrikeT2ArmorReduce extends AbilityDefinition
```

'AHs2' / [AbilityIds.sweepingStrikeT2ArmorReduce](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sweepingStrikeT2ArmorReduce)

**Members:**

- `construct(int newAbilityId)`
- `setHeroDurationAttackSpeedReduction(int level, real value)`
- `setDurationAttackSpeedReduction(int level, real value)`
- `setDurationDamageByTargetMaxHealth(int level, real value)`
- `setArmorReduction(int level, real value)`
- `setCooldownReductionOnHit(int level, real value)`
- `setHeroDurationArmorReduction(int level, real value)`
- `setAttackAngle(int level, real value)`
- `setHealingPerTargetHit(int level, real value)`
- `setDamageByTargetMaxHealth(int level, real value)`
  Damage By Target Max Health (%) / 'swpa'
- `setMaxTargetHit(int level, int value)`
- `setDamageStrengthModifier(int level, int value)`
  Damage Strength Modifier (%) / 'swp5'
- `setAttackDistance(int level, real value)`
- `setHeroDurationDamageByTargetMaxHealth(int level, real value)`
- `setDurationArmorReduction(int level, real value)`
- `setDamageDelay(int level, real value)`
- `setAttackSpeedReduction(int level, int value)`
  Attack Speed Reduction (%) / 'swp9'
- `setDamage(int level, real value)`
- `presetHeroDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetArmorReduction(RealLevelClosure lc)`
- `presetCooldownReductionOnHit(RealLevelClosure lc)`
- `presetHeroDurationArmorReduction(RealLevelClosure lc)`
- `presetAttackAngle(RealLevelClosure lc)`
- `presetHealingPerTargetHit(RealLevelClosure lc)`
- `presetDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetMaxTargetHit(IntLevelClosure lc)`
- `presetDamageStrengthModifier(IntLevelClosure lc)`
- `presetAttackDistance(RealLevelClosure lc)`
- `presetHeroDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetDurationArmorReduction(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetAttackSpeedReduction(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionSweepingStrikeT3CDReduce

```wurst
public class AbilityDefinitionSweepingStrikeT3CDReduce extends AbilityDefinition
```

'AHs3' / [AbilityIds.sweepingStrikeT3CDReduce](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sweepingStrikeT3CDReduce)

**Members:**

- `construct(int newAbilityId)`
- `setHeroDurationAttackSpeedReduction(int level, real value)`
- `setDurationAttackSpeedReduction(int level, real value)`
- `setDurationDamageByTargetMaxHealth(int level, real value)`
- `setArmorReduction(int level, real value)`
- `setCooldownReductionOnHit(int level, real value)`
- `setHeroDurationArmorReduction(int level, real value)`
- `setAttackAngle(int level, real value)`
- `setHealingPerTargetHit(int level, real value)`
- `setDamageByTargetMaxHealth(int level, real value)`
  Damage By Target Max Health (%) / 'swpa'
- `setMaxTargetHit(int level, int value)`
- `setDamageStrengthModifier(int level, int value)`
  Damage Strength Modifier (%) / 'swp5'
- `setAttackDistance(int level, real value)`
- `setHeroDurationDamageByTargetMaxHealth(int level, real value)`
- `setDurationArmorReduction(int level, real value)`
- `setDamageDelay(int level, real value)`
- `setAttackSpeedReduction(int level, int value)`
  Attack Speed Reduction (%) / 'swp9'
- `setDamage(int level, real value)`
- `presetHeroDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetArmorReduction(RealLevelClosure lc)`
- `presetCooldownReductionOnHit(RealLevelClosure lc)`
- `presetHeroDurationArmorReduction(RealLevelClosure lc)`
- `presetAttackAngle(RealLevelClosure lc)`
- `presetHealingPerTargetHit(RealLevelClosure lc)`
- `presetDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetMaxTargetHit(IntLevelClosure lc)`
- `presetDamageStrengthModifier(IntLevelClosure lc)`
- `presetAttackDistance(RealLevelClosure lc)`
- `presetHeroDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetDurationArmorReduction(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetAttackSpeedReduction(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionClericSacredFlameLightSMercy

```wurst
public class AbilityDefinitionClericSacredFlameLightSMercy extends AbilityDefinition
```

'AHsf' / [AbilityIds.clericSacredFlameLightSMercy](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-clericSacredFlameLightSMercy)

**Members:**

- `construct(int newAbilityId)`
- `setDispellMagicDealBonusDamagetoSummoned(int level, bool value)`
- `setExplosionRadius(int level, real value)`
- `setBurnDamage(int level, real value)`
- `setHealAmounttoAllyUnits(int level, real value)`
- `setBurnDamagePulseFrequency(int level, real value)`
- `setBonusDamageToSummons(int level, real value)`
- `setEnableChainExplosion(int level, bool value)`
- `presetDispellMagicDealBonusDamagetoSummoned(BooleanLevelClosure lc)`
- `presetExplosionRadius(RealLevelClosure lc)`
- `presetBurnDamage(RealLevelClosure lc)`
- `presetHealAmounttoAllyUnits(RealLevelClosure lc)`
- `presetBurnDamagePulseFrequency(RealLevelClosure lc)`
- `presetBonusDamageToSummons(RealLevelClosure lc)`
- `presetEnableChainExplosion(BooleanLevelClosure lc)`

### AbilityDefinitionIlastarSurgeOfLight

```wurst
public class AbilityDefinitionIlastarSurgeOfLight extends AbilityDefinition
```

'AHsl' / [AbilityIds.ilastarSurgeOfLight](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarSurgeOfLight)

**Members:**

- `construct(int newAbilityId)`
- `setAllyPassiveCooldown(int level, real value)`
- `setHealPerSecondtoAlly(int level, real value)`
- `setManaRestoretoAlly(int level, real value)`
- `setInstantHealtoAlly(int level, real value)`
- `setAllyPassiveDuration(int level, real value)`
- `setAbilityPassiveRadius(int level, real value)`
- `setAllyPassiveStatAmplify(int level, int value)`
  % Ally Passive Stat Amplify / 'sol6'
- `setAttackSpeedGain(int level, int value)`
  % Attack Speed Gain / 'sol7'
- `setMovementSpeedGain(int level, int value)`
  % Movement Speed Gain / 'sol8'
- `presetAllyPassiveCooldown(RealLevelClosure lc)`
- `presetHealPerSecondtoAlly(RealLevelClosure lc)`
- `presetManaRestoretoAlly(RealLevelClosure lc)`
- `presetInstantHealtoAlly(RealLevelClosure lc)`
- `presetAllyPassiveDuration(RealLevelClosure lc)`
- `presetAbilityPassiveRadius(RealLevelClosure lc)`
- `presetAllyPassiveStatAmplify(IntLevelClosure lc)`
- `presetAttackSpeedGain(IntLevelClosure lc)`
- `presetMovementSpeedGain(IntLevelClosure lc)`

### AbilityDefinitionHardenedSkinStacking

```wurst
public class AbilityDefinitionHardenedSkinStacking extends AbilityDefinition
```

'AHss' / [AbilityIds.hardenedSkinStacking](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-hardenedSkinStacking)

**Members:**

- `construct(int newAbilityId)`
- `setMinimumDamage(int level, real value)`
- `setIncludeRangedDamage(int level, bool value)`
- `setIncludeMeleeDamage(int level, bool value)`
- `setChancetoReduceDamage(int level, real value)`
  Chance to Reduce Damage (%) / 'Ssk1'
- `setIgnoredDamage(int level, real value)`
- `presetMinimumDamage(RealLevelClosure lc)`
- `presetIncludeRangedDamage(BooleanLevelClosure lc)`
- `presetIncludeMeleeDamage(BooleanLevelClosure lc)`
- `presetChancetoReduceDamage(RealLevelClosure lc)`
- `presetIgnoredDamage(RealLevelClosure lc)`

### AbilityDefinitionSweepingStrike

```wurst
public class AbilityDefinitionSweepingStrike extends AbilityDefinition
```

'AHsw' / [AbilityIds.sweepingStrike](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-sweepingStrike)

**Members:**

- `construct(int newAbilityId)`
- `setHeroDurationAttackSpeedReduction(int level, real value)`
- `setDurationAttackSpeedReduction(int level, real value)`
- `setDurationDamageByTargetMaxHealth(int level, real value)`
- `setArmorReduction(int level, real value)`
- `setCooldownReductionOnHit(int level, real value)`
- `setHeroDurationArmorReduction(int level, real value)`
- `setAttackAngle(int level, real value)`
- `setHealingPerTargetHit(int level, real value)`
- `setDamageByTargetMaxHealth(int level, real value)`
  Damage By Target Max Health (%) / 'swpa'
- `setMaxTargetHit(int level, int value)`
- `setDamageStrengthModifier(int level, int value)`
  Damage Strength Modifier (%) / 'swp5'
- `setAttackDistance(int level, real value)`
- `setHeroDurationDamageByTargetMaxHealth(int level, real value)`
- `setDurationArmorReduction(int level, real value)`
- `setDamageDelay(int level, real value)`
- `setAttackSpeedReduction(int level, int value)`
  Attack Speed Reduction (%) / 'swp9'
- `setDamage(int level, real value)`
- `presetHeroDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetArmorReduction(RealLevelClosure lc)`
- `presetCooldownReductionOnHit(RealLevelClosure lc)`
- `presetHeroDurationArmorReduction(RealLevelClosure lc)`
- `presetAttackAngle(RealLevelClosure lc)`
- `presetHealingPerTargetHit(RealLevelClosure lc)`
- `presetDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetMaxTargetHit(IntLevelClosure lc)`
- `presetDamageStrengthModifier(IntLevelClosure lc)`
- `presetAttackDistance(RealLevelClosure lc)`
- `presetHeroDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetDurationArmorReduction(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetAttackSpeedReduction(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionHeroicChallengeTalent1

```wurst
public class AbilityDefinitionHeroicChallengeTalent1 extends AbilityDefinition
```

'AHu1' / [AbilityIds.heroicChallengeTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heroicChallengeTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setTauntedDefenseReduction(int level, real value)`
- `setShieldReflectPercent(int level, real value)`
- `setShieldDuration(int level, real value)`
- `setShieldHealth(int level, real value)`
- `presetTauntedDefenseReduction(RealLevelClosure lc)`
- `presetShieldReflectPercent(RealLevelClosure lc)`
- `presetShieldDuration(RealLevelClosure lc)`
- `presetShieldHealth(RealLevelClosure lc)`

### AbilityDefinitionHeroicChallengeTalent2

```wurst
public class AbilityDefinitionHeroicChallengeTalent2 extends AbilityDefinition
```

'AHu2' / [AbilityIds.heroicChallengeTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heroicChallengeTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setTauntedDefenseReduction(int level, real value)`
- `setShieldReflectPercent(int level, real value)`
- `setShieldDuration(int level, real value)`
- `setShieldHealth(int level, real value)`
- `presetTauntedDefenseReduction(RealLevelClosure lc)`
- `presetShieldReflectPercent(RealLevelClosure lc)`
- `presetShieldDuration(RealLevelClosure lc)`
- `presetShieldHealth(RealLevelClosure lc)`

### AbilityDefinitionHeroicChallengeTalent3

```wurst
public class AbilityDefinitionHeroicChallengeTalent3 extends AbilityDefinition
```

'AHu3' / [AbilityIds.heroicChallengeTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heroicChallengeTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setTauntedDefenseReduction(int level, real value)`
- `setShieldReflectPercent(int level, real value)`
- `setShieldDuration(int level, real value)`
- `setShieldHealth(int level, real value)`
- `presetTauntedDefenseReduction(RealLevelClosure lc)`
- `presetShieldReflectPercent(RealLevelClosure lc)`
- `presetShieldDuration(RealLevelClosure lc)`
- `presetShieldHealth(RealLevelClosure lc)`

### AbilityDefinitionHeroicSlashTalent1

```wurst
public class AbilityDefinitionHeroicSlashTalent1 extends AbilityDefinition
```

'AHv1' / [AbilityIds.heroicSlashTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heroicSlashTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `setBonusDamagePercentAgainstDebuffed(int level, real value)`
- `setHealPercentOnDamageDealt(int level, real value)`
- `setRefreshesCooldownOnKill(int level, bool value)`
- `presetDamage(RealLevelClosure lc)`
- `presetBonusDamagePercentAgainstDebuffed(RealLevelClosure lc)`
- `presetHealPercentOnDamageDealt(RealLevelClosure lc)`
- `presetRefreshesCooldownOnKill(BooleanLevelClosure lc)`

### AbilityDefinitionHeroicSlashTalent2

```wurst
public class AbilityDefinitionHeroicSlashTalent2 extends AbilityDefinition
```

'AHv2' / [AbilityIds.heroicSlashTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heroicSlashTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `setBonusDamagePercentAgainstDebuffed(int level, real value)`
- `setHealPercentOnDamageDealt(int level, real value)`
- `setRefreshesCooldownOnKill(int level, bool value)`
- `presetDamage(RealLevelClosure lc)`
- `presetBonusDamagePercentAgainstDebuffed(RealLevelClosure lc)`
- `presetHealPercentOnDamageDealt(RealLevelClosure lc)`
- `presetRefreshesCooldownOnKill(BooleanLevelClosure lc)`

### AbilityDefinitionHeroicSlashTalent3

```wurst
public class AbilityDefinitionHeroicSlashTalent3 extends AbilityDefinition
```

'AHv3' / [AbilityIds.heroicSlashTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heroicSlashTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `setBonusDamagePercentAgainstDebuffed(int level, real value)`
- `setHealPercentOnDamageDealt(int level, real value)`
- `setRefreshesCooldownOnKill(int level, bool value)`
- `presetDamage(RealLevelClosure lc)`
- `presetBonusDamagePercentAgainstDebuffed(RealLevelClosure lc)`
- `presetHealPercentOnDamageDealt(RealLevelClosure lc)`
- `presetRefreshesCooldownOnKill(BooleanLevelClosure lc)`

### AbilityDefinitionWarcryT1MagicImmunity

```wurst
public class AbilityDefinitionWarcryT1MagicImmunity extends AbilityDefinition
```

'AHw1' / [AbilityIds.warcryT1MagicImmunity](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcryT1MagicImmunity)

**Members:**

- `construct(int newAbilityId)`
- `setBonusAbilitiesList(int level, string value)`
- `presetBonusAbilitiesList(StringLevelClosure lc)`

### AbilityDefinitionWarcryT1SpellCrit

```wurst
public class AbilityDefinitionWarcryT1SpellCrit extends AbilityDefinition
```

'AHw2' / [AbilityIds.warcryT1SpellCrit](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcryT1SpellCrit)

**Members:**

- `construct(int newAbilityId)`
- `setBonusAbilitiesList(int level, string value)`
- `presetBonusAbilitiesList(StringLevelClosure lc)`

### AbilityDefinitionWarcryT1MaxLifestealPlusAttackDamage

```wurst
public class AbilityDefinitionWarcryT1MaxLifestealPlusAttackDamage extends AbilityDefinition
```

'AHw3' / [AbilityIds.warcryT1MaxLifestealPlusAttackDamage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcryT1MaxLifestealPlusAttackDamage)

**Members:**

- `construct(int newAbilityId)`
- `setBonusAbilitiesList(int level, string value)`
- `presetBonusAbilitiesList(StringLevelClosure lc)`

### AbilityDefinitionWarcryMagicImmunityPassive

```wurst
public class AbilityDefinitionWarcryMagicImmunityPassive extends AbilityDefinition
```

'AHw4' / [AbilityIds.warcryMagicImmunityPassive](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcryMagicImmunityPassive)

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionWarcrySpellCritPassive

```wurst
public class AbilityDefinitionWarcrySpellCritPassive extends AbilityDefinition
```

'AHw5' / [AbilityIds.warcrySpellCritPassive](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcrySpellCritPassive)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionWarcryLifestealEnhanced

```wurst
public class AbilityDefinitionWarcryLifestealEnhanced extends AbilityDefinition
```

'AHw6' / [AbilityIds.warcryLifestealEnhanced](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcryLifestealEnhanced)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionWarcryDamageEnhanced

```wurst
public class AbilityDefinitionWarcryDamageEnhanced extends AbilityDefinition
```

'AHw7' / [AbilityIds.warcryDamageEnhanced](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcryDamageEnhanced)

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionWarcryCleaveEnhanced

```wurst
public class AbilityDefinitionWarcryCleaveEnhanced extends AbilityDefinition
```

'AHw8' / [AbilityIds.warcryCleaveEnhanced](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcryCleaveEnhanced)

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionWarcryAbilitySpeed

```wurst
public class AbilityDefinitionWarcryAbilitySpeed extends AbilityDefinition
```

'AHw9' / [AbilityIds.warcryAbilitySpeed](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcryAbilitySpeed)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionWarcry

```wurst
public class AbilityDefinitionWarcry extends AbilityDefinition
```

'AHwc' / [AbilityIds.warcry](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-warcry)

**Members:**

- `construct(int newAbilityId)`
- `setBonusAbilitiesList(int level, string value)`
- `presetBonusAbilitiesList(StringLevelClosure lc)`

### AbilityDefinitionClericMindControlTalent1

```wurst
public class AbilityDefinitionClericMindControlTalent1 extends AbilityDefinition
```

'AHz1' / [AbilityIds.clericMindControlTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-clericMindControlTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setExplosionDamage(int level, real value)`
- `override function setDurationNormal(int level, real value)`
- `setMaximumCreepLevel(int level, int value)`
- `setMindControlledUnitLimit(int level, int value)`
- `setExplosionRadius(int level, real value)`
- `presetExplosionDamage(RealLevelClosure lc)`
- `override function presetDurationNormal(RealLevelClosure lc)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`
- `presetMindControlledUnitLimit(IntLevelClosure lc)`
- `presetExplosionRadius(RealLevelClosure lc)`

### AbilityDefinitionClericMindControlTalent2

```wurst
public class AbilityDefinitionClericMindControlTalent2 extends AbilityDefinition
```

'AHz2' / [AbilityIds.clericMindControlTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-clericMindControlTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setExplosionDamage(int level, real value)`
- `override function setDurationNormal(int level, real value)`
- `setMaximumCreepLevel(int level, int value)`
- `setMindControlledUnitLimit(int level, int value)`
- `setExplosionRadius(int level, real value)`
- `presetExplosionDamage(RealLevelClosure lc)`
- `override function presetDurationNormal(RealLevelClosure lc)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`
- `presetMindControlledUnitLimit(IntLevelClosure lc)`
- `presetExplosionRadius(RealLevelClosure lc)`

### AbilityDefinitionClericMindControlTalent3

```wurst
public class AbilityDefinitionClericMindControlTalent3 extends AbilityDefinition
```

'AHz3' / [AbilityIds.clericMindControlTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-clericMindControlTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setExplosionDamage(int level, real value)`
- `override function setDurationNormal(int level, real value)`
- `setMaximumCreepLevel(int level, int value)`
- `setMindControlledUnitLimit(int level, int value)`
- `setExplosionRadius(int level, real value)`
- `presetExplosionDamage(RealLevelClosure lc)`
- `override function presetDurationNormal(RealLevelClosure lc)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`
- `presetMindControlledUnitLimit(IntLevelClosure lc)`
- `presetExplosionRadius(RealLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus10

```wurst
public class AbilityDefinitionIntelligenceBonusPlus10 extends AbilityDefinition
```

'AI10' / [AbilityIds.intelligenceBonusPlus10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus10)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus11

```wurst
public class AbilityDefinitionIntelligenceBonusPlus11 extends AbilityDefinition
```

'AI11' / [AbilityIds.intelligenceBonusPlus11](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus11)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus12

```wurst
public class AbilityDefinitionIntelligenceBonusPlus12 extends AbilityDefinition
```

'AI12' / [AbilityIds.intelligenceBonusPlus12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus12)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemArmorBonus1

```wurst
public class AbilityDefinitionItemArmorBonus1 extends AbilityDefinition
```

'AIAq' / [AbilityIds.itemArmorBonus1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorBonus1)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionItemArmorBonus2

```wurst
public class AbilityDefinitionItemArmorBonus2 extends AbilityDefinition
```

'AIAw' / [AbilityIds.itemArmorBonus2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorBonus2)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionItemBash15251

```wurst
public class AbilityDefinitionItemBash15251 extends AbilityDefinition
```

'AIBq' / [AbilityIds.itemBash15251](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBash15251)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoBash(int level, real value)`
- `setNeverMiss(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `setChancetoMiss(int level, real value)`
- `setDamageBonus(int level, real value)`
- `presetChancetoBash(RealLevelClosure lc)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`
- `presetChancetoMiss(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionItemBash10252

```wurst
public class AbilityDefinitionItemBash10252 extends AbilityDefinition
```

'AIBw' / [AbilityIds.itemBash10252](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBash10252)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoBash(int level, real value)`
- `setNeverMiss(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `setChancetoMiss(int level, real value)`
- `setDamageBonus(int level, real value)`
- `presetChancetoBash(RealLevelClosure lc)`
- `presetNeverMiss(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`
- `presetChancetoMiss(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionItemEvasion12

```wurst
public class AbilityDefinitionItemEvasion12 extends AbilityDefinition
```

'AIEi' / [AbilityIds.itemEvasion12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEvasion12)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionItemEvasion2

```wurst
public class AbilityDefinitionItemEvasion2 extends AbilityDefinition
```

'AIEq' / [AbilityIds.itemEvasion2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEvasion2)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionItemEvasion5

```wurst
public class AbilityDefinitionItemEvasion5 extends AbilityDefinition
```

'AIEr' / [AbilityIds.itemEvasion5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEvasion5)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionItemEvasion7

```wurst
public class AbilityDefinitionItemEvasion7 extends AbilityDefinition
```

'AIEt' / [AbilityIds.itemEvasion7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEvasion7)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionItemEvasion10

```wurst
public class AbilityDefinitionItemEvasion10 extends AbilityDefinition
```

'AIEu' / [AbilityIds.itemEvasion10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEvasion10)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionItemEvasion4

```wurst
public class AbilityDefinitionItemEvasion4 extends AbilityDefinition
```

'AIEw' / [AbilityIds.itemEvasion4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEvasion4)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionItemEvasion8

```wurst
public class AbilityDefinitionItemEvasion8 extends AbilityDefinition
```

'AIEy' / [AbilityIds.itemEvasion8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEvasion8)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionItemMaxLifeBonus250

```wurst
public class AbilityDefinitionItemMaxLifeBonus250 extends AbilityDefinition
```

'AILa' / [AbilityIds.itemMaxLifeBonus250](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxLifeBonus250)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionItemMaxLifeBonus280

```wurst
public class AbilityDefinitionItemMaxLifeBonus280 extends AbilityDefinition
```

'AILe' / [AbilityIds.itemMaxLifeBonus280](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxLifeBonus280)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionItemMaxLifeBonus40

```wurst
public class AbilityDefinitionItemMaxLifeBonus40 extends AbilityDefinition
```

'AILi' / [AbilityIds.itemMaxLifeBonus40](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxLifeBonus40)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionItemMaxLifeBonus60

```wurst
public class AbilityDefinitionItemMaxLifeBonus60 extends AbilityDefinition
```

'AILr' / [AbilityIds.itemMaxLifeBonus60](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxLifeBonus60)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionItemMaxLifeBonus200

```wurst
public class AbilityDefinitionItemMaxLifeBonus200 extends AbilityDefinition
```

'AILt' / [AbilityIds.itemMaxLifeBonus200](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxLifeBonus200)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionItemMaxLifeBonus50

```wurst
public class AbilityDefinitionItemMaxLifeBonus50 extends AbilityDefinition
```

'AILw' / [AbilityIds.itemMaxLifeBonus50](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxLifeBonus50)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionItemMaxLifeBonus20

```wurst
public class AbilityDefinitionItemMaxLifeBonus20 extends AbilityDefinition
```

'AILy' / [AbilityIds.itemMaxLifeBonus20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxLifeBonus20)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionItemResolve5

```wurst
public class AbilityDefinitionItemResolve5 extends AbilityDefinition
```

'AIR5' / [AbilityIds.itemResolve5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemResolve5)

**Members:**

- `construct(int newAbilityId)`
- `setResolve(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetResolve(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemResolve20

```wurst
public class AbilityDefinitionItemResolve20 extends AbilityDefinition
```

'AIRo' / [AbilityIds.itemResolve20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemResolve20)

**Members:**

- `construct(int newAbilityId)`
- `setResolve(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetResolve(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemResolve12

```wurst
public class AbilityDefinitionItemResolve12 extends AbilityDefinition
```

'AIRp' / [AbilityIds.itemResolve12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemResolve12)

**Members:**

- `construct(int newAbilityId)`
- `setResolve(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetResolve(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemResolve10

```wurst
public class AbilityDefinitionItemResolve10 extends AbilityDefinition
```

'AIRq' / [AbilityIds.itemResolve10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemResolve10)

**Members:**

- `construct(int newAbilityId)`
- `setResolve(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetResolve(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemResolve16

```wurst
public class AbilityDefinitionItemResolve16 extends AbilityDefinition
```

'AIRu' / [AbilityIds.itemResolve16](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemResolve16)

**Members:**

- `construct(int newAbilityId)`
- `setResolve(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetResolve(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemResolve8

```wurst
public class AbilityDefinitionItemResolve8 extends AbilityDefinition
```

'AIRw' / [AbilityIds.itemResolve8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemResolve8)

**Members:**

- `construct(int newAbilityId)`
- `setResolve(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetResolve(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemResolve6

```wurst
public class AbilityDefinitionItemResolve6 extends AbilityDefinition
```

'AIRy' / [AbilityIds.itemResolve6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemResolve6)

**Members:**

- `construct(int newAbilityId)`
- `setResolve(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetResolve(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus7

```wurst
public class AbilityDefinitionAgilityBonusPlus7 extends AbilityDefinition
```

'AIa7' / [AbilityIds.agilityBonusPlus7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus7)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus8

```wurst
public class AbilityDefinitionAgilityBonusPlus8 extends AbilityDefinition
```

'AIa8' / [AbilityIds.agilityBonusPlus8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-agilityBonusPlus8)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemSpellAmp10

```wurst
public class AbilityDefinitionItemSpellAmp10 extends AbilityDefinition
```

'AIap' / [AbilityIds.itemSpellAmp10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellAmp10)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionItemAuraCommand8

```wurst
public class AbilityDefinitionItemAuraCommand8 extends AbilityDefinition
```

'AIcq' / [AbilityIds.itemAuraCommand8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraCommand8)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemCooldownReduction

```wurst
public class AbilityDefinitionItemCooldownReduction extends AbilityDefinition
```

'AIcr' / [AbilityIds.itemCooldownReduction](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCooldownReduction)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus6

```wurst
public class AbilityDefinitionDefenseBonusPlus6 extends AbilityDefinition
```

'AId6' / [AbilityIds.defenseBonusPlus6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-defenseBonusPlus6)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionEdricsEye

```wurst
public class AbilityDefinitionEdricsEye extends AbilityDefinition
```

'AIee' / [AbilityIds.edricsEye](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-edricsEye)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseReduction(int level, int value)`
- `setAlwaysAutocast(int level, bool value)`
- `presetDefenseReduction(IntLevelClosure lc)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`

### AbilityDefinitionItemHealUltimate

```wurst
public class AbilityDefinitionItemHealUltimate extends AbilityDefinition
```

'AIh4' / [AbilityIds.itemHealUltimate](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealUltimate)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionItemHealFinal

```wurst
public class AbilityDefinitionItemHealFinal extends AbilityDefinition
```

'AIh5' / [AbilityIds.itemHealFinal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHealFinal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionHardenedSkinItem

```wurst
public class AbilityDefinitionHardenedSkinItem extends AbilityDefinition
```

'AIhs' / [AbilityIds.hardenedSkinItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-hardenedSkinItem)

**Members:**

- `construct(int newAbilityId)`
- `setMinimumDamage(int level, real value)`
- `setIncludeRangedDamage(int level, bool value)`
- `setIncludeMeleeDamage(int level, bool value)`
- `setChancetoReduceDamage(int level, real value)`
  Chance to Reduce Damage (%) / 'Ssk1'
- `setIgnoredDamage(int level, real value)`
- `presetMinimumDamage(RealLevelClosure lc)`
- `presetIncludeRangedDamage(BooleanLevelClosure lc)`
- `presetIncludeMeleeDamage(BooleanLevelClosure lc)`
- `presetChancetoReduceDamage(RealLevelClosure lc)`
- `presetIgnoredDamage(RealLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus8

```wurst
public class AbilityDefinitionIntelligenceBonusPlus8 extends AbilityDefinition
```

'AIi8' / [AbilityIds.intelligenceBonusPlus8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-intelligenceBonusPlus8)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionKrisIncinerate

```wurst
public class AbilityDefinitionKrisIncinerate extends AbilityDefinition
```

'AIki' / [AbilityIds.krisIncinerate](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-krisIncinerate)

**Members:**

- `construct(int newAbilityId)`
- `setBonusDamageMultiplier(int level, real value)`
- `setDeathDamageHalfAmount(int level, real value)`
- `setDeathDamageHalfArea(int level, real value)`
- `setDeathDamageDelay(int level, real value)`
- `setDeathDamageFullAmount(int level, real value)`
- `setDeathDamageFullArea(int level, real value)`
- `presetBonusDamageMultiplier(RealLevelClosure lc)`
- `presetDeathDamageHalfAmount(RealLevelClosure lc)`
- `presetDeathDamageHalfArea(RealLevelClosure lc)`
- `presetDeathDamageDelay(RealLevelClosure lc)`
- `presetDeathDamageFullAmount(RealLevelClosure lc)`
- `presetDeathDamageFullArea(RealLevelClosure lc)`

### AbilityDefinitionItemMaxLifeBonus25

```wurst
public class AbilityDefinitionItemMaxLifeBonus25 extends AbilityDefinition
```

'AIl3' / [AbilityIds.itemMaxLifeBonus25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxLifeBonus25)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionLichOrb

```wurst
public class AbilityDefinitionLichOrb extends AbilityDefinition
```

'AIlo' / [AbilityIds.lichOrb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lichOrb)

**Members:**

- `construct(int newAbilityId)`
- `setRestoredLife(int level, int value)`
- `setDelayAfterDeathseconds(int level, int value)`
- `setRestoredManaforcurrent(int level, int value)`
  Restored Mana (-1 for current) / 'irc3'
- `presetRestoredLife(IntLevelClosure lc)`
- `presetDelayAfterDeathseconds(IntLevelClosure lc)`
- `presetRestoredManaforcurrent(IntLevelClosure lc)`

### AbilityDefinitionItemMaxLifeBonus100

```wurst
public class AbilityDefinitionItemMaxLifeBonus100 extends AbilityDefinition
```

'AIlq' / [AbilityIds.itemMaxLifeBonus100](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxLifeBonus100)

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionItemResolve30

```wurst
public class AbilityDefinitionItemResolve30 extends AbilityDefinition
```

'AIlv' / [AbilityIds.itemResolve30](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemResolve30)

**Members:**

- `construct(int newAbilityId)`
- `setResolve(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetResolve(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemManaRestoreUltimate

```wurst
public class AbilityDefinitionItemManaRestoreUltimate extends AbilityDefinition
```

'AIm4' / [AbilityIds.itemManaRestoreUltimate](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRestoreUltimate)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemManaEfficiency

```wurst
public class AbilityDefinitionItemManaEfficiency extends AbilityDefinition
```

'AIme' / [AbilityIds.itemManaEfficiency](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemManaEfficiency2

```wurst
public class AbilityDefinitionItemManaEfficiency2 extends AbilityDefinition
```

'AImq' / [AbilityIds.itemManaEfficiency2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency2)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemManaEfficiency5

```wurst
public class AbilityDefinitionItemManaEfficiency5 extends AbilityDefinition
```

'AImw' / [AbilityIds.itemManaEfficiency5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency5)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionExtendedInventoryItem

```wurst
public class AbilityDefinitionExtendedInventoryItem extends AbilityDefinition
```

'AIni' / [AbilityIds.extendedInventoryItem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-extendedInventoryItem)

**Members:**

- `construct(int newAbilityId)`
- `setEquipmentItemCapacity(int level, int value)`
- `presetEquipmentItemCapacity(IntLevelClosure lc)`

### AbilityDefinitionNecromancersPlaguegreaves

```wurst
public class AbilityDefinitionNecromancersPlaguegreaves extends AbilityDefinition
```

'AInp' / [AbilityIds.necromancersPlaguegreaves](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-necromancersPlaguegreaves)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setSummonedUnitType(int level, string value)`
- `setNumberofSummonedUnits(int level, int value)`
- `setSummonedUnitDurationseconds(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`
- `presetSummonedUnitDurationseconds(RealLevelClosure lc)`

### AbilityDefinitionEquipmentInventory

```wurst
public class AbilityDefinitionEquipmentInventory extends AbilityDefinition
```

'AInx' / [AbilityIds.equipmentInventory](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-equipmentInventory)

**Members:**

- `construct(int newAbilityId)`
- `setEquipmentItemCapacity(int level, int value)`
- `presetEquipmentItemCapacity(IntLevelClosure lc)`

### AbilityDefinitionOgreWarclubStats

```wurst
public class AbilityDefinitionOgreWarclubStats extends AbilityDefinition
```

'AIow' / [AbilityIds.ogreWarclubStats](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ogreWarclubStats)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus7

```wurst
public class AbilityDefinitionStrengthBonusPlus7 extends AbilityDefinition
```

'AIs7' / [AbilityIds.strengthBonusPlus7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus7)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus8

```wurst
public class AbilityDefinitionStrengthBonusPlus8 extends AbilityDefinition
```

'AIs8' / [AbilityIds.strengthBonusPlus8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus8)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemSpellCrit

```wurst
public class AbilityDefinitionItemSpellCrit extends AbilityDefinition
```

'AIsc' / [AbilityIds.itemSpellCrit](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCrit)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionSignetOfDecay

```wurst
public class AbilityDefinitionSignetOfDecay extends AbilityDefinition
```

'AIsd' / [AbilityIds.signetOfDecay](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-signetOfDecay)

**Members:**

- `construct(int newAbilityId)`
- `setManaUsedPerSecond(int level, int value)`
- `setDamagePerDuration(int level, int value)`
- `setExtraManaRequired(int level, int value)`
- `presetManaUsedPerSecond(IntLevelClosure lc)`
- `presetDamagePerDuration(IntLevelClosure lc)`
- `presetExtraManaRequired(IntLevelClosure lc)`

### AbilityDefinitionItemAttackSpeedIncrease5

```wurst
public class AbilityDefinitionItemAttackSpeedIncrease5 extends AbilityDefinition
```

'AIsq' / [AbilityIds.itemAttackSpeedIncrease5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAttackSpeedIncrease5)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionMagicResistStacking

```wurst
public class AbilityDefinitionMagicResistStacking extends AbilityDefinition
```

'AIss' / [AbilityIds.magicResistStacking](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-magicResistStacking)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellVamp25

```wurst
public class AbilityDefinitionItemSpellVamp25 extends AbilityDefinition
```

'AIsv' / [AbilityIds.itemSpellVamp25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellVamp25)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionVampiricAttackStacking

```wurst
public class AbilityDefinitionVampiricAttackStacking extends AbilityDefinition
```

'AIvx' / [AbilityIds.vampiricAttackStacking](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-vampiricAttackStacking)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionItemAllStatsPlus6

```wurst
public class AbilityDefinitionItemAllStatsPlus6 extends AbilityDefinition
```

'AIx6' / [AbilityIds.itemAllStatsPlus6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAllStatsPlus6)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemAllStatsPlus7

```wurst
public class AbilityDefinitionItemAllStatsPlus7 extends AbilityDefinition
```

'AIx7' / [AbilityIds.itemAllStatsPlus7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAllStatsPlus7)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemCriticalStrikeSystem

```wurst
public class AbilityDefinitionItemCriticalStrikeSystem extends AbilityDefinition
```

'AIxr' / [AbilityIds.itemCriticalStrikeSystem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCriticalStrikeSystem)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemLifesteal10

```wurst
public class AbilityDefinitionItemLifesteal10 extends AbilityDefinition
```

'AL10' / [AbilityIds.itemLifesteal10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifesteal10)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionItemLanceOfTheDawnAttack

```wurst
public class AbilityDefinitionItemLanceOfTheDawnAttack extends AbilityDefinition
```

'ALDa' / [AbilityIds.itemLanceOfTheDawnAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLanceOfTheDawnAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionLesserMarkOfTime

```wurst
public class AbilityDefinitionLesserMarkOfTime extends AbilityDefinition
```

'ALmt' / [AbilityIds.lesserMarkOfTime](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lesserMarkOfTime)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `setAlwaysAutocast(int level, bool value)`
- `setAttackSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetAlwaysAutocast(BooleanLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionItemLifesteal1

```wurst
public class AbilityDefinitionItemLifesteal1 extends AbilityDefinition
```

'ALs1' / [AbilityIds.itemLifesteal1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifesteal1)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionItemLifesteal3

```wurst
public class AbilityDefinitionItemLifesteal3 extends AbilityDefinition
```

'ALs3' / [AbilityIds.itemLifesteal3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifesteal3)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionItemLifesteal4

```wurst
public class AbilityDefinitionItemLifesteal4 extends AbilityDefinition
```

'ALs4' / [AbilityIds.itemLifesteal4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifesteal4)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionItemLifesteal5

```wurst
public class AbilityDefinitionItemLifesteal5 extends AbilityDefinition
```

'ALs5' / [AbilityIds.itemLifesteal5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifesteal5)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionItemLifesteal8

```wurst
public class AbilityDefinitionItemLifesteal8 extends AbilityDefinition
```

'ALs8' / [AbilityIds.itemLifesteal8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLifesteal8)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionItemManaEfficiency12

```wurst
public class AbilityDefinitionItemManaEfficiency12 extends AbilityDefinition
```

'AMEi' / [AbilityIds.itemManaEfficiency12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency12)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemManaEfficiency7

```wurst
public class AbilityDefinitionItemManaEfficiency7 extends AbilityDefinition
```

'AMEq' / [AbilityIds.itemManaEfficiency7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency7)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemManaEfficiency4

```wurst
public class AbilityDefinitionItemManaEfficiency4 extends AbilityDefinition
```

'AMEr' / [AbilityIds.itemManaEfficiency4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency4)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemManaEfficiency8

```wurst
public class AbilityDefinitionItemManaEfficiency8 extends AbilityDefinition
```

'AMEt' / [AbilityIds.itemManaEfficiency8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency8)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemManaEfficiency15

```wurst
public class AbilityDefinitionItemManaEfficiency15 extends AbilityDefinition
```

'AMEu' / [AbilityIds.itemManaEfficiency15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency15)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemManaEfficiency6

```wurst
public class AbilityDefinitionItemManaEfficiency6 extends AbilityDefinition
```

'AMEw' / [AbilityIds.itemManaEfficiency6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency6)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemManaEfficiency10

```wurst
public class AbilityDefinitionItemManaEfficiency10 extends AbilityDefinition
```

'AMEy' / [AbilityIds.itemManaEfficiency10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaEfficiency10)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemManaRefund5

```wurst
public class AbilityDefinitionItemManaRefund5 extends AbilityDefinition
```

'AMFq' / [AbilityIds.itemManaRefund5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRefund5)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionItemMaxManaBonus120

```wurst
public class AbilityDefinitionItemMaxManaBonus120 extends AbilityDefinition
```

'AMMe' / [AbilityIds.itemMaxManaBonus120](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxManaBonus120)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionItemMaxManaBonus25

```wurst
public class AbilityDefinitionItemMaxManaBonus25 extends AbilityDefinition
```

'AMMq' / [AbilityIds.itemMaxManaBonus25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxManaBonus25)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionItemMaxManaBonus150

```wurst
public class AbilityDefinitionItemMaxManaBonus150 extends AbilityDefinition
```

'AMMw' / [AbilityIds.itemMaxManaBonus150](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMaxManaBonus150)

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionItemManaRegen70

```wurst
public class AbilityDefinitionItemManaRegen70 extends AbilityDefinition
```

'AMRe' / [AbilityIds.itemManaRegen70](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegen70)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemManaRegen75

```wurst
public class AbilityDefinitionItemManaRegen75 extends AbilityDefinition
```

'AMRi' / [AbilityIds.itemManaRegen75](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegen75)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemManaRegen65

```wurst
public class AbilityDefinitionItemManaRegen65 extends AbilityDefinition
```

'AMRo' / [AbilityIds.itemManaRegen65](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegen65)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemManaRegen40

```wurst
public class AbilityDefinitionItemManaRegen40 extends AbilityDefinition
```

'AMRp' / [AbilityIds.itemManaRegen40](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegen40)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemManaRegen100

```wurst
public class AbilityDefinitionItemManaRegen100 extends AbilityDefinition
```

'AMRq' / [AbilityIds.itemManaRegen100](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegen100)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemManaRegen35

```wurst
public class AbilityDefinitionItemManaRegen35 extends AbilityDefinition
```

'AMRt' / [AbilityIds.itemManaRegen35](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegen35)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemManaRegen30

```wurst
public class AbilityDefinitionItemManaRegen30 extends AbilityDefinition
```

'AMRu' / [AbilityIds.itemManaRegen30](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegen30)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemManaRegen50

```wurst
public class AbilityDefinitionItemManaRegen50 extends AbilityDefinition
```

'AMRw' / [AbilityIds.itemManaRegen50](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegen50)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemManaRegen25

```wurst
public class AbilityDefinitionItemManaRegen25 extends AbilityDefinition
```

'AMRy' / [AbilityIds.itemManaRegen25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaRegen25)

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemMoveSpeedBonus20

```wurst
public class AbilityDefinitionItemMoveSpeedBonus20 extends AbilityDefinition
```

'AMSe' / [AbilityIds.itemMoveSpeedBonus20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMoveSpeedBonus20)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedBonus(int level, int value)`
- `presetMovementSpeedBonus(IntLevelClosure lc)`

### AbilityDefinitionItemMoveSpeedBonus10

```wurst
public class AbilityDefinitionItemMoveSpeedBonus10 extends AbilityDefinition
```

'AMSq' / [AbilityIds.itemMoveSpeedBonus10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMoveSpeedBonus10)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedBonus(int level, int value)`
- `presetMovementSpeedBonus(IntLevelClosure lc)`

### AbilityDefinitionItemMoveSpeedBonus30

```wurst
public class AbilityDefinitionItemMoveSpeedBonus30 extends AbilityDefinition
```

'AMSr' / [AbilityIds.itemMoveSpeedBonus30](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMoveSpeedBonus30)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedBonus(int level, int value)`
- `presetMovementSpeedBonus(IntLevelClosure lc)`

### AbilityDefinitionItemMoveSpeedBonus40

```wurst
public class AbilityDefinitionItemMoveSpeedBonus40 extends AbilityDefinition
```

'AMSt' / [AbilityIds.itemMoveSpeedBonus40](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMoveSpeedBonus40)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedBonus(int level, int value)`
- `presetMovementSpeedBonus(IntLevelClosure lc)`

### AbilityDefinitionItemMoveSpeedBonus15

```wurst
public class AbilityDefinitionItemMoveSpeedBonus15 extends AbilityDefinition
```

'AMSw' / [AbilityIds.itemMoveSpeedBonus15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMoveSpeedBonus15)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedBonus(int level, int value)`
- `presetMovementSpeedBonus(IntLevelClosure lc)`

### AbilityDefinitionRighteousFury

```wurst
public class AbilityDefinitionRighteousFury extends AbilityDefinition
```

'ANcp' / [AbilityIds.righteousFury](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-righteousFury)

**Members:**

- `construct(int newAbilityId)`
- `setDashSpeed(int level, real value)`
- `setNormalBonusCriticalStrikeDuration(int level, real value)`
- `setTargetIntersectRadius(int level, real value)`
- `setRemoveBuffsOnAbilityStart(int level, bool value)`
- `setBonusCriticalStrike(int level, real value)`
- `setAttackSpeedSlow(int level, real value)`
- `setDashDamage(int level, real value)`
- `setMovementSpeedSlow(int level, real value)`
- `setHeroBonusCriticalStrikeDuration(int level, real value)`
- `presetDashSpeed(RealLevelClosure lc)`
- `presetNormalBonusCriticalStrikeDuration(RealLevelClosure lc)`
- `presetTargetIntersectRadius(RealLevelClosure lc)`
- `presetRemoveBuffsOnAbilityStart(BooleanLevelClosure lc)`
- `presetBonusCriticalStrike(RealLevelClosure lc)`
- `presetAttackSpeedSlow(RealLevelClosure lc)`
- `presetDashDamage(RealLevelClosure lc)`
- `presetMovementSpeedSlow(RealLevelClosure lc)`
- `presetHeroBonusCriticalStrikeDuration(RealLevelClosure lc)`

### AbilityDefinitionAOwd

```wurst
public class AbilityDefinitionAOwd extends AbilityDefinition
```

'AOwd' / [AbilityIds.shadowHunterSerpentWard2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shadowHunterSerpentWard2)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus10

```wurst
public class AbilityDefinitionStrengthBonusPlus10 extends AbilityDefinition
```

'AS10' / [AbilityIds.strengthBonusPlus10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus10)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus12

```wurst
public class AbilityDefinitionStrengthBonusPlus12 extends AbilityDefinition
```

'AS12' / [AbilityIds.strengthBonusPlus12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus12)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus20

```wurst
public class AbilityDefinitionStrengthBonusPlus20 extends AbilityDefinition
```

'AS20' / [AbilityIds.strengthBonusPlus20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-strengthBonusPlus20)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemSpellCritChance8

```wurst
public class AbilityDefinitionItemSpellCritChance8 extends AbilityDefinition
```

'ASC8' / [AbilityIds.itemSpellCritChance8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritChance8)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellCritChance12

```wurst
public class AbilityDefinitionItemSpellCritChance12 extends AbilityDefinition
```

'ASCe' / [AbilityIds.itemSpellCritChance12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritChance12)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellCritChance15

```wurst
public class AbilityDefinitionItemSpellCritChance15 extends AbilityDefinition
```

'ASCq' / [AbilityIds.itemSpellCritChance15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritChance15)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellCritChance18

```wurst
public class AbilityDefinitionItemSpellCritChance18 extends AbilityDefinition
```

'ASCr' / [AbilityIds.itemSpellCritChance18](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritChance18)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellCritChance5

```wurst
public class AbilityDefinitionItemSpellCritChance5 extends AbilityDefinition
```

'ASCs' / [AbilityIds.itemSpellCritChance5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritChance5)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellCritChance6

```wurst
public class AbilityDefinitionItemSpellCritChance6 extends AbilityDefinition
```

'ASCt' / [AbilityIds.itemSpellCritChance6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritChance6)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellCritChance4

```wurst
public class AbilityDefinitionItemSpellCritChance4 extends AbilityDefinition
```

'ASCu' / [AbilityIds.itemSpellCritChance4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritChance4)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellCritChance10

```wurst
public class AbilityDefinitionItemSpellCritChance10 extends AbilityDefinition
```

'ASCw' / [AbilityIds.itemSpellCritChance10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritChance10)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellCritChance30

```wurst
public class AbilityDefinitionItemSpellCritChance30 extends AbilityDefinition
```

'ASCy' / [AbilityIds.itemSpellCritChance30](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritChance30)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSplashDamage4

```wurst
public class AbilityDefinitionItemSplashDamage4 extends AbilityDefinition
```

'ASD4' / [AbilityIds.itemSplashDamage4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSplashDamage4)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionItemSpellCritDamage20

```wurst
public class AbilityDefinitionItemSpellCritDamage20 extends AbilityDefinition
```

'ASDq' / [AbilityIds.itemSpellCritDamage20](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritDamage20)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellCritDamage15

```wurst
public class AbilityDefinitionItemSpellCritDamage15 extends AbilityDefinition
```

'ASDw' / [AbilityIds.itemSpellCritDamage15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellCritDamage15)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemSpellResistance5

```wurst
public class AbilityDefinitionItemSpellResistance5 extends AbilityDefinition
```

'ASRe' / [AbilityIds.itemSpellResistance5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellResistance5)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellResistance10

```wurst
public class AbilityDefinitionItemSpellResistance10 extends AbilityDefinition
```

'ASRi' / [AbilityIds.itemSpellResistance10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellResistance10)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellResistance25

```wurst
public class AbilityDefinitionItemSpellResistance25 extends AbilityDefinition
```

'ASRo' / [AbilityIds.itemSpellResistance25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellResistance25)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellResistance33

```wurst
public class AbilityDefinitionItemSpellResistance33 extends AbilityDefinition
```

'ASRp' / [AbilityIds.itemSpellResistance33](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellResistance33)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellResistance7

```wurst
public class AbilityDefinitionItemSpellResistance7 extends AbilityDefinition
```

'ASRq' / [AbilityIds.itemSpellResistance7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellResistance7)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellResistance14

```wurst
public class AbilityDefinitionItemSpellResistance14 extends AbilityDefinition
```

'ASRt' / [AbilityIds.itemSpellResistance14](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellResistance14)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellResistance4

```wurst
public class AbilityDefinitionItemSpellResistance4 extends AbilityDefinition
```

'ASRu' / [AbilityIds.itemSpellResistance4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellResistance4)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellResistance3

```wurst
public class AbilityDefinitionItemSpellResistance3 extends AbilityDefinition
```

'ASRw' / [AbilityIds.itemSpellResistance3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellResistance3)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellResistance8

```wurst
public class AbilityDefinitionItemSpellResistance8 extends AbilityDefinition
```

'ASRy' / [AbilityIds.itemSpellResistance8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellResistance8)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSpellVamp7

```wurst
public class AbilityDefinitionItemSpellVamp7 extends AbilityDefinition
```

'ASVe' / [AbilityIds.itemSpellVamp7](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellVamp7)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionItemSpellVamp8

```wurst
public class AbilityDefinitionItemSpellVamp8 extends AbilityDefinition
```

'ASVi' / [AbilityIds.itemSpellVamp8](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellVamp8)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionItemSpellVamp5

```wurst
public class AbilityDefinitionItemSpellVamp5 extends AbilityDefinition
```

'ASVq' / [AbilityIds.itemSpellVamp5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellVamp5)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionItemSpellVamp3

```wurst
public class AbilityDefinitionItemSpellVamp3 extends AbilityDefinition
```

'ASVr' / [AbilityIds.itemSpellVamp3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellVamp3)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionItemSpellVamp4

```wurst
public class AbilityDefinitionItemSpellVamp4 extends AbilityDefinition
```

'ASVt' / [AbilityIds.itemSpellVamp4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellVamp4)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionItemSpellVamp6

```wurst
public class AbilityDefinitionItemSpellVamp6 extends AbilityDefinition
```

'ASVu' / [AbilityIds.itemSpellVamp6](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellVamp6)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionItemSpellVamp2

```wurst
public class AbilityDefinitionItemSpellVamp2 extends AbilityDefinition
```

'ASVw' / [AbilityIds.itemSpellVamp2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellVamp2)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionItemSpellVamp10

```wurst
public class AbilityDefinitionItemSpellVamp10 extends AbilityDefinition
```

'ASVy' / [AbilityIds.itemSpellVamp10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellVamp10)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setSpellVamp(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetSpellVamp(RealLevelClosure lc)`

### AbilityDefinitionStatDetails

```wurst
public class AbilityDefinitionStatDetails extends AbilityDefinition
```

'ASde' / [AbilityIds.statDetails](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-statDetails)

**Members:**

- `construct(int newAbilityId)`
- `setSupportedstatmodifiers(int level, string value)`
- `presetSupportedstatmodifiers(StringLevelClosure lc)`

### AbilityDefinitionEquipmentInventoryInterface

```wurst
public class AbilityDefinitionEquipmentInventoryInterface extends AbilityDefinition
```

'ASpc' / [AbilityIds.equipmentInventoryInterface](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-equipmentInventoryInterface)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionAnyaTalentTier1a

```wurst
public class AbilityDefinitionAnyaTalentTier1a extends AbilityDefinition
```

'AT1a' / [AbilityIds.anyaTalentTier1a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier1a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier1b

```wurst
public class AbilityDefinitionAnyaTalentTier1b extends AbilityDefinition
```

'AT1b' / [AbilityIds.anyaTalentTier1b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier1b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier1c

```wurst
public class AbilityDefinitionAnyaTalentTier1c extends AbilityDefinition
```

'AT1c' / [AbilityIds.anyaTalentTier1c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier1c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier2a

```wurst
public class AbilityDefinitionAnyaTalentTier2a extends AbilityDefinition
```

'AT2a' / [AbilityIds.anyaTalentTier2a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier2a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier2b

```wurst
public class AbilityDefinitionAnyaTalentTier2b extends AbilityDefinition
```

'AT2b' / [AbilityIds.anyaTalentTier2b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier2b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier2c

```wurst
public class AbilityDefinitionAnyaTalentTier2c extends AbilityDefinition
```

'AT2c' / [AbilityIds.anyaTalentTier2c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier2c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier3a

```wurst
public class AbilityDefinitionAnyaTalentTier3a extends AbilityDefinition
```

'AT3a' / [AbilityIds.anyaTalentTier3a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier3a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier3b

```wurst
public class AbilityDefinitionAnyaTalentTier3b extends AbilityDefinition
```

'AT3b' / [AbilityIds.anyaTalentTier3b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier3b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier3c

```wurst
public class AbilityDefinitionAnyaTalentTier3c extends AbilityDefinition
```

'AT3c' / [AbilityIds.anyaTalentTier3c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier3c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier4a

```wurst
public class AbilityDefinitionAnyaTalentTier4a extends AbilityDefinition
```

'AT4a' / [AbilityIds.anyaTalentTier4a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier4a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier4b

```wurst
public class AbilityDefinitionAnyaTalentTier4b extends AbilityDefinition
```

'AT4b' / [AbilityIds.anyaTalentTier4b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier4b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaTalentTier4c

```wurst
public class AbilityDefinitionAnyaTalentTier4c extends AbilityDefinition
```

'AT4c' / [AbilityIds.anyaTalentTier4c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaTalentTier4c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionAnyaCritTalent

```wurst
public class AbilityDefinitionAnyaCritTalent extends AbilityDefinition
```

'AT5a' / [AbilityIds.anyaCritTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaCritTalent)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionAnyaSpellCritTalent

```wurst
public class AbilityDefinitionAnyaSpellCritTalent extends AbilityDefinition
```

'AT5b' / [AbilityIds.anyaSpellCritTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaSpellCritTalent)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionAnyaPoisonArrows

```wurst
public class AbilityDefinitionAnyaPoisonArrows extends AbilityDefinition
```

'AT5c' / [AbilityIds.anyaPoisonArrows](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaPoisonArrows)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `setDamageperSecond(int level, real value)`
- `setAttackSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionAnyaPlusAgiStrTalent

```wurst
public class AbilityDefinitionAnyaPlusAgiStrTalent extends AbilityDefinition
```

'AT6a' / [AbilityIds.anyaPlusAgiStrTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaPlusAgiStrTalent)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionAnyaEvasionTalent

```wurst
public class AbilityDefinitionAnyaEvasionTalent extends AbilityDefinition
```

'AT6b' / [AbilityIds.anyaEvasionTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaEvasionTalent)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionAnyaSpellAmpTalent

```wurst
public class AbilityDefinitionAnyaSpellAmpTalent extends AbilityDefinition
```

'AT6c' / [AbilityIds.anyaSpellAmpTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaSpellAmpTalent)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionTalents

```wurst
public class AbilityDefinitionTalents extends AbilityDefinition
```

'ATal' / [AbilityIds.talents](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talents)

**Members:**

- `construct(int newAbilityId)`
- `setTalentTierAbilities(int level, string value)`
- `presetTalentTierAbilities(StringLevelClosure lc)`

### AbilityDefinitionGrantTalentPoint

```wurst
public class AbilityDefinitionGrantTalentPoint extends AbilityDefinition
```

'ATap' / [AbilityIds.grantTalentPoint](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-grantTalentPoint)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionTalentCleaving25

```wurst
public class AbilityDefinitionTalentCleaving25 extends AbilityDefinition
```

'ATce' / [AbilityIds.talentCleaving25](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talentCleaving25)

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionTalentCooldownReduction15

```wurst
public class AbilityDefinitionTalentCooldownReduction15 extends AbilityDefinition
```

'ATcr' / [AbilityIds.talentCooldownReduction15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talentCooldownReduction15)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionTalentsHumanGarek

```wurst
public class AbilityDefinitionTalentsHumanGarek extends AbilityDefinition
```

'AThg' / [AbilityIds.talentsHumanGarek](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talentsHumanGarek)

**Members:**

- `construct(int newAbilityId)`
- `setTalentTierAbilities(int level, string value)`
- `presetTalentTierAbilities(StringLevelClosure lc)`

### AbilityDefinitionTalentsHumanIlastar

```wurst
public class AbilityDefinitionTalentsHumanIlastar extends AbilityDefinition
```

'AThi' / [AbilityIds.talentsHumanIlastar](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talentsHumanIlastar)

**Members:**

- `construct(int newAbilityId)`
- `setTalentTierAbilities(int level, string value)`
- `presetTalentTierAbilities(StringLevelClosure lc)`

### AbilityDefinitionTalentsHumanLanden

```wurst
public class AbilityDefinitionTalentsHumanLanden extends AbilityDefinition
```

'AThl' / [AbilityIds.talentsHumanLanden](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talentsHumanLanden)

**Members:**

- `construct(int newAbilityId)`
- `setTalentTierAbilities(int level, string value)`
- `presetTalentTierAbilities(StringLevelClosure lc)`

### AbilityDefinitionTalentManaEfficiency15

```wurst
public class AbilityDefinitionTalentManaEfficiency15 extends AbilityDefinition
```

'ATme' / [AbilityIds.talentManaEfficiency15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talentManaEfficiency15)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionATst

```wurst
public class AbilityDefinitionATst extends AbilityDefinition
```

'ATst' / [AbilityIds.aTst](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-aTst)

**Members:**

- `construct(int newAbilityId)`
- `setChargeRegenTime(int level, real value)`
- `setMaxCharges(int level, int value)`
- `presetChargeRegenTime(RealLevelClosure lc)`
- `presetMaxCharges(IntLevelClosure lc)`

### AbilityDefinitionTalentsUndeadAnya

```wurst
public class AbilityDefinitionTalentsUndeadAnya extends AbilityDefinition
```

'ATua' / [AbilityIds.talentsUndeadAnya](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talentsUndeadAnya)

**Members:**

- `construct(int newAbilityId)`
- `setTalentTierAbilities(int level, string value)`
- `presetTalentTierAbilities(StringLevelClosure lc)`

### AbilityDefinitionTalentsUndeadGarek

```wurst
public class AbilityDefinitionTalentsUndeadGarek extends AbilityDefinition
```

'ATug' / [AbilityIds.talentsUndeadGarek](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talentsUndeadGarek)

**Members:**

- `construct(int newAbilityId)`
- `setTalentTierAbilities(int level, string value)`
- `presetTalentTierAbilities(StringLevelClosure lc)`

### AbilityDefinitionTalentsUndeadLeonid

```wurst
public class AbilityDefinitionTalentsUndeadLeonid extends AbilityDefinition
```

'ATul' / [AbilityIds.talentsUndeadLeonid](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talentsUndeadLeonid)

**Members:**

- `construct(int newAbilityId)`
- `setTalentTierAbilities(int level, string value)`
- `presetTalentTierAbilities(StringLevelClosure lc)`

### AbilityDefinitionItemUnitDamageX125

```wurst
public class AbilityDefinitionItemUnitDamageX125 extends AbilityDefinition
```

'AUDq' / [AbilityIds.itemUnitDamageX125](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemUnitDamageX125)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplierBuildings(int level, real value)`
- `setDamageMultiplierUnits(int level, real value)`
- `setChancetoDemolish(int level, real value)`
- `setDamageMultiplierHeroes(int level, real value)`
- `presetDamageMultiplierBuildings(RealLevelClosure lc)`
- `presetDamageMultiplierUnits(RealLevelClosure lc)`
- `presetChancetoDemolish(RealLevelClosure lc)`
- `presetDamageMultiplierHeroes(RealLevelClosure lc)`

### AbilityDefinitionItemUnitDamageX115

```wurst
public class AbilityDefinitionItemUnitDamageX115 extends AbilityDefinition
```

'AUDw' / [AbilityIds.itemUnitDamageX115](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemUnitDamageX115)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplierBuildings(int level, real value)`
- `setDamageMultiplierUnits(int level, real value)`
- `setChancetoDemolish(int level, real value)`
- `setDamageMultiplierHeroes(int level, real value)`
- `presetDamageMultiplierBuildings(RealLevelClosure lc)`
- `presetDamageMultiplierUnits(RealLevelClosure lc)`
- `presetChancetoDemolish(RealLevelClosure lc)`
- `presetDamageMultiplierHeroes(RealLevelClosure lc)`

### AbilityDefinitionUndyingDefianceTalent1

```wurst
public class AbilityDefinitionUndyingDefianceTalent1 extends AbilityDefinition
```

'AUb1' / [AbilityIds.undyingDefianceTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-undyingDefianceTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
  % Attack Speed Increase / 'bld3'
- `setSweepRemainingCooldownReductionOnHit(int level, real value)`
- `setDamageReduction(int level, real value)`
  % Damage Reduction / 'bld1'
- `setAbilitySpeedIncrease(int level, real value)`
  % Ability Speed Increase / 'bld8'
- `setMovementSpeedreduction(int level, real value)`
  % Movement Speed reduction / 'bld2'
- `setDamageReflection(int level, real value)`
  % Damage Reflection / 'bld6'
- `setFlatDamageReflection(int level, real value)`
- `setOnDamageTakenBonusDuration(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetSweepRemainingCooldownReductionOnHit(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`
- `presetAbilitySpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedreduction(RealLevelClosure lc)`
- `presetDamageReflection(RealLevelClosure lc)`
- `presetFlatDamageReflection(RealLevelClosure lc)`
- `presetOnDamageTakenBonusDuration(RealLevelClosure lc)`

### AbilityDefinitionUndyingDefianceTalent2

```wurst
public class AbilityDefinitionUndyingDefianceTalent2 extends AbilityDefinition
```

'AUb2' / [AbilityIds.undyingDefianceTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-undyingDefianceTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
  % Attack Speed Increase / 'bld3'
- `setSweepRemainingCooldownReductionOnHit(int level, real value)`
- `setDamageReduction(int level, real value)`
  % Damage Reduction / 'bld1'
- `setAbilitySpeedIncrease(int level, real value)`
  % Ability Speed Increase / 'bld8'
- `setMovementSpeedreduction(int level, real value)`
  % Movement Speed reduction / 'bld2'
- `setDamageReflection(int level, real value)`
  % Damage Reflection / 'bld6'
- `setFlatDamageReflection(int level, real value)`
- `setOnDamageTakenBonusDuration(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetSweepRemainingCooldownReductionOnHit(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`
- `presetAbilitySpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedreduction(RealLevelClosure lc)`
- `presetDamageReflection(RealLevelClosure lc)`
- `presetFlatDamageReflection(RealLevelClosure lc)`
- `presetOnDamageTakenBonusDuration(RealLevelClosure lc)`

### AbilityDefinitionUndyingDefianceTalent3

```wurst
public class AbilityDefinitionUndyingDefianceTalent3 extends AbilityDefinition
```

'AUb3' / [AbilityIds.undyingDefianceTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-undyingDefianceTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
  % Attack Speed Increase / 'bld3'
- `setSweepRemainingCooldownReductionOnHit(int level, real value)`
- `setDamageReduction(int level, real value)`
  % Damage Reduction / 'bld1'
- `setAbilitySpeedIncrease(int level, real value)`
  % Ability Speed Increase / 'bld8'
- `setMovementSpeedreduction(int level, real value)`
  % Movement Speed reduction / 'bld2'
- `setDamageReflection(int level, real value)`
  % Damage Reflection / 'bld6'
- `setFlatDamageReflection(int level, real value)`
- `setOnDamageTakenBonusDuration(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetSweepRemainingCooldownReductionOnHit(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`
- `presetAbilitySpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedreduction(RealLevelClosure lc)`
- `presetDamageReflection(RealLevelClosure lc)`
- `presetFlatDamageReflection(RealLevelClosure lc)`
- `presetOnDamageTakenBonusDuration(RealLevelClosure lc)`

### AbilityDefinitionUndyingDefianceUndead

```wurst
public class AbilityDefinitionUndyingDefianceUndead extends AbilityDefinition
```

'AUbd' / [AbilityIds.undyingDefianceUndead](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-undyingDefianceUndead)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
  % Attack Speed Increase / 'bld3'
- `setSweepRemainingCooldownReductionOnHit(int level, real value)`
- `setDamageReduction(int level, real value)`
  % Damage Reduction / 'bld1'
- `setAbilitySpeedIncrease(int level, real value)`
  % Ability Speed Increase / 'bld8'
- `setMovementSpeedreduction(int level, real value)`
  % Movement Speed reduction / 'bld2'
- `setDamageReflection(int level, real value)`
  % Damage Reflection / 'bld6'
- `setFlatDamageReflection(int level, real value)`
- `setOnDamageTakenBonusDuration(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetSweepRemainingCooldownReductionOnHit(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`
- `presetAbilitySpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedreduction(RealLevelClosure lc)`
- `presetDamageReflection(RealLevelClosure lc)`
- `presetFlatDamageReflection(RealLevelClosure lc)`
- `presetOnDamageTakenBonusDuration(RealLevelClosure lc)`

### AbilityDefinitionBatteringRam

```wurst
public class AbilityDefinitionBatteringRam extends AbilityDefinition
```

'AUbr' / [AbilityIds.batteringRam](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-batteringRam)

**Members:**

- `construct(int newAbilityId)`
- `setBonusDamage(int level, real value)`
- `setDashSpeed(int level, real value)`
- `setTargetIntersectRadius(int level, real value)`
- `setRemoveBuffsOnAbilityStart(int level, bool value)`
- `setChargesRegenTime(int level, real value)`
- `setBonusCriticalStrike(int level, real value)`
- `setMaxCharges(int level, int value)`
- `setDashDamage(int level, real value)`
- `setBonusDamageDuration(int level, real value)`
- `presetBonusDamage(RealLevelClosure lc)`
- `presetDashSpeed(RealLevelClosure lc)`
- `presetTargetIntersectRadius(RealLevelClosure lc)`
- `presetRemoveBuffsOnAbilityStart(BooleanLevelClosure lc)`
- `presetChargesRegenTime(RealLevelClosure lc)`
- `presetBonusCriticalStrike(RealLevelClosure lc)`
- `presetMaxCharges(IntLevelClosure lc)`
- `presetDashDamage(RealLevelClosure lc)`
- `presetBonusDamageDuration(RealLevelClosure lc)`

### AbilityDefinitionDeathseekerBowTalent1

```wurst
public class AbilityDefinitionDeathseekerBowTalent1 extends AbilityDefinition
```

'AUd1' / [AbilityIds.deathseekerBowTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathseekerBowTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setMaxAttackSpeedStacks(int level, int value)`
- `setPercentDamage(int level, real value)`
- `setStacksRequired(int level, int value)`
- `setBonusAttackSpeedperAttack(int level, real value)`
- `setFlatDamage(int level, real value)`
- `presetMaxAttackSpeedStacks(IntLevelClosure lc)`
- `presetPercentDamage(RealLevelClosure lc)`
- `presetStacksRequired(IntLevelClosure lc)`
- `presetBonusAttackSpeedperAttack(RealLevelClosure lc)`
- `presetFlatDamage(RealLevelClosure lc)`

### AbilityDefinitionDeathseekerBowTalent2

```wurst
public class AbilityDefinitionDeathseekerBowTalent2 extends AbilityDefinition
```

'AUd2' / [AbilityIds.deathseekerBowTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathseekerBowTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setMaxAttackSpeedStacks(int level, int value)`
- `setPercentDamage(int level, real value)`
- `setStacksRequired(int level, int value)`
- `setBonusAttackSpeedperAttack(int level, real value)`
- `setFlatDamage(int level, real value)`
- `presetMaxAttackSpeedStacks(IntLevelClosure lc)`
- `presetPercentDamage(RealLevelClosure lc)`
- `presetStacksRequired(IntLevelClosure lc)`
- `presetBonusAttackSpeedperAttack(RealLevelClosure lc)`
- `presetFlatDamage(RealLevelClosure lc)`

### AbilityDefinitionDeathseekerBowTalent3

```wurst
public class AbilityDefinitionDeathseekerBowTalent3 extends AbilityDefinition
```

'AUd3' / [AbilityIds.deathseekerBowTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathseekerBowTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setMaxAttackSpeedStacks(int level, int value)`
- `setPercentDamage(int level, real value)`
- `setStacksRequired(int level, int value)`
- `setBonusAttackSpeedperAttack(int level, real value)`
- `setFlatDamage(int level, real value)`
- `presetMaxAttackSpeedStacks(IntLevelClosure lc)`
- `presetPercentDamage(RealLevelClosure lc)`
- `presetStacksRequired(IntLevelClosure lc)`
- `presetBonusAttackSpeedperAttack(RealLevelClosure lc)`
- `presetFlatDamage(RealLevelClosure lc)`

### AbilityDefinitionDeathseekerBow

```wurst
public class AbilityDefinitionDeathseekerBow extends AbilityDefinition
```

'AUdb' / [AbilityIds.deathseekerBow](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-deathseekerBow)

**Members:**

- `construct(int newAbilityId)`
- `setMaxAttackSpeedStacks(int level, int value)`
- `setPercentDamage(int level, real value)`
- `setStacksRequired(int level, int value)`
- `setBonusAttackSpeedperAttack(int level, real value)`
- `setFlatDamage(int level, real value)`
- `presetMaxAttackSpeedStacks(IntLevelClosure lc)`
- `presetPercentDamage(RealLevelClosure lc)`
- `presetStacksRequired(IntLevelClosure lc)`
- `presetBonusAttackSpeedperAttack(RealLevelClosure lc)`
- `presetFlatDamage(RealLevelClosure lc)`

### AbilityDefinitionBansheeSCallWailTalent1

```wurst
public class AbilityDefinitionBansheeSCallWailTalent1 extends AbilityDefinition
```

'AUi1' / [AbilityIds.bansheeSCallWailTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bansheeSCallWailTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSwarmUnits(int level, int value)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `setDamageReturnThreshold(int level, real value)`
- `setDamageReturnFactor(int level, real value)`
- `setSwarmUnitType(int level, string value)`
- `setFlatManaGain(int level, real value)`
- `setHealingRadius(int level, real value)`
- `presetNumberofSwarmUnits(IntLevelClosure lc)`
- `presetUnitReleaseIntervalseconds(RealLevelClosure lc)`
- `presetMaxSwarmUnitsPerTarget(IntLevelClosure lc)`
- `presetDamageReturnThreshold(RealLevelClosure lc)`
- `presetDamageReturnFactor(RealLevelClosure lc)`
- `presetSwarmUnitType(StringLevelClosure lc)`
- `presetFlatManaGain(RealLevelClosure lc)`
- `presetHealingRadius(RealLevelClosure lc)`

### AbilityDefinitionBansheeSCallWailTalent2

```wurst
public class AbilityDefinitionBansheeSCallWailTalent2 extends AbilityDefinition
```

'AUi2' / [AbilityIds.bansheeSCallWailTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bansheeSCallWailTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSwarmUnits(int level, int value)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `setDamageReturnThreshold(int level, real value)`
- `setDamageReturnFactor(int level, real value)`
- `setSwarmUnitType(int level, string value)`
- `setFlatManaGain(int level, real value)`
- `setHealingRadius(int level, real value)`
- `presetNumberofSwarmUnits(IntLevelClosure lc)`
- `presetUnitReleaseIntervalseconds(RealLevelClosure lc)`
- `presetMaxSwarmUnitsPerTarget(IntLevelClosure lc)`
- `presetDamageReturnThreshold(RealLevelClosure lc)`
- `presetDamageReturnFactor(RealLevelClosure lc)`
- `presetSwarmUnitType(StringLevelClosure lc)`
- `presetFlatManaGain(RealLevelClosure lc)`
- `presetHealingRadius(RealLevelClosure lc)`

### AbilityDefinitionBansheeSCallWailTalent3

```wurst
public class AbilityDefinitionBansheeSCallWailTalent3 extends AbilityDefinition
```

'AUi3' / [AbilityIds.bansheeSCallWailTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bansheeSCallWailTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSwarmUnits(int level, int value)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `setDamageReturnThreshold(int level, real value)`
- `setDamageReturnFactor(int level, real value)`
- `setSwarmUnitType(int level, string value)`
- `setFlatManaGain(int level, real value)`
- `setHealingRadius(int level, real value)`
- `presetNumberofSwarmUnits(IntLevelClosure lc)`
- `presetUnitReleaseIntervalseconds(RealLevelClosure lc)`
- `presetMaxSwarmUnitsPerTarget(IntLevelClosure lc)`
- `presetDamageReturnThreshold(RealLevelClosure lc)`
- `presetDamageReturnFactor(RealLevelClosure lc)`
- `presetSwarmUnitType(StringLevelClosure lc)`
- `presetFlatManaGain(RealLevelClosure lc)`
- `presetHealingRadius(RealLevelClosure lc)`

### AbilityDefinitionSoulLanternTalent1

```wurst
public class AbilityDefinitionSoulLanternTalent1 extends AbilityDefinition
```

'AUl1' / [AbilityIds.soulLanternTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-soulLanternTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setEnemyManaPerSecond(int level, real value)`
- `setAllySpellAmpPercent(int level, real value)`
- `setAllySpellResistPercent(int level, real value)`
- `setAllySpellCritHitPercent(int level, real value)`
- `setAllyMovementSpeedPercent(int level, real value)`
- `setEnemyDamagePerSecond(int level, real value)`
- `setAllyHealingPerSecond(int level, real value)`
- `setAllyManaPerSecond(int level, real value)`
- `presetEnemyManaPerSecond(RealLevelClosure lc)`
- `presetAllySpellAmpPercent(RealLevelClosure lc)`
- `presetAllySpellResistPercent(RealLevelClosure lc)`
- `presetAllySpellCritHitPercent(RealLevelClosure lc)`
- `presetAllyMovementSpeedPercent(RealLevelClosure lc)`
- `presetEnemyDamagePerSecond(RealLevelClosure lc)`
- `presetAllyHealingPerSecond(RealLevelClosure lc)`
- `presetAllyManaPerSecond(RealLevelClosure lc)`

### AbilityDefinitionSoulLanternTalent2

```wurst
public class AbilityDefinitionSoulLanternTalent2 extends AbilityDefinition
```

'AUl2' / [AbilityIds.soulLanternTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-soulLanternTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setEnemyManaPerSecond(int level, real value)`
- `setAllySpellAmpPercent(int level, real value)`
- `setAllySpellResistPercent(int level, real value)`
- `setAllySpellCritHitPercent(int level, real value)`
- `setAllyMovementSpeedPercent(int level, real value)`
- `setEnemyDamagePerSecond(int level, real value)`
- `setAllyHealingPerSecond(int level, real value)`
- `setAllyManaPerSecond(int level, real value)`
- `presetEnemyManaPerSecond(RealLevelClosure lc)`
- `presetAllySpellAmpPercent(RealLevelClosure lc)`
- `presetAllySpellResistPercent(RealLevelClosure lc)`
- `presetAllySpellCritHitPercent(RealLevelClosure lc)`
- `presetAllyMovementSpeedPercent(RealLevelClosure lc)`
- `presetEnemyDamagePerSecond(RealLevelClosure lc)`
- `presetAllyHealingPerSecond(RealLevelClosure lc)`
- `presetAllyManaPerSecond(RealLevelClosure lc)`

### AbilityDefinitionSoulLanternTalent3

```wurst
public class AbilityDefinitionSoulLanternTalent3 extends AbilityDefinition
```

'AUl3' / [AbilityIds.soulLanternTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-soulLanternTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setEnemyManaPerSecond(int level, real value)`
- `setAllySpellAmpPercent(int level, real value)`
- `setAllySpellResistPercent(int level, real value)`
- `setAllySpellCritHitPercent(int level, real value)`
- `setAllyMovementSpeedPercent(int level, real value)`
- `setEnemyDamagePerSecond(int level, real value)`
- `setAllyHealingPerSecond(int level, real value)`
- `setAllyManaPerSecond(int level, real value)`
- `presetEnemyManaPerSecond(RealLevelClosure lc)`
- `presetAllySpellAmpPercent(RealLevelClosure lc)`
- `presetAllySpellResistPercent(RealLevelClosure lc)`
- `presetAllySpellCritHitPercent(RealLevelClosure lc)`
- `presetAllyMovementSpeedPercent(RealLevelClosure lc)`
- `presetEnemyDamagePerSecond(RealLevelClosure lc)`
- `presetAllyHealingPerSecond(RealLevelClosure lc)`
- `presetAllyManaPerSecond(RealLevelClosure lc)`

### AbilityDefinitionSoulLantern

```wurst
public class AbilityDefinitionSoulLantern extends AbilityDefinition
```

'AUla' / [AbilityIds.soulLantern](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-soulLantern)

**Members:**

- `construct(int newAbilityId)`
- `setEnemyManaPerSecond(int level, real value)`
- `setAllySpellAmpPercent(int level, real value)`
- `setAllySpellResistPercent(int level, real value)`
- `setAllySpellCritHitPercent(int level, real value)`
- `setAllyMovementSpeedPercent(int level, real value)`
- `setEnemyDamagePerSecond(int level, real value)`
- `setAllyHealingPerSecond(int level, real value)`
- `setAllyManaPerSecond(int level, real value)`
- `presetEnemyManaPerSecond(RealLevelClosure lc)`
- `presetAllySpellAmpPercent(RealLevelClosure lc)`
- `presetAllySpellResistPercent(RealLevelClosure lc)`
- `presetAllySpellCritHitPercent(RealLevelClosure lc)`
- `presetAllyMovementSpeedPercent(RealLevelClosure lc)`
- `presetEnemyDamagePerSecond(RealLevelClosure lc)`
- `presetAllyHealingPerSecond(RealLevelClosure lc)`
- `presetAllyManaPerSecond(RealLevelClosure lc)`

### AbilityDefinitionBatteringRamTalent1

```wurst
public class AbilityDefinitionBatteringRamTalent1 extends AbilityDefinition
```

'AUr1' / [AbilityIds.batteringRamTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-batteringRamTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setBonusDamage(int level, real value)`
- `setDashSpeed(int level, real value)`
- `setTargetIntersectRadius(int level, real value)`
- `setRemoveBuffsOnAbilityStart(int level, bool value)`
- `setChargesRegenTime(int level, real value)`
- `setBonusCriticalStrike(int level, real value)`
- `setMaxCharges(int level, int value)`
- `setDashDamage(int level, real value)`
- `setBonusDamageDuration(int level, real value)`
- `presetBonusDamage(RealLevelClosure lc)`
- `presetDashSpeed(RealLevelClosure lc)`
- `presetTargetIntersectRadius(RealLevelClosure lc)`
- `presetRemoveBuffsOnAbilityStart(BooleanLevelClosure lc)`
- `presetChargesRegenTime(RealLevelClosure lc)`
- `presetBonusCriticalStrike(RealLevelClosure lc)`
- `presetMaxCharges(IntLevelClosure lc)`
- `presetDashDamage(RealLevelClosure lc)`
- `presetBonusDamageDuration(RealLevelClosure lc)`

### AbilityDefinitionBatteringRamTalent2

```wurst
public class AbilityDefinitionBatteringRamTalent2 extends AbilityDefinition
```

'AUr2' / [AbilityIds.batteringRamTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-batteringRamTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setBonusDamage(int level, real value)`
- `setDashSpeed(int level, real value)`
- `setTargetIntersectRadius(int level, real value)`
- `setRemoveBuffsOnAbilityStart(int level, bool value)`
- `setChargesRegenTime(int level, real value)`
- `setBonusCriticalStrike(int level, real value)`
- `setMaxCharges(int level, int value)`
- `setDashDamage(int level, real value)`
- `setBonusDamageDuration(int level, real value)`
- `presetBonusDamage(RealLevelClosure lc)`
- `presetDashSpeed(RealLevelClosure lc)`
- `presetTargetIntersectRadius(RealLevelClosure lc)`
- `presetRemoveBuffsOnAbilityStart(BooleanLevelClosure lc)`
- `presetChargesRegenTime(RealLevelClosure lc)`
- `presetBonusCriticalStrike(RealLevelClosure lc)`
- `presetMaxCharges(IntLevelClosure lc)`
- `presetDashDamage(RealLevelClosure lc)`
- `presetBonusDamageDuration(RealLevelClosure lc)`

### AbilityDefinitionBatteringRamTalent3

```wurst
public class AbilityDefinitionBatteringRamTalent3 extends AbilityDefinition
```

'AUr3' / [AbilityIds.batteringRamTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-batteringRamTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setBonusDamage(int level, real value)`
- `setDashSpeed(int level, real value)`
- `setTargetIntersectRadius(int level, real value)`
- `setRemoveBuffsOnAbilityStart(int level, bool value)`
- `setChargesRegenTime(int level, real value)`
- `setBonusCriticalStrike(int level, real value)`
- `setMaxCharges(int level, int value)`
- `setDashDamage(int level, real value)`
- `setBonusDamageDuration(int level, real value)`
- `presetBonusDamage(RealLevelClosure lc)`
- `presetDashSpeed(RealLevelClosure lc)`
- `presetTargetIntersectRadius(RealLevelClosure lc)`
- `presetRemoveBuffsOnAbilityStart(BooleanLevelClosure lc)`
- `presetChargesRegenTime(RealLevelClosure lc)`
- `presetBonusCriticalStrike(RealLevelClosure lc)`
- `presetMaxCharges(IntLevelClosure lc)`
- `presetDashDamage(RealLevelClosure lc)`
- `presetBonusDamageDuration(RealLevelClosure lc)`

### AbilityDefinitionRelentlessCleaveTalent1

```wurst
public class AbilityDefinitionRelentlessCleaveTalent1 extends AbilityDefinition
```

'AUs1' / [AbilityIds.relentlessCleaveTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-relentlessCleaveTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setHeroDurationAttackSpeedReduction(int level, real value)`
- `setDurationAttackSpeedReduction(int level, real value)`
- `setDurationDamageByTargetMaxHealth(int level, real value)`
- `setArmorReduction(int level, real value)`
- `setCooldownReductionOnHit(int level, real value)`
- `setHeroDurationArmorReduction(int level, real value)`
- `setAttackAngle(int level, real value)`
- `setHealingPerTargetHit(int level, real value)`
- `setDamageByTargetMaxHealth(int level, real value)`
  Damage By Target Max Health (%) / 'swpa'
- `setMaxTargetHit(int level, int value)`
- `setDamageStrengthModifier(int level, int value)`
  Damage Strength Modifier (%) / 'swp5'
- `setAttackDistance(int level, real value)`
- `setHeroDurationDamageByTargetMaxHealth(int level, real value)`
- `setDurationArmorReduction(int level, real value)`
- `setDamageDelay(int level, real value)`
- `setAttackSpeedReduction(int level, int value)`
  Attack Speed Reduction (%) / 'swp9'
- `setDamage(int level, real value)`
- `presetHeroDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetArmorReduction(RealLevelClosure lc)`
- `presetCooldownReductionOnHit(RealLevelClosure lc)`
- `presetHeroDurationArmorReduction(RealLevelClosure lc)`
- `presetAttackAngle(RealLevelClosure lc)`
- `presetHealingPerTargetHit(RealLevelClosure lc)`
- `presetDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetMaxTargetHit(IntLevelClosure lc)`
- `presetDamageStrengthModifier(IntLevelClosure lc)`
- `presetAttackDistance(RealLevelClosure lc)`
- `presetHeroDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetDurationArmorReduction(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetAttackSpeedReduction(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionRelentlessCleaveTalent2

```wurst
public class AbilityDefinitionRelentlessCleaveTalent2 extends AbilityDefinition
```

'AUs2' / [AbilityIds.relentlessCleaveTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-relentlessCleaveTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setHeroDurationAttackSpeedReduction(int level, real value)`
- `setDurationAttackSpeedReduction(int level, real value)`
- `setDurationDamageByTargetMaxHealth(int level, real value)`
- `setArmorReduction(int level, real value)`
- `setCooldownReductionOnHit(int level, real value)`
- `setHeroDurationArmorReduction(int level, real value)`
- `setAttackAngle(int level, real value)`
- `setHealingPerTargetHit(int level, real value)`
- `setDamageByTargetMaxHealth(int level, real value)`
  Damage By Target Max Health (%) / 'swpa'
- `setMaxTargetHit(int level, int value)`
- `setDamageStrengthModifier(int level, int value)`
  Damage Strength Modifier (%) / 'swp5'
- `setAttackDistance(int level, real value)`
- `setHeroDurationDamageByTargetMaxHealth(int level, real value)`
- `setDurationArmorReduction(int level, real value)`
- `setDamageDelay(int level, real value)`
- `setAttackSpeedReduction(int level, int value)`
  Attack Speed Reduction (%) / 'swp9'
- `setDamage(int level, real value)`
- `presetHeroDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetArmorReduction(RealLevelClosure lc)`
- `presetCooldownReductionOnHit(RealLevelClosure lc)`
- `presetHeroDurationArmorReduction(RealLevelClosure lc)`
- `presetAttackAngle(RealLevelClosure lc)`
- `presetHealingPerTargetHit(RealLevelClosure lc)`
- `presetDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetMaxTargetHit(IntLevelClosure lc)`
- `presetDamageStrengthModifier(IntLevelClosure lc)`
- `presetAttackDistance(RealLevelClosure lc)`
- `presetHeroDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetDurationArmorReduction(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetAttackSpeedReduction(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionRelentlessCleaveTalent3

```wurst
public class AbilityDefinitionRelentlessCleaveTalent3 extends AbilityDefinition
```

'AUs3' / [AbilityIds.relentlessCleaveTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-relentlessCleaveTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setHeroDurationAttackSpeedReduction(int level, real value)`
- `setDurationAttackSpeedReduction(int level, real value)`
- `setDurationDamageByTargetMaxHealth(int level, real value)`
- `setArmorReduction(int level, real value)`
- `setCooldownReductionOnHit(int level, real value)`
- `setHeroDurationArmorReduction(int level, real value)`
- `setAttackAngle(int level, real value)`
- `setHealingPerTargetHit(int level, real value)`
- `setDamageByTargetMaxHealth(int level, real value)`
  Damage By Target Max Health (%) / 'swpa'
- `setMaxTargetHit(int level, int value)`
- `setDamageStrengthModifier(int level, int value)`
  Damage Strength Modifier (%) / 'swp5'
- `setAttackDistance(int level, real value)`
- `setHeroDurationDamageByTargetMaxHealth(int level, real value)`
- `setDurationArmorReduction(int level, real value)`
- `setDamageDelay(int level, real value)`
- `setAttackSpeedReduction(int level, int value)`
  Attack Speed Reduction (%) / 'swp9'
- `setDamage(int level, real value)`
- `presetHeroDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetArmorReduction(RealLevelClosure lc)`
- `presetCooldownReductionOnHit(RealLevelClosure lc)`
- `presetHeroDurationArmorReduction(RealLevelClosure lc)`
- `presetAttackAngle(RealLevelClosure lc)`
- `presetHealingPerTargetHit(RealLevelClosure lc)`
- `presetDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetMaxTargetHit(IntLevelClosure lc)`
- `presetDamageStrengthModifier(IntLevelClosure lc)`
- `presetAttackDistance(RealLevelClosure lc)`
- `presetHeroDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetDurationArmorReduction(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetAttackSpeedReduction(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionThornyShieldStacking

```wurst
public class AbilityDefinitionThornyShieldStacking extends AbilityDefinition
```

'AUss' / [AbilityIds.thornyShieldStacking](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-thornyShieldStacking)

**Members:**

- `construct(int newAbilityId)`
- `setReceivedDamageFactor(int level, real value)`
- `setReturnedDamageFactor(int level, real value)`
- `setDefenseBonus(int level, real value)`
- `presetReceivedDamageFactor(RealLevelClosure lc)`
- `presetReturnedDamageFactor(RealLevelClosure lc)`
- `presetDefenseBonus(RealLevelClosure lc)`

### AbilityDefinitionRelentlessCleave

```wurst
public class AbilityDefinitionRelentlessCleave extends AbilityDefinition
```

'AUsw' / [AbilityIds.relentlessCleave](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-relentlessCleave)

**Members:**

- `construct(int newAbilityId)`
- `setHeroDurationAttackSpeedReduction(int level, real value)`
- `setDurationAttackSpeedReduction(int level, real value)`
- `setDurationDamageByTargetMaxHealth(int level, real value)`
- `setArmorReduction(int level, real value)`
- `setCooldownReductionOnHit(int level, real value)`
- `setHeroDurationArmorReduction(int level, real value)`
- `setAttackAngle(int level, real value)`
- `setHealingPerTargetHit(int level, real value)`
- `setDamageByTargetMaxHealth(int level, real value)`
  Damage By Target Max Health (%) / 'swpa'
- `setMaxTargetHit(int level, int value)`
- `setDamageStrengthModifier(int level, int value)`
  Damage Strength Modifier (%) / 'swp5'
- `setAttackDistance(int level, real value)`
- `setHeroDurationDamageByTargetMaxHealth(int level, real value)`
- `setDurationArmorReduction(int level, real value)`
- `setDamageDelay(int level, real value)`
- `setAttackSpeedReduction(int level, int value)`
  Attack Speed Reduction (%) / 'swp9'
- `setDamage(int level, real value)`
- `presetHeroDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationAttackSpeedReduction(RealLevelClosure lc)`
- `presetDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetArmorReduction(RealLevelClosure lc)`
- `presetCooldownReductionOnHit(RealLevelClosure lc)`
- `presetHeroDurationArmorReduction(RealLevelClosure lc)`
- `presetAttackAngle(RealLevelClosure lc)`
- `presetHealingPerTargetHit(RealLevelClosure lc)`
- `presetDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetMaxTargetHit(IntLevelClosure lc)`
- `presetDamageStrengthModifier(IntLevelClosure lc)`
- `presetAttackDistance(RealLevelClosure lc)`
- `presetHeroDurationDamageByTargetMaxHealth(RealLevelClosure lc)`
- `presetDurationArmorReduction(RealLevelClosure lc)`
- `presetDamageDelay(RealLevelClosure lc)`
- `presetAttackSpeedReduction(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionGrimConvictionTalent1

```wurst
public class AbilityDefinitionGrimConvictionTalent1 extends AbilityDefinition
```

'AUv1' / [AbilityIds.grimConvictionTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-grimConvictionTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setHealthCost(int level, int value)`
  % Health Cost / 'uvg1'
- `setBonusSpellVamp(int level, int value)`
  % Bonus Spell Vamp / 'uvg5'
- `setBonusstrength(int level, int value)`
- `setBonusLifeSteal(int level, int value)`
  % Bonus Life Steal / 'uvg4'
- `setDoublebonusbellowhealth(int level, int value)`
  Double bonus bellow health % / 'uvg6'
- `setBonusResolve(int level, int value)`
  % Bonus Resolve / 'uvg3'
- `presetHealthCost(IntLevelClosure lc)`
- `presetBonusSpellVamp(IntLevelClosure lc)`
- `presetBonusstrength(IntLevelClosure lc)`
- `presetBonusLifeSteal(IntLevelClosure lc)`
- `presetDoublebonusbellowhealth(IntLevelClosure lc)`
- `presetBonusResolve(IntLevelClosure lc)`

### AbilityDefinitionGrimConvictionTalent2

```wurst
public class AbilityDefinitionGrimConvictionTalent2 extends AbilityDefinition
```

'AUv2' / [AbilityIds.grimConvictionTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-grimConvictionTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setHealthCost(int level, int value)`
  % Health Cost / 'uvg1'
- `setBonusSpellVamp(int level, int value)`
  % Bonus Spell Vamp / 'uvg5'
- `setBonusstrength(int level, int value)`
- `setBonusLifeSteal(int level, int value)`
  % Bonus Life Steal / 'uvg4'
- `setDoublebonusbellowhealth(int level, int value)`
  Double bonus bellow health % / 'uvg6'
- `setBonusResolve(int level, int value)`
  % Bonus Resolve / 'uvg3'
- `presetHealthCost(IntLevelClosure lc)`
- `presetBonusSpellVamp(IntLevelClosure lc)`
- `presetBonusstrength(IntLevelClosure lc)`
- `presetBonusLifeSteal(IntLevelClosure lc)`
- `presetDoublebonusbellowhealth(IntLevelClosure lc)`
- `presetBonusResolve(IntLevelClosure lc)`

### AbilityDefinitionGrimConvictionTalent3

```wurst
public class AbilityDefinitionGrimConvictionTalent3 extends AbilityDefinition
```

'AUv3' / [AbilityIds.grimConvictionTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-grimConvictionTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setHealthCost(int level, int value)`
  % Health Cost / 'uvg1'
- `setBonusSpellVamp(int level, int value)`
  % Bonus Spell Vamp / 'uvg5'
- `setBonusstrength(int level, int value)`
- `setBonusLifeSteal(int level, int value)`
  % Bonus Life Steal / 'uvg4'
- `setDoublebonusbellowhealth(int level, int value)`
  Double bonus bellow health % / 'uvg6'
- `setBonusResolve(int level, int value)`
  % Bonus Resolve / 'uvg3'
- `presetHealthCost(IntLevelClosure lc)`
- `presetBonusSpellVamp(IntLevelClosure lc)`
- `presetBonusstrength(IntLevelClosure lc)`
- `presetBonusLifeSteal(IntLevelClosure lc)`
- `presetDoublebonusbellowhealth(IntLevelClosure lc)`
- `presetBonusResolve(IntLevelClosure lc)`

### AbilityDefinitionUndeadVengeanceAkaGrimConviction

```wurst
public class AbilityDefinitionUndeadVengeanceAkaGrimConviction extends AbilityDefinition
```

'AUvg' / [AbilityIds.undeadVengeanceAkaGrimConviction](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-undeadVengeanceAkaGrimConviction)

**Members:**

- `construct(int newAbilityId)`
- `setHealthCost(int level, int value)`
  % Health Cost / 'uvg1'
- `setBonusSpellVamp(int level, int value)`
  % Bonus Spell Vamp / 'uvg5'
- `setBonusstrength(int level, int value)`
- `setBonusLifeSteal(int level, int value)`
  % Bonus Life Steal / 'uvg4'
- `setDoublebonusbellowhealth(int level, int value)`
  Double bonus bellow health % / 'uvg6'
- `setBonusResolve(int level, int value)`
  % Bonus Resolve / 'uvg3'
- `presetHealthCost(IntLevelClosure lc)`
- `presetBonusSpellVamp(IntLevelClosure lc)`
- `presetBonusstrength(IntLevelClosure lc)`
- `presetBonusLifeSteal(IntLevelClosure lc)`
- `presetDoublebonusbellowhealth(IntLevelClosure lc)`
- `presetBonusResolve(IntLevelClosure lc)`

### AbilityDefinitionWitheringFireTalent1

```wurst
public class AbilityDefinitionWitheringFireTalent1 extends AbilityDefinition
```

'AUw1' / [AbilityIds.witheringFireTalent1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-witheringFireTalent1)

**Members:**

- `construct(int newAbilityId)`
- `setMaxCharges(int level, int value)`
- `setChargeRegenTime(int level, real value)`
- `setDamage(int level, real value)`
- `setCooldownReductionOnAutoAttack(int level, real value)`
- `setTargetArmorReduction(int level, int value)`
- `presetMaxCharges(IntLevelClosure lc)`
- `presetChargeRegenTime(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetCooldownReductionOnAutoAttack(RealLevelClosure lc)`
- `presetTargetArmorReduction(IntLevelClosure lc)`

### AbilityDefinitionWitheringFireTalent2

```wurst
public class AbilityDefinitionWitheringFireTalent2 extends AbilityDefinition
```

'AUw2' / [AbilityIds.witheringFireTalent2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-witheringFireTalent2)

**Members:**

- `construct(int newAbilityId)`
- `setMaxCharges(int level, int value)`
- `setChargeRegenTime(int level, real value)`
- `setDamage(int level, real value)`
- `setCooldownReductionOnAutoAttack(int level, real value)`
- `setTargetArmorReduction(int level, int value)`
- `presetMaxCharges(IntLevelClosure lc)`
- `presetChargeRegenTime(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetCooldownReductionOnAutoAttack(RealLevelClosure lc)`
- `presetTargetArmorReduction(IntLevelClosure lc)`

### AbilityDefinitionWitheringFireTalent3

```wurst
public class AbilityDefinitionWitheringFireTalent3 extends AbilityDefinition
```

'AUw3' / [AbilityIds.witheringFireTalent3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-witheringFireTalent3)

**Members:**

- `construct(int newAbilityId)`
- `setMaxCharges(int level, int value)`
- `setChargeRegenTime(int level, real value)`
- `setDamage(int level, real value)`
- `setCooldownReductionOnAutoAttack(int level, real value)`
- `setTargetArmorReduction(int level, int value)`
- `presetMaxCharges(IntLevelClosure lc)`
- `presetChargeRegenTime(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetCooldownReductionOnAutoAttack(RealLevelClosure lc)`
- `presetTargetArmorReduction(IntLevelClosure lc)`

### AbilityDefinitionBansheeSCallWail

```wurst
public class AbilityDefinitionBansheeSCallWail extends AbilityDefinition
```

'AUwc' / [AbilityIds.bansheeSCallWail](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bansheeSCallWail)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSwarmUnits(int level, int value)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `setDamageReturnThreshold(int level, real value)`
- `setDamageReturnFactor(int level, real value)`
- `setSwarmUnitType(int level, string value)`
- `setFlatManaGain(int level, real value)`
- `setHealingRadius(int level, real value)`
- `presetNumberofSwarmUnits(IntLevelClosure lc)`
- `presetUnitReleaseIntervalseconds(RealLevelClosure lc)`
- `presetMaxSwarmUnitsPerTarget(IntLevelClosure lc)`
- `presetDamageReturnThreshold(RealLevelClosure lc)`
- `presetDamageReturnFactor(RealLevelClosure lc)`
- `presetSwarmUnitType(StringLevelClosure lc)`
- `presetFlatManaGain(RealLevelClosure lc)`
- `presetHealingRadius(RealLevelClosure lc)`

### AbilityDefinitionWitheringFire

```wurst
public class AbilityDefinitionWitheringFire extends AbilityDefinition
```

'AUwf' / [AbilityIds.witheringFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-witheringFire)

**Members:**

- `construct(int newAbilityId)`
- `setMaxCharges(int level, int value)`
- `setChargeRegenTime(int level, real value)`
- `setDamage(int level, real value)`
- `setCooldownReductionOnAutoAttack(int level, real value)`
- `setTargetArmorReduction(int level, int value)`
- `presetMaxCharges(IntLevelClosure lc)`
- `presetChargeRegenTime(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetCooldownReductionOnAutoAttack(RealLevelClosure lc)`
- `presetTargetArmorReduction(IntLevelClosure lc)`

### AbilityDefinitionItemVampiricAura4

```wurst
public class AbilityDefinitionItemVampiricAura4 extends AbilityDefinition
```

'AVAq' / [AbilityIds.itemVampiricAura4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemVampiricAura4)

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageStolen(int level, real value)`
  Attack Damage Stolen (%) / 'Uav1'
- `presetAttackDamageStolen(RealLevelClosure lc)`

### AbilityDefinitionInquisitorFlamingHandsVFX

```wurst
public class AbilityDefinitionInquisitorFlamingHandsVFX extends AbilityDefinition
```

'AViq' / [AbilityIds.inquisitorFlamingHandsVFX](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inquisitorFlamingHandsVFX)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionShopBagVFX

```wurst
public class AbilityDefinitionShopBagVFX extends AbilityDefinition
```

'AVsb' / [AbilityIds.shopBagVFX](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shopBagVFX)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionItemAllStatsPlus10

```wurst
public class AbilityDefinitionItemAllStatsPlus10 extends AbilityDefinition
```

'AX10' / [AbilityIds.itemAllStatsPlus10](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAllStatsPlus10)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemArmorSCHeal

```wurst
public class AbilityDefinitionItemArmorSCHeal extends AbilityDefinition
```

'Aac1' / [AbilityIds.itemArmorSCHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorSCHeal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionItemArmorSCAttack

```wurst
public class AbilityDefinitionItemArmorSCAttack extends AbilityDefinition
```

'Aac2' / [AbilityIds.itemArmorSCAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorSCAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemChillAttack3

```wurst
public class AbilityDefinitionItemChillAttack3 extends AbilityDefinition
```

'Aac3' / [AbilityIds.itemChillAttack3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemChillAttack3)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemChillAttack5

```wurst
public class AbilityDefinitionItemChillAttack5 extends AbilityDefinition
```

'Aac5' / [AbilityIds.itemChillAttack5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemChillAttack5)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionRaiseTheStandardAura

```wurst
public class AbilityDefinitionRaiseTheStandardAura extends AbilityDefinition
```

'Aaca' / [AbilityIds.raiseTheStandardAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-raiseTheStandardAura)

**Members:**

- `construct(int newAbilityId)`
- `setGivenAbilities(int level, string value)`
- `presetGivenAbilities(StringLevelClosure lc)`

### AbilityDefinitionCurseAnyaBanshee

```wurst
public class AbilityDefinitionCurseAnyaBanshee extends AbilityDefinition
```

'Aacr' / [AbilityIds.curseAnyaBanshee](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-curseAnyaBanshee)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionItemAuraOfDarkness

```wurst
public class AbilityDefinitionItemAuraOfDarkness extends AbilityDefinition
```

'Aadx' / [AbilityIds.itemAuraOfDarkness](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAuraOfDarkness)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemAgitatingTotem

```wurst
public class AbilityDefinitionItemAgitatingTotem extends AbilityDefinition
```

'Aagt' / [AbilityIds.itemAgitatingTotem](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAgitatingTotem)

**Members:**

- `construct(int newAbilityId)`
- `setScalingFactor(int level, real value)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Blo1'
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Blo2'
- `presetScalingFactor(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemArmorCorruptAttack2

```wurst
public class AbilityDefinitionItemArmorCorruptAttack2 extends AbilityDefinition
```

'Aah2' / [AbilityIds.itemArmorCorruptAttack2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorCorruptAttack2)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemArmorCorruptAttack3

```wurst
public class AbilityDefinitionItemArmorCorruptAttack3 extends AbilityDefinition
```

'Aah3' / [AbilityIds.itemArmorCorruptAttack3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorCorruptAttack3)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemArmorCorruptAttack5

```wurst
public class AbilityDefinitionItemArmorCorruptAttack5 extends AbilityDefinition
```

'Aah5' / [AbilityIds.itemArmorCorruptAttack5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorCorruptAttack5)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionOnBasicAttackSample

```wurst
public class AbilityDefinitionOnBasicAttackSample extends AbilityDefinition
```

'Aals' / [AbilityIds.onBasicAttackSample](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-onBasicAttackSample)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionAttributeModifierSkillRebirth

```wurst
public class AbilityDefinitionAttributeModifierSkillRebirth extends AbilityDefinition
```

'Aaml' / [AbilityIds.attributeModifierSkillRebirth](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attributeModifierSkillRebirth)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemArmorOfReanimationSummon

```wurst
public class AbilityDefinitionItemArmorOfReanimationSummon extends AbilityDefinition
```

'Aar1' / [AbilityIds.itemArmorOfReanimationSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorOfReanimationSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionItemArmorOfReanimationAttack

```wurst
public class AbilityDefinitionItemArmorOfReanimationAttack extends AbilityDefinition
```

'Aar2' / [AbilityIds.itemArmorOfReanimationAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorOfReanimationAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemArmorCorruptSpell2

```wurst
public class AbilityDefinitionItemArmorCorruptSpell2 extends AbilityDefinition
```

'Aas2' / [AbilityIds.itemArmorCorruptSpell2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorCorruptSpell2)

**Members:**

- `construct(int newAbilityId)`
- `setSecondaryDamage(int level, real value)`
- `setArmorPenalty(int level, int value)`
- `setPrimaryDamage(int level, real value)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nab1'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nab2'
- `setDamageInterval(int level, real value)`
- `presetSecondaryDamage(RealLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetPrimaryDamage(RealLevelClosure lc)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionItemArmorCorruptSpell3

```wurst
public class AbilityDefinitionItemArmorCorruptSpell3 extends AbilityDefinition
```

'Aas3' / [AbilityIds.itemArmorCorruptSpell3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorCorruptSpell3)

**Members:**

- `construct(int newAbilityId)`
- `setSecondaryDamage(int level, real value)`
- `setArmorPenalty(int level, int value)`
- `setPrimaryDamage(int level, real value)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nab1'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nab2'
- `setDamageInterval(int level, real value)`
- `presetSecondaryDamage(RealLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetPrimaryDamage(RealLevelClosure lc)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionItemArmorCorruptSpell5

```wurst
public class AbilityDefinitionItemArmorCorruptSpell5 extends AbilityDefinition
```

'Aas5' / [AbilityIds.itemArmorCorruptSpell5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorCorruptSpell5)

**Members:**

- `construct(int newAbilityId)`
- `setSecondaryDamage(int level, real value)`
- `setArmorPenalty(int level, int value)`
- `setPrimaryDamage(int level, real value)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nab1'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nab2'
- `setDamageInterval(int level, real value)`
- `presetSecondaryDamage(RealLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetPrimaryDamage(RealLevelClosure lc)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionArcaneSpellblade

```wurst
public class AbilityDefinitionArcaneSpellblade extends AbilityDefinition
```

'Aasb' / [AbilityIds.arcaneSpellblade](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-arcaneSpellblade)

**Members:**

- `construct(int newAbilityId)`
- `setInitialDamage(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `presetInitialDamage(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionRaiseTheStandardSpellCritical

```wurst
public class AbilityDefinitionRaiseTheStandardSpellCritical extends AbilityDefinition
```

'Aasc' / [AbilityIds.raiseTheStandardSpellCritical](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-raiseTheStandardSpellCritical)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemAvianaSTalonsMana

```wurst
public class AbilityDefinitionItemAvianaSTalonsMana extends AbilityDefinition
```

'Aat1' / [AbilityIds.itemAvianaSTalonsMana](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAvianaSTalonsMana)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemAvianaSTalonsAttack1

```wurst
public class AbilityDefinitionItemAvianaSTalonsAttack1 extends AbilityDefinition
```

'Aat2' / [AbilityIds.itemAvianaSTalonsAttack1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAvianaSTalonsAttack1)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemAvianaSTalonsAttack2

```wurst
public class AbilityDefinitionItemAvianaSTalonsAttack2 extends AbilityDefinition
```

'Aat3' / [AbilityIds.itemAvianaSTalonsAttack2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemAvianaSTalonsAttack2)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionRaiseTheStandardCritical

```wurst
public class AbilityDefinitionRaiseTheStandardCritical extends AbilityDefinition
```

'Aaxr' / [AbilityIds.raiseTheStandardCritical](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-raiseTheStandardCritical)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionButchersAura1

```wurst
public class AbilityDefinitionButchersAura1 extends AbilityDefinition
```

'Aba1' / [AbilityIds.butchersAura1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-butchersAura1)

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageStolen(int level, real value)`
  Attack Damage Stolen (%) / 'Uav1'
- `presetAttackDamageStolen(RealLevelClosure lc)`

### AbilityDefinitionButchersAura2

```wurst
public class AbilityDefinitionButchersAura2 extends AbilityDefinition
```

'Aba2' / [AbilityIds.butchersAura2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-butchersAura2)

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageStolen(int level, real value)`
  Attack Damage Stolen (%) / 'Uav1'
- `presetAttackDamageStolen(RealLevelClosure lc)`

### AbilityDefinitionItemBoneCommanderSSkullAura

```wurst
public class AbilityDefinitionItemBoneCommanderSSkullAura extends AbilityDefinition
```

'Abcs' / [AbilityIds.itemBoneCommanderSSkullAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBoneCommanderSSkullAura)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionBlueDragonFigurine

```wurst
public class AbilityDefinitionBlueDragonFigurine extends AbilityDefinition
```

'Abdf' / [AbilityIds.blueDragonFigurine](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-blueDragonFigurine)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamage(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionBladeOfFrozenHungerAttack

```wurst
public class AbilityDefinitionBladeOfFrozenHungerAttack extends AbilityDefinition
```

'Abfa' / [AbilityIds.bladeOfFrozenHungerAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bladeOfFrozenHungerAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionBladeOfFrozenHungerHeal

```wurst
public class AbilityDefinitionBladeOfFrozenHungerHeal extends AbilityDefinition
```

'Abfh' / [AbilityIds.bladeOfFrozenHungerHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bladeOfFrozenHungerHeal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionItemBindingsOfHelyaCW

```wurst
public class AbilityDefinitionItemBindingsOfHelyaCW extends AbilityDefinition
```

'Abh1' / [AbilityIds.itemBindingsOfHelyaCW](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBindingsOfHelyaCW)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamage(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemBindingsOfHelyaAttack

```wurst
public class AbilityDefinitionItemBindingsOfHelyaAttack extends AbilityDefinition
```

'Abh2' / [AbilityIds.itemBindingsOfHelyaAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBindingsOfHelyaAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemBootsOfTheIcewalkerBoF

```wurst
public class AbilityDefinitionItemBootsOfTheIcewalkerBoF extends AbilityDefinition
```

'Abi1' / [AbilityIds.itemBootsOfTheIcewalkerBoF](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBootsOfTheIcewalkerBoF)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamage(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemBootsOfTheIcewalkerAttack

```wurst
public class AbilityDefinitionItemBootsOfTheIcewalkerAttack extends AbilityDefinition
```

'Abi2' / [AbilityIds.itemBootsOfTheIcewalkerAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBootsOfTheIcewalkerAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionBanshee

```wurst
public class AbilityDefinitionBanshee extends AbilityDefinition
```

'Abns' / [AbilityIds.banshee](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-banshee)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemBottledStormTrinket

```wurst
public class AbilityDefinitionItemBottledStormTrinket extends AbilityDefinition
```

'Abos' / [AbilityIds.itemBottledStormTrinket](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBottledStormTrinket)

**Members:**

- `construct(int newAbilityId)`
- `setDamageDealt(int level, real value)`
- `setDamageInterval(int level, real value)`
- `setBuildingReduction(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionItemBrimstoneSpell1

```wurst
public class AbilityDefinitionItemBrimstoneSpell1 extends AbilityDefinition
```

'Abr1' / [AbilityIds.itemBrimstoneSpell1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBrimstoneSpell1)

**Members:**

- `construct(int newAbilityId)`
- `setSecondaryDamage(int level, real value)`
- `setArmorPenalty(int level, int value)`
- `setPrimaryDamage(int level, real value)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nab1'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nab2'
- `setDamageInterval(int level, real value)`
- `presetSecondaryDamage(RealLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetPrimaryDamage(RealLevelClosure lc)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionItemBrimstoneSpell2

```wurst
public class AbilityDefinitionItemBrimstoneSpell2 extends AbilityDefinition
```

'Abr2' / [AbilityIds.itemBrimstoneSpell2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBrimstoneSpell2)

**Members:**

- `construct(int newAbilityId)`
- `setSecondaryDamage(int level, real value)`
- `setArmorPenalty(int level, int value)`
- `setPrimaryDamage(int level, real value)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nab1'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nab2'
- `setDamageInterval(int level, real value)`
- `presetSecondaryDamage(RealLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetPrimaryDamage(RealLevelClosure lc)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionItemBottledStormCL

```wurst
public class AbilityDefinitionItemBottledStormCL extends AbilityDefinition
```

'Abs1' / [AbilityIds.itemBottledStormCL](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBottledStormCL)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemBottledStormAttack1

```wurst
public class AbilityDefinitionItemBottledStormAttack1 extends AbilityDefinition
```

'Abs2' / [AbilityIds.itemBottledStormAttack1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBottledStormAttack1)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionAnyaBansheeCurseOrb

```wurst
public class AbilityDefinitionAnyaBansheeCurseOrb extends AbilityDefinition
```

'Absc' / [AbilityIds.anyaBansheeCurseOrb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-anyaBansheeCurseOrb)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `setEffectAbility(int level, string value)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `setDamageBonus(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `presetEffectAbility(StringLevelClosure lc)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionItemBorelgoreAttack

```wurst
public class AbilityDefinitionItemBorelgoreAttack extends AbilityDefinition
```

'Abx1' / [AbilityIds.itemBorelgoreAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBorelgoreAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemBrimstoneAttack1

```wurst
public class AbilityDefinitionItemBrimstoneAttack1 extends AbilityDefinition
```

'Abz1' / [AbilityIds.itemBrimstoneAttack1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBrimstoneAttack1)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemBrimstoneAttack2

```wurst
public class AbilityDefinitionItemBrimstoneAttack2 extends AbilityDefinition
```

'Abz2' / [AbilityIds.itemBrimstoneAttack2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBrimstoneAttack2)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemConsecratedMixture

```wurst
public class AbilityDefinitionItemConsecratedMixture extends AbilityDefinition
```

'Accm' / [AbilityIds.itemConsecratedMixture](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemConsecratedMixture)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemHelmCenarionHeal

```wurst
public class AbilityDefinitionItemHelmCenarionHeal extends AbilityDefinition
```

'Ace1' / [AbilityIds.itemHelmCenarionHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHelmCenarionHeal)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemHelmCenarionAttack

```wurst
public class AbilityDefinitionItemHelmCenarionAttack extends AbilityDefinition
```

'Ace2' / [AbilityIds.itemHelmCenarionAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHelmCenarionAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemHelmCenarionSpellcast

```wurst
public class AbilityDefinitionItemHelmCenarionSpellcast extends AbilityDefinition
```

'Ace3' / [AbilityIds.itemHelmCenarionSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHelmCenarionSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemElixirOfCunning

```wurst
public class AbilityDefinitionItemElixirOfCunning extends AbilityDefinition
```

'Acec' / [AbilityIds.itemElixirOfCunning](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemElixirOfCunning)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemElixirOfTheMonsterHunter

```wurst
public class AbilityDefinitionItemElixirOfTheMonsterHunter extends AbilityDefinition
```

'Acem' / [AbilityIds.itemElixirOfTheMonsterHunter](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemElixirOfTheMonsterHunter)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemElixirOfGreaterIntelligence

```wurst
public class AbilityDefinitionItemElixirOfGreaterIntelligence extends AbilityDefinition
```

'Acgi' / [AbilityIds.itemElixirOfGreaterIntelligence](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemElixirOfGreaterIntelligence)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionCursedGoldenRingCrit

```wurst
public class AbilityDefinitionCursedGoldenRingCrit extends AbilityDefinition
```

'Acgr' / [AbilityIds.cursedGoldenRingCrit](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cursedGoldenRingCrit)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemStaffCHTC

```wurst
public class AbilityDefinitionItemStaffCHTC extends AbilityDefinition
```

'Ach1' / [AbilityIds.itemStaffCHTC](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemStaffCHTC)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedReduction(int level, real value)`
- `setExtraDamageToTarget(int level, real value)`
- `setAttackSpeedReduction(int level, real value)`
- `setDamage(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetExtraDamageToTarget(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemStaffCHSpellcast

```wurst
public class AbilityDefinitionItemStaffCHSpellcast extends AbilityDefinition
```

'Ach2' / [AbilityIds.itemStaffCHSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemStaffCHSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemBladeCHDamage

```wurst
public class AbilityDefinitionItemBladeCHDamage extends AbilityDefinition
```

'Ach3' / [AbilityIds.itemBladeCHDamage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBladeCHDamage)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDuration(int level, real value)`
- `setGraphicDelay(int level, real value)`
- `setDamage(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemBladeCHHeal

```wurst
public class AbilityDefinitionItemBladeCHHeal extends AbilityDefinition
```

'Ach4' / [AbilityIds.itemBladeCHHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBladeCHHeal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionItemBladeCHAttack1

```wurst
public class AbilityDefinitionItemBladeCHAttack1 extends AbilityDefinition
```

'Ach5' / [AbilityIds.itemBladeCHAttack1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBladeCHAttack1)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemBladeCHAttack2

```wurst
public class AbilityDefinitionItemBladeCHAttack2 extends AbilityDefinition
```

'Ach6' / [AbilityIds.itemBladeCHAttack2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBladeCHAttack2)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemElixirOfLesserIntelligence

```wurst
public class AbilityDefinitionItemElixirOfLesserIntelligence extends AbilityDefinition
```

'Acli' / [AbilityIds.itemElixirOfLesserIntelligence](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemElixirOfLesserIntelligence)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionItemCleave15

```wurst
public class AbilityDefinitionItemCleave15 extends AbilityDefinition
```

'Aclq' / [AbilityIds.itemCleave15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCleave15)

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionItemColdbringersReachAttack

```wurst
public class AbilityDefinitionItemColdbringersReachAttack extends AbilityDefinition
```

'Acrx' / [AbilityIds.itemColdbringersReachAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemColdbringersReachAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemColdbringersReachFrostNova

```wurst
public class AbilityDefinitionItemColdbringersReachFrostNova extends AbilityDefinition
```

'Acrz' / [AbilityIds.itemColdbringersReachFrostNova](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemColdbringersReachFrostNova)

**Members:**

- `construct(int newAbilityId)`
- `setAreaofEffectDamage(int level, real value)`
- `setSpecificTargetDamage(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `presetAreaofEffectDamage(RealLevelClosure lc)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionItemDeathbringerSBootsParasite

```wurst
public class AbilityDefinitionItemDeathbringerSBootsParasite extends AbilityDefinition
```

'Adb1' / [AbilityIds.itemDeathbringerSBootsParasite](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDeathbringerSBootsParasite)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `setSummonedUnitDuration(int level, real value)`
- `setMovementSpeedFactor(int level, real value)`
- `setSummonedUnitCount(int level, int value)`
- `setUnitType(int level, string value)`
- `setAttackSpeedFactor(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `presetSummonedUnitDuration(RealLevelClosure lc)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetUnitType(StringLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionItemDeathbringerSBootsAttack

```wurst
public class AbilityDefinitionItemDeathbringerSBootsAttack extends AbilityDefinition
```

'Adb2' / [AbilityIds.itemDeathbringerSBootsAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDeathbringerSBootsAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemDeathbloomLeaves

```wurst
public class AbilityDefinitionItemDeathbloomLeaves extends AbilityDefinition
```

'Adbl' / [AbilityIds.itemDeathbloomLeaves](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDeathbloomLeaves)

**Members:**

- `construct(int newAbilityId)`
- `setUnitTypeOne(int level, string value)`
- `setUnitsSummonedTypeTwo(int level, int value)`
- `setUnitsSummonedTypeOne(int level, int value)`
- `setUnitTypeTwo(int level, string value)`
- `setUnitTypeForLimitCheck(int level, string value)`
- `presetUnitTypeOne(StringLevelClosure lc)`
- `presetUnitsSummonedTypeTwo(IntLevelClosure lc)`
- `presetUnitsSummonedTypeOne(IntLevelClosure lc)`
- `presetUnitTypeTwo(StringLevelClosure lc)`
- `presetUnitTypeForLimitCheck(StringLevelClosure lc)`

### AbilityDefinitionItemDeepseaBagCW

```wurst
public class AbilityDefinitionItemDeepseaBagCW extends AbilityDefinition
```

'Adbw' / [AbilityIds.itemDeepseaBagCW](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDeepseaBagCW)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamage(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionEndlessFlaskRejuvenation

```wurst
public class AbilityDefinitionEndlessFlaskRejuvenation extends AbilityDefinition
```

'Aefr' / [AbilityIds.endlessFlaskRejuvenation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-endlessFlaskRejuvenation)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `setManaPointsGained(int level, real value)`
- `setHitPointsGained(int level, real value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `presetManaPointsGained(RealLevelClosure lc)`
- `presetHitPointsGained(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`
- `presetAllowWhenFull(IntLevelClosure lc)`

### AbilityDefinitionItemEssenciumMainSummon

```wurst
public class AbilityDefinitionItemEssenciumMainSummon extends AbilityDefinition
```

'Aes1' / [AbilityIds.itemEssenciumMainSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEssenciumMainSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSpawnedUnits(int level, string value)`
- `setMaximumNumberofUnits(int level, int value)`
- `setMinimumNumberofUnits(int level, int value)`
- `presetSpawnedUnits(StringLevelClosure lc)`
- `presetMaximumNumberofUnits(IntLevelClosure lc)`
- `presetMinimumNumberofUnits(IntLevelClosure lc)`

### AbilityDefinitionItemEssenciumBlizzard

```wurst
public class AbilityDefinitionItemEssenciumBlizzard extends AbilityDefinition
```

'Aes2' / [AbilityIds.itemEssenciumBlizzard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEssenciumBlizzard)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDamageperWave(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `setNumberofWaves(int level, int value)`
- `setDamage(int level, real value)`
- `setNumberofShards(int level, int value)`
- `setBuildingReduction(int level, real value)`
- `presetMaximumDamageperWave(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetNumberofWaves(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetNumberofShards(IntLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionItemEssenciumRainOfFire

```wurst
public class AbilityDefinitionItemEssenciumRainOfFire extends AbilityDefinition
```

'Aes3' / [AbilityIds.itemEssenciumRainOfFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEssenciumRainOfFire)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDamageperWave(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `setNumberofWaves(int level, int value)`
- `setDamage(int level, real value)`
- `setNumberofShards(int level, int value)`
- `setBuildingReduction(int level, real value)`
- `presetMaximumDamageperWave(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetNumberofWaves(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetNumberofShards(IntLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionItemEssenciumChainLightning

```wurst
public class AbilityDefinitionItemEssenciumChainLightning extends AbilityDefinition
```

'Aes4' / [AbilityIds.itemEssenciumChainLightning](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEssenciumChainLightning)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemEssenciumCrushingWave

```wurst
public class AbilityDefinitionItemEssenciumCrushingWave extends AbilityDefinition
```

'Aes5' / [AbilityIds.itemEssenciumCrushingWave](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEssenciumCrushingWave)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamage(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemEssenciumAttack1

```wurst
public class AbilityDefinitionItemEssenciumAttack1 extends AbilityDefinition
```

'Aes6' / [AbilityIds.itemEssenciumAttack1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEssenciumAttack1)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemEssenciumAttack2

```wurst
public class AbilityDefinitionItemEssenciumAttack2 extends AbilityDefinition
```

'Aes7' / [AbilityIds.itemEssenciumAttack2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEssenciumAttack2)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemEssenciumAttack3

```wurst
public class AbilityDefinitionItemEssenciumAttack3 extends AbilityDefinition
```

'Aes8' / [AbilityIds.itemEssenciumAttack3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEssenciumAttack3)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemEssenciumAttack4

```wurst
public class AbilityDefinitionItemEssenciumAttack4 extends AbilityDefinition
```

'Aes9' / [AbilityIds.itemEssenciumAttack4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEssenciumAttack4)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemEarthenSignetAttack

```wurst
public class AbilityDefinitionItemEarthenSignetAttack extends AbilityDefinition
```

'Aesa' / [AbilityIds.itemEarthenSignetAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEarthenSignetAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionEssenceOfTheSpiderQueen

```wurst
public class AbilityDefinitionEssenceOfTheSpiderQueen extends AbilityDefinition
```

'Aesq' / [AbilityIds.essenceOfTheSpiderQueen](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-essenceOfTheSpiderQueen)

**Members:**

- `construct(int newAbilityId)`
- `setLifeStealAmount(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAmountIsRawValue(int level, bool value)`
- `presetLifeStealAmount(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAmountIsRawValue(BooleanLevelClosure lc)`

### AbilityDefinitionItemEarthenSignetWS

```wurst
public class AbilityDefinitionItemEarthenSignetWS extends AbilityDefinition
```

'Aesw' / [AbilityIds.itemEarthenSignetWS](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemEarthenSignetWS)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionApothecaryAcidBomb

```wurst
public class AbilityDefinitionApothecaryAcidBomb extends AbilityDefinition
```

'Afab' / [AbilityIds.apothecaryAcidBomb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-apothecaryAcidBomb)

**Members:**

- `construct(int newAbilityId)`
- `setSecondaryDamage(int level, real value)`
- `setArmorPenalty(int level, int value)`
- `setPrimaryDamage(int level, real value)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nab1'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nab2'
- `setDamageInterval(int level, real value)`
- `presetSecondaryDamage(RealLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetPrimaryDamage(RealLevelClosure lc)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionItemForgottenFrostLotus

```wurst
public class AbilityDefinitionItemForgottenFrostLotus extends AbilityDefinition
```

'Affl' / [AbilityIds.itemForgottenFrostLotus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemForgottenFrostLotus)

**Members:**

- `construct(int newAbilityId)`
- `setArmorBonus(int level, real value)`
- `setArmorDuration(int level, real value)`
- `presetArmorBonus(RealLevelClosure lc)`
- `presetArmorDuration(RealLevelClosure lc)`

### AbilityDefinitionApothecaryHealingSpray

```wurst
public class AbilityDefinitionApothecaryHealingSpray extends AbilityDefinition
```

'Afhs' / [AbilityIds.apothecaryHealingSpray](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-apothecaryHealingSpray)

**Members:**

- `construct(int newAbilityId)`
- `setBuildingDamageFactor(int level, real value)`
- `setWaveCount(int level, int value)`
- `setDamageAmount(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamageInterval(int level, real value)`
- `setMissileCount(int level, int value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`
- `presetWaveCount(IntLevelClosure lc)`
- `presetDamageAmount(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`
- `presetMissileCount(IntLevelClosure lc)`

### AbilityDefinitionItemGlovesOfTheFlamewalkerSwarm

```wurst
public class AbilityDefinitionItemGlovesOfTheFlamewalkerSwarm extends AbilityDefinition
```

'Afm1' / [AbilityIds.itemGlovesOfTheFlamewalkerSwarm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGlovesOfTheFlamewalkerSwarm)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSwarmUnits(int level, int value)`
- `setDamageReturnFactor(int level, real value)`
- `setSwarmUnitType(int level, string value)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `setDamageReturnThreshold(int level, real value)`
- `presetNumberofSwarmUnits(IntLevelClosure lc)`
- `presetDamageReturnFactor(RealLevelClosure lc)`
- `presetSwarmUnitType(StringLevelClosure lc)`
- `presetUnitReleaseIntervalseconds(RealLevelClosure lc)`
- `presetMaxSwarmUnitsPerTarget(IntLevelClosure lc)`
- `presetDamageReturnThreshold(RealLevelClosure lc)`

### AbilityDefinitionItemGlovesOfTheFlamewalkerAttack

```wurst
public class AbilityDefinitionItemGlovesOfTheFlamewalkerAttack extends AbilityDefinition
```

'Afm2' / [AbilityIds.itemGlovesOfTheFlamewalkerAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGlovesOfTheFlamewalkerAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemFlameOfAlAr

```wurst
public class AbilityDefinitionItemFlameOfAlAr extends AbilityDefinition
```

'Afoa' / [AbilityIds.itemFlameOfAlAr](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemFlameOfAlAr)

**Members:**

- `construct(int newAbilityId)`
- `setFullDamageInterval(int level, real value)`
- `setFullDamageDealt(int level, real value)`
- `setHalfDamageDealt(int level, real value)`
- `setBuildingReduction(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `setHalfDamageInterval(int level, real value)`
- `presetFullDamageInterval(RealLevelClosure lc)`
- `presetFullDamageDealt(RealLevelClosure lc)`
- `presetHalfDamageDealt(RealLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `presetHalfDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionApothecaryChemicalFrenzy

```wurst
public class AbilityDefinitionApothecaryChemicalFrenzy extends AbilityDefinition
```

'Afuf' / [AbilityIds.apothecaryChemicalFrenzy](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-apothecaryChemicalFrenzy)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonus(int level, real value)`
  Attack Speed Bonus (%) / 'Uhf1'
- `setDamageperSecond(int level, real value)`
- `presetAttackSpeedBonus(RealLevelClosure lc)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionItemGiftOfWrathAttack

```wurst
public class AbilityDefinitionItemGiftOfWrathAttack extends AbilityDefinition
```

'Agga' / [AbilityIds.itemGiftOfWrathAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGiftOfWrathAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemGiftOfGreedPillage

```wurst
public class AbilityDefinitionItemGiftOfGreedPillage extends AbilityDefinition
```

'Aggp' / [AbilityIds.itemGiftOfGreedPillage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGiftOfGreedPillage)

**Members:**

- `construct(int newAbilityId)`
- `setSalvageCostRatio(int level, real value)`
- `setAccumulationStep(int level, int value)`
- `presetSalvageCostRatio(RealLevelClosure lc)`
- `presetAccumulationStep(IntLevelClosure lc)`

### AbilityDefinitionItemGiftOfSlothSlow

```wurst
public class AbilityDefinitionItemGiftOfSlothSlow extends AbilityDefinition
```

'Aggs' / [AbilityIds.itemGiftOfSlothSlow](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGiftOfSlothSlow)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemGiftOfWrathBloodlust

```wurst
public class AbilityDefinitionItemGiftOfWrathBloodlust extends AbilityDefinition
```

'Aggw' / [AbilityIds.itemGiftOfWrathBloodlust](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGiftOfWrathBloodlust)

**Members:**

- `construct(int newAbilityId)`
- `setScalingFactor(int level, real value)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Blo1'
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Blo2'
- `presetScalingFactor(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemCurseOfPride

```wurst
public class AbilityDefinitionItemCurseOfPride extends AbilityDefinition
```

'Aggx' / [AbilityIds.itemCurseOfPride](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemCurseOfPride)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemGlixsBomb

```wurst
public class AbilityDefinitionItemGlixsBomb extends AbilityDefinition
```

'Aglx' / [AbilityIds.itemGlixsBomb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGlixsBomb)

**Members:**

- `construct(int newAbilityId)`
- `setBuildingDamageFactor(int level, real value)`
- `setDamageAmount(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamageInterval(int level, real value)`
- `setMissileCount(int level, int value)`
- `setEffectDuration(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`
- `presetDamageAmount(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`
- `presetMissileCount(IntLevelClosure lc)`
- `presetEffectDuration(RealLevelClosure lc)`

### AbilityDefinitionItemGlovesOfNecromancySummon

```wurst
public class AbilityDefinitionItemGlovesOfNecromancySummon extends AbilityDefinition
```

'Agn1' / [AbilityIds.itemGlovesOfNecromancySummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGlovesOfNecromancySummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionItemGlovesOfNecromancyAttack

```wurst
public class AbilityDefinitionItemGlovesOfNecromancyAttack extends AbilityDefinition
```

'Agn2' / [AbilityIds.itemGlovesOfNecromancyAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGlovesOfNecromancyAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemGoldenNecklaceHeal

```wurst
public class AbilityDefinitionItemGoldenNecklaceHeal extends AbilityDefinition
```

'Agnh' / [AbilityIds.itemGoldenNecklaceHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGoldenNecklaceHeal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionItemGoldenNecklaceSpellcast

```wurst
public class AbilityDefinitionItemGoldenNecklaceSpellcast extends AbilityDefinition
```

'Agns' / [AbilityIds.itemGoldenNecklaceSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGoldenNecklaceSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemGlovesOfThePhoenixSpellcast

```wurst
public class AbilityDefinitionItemGlovesOfThePhoenixSpellcast extends AbilityDefinition
```

'Agpa' / [AbilityIds.itemGlovesOfThePhoenixSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGlovesOfThePhoenixSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemGlovesOfThePhoenixDamage

```wurst
public class AbilityDefinitionItemGlovesOfThePhoenixDamage extends AbilityDefinition
```

'Agpd' / [AbilityIds.itemGlovesOfThePhoenixDamage](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGlovesOfThePhoenixDamage)

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDuration(int level, real value)`
- `setGraphicDelay(int level, real value)`
- `setDamage(int level, real value)`
- `presetGraphicDuration(RealLevelClosure lc)`
- `presetGraphicDelay(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemGravelightDoT

```wurst
public class AbilityDefinitionItemGravelightDoT extends AbilityDefinition
```

'Agr1' / [AbilityIds.itemGravelightDoT](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGravelightDoT)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `setDamageperSecond(int level, real value)`
- `setAttackSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetDamageperSecond(RealLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionItemGravelightMainSwarm

```wurst
public class AbilityDefinitionItemGravelightMainSwarm extends AbilityDefinition
```

'Agr2' / [AbilityIds.itemGravelightMainSwarm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGravelightMainSwarm)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSwarmUnits(int level, int value)`
- `setDamageReturnFactor(int level, real value)`
- `setSwarmUnitType(int level, string value)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `setDamageReturnThreshold(int level, real value)`
- `presetNumberofSwarmUnits(IntLevelClosure lc)`
- `presetDamageReturnFactor(RealLevelClosure lc)`
- `presetSwarmUnitType(StringLevelClosure lc)`
- `presetUnitReleaseIntervalseconds(RealLevelClosure lc)`
- `presetMaxSwarmUnitsPerTarget(IntLevelClosure lc)`
- `presetDamageReturnThreshold(RealLevelClosure lc)`

### AbilityDefinitionItemGravelightSideSwarm

```wurst
public class AbilityDefinitionItemGravelightSideSwarm extends AbilityDefinition
```

'Agr3' / [AbilityIds.itemGravelightSideSwarm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGravelightSideSwarm)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSwarmUnits(int level, int value)`
- `setDamageReturnFactor(int level, real value)`
- `setSwarmUnitType(int level, string value)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `setDamageReturnThreshold(int level, real value)`
- `presetNumberofSwarmUnits(IntLevelClosure lc)`
- `presetDamageReturnFactor(RealLevelClosure lc)`
- `presetSwarmUnitType(StringLevelClosure lc)`
- `presetUnitReleaseIntervalseconds(RealLevelClosure lc)`
- `presetMaxSwarmUnitsPerTarget(IntLevelClosure lc)`
- `presetDamageReturnThreshold(RealLevelClosure lc)`

### AbilityDefinitionItemGravelightAttackMain

```wurst
public class AbilityDefinitionItemGravelightAttackMain extends AbilityDefinition
```

'Agr4' / [AbilityIds.itemGravelightAttackMain](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGravelightAttackMain)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemGravelightAttackSide

```wurst
public class AbilityDefinitionItemGravelightAttackSide extends AbilityDefinition
```

'Agr5' / [AbilityIds.itemGravelightAttackSide](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGravelightAttackSide)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemGlacialShard

```wurst
public class AbilityDefinitionItemGlacialShard extends AbilityDefinition
```

'Agsh' / [AbilityIds.itemGlacialShard](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemGlacialShard)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDamageperWave(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `setNumberofWaves(int level, int value)`
- `setDamage(int level, real value)`
- `setNumberofShards(int level, int value)`
- `setBuildingReduction(int level, real value)`
- `presetMaximumDamageperWave(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetNumberofWaves(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetNumberofShards(IntLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionHealingModifier

```wurst
public class AbilityDefinitionHealingModifier extends AbilityDefinition
```

'Ahem' / [AbilityIds.healingModifier](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-healingModifier)

**Members:**

- `construct(int newAbilityId)`
- `setHealingModifier(int level, real value)`
  % Healing Modifier / 'hem1'
- `presetHealingModifier(RealLevelClosure lc)`

### AbilityDefinitionItemHugeFlailWS

```wurst
public class AbilityDefinitionItemHugeFlailWS extends AbilityDefinition
```

'Ahf1' / [AbilityIds.itemHugeFlailWS](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHugeFlailWS)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemHugeFlailAttack

```wurst
public class AbilityDefinitionItemHugeFlailAttack extends AbilityDefinition
```

'Ahf2' / [AbilityIds.itemHugeFlailAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHugeFlailAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionHeartOfTheFirebenderBoF

```wurst
public class AbilityDefinitionHeartOfTheFirebenderBoF extends AbilityDefinition
```

'Ahfb' / [AbilityIds.heartOfTheFirebenderBoF](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heartOfTheFirebenderBoF)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamage(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionHeartOfTheFirebenderOrb

```wurst
public class AbilityDefinitionHeartOfTheFirebenderOrb extends AbilityDefinition
```

'Ahfo' / [AbilityIds.heartOfTheFirebenderOrb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-heartOfTheFirebenderOrb)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `setEffectAbility(int level, string value)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `setDamageBonus(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `presetEffectAbility(StringLevelClosure lc)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionHeadpieceOfTheHighInquisitor

```wurst
public class AbilityDefinitionHeadpieceOfTheHighInquisitor extends AbilityDefinition
```

'Ahhi' / [AbilityIds.headpieceOfTheHighInquisitor](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-headpieceOfTheHighInquisitor)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Uau1'
- `setLifeRegenerationIncrease(int level, real value)`
  Life Regeneration Increase (%) / 'Uau2'
- `setPercentBonus(int level, bool value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `presetLifeRegenerationIncrease(RealLevelClosure lc)`
- `presetPercentBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemHelmOfTheRimelordSpellcast

```wurst
public class AbilityDefinitionItemHelmOfTheRimelordSpellcast extends AbilityDefinition
```

'Ahrx' / [AbilityIds.itemHelmOfTheRimelordSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHelmOfTheRimelordSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemHelmOfTheRimelordTC

```wurst
public class AbilityDefinitionItemHelmOfTheRimelordTC extends AbilityDefinition
```

'Ahrz' / [AbilityIds.itemHelmOfTheRimelordTC](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHelmOfTheRimelordTC)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedReduction(int level, real value)`
- `setExtraDamageToTarget(int level, real value)`
- `setAttackSpeedReduction(int level, real value)`
- `setDamage(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetExtraDamageToTarget(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemHammerOfTheSilverHandAttack

```wurst
public class AbilityDefinitionItemHammerOfTheSilverHandAttack extends AbilityDefinition
```

'Ahsa' / [AbilityIds.itemHammerOfTheSilverHandAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHammerOfTheSilverHandAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemHammerOfTheSilverHandHeal

```wurst
public class AbilityDefinitionItemHammerOfTheSilverHandHeal extends AbilityDefinition
```

'Ahsh' / [AbilityIds.itemHammerOfTheSilverHandHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHammerOfTheSilverHandHeal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionItemHandfulOfThrowingKnives

```wurst
public class AbilityDefinitionItemHandfulOfThrowingKnives extends AbilityDefinition
```

'Ahtk' / [AbilityIds.itemHandfulOfThrowingKnives](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemHandfulOfThrowingKnives)

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerTarget(int level, real value)`
- `setMaximumSpeedAdjustment(int level, real value)`
- `setMaximumTotalDamage(int level, real value)`
- `setMaximumNumberofTargets(int level, int value)`
- `presetDamagePerTarget(RealLevelClosure lc)`
- `presetMaximumSpeedAdjustment(RealLevelClosure lc)`
- `presetMaximumTotalDamage(RealLevelClosure lc)`
- `presetMaximumNumberofTargets(IntLevelClosure lc)`

### AbilityDefinitionItemIcecrownRingFrostNova

```wurst
public class AbilityDefinitionItemIcecrownRingFrostNova extends AbilityDefinition
```

'Aic1' / [AbilityIds.itemIcecrownRingFrostNova](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemIcecrownRingFrostNova)

**Members:**

- `construct(int newAbilityId)`
- `setAreaofEffectDamage(int level, real value)`
- `setSpecificTargetDamage(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `presetAreaofEffectDamage(RealLevelClosure lc)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionItemIcecrownRingFrostAttack

```wurst
public class AbilityDefinitionItemIcecrownRingFrostAttack extends AbilityDefinition
```

'Aic2' / [AbilityIds.itemIcecrownRingFrostAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemIcecrownRingFrostAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemBladeOfInfernoRainOfFire

```wurst
public class AbilityDefinitionItemBladeOfInfernoRainOfFire extends AbilityDefinition
```

'Ain1' / [AbilityIds.itemBladeOfInfernoRainOfFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBladeOfInfernoRainOfFire)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDamageperWave(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `setNumberofWaves(int level, int value)`
- `setDamage(int level, real value)`
- `setNumberofShards(int level, int value)`
- `setBuildingReduction(int level, real value)`
- `presetMaximumDamageperWave(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetNumberofWaves(IntLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`
- `presetNumberofShards(IntLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionItemBladeOfInfernoAttack

```wurst
public class AbilityDefinitionItemBladeOfInfernoAttack extends AbilityDefinition
```

'Ain2' / [AbilityIds.itemBladeOfInfernoAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBladeOfInfernoAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionAttackSpeedIncreaseGreaterAisy

```wurst
public class AbilityDefinitionAttackSpeedIncreaseGreaterAisy extends AbilityDefinition
```

'Aisy' / [AbilityIds.attackSpeedIncreaseGreaterAisy](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-attackSpeedIncreaseGreaterAisy)

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemKaldoreiMoonglaiveAttack

```wurst
public class AbilityDefinitionItemKaldoreiMoonglaiveAttack extends AbilityDefinition
```

'Akma' / [AbilityIds.itemKaldoreiMoonglaiveAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemKaldoreiMoonglaiveAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemKaldoreiMoonglaiveSummon

```wurst
public class AbilityDefinitionItemKaldoreiMoonglaiveSummon extends AbilityDefinition
```

'Akms' / [AbilityIds.itemKaldoreiMoonglaiveSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemKaldoreiMoonglaiveSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionItemLanceOfTheFrozenPhoenix

```wurst
public class AbilityDefinitionItemLanceOfTheFrozenPhoenix extends AbilityDefinition
```

'Alfp' / [AbilityIds.itemLanceOfTheFrozenPhoenix](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLanceOfTheFrozenPhoenix)

**Members:**

- `construct(int newAbilityId)`
- `setInitialDamage(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `presetInitialDamage(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionItemLostForsakenQuiverSummon

```wurst
public class AbilityDefinitionItemLostForsakenQuiverSummon extends AbilityDefinition
```

'Alfq' / [AbilityIds.itemLostForsakenQuiverSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLostForsakenQuiverSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionLionskinHelmetOfPrecision

```wurst
public class AbilityDefinitionLionskinHelmetOfPrecision extends AbilityDefinition
```

'Alhp' / [AbilityIds.lionskinHelmetOfPrecision](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lionskinHelmetOfPrecision)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoCriticalStrike(int level, real value)`
- `setChancetoEvade(int level, real value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageMultiplier(int level, real value)`
- `presetChancetoCriticalStrike(RealLevelClosure lc)`
- `presetChancetoEvade(RealLevelClosure lc)`
- `presetExcludeItemDamage(BooleanLevelClosure lc)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionLesserMarkOfTheForsaken

```wurst
public class AbilityDefinitionLesserMarkOfTheForsaken extends AbilityDefinition
```

'Almf' / [AbilityIds.lesserMarkOfTheForsaken](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-lesserMarkOfTheForsaken)

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`
  Amount Healed/Damaged / 'Udc1'
- `presetAmountHealedDamaged(RealLevelClosure lc)`

### AbilityDefinitionItemPortableLightningRodAttack

```wurst
public class AbilityDefinitionItemPortableLightningRodAttack extends AbilityDefinition
```

'Alra' / [AbilityIds.itemPortableLightningRodAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPortableLightningRodAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemPortableLightningRodCL

```wurst
public class AbilityDefinitionItemPortableLightningRodCL extends AbilityDefinition
```

'Alrc' / [AbilityIds.itemPortableLightningRodCL](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPortableLightningRodCL)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemMordoSClub

```wurst
public class AbilityDefinitionItemMordoSClub extends AbilityDefinition
```

'Amcx' / [AbilityIds.itemMordoSClub](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMordoSClub)

**Members:**

- `construct(int newAbilityId)`
- `setMaxAttackSpeedStacks(int level, int value)`
- `setPercentDamage(int level, real value)`
- `setStacksRequired(int level, int value)`
- `setBonusAttackSpeedperAttack(int level, real value)`
- `setFlatDamage(int level, real value)`
- `presetMaxAttackSpeedStacks(IntLevelClosure lc)`
- `presetPercentDamage(RealLevelClosure lc)`
- `presetStacksRequired(IntLevelClosure lc)`
- `presetBonusAttackSpeedperAttack(RealLevelClosure lc)`
- `presetFlatDamage(RealLevelClosure lc)`

### AbilityDefinitionAbilityDamageAmpBClvl1

```wurst
public class AbilityDefinitionAbilityDamageAmpBClvl1 extends AbilityDefinition
```

'Amda' / [AbilityIds.abilityDamageAmpBClvl1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-abilityDamageAmpBClvl1)

**Members:**

- `construct(int newAbilityId)`
- `setBonusMagicDamageFactor(int level, real value)`
- `presetBonusMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionItemManuscriptOfTheForsakenSummon

```wurst
public class AbilityDefinitionItemManuscriptOfTheForsakenSummon extends AbilityDefinition
```

'Amfs' / [AbilityIds.itemManuscriptOfTheForsakenSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManuscriptOfTheForsakenSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionItemMonasteryMaceHeal

```wurst
public class AbilityDefinitionItemMonasteryMaceHeal extends AbilityDefinition
```

'Amm1' / [AbilityIds.itemMonasteryMaceHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMonasteryMaceHeal)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemMonasteryMaceAttack

```wurst
public class AbilityDefinitionItemMonasteryMaceAttack extends AbilityDefinition
```

'Amm2' / [AbilityIds.itemMonasteryMaceAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMonasteryMaceAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemMarkOfThePhoenixBoF

```wurst
public class AbilityDefinitionItemMarkOfThePhoenixBoF extends AbilityDefinition
```

'Ampb' / [AbilityIds.itemMarkOfThePhoenixBoF](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemMarkOfThePhoenixBoF)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamage(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionMalachiteSwordCurse

```wurst
public class AbilityDefinitionMalachiteSwordCurse extends AbilityDefinition
```

'Amsc' / [AbilityIds.malachiteSwordCurse](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-malachiteSwordCurse)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionMalachiteSwordOrb

```wurst
public class AbilityDefinitionMalachiteSwordOrb extends AbilityDefinition
```

'Amso' / [AbilityIds.malachiteSwordOrb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-malachiteSwordOrb)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `setEffectAbility(int level, string value)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `setDamageBonus(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `presetEffectAbility(StringLevelClosure lc)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionAndb

```wurst
public class AbilityDefinitionAndb extends AbilityDefinition
```

'Andb' / [AbilityIds.andb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-andb)

**Members:**

- `construct(int newAbilityId)`
- `setDamageMultiplier(int level, real value)`
- `presetDamageMultiplier(RealLevelClosure lc)`

### AbilityDefinitionItemNevermeltingIce

```wurst
public class AbilityDefinitionItemNevermeltingIce extends AbilityDefinition
```

'Anmi' / [AbilityIds.itemNevermeltingIce](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemNevermeltingIce)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `setAttackSpeedFactor(int level, real value)`
- `setExtraDamage(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `presetExtraDamage(RealLevelClosure lc)`
- `setStackFlags(int level, int value)`
- `presetStackFlags(IntLevelClosure lc)`

### AbilityDefinitionAoas

```wurst
public class AbilityDefinitionAoas extends AbilityDefinition
```

'Aoas' / [AbilityIds.aoas](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-aoas)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemOrbChill3s

```wurst
public class AbilityDefinitionItemOrbChill3s extends AbilityDefinition
```

'Aoc3' / [AbilityIds.itemOrbChill3s](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemOrbChill3s)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionOnHitSpellChainLightning

```wurst
public class AbilityDefinitionOnHitSpellChainLightning extends AbilityDefinition
```

'Aohl' / [AbilityIds.onHitSpellChainLightning](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-onHitSpellChainLightning)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemTotemOgreMagiAttack

```wurst
public class AbilityDefinitionItemTotemOgreMagiAttack extends AbilityDefinition
```

'Aoma' / [AbilityIds.itemTotemOgreMagiAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTotemOgreMagiAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemTotemOgreMagiBloodlust

```wurst
public class AbilityDefinitionItemTotemOgreMagiBloodlust extends AbilityDefinition
```

'Aomb' / [AbilityIds.itemTotemOgreMagiBloodlust](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTotemOgreMagiBloodlust)

**Members:**

- `construct(int newAbilityId)`
- `setScalingFactor(int level, real value)`
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Blo1'
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Blo2'
- `presetScalingFactor(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemBracersOgreMagiCL

```wurst
public class AbilityDefinitionItemBracersOgreMagiCL extends AbilityDefinition
```

'Aomc' / [AbilityIds.itemBracersOgreMagiCL](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBracersOgreMagiCL)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemBracersOgreMagiHW

```wurst
public class AbilityDefinitionItemBracersOgreMagiHW extends AbilityDefinition
```

'Aomh' / [AbilityIds.itemBracersOgreMagiHW](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBracersOgreMagiHW)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemTotemOgreMagiSummon

```wurst
public class AbilityDefinitionItemTotemOgreMagiSummon extends AbilityDefinition
```

'Aoms' / [AbilityIds.itemTotemOgreMagiSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTotemOgreMagiSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionItemBracersOgreMagiAttack2

```wurst
public class AbilityDefinitionItemBracersOgreMagiAttack2 extends AbilityDefinition
```

'Aomx' / [AbilityIds.itemBracersOgreMagiAttack2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBracersOgreMagiAttack2)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemBracersOgreMagiAttack1

```wurst
public class AbilityDefinitionItemBracersOgreMagiAttack1 extends AbilityDefinition
```

'Aomz' / [AbilityIds.itemBracersOgreMagiAttack1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBracersOgreMagiAttack1)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionPlaguebearerShortsword

```wurst
public class AbilityDefinitionPlaguebearerShortsword extends AbilityDefinition
```

'Apbs' / [AbilityIds.plaguebearerShortsword](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-plaguebearerShortsword)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `setAttackSpeedFactor(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionPlagueTossBlightweaver

```wurst
public class AbilityDefinitionPlagueTossBlightweaver extends AbilityDefinition
```

'Apbw' / [AbilityIds.plagueTossBlightweaver](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-plagueTossBlightweaver)

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionItemPlaguegreavesSpell

```wurst
public class AbilityDefinitionItemPlaguegreavesSpell extends AbilityDefinition
```

'Apl1' / [AbilityIds.itemPlaguegreavesSpell](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPlaguegreavesSpell)

**Members:**

- `construct(int newAbilityId)`
- `setSecondaryDamage(int level, real value)`
- `setArmorPenalty(int level, int value)`
- `setPrimaryDamage(int level, real value)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nab1'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nab2'
- `setDamageInterval(int level, real value)`
- `presetSecondaryDamage(RealLevelClosure lc)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `presetPrimaryDamage(RealLevelClosure lc)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionItemPlaguegreavesAttack

```wurst
public class AbilityDefinitionItemPlaguegreavesAttack extends AbilityDefinition
```

'Apl2' / [AbilityIds.itemPlaguegreavesAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPlaguegreavesAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionPoisonNettleAttack

```wurst
public class AbilityDefinitionPoisonNettleAttack extends AbilityDefinition
```

'Apna' / [AbilityIds.poisonNettleAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-poisonNettleAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionPoisonNettleER

```wurst
public class AbilityDefinitionPoisonNettleER extends AbilityDefinition
```

'Apne' / [AbilityIds.poisonNettleER](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-poisonNettleER)

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionPintOfAle

```wurst
public class AbilityDefinitionPintOfAle extends AbilityDefinition
```

'Apoa' / [AbilityIds.pintOfAle](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-pintOfAle)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToMiss(int level, real value)`
  Chance To Miss (%) / 'Nsi2'
- `setAttackSpeedModifier(int level, real value)`
- `setMovementSpeedModifier(int level, real value)`
- `presetChanceToMiss(RealLevelClosure lc)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionPhalanxShieldAura

```wurst
public class AbilityDefinitionPhalanxShieldAura extends AbilityDefinition
```

'Apsq' / [AbilityIds.phalanxShieldAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-phalanxShieldAura)

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `setArmorBonus(int level, real value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `presetArmorBonus(RealLevelClosure lc)`

### AbilityDefinitionItemProtectorSHStun

```wurst
public class AbilityDefinitionItemProtectorSHStun extends AbilityDefinition
```

'Apsx' / [AbilityIds.itemProtectorSHStun](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemProtectorSHStun)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemProtectorSHAttack

```wurst
public class AbilityDefinitionItemProtectorSHAttack extends AbilityDefinition
```

'Apsz' / [AbilityIds.itemProtectorSHAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemProtectorSHAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemPlaguewroughtAttack

```wurst
public class AbilityDefinitionItemPlaguewroughtAttack extends AbilityDefinition
```

'Apwa' / [AbilityIds.itemPlaguewroughtAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPlaguewroughtAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemPlaguewroughtPoison

```wurst
public class AbilityDefinitionItemPlaguewroughtPoison extends AbilityDefinition
```

'Apwp' / [AbilityIds.itemPlaguewroughtPoison](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPlaguewroughtPoison)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `setAttackSpeedFactor(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `setStackingType(int level, int value)`
- `presetStackingType(IntLevelClosure lc)`

### AbilityDefinitionItemPlaguewroughtCS

```wurst
public class AbilityDefinitionItemPlaguewroughtCS extends AbilityDefinition
```

'Apws' / [AbilityIds.itemPlaguewroughtCS](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemPlaguewroughtCS)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamage(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemRestorativeBalm

```wurst
public class AbilityDefinitionItemRestorativeBalm extends AbilityDefinition
```

'Arba' / [AbilityIds.itemRestorativeBalm](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRestorativeBalm)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemDiamondRingCDR

```wurst
public class AbilityDefinitionItemDiamondRingCDR extends AbilityDefinition
```

'Ardr' / [AbilityIds.itemDiamondRingCDR](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemDiamondRingCDR)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemRingOfHolyFireImmo

```wurst
public class AbilityDefinitionItemRingOfHolyFireImmo extends AbilityDefinition
```

'Arf1' / [AbilityIds.itemRingOfHolyFireImmo](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRingOfHolyFireImmo)

**Members:**

- `construct(int newAbilityId)`
- `setManaUsedPerSecond(int level, int value)`
- `setDamagePerDuration(int level, int value)`
- `setExtraManaRequired(int level, int value)`
- `presetManaUsedPerSecond(IntLevelClosure lc)`
- `presetDamagePerDuration(IntLevelClosure lc)`
- `presetExtraManaRequired(IntLevelClosure lc)`

### AbilityDefinitionItemRingOfHolyFireFL

```wurst
public class AbilityDefinitionItemRingOfHolyFireFL extends AbilityDefinition
```

'Arf2' / [AbilityIds.itemRingOfHolyFireFL](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRingOfHolyFireFL)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setDamageperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDistance(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemRingOfHolyFireAttack

```wurst
public class AbilityDefinitionItemRingOfHolyFireAttack extends AbilityDefinition
```

'Arf3' / [AbilityIds.itemRingOfHolyFireAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRingOfHolyFireAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionRingOfTheFirelandsAttack

```wurst
public class AbilityDefinitionRingOfTheFirelandsAttack extends AbilityDefinition
```

'Arfa' / [AbilityIds.ringOfTheFirelandsAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ringOfTheFirelandsAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionRingOfTheFirelandsCR

```wurst
public class AbilityDefinitionRingOfTheFirelandsCR extends AbilityDefinition
```

'Arfc' / [AbilityIds.ringOfTheFirelandsCR](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ringOfTheFirelandsCR)

**Members:**

- `construct(int newAbilityId)`
- `setBuildingDamageFactor(int level, real value)`
- `setDamageAmount(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamageInterval(int level, real value)`
- `setMissileCount(int level, int value)`
- `setEffectDuration(int level, real value)`
- `presetBuildingDamageFactor(RealLevelClosure lc)`
- `presetDamageAmount(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`
- `presetMissileCount(IntLevelClosure lc)`
- `presetEffectDuration(RealLevelClosure lc)`

### AbilityDefinitionItemRazoriceAttack1

```wurst
public class AbilityDefinitionItemRazoriceAttack1 extends AbilityDefinition
```

'Ari1' / [AbilityIds.itemRazoriceAttack1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRazoriceAttack1)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemRazoriceAttack2

```wurst
public class AbilityDefinitionItemRazoriceAttack2 extends AbilityDefinition
```

'Ari2' / [AbilityIds.itemRazoriceAttack2](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRazoriceAttack2)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionItemRazoriceBoF

```wurst
public class AbilityDefinitionItemRazoriceBoF extends AbilityDefinition
```

'Ari3' / [AbilityIds.itemRazoriceBoF](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRazoriceBoF)

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setDamage(int level, real value)`
- `presetDistance(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`
- `presetFinalArea(RealLevelClosure lc)`
- `presetMaxDamage(RealLevelClosure lc)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemRazoriceAttack4

```wurst
public class AbilityDefinitionItemRazoriceAttack4 extends AbilityDefinition
```

'Ari4' / [AbilityIds.itemRazoriceAttack4](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRazoriceAttack4)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemRuneOfFire

```wurst
public class AbilityDefinitionItemRuneOfFire extends AbilityDefinition
```

'Arof' / [AbilityIds.itemRuneOfFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRuneOfFire)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemRobesOfRevengeAttack

```wurst
public class AbilityDefinitionItemRobesOfRevengeAttack extends AbilityDefinition
```

'Arr1' / [AbilityIds.itemRobesOfRevengeAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemRobesOfRevengeAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionOnSpellAttackSample

```wurst
public class AbilityDefinitionOnSpellAttackSample extends AbilityDefinition
```

'Asas' / [AbilityIds.onSpellAttackSample](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-onSpellAttackSample)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemSanctifiedChestplateHeal

```wurst
public class AbilityDefinitionItemSanctifiedChestplateHeal extends AbilityDefinition
```

'Asc1' / [AbilityIds.itemSanctifiedChestplateHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSanctifiedChestplateHeal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionItemSanctifiedChestplateSpellcast

```wurst
public class AbilityDefinitionItemSanctifiedChestplateSpellcast extends AbilityDefinition
```

'Asc2' / [AbilityIds.itemSanctifiedChestplateSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSanctifiedChestplateSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemChillNova3

```wurst
public class AbilityDefinitionItemChillNova3 extends AbilityDefinition
```

'Asc3' / [AbilityIds.itemChillNova3](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemChillNova3)

**Members:**

- `construct(int newAbilityId)`
- `setAreaofEffectDamage(int level, real value)`
- `setSpecificTargetDamage(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `presetAreaofEffectDamage(RealLevelClosure lc)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionItemChillNova5

```wurst
public class AbilityDefinitionItemChillNova5 extends AbilityDefinition
```

'Asc5' / [AbilityIds.itemChillNova5](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemChillNova5)

**Members:**

- `construct(int newAbilityId)`
- `setAreaofEffectDamage(int level, real value)`
- `setSpecificTargetDamage(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `presetAreaofEffectDamage(RealLevelClosure lc)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionItemShieldOfTheScarletCrusadeAttack

```wurst
public class AbilityDefinitionItemShieldOfTheScarletCrusadeAttack extends AbilityDefinition
```

'Asca' / [AbilityIds.itemShieldOfTheScarletCrusadeAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemShieldOfTheScarletCrusadeAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemShieldOfTheScarletCrusadeHeal

```wurst
public class AbilityDefinitionItemShieldOfTheScarletCrusadeHeal extends AbilityDefinition
```

'Asch' / [AbilityIds.itemShieldOfTheScarletCrusadeHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemShieldOfTheScarletCrusadeHeal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionItemSanctifiedChestplateImmo

```wurst
public class AbilityDefinitionItemSanctifiedChestplateImmo extends AbilityDefinition
```

'Asci' / [AbilityIds.itemSanctifiedChestplateImmo](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSanctifiedChestplateImmo)

**Members:**

- `construct(int newAbilityId)`
- `setManaUsedPerSecond(int level, int value)`
- `setDamagePerDuration(int level, int value)`
- `setExtraManaRequired(int level, int value)`
- `presetManaUsedPerSecond(IntLevelClosure lc)`
- `presetDamagePerDuration(IntLevelClosure lc)`
- `presetExtraManaRequired(IntLevelClosure lc)`

### AbilityDefinitionItemScepterOfDarknessSummon

```wurst
public class AbilityDefinitionItemScepterOfDarknessSummon extends AbilityDefinition
```

'Asdd' / [AbilityIds.itemScepterOfDarknessSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemScepterOfDarknessSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionClericDispelMagic

```wurst
public class AbilityDefinitionClericDispelMagic extends AbilityDefinition
```

'Asdi' / [AbilityIds.clericDispelMagic](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-clericDispelMagic)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitDamage(int level, real value)`
- `setManaLoss(int level, real value)`
- `presetSummonedUnitDamage(RealLevelClosure lc)`
- `presetManaLoss(RealLevelClosure lc)`

### AbilityDefinitionItemScepterOfDarknessSpellcast

```wurst
public class AbilityDefinitionItemScepterOfDarknessSpellcast extends AbilityDefinition
```

'Asdx' / [AbilityIds.itemScepterOfDarknessSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemScepterOfDarknessSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionClericHeal

```wurst
public class AbilityDefinitionClericHeal extends AbilityDefinition
```

'Asea' / [AbilityIds.clericHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-clericHeal)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionInquisitorFlamestrike

```wurst
public class AbilityDefinitionInquisitorFlamestrike extends AbilityDefinition
```

'Asfs' / [AbilityIds.inquisitorFlamestrike](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inquisitorFlamestrike)

**Members:**

- `construct(int newAbilityId)`
- `setFullDamageInterval(int level, real value)`
- `setFullDamageDealt(int level, real value)`
- `setHalfDamageDealt(int level, real value)`
- `setBuildingReduction(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `setHalfDamageInterval(int level, real value)`
- `presetFullDamageInterval(RealLevelClosure lc)`
- `presetFullDamageDealt(RealLevelClosure lc)`
- `presetHalfDamageDealt(RealLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `presetHalfDamageInterval(RealLevelClosure lc)`

### AbilityDefinitionItemSanctifiedGauntletsImpale

```wurst
public class AbilityDefinitionItemSanctifiedGauntletsImpale extends AbilityDefinition
```

'Asg1' / [AbilityIds.itemSanctifiedGauntletsImpale](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSanctifiedGauntletsImpale)

**Members:**

- `construct(int newAbilityId)`
- `setWaveTimeseconds(int level, real value)`
- `setAirTimeseconds(int level, real value)`
- `setDamageDealt(int level, real value)`
- `setWaveDistance(int level, real value)`
- `setUninterruptible(int level, bool value)`
- `setAirborneTargetsVulnerable(int level, bool value)`
- `presetWaveTimeseconds(RealLevelClosure lc)`
- `presetAirTimeseconds(RealLevelClosure lc)`
- `presetDamageDealt(RealLevelClosure lc)`
- `presetWaveDistance(RealLevelClosure lc)`
- `presetUninterruptible(BooleanLevelClosure lc)`
- `presetAirborneTargetsVulnerable(BooleanLevelClosure lc)`

### AbilityDefinitionItemSanctifiedGauntletsAttack

```wurst
public class AbilityDefinitionItemSanctifiedGauntletsAttack extends AbilityDefinition
```

'Asg2' / [AbilityIds.itemSanctifiedGauntletsAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSanctifiedGauntletsAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemSwordOfTheGhostlandsAttack

```wurst
public class AbilityDefinitionItemSwordOfTheGhostlandsAttack extends AbilityDefinition
```

'Asga' / [AbilityIds.itemSwordOfTheGhostlandsAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSwordOfTheGhostlandsAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemSwordOfTheGhostlandsHoT

```wurst
public class AbilityDefinitionItemSwordOfTheGhostlandsHoT extends AbilityDefinition
```

'Asgh' / [AbilityIds.itemSwordOfTheGhostlandsHoT](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSwordOfTheGhostlandsHoT)

**Members:**

- `construct(int newAbilityId)`
- `setLifeRegenerationRate(int level, real value)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `setManaRegen(int level, real value)`
- `setDefenseIncrease(int level, int value)`
- `setPreferHostiles(int level, bool value)`
- `setPreferFriendlies(int level, bool value)`
- `setMaxUnits(int level, int value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `presetDamageIncrease(RealLevelClosure lc)`
- `presetManaRegen(RealLevelClosure lc)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionItemShepherdSCurse

```wurst
public class AbilityDefinitionItemShepherdSCurse extends AbilityDefinition
```

'Ashc' / [AbilityIds.itemShepherdSCurse](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemShepherdSCurse)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `setMorphUnitsAir(int level, string value)`
- `setMorphUnitsGround(int level, string value)`
- `setMorphUnitsWater(int level, string value)`
- `setMorphUnitsAmphibious(int level, string value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`
- `presetMorphUnitsAir(StringLevelClosure lc)`
- `presetMorphUnitsGround(StringLevelClosure lc)`
- `presetMorphUnitsWater(StringLevelClosure lc)`
- `presetMorphUnitsAmphibious(StringLevelClosure lc)`

### AbilityDefinitionSummonInfectiousGhoul

```wurst
public class AbilityDefinitionSummonInfectiousGhoul extends AbilityDefinition
```

'Asic' / [AbilityIds.summonInfectiousGhoul](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-summonInfectiousGhoul)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionClericInnerFire

```wurst
public class AbilityDefinitionClericInnerFire extends AbilityDefinition
```

'Asif' / [AbilityIds.clericInnerFire](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-clericInnerFire)

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Inf1'
- `setDefenseIncrease(int level, int value)`
- `setLifeRegenRate(int level, real value)`
- `setAutocastRange(int level, real value)`
- `presetDamageIncrease(RealLevelClosure lc)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `presetLifeRegenRate(RealLevelClosure lc)`
- `presetAutocastRange(RealLevelClosure lc)`

### AbilityDefinitionItemVestmentsStormKingMS

```wurst
public class AbilityDefinitionItemVestmentsStormKingMS extends AbilityDefinition
```

'Ask1' / [AbilityIds.itemVestmentsStormKingMS](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemVestmentsStormKingMS)

**Members:**

- `construct(int newAbilityId)`
- `setDamageDealt(int level, real value)`
- `setDamageInterval(int level, real value)`
- `setBuildingReduction(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionItemVestmentsStormKingSpellcast

```wurst
public class AbilityDefinitionItemVestmentsStormKingSpellcast extends AbilityDefinition
```

'Ask2' / [AbilityIds.itemVestmentsStormKingSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemVestmentsStormKingSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemTomeOfTheSpiderkindAttack

```wurst
public class AbilityDefinitionItemTomeOfTheSpiderkindAttack extends AbilityDefinition
```

'Aska' / [AbilityIds.itemTomeOfTheSpiderkindAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTomeOfTheSpiderkindAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemTomeOfTheSpiderkindSummon

```wurst
public class AbilityDefinitionItemTomeOfTheSpiderkindSummon extends AbilityDefinition
```

'Asks' / [AbilityIds.itemTomeOfTheSpiderkindSummon](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTomeOfTheSpiderkindSummon)

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitCount(IntLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionBandOfTheSkeletalMageFrostNova

```wurst
public class AbilityDefinitionBandOfTheSkeletalMageFrostNova extends AbilityDefinition
```

'Asmn' / [AbilityIds.bandOfTheSkeletalMageFrostNova](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bandOfTheSkeletalMageFrostNova)

**Members:**

- `construct(int newAbilityId)`
- `setAreaofEffectDamage(int level, real value)`
- `setSpecificTargetDamage(int level, real value)`
- `setMaximumDamage(int level, real value)`
- `presetAreaofEffectDamage(RealLevelClosure lc)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`
- `presetMaximumDamage(RealLevelClosure lc)`

### AbilityDefinitionBandOfTheSkeletalMageOrb

```wurst
public class AbilityDefinitionBandOfTheSkeletalMageOrb extends AbilityDefinition
```

'Asmo' / [AbilityIds.bandOfTheSkeletalMageOrb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bandOfTheSkeletalMageOrb)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `setEffectAbility(int level, string value)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `setDamageBonus(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `presetEffectAbility(StringLevelClosure lc)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionItemScytheOfFrostAura

```wurst
public class AbilityDefinitionItemScytheOfFrostAura extends AbilityDefinition
```

'Asof' / [AbilityIds.itemScytheOfFrostAura](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemScytheOfFrostAura)

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
  Movement Speed Increase (%) / 'Oae1'
- `setAttackSpeedIncrease(int level, real value)`
  Attack Speed Increase (%) / 'Oae2'
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemSoulstealerMana

```wurst
public class AbilityDefinitionItemSoulstealerMana extends AbilityDefinition
```

'Asr1' / [AbilityIds.itemSoulstealerMana](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSoulstealerMana)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemSoulstealerAttack

```wurst
public class AbilityDefinitionItemSoulstealerAttack extends AbilityDefinition
```

'Asr2' / [AbilityIds.itemSoulstealerAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSoulstealerAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemSeleneStarfall

```wurst
public class AbilityDefinitionItemSeleneStarfall extends AbilityDefinition
```

'Ass1' / [AbilityIds.itemSeleneStarfall](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSeleneStarfall)

**Members:**

- `construct(int newAbilityId)`
- `setDamageDealt(int level, real value)`
- `setDamageInterval(int level, real value)`
- `setBuildingReduction(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `presetDamageInterval(RealLevelClosure lc)`
- `presetBuildingReduction(RealLevelClosure lc)`

### AbilityDefinitionItemSeleneSpellcast

```wurst
public class AbilityDefinitionItemSeleneSpellcast extends AbilityDefinition
```

'Ass2' / [AbilityIds.itemSeleneSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSeleneSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionInquisitorSoulburn

```wurst
public class AbilityDefinitionInquisitorSoulburn extends AbilityDefinition
```

'Assb' / [AbilityIds.inquisitorSoulburn](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-inquisitorSoulburn)

**Members:**

- `construct(int newAbilityId)`
- `setDamageAmount(int level, real value)`
- `setDamagePeriod(int level, real value)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Nso4'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Nso5'
- `setDamagePenalty(int level, real value)`
- `presetDamageAmount(RealLevelClosure lc)`
- `presetDamagePeriod(RealLevelClosure lc)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetDamagePenalty(RealLevelClosure lc)`

### AbilityDefinitionItemSpellShield15

```wurst
public class AbilityDefinitionItemSpellShield15 extends AbilityDefinition
```

'Assq' / [AbilityIds.itemSpellShield15](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellShield15)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemSpellShield12

```wurst
public class AbilityDefinitionItemSpellShield12 extends AbilityDefinition
```

'Assw' / [AbilityIds.itemSpellShield12](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemSpellShield12)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemStormwalkersTC

```wurst
public class AbilityDefinitionItemStormwalkersTC extends AbilityDefinition
```

'Asw1' / [AbilityIds.itemStormwalkersTC](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemStormwalkersTC)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumDamage(int level, real value)`
- `setMovementSpeedReduction(int level, real value)`
  Movement Speed Reduction (%) / 'Htc3'
- `setAttackSpeedReduction(int level, real value)`
  Attack Speed Reduction (%) / 'Htc4'
- `setAOEDamage(int level, real value)`
- `setSpecificTargetDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `presetAOEDamage(RealLevelClosure lc)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemStormwalkersSpellcast

```wurst
public class AbilityDefinitionItemStormwalkersSpellcast extends AbilityDefinition
```

'Asw2' / [AbilityIds.itemStormwalkersSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemStormwalkersSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionOnHitChainLightningAttack

```wurst
public class AbilityDefinitionOnHitChainLightningAttack extends AbilityDefinition
```

'Asx1' / [AbilityIds.onHitChainLightningAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-onHitChainLightningAttack)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionBagOfDust

```wurst
public class AbilityDefinitionBagOfDust extends AbilityDefinition
```

'Atbd' / [AbilityIds.bagOfDust](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-bagOfDust)

**Members:**

- `construct(int newAbilityId)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionAtds

```wurst
public class AbilityDefinitionAtds extends AbilityDefinition
```

'Atds' / [AbilityIds.atds](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-atds)

**Members:**

- `construct(int newAbilityId)`
- `setAllowedDamageType(int level, string value)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAllowedDamageType(StringLevelClosure lc)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionForsakenFangs

```wurst
public class AbilityDefinitionForsakenFangs extends AbilityDefinition
```

'Atff' / [AbilityIds.forsakenFangs](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-forsakenFangs)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsperSecond(int level, real value)`
- `setMaxHitPoints(int level, real value)`
- `presetHitPointsperSecond(RealLevelClosure lc)`
- `presetMaxHitPoints(RealLevelClosure lc)`

### AbilityDefinitionKnightSJavelin

```wurst
public class AbilityDefinitionKnightSJavelin extends AbilityDefinition
```

'Atkj' / [AbilityIds.knightSJavelin](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-knightSJavelin)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionTiaraOfTheKirinTor

```wurst
public class AbilityDefinitionTiaraOfTheKirinTor extends AbilityDefinition
```

'Atkt' / [AbilityIds.tiaraOfTheKirinTor](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-tiaraOfTheKirinTor)

**Members:**

- `construct(int newAbilityId)`
- `setInitialDamage(int level, real value)`
- `setDamagePerSecond(int level, real value)`
- `presetInitialDamage(RealLevelClosure lc)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionItemManaBauble

```wurst
public class AbilityDefinitionItemManaBauble extends AbilityDefinition
```

'Atmb' / [AbilityIds.itemManaBauble](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemManaBauble)

**Members:**

- `construct(int newAbilityId)`
- `setMaximumManaAbsorbed(int level, real value)`
- `setMaximumLifeAbsorbed(int level, real value)`
- `presetMaximumManaAbsorbed(RealLevelClosure lc)`
- `presetMaximumLifeAbsorbed(RealLevelClosure lc)`

### AbilityDefinitionTalismanOfNightmaresOrb

```wurst
public class AbilityDefinitionTalismanOfNightmaresOrb extends AbilityDefinition
```

'Atno' / [AbilityIds.talismanOfNightmaresOrb](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talismanOfNightmaresOrb)

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
  Chance To Hit Units (%) / 'Iob2'
- `setChanceToHitSummons(int level, real value)`
  Chance To Hit Summons (%) / 'Iob4'
- `setEffectAbility(int level, string value)`
- `setChanceToHitHeros(int level, real value)`
  Chance To Hit Heros (%) / 'Iob3'
- `setDamageBonus(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `presetEffectAbility(StringLevelClosure lc)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`

### AbilityDefinitionTalismanOfNightmaresSleep

```wurst
public class AbilityDefinitionTalismanOfNightmaresSleep extends AbilityDefinition
```

'Atns' / [AbilityIds.talismanOfNightmaresSleep](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-talismanOfNightmaresSleep)

**Members:**

- `construct(int newAbilityId)`
- `setStunDuration(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`

### AbilityDefinitionThornguardRapierAttack

```wurst
public class AbilityDefinitionThornguardRapierAttack extends AbilityDefinition
```

'Atra' / [AbilityIds.thornguardRapierAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-thornguardRapierAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionThornguardRapierRejuvenation

```wurst
public class AbilityDefinitionThornguardRapierRejuvenation extends AbilityDefinition
```

'Atrr' / [AbilityIds.thornguardRapierRejuvenation](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-thornguardRapierRejuvenation)

**Members:**

- `construct(int newAbilityId)`
- `setNoTargetRequired(int level, bool value)`
- `setManaPointsGained(int level, real value)`
- `setHitPointsGained(int level, real value)`
- `presetNoTargetRequired(BooleanLevelClosure lc)`
- `presetManaPointsGained(RealLevelClosure lc)`
- `presetHitPointsGained(RealLevelClosure lc)`
- `setAllowWhenFull(int level, int value)`
- `presetAllowWhenFull(IntLevelClosure lc)`

### AbilityDefinitionItemTheScreecherHoT

```wurst
public class AbilityDefinitionItemTheScreecherHoT extends AbilityDefinition
```

'Ats1' / [AbilityIds.itemTheScreecherHoT](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTheScreecherHoT)

**Members:**

- `construct(int newAbilityId)`
- `setLifeRegenerationRate(int level, real value)`
- `setDamageIncrease(int level, real value)`
  Damage Increase (%) / 'Roa1'
- `setManaRegen(int level, real value)`
- `setDefenseIncrease(int level, int value)`
- `setPreferHostiles(int level, bool value)`
- `setPreferFriendlies(int level, bool value)`
- `setMaxUnits(int level, int value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`
- `presetDamageIncrease(RealLevelClosure lc)`
- `presetManaRegen(RealLevelClosure lc)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `presetPreferHostiles(BooleanLevelClosure lc)`
- `presetPreferFriendlies(BooleanLevelClosure lc)`
- `presetMaxUnits(IntLevelClosure lc)`

### AbilityDefinitionItemTheScreecherAttack

```wurst
public class AbilityDefinitionItemTheScreecherAttack extends AbilityDefinition
```

'Ats2' / [AbilityIds.itemTheScreecherAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemTheScreecherAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionInfectiousClaws

```wurst
public class AbilityDefinitionInfectiousClaws extends AbilityDefinition
```

'Auic' / [AbilityIds.infectiousClaws](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-infectiousClaws)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setSummonedUnitType(int level, string value)`
- `setNumberofSummonedUnits(int level, int value)`
- `setSummonedUnitDurationseconds(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetSummonedUnitType(StringLevelClosure lc)`
- `presetNumberofSummonedUnits(IntLevelClosure lc)`
- `presetSummonedUnitDurationseconds(RealLevelClosure lc)`

### AbilityDefinitionItemLostSpiritsHeal

```wurst
public class AbilityDefinitionItemLostSpiritsHeal extends AbilityDefinition
```

'Avb1' / [AbilityIds.itemLostSpiritsHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLostSpiritsHeal)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemLostSpiritsSpellcast

```wurst
public class AbilityDefinitionItemLostSpiritsSpellcast extends AbilityDefinition
```

'Avb2' / [AbilityIds.itemLostSpiritsSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemLostSpiritsSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemVestmentsWaveHeal

```wurst
public class AbilityDefinitionItemVestmentsWaveHeal extends AbilityDefinition
```

'Avm1' / [AbilityIds.itemVestmentsWaveHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemVestmentsWaveHeal)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemVestmentsWaveSpellcast

```wurst
public class AbilityDefinitionItemVestmentsWaveSpellcast extends AbilityDefinition
```

'Avm2' / [AbilityIds.itemVestmentsWaveSpellcast](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemVestmentsWaveSpellcast)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `setTargetType(int level, string value)`
- `presetAbility(StringLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`

### AbilityDefinitionItemBloodstoneHeal

```wurst
public class AbilityDefinitionItemBloodstoneHeal extends AbilityDefinition
```

'Avs1' / [AbilityIds.itemBloodstoneHeal](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBloodstoneHeal)

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionItemBloodstoneAttack

```wurst
public class AbilityDefinitionItemBloodstoneAttack extends AbilityDefinition
```

'Avs2' / [AbilityIds.itemBloodstoneAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemBloodstoneAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionItemZandalariGiantcrusherWS

```wurst
public class AbilityDefinitionItemZandalariGiantcrusherWS extends AbilityDefinition
```

'Azgw' / [AbilityIds.itemZandalariGiantcrusherWS](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemZandalariGiantcrusherWS)

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionItemZandalariGiantcrusherAttack

```wurst
public class AbilityDefinitionItemZandalariGiantcrusherAttack extends AbilityDefinition
```

'Azgx' / [AbilityIds.itemZandalariGiantcrusherAttack](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemZandalariGiantcrusherAttack)

**Members:**

- `construct(int newAbilityId)`
- `setAbility(int level, string value)`
- `setHitchanceonHero(int level, int value)`
  % Hit chance on Hero / 'oap2'
- `setTargetType(int level, string value)`
- `setHitchanceonCriticalStrike(int level, int value)`
  % Hit chance on Critical Strike / 'oap4'
- `setHitchanceonSummon(int level, int value)`
  % Hit chance on Summon / 'oap3'
- `setHitchanceonUnit(int level, int value)`
  % Hit chance on Unit / 'oap1'
- `setHitChance(int level, int value)`
  % Hit Chance / 'opp2'
- `presetAbility(StringLevelClosure lc)`
- `presetHitchanceonHero(IntLevelClosure lc)`
- `presetTargetType(StringLevelClosure lc)`
- `presetHitchanceonCriticalStrike(IntLevelClosure lc)`
- `presetHitchanceonSummon(IntLevelClosure lc)`
- `presetHitchanceonUnit(IntLevelClosure lc)`
- `presetHitChance(IntLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier1a

```wurst
public class AbilityDefinitionLeonidTalentTier1a extends AbilityDefinition
```

'BT1a' / [AbilityIds.leonidTalentTier1a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier1a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier1b

```wurst
public class AbilityDefinitionLeonidTalentTier1b extends AbilityDefinition
```

'BT1b' / [AbilityIds.leonidTalentTier1b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier1b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier1c

```wurst
public class AbilityDefinitionLeonidTalentTier1c extends AbilityDefinition
```

'BT1c' / [AbilityIds.leonidTalentTier1c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier1c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier2a

```wurst
public class AbilityDefinitionLeonidTalentTier2a extends AbilityDefinition
```

'BT2a' / [AbilityIds.leonidTalentTier2a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier2a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier2b

```wurst
public class AbilityDefinitionLeonidTalentTier2b extends AbilityDefinition
```

'BT2b' / [AbilityIds.leonidTalentTier2b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier2b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier2c

```wurst
public class AbilityDefinitionLeonidTalentTier2c extends AbilityDefinition
```

'BT2c' / [AbilityIds.leonidTalentTier2c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier2c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier3a

```wurst
public class AbilityDefinitionLeonidTalentTier3a extends AbilityDefinition
```

'BT3a' / [AbilityIds.leonidTalentTier3a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier3a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier3b

```wurst
public class AbilityDefinitionLeonidTalentTier3b extends AbilityDefinition
```

'BT3b' / [AbilityIds.leonidTalentTier3b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier3b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier3c

```wurst
public class AbilityDefinitionLeonidTalentTier3c extends AbilityDefinition
```

'BT3c' / [AbilityIds.leonidTalentTier3c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier3c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier4a

```wurst
public class AbilityDefinitionLeonidTalentTier4a extends AbilityDefinition
```

'BT4a' / [AbilityIds.leonidTalentTier4a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier4a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier4b

```wurst
public class AbilityDefinitionLeonidTalentTier4b extends AbilityDefinition
```

'BT4b' / [AbilityIds.leonidTalentTier4b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier4b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidTalentTier4c

```wurst
public class AbilityDefinitionLeonidTalentTier4c extends AbilityDefinition
```

'BT4c' / [AbilityIds.leonidTalentTier4c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidTalentTier4c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLeonidDamageReductionTalent

```wurst
public class AbilityDefinitionLeonidDamageReductionTalent extends AbilityDefinition
```

'BT5a' / [AbilityIds.leonidDamageReductionTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidDamageReductionTalent)

**Members:**

- `construct(int newAbilityId)`
- `setMinimumDamage(int level, real value)`
- `setIncludeRangedDamage(int level, bool value)`
- `setIncludeMeleeDamage(int level, bool value)`
- `setChancetoReduceDamage(int level, real value)`
  Chance to Reduce Damage (%) / 'Ssk1'
- `setIgnoredDamage(int level, real value)`
- `presetMinimumDamage(RealLevelClosure lc)`
- `presetIncludeRangedDamage(BooleanLevelClosure lc)`
- `presetIncludeMeleeDamage(BooleanLevelClosure lc)`
- `presetChancetoReduceDamage(RealLevelClosure lc)`
- `presetIgnoredDamage(RealLevelClosure lc)`

### AbilityDefinitionLeonidResolveTalent

```wurst
public class AbilityDefinitionLeonidResolveTalent extends AbilityDefinition
```

'BT5b' / [AbilityIds.leonidResolveTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidResolveTalent)

**Members:**

- `construct(int newAbilityId)`
- `setResolve(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetResolve(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionLeonidHealthRegenerationTalent

```wurst
public class AbilityDefinitionLeonidHealthRegenerationTalent extends AbilityDefinition
```

'BT5c' / [AbilityIds.leonidHealthRegenerationTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidHealthRegenerationTalent)

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionLeonidPlusStrAgiTalent

```wurst
public class AbilityDefinitionLeonidPlusStrAgiTalent extends AbilityDefinition
```

'BT6a' / [AbilityIds.leonidPlusStrAgiTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidPlusStrAgiTalent)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionLeonidMagicResistTalent

```wurst
public class AbilityDefinitionLeonidMagicResistTalent extends AbilityDefinition
```

'BT6b' / [AbilityIds.leonidMagicResistTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidMagicResistTalent)

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `setDamageReduction(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetDamageReduction(RealLevelClosure lc)`

### AbilityDefinitionLeonidManaEfficiencyTalent

```wurst
public class AbilityDefinitionLeonidManaEfficiencyTalent extends AbilityDefinition
```

'BT6c' / [AbilityIds.leonidManaEfficiencyTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-leonidManaEfficiencyTalent)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionGarekTalentTier1a

```wurst
public class AbilityDefinitionGarekTalentTier1a extends AbilityDefinition
```

'GT1a' / [AbilityIds.garekTalentTier1a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier1a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier1b

```wurst
public class AbilityDefinitionGarekTalentTier1b extends AbilityDefinition
```

'GT1b' / [AbilityIds.garekTalentTier1b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier1b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier1c

```wurst
public class AbilityDefinitionGarekTalentTier1c extends AbilityDefinition
```

'GT1c' / [AbilityIds.garekTalentTier1c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier1c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier2a

```wurst
public class AbilityDefinitionGarekTalentTier2a extends AbilityDefinition
```

'GT2a' / [AbilityIds.garekTalentTier2a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier2a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier2b

```wurst
public class AbilityDefinitionGarekTalentTier2b extends AbilityDefinition
```

'GT2b' / [AbilityIds.garekTalentTier2b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier2b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier2c

```wurst
public class AbilityDefinitionGarekTalentTier2c extends AbilityDefinition
```

'GT2c' / [AbilityIds.garekTalentTier2c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier2c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier3a

```wurst
public class AbilityDefinitionGarekTalentTier3a extends AbilityDefinition
```

'GT3a' / [AbilityIds.garekTalentTier3a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier3a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier3b

```wurst
public class AbilityDefinitionGarekTalentTier3b extends AbilityDefinition
```

'GT3b' / [AbilityIds.garekTalentTier3b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier3b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier3c

```wurst
public class AbilityDefinitionGarekTalentTier3c extends AbilityDefinition
```

'GT3c' / [AbilityIds.garekTalentTier3c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier3c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier4a

```wurst
public class AbilityDefinitionGarekTalentTier4a extends AbilityDefinition
```

'GT4a' / [AbilityIds.garekTalentTier4a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier4a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier4b

```wurst
public class AbilityDefinitionGarekTalentTier4b extends AbilityDefinition
```

'GT4b' / [AbilityIds.garekTalentTier4b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier4b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekTalentTier4c

```wurst
public class AbilityDefinitionGarekTalentTier4c extends AbilityDefinition
```

'GT4c' / [AbilityIds.garekTalentTier4c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekTalentTier4c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier1a

```wurst
public class AbilityDefinitionIlastarTalentTier1a extends AbilityDefinition
```

'IT1a' / [AbilityIds.ilastarTalentTier1a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier1a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier1b

```wurst
public class AbilityDefinitionIlastarTalentTier1b extends AbilityDefinition
```

'IT1b' / [AbilityIds.ilastarTalentTier1b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier1b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier1c

```wurst
public class AbilityDefinitionIlastarTalentTier1c extends AbilityDefinition
```

'IT1c' / [AbilityIds.ilastarTalentTier1c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier1c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier2a

```wurst
public class AbilityDefinitionIlastarTalentTier2a extends AbilityDefinition
```

'IT2a' / [AbilityIds.ilastarTalentTier2a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier2a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier2b

```wurst
public class AbilityDefinitionIlastarTalentTier2b extends AbilityDefinition
```

'IT2b' / [AbilityIds.ilastarTalentTier2b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier2b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier2c

```wurst
public class AbilityDefinitionIlastarTalentTier2c extends AbilityDefinition
```

'IT2c' / [AbilityIds.ilastarTalentTier2c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier2c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier3a

```wurst
public class AbilityDefinitionIlastarTalentTier3a extends AbilityDefinition
```

'IT3a' / [AbilityIds.ilastarTalentTier3a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier3a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier3b

```wurst
public class AbilityDefinitionIlastarTalentTier3b extends AbilityDefinition
```

'IT3b' / [AbilityIds.ilastarTalentTier3b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier3b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier3c

```wurst
public class AbilityDefinitionIlastarTalentTier3c extends AbilityDefinition
```

'IT3c' / [AbilityIds.ilastarTalentTier3c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier3c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier4a

```wurst
public class AbilityDefinitionIlastarTalentTier4a extends AbilityDefinition
```

'IT4a' / [AbilityIds.ilastarTalentTier4a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier4a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier4b

```wurst
public class AbilityDefinitionIlastarTalentTier4b extends AbilityDefinition
```

'IT4b' / [AbilityIds.ilastarTalentTier4b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier4b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier4c

```wurst
public class AbilityDefinitionIlastarTalentTier4c extends AbilityDefinition
```

'IT4c' / [AbilityIds.ilastarTalentTier4c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier4c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionIlastarTalentTier6c

```wurst
public class AbilityDefinitionIlastarTalentTier6c extends AbilityDefinition
```

'IT6c' / [AbilityIds.ilastarTalentTier6c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ilastarTalentTier6c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier1a

```wurst
public class AbilityDefinitionLandenTalentTier1a extends AbilityDefinition
```

'LT1a' / [AbilityIds.landenTalentTier1a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier1a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier1b

```wurst
public class AbilityDefinitionLandenTalentTier1b extends AbilityDefinition
```

'LT1b' / [AbilityIds.landenTalentTier1b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier1b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier1c

```wurst
public class AbilityDefinitionLandenTalentTier1c extends AbilityDefinition
```

'LT1c' / [AbilityIds.landenTalentTier1c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier1c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier2a

```wurst
public class AbilityDefinitionLandenTalentTier2a extends AbilityDefinition
```

'LT2a' / [AbilityIds.landenTalentTier2a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier2a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier2b

```wurst
public class AbilityDefinitionLandenTalentTier2b extends AbilityDefinition
```

'LT2b' / [AbilityIds.landenTalentTier2b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier2b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier2c

```wurst
public class AbilityDefinitionLandenTalentTier2c extends AbilityDefinition
```

'LT2c' / [AbilityIds.landenTalentTier2c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier2c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier3a

```wurst
public class AbilityDefinitionLandenTalentTier3a extends AbilityDefinition
```

'LT3a' / [AbilityIds.landenTalentTier3a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier3a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier3b

```wurst
public class AbilityDefinitionLandenTalentTier3b extends AbilityDefinition
```

'LT3b' / [AbilityIds.landenTalentTier3b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier3b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier3c

```wurst
public class AbilityDefinitionLandenTalentTier3c extends AbilityDefinition
```

'LT3c' / [AbilityIds.landenTalentTier3c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier3c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier4a

```wurst
public class AbilityDefinitionLandenTalentTier4a extends AbilityDefinition
```

'LT4a' / [AbilityIds.landenTalentTier4a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier4a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier4b

```wurst
public class AbilityDefinitionLandenTalentTier4b extends AbilityDefinition
```

'LT4b' / [AbilityIds.landenTalentTier4b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier4b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionLandenTalentTier4c

```wurst
public class AbilityDefinitionLandenTalentTier4c extends AbilityDefinition
```

'LT4c' / [AbilityIds.landenTalentTier4c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-landenTalentTier4c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier1a

```wurst
public class AbilityDefinitionUgarekTalentTier1a extends AbilityDefinition
```

'UT1a' / [AbilityIds.ugarekTalentTier1a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier1a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier1b

```wurst
public class AbilityDefinitionUgarekTalentTier1b extends AbilityDefinition
```

'UT1b' / [AbilityIds.ugarekTalentTier1b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier1b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier1c

```wurst
public class AbilityDefinitionUgarekTalentTier1c extends AbilityDefinition
```

'UT1c' / [AbilityIds.ugarekTalentTier1c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier1c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier2a

```wurst
public class AbilityDefinitionUgarekTalentTier2a extends AbilityDefinition
```

'UT2a' / [AbilityIds.ugarekTalentTier2a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier2a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier2b

```wurst
public class AbilityDefinitionUgarekTalentTier2b extends AbilityDefinition
```

'UT2b' / [AbilityIds.ugarekTalentTier2b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier2b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier2c

```wurst
public class AbilityDefinitionUgarekTalentTier2c extends AbilityDefinition
```

'UT2c' / [AbilityIds.ugarekTalentTier2c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier2c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier3a

```wurst
public class AbilityDefinitionUgarekTalentTier3a extends AbilityDefinition
```

'UT3a' / [AbilityIds.ugarekTalentTier3a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier3a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier3b

```wurst
public class AbilityDefinitionUgarekTalentTier3b extends AbilityDefinition
```

'UT3b' / [AbilityIds.ugarekTalentTier3b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier3b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier3c

```wurst
public class AbilityDefinitionUgarekTalentTier3c extends AbilityDefinition
```

'UT3c' / [AbilityIds.ugarekTalentTier3c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier3c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier4a

```wurst
public class AbilityDefinitionUgarekTalentTier4a extends AbilityDefinition
```

'UT4a' / [AbilityIds.ugarekTalentTier4a](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier4a)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier4b

```wurst
public class AbilityDefinitionUgarekTalentTier4b extends AbilityDefinition
```

'UT4b' / [AbilityIds.ugarekTalentTier4b](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier4b)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionUgarekTalentTier4c

```wurst
public class AbilityDefinitionUgarekTalentTier4c extends AbilityDefinition
```

'UT4c' / [AbilityIds.ugarekTalentTier4c](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-ugarekTalentTier4c)

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
  Ability Upgrade 1 / 'Neg3'
- `setAbilityUpgrade1(int level, string value)`
  Ability Upgrade 3 / 'Neg5'
- `setAbilityUpgrade2(int level, string value)`
  Ability Upgrade 4 / 'Neg6'
- `setMoveSpeedBonus(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setAbilityUpgrade3(int level, string value)`
  Ability Upgrade 2 / 'Neg4'
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `presetDamageBonus(RealLevelClosure lc)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionGarekArmorTalent

```wurst
public class AbilityDefinitionGarekArmorTalent extends AbilityDefinition
```

'UT5a' / [AbilityIds.garekArmorTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekArmorTalent)

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionGarekSpellAmpTalent

```wurst
public class AbilityDefinitionGarekSpellAmpTalent extends AbilityDefinition
```

'UT5b' / [AbilityIds.garekSpellAmpTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekSpellAmpTalent)

**Members:**

- `construct(int newAbilityId)`
- `setSpellAmp(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setAppliestoHealingfromItems(int level, bool value)`
- `presetSpellAmp(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetAppliestoHealingfromItems(BooleanLevelClosure lc)`

### AbilityDefinitionGarekPlusStrengIntTalent

```wurst
public class AbilityDefinitionGarekPlusStrengIntTalent extends AbilityDefinition
```

'UT5c' / [AbilityIds.garekPlusStrengIntTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekPlusStrengIntTalent)

**Members:**

- `construct(int newAbilityId)`
- `setAgilityBonus(int level, int value)`
- `setStrengthBonus(int level, int value)`
- `setHideButton(int level, bool value)`
- `setIntelligenceBonus(int level, int value)`
- `presetAgilityBonus(IntLevelClosure lc)`
- `presetStrengthBonus(IntLevelClosure lc)`
- `presetHideButton(BooleanLevelClosure lc)`
- `presetIntelligenceBonus(IntLevelClosure lc)`

### AbilityDefinitionGarekCleaveTalent

```wurst
public class AbilityDefinitionGarekCleaveTalent extends AbilityDefinition
```

'UT6a' / [AbilityIds.garekCleaveTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekCleaveTalent)

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionGarekCooldownReductionTalent

```wurst
public class AbilityDefinitionGarekCooldownReductionTalent extends AbilityDefinition
```

'UT6b' / [AbilityIds.garekCooldownReductionTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekCooldownReductionTalent)

**Members:**

- `construct(int newAbilityId)`
- `setCooldownReduction(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `presetCooldownReduction(RealLevelClosure lc)`
- `presetFlatBonus(BooleanLevelClosure lc)`

### AbilityDefinitionGarekManaEfficiencyTalent

```wurst
public class AbilityDefinitionGarekManaEfficiencyTalent extends AbilityDefinition
```

'UT6c' / [AbilityIds.garekManaEfficiencyTalent](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-garekManaEfficiencyTalent)

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `setManaEfficiency(int level, real value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `presetManaEfficiency(RealLevelClosure lc)`

### AbilityDefinitionArmorBonus

```wurst
public class AbilityDefinitionArmorBonus extends AbilityDefinitionDefenseBonusPlus1
```

'AId1' / [AbilityIds.itemArmorBonus](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-itemArmorBonus)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionBeserk

```wurst
public class AbilityDefinitionBeserk extends AbilityDefinitionBerserk
```

'Absk' / [AbilityIds.berserkerRage1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-berserkerRage1)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionAlliedBuilding

```wurst
public class AbilityDefinitionAlliedBuilding extends AbilityDefinitionShopSharing
```

'Aall' / [AbilityIds.shopSharingAlliedBldg](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-shopSharingAlliedBldg)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemChainLightning

```wurst
public class AbilityDefinitionItemChainLightning extends AbilityDefinitionChainLightningcreep
```

'ACcl' / [AbilityIds.chainLightning](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-chainLightning)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSlow1

```wurst
public class AbilityDefinitionSlow1 extends AbilityDefinitionSlowCreep
```

'ACsw' / [AbilityIds.slow1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-slow1)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionCyclone1

```wurst
public class AbilityDefinitionCyclone1 extends AbilityDefinitionCyclone
```

'Acyc' / [AbilityIds.cyclone1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-cyclone1)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionColdArrows

```wurst
public class AbilityDefinitionColdArrows extends AbilityDefinitionRangerColdArrows
```

'AHca' / [AbilityIds.coldArrows](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-coldArrows)

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionHealingWard1

```wurst
public class AbilityDefinitionHealingWard1 extends AbilityDefinitionHealingWard
```

'Ahwd' / [AbilityIds.healingWard1](/stdlib/ref/_wurst/AbilityIds.html#AbilityIds-healingWard1)

**Members:**

- `construct(int newAbilityId)`

## Interfaces

### TooltipGenerator

```wurst
public interface TooltipGenerator
```

**Members:**

- `addProperty(string title, StringLevelClosure lc)`
- `applyToDef(AbilityDefinition def)`

## Enums

### AllowWhenFull

```wurst
public enum AllowWhenFull
```

**Values:** `NEVER`, `LIFE_ONLY`, `MANA_ONLY`, `ALWAYS`

### StackingType

```wurst
public enum StackingType
```

**Values:** `DAMAGE`, `MOVEMENT`, `ATTACK_RATE`, `KILL_UNIT`

### StackFlag

```wurst
public enum StackFlag
```

**Values:** `DAMAGE`, `MOVEMENT`, `ATTACK_RATE`, `KILL_UNIT`

### MorphingFlag

```wurst
public enum MorphingFlag
```

**Values:** `UNINTERRUPTABLE`, `IMMEDIATE_LANDING`, `IMMEDIATE_TAKE_OFF`, `PERMANENT`, `REQUIRES_PAYMENT`

## Extension Functions

### AbilityDefinition.setDummyAbility

```wurst
public function AbilityDefinition.setDummyAbility() returns AbilityDefinition
```

Makes an ability able to be cast by a dummy

## Constants

### USE_PROPERTY_SPACING

```wurst
constant USE_PROPERTY_SPACING = true
```

> 🔧 **Configurable.** Override it in your map's config package.

Configure this variable to `false` if you don't want the
	property names to have spaces.
