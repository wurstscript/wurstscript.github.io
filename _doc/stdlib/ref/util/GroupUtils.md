---
title: GroupUtils
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/GroupUtils.wurst'
generated: true
toc: sections
---

The max number of recyclable groups. Even if this number is reached,
	the system will create new groups on following requests, but they won't be recyclable.
	The maximum number for this setting is JASS_MAX_ARRAY_SIZE - 1.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/GroupUtils.wurst)**

## Functions

### getGroup

```wurst
public function getGroup() returns group
```

Returns a reusable group from the GroupUtils stack is possible.
	Creates new groups if none are found on the reusable stack.
	If that is not possible, returns a non-recyclable group and displays a warning.

## Extension Functions

### group.release

```wurst
public function group.release()
```

Recycles a group if it is created through GroupUtils, otherwise just destroys it.
	Doesn't affect ENUM_GROUP.

### group.recyclableIterator

```wurst
public function group.recyclableIterator() returns group
```

Copies this group's units into a freshly acquired recyclable group and
	returns it, so the copy can be iterated while the original is modified.
	The caller owns the result and must call .release() on it.

	Not re-entrant: the copy is staged through a single package global, so this
	must not be called again from inside an iteration over its own result.

### group.getClosestUnit

```wurst
public function group.getClosestUnit(vec2 pos) returns unit
```

Returns the closest unit in this group to the given position.
	Returns null if the group is empty.

### group.filterAliveUnits

```wurst
public function group.filterAliveUnits(unit mustBeEnemyOf, int ownerId) returns group
```

Filters this group to include only alive units, optionally filtering by allegiance and owner.
	mustBeEnemyOf: If not null, only units that are enemies of this unit are kept. Pass null to ignore allegiance.
	ownerId: If not -1, only units owned by this player ID are kept. Pass -1 to ignore owner.

## Constants

### GROUP_NUMBER_LIMIT

```wurst
constant GROUP_NUMBER_LIMIT = 1024
```

> 🔧 **Configurable.** Override it in your map's config package.

### NEED_CREATE_GROUPS

```wurst
constant NEED_CREATE_GROUPS = 64
```

> 🔧 **Configurable.** Override it in your map's config package.

The number of groups created when more are needed

### START_CREATE_GROUPS

```wurst
constant START_CREATE_GROUPS = 64
```

> 🔧 **Configurable.** Override it in your map's config package.

The number of groups created at start
