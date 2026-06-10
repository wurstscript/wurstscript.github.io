---
title: TerrainUtils
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/TerrainUtils.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/TerrainUtils.wurst)**

## Tuples

### tile

```wurst
public tuple tile(int id)
```

represents a single terrain tile
	can also be used as vec2 <-> int conversion

## Functions

### setWaterBaseColor

```wurst
public function setWaterBaseColor(colorA color)
```

### tile

```wurst
public function tile(int x, int y) returns tile
```

### tile

```wurst
public function tile(real x, real y) returns tile
```

## Extension Functions

### vec2.setTerrainType

```wurst
public function vec2.setTerrainType(int ttype, int variation, int area, int shape)
```

### vec2.getTerrainType

```wurst
public function vec2.getTerrainType() returns int
```

### vec2.getTerrainVariance

```wurst
public function vec2.getTerrainVariance() returns int
```

### vec2.addTerrainHeight

```wurst
public function vec2.addTerrainHeight(real val) returns terraindeformation
```

Applies a single terrain deformation to closest tile. Is not immediate.
	Reports shows that this may cause desync with Mac players.

### vec2.setTerrainPathable

```wurst
public function vec2.setTerrainPathable(pathingtype ttype, bool flag)
```

Fills 32x32 rect around vec2 with given pathing type

### vec2.isTerrainPathable

```wurst
public function vec2.isTerrainPathable(pathingtype ttype) returns bool
```

Returns if a specific pathingtype is set at the location.
	  Note: Returns true if the pathingtype is *not* set, false if it *is* set.

### vec2.toTileCenter

```wurst
public function vec2.toTileCenter() returns vec2
```

Returns center of the Tile which given vec2 belongs to.

### vec2.getTerrainNormal

```wurst
public function vec2.getTerrainNormal(real sampleRadius) returns vec3
```

Returns the (not normalised) terrain-normal at the given point

### vec2.isTerrainDeepWater

```wurst
public function vec2.isTerrainDeepWater() returns boolean
```

### vec2.isTerrainShallowWater

```wurst
public function vec2.isTerrainShallowWater() returns boolean
```

### vec2.isTerrainLand

```wurst
public function vec2.isTerrainLand() returns boolean
```

### vec2.isTerrainPlatform

```wurst
public function vec2.isTerrainPlatform() returns boolean
```

### vec2.isTerrainWalkable

```wurst
public function vec2.isTerrainWalkable() returns boolean
```

### tile.getX

```wurst
public function tile.getX() returns real
```

### tile.getY

```wurst
public function tile.getY() returns real
```

### vec2.getTile

```wurst
public function vec2.getTile() returns tile
```

Returns the tile which given vec2 belongs to.

### tile.toVec2

```wurst
public function tile.toVec2() returns vec2
```

### tile.setType

```wurst
public function tile.setType(int ttype, int variation)
```

### tile.setType

```wurst
public function tile.setType(int ttype)
```

### tile.getHeight

```wurst
public function tile.getHeight() returns real
```

### tile.addHeight

```wurst
public function tile.addHeight(real val) returns terraindeformation
```

### tile.getType

```wurst
public function tile.getType() returns int
```

### tile.getVariance

```wurst
public function tile.getVariance() returns int
```

### tile.setPathing

```wurst
public function tile.setPathing(pathingtype ttype, bool flag)
```

Fills the entire tile (128x128 rect around tile pos) with given type

## Constants

### TILES_X

```wurst
public constant TILES_X = (boundMax.x - boundMin.x).toInt() div 128 + 1
```

### TILES_Y

```wurst
public constant TILES_Y = (boundMax.y - boundMin.y).toInt() div 128 + 1
```

### TILES_COUNT

```wurst
public constant TILES_COUNT = TILES_X * TILES_Y
```
