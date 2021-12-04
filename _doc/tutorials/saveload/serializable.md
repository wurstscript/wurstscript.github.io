---
title: Serializable
sections:
- Motivation
- Usage
- Complete Example
---

## Motivation

Of course usually we don't want to save just strings, but data that is stored in some object.
For this purpose there is the `Serializable` class for simple saving and loading of primitive attribute values.
The `serialize()` function returns a `ChunkedString`, which then can be passed to the data save function from above.


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
