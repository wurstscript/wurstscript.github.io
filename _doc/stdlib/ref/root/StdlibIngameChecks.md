---
title: StdlibIngameChecks
layout: stdlibref
category: .
categoryLabel: Root
tags:
  - .
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/StdlibIngameChecks.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/StdlibIngameChecks.wurst)**

## Interfaces

### IngameChecks

```wurst
public interface IngameChecks
```

**Members:**

- `check(bool passed, string label)`
- `section(string label)`
- `note(string label)`
- `skipped(int checks, string why)`
  A section which does not run its `checks` checks in this run, and why. The totals of a run say how many
  		were skipped, so a rerun which runs fewer checks than the first can be told from one which lost some.
  		A reporter which does not count them still hears of a skip as a note, so one written before this existed
  		keeps compiling.
