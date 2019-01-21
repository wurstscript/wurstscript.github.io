---
title: Groups, enumerations, and iterating
sections:
- Intro
- All you ever needed
- The API overview
- More advanced stuff
---

### Intro

The wurst standard library provides a convenience wrapper for iterating over units.

Nominally the `ForUnitsInXXX` function family creates an abstraction over the `group` handle type.


### All you ever needed

The only thing you really need to understand is the interface:

```wurst
interface ForGroupCallback
	function callback(unit u)
```

The `ClosureForGroups` package provides functions that give you a `ForGroupcallback`.


### The API overview

Units:

```wurst
group.forEachFrom() u ->
	// Removes units from the group, providing a reference to each in turn as
	// `u`.
```

```wurst
forUnitsOfPlayer(player p) u ->
	// Anonymously iterates over all the units `u` in turn owned by player `p`.
	// Note that as this method wraps `GroupEnumUnitsOfPlayer`, it includes
	// locust units.
```

```wurst
forUnitsAll() u ->
	// Iterates over all units by iterating over each player's units in turn.
```

```wurst
forUnitsInRect(rect r) u ->
	// Iterates over units in rect `r`.
```

```wurst
forUnitsInRange(vec2 pos, real radius) u ->
	// Iterates over all the units within `radius` distance from `pos`.
```


### More advanced stuff

The standard library provides some slightly more powerful tools:

```wurst
forNearestUnit(vec2 pos, real range, filterfunc filter) u ->
	// Only called for the single closest unit to `pos` matching the `filter`.
```

And a handful of similar closure wrappers for destructables:

```wurst
forDestructablesInRect(r) d ->
forNearestDestructable(pos, range) ->
```
