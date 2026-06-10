---
title: Knockback3
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Knockback3.wurst'
generated: true
---

Use the `Knockback3.add(..)` functions to apply 3D knockback to units.
Using angles:
	import Knockback3
	...
	let u = ...
	Knockback3.add(u, 1000., 0 .fromDeg(), 45 .fromDeg())

Using a target position:
	let caster = GetSpellAbilityUnit()
	let target = getSpellTargetPos()

	Knockback3.add(caster, target, 500.)

Configure this system by overriding the @configurable globals and setting
the static class members:

	Knockback3.gravity = 25.

By default, this package allows units to collide with destructables and
destroy them. To disable this feature, make the global
destroyDestructableSpeedThreshold a very high value:

	Knockback3.destroyDestructableSpeedThreshold = 999999999.

This value defaults to 300.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Knockback3.wurst)**

## Classes

### Knockback3

```wurst
public class Knockback3
```

**Members:**

- `static function add(unit u, real velocity, angle groundAngle, angle airAngle)`
  Apply a knockback vector to unit u. `velocity` is initial speed in units
  per second. `groundAngle` and `airAngle` are the direction and trajectory
  parameters, respectively. Example:
- `static function add(unit u, vec2 target, real groundSpeed)`
  Apply a knockback vector to unit u. If the unit is stopped, this vector will
  throw the unit to the position at vec2 `target`. Along the XY-plane, the
  unit will move `groundSpeed` units per second. Note that the more vertical
  angle will always be used from the pair of possible trajectories. Example:
- `static function setVel(unit u, real velocity, angle groundAngle, angle airAngle)`
  Setter for the knockback vector on unit u. If the unit is not already tracked, this has the same behavior as
  `add`.
- `static function getVel(unit u) returns vec3`
  Getter for the knockback vector on unit u.  If the unit is not already tracked, returns (0, 0, 0).
- `static function forget(unit u)`
  Stop tracking unit u. If the unit is middair it will simply stop moving. If the unit is already untracked,
  nothing happens.

## Interfaces

### TerrainZProvider

```wurst
public interface TerrainZProvider
```

A vec3 -> real function.

**Members:**

- `get(vec3 where) returns real`

### UnitFilter

```wurst
public interface UnitFilter
```

A unit -> bool function.

**Members:**

- `get(unit which) returns bool`

### WallHitTransform

```wurst
public interface WallHitTransform
```

A vec3 -> vec3 closure.

**Members:**

- `apply(vec3 vel) returns vec3`
