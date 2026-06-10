---
title: Board
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Board.wurst'
generated: true
---

This Board library allows you to create a simple multi board with dynamic cell values.
 1. Create a board
     `let board = new Board("myBoard", 0.02)`

 2. Define columns. The second parameter is width relative to board width.
     `board.columns(asList(new BoardColumn("Player", 0.7), new BoardColumn(COLOR_GOLD.toColorString() + "Kills", 0.3)))`

 3. Add rows and cells
     `let killcount = dynamicCell<int>(0, i -> i.toString())
      board.addRow()
     ..addCell("My Name")
     ..addDynamic(killcount)`

 4. Show board
     `board.show()`

 5. Update dynamic value
     `killcount.updateValue(killcount.value + 1)`

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Board.wurst)**

## Classes

### DynamicCellValue

```wurst
public abstract class DynamicCellValue<T>
```

### BoardColumn

```wurst
public class BoardColumn
```

### BoardCell

```wurst
public class BoardCell
```

### BoardRow

```wurst
public class BoardRow
```

### Board

```wurst
public class Board
```

## Functions

### dynamicCellIcon

```wurst
public function dynamicCellIcon<T>(string icon, DynamicCellValue<T> observer) returns DynamicCellValue<T>
```

### dynamicCell

```wurst
public function dynamicCell<T>(T defaultValue, DynamicCellValue<T> observer) returns DynamicCellValue<T>
```
