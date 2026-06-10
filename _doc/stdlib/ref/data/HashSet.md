---
title: HashSet
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - collection
  - data
  - set
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/HashSet.wurst'
generated: true
---

Generic set implementation

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/HashSet.wurst)**

**Re-exports:** `HashList`

## Classes

### HashSet

```wurst
public class HashSet<T> extends HashList<T>
```

**Members:**

- `override function add(vararg T elems)`
  Adds an element to this set
- `override function remove(T elem) returns boolean`
  Removes an element from this set if present
- `override function removeAt(int index) returns T`
  Remove the element at the given index
- `override function clear()`
