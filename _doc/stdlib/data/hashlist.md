---
title: Hash List
sections:
- Intro
- Basic Usage
- Hash Set
---

### Intro

A hash list is very similar to a linked list, but as the name suggests, it's backed by a hashtable. In most cases you should use `LinkedList` [instead](https://wurstlang.org/stdlib/linked_list) as it's faster in most operations. The main benefits of a hash list compared to a linked list are O(1) access to and contains checks for elements. This only really starts to matter with bigger lists. Hash lists can also have a bigger amount of maximum elements, since their entries dont consume an object.

### Basic Usage

Just like most other data structures, `HashList<T>` is generic, with `T` being the type of the elements you want to save.

```wurst
@Test function testList()
	let list = new HashList<int>
	list.add(1, 2, 3, 4, 5)
	// Contains check
	list.hash(5).assertTrue()
	// Get
	let entry = list.get(2)
```
See [Linked List](https://wurstlang.org/stdlib/linked_list) for more list examples.

### Hash Set

A hash set is a hashlist which may only contain each element once.

```wurst
@Test function testList()
	let hset = new HashSet<int>
	hset.add(1, 2, 2, 4, 4)
	// Size check
	hset.size().assertEquals(3)
	// Get
	hset.get(2).assertEquals(4)
```
