---
title: MagicFunctions
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/MagicFunctions.wurst'
generated: true
---

builtin magic function.
Calls all functions with the given annotation, for example
`callFunctionsWithAnnotation("@initializeObject")`.
The called functions must not take any parameters.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/MagicFunctions.wurst)**

## Functions

### compileError

```wurst
public function compileError(string msg)
```

Stops compilation with the provided error message

### getMapName

```wurst
public function getMapName() returns string
```

Returns the map name from wurst.build file

### getBuildDate

```wurst
public function getBuildDate() returns string
```

Returns the build date in uuuu-MM-dd'T'HH:mm format

### isProductionBuild

```wurst
public function isProductionBuild() returns boolean
```

Returns true if the map is being built using the 'buildmap' command, false otherwise.

### getStackTraceString

```wurst
public function getStackTraceString() returns string
```

builtin function which returns a stack trace.
If stack traces are disabled, this function returns the empty string.

### callFunctionsWithAnnotation

```wurst
public function callFunctionsWithAnnotation(string _annotation)
```

### compiletime

```wurst
public function compiletime<T:>(T expr) returns T
```

This is a builtin magic function.
* It evaluates it's argument at compiletime and replaces the call with the result.

## Constants

### compiletime

```wurst
public constant compiletime = false
```

this is a magic constant.
It is always false at runtime and true during compiletime.

### isLua

```wurst
public constant isLua = false
```

This is a magic constant.
It is always false when compiling to Jass and true when compiling to Lua.
Use it to write backend-specific code paths.
