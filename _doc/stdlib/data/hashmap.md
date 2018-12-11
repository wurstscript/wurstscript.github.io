---
title: Generic Hash Map
sections:
- Intro
- Basic Usage
- Other Examples
---

### Intro

A hash table, also known as hash map is a data structure that can map keys to values. It should be used instead of the if you don't require two keys.
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
