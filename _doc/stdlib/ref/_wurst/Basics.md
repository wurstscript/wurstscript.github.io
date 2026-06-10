---
title: Basics
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/Basics.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/Basics.wurst)**

**Re-exports:** `_Primitives`

## Constants

### ANIMATION_PERIOD

```wurst
public constant ANIMATION_PERIOD = 0.030
```

> 🔧 **Configurable.** Override it in your map's config package.

Standard Period for animation.
	  Note that 0.03125 is also possible, but doesn't work with order cancel from SetUnitPos

### MAX_COLLISION_SIZE

```wurst
public constant MAX_COLLISION_SIZE = 197.0
```

> 🔧 **Configurable.** Override it in your map's config package.

Max collision size of any unit

### HEIGHT_ENABLER

```wurst
public constant HEIGHT_ENABLER = 'Amrf'
```

Id of Ravenform to allow setting fly height

### TREE_RECOGNITION

```wurst
public constant TREE_RECOGNITION = 'Aeat'
```

Id of Eattree to recognize trees

### LOCUST_ID

```wurst
public constant LOCUST_ID = 'Aloc'
```

Id of Locust

### GHOST_INVIS_ID

```wurst
public constant GHOST_INVIS_ID = 'Agho'
```

Id of Ghost (Visible)

### GHOST_VIS_ID

```wurst
public constant GHOST_VIS_ID = 'Aeth'
```

Id of Ghost (Invisible)

### DUMMY_PLAYER

```wurst
public constant DUMMY_PLAYER = players[PLAYER_NEUTRAL_PASSIVE]
```

Neutral Passive (grey)

### DUMMY_HOSTILE_PLAYER

```wurst
public constant DUMMY_HOSTILE_PLAYER = players[PLAYER_NEUTRAL_AGGRESSIVE]
```

Neutral Hostile (darkgreen)
