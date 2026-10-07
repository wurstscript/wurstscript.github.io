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
toc: sections
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
Reuse is first-fit and claims the whole freed section (sections are never split).
Adjacent free sections are merged (compacted) when the store approaches its cap or
when the free pool is full, so interior gaps may persist until then.
The free pool itself is bounded (MAX_FREE_SECTIONS): if it is full and compaction
cannot shrink it, a freed section's space is dropped (it leaks until the type's
store is reset). Element references are always cleared, so this is a space leak, not
a dangling-reference leak. Presize and reuse lists to avoid reaching this state.

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

**Members:**

- `construct()`
  Creates a new empty list with default capacity (16)
- `construct(int initialCapacity)`
  Creates a new list with specified initial capacity - RECOMMENDED for performance
- `construct(thistype base)`
  Creates a new list by copying all elements from another list
- `add(vararg T elems)`
  Adds one or more elements to the end of the list (amortized O(1))
- `unsafeAdd(T elem)`
  Appends without checking capacity. **Reserve first.**
  
         It saves only the capacity check. With inlining on, `add` inlines as well, keeping just
         the `grow()` call on its rare full path: in the 3.0.0 client an appending loop costs about
         78 ns per element with `add` and 70 ns with this, without stack traces.
  
         The precondition is not a formality. The backing store is one array shared by every list,
         each holding a section of it, so writing past this list's capacity does not overflow into
         nothing - it silently overwrites whatever another list is keeping there. Call
         `reserve(size + count)` first, and only append that many.
  
         Intended for a caller which already knows how many elements it is about to add, such as a
         query copying out a result whose size it was told up front. Prefer `add` everywhere else.
- `addAll(ArrayList<T> other)`
  Adds all elements from another list
- `reserve(int needed)`
  Ensures capacity for at least the given number of elements, moving the
         section at most once instead of once per doubling.
  
         Public so a caller which knows its final size can pay one capacity check for a whole batch
         rather than one per element, which is also the precondition `unsafeAdd` needs.
- `get(int index) returns T`
  Returns the element at the specified index (O(1))
- `set(int index, T elem)`
  Sets the element at the specified index (O(1))
- `op_index(int index) returns T`
  Reads the element at the given index via the [] operator (O(1)).
         Note: for tuple element types use get()/set() instead - the [] operator on
         tuple-typed lists currently hits a compiler limitation.
- `op_indexAssign(int index, T value)`
  Writes the element at the given index via the [] operator (O(1)).
         See op_index for the tuple element-type caveat.
- `indexOf(T elem) returns int`
  Returns the index of the specified element or -1 if it doesn't exist (O(n))
- `has(T elem) returns boolean`
  Returns whether the list contains the specified element (O(n))
- `removeAtOrdered(int index) returns T`
  Removes the element at the given index and returns it, shifting the
         remaining elements left to preserve order (O(n))
- `removeAt(int index) returns T`
  ⚠️ _Deprecated. This operation shifts elements, consider using #removeAtUnordered if order is not important._
  Removes the element at the given index and returns it (O(n) - shifts elements)
- `removeAtUnordered(int index) returns T`
  Removes the element at the given index by swapping with last element (O(1) - DOES NOT PRESERVE ORDER!)
- `remove(T elem) returns bool`
  ⚠️ _Deprecated. This operation shifts elements, consider using #removeUnordered if order is not important._
  Removes the first occurrence of the element from the list (O(n))
- `removeUnordered(T elem) returns bool`
  Removes the first occurrence of the element from the list (O(n))
- `size() returns int`
  Returns the size of the list (O(1))
- `isEmpty() returns boolean`
  Checks whether this list is empty (O(1))
- `getFirst() returns T`
  Returns the first element in the list, or null if empty (O(1))
- `getLast() returns T`
  Returns the last element in the list, or null if empty (O(1))
- `clear()`
  Clears all elements from the list (reuse this list instead of creating new ones!).
         O(1) on Jass; O(n) on Lua, where the slots are nulled so the GC can reclaim them.
- `reset()`
  Resets the logical size while retaining both capacity and old slot references (O(1)).
  
         This is intended for hot scratch-list reuse, where subsequent writes replace the stale
         slots and the caller accepts that values remain GC-reachable up to the list's historical
         high-water mark. Use #clear when releasing those references matters.
