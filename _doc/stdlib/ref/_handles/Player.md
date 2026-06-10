---
title: Player
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Player.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Player.wurst)**

## Extension Functions

### player.setGold

```wurst
public function player.setGold(int val)
```

### player.addGold

```wurst
public function player.addGold(int val)
```

### player.setLumber

```wurst
public function player.setLumber(int val)
```

### player.addLumber

```wurst
public function player.addLumber(int val)
```

### player.addState

```wurst
public function player.addState(playerstate state, int val)
```

### player.clearSelection

```wurst
public function player.clearSelection()
```

Clears the selection for the player, deselecting all
	widgets.

### player.isSelectionEnabled

```wurst
public function player.isSelectionEnabled() returns bool
```

Get if Selection is enabled for local player. Returns always false for non-local player.

### player.isSelectionCircleEnabled

```wurst
public function player.isSelectionCircleEnabled() returns bool
```

Get if Selection Circle is enabled for local player. Returns always false for non-local player.

### player.setSelectionsEnabled

```wurst
public function player.setSelectionsEnabled(bool enableSelection, bool enableSelectionCircle)
```

Enable or disable player selections.

### player.disableUserControl

```wurst
public function player.disableUserControl()
```

Disable UI control for the player

### player.enableUserControl

```wurst
public function player.enableUserControl()
```

Enable UI control for the player

### player.getController

```wurst
public function player.getController() returns mapcontrol
```

### player.getCurrentSupply

```wurst
public function player.getCurrentSupply() returns int
```

### player.getGold

```wurst
public function player.getGold() returns int
```

### player.getId

```wurst
public function player.getId() returns int
```

### player.getLumber

```wurst
public function player.getLumber() returns int
```

### player.getMaxSupply

```wurst
public function player.getMaxSupply() returns int
```

### player.getName

```wurst
public function player.getName() returns string
```

### player.getName

```wurst
public function player.getName(boolean removeHash) returns string
```

Reforged names have a number attached after a hash tag, like Bob#1234

### player.getSlotState

```wurst
public function player.getSlotState() returns playerslotstate
```

### player.getStartLocation

```wurst
public function player.getStartLocation() returns vec2
```

### player.getState

```wurst
public function player.getState(playerstate state) returns int
```

### player.isAllyOf

```wurst
public function player.isAllyOf(player p) returns boolean
```

### player.isEnemyOf

```wurst
public function player.isEnemyOf(player p) returns boolean
```

### player.panCamToTimed

```wurst
public function player.panCamToTimed(unit u, real time)
```

### player.select

```wurst
public function player.select(unit u)
```

### player.selectSingle

```wurst
public function player.selectSingle(unit u)
```

### player.setAbilityAvailable

```wurst
public function player.setAbilityAvailable(int abilityId, boolean avail)
```

### player.setName

```wurst
public function player.setName(string name)
```

### player.setState

```wurst
public function player.setState(playerstate state, int val)
```

### player.subGold

```wurst
public function player.subGold(int val)
```

### player.subState

```wurst
public function player.subState(playerstate state, int val)
```

### player.setUserControl

```wurst
public function player.setUserControl(boolean enable)
```

Enables / disables user UI control for the player

### player.unselect

```wurst
public function player.unselect(unit u)
```

### player.isIngame

```wurst
public function player.isIngame() returns boolean
```

### player.decTechResearched

```wurst
public function player.decTechResearched(int techId, int levels)
```

### player.forceStartLocation

```wurst
public function player.forceStartLocation(int index)
```

### player.getPlayerAlliance

```wurst
public function player.getPlayerAlliance(player otherPlayer, alliancetype whichAllianceSetting) returns boolean
```

### player.setPlayerAlliance

```wurst
public function player.setPlayerAlliance(player otherPlayer, alliancetype whichAllianceSetting, boolean value)
```

### player.setTaxRate

```wurst
public function player.setTaxRate(player otherPlayer, playerstate whichResource, integer rate)
```

### player.setRacePreference

```wurst
public function player.setRacePreference(racepreference whichRacePreference)
```

### player.setRaceSelectable

```wurst
public function player.setRaceSelectable(boolean value)
```

### player.getTeam

```wurst
public function player.getTeam() returns int
```

### player.isSelectable

```wurst
public function player.isSelectable() returns bool
```

### player.getTaxRate

```wurst
public function player.getTaxRate(player otherPlayer, playerstate whichResource) returns int
```

### player.isRacePrefSet

```wurst
public function player.isRacePrefSet(racepreference preference) returns bool
```

### player.getScreenSize

```wurst
public function player.getScreenSize() returns vec2
```

Get width and height of current Warcraft 3 client window. Returns vec2(0,0) for non-local player.

### player.isScreenActive

```wurst
public function player.isScreenActive() returns bool
```

Check if client window is active. Will return false always for non-local player.

### player.getLocale

```wurst
public function player.getLocale() returns string
```

Return language locale for local player. Returns null for non-local player.

### player.isTargetIndicatorEnabled

```wurst
public function player.isTargetIndicatorEnabled() returns bool
```

Return if Target Indicator is enabled for local player. Returns false for non-local player.

### player.setTargetIndicator

```wurst
public function player.setTargetIndicator(bool enableTargetIndicator)
```

Set if Target Indicator is enabled for local player.

### player.setCursorEnabled

```wurst
public function player.setCursorEnabled(bool enableCursor)
```

Enable or disable mouse cursor..

### player.setPosCursor

```wurst
public function player.setPosCursor(vec2 pos)
```

Set cursor position on screen. Uses int values internally.

### player.getCursorFocus

```wurst
public function player.getCursorFocus() returns unit
```

Get unit focused by mouse cursor.

### player.setMinimapTerrainTex

```wurst
public function player.setMinimapTerrainTex(string texFile) returns bool
```

### player.sendSyncData

```wurst
public function player.sendSyncData(string prefix, string data) returns bool
```

### player.showChatMessage

```wurst
public function player.showChatMessage(int recipient, string message)
```

### player.setHeroMaxAllowed

```wurst
public function player.setHeroMaxAllowed(int amount)
```

Sets the maximum allowed hero amount for a player

### player.hasVisibility

```wurst
public function player.hasVisibility(unit target) returns bool
```

### player.hasVisibility

```wurst
public function player.hasVisibility(vec2 pos) returns bool
```

## Constants

### localPlayer

```wurst
public constant localPlayer = GetLocalPlayer()
```
