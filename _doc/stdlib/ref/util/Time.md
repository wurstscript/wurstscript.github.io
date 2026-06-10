---
title: Time
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Time.wurst'
generated: true
---

Type-safe wrappers to distinguish durations (an amount of time) from instants (a point in time), and the valid ways
to reason about those types.

Example usage:

```
constant myGoldMine = createGoldMine()
var nextIncomeTime = 30..secondsFromNow()
var incomeMessage = CreateTextTag()..setPos(myGoldMine.getPos3Real())
init
	doPeriodically(ANIMATION_PERIOD) ->
		if nextIncomeTime.durationUntil().lessThan(0..seconds())
			myGoldMine.getOwner().addGold(100)
			nextIncomeTime += 30..seconds()

		incomeMessage..setText("Next income in " + nextIncomeTime.durationUntil().displayVerbose(), 10.)
```

Details:

- Durations and instants are directly related, but can't be used interchangeably.
	* Example: it doesn't make sense to set a timer for "tomorrow" seconds.
- Sometimes durations and instants can be combined to produce a new value.
	* Example: "Now" plus "30 seconds" gives you an instant 30 seconds from now.
- Not every combination of instants and durations makes sense.
	* Example: "30 seconds" plus "30 seconds" is 60 seconds, but "Now" plus "Now" doesn't make sense.

This library helps you write safe code by making it possible to add instant + duration, subtract instant - instant,
but fails to compile the addition of instant + instant.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Time.wurst)**

## Tuples

### instant

```wurst
public tuple instant(real timestamp_seconds)
```

An instant in time. Use `instantNow()` to produce an instant from the current game time.

### duration

```wurst
public tuple duration(real seconds)
```

A duration of time. Use constructors like `6..seconds() or `15..minutes()` for convenience.

## Functions

### instantNow

```wurst
public function instantNow() returns instant
```

Instant constructor. Uses the elapsed game time.

### instantToIndex

```wurst
public function instantToIndex(instant inst) returns int
```

### instantFromIndex

```wurst
public function instantFromIndex(int index) returns instant
```

### durationToIndex

```wurst
public function durationToIndex(duration dur) returns int
```

### durationFromIndex

```wurst
public function durationFromIndex(int index) returns duration
```

## Extension Functions

### real.seconds

```wurst
public function real.seconds() returns duration
```

Duration constructor.

### real.minutes

```wurst
public function real.minutes() returns duration
```

Duration constructor.

### real.hours

```wurst
public function real.hours() returns duration
```

Duration constructor.

### int.seconds

```wurst
public function int.seconds() returns duration
```

Duration constructor.

### int.minutes

```wurst
public function int.minutes() returns duration
```

Duration constructor.

### int.hours

```wurst
public function int.hours() returns duration
```

Duration constructor.

### real.secondsAgo

```wurst
public function real.secondsAgo() returns instant
```

Instant constructor.

### real.minutesAgo

```wurst
public function real.minutesAgo() returns instant
```

Instant constructor.

### real.hoursAgo

```wurst
public function real.hoursAgo() returns instant
```

Instant constructor.

### int.secondsAgo

```wurst
public function int.secondsAgo() returns instant
```

Instant constructor.

### int.minutesAgo

```wurst
public function int.minutesAgo() returns instant
```

Instant constructor.

### int.hoursAgo

```wurst
public function int.hoursAgo() returns instant
```

Instant constructor.

### duration.ago

```wurst
public function duration.ago() returns instant
```

Instant constructor.

### duration.fromNow

```wurst
public function duration.fromNow() returns instant
```

Instant constructor.

### real.secondsFromNow

```wurst
public function real.secondsFromNow() returns instant
```

Instant constructor.

### real.minutesFromNow

```wurst
public function real.minutesFromNow() returns instant
```

Instant constructor.

### real.hoursFromNow

```wurst
public function real.hoursFromNow() returns instant
```

Instant constructor.

### int.secondsFromNow

```wurst
public function int.secondsFromNow() returns instant
```

Instant constructor.

### int.minutesFromNow

```wurst
public function int.minutesFromNow() returns instant
```

Instant constructor.

### int.hoursFromNow

```wurst
public function int.hoursFromNow() returns instant
```

Instant constructor.

### instant.op_plus

```wurst
public function instant.op_plus(duration dur) returns instant
```

Compute an instant plus a duration. (Now plus 5 minutes = an instant 5 minutes in the future).

### instant.op_minus

```wurst
public function instant.op_minus(duration dur) returns instant
```

Compute an instant minus a duration. (Now minus 5 minutes = an instant 5 minutes in the past).

### instant.op_minus

```wurst
public function instant.op_minus(instant other) returns duration
```

Compute an instant minus an instant. (Now minus 5 minutes ago = 5 minutes).

### duration.op_plus

```wurst
public function duration.op_plus(duration other) returns duration
```

Compute a duration plus a duration. (5 minutes plus 5 minutes = 10 minutes).

### duration.op_minus

```wurst
public function duration.op_minus(duration other) returns duration
```

Compute a duration minus a duration. (5 minutes minus 2 minutes = 3 minutes).

### duration.op_plus

```wurst
public function duration.op_plus(instant when) returns instant
```

Compute a duration plus an instant. (5 minutes plus now = 5 minutes in the future).

### instant.durationSince

```wurst
public function instant.durationSince() returns duration
```

Provides duration since an instant. Equivalent to Now - instant.

### instant.durationUntil

```wurst
public function instant.durationUntil() returns duration
```

Provides duration until an instant. Convenience for the negative of durationSince.

### instant.isOlderThan

```wurst
public function instant.isOlderThan(instant other) returns bool
```

Instant > instant ?

### instant.isNewerThan

```wurst
public function instant.isNewerThan(instant other) returns bool
```

Instant < instant ?

### duration.greaterThan

```wurst
public function duration.greaterThan(duration other) returns bool
```

Duration > duration ?

### duration.lessThan

```wurst
public function duration.lessThan(duration other) returns bool
```

Duration < duration ?

### instant.isInTheFuture

```wurst
public function instant.isInTheFuture() returns bool
```

Convenience for checking if an instant comes after instantNow.

### instant.isInThePast

```wurst
public function instant.isInThePast() returns bool
```

Convenience for checking if an instant comes before instantNow.

### duration.displayVerbose

```wurst
public function duration.displayVerbose() returns string
```

Tranform a duration to a verbose string. Example:

61..seconds().displayVerbose()
```wurst
"1 minutes, and 1 seconds"
```

### duration.display

```wurst
public function duration.display(string prefix) returns string
```

Tranform a duration to a short string. Example:

61..minutes().display("T-")
```wurst
"T-1H1M0S"
```

### duration.display

```wurst
public function duration.display() returns string
```

ISO-8601 compatible duration representation. Example:

61..minutes().display()
```wurst
"PT1H1M0S"
```

### instant.displayVerbose

```wurst
public function instant.displayVerbose(string suffix) returns string
```

Transform an instant to a verbose string. Example:
instantNow().displayVerbose(" passed before the zombies killed you")
```wurst
"5 minutes, and 0 seconds passed before the zombies killed you"
```

### instant.displayVerbose

```wurst
public function instant.displayVerbose() returns string
```

Transform an instant to a verbose string. Example:
"Time elapsed: " + instantNow().displayVerbose()
```wurst
"Time elapsed: 5 minutes, and 0 seconds game time"
```
