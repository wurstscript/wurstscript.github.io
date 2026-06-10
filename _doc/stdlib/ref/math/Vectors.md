---
title: Vectors
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Vectors.wurst'
generated: true
curated: /stdlib/vectors
---

A vector is a geometric object that has a length and direction.
	Vectors can be added to other vectors according to vector algebra.
	The most common use in warcraft III is as a point in space. For example a unit's position
	can be represented as a vector as well as a knockback force acting on it.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Vectors.wurst)**

> 📖 Read the **[detailed guide](/stdlib/vectors)** for hand-written examples and background.

**Re-exports:** `Real`, `Angle`

## Tuples

### vec2

```wurst
public tuple vec2(real x, real y)
```

2d Vector tuple

### vec3

```wurst
public tuple vec3(real x, real y, real z)
```

3d Vector tuple

## Extension Functions

### vec2.op_plus

```wurst
public function vec2.op_plus(vec2 v) returns vec2
```

+ Operator vec2

### vec2.op_plus

```wurst
public function vec2.op_plus(vec3 v) returns vec2
```

+ Operator vec3

### vec2.op_minus

```wurst
public function vec2.op_minus(vec2 v) returns vec2
```

- Operator

### vec2.op_mult

```wurst
public function vec2.op_mult(real factor) returns vec2
```

Operator

### real.op_mult

```wurst
public function real.op_mult(vec2 vec) returns vec2
```

Operator

### vec2.op_mult

```wurst
public function vec2.op_mult(vec2 v) returns vec2
```

dot product Operator

### vec2.op_divReal

```wurst
public function vec2.op_divReal(real factor) returns vec2
```

Operator

### vec2.add

```wurst
public function vec2.add(real x, real y) returns vec2
```

Add two reals to the coordiantes of this vector

### vec2.dot

```wurst
public function vec2.dot(vec2 v) returns real
```

Get the dot-product

### vec2.norm

```wurst
public function vec2.norm() returns vec2
```

Normalize this vector

### vec2.rotate

```wurst
public function vec2.rotate(angle angl) returns vec2
```

Rotate this vector

### vec2.toVec3

```wurst
public function vec2.toVec3() returns vec3
```

Convert this vector to a 3d vector with z = 0.

### vec2.getTerrainZ

```wurst
public function vec2.getTerrainZ() returns real
```

### vec3.getTerrainZ

```wurst
public function vec3.getTerrainZ() returns real
```

### vec2.withTerrainZ

```wurst
public function vec2.withTerrainZ() returns vec3
```

### vec2.withTerrainZ

```wurst
public function vec2.withTerrainZ(real zoffset) returns vec3
```

### vec2.setLength

```wurst
public function vec2.setLength(real length) returns vec2
```

Set the length of this vector

### vec2.length

```wurst
public function vec2.length() returns real
```

Get the length of this vector

### vec2.lengthSq

```wurst
public function vec2.lengthSq() returns real
```

Get the squared length of this vector

### vec2.inRange

```wurst
public function vec2.inRange(vec2 v2, real radius) returns boolean
```

Is this vector inside the given circle

### vec2.toString

```wurst
public function vec2.toString() returns string
```

Get a String-representation of this Vector (for debugging)

### vec2.angleTo

```wurst
public function vec2.angleTo(vec2 v) returns angle
```

Get this vetor's angle to another one

### vec2.polarOffset

```wurst
public function vec2.polarOffset(angle ang, real dist) returns vec2
```

Get a polar offset from this vector

### vec2.normalizedPointerTo

```wurst
public function vec2.normalizedPointerTo(vec2 target) returns vec2
```

returns a vector of length 1 which points into the direction of target,
	when this vector and target are equal, then the pointer will point to the right

### vec2.moveTowards

```wurst
public function vec2.moveTowards(vec2 target, real dist) returns vec2
```

move a vector towards a given other vector, if the current vector
	is equal to the target vector, then the vector will move to the right.
	(this emulated the behavior of using polarOffset for this task)

### vec2.withZ

```wurst
public function vec2.withZ(real z) returns vec3
```

Get a 3d Vector with the original xy and the given z coordinate

### vec2.distanceTo

```wurst
public function vec2.distanceTo(vec2 v) returns real
```

Get distance to another vector

### vec2.distanceToSq

```wurst
public function vec2.distanceToSq(vec2 v) returns real
```

Get squared distance to another vector

### vec2.distanceToSegmentSq

```wurst
public function vec2.distanceToSegmentSq(vec2 v1, vec2 v2) returns real
```

Get squared distance to a line segment

### vec2.withRadiusRect

```wurst
public function vec2.withRadiusRect(real nominalRadius) returns rect
```

Create a rect centered at `this` with side length 2 * `nominalRadius`.

### vec2.isInTriangle

```wurst
public function vec2.isInTriangle(vec2 p1, vec2 p2, vec2 p3) returns bool
```

Checks whether the point is in a triangle defined by 3 points.

### vec2.isInPolygon

```wurst
public function vec2.isInPolygon(vararg vec2 args) returns bool
```

Checks whether the point is in a polygon defined by a sequence of connected points.

### vec3.op_plus

```wurst
public function vec3.op_plus(vec3 v) returns vec3
```

+ Operator

### vec3.op_plus

```wurst
public function vec3.op_plus(vec2 v) returns vec3
```

+ Operator

### vec3.op_minus

```wurst
public function vec3.op_minus(vec3 v) returns vec3
```

- Operator

### vec3.op_minus

