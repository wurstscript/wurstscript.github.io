---
title: Integer
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/Integer.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/Integer.wurst)**

## Extension Functions

### int.abs

```wurst
public function int.abs() returns int
```

Returns the absolute value of this int

### int.squared

```wurst
public function int.squared() returns int
```

Returns the square of this int

### int.sign

```wurst
public function int.sign() returns int
```

returns the sign of the int

### int.clamp

```wurst
public function int.clamp(int lowerBound, int higherBound) returns int
```

Limits this int to the given range

### int.toReal

```wurst
public function int.toReal() returns real
```

Returns the int as real

### int.toString

```wurst
public function int.toString() returns string
```

Returns the string representation of this int

### int.pow

```wurst
public function int.pow(int x) returns int
```

Returns this int to the power of the argument int

### int.lerp

```wurst
public function int.lerp(int target, real alpha) returns int
```

Linear Interpolation with alphafactor(smoothness)

### int.isBetween

```wurst
public function int.isBetween(int low, int high) returns bool
```

Checks if this int is between low and high value

### int.bitAnd

```wurst
public function int.bitAnd(int other) returns int
```

Returns the result of a bitwise AND operation performed on this int and the argument int.

### int.bitOr

```wurst
public function int.bitOr(int other) returns int
```

Returns the result of a bitwise OR operation performed on this int and the argument int.

### int.bitXor

```wurst
public function int.bitXor(int other) returns int
```

Returns the result of a bitwise exclusive OR operation performed on this int and the argument int.

### int.isOdd

```wurst
public function int.isOdd() returns boolean
```

Checks whether this int is odd.

### int.isEven

```wurst
public function int.isEven() returns boolean
```

Checks whether this int is even.

### int.approach

```wurst
public function int.approach(int target, int maxStep) returns int
```

Moves this towards target by at most maxStep (never overshoots)

### int.wrapIndex

```wurst
public function int.wrapIndex(int length) returns int
```

Wraps this into [0, length-1] for cyclic indexing (length <= 0 -> 0)

## Constants

### INT_MAX

```wurst
public constant INT_MAX = 2147483647
```

### INT_MIN

```wurst
public constant INT_MIN = -2147483648
```
