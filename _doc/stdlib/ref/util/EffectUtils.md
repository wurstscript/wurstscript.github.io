---
title: EffectUtils
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/EffectUtils.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/EffectUtils.wurst)**

## Extension Functions

### effect.destrAfter

```wurst
public function effect.destrAfter(real time)
```

remove effect after "time" expires

### effect.destrHiddenAfter

```wurst
public function effect.destrHiddenAfter(real time)
```

After "time", move effect to invisible part of map before removing it (which plays death animation).
	Does not work on effects attached to units!

### effect.destrHidden

```wurst
public function effect.destrHidden()
```

Move effect to invisible part of map before removing it (which plays death animation).
	Does not work on effects attached to units!
