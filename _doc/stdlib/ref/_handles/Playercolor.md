---
title: Playercolor
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Playercolor.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Playercolor.wurst)**

## Extension Functions

### player.setColor

```wurst
public function player.setColor(playercolor color)
```

### player.getColor

```wurst
public function player.getColor() returns playercolor
```

### int.toPlayerColor

```wurst
public function int.toPlayerColor() returns playercolor
```

### playercolor.toInt

```wurst
public function playercolor.toInt() returns int
```

### playercolor.getPlayer

```wurst
public function playercolor.getPlayer() returns player
```

Returns the player that had this color *at the start of the game*. Does not
	respect SetPlayerColor.

### playercolor.getPlayers

```wurst
public function playercolor.getPlayers() returns force
```

Returns the players who are currently using this player color. Respects calls
	to SetPlayerColor

## Constants

### PLAYER_COLOR_BLACK_AGGRESSIVE

```wurst
public constant PLAYER_COLOR_BLACK_AGGRESSIVE = ConvertPlayerColor(24)
```

### PLAYER_COLOR_UNKNOWN1

```wurst
public constant PLAYER_COLOR_UNKNOWN1 = ConvertPlayerColor(25)
```

### PLAYER_COLOR_UNKNOWN2

```wurst
public constant PLAYER_COLOR_UNKNOWN2 = ConvertPlayerColor(26)
```

### PLAYER_COLOR_BLACK_PASSIVE

```wurst
public constant PLAYER_COLOR_BLACK_PASSIVE = ConvertPlayerColor(27)
```
