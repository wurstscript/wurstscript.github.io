---
title: Item
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Item.wurst'
generated: true
---

Updates the item's name, tooltip, extendedtooltip, description or icon for the specific player.
	If p == null, the item is updated for all players
	Returns false if no player is given.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Item.wurst)**

**Re-exports:** `Vectors`

## Functions

### createItem

```wurst
public function createItem(int itemId, vec2 pos) returns item
```

### createItem

```wurst
public function createItem(int itemId, vec3 pos) returns item
```

## Extension Functions

### item.remove

```wurst
public function item.remove()
```

### item.getTypeId

```wurst
public function item.getTypeId() returns int
```

### item.getItemtype

```wurst
public function item.getItemtype() returns itemtype
```

Returns "itemtype" of this item. Do not confuse it with itemTypeId.

### item.getLevel

```wurst
public function item.getLevel() returns int
```

### item.getX

```wurst
public function item.getX() returns real
```

### item.getY

```wurst
public function item.getY() returns real
```

### item.getPos

```wurst
public function item.getPos() returns vec2
```

### item.setPos

```wurst
public function item.setPos(vec2 pos)
```

### item.setDropOnDeath

```wurst
public function item.setDropOnDeath(boolean flag)
```

### item.setDroppable

```wurst
public function item.setDroppable(boolean flag)
```

### item.setPawnable

```wurst
public function item.setPawnable(boolean flag)
```

### item.setInvulnerable

```wurst
public function item.setInvulnerable(boolean flag)
```

### item.setVisible

```wurst
public function item.setVisible(boolean flag)
```

### item.isInvulnerable

```wurst
public function item.isInvulnerable() returns boolean
```

### item.isVisible

```wurst
public function item.isVisible() returns boolean
```

### item.isOwned

```wurst
public function item.isOwned() returns boolean
```

### item.isPowerup

```wurst
public function item.isPowerup() returns boolean
```

### item.isSellable

```wurst
public function item.isSellable() returns boolean
```

### item.isPawnable

```wurst
public function item.isPawnable() returns boolean
```

### item.isAlive

```wurst
public function item.isAlive() returns boolean
```

Returns true if item is not destroyed and has a valid type id.

### item.isPickupable

```wurst
public function item.isPickupable() returns boolean
```

Returns true if item can be picked up by a unit.

### item.getPlayer

```wurst
public function item.getPlayer() returns player
```

### item.setPlayer

```wurst
public function item.setPlayer(player whichPlayer, boolean changeColor)
```

### item.getCharges

```wurst
public function item.getCharges() returns int
```

### item.setCharges

```wurst
public function item.setCharges(int charges)
```

### item.getUserData

```wurst
public function item.getUserData() returns int
```

### item.setUserData

```wurst
public function item.setUserData(int data)
```

### item.getName

```wurst
public function item.getName() returns string
```

### item.setName

```wurst
public function item.setName(string name)
```

### item.getDescription

```wurst
public function item.getDescription() returns string
```

### item.setDescription

```wurst
public function item.setDescription(string description)
```

### item.getTooltip

```wurst
public function item.getTooltip() returns string
```

### item.setTooltip

```wurst
public function item.setTooltip(string tooltip)
```

### item.getExtendedTooltip

```wurst
public function item.getExtendedTooltip() returns string
```

### item.setExtendedTooltip

```wurst
public function item.setExtendedTooltip(string tooltip)
```

### item.getIconPath

```wurst
public function item.getIconPath() returns string
```

### item.setIconPath

```wurst
public function item.setIconPath(string path)
```

### item.getSkin

```wurst
public function item.getSkin() returns int
```

### item.setSkin

```wurst
public function item.setSkin(int skinId)
```

### item.getAbilityByIndex

```wurst
public function item.getAbilityByIndex(int index) returns ability
```

### item.getAbility

```wurst
public function item.getAbility(int abiId) returns ability
```

### item.addAbility

```wurst
public function item.addAbility(int abiId) returns bool
```

### item.removeAbility

```wurst
public function item.removeAbility(int abiId) returns bool
```

### item.getField

```wurst
public function item.getField(itembooleanfield field) returns bool
```

### item.getField

```wurst
public function item.getField(itemintegerfield field) returns int
```

### item.getField

```wurst
public function item.getField(itemrealfield field) returns real
```

### item.getField

```wurst
public function item.getField(itemstringfield field) returns string
```

### item.setField

```wurst
public function item.setField(itembooleanfield field, bool value) returns bool
```

### item.setField

```wurst
public function item.setField(itemintegerfield field, int value) returns bool
```

### item.setField

```wurst
public function item.setField(itemrealfield field, real value) returns bool
```

### item.setField

```wurst
public function item.setField(itemstringfield field, string value) returns bool
```

### item.updateDetailsForPlayer

```wurst
public function item.updateDetailsForPlayer(player p, string itemName, string itemTooltip, string itemExtendedTooltip, string itemDesc, string itemIcon) returns bool
```

### item.updateDetailsForAll

```wurst
public function item.updateDetailsForAll(string itemName, string itemTooltip, string itemExtendedTooltip, string itemDesc, string itemIcon) returns bool
```

Updates the item's name, tooltip, extendedtooltip, description or icon for the specific player.
	If p == null, the item is updated for all players
	Returns false if no player is given.

### item.setItemDropID

```wurst
public function item.setItemDropID(integer unitId)
```

### item.blzSetItemSkin

```wurst
public function item.blzSetItemSkin(integer skinId)
```
