---
title: OnUnitEnterLeave
layout: stdlibref
category: event
categoryLabel: Events
tags:
  - event
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/OnUnitEnterLeave.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/OnUnitEnterLeave.wurst)**

## Functions

### getEnterLeaveUnit

```wurst
public function getEnterLeaveUnit() returns unit
```

Returns the unit that caused the enter/leave event to happen

### onEnter

```wurst
public function onEnter(code c)
```

Adds a callback that is run when a unit enters the map

### onLeave

```wurst
public function onLeave(code c)
```

Adds a callback that is run when a unit leaves the map
