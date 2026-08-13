---
title: GameTimer
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/GameTimer.wurst'
generated: true
toc: sections
---

Seconds elapsed since map start.

Caveat for @Test code: the compiletime interpreter backs this with the
wall clock, so it returns a unix epoch timestamp (~1.7e9). At that
magnitude a 32 bit real only resolves ~128 second steps, so instants built
from smaller offsets are indistinguishable from instantNow() there. Build
instants explicitly, e.g. instant(10.), when unit testing package Time.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/GameTimer.wurst)**

## Functions

### getElapsedGameTime

```wurst
public function getElapsedGameTime() returns real
```
