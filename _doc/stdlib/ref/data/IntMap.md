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
