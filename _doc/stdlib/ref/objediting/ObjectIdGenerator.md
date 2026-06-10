---
title: ObjectIdGenerator
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/presets/ObjectIdGenerator.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/presets/ObjectIdGenerator.wurst)**

## Classes

### IdGenerator

```wurst
public class IdGenerator
```

**Members:**

- `construct(int start)`
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
