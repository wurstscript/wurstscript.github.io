---
title: UnitObjEditing
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - object-data
  - objediting
  - units
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/UnitObjEditing.wurst'
generated: true
curated: /stdlib/unit_objed
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/UnitObjEditing.wurst)**

> 📖 Read the **[detailed guide](/stdlib/unit_objed)** for hand-written examples and background.

**Re-exports:** `TargetsAllowed`, `ObjEditingCommons`

## Classes

### W3UDefinition

```wurst
public class W3UDefinition
```

**Members:**

- `getNewId() returns int`
- `getBaseId() returns int`
- `construct(int newId, int baseId)`
- `setTooltipExtended(string data)`
- `setTooltipBasic(string data)`
- `setRequirementsLevels(string data)`
- `setRequirements(string data)`
- `setName(string data)`
- `setHotkey(string data)`
- `setDescription(string data)`
- `setButtonPositionY(int data)`
- `setButtonPositionX(int data)`

### UnitOrBuildingOrHeroDefinition

```wurst
public class UnitOrBuildingOrHeroDefinition extends W3UDefinition
```

**Members:**

- `construct(int newUnitId, int origUnitId)`
- `setItemsSold(string data)`
- `setUnitsSold(string data)`
- `setHideMinimapDisplay(boolean flag)`
- `setUseExtendedLineofSight(boolean data)`
- `setUseClickHelper(boolean data)`
- `setUpgradesUsed(string data)`
- `setUnitSoundSet(string data)`
- `setUnitClassification(string data)`
- `setMovementType(MovementType mtype)`
- `setTurnRate(real data)`
- `setTintingColorBlue(int data)`
- `setTintingColorGreen(int data)`
- `setTintingColorRed(int data)`
- `setTilesets(string data)`
- `setTeamColor(int data)`
- `setTargetedAs(string data)`
- `setTargetedAs(vararg UnitTargetType tags)`
- `setArtTarget(string data)`
- `setStockStartDelay(int data)`
- `setStockReplenishInterval(int data)`
- `setStockMaximum(int data)`
- `setSpeedMinimum(int data)`
- `setSpeedMaximum(int data)`
- `setSpeedBase(int data)`
- `setArtSpecial(string data)`
- `setSleeps(boolean data)`
- `setSightRadiusNight(int data)`
- `setSightRadiusDay(int data)`
- `setShadowTextureBuilding(string data)`
- `setShadowImageWidth(real data)`
- `setShadowImageUnit(string data)`
- `setShadowImageHeight(real data)`
- `setShadowImageCenterY(real data)`
- `setShadowImageCenterX(real data)`
- `setSelectionScale(real data)`
- `setSelectionCircleOnWater(boolean data)`
- `setSelectionCircleHeight(real data)`
- `setScalingValue(real data)`
- `setScaleProjectiles(boolean data)`
- `setRequiredBoneNames(string data)`
- `setRequiredAttachmentLinkNames(string data)`
- `setRequiredAnimationNamesAttachments(string data)`
- `setRequiredAnimationNames(string data)`
- `setRepairTime(int data)`
- `setRepairLumberCost(int data)`
- `setRepairGoldCost(int data)`
- `setRandomSound(string data)`
- `setRace(Race data)`
- `setPropulsionWindowdegrees(real data)`
- `setProjectileLaunchZSwimming(real data)`
- `setProjectileLaunchZ(real data)`
- `setProjectileLaunchY(real data)`
- `setProjectileLaunchX(real data)`
- `setProjectileImpactZSwimming(real data)`
- `setProjectileImpactZ(real data)`
- `setPriority(int data)`
- `setPointValue(int data)`
- `setPlaceableInEditor(boolean data)`
- `setOrientationInterpolation(int data)`
- `setOccluderHeight(real data)`
- `setNormalAbilities(string data)`
- `setNameEditorSuffix(string data)`
- `setMovementSound(string data)`
- `setModelFileExtraVersions(int data)`
- `setModelFile(string data)`
- `setPortraitModelFile(string data)`
- `setMinimumAttackRange(int data)`
- `setMaximumRollAngledegrees(real data)`
- `setMaximumPitchAngledegrees(real data)`
- `setManaRegeneration(real data)`
- `setManaMaximum(int data)`
- `setManaInitialAmount(int data)`
- `setLumberCost(int data)`
- `setSoundLoopingFadeOutRate(int data)`
- `setSoundLoopingFadeInRate(int data)`
- `setIsaBuilding(boolean data)`
- `setIconScoreScreen(string data)`
- `setIconGameInterface(string data)`
- `setHitPointsRegenerationType(string data)`
- `setHitPointsRegenerationRate(real data)`
- `setHitPointsMaximumBase(int data)`
- `setMovementHeightMinimum(real data)`
- `setMovementHeight(real data)`
- `setHasWaterShadow(boolean data)`
- `setHasTilesetSpecificData(boolean data)`
- `setGoldCost(int data)`
- `setGoldBountyAwardedSidesperDie(int data)`
- `setGoldBountyAwardedNumberofDice(int data)`
- `setGoldBountyAwardedBase(int data)`
- `setLumberBountyAwardedSidesperDie(int data)`
- `setLumberBountyAwardedNumberofDice(int data)`
- `setLumberBountyAwardedBase(int data)`
- `setFoodProduced(int data)`
- `setFoodCost(int data)`
- `setFogOfWarSampleRadius(real data)`
- `setElevationSampleRadius(real data)`
- `setElevationSamplePoints(int data)`
- `setDisplayasNeutralHostile(boolean data)`
- `setDependencyEquivalents(string data)`
- `setDefenseUpgradeBonus(int data)`
- `setArmorType(ArmorType data)`
- `setDefenseBase(int data)`
- `setDefaultActiveAbility(string data)`
- `setDeathType(int data)`
- `setDeathTimeseconds(real data)`
- `setCollisionSize(real data)`
- `setCategorizationSpecial(boolean data)`
- `setCategorizationCampaign(boolean data)`
- `setCanFlee(boolean data)`
- `setCanDropItemsOnDeath(boolean data)`
- `setBuildTime(int data)`
- `setAttacksEnabled(int data)`
- `setAttack2WeaponType(WeaponType wepType)`
- `setAttack2WeaponSound(WeaponSound data)`
- `setAttack2TargetsAllowed(string data)`
- `setAttack2ShowUI(boolean data)`
- `setAttack2RangeMotionBuffer(real data)`
- `setAttack2Range(int data)`
- `setAttack2ProjectileSpeed(int data)`
- `setAttack2ProjectileHomingEnabled(boolean data)`
- `setAttack2ProjectileArt(string data)`
- `setAttack2ProjectileArc(real data)`
- `setAttack2MaximumNumberofTargets(int data)`
- `setAttack2DamageUpgradeAmount(int data)`
- `setAttack2DamageSpillRadius(real data)`
- `setAttack2DamageSpillDistance(real data)`
- `setAttack2DamageSidesperDie(int data)`
- `setAttack2DamageNumberofDice(int data)`
- `setAttack2DamageLossFactor(real data)`
- `setAttack2DamageFactorSmall(real data)`
- `setAttack2DamageFactorMedium(real data)`
- `setAttack2DamageBase(int data)`
- `setAttack2CooldownTime(real data)`
- `setAttack2AttackType(AttackType data)`
- `setAttack2AreaofEffectTargets(string data)`
- `setAttack2AreaofEffectSmallDamage(int data)`
- `setAttack2AreaofEffectMediumDamage(int data)`
- `setAttack2AreaofEffectFullDamage(int data)`
- `setAttack2AnimationDamagePoint(real data)`
- `setAttack2AnimationBackswingPoint(real data)`
- `setAttack1WeaponType(WeaponType weaponType)`
- `setAttack1WeaponSound(WeaponSound data)`
- `setAttack1TargetsAllowed(string data)`
- `setAttack1ShowUI(boolean data)`
- `setAttack1RangeMotionBuffer(real data)`
- `setAttack1Range(int data)`
- `setAttack1ProjectileSpeed(int data)`
- `setAttack1ProjectileHomingEnabled(boolean data)`
- `setAttack1ProjectileArt(string data)`
- `setAttack1ProjectileArc(real data)`
- `setAttack1MaximumNumberofTargets(int data)`
- `setAttack1DamageUpgradeAmount(int data)`
- `setAttack1DamageSpillRadius(real data)`
- `setAttack1DamageSpillDistance(real data)`
- `setAttack1DamageSidesperDie(int data)`
- `setAttack1DamageNumberofDice(int data)`
- `setAttack1DamageLossFactor(real data)`
- `setAttack1DamageFactorSmall(real data)`
- `setAttack1DamageFactorMedium(real data)`
- `setAttack1DamageBase(int data)`
- `setAttack1CooldownTime(real data)`
- `setAttack1AttackType(AttackType data)`
- `setAttack1AreaofEffectTargets(string data)`
- `setAttack1AreaofEffectSmallDamage(int data)`
- `setAttack1AreaofEffectMediumDamage(int data)`
- `setAttack1AreaofEffectFullDamage(int data)`
- `setAttack1AnimationDamagePoint(real data)`
- `setAttack1AnimationBackswingPoint(real data)`
- `setArmorSoundType(ArmorSoundType data)`
- `setAnimationWalkSpeed(real data)`
- `setAnimationRunSpeed(real data)`
- `setAnimationCastPoint(real data)`
- `setAnimationCastBackswing(real data)`
- `setAnimationBlendTimeseconds(real data)`
- `setAllowCustomTeamColor(boolean data)`
- `setAIPlacementType(string data)`
- `setAIPlacementRadius(real data)`
- `setAcquisitionRange(real data)`
- `setStructuresBuilt(string data)`
- `setAbilitySkinList(string data)`

