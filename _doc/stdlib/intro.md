---
title: WurstScript Standard Library
sections:
  - Intro
  - Overview
---

The [WurstScript standard library](https://github.com/wurstscript/WurstStdlib2) is the set of ready-to-use packages that ships with Wurst. It wraps common Warcraft III operations, provides reusable data structures, and removes a lot of low-level boilerplate from map code.

If you are new to the library, start with the task that matches what you are building. When you already know the package name, jump straight to the [full API reference](/stdlib/ref/).

### What to expect

The library is designed to be used from normal Wurst code. Most packages are already available through the standard imports; add an explicit `import` only when the package is not imported by default. The packages are tested as part of the standard library and are intended for use in real maps, but Warcraft III's native limits and lifecycle rules still apply.

The pages in this section are hand-written guides with context and complete examples. The [API reference](/stdlib/ref/) is generated from the package hotdoc and is the better place to look up an exact function, type, or member.

### Find the right package

<div class="cap-grid" markdown="1">

<section class="cap-card cap-card--wide" markdown="1">
#### *&nbsp;*{: .fa .fa-cubes} Define Warcraft III objects in code

Use the object-editing packages when you want abilities, units, items, buffs, or upgrades to be created and configured at compile time. This keeps object data in version control and lets you reuse the same definitions across maps.

- **[AbilityObjEditing](/stdlib/ref/objediting/AbilityObjEditing.html)** creates and modifies abilities. [Guide](/stdlib/abil_objed)
- **[UnitObjEditing](/stdlib/ref/objediting/UnitObjEditing.html)** defines units. [Guide](/stdlib/unit_objed)
- **[ItemObjEditing](/stdlib/ref/objediting/ItemObjEditing.html)** defines items. [Guide](/stdlib/item_objed)
- **[BuffObjEditing](/stdlib/ref/objediting/BuffObjEditing.html)** defines buffs and their effects. [Guide](/stdlib/buff_objed)
- **[UpgradeObjEditing](/stdlib/ref/objediting/UpgradeObjEditing.html)** defines upgrades. [Guide](/stdlib/upg_objed)
- **[ObjectIdGenerator](/stdlib/ref/objediting/ObjectIdGenerator.html)** generates collision-free object IDs.

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse all Object Editing packages](/stdlib/ref/#object-editing){: .cap-more}
</section>

<section class="cap-card cap-card--wide" markdown="1">
#### *&nbsp;*{: .fa .fa-database} Choose a collection

Use this quick rule of thumb, then open the package page for the exact API and ownership details.

| Package | Start here when |
| --- | --- |
| [LinkedList](/stdlib/ref/data/LinkedList.html) | You need a general-purpose list, stack, or queue. |
| [HashList](/stdlib/ref/data/HashList.html) | You need fast membership checks or indexed access on a large list. |
| [HashMap](/stdlib/ref/data/HashMap.html) | You need to map keys to values, including attaching data to handles. |
| [HashSet](/stdlib/ref/data/HashSet.html) | Each value should occur at most once. |
| [BitSet](/stdlib/ref/data/BitSet.html) | You need a compact set of boolean flags. |
| [ArrayList](/stdlib/ref/data/ArrayList.html) | You want array-backed storage and predictable iteration. |

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse all Data Structure packages](/stdlib/ref/#data-structures){: .cap-more}
</section>

<section class="cap-card" markdown="1">
#### *&nbsp;*{: .fa .fa-bolt} React to events and schedule work

Closures let you keep the action next to the event or timer without writing a separate trigger callback.

- **[ClosureEvents](/stdlib/ref/closures/ClosureEvents.html)** listens for global, unit, and spell events. [Guide](/stdlib/closure_events)
- **[ClosureTimers](/stdlib/ref/closures/ClosureTimers.html)** runs delayed and periodic actions. [Guide](/stdlib/closure_timers)
- **[ClosureForGroups](/stdlib/ref/closures/ClosureForGroups.html)** iterates over units with a closure. [Guide](/stdlib/closure_for_groups)
- **[Execute](/stdlib/ref/closures/Execute.html)** splits expensive work and reports execution errors. [Guide](/stdlib/execute)

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse all Closure packages](/stdlib/ref/#closures){: .cap-more}
</section>

<section class="cap-card" markdown="1">
#### *&nbsp;*{: .fa .fa-wrench} Build on Warcraft III's engine

These packages collect the recurring glue code behind common map systems.

- **[DamageEvent](/stdlib/ref/event/DamageEvent.html)** provides ordered damage listeners.
- **[DummyCaster](/stdlib/ref/dummy/DummyCaster.html)** casts an ability from a temporary unit. [Guide](/stdlib/dummy_caster)
- **[DummyRecycler](/stdlib/ref/dummy/DummyRecycler.html)** reuses dummy units instead of creating them repeatedly. [Guide](/stdlib/dummy_recycler)
- **[Fx](/stdlib/ref/dummy/Fx.html)** manages special effects.
- **[UnitIndexer](/stdlib/ref/util/UnitIndexer.html)** gives units a stable index for attaching data.

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse Event, Dummy, and Utility packages](/stdlib/ref/#events){: .cap-more}
</section>

<section class="cap-card" markdown="1">
#### *&nbsp;*{: .fa .fa-calculator} Work with math and geometry

- **[Vectors](/stdlib/ref/math/Vectors.html)** provides `vec2` and `vec3` types and operations. [Guide](/stdlib/vectors)
- **[Angle](/stdlib/ref/math/Angle.html)** keeps angle values and conversions explicit. [Guide](/stdlib/angle)

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse all Math packages](/stdlib/ref/#math){: .cap-more}
</section>

<section class="cap-card" markdown="1">
#### *&nbsp;*{: .fa .fa-ellipsis-h} Explore the rest of the library

The remaining packages cover file and network helpers, sound, terrain, printing, colors, and wrappers for native handles such as `unit`, `item`, and `player`.

[*&nbsp;*{: .fa .fa-arrow-circle-right} Browse the complete API Reference](/stdlib/ref/){: .cap-more}
</section>

</div>

### How to read the reference

1. Start with the overview above if you are choosing a capability rather than a specific package.
2. Use the API reference's category list or search to open a package page.
3. Read the package summary and any linked detailed guide before copying an example.
4. Use the `Classes`, `Functions`, and `Extension Functions` sections to find the exact declaration, then open the source when you need implementation details.

The standard library follows the [Wurst coding conventions](https://wurstlang.org/manual.html#coding-conventions). Its source is often the best reference for idiomatic patterns and for understanding which resources a package creates or destroys.

### Source and contributions

The standard library source lives on [GitHub](https://github.com/wurstscript/WurstStdlib2). If a package is missing an example or its description is unclear, improving the hotdoc or adding a hand-written guide improves the generated reference for everyone.
