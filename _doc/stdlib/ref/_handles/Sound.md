---
title: Sound
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Sound.wurst'
generated: true
---

Returns sound length in milliseconds.

	Beware that sound lengths of game assets may differ between different locales,
	and thus return a different duration.
	If you use a async duration in a synced manner, it will cause a desync.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Sound.wurst)**

## Extension Functions

### sound.setDuration

```wurst
public function sound.setDuration(int dur)
```

Sets the sound duration in milliseconds

### sound.play

```wurst
public function sound.play()
```

### sound.stop

```wurst
public function sound.stop(boolean killWhenDone, boolean fadeOut)
```

### sound.setChannel

```wurst
public function sound.setChannel(int channel)
```

### sound.setPitch

```wurst
public function sound.setPitch(real pitch)
```

### sound.setVolume

```wurst
public function sound.setVolume(int volume)
```

Sets the sound's volume [0-100]

### sound.setConeAngles

```wurst
public function sound.setConeAngles(real inside, real outside, int outsideVolume)
```

### sound.setCutoff

```wurst
public function sound.setCutoff(real cutoff)
```

### sound.playPosition

```wurst
public function sound.playPosition(int millisecs)
```

Plays the sound, starting at the given position

### sound.getDuration

```wurst
public function sound.getDuration() returns int
```

### sound.isPlaying

```wurst
public function sound.isPlaying() returns boolean
```

### sound.triggerWaitForSound

```wurst
public function sound.triggerWaitForSound(real offset)
```

### sound.setSoundParamsFromLabel

```wurst
public function sound.setSoundParamsFromLabel(string soundLabel)
```

### sound.setSoundDistances

```wurst
public function sound.setSoundDistances(real minDist, real maxDist)
```

### sound.setSoundConeOrientation

```wurst
public function sound.setSoundConeOrientation(real x, real y, real z)
```

### sound.setSoundPosition

```wurst
public function sound.setSoundPosition(real x, real y, real z)
```

### sound.setSoundVelocity

```wurst
public function sound.setSoundVelocity(real x, real y, real z)
```

### sound.attachSoundToUnit

```wurst
public function sound.attachSoundToUnit(unit whichUnit)
```

### sound.startSoundEx

```wurst
public function sound.startSoundEx(boolean fadeIn)
```

### sound.registerStackedSound

```wurst
public function sound.registerStackedSound(boolean byPosition, real rectwidth, real rectheight)
```

### sound.unregisterStackedSound

```wurst
public function sound.unregisterStackedSound(boolean byPosition, real rectwidth, real rectheight)
```

### sound.setSoundFacialAnimationLabel

```wurst
public function sound.setSoundFacialAnimationLabel(string animationLabel) returns boolean
```

### sound.setSoundFacialAnimationGroupLabel

```wurst
public function sound.setSoundFacialAnimationGroupLabel(string groupLabel) returns boolean
```

### sound.setSoundFacialAnimationSetFilepath

```wurst
public function sound.setSoundFacialAnimationSetFilepath(string animationSetFilepath) returns boolean
```

### sound.setDialogueSpeakerNameKey

```wurst
public function sound.setDialogueSpeakerNameKey(string speakerName) returns boolean
```

### sound.setDialogueTextKey

```wurst
public function sound.setDialogueTextKey(string dialogueText) returns boolean
```
