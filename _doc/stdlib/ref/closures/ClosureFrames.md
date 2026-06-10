---
title: ClosureFrames
layout: stdlibref
category: closures
categoryLabel: Closures
tags:
  - closures
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/ClosureFrames.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/ClosureFrames.wurst)**

## Classes

### FrameHandleListener

```wurst
public abstract class FrameHandleListener
```

## Extension Functions

### framehandle.onCheckboxCheck

```wurst
public function framehandle.onCheckboxCheck(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onCheckboxUncheck

```wurst
public function framehandle.onCheckboxUncheck(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onClick

```wurst
public function framehandle.onClick(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onClickReleaseFocus

```wurst
public function framehandle.onClickReleaseFocus() returns FrameHandleListener
```

Registers a click listener that releases keyboard focus for the triggering player.
   Use this for buttons and editboxes that would otherwise keep Warcraft III hotkeys focused on the frame.

### framehandle.onDialogAccept

```wurst
public function framehandle.onDialogAccept(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onDialogCancel

```wurst
public function framehandle.onDialogCancel(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onEditboxEnter

```wurst
public function framehandle.onEditboxEnter(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onEditboxChange

```wurst
public function framehandle.onEditboxChange(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onMouseDoubleClick

```wurst
public function framehandle.onMouseDoubleClick(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onMouseDown

```wurst
public function framehandle.onMouseDown(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onMouseEnter

```wurst
public function framehandle.onMouseEnter(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onMouseLeave

```wurst
public function framehandle.onMouseLeave(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onMouseUp

```wurst
public function framehandle.onMouseUp(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onMouseWheel

```wurst
public function framehandle.onMouseWheel(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onPopupMenuItemChange

```wurst
public function framehandle.onPopupMenuItemChange(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onSliderValueChange

```wurst
public function framehandle.onSliderValueChange(FrameHandleListener listener) returns FrameHandleListener
```

### framehandle.onSpriteAnimUpdate

```wurst
public function framehandle.onSpriteAnimUpdate(FrameHandleListener listener) returns FrameHandleListener
```
