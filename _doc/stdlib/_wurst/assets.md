---
title: Assets
sections:
- Intro
- Object Editing
- At runtime
---

### Intro

One great thing about Warcraft III is that it comes with a plethora of models, textures, sounds and more which we can make use of in our maps.
Since we try to avoid using the World Editor though, it becomes cumbersome to keep track of all the paths and ids manually.
To alleviate this issue we introduced the Asset packages which expose all those internal values as simple wurst variables.

### Object Editing

When creating objects at compiletime you should always use an asset variable instead of the raw path or id, to prevent typos and other uneccessary mistakes.

```wurst
new UnitDefinition(MY_ID, UnitIds.footman)
..setIconGameInterface(Icons.bTNCentaur)
```

### At runtime

Also at runtime assets can be useful, e.g. for creating effects or playing sounds:

```wurst
flashEffect(Abilities.pileofGold, ZERO2)

new SoundDefinition(Sounds.zombieDeath1, false).play()
```
