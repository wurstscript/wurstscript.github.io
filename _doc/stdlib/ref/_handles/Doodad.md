---
title: Doodad
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Doodad.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Doodad.wurst)**

## Tuples

### doodad

```wurst
public tuple doodad(int index)
```

A placed map doodad addressed by its zero-based map index.

## Functions

### getDoodadCount

```wurst
public function getDoodadCount() returns int
```

### getDoodad

```wurst
public function getDoodad(int index) returns doodad
```

## Extension Functions

### doodad.getTypeId

```wurst
public function doodad.getTypeId() returns int
```

### doodad.getVariation

```wurst
public function doodad.getVariation() returns int
```

### doodad.getPos

```wurst
public function doodad.getPos() returns vec3
```

### doodad.getScale

```wurst
public function doodad.getScale() returns vec3
```

### doodad.getYaw

```wurst
public function doodad.getYaw() returns angle
```

### doodad.getPitch

```wurst
public function doodad.getPitch() returns angle
```

### doodad.getRoll

```wurst
public function doodad.getRoll() returns angle
```

### doodad.isUsingModelAxes

```wurst
public function doodad.isUsingModelAxes() returns boolean
```

### doodad.setAnimation

```wurst
public function doodad.setAnimation(string animation, boolean randomize)
```

### doodad.setColor

```wurst
public function doodad.setColor(playercolor whichColor)
```
