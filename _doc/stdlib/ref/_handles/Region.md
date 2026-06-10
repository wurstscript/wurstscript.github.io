---
title: Region
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Region.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Region.wurst)**

## Extension Functions

### vec2.isInRegion

```wurst
public function vec2.isInRegion(region whichRegion) returns boolean
```

### unit.isInRegion

```wurst
public function unit.isInRegion(region whichRegion) returns boolean
```

### region.addRect

```wurst
public function region.addRect(rect rct)
```

### region.clearRect

```wurst
public function region.clearRect(rect rct)
```

### region.addCell

```wurst
public function region.addCell(vec2 point)
```

### region.clearCell

```wurst
public function region.clearCell(vec2 point)
```

### region.destr

```wurst
public function region.destr()
```

### region.regionAddCellAtLoc

```wurst
public function region.regionAddCellAtLoc(location whichLocation)
```

### region.regionClearCellAtLoc

```wurst
public function region.regionClearCellAtLoc(location whichLocation)
```

### region.isLocationInRegion

```wurst
public function region.isLocationInRegion(location whichLocation) returns boolean
```
