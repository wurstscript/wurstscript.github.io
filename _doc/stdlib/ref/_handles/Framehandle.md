---
title: Framehandle
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Framehandle.wurst'
generated: true
---

Returns the origin frame of the given type.
	Do not first-call frame handle getters inside GetLocalPlayer(); acquire/cache handles for all players first.
	For custom UI setup, prefer elapsed game time 0.00 or later.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Framehandle.wurst)**

## Functions

### getOriginFrame

```wurst
public function getOriginFrame(originframetype frameType) returns framehandle
```

### getOriginFrame

```wurst
public function getOriginFrame(originframetype frameType, integer index) returns framehandle
```

Returns the origin frame of the given type and index.
	Do not first-call frame handle getters inside GetLocalPlayer(); acquire/cache handles for all players first.
	For custom UI setup, prefer elapsed game time 0.00 or later.

### getFrame

```wurst
public function getFrame(string name, integer createContext) returns framehandle
```

Returns the framehandle of the given name and createContext index (children inherit the createContext value of their parent).
Do not first-call frame handle getters inside GetLocalPlayer(); acquire/cache handles for all players first.
For custom UI setup, prefer elapsed game time 0.00 or later.

### getFrame

```wurst
public function getFrame(string name) returns framehandle
```

Returns the framehandle of the given name.
Do not first-call frame handle getters inside GetLocalPlayer(); acquire/cache handles for all players first.
For custom UI setup, prefer elapsed game time 0.00 or later.

### createFrame

```wurst
public function createFrame(string name) returns framehandle
```

Creates a non simple frame of the given name (the name of the frame which must be defined in the imported fdf files).
	Do not create custom frames at map init; use elapsed game time 0.00 or later.
	Do not create frame handles only inside GetLocalPlayer(); create/cache them for all players first.

### createFrame

```wurst
public function createFrame(string name, framehandle owner, integer priority, integer createContext) returns framehandle
```

Creates a non simple frame:
		name: the name of the frame which must be defined in the imported fdf files.
		owner: the parent of the frame
		priority: unknown
		createContext: the unique id assigned to the frame and its children (useful for creating multiple frames of the same name)
	Do not create custom frames at map init; use elapsed game time 0.00 or later.
	Do not create frame handles only inside GetLocalPlayer(); create/cache them for all players first.

### createSimpleFrame

```wurst
public function createSimpleFrame(string name) returns framehandle
```

Creates a simple frame of the given name (the name of the frame which must be defined in the imported fdf files).
	Do not create custom frames at map init; use elapsed game time 0.00 or later.
	Do not create frame handles only inside GetLocalPlayer(); create/cache them for all players first.

### createSimpleFrame

```wurst
public function createSimpleFrame(string name, framehandle owner, integer createContext) returns framehandle
```

Creates a simple frame:
		name: the name of the frame which must be defined in the imported fdf files.
		owner: the parent of the frame
		createContext: the unique id assigned to the frame and its children (useful for creating multiple frames of the same name)
	Do not create custom frames at map init; use elapsed game time 0.00 or later.
	Do not create frame handles only inside GetLocalPlayer(); create/cache them for all players first.

### createFrame

```wurst
public function createFrame(string typeName, string name, framehandle owner, string inherits, integer createContext) returns framehandle
```

Creates a frame by type:
		typeName: the name of the type (e.g. "SIMPLEFRAME", "MENU", "BUTTON")
		name: the name of the created frame
		owner: the parent of the frame
		inherits: the name of the frame frome which the created frame will be inhereting (which must be defined in the imported .fdf files)
		createContext: the unique id assigned to the frame and its children (useful for creating multiple frames of the same name)
	Do not create custom frames at map init; use elapsed game time 0.00 or later.
	Do not create frame handles only inside GetLocalPlayer(); create/cache them for all players first.

### createBackdrop

```wurst
public function createBackdrop(string name, framehandle owner, integer createContext) returns framehandle
```

