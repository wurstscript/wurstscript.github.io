---
title: Preloader
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Preloader.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Preloader.wurst)**

## Functions

### preloadAbility

```wurst
public function preloadAbility(vararg int abilIds) returns boolean
```

Preloads the given abilitytype

### preloadUnit

```wurst
public function preloadUnit(vararg int unitIds) returns boolean
```

Preloads the given unittype

### finishPreload

```wurst
public function finishPreload()
```

If autoFinish is false you need to call this function manually

## Constants

### autoFinish

```wurst
constant autoFinish = true
```

> 🔧 **Configurable.** Override it in your map's config package.

Whether to finish preloading automatically
