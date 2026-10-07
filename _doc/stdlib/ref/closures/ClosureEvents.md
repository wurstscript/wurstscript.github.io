---
title: ClosureEvents
layout: stdlibref
category: closures
categoryLabel: Closures
tags:
  - closure
  - closures
  - event
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/ClosureEvents.wurst'
generated: true
toc: sections
curated: /stdlib/closure_events
---

This package is a comfort wrapper around wc3 events,
for easy global and per-unit event listening via closures.

To listen to an event, simply #add, optionally passing a target unit:

```wurst
EventListener.add(EVENT_PLAYER_UNIT_DEATH) ->
 <any unit death actions>

EventListener.add(someUnit, EVENT_PLAYER_UNIT_DEATH) ->
 <only 'someUnit' death actions>
```

For spell handling there are comfort wrappers via the `on` prefix:

```wurst
EventListener.onCast(MY_SPELL_ID) (caster) ->
 <some non target spell event for all units>

EventListener.onCast(myUnit, MY_SPELL_ID) (caster) ->
 <some non target spell for 'myUnit'>

EventListener.onPointCast(myUnit, MY_SPELL_ID) (caster, target) ->
 <actions for a point cast spell. 'target' is the vec2 target point>
```

**IMPORTANT**:
	Make sure to always use the "EVENT_PLAYER_UNIT_*" variants of the eventids.
	Other supported events:
		- EVENT_PLAYER_LEAVE
		- EVENT_UNIT_DAMAGED
		- EVENT_PLAYER_CHAT_FILTER
		- EVENT_PLAYER_ARROW_*

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/closures/ClosureEvents.wurst)**

> 📖 Read the **[detailed guide](/stdlib/closure_events)** for hand-written examples and background.

**Re-exports:** `EventHelper`, `RegisterEvents`

## Classes

### OnCastListener

```wurst
public abstract class OnCastListener
```

**Members:**

- `abstract function fire(unit caster)`

### OnCast

```wurst
public abstract class OnCast extends OnCastListener
```

**Members:**

- `override function fire(unit caster)`
- `abstract function fireEx(int id)`

### OnPointCast

```wurst
public abstract class OnPointCast extends OnCastListener
```

**Members:**

- `override function fire(unit caster)`
- `abstract function fireEx(unit caster, vec2 target)`

### OnUnitCast

```wurst
public abstract class OnUnitCast extends OnCastListener
```

**Members:**

- `override function fire(unit caster)`
- `abstract function fireEx(unit caster, unit target)`

### CastListenerMap

```wurst
public class CastListenerMap extends HashMap<int, OnCastListener>
```

Ability id -> the first cast listener registered for it, as a chain through next and prev.
	This is what EventListener.castMap always was, a HashMap. A cast reads the listener from a native table on
	Lua instead, which put and remove keep in step with the HashMap, so everything else a HashMap does still works.

**Members:**

- `override function get(int abilId) returns OnCastListener`
- `override function put(int abilId, OnCastListener listener)`
- `override function remove(int abilId)`
- `override function flush()`

### EventListener

```wurst
public abstract class EventListener
```

**Members:**

- <a id="eventlistener-castMap"></a> `static constant castMap = new CastListenerMap()`
- `abstract function onEvent()`
- `static function add(eventid eventId, EventListener listener) returns EventListener`
- `static function add(unit u, eventid eventId, EventListener listener) returns EventListener`
- `static function onCast(unit u, int abilId, OnCastListener listener) returns OnCastListener`
- `static function onTargetCast(unit u, int abilId, OnUnitCast listener) returns OnUnitCast`
- `static function onPointCast(unit u, int abilId, OnPointCast listener) returns OnPointCast`
- `static function onCast(int abilId, OnCastListener listener) returns OnCastListener`
- `static function onCast(unit u, OnCast listener) returns OnCast`
- `static function onTargetCast(int abilId, OnUnitCast listener) returns OnUnitCast`
- `static function onPointCast(int abilId, OnPointCast listener) returns OnPointCast`
- `static function generalEventCallback()`
- `static function damagedCallback()`
  The damage events are the busiest, so they are delivered with the id they were registered with. That holds
  		while nobody else can have registered an event on their trigger: once getPlayerUnitEventTrigger has handed it
  		out, the engine is asked which event fired, as it is for every other event. One way to put an event on the
  		trigger is not seen: a listener which takes it with GetTriggeringTrigger and registers an event on it, the same
  		limit as stated at getPlayerUnitEventTrigger. Asking the engine on every delivery would cover it and give back
  		the gain, which is about 1.5 us per hit.
- `static function damagingCallback()`
- `static function onSpellEffect()`

## Functions

### fireEvents

```wurst
function fireEvents(unit _u) returns boolean
```

> 🔧 **Configurable.** Override it in your map's config package.

Configure this function if you want some logic to prevent events being
	fired for specific units

### unregisterEventsForUnit

```wurst
public function unregisterEventsForUnit(unit u)
```

### unregisterEvents

```wurst
public function unregisterEvents(int id)
```

## Extension Functions

### eventid.toIntId

```wurst
public function eventid.toIntId() returns int
```

## Constants

### EVENT_PLAYER_CHAT_FILTER

```wurst
public constant EVENT_PLAYER_CHAT_FILTER = ConvertPlayerEvent(96)
```

Use this chat event if you want to access the entered message
