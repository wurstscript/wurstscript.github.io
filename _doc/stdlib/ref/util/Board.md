---
title: Board
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Board.wurst'
generated: true
toc: sections
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

**Members:**

- `abstract function toString(T t) returns string`
  Returns a string representation of T
- `getString() returns string`
- `getIcon() returns string`
- `updateValue(T value)`
  Updates the cell's value
- `updateIcon(string icon)`
  Updates the cell's icon

### BoardColumn

```wurst
public class BoardColumn
```

**Members:**

- `construct(string title, string icon, real width)`
  Creates a board column with a title and width in range [0;1] percentage of board width
- `construct(string title, real width)`

### BoardCell

```wurst
public class BoardCell
```

**Members:**

- `construct(BoardRow parent, string content, int column)`
- `construct(BoardRow parent, string content, string icon, int column)`
- `setContent(string content)`
  Sets the text content of this cell
- `setIcon(string icon)`
  Sets the icon of this cell

### BoardRow

```wurst
public class BoardRow
```

**Members:**

- `construct(multiboard board, int rowIndex)`
- `addCell(string text)`
  Adds a cell to this column with a static text content
- `addCell(string text, string icon)`
  Adds a cell to this column with a static text and icon content
- `addDynamic<T>(DynamicCellValue<T> dynamicValue)`
  Adds a cell to this column with a dynamic text content.
         If the observable 'dynamicValue' is updated via 'updateValue',
         the cell's value will be updated as well.
- `invalidate()`
  Issues all cells to redraw their content

### Board

```wurst
public class Board
```

**Members:**

- `construct(string title, real width)`
  Create a board with a title and width.
         Width being in the range [0;1] percentage of screen space.
- `columns(LinkedList<BoardColumn> columns)`
  Initialize the boards columns
- `addRow() returns BoardRow`
  Add a new row to the board
- `show()`
  Show the board to players
- `removeRow(BoardRow row)`
  Remove a row from the board, e.g. when a player leaves
- `getBoard() returns multiboard`
  Unsafe access to the underlying multiboard

## Functions

### dynamicCellIcon

```wurst
public function dynamicCellIcon<T>(string icon, DynamicCellValue<T> observer) returns DynamicCellValue<T>
```

### dynamicCell

```wurst
public function dynamicCell<T>(T defaultValue, DynamicCellValue<T> observer) returns DynamicCellValue<T>
```
