---
title: IntMap
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - data
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/IntMap.wurst'
generated: true
toc: sections
---

O(1) integer-keyed map with compiler-specialized value storage.

JASS hashtables use integer child keys, so fixing the key type avoids an artificial generic
hash adapter while `V:` keeps strings, reals, booleans, handles, tuples, and class references
in typed arrays. Removal is unordered. The map does not own stored values.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/IntMap.wurst)**

## Classes

### IntMap

```wurst
public class IntMap<V:>
```

**Members:**

- `has(int key) returns boolean`
  Returns whether a value exists under the given key.
- `put(int key, V value)`
  Inserts or replaces a value. Existing key order is retained.
- `get(int key) returns V`
  Returns the stored value, or the type's null/default value when absent.
- `remove(int key) returns boolean`
  Removes a key/value pair and returns whether it was present.
- `getAndRemove(int key) returns V`
  Retrieves a value and removes its key/value pair.
- `clear()`
  Removes every entry while retaining allocated list capacity.
- `size() returns int`
  Returns the number of entries.
- `isEmpty() returns boolean`
  Returns whether the map is empty.
- `keyAt(int index) returns int`
  Returns a key by dense index. Removal may change this order.
- `valueAt(int index) returns V`
  Returns a value by dense index. Removal may change this order.
