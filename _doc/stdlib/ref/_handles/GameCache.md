---
title: GameCache
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/GameCache.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/GameCache.wurst)**

**Re-exports:** `Vectors`

## Extension Functions

### gamecache.save

```wurst
public function gamecache.save() returns boolean
```

### gamecache.saveInt

```wurst
public function gamecache.saveInt(string missionKey, string key, int value)
```

### gamecache.saveReal

```wurst
public function gamecache.saveReal(string missionKey, string key, real value)
```

### gamecache.saveBoolean

```wurst
public function gamecache.saveBoolean(string missionKey, string key, boolean value)
```

### gamecache.saveUnit

```wurst
public function gamecache.saveUnit(string missionKey, string key, unit value)
```

### gamecache.saveString

```wurst
public function gamecache.saveString(string missionKey, string key, string value)
```

### gamecache.hasInt

```wurst
public function gamecache.hasInt(string missionKey, string key) returns boolean
```

### gamecache.hasReal

```wurst
public function gamecache.hasReal(string missionKey, string key) returns boolean
```

### gamecache.hasBoolean

```wurst
public function gamecache.hasBoolean(string missionKey, string key) returns boolean
```

### gamecache.hasUnit

```wurst
public function gamecache.hasUnit(string missionKey, string key) returns boolean
```

### gamecache.hasString

```wurst
public function gamecache.hasString(string missionKey, string key) returns boolean
```

### gamecache.flush

```wurst
public function gamecache.flush()
```

### gamecache.flushMission

```wurst
public function gamecache.flushMission(string missionKey)
```

### gamecache.flushInt

```wurst
public function gamecache.flushInt(string missionKey, string key)
```

### gamecache.flushReal

```wurst
public function gamecache.flushReal(string missionKey, string key)
```

### gamecache.flushBoolean

```wurst
public function gamecache.flushBoolean(string missionKey, string key)
```

### gamecache.flushUnit

```wurst
public function gamecache.flushUnit(string missionKey, string key)
```

### gamecache.flushString

```wurst
public function gamecache.flushString(string missionKey, string key)
```

### gamecache.loadInt

```wurst
public function gamecache.loadInt(string missionKey, string key) returns int
```

### gamecache.loadReal

```wurst
public function gamecache.loadReal(string missionKey, string key) returns real
```

### gamecache.loadBoolean

```wurst
public function gamecache.loadBoolean(string missionKey, string key) returns boolean
```

### gamecache.restoreUnit

```wurst
public function gamecache.restoreUnit(string missionKey, string key, player whichPlayer, vec2 pos, angle facing) returns unit
```

### gamecache.loadString

```wurst
public function gamecache.loadString(string missionKey, string key) returns string
```

### gamecache.syncInt

```wurst
public function gamecache.syncInt(string missionKey, string key)
```

### gamecache.syncReal

```wurst
public function gamecache.syncReal(string missionKey, string key)
```

### gamecache.syncBoolean

```wurst
public function gamecache.syncBoolean(string missionKey, string key)
```

### gamecache.syncUnit

```wurst
public function gamecache.syncUnit(string missionKey, string key)
```

### gamecache.syncString

```wurst
public function gamecache.syncString(string missionKey, string key)
```
