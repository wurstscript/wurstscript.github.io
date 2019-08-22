---
title: Vectors
sections:
- Intro
- Basic Usage
- Vector algebra
- Distances
- Polar Projection
---

![](/assets/images/stdlib/vectors.png){: .img-responsive}

### Intro

Vectors in the wurst standard library refer to the euclidean vector commonly represented as an arrow, connecting point A with point B.
They are most commonly used to describe a position in 2d or 3d space, e.g. the position of a unit `unit.getPos() returns vec2` or target position on map `item.setPos(vec2 pos)`. `vec2` and `vec3` are tuples, meaning they have no object id and thus cannot be represented as a single integer.
Vectors should be used instead of `location` or raw primitives. The standard library provides most vector algebra out of the box.

### Basic Usage

```wurst
// Create footman at (0, 0)
let u = createUnit(DUMMY_PLAYER, UnitIds.footman, ZERO2, angle(0))
let pos = u.getPos()
// Print a unit's position
print(pos.toString())

// Move position right by 128 units
u.setXY(pos + vec2(128, 0))
```

### Vector algebra

Addition, subtraction and scalar multiplocation are implemented via operator overloading (+, -, *).

```wurst
let a = vec2(1, 1)
let b = vec2(2, 2)
let sum = a + b
let difference  = a - b
let scalar = a * 0.5
```

### Distances

Use `distanceTo` and `distanceToSq` to calculate the distance or squared distance between two vectors respectively.
Squared distance is often used in range checks to compared with the squared range for a faster calculation (no square root).

```wurst
let distSq = caster.getPos().distanceToSq(target.getPos())
if distSq < 256 * 256
	// in range, deal damage
	caster.damageTarget(target, 32.)
```

Additionally you can calculate a vectors distance to a linesegment and whether it's contained inside a triangle or polygon.

### Polar Projection

Polar Projection uses trigonometry to project a vector in 2d and 3d space using a distance and angles in which to project.
Let's look at the math real quick.

![](/assets/images/stdlib/trigonometry.png){: .img-responsive}

Given an angle in radians, the `Sin` and `Cos` functions return the distance, on the y and x axis respectively, to the point on the outside of the unit circle at that angle.
We know that the blue line is of length 1 because it is equal to the radius of the unit circle.
Thus we can scale it to our desired distance simply by multiplying the x and y values, resulting in `vec2(Cos(this.radians) * len, Sin(this.radians) * len)`.

Remember that in warcraft 3 a zero xy-angle points east, and a zero z-angle points upwards.

```wurst
// Blink caster a certain distance in the target direction
let caster = GetSpellAbilityUnit()
let target = getSpellTargetPos()
let blinkPos = caster.getPos().polarOffset(caster.angleTo(target), BLINK_RANGE)
flashEffect(Abilities.blink, blinkPos)
caster.setPos(blinkPos)
```

