---
title: Widget
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Widget.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Widget.wurst)**

**Re-exports:** `Vectors`

## Extension Functions

### widget.getLife

```wurst
public function widget.getLife() returns real
```

### widget.setLife

```wurst
public function widget.setLife(real newLife)
```

### widget.getPos

```wurst
public function widget.getPos() returns vec2
```

### widget.getX

```wurst
public function widget.getX() returns real
```

### widget.getY

```wurst
public function widget.getY() returns real
```

### widget.addEffect

```wurst
public function widget.addEffect(string modelName, string attachment) returns effect
```

### widget.isAliveTrick

```wurst
public function widget.isAliveTrick() returns bool
```

Checks if the widget is alive by testing current life > .405

### widget.addIndicator

```wurst
public function widget.addIndicator(integer red, integer green, integer blue, integer alpha)
```