### UnitOrHeroDefinition

```wurst
public class UnitOrHeroDefinition extends UnitOrBuildingOrHeroDefinition
```

**Members:**

- `construct(int newId, int origId)`
- `setTransportedSize(int data)`
- `setLevel(int data)`
- `setGroupSeparationPriority(int data)`
- `setGroupSeparationParameter(int data)`
- `setGroupSeparationGroupNumber(int data)`
- `setGroupSeparationEnabled(boolean data)`
- `setFormationRank(int data)`

### HeroDefinition

```wurst
public class HeroDefinition extends UnitOrHeroDefinition
```

**Members:**

- `construct(int newId, int origId)`
- `hideHeroDeathMsg(boolean flag)`
- `hideHeroInterfaceIcon(boolean flag)`
- `hideHeroMinimapDisplay(boolean flag)`
- `setTooltipRevive(string data)`
- `setTooltipAwaken(string data)`
- `setStrengthPerLevel(real data)`
- `setStartingStrength(int data)`
- `setStartingIntelligence(int data)`
- `setStartingAgility(int data)`
- `setProperNamesUsed(int data)`
- `setProperNames(string data)`
- `setPrimaryAttribute(string data)`
- `setIntelligencePerLevel(real data)`
- `setHeroRevivalLocations(string data)`
- `setHeroAbilities(string data)`
- `setAgilityPerLevel(real data)`
- `setRequierementsForTier(int tier, string data)`
  sets the techtree requirements for a specific tier
  		for example use setRequierements

