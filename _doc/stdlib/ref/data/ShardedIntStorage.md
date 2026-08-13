---
title: ShardedIntStorage
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - data
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/ShardedIntStorage.wurst'
generated: true
toc: sections
---

A shared integer arena spanning multiple native JASS arrays. Allocations are
contiguous logical address ranges and released adjacent ranges are coalesced.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/ShardedIntStorage.wurst)**

## Classes

### ShardedIntStorage

```wurst
public class ShardedIntStorage
```

**Members:**

- `static function capacity() returns int`
- `static function get(int address) returns int`
- `static function set(int address, int value)`
- `static function tryAllocate(int size) returns int`
- `static function allocate(int size) returns int`
- `static function release(int start, int size)`
