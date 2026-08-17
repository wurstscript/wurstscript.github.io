---
title: StructuredSerialization
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/StructuredSerialization.wurst'
generated: true
toc: sections
---

Standard tuple codecs.

Field names passed to these codecs are converted by `FieldSerializationWriter` to fixed-width
numeric IDs; names are not stored in the save string. Classes and tuples therefore use the same
wire representation and migration rules. The compiler does not derive persistence IDs from field
annotations; serialization metadata deliberately remains owned by this library.

Custom tuples need three overloads because tuples cannot implement `FieldSerializable`. The field
intrinsics keep the codec concise and support mixed component types through overload resolution:

```
tuple InventorySlot(int itemId, int charges)

public function FieldSerializationWriter.write(string name, InventorySlot value)
let child = new FieldSerializationWriter(1, this.getIntegrityKey())
wurstForFields(value, (fieldName, fieldValue) -> child.write(fieldName, fieldValue))
this.writeObject(name, child)

public function FieldSerializationReader.read(string name, InventorySlot oldValue) returns InventorySlot
let child = this.readObject(name)
var result = oldValue
if child.isValid()
	wurstMapFields(result, (fieldName, fieldValue) -> fieldValue.readSerializedField(child, fieldName))
destroy child
return result

public function InventorySlot.readSerializedField(FieldSerializationReader reader, string name) returns InventorySlot
return reader.read(name, this)

class InventoryState implements FieldSerializable
use FieldSerializableLifecycle
InventorySlot slot = InventorySlot(0, 0)

override function writeSerializedFields(FieldSerializationWriter writer)
	wurstForFields((fieldName, fieldValue) -> writer.write(fieldName, fieldValue))

override function readSerializedFields(FieldSerializationReader reader)
	wurstMapFields((fieldName, fieldValue) -> fieldValue.readSerializedField(reader, fieldName))
```

`SerializableFields` can automatically use codecs declared by `StructuredSerialization`. For
package-local codecs, use `FieldSerializableLifecycle` and keep the two intrinsic mapping methods
in the same package as the overloads, as above. Nested custom tuples then compose once each tuple
type provides the three overloads. Keep component names stable. For tuple-specific schema changes,
increment the child writer's schema version and call `child.renameField(oldName, newName)` before
`wurstMapFields` when reading older versions.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/StructuredSerialization.wurst)**

**Re-exports:** `StructuredSerializationCore`

## Modules

### FieldSerializableLifecycle

```wurst
public module FieldSerializableLifecycle
```

Shared typed lifecycle for `FieldSerializable` classes that provide their own field mapping.

Prefer `SerializableFields` when all field codecs come from `StructuredSerialization`. Use this
module when mapping fields in the class package is necessary, notably for package-local tuple
codecs. Implement `writeSerializedFields` and `readSerializedFields`; serialization, integrity,
migration, nested-object loading, and typed `load` remain provided here.

**Members:**

- `abstract function writeSerializedFields(FieldSerializationWriter writer)`
- `abstract function readSerializedFields(FieldSerializationReader reader)`
- `readSerializedField(FieldSerializationReader reader, string name) returns thistype`
- `serialize() returns ChunkedString`
- `serialize(int schemaVersion) returns ChunkedString`
- `serialize(int schemaVersion, int integrityKey) returns ChunkedString`
- `deserialize(ChunkedString input) returns boolean`
- `deserialize(ChunkedString input, int integrityKey) returns boolean`
- `deserialize(ChunkedString input, int integrityKey, SerializationMigration migration) returns boolean`
- `load(ChunkedString input) returns thistype`
  Loads valid data into this instance and returns it for concise construction and chaining.

### SerializableFieldMapping

```wurst
public module SerializableFieldMapping
```

Automatic field mapping without adding a second `serialize`/`deserialize` lifecycle.

Use this during a compatibility window when a data class still extends legacy `Serializable`, or
when another base class already owns lifecycle methods. The class must implement `FieldSerializable`.
All of its accessible mutable instance fields participate; keep runtime-only state in a separate
class because persisted-field annotation filtering is not available.

**Members:**

- `writeSerializedFields(FieldSerializationWriter writer)`
- `readSerializedFields(FieldSerializationReader reader)`
- `readSerializedField(FieldSerializationReader reader, string name) returns thistype`

### SerializableFields

```wurst
public module SerializableFields
```

Modern automatic serialization for dedicated state/DAO classes using built-in codecs.

Add `implements FieldSerializable` and `use SerializableFields`. The compiler expands field
iteration to direct accesses. The tagged format tolerates field reordering, added/removed fields,
and unknown future wire types. Missing fields retain constructor defaults. Use a schema version and
`SerializationMigration` for semantic changes or `renameField` for renamed attributes. For custom
tuple codecs declared in the consuming package, use `FieldSerializableLifecycle` as documented
above so overload resolution occurs where those codecs are visible. Classes that must also retain
legacy `Serializable` should use `SerializableFieldMapping` to avoid conflicting lifecycle methods.

**Members:**

- `override function writeSerializedFields(FieldSerializationWriter writer)`
- `override function readSerializedFields(FieldSerializationReader reader)`

## Extension Functions

### FieldSerializationWriter.write

```wurst
public function FieldSerializationWriter.write(string name, vec2 value)
```

### FieldSerializationReader.read

```wurst
public function FieldSerializationReader.read(string name, vec2 oldValue) returns vec2
```

### vec2.readSerializedField

```wurst
public function vec2.readSerializedField(FieldSerializationReader reader, string name) returns vec2
```

### FieldSerializationWriter.write

```wurst
public function FieldSerializationWriter.write(string name, vec3 value)
```

### FieldSerializationReader.read

```wurst
public function FieldSerializationReader.read(string name, vec3 oldValue) returns vec3
```

### vec3.readSerializedField

```wurst
public function vec3.readSerializedField(FieldSerializationReader reader, string name) returns vec3
```

### FieldSerializationWriter.write

```wurst
public function FieldSerializationWriter.write(string name, angle value)
```

### FieldSerializationReader.read

```wurst
public function FieldSerializationReader.read(string name, angle oldValue) returns angle
```

### angle.readSerializedField

```wurst
public function angle.readSerializedField(FieldSerializationReader reader, string name) returns angle
```

### FieldSerializationWriter.write

```wurst
public function FieldSerializationWriter.write(string name, color value)
```

### FieldSerializationReader.read

```wurst
public function FieldSerializationReader.read(string name, color oldValue) returns color
```

### color.readSerializedField

```wurst
public function color.readSerializedField(FieldSerializationReader reader, string name) returns color
```

### FieldSerializationWriter.write

```wurst
public function FieldSerializationWriter.write(string name, colorA value)
```

### FieldSerializationReader.read

```wurst
public function FieldSerializationReader.read(string name, colorA oldValue) returns colorA
```

### colorA.readSerializedField

```wurst
public function colorA.readSerializedField(FieldSerializationReader reader, string name) returns colorA
```

### FieldSerializationWriter.write

```wurst
public function FieldSerializationWriter.write(string name, colorHSV value)
```

### FieldSerializationReader.read

```wurst
public function FieldSerializationReader.read(string name, colorHSV oldValue) returns colorHSV
```

### colorHSV.readSerializedField

```wurst
public function colorHSV.readSerializedField(FieldSerializationReader reader, string name) returns colorHSV
```
