---
title: LineGeometry
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/LineGeometry.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/LineGeometry.wurst)**

## Tuples

### lineFormular

```wurst
public tuple lineFormular(real m, real b)
```

Line formula tuple representing y = m*x + b where m is slope and b is y-intercept

## Extension Functions

### real.getYOnLine

```wurst
public function real.getYOnLine(lineFormular line) returns real
```

Returns f(x) = m*x + b for a given x value on a line

### real.getXOnLine

```wurst
public function real.getXOnLine(lineFormular line) returns real
```

Returns the x value for a given y on a line: x = (y - b) / m

### vec2.getLineFormular

```wurst
public function vec2.getLineFormular(vec2 p) returns lineFormular
```

Returns the line formula for the line passing through this point and p.
	WARNING: Undefined behavior for vertical lines (p.x == this.x causes division by zero).

### lineFormular.getParallelLineWithOrthogonalDistance

```wurst
public function lineFormular.getParallelLineWithOrthogonalDistance(real d) returns lineFormular
```

Returns a parallel line with orthogonal distance d from the original line

### vec2.getOrthogonalSidePoint

```wurst
public function vec2.getOrthogonalSidePoint(lineFormular line, real d) returns vec2
```

Returns a point on the side of a line at orthogonal distance d