Creates a BACKDROP frame by type without requiring custom FDF.
	Use this for simple images, borders and background panels.

### createTextFrame

```wurst
public function createTextFrame(string name, framehandle owner, integer createContext) returns framehandle
```

Creates a TEXT frame by type without requiring custom FDF.

### createTextTooltip

```wurst
public function createTextTooltip(string name, framehandle owner, string text, integer createContext) returns framehandle
```

Creates a disabled TEXT tooltip frame by type without requiring custom FDF.
	After positioning the tooltip, call owner.setTooltip(tooltip).

### createGlueTextButton

```wurst
public function createGlueTextButton(string name, framehandle owner, string inheritTemplate, integer createContext) returns framehandle
```

Creates a GLUETEXTBUTTON by type without requiring custom FDF.
	inheritTemplate is commonly "ScriptDialogButton" for Blizzard's default dialog button style.

### getCommandButton

```wurst
public function getCommandButton(int index) returns framehandle
```

Returns the named command button frame.
	In WC3 1.32+, moving command buttons through origin frames can glitch, so the named frames are usually safer.

### getInventoryButton

```wurst
public function getInventoryButton(int index) returns framehandle
```

Returns the named inventory button frame.
	In WC3 1.32+, moving item buttons through origin frames can glitch, so the named frames are usually safer.

### enableUIAutoPosition

```wurst
public function enableUIAutoPosition(bool flag)
```

Enables or disables auto positioning of ui elements

### setOriginFramesVisible

```wurst
public function setOriginFramesVisible(bool flag)
```

Hides or shows all origin frames except ORIGIN_FRAME_WORLD_FRAME

### hideOriginFrames

```wurst
public function hideOriginFrames()
```

Hides all origin frames except ORIGIN_FRAME_WORLD_FRAME

### showOriginFrames

```wurst
public function showOriginFrames()
```

Shows all origin frames except ORIGIN_FRAME_WORLD_FRAME

### loadTOCFile

```wurst
public function loadTOCFile(string tocFile) returns bool
```

Loads a toc file from the given path, to include custom fdf files from, returns true on success.
	Load the TOC before creating or inheriting templates from it.
	TOC order matters: list included/base FDF files before FDF files that depend on them.
	TOC file endings are fragile; keep at least one empty final line for CRLF files and two for LF-only files.

### getFullscreenFrameWidth

```wurst
public function getFullscreenFrameWidth() returns real
```

Returns the local fullscreen frame width in Warcraft III UI coordinate units.
	A fullscreen reference frame usually uses this width and height 0.6, anchored by FRAMEPOINT_BOTTOM at (0.4, 0.0).
	The value depends on the local client's aspect ratio and can differ per player.

### getFullscreenFrameSize

```wurst
public function getFullscreenFrameSize() returns vec2
```

Returns the local fullscreen frame size in Warcraft III UI coordinate units.
	The value depends on the local client's aspect ratio and can differ per player.

### setMousePos

```wurst
public function setMousePos(vec2 pos)
```

Places the mouse cursor at the given point of the screen. Uses the same coodinate system as framehandles

### setMousePos

```wurst
public function setMousePos(integer x, integer y)
```

Places the mouse cursor at the given point of the screen. Uses the window's coordinate system (in pixels) where (0, 0) is top-left corner of the window and positive direction of Y axis is "down"

### enableCursor

```wurst
public function enableCursor()
```

### disableCursor

```wurst
public function disableCursor()
```

### setCursorEnabled

```wurst
public function setCursorEnabled(bool flag)
```

## Extension Functions

### framehandle.destroyUnsafe

```wurst
public function framehandle.destroyUnsafe()
```

Destroys a frame.
	Unsafe for most multiplayer UI because destroying frames can desync or destabilize frame state after save/load.
	Do not call on String or Texture SimpleFrame children.
	Prefer hide(), disable() and reuse cached frames.

