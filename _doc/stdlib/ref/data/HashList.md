---
title: HashList
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - collection
  - data
  - list
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/HashList.wurst'
generated: true
curated: /stdlib/hash_list
---

HashLists are used if you require quick contains operations
on a large list object. LinkedLists should be generally used, but are slow in this regard.
Removing elements from a HashList is slower than of LinkedLists.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/HashList.wurst)**

> 📖 Read the **[detailed guide](/stdlib/hash_list)** for hand-written examples and background.

## Classes

### HashList

```wurst
public class HashList<T>
```

**Members:**

- `construct()`
- `construct(thistype base)`
  Create a new list by copying all elements from another list into it
- `count(T elem) returns int`
  Returns the number of occurences of an element in this list
- `add(vararg T elems)`
  Add an element to the end of the list
- `set(int index, T elem)`
  Set an element at the given index.
  		If the index is higher than the list's size,
  		the list will be resized with null elements added between
  		the index and the previous size.
- `addAll(HashList<T> elems)`
  Add all elements from elems to this list
- `clear()`
  Remove all elements from this list without destroying it
- `removeAt(int index) returns T`
  Removes and returns the element at the given index
- `remove(T t) returns boolean`
  Removes the first occurence of t from this list.
  		Returns true if an element was removed from the list.
- `size() returns int`
  Get the size of the list
- `isEmpty() returns bool`
  Return whether the list is empty
- `get(int index) returns T`
  Get the element at the given index from this list
- `has(T elem) returns bool`
  Return whether the element exists in the list
- `hasAt(int index) returns bool`
  Return whether the element exists in the list
- `iterator() returns HLIterator<T>`
  Get an iterator for this list
- `copy() returns HashList<T>`
  Returns a shallow copy of this list
- `forEach(HLItrClosure<T> itr) returns HashList<T>`
  Executes the closure for each element
- `staticItr() returns HLIterator<T>`
  get the static iterator for this list
- `removeIf(RemovePredicate<T> predicate)`
  Removes the element if the predicates returns true
- `getRandomElement() returns T`

### HLIterator

```wurst
public class HLIterator<Q>
```

**Members:**

- `construct(HashList<Q> list)`
- `hasNext() returns boolean`
- `remove()`
- `next() returns Q`
- `reset()`
- `close()`

## Interfaces

### RemovePredicate

```wurst
public interface RemovePredicate<T>
```

**Members:**

- `shouldRemove(T element) returns boolean`

### HLItrClosure

```wurst
public interface HLItrClosure<T>
```

**Members:**

- `run(T t)`
