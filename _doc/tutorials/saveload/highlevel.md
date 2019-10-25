---
title: High level API
sections:
- Welcome
- Behind the scenes
- Save Data
- Load Data
- Limitations and Chunking
---

## Welcome

The standard library comes with an easy to use API to save, load and sync player data.
Import the `SaveLoadData` package to use the following code examples.

## Behind the scenes

Internally the save load packages make use of the preload exploit, which is now officially endorsed by blizzard to save and load files from the CustomMapData folder in your Warcraft III Document root.
Data loaded from a specific player is therefore only loaded on that player's machine and needs to be synchronized with all other players before it can be used in a synchronous environment.
Wurst wraps all this behind a simple API, so you don't need to worry about the details.

## Save Data

To save data for a specific player, simplye invoke `saveData` with the data you want to save.
Existing file contents will be overriden.
Since saving does not require syning, it is the simpler operation.

```wurst
init
	players[0].saveData("MyFileName", "someDataString")
```

This will save `someDataString` into the file `MyFileName.pld` in the CustomMapData folder.

## Load Data

To load data for a specific player, invoke the `loadData` function with the same file name you used to save.
Because loading does require syncing, `loadData` expect a closure as second parameter which will be invoked once the loading and syncing has finished.
Loading may also fail if the file is empty or corrupted, so you should check the `status` parameter for validity.
If the status is `SUCCESS`, the `data` parameter will contain the synced version of the file's contents, which you can immediately use in a synchronous context.

```wurst
init
	players[0].loadData("MyFileName") (status, data) ->
		if status == LoadStatus.SUCCESS
			Log.info("Loaded: " + data.readStringUnsafe())
		else
			// some error handling
```

## Limitations and Chunking

As you can see we used `.readStringUnsafe()` in the example above. It is unsafe because the maximum length of a `string` in Jass is capped at 1024 bytes without and 4099 characters with concatenation. This would not only limit how much data we can load/save, but also complicate the usage in general.
1024 bytes also doesn't equal to 1024 characters, because certain characters (unicode) take up more than 1 byte.

Thus it is generally recommended to use a `ChunkedString` for any data above around 500 characters. The `ChunkedString` splits big strings into smaller chunks, which can then be acceessed seperately. The save functions are overloaded to allow string or ChunkedString input.
