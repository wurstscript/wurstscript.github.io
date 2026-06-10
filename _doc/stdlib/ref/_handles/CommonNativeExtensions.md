---
title: CommonNativeExtensions
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/CommonNativeExtensions.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/CommonNativeExtensions.wurst)**

## Extension Functions

### gametype.setGameTypeSupported

```wurst
public function gametype.setGameTypeSupported(boolean value)
```

### mapflag.setMapFlag

```wurst
public function mapflag.setMapFlag(boolean value)
```

### placement.setGamePlacement

```wurst
public function placement.setGamePlacement()
```

### gamespeed.setGameSpeed

```wurst
public function gamespeed.setGameSpeed()
```

### gamedifficulty.setGameDifficulty

```wurst
public function gamedifficulty.setGameDifficulty()
```

### mapdensity.setResourceDensity

```wurst
public function mapdensity.setResourceDensity()
```

### mapdensity.setCreatureDensity

```wurst
public function mapdensity.setCreatureDensity()
```

### gametype.isGameTypeSupported

```wurst
public function gametype.isGameTypeSupported() returns boolean
```

### mapflag.isMapFlagSet

```wurst
public function mapflag.isMapFlagSet() returns boolean
```

### location.rectFromLoc

```wurst
public function location.rectFromLoc(location max) returns rect
```

### vec2.rectFrom

```wurst
public function vec2.rectFrom(vec2 max) returns rect
```

### conditionfunc.destroyCondition

```wurst
public function conditionfunc.destroyCondition()
```

### filterfunc.destroyFilter

```wurst
public function filterfunc.destroyFilter()
```

### location.isLocationVisibleToPlayer

```wurst
public function location.isLocationVisibleToPlayer(player whichPlayer) returns boolean
```

### location.isLocationFoggedToPlayer

```wurst
public function location.isLocationFoggedToPlayer(player whichPlayer) returns boolean
```

### location.isLocationMaskedToPlayer

```wurst
public function location.isLocationMaskedToPlayer(player whichPlayer) returns boolean
```

### vec2.isVisibleToPlayer

```wurst
public function vec2.isVisibleToPlayer(player whichPlayer) returns boolean
```

### vec2.isFoggedToPlayer

```wurst
public function vec2.isFoggedToPlayer(player whichPlayer) returns boolean
```

### vec2.isMaskedToPlayer

```wurst
public function vec2.isMaskedToPlayer(player whichPlayer) returns boolean
```

### vec2.pingMinimap

```wurst
public function vec2.pingMinimap(real duration)
```

### vec2.pingMinimapEx

```wurst
public function vec2.pingMinimapEx(real duration, integer red, integer green, integer blue, boolean extraEffects)
```

### vec2.createMinimapIcon

```wurst
public function vec2.createMinimapIcon(integer red, integer green, integer blue, string pingPath, fogstate fogVisibility) returns minimapicon
```

### vec2.terrainDeformRipple

```wurst
public function vec2.terrainDeformRipple(real radius, real depth, integer duration, integer count, real spaceWaves, real timeWaves, real radiusStartPct, boolean limitNeg) returns terraindeformation
```

### vec2.terrainDeformWave

```wurst
public function vec2.terrainDeformWave(vec2 direction, real distance, real speed, real radius, real depth, integer trailTime, integer count) returns terraindeformation
```

### vec2.terrainDeformRandom

```wurst
public function vec2.terrainDeformRandom(real radius, real minDelta, real maxDelta, integer duration, integer updateInterval) returns terraindeformation
```

### vec2.getTerrainCliffLevel

```wurst
public function vec2.getTerrainCliffLevel() returns integer
```

### vec2.createUbersplat

```wurst
public function vec2.createUbersplat(string name, integer red, integer green, integer blue, integer alpha, boolean forcePaused, boolean noBirthTime) returns ubersplat
```

### vec2.isPointBlighted

```wurst
public function vec2.isPointBlighted() returns boolean
```

### vec2.setDoodadAnimation

```wurst
public function vec2.setDoodadAnimation(real radius, integer doodadID, boolean nearestOnly, string animName, boolean animRandom)
```

