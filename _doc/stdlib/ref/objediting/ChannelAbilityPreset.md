---
title: ChannelAbilityPreset
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/presets/ChannelAbilityPreset.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/presets/ChannelAbilityPreset.wurst)**

**Re-exports:** `AbilityObjEditing`, `ObjectIds`, `ObjectIdGenerator`, `Icons`

## Classes

### ChannelAbilityPreset

```wurst
public class ChannelAbilityPreset extends AbilityDefinitionIllidanChannel
```

**Members:**

- `getOrderString() returns string`
- `construct(int newId, int lvls, boolean removeChannelProperties, TooltipGenerator tgen)`
- `construct(int newId, int lvls, boolean removeChannelProperties)`
- `setup(int lvls, boolean removeChannelProperties)`
- `makeUnitSpell(int mana, real cooldown)`
- `removeChannelProperties(boolean removeVisuals)`
- `removeChannelProperties(boolean removeVisuals, boolean makeVisible)`
- `presetTargetTypes(Targettype ttype)`
- `presetOption(Option opt, boolean flag)`
- `hasOption(Option option) returns boolean`

## Enums

### Option

```wurst
public enum Option
```

**Values:** `VISIBLE`, `TARGETIMAGE`, `PHYSICALSPELL`, `UNIVERSALSPELL`, `UNIQUECAST`

### Targettype

```wurst
public enum Targettype
```

**Values:** `NONE`, `UNIT`, `POINT`, `POINTUNIT`, `PASSIVE`

## Extension Functions

### Targettype.toString

```wurst
public function Targettype.toString() returns string
```
