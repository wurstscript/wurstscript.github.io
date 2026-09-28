---
title: SpatialPartition
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/SpatialPartition.wurst'
generated: true
toc: sections
---

Cell-head slots the given extent would need, so a caller can size cells and groups before committing
to it - or -1 when that count is not representable, which is itself a reason to refuse the extent.

Computed with divisions rather than by multiplying and inspecting the result: at a small cell size
the product overflows, and a wrapped negative reads as "comfortably within budget" to any comparison
made afterwards.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/SpatialPartition.wurst)**

## Functions

### spatialPartitionCellOf

```wurst
public function spatialPartitionCellOf(vec2 pos) returns int
```

Fine cell for a position, for tests and diagnostics.

### spatialPartitionGridWidth

```wurst
public function spatialPartitionGridWidth() returns int
```

### spatialPartitionGridHeight

```wurst
public function spatialPartitionGridHeight() returns int
```

### spatialPartitionCoarseWidth

```wurst
public function spatialPartitionCoarseWidth() returns int
```

### spatialPartitionCellSlotCount

```wurst
public function spatialPartitionCellSlotCount() returns int
```

Flattened cell-head slots the current grid occupies: one per cell per group. On Jass this must stay
within `JASS_MAX_ARRAY_SIZE`; on Lua arrays grow and it is only a memory figure.

### spatialPartitionRequiredCellSlots

```wurst
public function spatialPartitionRequiredCellSlots(vec2 worldMin, vec2 worldMax) returns int
```

### spatialPartitionExtentFits

```wurst
public function spatialPartitionExtentFits(vec2 worldMin, vec2 worldMax) returns boolean
```

Whether an extent's cell storage is both representable and within this target's array limit.

### spatialPartitionLastQueryVisits

```wurst
public function spatialPartitionLastQueryVisits() returns int
```

Entries the last query walked, whether or not they matched.

### spatialPartitionLastQueryBlocksSkipped

```wurst
public function spatialPartitionLastQueryBlocksSkipped() returns int
```

Coarse blocks the last query rejected without descending into their cells.

### spatialPartitionMaxEntryId

```wurst
public function spatialPartitionMaxEntryId() returns int
```

Largest usable entry id on this target. Whichever of the two ceilings binds first: the flattened
per-entry links, or the snapshot with every query level open at once. Effectively unbounded on Lua.

### spatialPartitionIsValidEntryId

```wurst
public function spatialPartitionIsValidEntryId(int id) returns boolean
```

Whether an id may be used as an entry. Ids are 1-based, because 0 is reserved as the chain
sentinel, and bounded above on Jass by what the flattened entry slots can address.

### spatialPartitionIsValidGroupId

```wurst
public function spatialPartitionIsValidGroupId(int groupId) returns boolean
```

Whether a group id addresses a real group.

### spatialPartitionAllocateEntryId

```wurst
public function spatialPartitionAllocateEntryId() returns int
```

Reserves an entry id no other consumer will be handed. Release it with
`spatialPartitionReleaseEntryId` after removing the entry, or ids are never reused. Answers 0 when
the target's id space is exhausted, which a caller must treat as "cannot index this".

### spatialPartitionEntryIdIsReserved

```wurst
public function spatialPartitionEntryIdIsReserved(int id) returns boolean
```

Whether an id is currently handed out to some consumer.

### spatialPartitionReleaseEntryId

```wurst
public function spatialPartitionReleaseEntryId(int id)
```

Returns an id to the pool. The entry must already be removed: recycling one that is still linked
would hand a live row to the next caller.

### spatialPartitionAllocatedEntryIds

```wurst
public function spatialPartitionAllocatedEntryIds() returns int
```

Highest id in use across every consumer, which is what the arrays keyed by an id are sized to.
Not the fresh-allocation cursor: a high row taken directly and later recycled is handed out again
from the free list without the cursor ever reaching it, so the cursor can read far below the rows
that are actually live.

### spatialPartitionAllocateGroup

```wurst
public function spatialPartitionAllocateGroup() returns int
```

Reserves a group no other consumer will be given, or -1 when none are left. Hold on to it: groups
are long-lived, there is no release, and asking twice consumes two.

### spatialPartitionGroupIsReserved

```wurst
public function spatialPartitionGroupIsReserved(int groupId) returns boolean
```

Whether a group has been claimed, by the allocator or by being used directly.

### spatialPartitionIsReady

```wurst
public function spatialPartitionIsReady() returns boolean
```

Whether the grid has been given an extent yet. Nothing can be linked before it has.

### spatialPartitionIsValidExtent

```wurst
public function spatialPartitionIsValidExtent(vec2 worldMin, vec2 worldMax) returns boolean
```

Whether an extent describes a real area. An inverted axis yields a zero or negative dimension, and
the coarse block index divides by the grid width, so this has to be caught before any state moves.

### spatialPartitionSetPos

```wurst
public function spatialPartitionSetPos(int id, real x, real y)
```

Records where an entry is, re-bucketing it in every group it belongs to. Call this before adding
the entry to any group, and again whenever it has moved.

