---
title: Generic Hash Map
sections:
- Intro
- Basic Usage
- Other Examples
- Iterable Map
---

### Intro

A hash table, also known as hash map is a data structure that can map keys to values. It should be used instead of the `hashtable` type if you don't require two keys.
Unlike the Jass `hashtable` which exposes a wide amount of functions to load, save and remove values,
the `class HashMap<K, V>` is generic with `K` being the type of the key and `V` being the type of the value you want to save.

### Basic Usage

Due to its generic nature, the calls on the hashmap will be the same regardless of the types used.

```wurst
class A

class B

@Test function testMap()
	let map = new HashMap<A, B>
	let a = new A()
	let b = new B()
	// Add a value for the key. Existing values will be overriden
	map.put(a, b)
	// Check if the map contains a value associated with the key
	map.has(a).assertTrue()
	// Get a value
	let a2 = map.get(a)
	// Remove the entry
	map.remove(a)
	map.has(a).assertFalse()
```

### Other Examples

Using the `TypeCasting` package, which is imported by default, we can also use jass types for K and V.
For example attaching classes to units by using `unit` as key type and your class as value type.

```wurst
class SomeDataClass

let dataMap = new HashMap<unit, SomeDataClass>
```

### Iterable Map

Since a normal `HashMap` does not know it's entries, you cannot iterate over them.
For this case there is `IterableMap` which extends `HashMap` and combines it with a `HashList` storing the keys.
Via those keys you can then access your values.

```wurst
let iterMap = new IterableMap<int, int>
iterMap.put(0, 3)
iterMap.put(1, 2)
iterMap.put(2, 1)
iterMap.put(3, 0)

for key in iterMap
	let val = iterMap.get(key)
	Log.info("key: " +  key.toString() + " val: " + val.toString())
```
