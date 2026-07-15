---
title: Unit
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Unit.wurst'
generated: true
---

Sets the unit's position using the SetUnitPosition native.
	This native comes with some side effects like additional
	position verification and stopping the target unit.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Unit.wurst)**

**Re-exports:** `Vectors`

## Enums

### RallyType

```wurst
public enum RallyType
```

**Values:** `POINT`, `UNIT`, `DESTRUCTABLE`

## Tuples

### rallyResult

```wurst
public tuple rallyResult(RallyType rtype, unit u, destructable d, vec2 pos)
```

## Functions

### getUnitIcon

```wurst
public function getUnitIcon(int unitId) returns string
```

### createUnit

```wurst
public function createUnit(int unitId) returns unit
```

### createUnit

```wurst
public function createUnit(player p, int unitId) returns unit
```

### createUnit

```wurst
public function createUnit(int unitId, vec2 pos) returns unit
```

### createUnit

```wurst
public function createUnit(player p, int unitId, vec2 pos) returns unit
```

### createUnit

```wurst
public function createUnit(player p, int unitId, vec2 pos, angle facing) returns unit
```

### createUnit

```wurst
public function createUnit(player p, int unitId, vec3 pos, angle facing) returns unit
```

### createUnitZ

```wurst
public function createUnitZ(player p, int unitId, vec3 pos, angle facing) returns unit
```

## Extension Functions

### unit.getIcon

```wurst
public function unit.getIcon() returns string
```

### unit.getGoldCost

```wurst
public function unit.getGoldCost() returns int
```

### unit.getWoodCost

```wurst
public function unit.getWoodCost() returns int
```

### unit.isType

```wurst
public function unit.isType(unittype utype) returns boolean
```

### unit.addType

```wurst
public function unit.addType(unittype utype) returns boolean
```

### unit.removeType

```wurst
public function unit.removeType(unittype utype) returns boolean
```

### unit.setType

```wurst
public function unit.setType(unittype utype, boolean flag) returns boolean
```

### unit.toggleType

```wurst
public function unit.toggleType(unittype utype) returns boolean
```

### unit.addAbility

```wurst
public function unit.addAbility(int abil) returns boolean
```

### unit.addAbility

```wurst
public function unit.addAbility(int abilId, int level)
```

### unit.addPermanentAbility

```wurst
public function unit.addPermanentAbility(int abilId)
```

### unit.addPermanentAbility

```wurst
public function unit.addPermanentAbility(int abilId, int level)
```

### unit.addHP

```wurst
public function unit.addHP(real val)
```

### unit.addItemHandle

```wurst
public function unit.addItemHandle(item whichItem) returns boolean
```

### unit.addItemById

```wurst
public function unit.addItemById(int itemId) returns item
```

### unit.addItemToSlot

```wurst
public function unit.addItemToSlot(int id, int slot) returns bool
```

### unit.addMana

```wurst
public function unit.addMana(real val)
```

### unit.addState

```wurst
public function unit.addState(unitstate state, real value)
```

### unit.addXp

```wurst
public function unit.addXp(int toAdd, boolean showEyeCandy)
```

### unit.getXp

```wurst
public function unit.getXp() returns int
```

### unit.shareVision

```wurst
public function unit.shareVision(player whichPlayer)
```

Share vision of that unit with a player *

### unit.shareVision

```wurst
public function unit.shareVision(player whichPlayer, bool share)
```

Set sharing of vision with a player *

### unit.setXp

```wurst
public function unit.setXp(int newXpVal, bool showEyeCandy)
```

### unit.suspendXp

```wurst
public function unit.suspendXp(boolean suspend)
```

### unit.isSuspendedXp

```wurst
public function unit.isSuspendedXp() returns boolean
```

### unit.getLevel

```wurst
public function unit.getLevel() returns int
```

### unit.setLevel

```wurst
public function unit.setLevel(int level, boolean showEyeCandy)
```

### unit.addLevels

```wurst
public function unit.addLevels(int toAdd, boolean showEyeCandy)
```

### unit.removeLevels

```wurst
public function unit.removeLevels(int toRemove) returns bool
```

### unit.getStr

