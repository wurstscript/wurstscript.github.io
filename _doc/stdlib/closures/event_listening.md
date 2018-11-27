---
title: Generic Events
sections:
- Intro
- Generic events
- Special events
- Cast events
---

### Intro

`ClosureEvents.wurst` is a generalized event listener wrapper around warcraft 3 events with closures as listeners.
The usage of closures allows you to carry over data and save the listeners in a variable.

> Make sure to always use the EVENT_UNIT_**PLAYER** variants of the events for Closure events, even if it's just for a single unit. Instead use an appropriate version of .add() with unit argument

### Generic events

In most cases you will want to use the generic `EvenetListener.add(..)` api. A few examples:

```wurst
EventListener.add(EVENT_PLAYER_UNIT_DEATH) ->
	<any unit death actions>

EventListener.add(someUnit, EVENT_PLAYER_UNIT_DEATH) ->
	<only 'someUnit' death actions>
```

### Special events

The following events can also be used, but aren't of  `EVENT_PLAYER_UNIT_*` type:

- EVENT_PLAYER_LEAVE
- EVENT_UNIT_DAMAGED
- EVENT_PLAYER_CHAT_FILTER
- EVENT_PLAYER_ARROW_*

### Cast events

For cast events there exist comfort wrappers starting with `EventListener.on`. For example:

```wurst
EventListener.onCast(MY_SPELL_ID) caster ->
	<some non target spell event for all units>

EventListener.onCast(myUnit, MY_SPELL_ID) caster ->
	<some non target spell for 'myUnit'>

EventListener.onPointCast(myUnit, MY_SPELL_ID) (caster, target) ->
	<actions for a point cast spell. 'target' is the vec2 target point>
```
