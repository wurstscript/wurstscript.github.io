---
title: ObjectIdGenerator
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/presets/ObjectIdGenerator.wurst'
generated: true
toc: sections
---

Generates sequential four-character object IDs from a starting rawcode.
   Does not check existing map IDs for collisions; keep generator ranges separate from other objects.
   The starting ID is a seed: `next()` advances before returning an ID.
```wurst
let ids = new IdGenerator('x000')
let firstId = ids.next()
```
   Use one shared generator for a range, rather than repeatedly constructing generators with the same seed.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/presets/ObjectIdGenerator.wurst)**

## Classes

### IdGenerator

```wurst
public class IdGenerator
```

**Members:**

- `construct(int start)`
  Sets the initial rawcode. Choose a range that does not overlap existing object IDs.
- `isInvalid(int char) returns boolean`
- `next() returns int`

## Constants

### UNIT_ID_GEN

```wurst
public constant UNIT_ID_GEN = new IdGenerator('x000')
```

### HERO_ID_GEN

```wurst
public constant HERO_ID_GEN = new IdGenerator('HM00')
```

### ABIL_ID_GEN

```wurst
public constant ABIL_ID_GEN = new IdGenerator('AM00')
```

> 🔧 **Configurable.** Override it in your map's config package.

### BUFF_ID_GEN

```wurst
public constant BUFF_ID_GEN = new IdGenerator('BM00')
```

### ITEM_ID_GEN

```wurst
public constant ITEM_ID_GEN = new IdGenerator('IM00')
```

### UPGD_ID_GEN

```wurst
public constant UPGD_ID_GEN = new IdGenerator('RM00')
```
