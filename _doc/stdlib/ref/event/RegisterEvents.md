---
title: RegisterEvents
layout: stdlibref
category: event
categoryLabel: Events
tags:
  - event
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/RegisterEvents.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/RegisterEvents.wurst)**

## Functions

### registerPlayerUnitEvent

```wurst
public function registerPlayerUnitEvent(playerunitevent p, code c)
```

### registerPlayerUnitEvent

```wurst
public function registerPlayerUnitEvent(playerunitevent p, code filter, code c)
```

### registerPlayerUnitEvent

```wurst
public function registerPlayerUnitEvent(playerunitevent p, code filter, code condition, code action)
```

### registerPlayerUnitEventForPlayer

```wurst
public function registerPlayerUnitEventForPlayer(playerunitevent p, code c, player pl)
```

### getPlayerUnitEventTrigger

```wurst
public function getPlayerUnitEventTrigger(playerunitevent p) returns trigger
```

### registerPlayerEvent

```wurst
public function registerPlayerEvent(playerevent p, code c)
```

**PlayerEvent****

### registerPlayerEvent

```wurst
public function registerPlayerEvent(playerevent p, code condition, code action)
```

### registerSpellEffectEvent

```wurst
public function registerSpellEffectEvent(int abil, code onCast)
```
