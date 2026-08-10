---
title: FileIO
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/FileIO.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/FileIO.wurst)**

**Re-exports:** `ChunkedString`

## Classes

### File

```wurst
public class File
```

**Members:**

- `construct(string filename)`
- `write(player p, string content)`
- `write(player p, ChunkedString buffer)`
- `close()`
- `read(player p) returns ChunkedString`
  Reads the file's contents. Only the given player actually reads from
  		disk; every other client gets an empty ChunkedString, so the result is
  		not synchronised - see the desync warning at the top of this package.
- `readAsString(player p) returns string`
  Reads the file's contents as one string. Not synchronised - see read().

## Constants

### CHUNKS_PER_FILE

```wurst
public constant CHUNKS_PER_FILE = 64
```

> 🔧 **Configurable.** Override it in your map's config package.

### FILE_IO_ABIL_ID

```wurst
public constant FILE_IO_ABIL_ID = '$wsl'
```

> 🔧 **Configurable.** Override it in your map's config package.

### FILE_IO_ABIL_ID_STR

```wurst
public constant FILE_IO_ABIL_ID_STR = FILE_IO_ABIL_ID.toRawCode()
```
