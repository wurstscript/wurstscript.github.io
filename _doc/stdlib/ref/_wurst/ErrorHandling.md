---
title: ErrorHandling
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/ErrorHandling.wurst'
generated: true
curated: /stdlib/errorhandling
---

error handing function.
This function is used by libraries and for internal Wurst errors like
accessing a null-pointer. Overwrite this function to customize error handling.

Outputs an error message and terminates the current thread.
There is a compiler flag to augment the error messages with stack traces.
Error messages can also be disabled.

Errors are only displayed once every MUTE_ERROR_DURATION seconds.
To achieve this, the hash of the string is saved in a hashtable together with a timestamp.

You can also use try() from package Execute to handle an error happening in a callback.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/ErrorHandling.wurst)**

> 📖 Read the **[detailed guide](/stdlib/errorhandling)** for hand-written examples and background.

**Re-exports:** `Printing`, `Real`, `Integer`, `String`, `MagicFunctions`

## Functions

### error

```wurst
public function error(string msg)
```

> 🔧 **Configurable.** Override it in your map's config package.
