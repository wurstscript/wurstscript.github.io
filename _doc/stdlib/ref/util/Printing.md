---
title: Printing
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Printing.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Printing.wurst)**

## Classes

### Log

```wurst
public class Log
```

**Members:**

- `static function trace(string msg)`
  Prints a trace logmessage
- `static function debug(string msg)`
  Prints a debug logmessage
- `static function info(string msg)`
  Prints a info logmessage
- `static function warn(string msg)`
  Prints a warning logmessage
- `static function error(string msg)`
  Prints a warning logmessage
- `static function setLevel(Loglevel lvl)`

## Enums

### Loglevel

```wurst
public enum Loglevel
```

**Values:** `TRACE`, `DEBUG`, `INFO`, `WARNING`, `ERROR`

## Functions

### print

```wurst
public function print(string msg)
```

> 🔧 **Configurable.** Override it in your map's config package.

Prints a simple message.

### print

```wurst
public function print(int msg)
```

> 🔧 **Configurable.** Override it in your map's config package.

Prints a simple message.

### print

```wurst
public function print(real msg)
```

> 🔧 **Configurable.** Override it in your map's config package.

Prints a simple message.

### print

```wurst
public function print(bool msg)
```

> 🔧 **Configurable.** Override it in your map's config package.

Prints a simple message.

### printLog

```wurst
public function printLog(Loglevel loglvl, string msg)
```

> 🔧 **Configurable.** Override it in your map's config package.

Prints a special motification-message

### printLog

```wurst
public function printLog(player showTo, Loglevel loglvl, string msg)
```

> 🔧 **Configurable.** Override it in your map's config package.

### printTimed

```wurst
public function printTimed(string msg, real duration)
```

> 🔧 **Configurable.** Override it in your map's config package.

Prints a simple message that is shown for the given duration

### print

```wurst
public function print(string msg, real duration)
```

Prints a simple message that is shown for the given duration

### printTimedToPlayer

```wurst
public function printTimedToPlayer(string msg, real duration, player p)
```

> 🔧 **Configurable.** Override it in your map's config package.

Prints a simple message that is shown to the player for the given duration

### printTimedToPlayerClear

```wurst
public function printTimedToPlayerClear(string msg, real duration, player p)
```

Prints a simple message after clearing all messages that is shown to the player for the given duration

## Extension Functions

### Loglevel.getTag

```wurst
public function Loglevel.getTag() returns string
```

> 🔧 **Configurable.** Override it in your map's config package.

### player.print

```wurst
public function player.print(string msg, real duration)
```

Prints a timed message that is shown to the player for the given duration

### player.print

```wurst
public function player.print(string msg)
```

Prints a simple message that is shown to the player
