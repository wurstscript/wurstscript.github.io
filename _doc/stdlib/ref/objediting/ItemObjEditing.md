---
title: ItemObjEditing
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - items
  - object-data
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/ItemObjEditing.wurst'
generated: true
curated: /stdlib/item_objed
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/ItemObjEditing.wurst)**

> 📖 Read the **[detailed guide](/stdlib/item_objed)** for hand-written examples and background.

## Classes

### W3TDefinition

```wurst
public class W3TDefinition
```

**Members:**

- `getNewId() returns int`
- `getBaseId() returns int`
- `construct(int newId, int baseId)`
- `setTooltipExtended(string data)`
- `setTooltipBasic(string data)`
- `setRequirementsLevels(string data)`
- `setRequirements(string data)`
- `setName(string data)`
- `setHotkey(string data)`
- `setDescription(string data)`
- `setButtonPositionY(int data)`
- `setButtonPositionX(int data)`

### ItemDefinition

```wurst
public class ItemDefinition extends W3TDefinition
```

**Members:**

- `construct(int newId, int origId)`
- `setAbilities(string data)`
- `setArmorType(ArmorType data)`
- `setClassification(string data)`
- `setTintingColor3Blue(int data)`
- `setTintingColor2Green(int data)`
- `setTintingColor1Red(int data)`
- `setCooldownGroup(string data)`
- `setDroppedWhenCarrierDies(boolean data)`
- `setCanBeDropped(boolean data)`
- `setModelUsed(string data)`
- `setGoldCost(int data)`
- `setHitPoints(int data)`
- `setIgnoreCooldown(boolean data)`
- `setLevel(int data)`
- `setLumberCost(int data)`
- `setValidTargetForTransformation(boolean data)`
- `setLevelUnclassified(int data)`
- `setPerishable(boolean data)`
- `setIncludeAsRandomChoice(boolean data)`
- `setUseAutomaticallyWhenAcquired(boolean data)`
- `setPriority(int data)`
- `setScalingValue(real data)`
- `setCanBeSoldByMerchants(boolean data)`
- `setCanBeSoldToMerchants(boolean data)`
- `setStockMaximum(int data)`
- `setStockReplenishInterval(int data)`
- `setStockStartDelay(int data)`
- `setActivelyUsed(boolean data)`
- `setNumberofCharges(int data)`
- `setInterfaceIcon(string data)`
- `setMaxStack(int data)`
