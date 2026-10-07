---
title: KeyedMap
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - data
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/KeyedMap.wurst'
generated: true
toc: sections
---

Typed value intrinsic used by FastKeyedMap. Keep the name distinct from keyedMapPut: the legacy
fixed signature must remain unambiguous for existing callers. Lua lowers this to one raw table
store; Jass specializes int and class values to the existing integer fallback.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/KeyedMap.wurst)**

## Classes

### FastKeyedMap

```wurst
public class FastKeyedMap<K: handle, V:>
```

High-performance map for handle keys and native int or class-reference values.
Jass uses Warcraft's hashtable; Lua uses a native table keyed by the handle itself and stores V
directly, without boxing.

This deliberately narrow API avoids key hashing and handle-id conversions on Lua. It is not a
general-purpose replacement for HashMap: only handle keys are accepted, keys are not iterable,
and there is no size counter. Use remove() for absence; reference values must be non-null because
Lua represents nil as a missing table entry. Keep class-reference values alive while stored, and
remove or replace them before destroy: Jass stores their integer object IDs, which can be reused,
while Lua keeps the original reference. The same holds for keys: remove a key's entry before you
destroy that handle. Jass stores the entry under the handle id, which Warcraft hands to a later
handle, so the new handle would read the old value; Lua would keep the destroyed handle referenced.
This requires the compiler's keyed-map intrinsic lowering.
The intrinsic source bodies fail loudly if a compiler understands the generic declarations but
lacks that lowering; they never silently discard writes or return defaults.

**Members:**

- `construct()`
- `put(K key, V value)`
  Stores a value. Null keys are ignored; reference values should not be null.
- `get(K key) returns V`
  Returns the value or the Wurst default for V when the key is absent.
- `has(K key) returns boolean`
  Returns whether the key has a stored value.
- `remove(K key)`
  Removes a key and its value.

## Functions

### keyedMapCreate

```wurst
public function keyedMapCreate() returns int
```

Creates an empty map. Free it with keyedMapDestroy when it is no longer needed.

### keyedMapPut

```wurst
public function keyedMapPut(int map, handle key, int value)
```

Stores value under key. A null key stores nothing.

### keyedMapGetInt

```wurst
public function keyedMapGetInt(int map, handle key) returns int
```

The value stored under key, or 0 when there is none.

### keyedMapPutNative

```wurst
public function keyedMapPutNative<K: handle, V:>(int map, K key, V value)
```

### keyedMapGetNative

```wurst
public function keyedMapGetNative<K: handle, V:>(int map, K key) returns V
```

Typed get paired with keyedMapPutNative.

### keyedMapHas

```wurst
public function keyedMapHas(int map, handle key) returns boolean
```

Whether a value is stored under key.

### keyedMapRemove

```wurst
public function keyedMapRemove(int map, handle key)
```

Removes the value stored under key, if any.

### keyedMapDestroy

```wurst
public function keyedMapDestroy(int map)
```

Frees the map. Lua lowering clears its backing table in place, even if an alias still references it.
