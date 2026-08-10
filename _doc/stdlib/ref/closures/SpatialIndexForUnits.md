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

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/SpatialIndexForUnits.wurst)**

## Functions

### unitsInRange

```wurst
public function unitsInRange(vec2 center, real radius) returns SparseSet<unit>
```

Returns units whose origins are within radius of center.

### unitsInRange

```wurst
public function unitsInRange(vec2 center, real radius, boolean collisionFiltering) returns SparseSet<unit>
```

Returns units in range, optionally applying collision-size filtering.

### unitsInBox

```wurst
public function unitsInBox(vec2 boxMin, vec2 boxMax) returns SparseSet<unit>
```

Returns units whose origins are inside the axis-aligned box.

### unitsOfPlayer

```wurst
public function unitsOfPlayer(player owner) returns SparseSet<unit>
```

Returns currently indexed units owned by owner.