```wurst
public function vec3.op_minus(vec2 v) returns vec3
```

- Operator

### vec3.op_mult

```wurst
public function vec3.op_mult(real factor) returns vec3
```

Operator

### real.op_mult

```wurst
public function real.op_mult(vec3 v) returns vec3
```

dot Operator

### vec3.add

```wurst
public function vec3.add(real x, real y, real z) returns vec3
```

add 3 realvalues to the coordinates of this Vector

### vec3.dot

```wurst
public function vec3.dot(vec3 v) returns real
```

Get the dot-product

### vec3.norm

```wurst
public function vec3.norm() returns vec3
```

Normalize this Vector

### vec3.rotate

```wurst
public function vec3.rotate(vec3 axis, real radians) returns vec3
```

Rotate this vector around an axis

### vec3.setLengthSq

```wurst
public function vec3.setLengthSq(real lengthSq) returns vec3
```

Sets the length of the given Vector

### vec3.setLength

```wurst
public function vec3.setLength(real length) returns vec3
```

Sets the length of the given Vector

### vec3.length

```wurst
public function vec3.length() returns real
```

Get the length of this Vector

### vec3.lengthSquared

```wurst
public function vec3.lengthSquared() returns real
```

Get the squared length of this Vector

### vec3.cross

```wurst
public function vec3.cross(vec3 v) returns vec3
```

Get the cross-product

### vec3.project

```wurst
public function vec3.project(vec3 direction) returns vec3
```

Project this vector onto the given directional vector

### vec3.toVec2

```wurst
public function vec3.toVec2() returns vec2
```

Convert a vec3 to a vec2 (z-coordinate gets removed)

### vec3.inRange

```wurst
public function vec3.inRange(vec3 v2, real radius) returns boolean
```

Is this vector inside the given circle

### vec3.distanceTo

```wurst
public function vec3.distanceTo(vec3 v) returns real
```

Get the distance to another Vector

### vec3.distanceTo2d

```wurst
public function vec3.distanceTo2d(vec3 v) returns real
```

Get the distance to another Vector

### vec3.distanceTo2d

```wurst
public function vec3.distanceTo2d(vec2 v) returns real
```

Get the distance to another Vector

### vec3.distanceTo2dSq

```wurst
public function vec3.distanceTo2dSq(vec2 v) returns real
```

Get the squared distance to another Vector

### vec3.distanceToSq

```wurst
public function vec3.distanceToSq(vec3 v) returns real
```

Get the squared distance to another Vector

### vec3.toString

```wurst
public function vec3.toString() returns string
```

Get a String-represantation of the vector (for debugging)

### vec3.rotate

```wurst
public function vec3.rotate(vec3 axis, angle ang) returns vec3
```

Rotate this vector around an axis

### vec3.offset2d

```wurst
public function vec3.offset2d(angle ang, real dist) returns vec3
```

Offset this vector in 2d space

### vec3.angleTo2d

```wurst
public function vec3.angleTo2d(vec2 v) returns angle
```

Get the angle to a 2d vector

### vec3.angleTo2d

```wurst
public function vec3.angleTo2d(vec3 v) returns angle
```

### vec3.polarProject

```wurst
public function vec3.polarProject(real distance, angle angleGround, angle angleAir) returns vec3
```

Get a polarprojection of this Vector

### vec3.normalizedPointerTo

```wurst
public function vec3.normalizedPointerTo(vec3 target) returns vec3
```

returns a vector of length 1 which points into the direction of target,
	when this vector and target are equal, then the pointer will point to the right

### vec3.moveTowards

```wurst
public function vec3.moveTowards(vec3 target, real dist) returns vec3
```

move a vector towards a given other vector, if the current vector
	is equal to the target vector, then the vector will move to the right.
	(this emulated the behavior of using polarOffset for this task)

### angle.toVec

```wurst
public function angle.toVec(real len) returns vec2
```

returns a vector of the given length pointing into the direction of this angle

### angle.direction

```wurst
public function angle.direction() returns vec2
```

returns a vector of length 1 pointing into the direction of this angle

### angle.direction

```wurst
public function angle.direction(real dist) returns vec2
```

returns a vector of length 'dist' pointing into the direction of this angle

### vec2.getAngle

```wurst
public function vec2.getAngle() returns angle
```

returns the angle of this vector

### vec2.assertEquals

```wurst
public function vec2.assertEquals(vec2 expected)
```

### vec3.assertEquals

```wurst
public function vec3.assertEquals(vec3 expected)
```

### vec3.isInTriangle2d

```wurst
public function vec3.isInTriangle2d(vec3 p1, vec3 p2, vec3 p3) returns bool
```

Checks whether the point is in a 2D triangle defined by 3 points.
Works as for vec2.isInTriangle, Z-coords are discarded.

### vec3.isInPolygon2d

```wurst
public function vec3.isInPolygon2d(vararg vec3 args) returns bool
```

Checks whether the point is in a 2d polygon defined by a sequence of connected points.
Works as for vec2.isInPolygon, Z-coords are discarded.

## Constants

### ZERO2

```wurst
public constant ZERO2 = vec2(0, 0)
```

### ZERO3

```wurst
public constant ZERO3 = vec3(0, 0, 0)
```

### RIGHT

```wurst
public constant RIGHT = vec2(1, 0)
```

### UP

```wurst
public constant UP = vec2(0, 1)
```

### LEFT

```wurst
public constant LEFT = vec2(-1, 0)
```

### DOWN

```wurst
public constant DOWN = vec2(0, -1)
```
