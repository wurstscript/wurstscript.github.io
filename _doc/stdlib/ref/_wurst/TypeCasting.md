---
title: TypeCasting
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/TypeCasting.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/TypeCasting.wurst)**

## Functions

### realToIndex

```wurst
public function realToIndex(real r) returns int
```

### realFromIndex

```wurst
public function realFromIndex(int index) returns real
```

### stringToIndex

```wurst
public function stringToIndex(string s) returns int
```

### stringFromIndex

```wurst
public function stringFromIndex(int index) returns string
```

### playerFromIndex

```wurst
public function playerFromIndex(int index) returns player
```

### playerToIndex

```wurst
public function playerToIndex(player object) returns int
```

### widgetFromIndex

```wurst
public function widgetFromIndex(int index) returns widget
```

### widgetToIndex

```wurst
public function widgetToIndex(widget object) returns int
```

### unitFromIndex

```wurst
public function unitFromIndex(int index) returns unit
```

### unitToIndex

```wurst
public function unitToIndex(unit object) returns int
```

### destructableFromIndex

```wurst
public function destructableFromIndex(int index) returns destructable
```

### destructableToIndex

```wurst
public function destructableToIndex(destructable object) returns int
```

### itemFromIndex

```wurst
public function itemFromIndex(int index) returns item
```

### itemToIndex

```wurst
public function itemToIndex(item object) returns int
```

### abilityFromIndex

```wurst
public function abilityFromIndex(int index) returns ability
```

### abilityToIndex

```wurst
public function abilityToIndex(ability object) returns int
```

### forceFromIndex

```wurst
public function forceFromIndex(int index) returns force
```

### forceToIndex

```wurst
public function forceToIndex(force object) returns int
```

### groupFromIndex

```wurst
public function groupFromIndex(int index) returns group
```

### groupToIndex

```wurst
public function groupToIndex(group object) returns int
```

### triggerFromIndex

```wurst
public function triggerFromIndex(int index) returns trigger
```

### triggerToIndex

```wurst
public function triggerToIndex(trigger object) returns int
```

### triggeractionFromIndex

```wurst
public function triggeractionFromIndex(int index) returns triggeraction
```

### triggeractionToIndex

```wurst
public function triggeractionToIndex(triggeraction object) returns int
```

### triggerconditionFromIndex

```wurst
public function triggerconditionFromIndex(int index) returns triggercondition
```

### triggerconditionToIndex

```wurst
public function triggerconditionToIndex(triggercondition object) returns int
```

### timerFromIndex

```wurst
public function timerFromIndex(int index) returns timer
```

### timerToIndex

```wurst
public function timerToIndex(timer object) returns int
```

### locationFromIndex

```wurst
public function locationFromIndex(int index) returns location
```

### locationToIndex

```wurst
public function locationToIndex(location object) returns int
```

### regionFromIndex

```wurst
public function regionFromIndex(int index) returns region
```

### regionToIndex

```wurst
public function regionToIndex(region object) returns int
```

### rectFromIndex

```wurst
public function rectFromIndex(int index) returns rect
```

### rectToIndex

```wurst
public function rectToIndex(rect object) returns int
```

### soundFromIndex

```wurst
public function soundFromIndex(int index) returns sound
```

### soundToIndex

```wurst
public function soundToIndex(sound object) returns int
```

### effectFromIndex

```wurst
public function effectFromIndex(int index) returns effect
```

### effectToIndex

```wurst
public function effectToIndex(effect object) returns int
```

### dialogFromIndex

```wurst
public function dialogFromIndex(int index) returns dialog
```

### dialogToIndex

```wurst
public function dialogToIndex(dialog object) returns int
```

### buttonFromIndex

```wurst
public function buttonFromIndex(int index) returns button
```

### buttonToIndex

```wurst
public function buttonToIndex(button object) returns int
```

### questFromIndex

```wurst
public function questFromIndex(int index) returns quest
```

### questToIndex

```wurst
public function questToIndex(quest object) returns int
```

### questitemFromIndex

```wurst
public function questitemFromIndex(int index) returns questitem
```

### questitemToIndex

```wurst
public function questitemToIndex(questitem object) returns int
```

### leaderboardFromIndex

```wurst
public function leaderboardFromIndex(int index) returns leaderboard
```

### leaderboardToIndex

```wurst
public function leaderboardToIndex(leaderboard object) returns int
```

### multiboardFromIndex

```wurst
public function multiboardFromIndex(int index) returns multiboard
```

### multiboardToIndex

```wurst
public function multiboardToIndex(multiboard object) returns int
```

### trackableFromIndex

```wurst
public function trackableFromIndex(int index) returns trackable
```

### trackableToIndex

```wurst
public function trackableToIndex(trackable object) returns int
```

### lightningFromIndex

```wurst
public function lightningFromIndex(int index) returns lightning
```

### lightningToIndex

```wurst
public function lightningToIndex(lightning object) returns int
```

### ubersplatFromIndex

```wurst
public function ubersplatFromIndex(int index) returns ubersplat
```

### ubersplatToIndex

```wurst
public function ubersplatToIndex(ubersplat object) returns int
```

### framehandleToIndex

```wurst
public function framehandleToIndex(framehandle object) returns int
```

### framehandleFromIndex

```wurst
public function framehandleFromIndex(int index) returns framehandle
```

### oskeytypeToIndex

```wurst
public function oskeytypeToIndex(oskeytype object) returns int
```

### oskeytypeFromIndex

```wurst
public function oskeytypeFromIndex(int index) returns oskeytype
```

### booleanToIndex

```wurst
public function booleanToIndex(boolean u) returns int
```

### booleanFromIndex

```wurst
public function booleanFromIndex(int index) returns boolean
```

## Extension Functions

### handle.getTCHandleId

```wurst
public function handle.getTCHandleId() returns int
```

## Constants

### R2I_PRECISION

```wurst
constant R2I_PRECISION = 1000.
```

> 🔧 **Configurable.** Override it in your map's config package.

How many decimals to preserve for reals
