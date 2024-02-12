---
title: Get close with closures
excerpt: Learn how to master this advanced technique.
date: 2019-02-01
icon:
  type: fa
  name: fa-star
color: pink
author: HappyTauren & Frotty
layout: doc
---

![](/assets/images/tutorials/closure.jpg){: .img-responsive}

## Preamble

This tutorial is for intermediate developers who are familiar with the basics of programming and want to extend their knowledge and capabilities.

## Introduction

In map development you often encounter situations where you want to provide custom event listeners, delay execution of code, use a function to filter units during an enum, or simply store functions like objects in variables, without the limitations of the `code` type.

All of those examples are dealing with functions in one way or the other, and Jass is not very good at dealing with functions.
Luckily Wurst is and therefore in almost all cases where you would use `trigger` or `code`, you should use closures instead.

In Jass, it is possible to store functions (type `code`) in a variable, but afterwards, it is not possible to do a whole lot with them. A major limitation is that `code array` isn't allowed by jass, and it is not possible to put `code` into a `hashtable`, either.

There exist a few workarounds for calling and storing those functions using Jass, which usually require the user to fiddle with the implementation, which usually relies on `boolexpr`, `trigger` or the unsafe `ExecuteFunc(string fname)` for making pseudo function variables.

Most of those drawbacks are addressed by closures.

## Anonymous functions

But before we get to closures, let's differentiate a few things to prevent confusion. Closures are used in conjunction with the lambda syntax which allows you to define anonymous functions.
What are anonymous functions? Very simple: It's a function without a name to reference it. Look at the following example:

```wurst
function foo()
    print("Hello")

init
    CreateTrigger().addAction(function foo)
```

We are passing the name of the function as reference to `addAction`, the function is named, i.e. not anonymous.
Let's make it anonymous by using the lambda syntax:

```wurst
init
    CreateTrigger().addAction(() -> print("Hello"))
```

The new part here is `() -> print("Hello")` and as you can see it is simply the part of the function after the name:

```wurst
/*function foo*/()
    print("Hello")
```

With an arrow `->` added to indicate direction and the start of the body.
It works just the same with parameters:

```wurst
function foo(int i1, int i2)
    print("Hello " + i1.toString + i2.toString())

// Becomes
(i1, i2) -> print("Hello " + i1.toString + i2.toString())
```

However this is not possible with `addAction` and others because in Jass you cannot invoke functions of type `code` with parameters and have to use global `GetXXX` functions to access event related or passed over data.

Thus we come to closures.

## Closures

Closures get around those limitations by using classes and letting the compiler do all the annoying work for you automatically. Closures are created implicitly, this means you will not call `new` to instantiate them. To have that happen, you must first define the class from which your closure object will be constructed. Let's go with the example above and implement a custom callback with 2 integers as parameters. This is simply done by an interface or an abstract class with exactly one abstract function:

```wurst
interface Calculator
    abstract function doCalc(int i1, int i2)
```

We can use this type as expected and so far there is nothing special about it. Let's build a quick test:

```wurst
class IntGenerator
    let calculators = new LinkedList<Calculator>

    function doCalculations()
        let i1 = GetRandomInt(-100, 100)
        let i2 = GetRandomInt(-100, 100)
        print("i1: " + i1.toString() + " i2: " + i2.toString())
        for calculator in calculators
            print(calculator.doCalc(i1, i2).toString())

    function addCalculator(Calculator calculator)
        calculators.add(calculator)

@Test
function testCalculations()
    let gen = new IntGenerator()
    // gen.addCalculator()
    gen.doCalculations()
```

What we have here is an `IntGenerator` that accepts objects of `Calculator` in order to compare the results of different calculations on 2 random numbers.
If we were not to use closures, we would need to declare a class that implements `Calculator` , override the doCalc function and then pass an instance created via `new` to `addCalculator`, e.g.:

```wurst
class MyCalculator implements Calculator
    override function doCalc(int i1, int i2)
        return i1 + (i1 * i2)

...
    gen.addCalculator(new MyCalculator())
```

And this is actually exactly what Wurst does for you, but implicitly. Again the part after the function name becomes the lambda:

```wurst
    let gen = new IntGenerator()
    gen.addCalculator() (int i1, int i2) ->
        return i1 + (i1 * i2)
    gen.doCalculations()
```