### framehandle.remove

```wurst
public function framehandle.remove()
```

### framehandle.setCenter

```wurst
public function framehandle.setCenter()
```

Places the frame at the center of the screen

### framehandle.setAbsPoint

```wurst
public function framehandle.setAbsPoint(framepointtype point, real x, real y)
```

Sets the frame position to an absolute x, y point on the screen.
For the x-axis, the normal 4:3 UI range is 0.0 to 0.8.
For the y-axis, the normal 4:3 UI range is 0.0 to 0.6.
Some SimpleFrames and specially parented frames can leave this area.

### framehandle.setAbsPoint

```wurst
public function framehandle.setAbsPoint(framepointtype point, vec2 pos)
```

Sets the frame position to an absolute x, y point on the screen.
For the x-axis, the normal 4:3 UI range is 0.0 to 0.8.
For the y-axis, the normal 4:3 UI range is 0.0 to 0.6.
Some SimpleFrames and specially parented frames can leave this area.

### framehandle.clearAndSetAbsPoint

```wurst
public function framehandle.clearAndSetAbsPoint(framepointtype point, real x, real y)
```

Clears all existing anchors and then places the frame at an absolute screen point.
	This is the safer default when repositioning existing/default frames.

### framehandle.clearAndSetAbsPoint

```wurst
public function framehandle.clearAndSetAbsPoint(framepointtype point, vec2 pos)
```

Clears all existing anchors and then places the frame at an absolute screen point.
	This is the safer default when repositioning existing/default frames.

### framehandle.setPoint

```wurst
public function framehandle.setPoint(framepointtype point, framehandle relative, framepointtype relativePoint)
```

Sets the frame's anchor point position to the one of the given frame's anchor

### framehandle.setPoint

```wurst
public function framehandle.setPoint(framepointtype point, framehandle relative, framepointtype relativePoint, vec2 offset)
```

Sets the frame's anchor point position to the one of the given frame's anchor with an offset

### framehandle.setPoint

```wurst
public function framehandle.setPoint(framepointtype point, framehandle relative, framepointtype relativePoint, real offsetX, real offsetY)
```

Sets the frame's anchor point position to the one of the given frame's anchor with an offset

### framehandle.clearAndSetPoint

```wurst
public function framehandle.clearAndSetPoint(framepointtype point, framehandle relative, framepointtype relativePoint)
```

Clears all existing anchors and then anchors this frame to another frame.
	This is the safer default when repositioning existing/default frames.

### framehandle.clearAndSetPoint

```wurst
public function framehandle.clearAndSetPoint(framepointtype point, framehandle relative, framepointtype relativePoint, vec2 offset)
```

Clears all existing anchors and then anchors this frame to another frame with an offset.
	This is the safer default when repositioning existing/default frames.

### framehandle.clearAndSetPoint

```wurst
public function framehandle.clearAndSetPoint(framepointtype point, framehandle relative, framepointtype relativePoint, real offsetX, real offsetY)
```

Clears all existing anchors and then anchors this frame to another frame with an offset.
	This is the safer default when repositioning existing/default frames.

### framehandle.clearAllPoints

```wurst
public function framehandle.clearAllPoints()
```

Frees the frame from any relative or absolute anchor points

### framehandle.setAllPoints

```wurst
public function framehandle.setAllPoints(framehandle relative)
```

Copy all the anchor points of the given frame

### framehandle.setVisible

```wurst
public function framehandle.setVisible(bool flag)
```

Shows or hides the frame.
	Do not call on String or Texture SimpleFrame children.

### framehandle.setVisible

```wurst
public function framehandle.setVisible(player p, bool flag)
```

Shows or hides the frame to the given player.
	This is a local visual update; acquire/create the frame handle for all players before using player-local changes.

### framehandle.show

```wurst
public function framehandle.show()
```

Shows the frame

### framehandle.show

```wurst
public function framehandle.show(player p)
```

