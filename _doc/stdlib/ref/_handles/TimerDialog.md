---
title: TimerDialog
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/TimerDialog.wurst'
generated: true
---

Multiplies the  timer's tick rate and remaining time, so that the overall elapsed time stays the same.
For example, timer was started with initial time 60 seconds.
If speed is set to 2, then the time shown in dialog will be 120 seconds, but counting is two times faster.
If speed is set to 0.5, then the time shown in dialog will be 30 seconds, but counting is two times slower.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/TimerDialog.wurst)**

## Extension Functions

### timer.createTimerDialog

```wurst
public function timer.createTimerDialog() returns timerdialog
```

### timerdialog.destr

```wurst
public function timerdialog.destr()
```

### timerdialog.setTitle

```wurst
public function timerdialog.setTitle(string title)
```

### timerdialog.setTitleColor

```wurst
public function timerdialog.setTitleColor(int red, int green, int blue, int alpha)
```

### timerdialog.setTitleColor

```wurst
public function timerdialog.setTitleColor(colorA colorA)
```

### timerdialog.setTimeColor

```wurst
public function timerdialog.setTimeColor(int red, int green, int blue, int alpha)
```

### timerdialog.setTimeColor

```wurst
public function timerdialog.setTimeColor(colorA colorA)
```

### timerdialog.setSpeed

```wurst
public function timerdialog.setSpeed(real speedMultFactor)
```

### timerdialog.display

```wurst
public function timerdialog.display(boolean display)
```

### timerdialog.isDisplayed

```wurst
public function timerdialog.isDisplayed() returns boolean
```

### timerdialog.setRealTimeRemaining

```wurst
public function timerdialog.setRealTimeRemaining(real timeRemaining)
```
