---
title: StringUtils
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/StringUtils.wurst'
generated: true
---

Custom Function which can split strings and runs callback for each string.
	It can run even with no delimiter present (with single element).
	Example usage:
	"H001,H002".forEachIn(",") ->
		doSomething()

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/StringUtils.wurst)**

## Interfaces

### ForStringSplitCallback

```wurst
public interface ForStringSplitCallback
```

**Members:**

- `callback(string str)`

## Tuples

### char

```wurst
public tuple char(int c)
```

## Functions

### createCenteredTexttag

```wurst
public function createCenteredTexttag(vec3 pos, string message, real size) returns texttag
```

### char

```wurst
public function char(string s) returns char
```

### charToIndex

```wurst
public function charToIndex(char c) returns int
```

### charFromIndex

```wurst
public function charFromIndex(int index) returns char
```

## Extension Functions

### texttag.center

```wurst
public function texttag.center(vec3 pos, string message, real size) returns texttag
```

### string.getWidth

```wurst
public function string.getWidth() returns int
```

Returns the width of the string

### char.toString

```wurst
public function char.toString() returns string
```

### char.toInt

```wurst
public function char.toInt() returns int
```

### char.getWidth

```wurst
public function char.getWidth() returns int
```

### string.toChar

```wurst
public function string.toChar() returns char
```

### string.toCharList

```wurst
public function string.toCharList() returns LinkedList<char>
```

### int.toChar

```wurst
public function int.toChar() returns char
```

### string.split

```wurst
public function string.split(string splitBy) returns LinkedList<string>
```

Splits the string by another string
	"this..is..an..example" split by the string ".." splits into a list containing four strings ["this", "is", "an", "example"]

### string.reduce

```wurst
public function string.reduce(string reduced) returns string
```

Replaces consecutive repeats of the same string with a single instance
	Turns "strstr" into "str"

### string.reduce

```wurst
public function string.reduce() returns string
```

Replaces consecutive repeats of the whitespace character with a single instance
	Turns "  " into " "

### string.forEachIn

```wurst
public function string.forEachIn(string delim, ForStringSplitCallback cb)
```

### string.isNumber

```wurst
public function string.isNumber() returns bool
```

Checks whether a string is a number or not.

### string.isValidDescription

```wurst
public function string.isValidDescription() returns bool
```

Checks whether a string is valid in terms of max WC3 string length for various usages (Ability Description, Quest Description,...).

### string.replaceChars

```wurst
public function string.replaceChars(string charset, string replacementChar) returns string
```

Replaces all occurences of any character from given charlist by a given replacement string.
