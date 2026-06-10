---
title: HeroPreset
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/presets/HeroPreset.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/presets/HeroPreset.wurst)**

**Re-exports:** `UnitObjEditing`

## Classes

### HeroPreset

```wurst
public class HeroPreset extends HeroDefinition
```

**Members:**

- `construct(int newId, int origId, string name)`
- `buildHero()`
- `addProperName(string name)`
  Adds a proper Name to the Hero.
  		Remember to call .buildHero() after you finished your changes
- `buildProperNames()`
- `addHeroAbility(int id)`
- `buildHeroAbilities()`
- `addNormalAbility(int id)`
- `buildNormalAbilities()`