### UnitDefinition

```wurst
public class UnitDefinition extends UnitOrHeroDefinition
```

**Members:**

- `construct(int newId, int origId)`
- `setCasterUpgradeTips(string data)`
- `setCasterUpgradeNames(string data)`
- `setCasterUpgradeArt(string data)`

### BuildingDefinition

```wurst
public class BuildingDefinition extends UnitOrBuildingOrHeroDefinition
```

**Members:**

- `construct(int newId, int origId)`
- `setUpgradesTo(string data)`
- `setUnitsTrained(string data)`
- `setRevivesDeadHeros(boolean data)`
- `setResearchesAvailable(string data)`
- `setPlacementRequiresWaterRadius(real data)`
- `setPlacementRequires(string data)`
- `setPlacementPreventedBy(string data)`
- `setPathingMap(string data)`
- `setNeutralBuildingValidAsRandomBuilding(boolean data)`
- `setNeutralBuildingShowsMinimapIcon(boolean data)`
- `setItemsMade(string data)`
- `setGroundTexture(string data)`
- `setConstructionSound(string data)`

### BuildingAndHeroDefinition

```wurst
public class BuildingAndHeroDefinition extends UnitOrBuildingOrHeroDefinition
```

**Members:**

- `construct(int newId, int origId)`
- `setUpgradesTo(string data)`
- `setUnitsTrained(string data)`
- `setRevivesDeadHeros(boolean data)`
- `setResearchesAvailable(string data)`
- `setPlacementRequiresWaterRadius(real data)`
- `setPlacementRequires(string data)`
- `setPlacementPreventedBy(string data)`
- `setPathingMap(string data)`
- `setNeutralBuildingValidAsRandomBuilding(boolean data)`
- `setNeutralBuildingShowsMinimapIcon(boolean data)`
- `setItemsMade(string data)`
- `setGroundTexture(string data)`
- `setConstructionSound(string data)`
- `setTooltipRevive(string data)`
- `setTooltipAwaken(string data)`
- `setStrengthPerLevel(real data)`
- `setStartingStrength(int data)`
- `setStartingIntelligence(int data)`
- `setStartingAgility(int data)`
- `setProperNamesUsed(int data)`
- `setProperNames(string data)`
- `setPrimaryAttribute(string data)`
- `setIntelligencePerLevel(real data)`
- `setHeroRevivalLocations(string data)`
- `setHeroAbilities(string data)`
- `setAgilityPerLevel(real data)`
