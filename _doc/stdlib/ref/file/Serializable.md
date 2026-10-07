---
title: Serializable
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/Serializable.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/Serializable.wurst)**

## Classes

### Serializable

```wurst
public abstract class Serializable
```

**Members:**

- `addProperty(string name, int value)`
- `addProperty(string name, real value)`
- `addProperty(string name, string value)`
- `getIntProperty(string name) returns int`
- `getRealProperty(string name) returns real`
- `getStringProperty(string name) returns string`
- `serialize() returns ChunkedString`
  ⚠️ _Deprecated. Use FieldSerializable with SerializableFields from StructuredSerialization for new save formats._
- `padHash() returns string`
- `deserialize(ChunkedString input)`
  ⚠️ _Deprecated. Use FieldSerializable with SerializableFields from StructuredSerialization for new save formats._
- `abstract function serializeProperties()`
- `abstract function deserializeProperties()`
