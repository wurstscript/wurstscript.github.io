---
title: FramehandleNames
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/assets/FramehandleNames.wurst'
generated: true
---

These default frames templates can be created with createFrame(..) [BlzCreateFrame]

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/assets/FramehandleNames.wurst)**

## Classes

### FramehandleTypeNames

```wurst
public class FramehandleTypeNames
```

These are the default base frame types, to be used as typeName for createFrameByType(..) [BlzCreateFrameByType] 
	or inside of the frame definition files (fdf)

### FramehandleDefaultNames

```wurst
public class FramehandleDefaultNames
```

These default frames can be obtained with getFrameByName(..) [BlzGetFrameByName]
	(the createContext (subframe-id) parameter is by default 0, some frames does contain subframes)

**Members:**

- `static function commandButton(int index) returns string`
  Name of a command card button, index 0 to 11 (1.32+): 0 is the top-left (0,0) button, 11 the
  		bottom-right (3,2). Move/hide via these named frames, not ORIGIN_FRAME_COMMAND_BUTTON (moving
  		the origin frames glitches in 1.32+). NOTE: command buttons reappear/update on every unit
  		selection, even while hidden via BlzHideOriginFrames - re-hide on selection if needed.
- `static function inventoryButton(int index) returns string`
  Name of an inventory item button, index 0 to 5 (1.32+). Move/hide via these named frames, not
  		ORIGIN_FRAME_ITEM_BUTTON (moving the origin frames glitches in 1.32+). NOTE: like command
  		buttons, they reappear/update on every unit selection.

### FramehandleNames

```wurst
public class FramehandleNames
```
