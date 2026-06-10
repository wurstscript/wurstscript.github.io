---
title: Lightning
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Lightning.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Lightning.wurst)**

## Functions

### addLightning

```wurst
public function addLightning(string codeName, bool checkVisibility, vec2 start, vec2 _end) returns lightning
```

Acts as with vec3 version but with z equal to terrain height.

### addLightning

```wurst
public function addLightning(string codeName, bool checkVisibility, vec3 start, vec3 _end) returns lightning
```

Warning, z value of vec3 should consider terrain height.
	(usually with z==0 the lightning spawns very low under ground)

## Extension Functions

### lightning.move

```wurst
public function lightning.move(bool checkVisibility, vec2 start, vec2 _end) returns bool
```

Acts as with vec3 version but with z equal to terrain height.

### lightning.move

```wurst
public function lightning.move(bool checkVisibility, vec3 start, vec3 _end) returns bool
```

Warning, z value of vec3 should consider terrain height.
	(usually with z==0 the lightning spawns very low under ground)

### lightning.setColor

```wurst
public function lightning.setColor(colorA c) returns boolean
```

### lightning.setColor

```wurst
public function lightning.setColor(color c) returns boolean
```

### lightning.getColor

```wurst
public function lightning.getColor() returns color
```

Gets given lightning's color.
	Uses approximation since it's stored in reals.

### lightning.getColorWithA

```wurst
public function lightning.getColorWithA() returns colorA
```

Gets given lightning's color with alpha channel.
	Uses approximation since it's stored in reals.

### lightning.getColorR

```wurst
public function lightning.getColorR() returns real
```

### lightning.getColorG

```wurst
public function lightning.getColorG() returns real
```

### lightning.getColorB

```wurst
public function lightning.getColorB() returns real
```

### lightning.getColorA

```wurst
public function lightning.getColorA() returns real
```

### lightning.destr

```wurst
public function lightning.destr() returns bool
```

## Constants

### LIGHTNING_CHAIN_LIGHTNING_PRIMARY

```wurst
public constant LIGHTNING_CHAIN_LIGHTNING_PRIMARY = "CLPB"
```

### LIGHTNING_CHAIN_LIGHTNING_SEECONDARY

```wurst
public constant LIGHTNING_CHAIN_LIGHTNING_SEECONDARY = "CLSB"
```

### LIGHTNING_DRAIN

```wurst
public constant LIGHTNING_DRAIN = "DRAB"
```

### LIGHTNING_DRAIN_LIFE

```wurst
public constant LIGHTNING_DRAIN_LIFE = "DRAL"
```

### LIGHTNING_DRAIN_MANA

```wurst
public constant LIGHTNING_DRAIN_MANA = "DRAM"
```

### LIGHTNING_FINGER_OF_DEATH

```wurst
public constant LIGHTNING_FINGER_OF_DEATH = "AFOD"
```

### LIGHTNING_FORKED_LIGHTNING

```wurst
public constant LIGHTNING_FORKED_LIGHTNING = "FORK"
```

### LIGHTNING_HEALING_WAWE_PRIMARY

```wurst
public constant LIGHTNING_HEALING_WAWE_PRIMARY = "HWPB"
```

### LIGHTNING_HEALING_WAWE_SEECONDARY

```wurst
public constant LIGHTNING_HEALING_WAWE_SEECONDARY = "HWSB"
```

### LIGHTNING_LIGHTNING_ATTACK

```wurst
public constant LIGHTNING_LIGHTNING_ATTACK = "CHIM"
```

### LIGHTNING_MAGIC_LEASH

```wurst
public constant LIGHTNING_MAGIC_LEASH = "LEAS"
```

### LIGHTNING_MANA_BURN

```wurst
public constant LIGHTNING_MANA_BURN = "MBUR"
```

### LIGHTNING_MANA_FLARE

```wurst
public constant LIGHTNING_MANA_FLARE = "MFPB"
```

### LIGHTNING_SPIRIT_LINK

```wurst
public constant LIGHTNING_SPIRIT_LINK = "SPLK"
```
