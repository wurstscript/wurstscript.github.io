---
title: ArrayList
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - collection
  - data
  - list
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/ArrayList.wurst'
generated: true
---

High-performance array-based list using static shared storage per type.
In most cases, a LinkedList is a better choice due to its flexibility.
This data structure is only recommended for performance-critical code
and requires careful use to avoid fragmentation.

WHEN TO USE:
===========
ArrayList is faster than LinkedList for:
- Iterating large lists (1000+ elements) - no node indirection
- Index based operations - O(1) vs O(n)
- When only appending elements to the end

LinkedList is better for:
- Insertion anywhere except the end of the list
- Deletions while retaining order
- Unknown size requirements
- No resize performance risk

TYPE SYSTEM IMPLICATIONS:
========================
Each ArrayList<T> type gets its own static storage array.
- ArrayList<int>, ArrayList<unit>, ArrayList<string> = 3 separate arrays
- On the Jass target each type holds up to JASS_MAX_ARRAY_SIZE elements total across all
  instances (the Lua target grows dynamically and is not bounded by this)

Choose wisely based on how many types you have.

PERFORMANCE RULES:
==================

1. PRESIZE, DON'T RESIZE
   Bad:  new ArrayList<int>()           // Might resize multiple times
   Good: new ArrayList<int>(maxSize)    // One allocation

   Why: Resize operations copy ALL elements to new memory. Expensive!

2. REUSE, DON'T RECREATE
   Bad:  In loop `let temp = new ArrayList<int>() ... destroy temp`
   Good: `let temp = new ArrayList<int>() ... temp.clear()` in loop

   Why: Allocation/Deallocation is moderately expensive and causes fragmentation

3. ORDERED REMOVAL IS SLOW
   Bad:  list.removeAt(i)              // O(n) - shifts all elements
   Good: list.removeAtUnordered(i)     // O(1) - swaps with last element

   Only use removeAtUnordered() if order doesn't matter

4. ITERATE BY INDEX
   Good: for i = 0 to list.size()-1                // Zero allocation
   Good: list[i]                                   // Indexing operator

   ArrayList has no iterator by design - index loops keep hot paths
   allocation-free.

5. AVOID FREQUENT INSERTS AT START
   Bad:  list.addtoStart(x)         // O(n) every time
   Good: Use LinkedList or add in reverse order

PERFORMANCE TABLE:
==================
Operation          | ArrayList | LinkedList | Notes
-------------------|-----------|------------|---------------------------
add(elem)          | O(1)*     | O(1)       | *O(n) on resize!
addtoStart(elem)   | O(n)      | O(1)       | Shifts all elements
get(index)         | O(1)      | O(n)       | Major ArrayList advantage
removeAt(index)    | O(n)      | O(1)       | Shifts remaining elements
removeAtUnordered  | O(1)      | N/A        | Doesn't preserve order
Iterate all        | Faster    | Fast       | LinkedList does double the work, but is still fast
Memory per element | 1 slot    | 3 slots    | Element + 2 pointers
Create/destroy     | Varies    | High       | AL might need memory management, LL needs to process Nodes

MEMORY MANAGEMENT:
==================
ArrayList uses section allocation in a shared static array per type.
Destroyed lists return sections to a free pool for reuse.
Free sections are compacted to reduce fragmentation.

Fragmentation occurs when lists grow - the old section becomes a gap.
This is why presizing matters: growth = copy to new location = wasted space.

Hard limit (wc3 / Jass native target): the shared store is a fixed-size array, so it is
bounded by JASS_MAX_ARRAY_SIZE total slots per type across all live instances; exceeding
it raises an error. On the Lua target the store is a dynamically growing table, so the
cap does not apply - allocateStorage branches on the magic isLua constant and skips the
error. ArrayList's added value on Lua is keeping element types static instead of relying
on typecasting.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/ArrayList.wurst)**

## Classes

### ArrayList

```wurst
public class ArrayList<T:>
```

## Interfaces

### ArrayListPredicate

```wurst
public interface ArrayListPredicate<T:>
```

### ALItrClosure

```wurst
public interface ALItrClosure<T:>
```

### ArrayListUpdater

```wurst
public interface ArrayListUpdater<T:>
```

### MapClosure

```wurst
public interface MapClosure<T:, Q:>
```

### FoldClosure

```wurst
public interface FoldClosure<T:, Q:>
```

### Comparator

```wurst
public interface Comparator<T:>
```

## Functions

### asArrayList

```wurst
public function asArrayList<T:>(vararg T ts) returns ArrayList<T>
```

## Extension Functions

### ArrayList<int>.sort

```wurst
public function ArrayList<int>.sort()
```

### ArrayList<real>.sort

```wurst
public function ArrayList<real>.sort()
```

### ArrayList<string>.sort

```wurst
public function ArrayList<string>.sort()
```

### ArrayList<string>.joinBy

```wurst
public function ArrayList<string>.joinBy(string separator) returns string
```

Joins elements from a string list into one string using a separator

### ArrayList<string>.join

```wurst
public function ArrayList<string>.join() returns string
```

Joins elements from a string list into one string

### ArrayList<T>.op_index

```wurst
public function ArrayList<T>.op_index<T>(int index) returns T
```

### ArrayList<T>.op_indexAssign

```wurst
public function ArrayList<T>.op_indexAssign<T>(int index, T value)
```