```wurst
public function unit.getStr(bool includeBonuses) returns int
```

### unit.getAgi

```wurst
public function unit.getAgi(bool includeBonuses) returns int
```

### unit.getInt

```wurst
public function unit.getInt(bool includeBonuses) returns int
```

### unit.setStr

```wurst
public function unit.setStr(int value)
```

### unit.setAgi

```wurst
public function unit.setAgi(int value)
```

### unit.setInt

```wurst
public function unit.setInt(int value)
```

### unit.addStr

```wurst
public function unit.addStr(int value)
```

### unit.addAgi

```wurst
public function unit.addAgi(int value)
```

### unit.addInt

```wurst
public function unit.addInt(int value)
```

### unit.addSkillPoints

```wurst
public function unit.addSkillPoints(int value) returns bool
```

### unit.setSkillPoints

```wurst
public function unit.setSkillPoints(int value) returns bool
```

### unit.getSkillPoints

```wurst
public function unit.getSkillPoints() returns int
```

### unit.selectSkill

```wurst
public function unit.selectSkill(int abilcode)
```

### unit.damageTarget

```wurst
public function unit.damageTarget(widget target, real amount, bool attack, bool ranged, attacktype attackType, damagetype damageType, weapontype weaponType)
```

### unit.damageTarget

```wurst
public function unit.damageTarget(widget target, real amount, bool attack, bool ranged, attacktype attackType)
```

### unit.damageTarget

```wurst
public function unit.damageTarget(widget target, real amount)
```

### unit.damageTarget

```wurst
public function unit.damageTarget(widget target, real amount, attacktype attacktyp)
```

### unit.explode

```wurst
public function unit.explode()
```

Kills a unit by blowing it up

### unit.getAbilityLevel

```wurst
public function unit.getAbilityLevel(int id) returns int
```

### unit.getUnitAcquireRange

```wurst
public function unit.getUnitAcquireRange() returns real
```

### unit.getCurrentOrder

```wurst
public function unit.getCurrentOrder() returns int
```

Returns the current order of the unit

### unit.getFacingAngle

```wurst
public function unit.getFacingAngle() returns angle
```

Returns the facing of the unit as an angle.
	Use this to avoid confusion between radians and degrees

### unit.getFlyHeight

```wurst
public function unit.getFlyHeight() returns real
```

### unit.getFoodUsed

```wurst
public function unit.getFoodUsed() returns int
```

### unit.getHP

```wurst
public function unit.getHP() returns real
```

### unit.getHPRatio

```wurst
public function unit.getHPRatio() returns real
```

### handle.getHandleId

```wurst
public function handle.getHandleId() returns int
```

### unit.getMana

```wurst
public function unit.getMana() returns real
```

### unit.getMaxHP

```wurst
public function unit.getMaxHP() returns real
```

### unit.getMaxMana

```wurst
public function unit.getMaxMana() returns real
```

### unit.getMissingHP

```wurst
public function unit.getMissingHP() returns real
```

Get units current missing health.

### unit.getMissingMana

```wurst
public function unit.getMissingMana() returns real
```

Get units current missing mana.

### unit.getMoveSpeed

```wurst
public function unit.getMoveSpeed() returns real
```

### unit.getName

```wurst
public function unit.getName() returns string
```

### unit.getProperName

```wurst
public function unit.getProperName() returns string
```

### unit.getOwner

```wurst
public function unit.getOwner() returns player
```

### unit.getPos

```wurst
public function unit.getPos() returns vec2
```

### unit.getPos3Real

```wurst
public function unit.getPos3Real() returns vec3
```

### unit.getPos3Fly

```wurst
public function unit.getPos3Fly() returns vec3
```

### unit.getPos3Zero

```wurst
public function unit.getPos3Zero() returns vec3
```

### unit.getPos3with

```wurst
public function unit.getPos3with(real z) returns vec3
```

### unit.getPropWindow

```wurst
public function unit.getPropWindow() returns angle
```

Returns the prop window of the unit as angle.

### unit.getState

```wurst
public function unit.getState(unitstate state) returns real
```

### unit.getTurnSpeed

```wurst
public function unit.getTurnSpeed() returns real
```

