---
title: Best of the Wurst 7 - Summer Slumber
layout: post
excerpt: After a small summer break we return this month with many bugfixes and improvements
icon:
  type: fa
  name: fa-servicestack
color: orange
author: Frotty
date: 2018-07-30
banner: /assets/images/blog/bestof7/wurstbanner7.png
---
------

![](/assets/images/blog/bestof7/wurstbanner7.png){: .img-responsive}

After a small summer break we return this month with many bugfixes and improvements to WurstScript quality of life and overall user experience.

Make sure your [wurst setup tool](https://wurstlang.org/start.html#install-wurst) is up to date and then update your wurst installation to get improved handling of wc3 patch versions, some new code inspection warnings, and new optimizer features.

Tool updates
---

* The VSCode **runmap** command now more reliably detects patch level - fixes several cases of "black screen" when starting the game.
* Warnings and errors about *improper usage of `@compiletime`* have been added, which aids in avoiding some user level programming issues.
* A handful of new wurst optimizer features (see below).
* Valid function names in Wurst, such as 'set' and 'debug' no longer generate invalid output Jass.
* We have updated [JMPQ](https://github.com/inwc3/JMPQ3) once again to improve performance and compatibility of wurst with maps not built with the vanilla world editor, e.g. YDWE and w3x2ini (Thanks to @WaterKnight)
* Shoutout to users @dulingzhi and @DengSir for contributions to the VSCode editor experience: Highlighting improved ([PR #36](https://github.com/wurstscript/wurst4vscode/pull/36)), and language-server now better starts automatically ([PR #37](https://github.com/wurstscript/wurst4vscode/pull/37))


Standard library highlights
---

Many new features and many merged __pull requests__! The standard library is doing great - here are some notable changes:

* The Upgrade Object Editing package has been improved and completed by [#77](https://github.com/wurstscript/WurstStdlib2/pull/77)
* Missing extension functions and tuple wrappers have been added by [#79](https://github.com/wurstscript/WurstStdlib2/pull/79), [#80](https://github.com/wurstscript/WurstStdlib2/pull/80), [#81](https://github.com/wurstscript/WurstStdlib2/pull/81), [#82](https://github.com/wurstscript/WurstStdlib2/pull/82), [#84](https://github.com/wurstscript/WurstStdlib2/pull/84), [#85](https://github.com/wurstscript/WurstStdlib2/pull/85), [#86](https://github.com/wurstscript/WurstStdlib2/pull/86), [#87](https://github.com/wurstscript/WurstStdlib2/pull/87), [#88](https://github.com/wurstscript/WurstStdlib2/pull/88), [#89](https://github.com/wurstscript/WurstStdlib2/pull/89), [#90](https://github.com/wurstscript/WurstStdlib2/pull/90), [#91](https://github.com/wurstscript/WurstStdlib2/pull/91)
* The `TerrainUtils` package has been refactored for better integration and advanced functionality by [#67](https://github.com/wurstscript/WurstStdlib2/pull/67)
* `LinkedList#sort` has been fixed to not have exponential performance anymore
* `ClosureEvents` have been added to the standard library. A new package for easy encapsulated event listening.
Code Sample:
```wurst
EventListener.onPointCast(hero, MY_SPELL) (caster, target) ->
    forUnitsInRange(target, 256) victim ->
        caster.damageTarget(victim)
```
Big thanks to all the amazing contributors!


Spotlight: Code Optimizations
---

Did you know that the wurst compiler supports a number of automatic optimizations that keep your map script small & fast? (Discussed further in [Wurst for vJass Users](https://wurstlang.org/tutorials/wurst_for_vjass_users.html#on-performance)).

This month we have added *numerous* new optimizer improvements, making this feature of wurst more powerful than ever.  Here's a summary:

* The wurst package initialization now only uses one trigger for all `init`s.
* Duplicate initial branch statements without side effects are now merged outside the branch.
* Consecutive statements of `set` and `exitwhen` are now merged into one if applicable.
* Sums of the same variable or function are now rewritten (`a + a => a*2`) which improves the effectiveness of other optimizations.

The great thing about new optimizations is that they cause something like an avalanche effect. Meaning that due to these 'minor' changes in the output code, other already existing optimizations can now be applied over again successfully, where they didn't change anything before.

You can always check the output code in the `_build/output.j.txt` file. Here is a small example:

```wurst
let g = CreateGroup()
for u from g
    u.addHP(100)
```
Turns into:

```jass
local group from = CreateGroup()
local unit iterUnit
loop
    exitwhen FirstOfGroup(from) == null
    set iterUnit = FirstOfGroup(from)
    call GroupRemoveUnit(from, iterUnit)
    call SetUnitState(iterUnit, UNIT_STATE_LIFE, GetUnitState(iterUnit, UNIT_STATE_LIFE) + 100.)
endloop
set from = null
set iterUnit = null
```

Thanks for reading, we hope you enjoy these posts - and as usual, let us know what you think.

p.s.: If you haven't starred the Wurst repository yet, please do so to help us get to 100 stars!

Cheers!

-Frotty

