---
title: Wurst Beginner Guide
excerpt: Get started and create your first map using Wurst!
date: 2021-10-07
icon:
  type: fa
  name: fa-graduation-cap
color: orange
author: Frotty, Cokemonkey11, peq
layout: doc
image: /assets/images/wurst-beginner.jpg
---

{: .question}
*&nbsp;*{: .fa .fa-question-circle} Wurst not installed yet? Follow the __[Setup Guide](../start.html)__ and create a new Project.

{: .answer}
*&nbsp;*{: .fa .fa-exclamation-circle} This guide expects the reader to have **basic** knowledge of functions and variables.

## Welcome

Hello and welcome to WurstScript. This guide is an informal introduction to the Wurst workflow and an easy way to verify your installation.
We will cover how to structure code, use the standard library, create data objects through code and run the final product in warcraft 3.
This guide will **not** explain the core principles of programming, i.e. how functions and variables work and how we use them.

## Project Structure

If you setup your project correctly using the setup app, there will be many folders and files generated in the project folder you chose.
Otherwise setup your project now.
Load the project in VSCode by opening the project folder (`File` -> `Open Folder...`).
It is important to open the project **folder** so that Wurst can detect the project.
After opening you should see something like this:

![](/assets/images/beginner/ProjectExplorer.png){: .img-rounded .img-responsive}

Let's go through all the files:
- **/_build** Contains dynamically generated content and shouldn't be touched by the user, except for copying the compiled map.
- **/.vscode** Contains a **settings.json** file that links vscode to the wurst tools. You can add additional project-wide configuration here.
- **/imports** All files inside this folder will be imported into your map upon saving, retaining paths.
- **/wurst** All files in this folder that end with **.wurst, .jurst, .j** will be parsed as code.
- **.gitignore** Useful template if you want to make your wurst project a git repo as well
- **ExampleMap.w3x** An example tft map containing a Bloodmage
- **wurst_run.args** Defines a set of flags to use when running a map from VSCode
- **wurst.build** Contains project build information
- **wurst.dependencies** Generated file that links libraries. Shouldn't be touched.
- **wurst/Hello.wurst** Demo package

{: .answer}
*&nbsp;*{: .fa .fa-exclamation-circle} Make sure to always open a .wurst file. Otherwise the vscode plugin might not load.

## Hello Wurst

Open the **Hello.wurst** file inside the **wurst** folder to start the wurst plugin.
Run the project by opening the command console `F1` and using the `>runmap` command.

![](/assets/images/beginner/RunMap.png){: .img-responsive .img-rounded}

The text **Hello World** will be displayed.

![](/assets/images/beginner/HelloWorld.png){: .img-responsive .img-rounded}

Let's take a look at the code:

{: .line-numbers}
```wurst
package Hello

/* Hello and welcome to Wurst!
This is just a demo package.
You can modify it to tests things out
and then later delete it and create your own, new packages.
Enjoy WurstScript? Consider starring our repo https://github.com/wurstscript/WurstScript */
init
	print("Hello World")
```

The first line

```wurst
package Hello
```

is the package declaration. Each file contains exactly one package that is named like the file without the ending. Apart from comments this must be the first line in any .wurst file. The next bunch of lines

```wurst
/* Hello and welcome to Wurst!
This is just a demo package.
You can modify it to tests things out
and then later delete it and create your own, new packages.
Enjoy WurstScript? Consider starring our repo https://github.com/wurstscript/WurstScript */
```

are comments. The final two lines

```wurst
init
	print("Hello World")
```

consist of an **init**-block by just containing the **init** keyword without indentation.
And then everything indented after this keyword is inside it's block of contents, such as the **print** statement, which displays the given text on the screen for all players.
All blocks automatically end at the end of the file, such as the **init** and **package** blocks in this example.


Let's go into further detail about what we just did.

## The Standard Library

If you have used (v)Jass before, you might wonder where the **print** came from in use above.

It is neither a hardcoded wrapper around `BJDebugMsg()`, nor internal to the wurst language. Instead it simply is a function defined in a package inside __the standard library__ (aka stdlib/stl).

WurstScript ships with a standard library that contains a vast collection of convenient wrappers, utility packages, and powerful systems, which help in the creation of any map, let you focus on content and aid in maintaining a consistent syntax for high-level programming.

