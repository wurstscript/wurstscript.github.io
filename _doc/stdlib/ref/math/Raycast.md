---
title: Raycast
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Raycast.wurst'
generated: true
---

An infinite 2D ray
origin - the point which the ray comes from
direction - directional vector

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/Raycast.wurst)**

## Tuples

### ray2d

```wurst
public tuple ray2d(vec2 origin, vec2 direction)
```

### ray3d

```wurst
public tuple ray3d(vec3 origin, vec3 direction)
```

An infinite 3D ray
origin - the point which the ray comes from
direction - directional vector

### result2d

```wurst
public tuple result2d(bool intersects, vec2 point, real distance)
```

2D intersection result
intersects - 'true' if the intersection point exists
point - the intersection point or ZERO2
distance - distance between the ray's origin and the intersection point

### doubleresult2d

```wurst
public tuple doubleresult2d(result2d first, result2d second)
```

Double 2D intersection result.
'first' is nearest to the ray's origin.

### result3d

```wurst
public tuple result3d(bool intersects, vec3 point, real distance, bool backface)
```

3D intersection result
intersects - 'true' if the intersection point exists
point - the intersection point or ZERO2
distance - distance between the ray's origin and the intersection point
backface - `true` if the surface at the intersection point is faced away from the ray's origin

### doubleresult3d

```wurst
public tuple doubleresult3d(result3d first, result3d second)
```

Double 3D intersection result.
'first' is nearest to the ray's origin.

## Extension Functions

### vec2.project

```wurst
public function vec2.project(ray2d ray) returns result2d
```

Projects the point onto a ray.
Returns tuple result2d(intersects, point, distance).

### ray2d.castToLine

```wurst
public function ray2d.castToLine(vec2 p1, vec2 p2) returns result2d
```

Finds the intersection point of the ray and a line defined by 2 points.
Returns tuple result2d(intersects, point, distance).

### ray2d.castToRay

```wurst
public function ray2d.castToRay(vec2 origin, vec2 direction) returns result2d
```

Finds the intersection point of the ray and another ray.
Returns tuple result2d(intersects, point, distance).

### ray2d.castToSegment

```wurst
public function ray2d.castToSegment(vec2 p1, vec2 p2) returns result2d
```

Finds the intersection point of the ray and a line segment defined by 2 points.
Returns tuple result2d(intersects, point, distance).

### ray2d.castToCircle

```wurst
public function ray2d.castToCircle(vec2 center, real radius) returns doubleresult2d
```

Finds the intersection point(s) of the ray and a circle.
Returns tuple doubleresult2d(first, second).

### vec3.project

```wurst
public function vec3.project(ray3d ray) returns result3d
```

Projects the point onto a ray.
Returns tuple result3d(intersects, point, distance, backface) where 'backface' is always false.

### ray3d.castToPlane

```wurst
public function ray3d.castToPlane(vec3 point, vec3 normal) returns result3d
```

Finds the intersection point of the ray and a plane where
point - a point on the plane
normal - a vector perpendicular to the plane
Returns tuple result3d(intersects, point, distance, backface).

### ray3d.castToDisk

```wurst
public function ray3d.castToDisk(vec3 center, vec3 normal, real radius) returns result3d
```

Finds the intersection point of the ray and a plane disk where
center - the center of the disk
normal - a vector perpendicular to the disk's plane
radius - the disk's radius
Returns tuple result3d(intersects, point, distance, backface).

### ray3d.castToSphere

```wurst
public function ray3d.castToSphere(vec3 center, real radius) returns doubleresult3d
```

Finds the intersection point(s) of the ray and a sphere.
Returns tuple doubleresult3d(first, second).

### ray3d.castToTriangle

```wurst
public function ray3d.castToTriangle(vec3 p1, vec3 p2, vec3 p3) returns result3d
```

Finds the intersection point of the ray and a triangle in 3D space defined by 3 points.
Returns tuple result3d(intersects, point, distance, backface) where 'backface' depends on the order of the given points.
