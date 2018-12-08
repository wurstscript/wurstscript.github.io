---
title: Timers with Closures
sections:
- Intro
- Delayed actions
- Special events
- Cast events
---

### Intro

The `ClosureTimers.wurst` package wraps wc3 timer mechanics using wurst closures. The usage of closures allows you to carry over data and save the callbacks in a variable.

> While ClosureTimers are great and fit for most tasks, in performance critical situations, the TimedLoop module can yield better results.

### Delayed actions

The most common usecase for timers is executing something after a given time, without stopping the execution of other code. To do this use the `doAfter()` function.
A few examples:

```wurst
// Destroy effect after 5 seconds
let eff = addEffect(Abilities.vengeanceMissile, ZERO2)
doAfter(5.) ->
	eff.destr()

// Inflict damage after time
let attacker = GetEventDamageSource()
let target = GetTriggerUnit()
doAfter(2.) ->
	attacker.damageTarget(target, 20)
```

Compared to vJass variants of timer data attachment you should immediately notice, that the data attachment with closures happens automatically.
At creation, the closure will capture data used inside it, in this case `eff` and `attacker, target` respectively, so you can reference them later in the callback.

Behind the scenes ClosureTimers just use `TimerUtils` data attachment themselves.

### Periodic actions

The other typical usecase for timers is periodical execution of a certain action. Use `doPeriodically()` or `doPeriodicallyCounted`.

```wurst
doPeriodically(ANIMATION_PERIOD) cb ->
	for missile in missiles
		missile.update()

// Countdown
doPeriodicallyCounted(1, 3) cb ->
	print(cb.getCount().toString() + "..")
```


