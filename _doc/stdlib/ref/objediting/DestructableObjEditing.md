---
title: DestructableObjEditing
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/DestructableObjEditing.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/DestructableObjEditing.wurst)**

## Classes

### W3BDefinition

```wurst
public class W3BDefinition
```

**Members:**

- `getNewId() returns int`
- `getBaseId() returns int`
- `construct(int newId, int baseId)`

### DestructableDefinition

```wurst
public class DestructableDefinition extends W3BDefinition
```

**Members:**

- `construct(int newID,int origID)`
- `setTexture(string data)`
- `setTextureId(int data)`
- `setCategory(string data)`
- `setName(string data)`
- `setPath(string data)`
- `setModel(string data)`
- `setSoundOnDestroy(string data)`
- `setHitPoints(real data)`
- `setTargetedAs(string data)`
- `setMaximumScale(real data)`
- `setMinimumScale(real data)`
- `setNumVariations(int data)`
- `setFixedRotation(real data)`
- `setShadow(string data)`
- `setVertexColorRed(int data)`
- `setVertexColorGreen(int data)`
- `setVertexColorBlue(int data)`
