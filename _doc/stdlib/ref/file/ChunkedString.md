---
title: ChunkedString
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/ChunkedString.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/ChunkedString.wurst)**

## Classes

### ChunkedString

```wurst
public class ChunkedString
```

**Members:**

- `construct()`
- `construct(int chunkSize)`
- `append(string pdata)`
- `hasChunk() returns boolean`
- `readChunk() returns string`
- `resetRead()`
- `getChunk(int index) returns string`
- `getChunkCount() returns int`
  Returns the number of chunks in the string. The buffer counts as one chunk
- `getChunkSize() returns int`
  Returns the length of every chunk in the string. The last chunk's size may be smaller than this number.
- `length() returns int`
  Calculates the length of the whole string.
- `getUnsafeString() returns string`
  Concatenates all chunks into one string.
  		This is unsafe because the chunked length might be
  		above the maximum allowed string length.
- `getUnsafeSubString(int startIndex, int endIndex) returns string`
  Concatenates all chunks required to return the requested substring.
  	This is unsafe because the chunked length might be
  	above the maximum allowed string length.

## Constants

### DEFAULT_CHUNK_SIZE

```wurst
public constant DEFAULT_CHUNK_SIZE = 200
```

> 🔧 **Configurable.** Override it in your map's config package.

Maximum length of one chunk
