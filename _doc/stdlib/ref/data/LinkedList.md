---
title: LinkedList
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - collection
  - data
  - list
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/LinkedList.wurst'
generated: true
curated: /stdlib/linked_list
---

Doubly-linked list implementation that implements all common list, stack and queue operations.
Permits all elements (including null).
Use the Typecasting package if you require lists of warcraft handles.
LinkedLists should be generally used anywhere you need a list, because they are the most versatile
and fast in common operations. If you need faster contains or access operations on big lists,
use HashList. If you want to limit each element's occurance to one, consider HashSet.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/LinkedList.wurst)**

> 📖 Read the **[detailed guide](/stdlib/linked_list)** for hand-written examples and background.

## Classes

### LinkedList

```wurst
public class LinkedList<T>
```

**Members:**

- `construct(thistype base)`
  Creates a new list by copying all elements from another list into it
- `construct()`
  Creates a new empty list
- `add(vararg T elems)`
  Adds one or more elements to the end of the list (top of stack, beginning of queue)
- `addAll(LinkedList<T> elems)`
  Adds all elements from elems to the end of this list
- `splice(LinkedList<T> other)`
  Adds all elements from the other list to the end of this list and removes them from the provided list.
  
  		It does not add/remove elements internally, only the internal pointers of the list nodes are re-pointed.
  		The other list will be empty, but not destroyed.
- `get(int index) returns T`
  Returns the element at the specified index
- `indexOf(T t) returns int`
  Returns the index of the specified element or -1 is it doesn't exist
- `set(int index, T elem)`
  Sets the element at the specified index
- `push(T elem)`
  Adds an element to the end of the list (top of stack, beginning of queue)
- `getFirst() returns T`
  Returns the first element in the list
- `getLast() returns T`
  Returns the last element in the list
- `dequeue() returns T`
  Returns and removes the first added Element (FIFO)
- `pop() returns T`
  Returns and removes the last added Element (LIFO)
- `peek() returns T`
  Returns the lastly added Element
- `has(T elem) returns boolean`
  Returns whether the lists contains the specified element
- `removeAt(int index) returns T`
  Removes the element and it's entry at the given index
- `remove(T elem) returns bool`
  Removes the first occurence of t from this list.
  		Returns true if an element was removed from the list.
- `size() returns int`
  gets the size of the list (java-compat wrapper)
- `isEmpty() returns boolean`
  checks whether this list is empty
- `copy() returns LinkedList<T>`
  Returns a shallow copy of this list
- `staticItr() returns LLIterator<T>`
  get the static iterator for this list
- `staticBackItr() returns LLBackIterator<T>`
  get the static back iterator for this list
- `iterator() returns LLIterator<T>`
  get an iterator for this list
- `backiterator() returns LLBackIterator<T>`
  get a backiterator for this list
- `enqueue(T elem)`
  adds an element to the beginning of the list
- `addtoStart(T elem)`
  adds an element to the beginning of the list
- `replace(T whichElement, T newElement) returns boolean`
  replaces the first occurence of 'whichElement' with 'newElement'
  		returns true when an element has been replaced,
  		false if 'whichelement' is not contained in the list
- `removeIf(LinkedListPredicate<T> predicate)`
  Removes the element if the predicates returns true
- `forEach(LLItrClosure<T> itr) returns LinkedList<T>`
  Executes the closure for each element
- `updateAll(LinkedListUpdater<T> f)`
  Updates all elements
- `shuffle()`
  Performs a Fisher–Yates shuffle on this list
- `getRandomElement() returns T`
  Returns a random element from this list or null, if empty
- `addAt(T elem, int index)`
  Adds the given element directly behind the element at the given index
- `sortWith(Comparator<T> comparator)`
  Sorts the list according the the comparator using merge sort
- `map<Q>(MapClosure<T, Q> itr) returns LinkedList<Q>`
  Returns the list obtained by applying the given closure to each element of the original list
- `filter(LinkedListPredicate<T> predicate) returns LinkedList<T>`
  Returns a new list of the elements that satisfy the predicate
- `foldl<Q>(Q startValue, FoldClosure<T, Q> predicate) returns Q`
  'Folds' this list into a single value of type Q
  		Example int-list sum: `list.foldl<int>(0, (i, q) -> q + i)`
- `find(LinkedListPredicate<T> predicate) returns T`
  Returns the first element that satisfies the predicate, or null if none present
- `toString() returns string`
  Prints the content of the list
- `clear()`
  Removes all elements from the list

### LLIterator

```wurst
public class LLIterator<T>
```

**Members:**

- `construct(LinkedList<T> parent)`
- `construct(LinkedList<T> parent, bool destroyOnClose)`
- `reset()`
- `remove() returns T`
  Removes from the list the last element that was returned by next() (optional operation).
  	 	This call can only be made once per call to next
- `modify(T newval)`
  Modifies the last element that was returned by next() (optional operation).
- `hasNext() returns boolean`
- `next() returns T`
- `lookahead() returns T`
- `previous() returns T`
- `addBefore(T elem)`
  Adds an element before the currently iterated element
- `close()`

### LLBackIterator

```wurst
public class LLBackIterator<T>
```

**Members:**

- `construct(LinkedList<T> parent, bool destroyOnClose)`
- `construct(LinkedList<T> parent)`
- `reset()`
- `modify(T newval)`
  Modifies the last element that was returned by next() (optional operation).
- `hasNext() returns boolean`
- `next() returns T`
- `lookahead() returns T`
- `addBefore(T elem)`
  Adds an element before the currently iterated element
- `close()`

## Interfaces

### LinkedListPredicate

```wurst
public interface LinkedListPredicate<T>
```

**Members:**

- `isTrueFor(T t) returns boolean`

### LLItrClosure

```wurst
public interface LLItrClosure<T>
```

**Members:**

- `run(T t)`

### LinkedListUpdater

```wurst
public interface LinkedListUpdater<T>
```

**Members:**

- `update(T t) returns T`

### MapClosure

```wurst
public interface MapClosure<T, Q>
```

**Members:**

- `run(T t) returns Q`

### FoldClosure

```wurst
public interface FoldClosure<T, Q>
```

**Members:**

- `run(T t, Q q) returns Q`

### Comparator

```wurst
public interface Comparator<T>
```

**Members:**

- `compare(T o1, T o2) returns int`

## Functions

### asList

```wurst
public function asList<T>(vararg T ts) returns LinkedList<T>
```

## Extension Functions

### LinkedList<real>.sort

```wurst
public function LinkedList<real>.sort()
```

### LinkedList<int>.sort

```wurst
public function LinkedList<int>.sort()
```

### LinkedList<string>.sort

```wurst
public function LinkedList<string>.sort()
```

### group.asList

```wurst
public function group.asList() returns LinkedList<unit>
```

### LinkedList<string>.joinBy

```wurst
public function LinkedList<string>.joinBy(string separator) returns string
```

Joins elements from a string list into one string using a separator

### LinkedList<T>.joinBy

```wurst
public function LinkedList<T>.joinBy<T>(ToStringClosure<T> cls, string separator) returns string
```

### LinkedList<string>.join

```wurst
public function LinkedList<string>.join() returns string
```

Joins elements from a string list into one string
