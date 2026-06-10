---
title: Matrices
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Matrices.wurst'
generated: true
---

Matrix 2x2
00 01
10 11
Each column represents an axis in a rotation matrix.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Matrices.wurst)**

**Re-exports:** `Vectors`

## Tuples

### mat2

```wurst
public tuple mat2(real m00, real m01, real m10, real m11)
```

### mat3

```wurst
public tuple mat3( real m00, real m01, real m02, real m10, real m11, real m12, real m20, real m21, real m22)
```

Matrix 3x3
00 01 02
10 11 12
20 21 22
Each column represents an axis in a rotation matrix.

### mat4

```wurst
public tuple mat4( real m00, real m01, real m02, real m03, real m10, real m11, real m12, real m13, real m20, real m21, real m22, real m23, real m30, real m31, real m32, real m33)
```

Matrix 4x4
00 01 02 03
10 11 12 13
20 21 22 23
30 31 32 33

## Functions

### mult

```wurst
public function mult(mat4 m) returns mat4
```

Due to parameter restriction you need to set `tmp_mat` as one matrix before multiplying. *

### getProjection

```wurst
public function getProjection(real near, real far, real fovy, real aspectRatio) returns mat4
```

Sets the matrix to a projection matrix with a near- and far plane, a field of view in degrees and an aspect ratio. Note that
* the field of view specified is the angle in degrees for the height, the field of view for the width will be calculated
* according to the aspect ratio.

### setToTranslation

```wurst
public function setToTranslation(real x, real y, real z) returns mat4
```

Sets this matrix to a translation matrix, overwriting it first by an identity matrix and then setting the 4th column to the
	* translation vector.

### setToLookAt

```wurst
public function setToLookAt(vec3 position, vec3 target, vec3 up) returns mat4
```

Sets this matrix to a look at matrix with the given position, target and up vector.

### setToLookAt

```wurst
public function setToLookAt(vec3 direction, vec3 up) returns mat4
```

Sets the matrix to a look at matrix with a direction and an up vector. Multiply with a translation matrix to get a camera
	* model view matrix.

## Extension Functions

### mat2.op_plus

```wurst
public function mat2.op_plus(mat2 m) returns mat2
```

### mat2.op_minus

```wurst
public function mat2.op_minus(mat2 m) returns mat2
```

### mat2.op_minus

```wurst
public function mat2.op_minus(real scalar) returns mat2
```

### mat2.op_plus

```wurst
public function mat2.op_plus(real scalar) returns mat2
```

### mat2.op_mult

```wurst
public function mat2.op_mult(real scalar) returns mat2
```

### real.op_mult

```wurst
public function real.op_mult(mat2 m) returns mat2
```

### mat2.op_mult

```wurst
public function mat2.op_mult(vec2 v) returns vec2
```

Matrix multiplication is not commutative that means matrix * vect is not the same as vec * matrix.

### vec2.op_mult

```wurst
public function vec2.op_mult(mat2 m) returns vec2
```

Matrix multiplication is not commutative that means matrix * vect is not the same as vec * matrix.

### mat2.op_mult

```wurst
public function mat2.op_mult(mat2 m) returns mat2
```

### mat2.col

```wurst
public function mat2.col(int index) returns vec2
```

Returns matrix' column by index as a vector or rises an error if doesn't exist.

### mat2.row

```wurst
public function mat2.row(int index) returns vec2
```

Returns matrix' row by index as a vector or rises an error if doesn't exist.

### mat2.determinant

```wurst
public function mat2.determinant() returns real
```

### mat2.transpose

```wurst
public function mat2.transpose() returns mat2
```

Flips the matrix over its main diagonale.
Result of transposing for rotation matrix is its inverse matrix.

### mat2.inverse

```wurst
public function mat2.inverse() returns inverseresult22
```

Finds inverse matrix.
Returns tuple inverseresult22(bool success, mat2 matrix) where 'success' is true if the inverse matrix exists and 'matrix' is the inverse matrix.
If there's no inverse matrix 'success' is false and 'matrix' is zero matrix.

### mat2.toString

```wurst
public function mat2.toString() returns string
```

### angle.toRotation

```wurst
public function angle.toRotation() returns mat2
```

Creates rotation matrix from angle.

### vec2.toScaling

```wurst
public function vec2.toScaling() returns mat2
```

Creates scaling 2x2 matrix from a vector.

### mat3.op_plus

```wurst
public function mat3.op_plus(mat3 m) returns mat3
```

### mat3.op_plus

```wurst
public function mat3.op_plus(real scalar) returns mat3
```

### mat3.op_minus

```wurst
public function mat3.op_minus(mat3 m) returns mat3
```

