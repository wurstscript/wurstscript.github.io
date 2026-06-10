---
title: EventHelper
layout: stdlibref
category: event
categoryLabel: Events
tags:
  - event
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/EventHelper.wurst'
generated: true
---

This class exposes all Getters and Setters for trigger events.
	Note: As these functions simply wrap natives, they will only return proper values during event callbacks (actions/conditions).
	To use these values in a subsequent closure, save the event data in a variable at the time the event was fired.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/EventHelper.wurst)**

## Classes

### EventData

```wurst
public class EventData
```

**Members:**

- `static function getEventId() returns eventid`
  Get trigger event.
- `static function getIsKeyDown() returns boolean`
- `static function isPlayerunitEvent() returns boolean`
  Check if current trigger event is Playerunit Event.
- `static function isKeyboardEvent() returns boolean`
  Check if current trigger event is Keyboard Event.
- `static function isMouseEvent() returns boolean`
  Check if current trigger event is Mouse Event.
- `static function getTriggerUnit() returns unit`
- `static function getEnteringUnit() returns unit`
- `static function getLeavingUnit() returns unit`
- `static function getLevelingUnit() returns unit`
- `static function getLearningUnit() returns unit`
- `static function getRevivableUnit() returns unit`
- `static function getRevivingUnit() returns unit`
- `static function getAttackerUnit() returns unit`
- `static function getRescuerUnit() returns unit`
- `static function getDyingUnit() returns unit`
- `static function getKillingUnit() returns unit`
- `static function getDecayingUnit() returns unit`
- `static function getConstructingStructure() returns unit`
  Returns the unit which constructs the structure.
- `static function getConstructedStructure() returns unit`
  Returns the building which is being constructed.
- `static function getCancelledStructure() returns unit`
  Returns the building which was being constructed but as cancelled.
- `static function getResearchingUnit() returns unit`
- `static function getTrainedUnit() returns unit`
- `static function getDetectedUnit() returns unit`
- `static function getSummoningUnit() returns unit`
- `static function getSummonedUnit() returns unit`
- `static function getTransportUnit() returns unit`
  Get unit that is transporting.
- `static function getLoadedUnit() returns unit`
  Get unit thas is loaded to transport.
- `static function getSellingUnit() returns unit`
- `static function getSoldUnit() returns unit`
- `static function getBuyingUnit() returns unit`
- `static function getChangingUnit() returns unit`
- `static function getManipulatingUnit() returns unit`
  EVENT_PLAYER_UNIT_DROP_ITEM
  EVENT_PLAYER_UNIT_PICKUP_ITEM
  EVENT_PLAYER_UNIT_USE_ITEM
  
  EVENT_UNIT_DROP_ITEM
  EVENT_UNIT_PICKUP_ITEM
  EVENT_UNIT_USE_ITEM
- `static function getOrderedUnit() returns unit`
- `static function getOrderTargetUnit() returns unit`
- `static function getSpellAbilityUnit() returns unit`
- `static function getSpellTargetUnit() returns unit`
- `static function getEventDamageSource() returns unit`
- `static function getEventTargetUnit() returns unit`
- `static function getDamageTarget() returns unit`
- `static function getLearnedSkill() returns int`
- `static function getLearnedSkillLevel() returns int`
- `static function getResearchedType() returns int`
- `static function getTrainedUnitType() returns int`
- `static function getIssuedOrderId() returns int`
- `static function getSpellAbilityId() returns int`
- `static function getEventDamage() returns real`
  Return damage done by Unit to another target unit.
- `static function isAttackDamage() returns bool`
  Returns `true` if the damage done is done with Unit's attack.
- `static function getOrderX() returns real`
- `static function getOrderY() returns real`
- `static function getSpellTargetX() returns real`
- `static function getSpellTargetY() returns real`
- `static function getPlayerMouseX() returns real`
  Return player's mouse X position on the terrain. Alternative: getMouseScreenVec2.
- `static function getPlayerMouseY() returns real`
  Return player's mouse Y position on the terrain. Alternative: getMouseScreenVec2.
