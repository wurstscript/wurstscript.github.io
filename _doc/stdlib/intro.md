---
title: WurstScript Standard Library
sections:
  - Intro
  - Overview
---

### [SOURCECODE ON GITHUB](https://github.com/wurstscript/WurstStdlib2)

### Intro

The WurstScript standard library provides a vast amount of useful packages to developers starting out with Wurst.
Many commonly used data structures, wc3-specific utility packages, Object Editing, and extension wrappers for the blizzard natives have been implemented.
These tools are unit tested, and ready to use in production immediately.

Its goal is to **abstract away Warcraft III's complexity** and give you bootstrapped, ready-to-use data structures and native wrappers, so you can focus on your map's content instead of boilerplate.

This documentation aims to be an informal, detailed description of packages from the standard library,
containing more examples, potentially images, further links and looks behind the scenes than the in-package hotdoc.
Hotdoc in nature should be short and precise, providing concise documentation about single entities, such as a function.
It should contain only one or very few usages examples to illustrate the API.

Both hotdoc and these pages should be used in conjuction for a quick familiarisation with the standard library and wurst best practises.
All packages in the standard library follow the [coding conventions](https://wurstlang.org/manual.html#coding-conventions) and should be inspected for guidance and inspiration for writing your own code.

> **[📚 Browse the full API Reference](/stdlib/ref/)**
> Every package, auto-generated from the in-source hotdoc. The guide below groups the most important
> packages by *what you are trying to do*.

### Find the right package

<div class="cap-grid" markdown="1">

<section class="cap-card cap-card--wide" markdown="1">
#### *&nbsp;*{: .fa .fa-cubes} Generate WC3 object data from code

Wurst is **code-first**. Instead of clicking through the old Object Editor and committing binary `war3map.w3*` files, you define abilities, units, items, buffs and upgrades in code. You get version control, code reuse, generated IDs that cannot collide, and object data that is defined at compile time and available to your code at runtime.

- **[AbilityObjEditing](/stdlib/ref/objediting/AbilityObjEditing.html)** create and modify abilities. [Guide](/stdlib/abil_objed)
- **[UnitObjEditing](/stdlib/ref/objediting/UnitObjEditing.html)** define units. [Guide](/stdlib/unit_objed)
- **[ItemObjEditing](/stdlib/ref/objediting/ItemObjEditing.html)** define items. [Guide](/stdlib/item_objed)
- **[BuffObjEditing](/stdlib/ref/objediting/BuffObjEditing.html)** define buffs and effects. [Guide](/stdlib/buff_objed)
- **[UpgradeObjEditing](/stdlib/ref/objediting/UpgradeObjEditing.html)** define upgrades. [Guide](/stdlib/upg_objed)
- **[ObjectIdGenerator](/stdlib/ref/objediting/ObjectIdGenerator.html)** generate collision-free object IDs.

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse all Object Editing packages](/stdlib/ref/#object-editing){: .cap-more}
</section>

<section class="cap-card cap-card--wide" markdown="1">
#### *&nbsp;*{: .fa .fa-database} Pick a data structure

The library ships bootstrapped, generic collections. Use this table to choose:

| Package | Use this when |
| --- | --- |
| [LinkedList](/stdlib/ref/data/LinkedList.html) | **Your default list, stack or queue.** Most versatile, fast at common operations. |
| [HashList](/stdlib/ref/data/HashList.html) | You need fast `contains` or random access on big lists. |
| [HashMap](/stdlib/ref/data/HashMap.html) | You map keys to values, including attaching data to handles via `TypeCasting`. |
| [HashSet](/stdlib/ref/data/HashSet.html) | You need uniqueness, so each element appears at most once. |
| [BitSet](/stdlib/ref/data/BitSet.html) | You need a compact set of boolean flags. |
| [ArrayList](/stdlib/ref/data/ArrayList.html) | You want array-backed storage with high throughput. |

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse all Data Structure packages](/stdlib/ref/#data-structures){: .cap-more}
</section>

<section class="cap-card" markdown="1">
#### *&nbsp;*{: .fa .fa-bolt} Closures: events, groups & timers

React and schedule with lambdas instead of boilerplate trigger plumbing.

- **[ClosureEvents](/stdlib/ref/closures/ClosureEvents.html)** listen to events, global or per unit. [Guide](/stdlib/closure_events)
- **[ClosureTimers](/stdlib/ref/closures/ClosureTimers.html)** run delayed and periodic actions. [Guide](/stdlib/closure_timers)
- **[ClosureForGroups](/stdlib/ref/closures/ClosureForGroups.html)** enumerate units with a closure. [Guide](/stdlib/closure_for_groups)
- **[Execute](/stdlib/ref/closures/Execute.html)** error recovery and op-limit splitting. [Guide](/stdlib/execute)

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse all Closure packages](/stdlib/ref/#closures){: .cap-more}
</section>

<section class="cap-card" markdown="1">
#### *&nbsp;*{: .fa .fa-wrench} Warcraft III engine wrappers

Reliable, battle-tested building blocks for common Warcraft III systems.

- **[DamageEvent](/stdlib/ref/event/DamageEvent.html)** robust damage detection with ordered listeners.
- **[DummyCaster](/stdlib/ref/dummy/DummyCaster.html)** cast any ability from a throwaway unit. [Guide](/stdlib/dummy_caster)
- **[DummyRecycler](/stdlib/ref/dummy/DummyRecycler.html)** pool and reuse dummy units. [Guide](/stdlib/dummy_recycler)
- **[Fx](/stdlib/ref/dummy/Fx.html)** managed special effects.
- **[UnitIndexer](/stdlib/ref/util/UnitIndexer.html)** per-unit index for attaching data.

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse Event, Dummy &amp; Util packages](/stdlib/ref/#events){: .cap-more}
</section>

<section class="cap-card" markdown="1">
#### *&nbsp;*{: .fa .fa-calculator} Math & geometry

- **[Vectors](/stdlib/ref/math/Vectors.html)** `vec2` and `vec3` math. [Guide](/stdlib/vectors)
- **[Angle](/stdlib/ref/math/Angle.html)** safe angle type and helpers. [Guide](/stdlib/angle)

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse all Math packages](/stdlib/ref/#math){: .cap-more}
</section>

<section class="cap-card" markdown="1">
#### *&nbsp;*{: .fa .fa-ellipsis-h} Everything else

Files & networking, sound, terrain, printing, colors, and the full set of native handle wrappers (`unit`, `item`, `player`) round out the library.

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse the complete API Reference](/stdlib/ref/){: .cap-more}
</section>

</div>
