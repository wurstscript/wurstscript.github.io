---
title: Mastering Closures in Wurst
excerpt: Learn closures in Wurst with simple and beginner-friendly explanations.
date: 2025-01-15
icon:
  type: fa
  name: fa-star
color: pink
author: HappyTauren & Frotty
layout: doc
---

![](/assets/images/tutorials/closure.jpg){: .img-responsive}

## Introduction

Closures in Wurst are a way to make your code more powerful and flexible. They let you treat functions like variables, which means you can pass them around, save them for later, and even create them on the fly. This tutorial will explain closures step-by-step in a simple, beginner-friendly way.

---

## What Are Closures?

A **closure** is a function that remembers the variables around it. Think of it like a tool that keeps everything it needs in its toolbox, even if you move it somewhere else.

In basic Jass, you can only store functions in a very limited way, using the `code` type. You can't:

- Pass extra information to these stored functions.
- Save them in lists or tables.
- Do more than call them.

Closures solve these problems, letting you use functions in flexible and useful ways.

---

## Starting with Anonymous Functions

Closures often use **anonymous functions**, which are functions without names. Let’s start by turning a regular function into an anonymous one. You’ll also learn how to use **lambdas**, a shortcut syntax for anonymous functions.

### Example: Regular Functions vs. Anonymous Functions

```wurst
function greet()
    print("Hello!")

init
    CreateTrigger().addAction(function greet)
```

This passes the `greet` function to `addAction`. Here’s how to do the same thing with an anonymous function:

```wurst
init
    CreateTrigger().addAction(() -> print("Hello!"))
```

**What’s happening here?**
- `() ->` is the syntax for a **lambda expression**, which is a shorthand way to write anonymous functions.
- The body of the function (`print("Hello!")`) comes after the arrow.

By skipping the step of naming the function, your code becomes shorter and easier to read.

### Anonymous Functions with Parameters

While the `code` type does not support it, anonymous functions can take parameters just like regular functions. Example from `ClosureForGroups`:

```wurst
forUnitsInRange(ZERO2, 100, (u) -> print(u.getName()))
```

**Key points:**
- The lambda `(u) ->` replaces a named function.
- The anonymous function will be called once for every nearby unit, with `u` referencing that unit.

The function `forUnitsInRange` iterates over all units in the given range. In this example, the closure is used to print the name of each unit within 100 units of the `ZERO2` location.

---

## Using Closures for Flexibility

Closures take anonymous functions a step further. They can "remember" variables from their surroundings and use them later.

### Example: Delayed Effects

Let’s say you want a spell to deal damage after a short delay. Here’s how closures can make this easy:

```wurst
function castSpell()
    let caster = GetSpellAbilityUnit()
    let target = getSpellTargetPos()

    doAfter(0.5) ->
        createEffect("Abilities\Spells\Meteor\Impact.mdl", target)
        caster.damageTarget(target, 100)
```

**How it works:**
- `doAfter(0.5)` schedules the anonymous function to run after half a second.
- The closure "remembers" `caster` and `target`, so they’re available even when the function runs later.

---

### Note: Closures copy by value

Closures copy the values of variables they reference at the time they are created. Think of it like taking a snapshot of the variables - any changes made to the variables inside the closure won’t affect it outside the closure, and vice versa.

For example, this code won’t behave as expected:

```wurst
init
  var i = 1
  execute() ->
    i = 2
    print(i) // This will print "2"

  print(i) // This will print "1"
```

Here, the second print uses the value of `i` as it was initially. Setting it inside the closure only has an effect in the closure's context. To share changes, you can use a `Reference<T>` to wrap the variable:

```wurst
init
  var i = new Reference(1)
  execute() ->
    i.val = 2
    print(i.val) // This will print "2"

  print(i.val) // This will print "2"
  destroy i
```

By using `Reference<T>`, both the closure and the rest of your code can work with the same underlying value.

---

## Saving Closures for Later

Sometimes, you’ll want to save a closure and use it multiple times. Closures can be stored in variables or lists just like other values.

### Example: Storing Closures in Variables

```wurst
interface Fn
    function run()

function saveClosureExample()
    Fn greet = () -> print("Hello, world!")
    greet.run() // Call the stored closure
```

### Example: Storing Closures in a List

You can also save multiple closures in a list to call them later:

```wurst
interface Fn
    function run()

function storeClosuresInList()
    let callbacks = new LinkedList<Fn>()

    // Add some closures
    callbacks.add(() -> print("Callback 1 executed!"))
    callbacks.add(() -> print("Callback 2 executed!"))

    // Execute them later
    for callback in callbacks
        callback.run()
```

Closures stored in a list can be executed sequentially or dynamically based on conditions, making them ideal for callback systems.

---

## Simplifying Triggers with Closures

Closures can replace triggers for many tasks. Instead of writing a separate function for each trigger action, closures let you define the behavior directly.

### Example: Custom Events

Here’s an example of a simple custom event system using closures:

```wurst
package CustomEvents

interface Listener
    function run()

class EventSystem
    private LinkedList<Listener> listeners = new LinkedList<>()

    function addListener(Listener listener)
        listeners.add(listener)

    function triggerEvent()
        for listener in listeners
            listener.run()

init
    let eventSystem = new EventSystem()

    eventSystem.addListener(() -> print("Event triggered: Listener 1"))
    eventSystem.addListener(() -> print("Event triggered: Listener 2"))

    eventSystem.triggerEvent()
```

This example shows how closures simplify event handling by avoiding boilerplate code for each listener.

---

## Tips for Beginners

1. **Start Small:** Use closures for simple tasks, like delayed actions or short event listeners.
2. **Practice:** Try turning existing named functions into anonymous ones.
3. **Explore:** Check out Wurst’s libraries like `ClosureTimers` for more examples and inspiration.

---

## Wrapping Up

Closures in Wurst are powerful but easy to use once you get the hang of them. They’re great for managing actions, storing functions, and writing clean, reusable code. Start experimenting with closures in your projects and see how much they simplify your workflow!

For more details, visit the [Wurst manual](https://wurstlang.org/manual.html#lambdas-and-closures) or join the community for support.

Happy coding!
