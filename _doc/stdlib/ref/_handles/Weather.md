---
title: Weather
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Weather.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Weather.wurst)**

**Re-exports:** `WeatherEffects`

## Functions

### addWeather

```wurst
public function addWeather(rect where, int effectID) returns weathereffect
```

For some strange reason, weathereffect-variables always contain 'null' value and return '0' from GetHandleId function but they can still be used and compared.

## Extension Functions

### weathereffect.enable

```wurst
public function weathereffect.enable()
```

### weathereffect.disable

```wurst
public function weathereffect.disable()
```

### weathereffect.remove

```wurst
public function weathereffect.remove()
```
