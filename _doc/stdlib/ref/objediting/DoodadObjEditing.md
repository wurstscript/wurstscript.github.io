---
title: DoodadObjEditing
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/DoodadObjEditing.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/DoodadObjEditing.wurst)**

## Classes

### W3DDefinition

```wurst
public class W3DDefinition
```

**Members:**

- `getNewId() returns int`
- `getBaseId() returns int`
- `construct(int newId, int baseId)`

### DoodadDefinition

```wurst
public class DoodadDefinition extends W3DDefinition
```

**Members:**

- `construct(int newID, int origID)`
- `setName(int level, string data)`
- `setModel(int level, string data)`
- `setTilesets(int level, string data)`
- `setMaximumScale(int level, real data)`
- `setMinimumScale(int level, real data)`
- `setMaxAllowed(int level, int data)`
- `setPathTexture(int level, string data)`
