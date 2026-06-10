---
title: Group
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Group.wurst'
generated: true
---

Use this group for your non-nested group enum calls
	and then iterate through the group via **for from** or
	clear the group after use

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Group.wurst)**

## Extension Functions

### group.enumUnitsInRange

```wurst
public function group.enumUnitsInRange(vec2 pos, real range)
```

### group.enumUnitsInRange

```wurst
public function group.enumUnitsInRange(vec2 pos, real range, boolexpr filter)
```

### group.enumUnitsInRect

```wurst
public function group.enumUnitsInRect(rect rec)
```

### group.enumUnitsInRect

```wurst
public function group.enumUnitsInRect(rect rec, boolexpr filter)
```

### group.enumUnitsSelected

```wurst
public function group.enumUnitsSelected(player p, boolexpr filter)
```

### group.enumUnitsOfPlayer

```wurst
public function group.enumUnitsOfPlayer(player p, boolexpr filter)
```

### group.enumUnitsOfType

```wurst
public function group.enumUnitsOfType(string unitname, boolexpr filter)
```

### group.enumUnitsOfType

```wurst
public function group.enumUnitsOfType(int id, boolexpr filter)
```

### group.enumUnitsAll

```wurst
public function group.enumUnitsAll(boolexpr filter)
```

### group.clear

```wurst
public function group.clear()
```

### group.add

```wurst
public function group.add(vararg unit units) returns int
```

Returns the number of added units.

### group.remove

```wurst
public function group.remove(vararg unit units) returns int
```

Retruns the number of removed units.

### group.destr

```wurst
public function group.destr()
```

### group.has

```wurst
public function group.has(unit u) returns bool
```

### group.size

```wurst
public function group.size() returns int
```

### group.isEmpty

```wurst
public function group.isEmpty() returns bool
```

### group.getRandom

```wurst
public function group.getRandom() returns unit
```

Returns a random unit from this group without removing it
	or null if the group is empty

### group.immediateOrder

```wurst
public function group.immediateOrder(string order) returns bool
```

### group.immediateOrderById

```wurst
public function group.immediateOrderById(int order) returns bool
```

### group.pointOrder

```wurst
public function group.pointOrder(string order, vec2 point) returns bool
```

### group.pointOrderById

```wurst
public function group.pointOrderById(int order, vec2 point) returns bool
```

### group.targetOrder

```wurst
public function group.targetOrder(string order, widget targetWidget) returns bool
```

### group.targetOrder

```wurst
public function group.targetOrder(int order, widget targetWidget) returns bool
```

### group.add

```wurst
public function group.add(vararg group groups) returns int
```

### group.remove

```wurst
public function group.remove(vararg group groups) returns int
```

### group.get

```wurst
public function group.get(int index) returns unit
```

### group.iterator

```wurst
public function group.iterator() returns GroupIterator
```

Creates a new iterator for this group.

### group.hasNext

```wurst
public function group.hasNext() returns bool
```

Returns whether the iterator has the next item

### group.next

```wurst
public function group.next() returns unit
```

Returns the next item from the iterator

### group.close

```wurst
public function group.close()
```

Closes the iterator, releaseing the group

### group.forGroup

```wurst
public function group.forGroup(code callback)
```

## Constants

### ENUM_GROUP

```wurst
public constant ENUM_GROUP = CreateGroup()
```
