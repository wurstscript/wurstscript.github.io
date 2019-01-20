---
title: Creating item object data
sections:
- Intro
- Example
---

### Intro

Use `ItemDefinition` from the `ItemObjEditing` package to generate item objects.

### Example

```wurst
public constant BALL_ITEM_ID = compiletime(ITEM_ID_GEN.next())

@compiletime function gen()
	new ItemDefinition(BALL_ITEM_ID, 'rst1')
	..setGoldCost(0)..setLumberCost(0)
	..setAbilities("")..setName("Ball")..setDescription("Throwable.")
	..setTooltipExtended("It is round")
	..setDroppedWhenCarrierDies(false)
	..setTooltipBasic("Do eet")..setModelUsed(Abilities.ancientProtectorMissile)
	..setInterfaceIcon(Icons.bTNGolemStormBolt)
```