- `static function getSaveFilename() returns string`
- `static function getChatMessage() returns string`
- `static function getChatMessageMatched() returns string`
- `static function getSyncPrefix() returns string`
- `static function getSyncData() returns string`
- `static function getSoldItem() returns item`
- `static function getManipulatedItem() returns item`
- `static function getOrderTargetItem() returns item`
- `static function getSpellTargetItem() returns item`
- `static function isManipulatedItemAbsorbed() returns bool`
- `static function getAbsorbingItem() returns item`
- `static function getStackingItemSource() returns item`
  EVENT_PLAYER_UNIT_STACK_ITEM
  	Source is the item that is losing charges, Target is the item getting charges.
- `static function getStackingItemTarget() returns item`
  EVENT_PLAYER_UNIT_STACK_ITEM
  	Source is the item that is losing charges, Target is the item getting charges.
- `static function getStackingItemTargetPreviousCharges() returns int`
- `static function getTriggerPlayer() returns player`
- `static function getWinningPlayer() returns player`
- `static function getDetectingPlayer() returns player`
- `static function getTournamentFinishPlayer() returns player`
- `static function getChangingUnitPreviousOwnerPlayer() returns player`
- `static function getPlayerState() returns playerstate`
- `static function getSpellAbility() returns ability`
- `static function getTriggerDestructable() returns destructable`
- `static function getOrderTargetDestructable() returns destructable`
- `static function getSpellTargetDestructable() returns destructable`
- `static function getClickedDialog() returns dialog`
- `static function getClickedDialogButton() returns button`
- `static function getGameState() returns gamestate`
- `static function getTriggerRegion() returns region`
- `static function getExpiredTimer() returns timer`
- `static function getTriggerWidget() returns widget`
- `static function getOrderTargetWidget() returns widget`
- `static function getDamageType() returns damagetype`
- `static function getDamageAttackType() returns attacktype`
- `static function getDamageWeaponType() returns weapontype`
- `static function getTriggerKey() returns oskeytype`
- `static function getTriggerMetaKey() returns OSKEY_META`
- `static function getTriggerFrame() returns framehandle`
- `static function getTriggerFrameEvent() returns frameeventtype`
- `static function getOrderPos() returns vec2`
- `static function getOrderTargetPos() returns vec2`
- `static function getAbilityTargetPos() returns vec2`
- `static function getSpellTargetPos() returns vec2`
- `static function getMouseWorldPos() returns vec2`
  Returns player's mouse position on screen. Do not confuse with getMouseLocationVec2.
- `static function setDamage(real damage)`
  Change damage from damage event.
- `static function setDamageAttackType(attacktype attackType)`
  Change damage from damage event.
- `static function setDamageType(damagetype damageType)`
  Change damage from damage event.
- `static function setDamageWeaponType(weapontype weaponType)`
  Change damage from damage event.

## Extension Functions

### trigger.registerUnitInRangeSource

```wurst
public function trigger.registerUnitInRangeSource(unit whichUnit, real range, boolexpr filter) returns event
```

### trigger.registerUnitInRangeSource

```wurst
public function trigger.registerUnitInRangeSource(unit whichUnit, real range) returns event
```

### trigger.getSource

```wurst
public function trigger.getSource() returns unit
```

### unit.clearRegister

```wurst
public function unit.clearRegister()
```

### trigger.registerRectEnterEventSource

```wurst
public function trigger.registerRectEnterEventSource(rect r)
```

### trigger.registerRectLeaveEventSource

```wurst
public function trigger.registerRectLeaveEventSource(rect r)
```

### trigger.getSourceRect

```wurst
public function trigger.getSourceRect() returns rect
```

### trigger.unregisterRectEvent

```wurst
public function trigger.unregisterRectEvent()
```

### region.setRegionData

```wurst
public function region.setRegionData(int data)
```

### region.loadRegionData

```wurst
public function region.loadRegionData() returns int
```

### region.removeRegionData

```wurst
public function region.removeRegionData()
```

### eventid.isPlayerunitEvent

```wurst
public function eventid.isPlayerunitEvent() returns boolean
```

### eventid.isKeyboardEvent

```wurst
public function eventid.isKeyboardEvent() returns boolean
```

### eventid.isMouseEvent

```wurst
public function eventid.isMouseEvent() returns boolean
```
