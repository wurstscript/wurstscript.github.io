---
title: Polygon
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Polygon.wurst'
generated: true
toc: sections
---

An immutable closed 2D path after seal(). Polygon owns its copied vertex
storage and cached bounds rect. Call destroy when finished: it releases both,
and invalidates every rect previously borrowed from bounds().

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Polygon.wurst)**

## Classes

### Polygon

```wurst
public class Polygon
```

**Members:**

- `construct(int expectedVertexCount)`
  Builder form. expectedVertexCount is a capacity hint. Call seal() before querying.
- `construct(vararg vec2 initialVertices)`
  Convenience form. Copies the supplied vertices and seals immediately.
- `addVertex(vec2 vertex) returns thistype`
  Appends a copied vertex before seal(). Adding after seal() is a programmer error.
- `seal() returns thistype`
  Finalizes immutable query state and creates Polygon's owned bounds rect.
  Repeated calls preserve the same rect handle. Polygon removes that rect
  when it is destroyed; callers must not remove its borrowed bounds().
- `isSealed() returns bool`
- `vertexCount() returns int`
- `vertexAt(int index) returns vec2`
- `bounds() returns rect`
  Returns Polygon's borrowed cached rect. Polygon retains ownership: callers
  must not remove or destroy it, and must not use it after Polygon is
  destroyed.
- `boundsCenter() returns vec2`
- `classifyLinear(vec2 point) returns PolygonPointRelation`
  Exact division-free O(n) reference implementation and grid fallback.
- `cellCoverage(vec2 point) returns PolygonCellCoverage`
- `cellCoverage(vec3 point) returns PolygonCellCoverage`
- `cellCandidateEdgeCount(vec2 point) returns int`
  Number of exact edge candidates classify() examines for this point.
- `classify(vec2 point) returns PolygonPointRelation`
- `contains(vec2 point) returns bool`
- `containsStrict(vec2 point) returns bool`
- `debugRender() returns ArrayList<lightning>`
  Draws every edge in standard green. Ownership transfers to the caller:
  destroy every returned lightning handle, then destroy the returned list.
- `debugRender(color col) returns ArrayList<lightning>`
  Draws every edge in the requested color. Ownership transfers to the caller:
  destroy every returned lightning handle, then destroy the returned list.
- `debugRenderTimed(real duration)`
  Draws in standard green. Polygon retains ownership of all created lightning
  handles and its internal list, and destroys both after duration. duration
  must be positive.
- `debugRenderTimed(real duration, color col)`
  Draws in the requested color. Polygon retains ownership of all created
  lightning handles and its internal list, and destroys both after duration.
  duration must be positive.

## Enums

### PolygonPointRelation

```wurst
public enum PolygonPointRelation
```

**Values:** `OUTSIDE`, `BOUNDARY`, `INSIDE`

### PolygonCellCoverage

```wurst
public enum PolygonCellCoverage
```

Coverage of one cached pathing-grid cell, not the relation of one point.

**Values:** `OUTSIDE`, `MIXED`, `INSIDE`
