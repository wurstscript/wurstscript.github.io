---
title: ObjEditingNatives
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/ObjEditingNatives.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/ObjEditingNatives.wurst)**

## Interfaces

### StringLevelClosure

```wurst
public interface StringLevelClosure
```

**Members:**

- `run(int lvl) returns string`

### IntLevelClosure

```wurst
public interface IntLevelClosure
```

**Members:**

- `run(int lvl) returns int`

### RealLevelClosure

```wurst
public interface RealLevelClosure
```

**Members:**

- `run(int lvl) returns real`

### BooleanLevelClosure

```wurst
public interface BooleanLevelClosure
```

**Members:**

- `run(int lvl) returns boolean`

## Tuples

### ObjectDefinition

```wurst
public tuple ObjectDefinition(string key)
```

## Functions

### createObjectDefinition

```wurst
public function createObjectDefinition(string fileType, int newId, int deriveFrom) returns ObjectDefinition
```

## Extension Functions

### ObjectDefinition.setInt

```wurst
public function ObjectDefinition.setInt(string modification, int value)
```

### ObjectDefinition.setBoolean

```wurst
public function ObjectDefinition.setBoolean(string modification, boolean value)
```

### ObjectDefinition.setString

```wurst
public function ObjectDefinition.setString(string modification, string value)
```

### ObjectDefinition.setReal

```wurst
public function ObjectDefinition.setReal(string modification, real value)
```

### ObjectDefinition.setUnreal

```wurst
public function ObjectDefinition.setUnreal(string modification, real value)
```

### ObjectDefinition.setLvlInt

```wurst
public function ObjectDefinition.setLvlInt(string modification, int lvl, int value)
```

### ObjectDefinition.setLvlString

```wurst
public function ObjectDefinition.setLvlString(string modification, int lvl, string value)
```

### ObjectDefinition.setLvlReal

```wurst
public function ObjectDefinition.setLvlReal(string modification, int lvl, real value)
```

### ObjectDefinition.setLvlUnreal

```wurst
public function ObjectDefinition.setLvlUnreal(string modification, int lvl, real value)
```

### ObjectDefinition.setLvlDataInt

```wurst
public function ObjectDefinition.setLvlDataInt(string modification, int lvl, int dataPointer, int value)
```

### ObjectDefinition.setLvlDataString

```wurst
public function ObjectDefinition.setLvlDataString(string modification, int lvl, int dataPointer, string value)
```

### ObjectDefinition.setLvlDataReal

```wurst
public function ObjectDefinition.setLvlDataReal(string modification, int lvl, int dataPointer, real value)
```

### ObjectDefinition.setLvlDataUnreal

```wurst
public function ObjectDefinition.setLvlDataUnreal(string modification, int lvl, int dataPointer, real value)
```

### ObjectDefinition.setLvlDataBoolean

```wurst
public function ObjectDefinition.setLvlDataBoolean(string modification, int lvl, int dataPointer, boolean value)
```

### ObjectDefinition.setLevelsDataString

```wurst
public function ObjectDefinition.setLevelsDataString(string modification, int maxLevel, int dataPointer, StringLevelClosure lc)
```

### ObjectDefinition.setLevelsDataInt

```wurst
public function ObjectDefinition.setLevelsDataInt(string modification, int maxLevel, int dataPointer, IntLevelClosure lc)
```

### ObjectDefinition.setLevelsDataUnreal

```wurst
public function ObjectDefinition.setLevelsDataUnreal(string modification, int maxLevel, int dataPointer, RealLevelClosure lc)
```

### ObjectDefinition.setLevelsDataReal

```wurst
public function ObjectDefinition.setLevelsDataReal(string modification, int maxLevel, int dataPointer, RealLevelClosure lc)
```

### ObjectDefinition.setLevelsDataBoolean

```wurst
public function ObjectDefinition.setLevelsDataBoolean(string modification, int maxLevel, int dataPointer, BooleanLevelClosure lc)
```
