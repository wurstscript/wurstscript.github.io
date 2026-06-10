---
title: TimerUtils
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/TimerUtils.wurst'
generated: true
---

Get a new timer. Use this instead of "CreateTimer".
You can attach data to the timer with .setData and retrieve it with .getData
If you're done with the timer, release it with .release

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/TimerUtils.wurst)**

**Re-exports:** `Timer`

## Enums

### TimedLoopState

```wurst
public enum TimedLoopState
```

**Values:** `RUNNING`, `PAUSED`, `STOPPED`, `STOPPED_FOR_GOOD`

## Modules

### TimedLoop

```wurst
public module TimedLoop
```

**Members:**

- `abstract function onTimedLoop()`
- `getPeriod() returns real`
  Returns the period of the timed loop.
  		Ovewrite this to set a custom period
- `stopTimedLoop()`
  Stops the periodic update of this object.
- `stopTimedLoopAndDestroy()`
  Stops the periodic update and destroys the object.
- `startTimedLoop()`
  Starts the periodic updates for this object

## Functions

### getTimer

```wurst
public function getTimer() returns timer
```

## Extension Functions

### timer.setData

```wurst
public function timer.setData(int data)
```

Attach Data to this timer

### timer.getData

```wurst
public function timer.getData() returns int
```

Retrieve the data attached to this timer

### timer.release

```wurst
public function timer.release()
```

Release the timer. Use this instead of "DestroyTimer" !
