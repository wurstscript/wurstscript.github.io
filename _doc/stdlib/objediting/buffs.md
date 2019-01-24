---
title: Creating buff object data
sections:
- Intro
- Regular Buff Editing
- Dummy Tornado Buffs
---

### Intro

In Warcraft III buffs are negative or positive status effects on units.
However they are often only the visual part of an ability that the unit posesses.

### Regular Buff Editing

To generate a regular buff just use `BuffDefinition` and pass the id of the buff you want to use as source.

```wurst
public constant MY_BUFF_ID = compiletime(BUFF_ID_GEN.next())

@compiletime function genBuff()
	new BuffDefinition(MY_BUFF_ID, 'Basl')
		..setName(1, "My Buff")
		..setTooltipNormal(1, "Hello there")
		..setTooltipNormalExtended(1, "This unit is buffed")
		..setIcon(Icons.bTNAcorn)
```

### Dummy Tornado Buffs

When dealing with buffs we usually want to generate them for custom abilities without any side effects.
To do exactly that, we use the `createDummyBuffObject` functions.
These functions will generate an ability and a buff which you can apply by adding the ability to a unit.
They return a tuple containing both of those ids.

```wurst
let MY_BUFF = compiletime(createDummyBuffObject("My Buff", "This unit is buffed", Icons.btnAcorn))

function add()
	GetTriggerUnit().addAbility(MY_BUFF.abilId)

function remove()
	GetTriggerUnit().removeAbility(MY_BUFF.abilId)
```

