---
title: Real
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/Real.wurst'
generated: true
---

The arctangent function with two arguments.
	The second argument is needed to determine the appropriate
	quadrant of the computed angle.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/Real.wurst)**

## Extension Functions

### real.abs

```wurst
public function real.abs() returns real
```

Returns the abolsute value of the given real.
This means, negative values will be return positive.

### real.squared

```wurst
public function real.squared() returns real
```

Returns the result of this * this, i.e. the square

### real.sign

```wurst
public function real.sign() returns int
```

Returns the sign of this real

### real.round

```wurst
public function real.round() returns int
```

Rounds the input real to the nearest int

### real.trunc

```wurst
public function real.trunc() returns int
```

Rounds the input real towards zero to the nearest int

### real.floor

```wurst
public function real.floor() returns int
```

Rounds the input real downward to the nearest int

### real.ceil

```wurst
public function real.ceil() returns int
```

Rounds the input real upward to the nearest int

### real.clamp

```wurst
public function real.clamp(real lowerBound, real higherBound) returns real
```

Limits the input real to the given range

### real.toInt

```wurst
public function real.toInt() returns int
```

Converts the input real to an int. This cuts off
	the decimal digits. (1.9 -> 1)

### real.toString

```wurst
public function real.toString() returns string
```

Returns the string representation of this real

### real.toString

```wurst
public function real.toString(int precision) returns string
```

Returns the string representation of this real with the given amount if digits precision

### real.acos

```wurst
public function real.acos() returns real
```

The inverse trigonometric function of cosine

### real.asin

```wurst
public function real.asin() returns real
```

The inverse trigonometric function of sine

### real.atan

```wurst
public function real.atan() returns real
```

The inverse trigonometric function of tangent

### real.cos

```wurst
public function real.cos() returns real
```

The trigonometric function of cosine

### real.sin

```wurst
public function real.sin() returns real
```

The trigonometric function of sine

### real.tan

```wurst
public function real.tan() returns real
```

The trigonometric function of tangent

### real.atan2

```wurst
public function real.atan2(real y) returns real
```

### real.pow

```wurst
public function real.pow(real x) returns real
```

Returns this real to the power of the argument real

### real.lerp

```wurst
public function real.lerp(real target, real alpha) returns real
```

Linear Interpolation with alphafactor(smoothness)

### real.isBetween

```wurst
public function real.isBetween(real low, real high) returns bool
```

Checks if this real is between low and high value

### real.saturate

```wurst
public function real.saturate() returns real
```

Clamps to [0,1]

### real.inverseLerp

```wurst
public function real.inverseLerp(real a, real b) returns real
```

t in [0,1] such that mix(a,b,t) == this (clamped)

### real.smoothstep

```wurst
public function real.smoothstep(real edge0, real edge1) returns real
```

Smoothstep from edge0 to edge1

### real.smootherstep

```wurst
public function real.smootherstep(real edge0, real edge1) returns real
```

Smootherstep from edge0 to edge1

## Constants

### REAL_MAX

```wurst
public constant REAL_MAX = 340282366920938000000000000000000000000.
```

### REAL_MIN

```wurst
public constant REAL_MIN = -340282366920938000000000000000000000000.
```
