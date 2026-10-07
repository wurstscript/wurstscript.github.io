---
title: Base64
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/Base64.wurst'
generated: true
toc: sections
---

Specifies how many characters to encode per a single `execute()` call.
This value has been tuned to work under all optimization settings and
with stacktraces included.
*

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/Base64.wurst)**

## Classes

### Base64Encoder

```wurst
public class Base64Encoder
```

**Members:**

- `construct()`
- `construct(int maxChunkLength)`
- `writeByte(int n)`
  Writes an unsigned byte to be serialized into Base64.
- `writeShort(int n)`
  Writes an unsigned short to be serialized into Base64.
- `writeInt(int n)`
  Writes a signed integer to be serialized into Base64.
- `write(ByteBuffer data)`
  Writes all bytes from the buffer to be serialized into Base64.
- `consume(ByteBuffer data)`
  Writes all bytes from the buffer to be serialized into Base64 and destroys the buffer.
- `intoData() returns ChunkedString`
  Consumes this encoder and returns the encoded data as a ChunkedString.

### Base64Decoder

```wurst
public class Base64Decoder
```

**Members:**

- `append(string data)`
  Appends a part of the Base64-encoded data.
- `append(ChunkedString data)`
  Appends a part of the Base64-encoded data.
- `consume(ChunkedString data)`
  Appends a part of the Base64-encoded data and destroys it.
- `intoData() returns ByteBuffer`
  Consumes this decoder and returns the decoded data as a ByteBuffer. *

## Extension Functions

### ByteBuffer.encodeBase64

```wurst
public function ByteBuffer.encodeBase64() returns ChunkedString
```

Encodes the bytes in this buffer to a string according to the Base64 format.

### ChunkedString.decodeBase64

```wurst
public function ChunkedString.decodeBase64() returns ByteBuffer
```

Decodes the bytes encoded into this string according to the Base64 format.

### string.decodeBase64

```wurst
public function string.decodeBase64() returns ByteBuffer
```

Decodes the bytes encoded into this string according to the Base64 format.

## Constants

### ENCODES_PER_ROUND

```wurst
public constant ENCODES_PER_ROUND = 1000
```

> 🔧 **Configurable.** Override it in your map's config package.

### DECODES_PER_ROUND

```wurst
public constant DECODES_PER_ROUND = 25
```

> 🔧 **Configurable.** Override it in your map's config package.

Specifies how many chunks to decode per a single `execute()` call.
This value has been tuned to work under all optimization settings and
with stacktraces included.
*
