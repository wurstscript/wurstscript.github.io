---
title: Angle
sections:
- Intro
- Basic Usage
---


### Intro

The `angle` tuple in wurst is used to describe angle values to prevent confusion between radians and degrees.
Using `angle` instead of raw reals provides zero overhead safety and smooth api.

### Basic Usage

```wurst
// Create from degrees or radians
let angl1 = 180 .fromDeg()
let angl2 = (PI/2.).fromRad()
// Trigonometry on angles
let cosVal = angl1.cos()
// Create unit vector from angle
let uVec = angl1.direction()
```

The angle tuple is also used as parameter and return value of standard library functions:

```wurst
// Get unit facing as angle
let facing = GetTriggerUnit().getFacingAngle()
// Use facing angle to offset vector
let point = GetTriggerUnit().getPos().polarOffset(facing, 100)
```