### unit.getTypeId

```wurst
public function unit.getTypeId() returns int
```

### unit.getUserData

```wurst
public function unit.getUserData() returns int
```

### unit.getPointValue

```wurst
public function unit.getPointValue() returns int
```

### unit.getX

```wurst
public function unit.getX() returns real
```

### unit.getY

```wurst
public function unit.getY() returns real
```

### unit.hasAbility

```wurst
public function unit.hasAbility(int id) returns boolean
```

### unit.hasItem

```wurst
public function unit.hasItem(item whichItem) returns boolean
```

### unit.hasItemById

```wurst
public function unit.hasItemById(int itemId) returns boolean
```

### unit.getItemById

```wurst
public function unit.getItemById(int itemId) returns item
```

Returns the first item of the specific type from the unit's inventory,
	or null if none is present

### unit.hide

```wurst
public function unit.hide()
```

### unit.isHidden

```wurst
public function unit.isHidden() returns bool
```

### unit.inventorySize

```wurst
public function unit.inventorySize() returns int
```

### unit.itemCount

```wurst
public function unit.itemCount() returns int
```

Returns the number of items equipped.

### unit.isInventoryFull

```wurst
public function unit.isInventoryFull() returns boolean
```

Checks if unit inventory is full.

### unit.isAlive

```wurst
public function unit.isAlive() returns boolean
```

Checks if the unit is alive using the UnitAlive native

### unit.isInRange

```wurst
public function unit.isInRange(vec2 pos, real distance) returns bool
```

Checks whether a unit is within range of a point.
	Takes into account the units collision size *

### unit.isEnemyOf

```wurst
public function unit.isEnemyOf(player whichPlayer) returns bool
```

Checks whether a unit is an enemy of the given player *

### unit.isEnemyOf

```wurst
public function unit.isEnemyOf(unit u) returns bool
```

Checks whether two units are enemies

### unit.isAllyOf

```wurst
public function unit.isAllyOf(player whichPlayer) returns bool
```

Checks whether a unit is an ally of the given player

### unit.isAllyOf

```wurst
public function unit.isAllyOf(unit u) returns bool
```

Checks whether two units are allies

### unit.issueImmediateOrder

```wurst
public function unit.issueImmediateOrder(string order) returns boolean
```

### unit.issueImmediateOrderById

```wurst
public function unit.issueImmediateOrderById(int id) returns boolean
```

### unit.issuePointOrder

```wurst
public function unit.issuePointOrder(string order, vec2 target) returns boolean
```

### unit.issuePointOrderById

```wurst
public function unit.issuePointOrderById(int id, vec2 target) returns boolean
```

### unit.issueRallyPoint

```wurst
public function unit.issueRallyPoint(vec2 pos)
```

### unit.issueTargetOrder

```wurst
public function unit.issueTargetOrder(string order, widget targetWidget) returns boolean
```

### unit.issueTargetOrderById

```wurst
public function unit.issueTargetOrderById(int id, widget target) returns boolean
```

### unit.itemInSlot

```wurst
public function unit.itemInSlot(int inventoryIndex) returns item
```

### unit.getItemSlot

```wurst
public function unit.getItemSlot(item whichItem) returns int
```

Retrieves slot number for speficied item or -1 if not found.

### unit.kill

```wurst
public function unit.kill()
```

### unit.makeAbilityPermanent

```wurst
public function unit.makeAbilityPermanent(int abil, boolean flag) returns boolean
```

### unit.isPaused

```wurst
public function unit.isPaused() returns boolean
```

### unit.pause

```wurst
public function unit.pause()
```

### unit.pauseEx

```wurst
public function unit.pauseEx()
```

### unit.unpause

```wurst
public function unit.unpause()
```

### unit.unpauseEx

```wurst
public function unit.unpauseEx()
```

### unit.queueAnimation

```wurst
public function unit.queueAnimation(string animation)
```

### unit.remove

```wurst
public function unit.remove()
```

### unit.removeAbility

```wurst
public function unit.removeAbility(int abil) returns boolean
```

### unit.removeItem

```wurst
public function unit.removeItem(item itm)
```

### unit.removeItemById

