---
title: DummyDamage
layout: stdlibref
category: dummy
categoryLabel: Dummies
tags:
  - damage
  - dummy
  - wc3-quirk
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/DummyDamage.wurst'
generated: true
---

DummyDamage is used when you want to inflict damage from a certain player,
without having access to a unit by that player, that the damage should originate from,
e.g. an effect missile, that does damage on impact, but doesn't know the caster unit.
A DummyDamage is constructed analogous to a DummyCaster using the builder pattern.

```wurst
new DummyDamage()
..attacker(attackingPlayer)
..target(targetWidget)
..amount(50)
..attackType(ATTACK_TYPE_NORMAL)
..apply(true)
```

The object is only destroyed if you pass true to the #apply function,
and can therefore be reused to apply the same type of damage to multiple targets.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/dummy/DummyDamage.wurst)**

## Classes

### DummyDamage

```wurst
public class DummyDamage
```

**Members:**

- `apply()`
- `apply(boolean terminate)`
- `target(widget target)`
- `attacker(player attacker)`
- `amount(real amount)`
- `isAttack(boolean isAttack)`
- `isRanged(boolean isRanged)`
- `origin(vec2 origin)`
- `attackType(attacktype attackType)`
- `damageType(damagetype damageType)`
- `weaponType(weapontype weaponType)`
