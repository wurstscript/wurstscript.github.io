---
title: DestructableSpatialIndex
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/DestructableSpatialIndex.wurst'
generated: true
toc: sections
---

Static Lua spatial index for destructables.

Destructables do not have an observable movement event, so this index only needs registration
and removal hooks. Preplaced destructables are discovered once during initialization. Runtime
destructables created through CreateDestructable must call registerSpatialIndex() before they
can be queried.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/DestructableSpatialIndex.wurst)**

## Functions

### rebuildDestructableSpatialIndexGrid

```wurst
public function rebuildDestructableSpatialIndexGrid(vec2 worldMin, vec2 worldMax)
```

Rebuilds the grid around the current membership. Useful after changing the configured map bounds.

### destructableSpatialIndexBeginBoxQuery

```wurst
public function destructableSpatialIndexBeginBoxQuery(vec2 boxMin, vec2 boxMax) returns int
```

Collects indexed destructables whose cached position is inside the axis-aligned box.

### destructableSpatialIndexBeginRangeQuery

```wurst
public function destructableSpatialIndexBeginRangeQuery(vec2 center, real range) returns int
```

Collects indexed destructables in the square used by forDestructablesInRange.

### destructableSpatialIndexQuery

```wurst
public function destructableSpatialIndexQuery(int i) returns destructable
```

### destructableSpatialIndexEndQuery

```wurst
public function destructableSpatialIndexEndQuery()
```

### destructableSpatialIndexHealthy

```wurst
public function destructableSpatialIndexHealthy() returns boolean
```

### destructableSpatialIndexTracked

```wurst
public function destructableSpatialIndexTracked() returns int
```

### destructableSpatialIndexCellOf

```wurst
public function destructableSpatialIndexCellOf(vec2 pos) returns int
```

### destructableSpatialIndexGridWidth

```wurst
public function destructableSpatialIndexGridWidth() returns int
```

### destructableSpatialIndexGridHeight

```wurst
public function destructableSpatialIndexGridHeight() returns int
```

## Extension Functions

### destructable.registerSpatialIndex

```wurst
public function destructable.registerSpatialIndex()
```

Registers one destructable in the index.

### destructable.unregisterSpatialIndex

```wurst
public function destructable.unregisterSpatialIndex()
```

Removes one destructable from the index before RemoveDestructable is called.

## Constants

### USE_DESTRUCTABLE_SPATIAL_INDEX

```wurst
public constant USE_DESTRUCTABLE_SPATIAL_INDEX = true
```

> 🔧 **Configurable.** Override it in your map's config package.

### DESTRUCTABLE_SPATIAL_INDEX_CELL_SIZE

```wurst
public constant DESTRUCTABLE_SPATIAL_INDEX_CELL_SIZE = 256.
```

> 🔧 **Configurable.** Override it in your map's config package.
