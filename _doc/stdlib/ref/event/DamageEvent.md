---
title: DamageEvent
layout: stdlibref
category: event
categoryLabel: Events
tags:
  - damage
  - detection
  - event
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/DamageEvent.wurst'
generated: true
---

This package provides a light-weight damage detection system with priority-ordered listeners.

**IMPORTANT**
    This package **doesn't** provide protection from cyclic damage.
    Damage from code **must** be declared by the user using DamageEvent.setNextDamageFromCode() before dealing damage.
    If you set damage amount to zero or less in the unreduced listeners, reduced listeners will not fire.

    if DETECT_NATIVE_ABILITIES is true:
```wurst
        Any damage instance of attacktype ATTACK_TYPE_NORMAL is passed with DamageType SPELL
```

To listen to any damage instance firing:

   DamageEvent.addListener() ->
        print(DamageEvent.getSource().getName() + " dealt " + DamageEvent.getAmount().toString() + " damage to " + DamageEvent.getTarget().getName() + ".")

If the order of firing of the listeners is important, the user can give a priority to the listener:

    DamageEvent.addListener(2) ->
        print("This fires after.")
    DamageEvent.addListener(0) ->
        print("This fires before.")

If you want to catch the damage instance before it has been reduced by any damage reducing effect (such as armor) you can use the unreduced verions of the listeners:

    DamageEvent.addUnreducedListener() ->
        print("this fire before any damage reduction")

Each damage instance has a DamageType associated to it.
CODE **must** be declared by the user using DamageEvent.setNextDamageFromCode() before dealing damage.
ATTACK and SPELL are detected by the system (if DETECT_NATIVE_ABILITIES is false then native abilities will be detected as ATTACK)

    DamageEvent.addListener() ->
        switch DamageEvent.getType()
            case ATTACK
                print("This damage is from a unit's attack.")
            case SPELL
                print("This damage is from a native ability.")
            case CODE
                print("This damage is from code.")
            default

Each damage instance can have an id and/or an element.DamageEvent
Allowing the user to easily categorize (DamageElement) or/and identify a damage instance (id):

    DamageEvent.setNextDamageFromCode()
    DamageEvent.setNextDamageId('A000') // This damage instance is from the spell 'A000'
    DamageEvent.setNextDamageElement(DAMAGE_ELEMENT_FIRE) // This damage instance will be categorized as a Fire damage instance.
    UnitDamageTarget(source, target, amount, [...])

Using globally defined priorities for a map can help easily understand and use a damage pipeline:

    public constant DAMAGE_EVENT_PRIO_START     = 0 // Abort damage at this priority
    public constant DAMAGE_EVENT_PRIO_RELATIVE  = 1 // Apply relative changes (multiplication and division)
    public constant DAMAGE_EVENT_PRIO_ABSOLUTE  = 2 // Apply absolute changes (addition and subtraction)
    public constant DAMAGE_EVENT_PRIO_SHIELD    = 4 // Apply reduction from "shield" effects
    public constant DAMAGE_EVENT_PRIO_FINAL     = 5 // Final damage (won't be changed at this stage)

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/DamageEvent.wurst)**

## Classes

### DamageElement

```wurst
public class DamageElement
```

Each damage instance can have a DamageElement associated to it.
   Allowing for categories of damage instances:

       DAMAGE_ELEMENT_FIRE  = new DamageElement("Fire", colorA(255, 0, 0, 255))
       DAMAGE_ELEMENT_WATER = new DamageElement("Water", colorA(0, 0, 255, 255))

   The user can extends from DamageElement to add his own settings.

### DamageEvent

```wurst
public class DamageEvent
```

### DamageListener

```wurst
public abstract class DamageListener
```

## Enums

### DamageType

```wurst
public enum DamageType
```

Each damage instance has a DamageType associated to it.
   ATTACK and SPELL are detected by the system.
   CODE **must** be declared by the user using DamageEvent.setNextDamageFromCode() before dealing damage

## Functions

### getDamageTypeName

```wurst
public function getDamageTypeName(DamageType t) returns string
```

> 🔧 **Configurable.** Override it in your map's config package.

Returns the name of the given DamageType

### getDamageDesignation

```wurst
public function getDamageDesignation(DamageType t, DamageElement e) returns string
```

> 🔧 **Configurable.** Override it in your map's config package.

Returns a damage designation given a DamageType and a DamageElement

## Constants

### DETECT_NATIVE_ABILITIES

```wurst
constant DETECT_NATIVE_ABILITIES = true
```

> 🔧 **Configurable.** Override it in your map's config package.

If true, any damage instance of attacktype ATTACK_TYPE_NORMAL is passed with DamageType SPELL

### DAMAGE_ELEMENT_ATTACK

```wurst
public constant DAMAGE_ELEMENT_ATTACK = new DamageElement("Physical", colorA(223, 59, 33, 255))
```

> 🔧 **Configurable.** Override it in your map's config package.

A damage instance can have an element.
   DAMAGE_ELEMENT_ATTACK is the defaut element added to any damage instances of DamageType ATTACK
