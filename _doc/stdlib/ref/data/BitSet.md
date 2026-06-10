---
title: BitSet
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - collection
  - data
  - flags
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/BitSet.wurst'
generated: true
curated: /stdlib/bitset
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/BitSet.wurst)**

> 📖 Read the **[detailed guide](/stdlib/bitset)** for hand-written examples and background.

## Tuples

### bitset

```wurst
public tuple bitset(int val)
```

Bitset represents a fixed-size sequence of BITSET_SIZE bits. The bits are contained in a single int.

## Functions

### emptyBitset

```wurst
public function emptyBitset() returns bitset
```

Creates an empty bitset.

### bitsetToIndex

```wurst
public function bitsetToIndex(bitset object) returns int
```

### bitsetFromIndex

```wurst
public function bitsetFromIndex(int index) returns bitset
```

## Extension Functions

### bitset.get

```wurst
public function bitset.get(int index) returns bool
```

Returns the value of the bit with the specified index.

### bitset.set

```wurst
public function bitset.set(int index) returns bitset
```

Sets the bit at the specified index to true.

### bitset.reset

```wurst
public function bitset.reset(int index) returns bitset
```

Sets the bit at the specified index to false.

### bitset.set

```wurst
public function bitset.set(int index, bool value) returns bitset
```

Sets the bit at the specified index to the specified value.

### bitset.flip

```wurst
public function bitset.flip(int index) returns bitset
```

Sets the bit at the specified index to the complement of its current value.

### bitset.isEmpty

```wurst
public function bitset.isEmpty() returns bool
```

Returns true if this bitset contains no bits that are set to true.

### bitset.intersects

```wurst
public function bitset.intersects(bitset other) returns bool
```

Returns true if the specified bitset has any bits set to true that are also set to true in this bitset.

### bitset.bitAnd

```wurst
public function bitset.bitAnd(bitset other) returns bitset
```

Performs a logical AND of this bit set with the bit set argument.

### bitset.bitOr

```wurst
public function bitset.bitOr(bitset other) returns bitset
```

Performs a logical OR of this bit set with the bit set argument.

### bitset.bitXor

```wurst
public function bitset.bitXor(bitset other) returns bitset
```

Performs a logical XOR of this bit set with the bit set argument.

### bitset.toInt

```wurst
public function bitset.toInt() returns int
```

Returns an integer representation of the data.

## Constants

### BITSET_SIZE

```wurst
public constant BITSET_SIZE = 32
```