### spatialPartitionSetGroup

```wurst
public function spatialPartitionSetGroup(int id, int groupId, boolean member)
```

Adds or removes an entry from one group. The caller owns the policy of when membership changes,
which keeps predicate evaluation out of the walk entirely.

### spatialPartitionEntryX

```wurst
public function spatialPartitionEntryX(int id) returns real
```

Cached x of an entry, so a consumer can re-decide an uncertain result under its own staleness
	model before paying for a live position. Zero for an id the partition does not hold.

### spatialPartitionEntryY

```wurst
public function spatialPartitionEntryY(int id) returns real
```

Cached y of an entry. See `spatialPartitionEntryX`.

### spatialPartitionInGroup

```wurst
public function spatialPartitionInGroup(int id, int groupId) returns boolean
```

Whether an entry is currently in a group.

### spatialPartitionRemove

```wurst
public function spatialPartitionRemove(int id)
```

Drops an entry from every group. Call before recycling its id, or a later entry inherits it.

### spatialPartitionEntryCount

```wurst
public function spatialPartitionEntryCount() returns int
```

Live entries the partition holds.

### spatialPartitionClear

```wurst
public function spatialPartitionClear()
```

Drops every entry and every group link, across every consumer - the partition has one population,
not one per group. A layer that wants to drop only its own entries removes them by id; there is no
way to ask for that here, because groups say what a query sees, not who owns a row. Ids are not
returned to the allocator either, so a consumer that clears must release the ones it held.

### rebuildSpatialPartition

```wurst
public function rebuildSpatialPartition(vec2 worldMin, vec2 worldMax)
```

Re-derives the extent and re-links every entry into the new grid, keeping the groups they were in.

Every cell index means something different afterwards, so this cannot just clear the heads: an
entry still carrying its old link would be invisible to the new grid and would corrupt the chain it
is eventually unlinked from.

### spatialPartitionBeginRangeQuery

```wurst
public function spatialPartitionBeginRangeQuery(vec2 center, real radius, real maxDisplacement, int groupId) returns int
```

Collects the members of `groupId` within `radius` of the point, allowing for entries whose cached
position may be up to `maxDisplacement` out of date.

Certainly-in and certainly-out are settled from the cached position alone. Entries in the
`maxDisplacement`-wide band around the boundary cannot be decided from stale data, so they come
back flagged: check `spatialPartitionQueryUncertain(i)` and resolve those against a live position.
Pass a zero displacement and no result is ever flagged.

Must be paired with `spatialPartitionEndQuery()`.

### spatialPartitionBeginBoxQuery

```wurst
public function spatialPartitionBeginBoxQuery(vec2 boxMin, vec2 boxMax, real maxDisplacement, int groupId) returns int
```

Collects the members of `groupId` inside the axis-aligned box, allowing for entries whose cached
position may be up to `maxDisplacement` out of date.

Same three-way split as the range query, applied per axis: a cached position more than
`maxDisplacement` outside the box cannot be inside it, one that far within cannot be outside, and
the band between is flagged for the caller to resolve. Pass a zero displacement and nothing is
flagged.

Must be paired with `spatialPartitionEndQuery()`.

### spatialPartitionQueryId

```wurst
public function spatialPartitionQueryId(int i) returns int
```

Entry id `i` of the innermost active query, or 0 if there is no such result.

### spatialPartitionQueryUncertain

```wurst
public function spatialPartitionQueryUncertain(int i) returns boolean
```

Whether entry `i` could not be decided from its cached position and needs a live check against the
requested radius. Always false when the query passed a zero displacement.

### spatialPartitionEndQuery

```wurst
public function spatialPartitionEndQuery()
```

## Constants

### SPATIAL_PARTITION_CELL_SIZE

```wurst
public constant SPATIAL_PARTITION_CELL_SIZE = 256.
```

> 🔧 **Configurable.** Override it in your map's config package.

Fine cell edge in world units. Smaller tightens windows but walks more cells.

### SPATIAL_PARTITION_COARSE_FACTOR

```wurst
public constant SPATIAL_PARTITION_COARSE_FACTOR = 8
```

> 🔧 **Configurable.** Override it in your map's config package.

Fine cells per coarse block edge, so 8 means a block covers 8x8 cells. The coarse level exists so
a large query skips empty regions with one test per block instead of one per cell.

### SPATIAL_PARTITION_MAX_GROUPS

```wurst
public constant SPATIAL_PARTITION_MAX_GROUPS = 8
```

> 🔧 **Configurable.** Override it in your map's config package.

Concurrently declared groups. Each costs one chain pointer per entry and one head per cell, so
raise it only as far as a project uses.

### SPATIAL_PARTITION_MAX_QUERY_DEPTH

```wurst
public constant SPATIAL_PARTITION_MAX_QUERY_DEPTH = 8
```

> 🔧 **Configurable.** Override it in your map's config package.

Deepest nesting of simultaneously open queries. Every open level keeps its own results in the shared
snapshot, so this multiplies snapshot storage and is part of the capacity budget below.