```wurst
public function unit.removeItemById(int itemId) returns boolean
```

Removes the first item of type itemId carried by the unit
	returns true if an item was found and removed

### unit.itemCount

```wurst
public function unit.itemCount(int itemTypeId) returns int
```

Returns the number of slots containing the given item type

### unit.removeItemFromSlot

```wurst
public function unit.removeItemFromSlot(int slot) returns item
```

### unit.dropItemPoint

```wurst
public function unit.dropItemPoint(item itm, vec2 pos) returns boolean
```

### unit.dropItemSlot

```wurst
public function unit.dropItemSlot(item itm, int slot) returns boolean
```

### unit.dropItemTarget

```wurst
public function unit.dropItemTarget(item itm, widget target) returns boolean
```

### unit.useItem

```wurst
public function unit.useItem(item itm) returns boolean
```

### unit.useItemPoint

```wurst
public function unit.useItemPoint(item itm, vec2 pos) returns boolean
```

### unit.addItemToStock

```wurst
public function unit.addItemToStock(int itmId, int currentStock, int stockMax)
```

### unit.removeItemFromStock

```wurst
public function unit.removeItemFromStock(int itmId)
```

### unit.addUnitToStock

```wurst
public function unit.addUnitToStock(int unitId, int currentStock, int stockMax)
```

### unit.removeUnitFromStock

```wurst
public function unit.removeUnitFromStock(int unitId)
```

### unit.useItemTarget

```wurst
public function unit.useItemTarget(item itm, widget target) returns boolean
```

### unit.revive

```wurst
public function unit.revive(vec2 pos, boolean doEyecandy)
```

### unit.getAbility

```wurst
public function unit.getAbility(int abilId) returns ability
```

### unit.getAbilityByIndex

```wurst
public function unit.getAbilityByIndex(int index) returns ability
```

### unit.setAbilityLevel

```wurst
public function unit.setAbilityLevel(int abilId, int lvl)
```

### unit.setAnimation

```wurst
public function unit.setAnimation(string name)
```

### unit.setAnimation

```wurst
public function unit.setAnimation(int index)
```

### unit.addAnimationProperties

```wurst
public function unit.addAnimationProperties(string properties, bool add)
```

### unit.addAnimationProperties

```wurst
public function unit.addAnimationProperties(string properties)
```

### unit.removeAnimationProperties

```wurst
public function unit.removeAnimationProperties(string properties)
```

### unit.lookAt

```wurst
public function unit.lookAt(string bone, unit target, vec3 offset)
```

### unit.lookAt

```wurst
public function unit.lookAt(string bone, unit target)
```

### unit.resetLookAt

```wurst
public function unit.resetLookAt()
```

### unit.setColor

```wurst
public function unit.setColor(playercolor c)
```

### unit.setExploded

```wurst
public function unit.setExploded(boolean exploded)
```

Sets whether a unit explodes on death

### unit.setFacing

```wurst
public function unit.setFacing(angle a)
```

### unit.setFlyHeight

```wurst
public function unit.setFlyHeight(real height, real rate)
```

### unit.setHP

```wurst
public function unit.setHP(real hp)
```

### unit.setInvulnerable

```wurst
public function unit.setInvulnerable(boolean flag)
```

### unit.setMana

```wurst
public function unit.setMana(real val)
```

### unit.setMoveSpeed

```wurst
public function unit.setMoveSpeed(real speed)
```

### unit.setOwner

```wurst
public function unit.setOwner(player p, boolean changeColor)
```

### unit.setPathing

```wurst
public function unit.setPathing(boolean value)
```

### unit.setPos

```wurst
public function unit.setPos(vec2 pos)
```

### unit.setPosFly

```wurst
public function unit.setPosFly(vec3 pos)
```

### unit.setPosReal

```wurst
public function unit.setPosReal(vec3 pos)
```

### unit.setPos

```wurst
public function unit.setPos(real x, real y)
```

### unit.setPropWindow

```wurst
public function unit.setPropWindow(angle value)
```

A prop window of 0 prevents the unit from moving, but
it can still turn around.

### unit.setAcquireRange

```wurst
public function unit.setAcquireRange(real value)
```

