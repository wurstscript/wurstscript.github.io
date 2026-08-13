---
title: LinkedListModule
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - data
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/LinkedListModule.wurst'
generated: true
toc: sections
---

Turns a class into a linked list where each instance knows it's previous
	and next member in the list

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/LinkedListModule.wurst)**

## Modules

### LinkedListModule

```wurst
public module LinkedListModule
```

**Members:**

- `construct()`
- `static function getFirst() returns thistype`
- `getNext() returns thistype`
  The next instance, wrapping around to the first one at the end of the list
- `getPrev() returns thistype`
  The previous instance, wrapping around to the last one at the start of the list
- `remove()`
- `static function iterator() returns Iterator`
  An iterator which iterates over all instances of this class
- `static function staticItr() returns Iterator`
  An iterator which iterates over all instances of this class
- `static function backIterator() returns BackIterator`
  An iterator which iterates over all instances of this class in reverse
- `static function staticBackItr() returns BackIterator`
  An iterator which iterates over all instances of this class in reverse
