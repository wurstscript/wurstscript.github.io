---
title: Trigger
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Trigger.wurst'
generated: true
---

Metakey is an integer based native parameter which is used as a bitfield.
Metakeys are NONE (0), SHIFT (1), CTRL (2), ALT (4) and META(8) (windows key).
This metakeys can be combined. E.g. combine the meta keypress of ALT and SHIFT: 4 + 1 = 5.
When the user holds and presses a oskey the event will only run when it was registered with metakey 5.
Inside the press event metakey-Keys always have the metakey they start themself or a bigger one if other metakeys are hold down during that process.
When holding down all metakeys the result would be 1 + 2 + 4 + 8 = 15.
*

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Trigger.wurst)**

## Enums

### OSKEY_META

```wurst
public enum OSKEY_META
```

**Values:** `NONE`, `SHIFT`, `CTRL`, `CTRLSHIFT`, `ALT`, `ALTSHIFT`, `ALTCTRL`, `CTRLALTSHIT`, `META`, `METASHIFT`, `METACTRL`, `METACTRLSHIFT`, `METAALT`, `METAALTSHIFT`, `METAALTCTRL`, `ALL`

## Extension Functions

### OSKEY_META.toInt

```wurst
public function OSKEY_META.toInt() returns int
```

### trigger.addAction

```wurst
public function trigger.addAction(code actionFunc) returns triggeraction
```

### trigger.addCondition

```wurst
public function trigger.addCondition(boolexpr condition) returns triggercondition
```

### trigger.clearConditions

```wurst
public function trigger.clearConditions()
```

### trigger.clearActions

```wurst
public function trigger.clearActions()
```

### trigger.destr

```wurst
public function trigger.destr()
```

### trigger.disable

```wurst
public function trigger.disable()
```

### trigger.enable

```wurst
public function trigger.enable()
```

### trigger.evaluate

```wurst
public function trigger.evaluate() returns boolean
```

### trigger.execute

```wurst
public function trigger.execute()
```

### trigger.executeWait

```wurst
public function trigger.executeWait()
```

### trigger.isEnabled

```wurst
public function trigger.isEnabled() returns boolean
```

### trigger.waitOnSleeps

```wurst
public function trigger.waitOnSleeps(boolean flag)
```

### trigger.isWaitOnSleeps

```wurst
public function trigger.isWaitOnSleeps() returns boolean
```

### trigger.getEvalCount

```wurst
public function trigger.getEvalCount() returns int
```

### trigger.getExecCount

```wurst
public function trigger.getExecCount() returns int
```

### trigger.registerAnyUnitEvent

```wurst
public function trigger.registerAnyUnitEvent(playerunitevent whichEvent)
```

### trigger.registerDeathEvent

```wurst
public function trigger.registerDeathEvent(widget whichWidget) returns event
```

### trigger.registerDialogButtonEvent

```wurst
public function trigger.registerDialogButtonEvent(button whichButton) returns event
```

### trigger.registerDialogEvent

```wurst
public function trigger.registerDialogEvent(dialog whichDialog) returns event
```

### trigger.registerEnterRegion

```wurst
public function trigger.registerEnterRegion(region whichRegion, boolexpr filter) returns event
```

### trigger.registerGameEvent

```wurst
public function trigger.registerGameEvent(gameevent whichGameEvent) returns event
```

### trigger.registerGameStateEvent

```wurst
public function trigger.registerGameStateEvent(gamestate whichState, limitop opcode, real limitval) returns event
```

### trigger.registerLeaveRegion

```wurst
public function trigger.registerLeaveRegion(region whichRegion, boolexpr filter) returns event
```

### trigger.registerPlayerChatEvent

```wurst
public function trigger.registerPlayerChatEvent(player whichPlayer, string chatMessageToDetect, boolean exactMatchOnly) returns event
```

### trigger.registerPlayerEvent

```wurst
public function trigger.registerPlayerEvent(player whichPlayer, playerevent whichPlayerEvent) returns event
```

### trigger.registerPlayerStateEvent

```wurst
public function trigger.registerPlayerStateEvent(player whichPlayer, playerstate whichState, limitop opcode, real limitval) returns event
```

### trigger.registerPlayerUnitEvent

```wurst
public function trigger.registerPlayerUnitEvent(player whichPlayer, playerunitevent whichPlayerUnitEvent, boolexpr filter) returns event
```

### trigger.registerPlayerAllianceChange

```wurst
public function trigger.registerPlayerAllianceChange(player whichPlayer, alliancetype whichAlliance) returns event
```

### trigger.registerPlayerSync

```wurst
public function trigger.registerPlayerSync(player whichPlayer, alliancetype whichAlliance) returns event
```

### trigger.registerPlayerKeyPress

```wurst
public function trigger.registerPlayerKeyPress(player whichPlayer, oskeytype key, OSKEY_META metaKey, bool onKeyDown) returns event
```

### trigger.registerTimerEvent

```wurst
public function trigger.registerTimerEvent(real timeout, boolean periodic) returns event
```

### trigger.registerTimerExpireEvent

```wurst
public function trigger.registerTimerExpireEvent(timer whichTimer) returns event
```

### trigger.registerTrackableHitEvent

```wurst
public function trigger.registerTrackableHitEvent(trackable whichTrackable) returns event
```

### trigger.registerTrackableTrackEvent

```wurst
public function trigger.registerTrackableTrackEvent(trackable whichTrackable) returns event
```

### trigger.registerUnitEvent

```wurst
public function trigger.registerUnitEvent(unit whichUnit, unitevent whichEvent) returns event
```

### trigger.registerFilterUnitEvent

```wurst
public function trigger.registerFilterUnitEvent(unit whichUnit, unitevent whichEvent, boolexpr filter) returns event
```

### trigger.registerUnitInRange

```wurst
public function trigger.registerUnitInRange(unit whichUnit, real range, boolexpr filter) returns event
```

### trigger.registerUnitStateEvent

```wurst
public function trigger.registerUnitStateEvent(unit whichUnit, unitstate whichState, limitop opcode, real limitval) returns event
```

### trigger.registerFrameEvent

```wurst
public function trigger.registerFrameEvent(framehandle frame, frameeventtype eventId) returns event
```

Registers a frameevent with given type for given frame, the triggered callback will contain following informations:
	BlzGetTriggerFrame      - the source frame of the event
	BlzGetTriggerFrameEvent - the type of the frame event
	BlzGetTriggerFrameValue - the value of the frame event (for sliders)    // not yet part of common.j
	BlzGetTriggerFrameText  - the value of the frame event (for editfields) // not yet part of common.j
	GetTriggerPlayer        - the player causing the event
*

### trigger.removeAction

```wurst
public function trigger.removeAction(triggeraction action)
```

### trigger.removeCondition

```wurst
public function trigger.removeCondition(triggercondition condition)
```

### trigger.reset

```wurst
public function trigger.reset()
```

### trigger.registerVariableEvent

```wurst
public function trigger.registerVariableEvent(string varName, limitop opcode, real limitval) returns event
```

### trigger.registerCommandEvent

```wurst
public function trigger.registerCommandEvent(integer whichAbility, string order) returns event
```

### trigger.registerUpgradeCommandEvent

```wurst
public function trigger.registerUpgradeCommandEvent(integer whichUpgrade) returns event
```

### trigger.blzTriggerRegisterPlayerSyncEvent

```wurst
public function trigger.blzTriggerRegisterPlayerSyncEvent(player whichPlayer, string prefix, boolean fromServer) returns event
```