> The standard library documentation can be found [HERE](https://wurstlang.org/stdlib)

It has been automatically imported when you created your project using the setup tool and is now inside the `_build/dependencies/wurststdlib2` folder in your project's root. Since this is an external dependency, you should not modify these files. However, feel free to look at and learn from them.
To update your stdanrd library dependency, use the setup's `Import` functionality.

You can visit the `Printing` package in vscode by holding down the ctrl key and then clicking the function call, i.e. anywhere on the
word **print**.

![](/assets/images/beginner/jumptodecl.gif){: .img-rounded .img-responsive}

The functions inside the `Printing` package then reference the original warcraft natives found in **common.j and blizzard.j**.

You can use the global vscode search or file search (`ctrl+p`) to find packages you're looking for.

## Coding Conventions

In Wurst, it is generally not recommended to call most natives directly. Instead, an extension function should be used to make the code more concise, readable, consistent and documented. Extension functions can also be easier found via autocomplete.

Let's look at some examples.

### Nested Function Calls

Jass:

```wurst
local integer id = GetPlayerId(GetOwningPlayer(GetTriggerUnit()))
```

In the Jass variant, even though the code is read from left to right, the order of execution is actually inverse, `GetTriggerUnit()` being the first expression to be evaluated.

Contrast that with Wurst:

```wurst
let id = GetTriggerUnit().getOwner().getId()
```

In the wurst counterpart the code is executed in the same order it is read. Implicit meanings are omitted and there are no nested brackets. Users of Java and other higher level programming languages will find this as no surprise, and indeed new users too will probably agree this way of coding feels more natural. This functionality arises from another automatic import from the standard library - the `Unit` API.

For a complete list of all coding conventions, visit the [manual](https://wurstlang.org/manual.html#coding-conventions).

### Function Chaining

Jass:

```wurst
local unit u = GetTriggerUnit()
call SetUnitX(u, 1000.)
call SetUnitY(u, 2000.)
call UnitAddAbility(u, 'hble')
call SetUnitPaused(u, true)
```

Jass doesn't support cascading/chaining functions on a mutual target. You have to resort to local variables or repeated native calls.

Wurst support chaining via the *cascade* operator:

```wurst
GetTriggerUnit()..setX(1000.)
                ..setY(2000.)
                ..addAbility('hble')
                ..setPaused(true)
```

*Extension functions* not only wrap existing natives, but also provide convenience functions. An improved version of the snippet above would be:

```wurst
GetTriggerUnit()..setXY(1000., 2000.)
                ..addAbility('hble')
                ..pause()
```

### Vector Math

Vectors are a very useful construct for positional calculations in 3d space. However, they add a lot of overhead if implemented as a class, which is why even vJass doesn't use them in any common libraries. Warcraft provides the `location` type - however, it is painful to use, and permanently leaks.

Wurst implements vectors via a [tuple-type](/manual.html#tuple-types), which don't need to be allocated and deallocated like classes/structs, but can still provide an elegant API.

vJass example:

```wurst
struct PreviousPointTracker
    real x = 0.
    real y = 0.
    real angleToLast = 0.

    method add(real addX, real addY) returns nothing
        local real oldX = x
        local real oldY = y
        set x = x + addX
        set y = y + addY
        set angleToLast = Atan2(y - oldX, x - oldY)
    endmethod
endstruct
```

In the wurst pendant below, you can see that the vector types provide overridden operators to use with vector maths.

```wurst
class PreviousPointTracker
    var pos = vec2(0., 0.)
    var angleToLast = angle(0.)

    function add(vec2 addedVec)
        let oldPos = pos
        pos += addedVec
        angleToLast = pos.angleTo(oldPos)
```

Note that we used the type `angle` instead of a plain real. This is also a tuple-type and therefore as efficient as a normal real, but provides domain specific methods for working with angles. It also avoids some common mistakes like confusing angles in radians and degrees.

# Build, deploy, and release

Think of `ExampleMap.w3x` as a "terrain" map. It's the place you go to make terrain, doodad, and destructable changes; and wurst uses that as a starting point when compiling a mapfile for test or release. Other changes like gameplay constants also go in the terrain map, but the point remains the same.

The terrain map is used read-only by wurst, meaning that wurst never edits or saves over that file. This is nice because it means you can edit the terrain in the world editor and the code in vscode at the same time.

When you execute the `buildmap` task in vscode, the output mapfile - based on the terrain and `wurst.build` file, including all of your compiled code - is generated into the `/_build` folder.

It's this which you can use to release and distribute your map online.

The `runmap` command functions similar, however the map is named __WurstRunMap.w3x__, gets copied into your warcraft maps folder and Warcraft III gets executed with the appropriate arguments to run the map. Use this command to test your map.

One other cool feature is that wurst will automatically import contents of the `imports/` directory into the built mapfile. This can be convenient for quickly adding a model file for use in a spell, for example. The folder paths inside the imports folder will be retained.

If you want to use the imported resources inside the terrain map, copy the built mapfile from the `/_build` folder over to the project's root. Open it with the World Editor, and save it, clearing wurst's generated code. Now you'll have a terrain map with imports, which is also suitable as a starting point for the wurst editor.

# How to find library code

As you can see, wurst has a powerful API for the types and functions exposed by jass to write code at a slightly higher level. As a beginner, one of the your first questions will be about how to find the right library code to do what you want without resorting to jass natives. Three quick tips on that:

* Visit the [documentation](https://wurstlang.org/stdlib)
* Take a look at the subfolders in the standard library directory to get an idea of what you might expect to find standard library code for
* Try using autocomplete. If you have a unit `u` and you want to kill it, see what vscode can offer you by typing `u.k` followed by `ctrl-space`.
* Avoid writers block. Sometimes it's better to write it the jass way and come back afterwards in case you can't find the wurst equivalent. After all, there's no reason wurst would disallow this! Keep in mind as well that wurst doesn't have fancy API equivalents for every single jass call.

If you're looking for an equivalent to some vJass library found on hiveworkshop, your approach might differ a bit.

* Consider if there might be something better. For example, instead of `Table`, wurst users are encouraged to use the generic `HashMap<K, V>` which makes much nicer and more type-safe code.
* Ask around. Chances are, one of us have already translated the vJass library you like. Cokemonkey11 in particular maintains a number of maps that were previously vJass. Visit the Chat!
* Write it yourself! We love contributions.

# Let's make a spell

We created an example spell in [march's blog post](https://wurstlang.org/news/bestofthewurst5.html). You should check it out!

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
If you have further questions or would like to hang out with wurst people, drop by our [Discord](https://discord.gg/mSHZpWcadz).
