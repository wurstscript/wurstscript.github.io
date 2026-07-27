---
title: String
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/String.wurst'
generated: true
---

A SubString slice that cuts a multibyte (non-latin) character in half does not
contain valid data. On current game versions such invalid slices are collapsed
to a marker string with a constant string hash. Since this behavior is
undocumented and has changed between game versions, the marker hash is computed
at runtime from a known 2-byte character, so a future engine change degrades
gracefully (multibyte detection turns off) instead of corrupting data.
The historically observed hash 1843378377 is kept as an additional fallback.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/String.wurst)**

## Classes

### StringIterator

```wurst
public class StringIterator
```

**Members:**

- `construct(string s, int currentpos, int stringLen)`
- `hasNext() returns boolean`
- `next() returns string`
- `close()`

### StringLines

```wurst
public class StringLines
```

**Members:**

- `construct(string s, int lastIndex, int lineCount)`
- `iterator() returns thistype`
  ⚠️ _Deprecated. class deprecated_
- `hasNext() returns boolean`
  ⚠️ _Deprecated. class deprecated_
- `next() returns string`
  ⚠️ _Deprecated. class deprecated_
- `close()`
  ⚠️ _Deprecated. class deprecated_

## Functions

### stringCompare

```wurst
public function stringCompare(string s1, string s2) returns int
```

Returns an integer result based on a lexicographic string comparison of strings s1 and s2.

## Extension Functions

### string.isMultibytePartial

```wurst
public function string.isMultibytePartial() returns boolean
```

Returns true if this string is an invalid slice of a multibyte character.
	Only meaningful when ENABLE_MULTIBYTE_SUPPORT is enabled.

### string.isCharBoundary

```wurst
public function string.isCharBoundary(int pos) returns boolean
```

Returns true if this string can be split at the given position without
	cutting a multibyte character in half, i.e. the byte at the given position
	starts a new character instead of continuing a preceding one.
	Positions at or outside the string's bounds count as boundaries.
	Only meaningful when ENABLE_MULTIBYTE_SUPPORT is enabled.

### string.isNotBlank

```wurst
public function string.isNotBlank() returns boolean
```

Returns true if this string is non-null and
	not empty or only consisting of whitespace.

### string.toCharsetInt

```wurst
public function string.toCharsetInt() returns int
```

returns the position of the char in the charset
	therefore converting a single char into an int that can
	be converted back to a char with .toCharsetString()

### string.toReal

```wurst
public function string.toReal() returns real
```

Creates a real from a string that only contains numbers (0-9) and a sign

### string.toInt

```wurst
public function string.toInt() returns int
```

Creates an int from a string that only contains numbers (0-9) and a sign

### int.toCharsetString

```wurst
public function int.toCharsetString() returns string
```

Converts an int to the representative char

### string.substring

```wurst
public function string.substring(int start, int stop) returns string
```

returns a substring specified by end and start position.

### string.substring

```wurst
public function string.substring(int start) returns string
```

returns a substring specified by end and start position.

### string.length

```wurst
public function string.length() returns int
```

Length of the string

### string.charAt

```wurst
public function string.charAt(int index) returns string
```

Returns the char at the given position. 0 = first char

### string.toAbilityId

```wurst
public function string.toAbilityId() returns int
```

Converts a string to an ability id

### string.endsWith

```wurst
public function string.endsWith(string s) returns boolean
```

Returns if the given string ends with the specified string.

### string.startsWith

```wurst
public function string.startsWith(string s) returns boolean
```

Returns if the given string starts with the specified string.

### string.toLowerCase

```wurst
public function string.toLowerCase() returns string
```

Returns the string in lowercase letters

### string.toUpperCase

```wurst
public function string.toUpperCase() returns string
```

Returns the string in uppercase letters

### string.isUpper

```wurst
public function string.isUpper() returns boolean
```

True when string contains only uppercase letters

### string.isLower

```wurst
public function string.isLower() returns boolean
```

True when string contains only lowercase letters

### string.trim

```wurst
public function string.trim() returns string
```

Returns the given string with whitespaces removed from both ends

### string.ltrim

```wurst
public function string.ltrim() returns string
```

Returns the given string with whitespaces removed from the left end

### string.rtrim

```wurst
public function string.rtrim() returns string
```

Returns the given string with whitespaces removed from the right end

### string.ltrim

```wurst
public function string.ltrim(string val) returns string
```

Removes a string from the beginning of another string

### string.rtrim

```wurst
public function string.rtrim(string val) returns string
```

Removes a string from the end of another string

### string.trim

```wurst
public function string.trim(string val) returns string
```

Removes a string from both ends of another string

### string.indexOf

```wurst
public function string.indexOf(string s) returns int
```

Returns the index of the specified string inside the given string.
If the string does not exist, the returnvalue is -1

### string.indexOf

```wurst
public function string.indexOf(string s, int startpos) returns int
```

Returns the index of the specified string inside the given string,
starting the search at given startposition.
If the string does not exist, the returnvalue is -1

### string.lastIndexOf

```wurst
public function string.lastIndexOf(string s) returns int
```

Returns the last index of the specified string inside the given string,
If the string does not exist, the returnvalue is -1

### string.countOccurences

```wurst
public function string.countOccurences(string findStr) returns int
```

Returns the occurences of a certain string within a string

### string.contains

```wurst
public function string.contains(string s) returns boolean
```

True if the string contains the given string

### string.isWhitespace

```wurst
public function string.isWhitespace() returns boolean
```

Returns if the given string is a whitespace (" ",\n,\t,\r)

### string.firstUpper

```wurst
public function string.firstUpper() returns string
```

Returns a new string with first letter is upper

### string.firstLower

```wurst
public function string.firstLower() returns string
```

Returns a new string with first letter is lower

### string.replace

```wurst
public function string.replace(string oldSubstring, string newSubstring) returns string
```

Returns a new string in which all occurrences of a specified string in the current instance are replaced with another specified string

### string.getHash

```wurst
public function string.getHash() returns int
```

### string.format

```wurst
public function string.format(vararg string replacements) returns string
```

Formats the given string replacing {x} delimiters with the passed replacements.
	Example: "You got {0} gold".format(goldAmount) *

### string.iterator

```wurst
public function string.iterator() returns StringIterator
```

### string.toLines

```wurst
public function string.toLines() returns StringLines
```

## Constants

### ENABLE_MULTIBYTE_SUPPORT

```wurst
public constant ENABLE_MULTIBYTE_SUPPORT = true
```

> 🔧 **Configurable.** Override it in your map's config package.

### PARTIAL_CHAR_MARKER

```wurst
public constant PARTIAL_CHAR_MARKER = "ä".substring(0, 1)
```

### PARTIAL_CHAR_HASH

```wurst
public constant PARTIAL_CHAR_HASH = PARTIAL_CHAR_MARKER.getHash()
```

### LEAD4_HASH

```wurst
public constant LEAD4_HASH = "😀".substring(0, 1).getHash()
```

Hash of a slice containing only the lead byte 0xF0 of a 4-byte character
	(emoji and other astral plane chars), which the game does not collapse
	to the partial char marker.
