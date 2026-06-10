---
title: Reference
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/Reference.wurst'
generated: true
---

A simple wrapper class which contains a reference to a value of the given type.
The main usage is to wrap primitives to modify them inside closures.

```wurst
function limited_sum(LinkedList someList) returns real
	let dist_ref = reference(0.)
	someList.for_each() (real elem) ->
		if dist_ref.val < 500
			dist_ref.val += elem
	// Destroy the reference and use the contained value.
	return dist_ref.into()
```

Make sure to destroy references if you don't need them anymore.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/primitives/Reference.wurst)**

## Classes

### Reference

```wurst
public class Reference<T:>
```

**Members:**

- `construct(T val)`
- `into() returns T`
  Consumes the reference, destroying it and returning the contained value.

## Functions

### reference

```wurst
public function reference<T:>(T val) returns Reference<T>
```
