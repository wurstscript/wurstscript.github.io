---
title: Fx
layout: stdlibref
category: dummy
categoryLabel: Dummies
tags:
  - dummy
  - effect
  - wc3-quirk
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/Fx.wurst'
generated: true
---

*****************************************************
* * * * * * * * * Fx * * * * * * * * * * * * * * * * *
An Fx-Object is basically just a moveable effect.  	*
Up above you find the Fx-Class. By creating			*
an instace of it, you recieve the mentioned,			*
moveable effect.										*
Constructors and functions defined as following,		*
should be self-explanatory.							*
Also features automatic recycling of Fx-instances	*
													*
Credits to Vexorian, Anitarf							*
******************************************************

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/Fx.wurst)**

## Classes

### Fx

```wurst
public class Fx
```

**Members:**

- `construct(real x, real y, angle facing)`
- `construct(vec2 pos, angle facing)`
- `construct(vec2 pos, string fxpath)`
- `construct(vec2 pos, angle facing, string fxpath)`
- `construct(vec3 pos, angle facing)`
- `construct(vec3 pos, string fxpath)`
- `construct(vec3 pos, angle facing, string fxpath)`
- `construct(playercolor pc, vec3 pos, angle facing, string fxpath)`
- `getOwner() returns player`
  Get the owner of this Fx Object
- `setPlayerColor(playercolor pc)`
- `setOwner(player p, boolean changeColor)`
  Set the owner of this Fx Object
- `setPlayercolor(playercolor c)`
  Set the playercolor of this Fx Object
- `setScale(real value)`
  Set the scale of this Fx Object
- `getColor() returns colorA`
  Get the color (rgba)
- `getDummy() returns unit`
  Get the dummyunit
- `setColor(colorA newColor)`
  Sets the color of the Fx object to the given color
  	Color: 0 = no color - 255 = full color
  	Alpha: 0 = transparent - 255 = visible
- `flash(string fx)`
  "flashes" the given effect.
  		Flashing plays the death animation of the effect at the fx's position.
- `getXYAngle() returns angle`
  Get the xy angle
- `setXYAngle(angle value)`
  Set the xy angle
- `setXYAngleInstant(angle value)`
  Creates a new dummy with the given facing in order to achieve instant turning.
- `getZAngle() returns angle`
  Get the z angle
- `setZAngle(angle zangle)`
  Set the z angle in radians
- `getZ() returns real`
  Get the z coordinate (fly height)
- `getPos2() returns vec2`
  Get the 2d position
- `getPos3() returns vec3`
  Get the 3d position
- `setXY(vec2 pos)`
  Set the position to the given xy vector tuple
- `setXYZ(vec3 pos)`
  Set the position to the given xyz vector tuple
