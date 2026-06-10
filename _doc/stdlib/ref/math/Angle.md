---
title: Angle
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Angle.wurst'
generated: true
curated: /stdlib/angle
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Angle.wurst)**

> 📖 Read the **[detailed guide](/stdlib/angle)** for hand-written examples and background.

## Tuples

### angle

```wurst
public tuple angle(real radians)
```

an angle is just a wrapper around a real which allows for
typesafe APIs without the confusion between radians and degrees

## Extension Functions

### angle.degrees

```wurst
public function angle.degrees() returns real
```

get the real representation of this angle in degrees

### angle.radians

```wurst
public function angle.radians() returns real
```

get the real representation of this angle in radians

### real.asAngleDegrees

```wurst
public function real.asAngleDegrees() returns angle
```

interpret this real as an angle given in degrees

### real.fromDeg

```wurst
public function real.fromDeg() returns angle
```

interpret this real as an angle given in degrees

### real.fromRad

```wurst
public function real.fromRad() returns angle
```

interpret this real as an angle given in degrees

### int.fromRad

```wurst
public function int.fromRad() returns angle
```

interpret this int as an angle given in degrees

### int.asAngleRadians

```wurst
public function int.asAngleRadians() returns angle
```

interpret this int as an angle given in radians

### real.asAngleRadians

```wurst
public function real.asAngleRadians() returns angle
```

interpret this real as an angle given in radians

### angle.sin

```wurst
public function angle.sin() returns real
```

get the sine of this angle

### angle.cos

```wurst
public function angle.cos() returns real
```

get the cosine of this angle

### angle.tan

```wurst
public function angle.tan() returns real
```

get the tangent of this angle

### angle.op_plus

```wurst
public function angle.op_plus(angle other) returns angle
```

adds two angles

### angle.op_minus

```wurst
public function angle.op_minus(angle other) returns angle
```

substracts two angles

### angle.op_mult

```wurst
public function angle.op_mult(real scalar) returns angle
```

multiplies the angle with the given scalar

### real.op_mult

```wurst
public function real.op_mult(angle ang) returns angle
```

multiplies with the given angle

### angle.op_divReal

```wurst
public function angle.op_divReal(real scalar) returns angle
```

divides the angle by the given scalar

## Constants

### DEGTORAD

```wurst
public constant DEGTORAD = 0.017453293
```

Converts Degrees to Radians

### RADTODEG

```wurst
public constant RADTODEG = 57.295779513
```

Converts Radians to Degrees
