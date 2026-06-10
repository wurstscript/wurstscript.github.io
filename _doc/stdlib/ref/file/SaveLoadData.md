---
title: SaveLoadData
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/SaveLoadData.wurst'
generated: true
---

Asynchronously loads the data from the file of the given player
	and then synchronizes it with all other players.
	The listener will be invoked with the synced data string.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/SaveLoadData.wurst)**

**Re-exports:** `FileIO`

## Interfaces

### LoadListener

```wurst
public interface LoadListener
```

**Members:**

- `onLoad(LoadStatus status, ChunkedString data)`

## Enums

### LoadStatus

```wurst
public enum LoadStatus
```

**Values:** `SUCCESS`, `FAIL_PLAYER_OFFLINE`, `FAIL_FILE_EMPTY`, `FAIL_CANT_READ`

## Extension Functions

### LoadStatus.toString

```wurst
public function LoadStatus.toString() returns string
```

### LoadStatus.isFail

```wurst
public function LoadStatus.isFail() returns boolean
```

### player.saveData

```wurst
public function player.saveData(string slotName, string data)
```

Blockingly saves the given data string for the given player.

### player.saveData

```wurst
public function player.saveData(string slotName, ChunkedString data)
```

Blockingly saves the given data string for the given player.

### player.loadData

```wurst
public function player.loadData(string slotName, LoadListener listener)
```

## Constants

### READ_FILES_IN_REPLAYS

```wurst
public constant READ_FILES_IN_REPLAYS = false
```

> 🔧 **Configurable.** Override it in your map's config package.
