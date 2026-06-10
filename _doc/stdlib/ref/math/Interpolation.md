---
title: Interpolation
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Interpolation.wurst'
generated: true
---

Linear Interpolation
Sample Usage:
AddSpecialEffect(TEST_SFX,linear(P1X,P2X,p),linear(P1Y,P2Y,p))

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Interpolation.wurst)**

## Functions

### linear

```wurst
public function linear(vec2 start, vec2 stop, real p) returns vec2
```

Look at linear

### linear

```wurst
public function linear(real start, real stop, real p) returns real
```

### bezier3

```wurst
public function bezier3(real start, real mid, real stop, real p) returns real
```

3-Point-Bezier Interpolation
Sample Usage:
AddSpecialEffect(TEST_SFX, bezier3(P1X, P3X, P2X, p), bezier3(P1Y, P3Y, P2Y, p))

### derivBezier3

```wurst
public function derivBezier3(real start, real mid, real stop, real p) returns real
```

This function returns the derivate of the 3-Point-Bezier curve on certain point.
(d(bezier3())/dt)

### bezier4

```wurst
public function bezier4(real start, real mid1, real mid2, real stop, real p) returns real
```

4-Point-Bezier Interpolation
Sample Usage:
AddSpecialEffect(TEST_SFX,bezier4(P1X,P3X,P4X,P2X,t),bezier4(P1Y,P3Y,P4Y,P2Y,t))

### derivBezier4

```wurst
public function derivBezier4(real start, real mid1, real mid2, real stop, real p) returns real
```

This function returns the derivate of the 4-Point-Bezier curve on certain point.
(d(bezier4())/dt)

### hermite

```wurst
public function hermite(real start, real stop, real tangent1, real tangent2, real s) returns real
```

Hermite Interpolation

### inTan

```wurst
public function inTan(real p1, real p2, real p3, real p, real c, real b) returns real
```

Returns the intan of p2

### outTan

```wurst
public function outTan(real p1, real p2, real p3, real p, real c, real b) returns real
```

Returns the outtan of p2

## Extension Functions

### vec3.bezier3

```wurst
public function vec3.bezier3(vec3 mid, vec3 stop, real p) returns vec3
```

### vec2.bezier3

```wurst
public function vec2.bezier3(vec2 mid, vec2 stop, real p) returns vec2
```

### vec3.bezier4

```wurst
public function vec3.bezier4(vec3 mid1, vec3 mid2, vec3 stop, real p) returns vec3
```

### vec2.bezier4

```wurst
public function vec2.bezier4(vec2 mid1, vec2 mid2, vec2 stop, real p) returns vec2
```

### vec3.lerp

```wurst
public function vec3.lerp(vec3 target, real alpha) returns vec3
```

### vec2.lerp

```wurst
public function vec2.lerp(vec2 target, real alpha) returns vec2
```

### vec3.derivBezier3

```wurst
public function vec3.derivBezier3(vec3 mid, vec3 stop, real p) returns vec3
```

### vec2.derivBezier3

```wurst
public function vec2.derivBezier3(vec2 mid, vec2 stop, real p) returns vec2
```

### vec3.derivBezier4

```wurst
public function vec3.derivBezier4(vec3 mid1, vec3 mid2, vec3 stop, real p) returns vec3
```

### vec2.derivBezier4

```wurst
public function vec2.derivBezier4(vec2 mid1, vec2 mid2, vec2 stop, real p) returns vec2
```
