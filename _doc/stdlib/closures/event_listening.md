---
title: Generic Events
sections:
- Intro
- Generic events
- Special events
- Chat input event
- Cast events
---

### Intro

`ClosureEvents.wurst` is a generalized event listener wrapper around Warcraft III events, making us of closures as listeners.
Using closures allows you to carry over data and save listeners in variables.

> Make sure to always use the EVENT_UNIT_**PLAYER** variants of the events for Closure events, even if it's just for a single unit. Instead use an appropriate version of .add() with a unit parameter

### Generic events

In most cases you will want to use the generic `EvenetListener.add(..)` api. A few examples:

```wurst
EventListener.add(EVENT_PLAYER_UNIT_DEATH) ->
	Log.info("Any unit died: " + GetTriggerUnit().getName())

EventListener.add(specificUnit, EVENT_PLAYER_UNIT_DEATH) ->
	Log.info("specificUnit died: " + GetTriggerUnit().getName())
```

### Special events

The following events can also be used, but aren't of  `EVENT_PLAYER_UNIT_*` type:

- EVENT_PLAYER_LEAVE
- EVENT_UNIT_DAMAGED
- EVENT_PLAYER_CHAT_FILTER
- EVENT_PLAYER_ARROW_*
- EVENT_PLAYER_MOUSE_*

### Chat input event

Even though `EVENT_PLAYER_CHAT = ConvertPlayerEvent(16)` exists, it isn't the event used by the `TriggerRegisterPlayerChatEvent` native and doesn't give access to the entered message. Therefore you need to use `EVENT_PLAYER_CHAT_FILTER = ConvertPlayerEvent(96)` if you want access to  `GetEventPlayerChatString`.

```wurst
EventListener.add(EVENT_PLAYER_CHAT_FILTER) ->
	let input = GetEventPlayerChatString()
	let plyer = GetTriggerPlayer()
	...
```

### Cast events

For cast events there exist comfort wrappers starting with `EventListener.on`. For example:

```wurst
EventListener.onCast(MY_SPELL_ID) caster ->
	print(caster.getName() + " casted my spell.")

EventListener.onTargetCast(myUnit, MY_SPELL_ID) (caster, target) ->
	caster.damageTarget(target, 50.)

EventListener.onPointCast(myUnit, MY_SPELL_ID) (caster, target) ->
	flashEffect(Abilities.frostNovaTarget, target)
```