### unit.setCreepGuard

```wurst
public function unit.setCreepGuard(boolean value)
```

### unit.setScale

```wurst
public function unit.setScale(real scale)
```

### unit.setState

```wurst
public function unit.setState(unitstate state, real value)
```

### unit.setTimeScale

```wurst
public function unit.setTimeScale(real scale)
```

### unit.setTimedLife

```wurst
public function unit.setTimedLife(real time)
```

### unit.setTimedLife

```wurst
public function unit.setTimedLife(real time, int buffId)
```

Applies a timed life over `time` seconds using the given decay buff id (instead of the default 'BTLF').

### unit.setTurnSpeed

```wurst
public function unit.setTurnSpeed(real speed)
```

### unit.setUseFood

```wurst
public function unit.setUseFood(boolean flag)
```

### unit.setUserData

```wurst
public function unit.setUserData(int data)
```

### unit.setVertexColor

```wurst
public function unit.setVertexColor(int r, int g, int b, int a)
```

### unit.setX

```wurst
public function unit.setX(real x)
```

### unit.setXY

```wurst
public function unit.setXY(vec2 pos)
```

Sets the coordinmates of the unit to the given position.
	Uses the SetUnitX/Y natives

### unit.setXY

```wurst
public function unit.setXY(vec3 pos)
```

Sets the coordinmates of the unit to the given position.
	Uses the SetUnitX/Y natives

### unit.setXYZ

```wurst
public function unit.setXYZ(vec3 pos)
```

Sets the coordinmates of the unit to the given position.
	Z is being set as flyheight. Uses the SetUnitX/Y natives

### unit.setXYZReal

```wurst
public function unit.setXYZReal(vec3 pos)
```

### unit.setY

```wurst
public function unit.setY(real y)
```

### unit.show

```wurst
public function unit.show()
```

### unit.subHP

```wurst
public function unit.subHP(real val)
```

### unit.subMana

```wurst
public function unit.subMana(real val)
```

### unit.subState

```wurst
public function unit.subState(unitstate state, real value)
```

### vec2.withRealZ

```wurst
public function vec2.withRealZ(unit u) returns vec3
```

### unit.abortOrder

```wurst
public function unit.abortOrder() returns boolean
```

Cancels the current order

### unit.resetAbilityCooldown

```wurst
public function unit.resetAbilityCooldown(int abilId)
```

### unit.resetCooldown

```wurst
public function unit.resetCooldown()
```

Reset all cooldowns of the unit *

### unit.getDefaultMovespeed

```wurst
public function unit.getDefaultMovespeed() returns real
```

### unit.getDefaultPropWindow

```wurst
public function unit.getDefaultPropWindow() returns angle
```

Returns the default prop window of the unit as angle.

### unit.getDefaultTurnSpeed

```wurst
public function unit.getDefaultTurnSpeed() returns real
```

### unit.getDefaultAcquireRange

```wurst
public function unit.getDefaultAcquireRange() returns real
```

### unit.getDefaultFlyHeight

```wurst
public function unit.getDefaultFlyHeight() returns real
```

### unit.getIntMaxHP

```wurst
public function unit.getIntMaxHP() returns int
```

### unit.setMaxHP

```wurst
public function unit.setMaxHP(int hp)
```

### unit.setMaxHP

```wurst
public function unit.setMaxHP(int hp, boolean keepRatio)
```

Changes a unit's maximum hp, adjusting the
	current hp to keep the same ratio.

### unit.getIntMaxMana

```wurst
public function unit.getIntMaxMana() returns int
```

### unit.setMaxMana

```wurst
public function unit.setMaxMana(int mana)
```

### unit.setMaxMana

```wurst
public function unit.setMaxMana(int mana, boolean keepRatio)
```

Changes a unit's maximum mana, adjusting the
	current mana to keep the same ratio.
	If the current unit's maximum mana is zero,
	the ratio will be considered zero.

### unit.setName

```wurst
public function unit.setName(string name)
```

### unit.setProperName

```wurst
public function unit.setProperName(string name)
```

### unit.getBaseDamage

```wurst
public function unit.getBaseDamage(int weaponIndex) returns int
```

