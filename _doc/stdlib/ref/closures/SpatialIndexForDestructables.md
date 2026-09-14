---
title: SpatialIndexForDestructables
layout: stdlibref
category: closures
categoryLabel: Closures
tags:
  - closures
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/SpatialIndexForDestructables.wurst'
generated: true
toc: sections
---

Native-less Lua spatial queries for destructables.

Pass a reusable ArrayList<destructable> and the query fills it. The target is reset before it is
populated, so one scratch list serves every call. To narrow what comes back, pass a filter rather
than collecting everything and testing membership afterwards.
Filters are caller-owned, and nested queries must use separate result collections.
The range query intentionally matches
ClosureForGroups.forDestructablesInRange: it returns the square that encloses the circle rather
than applying a second distance test. Runtime-created destructables must be registered explicitly.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/SpatialIndexForDestructables.wurst)**

## Interfaces

### DestructableSpatialFilter

```wurst
public interface DestructableSpatialFilter
```

**Members:**

- `matches(destructable whichDestructable) returns boolean`

## Functions

### destructablesInRect

```wurst
public function destructablesInRect(ArrayList<destructable> result, rect area, DestructableSpatialFilter filter)
```

### destructablesInRect

```wurst
public function destructablesInRect(ArrayList<destructable> result, rect area)
```

### destructablesInRange

```wurst
public function destructablesInRange(ArrayList<destructable> result, vec2 center, real range, DestructableSpatialFilter filter)
```

### destructablesInRange

```wurst
public function destructablesInRange(ArrayList<destructable> result, vec2 center, real range)
```
