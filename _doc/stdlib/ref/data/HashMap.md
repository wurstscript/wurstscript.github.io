---
title: HashMap
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - collection
  - data
  - map
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/HashMap.wurst'
generated: true
curated: /stdlib/hash_map
---

Generic Table Wrapper

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/HashMap.wurst)**

> 📖 Read the **[detailed guide](/stdlib/hash_map)** for hand-written examples and background.

**Re-exports:** `TypeCasting`, `Table`

## Classes

### HashMap

```wurst
public class HashMap<K,V> extends Table
```

**Members:**

- `has(K key) returns boolean`
  Whether a value exists under the given key or not
- `put(K key, V value)`
  Saves the given value under the given key
- `get(K key) returns V`
  Retrieves the value saved under the given key
- `remove(K key)`
  Removes the value saved under the given key
- `getAndRemove(K key) returns V`
  Retrieves the value saved under the given key and removes it
- `size() returns int`
- `override function flush()`

### IterableMap

```wurst
public class IterableMap<K,V> extends HashMap<K, V>
```

Iterable generic Table Wrapper

**Members:**

- `construct()`
- `construct(thistype base)`
  Create a new map by copying all elements from another list into it
- `override function put(K key, V value)`
  Saves the given value under the given key
- `override function remove(K key)`
  Removes the key-value pair saved under the given key
- `override function flush()`
  Remove all data from this map
- `override function getAndRemove(K key) returns V`
  Retrieves the value saved under the given key and removes it
- `iterator() returns HLIterator<K>`
  Returns an iterator that iterates over the map's keys
- `hasKey(K key) returns bool`
  Returns whether this map uses the given key
- `removeValue(V val, bool all)`
  Removes either a single occurence or all occurences from of the value from the map
- `addAll(IterableMap<K, V> map)`
  Copies all elements from another map into this one
  		Use with caution, since it will replace elements that were under the same key!
- `copy() returns IterableMap<K, V>`
  Returns a shallow copy of this map
- `override function size() returns int`
  Returns the length of this IterableMap *
- `forEach(IMItrClosure<K, V> itr) returns IterableMap<K, V>`
  Executes the closure for each key-value pair

## Interfaces

### IMItrClosure

```wurst
public interface IMItrClosure<K, V>
```

**Members:**

- `run(K key, V value)`