### version.versionCompatible

```wurst
public function version.versionCompatible() returns boolean
```

### version.versionSupported

```wurst
public function version.versionSupported() returns boolean
```

### race.setCampaignMenuRace

```wurst
public function race.setCampaignMenuRace()
```

### fgamestate.setFloatGameState

```wurst
public function fgamestate.setFloatGameState(real value)
```

### fgamestate.getFloatGameState

```wurst
public function fgamestate.getFloatGameState() returns real
```

### igamestate.setIntegerGameState

```wurst
public function igamestate.setIntegerGameState(integer value)
```

### igamestate.getIntegerGameState

```wurst
public function igamestate.getIntegerGameState() returns integer
```

### gamedifficulty.setDefaultDifficulty

```wurst
public function gamedifficulty.setDefaultDifficulty()
```

### unitpool.destroyUnitPool

```wurst
public function unitpool.destroyUnitPool()
```

### unitpool.unitPoolAddUnitType

```wurst
public function unitpool.unitPoolAddUnitType(integer unitId, real weight)
```

### unitpool.unitPoolRemoveUnitType

```wurst
public function unitpool.unitPoolRemoveUnitType(integer unitId)
```

### unitpool.placeRandomUnit

```wurst
public function unitpool.placeRandomUnit(player forWhichPlayer, real x, real y, real facing) returns unit
```

### unitpool.placeRandomUnit

```wurst
public function unitpool.placeRandomUnit(player forWhichPlayer, vec2 pos, real facing) returns unit
```

### itempool.destroyItemPool

```wurst
public function itempool.destroyItemPool()
```

### itempool.itemPoolAddItemType

```wurst
public function itempool.itemPoolAddItemType(integer itemId, real weight)
```

### itempool.itemPoolRemoveItemType

```wurst
public function itempool.itemPoolRemoveItemType(integer itemId)
```

### itempool.placeRandomItem

```wurst
public function itempool.placeRandomItem(real x, real y) returns item
```

### itempool.placeRandomItem

```wurst
public function itempool.placeRandomItem(vec2 pos) returns item
```

### itemtype.chooseRandomItemEx

```wurst
public function itemtype.chooseRandomItemEx(integer level) returns integer
```

### location.createMinimapIconAtLoc

```wurst
public function location.createMinimapIconAtLoc(integer red, integer green, integer blue, string pingPath, fogstate fogVisibility) returns minimapicon
```

### minimapicon.destroyMinimapIcon

```wurst
public function minimapicon.destroyMinimapIcon()
```

### minimapicon.setMinimapIconVisible

```wurst
public function minimapicon.setMinimapIconVisible(boolean visible)
```

### minimapicon.setMinimapIconOrphanDestroy

```wurst
public function minimapicon.setMinimapIconOrphanDestroy(boolean doDestroy)
```

### defeatcondition.destroyDefeatCondition

```wurst
public function defeatcondition.destroyDefeatCondition()
```

### defeatcondition.defeatConditionSetDescription

```wurst
public function defeatcondition.defeatConditionSetDescription(string description)
```

### leaderboard.destroyLeaderboard

```wurst
public function leaderboard.destroyLeaderboard()
```

### leaderboard.leaderboardDisplay

```wurst
public function leaderboard.leaderboardDisplay(boolean show)
```

### leaderboard.isLeaderboardDisplayed

```wurst
public function leaderboard.isLeaderboardDisplayed() returns boolean
```

### leaderboard.leaderboardGetItemCount

```wurst
public function leaderboard.leaderboardGetItemCount() returns integer
```

### leaderboard.leaderboardSetSizeByItemCount

```wurst
public function leaderboard.leaderboardSetSizeByItemCount(integer count)
```

### leaderboard.leaderboardAddItem

```wurst
public function leaderboard.leaderboardAddItem(string label, integer value, player p)
```

### leaderboard.leaderboardRemoveItem

```wurst
public function leaderboard.leaderboardRemoveItem(integer index)
```

### leaderboard.leaderboardRemovePlayerItem

