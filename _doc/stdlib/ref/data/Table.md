---
title: Table
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - collection
  - data
  - map
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/Table.wurst'
generated: true
---

Wraps a hashtable to provide single key tables

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/Table.wurst)**

**Re-exports:** `Hashtable`

## Classes

### Table

```wurst
public class Table
```

**Members:**

- `hasInt(int parentKey) returns boolean`
- `hasReal(int parentKey) returns boolean`
- `hasBoolean(int parentKey) returns boolean`
- `hasString(int parentKey) returns boolean`
- `hasHandle(int parentKey) returns boolean`
- `removeInt(int parentKey)`
- `removeReal(int parentKey)`
- `removeBoolean(int parentKey)`
- `removeString(int parentKey)`
- `removeHandle(int parentKey)`
- `loadInt(int parentKey) returns int`
- `saveInt(int parentKey, int value)`
- `loadReal(int parentKey) returns real`
- `saveReal(int parentKey, real value)`
- `loadBoolean(int parentKey) returns boolean`
- `saveBoolean(int parentKey, boolean value)`
- `loadString(int parentKey) returns string`
- `saveString(int parentKey, string value)`
- `loadPlayer(int parentKey) returns player`
- `savePlayer(int parentKey, player value)`
- `loadWidget(int parentKey) returns widget`
- `saveWidget(int parentKey, widget value)`
- `loadUnit(int parentKey) returns unit`
- `saveUnit(int parentKey, unit value)`
- `loadDestructable(int parentKey) returns destructable`
- `saveDestructable(int parentKey, destructable value)`
- `loadItem(int parentKey) returns item`
- `saveItem(int parentKey, item value)`
- `loadAbility(int parentKey) returns ability`
- `saveAbility(int parentKey, ability value)`
- `loadForce(int parentKey) returns force`
- `saveForce(int parentKey, force value)`
- `loadGroup(int parentKey) returns group`
- `saveGroup(int parentKey, group value)`
- `loadTrigger(int parentKey) returns trigger`
- `saveTrigger(int parentKey, trigger value)`
- `loadTriggerAction(int parentKey) returns triggeraction`
- `saveTriggerAction(int parentKey, triggeraction value)`
- `loadTriggerCondition(int parentKey) returns triggercondition`
- `saveTriggerCondition(int parentKey, triggercondition value)`
- `loadTimer(int parentKey) returns timer`
- `saveTimer(int parentKey, timer value)`
- `loadLocation(int parentKey) returns location`
- `saveLocation(int parentKey, location value)`
- `loadRegion(int parentKey) returns region`
- `saveRegion(int parentKey, region value)`
- `loadRect(int parentKey) returns rect`
- `saveRect(int parentKey, rect value)`
- `loadSound(int parentKey) returns sound`
- `saveSound(int parentKey, sound value)`
- `loadEffect(int parentKey) returns effect`
- `saveEffect(int parentKey, effect value)`
- `loadFogState(int parentKey) returns fogstate`
- `saveFogState(int parentKey, fogstate value)`
- `loadDialog(int parentKey) returns dialog`
- `saveDialog(int parentKey, dialog value)`
- `loadButton(int parentKey) returns button`
- `saveButton(int parentKey, button value)`
- `loadQuest(int parentKey) returns quest`
- `saveQuest(int parentKey, quest value)`
- `loadQuestItem(int parentKey) returns questitem`
- `saveQuestItem(int parentKey, questitem value)`
- `loadLeaderboard(int parentKey) returns leaderboard`
- `saveLeaderboard(int parentKey, leaderboard value)`
- `loadMultiboard(int parentKey) returns multiboard`
- `saveMultiboard(int parentKey, multiboard value)`
- `loadTrackable(int parentKey) returns trackable`
- `saveTrackable(int parentKey, trackable value)`
- `loadLightning(int parentKey) returns lightning`
- `saveLightning(int parentKey, lightning value)`
- `loadImage(int parentKey) returns image`
- `saveImage(int parentKey, image value)`
- `loadUbersplat(int parentKey) returns ubersplat`
- `saveUbersplat(int parentKey, ubersplat value)`
- `saveFrameHandle(int parentKey, framehandle value)`
- `loadFrameHandle(int parentKey) returns framehandle`
- `saveOskeytype(int parentKey, oskeytype value)`
- `loadOskeytype(int parentKey) returns oskeytype`
- `loadHashtable(int parentKey) returns hashtable`
- `saveHashtable(int parentKey, hashtable value)`
- `flush()`
  Remove all data from this table
