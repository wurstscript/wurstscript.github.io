---
title: Intro
sections:
- Preamble
- Introduction
- Anonymous functions
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
