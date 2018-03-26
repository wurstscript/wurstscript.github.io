---
title: Introduction Part Two
sections:
- Explanation
- The Standard Library
- Coding Conventions
- Build, deploy, and release
- How to find library code
---

------

# Explanation

Let's go into further detail about what we just did.

## The Standard Library

If you have used (v)Jass before, you might wonder where the **print** came from in use above.

It is neither a hardcoded wrapper around `BJDebugMsg()`, nor internal to the wurst language, but instead a function defined in *the standard library* (aka stdlib/stl).

WurstScript ships with a standard library that contains a vast collection of convenient wrappers, utility packages, and powerful systems, which help in the creation of almost any map, and aid in maintaining a consistent syntax for high-level programming.

It has been automatically imported when you created your project using the setup tool and is now inside the `_build/dependencies/wurststdlib2` folder in your project's root. Since this is an external dependency, you should not modify these files. However, feel free to look at and learn from them.

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

Note that we used the type `angle` instead of a plain real. This is a tuple-type and is as efficient as a normal real, but provides domain specific methods for working with angles. It also avoids some common mistakes like confusing angles in radians and degrees.

# Build, deploy, and release

Think of `MyMap.w3x` as a "terrain" map. It's the place you go to make terrain, doodad, and destructable changes; and wurst uses that as a starting point when compiling a mapfile for test or release. Other changes like gameplay constants also go in the terrain map, but the point remains the same.

The terrain map is used read-only by wurst, meaning that wurst never edits or saves over that file. This is nice because it means you can edit the terrain in the world editor and the code in vscode at the same time.

When you execute `buildmap` in vscode, the output mapfile - based on the terrain and wurst.build files, including all of your compiled code - is generated into the `/_build` folder. It's this which you can use to release and distribute your map online.
The `runmap` command functions similar, however the map is named __WurstRunMap.w3x__, get copied into your warcraft maps folder and wc3 gets run with the appropriate arguments to run the map.  

It's this which you can use to release your map online.

One other cool feature is that wurst will automatically import contents of the `imports/` directory into the built mapfile. This can be convenient for quickly adding a model file for use in a spell, for example.

If you want to use the imported resources inside the terrain map, copy the built mapfile from the `/_build` folder over to the project's root. Open it with the World Editor, and save it, clearing wurst's generated code. Now you'll have a terrain map with imports, which is also suitable as a starting point for the wurst editor.

# How to find library code

As you can see, wurst has a powerful API for the types and functions exposed by jass to write code at a slightly higher level. As a beginner, one of the your first questions will be about how to find the right library code to do what you want without resorting to jass natives. Three quick tips on that:

* Take a look at the subfolders in the standard library directory to get an idea of what you might expect to find standard library code for
* Try using autocomplete. If you have a unit `u` and you want to kill it, see what vscode can offer you by typing `u.k` followed by `ctrl-space`.
* Avoid writers block. Sometimes it's better to write it the jass way and come back afterwards in case you can't find the wurst equivalent. After all, there's no reason wurst would disallow this! Keep in mind as well that wurst doesn't have fancy API equivalents for every single jass call.

If you're looking for an equivalent to some vJass library found on hiveworkshop, your approach might differ a bit.

* Consider if there might be something better. For example, instead of `Table`, wurst users are encouraged to use the generic `HashMap<k, v>` which makes much nicer and more type-safe code.
* Ask around. Chances are, one of us have already translated the vJass library you like. Cokemonkey11 in particular maintains a number of maps that were previously vJass.
* Write it yourself! We love contributions.



