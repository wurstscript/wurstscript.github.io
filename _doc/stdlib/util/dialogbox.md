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

> Dialogs cannot be created during map init!

### The DialogBox

If you want to create a dialog though, make use of the `DialogBox` class. You can eiher reuse the same `DialogBox` and use `GetTriggerPlayer()` to get the player in the click event:

```wurst
init
  // Can't create Dialogs during map init
	doAfter(0.1) ->
        let dBox = new DialogBox("Are you a noob?")
        dBox.addButton("Yes") ->
            GetTriggerPlayer()..addGold(500)
            dBox.display(GetTriggerPlayer(), false)

        dBox.addButton("No", () -> dBox.display(GetTriggerPlayer(), false))
		for i = 0 to 11
			dBox.display(players[i], true)
```


Example with global and display on spellcast:

```wurst
DialogBox goldBox

init
  doAfter(0.1) ->
    goldBox = new DialogBox("Extra starting gold?")
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
