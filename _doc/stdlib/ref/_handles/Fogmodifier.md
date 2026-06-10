---
title: Fogmodifier
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Fogmodifier.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Fogmodifier.wurst)**

## Functions

### createFogModifier

```wurst
public function createFogModifier(player forWhichPlayer, fogstate whichState, vec2 center, real radius, bool useSharedVision, bool afterUnits) returns fogmodifier
```

### createBlackMask

```wurst
public function createBlackMask(player forWhichPlayer, vec2 center, real radius, bool useSharedVision, bool afterUnits) returns fogmodifier
```

### createFogOfWar

```wurst
public function createFogOfWar(player forWhichPlayer, vec2 center, real radius, bool useSharedVision, bool afterUnits) returns fogmodifier
```

### createVision

```wurst
public function createVision(player forWhichPlayer, vec2 center, real radius, bool useSharedVision) returns fogmodifier
```

### createFogModifier

```wurst
public function createFogModifier(player forWhichPlayer, fogstate whichState, rect where, bool useSharedVision, bool afterUnits) returns fogmodifier
```

### createBlackMask

```wurst
public function createBlackMask(player forWhichPlayer, rect where, bool useSharedVision, bool afterUnits) returns fogmodifier
```

### createFogOfWar

```wurst
public function createFogOfWar(player forWhichPlayer, rect where, bool useSharedVision, bool afterUnits) returns fogmodifier
```

### createVision

```wurst
public function createVision(player forWhichPlayer, rect where, bool useSharedVision) returns fogmodifier
```

## Extension Functions

### fogmodifier.destr

```wurst
public function fogmodifier.destr()
```

### fogmodifier.start

```wurst
public function fogmodifier.start()
```

### fogmodifier.stop

```wurst
public function fogmodifier.stop()
```
