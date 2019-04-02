---
title: Creating warcraft dialogs
sections:
- Intro
- The DialogBox
---

![https://wurstlang.org](/assets/images/stdlib/dialogbox.jpg){: .img-responsive}

### Intro

In warcraft III a dialog refers to a modal dialog that is shown to players with a message text and various buttons to click.
Dialogs have several drawbacks, such as disabling user input and chat, and thus should only be seldomly used in multiplayer.

### The DialogBox

If you want to create a dialog though, make use of the `DialogBox` class. You can eiher reuse the same `DialogBox` and use `GetTriggerPlayer()` to get the player in the click event:

```wurst
init
	let dBox = new DialogBox("Are you a noob?")
	dBox.addButton("Yes") ->
		GetTriggerPlayer()..addGold(500)..display(GetTriggerPlayer(), false)

	dBox.addButton("No", () -> dBox.display(GetTriggerPlayer(), false))

	doAfter(0.1) ->
		// Don't call display during init
		for i = 0 to 11
			dBox.display(players[i], true)
```


Example with global and display on spellcast:

```wurst
constant GOLD_BOX = new DialogBox("Extra starting gold?")

init
	// add buttons
	dBox.addButton("Yes") ->
		...

	EventListener.onCast(SPELL_ID) (caster) ->
		GOLD_BOX.display(caster, true)
```

Or you can create them on the spot, passing the player to the callback:

```wurst
function showBox(player p)
	let tempBox = new DialogBox(SOME_DYNAMIC_STRING)
	tempBox.addButton("OK") ->
		Log.info(p.getName() " as accepted.")
		destroy tempBox
	tempBox.display(p, false)
```