```wurst
public function leaderboard.leaderboardRemovePlayerItem(player p)
```

### leaderboard.leaderboardClear

```wurst
public function leaderboard.leaderboardClear()
```

### leaderboard.leaderboardSortItemsByValue

```wurst
public function leaderboard.leaderboardSortItemsByValue(boolean ascending)
```

### leaderboard.leaderboardSortItemsByPlayer

```wurst
public function leaderboard.leaderboardSortItemsByPlayer(boolean ascending)
```

### leaderboard.leaderboardSortItemsByLabel

```wurst
public function leaderboard.leaderboardSortItemsByLabel(boolean ascending)
```

### leaderboard.leaderboardHasPlayerItem

```wurst
public function leaderboard.leaderboardHasPlayerItem(player p) returns boolean
```

### leaderboard.leaderboardGetPlayerIndex

```wurst
public function leaderboard.leaderboardGetPlayerIndex(player p) returns integer
```

### leaderboard.leaderboardSetLabel

```wurst
public function leaderboard.leaderboardSetLabel(string label)
```

### leaderboard.leaderboardGetLabelText

```wurst
public function leaderboard.leaderboardGetLabelText() returns string
```

### leaderboard.leaderboardSetLabelColor

```wurst
public function leaderboard.leaderboardSetLabelColor(integer red, integer green, integer blue, integer alpha)
```

### leaderboard.leaderboardSetValueColor

```wurst
public function leaderboard.leaderboardSetValueColor(integer red, integer green, integer blue, integer alpha)
```

### leaderboard.leaderboardSetStyle

```wurst
public function leaderboard.leaderboardSetStyle(boolean showLabel, boolean showNames, boolean showValues, boolean showIcons)
```

### leaderboard.leaderboardSetItemValue

```wurst
public function leaderboard.leaderboardSetItemValue(integer whichItem, integer val)
```

### leaderboard.leaderboardSetItemLabel

```wurst
public function leaderboard.leaderboardSetItemLabel(integer whichItem, string val)
```

### leaderboard.leaderboardSetItemStyle

```wurst
public function leaderboard.leaderboardSetItemStyle(integer whichItem, boolean showLabel, boolean showValue, boolean showIcon)
```

### leaderboard.leaderboardSetItemLabelColor

```wurst
public function leaderboard.leaderboardSetItemLabelColor(integer whichItem, integer red, integer green, integer blue, integer alpha)
```

### leaderboard.leaderboardSetItemValueColor

```wurst
public function leaderboard.leaderboardSetItemValueColor(integer whichItem, integer red, integer green, integer blue, integer alpha)
```

### camerasetup.cameraSetupGetDestPositionLoc

```wurst
public function camerasetup.cameraSetupGetDestPositionLoc() returns location
```

### camerasetup.cameraSetupSetLabel

```wurst
public function camerasetup.cameraSetupSetLabel(string label)
```

### camerasetup.cameraSetupGetLabel

```wurst
public function camerasetup.cameraSetupGetLabel() returns string
```

### volumegroup.volumeGroupSetVolume

```wurst
public function volumegroup.volumeGroupSetVolume(real scale)
```

### terraindeformation.terrainDeformStop

```wurst
public function terraindeformation.terrainDeformStop(integer duration)
```

### ubersplat.destroyUbersplat

```wurst
public function ubersplat.destroyUbersplat()
```

### ubersplat.resetUbersplat

```wurst
public function ubersplat.resetUbersplat()
```

### ubersplat.finishUbersplat

```wurst
public function ubersplat.finishUbersplat()
```

### ubersplat.showUbersplat

```wurst
public function ubersplat.showUbersplat(boolean flag)
```

### ubersplat.setUbersplatRender

```wurst
public function ubersplat.setUbersplatRender(boolean flag)
```

### ubersplat.setUbersplatRenderAlways

```wurst
public function ubersplat.setUbersplatRenderAlways(boolean flag)
```

### commandbuttoneffect.destroyCommandButtonEffect

```wurst
public function commandbuttoneffect.destroyCommandButtonEffect()
```