Shows the frame to the specific player

### framehandle.hide

```wurst
public function framehandle.hide()
```

Hides the frame

### framehandle.hide

```wurst
public function framehandle.hide(player p)
```

Hides the frame to the specific player

### framehandle.hideAndDisable

```wurst
public function framehandle.hideAndDisable()
```

Hides and disables the frame so it cannot block mouse input while invisible.

### framehandle.hideAndDisable

```wurst
public function framehandle.hideAndDisable(player p)
```

Hides and disables the frame for the specific player so it cannot block mouse input while invisible.

### framehandle.showAndEnable

```wurst
public function framehandle.showAndEnable()
```

Shows and enables the frame.

### framehandle.showAndEnable

```wurst
public function framehandle.showAndEnable(player p)
```

Shows and enables the frame for the specific player.

### framehandle.isVisible

```wurst
public function framehandle.isVisible() returns bool
```

Returns whether the frame is visible or not.
	This is local UI state and can differ per player. Do not use it directly for synced game logic.

### framehandle.isVisible

```wurst
public function framehandle.isVisible(player p) returns boolean
```

Returns whether the frame is visible or not for given player.
	This is local UI state and can differ per player. Do not use it directly for synced game logic.

### framehandle.getName

```wurst
public function framehandle.getName() returns string
```

Returns the frame's name

### framehandle.click

```wurst
public function framehandle.click()
```

Fires a click a event on the frame

### framehandle.getText

```wurst
public function framehandle.getText() returns string
```

Returns the text value of the text frame.
	This is local UI state and can differ per player. Use BlzGetTriggerFrameText() inside editbox frame events for synced input.

### framehandle.setText

```wurst
public function framehandle.setText(string text)
```

Sets the text value of the text frame

### framehandle.setText

```wurst
public function framehandle.setText(player p, string text)
```

Sets the text value of the text frame for the specific player.
	This is a local visual update; acquire/create the frame handle for all players before using player-local changes.

### framehandle.getTextSizeLimit

```wurst
public function framehandle.getTextSizeLimit() returns integer
```

Returns the maximum allowed text size of the text frame

### framehandle.setTextSizeLimit

```wurst
public function framehandle.setTextSizeLimit(integer size)
```

Sets the maximum allowed text size of the text frame.
	Editbox event text returned by BlzGetTriggerFrameText() is limited by Warcraft III to roughly 255 characters.

### framehandle.setTextColor

```wurst
public function framehandle.setTextColor(colorA color)
```

Sets the text color of the text frame.
	The color channels are expected in the range 0 to 255.

### framehandle.setTextColor

```wurst
public function framehandle.setTextColor(integer color)
```

Sets the text color of the text frame as a packed Warcraft III color integer.

### framehandle.setFocus

```wurst
public function framehandle.setFocus(bool flag)
```

Enables or disables the user interaction for the frame.
	Do not call on String or Texture SimpleFrame children.

### framehandle.setFocus

```wurst
public function framehandle.setFocus(player p, bool flag)
```

Enables or disables the user interaction for the frame for given player.
	This is a local visual update; acquire/create the frame handle for all players before using player-local changes.

### framehandle.unfocus

```wurst
public function framehandle.unfocus()
```

Removes the focus from a given frame by disable and instantly enabling it. Mandatory for Frames of type 'SIMPLE'

### framehandle.unfocus

```wurst
public function framehandle.unfocus(player p)
```

Removes the focus from a given frame by disable and instantly enabling it for given player. Mandatory for Frames of type 'SIMPLE'

### framehandle.releaseKeyboardFocus

```wurst
public function framehandle.releaseKeyboardFocus()
```

Releases keyboard focus from a clicked frame by toggling enable state and clearing focus.
	Useful for buttons and editboxes that would otherwise steal Warcraft III hotkeys.

### framehandle.releaseKeyboardFocus

