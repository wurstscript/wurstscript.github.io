---
title: SparseSet
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - data
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/SparseSet.wurst'
generated: true
toc: sections
---

A set with O(1) membership checks, insertion, and unordered removal.

Elements are stored in a dense typed array. The sparse index maps the key
supplied by SparseSetKey to the element's dense index. Keys must be unique
and stable for the lifetime of an element in the set. A key may be reused
after its old value is gone; add() validates the stored value before
accepting the new one.

Removal swaps the last element into the removed element's slot, so dense
iteration order is not preserved.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/SparseSet.wurst)**

**Re-exports:** `TypeCasting`

## Classes

### SparseSet

```wurst
public class SparseSet<T:>
```

### UnitSparseSetKey

```wurst
public class UnitSparseSetKey implements SparseSetKey<unit>
```

Key provider for unit sets.

This deliberately uses the native handle identity rather than UnitIndexer
IDs. That matches native groups: membership is not automatically removed
when a unit is deindexed. SparseSet validates the stored unit when a key is
reused, so a new unit cannot silently inherit stale membership.

## Interfaces

### SparseSetKey

```wurst
public interface SparseSetKey<T:>
```

Supplies the stable, unique integer key used by a SparseSet.

## Constants

### UNIT_SPARSE_SET_KEY

```wurst
public constant SparseSetKey<unit> UNIT_SPARSE_SET_KEY = new UnitSparseSetKey()
```

Reusable key provider for SparseSet<unit>.
