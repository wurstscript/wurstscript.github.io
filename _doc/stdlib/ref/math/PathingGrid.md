---
title: PathingGrid
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/PathingGrid.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/PathingGrid.wurst)**

## Tuples

### pathingCell

```wurst
public tuple pathingCell(int x, int y)
```

Global pathing-grid coordinates. Cell bounds are inclusive at min and exclusive at max.

## Extension Functions

### vec2.toPathingCell

```wurst
public function vec2.toPathingCell() returns pathingCell
```

### vec3.toPathingCell

```wurst
public function vec3.toPathingCell() returns pathingCell
```

### pathingCell.min

```wurst
public function pathingCell.min() returns vec2
```

### pathingCell.max

```wurst
public function pathingCell.max() returns vec2
```

### pathingCell.center

```wurst
public function pathingCell.center() returns vec2
```

## Constants

### PATHING_CELL_SIZE

```wurst
public constant real PATHING_CELL_SIZE = 32.
```

Warcraft III pathing cells are 32 world units wide and high.
