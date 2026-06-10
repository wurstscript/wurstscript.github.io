---
title: Cinematic
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Cinematic.wurst'
generated: true
---

Create a cinematic by composing cinematic sequences:

let cine = new Cinematic(
asList(
    Cinematic.fadeOutSeq(0.5.seconds()),
    Cinematic.snapCameraPosSeq(ZERO2),
    Cinematic.fadeInSeq(1..seconds()),
    () -> begin
        print("Cinematic!")
        return 5..seconds()
    end,
    Cinematic.fadeOutSeq(0.5.seconds())
),
// This final cinematic seq is always run, even if cinematic is skipped. Use this for cleanup.
() -> begin
    FogEnable(true)
    SelectUnit(u, true)
    reurn 0..seconds()
end,
)

A cinematic can be skipped, which signals the controller to halt processing sequences and play the closing sequence.
cine.skip_()

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Cinematic.wurst)**

## Classes

### Cinematic

```wurst
public class Cinematic
```

## Interfaces

### CineSeq

```wurst
public interface CineSeq
```

A cinematic sequence. Cinematic has built-in cinematic sequences:

- Cinematic.fadeOutSeq(duration)
- Cinematic.fadeInSeq(duration)
- Cinematic.applyCameraSetupSeq(camerasetup)
- Cinematic.snapCameraPosSeq(vec2)
- Cinematic.doNothingSeq()
