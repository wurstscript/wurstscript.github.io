---
title: StructuredSerializationCore
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/StructuredSerializationCore.wurst'
generated: true
toc: sections
---

Default integrity key for structured saves. Override this in map configuration with a private,
map-specific value. It is intended to deter edited player save codes, not provide cryptographic
authentication against somebody who can inspect the map script.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/StructuredSerializationCore.wurst)**

## Classes

### FieldSerializationWriter

```wurst
public class FieldSerializationWriter
```

Builds one compact, versioned structured-save envelope.

**Members:**

- `construct(int schemaVersion)`
- `construct(int schemaVersion, int integrityKey)`
- `writeRaw(string name, string token, string payload)`
  Writes a future-compatible raw field. Custom token values should be one ASCII byte.
- `writeRaw(string name, string token, ChunkedString payload)`
  Writes a raw field without flattening its chunked payload. The caller retains ownership.
- `write(string name, int value)`
- `write(string name, real value)`
- `write(string name, string value)`
- `write(string name, boolean value)`
- `getIntegrityKey() returns int`
- `write(string name, FieldSerializable value)`
  Recursively writes an opted-in non-null class instance.
- `writeObject(string name, FieldSerializationWriter child)`
  Writes and consumes a child writer as a nested class or tuple envelope.
- `finish() returns ChunkedString`
  Completes the envelope. The returned value belongs to the caller.

### FieldSerializationReader

```wurst
public class FieldSerializationReader
```

Parsed field table. Unknown fields and wire tokens are retained and safely skippable.

**Members:**

- `construct()`
- `construct(ChunkedString input)`
- `construct(ChunkedString input, int integrityKey)`
- `isValid() returns boolean`
- `getSchemaVersion() returns int`
- `getIntegrityKey() returns int`
- `hasField(string name) returns boolean`
- `hasRaw(string name, string token) returns boolean`
- `readRaw(string name, string token, string oldValue) returns string`
- `readRawChunked(string name, string token) returns ChunkedString`
  Returns an independent chunked copy of a raw payload, or `null` when the field/token is absent.
  The caller owns and must destroy the returned value.
- `read(string name, int oldValue) returns int`
- `read(string name, real oldValue) returns real`
- `read(string name, string oldValue) returns string`
- `read(string name, boolean oldValue) returns boolean`
- `setRaw(string name, string token, string payload)`
  Replaces or creates a decoded field during migration.
- `set(string name, int value)`
- `set(string name, real value)`
- `set(string name, string value)`
- `set(string name, boolean value)`
- `removeField(string name)`
- `readInto(string name, FieldSerializable oldValue) returns boolean`
  Mutates an existing opted-in child object when a valid nested envelope is present.
- `readObject(string name) returns FieldSerializationReader`
  Returns a nested reader borrowed from this reader, or an invalid reader when absent.
- `renameField(string oldName, string newName)`
  Moves a persisted value from an old field name to a new one. Call this from a migration before
  field mapping. Existing data under the new name wins, making repeated migrations idempotent.

## Interfaces

### SerializationMigration

```wurst
public interface SerializationMigration
```

A parsed migration hook. Hooks are invoked but not destroyed by `deserialize`.

**Members:**

- `migrate(FieldSerializationReader reader)`

### FieldSerializable

```wurst
public interface FieldSerializable
```

Opt-in contract used for recursively serialized class fields.

**Members:**

- `writeSerializedFields(FieldSerializationWriter writer)`
- `readSerializedFields(FieldSerializationReader reader)`
- `readSerializedField(FieldSerializationReader reader, string name) returns thistype`

## Functions

### serializationFieldId

```wurst
public function serializationFieldId(string name) returns int
```

Returns the stable, case-sensitive numeric ID used for a persisted field name.

## Extension Functions

### int.readSerializedField

```wurst
public function int.readSerializedField(FieldSerializationReader reader, string name) returns int
```

Type-directed field readers used by the compiler-expanded mapper.

### real.readSerializedField

```wurst
public function real.readSerializedField(FieldSerializationReader reader, string name) returns real
```

### string.readSerializedField

```wurst
public function string.readSerializedField(FieldSerializationReader reader, string name) returns string
```

### boolean.readSerializedField

```wurst
public function boolean.readSerializedField(FieldSerializationReader reader, string name) returns boolean
```

## Constants

### SERIALIZATION_FORMAT_VERSION

```wurst
public constant SERIALIZATION_FORMAT_VERSION = 2
```

Current tagged serialization wire format.

### SERIALIZATION_INTEGRITY_KEY

```wurst
public constant SERIALIZATION_INTEGRITY_KEY = 0x6D2B79F5
```

> 🔧 **Configurable.** Override it in your map's config package.

### SERIALIZATION_REAL_DECIMALS

```wurst
public constant SERIALIZATION_REAL_DECIMALS = 6
```

> 🔧 **Configurable.** Override it in your map's config package.

Decimal places retained for Jass `real` values. Trailing zeroes are removed on the wire.
