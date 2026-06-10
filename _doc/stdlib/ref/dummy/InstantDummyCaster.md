---
title: InstantDummyCaster
layout: stdlibref
category: dummy
categoryLabel: Dummies
tags:
  - dummy
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/InstantDummyCaster.wurst'
generated: true
---

Dummy caster for casting instant spells.
vec3 can be used for casterpos so that any effects/projectiles on/from caster will be on given height.

Can't cast channeling spells or impale.
If not specified otherwise, any damage from spells will be inflicted by DUMMY_PLAYER.
Spells are recommended to be 0 cooldown, 92083 cast range and 0 manacost.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/InstantDummyCaster.wurst)**

## Classes

### InstantDummyCaster

```wurst
public class InstantDummyCaster
```

**Members:**

- `static function castImmediate(player owner, int abilityId, int lvl, int orderId, vec3 pos) returns boolean`
- `static function castTarget(player owner, int abilityId, int lvl, int orderId, widget target, vec3 casterPos) returns boolean`
- `static function castPoint(player owner, int abilityId, int lvl, int orderId, vec2 targetPos, vec3 casterPos) returns boolean`
- `static function castTarget(player owner, int abilityId, int lvl, int orderId, widget target) returns boolean`
- `static function castPoint(player owner, int abilityId, int lvl, int orderId, vec2 targetPos) returns boolean`
- `static function castImmediate(player owner, int abilityId, int lvl, string order, vec3 pos) returns boolean`
- `static function castImmediate(player owner, int abilityId, int lvl, string order, vec2 pos) returns boolean`
- `static function castImmediate(player owner, int abilityId, int lvl, int orderId, vec2 pos) returns boolean`
- `static function castTarget(player owner, int abilityId, int lvl, string order, widget target) returns boolean`
- `static function castTarget(player owner, int abilityId, int lvl, string order, widget target, vec3 casterPos) returns boolean`
- `static function castTarget(player owner, int abilityId, int lvl, string order, widget target, vec2 casterPos) returns boolean`
- `static function castTarget(player owner, int abilityId, int lvl, int orderId, widget target, vec2 casterPos) returns boolean`
- `static function castPoint(player owner, int abilityId, int lvl, string order, vec2 targetPos) returns boolean`
- `static function castPoint(player owner, int abilityId, int lvl, string order, vec2 targetPos, vec3 casterPos) returns boolean`
- `static function castPoint(player owner, int abilityId, int lvl, string order, vec2 targetPos, vec2 casterPos) returns boolean`
- `static function castPoint(player owner, int abilityId, int lvl, int orderId, vec2 targetPos, vec2 casterPos) returns boolean`

## Constants

### DUMMY_CASTER_UNIT_ID

```wurst
public constant DUMMY_CASTER_UNIT_ID = compiletime(UNIT_ID_GEN.next())
```

### DUMMY_ROOT_ABIL_ID

```wurst
public constant DUMMY_ROOT_ABIL_ID = compiletime(ABIL_ID_GEN.next())
```
