---
title: SoundUtils
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/SoundUtils.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/SoundUtils.wurst)**

**Re-exports:** `Sounds`

## Classes

### SoundInstance

```wurst
public class SoundInstance
```

### SoundDefinition

```wurst
public class SoundDefinition
```

**Members:**

- `construct(string file)`
- `construct(string file, boolean looping)`
- `construct(string file, boolean looping, boolean is3D)`
- `construct(SoundDefinition cloneFrom)`
- `play() returns SoundInstance`
  Plays this sound for all Players with a default duration.
  		Use this if you don't care when the SoundHandle gets recycled.
- `play(int duration) returns SoundInstance`
  Plays this sound for all Players with the given duration.
  		The duration should be close to the length of the soundfile.
  		Use this to recycle soundhandles immeditely when they finish,
  		allowing for rapid succession of sounds.
- `play(int duration, int volume) returns SoundInstance`
- `playForPlayer(player p) returns SoundInstance`
  Plays this sound for the given Player with a default duration.
  		See play() for more info
- `playForPlayer(player p, int duration) returns SoundInstance`
  Plays this sound for the given Player with the given duration.
  		See play() for more info
- `playOnPoint(vec3 target) returns SoundInstance`
- `playOnPoint(vec3 target, int duration) returns SoundInstance`

### DynamicSound

```wurst
public class DynamicSound
```

**Members:**

- `construct(SoundDefinition soundHandle)`
- `setTargetPitch(real pitch)`
- `play()`
- `setAbsolutePitch(real pitch)`
- `override function onTimedLoop()`

## Constants

### DEFAULT_SOUND_STOPS_ON_LEAVE_RANGE

```wurst
constant DEFAULT_SOUND_STOPS_ON_LEAVE_RANGE = true
```

> 🔧 **Configurable.** Override it in your map's config package.

### DEFAULT_SOUND_FADE_IN_RATE

```wurst
constant DEFAULT_SOUND_FADE_IN_RATE = 10
```

> 🔧 **Configurable.** Override it in your map's config package.

### DEFAULT_SOUND_FADE_OUT_RATE

```wurst
constant DEFAULT_SOUND_FADE_OUT_RATE = 10
```

> 🔧 **Configurable.** Override it in your map's config package.

### DEFAULT_SOUND_EAX_SETTINGS

```wurst
constant DEFAULT_SOUND_EAX_SETTINGS = "CombatSoundsEAX"
```

> 🔧 **Configurable.** Override it in your map's config package.

### DEFAULT_SOUND_VOLUME

```wurst
constant DEFAULT_SOUND_VOLUME = 127
```

> 🔧 **Configurable.** Override it in your map's config package.

### DEFAULT_SOUND_PITCH

```wurst
constant DEFAULT_SOUND_PITCH = 1.
```

> 🔧 **Configurable.** Override it in your map's config package.

### DEFAULT_SOUND_DURATION

```wurst
constant DEFAULT_SOUND_DURATION = 10000
```

> 🔧 **Configurable.** Override it in your map's config package.

### SOUND_CHANNEL

```wurst
constant SOUND_CHANNEL = 5
```

> 🔧 **Configurable.** Override it in your map's config package.

### SOUND_MIN_DIST

```wurst
constant SOUND_MIN_DIST = 600.
```

> 🔧 **Configurable.** Override it in your map's config package.

### SOUND_MAX_DIST

```wurst
constant SOUND_MAX_DIST = 8000.
```

> 🔧 **Configurable.** Override it in your map's config package.

### SOUND_DIST_CUT

```wurst
constant SOUND_DIST_CUT = 1500.
```

> 🔧 **Configurable.** Override it in your map's config package.
