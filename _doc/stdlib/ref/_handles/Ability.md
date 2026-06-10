---
title: Ability
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Ability.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Ability.wurst)**

## Functions

### setAbilityTooltip

```wurst
public function setAbilityTooltip(int abilCode, string tooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### setAbilityActivatedTooltip

```wurst
public function setAbilityActivatedTooltip(int abilCode, string tooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### setAbilityExtendedTooltip

```wurst
public function setAbilityExtendedTooltip(int abilCode, string extendedTooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### setAbilityActivatedExtendedTooltip

```wurst
public function setAbilityActivatedExtendedTooltip(int abilCode, string extendedTooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### setAbilityResearchTooltip

```wurst
public function setAbilityResearchTooltip(int abilCode, string researchTooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### setAbilityResearchExtendedTooltip

```wurst
public function setAbilityResearchExtendedTooltip(int abilCode, string researchExtendedTooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### setAbilityActivatedIcon

```wurst
public function setAbilityActivatedIcon(int abilCode, string iconPath)
```

### setAbilityIcon

```wurst
public function setAbilityIcon(int abilCode, string iconPath)
```

### setAbilityPosX

```wurst
public function setAbilityPosX(int abilCode, int x)
```

### setAbilityPosY

```wurst
public function setAbilityPosY(int abilCode, int y)
```

### setAbilityActivatedPosX

```wurst
public function setAbilityActivatedPosX(int abilCode, int x)
```

### setAbilityActivatedPosY

```wurst
public function setAbilityActivatedPosY(int abilCode, int y)
```

### getAbilityTooltip

```wurst
public function getAbilityTooltip(int abilCode, int level) returns string
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### getAbilityActivatedTooltip

```wurst
public function getAbilityActivatedTooltip(int abilCode, int level) returns string
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### getAbilityExtendedTooltip

```wurst
public function getAbilityExtendedTooltip(int abilCode, int level) returns string
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### getAbilityActivatedExtendedTooltip

```wurst
public function getAbilityActivatedExtendedTooltip(int abilCode, int level) returns string
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### getAbilityResearchTooltip

```wurst
public function getAbilityResearchTooltip(int abilCode, int level) returns string
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### getAbilityResearchExtendedTooltip

```wurst
public function getAbilityResearchExtendedTooltip(int abilCode, int level) returns string
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### getAbilityIcon

```wurst
public function getAbilityIcon(int abilCode) returns string
```

### getAbilityActivatedIcon

```wurst
public function getAbilityActivatedIcon(int abilCode) returns string
```

### getAbilityPosX

```wurst
public function getAbilityPosX(int abilCode) returns int
```

### getAbilityPosY

```wurst
public function getAbilityPosY(int abilCode) returns int
```

### getAbilityActivatedPosX

```wurst
public function getAbilityActivatedPosX(int abilCode) returns int
```

### getAbilityActivatedPosY

```wurst
public function getAbilityActivatedPosY(int abilCode) returns int
```

## Extension Functions

### player.setAbilityTooltip

```wurst
public function player.setAbilityTooltip(int abilCode, string tooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### player.setAbilityActivatedTooltip

```wurst
public function player.setAbilityActivatedTooltip(int abilCode, string tooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### player.setAbilityExtendedTooltip

```wurst
public function player.setAbilityExtendedTooltip(int abilCode, string extendedTooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### player.setAbilityActivatedExtendedTooltip

```wurst
public function player.setAbilityActivatedExtendedTooltip(int abilCode, string extendedTooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### player.setAbilityResearchTooltip

```wurst
public function player.setAbilityResearchTooltip(int abilCode, string researchTooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### player.setAbilityResearchExtendedTooltip

```wurst
public function player.setAbilityResearchExtendedTooltip(int abilCode, string researchExtendedTooltip, int level)
```

Levels are indexed, first level is 0, second is 1 e.t.c.

### player.setAbilityActivatedIcon

```wurst
public function player.setAbilityActivatedIcon(int abilCode, string iconPath)
```

### player.setAbilityIcon

```wurst
public function player.setAbilityIcon(int abilCode, string iconPath)
```

### player.setAbilityPosX

```wurst
public function player.setAbilityPosX(int abilCode, int x)
```

### player.setAbilityPosY

```wurst
public function player.setAbilityPosY(int abilCode, int y)
```

### player.setAbilityActivatedPosX

```wurst
public function player.setAbilityActivatedPosX(int abilCode, int x)
```

### player.setAbilityActivatedPosY

```wurst
public function player.setAbilityActivatedPosY(int abilCode, int y)
```

### ability.getField

```wurst
public function ability.getField(abilitybooleanfield field) returns bool
```

### ability.getField

```wurst
public function ability.getField(abilityintegerfield field) returns int
```

### ability.getField

```wurst
public function ability.getField(abilityrealfield field) returns real
```

### ability.getField

```wurst
public function ability.getField(abilitystringfield field) returns string
```

### ability.getField

```wurst
public function ability.getField(abilitybooleanlevelfield field, int level) returns bool
```

### ability.getField

```wurst
public function ability.getField(abilityintegerlevelfield field, int level) returns int
```

### ability.getField

```wurst
public function ability.getField(abilityreallevelfield field, int level) returns real
```

### ability.getField

```wurst
public function ability.getField(abilitystringlevelfield field, int level) returns string
```

### ability.getField

```wurst
public function ability.getField(abilitybooleanlevelarrayfield field, int level, int index) returns bool
```

### ability.getField

```wurst
public function ability.getField(abilityintegerlevelarrayfield field, int level, int index) returns int
```

### ability.getField

```wurst
public function ability.getField(abilityreallevelarrayfield field, int level, int index) returns real
```

### ability.getField

```wurst
public function ability.getField(abilitystringlevelarrayfield field, int level, int index) returns string
```

### ability.setField

```wurst
public function ability.setField(abilitybooleanfield field, bool value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilityintegerfield field, int value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilityrealfield field, real value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilitystringfield field, string value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilitybooleanlevelfield field, int level, bool value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilityintegerlevelfield field, int level, int value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilityreallevelfield field, int level, real value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilitystringlevelfield field, int level, string value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilitybooleanlevelarrayfield field, int level, int index, bool value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilityintegerlevelarrayfield field, int level, int index, int value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilityreallevelarrayfield field, int level, int index, real value) returns bool
```

### ability.setField

```wurst
public function ability.setField(abilitystringlevelarrayfield field, int level, int index, string value) returns bool
```

### ability.addField

```wurst
public function ability.addField(abilitybooleanlevelarrayfield field, int level, bool value) returns bool
```

### ability.addField

```wurst
public function ability.addField(abilityintegerlevelarrayfield field, int level, int value) returns bool
```

### ability.addField

```wurst
public function ability.addField(abilityreallevelarrayfield field, int level, real value) returns bool
```

### ability.addField

```wurst
public function ability.addField(abilitystringlevelarrayfield field, int level, string value) returns bool
```

### ability.removeField

```wurst
public function ability.removeField(abilitybooleanlevelarrayfield field, int level, bool value) returns bool
```

### ability.removeField

```wurst
public function ability.removeField(abilityintegerlevelarrayfield field, int level, int value) returns bool
```

### ability.removeField

```wurst
public function ability.removeField(abilityreallevelarrayfield field, int level, real value) returns bool
```

### ability.removeField

```wurst
public function ability.removeField(abilitystringlevelarrayfield field, int level, string value) returns bool
```
