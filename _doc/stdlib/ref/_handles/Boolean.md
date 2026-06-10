---
title: Boolean
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/Boolean.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/Boolean.wurst)**

## Functions

### xor

```wurst
public function xor(bool a, bool b) returns boolean
```

Returns true if exactly one of the arguments is true

## Extension Functions

### boolean.toString

```wurst
public function boolean.toString() returns string
```

Converts this boolean into a string

### string.toBool

```wurst
public function string.toBool() returns boolean
```

Converts this string into a boolean

### string.isBool

```wurst
public function string.isBool() returns bool
```

### boolean.toInt

```wurst
public function boolean.toInt() returns int
```

Converts this boolean into an int

### int.toBool

```wurst
public function int.toBool() returns boolean
```

Converts this int into a boolean

### boolean.xor

```wurst
public function boolean.xor(bool other) returns boolean
```

Returns true if exactly one of the arguments is true