```wurst
public function framehandle.releaseKeyboardFocus(player p)
```

Releases keyboard focus from a clicked frame for the specific player by toggling enable state and clearing focus.

### framehandle.setModel

```wurst
public function framehandle.setModel(string modelFile, integer cameraIndex)
```

Sets the model of the model frame

### framehandle.isEnabled

```wurst
public function framehandle.isEnabled() returns bool
```

Returns the state of the frame.
	This is local UI state and can differ per player. Do not use it directly for synced game logic.

### framehandle.isEnabled

```wurst
public function framehandle.isEnabled(player p) returns boolean
```

Returns the state of the frame for given player.
	This is local UI state and can differ per player. Do not use it directly for synced game logic.

### framehandle.setEnabled

```wurst
public function framehandle.setEnabled(bool enabled)
```

Enables or disables the frame.
	Do not call on String or Texture SimpleFrame children. Disable non-interactive text/backdrops to keep them from blocking mouse input.

### framehandle.enable

```wurst
public function framehandle.enable()
```

Enables the frame

### framehandle.disable

```wurst
public function framehandle.disable()
```

Disables the frame

### framehandle.enable

```wurst
public function framehandle.enable(player p)
```

Enables the frame for the player p.
	This is a local visual update; acquire/create the frame handle for all players before using player-local changes.

### framehandle.disable

```wurst
public function framehandle.disable(player p)
```

Disables the frame for the player p.
	This is a local visual update; acquire/create the frame handle for all players before using player-local changes.

### framehandle.getAlpha

```wurst
public function framehandle.getAlpha() returns int
```

Returns the alpha value of the frame in the range 0 to 255, for frame types that support alpha.
	This is local UI state and can differ per player. Do not use it directly for synced game logic.

### framehandle.setAlpha

```wurst
public function framehandle.setAlpha(integer alpha)
```

Sets the alpha value of the frame in the range 0 to 255, for frame types that support alpha.
	Verified to work on backdrops, images and glue buttons (on a glue button the fade covers the whole
	button, child backdrops included). Apply it AFTER the frame has been parented, anchored and sized:
	alpha set on a freshly created frame before a layout positions it is wiped, so set it once the
	frame is in its final place. Reads as "disabled" to players, so prefer it for genuinely inactive
	elements rather than as a "selected / active" highlight.
	Do not call on String or Texture SimpleFrame children.

### framehandle.setAlpha

```wurst
public function framehandle.setAlpha(player p, integer alpha)
```

Sets the alpha value of the frame in the range 0 to 255 for the given player, for frame types that support alpha.
	Do not call on String or Texture SimpleFrame children.

### framehandle.setSpriteAnimate

```wurst
public function framehandle.setSpriteAnimate(integer primaryProp, integer flags)
```

Unknown

### framehandle.setTexture

```wurst
public function framehandle.setTexture(string texFile, integer flag, bool blend)
```

Sets the texture of the frame.
		texFile: the path of the texture
		flag: texture flag passed to BlzFrameSetTexture, usually 0
		blend: true to keep transparency

### framehandle.setTexture

```wurst
public function framehandle.setTexture(player p, string texFile, integer flag, bool blend)
```

Sets the texture of the frame for the specific player
	texFile: the path of the texture
	flag: texture flag passed to BlzFrameSetTexture, usually 0
	blend: true to keep transparency
	This is a local visual update; acquire/create the frame handle for all players before using player-local changes.

### framehandle.setScale

```wurst
public function framehandle.setScale(real scale)
```

Sets the frame's scaling value.
	Frame's size, children frames and relative anchor point offsets scale.
	Do not call on String or Texture SimpleFrame children.

### framehandle.setTooltip

```wurst
public function framehandle.setTooltip(framehandle tooltip)
```

Sets a frame's tooltip frame, if it has some tooltip subframe.
	Tooltip owner and tooltip frame should belong to the same Frame/SimpleFrame group.
	This cannot really be undone, and calling it repeatedly with the same owner/tooltip pair can crash on hover.

