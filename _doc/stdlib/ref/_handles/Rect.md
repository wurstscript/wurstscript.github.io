---
title: Rect
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Rect.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Rect.wurst)**

## Extension Functions

### rect.randomPoint

```wurst
public function rect.randomPoint() returns vec2
```

### vec2.isInRect

```wurst
public function vec2.isInRect(rect r) returns boolean
```

### rect.contains

```wurst
public function rect.contains(vec2 r) returns boolean
```

### rect.getCenter

```wurst
public function rect.getCenter() returns vec2
```

### rect.getCenterX

```wurst
public function rect.getCenterX() returns real
```

### rect.getCenterY

```wurst
public function rect.getCenterY() returns real
```

### rect.getMaxX

```wurst
public function rect.getMaxX() returns real
```

### rect.getMaxY

```wurst
public function rect.getMaxY() returns real
```

### rect.getMinX

```wurst
public function rect.getMinX() returns real
```

### rect.getMinY

```wurst
public function rect.getMinY() returns real
```

### rect.getLeftTop

```wurst
public function rect.getLeftTop() returns vec2
```

### rect.getRightTop

```wurst
public function rect.getRightTop() returns vec2
```

### rect.getLeftBot

```wurst
public function rect.getLeftBot() returns vec2
```

### rect.getRightBot

```wurst
public function rect.getRightBot() returns vec2
```

### rect.moveTo

```wurst
public function rect.moveTo(vec2 newCenter)
```

### rect.moveTo

```wurst
public function rect.moveTo(real newCenterX, real newCenterY)
```

### rect.resize

```wurst
public function rect.resize(vec2 min, vec2 max)
```

### rect.width

```wurst
public function rect.width() returns real
```

### rect.height

```wurst
public function rect.height() returns real
```

### rect.remove

```wurst
public function rect.remove()
```

### rect.copy

```wurst
public function rect.copy() returns rect
```

### rect.setRectFromLoc

```wurst
public function rect.setRectFromLoc(location min, location max)
```

### rect.moveRectToLoc

```wurst
public function rect.moveRectToLoc(location newCenterLoc)
```

### rect.enumDestructablesInRect

```wurst
public function rect.enumDestructablesInRect(boolexpr filter, code actionFunc)
```

### rect.enumItemsInRect

```wurst
public function rect.enumItemsInRect(boolexpr filter, code actionFunc)
```

### rect.addWeatherEffect

```wurst
public function rect.addWeatherEffect(integer effectID) returns weathereffect
```

### rect.setDoodadAnimationRect

```wurst
public function rect.setDoodadAnimationRect(integer doodadID, string animName, boolean animRandom)
```
