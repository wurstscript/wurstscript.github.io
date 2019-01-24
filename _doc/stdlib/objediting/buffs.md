---
title: Creating buff object data
sections:
- Intro
- Regular Buff Editing
- Dummy Tornado Buffs
---

### Intro

In Warcraft III buffs are negative or positive status effects on units.
However they are usually only the visual part of an ability that the unit posesses.

### Regular Buff Editing

To generate a regular buff just use `BuffDefinition` and pass the id of the buff you want to use as source.

```wurst
public constant MY_BUFF_ID = compiletime(BUFF_ID_GEN.next())

new BuffDefinition(MY_BUFF_ID, 'Basl')
	..setName(1, "My Buff")
	..setTooltipNormal(1, "Hello there")
	..setTooltipNormalExtended(1, "This unit is buffed")
	..setIcon(Icons.bTNAcorn)
```

However often we want to generate buffs for custom abilities that don't have any ill effects and add/remove them dynamically.

### Dummy Tornado Buffs

To easily create dummy buffs for visual display without effect, use the `createDummyBuffObject` functions.
The functions will generate an ability and a buff which you can apply by adding the ability to a unit.

```wurst
let MY_BUFF_OBJ = createDummyBuffObject("My Buff", "This unit is buffed", Icons.btnAcorn)

function add()
	GetTriggerUnit().addAbility(MY_BUFF_OBJ.abilId)

function remove()
	GetTriggerUnit().removeAbility(MY_BUFF_OBJ.abilId)
```