### framehandle.cageMouse

```wurst
public function framehandle.cageMouse(bool enable)
```

Forces the mouse cursor to stay (caged) inside of the frame

### framehandle.getValue

```wurst
public function framehandle.getValue() returns real
```

Returns the specific value of the frame, e.g. for sliders.
	This is local UI state and can differ per player. Prefer BlzGetTriggerFrameValue() inside frame events for synced input.

### framehandle.setValue

```wurst
public function framehandle.setValue(real value)
```

Sets the specific value of the frame (e.g. for sliders)

### framehandle.setMinMax

```wurst
public function framehandle.setMinMax(real minValue, real maxValue)
```

Sets the specific minimum and maximum value of the frame (e.g. for sliders)

### framehandle.setStepSize

```wurst
public function framehandle.setStepSize(real stepSize)
```

Sets the step size of the frame (e.g. for sliders)

### framehandle.setWidth

```wurst
public function framehandle.setWidth(real width)
```

Sets the width of the frame in UI coordinate units, preserving its current height.
	The current height is local UI state and can differ per player.

### framehandle.setHeight

```wurst
public function framehandle.setHeight(real height)
```

Sets the height of the frame in UI coordinate units, preserving its current width.
	The current width is local UI state and can differ per player.

### framehandle.setSize

```wurst
public function framehandle.setSize(real width, real height)
```

Sets the width and height of the frame in UI coordinate units.

### framehandle.setVertexColor

```wurst
public function framehandle.setVertexColor(color pcolor)
```

Tints a MODEL or sprite frame by its vertex colour; channels in the range 0 to 255.
	This does NOT recolour ordinary UI textures: verified in-game to have no visible effect on a
	BACKDROP, an image (which is a backdrop), or a glue button. To recolour such elements, swap the
	texture (setTexture) or use a differently coloured FDF backdrop; for text use the font colour or
```wurst
	cAARRGGBB ... |r colour codes.
```

### framehandle.setVertexColor

```wurst
public function framehandle.setVertexColor(colorA color)
```

Sets the vertex colour (with alpha) of a MODEL or sprite frame; channels in the range 0 to 255.
	Model/sprite only: it does not recolour BACKDROP / image / glue-button UI textures (see the
	color overload above).

### framehandle.setVertexColor

```wurst
public function framehandle.setVertexColor(integer color)
```

Sets the vertex colour of a MODEL or sprite frame as a packed Warcraft III colour integer.
	Model/sprite only: it does not recolour BACKDROP / image / glue-button UI textures.

### framehandle.setLevel

```wurst
public function framehandle.setLevel(integer level)
```

If multiple frames cover each other, the one with the highest level will receive mouse events and will be drawn above the others. If several frames have the same level, the last created one is prioritized.
	Do not call on String or Texture SimpleFrame children.

### framehandle.getParent

```wurst
public function framehandle.getParent() returns framehandle
```

Searches for the frames parent frame.
	Should be used with caution as getting the parent of any top most frame will lead into a void crash

### framehandle.setParent

```wurst
public function framehandle.setParent(framehandle parent)
```

Sets the parent frame of the frame.
	Do not mix Frame and SimpleFrame groups, and never set a frame's parent to itself or one of its descendants.

### framehandle.getHeight

```wurst
public function framehandle.getHeight() returns real
```

Returns the frame's height in UI coordinate units.
	This is local UI state and can differ per player. Do not use it directly for synced game logic.

### framehandle.getWidth

```wurst
public function framehandle.getWidth() returns real
```

Returns the frame's width in UI coordinate units.
	This is local UI state and can differ per player. Do not use it directly for synced game logic.

### framehandle.setFont

```wurst
public function framehandle.setFont(string fileName, real height, integer flags)
```

Sets the text font of the text frame.
	Use for TEXT frames and String SimpleFrame children. Calling it on generic SimpleFrames can crash.

