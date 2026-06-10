---
title: ClosureTimers
layout: stdlibref
category: closures
categoryLabel: Closures
tags:
  - closure
  - closures
  - timer
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/ClosureTimers.wurst'
generated: true
curated: /stdlib/closure_timers
---

Execute an action after a certain time.
	The callback object is automatically destroyed.
	Must be used on a timer acquired with `getTimer()`

	Example use:
```wurst
	someTimer.doAfter(10.0) ->
	 print("10 seconds later")
```

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/ClosureTimers.wurst)**

> 📖 Read the **[detailed guide](/stdlib/closure_timers)** for hand-written examples and background.

## Classes

### CallbackSingle

```wurst
public abstract class CallbackSingle
```

**Members:**

- `abstract function call()`
- `getRemaining() returns real`

### CallbackPeriodic

```wurst
public abstract class CallbackPeriodic
```

**Members:**

- `abstract function call(thistype cb)`

### CallbackCounted

```wurst
public abstract class CallbackCounted
```

**Members:**

- `abstract function call(thistype cb)`
- `isLast() returns boolean`
- `getCount() returns int`
- `progress() returns real`
  Returns a value between 0 and 1.
- `stop()`
- `callAndCount()`

## Interfaces

### Callback

```wurst
public interface Callback
```

**Members:**

- `call()`

## Functions

### doAfter

```wurst
public function doAfter(real timeToWait, CallbackSingle cb) returns CallbackSingle
```

Execute an action after a certain time.
	The callback object is automatically destroyed.

	Example use:
```wurst
	doAfter(10.0) ->
	 print("10 seconds later")
```

### doAfterWithDialogue

```wurst
public function doAfterWithDialogue(real timeToWait, string titleText, Callback cb) returns CallbackSingle
```

Execute an action after a certain time.
	The timer is accompanied by a visible timerdialog with the title text provided.
	The callback object is automatically destroyed.

	Example use:
```wurst
	doAfterWithDialogue(10.0, "Respawn in") ->
	 hero.revive()
	 print("10 seconds later")
```

### nullTimer

```wurst
public function nullTimer(CallbackSingle cb) returns CallbackSingle
```

Execute an action with a 0-second timer delay.
	The callback object is destroyed afterwards.

### doPeriodically

```wurst
public function doPeriodically(real time, CallbackPeriodic cb) returns CallbackPeriodic
```

Execute an action periodically.
	The callback has to be destroyed manually.

	Example use:
```wurst
	doPeriodically(0.5) cb ->
	 if i > 10
		destroy cb
```

### doPeriodicallyCounted

```wurst
public function doPeriodicallyCounted(real time, int callAmount, CallbackCounted cb) returns CallbackCounted
```

execute an action periodically, with a limited amount of calls
	The callback object is destroyed after the action has been executed callAmount times.

	Example use:
```wurst
	doPeriodicallyCounted(0.5, 100) cb ->
	 doSomething()
```

### doPeriodicallyTimed

```wurst
public function doPeriodicallyTimed(real interval, real timerDuration, CallbackCounted cb) returns CallbackCounted
```

execute an action periodically, with a limited duration
	The callback object is destroyed afterwards.

	Example use:
```wurst
	doPeriodicallyCounted(0.5, 10.) ->
	 doSomething()
```

## Extension Functions

### timer.doAfter

```wurst
public function timer.doAfter(real timeToWait, CallbackSingle cb) returns CallbackSingle
```

### timer.doPeriodically

```wurst
public function timer.doPeriodically(real time, CallbackPeriodic cb) returns CallbackPeriodic
```

Execute an action periodically.
	The callback has to be destroyed manually.
	Must be used on a timer acquired with `getTimer()`

	Example use:
```wurst
	someTimer.doPeriodically(0.5) cb ->
	 if i > 10
		destroy cb
```

### timer.doPeriodicallyCounted

```wurst
public function timer.doPeriodicallyCounted(real time, int callAmount, CallbackCounted cb) returns CallbackCounted
```

execute an action periodically, with a limited amount of calls
	The callback object is destroyed after the action has been executed callAmount times.
	Must be used on a timer acquired with `getTimer()`

	Example use:
```wurst
	someTimer.doPeriodicallyCounted(0.5, 100) cb ->
	 doSomething()
```

### timer.doPeriodicallyTimed

```wurst
public function timer.doPeriodicallyTimed(real interval, real timerDuration, CallbackCounted cb) returns CallbackCounted
```

execute an action periodically, with a limited duration
	The callback object is destroyed afterwards.
	Must be used on a timer acquired with `getTimer()`

	Example use:
```wurst
	someTimer.doPeriodicallyCounted(0.5, 10.) ->
	 doSomething()
```
