---
title: 介绍 (Part 2)
sections:
- 说明
- 标准库
- 代码规范
- Build, deploy, and release
- How to find library code
---

------

# 说明

让我们进一步详细分析我们刚刚做了什么。

## 标准库

如果您以前使用过Jass/vJass，您可能会想知道**print**是从哪里来的。

它既不是针对`BJDebugMsg（）`特别编写的封装，也不是wurst的内部函数，而是一个定义在*标准库*（又名stdlib/stl）中的函数。

WurstScript提供了一个标准库，其中包含大量方便的封装、实用的程序包和强大的系统，它们能够帮助几乎所有的地图，并帮助维护高级编程的一致语法。

当您使用安装工具创建项目时，它已被**自动导入**，并且现在位于项目根目录下的`_build/dependencies/wurststdlib2`文件夹中。由于这是外部依赖项，因此您**不应该**修改这些文件。但是您可以随时打开、查看其中的内容并可以通过它们来学习。

您可以通过按住Ctrl键然后单击函数（如单词**print**上的任何位置）来访问vscode中的Printing包。

![](/assets/images/beginner/jumptodecl.gif){: .img-rounded .img-responsive}

`Printing`包中的函数引用了原始的魔兽争霸3的native函数（位于**common.j**和**blizzard.j**中）。

您可以使用vscode的全局搜索或文件搜索（`ctrl+p`）来搜索您要查看的包。

## 代码规范

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

# Part 3

Coming soon!


