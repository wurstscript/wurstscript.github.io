---
title: Force
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Force.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Force.wurst)**

## Interfaces

### ForceCallback

```wurst
public interface ForceCallback
```

**Members:**

- `run(player p)`

## Extension Functions

### force.destr

```wurst
public function force.destr()
```

### force.addPlayer

```wurst
public function force.addPlayer(player whichPlayer)
```

### force.addPlayers

```wurst
public function force.addPlayers(vararg player players)
```

### force.removePlayer

```wurst
public function force.removePlayer(player whichPlayer)
```

### force.removePlayers

```wurst
public function force.removePlayers(vararg player players)
```

### force.clear

```wurst
public function force.clear()
```

### force.enumPlayers

```wurst
public function force.enumPlayers(boolexpr filter)
```

### force.enumPlayersCounted

```wurst
public function force.enumPlayersCounted(boolexpr filter, int countLimit)
```

### force.enumAllies

```wurst
public function force.enumAllies(player whichPlayer, boolexpr filter)
```

### force.enumEnemies

```wurst
public function force.enumEnemies(player whichPlayer, boolexpr filter)
```

### force.forEach

```wurst
public function force.forEach(code callback)
```

Use with GetEnumPlayer()

### force.forEach

```wurst
public function force.forEach(ForceCallback callback)
```

Use with GetEnumPlayer()

### force.getRandomPlayer

```wurst
public function force.getRandomPlayer() returns player
```

### force.containsUnit

```wurst
public function force.containsUnit(unit whichUnit) returns boolean
```

### force.containsPlayer

```wurst
public function force.containsPlayer(player whichPlayer) returns boolean
```

### force.iterator

```wurst
public function force.iterator() returns force
```

Creates a new unordered iterator for this group.

### force.hasNext

```wurst
public function force.hasNext() returns boolean
```

Returns whether the iterator has the next item

### force.next

```wurst
public function force.next() returns player
```

Returns the next item from the iterator

### force.close

```wurst
public function force.close()
```

Closes the iterator, releaseing the group

### force.has

```wurst
public function force.has(player whichPlayer) returns boolean
```
