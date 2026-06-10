---
title: ByteBuffer
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/ByteBuffer.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/ByteBuffer.wurst)**

## Classes

### ByteBuffer

```wurst
public class ByteBuffer
```

**Members:**

- `writeByteUnsafe(int n)`
  Writes an unsigned byte into the buffer.
     You must be sure that the provided integer is in the range [0, 255].
- `writeShortUnsafe(int n)`
  Writes an unsigned short into the buffer.
     You must be sure that the provided integer is in the range [0, 65535].
- `writeByte(int n)`
  Writes an unsigned byte into the buffer.
- `writeShort(int n)`
  Writes an unsigned short into the buffer.
- `writeInt(int n)`
  Writes a signed integer into the buffer.
- `hasByte() returns bool`
- `readByte() returns int`
  Reads a single unsigned byte from this buffer. The returned value will be in the range [0, 255]. *
- `readShort() returns int`
  Reads a single unsigned short from this buffer. The returned value will be in the range [0, 65535]. *
- `readInt() returns int`
  Reads a single signed integer from this buffer. *
- `resetRead()`
- `getInt(int i) returns int`
- `getIntCount() returns int`
- `size() returns int`
  Returns the number of bytes in the buffer. *
- `getByte(int i) returns int`
- `truncate(int size)`
  Assures that the number of bytes is not bigger than the provided one. 
  		If it is, throws bytes from the end of the buffer away 
  		so that the number of bytes in the buffer will be exactly the provided one. 
  	
  		Should not be used when reading from the buffer.
