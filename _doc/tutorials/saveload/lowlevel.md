---
title: Low level API
sections:
- Motivation
- FileIO
- SyncSimple
---

## Motivation

Sometimes you might not want to use the high level API, because you don't require the features, e.g. syncing in Singleplayer or you want to just use a certain new component.

## FileIO

Read a file

```wurst
let fileContent = new File("MyFileName.pld").readAsString()
```

Write a file

```wurst
new File("MyFileName.pld")..write("MyContent")..close()
```

## SyncSimple

Sync a string:
```wurst
myString.sync() (synced) ->
	Log.info("string synced: " + synced.getUnsafeString())
```

Sync a ChunkedString:
```wurst
myChunkedString.sync() (synced) ->
	while synced.hasChunk()
		Log.info("chunked string synced: " + synced.readChunk())
```


