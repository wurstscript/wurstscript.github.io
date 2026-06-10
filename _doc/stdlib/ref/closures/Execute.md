---
title: Execute
layout: stdlibref
category: closures
categoryLabel: Closures
tags:
  - closures
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/Execute.wurst'
generated: true
curated: /stdlib/execute
---

This package exposes a single function execute(),
the primary use of which is to reset the OP limit.
*

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/Execute.wurst)**

> 📖 Read the **[detailed guide](/stdlib/execute)** for hand-written examples and background.

## Interfaces

### ForForceCallback

```wurst
public interface ForForceCallback
```

**Members:**

- `run()`

## Functions

### execute

```wurst
public function execute(ForForceCallback c)
```

This function starts a new 'thread' inside the
callback closure, where the op limit is at zero, allowing us to bypass it.
This is extremely useful when you have expensive computations
which would otherwise crash the thread.

If the callback crashes due to an error or hitting the OP limit, it will
error out as well.

Note: Unlike timers and doAfter(), this method is synchronous, meaning
that it will wait for the called method to finish before continuing the in the current thread.

Note: We use ForForce because it does not require a Trigger to be called, only an empty
force which is reusable, unlike TriggerEvaluate.

Note: You may use this inside a local clause, like this:
	if localPlayer == caller
		execute(...)
But be warned that this will cause a desync, unless you are
calling this from within another execute(...) clause.

This will desync:
	// code called by a trigger
	if localPlayer == caller
		execute()
This will not desync:
	execute() ->
		// do some stuff here

		if localPlayer == caller
			execute(...)

*

### try

```wurst
public function try(ForForceCallback c) returns boolean
```

This function works exactly the same as execute(), with
the only difference that it will allow you to inspect
an error if one occured.

If an error occured, the return value will be false.

If the error is caused by error(), then you can inspect
the error message using lastError from ErrorHandling.
If the error is caused by another form of thread crash,
such as zero division or OP limit, lastError will be empty.

The error will also be suppressed from being printed.
*

### executeWhile

```wurst
public function executeWhile(int resetCount, LimitedExecuteCondition condition, LimitedExecuteAction action)
```

This is a utility function which you can use to process arbitrarily large loops.
It functions like a while loop that will run action.run() while condition.check() == true,
however it will reset the OP limit each time after the specified amount of resetCount.
*
