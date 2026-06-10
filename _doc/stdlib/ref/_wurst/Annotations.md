---
title: Annotations
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/Annotations.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/Annotations.wurst)**

## Functions

### annotation

```wurst
public function annotation()
```

This annotation allows this function to be used as an annotation.

### compiletime

```wurst
public function compiletime()
```

This annotation means that this function will be executed when the map is compiled.

### deprecated

```wurst
public function deprecated()
```

This annotation means that this function should no longer be used.

### deprecated

```wurst
public function deprecated(string _message)
```

This annotation means that this function should no longer be used.
   The corresponding message is a hint for which function to use instead.

### compiletimenative

```wurst
public function compiletimenative()
```

Functions annotated with @compiletimenative are natives that are only available at compiletime, but not ingame.

### configurable

```wurst
public function configurable()
```

Elements annotated with @configurable can be configured (i.e. replaced by a different implementation) in configuration packages.

### inline

```wurst
public function inline()
```

Functions annotated with @inline will have a higher priority of being inlined by the optimizer.

### noinline

```wurst
public function noinline()
```

Functions annotated with @inline will have a lower priority of being inlined by the optimizer.

### config

```wurst
public function config()
```

Elements annotated with @config configure an element in the correspoding package (i.e. replaced by a different implementation).

### extern

```wurst
public function extern()
```

Functions annotated with @extern are assumed to be defined in external sources and are thus not included in the compilation output.

### ifnotdefined

```wurst
public function ifnotdefined()
```

Functions annotated with @ifNotDefined are only output into the mapscript if they don't already exist.
