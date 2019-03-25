---
title: Creating unit object data
sections:
- Intro
- UnitDefinition
- HeroDefinition
- BuildingDefinition
---

### Intro

In warcraft III basically all units have the same attributes, but some options only become available when the unit is marked as hero or building.
The standard library definitions are therefore split into `UnitDefinition`, `HeroDefinition`, `BuildingDefinition` and `BuildingAndHeroDefinition`.

### UnitDefinition

`UnitDefinition` incorporates all units that are neither a hero nor a building. To avoid having to deal with raw ids and id collision, you should use the provided preset Id Generators from the `IdGenerator` package.

> Note that Warcraft III considers any unit with an id starting with an uppercase letter a hero, even when not using HeroDefinition

Example from `DummyRecycler`:

```wurst
let DUMMY_UNIT_ID = compiletime(UNIT_ID_GEN.next())

@compiletime function gen()
	new UnitDefinition(DUMMY_UNIT_ID, UnitIds.wisp)
		..setName("Effect Dummy Unit")
		..setUpgradesUsed("")
		..setStructuresBuilt("")
		..setManaRegeneration(0.1)
		..setManaInitialAmount(1000)
		..setManaMaximum(1000)
		..setCollisionSize(0.0)
		..setRace(Race.Commoner)
		..setFoodCost(0)
		..setArmorType(ArmorType.Divine)
		..setIconGameInterface(Icons.bTNtemp)
		..setSpeedBase(522)
		..setModelFile("dummy.mdl")
		..setAnimationBlendTimeseconds(0.0)
		..setAnimationCastBackswing(0.0)
		..setMaximumPitchAngledegrees(0.0)
		..setMaximumRollAngledegrees(0.0)
		..setArtSpecial("")
		..setProjectileImpactZ(0.0)
		..setProjectileLaunchZ(0.0)
		..setNameEditorSuffix("(Basics)")
		..setSightRadiusDay(1)
		..setSightRadiusNight(1)
		..setUnitClassification("_")
		..setPropulsionWindowdegrees(1.0)
		..setTooltipBasic("")
		..setNormalAbilities(commaList(AbilityIds.invulnerable, AbilityIds.locust))
```

### HeroDefinition

Use `HeroDefinition` for heroes that aren't buildings. Additionaly to using `HeroDefinition` you also need to provide an id that starts with an uppercase letter. Use the `HERO_ID_GEN` Id Generator. Example hero based on paladin:

> If the id provided does not start with an uppercase letter, the unit will not be a hero.

```wurst
let ESC_STRONG_ID = compiletime(HERO_ID_GEN.next())

@compiletime function gen()
	new HeroDefinition(ESC_STRONG_ID, UnitIds.paladin)
		..setIconGameInterface(Icons.bTNFootman)
		..setIconScoreScreen("")
		..setModelFile(Units.theCaptain1)
		..setCollisionSize(0)
		..setNormalAbilities(commaList(GHOST_VIS_ID, AbilityIds.inventory))
		..setHotkey("")
		..setProperNames(commaList("Mike", "Jason", "Rocky", "Herold", "Arthur", "Chev"))
		..setProperNamesUsed(6)
		..setName("|cff084294Strong Escaper")
		..setManaInitialAmount(0)
		..setStartingAgility(0)
		..setStartingIntelligence(0)
		..setStartingStrength(0)
		..setHitPointsMaximumBase(300)
		..setAgilityPerLevel(0)
		..setStrengthPerLevel(0)
		..setIntelligencePerLevel(0)
		..hideHeroDeathMsg(true)
```

### BuildingDefinition

Use `BuildingDefinition` or `BuildingAndHeroDefinition` respectively to create buildings.

```wurst
let WAYPOINT_ID = compiletime(UNIT_ID_GEN.next())

@compiletime function gen()
	new BuildingDefinition(WAYPOINT_ID, UnitIds.circleofpower)
	..setName("|cffFF7B29Waypoint")
	..setHotkey("R")
	..setTooltipBasic("|cffFFCC00Build |cffFF7B29Waypoint [R]")
	..setTooltipExtended("Orders Escaperkillers to move to the Rallypoint." +
	"\nUsefull if you want your units not only to go a straight line.")
	..setIconGameInterface("ReplaceableTextures\\CommandButtons\\BTNWaypoint.blp")
	..setNormalAbilities(commaList(TURN_OFF_ID, INFO_WAYPOINT_ID, AND_CONNECTION_ID, DECREASE_DELAY_ID, INCREASE_DELAY_ID, NO_WISPS_ID,
								  REMOVE_OBJECT_ID, RALLY_POINT, GHOST_INVIS_ID, INVULNERABILITY_ID, CLEAR_CONNECTION_ID))
	..setButtonPositionX(3)
	..setButtonPositionY(0)
	..setTintingColorGreen(128)
	..setTintingColorBlue(0)
	..setSightRadiusDay(0)
	..setSightRadiusNight(0)
	..setBuildTime(1)
	..setCollisionSize(0)
	..setScalingValue(0.8)
	..setSelectionScale(2.2)
	..setPathingMap("none")
	..setHideMinimapDisplay(true)
```
