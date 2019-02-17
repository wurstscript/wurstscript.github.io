---
title: Best of the Wurst 3 - January Update
layout: post
excerpt: Wurst enters another year with many changes
icon:
  type: fa
  name: fa-snowflake-o
color: blue
author: Frotty
date: 2018-01-01
banner: /assets/images/blog/bestof3/bestOfTheWurst3Banner.jpg
---
------
![https://wurstlang.org](/assets/images/blog/bestof3/bestOfTheWurst3Banner.jpg){: .img-responsive}

Welcome to the third issue of our Wurstscript blog! And happy new year!

**Background:** Wurst is a compiled, higher level programming language that provides powerful tools and safety for an integrated development experience in wc3 modding.

The theme of this month's issue is "object-editing in wurstscript".


# Updates

Due to increased usage of the Wurst Tools, several critical bugs have been found and addressed in the month of december. Make sure to download a fresh version of the setup tool and update your compiler as well as projects accordingly. We are also glad to have accepted several Pull Requests for the standard library, and are proud to present [Wurstbin](https://bin.wurstlang.org/), a wurst pastebin. Wurst and tools also now found their final home at [wurstlang.org](https://wurstlang.org/).

## Compiler
* A couple of severe dynamic dispatch bugs have been fixed
* The buildmap command doesn't output maps with corrupted header anymore
* More jass types and natives like units and groups have been implemented for compiletime
* Compiletime hashtables now more closely mimic wc3 hashtable behaviour.
* Class array-members can now be initialized during instantiation
* ObjData .txt output now uses the cascade operator to chain calls
* Fixed cases where text highlight was off-by-one in vscode
* Improved unit test console output fidelity
* Packages ending with "Tests" are now ignored from suggestions
* Logs from all tools are now stored at `~/.wurst/logs`


## Standard Library
* We merged several user-created pull requests, namely fixing OnUnitEnterLeave [#20](https://github.com/wurstscript/WurstStdlib2/pull/20) issues and replacing the broken sync packages [#19](https://github.com/wurstscript/WurstStdlib2/pull/19). Big thanks to @Sir_Moriarty and @Trokkin
* Along with the unit test improvements for the compiler the stdlib package, Wurstunit has also been refactored and Tests for groups and units have been added
* Added more group and map convience functions
* UnitIndexer is now more flexible and allows configuring which units to index and how to index them

## Setup App
* The setup no longer crashes if its google network test doesn't repond with 200 OK
* Proper logging has been added and is saved to `~/.wurst/logs/setup.log`
* Regressions regarding project updates have been fixed
* The wurst.build file is now recognized as yaml inside vscode

## Introducing Wurstbin
An elegant and simple way to share your wurst and jass code snippets. No login required.
[Check it out](https://bin.wurstlang.org/)
![](https://i.imgur.com/8bVnUT1.png){: .img-responsive}


# ObjectEditing 101

WurstScript ships with a jass "interpreter", which can evaluate Jass code outside of wc3. This is usually done when compiling the project - hence we name the timeslot it occupies "__compiletime__". This is the opposite of running the map inside the game, which we refer to as "__runtime__".

![](https://i.imgur.com/bJA1su0.png){: .img-responsive}

You can mark any function to be executed at compiletime, by simply annotating it with `@compiletime`. The only caveat of this is that you can only use jass natives that have been implemented for compiletime, and you only have access to resources from your script that have also been initialized at compiletime.

Let's look at a small example:

## Unit Generation Example

```wurst
import UnitObjEditing
@compiletime function createUnit()
    new UnitDefinition('xyz1', 'ewsp')
	..setName("Wurst Generated Unit")
```

Here we create a new UnitDefinition based on Wisp, and assign a name for it. These objectdata-classes then get transformed into the approriate binary files, in this case `war3map.w3u`, which are retained for runtime. Wurst is perfectly capable of managing these assets alongide units defined in the normal object editor.

## Retaining variables

You might want to generate values at compiletime and just keep the evaluated result to use at runtime. A very common usecase for this is generating IDs.
Let's enhance our example from above with an automatically generated id which  is stored in a global:

```wurst
import ObjectIdGenerator
constant MY_UNIT_ID = compiletime(UNIT_ID_GEN.next())

@compiletime function createUnit()
    new UnitDefinition(MY_UNIT_ID, 'ewsp')
	..setName("Wurst Generated Unit")
```

The `UNIT_ID_GEN.next()` call refers to an `ObjectIdGenerator` object that generates only safe IDs inside a range that isn't used by standard units. As you can see, you have to wrap your expression with `compiletime()` for it to be evaluated and retained for runtime.

## Ability generation best practises

When generating abilities one should avoid using `AbilityDefinition` directly - instead, one of its subclasses, e.g. the concrete `AbilityDefinitionFireBolt` for Fire Bolt. This way you don't need the original id and can use the functions of the concrete subclass to modify ability-specific fields.

```wurst
import AbilityObjEditing
@compiletime function generateFireBolt()
    new AbilityDefinitionFireBolt(MY_FIREBOLT_ID)
        // This setter would not be available on
        // the base class `AbilityDefinition`.
        ..setDamage(1, 200)
```

For custom triggered hero spells, `channel` is frequently used. Take a look at the API provided by `ChannelAbilityPreset`:

```wurst
import ChannelAbilityPreset
@compiletime function generateLeap()
    new ChannelAbilityPreset(MY_LEAP_ID, LEVELS, true)
        ..presetTargetTypes(Targettype.POINT)
        ..presetCooldown(lvl -> 30 - (level * 2))
```

Notice the `presetCooldown` call with the lambda expression. Next to normal setters, the standard library provides `preset*` functions that are either convenience wrappers or take closure parameters to fill multiple levels using only one call.


# Hiveworkshop Wurst News

* @Frotty and @Cokemonkey11 are now approved code reviewers for Wurst on hive workshop.
* The setup app is now an approved resource in the tools section

As always, come and chat with us on [IRC](https://kiwiirc.com/nextclient/#irc://irc.quakenet.org/#inwc.de-maps) or post on this thread to provide us feedback for these monthy blog posts, as well as requesting what you want us to cover next.
