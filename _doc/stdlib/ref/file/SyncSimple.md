---
title: SyncSimple
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/SyncSimple.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/SyncSimple.wurst)**

## Interfaces

### BoolSyncListener

```wurst
public interface BoolSyncListener
```

**Members:**

- `onDataSynced(bool data)`

### IntSyncListener

```wurst
public interface IntSyncListener
```

**Members:**

- `onDataSynced(int data)`

### RealSyncListener

```wurst
public interface RealSyncListener
```

**Members:**

- `onDataSynced(real data)`

### StringSyncListener

```wurst
public interface StringSyncListener
```

**Members:**

- `onDataSynced(string data)`

### BufferSyncListener

```wurst
public interface BufferSyncListener
```

**Members:**

- `onDataSynced(ChunkedString buffer)`

## Extension Functions

### bool.sync

```wurst
public function bool.sync(player p, BoolSyncListener listener)
```

Syncs a bool from the given player.

### int.sync

```wurst
public function int.sync(player p, IntSyncListener listener)
```

Syncs an int from the given player.

### real.sync

```wurst
public function real.sync(player p, RealSyncListener listener)
```

Syncs a real from the given player.

### string.sync

```wurst
public function string.sync(player p, StringSyncListener listener)
```

Syncs a single string from the given player.

### ChunkedString.sync

```wurst
public function ChunkedString.sync(player p, BufferSyncListener listener)
```

Syncs a chunked string from the given player.

## Constants

### DEFAULT_PREFIX

```wurst
public constant DEFAULT_PREFIX = "S"
```

> 🔧 **Configurable.** Override it in your map's config package.

### LAST_CHUNK_PREFIX

```wurst
public constant LAST_CHUNK_PREFIX = "T"
```

> 🔧 **Configurable.** Override it in your map's config package.

### SYNC_IN_REPLAYS

```wurst
public constant SYNC_IN_REPLAYS = false
```

> 🔧 **Configurable.** Override it in your map's config package.
