---
title: Best of the Wurst 2 - December Update
layout: post
excerpt: Our first timely blog post for the holidays.
icon:
  type: fa
  name: fa-snowflake-o
color: blue
author: Cokemonkey11, Frotty
date: 2017-12-03
banner: /assets/images/blog/bestof2/bestOfTheWurst2Banner.jpg
---
------
![https://wurstlang.org](/assets/images/blog/bestof2/bestOfTheWurst2Banner.jpg){: .img-responsive}

This is the second issue in a regular series of news posts about wurst and the wurstscript community. Unlike [the previous issue](https://wurstlang.org/blog/thissummerinwurst.html), this one is short, and focused on this month's progress. We intend to use this format for all future posts.

__What is wurst?__ Wurstscript is a programming language that compiles to JASS (the language used for scripting warcraft 3 custom games), and is developed alongside a suite of tools, which provide a coherent and modern modding development experience. It can even work alongside maps written in vJass. Wurstscript is designed to make hard problems easier and more elegant, and easy problems dead simple.

The theme of this issue is __"wurstscript in practice"__, where we want to show how regular ordinary maps use wurstscript, instead of focusing on higher level language features.


# Toolchain updates

* The [setup tool](https://wurstlang.org/start.html) has been moved to a separate repository. It now checks for new versions of itself as well as silently checking for compiler and project dependency updates. To get these __critical__ new features, please do update your tool by downloading at the link above.
* [Unit Tests](https://wurstlang.org/manual.html#automated-unit-tests) now have map-wide read access to compiletime resources. This allows the author to unit-test some behaviors that were previously not possible.
* Added "hashtable mocks" for string data operations, which allows them to work at compiletime and in unit tests.
* Bug fixes:
    - Fixed some edge cases where vscode autocomplete would misbehave.
    - Fixed a bug which caused the `buildmap` command to emit an invalid mapfile in certain cases.
    - Changing between files in vscode no longer causes an invalid buffer ("ambigious reference error").
    - Standard library fixes, and new features.
    - Fixed some rare cases of ascii-int parsing problems, which improves JASS compliance.

Special thanks to @DD_LegionTN and @HappyTauren for their testing and contribution efforts.


# Hiveworkshop integration

This month a number of us have been thinking about, and acting on, ways of improving unification between wurst's development and hive workshop.

One achievement on this front is the addition of the Wurst tag, now enabled for all code-related submissions. This includes:

* Spell submissions.
* Triggers & Scripts posts.
* JASS (code) submissions.

![](/assets/images/blog/bestof2/hiveTag.jpg){: .img-responsive}

We were also excited to see [multiple](https://www.hiveworkshop.com/threads/snippet-initpackage.300738/) [submissions](https://www.hiveworkshop.com/threads/quest.300223/) before this was even announced!

You should expect further wurst-related activity in the near future as a number of community members are getting involved.

We're excited to see what you've done that might be fun or interesting but doesn't quite fit in the standard library - and even moreso interested to see what kind of magic you can work up in spell submissions. For code review feedback always feel free to tag @Frotty or @Cokemonkey11 .

---

As requested by our readers, we're going to include a code snippet example in our posts from now on. In line with this month's theme, here's a practical and simple example that shows how wurst can make an easy problem trivial:

```wurst
package SimpleSpell
/// Augments the Warden blink ability to deal damage to units in the target
/// area.  Units with low enough health are instead slain.

import Assets
import ClosureForGroups
import EventHelper
import RegisterEvents

constant ID_BLINK = 'A000'

constant BASE_DAMAGE    =  100.
constant DAMAGE_RADIUS  =  150.
constant SLAY_THRESHOLD =  200.
constant BLINK_RANGE    = 1000.

constant EFFECT_POISON = Abilities.poisonStingTarget
constant EFFECT_SLAY   = Objects.nightElfBloodArcher

function onEffect()
	let caster = GetTriggerUnit()

	forUnitsInRange(getSpellTargetPos(), DAMAGE_RADIUS, (unit u) -> begin
		if caster.getOwner().isEnemyOf(u.getOwner()) and u.isAlive()
			if u.getHP() <= SLAY_THRESHOLD
				u.addEffect(EFFECT_SLAY, "origin").destr()
				caster.damageTarget(u, SLAY_THRESHOLD * 2.)
			else
				u.addEffect(EFFECT_POISON, "origin").destr()
				caster.damageTarget(u, BASE_DAMAGE)
	end)


init
	registerSpellEffectEvent(ID_BLINK, function onEffect)
```

Then when the wurst compiler is run, the above emits nicely readable Jass (see below). This is just one example of wurst providing zero-cost abstraction, since the inliner would ultimately inline e.g. getSpellTargetPos into 2 local definitions - a topic we will discuss more in future posts.

```wurst
function getSpellTargetPos takes nothing returns real
    set getSpellTargetPos_return_x = GetSpellTargetX()
    set getSpellTargetPos_return_y = GetSpellTargetY()
    return getSpellTargetPos_return_x
endfunction

function forUnitsInRange takes real pos_x, real pos_y, real radius, integer c returns nothing
    call pushCallback(c)
    call GroupEnumUnitsInRange(Group_ENUM_GROUP, pos_x, pos_y, radius, ClosureForGroups_filter)
    call popCallback()
endfunction

function onEffect takes nothing returns nothing
    local unit caster_2 = GetTriggerUnit()
    local real temp_x = getSpellTargetPos()
    local real temp_y = getSpellTargetPos_return_y
    local integer clVar = alloc_Closure_2()
    set caster[clVar] = caster_2
    call forUnitsInRange(temp_x, temp_y, 150., clVar)
    set caster_2 = null
endfunction
```

Next month we'll return to a more hardcore example, demonstrating `@compiletime function`s + expressions, and their uses.

We look forward to your comments! As usual, we chat all things wurst at the [#inwc.de-maps](https://kiwiirc.com/client/irc.quakenet.org/#inwc.de-maps) IRC channel.
