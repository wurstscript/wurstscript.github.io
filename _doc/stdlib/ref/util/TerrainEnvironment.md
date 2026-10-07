---
title: TerrainEnvironment
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/TerrainEnvironment.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/TerrainEnvironment.wurst)**

## Tuples

### terrainFogSettings

```wurst
public tuple terrainFogSettings(int style, real zStart, real zEnd, real density, real heightStart, real heightEnd, real linearStart, real linearEnd, color tint)
```

Complete terrain-fog configuration used by the v3 renderer.

### hdWaterSettings

```wurst
public tuple hdWaterSettings(color tint, boolean overrideColor, int vertexDisplacement, int minOpacity, int maxOpacity, int reflectivity, int emissivity, int edgeSoftness, int waveStrength, int environmentMapStrength)
```

HD-water renderer parameters. Integer fields use the native engine ranges.

## Functions

### setTerrainFog

```wurst
public function setTerrainFog(terrainFogSettings settings)
```

### setTerrainFogStyle

```wurst
public function setTerrainFogStyle(fogstyle style)
```

### setTerrainFogZRange

```wurst
public function setTerrainFogZRange(real start, real stop)
```

### setTerrainFogHeightRange

```wurst
public function setTerrainFogHeightRange(real start, real stop)
```

### setTerrainFogLinearRange

```wurst
public function setTerrainFogLinearRange(real start, real stop)
```

### setTerrainFogDensity

```wurst
public function setTerrainFogDensity(real density)
```

### setTerrainFogMaxLinearDensity

```wurst
public function setTerrainFogMaxLinearDensity(real density)
```

### setTerrainFogColor

```wurst
public function setTerrainFogColor(color tint)
```

### setTerrainFogDrawOverSky

```wurst
public function setTerrainFogDrawOverSky(boolean drawOverSky)
```

### setHDWater

```wurst
public function setHDWater(hdWaterSettings settings)
```

### setHDWater

```wurst
public function setHDWater(color tint, boolean useColor, int vertexDisplacement, int minOpacity, int maxOpacity, int reflectivity, int emissivity, int edgeSoftness, int waveStrength)
```

### setHDWaterColor

```wurst
public function setHDWaterColor(color tint)
```

### setHDWaterColorOverride

```wurst
public function setHDWaterColorOverride(boolean enabled)
```

### setHDWaterVertexDisplacement

```wurst
public function setHDWaterVertexDisplacement(int value)
```

### setHDWaterOpacity

```wurst
public function setHDWaterOpacity(int min, int max)
```

### setHDWaterReflectivity

```wurst
public function setHDWaterReflectivity(int value)
```

### setHDWaterEmissivity

```wurst
public function setHDWaterEmissivity(int value)
```

### setHDWaterEdgeSoftness

```wurst
public function setHDWaterEdgeSoftness(int value)
```

### setHDWaterWaveStrength

```wurst
public function setHDWaterWaveStrength(int value)
```

### setHDWaterEnvironmentMapStrength

```wurst
public function setHDWaterEnvironmentMapStrength(int value)
```

### setMinShadowCastingPointLightCount

```wurst
public function setMinShadowCastingPointLightCount(int count)
```

### getMinShadowCastingPointLightCount

```wurst
public function getMinShadowCastingPointLightCount() returns int
```

## Extension Functions

### vec2.isTerrainPathable

```wurst
public function vec2.isTerrainPathable(pathingtype whichType) returns boolean
```

### vec2.setDoodadColor

```wurst
public function vec2.setDoodadColor(real radius, int doodadId, boolean nearestOnly, playercolor whichColor)
```

### rect.setDoodadColor

```wurst
public function rect.setDoodadColor(int doodadId, playercolor whichColor)
```
