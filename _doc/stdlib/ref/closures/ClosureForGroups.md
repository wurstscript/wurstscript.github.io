---
title: ClosureForGroups
layout: stdlibref
category: closures
categoryLabel: Closures
tags:
  - closure
  - closures
  - group
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/ClosureForGroups.wurst'
generated: true
curated: /stdlib/closure_for_groups
---

Executes the given closure for every unit in this group,
	removing the units from the group as processed.
	Return true to continue iteration, false to stop.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/ClosureForGroups.wurst)**

> 📖 Read the **[detailed guide](/stdlib/closure_for_groups)** for hand-written examples and background.

## Interfaces

### ForGroupCallback

```wurst
public interface ForGroupCallback
```

**Members:**

- `callback(unit u)`

### ForGroupCallbackUntil

```wurst
public interface ForGroupCallbackUntil
```

Return true to continue iteration, false to stop.

**Members:**

- `callback(unit u) returns bool`

### ForGroupCallbackD

```wurst
public interface ForGroupCallbackD
```

**Members:**

- `callback(destructable d)`

## Functions

### forUnitsOfType

```wurst
public function forUnitsOfType(string unitname, ForGroupCallback c)
```

Executes the given closure for every unit of the given type.
	Remember that names of custom units are "custom_[typeId]"

### forUnitsOfTypeCounted

```wurst
public function forUnitsOfTypeCounted(string unitname, int count, ForGroupCallback c)
```

Executes the given closure for every unit of the given player.
	Cancels itself after *count* iterations

### forUnitsOfPlayer

```wurst
public function forUnitsOfPlayer(player p, ForGroupCallback c)
```

Executes the given closure for every unit of the given player

### forUnitsAll

```wurst
public function forUnitsAll(ForGroupCallback c)
```

Executes the given closure for every existing unit

### forUnitsInRect

```wurst
public function forUnitsInRect(rect r, ForGroupCallback c)
```

Executes the given closure for every unit in the given rect

### forUnitsInRectCounted

```wurst
public function forUnitsInRectCounted(rect r, int count, ForGroupCallback c)
```

Executes the given closure for every unit in the given rect.
	Cancels itself after *count* iterations

### forUnitsInRange

```wurst
public function forUnitsInRange(vec2 pos, real radius, ForGroupCallback c)
```

Executes the given closure for every unit in range of the given position

### forUnitsInRange

```wurst
public function forUnitsInRange(vec2 pos, real radius, bool collisionSizeFiltering, ForGroupCallback c)
```

Executes the given closure for every unit in range of the given position
	With collisionSizeFiltering true it will take the units' collision into account.

### forUnitsInRangeCounted

```wurst
public function forUnitsInRangeCounted(vec2 pos, real radius, int count, ForGroupCallback c)
```

Executes the given closure for every unit in range of the given position
	Cancels itself after *count* iterations

### forUnitsSelected

```wurst
public function forUnitsSelected(player p, ForGroupCallback c)
```

Executes the given closure for every unit selected by the given player

### forNearestUnit

```wurst
public function forNearestUnit(vec2 pos, real range, filterfunc filter, ForGroupCallback c)
```

Executes the given closure for the closest unit inside the given range of the given position,
	matching the provided filter. If there is no unit in range, the closure will be run with "null"

### forUnitsOfTypeUntil

```wurst
public function forUnitsOfTypeUntil(string unitname, ForGroupCallbackUntil c)
```

Executes the given closure for every unit of the given type.
	Return true to continue iteration, false to stop callback invocation.

### forUnitsOfPlayerUntil

```wurst
public function forUnitsOfPlayerUntil(player p, ForGroupCallbackUntil c)
```

Executes the given closure for every unit of the given player.
	Return true to continue iteration, false to stop callback invocation.

### forUnitsAllUntil

```wurst
public function forUnitsAllUntil(ForGroupCallbackUntil c)
```

Executes the given closure for every existing unit.
	Return true to continue iteration, false to stop callback invocation.

### forUnitsInRectUntil

```wurst
public function forUnitsInRectUntil(rect r, ForGroupCallbackUntil c)
```

Executes the given closure for every unit in the given rect.
	Return true to continue iteration, false to stop callback invocation.

### forUnitsInRangeUntil

```wurst
public function forUnitsInRangeUntil(vec2 pos, real radius, ForGroupCallbackUntil c)
```

Executes the given closure for every unit in range of the given position.
	Return true to continue iteration, false to stop callback invocation.

### forUnitsSelectedUntil

```wurst
public function forUnitsSelectedUntil(player p, ForGroupCallbackUntil c)
```

Executes the given closure for every unit selected by the given player.
	Return true to continue iteration, false to stop callback invocation.

### forDestructablesInRange

```wurst
public function forDestructablesInRange(vec2 pos, real range, ForGroupCallbackD cb)
```

Executes the given closure for all destructables in a rect
	that incompasses the circle with the range radius at the given position.

### forDestructablesInRange

```wurst
public function forDestructablesInRange(vec2 pos, real range, boolexpr filter, ForGroupCallbackD cb)
```

Executes the given closure for all destructables in a rect
	that incompasses the circle with the range radius at the given position.

### forDestructablesInRect

```wurst
public function forDestructablesInRect(rect r, ForGroupCallbackD cb)
```

Executes the given closure for all destructables in the given rect

### forDestructablesInRect

```wurst
public function forDestructablesInRect(rect r, boolexpr filter, ForGroupCallbackD cb)
```

Executes the given closure for all destructables in the given rect

### forNearestDestructable

```wurst
public function forNearestDestructable(vec2 pos, real range, ForGroupCallbackD c)
```

Executes the given closure for the closes destructable in the given rect.
	If there is no destructable in range, the closure will be run with "null"

## Extension Functions

### group.forEachFrom

```wurst
public function group.forEachFrom(ForGroupCallback cb)
```

Executes the given closure for every unit in this group,
	removing the units from the group as processed

### group.forEachIn

```wurst
public function group.forEachIn(ForGroupCallback cb)
```

Executes the given closure for every unit in this group,
	keeping all units in the group

### group.forEachFromUntil

```wurst
public function group.forEachFromUntil(ForGroupCallbackUntil cb)
```

### group.forEachInUntil

```wurst
public function group.forEachInUntil(ForGroupCallbackUntil cb)
```

Executes the given closure for every unit in this group,
	keeping all units in the group.
	Return true to continue iteration, false to stop.