### unit.setBaseDamage

```wurst
public function unit.setBaseDamage(int baseDamage, int weaponIndex)
```

### unit.getDiceNumber

```wurst
public function unit.getDiceNumber(int weaponIndex) returns int
```

### unit.setDiceNumber

```wurst
public function unit.setDiceNumber(int diceNumber, int weaponIndex)
```

### unit.getDiceSides

```wurst
public function unit.getDiceSides(int weaponIndex) returns int
```

### unit.setDiceSides

```wurst
public function unit.setDiceSides(int diceSides, int weaponIndex)
```

### unit.getAttackCooldown

```wurst
public function unit.getAttackCooldown(int weaponIndex) returns real
```

### unit.setAttackCooldown

```wurst
public function unit.setAttackCooldown(real cooldown, int weaponIndex)
```

### unit.getArmor

```wurst
public function unit.getArmor() returns real
```

### unit.setArmor

```wurst
public function unit.setArmor(real armorAmount)
```

### unit.hideAbility

```wurst
public function unit.hideAbility(int abilId, boolean flag)
```

### unit.disableAbility

```wurst
public function unit.disableAbility(int abilId, boolean flag, boolean hideUI)
```

### unit.disableAttack

```wurst
public function unit.disableAttack(boolean flag, boolean hideUI)
```

### unit.disableWorkQueue

```wurst
public function unit.disableWorkQueue(boolean flag, boolean hideUI)
```

### unit.cancelTimedLife

```wurst
public function unit.cancelTimedLife()
```

### unit.isSelectable

```wurst
public function unit.isSelectable() returns boolean
```

### unit.isInvulnerable

```wurst
public function unit.isInvulnerable() returns boolean
```

### unit.interruptAttack

```wurst
public function unit.interruptAttack()
```

### unit.getCollisionSize

```wurst
public function unit.getCollisionSize() returns real
```

### unit.showTeamGlow

```wurst
public function unit.showTeamGlow(boolean show)
```

### unit.setAbilityCooldown

```wurst
public function unit.setAbilityCooldown(int abilId, int levelIndex, real cooldown)
```

Level is indexed. Level 1 = 0, Level 2 = 1, e.t.c.

### unit.getAbilityCooldown

```wurst
public function unit.getAbilityCooldown(int abilId, int levelIndex) returns real
```

Level is indexed. Level 1 = 0, Level 2 = 1, e.t.c.

### unit.getAbilityCooldownRemaining

```wurst
public function unit.getAbilityCooldownRemaining(int abilId) returns real
```

### unit.startAbilityCooldown

```wurst
public function unit.startAbilityCooldown(int abilCode)
```

### unit.startAbilityCooldown

```wurst
public function unit.startAbilityCooldown(int abilCode, real cooldown)
```

### unit.endAbilityCooldown

```wurst
public function unit.endAbilityCooldown(int abilCode)
```

### unit.getAbilityManaCost

```wurst
public function unit.getAbilityManaCost(int abilId, int level) returns int
```

### unit.setAbilityManaCost

```wurst
public function unit.setAbilityManaCost(int abilId, int level, int manaCost)
```

### unit.getLocalZ

```wurst
public function unit.getLocalZ() returns real
```

### unit.isIllusion

```wurst
public function unit.isIllusion() returns bool
```

### unit.isBuildInProgress

```wurst
public function unit.isBuildInProgress() returns bool
```

### unit.isUpgradeInProgress

```wurst
public function unit.isUpgradeInProgress() returns bool
```

### unit.incAbilityLevel

```wurst
public function unit.incAbilityLevel(int abilityId)
```

### unit.decAbilityLevel

```wurst
public function unit.decAbilityLevel(int abilityId)
```

### unit.removeGuardPosition

```wurst
public function unit.removeGuardPosition()
```

### unit.recycleGuardPosition

```wurst
public function unit.recycleGuardPosition()
```

### unit.getRallyPoint

```wurst
public function unit.getRallyPoint() returns vec2
```

### unit.getRallyUnit

```wurst
public function unit.getRallyUnit() returns unit
```

### unit.getRallyDestructable

