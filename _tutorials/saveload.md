---
title: Save and Load
excerpt: Learn how to use Wurst's codeless save and load API
date: 2021-12-04
icon:
  type: fa
  name: fa-save
color: blue
layout: doc
---

## Welcome

The standard library comes with an easy to use API to save, load and sync player data.
Import the `SaveLoadData` package to use the following code examples.

## Behind the scenes

Internally the save load packages make use of the preload exploit, which is now officially endorsed by blizzard to save and load files from the `CustomMapData` folder in your Warcraft III Document root.
Data loaded from a specific player is therefore only loaded on that player's machine and needs to be synchronized with all other players before it can be used in a synchronous environment.
Wurst wraps all this behind a simple API, so you don't need to worry about the details.

## Save Data

To save data for a specific player, simplye invoke `saveData` with the data you want to save.
Existing file contents will be overriden.
Since saving does not require synchronizing, it is a simple, blocking operation.

```wurst
function savePlayerData()
	players[0].saveData("MyFileName", "someDataString")
```

This will save `someDataString` into the file `MyFileName.pld` in the CustomMapData folder.

## Load Data

To load data for a specific player, invoke the `loadData` function with the same file name you used to save.
Because loading does require synchronizing, `loadData` expects a closure as second parameter which will be invoked once the loading and synchronizing has finished.
Loading may also fail if the file is empty, corrupted, or the player disconnects during loading - so you should always check the `status` parameter for validity first.
If the status is `SUCCESS`, the `data` parameter will contain the synchronized version of the file's contents, which you can immediately use in a synchronous context.

```wurst
function loadPlayerData()
	players[0].loadData("MyFileName") (status, data) ->
		if status == LoadStatus.SUCCESS
			Log.info("Loaded: " + data.getUnsafeString())
		else
			// some error handling
```

## Limitations and Chunking

As you can see we used `.getUnsafeString()` in the example above. It is unsafe because the maximum length of a `string` in Jass is capped at 1024 bytes without and 4099 characters with concatenation. This would not only limit how much data we can load/save, but also complicate the usage in general.
1024 bytes also doesn't equal to 1024 characters, because certain characters (unicode) take up more than 1 byte.

Thus it is generally recommended to use a `ChunkedString` for any data above around 500 characters. The `ChunkedString` splits big strings into smaller chunks, which can then be acceessed seperately. The save functions are overloaded to allow string or ChunkedString input.

## Motivation

Of course usually we don't want to save just strings, but data that is stored in some object.
For this purpose there is the `Serializable` class for simple saving and loading of primitive attribute values.
The `serialize()` function returns a `ChunkedString`, which then can be passed to the data save function from above.

## Compiler-assisted field mapping

For small, dedicated state classes, Wurst can generate the repetitive field mapping for you. Import
`MagicFunctions`, then use `forFields` when writing fields and `mapFields` when reading them:

```wurst
import MagicFunctions

class PlayerState
    int level = 1
    string name = ""

    function save(FieldWriter writer)
        forFields((fieldName, value) -> writer.write(fieldName, value))

    function load(FieldReader reader)
        mapFields((fieldName, value) -> reader.read(fieldName, value))
```

The callback receives the field name as a `string` and the current field value. The compiler expands these
calls into ordinary direct field accesses, so there is no runtime reflection or metadata lookup. The same
source works for both Jass and Lua.

`forFields` is for statement callbacks. It includes accessible non-static fields, including inherited,
module-injected, readonly, and constant state. `mapFields` uses the callback result to assign each field, so the
reader should return the value to store; readonly and constant fields are therefore excluded from mapping. Leave
both callback parameter types inferred and use a reader/writer overload for each field type. Module field keys are
qualified when equal names need disambiguation.

The explicit-target forms work outside the state class and evaluate the target exactly once:

```wurst
forFields(state, (fieldName, value) -> writer.write(fieldName, value))
mapFields(state, (fieldName, value) -> reader.read(fieldName, value))
```

For a generic load wrapper, `newInstance<T>()` constructs the specialized concrete class through its normal
accessible zero-argument constructor:

```wurst
function loadState<T:>(FieldReader reader) returns T
    let state = newInstance<T>()
    mapFields(state, (fieldName, oldValue) -> reader.read(fieldName, oldValue))
    return state
```

This works for Jass and Lua without runtime reflection, a type registry, or a type-id switch. `T` must resolve to a
concrete, non-abstract class with an accessible zero-argument constructor. Keep state classes focused on data and
keep the persistence codec, schema versioning, validation, and migrations separate from construction and field
mapping. Applicable ordinary visible overloads named `forFields`, `mapFields`, or `newInstance` still resolve
normally. Keep the generic loader as a free function: on Lua, a method cannot currently combine type parameters
from its generic owning class with additional type parameters declared by the method itself. Do not call
`newInstance<T>()` from a generic class constructor; construct the state in the loader and initialize nested state
explicitly afterward.


## Usage

Import `Serializable`, make your data class extend `Serializable` and implement the required functions.

```wurst
import Serializable

class MyClass extends Serializable
    var amount = 0

    override function serializeProperties()

    override function deserializeProperties()
```

### Saving Attributes

Inside the `serializeProperties` register all attributes that should be serialized using `addProperty`.

```wurst
override function serializeProperties()
    addProperty("amount", amount)
```

### Loading attributes

Every serialized attribute should also be deserialized again in the `deserializeProperties` function using the appropriate `getXXProperty` function and assigned to the attribute.
Make sure to use the same name used for saving.

```wurst
override function deserializeProperties()
    amount = getIntProperty("amount")
```

### Serializing

Serialize the data class object to a `ChunkedString` using `serialize`. You can pass this chunked string directly to the save functions from above.

```wurst
let saveData = new MyClass()
saveData.amount = 1337
let result = saveData.serialize()
```

### Deserializing

To load from a `ChunkedString`, which could be obtained by loading using the function above, use `deserialize`.

```wurst
let loadedData = new MyClass()
loadedData.deserialize(inputChunkedString)
```

## Complete Example

Find a full working example below. The first time you run the map a new save file will be created saving the value `1337` in the `amount` attribute.
The second time you run the map it will load the existing save file and assign `1337` to the loaded object's `amount` variable, which is printed on the screen.

```wurst
package SerTest
import Serializable
import SaveLoadData
import ClosureTimers

constant FILE_NAME = "MyFileName"

class MyClass extends Serializable
    var amount = 0

    override function serializeProperties()
        addProperty("amount", amount)

    override function deserializeProperties()
        amount = getIntProperty("amount")

init
    doAfter(1.) ->
        players[0].loadData(FILE_NAME) (status, data) ->
            if status == LoadStatus.SUCCESS
                let loadedData = new MyClass()..deserialize(data)
                print("loaded: " + loadedData.amount.toString())
            else
                let saveData = new MyClass()
                saveData.amount = 1337
                let saveString = saveData.serialize()
                players[0].saveData(FILE_NAME, saveString)
                print("created new save file")

```
