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
- `setTargetAttachmentPoint1(string value)`
- `setTargetAttachmentPoint2(string value)`
- `setTargetAttachmentPoint3(string value)`
- `setTargetAttachmentPoint4(string value)`
- `setTargetAttachmentPoint5(string value)`
- `setCasterAttachments(int value)`
- `setCasterAttachmentPoint(string value)`
- `setCasterAttachmentPoint1(string value)`
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

### AbilityDefinitionTaunt

```wurst
public class AbilityDefinitionTaunt extends AbilityDefinition
```

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

### AbilityDefinitionPoisonArrows

```wurst
public class AbilityDefinitionPoisonArrows extends AbilityDefinition
```

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

### AbilityDefinitionRangerColdArrows

```wurst
public class AbilityDefinitionRangerColdArrows extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `presetSummonedUnitType(StringLevelClosure lc)`

### AbilityDefinitionAgilityBonusPlus4

```wurst
public class AbilityDefinitionAgilityBonusPlus4 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionPaladinDivineShield

```wurst
public class AbilityDefinitionPaladinDivineShield extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setCanDeactivate(int level, bool value)`
- `presetCanDeactivate(BooleanLevelClosure lc)`

### AbilityDefinitionPurgeCreep

```wurst
public class AbilityDefinitionPurgeCreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
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

### AbilityDefinitionRejuvinationFurbolg

```wurst
public class AbilityDefinitionRejuvinationFurbolg extends AbilityDefinition
```

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

### AbilityDefinitionPulverizecreep

```wurst
public class AbilityDefinitionPulverizecreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHalfDamageRadius(int level, real value)`
- `presetHalfDamageRadius(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setChancetoStomp(int level, real value)`
- `presetChancetoStomp(RealLevelClosure lc)`

### AbilityDefinitionBeastMasterSummonHawk

```wurst
public class AbilityDefinitionBeastMasterSummonHawk extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setDamageAmount(int level, real value)`
- `presetDamageAmount(RealLevelClosure lc)`
- `setDamagePeriod(int level, real value)`
- `presetDamagePeriod(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `setDamagePenalty(int level, real value)`
- `presetDamagePenalty(RealLevelClosure lc)`

### AbilityDefinitionBeastMasterSummonQuilbeast

```wurst
public class AbilityDefinitionBeastMasterSummonQuilbeast extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `setScalingFactor(int level, real value)`
- `presetScalingFactor(RealLevelClosure lc)`

### AbilityDefinitionMalganisSoulPreservation

```wurst
public class AbilityDefinitionMalganisSoulPreservation extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUnittoPreserve(int level, string value)`
- `presetUnittoPreserve(StringLevelClosure lc)`

### AbilityDefinitionBeastMasterSummonBear

```wurst
public class AbilityDefinitionBeastMasterSummonBear extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionSanctuary

```wurst
public class AbilityDefinitionSanctuary extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDayNightDuration(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setShieldCooldownTime(int level, real value)`
- `presetShieldCooldownTime(RealLevelClosure lc)`

### AbilityDefinitionItemAuraEndurance

```wurst
public class AbilityDefinitionItemAuraEndurance extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionSpiritPigcreep

```wurst
public class AbilityDefinitionSpiritPigcreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackModification(int level, int value)`
- `presetAttackModification(IntLevelClosure lc)`

### AbilityDefinitionMountainKingAvatar

```wurst
public class AbilityDefinitionMountainKingAvatar extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`
- `presetReincarnationDelay(RealLevelClosure lc)`

### AbilityDefinitionAnimateDead

```wurst
public class AbilityDefinitionAnimateDead extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setStunDuration(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`

### AbilityDefinitionRaiseDeadCreep

```wurst
public class AbilityDefinitionRaiseDeadCreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonus(int level, real value)`
- `presetAttackSpeedBonus(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionPaladinDevotionAura

```wurst
public class AbilityDefinitionPaladinDevotionAura extends AbilityDefinition
```

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

### AbilityDefinitionRainofFire

```wurst
public class AbilityDefinitionRainofFire extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageStolen(int level, real value)`
- `presetAttackDamageStolen(RealLevelClosure lc)`

### AbilityDefinitionItemAuraUnholy

```wurst
public class AbilityDefinitionItemAuraUnholy extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `setLifeRegenerationIncrease(int level, real value)`
- `presetLifeRegenerationIncrease(RealLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionArchMageBrillianceAura

```wurst
public class AbilityDefinitionArchMageBrillianceAura extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAIas

```wurst
public class AbilityDefinitionAIas extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionReincarnationcreep

```wurst
public class AbilityDefinitionReincarnationcreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`
- `presetReincarnationDelay(RealLevelClosure lc)`

### AbilityDefinitionItemAuraTrueshot

```wurst
public class AbilityDefinitionItemAuraTrueshot extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `setRangedBonus(int level, bool value)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setMeleeBonus(int level, bool value)`
- `presetMeleeBonus(BooleanLevelClosure lc)`

### AbilityDefinitionThunderClapThunderLizard

```wurst
public class AbilityDefinitionThunderClapThunderLizard extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionItemAuraBrilliance

```wurst
public class AbilityDefinitionItemAuraBrilliance extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionCryptLordSpikedCarapace

```wurst
public class AbilityDefinitionCryptLordSpikedCarapace extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionSearingArrowscreep

```wurst
public class AbilityDefinitionSearingArrowscreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionTinkererSummonFactoryLevel1

```wurst
public class AbilityDefinitionTinkererSummonFactoryLevel1 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus2

```wurst
public class AbilityDefinitionDefenseBonusPlus2 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionTinkererSummonFactoryLevel3

```wurst
public class AbilityDefinitionTinkererSummonFactoryLevel3 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionShockwaveCreep

```wurst
public class AbilityDefinitionShockwaveCreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionSilenceCreep

```wurst
public class AbilityDefinitionSilenceCreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionSleepcreep

```wurst
public class AbilityDefinitionSleepcreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setStunDuration(int level, real value)`
- `presetStunDuration(RealLevelClosure lc)`

### AbilityDefinitionBashitem

```wurst
public class AbilityDefinitionBashitem extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionMountainKingBash

```wurst
public class AbilityDefinitionMountainKingBash extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionBuildTinyScoutTower

```wurst
public class AbilityDefinitionBuildTinyScoutTower extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`
- `presetUnitCreatedperplayerrace(StringLevelClosure lc)`

### AbilityDefinitionItemCloakOfFlames

```wurst
public class AbilityDefinitionItemCloakOfFlames extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionMagicImmunityArchimonde

```wurst
public class AbilityDefinitionMagicImmunityArchimonde extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionOrbofCorruption

```wurst
public class AbilityDefinitionOrbofCorruption extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`
- `presetCanBeDispelled(BooleanLevelClosure lc)`

### AbilityDefinitionExhume

```wurst
public class AbilityDefinitionExhume extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionExperienceModgreater

```wurst
public class AbilityDefinitionExperienceModgreater extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setExperienceGained(int level, int value)`
- `presetExperienceGained(IntLevelClosure lc)`

### AbilityDefinitionArmorBonus

```wurst
public class AbilityDefinitionArmorBonus extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus7

```wurst
public class AbilityDefinitionDefenseBonusPlus7 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus8

```wurst
public class AbilityDefinitionDefenseBonusPlus8 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionDefenseBonusPlus10

```wurst
public class AbilityDefinitionDefenseBonusPlus10 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`
- `presetDefenseBonus(IntLevelClosure lc)`

### AbilityDefinitionDefendItem

```wurst
public class AbilityDefinitionDefendItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageTaken(int level, real value)`
- `presetDamageTaken(RealLevelClosure lc)`
- `setChancetoDeflect(int level, real value)`
- `presetChancetoDeflect(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setChanceToHitSummons(int level, real value)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `setChanceToHitHeros(int level, real value)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setEffectAbility(int level, string value)`
- `presetEffectAbility(StringLevelClosure lc)`

### AbilityDefinitionItemDispelAoe

```wurst
public class AbilityDefinitionItemDispelAoe extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldShip

```wurst
public class AbilityDefinitionCargoHoldShip extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionCannibalize

```wurst
public class AbilityDefinitionCannibalize extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionItemDefenseAoe

```wurst
public class AbilityDefinitionItemDefenseAoe extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionCargoHoldMeatWagon

```wurst
public class AbilityDefinitionCargoHoldMeatWagon extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionItemDispelChain

```wurst
public class AbilityDefinitionItemDispelChain extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemDefenseAoePlusHealing

```wurst
public class AbilityDefinitionItemDefenseAoePlusHealing extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionKeeperoftheGroveTranquility

```wurst
public class AbilityDefinitionKeeperoftheGroveTranquility extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setBackstabDamage(int level, real value)`
- `presetBackstabDamage(RealLevelClosure lc)`
- `setBackstabDamage(int level, bool value)`
- `presetBackstabDamage(BooleanLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setTransitionTime(int level, real value)`
- `presetTransitionTime(RealLevelClosure lc)`
- `setStartCooldownWhenDecloak(int level, bool value)`
- `presetStartCooldownWhenDecloak(BooleanLevelClosure lc)`

### AbilityDefinitionManaShieldCreep

```wurst
public class AbilityDefinitionManaShieldCreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageAbsorbed(int level, real value)`
- `presetDamageAbsorbed(RealLevelClosure lc)`
- `setManaperHitPoint(int level, real value)`
- `presetManaperHitPoint(RealLevelClosure lc)`

### AbilityDefinitionWateryMinion

```wurst
public class AbilityDefinitionWateryMinion extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldDevour

```wurst
public class AbilityDefinitionCargoHoldDevour extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setExperienceGained(int level, int value)`
- `presetExperienceGained(IntLevelClosure lc)`

### AbilityDefinitionCloudofFogItem

```wurst
public class AbilityDefinitionCloudofFogItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionDisenchantold

```wurst
public class AbilityDefinitionDisenchantold extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionFigurineFelHound

```wurst
public class AbilityDefinitionFigurineFelHound extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionFireDamageBonus

```wurst
public class AbilityDefinitionFireDamageBonus extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionFirelordVolcano

```wurst
public class AbilityDefinitionFirelordVolcano extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionHealingWard

```wurst
public class AbilityDefinitionHealingWard extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionFlareGun

```wurst
public class AbilityDefinitionFlareGun extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionNeutralRegenhealthonly

```wurst
public class AbilityDefinitionNeutralRegenhealthonly extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionInvisibility

```wurst
public class AbilityDefinitionInvisibility extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setTransitionTimeseconds(int level, real value)`
- `presetTransitionTimeseconds(RealLevelClosure lc)`

### AbilityDefinitionSentryWard

```wurst
public class AbilityDefinitionSentryWard extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionFigurineRockGolem

```wurst
public class AbilityDefinitionFigurineRockGolem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionFigurineSkeleton

```wurst
public class AbilityDefinitionFigurineSkeleton extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionSubmergeMyrmidon

```wurst
public class AbilityDefinitionSubmergeMyrmidon extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionSubmergeSnapDragon

```wurst
public class AbilityDefinitionSubmergeSnapDragon extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionItemHealGreater

```wurst
public class AbilityDefinitionItemHealGreater extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionItemHealLeast

```wurst
public class AbilityDefinitionItemHealLeast extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionGiveGold

```wurst
public class AbilityDefinitionGiveGold extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setGoldGiven(int level, int value)`
- `presetGoldGiven(IntLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus1

```wurst
public class AbilityDefinitionIntelligenceBonusPlus1 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionIntelligenceBonusPlus3

```wurst
public class AbilityDefinitionIntelligenceBonusPlus3 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamageTakenIncrease(int level, real value)`
- `presetDamageTakenIncrease(RealLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionBeserk

```wurst
public class AbilityDefinitionBeserk extends AbilityDefinitionBerserk
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionReplenishLifeMana

```wurst
public class AbilityDefinitionReplenishLifeMana extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionHealCreepHigh

```wurst
public class AbilityDefinitionHealCreepHigh extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionAuraSlow

```wurst
public class AbilityDefinitionAuraSlow extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionSuperEarthquake

```wurst
public class AbilityDefinitionSuperEarthquake extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUnitsSlowed(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionAgilityModPlus2

```wurst
public class AbilityDefinitionAgilityModPlus2 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionIllidanMetamorphosis

```wurst
public class AbilityDefinitionIllidanMetamorphosis extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionBattlestations

```wurst
public class AbilityDefinitionBattlestations extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAutocastRange(int level, real value)`
- `presetAutocastRange(RealLevelClosure lc)`
- `setLifeRegenRate(int level, real value)`
- `presetLifeRegenRate(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setDamageIncrease(int level, real value)`
- `presetDamageIncrease(RealLevelClosure lc)`

### AbilityDefinitionAncestralSpirit

```wurst
public class AbilityDefinitionAncestralSpirit extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionPulverize

```wurst
public class AbilityDefinitionPulverize extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHalfDamageRadius(int level, real value)`
- `presetHalfDamageRadius(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setFullDamageRadius(int level, real value)`
- `presetFullDamageRadius(RealLevelClosure lc)`
- `setChancetoStomp(int level, real value)`
- `presetChancetoStomp(RealLevelClosure lc)`

### AbilityDefinitionItemHealAoe

```wurst
public class AbilityDefinitionItemHealAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionAIhe

```wurst
public class AbilityDefinitionAIhe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`
- `presetHitPointsGained(IntLevelClosure lc)`

### AbilityDefinitionFarseerEarthquake

```wurst
public class AbilityDefinitionFarseerEarthquake extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUnitsSlowed(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionFigurineIceRevenant

```wurst
public class AbilityDefinitionFigurineIceRevenant extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionSuperDeathandDecay

```wurst
public class AbilityDefinitionSuperDeathandDecay extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setMaxLifeDrainedperSecond(int level, real value)`
- `presetMaxLifeDrainedperSecond(RealLevelClosure lc)`

### AbilityDefinitionDarkConversionFast

```wurst
public class AbilityDefinitionDarkConversionFast extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamageReceivedMultiplier(int level, real value)`
- `presetDamageReceivedMultiplier(RealLevelClosure lc)`
- `setDamageDealtofnormal(int level, real value)`
- `presetDamageDealtofnormal(RealLevelClosure lc)`

### AbilityDefinitionMagicDefense

```wurst
public class AbilityDefinitionMagicDefense extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageTaken(int level, real value)`
- `presetDamageTaken(RealLevelClosure lc)`
- `setChancetoDeflect(int level, real value)`
- `presetChancetoDeflect(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionInferno

```wurst
public class AbilityDefinitionInferno extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setNumberofUnitsCreated(int level, int value)`
- `presetNumberofUnitsCreated(IntLevelClosure lc)`

### AbilityDefinitionMaxLifeBonusLesser

```wurst
public class AbilityDefinitionMaxLifeBonusLesser extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionPurgeApg2

```wurst
public class AbilityDefinitionPurgeApg2 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`
- `presetCanBeDispelled(BooleanLevelClosure lc)`

### AbilityDefinitionAuraPlagueCreepnodamage

```wurst
public class AbilityDefinitionAuraPlagueCreepnodamage extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setBuildingTypesAllowed(int level, string value)`
- `presetBuildingTypesAllowed(StringLevelClosure lc)`

### AbilityDefinitionShadowMeldAkama

```wurst
public class AbilityDefinitionShadowMeldAkama extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDayNightDuration(int level, real value)`
- `presetDayNightDuration(RealLevelClosure lc)`
- `setActionDuration(int level, real value)`
- `presetActionDuration(RealLevelClosure lc)`
- `setFadeDuration(int level, real value)`
- `presetFadeDuration(RealLevelClosure lc)`

### AbilityDefinitionCripplecreep

```wurst
public class AbilityDefinitionCripplecreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageReduction(int level, real value)`
- `presetDamageReduction(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionCursecreep

```wurst
public class AbilityDefinitionCursecreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChancetoMiss(int level, real value)`
- `presetChancetoMiss(RealLevelClosure lc)`

### AbilityDefinitionCriticalStrikecreep

```wurst
public class AbilityDefinitionCriticalStrikecreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`
- `presetCanBeDispelled(BooleanLevelClosure lc)`

### AbilityDefinitionItemManaRestoreGreater

```wurst
public class AbilityDefinitionItemManaRestoreGreater extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`

### AbilityDefinitionItemManaRestoreLesser

```wurst
public class AbilityDefinitionItemManaRestoreLesser extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`

### AbilityDefinitionStoneForm

```wurst
public class AbilityDefinitionStoneForm extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionManaSteal

```wurst
public class AbilityDefinitionManaSteal extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionTichondriusInferno

```wurst
public class AbilityDefinitionTichondriusInferno extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionCarrionSwarmcreep

```wurst
public class AbilityDefinitionCarrionSwarmcreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionNeutralBuildinganyunit

```wurst
public class AbilityDefinitionNeutralBuildinganyunit extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMaxCreepLevel(int level, int value)`
- `presetMaxCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionGiveLumber

```wurst
public class AbilityDefinitionGiveLumber extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setLumberGiven(int level, int value)`
- `presetLumberGiven(IntLevelClosure lc)`

### AbilityDefinitionFireBoltwarlock

```wurst
public class AbilityDefinitionFireBoltwarlock extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionDrainLifeCreep

```wurst
public class AbilityDefinitionDrainLifeCreep extends AbilityDefinition
```

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

### AbilityDefinitionPaladinHolyLight

```wurst
public class AbilityDefinitionPaladinHolyLight extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`
- `presetAmountHealedDamaged(RealLevelClosure lc)`

### AbilityDefinitionLevelMod

```wurst
public class AbilityDefinitionLevelMod extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setLevelsGained(int level, int value)`
- `presetLevelsGained(IntLevelClosure lc)`

### AbilityDefinitionOrbofLightning

```wurst
public class AbilityDefinitionOrbofLightning extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setChanceToHitSummons(int level, real value)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `setChanceToHitHeros(int level, real value)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setEffectAbility(int level, string value)`
- `presetEffectAbility(StringLevelClosure lc)`

### AbilityDefinitionLightningShieldAIls

```wurst
public class AbilityDefinitionLightningShieldAIls extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionParasite

```wurst
public class AbilityDefinitionParasite extends AbilityDefinition
```

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

### AbilityDefinitionDemonHunterMetamorphosis

```wurst
public class AbilityDefinitionDemonHunterMetamorphosis extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`
- `presetAmountHealedDamaged(RealLevelClosure lc)`

### AbilityDefinitionDemonHunterManaBurn

```wurst
public class AbilityDefinitionDemonHunterManaBurn extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionEvasioncreep100

```wurst
public class AbilityDefinitionEvasioncreep100 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionVenomSpears

```wurst
public class AbilityDefinitionVenomSpears extends AbilityDefinition
```

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

### AbilityDefinitionEvasioncreep

```wurst
public class AbilityDefinitionEvasioncreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldBurrow

```wurst
public class AbilityDefinitionCargoHoldBurrow extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionMagicImmunityAImx

```wurst
public class AbilityDefinitionMagicImmunityAImx extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionBurrow

```wurst
public class AbilityDefinitionBurrow extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`
- `presetCanBeDispelled(BooleanLevelClosure lc)`

### AbilityDefinitionItemManaRestoreAoe

```wurst
public class AbilityDefinitionItemManaRestoreAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`
- `presetManaPointsGained(IntLevelClosure lc)`

### AbilityDefinitionStaffoTeleportation

```wurst
public class AbilityDefinitionStaffoTeleportation extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionMoveSpeedBonus

```wurst
public class AbilityDefinitionMoveSpeedBonus extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedBonus(int level, int value)`
- `presetMovementSpeedBonus(IntLevelClosure lc)`

### AbilityDefinitionPhoenix

```wurst
public class AbilityDefinitionPhoenix extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`
- `presetMaxManaGained(IntLevelClosure lc)`

### AbilityDefinitionShadowHunterHealingWave

```wurst
public class AbilityDefinitionShadowHunterHealingWave extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionAIml

```wurst
public class AbilityDefinitionAIml extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionPermanentHitpointBonusfromchargeditem

```wurst
public class AbilityDefinitionPermanentHitpointBonusfromchargeditem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`
- `presetMaxLifeGained(IntLevelClosure lc)`

### AbilityDefinitionFeedbackArcaneTower

```wurst
public class AbilityDefinitionFeedbackArcaneTower extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaDrainedUnits(int level, real value)`
- `presetMaxManaDrainedUnits(RealLevelClosure lc)`
- `setDamageRatioUnits(int level, real value)`
- `presetDamageRatioUnits(RealLevelClosure lc)`
- `setMaxManaDrainedHeros(int level, real value)`
- `presetMaxManaDrainedHeros(RealLevelClosure lc)`
- `setDamageRatioHeros(int level, real value)`
- `presetDamageRatioHeros(RealLevelClosure lc)`
- `setSummonedDamage(int level, real value)`
- `presetSummonedDamage(RealLevelClosure lc)`

### AbilityDefinitionChaosGrunt

```wurst
public class AbilityDefinitionChaosGrunt extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionChaosRaider

```wurst
public class AbilityDefinitionChaosRaider extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionStasisTrap

```wurst
public class AbilityDefinitionStasisTrap extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionChaosKodo

```wurst
public class AbilityDefinitionChaosKodo extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionChaosPeon

```wurst
public class AbilityDefinitionChaosPeon extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionFrostDamageBonus

```wurst
public class AbilityDefinitionFrostDamageBonus extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionInnerFire

```wurst
public class AbilityDefinitionInnerFire extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAutocastRange(int level, real value)`
- `presetAutocastRange(RealLevelClosure lc)`
- `setLifeRegenRate(int level, real value)`
- `presetLifeRegenRate(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setDamageIncrease(int level, real value)`
- `presetDamageIncrease(RealLevelClosure lc)`

### AbilityDefinitionMoonPriestessSearingArrows

```wurst
public class AbilityDefinitionMoonPriestessSearingArrows extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`

### AbilityDefinitionMonsoon

```wurst
public class AbilityDefinitionMonsoon extends AbilityDefinition
```

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
- `presetDamageIncrease(RealLevelClosure lc)`
- `setDefenseIncrease(int level, int value)`
- `presetDefenseIncrease(IntLevelClosure lc)`
- `setLifeRegenerationRate(int level, real value)`
- `presetLifeRegenerationRate(RealLevelClosure lc)`

### AbilityDefinitionSeaWitchManaShield

```wurst
public class AbilityDefinitionSeaWitchManaShield extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageAbsorbed(int level, real value)`
- `presetDamageAbsorbed(RealLevelClosure lc)`
- `setManaperHitPoint(int level, real value)`
- `presetManaperHitPoint(RealLevelClosure lc)`

### AbilityDefinitionSpawnSpiderlingOnDeath

```wurst
public class AbilityDefinitionSpawnSpiderlingOnDeath extends AbilityDefinition
```

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

### AbilityDefinitionMindRot

```wurst
public class AbilityDefinitionMindRot extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaDrainedperSecond(int level, real value)`
- `presetManaDrainedperSecond(RealLevelClosure lc)`

### AbilityDefinitionFrostNovacreep

```wurst
public class AbilityDefinitionFrostNovacreep extends AbilityDefinition
```

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

### AbilityDefinitionPermanentInvisibility

```wurst
public class AbilityDefinitionPermanentInvisibility extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAutoAcquireAttackTargets(int level, bool value)`
- `presetAutoAcquireAttackTargets(BooleanLevelClosure lc)`

### AbilityDefinitionFeedbackSpiritBeast

```wurst
public class AbilityDefinitionFeedbackSpiritBeast extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonedDamage(int level, real value)`
- `presetSummonedDamage(RealLevelClosure lc)`
- `setMaxManaDrainedUnits(int level, real value)`
- `presetMaxManaDrainedUnits(RealLevelClosure lc)`
- `setDamageRatioUnits(int level, real value)`
- `presetDamageRatioUnits(RealLevelClosure lc)`
- `setMaxManaDrainedHeros(int level, real value)`
- `presetMaxManaDrainedHeros(RealLevelClosure lc)`
- `setDamageRatioHeros(int level, real value)`
- `presetDamageRatioHeros(RealLevelClosure lc)`

### AbilityDefinitionPotionofRejuvIV

```wurst
public class AbilityDefinitionPotionofRejuvIV extends AbilityDefinition
```

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

### AbilityDefinitionPotionofRejuvIII

```wurst
public class AbilityDefinitionPotionofRejuvIII extends AbilityDefinition
```

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

### AbilityDefinitionFlameStrikeCreep

```wurst
public class AbilityDefinitionFlameStrikeCreep extends AbilityDefinition
```

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

### AbilityDefinitionHardenedSkin

```wurst
public class AbilityDefinitionHardenedSkin extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setIncludeRangedDamage(int level, bool value)`
- `presetIncludeRangedDamage(BooleanLevelClosure lc)`
- `setMinimumDamage(int level, real value)`
- `presetMinimumDamage(RealLevelClosure lc)`
- `setIgnoredDamage(int level, real value)`
- `presetIgnoredDamage(RealLevelClosure lc)`
- `setChancetoReduceDamage(int level, real value)`
- `presetChancetoReduceDamage(RealLevelClosure lc)`
- `setIncludeMeleeDamage(int level, bool value)`
- `presetIncludeMeleeDamage(BooleanLevelClosure lc)`

### AbilityDefinitionForceofNaturecreep

```wurst
public class AbilityDefinitionForceofNaturecreep extends AbilityDefinition
```

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

### AbilityDefinitionFeedback

```wurst
public class AbilityDefinitionFeedback extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonedDamage(int level, real value)`
- `presetSummonedDamage(RealLevelClosure lc)`
- `setDamageRatioUnits(int level, real value)`
- `presetDamageRatioUnits(RealLevelClosure lc)`
- `setMaxManaDrainedHeros(int level, real value)`
- `presetMaxManaDrainedHeros(RealLevelClosure lc)`
- `setMaxManaDrainedUnits(int level, real value)`
- `presetMaxManaDrainedUnits(RealLevelClosure lc)`
- `setDamageRatioHeros(int level, real value)`
- `presetDamageRatioHeros(RealLevelClosure lc)`

### AbilityDefinitionStrengthModPlus2

```wurst
public class AbilityDefinitionStrengthModPlus2 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `setScalingFactor(int level, real value)`
- `presetScalingFactor(RealLevelClosure lc)`

### AbilityDefinitionRoarAIrr

```wurst
public class AbilityDefinitionRoarAIrr extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionItemRevealMap

```wurst
public class AbilityDefinitionItemRevealMap extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionBashcreep

```wurst
public class AbilityDefinitionBashcreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionPossession

```wurst
public class AbilityDefinitionPossession extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionPotionofLifeRegen

```wurst
public class AbilityDefinitionPotionofLifeRegen extends AbilityDefinition
```

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

### AbilityDefinitionDarkRangerCharm

```wurst
public class AbilityDefinitionDarkRangerCharm extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaximumCreepLevel(int level, int value)`
- `presetMaximumCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionBreathofFrostCreep

```wurst
public class AbilityDefinitionBreathofFrostCreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionItemRegenManalesser

```wurst
public class AbilityDefinitionItemRegenManalesser extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaRegenerationBonusasfractionofnormal(int level, real value)`
- `presetManaRegenerationBonusasfractionofnormal(RealLevelClosure lc)`

### AbilityDefinitionAuraBrilliancecreep

```wurst
public class AbilityDefinitionAuraBrilliancecreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDistributedDamageFactor(int level, real value)`
- `presetDistributedDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionSilenceItem

```wurst
public class AbilityDefinitionSilenceItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionSummonHeadhunteritem

```wurst
public class AbilityDefinitionSummonHeadhunteritem extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setSightRangeBonus(int level, int value)`
- `presetSightRangeBonus(IntLevelClosure lc)`

### AbilityDefinitionBlizzardcreep

```wurst
public class AbilityDefinitionBlizzardcreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionAntimagicShieldMatrix

```wurst
public class AbilityDefinitionAntimagicShieldMatrix extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionBladeMasterMirrorImage

```wurst
public class AbilityDefinitionBladeMasterMirrorImage extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setNumberofImages(int level, int value)`
- `presetNumberofImages(IntLevelClosure lc)`
- `setDamageTaken(int level, real value)`
- `presetDamageTaken(RealLevelClosure lc)`
- `setAnimationDelay(int level, real value)`
- `presetAnimationDelay(RealLevelClosure lc)`

### AbilityDefinitionWardenBlink

```wurst
public class AbilityDefinitionWardenBlink extends AbilityDefinition
```

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

### AbilityDefinitionOrbofSpells

```wurst
public class AbilityDefinitionOrbofSpells extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
- `presetChanceToHitUnits(RealLevelClosure lc)`
- `setEnabledAttackIndex(int level, int value)`
- `presetEnabledAttackIndex(IntLevelClosure lc)`
- `setChanceToHitSummons(int level, real value)`
- `presetChanceToHitSummons(RealLevelClosure lc)`
- `setChanceToHitHeros(int level, real value)`
- `presetChanceToHitHeros(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setEffectAbility(int level, string value)`
- `presetEffectAbility(StringLevelClosure lc)`

### AbilityDefinitionItemSpeedAoe

```wurst
public class AbilityDefinitionItemSpeedAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionUnholyFrenzy

```wurst
public class AbilityDefinitionUnholyFrenzy extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonus(int level, real value)`
- `presetAttackSpeedBonus(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionAntimagicShieldcreep

```wurst
public class AbilityDefinitionAntimagicShieldcreep extends AbilityDefinition
```

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

### AbilityDefinitionFlare

```wurst
public class AbilityDefinitionFlare extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `setRangedBonus(int level, bool value)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setMeleeBonus(int level, bool value)`
- `presetMeleeBonus(BooleanLevelClosure lc)`

### AbilityDefinitionStrengthBonusPlus4

```wurst
public class AbilityDefinitionStrengthBonusPlus4 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setSpiderCapacity(int level, int value)`
- `presetSpiderCapacity(IntLevelClosure lc)`

### AbilityDefinitionSpiritLink

```wurst
public class AbilityDefinitionSpiritLink extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `presetAttackSpeedModifier(RealLevelClosure lc)`
- `setMovementSpeedModifier(int level, real value)`
- `presetMovementSpeedModifier(RealLevelClosure lc)`
- `setChanceToMiss(int level, real value)`
- `presetChanceToMiss(RealLevelClosure lc)`
- `setAttacksPrevented(int level, int value)`
- `presetAttacksPrevented(IntLevelClosure lc)`

### AbilityDefinitionAnimateDeadcreep

```wurst
public class AbilityDefinitionAnimateDeadcreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemRestore

```wurst
public class AbilityDefinitionItemRestore extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setRestoredLife(int level, int value)`
- `presetRestoredLife(IntLevelClosure lc)`
- `setDelayAfterDeathseconds(int level, int value)`
- `presetDelayAfterDeathseconds(IntLevelClosure lc)`
- `setRestoredManaforcurrent(int level, int value)`
- `presetRestoredManaforcurrent(IntLevelClosure lc)`

### AbilityDefinitionTinkererDemolishLevel0

```wurst
public class AbilityDefinitionTinkererDemolishLevel0 extends AbilityDefinition
```

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

### AbilityDefinitionMalganisDarkConversion

```wurst
public class AbilityDefinitionMalganisDarkConversion extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setFlatBonus(int level, bool value)`
- `presetFlatBonus(BooleanLevelClosure lc)`
- `setRangedBonus(int level, bool value)`
- `presetRangedBonus(BooleanLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setMeleeBonus(int level, bool value)`
- `presetMeleeBonus(BooleanLevelClosure lc)`

### AbilityDefinitionItemRestoreAoe

```wurst
public class AbilityDefinitionItemRestoreAoe extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageStolen(int level, real value)`
- `presetAttackDamageStolen(RealLevelClosure lc)`

### AbilityDefinitionTinkererClusterRocketsLevel3

```wurst
public class AbilityDefinitionTinkererClusterRocketsLevel3 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `setLifeRegenerationIncrease(int level, real value)`
- `presetLifeRegenerationIncrease(RealLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionItemPotionVampirism

```wurst
public class AbilityDefinitionItemPotionVampirism extends AbilityDefinition
```

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

### AbilityDefinitionCoupleInstantArcher

```wurst
public class AbilityDefinitionCoupleInstantArcher extends AbilityDefinition
```

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

### AbilityDefinitionTinkererClusterRocketsLevel1

```wurst
public class AbilityDefinitionTinkererClusterRocketsLevel1 extends AbilityDefinition
```

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

### AbilityDefinitionDeathKnightAnimateDead

```wurst
public class AbilityDefinitionDeathKnightAnimateDead extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setUnitType(int level, string value)`
- `presetUnitType(StringLevelClosure lc)`

### AbilityDefinitionBloodMagePhoenix

```wurst
public class AbilityDefinitionBloodMagePhoenix extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamageInterval(int level, real value)`
- `presetDamageInterval(RealLevelClosure lc)`
- `setPrimaryDamage(int level, real value)`
- `presetPrimaryDamage(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`
- `setArmorPenalty(int level, int value)`
- `presetArmorPenalty(IntLevelClosure lc)`
- `setSecondaryDamage(int level, real value)`
- `presetSecondaryDamage(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionPermanentImmolationflying

```wurst
public class AbilityDefinitionPermanentImmolationflying extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setCargoCapacity(int level, int value)`
- `presetCargoCapacity(IntLevelClosure lc)`

### AbilityDefinitionAerialShackles

```wurst
public class AbilityDefinitionAerialShackles extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionOrbofVenom

```wurst
public class AbilityDefinitionOrbofVenom extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionAlliedBuilding

```wurst
public class AbilityDefinitionAlliedBuilding extends AbilityDefinition
```

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

### AbilityDefinitionControlMagic

```wurst
public class AbilityDefinitionControlMagic extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `presetDamagePerSecond(RealLevelClosure lc)`

### AbilityDefinitionRootAncients

```wurst
public class AbilityDefinitionRootAncients extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setBuildingReduction(int level, real value)`
- `presetBuildingReduction(RealLevelClosure lc)`
- `setMaxLifeDrainedperSecond(int level, real value)`
- `presetMaxLifeDrainedperSecond(RealLevelClosure lc)`

### AbilityDefinitionItemWeb

```wurst
public class AbilityDefinitionItemWeb extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionWardenFanofKnives

```wurst
public class AbilityDefinitionWardenFanofKnives extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`
- `presetAmountHealedDamaged(RealLevelClosure lc)`

### AbilityDefinitionPhaseShift

```wurst
public class AbilityDefinitionPhaseShift extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionSleepAlways

```wurst
public class AbilityDefinitionSleepAlways extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setSummonUnitType(int level, string value)`
- `presetSummonUnitType(StringLevelClosure lc)`
- `setSummonAmount(int level, int value)`
- `presetSummonAmount(IntLevelClosure lc)`
- `setSummonUnitType1(int level, string value)`
- `presetSummonUnitType1(StringLevelClosure lc)`
- `setSummonAmount1(int level, int value)`
- `presetSummonAmount1(IntLevelClosure lc)`

### AbilityDefinitionElunesGrace

```wurst
public class AbilityDefinitionElunesGrace extends AbilityDefinition
```

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
- `presetDamageTaken(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
- `presetDamageDealt(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`

### AbilityDefinitionReturnLumber

```wurst
public class AbilityDefinitionReturnLumber extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionDemonHunterEvasion

```wurst
public class AbilityDefinitionDemonHunterEvasion extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `presetChancetoEvade(RealLevelClosure lc)`

### AbilityDefinitionPitLordHowlofTerror

```wurst
public class AbilityDefinitionPitLordHowlofTerror extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionLightningShield

```wurst
public class AbilityDefinitionLightningShield extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionVampiricattackAIva

```wurst
public class AbilityDefinitionVampiricattackAIva extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionCoupleHippogryph

```wurst
public class AbilityDefinitionCoupleHippogryph extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionRuneofGreaterResurrection

```wurst
public class AbilityDefinitionRuneofGreaterResurrection extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`
- `presetReincarnationDelay(RealLevelClosure lc)`

### AbilityDefinitionCoupleArcher

```wurst
public class AbilityDefinitionCoupleArcher extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus10

```wurst
public class AbilityDefinitionAttackBonusPlus10 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionTinkererRoboGoblinLevel3

```wurst
public class AbilityDefinitionTinkererRoboGoblinLevel3 extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionCripple

```wurst
public class AbilityDefinitionCripple extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageReduction(int level, real value)`
- `presetDamageReduction(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionFlakCannon

```wurst
public class AbilityDefinitionFlakCannon extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitTypes(int level, string value)`
- `presetSummonedUnitTypes(StringLevelClosure lc)`

### AbilityDefinitionTinkererEngineeringUpgrade

```wurst
public class AbilityDefinitionTinkererEngineeringUpgrade extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAbilityUpgrade(int level, string value)`
- `presetAbilityUpgrade(StringLevelClosure lc)`
- `setAbilityUpgrade1(int level, string value)`
- `presetAbilityUpgrade1(StringLevelClosure lc)`
- `setAbilityUpgrade2(int level, string value)`
- `presetAbilityUpgrade2(StringLevelClosure lc)`
- `setMoveSpeedBonus(int level, real value)`
- `presetMoveSpeedBonus(RealLevelClosure lc)`
- `setDamageBonus(int level, real value)`
- `presetDamageBonus(RealLevelClosure lc)`
- `setAbilityUpgrade3(int level, string value)`
- `presetAbilityUpgrade3(StringLevelClosure lc)`

### AbilityDefinitionMine

```wurst
public class AbilityDefinitionMine extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setMagicDamageFactor(int level, real value)`
- `presetMagicDamageFactor(RealLevelClosure lc)`

### AbilityDefinitionLichFrostNova

```wurst
public class AbilityDefinitionLichFrostNova extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionBloodlust

```wurst
public class AbilityDefinitionBloodlust extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`
- `setScalingFactor(int level, real value)`
- `presetScalingFactor(RealLevelClosure lc)`

### AbilityDefinitionDeathKnightDeathPact

```wurst
public class AbilityDefinitionDeathKnightDeathPact extends AbilityDefinition
```

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

### AbilityDefinitionHealCreepNormalAnhe

```wurst
public class AbilityDefinitionHealCreepNormalAnhe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, real value)`
- `presetHitPointsGained(RealLevelClosure lc)`

### AbilityDefinitionAttackSpeedIncrease

```wurst
public class AbilityDefinitionAttackSpeedIncrease extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `presetAttackSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionDefend

```wurst
public class AbilityDefinitionDefend extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageTaken(int level, real value)`
- `presetDamageTaken(RealLevelClosure lc)`
- `setChancetoDeflect(int level, real value)`
- `presetChancetoDeflect(RealLevelClosure lc)`
- `setMovementSpeedFactor(int level, real value)`
- `presetMovementSpeedFactor(RealLevelClosure lc)`
- `setAttackSpeedFactor(int level, real value)`
- `presetAttackSpeedFactor(RealLevelClosure lc)`
- `setDamageDealt(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionGrabTree

```wurst
public class AbilityDefinitionGrabTree extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionAttackBonusAItc

```wurst
public class AbilityDefinitionAttackBonusAItc extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionItemDetectAoe

```wurst
public class AbilityDefinitionItemDetectAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDetectionRadius(int level, string value)`
- `presetDetectionRadius(StringLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus5

```wurst
public class AbilityDefinitionAttackBonusPlus5 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus7

```wurst
public class AbilityDefinitionAttackBonusPlus7 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus2

```wurst
public class AbilityDefinitionAttackBonusPlus2 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionDevour

```wurst
public class AbilityDefinitionDevour extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxCreepLevel(int level, int value)`
- `presetMaxCreepLevel(IntLevelClosure lc)`

### AbilityDefinitionAttackBonusPlus4

```wurst
public class AbilityDefinitionAttackBonusPlus4 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionMountainKingThunderClap

```wurst
public class AbilityDefinitionMountainKingThunderClap extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setSpecificTargetDamage(int level, real value)`
- `presetSpecificTargetDamage(RealLevelClosure lc)`
- `setAOEDamage(int level, real value)`
- `presetAOEDamage(RealLevelClosure lc)`
- `setMaximumDamage(int level, real value)`
- `presetMaximumDamage(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionAttackBonusAItf

```wurst
public class AbilityDefinitionAttackBonusAItf extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionAdet

```wurst
public class AbilityDefinitionAdet extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionFingerofDeath

```wurst
public class AbilityDefinitionFingerofDeath extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`
- `presetAttackBonus(IntLevelClosure lc)`

### AbilityDefinitionSeaWitchFrostArrows

```wurst
public class AbilityDefinitionSeaWitchFrostArrows extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionMountainKingThunderBolt

```wurst
public class AbilityDefinitionMountainKingThunderBolt extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionSentinel

```wurst
public class AbilityDefinitionSentinel extends AbilityDefinition
```

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

### AbilityDefinitionArchMageSummonWaterElemental

```wurst
public class AbilityDefinitionArchMageSummonWaterElemental extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAllowedUnitType(int level, string value)`
- `presetAllowedUnitType(StringLevelClosure lc)`

### AbilityDefinitionDispelMagiccreep

```wurst
public class AbilityDefinitionDispelMagiccreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionPhoenixFire

```wurst
public class AbilityDefinitionPhoenixFire extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDayNightDuration(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setDamageIncrease(int level, real value)`
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

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionPIlotTankRifleman

```wurst
public class AbilityDefinitionPIlotTankRifleman extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamageReduction(int level, real value)`
- `presetDamageReduction(RealLevelClosure lc)`
- `setAttackSpeedReduction(int level, real value)`
- `presetAttackSpeedReduction(RealLevelClosure lc)`
- `setMovementSpeedReduction(int level, real value)`
- `presetMovementSpeedReduction(RealLevelClosure lc)`

### AbilityDefinitionFarseerSpiritWolf

```wurst
public class AbilityDefinitionFarseerSpiritWolf extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`
- `presetWardUnitType(StringLevelClosure lc)`

### AbilityDefinitionVampiricattack

```wurst
public class AbilityDefinitionVampiricattack extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setLifeStolenPerAttack(int level, real value)`
- `presetLifeStolenPerAttack(RealLevelClosure lc)`

### AbilityDefinitionCargoHoldDeath

```wurst
public class AbilityDefinitionCargoHoldDeath extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setNewUnitType(int level, string value)`
- `presetNewUnitType(StringLevelClosure lc)`

### AbilityDefinitionUnholyFrenzycreep

```wurst
public class AbilityDefinitionUnholyFrenzycreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonus(int level, real value)`
- `presetAttackSpeedBonus(RealLevelClosure lc)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionRenew

```wurst
public class AbilityDefinitionRenew extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRegeneratedPerSecond(int level, int value)`
- `presetHitPointsRegeneratedPerSecond(IntLevelClosure lc)`

### AbilityDefinitionBlightGrowthLarge

```wurst
public class AbilityDefinitionBlightGrowthLarge extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setPercentBonus(int level, bool value)`
- `presetPercentBonus(BooleanLevelClosure lc)`
- `setLifeRegenerationIncrease(int level, real value)`
- `presetLifeRegenerationIncrease(RealLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`

### AbilityDefinitionRepairOrc

```wurst
public class AbilityDefinitionRepairOrc extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionNeutralSpies

```wurst
public class AbilityDefinitionNeutralSpies extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setResultingUnitType(int level, string value)`
- `presetResultingUnitType(StringLevelClosure lc)`

### AbilityDefinitionRejuvination

```wurst
public class AbilityDefinitionRejuvination extends AbilityDefinition
```

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

### AbilityDefinitionEntanglingRootscreep

```wurst
public class AbilityDefinitionEntanglingRootscreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageperSecond(int level, real value)`
- `presetDamageperSecond(RealLevelClosure lc)`

### AbilityDefinitionSelfDestruct

```wurst
public class AbilityDefinitionSelfDestruct extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionDeathDamageAOEmineBIG

```wurst
public class AbilityDefinitionDeathDamageAOEmineBIG extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionThunderClapCreep

```wurst
public class AbilityDefinitionThunderClapCreep extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `presetDamage(RealLevelClosure lc)`

### AbilityDefinitionWarStomphydra

```wurst
public class AbilityDefinitionWarStomphydra extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setBackstabDamage(int level, bool value)`
- `presetBackstabDamage(BooleanLevelClosure lc)`
- `setMovementSpeedIncrease(int level, real value)`
- `presetMovementSpeedIncrease(RealLevelClosure lc)`
- `setTransitionTime(int level, real value)`
- `presetTransitionTime(RealLevelClosure lc)`
- `setBackstabDamage1(int level, real value)`
- `presetBackstabDamage1(RealLevelClosure lc)`
- `setStartCooldownWhenDecloak(int level, bool value)`
- `presetStartCooldownWhenDecloak(BooleanLevelClosure lc)`

### AbilityDefinitionSummonSeaElemental

```wurst
public class AbilityDefinitionSummonSeaElemental extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAirUnitHeight(int level, real value)`
- `presetAirUnitHeight(RealLevelClosure lc)`
- `setAirUnitLowerDuration(int level, real value)`
- `presetAirUnitLowerDuration(RealLevelClosure lc)`
- `setMeleeAttackRange(int level, real value)`
- `presetMeleeAttackRange(RealLevelClosure lc)`

### AbilityDefinitionReturnGoldLumber

```wurst
public class AbilityDefinitionReturnGoldLumber extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageStolen(int level, real value)`
- `presetAttackDamageStolen(RealLevelClosure lc)`

### AbilityDefinitionVenomSpearsCreep

```wurst
public class AbilityDefinitionVenomSpearsCreep extends AbilityDefinition
```

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

### AbilityDefinitionBurrowDetectionFlyers

```wurst
public class AbilityDefinitionBurrowDetectionFlyers extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionBlightDispelSmall

```wurst
public class AbilityDefinitionBlightDispelSmall extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`
- `presetDetectionType(StringLevelClosure lc)`

### AbilityDefinitionLightningAttack

```wurst
public class AbilityDefinitionLightningAttack extends AbilityDefinition
```

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

**Members:**

- `construct(int newAbilityId)`
- `setUnitTypeAllowed(int level, string value)`
- `presetUnitTypeAllowed(StringLevelClosure lc)`

### AbilityDefinitionSunderingBlades

```wurst
public class AbilityDefinitionSunderingBlades extends AbilityDefinition
```

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

### AbilityDefinitionItemChainLightning

```wurst
public class AbilityDefinitionItemChainLightning extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageperTarget(int level, real value)`
- `presetDamageperTarget(RealLevelClosure lc)`
- `setNumberofTargetsHit(int level, int value)`
- `presetNumberofTargetsHit(IntLevelClosure lc)`
- `setDamageReductionperTarget(int level, real value)`
- `presetDamageReductionperTarget(RealLevelClosure lc)`

### AbilityDefinitionSlow1

```wurst
public class AbilityDefinitionSlow1 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAlwaysAutocast(int level, bool value)`
- `setAttackSpeedFactor(int level, real value)`
- `setMovementSpeedFactor(int level, real value)`

### AbilityDefinitionPenguinSqueek

```wurst
public class AbilityDefinitionPenguinSqueek extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`

### AbilityDefinitionPermanentHitPointBonusSmall

```wurst
public class AbilityDefinitionPermanentHitPointBonusSmall extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`

### AbilityDefinitionFrostArmorCreepAutocast

```wurst
public class AbilityDefinitionFrostArmorCreepAutocast extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setArmorBonus(int level, real value)`
- `setArmorDuration(int level, real value)`

### AbilityDefinitionFingerOfPain21Button

```wurst
public class AbilityDefinitionFingerOfPain21Button extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDelay(int level, real value)`
- `setGraphicDuration(int level, real value)`
- `setDamage(int level, real value)`

### AbilityDefinitionPurgeWandOfNegation

```wurst
public class AbilityDefinitionPurgeWandOfNegation extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackUpdateFrequency(int level, int value)`
- `setUnitPauseDuration(int level, real value)`
- `setHeroPauseDuration(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`
- `setManaLoss(int level, int value)`
- `setMovementUpdateFrequency(int level, int value)`

### AbilityDefinitionPurgeTotemSP

```wurst
public class AbilityDefinitionPurgeTotemSP extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackUpdateFrequency(int level, int value)`
- `setUnitPauseDuration(int level, real value)`
- `setHeroPauseDuration(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`
- `setManaLoss(int level, int value)`
- `setMovementUpdateFrequency(int level, int value)`

### AbilityDefinitionInventory2SlotUnitOrc

```wurst
public class AbilityDefinitionInventory2SlotUnitOrc extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setItemCapacity(int level, int value)`
- `setCanGetItems(int level, bool value)`
- `setCanUseItems(int level, bool value)`
- `setDropItemsOnDeath(int level, bool value)`
- `setCanDropItems(int level, bool value)`

### AbilityDefinitionChenDrunkenHaze

```wurst
public class AbilityDefinitionChenDrunkenHaze extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedModifier(int level, real value)`
- `setAttacksPrevented(int level, string value)`
- `setChanceToMiss(int level, real value)`
- `setMovementSpeedModifier(int level, real value)`

### AbilityDefinitionChenDrunkenBrawler

```wurst
public class AbilityDefinitionChenDrunkenBrawler extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `setNeverMiss(int level, bool value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageBonus(int level, real value)`

### AbilityDefinitionFrostArmorAutocastNaga

```wurst
public class AbilityDefinitionFrostArmorAutocastNaga extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setArmorBonus(int level, real value)`
- `setArmorDuration(int level, real value)`

### AbilityDefinitionResurrectionItem

```wurst
public class AbilityDefinitionResurrectionItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNumberofCorpsesRaised(int level, int value)`
- `setRaisedUnitsAreInvulnerable(int level, bool value)`

### AbilityDefinitionForkedLightningCreep

```wurst
public class AbilityDefinitionForkedLightningCreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`

### AbilityDefinitionChenStormEarthAndFire

```wurst
public class AbilityDefinitionChenStormEarthAndFire extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitTypes(int level, string value)`

### AbilityDefinitionFingerOfPain

```wurst
public class AbilityDefinitionFingerOfPain extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDelay(int level, real value)`
- `setGraphicDuration(int level, real value)`
- `setDamage(int level, real value)`

### AbilityDefinitionSlowPoisonItem

```wurst
public class AbilityDefinitionSlowPoisonItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `setMovementSpeedFactor(int level, real value)`
- `setStackingType(int level, string value)`
- `setAttackSpeedFactor(int level, real value)`

### AbilityDefinitionUnholyFrenzyItem

```wurst
public class AbilityDefinitionUnholyFrenzyItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedBonus(int level, real value)`
- `setDamageperSecond(int level, real value)`

### AbilityDefinitionAttackBonusPlus20

```wurst
public class AbilityDefinitionAttackBonusPlus20 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackBonus(int level, int value)`

### AbilityDefinitionItemTransmute

```wurst
public class AbilityDefinitionItemTransmute extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setGoldCostFactor(int level, real value)`
- `setAllowBounty(int level, bool value)`
- `setLumberCostFactor(int level, real value)`
- `setMaxCreepLevel(int level, int value)`

### AbilityDefinitionManaBonus200

```wurst
public class AbilityDefinitionManaBonus200 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`

### AbilityDefinitionItemInvulLesser

```wurst
public class AbilityDefinitionItemInvulLesser extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setData(int level, bool value)`

### AbilityDefinitionFingerOfDeath1

```wurst
public class AbilityDefinitionFingerOfDeath1 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDelay(int level, real value)`
- `setGraphicDuration(int level, real value)`
- `setDamage(int level, real value)`

### AbilityDefinitionItemInvulDivinity

```wurst
public class AbilityDefinitionItemInvulDivinity extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setData(int level, bool value)`

### AbilityDefinitionRevealArcaneTower

```wurst
public class AbilityDefinitionRevealArcaneTower extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDetectionRadius(int level, string value)`

### AbilityDefinitionHowlOfTerror

```wurst
public class AbilityDefinitionHowlOfTerror extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setPreferFriendlies(int level, bool value)`
- `setPreferHostiles(int level, bool value)`
- `setMaxUnits(int level, int value)`
- `setDamageIncrease(int level, real value)`
- `setManaRegen(int level, real value)`
- `setLifeRegenerationRate(int level, real value)`
- `setDefenseIncrease(int level, int value)`

### AbilityDefinitionFigurineFurbolgTracker

```wurst
public class AbilityDefinitionFigurineFurbolgTracker extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonAmount(int level, int value)`
- `setSummonUnitType(int level, string value)`
- `setSummonUnitType1(int level, string value)`
- `setSummonAmount1(int level, int value)`

### AbilityDefinitionWateryMinionItem

```wurst
public class AbilityDefinitionWateryMinionItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `setSummonedUnitCount(int level, int value)`

### AbilityDefinitionPowerupDispelAoe

```wurst
public class AbilityDefinitionPowerupDispelAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaLossPerUnit(int level, int value)`
- `setDamageToSummonedUnits(int level, int value)`

### AbilityDefinitionItemAuraWarDrums

```wurst
public class AbilityDefinitionItemAuraWarDrums extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackDamageIncrease(int level, real value)`
- `setFlatBonus(int level, bool value)`
- `setPlayChannelAnimation(int level, bool value)`
- `setRangedBonus(int level, bool value)`
- `setMeleeBonus(int level, bool value)`

### AbilityDefinitionAllPlus4

```wurst
public class AbilityDefinitionAllPlus4 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `setStrengthBonus(int level, int value)`
- `setAgilityBonus(int level, int value)`
- `setIntelligenceBonus(int level, int value)`

### AbilityDefinitionAllPlus3

```wurst
public class AbilityDefinitionAllPlus3 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `setStrengthBonus(int level, int value)`
- `setAgilityBonus(int level, int value)`
- `setIntelligenceBonus(int level, int value)`

### AbilityDefinitionBeserkItem

```wurst
public class AbilityDefinitionBeserkItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageTakenIncrease(int level, real value)`
- `setAttackSpeedIncrease(int level, real value)`
- `setMovementSpeedIncrease(int level, real value)`

### AbilityDefinitionPowerupHealAoeGreater

```wurst
public class AbilityDefinitionPowerupHealAoeGreater extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`

### AbilityDefinitionPowerupHealAoeLesser

```wurst
public class AbilityDefinitionPowerupHealAoeLesser extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`

### AbilityDefinitionPowerupHealAoe

```wurst
public class AbilityDefinitionPowerupHealAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`

### AbilityDefinitionBlinkBeastmasterBear

```wurst
public class AbilityDefinitionBlinkBeastmasterBear extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaximumRange(int level, real value)`
- `setMinimumRange(int level, real value)`

### AbilityDefinitionAvatarGarithos

```wurst
public class AbilityDefinitionAvatarGarithos extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointBonus(int level, real value)`
- `setMagicDamageReduction(int level, real value)`
- `setDamageBonus(int level, real value)`
- `setDefenseBonus(int level, real value)`

### AbilityDefinitionSummonLobstrokPrawns

```wurst
public class AbilityDefinitionSummonLobstrokPrawns extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `setSummonedUnitCount(int level, int value)`

### AbilityDefinitionChenBreathOfFire

```wurst
public class AbilityDefinitionChenBreathOfFire extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamage(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setFinalArea(int level, real value)`
- `setDamagePerSecond(int level, real value)`

### AbilityDefinitionCannibalizeAbomination

```wurst
public class AbilityDefinitionCannibalizeAbomination extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsperSecond(int level, real value)`
- `setMaxHitPoints(int level, real value)`

### AbilityDefinitionEnsnareNaga

```wurst
public class AbilityDefinitionEnsnareNaga extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMeleeAttackRange(int level, real value)`
- `setAirUnitHeight(int level, real value)`
- `setAirUnitLowerDuration(int level, real value)`

### AbilityDefinitionAbolishMagicNaga

```wurst
public class AbilityDefinitionAbolishMagicNaga extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`

### AbilityDefinitionParasiteEredar

```wurst
public class AbilityDefinitionParasiteEredar extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedFactor(int level, real value)`
- `setAttackSpeedFactor(int level, real value)`
- `setUnitType(int level, string value)`
- `setDamageperSecond(int level, real value)`
- `setStackingType(int level, string value)`
- `setSummonedUnitCount(int level, int value)`
- `setSummonedUnitDuration(int level, real value)`

### AbilityDefinitionCycloneNaga

```wurst
public class AbilityDefinitionCycloneNaga extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`

### AbilityDefinitionManaBurnHotkeyB

```wurst
public class AbilityDefinitionManaBurnHotkeyB extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setBoltDelay(int level, real value)`
- `setBoltLifetime(int level, real value)`
- `setMaxManaDrained(int level, real value)`

### AbilityDefinitionFlameStrikeImprovedCreep

```wurst
public class AbilityDefinitionFlameStrikeImprovedCreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHalfDamageDealt(int level, real value)`
- `setFullDamageDealt(int level, real value)`
- `setFullDamageInterval(int level, real value)`
- `setBuildingReduction(int level, real value)`
- `setHalfDamageInterval(int level, real value)`
- `setMaximumDamage(int level, real value)`

### AbilityDefinitionSentinelNoResearch

```wurst
public class AbilityDefinitionSentinelNoResearch extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNumberofOwls(int level, int value)`
- `setInFlightSightRadius(int level, real value)`
- `setHoveringHeight(int level, real value)`
- `setHoveringSightRadius(int level, real value)`
- `setDurationOfOwls(int level, real value)`

### AbilityDefinitionRainOfFireCreepGreater

```wurst
public class AbilityDefinitionRainOfFireCreepGreater extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamagePerSecond(int level, real value)`
- `setNumberofWaves(int level, int value)`
- `setNumberofShards(int level, int value)`
- `setMaximumDamageperWave(int level, real value)`
- `setDamage(int level, real value)`
- `setBuildingReduction(int level, real value)`

### AbilityDefinitionFeralSpiritAkama

```wurst
public class AbilityDefinitionFeralSpiritAkama extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSummonedUnits(int level, int value)`
- `setSummonedUnit(int level, string value)`

### AbilityDefinitionFeralSpiritSpiritBeast

```wurst
public class AbilityDefinitionFeralSpiritSpiritBeast extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSummonedUnits(int level, int value)`
- `setSummonedUnit(int level, string value)`

### AbilityDefinitionRokhanHealingWave

```wurst
public class AbilityDefinitionRokhanHealingWave extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`

### AbilityDefinitionRokhanHex

```wurst
public class AbilityDefinitionRokhanHex extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMorphUnitsWater(int level, string value)`
- `setMorphUnitsAir(int level, string value)`
- `setMaximumCreepLevel(int level, int value)`
- `setMorphUnitsGround(int level, string value)`
- `setMorphUnitsAmphibious(int level, string value)`

### AbilityDefinitionHarvestNaga

```wurst
public class AbilityDefinitionHarvestNaga extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setLumberCapacity(int level, int value)`
- `setDamagetoTree(int level, int value)`
- `setGoldCapacity(int level, int value)`

### AbilityDefinitionInciteUnholyFrenzy

```wurst
public class AbilityDefinitionInciteUnholyFrenzy extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setData(int level, bool value)`
- `setLeaveTargetAlive(int level, bool value)`
- `setData1(int level, string value)`

### AbilityDefinitionRuneManaRestoreAoe

```wurst
public class AbilityDefinitionRuneManaRestoreAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`

### AbilityDefinitionRuneManaRestoreGreaterAoe

```wurst
public class AbilityDefinitionRuneManaRestoreGreaterAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaPointsGained(int level, int value)`

### AbilityDefinitionAuraPlagueAnimatedDead

```wurst
public class AbilityDefinitionAuraPlagueAnimatedDead extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAuraDuration(int level, real value)`
- `setDurationofPlagueWard(int level, real value)`
- `setDamageperSecond(int level, real value)`
- `setPlagueWardUnitType(int level, string value)`

### AbilityDefinitionRokhanVoodooSpirits

```wurst
public class AbilityDefinitionRokhanVoodooSpirits extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxSwarmUnitsPerTarget(int level, int value)`
- `setUnitReleaseIntervalseconds(int level, real value)`
- `setNumberofSwarmUnits(int level, int value)`
- `setSwarmUnitType(int level, string value)`
- `setDamageReturnFactor(int level, real value)`
- `setDamageReturnThreshold(int level, real value)`

### AbilityDefinitionBuildTinyLumberMill

```wurst
public class AbilityDefinitionBuildTinyLumberMill extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`

### AbilityDefinitionBuildTinyBarracks

```wurst
public class AbilityDefinitionBuildTinyBarracks extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`

### AbilityDefinitionRokhanSerpentWard

```wurst
public class AbilityDefinitionRokhanSerpentWard extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `setSummonedUnitCount(int level, int value)`

### AbilityDefinitionBlinkItem

```wurst
public class AbilityDefinitionBlinkItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaximumRange(int level, real value)`
- `setMinimumRange(int level, real value)`

### AbilityDefinitionBuildTinyAltar

```wurst
public class AbilityDefinitionBuildTinyAltar extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`

### AbilityDefinitionRexxarSummonQuilbeast

```wurst
public class AbilityDefinitionRexxarSummonQuilbeast extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitType(int level, string value)`
- `setSummonedUnitCount(int level, int value)`

### AbilityDefinitionRexxarStampede

```wurst
public class AbilityDefinitionRexxarStampede extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamageDelay(int level, real value)`
- `setBeastsPerSecond(int level, int value)`
- `setDamageRadius(int level, real value)`
- `setBeastCollisionRadius(int level, real value)`
- `setDamageAmount(int level, real value)`

### AbilityDefinitionBuildTinyFarm

```wurst
public class AbilityDefinitionBuildTinyFarm extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`

### AbilityDefinitionFigurineBlueDrake

```wurst
public class AbilityDefinitionFigurineBlueDrake extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonAmount(int level, int value)`
- `setSummonUnitType(int level, string value)`
- `setSummonUnitType1(int level, string value)`
- `setSummonAmount1(int level, int value)`

### AbilityDefinitionBuildTinyBlacksmith

```wurst
public class AbilityDefinitionBuildTinyBlacksmith extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUnitCreatedperplayerrace(int level, string value)`

### AbilityDefinitionRexxarSummonBear

```wurst
public class AbilityDefinitionRexxarSummonBear extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNumberofSummonedUnits(int level, int value)`
- `setSummonedUnit(int level, string value)`

### AbilityDefinitionBurrowBarbedArachnathid

```wurst
public class AbilityDefinitionBurrowBarbedArachnathid extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAlternateFormUnit(int level, string value)`
- `setMorphingFlags(int level, string value)`
- `setLandingDelayTime(int level, real value)`
- `setNormalFormUnit(int level, string value)`
- `setAltitudeAdjustmentDuration(int level, real value)`

### AbilityDefinitionAgilityBonusPlus10

```wurst
public class AbilityDefinitionAgilityBonusPlus10 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHideButton(int level, bool value)`
- `setStrengthBonus(int level, int value)`
- `setAgilityBonus(int level, int value)`
- `setIntelligenceBonus(int level, int value)`

### AbilityDefinitionCyclone1

```wurst
public class AbilityDefinitionCyclone1 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setCanBeDispelled(int level, bool value)`

### AbilityDefinitionRuneRestoreAoe

```wurst
public class AbilityDefinitionRuneRestoreAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsRestored(int level, int value)`
- `setManaPointsRestored(int level, int value)`

### AbilityDefinitionCriticalStrikeItem

```wurst
public class AbilityDefinitionCriticalStrikeItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChancetoEvade(int level, real value)`
- `setChancetoCriticalStrike(int level, real value)`
- `setDamageMultiplier(int level, real value)`
- `setNeverMiss(int level, bool value)`
- `setExcludeItemDamage(int level, bool value)`
- `setDamageBonus(int level, real value)`

### AbilityDefinitionControlMagicItem

```wurst
public class AbilityDefinitionControlMagicItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChargeforCurrentLife(int level, real value)`
- `setMaximumCreepLevel(int level, int value)`
- `setManaperSummonedHitpoint(int level, real value)`

### AbilityDefinitionChainLightningItem

```wurst
public class AbilityDefinitionChainLightningItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setNumberofTargetsHit(int level, int value)`
- `setDamageperTarget(int level, real value)`
- `setDamageReductionperTarget(int level, real value)`

### AbilityDefinitionAttackTargetPriority

```wurst
public class AbilityDefinitionAttackTargetPriority extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setData(int level, bool value)`

### AbilityDefinitionRuneSpeedAoe

```wurst
public class AbilityDefinitionRuneSpeedAoe extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedIncrease(int level, real value)`

### AbilityDefinitionDivineShieldItem

```wurst
public class AbilityDefinitionDivineShieldItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setCanDeactivate(int level, bool value)`

### AbilityDefinitionDeathPactItem

```wurst
public class AbilityDefinitionDeathPactItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setLeaveTargetAlive(int level, bool value)`
- `setLifeConvertedtoLife(int level, real value)`
- `setManaConversionAsPercent(int level, bool value)`
- `setLifeConversionAsPercent(int level, bool value)`
- `setLifeConvertedtoMana(int level, real value)`

### AbilityDefinitionShadowOrbAbility

```wurst
public class AbilityDefinitionShadowOrbAbility extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `setDamageBonus(int level, real value)`

### AbilityDefinitionCairneEnduranceAura

```wurst
public class AbilityDefinitionCairneEnduranceAura extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAttackSpeedIncrease(int level, real value)`
- `setMovementSpeedIncrease(int level, real value)`

### AbilityDefinitionCairneReincarnation

```wurst
public class AbilityDefinitionCairneReincarnation extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`

### AbilityDefinitionAIde

```wurst
public class AbilityDefinitionAIde extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDefenseBonus(int level, int value)`

### AbilityDefinitionFigurineDragonspawnOverseer

```wurst
public class AbilityDefinitionFigurineDragonspawnOverseer extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonAmount(int level, int value)`
- `setSummonUnitType(int level, string value)`
- `setSummonUnitType1(int level, string value)`
- `setSummonAmount1(int level, int value)`

### AbilityDefinitionCairneShockWave

```wurst
public class AbilityDefinitionCairneShockWave extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaximumDamage(int level, real value)`

### AbilityDefinitionColdArrows

```wurst
public class AbilityDefinitionColdArrows extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setStackFlags(int level, string value)`
- `setExtraDamage(int level, real value)`
- `setMovementSpeedFactor(int level, real value)`
- `setAttackSpeedFactor(int level, real value)`

### AbilityDefinitionFingerOfDeathItem

```wurst
public class AbilityDefinitionFingerOfDeathItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setGraphicDelay(int level, real value)`
- `setGraphicDuration(int level, real value)`
- `setDamage(int level, real value)`

### AbilityDefinitionSearingBladeFireMelee

```wurst
public class AbilityDefinitionSearingBladeFireMelee extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `setDamageBonus(int level, real value)`

### AbilityDefinitionFrostguardFrostMelee

```wurst
public class AbilityDefinitionFrostguardFrostMelee extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `setDamageBonus(int level, real value)`

### AbilityDefinitionInventory2SlotUnitNightElf

```wurst
public class AbilityDefinitionInventory2SlotUnitNightElf extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setItemCapacity(int level, int value)`
- `setCanGetItems(int level, bool value)`
- `setCanUseItems(int level, bool value)`
- `setDropItemsOnDeath(int level, bool value)`
- `setCanDropItems(int level, bool value)`

### AbilityDefinitionRainOfChaosButton02

```wurst
public class AbilityDefinitionRainOfChaosButton02 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAbilityforUnitCreation(int level, string value)`
- `setNumberofUnitsCreated(int level, int value)`

### AbilityDefinitionReincarnationGeneric

```wurst
public class AbilityDefinitionReincarnationGeneric extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setReincarnationDelay(int level, real value)`

### AbilityDefinitionAuraRegenerationItem

```wurst
public class AbilityDefinitionAuraRegenerationItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAmountofHitPointsRegenerated(int level, real value)`
- `setPercentage(int level, bool value)`

### AbilityDefinitionOrbOfGuldan

```wurst
public class AbilityDefinitionOrbOfGuldan extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setEnabledAttackIndex(int level, int value)`
- `setDamageBonus(int level, real value)`

### AbilityDefinitionRexxarStormBolt

```wurst
public class AbilityDefinitionRexxarStormBolt extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`

### AbilityDefinitionItemHealLeastest

```wurst
public class AbilityDefinitionItemHealLeastest extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setHitPointsGained(int level, int value)`

### AbilityDefinitionHealingWard1

```wurst
public class AbilityDefinitionHealingWard1 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`

### AbilityDefinitionHolyLightItem

```wurst
public class AbilityDefinitionHolyLightItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setAmountHealedDamaged(int level, real value)`

### AbilityDefinitionThornyShieldDragonTurtle

```wurst
public class AbilityDefinitionThornyShieldDragonTurtle extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setReturnedDamageFactor(int level, real value)`
- `setReceivedDamageFactor(int level, real value)`
- `setDefenseBonus(int level, real value)`

### AbilityDefinitionInventory2SlotUnitHuman

```wurst
public class AbilityDefinitionInventory2SlotUnitHuman extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setItemCapacity(int level, int value)`
- `setCanGetItems(int level, bool value)`
- `setCanUseItems(int level, bool value)`
- `setDropItemsOnDeath(int level, bool value)`
- `setCanDropItems(int level, bool value)`

### AbilityDefinitionRuneOfTheWatcher

```wurst
public class AbilityDefinitionRuneOfTheWatcher extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setWardUnitType(int level, string value)`

### AbilityDefinitionCairneWarStomp

```wurst
public class AbilityDefinitionCairneWarStomp extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`

### AbilityDefinitionGarithosShockWave

```wurst
public class AbilityDefinitionGarithosShockWave extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDamage(int level, real value)`
- `setDistance(int level, real value)`
- `setFinalArea(int level, real value)`
- `setMaximumDamage(int level, real value)`

### AbilityDefinitionDetectWarEagle

```wurst
public class AbilityDefinitionDetectWarEagle extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDetectionType(int level, string value)`

### AbilityDefinitionHardenedSkinNagaTurtle

```wurst
public class AbilityDefinitionHardenedSkinNagaTurtle extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setIgnoredDamage(int level, real value)`
- `setIncludeMeleeDamage(int level, bool value)`
- `setChancetoReduceDamage(int level, real value)`
- `setIncludeRangedDamage(int level, bool value)`
- `setMinimumDamage(int level, real value)`

### AbilityDefinitionMaxLifeBonusLeastest

```wurst
public class AbilityDefinitionMaxLifeBonusLeastest extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxLifeGained(int level, int value)`

### AbilityDefinitionShamanClawsLightningMelee

```wurst
public class AbilityDefinitionShamanClawsLightningMelee extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setChanceToHitUnits(int level, real value)`
- `setEffectAbility(int level, string value)`
- `setChanceToHitSummons(int level, real value)`
- `setEnabledAttackIndex(int level, int value)`
- `setChanceToHitHeros(int level, real value)`
- `setDamageBonus(int level, real value)`

### AbilityDefinitionMaxManaBonusLeastest

```wurst
public class AbilityDefinitionMaxManaBonusLeastest extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`

### AbilityDefinitionCrushingWaveLesser

```wurst
public class AbilityDefinitionCrushingWaveLesser extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamage(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setFinalArea(int level, real value)`

### AbilityDefinitionCrushingWaveDragonTurtle

```wurst
public class AbilityDefinitionCrushingWaveDragonTurtle extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setDistance(int level, real value)`
- `setDamage(int level, real value)`
- `setMaxDamage(int level, real value)`
- `setFinalArea(int level, real value)`

### AbilityDefinitionMaxManaBonusLeastestReally

```wurst
public class AbilityDefinitionMaxManaBonusLeastestReally extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMaxManaGained(int level, int value)`

### AbilityDefinitionDarkSummoning

```wurst
public class AbilityDefinitionDarkSummoning extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setUseTeleportClustering(int level, bool value)`
- `setMaximumUnits(int level, int value)`
- `setCastingDelayseconds(int level, real value)`

### AbilityDefinitionAbolishMagicCreep12Pos

```wurst
public class AbilityDefinitionAbolishMagicCreep12Pos extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`

### AbilityDefinitionBanishCreep

```wurst
public class AbilityDefinitionBanishCreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setMovementSpeedReduction(int level, real value)`
- `setAttackSpeedReduction(int level, real value)`

### AbilityDefinitionDisenchantNew

```wurst
public class AbilityDefinitionDisenchantNew extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setManaLoss(int level, real value)`
- `setSummonedUnitDamage(int level, real value)`

### AbilityDefinitionBlackArrowMeleeCreep

```wurst
public class AbilityDefinitionBlackArrowMeleeCreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setSummonedUnitDurationseconds(int level, real value)`
- `setSummonedUnitType(int level, string value)`
- `setNumberofSummonedUnits(int level, int value)`
- `setDamageBonus(int level, real value)`

### AbilityDefinitionBloodlustCreepHotkeyB

```wurst
public class AbilityDefinitionBloodlustCreepHotkeyB extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`
- `setScalingFactor(int level, real value)`
- `setAttackSpeedIncrease(int level, real value)`
- `setMovementSpeedIncrease(int level, real value)`

### AbilityDefinitionPassiveHumanLumberHarvestingRhlh

```wurst
public class AbilityDefinitionPassiveHumanLumberHarvestingRhlh extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveGhostIconOnlyUndeadAgho

```wurst
public class AbilityDefinitionPassiveGhostIconOnlyUndeadAgho extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveUndeadGhoulFrenzyRugf

```wurst
public class AbilityDefinitionPassiveUndeadGhoulFrenzyRugf extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFireUndead

```wurst
public class AbilityDefinitionOnFireUndead extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFire

```wurst
public class AbilityDefinitionOnFire extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFireOrc

```wurst
public class AbilityDefinitionOnFireOrc extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFireNightElf

```wurst
public class AbilityDefinitionOnFireNightElf extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionOnFireHuman

```wurst
public class AbilityDefinitionOnFireHuman extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionDrop1

```wurst
public class AbilityDefinitionDrop1 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassivePhoenixFireAndEgg

```wurst
public class AbilityDefinitionPassivePhoenixFireAndEgg extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveHumanRiflemanPlusRangeRhri

```wurst
public class AbilityDefinitionPassiveHumanRiflemanPlusRangeRhri extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionShadowSight

```wurst
public class AbilityDefinitionShadowSight extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionUltravision

```wurst
public class AbilityDefinitionUltravision extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcGruntBerserkRobs

```wurst
public class AbilityDefinitionPassiveOrcGruntBerserkRobs extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcBerserkersRobk

```wurst
public class AbilityDefinitionPassiveOrcBerserkersRobk extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFrostAttack12

```wurst
public class AbilityDefinitionFrostAttack12 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFrostBreathNewHasIcon

```wurst
public class AbilityDefinitionFrostBreathNewHasIcon extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFrostBreath

```wurst
public class AbilityDefinitionFrostBreath extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFrostAttack

```wurst
public class AbilityDefinitionFrostAttack extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFreezingBreath

```wurst
public class AbilityDefinitionFreezingBreath extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel6

```wurst
public class AbilityDefinitionSphereSoVLevel6 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel5

```wurst
public class AbilityDefinitionSphereSoVLevel5 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel4

```wurst
public class AbilityDefinitionSphereSoVLevel4 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel3

```wurst
public class AbilityDefinitionSphereSoVLevel3 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel2

```wurst
public class AbilityDefinitionSphereSoVLevel2 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphereSoVLevel1

```wurst
public class AbilityDefinitionSphereSoVLevel1 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveUndeadSkeletalMasteryRusm

```wurst
public class AbilityDefinitionPassiveUndeadSkeletalMasteryRusm extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSpellSteal

```wurst
public class AbilityDefinitionSpellSteal extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSpikedBarricades

```wurst
public class AbilityDefinitionSpikedBarricades extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSphere

```wurst
public class AbilityDefinitionSphere extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionMoonGlaiveNoResearch

```wurst
public class AbilityDefinitionMoonGlaiveNoResearch extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionMoonGlaive

```wurst
public class AbilityDefinitionMoonGlaive extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionBouncingMissileFilter

```wurst
public class AbilityDefinitionBouncingMissileFilter extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionStormHammers

```wurst
public class AbilityDefinitionStormHammers extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionStandDown

```wurst
public class AbilityDefinitionStandDown extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSellUnit

```wurst
public class AbilityDefinitionSellUnit extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcReinforcedDefenseRorb

```wurst
public class AbilityDefinitionPassiveOrcReinforcedDefenseRorb extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFlagOrcBattleStandard

```wurst
public class AbilityDefinitionFlagOrcBattleStandard extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionMove

```wurst
public class AbilityDefinitionMove extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcSpikedBarricadeRosp

```wurst
public class AbilityDefinitionPassiveOrcSpikedBarricadeRosp extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcTrollRegenerationRotr

```wurst
public class AbilityDefinitionPassiveOrcTrollRegenerationRotr extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveOrcGhostIconOnlyOrcAethUnused

```wurst
public class AbilityDefinitionPassiveOrcGhostIconOnlyOrcAethUnused extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionImpalingBolt

```wurst
public class AbilityDefinitionImpalingBolt extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionDropPilot

```wurst
public class AbilityDefinitionDropPilot extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemRandomItem

```wurst
public class AbilityDefinitionItemRandomItem extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveNightelfImprovedBowsReib

```wurst
public class AbilityDefinitionPassiveNightelfImprovedBowsReib extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionRuneOfRebirth

```wurst
public class AbilityDefinitionRuneOfRebirth extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionReinforcedBurrows

```wurst
public class AbilityDefinitionReinforcedBurrows extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveSimple

```wurst
public class AbilityDefinitionPassiveSimple extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemInvisGreater

```wurst
public class AbilityDefinitionItemInvisGreater extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemInvisLesser

```wurst
public class AbilityDefinitionItemInvisLesser extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionReassignableAttributeBonusPlus1

```wurst
public class AbilityDefinitionReassignableAttributeBonusPlus1 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionItemUltravision

```wurst
public class AbilityDefinitionItemUltravision extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionRetrain

```wurst
public class AbilityDefinitionRetrain extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveNightelfMarksmanshipRemk

```wurst
public class AbilityDefinitionPassiveNightelfMarksmanshipRemk extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionLoadPilot

```wurst
public class AbilityDefinitionLoadPilot extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionEthereal

```wurst
public class AbilityDefinitionEthereal extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionInvulnerable

```wurst
public class AbilityDefinitionInvulnerable extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionGyrocopterBombs

```wurst
public class AbilityDefinitionGyrocopterBombs extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionRevenge

```wurst
public class AbilityDefinitionRevenge extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionAlarm

```wurst
public class AbilityDefinitionAlarm extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionResistantSkin31PosCreep

```wurst
public class AbilityDefinitionResistantSkin31PosCreep extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionTankTurret

```wurst
public class AbilityDefinitionTankTurret extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionFirelordIncinerate1

```wurst
public class AbilityDefinitionFirelordIncinerate1 extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveNightelfWellSpringRews

```wurst
public class AbilityDefinitionPassiveNightelfWellSpringRews extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionTornadoWander

```wurst
public class AbilityDefinitionTornadoWander extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionResistantSkin

```wurst
public class AbilityDefinitionResistantSkin extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionAttack

```wurst
public class AbilityDefinitionAttack extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionPassiveHumanAnimalBreedingRhan

```wurst
public class AbilityDefinitionPassiveHumanAnimalBreedingRhan extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionHero

```wurst
public class AbilityDefinitionHero extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionWander

```wurst
public class AbilityDefinitionWander extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionLocust

```wurst
public class AbilityDefinitionLocust extends AbilityDefinition
```

**Members:**

- `construct(int newAbilityId)`

### AbilityDefinitionSpellShield

```wurst
public class AbilityDefinitionSpellShield extends AbilityDefinition
```

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
