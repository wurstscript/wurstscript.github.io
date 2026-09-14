---
title: SpatialIndexForUnits
layout: stdlibref
category: closures
categoryLabel: Closures
tags:
  - closures
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/SpatialIndexForUnits.wurst'
generated: true
toc: sections
---

Native-less Lua spatial queries.

Pass a reusable ArrayList<unit> and the query fills it. The target is reset before it is
populated, so one scratch list serves every call on a hot path. No Warcraft group, result
collection, or filter is allocated or destroyed by these overloads.

A query result is something you walk, so a list is the shape it wants. To narrow what comes back,
pass a UnitSpatialFilter rather than collecting everything and testing membership afterwards -
the filter runs once per match, before the result is built.

Filters are caller-owned so one instance can be reused across queries. A capturing lambda creates
a closure at its declaration site; keep it outside hot loops when allocation matters.
Nested queries must use separate result collections because each call resets its target.

These APIs are intentionally Lua-oriented: on Jass or while disabled, the target remains empty
because no native fallback is hidden behind the generic result type.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/SpatialIndexForUnits.wurst)**

## Interfaces

### UnitSpatialFilter

```wurst
public interface UnitSpatialFilter
```

**Members:**

- `matches(unit whichUnit) returns boolean`

## Functions

### unitsInRange

```wurst
public function unitsInRange(ArrayList<unit> result, vec2 center, real radius)
```

Replaces result with units whose origins are within radius of center.

### unitsInRange

```wurst
public function unitsInRange(ArrayList<unit> result, vec2 center, real radius, UnitSpatialFilter filter)
```

Replaces result with filtered units whose origins are within radius of center.

### unitsInRange

```wurst
public function unitsInRange(ArrayList<unit> result, vec2 center, real radius, boolean collisionFiltering)
```

Replaces result with units in range, optionally applying collision-size filtering.

### unitsInRange

```wurst
public function unitsInRange(ArrayList<unit> result, vec2 center, real radius, boolean collisionFiltering, UnitSpatialFilter filter)
```

Replaces result with filtered units in range, optionally applying collision-size filtering.

### unitsInBox

```wurst
public function unitsInBox(ArrayList<unit> result, vec2 boxMin, vec2 boxMax, UnitSpatialFilter filter)
```

Replaces result with filtered units whose origins are inside the axis-aligned box.

### unitsInBox

```wurst
public function unitsInBox(ArrayList<unit> result, vec2 boxMin, vec2 boxMax)
```

### unitsInRect

```wurst
public function unitsInRect(ArrayList<unit> result, rect area, UnitSpatialFilter filter)
```

### unitsInRect

```wurst
public function unitsInRect(ArrayList<unit> result, rect area)
```

### unitsOfPlayer

```wurst
public function unitsOfPlayer(ArrayList<unit> result, player owner, UnitSpatialFilter filter)
```

Replaces result with currently indexed units owned by owner. This is a linear registry scan;
	per-player secondary sets are intentionally not maintained.

### unitsOfPlayer

```wurst
public function unitsOfPlayer(ArrayList<unit> result, player owner)
```

### forEachUnitInRange

```wurst
public function forEachUnitInRange(vec2 center, real radius, ForGroupCallback cb)
```

Runs the callback for every unit whose origin is within radius of center.

### forEachUnitInRange

```wurst
public function forEachUnitInRange(vec2 center, real radius, bool collisionFiltering, ForGroupCallback cb)
```

Runs the callback for every unit in range, optionally applying collision-size filtering.

### forEachUnitInRect

```wurst
public function forEachUnitInRect(rect area, ForGroupCallback cb)
```

Runs the callback for every unit whose origin is inside the rect.

### forEachUnitOfPlayer

```wurst
public function forEachUnitOfPlayer(player owner, ForGroupCallback cb)
```

Runs the callback for every unit owned by the player.

### forEachUnitInRangeUntil

```wurst
public function forEachUnitInRangeUntil(vec2 center, real radius, ForGroupCallbackUntil cb)
```

As forEachUnitInRange, stopping as soon as the callback returns false.

### forEachUnitInRectUntil

```wurst
public function forEachUnitInRectUntil(rect area, ForGroupCallbackUntil cb)
```

As forEachUnitInRect, stopping as soon as the callback returns false.

### forEachUnitOfPlayerUntil

```wurst
public function forEachUnitOfPlayerUntil(player owner, ForGroupCallbackUntil cb)
```

As forEachUnitOfPlayer, stopping as soon as the callback returns false.