### framehandle.setTextAlignment

```wurst
public function framehandle.setTextAlignment(textaligntype vert, textaligntype horz)
```

Set the text alignment of the text frame

### framehandle.setFullscreenReference

```wurst
public function framehandle.setFullscreenReference()
```

Sizes and positions this frame as a fullscreen reference frame.
	The size depends on the local client's aspect ratio and can differ per player.

### framehandle.setMousePos

```wurst
public function framehandle.setMousePos()
```

Places the mouse cursor in the center of the frame

### framehandle.getChildrenCount

```wurst
public function framehandle.getChildrenCount() returns int
```

Get number of children frames of given frame. Only direct child frames are counted

### framehandle.getChild

```wurst
public function framehandle.getChild(int index) returns framehandle
```

Get child frame handle from given index.
	The index must be in the range 0 <= index < getChildrenCount(). Out-of-bounds access can crash.

## Constants

### GAME_UI

```wurst
public constant GAME_UI = BlzGetOriginFrame(ORIGIN_FRAME_GAME_UI, 0)
```

### WORLD_UI

```wurst
public constant WORLD_UI = BlzGetOriginFrame(ORIGIN_FRAME_WORLD_FRAME, 0)
```

### CONSOLE_UI

```wurst
public constant CONSOLE_UI = BlzGetFrameByName("ConsoleUIBackdrop", 0)
```

### SCREEN_CENTER

```wurst
public constant SCREEN_CENTER = vec2(0.4, 0.3)
```

### SCREEN_TOPRIGHT

```wurst
public constant SCREEN_TOPRIGHT = vec2(0.8, 0.6)
```

### SCREEN_TOPLEFT

```wurst
public constant SCREEN_TOPLEFT = vec2(0.0, 0.6)
```

### SCREEN_BOTTOMRIGHT

```wurst
public constant SCREEN_BOTTOMRIGHT = vec2(0.8, 0.0)
```

### SCREEN_BOTTOMLEFT

```wurst
public constant SCREEN_BOTTOMLEFT = vec2(0.0, 0.0)
```

### SCREEN_RIGHT

```wurst
public constant SCREEN_RIGHT = vec2(0.8, 0.3)
```

### SCREEN_LEFT

```wurst
public constant SCREEN_LEFT = vec2(0.0, 0.3)
```

### SCREEN_TOP

```wurst
public constant SCREEN_TOP = vec2(0.4, 0.6)
```

### SCREEN_BOTTOM

```wurst
public constant SCREEN_BOTTOM = vec2(0.4, 0.0)
```

### WHOLE_SCREEN_TOPRIGHT

```wurst
public constant WHOLE_SCREEN_TOPRIGHT = vec2( 0.95, 0.6)
```

### WHOLE_SCREEN_TOPLEFT

```wurst
public constant WHOLE_SCREEN_TOPLEFT = vec2(-0.15, 0.6)
```

### WHOLE_SCREEN_BOTTOMRIGHT

```wurst
public constant WHOLE_SCREEN_BOTTOMRIGHT = vec2( 0.95, 0.0)
```

### WHOLE_SCREEN_BOTTOMLEFT

```wurst
public constant WHOLE_SCREEN_BOTTOMLEFT = vec2(-0.15, 0.0)
```

### WHOLE_SCREEN_RIGHT

```wurst
public constant WHOLE_SCREEN_RIGHT = vec2( 0.95, 0.3)
```

### WHOLE_SCREEN_LEFT

```wurst
public constant WHOLE_SCREEN_LEFT = vec2(-0.15, 0.3)
```

### WHOLE_SCREEN_TOP

```wurst
public constant WHOLE_SCREEN_TOP = SCREEN_TOP
```

### WHOLE_SCREEN_BOTTOM

```wurst
public constant WHOLE_SCREEN_BOTTOM = SCREEN_BOTTOM
```
