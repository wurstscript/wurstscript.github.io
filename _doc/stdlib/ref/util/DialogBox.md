---
title: DialogBox
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/DialogBox.wurst'
generated: true
curated: /stdlib/dialogbox
---

DialogBox lets you create dialogs more easily and associate its buttons with closures.
	WARNING: Dialogs cannot be displayed at map init!

	The DialogBox should be destroyed after it is no longer needed.
	Example use:
		let dBox = new DialogBox("Extra starting gold?")
		dBox.addButton("Yes") ->
			players[0].addGold(500)
			destroy dBox

		dBox.addButton("No", () -> destroy dBox)
		// Make sure to not call display at map initialization
		dBox.display(players[0], true)

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/DialogBox.wurst)**

> 📖 Read the **[detailed guide](/stdlib/dialogbox)** for hand-written examples and background.

## Classes

### DialogBox

```wurst
public class DialogBox
```

**Members:**

- `construct(string title)`
  Creates a new DialogBox with a title.
- `addButton(string buttonText)`
- `addButton(string buttonText, DialogBoxButtonClosure cb)`
- `addButton(string buttonText, int hotkey)`
  Hotkey: use ASCII number of the capital letter.
- `addButton(string buttonText, int hotkey, DialogBoxButtonClosure cb)`
  Hotkey: use ASCII number of the capital letter.
- `addQuitButton(boolean doScoreScreen, string buttonText)`
  Adds a quit button to this dialog. If it is clicked, it ends the game for that player.
- `addQuitButton(boolean doScoreScreen, string buttonText, DialogBoxButtonClosure cb)`
  Adds a quit button to this dialog. If it is clicked, it ends the game for that player.
- `addQuitButton(boolean doScoreScreen, string buttonText, int hotkey)`
  Adds a quit button to this dialog. If it is clicked, it ends the game for that player.
  	Hotkey: use ASCII numbers of the capital letter.
- `addQuitButton(boolean doScoreScreen, string buttonText, int hotkey, DialogBoxButtonClosure cb)`
  Adds a quit button to this dialog. If it is clicked, it ends the game for that player.
  	Hotkey: use ASCII numbers of the capital letter.
- `display(player whichPlayer, boolean flag)`
  Toggles visibility of the DialogBox for a player. Dialogs are invisible by default
  		WARNING: Dialogs cannot be shown at map initialization
- `setTitle(string title)`
  Changes the title of the DialogBox.
- `getTitle() returns string`
  Returns the title of the DialogBox.

## Interfaces

### DialogBoxButtonClosure

```wurst
public interface DialogBoxButtonClosure
```

**Members:**

- `run()`