```wurst
public function unit.getRallyDestructable() returns destructable
```

### unit.getRallyTarget

```wurst
public function unit.getRallyTarget() returns rallyResult
```

Returns the rally point of this unit as a rallyResult

### unit.inventory

```wurst
public function unit.inventory() returns InventoryIterator
```

Creates an inventory iterator that allows you to access each existing item in the unit's inventory via for-loop. An example 'for i in u.inventory()'.

### unit.setAttackCooldownPercChange

```wurst
public function unit.setAttackCooldownPercChange(real attackCooldownPercChange, int weaponIndex) returns real
```

> 🔧 **Configurable.** Override it in your map's config package.

Change unit attack cooldown by given percentage. Negative values are possible as well.
	Returns the new attack cooldown time of the unit.

### unit.setMoveSpeedPercChange

```wurst
public function unit.setMoveSpeedPercChange(real movespeedPercChange) returns real
```

> 🔧 **Configurable.** Override it in your map's config package.

Change unit movement speed by given percentage. Negative values are possible as well.
	Returns the new speed of the unit.
	ex.: using 0.25 on unit with speed 400 will make the new speed 500.

### unit.getField

```wurst
public function unit.getField(unitbooleanfield field) returns bool
```

### unit.getField

```wurst
public function unit.getField(unitintegerfield field) returns int
```

### unit.getField

```wurst
public function unit.getField(unitrealfield field) returns real
```

### unit.getField

```wurst
public function unit.getField(unitstringfield field) returns string
```

### unit.setField

```wurst
public function unit.setField(unitbooleanfield field, bool value) returns bool
```

### unit.setField

```wurst
public function unit.setField(unitintegerfield field, int value) returns bool
```

### unit.setField

```wurst
public function unit.setField(unitrealfield field, real value) returns bool
```

### unit.setField

```wurst
public function unit.setField(unitstringfield field, string value) returns bool
```

### unit.getFieldWeapon

```wurst
public function unit.getFieldWeapon(unitweaponbooleanfield field, int weaponIndex) returns bool
```

### unit.getFieldWeapon

```wurst
public function unit.getFieldWeapon(unitweaponintegerfield field, int weaponIndex) returns int
```

### unit.getFieldWeapon

```wurst
public function unit.getFieldWeapon(unitweaponrealfield field, int weaponIndex) returns real
```

### unit.getFieldWeapon

```wurst
public function unit.getFieldWeapon(unitweaponstringfield field, int weaponIndex) returns string
```

### unit.setFieldWeapon

```wurst
public function unit.setFieldWeapon(unitweaponbooleanfield field, int weaponIndex, bool value) returns bool
```

### unit.setFieldWeapon

```wurst
public function unit.setFieldWeapon(unitweaponintegerfield field, int weaponIndex, int value) returns bool
```

### unit.setFieldWeapon

```wurst
public function unit.setFieldWeapon(unitweaponrealfield field, int weaponIndex, real value) returns bool
```

### unit.setFieldWeapon

```wurst
public function unit.setFieldWeapon(unitweaponstringfield field, int weaponIndex, string value) returns bool
```

### unit.reviveHeroLoc

```wurst
public function unit.reviveHeroLoc(location loc, boolean doEyecandy) returns boolean
```

### unit.selectUnit

```wurst
public function unit.selectUnit(boolean flag)
```

### unit.suspendDecay

```wurst
public function unit.suspendDecay(boolean suspend)
```

### unit.removeBuffs

```wurst
public function unit.removeBuffs(boolean removePositive, boolean removeNegative)
```

### unit.removeBuffsEx

```wurst
public function unit.removeBuffsEx(boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel)
```

### unit.hasBuffsEx

```wurst
public function unit.hasBuffsEx(boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel) returns boolean
```

### unit.countBuffsEx

```wurst
public function unit.countBuffsEx(boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel) returns integer
```

### unit.addSleep

```wurst
public function unit.addSleep(boolean add)
```

### unit.addSleepPerm

```wurst
public function unit.addSleepPerm(boolean add)
```

### unit.ignoreAlarm

```wurst
public function unit.ignoreAlarm(boolean flag) returns boolean
```

