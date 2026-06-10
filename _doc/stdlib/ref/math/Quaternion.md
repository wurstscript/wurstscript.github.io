---
title: Quaternion
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Quaternion.wurst'
generated: true
---

Linear interpolation.
Always chooses the SHORTEST way between rotations.
q - targeted quaternion. p - progress from 0 to 1.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Quaternion.wurst)**

**Re-exports:** `Matrices`

## Tuples

### quat

```wurst
public tuple quat(real x, real y, real z, real w)
```

## Functions

### eulerToQuat

```wurst
public function eulerToQuat(real yaw, real pitch, real roll) returns quat
```

## Extension Functions

### quat.op_plus

```wurst
public function quat.op_plus(quat q) returns quat
```

### quat.op_plus

```wurst
public function quat.op_plus(real scalar) returns quat
```

### real.op_plus

```wurst
public function real.op_plus(quat q) returns quat
```

### quat.op_minus

```wurst
public function quat.op_minus(quat q) returns quat
```

### quat.op_minus

```wurst
public function quat.op_minus(real scalar) returns quat
```

### quat.op_mult

```wurst
public function quat.op_mult(real scalar) returns quat
```

### real.op_mult

```wurst
public function real.op_mult(quat q) returns quat
```

### quat.dot

```wurst
public function quat.dot(quat q) returns real
```

### quat.cross

```wurst
public function quat.cross(quat q) returns quat
```

Represents the composition of two rotations.

### quat.conj

```wurst
public function quat.conj() returns quat
```

Represents the same rotation in opposite direction.

### quat.length

```wurst
public function quat.length() returns real
```

### quat.norm

```wurst
public function quat.norm() returns quat
```

Returns zero quaternion if lenght is zero.

### quat.exp

```wurst
public function quat.exp(real alpha) returns quat
```

Quaternion to power of alpha.

### quat.toMatrix

```wurst
public function quat.toMatrix() returns mat3
```

### quat.getX

```wurst
public function quat.getX() returns vec3
```

Extracts X-axis from a quaternion that represents rotation.

### quat.getY

```wurst
public function quat.getY() returns vec3
```

Extracts Y-axis as a vector from a quaternion that represents rotation.

### quat.getZ

```wurst
public function quat.getZ() returns vec3
```

Extracts Z-axis as a vector from a quaternion that represents rotation.

### quat.lerp

```wurst
public function quat.lerp(quat q, real p) returns quat
```

Linear interpolation.
q - targeted quaternion. p - progress from 0 to 1.

### quat.lerpShort

```wurst
public function quat.lerpShort(quat q, real p) returns quat
```

### quat.lerpLong

```wurst
public function quat.lerpLong(quat q, real p) returns quat
```

Linear interpolation.
Always chooses the LONGEST way between rotations.
q - targeted quaternion. p - progress from 0 to 1.

### quat.nlerp

```wurst
public function quat.nlerp(quat q, real p) returns quat
```

Normalized linear interpolation.
q - targeted quaternion. p - progress from 0 to 1.

### quat.nlerpShort

```wurst
public function quat.nlerpShort(quat q, real p) returns quat
```

Normalized linear interpolation.
Always chooses the SHORTEST way between rotations.
q - targeted quaternion. p - progress from 0 to 1.

### quat.nlerpLong

```wurst
public function quat.nlerpLong(quat q, real p) returns quat
```

Normalized linear interpolation.
Always chooses the LONGEST way between rotations.
q - targeted quaternion. p - progress from 0 to 1.

### quat.slerp

```wurst
public function quat.slerp(quat q, real p) returns quat
```

Spherical linear interpolation. Interpolates between two rotations.
q - targeted quaternion. p - progress from 0 to 1.
Slerp is the least efficient approach in performance so try to avoid using it, unless you need constant angular velocity. Nlerp is better solution in most cases.

### quat.slerpShort

```wurst
public function quat.slerpShort(quat q, real p) returns quat
```

Spherical linear interpolation. Interpolates between two rotations.
Always chooses the SHORTEST way between rotations.
q - targeted quaternion. p - progress from 0 to 1.
Slerp is the least efficient approach in performance so try to avoid using it, unless you need constant angular velocity. Nlerp is better solution in most cases.

### quat.slerpLong

```wurst
public function quat.slerpLong(quat q, real p) returns quat
```

Spherical linear interpolation. Interpolates between two rotations.
Always chooses the LONGEST way between rotations.
q - targeted quaternion. p - progress from 0 to 1.
Slerp is the least efficient approach in performance so try to avoid using it, unless you need constant angular velocity. Nlerp is better solution in most cases.

### quat.toString

```wurst
public function quat.toString() returns string
```

### quat.getGimbalPole

```wurst
public function quat.getGimbalPole() returns int
```

Gimbal lock detection.
Returns 1 for north, -1 for south, 0 if no gimbal lock.

### quat.toEuler

```wurst
public function quat.toEuler() returns vec3
```

Extracts Euler-angles (Tait-Bryan) in radians from a quaternion. Order of the result is Z-Y-X (Yaw-Pitch-Roll).

### vec3.toQuat

```wurst
public function vec3.toQuat(angle angl) returns quat
```

Creates a quaternion from rotation axis and angle.

### angle.toQuat

```wurst
public function angle.toQuat(vec3 axis) returns quat
```

Creates a quaternion from rotation axis and angle.

### vec3.rotate

```wurst
public function vec3.rotate(quat q) returns vec3
```

Rotates a vector by a quaternion.

### mat3.toQuat

```wurst
public function mat3.toQuat() returns quat
```

Extracts quaternion from a rotation matrix.

### quat.assertEquals

```wurst
public function quat.assertEquals(quat expected)
```

## Constants

### IDENTITYQ

```wurst
public constant IDENTITYQ = quat(0, 0, 0, 1)
```

### ZEROQ

```wurst
public constant ZEROQ = quat(0, 0, 0, 0)
```
