---
title: UnitSpatialIndex
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/UnitSpatialIndex.wurst'
generated: true
toc: sections
---

Deprecated. Cell geometry belongs to the shared grid now, so `SPATIAL_PARTITION_CELL_SIZE` is the
setting; one grid cannot have a second cell size for units alone.

Kept exported so an existing `UnitSpatialIndex_config` still compiles, and defaulted to agree. It
is checked at init rather than ignored: a map that had tuned this and upgrades gets told its
value is no longer in effect, instead of quietly running on a different grid.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/UnitSpatialIndex.wurst)**

## Functions

### spatialIndexHealthy

```wurst
public function spatialIndexHealthy() returns boolean
```

Whether the Lua spatial index is active and can serve indexed queries.

### spatialIndexWorstStaleness

```wurst
public function spatialIndexWorstStaleness() returns real
```

Guaranteed upper staleness bound in seconds used to derive query padding.

### spatialIndexObservedStaleness

```wurst
public function spatialIndexObservedStaleness() returns real
```

Observed staleness in seconds; diagnostic only, never safe for padding.

### spatialIndexTrackedUnits

```wurst
public function spatialIndexTrackedUnits() returns int
```

How many units the sweep currently cycles over.

### spatialIndexAllocatedSlots

```wurst
public function spatialIndexAllocatedSlots() returns int
```

Allocated cache slots; ID reuse keeps this at peak concurrent population. Ids are shared across
partition consumers now, so this counts every entry id handed out, not only this layer's - which
is the right figure for the arrays here, since they are indexed by that same id.

### spatialIndexPadCells

```wurst
public function spatialIndexPadCells() returns int
```

Current query padding in whole cells, derived from guaranteed staleness.

### rebuildSpatialIndexGrid

```wurst
public function rebuildSpatialIndexGrid(vec2 worldMin, vec2 worldMax)
```

Rebuilds the extent and re-buckets all units. Unguarded so grid math remains testable on Jass.

The grid is shared, so this re-derives it for every partition consumer, not only for units: there
is one extent, and an entry linked under the old cell indices would be invisible to the new grid.
That is why the rebuild re-links everything rather than only this layer's entries.

### spatialIndexCellOf

```wurst
public function spatialIndexCellOf(vec2 pos) returns int
```

Internal-grid cell for tests and diagnostics.

### spatialIndexGridWidth

```wurst
public function spatialIndexGridWidth() returns int
```

Grid dimensions in cells, for tests and diagnostics.

### spatialIndexGridHeight

```wurst
public function spatialIndexGridHeight() returns int
```

### spatialIndexBeginQuery

```wurst
public function spatialIndexBeginQuery(vec2 center, real radius, boolean collisionSizeFiltering) returns int
```

Collects every unit whose origin lies within `radius` of `center` into the query snapshot and
returns how many matched. Must be paired with `spatialIndexEndQuery()`.

With `collisionSizeFiltering` the test becomes `IsUnitInRangeXY`, matching
`ClosureForGroups.forUnitsInRange(pos, radius, true, cb)`.

### spatialIndexBeginBoxQuery

```wurst
public function spatialIndexBeginBoxQuery(vec2 boxMin, vec2 boxMax) returns int
```

Collects units inside the box into the query snapshot.

### spatialIndexBeginPlayerQuery

```wurst
public function spatialIndexBeginPlayerQuery(player owner) returns int
```

Collects currently indexed units owned by owner without a native group scan.

   Player enumeration intentionally does not apply the range/box visibility filter: Warcraft's
   GroupEnumUnitsOfPlayer includes hidden and Locust units, so this query does too.

### spatialIndexQueryUnit

```wurst
public function spatialIndexQueryUnit(int i) returns unit
```

Returns the i-th match of the innermost open query.

### spatialIndexEndQuery

```wurst
public function spatialIndexEndQuery()
```

Closes the innermost open query and releases its snapshot.

## Extension Functions

### unit.updateSpatialIndex

```wurst
public function unit.updateSpatialIndex()
```

Registers or re-buckets one unit immediately. Ordinary movement does not need this - the sweep
covers it - but an engine-side teleport or a raw `SetUnitX` call does, because neither is
observable.

## Constants

### USE_UNIT_SPATIAL_INDEX

```wurst
public constant USE_UNIT_SPATIAL_INDEX = true
```

> 🔧 **Configurable.** Override it in your map's config package.

Master switch; override from `UnitSpatialIndex_config` to disable the native-less index.

### SPATIAL_INDEX_UNITS_PER_TICK

```wurst
public constant SPATIAL_INDEX_UNITS_PER_TICK = 128
```

> 🔧 **Configurable.** Override it in your map's config package.

Units re-bucketed per tick; raising this shortens the cycle and query padding.

### SPATIAL_INDEX_SWEEP_PERIOD

```wurst
public constant SPATIAL_INDEX_SWEEP_PERIOD = ANIMATION_PERIOD
```

> 🔧 **Configurable.** Override it in your map's config package.

Time between sweep steps. Raising this reduces timer and refresh work but increases query padding.

### SPATIAL_INDEX_MAX_UNIT_SPEED

```wurst
public constant SPATIAL_INDEX_MAX_UNIT_SPEED = 522.
```

> 🔧 **Configurable.** Override it in your map's config package.

Engine movement-speed cap. Configurable because gameplay constants can raise the default 522.

### SPATIAL_INDEX_CHECK_HIDDEN

```wurst
public constant SPATIAL_INDEX_CHECK_HIDDEN = true
```

> 🔧 **Configurable.** Override it in your map's config package.

Disable when hidden units are never used to save one native per hit.

### SPATIAL_INDEX_CELL_SIZE

```wurst
public constant SPATIAL_INDEX_CELL_SIZE = SPATIAL_PARTITION_CELL_SIZE
```

> 🔧 **Configurable.** Override it in your map's config package.
