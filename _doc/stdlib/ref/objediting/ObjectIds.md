---
title: ObjectIds
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/ObjectIds.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/ObjectIds.wurst)**

## Functions

### toRawCode

```wurst
public function toRawCode(int value) returns string
```

Convert a integer id value into a 4-letter id code.

### fromRawCode

```wurst
public function fromRawCode(string value) returns int
```

converts a 4-letter id code to an integer

### commaList

```wurst
public function commaList(LinkedList<string> ids) returns string
```

Consumes the provided list, producing a string joined by ','.

### commaList

```wurst
public function commaList(LinkedList<int> ids) returns string
```

Consumes the provided list, producing a string joined by ','.

### commaList

```wurst
public function commaList(vararg int ids) returns string
```

### commaList

```wurst
public function commaList(vararg string values) returns string
```

### commaList

```wurst
public function commaList(LinkedList<UnitTargetType> tags) returns string
```

### commaList

```wurst
public function commaList(vararg UnitTargetType tags) returns string
```

## Extension Functions

### string.fromRawCode

```wurst
public function string.fromRawCode() returns int
```

### int.toRawCode

```wurst
public function int.toRawCode() returns string
```