### unit.setConstructionProgress

```wurst
public function unit.setConstructionProgress(integer constructionPercentage)
```

### unit.setUpgradeProgress

```wurst
public function unit.setUpgradeProgress(integer upgradePercentage)
```

### unit.pauseTimedLife

```wurst
public function unit.pauseTimedLife(boolean flag)
```

### unit.setUsesAltIcon

```wurst
public function unit.setUsesAltIcon(boolean flag)
```

### unit.damagePoint

```wurst
public function unit.damagePoint(real delay, real radius, real x, real y, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType) returns boolean
```

### unit.issuePointOrderLoc

```wurst
public function unit.issuePointOrderLoc(string order, location whichLocation) returns boolean
```

### unit.issuePointOrderByIdLoc

```wurst
public function unit.issuePointOrderByIdLoc(integer order, location whichLocation) returns boolean
```

### unit.issueInstantPointOrder

```wurst
public function unit.issueInstantPointOrder(string order, real x, real y, widget instantTargetWidget) returns boolean
```

### unit.issueInstantPointOrderById

```wurst
public function unit.issueInstantPointOrderById(integer order, real x, real y, widget instantTargetWidget) returns boolean
```

### unit.issueInstantTargetOrder

```wurst
public function unit.issueInstantTargetOrder(string order, widget targetWidget, widget instantTargetWidget) returns boolean
```

### unit.issueInstantTargetOrderById

```wurst
public function unit.issueInstantTargetOrderById(integer order, widget targetWidget, widget instantTargetWidget) returns boolean
```

### unit.issueBuildOrder

```wurst
public function unit.issueBuildOrder(string unitToBuild, real x, real y) returns boolean
```

### unit.issueBuildOrderById

```wurst
public function unit.issueBuildOrderById(integer unitId, real x, real y) returns boolean
```

### unit.setResourceAmount

```wurst
public function unit.setResourceAmount(integer amount)
```

### unit.addResourceAmount

```wurst
public function unit.addResourceAmount(integer amount)
```

### unit.waygateSetDestination

```wurst
public function unit.waygateSetDestination(real x, real y)
```

### unit.waygateActivate

```wurst
public function unit.waygateActivate(boolean activate)
```

### unit.setItemTypeSlots

```wurst
public function unit.setItemTypeSlots(integer slots)
```

### unit.addIndicator

```wurst
public function unit.addIndicator(integer red, integer green, integer blue, integer alpha)
```

### unit.createMinimapIconOnUnit

```wurst
public function unit.createMinimapIconOnUnit(integer red, integer green, integer blue, string pingPath, fogstate fogVisibility) returns minimapicon
```

### unit.setCameraTargetController

```wurst
public function unit.setCameraTargetController(real xoffset, real yoffset, boolean inheritOrientation)
```

### unit.setCameraOrientController

```wurst
public function unit.setCameraOrientController(real xoffset, real yoffset)
```

### unit.setFacingEx

```wurst
public function unit.setFacingEx(real facingAngle)
```

### unit.setSkin

```wurst
public function unit.setSkin(integer skinId)
```

### unit.queueImmediateOrderById

```wurst
public function unit.queueImmediateOrderById(integer order) returns boolean
```

### unit.queuePointOrderById

```wurst
public function unit.queuePointOrderById(integer order, real x, real y) returns boolean
```

### unit.queueTargetOrderById

```wurst
public function unit.queueTargetOrderById(integer order, widget targetWidget) returns boolean
```

### unit.queueInstantPointOrderById

```wurst
public function unit.queueInstantPointOrderById(integer order, real x, real y, widget instantTargetWidget) returns boolean
```

### unit.queueInstantTargetOrderById

```wurst
public function unit.queueInstantTargetOrderById(integer order, widget targetWidget, widget instantTargetWidget) returns boolean
```

### unit.queueBuildOrderById

```wurst
public function unit.queueBuildOrderById(integer unitId, real x, real y) returns boolean
```

### unit.clearOrders

```wurst
public function unit.clearOrders(boolean onlyQueued)
```

### unit.forceStopOrder

```wurst
public function unit.forceStopOrder(boolean clearQueue)
```
