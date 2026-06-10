---
title: Bitwise
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Bitwise.wurst'
generated: true
---

A tuple containing 4 bytes comprising a 4-byte integer.
b1 is the least significant byte, b4 is the most significant byte.
All functions operating on this are LSB first.
The bytes are always unsigned, from 0 to 255.

WARNING: This library contains no safety bound checks to guarantee
that these bytes stay in the 0-255 range. If these values go out of bounds,
the behaviour is undefined.
*

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Bitwise.wurst)**

## Tuples

### byte4

```wurst
public tuple byte4(int b1, int b2, int b3, int b4)
```

## Extension Functions

### byte4.select

```wurst
public function byte4.select(int pos) returns int
```

Selects the n-th byte from these bytes, starting from
0 for the least significant byte and ending with
3 for the most significant byte.
*

### byte4.put

```wurst
public function byte4.put(int pos, int value) returns byte4
```

Replaces the byte in the n-th position with the provided one.
*

### byte4.toInt

```wurst
public function byte4.toInt() returns int
```

Re-assembles these bytes into an integer. *

### int.toUnsigned

```wurst
public function int.toUnsigned() returns int
```

Turns this signed integer into an unsigned one if it is negative,
removing the first (sign) bit
*

### int.byte1

```wurst
public function int.byte1() returns int
```

### int.byte2

```wurst
public function int.byte2() returns int
```

### int.byte3

```wurst
public function int.byte3() returns int
```

### int.byte4

```wurst
public function int.byte4(int isNegative) returns int
```

### int.bytes

```wurst
public function int.bytes() returns byte4
```

De-composes an integer into 4 unsigned bytes. *

### string.fromBitString

```wurst
public function string.fromBitString() returns int
```

Produces a signed integer from the bitstring.
Input string may contain whitespace for padding.
*

### int.toBitString

```wurst
public function int.toBitString() returns string
```

Produces a bistring from this integer.
*

### int.not8

```wurst
public function int.not8() returns int
```

8-bit NOT (~)
NOTE: Assumes number is in the range [0, 255]

number.not8() equivalent to (~number)
*

### int.not32

```wurst
public function int.not32() returns int
```

32-bit NOT (~)

number.not32() equivalent to (~number)
*

### int.and8

```wurst
public function int.and8(int other) returns int
```

8-bit AND (&)
NOTE: Assumes both operands are in the range [0, 255]

number.and8(other) equivalent to (number & other)
*

### int.and32

```wurst
public function int.and32(int other) returns int
```

32-bit AND (&)

number.and32(other) equivalent to (number & other)
*

### int.or8

```wurst
public function int.or8(int other) returns int
```

8-bit OR (|)
NOTE: Assumes both operands are in the range [0, 255]

number.or8(other) equivalent to (number | other)
*

### int.or32

```wurst
public function int.or32(int other) returns int
```

32-bit OR (|)

number.or32(other) equivalent to (number | other)
*

### int.xor8

```wurst
public function int.xor8(int other) returns int
```

8-bit XOR (^)
NOTE: Assumes both operands are in the range [0, 255]

number.xor8(other) equivalent to (number ^ other)
*

### int.xor32

```wurst
public function int.xor32(int other) returns int
```

32-bit XOR (^)

number.xor32(other) equivalent to (number ^ other)
*

### int.shiftl

```wurst
public function int.shiftl(int amount) returns int
```

32-bit SHIFTL (<<)

number.shiftl(amount) equivalent to (number << amount)
*

### int.shiftr

```wurst
public function int.shiftr(int amount) returns int
```

32-bit SHIFTR (>>)

number.shiftr(amount) equivalent to (number >> amount)
*
