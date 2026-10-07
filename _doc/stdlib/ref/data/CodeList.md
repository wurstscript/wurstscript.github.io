---
title: CodeList
layout: stdlibref
category: data
categoryLabel: Data Structures
tags:
  - data
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/CodeList.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/data/CodeList.wurst)**

## Classes

### CodeList

```wurst
public class CodeList
```

**Members:**

- `construct()`
- `add(code c)`
  Adds code to the end of the list.
- `run()`
  Runs every code value of the list, in the order added, in the current thread. It must not wait.
