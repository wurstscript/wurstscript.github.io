---
title: ErrorHandling
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/ErrorHandling.wurst'
generated: true
toc: sections
curated: /stdlib/errorhandling
---

Told about every error() after it is reported, so a test runner or a map can record errors
	that do not stop the game: on Lua, error() returns instead of ending the thread. That includes
	errors inside try(), which run with suppressErrorMessages set; a listener that only wants
	uncaught errors reads it.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/ErrorHandling.wurst)**

> 📖 Read the **[detailed guide](/stdlib/errorhandling)** for hand-written examples and background.

**Re-exports:** `Printing`, `Real`, `Integer`, `String`, `MagicFunctions`

## Interfaces

### ErrorListener

```wurst
public interface ErrorListener
```

**Members:**

- `onError(string msg)`

## Functions

### addErrorListener

```wurst
public function addErrorListener(ErrorListener listener)
```

Adds a listener that every later error() calls with its message. An error raised inside a
	listener is reported as usual, but no listener hears it, so a failing listener cannot recurse.

	error() also runs in local code, for example a check under `if localPlayer == p`, and then the
	listeners run on that client only. A listener must not change synchronized state there: no
	handles, no gameplay changes, no random numbers.

	The dispatch runs each listener through ForForce, like execute() in package Execute, whose
	documentation reports that such a dispatch reached from local code, outside another execute()
	thread, desyncs. It allocates no handle, but that report is not disproven, so treat any
	registered listener as a desync risk in multiplayer: register listeners where that cannot
	matter, such as single-player test runs.

	A map that configures its own error() has to call notifyErrorListeners(msg) from it, or
	listeners are never told.

### notifyErrorListeners

```wurst
public function notifyErrorListeners(string msg)
```

Tells every error listener about msg and leaves msg in lastError. The default error() calls it;
	a configured error() calls it too, before it ends the thread.

### error

```wurst
public function error(string msg)
```

> 🔧 **Configurable.** Override it in your map's config package.

error handing function.
This function is used by libraries and for internal Wurst errors like
accessing a null-pointer. Overwrite this function to customize error handling.

Outputs an error message and terminates the current thread.
There is a compiler flag to augment the error messages with stack traces.
Error messages can also be disabled.

Errors are only displayed once every MUTE_ERROR_DURATION seconds.
To achieve this, the hash of the string is saved in a hashtable together with a timestamp.

You can also use try() from package Execute to handle an error happening in a callback.

A configured replacement should call notifyErrorListeners(msg), so error listeners still hear it.
