---
title: UnitIndexer
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - indexing
  - util
  - wc3-quirk
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/UnitIndexer.wurst'
generated: true
---

Returns the int index of this unit.
	Can be configured by the user to supply a custom unit indexer which won't break
	other stdlib components.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/UnitIndexer.wurst)**

## Classes

### UnitIndex

```wurst
public class UnitIndex
```

**Members:**

- `getUnit() returns unit`
- `getIndex() returns int`
- `construct(unit whichUnit)`

## Functions

### shouldIndex

```wurst
public function shouldIndex(unit _u) returns boolean
```

> 🔧 **Configurable.** Override it in your map's config package.

### getIndexingUnit

```wurst
public function getIndexingUnit() returns unit
```

Returns the currently indexing unit.
That's the last indexed unit or
the one about to be deindexed.

### onUnitDeindex

```wurst
public function onUnitDeindex(code func)
```

Adds a function to be called before a unit is deindexed.
	Use the getIndexingUnit() function to refer to the deindexing unit.

### onUnitIndex

```wurst
public function onUnitIndex(code func)
```

Adds a function to be called after a unit is indexed.
	Use the getIndexingUnit() function to refer to the indexed unit.

## Extension Functions

### unit.getIndex

```wurst
public function unit.getIndex() returns int
```

> 🔧 **Configurable.** Override it in your map's config package.

### unit.toUnitIndex

```wurst
public function unit.toUnitIndex() returns UnitIndex
```

> 🔧 **Configurable.** Override it in your map's config package.

Returns the UnitIndex associated with this unit, creating a new one if necessary.

### unit.deindex

```wurst
public function unit.deindex() returns bool
```

Deindexes a unit.
	Returns whether the unit was originally indexed.