- `truncate(int newSize)`
  Drops everything past the given size, keeping capacity (O(1)).
  
         Like `reset`, this leaves the dropped slots holding their references until they are
         overwritten or `clear` is called - which is what makes it O(1).
- `copy() returns ArrayList<T>`
  Returns a shallow copy of this list
- `replace(T whichElement, T newElement) returns boolean`
  Replaces the first occurrence of 'whichElement' with 'newElement'
- `getRandomElement() returns T`
  Returns a random element from this list or null if empty
- `push(T elem)`
  Adds an element to the end of the list (stack push)
- `pop() returns T`
  Returns and removes the last added element (LIFO)
- `peek() returns T`
  Returns the lastly added element without removing it, or null if empty
- `enqueue(T elem)`
  Adds an element to the end (queue enqueue)
- `dequeue() returns T`
  Returns and removes the first element (FIFO) - WARNING: O(n) operation!
- `addtoStart(T elem)`
  Adds element at the beginning of the list - WARNING: O(n) operation!
- `addAt(T elem, int index)`
  Adds the given element at the given index - WARNING: O(n) operation!
- `removeIf(ArrayListPredicate<T> predicate)`
  Removes elements that satisfy the predicate (O(n), preserves order).
         If order is not important, use #removeUnorderedIf
- `removeUnorderedIf(ArrayListPredicate<T> predicate)`
  Removes elements that satisfy the predicate (O(n), does NOT preserve order)
- `forEach(ALItrClosure<T> itr) returns ArrayList<T>`
  Executes the closure for each element
- `updateAll(ArrayListUpdater<T> f)`
  Updates all elements
- `map<Q:>(MapClosure<T, Q> itr) returns ArrayList<Q>`
  Returns the list obtained by applying the given closure to each element
- `filter(ArrayListPredicate<T> predicate) returns ArrayList<T>`
  Returns a new list of elements that satisfy the predicate.
  
         Deliberately NOT presized to this list's size. The result shares the
         per-type store with the source, so reserving `size` up front would need
         2 * size slots at once and hit JASS_MAX_ARRAY_SIZE for any source
         holding more than half the store - even when a selective predicate
         matches only a handful of elements. Growth is amortised O(n) anyway.
  
         If you do not need to keep the original, prefer #removeIf, which filters
         in place and needs no second section at all.
- `foldl<Q:>(Q startValue, FoldClosure<T, Q> predicate) returns Q`
  Folds this list into a single value of type Q
- `find(ArrayListPredicate<T> predicate) returns T`
  Returns the first element that satisfies the predicate, or null if none present
- `shuffle()`
  Performs a Fisher-Yates shuffle on this list
- `sortWith(Comparator<T> comparator)`
  Sorts the list using optimized quicksort with median-of-three pivot.
         Unlike the other higher-order methods, the comparator is NOT destroyed so it
         can be reused; destroy it yourself if it was allocated for a single sort.

## Interfaces

### ArrayListPredicate

```wurst
public interface ArrayListPredicate<T:>
```

**Members:**

- `isTrueFor(T t) returns boolean`

### ALItrClosure

```wurst
public interface ALItrClosure<T:>
```

**Members:**

- `run(T t)`

### ArrayListUpdater

```wurst
public interface ArrayListUpdater<T:>
```

**Members:**

- `update(T t) returns T`

### MapClosure

```wurst
public interface MapClosure<T:, Q:>
```

**Members:**

- `run(T t) returns Q`

### FoldClosure

```wurst
public interface FoldClosure<T:, Q:>
```

**Members:**

- `run(T t, Q q) returns Q`

### Comparator

```wurst
public interface Comparator<T:>
```

**Members:**

- `compare(T o1, T o2) returns int`

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

## Constants

### intComparator

```wurst
public constant Comparator<int> intComparator = (i1, i2) -> i1 < i2 ? -1 : (i1 > i2 ? 1 : 0)
```

### realComparator

```wurst
public constant Comparator<real> realComparator = (r1, r2) -> r1 < r2 ? -1 : (r1 > r2 ? 1 : 0)
```

### stringComparator

```wurst
public constant Comparator<string> stringComparator = (s1, s2) -> stringCompare(s1, s2)
```
