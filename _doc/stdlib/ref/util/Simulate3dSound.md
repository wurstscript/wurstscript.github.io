---
title: Simulate3dSound
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Simulate3dSound.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Simulate3dSound.wurst)**

## Classes

### Sim3DSound

```wurst
public class Sim3DSound
```

**Members:**

- `setSoundPosition(vec2 pos)`
- `setSoundPosition(unit u)`
- `construct(sound s, real x, real y, real minDist, real maxDist, real distCutoff)`
- `construct(sound s, unit u, real minDist, real maxDist, real distCutoff)`

## Functions

### bindSoundToUnit

```wurst
public function bindSoundToUnit(sound s, unit u, real minD, real maxD, real distCut) returns Sim3DSound
```

### bindSoundToPoint

```wurst
public function bindSoundToPoint(sound s, real x, real y, real minD, real maxD, real distCut) returns Sim3DSound
```

### bindSoundToUnitForPlayer

```wurst
public function bindSoundToUnitForPlayer(player p, sound s, unit u, real minD, real maxD, real distCut) returns Sim3DSound
```

### bindSoundToPointForPlayer

```wurst
public function bindSoundToPointForPlayer(player p, sound s, real x, real y, real minD, real maxD, real distCut) returns Sim3DSound
```
