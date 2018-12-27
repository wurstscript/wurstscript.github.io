---
title: Best of the Wurst 6 - April Augmentations
layout: post
excerpt: This time we check out our new vararg functions and take a look at vector tuples
icon:
  type: fa
  name: fa-servicestack
color: purple
author: Frotty
date: 2018-05-17
banner: /assets/images/blog/bestof6/wurstbanner6.png
---
------

![](/assets/images/blog/bestof6/wurstbanner6.png){: .img-responsive}

Wurst goes 1.29 and beyond
---

As the new patch has hit earlier in April, we have implemented the necessary changes to support it in our toolchain, while still keeping backwards compatibility alive.

Updates
---

* Increased **maximum class instances** to 32768 to match new array sizes in 1.29+
* The **new common.j and blizzard.j** are now supplied by default
* Implemented **vararg function parameters** - functions that take a variable amount of parameters of a certain type.
* VSCode **highlighting** has been improved to match the language documentation, recognizing punctuation and operators
* Deprecation warnings now also show for variables
* Fixed two unusual exceptions related to extended unicode characters
* Implemented additional natives for compiletime such as timers, triggers, rects and more, enabling those to be used in unit tests.
* Modified standard units get printed into `WurstExportedObjects` again, for easier transfer to generated objects
* The operator precedence of `or` in Wursts Jass parsing is now correct

__Standard Library__

* Merged __over 10 awesome pull requests__ regarding object editing, damage detection and the new Blz natives
* Extension function wrappers for the new natives, such as **effect.setColor** and **item.setName** have been added
* Packages affected by the new 24 player capability, such as **Colors**, have been updated accordingly
* Fixed and unit tested several issues with typecasting and error handling


Variable Argument Functions
---

Wurst now supports a limited variant of variable argument functions. Variable arguments can only be iterated over and not directly accessed, neither the amount.

Declaration:
```wurst
function sum(vararg int ints)
    var result = 0
    for i in ints
        result += i
    print(result.toString())
```
Usage:
```wurst
sum(1,2,3,4)
sum(14,22)
sum(23,52,5234,5,5)
```

Several functions in the standard library are now implemented via varargs, and as such, offer variable argument functionality, for example id-lists for object editing and groups:

```wurst
@compiletime function genBuilder()
    new UnitObjDefinition('buil', 'hfoo')
    ..setNormalAbilities(asList(ID_FIREBALL, ID_FIRE_NOVA))
    ..setStructuresBuilt(asList(ID_GUARD_TOWER, ID_CANNON_TOWER))

init
    CreateGroup().addUnit(u1, u2, u3)
```

Additionally `asList` is now available to inline create LinkedLists of elements

```wurst
asList("This", "will", "be", "a", "list")
asList(75., 125., 175.).add(250., 375.)
asList(players[0], players[1], players[2], players[3])
```


Protips
---

Want to be most efficient with wurst? Under the 'Protip' slogan we will regularly feature ways or products to improve your workflow:

* __Use Vector Tuples__
Instead of working with either locations, which leak and shouldn't be used, or x and y coordinates, which doubles the amount of code you have to write and the amount of mistakes you can make, Wurst provides `vec2` and `vec3` vector tuples which, unlike classes, don't have an identity and therefore are translated with zero overhead. This means you get the speed of using coordinates directly, but the comfort of class-like syntax and functionality.

Some common uses:

```wurst
// Event response
getSpellTargetPos() // instead of GetSpellTargetX/Y
getOrderPos() // instead of GetOrderPointX/Y
getOrderTargetPos()  // instead of GetWidgetX(GetOrderTarget()) etc.

// As class member, e.g. position, velocity
class A
    vec2 position

// Angle between points & Polar projection
function onEvent()
    let casterPos = GetTriggerUnit().getPos()
    let angl = casterPos.angleTo(getSpellTargetPos())
    flashEffect(Objects.impaleTargetDust, casterPos.polarOffset(angl, 256.))
```

You will notice that many extension functions also expect vector tuples as arguments, making them even more seamless to use.

* __VSCode extension: [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)__
Adds meaningful icons to the folder tree view, improving visual recognition and fidelity. Wurst code files don't get recognized yet, but most other files do, which helps to distinguish them.

![](/assets/images/blog/bestof6/vscodeicons.png){: .img-responsive}


Cheers
Frotty
