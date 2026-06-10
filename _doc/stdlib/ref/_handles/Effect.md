---
title: Effect
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Effect.wurst'
generated: true
---

Change the orientation of the special effect.
yaw  : z-axis
pitch: y-axis
roll : x-axis

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Effect.wurst)**

## Functions

### flashEffect

```wurst
public function flashEffect(string path, vec3 pos)
```

### flashEffect

```wurst
public function flashEffect(string path, vec2 pos)
```

### flashEffect

```wurst
public function flashEffect(string path, vec2 pos, real scale)
```

### flashEffect

```wurst
public function flashEffect(string path, vec3 pos, real scale)
```

### flashEffect

```wurst
public function flashEffect(string path, vec2 pos, real scale, angle yaw)
```

### flashEffect

```wurst
public function flashEffect(string path, vec3 pos, real scale, angle yaw)
```

### flashEffect

```wurst
public function flashEffect(string path, widget target, string attachPointName)
```

### flashEffect

```wurst
public function flashEffect(int abilityId, effecttype effType, vec3 pos)
```

Creates and immediatly destroys an effect from the data defined in the ability's field "Art - Caster/Target/Missile/Ligtning/etc." (full list in common.j).
	Works for custom abilities.

### flashEffect

```wurst
public function flashEffect(int abilityId, effecttype effType, vec2 pos)
```

Creates and immediatly destroys an effect from the data defined in the ability's field "Art - Caster/Target/Missile/Ligtning/etc." (full list in common.j)
	Works for custom abilities.

### flashEffect

```wurst
public function flashEffect(int abilityId, effecttype effType, widget target, string attachPointName)
```

Creates and immediatly destroys an effect from the data defined in the ability's field "Art - Caster/Target/Missile/Ligtning/etc." (full list in common.j).
	Works for custom abilities.

### addEffect

```wurst
public function addEffect(string path, vec2 pos) returns effect
```

### addEffect

```wurst
public function addEffect(string path, vec3 pos) returns effect
```

### addEffect

```wurst
public function addEffect(string path, widget target, string attachPointName) returns effect
```

### addEffect

```wurst
public function addEffect(int abilityId, effecttype effType, vec2 pos) returns effect
```

Creates an effect from the data defined in the ability's field "Art - Caster/Target/Missile/Ligtning/etc." (full list in common.j).
	Works for custom abilities.

### addEffect

```wurst
public function addEffect(int abilityId, effecttype effType, vec3 pos) returns effect
```

Creates an effect from the data defined in the ability's field "Art - Caster/Target/Missile/Ligtning/etc." (full list in common.j).
	Works for custom abilities.

### addEffect

```wurst
public function addEffect(int abilityId, effecttype effType, widget target, string attachPointName) returns effect
```

Creates an effect from the data defined in the ability's field "Art - Caster/Target/Missile/Ligtning/etc." (full list in common.j).
	Works for custom abilities.

### getAbilityEffect

```wurst
public function getAbilityEffect(int abilityId, effecttype effType, int index) returns string
```

Returns the data defined in the ability's field  "Art - Caster/Target/Missile/Ligtning/etc." (full list in common.j).
	Works for custom abilities.

## Extension Functions

### effect.destr

```wurst
public function effect.destr()
```

### effect.setColorByPlayer

```wurst
public function effect.setColorByPlayer(player whichPlayer)
```

### effect.setColor

```wurst
public function effect.setColor(int r, int g, int b)
```

### effect.setAlpha

```wurst
public function effect.setAlpha(int alpha)
```

### effect.setScale

```wurst
public function effect.setScale(real scale)
```

### effect.setPosition

```wurst
public function effect.setPosition(real x, real y, real z)
```

### effect.setHeight

```wurst
public function effect.setHeight(real height)
```

### effect.setTimeScale

```wurst
public function effect.setTimeScale(real timeScale)
```

### effect.setTime

```wurst
public function effect.setTime(real time)
```

### effect.setOrientation

```wurst
public function effect.setOrientation(real yaw, real pitch, real roll)
```

### effect.setOrientation

```wurst
public function effect.setOrientation(mat3 matrix)
```

### effect.setOrientation

```wurst
public function effect.setOrientation(quat quaternion)
```

### effect.setYaw

```wurst
public function effect.setYaw(real yaw)
```

### effect.setPitch

```wurst
public function effect.setPitch(real pitch)
```

### effect.setRoll

```wurst
public function effect.setRoll(real roll)
```

### effect.setX

```wurst
public function effect.setX(real x)
```

### effect.setY

```wurst
public function effect.setY(real y)
```

### effect.setZ

```wurst
public function effect.setZ(real z)
```

### effect.setPositionLoc

```wurst
public function effect.setPositionLoc(location loc)
```

### effect.getLocalX

```wurst
public function effect.getLocalX() returns real
```

### effect.getLocalY

```wurst
public function effect.getLocalY() returns real
```

### effect.getLocalZ

```wurst
public function effect.getLocalZ() returns real
```

### effect.setPos

```wurst
public function effect.setPos(vec3 pos)
```

### effect.setPos

```wurst
public function effect.setPos(vec2 pos)
```

### effect.getPos3

```wurst
public function effect.getPos3() returns vec3
```

### effect.getPos

```wurst
public function effect.getPos() returns vec2
```

### effect.setColor

```wurst
public function effect.setColor(color color)
```

### effect.setColor

```wurst
public function effect.setColor(colorA color)
```

### effect.setOrientation

```wurst
public function effect.setOrientation(angle yaw, angle pitch, angle roll)
```

### effect.setYaw

```wurst
public function effect.setYaw(angle yaw)
```

Change the angle of the special effect around the z-axis.
	This is like changing a unit's facing.

### effect.setPitch

```wurst
public function effect.setPitch(angle pitch)
```

Change the  of the special effect around the y-axis.
Warning: As of 1.29.2, setPitch has issues for values between 1.57-4.7 radians or 90-270 degrees. It is recommended to use setOrientation.

### effect.setRoll

```wurst
public function effect.setRoll(angle roll)
```

Change the angle of the special effect around x-axis.

### effect.playAnimation

```wurst
public function effect.playAnimation(animtype whichAnim)
```

Plays an animation such as birth/death/stand/etc. defined in constants ANIM_TYPE_BIRTH/ANIM_TYPE_DEATH/ANIM_TYPE_STAND/etc. (full list in common.j).

### effect.playAnimation

```wurst
public function effect.playAnimation(animtype whichAnim, real timeScale)
```

Plays an animation such as birth/death/stand/etc. defined in constants ANIM_TYPE_BIRTH/ANIM_TYPE_DEATH/ANIM_TYPE_STAND/etc. (full list in common.j).

### animtype.getName

```wurst
public function animtype.getName() returns string
```

Returns the name of the animation type.

### effect.addSubAnimation

```wurst
public function effect.addSubAnimation(subanimtype whichSubAnim)
```

### effect.clearSubAnimations

```wurst
public function effect.clearSubAnimations()
```

### effect.removeSubAnimation

```wurst
public function effect.removeSubAnimation(subanimtype whichSubAnim)
```

### effect.getScale

```wurst
public function effect.getScale() returns real
```

Get effect scale.

### effect.setScale

```wurst
public function effect.setScale(vec3 scaleVector)
```

Set effect 3D scale

### effect.resetScale

```wurst
public function effect.resetScale()
```

Reset effect scale.
