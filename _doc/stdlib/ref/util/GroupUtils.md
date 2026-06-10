---
title: GroupUtils
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/GroupUtils.wurst'
generated: true
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
