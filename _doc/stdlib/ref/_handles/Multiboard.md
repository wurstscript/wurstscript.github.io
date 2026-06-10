---
title: Multiboard
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Multiboard.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Multiboard.wurst)**

## Extension Functions

### multiboard.destr

```wurst
public function multiboard.destr()
```

### multiboard.isDisplayed

```wurst
public function multiboard.isDisplayed() returns boolean
```

### multiboard.isMinimized

```wurst
public function multiboard.isMinimized() returns boolean
```

### multiboard.isMaximized

```wurst
public function multiboard.isMaximized() returns boolean
```

### multiboard.clear

```wurst
public function multiboard.clear()
```

### multiboard.display

```wurst
public function multiboard.display(boolean show)
```

### multiboard.display

```wurst
public function multiboard.display(player p, boolean show)
```

### multiboard.show

```wurst
public function multiboard.show()
```

### multiboard.show

```wurst
public function multiboard.show(player p)
```

### multiboard.hide

```wurst
public function multiboard.hide()
```

### multiboard.hide

```wurst
public function multiboard.hide(player p)
```

### multiboard.getColumnCount

```wurst
public function multiboard.getColumnCount() returns int
```

### multiboard.getItem

```wurst
public function multiboard.getItem(int row, int column) returns multiboarditem
```

### multiboard.getRowCount

```wurst
public function multiboard.getRowCount() returns int
```

### multiboard.getTitleText

```wurst
public function multiboard.getTitleText() returns string
```

### multiboard.minimize

```wurst
public function multiboard.minimize()
```

### multiboard.minimize

```wurst
public function multiboard.minimize(player p)
```

### multiboard.maximize

```wurst
public function multiboard.maximize()
```

### multiboard.maximize

```wurst
public function multiboard.maximize(player p)
```

### multiboard.setColumnCount

```wurst
public function multiboard.setColumnCount(int count)
```

### multiboard.setRowCount

```wurst
public function multiboard.setRowCount(int count)
```

### multiboard.setItemsIcon

```wurst
public function multiboard.setItemsIcon(string path)
```

### multiboard.setItemsStyle

```wurst
public function multiboard.setItemsStyle(boolean showValues, boolean showIcons)
```

### multiboard.setItemsValue

```wurst
public function multiboard.setItemsValue(string value)
```

### multiboard.setItemsValueColor

```wurst
public function multiboard.setItemsValueColor(int r,int g, int b, int a)
```

### multiboard.setItemsWidth

```wurst
public function multiboard.setItemsWidth(real width)
```

### multiboard.setTitle

```wurst
public function multiboard.setTitle(string label)
```

### multiboard.setTitleColor

```wurst
public function multiboard.setTitleColor(int r,int g, int b, int a)
```

### multiboard.setTitleColor

```wurst
public function multiboard.setTitleColor(colorA col)
```

### multiboard.setItemValue

```wurst
public function multiboard.setItemValue(int row, int column, string value)
```

### multiboard.setItemValue

```wurst
public function multiboard.setItemValue(int row, int column, int value)
```

### multiboard.setItemValue

```wurst
public function multiboard.setItemValue(int row, int column, real value)
```

### multiboard.setItemValue

```wurst
public function multiboard.setItemValue(int row, int column, bool value)
```

### multiboard.setItemValueColor

```wurst
public function multiboard.setItemValueColor(int row, int column, int r, int g, int b, int a)
```

### multiboard.setItemValueColor

```wurst
public function multiboard.setItemValueColor(int row, int column, colorA col)
```

### multiboard.setItemIcon

```wurst
public function multiboard.setItemIcon(int row, int column, string iconFileName)
```

### multiboard.setItemWidth

```wurst
public function multiboard.setItemWidth(int row, int column, real width)
```

### multiboard.setColumnWidth

```wurst
public function multiboard.setColumnWidth(int column, real width)
```

### multiboard.setRowWidth

```wurst
public function multiboard.setRowWidth(int row, real width)
```

### multiboarditem.release

```wurst
public function multiboarditem.release()
```

### multiboarditem.setIcon

```wurst
public function multiboarditem.setIcon(string iconFileName)
```

### multiboarditem.setStyle

```wurst
public function multiboarditem.setStyle(boolean showValue, boolean showIcon)
```

### multiboarditem.setValue

```wurst
public function multiboarditem.setValue(string value)
```

### multiboarditem.setValue

```wurst
public function multiboarditem.setValue(int value)
```

### multiboarditem.setValue

```wurst
public function multiboarditem.setValue(real value)
```

### multiboarditem.setValue

```wurst
public function multiboarditem.setValue(bool value)
```

### multiboarditem.setValueColor

```wurst
public function multiboarditem.setValueColor(int r, int g, int b, int a)
```

### multiboarditem.setValueColor

```wurst
public function multiboarditem.setValueColor(colorA col)
```

### multiboarditem.setWidth

```wurst
public function multiboarditem.setWidth(real width)
```