### mat3.op_minus

```wurst
public function mat3.op_minus(real scalar) returns mat3
```

### mat3.op_mult

```wurst
public function mat3.op_mult(real scalar) returns mat3
```

### real.op_mult

```wurst
public function real.op_mult(mat3 m) returns mat3
```

### mat3.op_mult

```wurst
public function mat3.op_mult(vec3 v) returns vec3
```

Matrix multiplication is not commutative that means matrix * vect is not the same as vec * matrix.

### vec3.op_mult

```wurst
public function vec3.op_mult(mat3 m) returns vec3
```

### mat3.op_mult

```wurst
public function mat3.op_mult(mat3 m) returns mat3
```

### mat3.col

```wurst
public function mat3.col(int index) returns vec3
```

Returns matrix' column by index as a vector or rises an error if doesn't exist.

### mat3.row

```wurst
public function mat3.row(int index) returns vec3
```

Returns matrix' row by index as a vector or rises an error if doesn't exist.

### mat3.trace

```wurst
public function mat3.trace() returns real
```

The sum of the main diagonal terms.

### mat3.determinant

```wurst
public function mat3.determinant() returns real
```

### mat3.transpose

```wurst
public function mat3.transpose() returns mat3
```

Flips the matrix over its main diagonale.
Result of transposing for rotation matrix is its inverse matrix.

### mat3.inverse

```wurst
public function mat3.inverse() returns inverseresult33
```

Finds inverse matrix.
Returns tuple inverseresult33(bool success, mat3 matrix) where 'success' is true if the inverse matrix exists and 'matrix' is the inverse matrix.
If there's no inverse matrix 'success' is false and 'matrix' is zero matrix.

### mat3.toEuler

```wurst
public function mat3.toEuler() returns vec3
```

Extracts Euler-angles (Tait-Bryan) in radians from a rotation matrix. Order of the result is Z-Y-X (Yaw-Pitch-Roll).

### mat3.toString

```wurst
public function mat3.toString() returns string
```

### vec3.toRotation

```wurst
public function vec3.toRotation(angle angl) returns mat3
```

Creates 3x3 rotation matrix from axis and angle.

### angle.toRotation

```wurst
public function angle.toRotation(vec3 axis) returns mat3
```

Creates 3x3 rotation matrix from axis and angle.

### angle.toRotationX

```wurst
public function angle.toRotationX() returns mat3
```

Creates 3x3 rotation matrix around X-axis from angle.

### angle.toRotationY

```wurst
public function angle.toRotationY() returns mat3
```

Creates 3x3 rotation matrix around Y-axis from angle.

### angle.toRotationZ

```wurst
public function angle.toRotationZ() returns mat3
```

Creates 3x3 rotation matrix around Z-axis from angle.

### vec3.toScaling

```wurst
public function vec3.toScaling() returns mat3
```

Creates  3x3 scaling matrix from a vector.

### vec2.toTranslation

```wurst
public function vec2.toTranslation() returns mat3
```

Creates translation 3x3 matrix from a vector that represents an offset.
Use it with vec3 that represents 2D point.

### vec3.project

```wurst
public function vec3.project(mat4 matrix) returns vec3
```

Multiplies this vector by the given matrix dividing by w, assuming the fourth (w) component of the vector is 1. This is
	* mostly used to project/unproject vectors via a perspective projection matrix. *

### mat4.determinant

```wurst
public function mat4.determinant() returns real
```

### mat4.inverse

```wurst
public function mat4.inverse() returns inverseresult44
```

Finds inverse matrix.
Returns tuple inverseresult44(bool success, mat3 matrix) where 'success' is true if the inverse matrix exists and 'matrix' is the inverse matrix.
If there's no inverse matrix 'success' is false and 'matrix' is zero matrix.

### mat4.toString

```wurst
public function mat4.toString() returns string
```

### mat2.assertEquals

```wurst
public function mat2.assertEquals(mat2 expected)
```

### mat3.assertEquals

```wurst
public function mat3.assertEquals(mat3 expected)
```

## Constants

### ZERO22

```wurst
public constant ZERO22 = mat2(0, 0, 0, 0)
```

### IDENTITY22

```wurst
public constant IDENTITY22 = mat2( 1, 0,
```

### ZERO33

```wurst
public constant ZERO33 = mat3(0, 0, 0, 0, 0, 0, 0, 0, 0)
```

### IDENTITY33

```wurst
public constant IDENTITY33 = mat3( 1, 0, 0,
```

### ZERO44

```wurst
public constant ZERO44 = mat4( 0, 0, 0, 0,
```

### IDENTITY44

```wurst
public constant IDENTITY44 = mat4( 1, 0, 0, 0,
```
