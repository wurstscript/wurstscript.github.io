---
title: Dialog
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Dialog.wurst'
generated: true
---

Dialogs are big dialog boxes at the center of the screen. The player can choose one button to click.
WARNING: Dialogs cannot be displayed at map init! Dialogs pause the game in single player mode!
In multiplayer mode dialogs do not pause the game, but prevent players, who see the dialog from playing the game.
*

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Dialog.wurst)**

## Functions

### createDialog

```wurst
public function createDialog() returns dialog
```

## Extension Functions

### dialog.addButton

```wurst
public function dialog.addButton(string buttonText) returns button
```

### dialog.addButton

```wurst
public function dialog.addButton(string buttonText, int hotkey) returns button
```

Hotkey: use ASCII numbers of the capital letter.

### dialog.addQuitButton

```wurst
public function dialog.addQuitButton(boolean doScoreScreen, string buttonText) returns button
```

Adds a quit button to this dialog. If it is clicked, it ends the game for that player.

### dialog.addQuitButton

```wurst
public function dialog.addQuitButton(boolean doScoreScreen, string buttonText, int hotkey) returns button
```

Adds a quit button to this dialog. If it is clicked, it ends the game for that player.
Hotkey: use ASCII numbers of the capital letter.

### dialog.clear

```wurst
public function dialog.clear()
```

Removes all buttons from a dialog

### dialog.destr

```wurst
public function dialog.destr()
```

### dialog.display

```wurst
public function dialog.display(player whichPlayer, boolean flag)
```

Toggles visibility of the dialog for a player. Dialogs are invisible by default
Dialogs cannot be shown at map initialization

### dialog.setMessage

```wurst
public function dialog.setMessage(string messageText)
```
