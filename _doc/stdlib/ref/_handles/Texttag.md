---
title: Texttag
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Texttag.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Texttag.wurst)**

**Re-exports:** `Vectors`, `Colors`

## Functions

### createTTEx

```wurst
public function createTTEx(vec3 pos, string message, real size) returns texttag
```

### createTTEx

```wurst
public function createTTEx(vec3 pos, string message, real size, colorA col) returns texttag
```

### createTTEx

```wurst
public function createTTEx(vec3 pos, string message, real size, colorA col, player p) returns texttag
```

### createTTEx

```wurst
public function createTTEx(vec3 pos, vec2 vel, string message, real size, real duration, colorA col) returns texttag
```

### createTTEx

```wurst
public function createTTEx(vec3 pos, vec2 vel, string message, real size, real duration, colorA col, player p) returns texttag
```

## Extension Functions

### texttag.setPos

```wurst
public function texttag.setPos(real x, real y, real z)
```

### texttag.setPos

```wurst
public function texttag.setPos(vec3 pos)
```

### texttag.setColor

```wurst
public function texttag.setColor(int r, int g, int b, int a)
```

### texttag.setSuspended

```wurst
public function texttag.setSuspended(boolean flag)
```

### texttag.setColor

```wurst
public function texttag.setColor(colorA col)
```

### texttag.setText

```wurst
public function texttag.setText(string text, real size)
```

### texttag.setLifespan

```wurst
public function texttag.setLifespan(real span)
```

### texttag.setPermanent

```wurst
public function texttag.setPermanent(boolean flag)
```

### texttag.setFadepoint

```wurst
public function texttag.setFadepoint(real fadepoint)
```

### texttag.setAge

```wurst
public function texttag.setAge(real age)
```

### texttag.setVelocity

```wurst
public function texttag.setVelocity(real xvel, real yvel)
```

### texttag.setVelocity

```wurst
public function texttag.setVelocity(vec2 vel)
```

### texttag.setVisibility

```wurst
public function texttag.setVisibility(boolean flag)
```

### texttag.matchVisibility

```wurst
public function texttag.matchVisibility(unit target)
```

Change the visibility based on whether the local player can see the given unit.
   This won't update if the unit moves or the local player gains vision of it.

### texttag.matchVisibility

```wurst
public function texttag.matchVisibility(vec2 pos)
```

Change the visibility based on whether the local player can see the given position.
   This won't update if local player gains vision of it.

### texttag.match

```wurst
public function texttag.match(unit target)
```

Match the visibility and position of the texttag to the given unit.
   This won't update if the unit moves or the local player gains vision of it.

### texttag.match

```wurst
public function texttag.match(unit target, vec2 offset)
```

Match the visibility and position with an offest of the texttag to the given unit.
   This won't update if the unit moves or the local player gains vision of it.

### texttag.destr

```wurst
public function texttag.destr()
```
