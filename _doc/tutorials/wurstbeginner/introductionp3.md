---
title: Introduction Part Three
sections:
- Let's make a spell
- Imports
- Buff Effect
- Buff Map
- How to find library code
- Closing Words
---

------

# Let's make a spell

We created an example spell in [march's blog post](https://wurstlang.org/blog/bestofthewurst5.html). You should check it out!

Let's take a closer look at the code.

```wurst
package Conflagration
import ConflagrationObjects
import ClosureTimers
import ClosureForGroups
import HashMap
import ClosureEvents

let buffId = BUFF_OBJ.abilId
let buffMap = new HashMap<unit, CallbackSingle>()
init
	EventListener.onPointCast(SPELL_ID) (caster, tpos) ->
		flashEffect(SPELL_EFFECT_PATH, tpos)
		doAfter(SPELL_EFFECT_DURATION) ->
			forUnitsInRange(tpos, SPELL_RADIUS) u ->
				if u.hasAbility(buffId)
					caster.damageTarget(u, BONUS_DAMAGE)
					flashEffect(BONUS_EFFECT_PATH, tpos)

				caster.damageTarget(u, BASE_DAMAGE)
				u.addAbility(buffId)
				if buffMap.has(u)
					destroy buffMap.get(u)
				let cb = doAfter(BUFF_DURATION) ->
					if buffMap.has(u)
						buffMap.remove(u)
						u.removeAbility(buffId)
				buffMap.put(u, cb)
```

## Imports

We import various packages to make the process of spell creation easier. `ClosureTimers` and `ClosureForGroups` allow us to easily handle delayed code (`doAfter`) and group enums(`forUnitsInRange`). `ClosureEvents` gives us a nicer API to wc3 events, including closures. At last `HashMap` allows us to attach arbitrary data to other data - in this example we attach our Buff effect to the target unit.

## Buff Effect

The spell works like this: We listen to a specific spell event using `EventListener.onPointCast`. The lambda block contains our event callback. Inside the callback we create the meteor effect using `flashEffect` at the appropriate positions. Since the effect takes some time to hit the ground, we also want our damage effect to be delayed. Thus we start a timer using `doAfter(SPELL_EFFECT_DURATION) ->`.
In this case the lambda block is executed once the chosen amount of time has passed. Now that the special effect has landed on the ground, we apply damage to all units inside a circular area around the target position.
We use `forUnitsInRange(tpos, SPELL_RADIUS) u ->` to have all units inside the range near the target possition passed to the lambda function. This is the `u` in front of the arrow `->` in `SPELL_RADIUS) u ->`.
Inside the lambda block we now refer to u as one of the units that is in range, and apply our effects.

In case the unit already has the affect, we apply some extra damage and flash an effect in the following if-statement. After that we apply the normal spell damage and add the dummybuff ability to the target (if the unit already has the ability it just has no effect).
The next if branch checks whether the buffmap already has an entry for our unit - if that's the case, we destroy the existing timer to end the buff.
Then we start the new timer to end the buff when it exceeded it's duration.

## Buff Map

`let buffMap = new HashMap<unit, CallbackSingle>()` Here we create the buffmap we talked about. Basically it allows us to save one closures instance from `ClosureTimers` per unit, that refers to a running timer for a buffs duration.

# Closing Words

We hope this guide helped you to get started right away with developing your map on wurst.
If you have further questions or would like to hang out with wurst people, drop by our [Chat](https://kiwiirc.com/nextclient/#irc://irc.quakenet.org/#inwc.de-maps).
