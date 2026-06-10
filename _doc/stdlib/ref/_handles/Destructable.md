---
title: Destructable
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Destructable.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Destructable.wurst)**

## Tuples

### gate

```wurst
public tuple gate(destructable killable)
```

Tuple wrapper for destructable gates API

### elevator

```wurst
public tuple elevator(destructable elevatable)
```

Tuple wrapper for destructable elevator API

## Functions

### createDestructable

```wurst
public function createDestructable(int id, vec3 pos, angle direction, real scale, int variation) returns destructable
```

### createDestructable

```wurst
public function createDestructable(int id, vec2 pos, angle direction, real scale, int variation) returns destructable
```

### isElevatorHeightInBounds

```wurst
public function isElevatorHeightInBounds(int height) returns bool
```

Returns elevator adjusted height based on given bounds

### getElevatorHeightBound

```wurst
public function getElevatorHeightBound(int height) returns int
```

Returns elevator adjusted height based on given bounds

## Extension Functions

### destructable.getPos

```wurst
public function destructable.getPos() returns vec2
```

### destructable.getX

```wurst
public function destructable.getX() returns real
```

### destructable.getY

```wurst
public function destructable.getY() returns real
```

### destructable.kill

```wurst
public function destructable.kill()
```

### destructable.getTypeId

```wurst
public function destructable.getTypeId() returns int
```

### destructable.setAnimation

```wurst
public function destructable.setAnimation(string anim)
```

### destructable.remove

```wurst
public function destructable.remove()
```

### destructable.setInvulnerable

```wurst
public function destructable.setInvulnerable(bool flag)
```

### destructable.getInvulnerable

```wurst
public function destructable.getInvulnerable() returns bool
```

### destructable.setLife

```wurst
public function destructable.setLife(real life)
```

### destructable.getLife

```wurst
public function destructable.getLife() returns real
```

### destructable.setMaxLife

```wurst
public function destructable.setMaxLife(real max)
```

### destructable.getMaxLife

```wurst
public function destructable.getMaxLife() returns real
```

### destructable.restoreLife

```wurst
public function destructable.restoreLife(real life, boolean birth)
```

### destructable.queueAnimation

```wurst
public function destructable.queueAnimation(string anim)
```

### destructable.setAnimationSpeed

```wurst
public function destructable.setAnimationSpeed(real speedFactor)
```

### destructable.show

```wurst
public function destructable.show(bool flag)
```

### destructable.getOccluderHeight

```wurst
public function destructable.getOccluderHeight() returns real
```

### destructable.setOccluderHeight

```wurst
public function destructable.setOccluderHeight(real height)
```

### destructable.getName

```wurst
public function destructable.getName() returns string
```

### gate.open

```wurst
public function gate.open()
```

Opens a destructable gate

### gate.close

```wurst
public function gate.close()
```

Closes a destructable gate

### gate.kill

```wurst
public function gate.kill()
```

Destroys a destructable gate

### gate.setOpen

```wurst
public function gate.setOpen(bool flag)
```

Sets the gate's open/close state

### elevator.up

```wurst
public function elevator.up()
```

Moves a destructable elevator one step up

### elevator.down

```wurst
public function elevator.down()
```

Moves a destructable elevator one step down

### elevator.elevatorSetHeight

```wurst
public function elevator.elevatorSetHeight(int height)
```

Moves a destructable elevator to given height

### elevator.getHeight

```wurst
public function elevator.getHeight() returns int
```

Get a destructable elevator height

### elevator.setHeight

```wurst
public function elevator.setHeight(int height)
```

Set elevator height to given value.
