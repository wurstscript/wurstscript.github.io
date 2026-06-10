---
title: DummyRecycler
layout: stdlibref
category: dummy
categoryLabel: Dummies
tags:
  - dummy
  - wc3-quirk
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/DummyRecycler.wurst'
generated: true
curated: /stdlib/dummy_recycler
---

Id of the root ability
it makes unit:
1. not need to turn when spell or attack
2. can't move or turn by order like a building
3. but you can still set it's postion with code
4. the effect remains even if this ability is removed

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/DummyRecycler.wurst)**

> 📖 Read the **[detailed guide](/stdlib/dummy_recycler)** for hand-written examples and background.

**Re-exports:** `Unit`, `Timer`

## Classes

### DummyRecycler

```wurst
public class DummyRecycler
```

**Members:**

- `static function get(vec2 pos, angle a) returns unit`
- `static function recycle(unit u)`
- `static function recycle(unit u, real delay)`

## Constants

### DUMMY_UNIT_ID

```wurst
public constant DUMMY_UNIT_ID = compiletime(UNIT_ID_GEN.next())
```

Id of the dummy unit

### ROOT_ENABLER

```wurst
public constant ROOT_ENABLER = compiletime(ABIL_ID_GEN.next())
```

### DISABLE_AUTO_ACQUIRE_ATTACK_TARGETS_ABILITY_ID

```wurst
public constant DISABLE_AUTO_ACQUIRE_ATTACK_TARGETS_ABILITY_ID = compiletime(ABIL_ID_GEN.next())
```
