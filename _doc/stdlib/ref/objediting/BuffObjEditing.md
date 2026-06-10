---
title: BuffObjEditing
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - buffs
  - object-data
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/BuffObjEditing.wurst'
generated: true
curated: /stdlib/buff_objed
---

You should use 'createBuffObject' inside compiletime expressions:
	let someBuff = compiletime(createBuffObject("Yes", "cool", Icons.bTNFarm))

	And then add the 'abilId' to the target to apply the buff.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/BuffObjEditing.wurst)**

> 📖 Read the **[detailed guide](/stdlib/buff_objed)** for hand-written examples and background.

## Classes

### BuffDefinition

```wurst
public class BuffDefinition
```

**Members:**

- `getNewId() returns int`
- `getBaseId() returns int`
- `construct(int newId, int baseId)`
- `setName(int level, string value)`
- `setEditorSuffix(int level, string value)`
- `setRace(int level, string value)`
- `setIconNormal(int level, string value)`
- `setIcon(string name)`
  Sets the icon's path for the buff obj, add "@!!" as prefix of the icon name to overide the default path by a custom path
- `setCaster(int level, string value)`
- `setArtTarget(int level, string value)`
- `setArtSpecial(int level, string value)`
- `setEffect(int level, string value)`
- `setAreaEffect(int level, string value)`
- `setMissileArt(int level, string value)`
- `setMissileSpeed(int level, int value)`
- `setMissileArc(int level, real value)`
- `setMissileHomingEnabled(int level, boolean value)`
- `setTargetAttachments(int level, int value)`
- `setTargetAttachmentPoint0(int level, string value)`
- `setTargetAttachmentPoint1(int level, string value)`
- `setTargetAttachmentPoint2(int level, string value)`
- `setTargetAttachmentPoint3(int level, string value)`
- `setTargetAttachmentPoint4(int level, string value)`
- `setTargetAttachmentPoint5(int level, string value)`
- `setCasterAttachments(int level, int value)`
- `setSpecialAttachmentPoint(int level, string value)`
- `setTooltipNormal(int level, string value)`
- `setTooltipNormalExtended(int level, string value)`
- `setEffectSound(int level, string value)`
- `setEffectSoundLooping(int level, string value)`
- `setName(string value)`
- `setEditorSuffix(string value)`
- `setRace(string value)`
- `setCaster(string value)`
- `setArtTarget(string value)`
- `setArtSpecial(string value)`
- `setEffect(string value)`
- `setAreaEffect(string value)`
- `setMissileArt(string value)`
- `setMissileSpeed(int value)`
- `setMissileArc(real value)`
- `setMissileHomingEnabled(boolean value)`
- `setTargetAttachments(int value)`
- `setTargetAttachmentPoint0(string value)`
- `setTargetAttachmentPoint1(string value)`
- `setTargetAttachmentPoint2(string value)`
- `setTargetAttachmentPoint3(string value)`
- `setTargetAttachmentPoint4(string value)`
- `setTargetAttachmentPoint5(string value)`
- `setCasterAttachments(int value)`
- `setSpecialAttachmentPoint(string value)`
- `setTooltipNormal(string value)`
- `setTooltipNormalExtended(string value)`
- `setEffectSound(string value)`
- `setEffectSoundLooping(string value)`

## Tuples

### buffTuple

```wurst
public tuple buffTuple(int abilId, int buffId)
```

## Functions

### createDummyBuffObject

```wurst
public function createDummyBuffObject(string name, string tooltip, string iconpath) returns buffTuple
```

Creates an ability and buff based on Tornado aura that allows to display a buff on units without side effects

### createDummyBuffObject

```wurst
public function createDummyBuffObject(string name, string tooltip, string iconpath, string effectPath) returns buffTuple
```

Creates an ability and buff  based on Tornado aura that allows to display a buff on units without side effects

### createDummyBuffObject

```wurst
public function createDummyBuffObject(string name, string tooltip, string iconpath, string effectPath, string attachmentPoint) returns buffTuple
```

Creates an ability and buff  based on Tornado aura that allows to display a buff on units without side effects
