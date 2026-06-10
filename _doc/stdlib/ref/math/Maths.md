---
title: Maths
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Maths.wurst'
generated: true
---

Returns the length of the hypotenuse of a right-angle triangle with the
given side lengths. Does not overflow or underflow as fast as
SquareRoot(x^2 + y^2) does.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Maths.wurst)**

**Re-exports:** `Angle`

## Functions

### hypot

```wurst
public function hypot(real dx, real dy) returns real
```

### getSlopeAngle

```wurst
public function getSlopeAngle(real z1, real z2, real dist) returns angle
```

Returns the angle of a height-slope

### max

```wurst
public function max(vararg int numbers) returns int
```

Returns the largest value in the set provided as arguments.
	Example: max(6, 4, -12)  // Returns 6.

### max

```wurst
public function max(vararg real numbers) returns real
```

Returns the largest value in the set provided as arguments.
	Example: max(6.5, 4.5, -12.5)  // Returns 6.5.

### min

```wurst
public function min(vararg int numbers) returns int
```

Returns the smallest value in the set provided as arguments.
	Example: min(6, 4, -12)  // Returns -12.

### min

```wurst
public function min(vararg real numbers) returns real
```

Returns the smallest value in the set provided as arguments.
	Example: min(6.5, 4.5, -12.5)  // Returns -12,5.

## Extension Functions

### int.moduloInt

```wurst
public function int.moduloInt(int divisor) returns int
```

## Constants

### EULER

```wurst
public constant real EULER = 2.718281828
```

Euler's constant

### PI

```wurst
public constant real PI = 3.141592654
```

PI constant

### PI2

```wurst
public constant real PI2 = 6.28318
```

PI * 2 constant

### PIHALF

```wurst
public constant real PIHALF = 1.570796326
```

PI / 2 constant