As you can notice there is no more `MyCalculator` class, but Wurst will generate one just like it for you. Since you have no name to access it, just like the function, it is anonymous. In a sense you can think of a closure as an anonymous class, created for each implementation of the interface. Btw, since the types are given in `interface Calculator`, we can omit the types in the lambda:

```wurst
    let gen = new IntGenerator()
    gen.addCalculator() (i1, i2) ->
        return i1 + (i1 * i2)
    gen.addCalculator() (i1, i2) ->
        return i1 + i2
    gen.doCalculations()
```

If we add two calculators, wurst will generate two closure classes, three for three and so on. This already exceeds the possibilities of `code`, but additionally by using a class we are able to retain data.

## Data Retention

Often you want to pass data from the outside into the anonymous function.
A common example for this is the delayed execution of code.

Let's say you want to create a infernal-like spell that plays an animation of a meteor hitting the ground. Of course the damage and other potential events should only happen after some time, when the meteor effect reached the ground. In vJass you would do this with something like TimerUtils and a data struct:

```wurst
struct DelayData
    unit caster
    int abilLvl
    real x
    real y

function doEffect() takes nothing returns nothing
    local timer tim = GetExpiredTimer()
    local DelayData data = (DelayData) tim.getData()
    // Do effect..
endfunction

function onSpell() takes nothing returns nothing
    local timer tim = getTimer()
    local DelayData data = DelayData.create()
    // Assign data..
    tim.setData((int)data)
    TimerStart(tim, 0.3, false, function doEffect)
endfunction
```

If you've spent years coding in Jass, this might come natural to you. But there are several issues with this piece of code.
It involves a lot of manual work by the developer that allows for easy mistakes. The flow is counter intuitive from the bottom to the top.
Thus again, wurst does this for you. Using `CLosureTimers` the example would look like this:

```wurst
function onSpell()
    let caster = GetSpellAbilityUnit()
    let lvl = caster.getAbilityLevel(SPELL_ID)
    let target = getSpellTargetPos()
    doAfter(0.3) ->
        caster.damageTarget(.., lvl * 100)
        flashEffect("xxx", target)
```

Behind the scenes wurst does exactly what you had to do manually in vJass. Create a class, instantiate it and attach it to the timer, using a wurst version of `TimerUtils`. Look into the package to see how it's implemented.

## Saving Closures in Variables

As you have already seen in `IntGenerator`, closure types can easily be saved in variables, classes and hashtables. Common use cases are periodic timers or temporary event callbacks where you want access to the callback function to destroy it later. A simple example that summons spawns for 10 seconds on unit death:

```wurst
function spellEffect()
    let listener = EventListener.add(EVENT_UNIT_DEATH) ->
        print("Unit died, summoun spawn for caster")
        createUnit(...)

    doAfter(10.) ->
        // Buff over
        destroy listener
```

As you can see we save the listener returned by `EventListener.add` in a variable to destroy it after 10 seconds.
Remember that closures are not destroyed automatically unless the underlying system does it for you. The standard library packages destroy the closures after use if intended temporary.

## Don't get triggered

As mentioned in the introduction, closures are also a replacement for triggers, which are often used to provide custom events in Jass.
Instead of using `addAction` and providing a reference to a callback function we again define a closure interface/class and save it as needed.

Consider a map in which we have a bunch of levels which are expressed in our code via a `Level` class, and we want to register some custom event when the level is finished. You can copy and paste this package into your map and run it to see the print output:

```wurst
package Level

interface LevelFinishedListener
	function onFinish()

class Level
	private LevelFinishedListener listener

	function addFinishListener(LevelFinishedListener listener)
		this.listener = listener

	function finishLevel()
		print("Level finished")
		listener.onFinish()

init
	let lvl1 = new Level()
	..addFinishListener() ->
		print("You beat level 1 - prepare to die")
	let lvl1 = new Level()
	..addFinishListener() ->
		print("You beat level 2 - how unexpected")

	// To test the listener
	lvl1.finishLevel()
```

## Closing words

We hope this tutorial helped you understand one of the advanced topics a little better. Check out the [manual section](https://wurstlang.org/manual.html#lambdas-and-closures) for more information or hit us up in the chat for further help.

