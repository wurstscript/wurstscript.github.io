---
title: PriorityQueue
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - data
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/PriorityQueue.wurst'
generated: true
toc: sections
---

A binary heap priority queue.

The comparator defines priority: a negative result means that the first
value has higher priority, so ArrayList.intComparator creates a min-heap.
Reverse the comparator to create a max-heap. Equal-priority elements are
not stable.

Adding and removing the highest-priority element are O(log n). Peeking is
O(1). The queue does not support changing an element's priority in place;
remove and re-add it after changing any fields used by the comparator.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/PriorityQueue.wurst)**

## Classes

### PriorityQueue

```wurst
public class PriorityQueue<T:>
```

**Members:**

- `construct(Comparator<T> comparator)`
- `construct(Comparator<T> comparator, int initialCapacity)`
- `add(T value)`
  Adds an element to the queue.
- `offer(T value)`
  Alias for add().
- `peek() returns T`
  Returns the highest-priority element, or null if empty.
- `poll() returns T`
  Removes and returns the highest-priority element, or null if empty.
- `remove() returns T`
  Alias for poll().
- `size() returns int`
  Returns the number of queued elements.
- `isEmpty() returns boolean`
  Returns whether the queue is empty.
- `clear()`
  Removes all elements while retaining the backing storage.
