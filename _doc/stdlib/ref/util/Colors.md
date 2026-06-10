---
title: Colors
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Colors.wurst'
generated: true
---

Mixes two colors, s would be a number 0<=s<=1 that determines
the weight given to color c2.

	c1.mix(c2,0)   = c1
c1.mix(c2,1)   = c2
	c1.mix(c2,0.5) = Mixing the colors c1 and c2 in equal proportions.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/Colors.wurst)**

## Tuples

### color

```wurst
public tuple color(int red, int green, int blue)
```

Tuple for your RGB color needs. 0 = black, 255 = full color

### colorA

```wurst
public tuple colorA(int red, int green, int blue, int alpha)
```

Tuple for your RGBA color needs. 0 = black/transparent, 255 = full color/opaque

### colorHSV

```wurst
public tuple colorHSV(real h, real s, real v)
```

Tuple for your HSV(Hue Saturation Value) color needs. All values 0-1

## Functions

### fromHexString

```wurst
public function fromHexString(string number) returns colorA
```

Get a colorA tuple from a hexstring

### makeColor

```wurst
public function makeColor(int colo) returns colorA
```

### toHex

```wurst
public function toHex(int number) returns string
```

Converts and int to a hexnumber

### toDec

```wurst
public function toDec(string twochar) returns int
```

Converts a twochar string to an int

### toPlayerFromColorName

```wurst
public function toPlayerFromColorName(string colorName) returns player
```

Returns the player that corresponds to described color. Returns null if a
	bad string is provided. See PLAYER_COLOR_NAMES for options. Returns players
	based on starting color, not current color (does not respect SetPlayerColor)

## Extension Functions

### player.getNameColored

```wurst
public function player.getNameColored(boolean removeHash) returns string
```

### player.getNameColored

```wurst
public function player.getNameColored() returns string
```

### playercolor.getName

```wurst
public function playercolor.getName() returns string
```

Returns the name of the player color

### playercolor.toColor

```wurst
public function playercolor.toColor() returns color
```

Returns the color associated with the playercolor

### color.withAlpha

```wurst
public function color.withAlpha(int a) returns colorA
```

Add an alpha value to a simple color tuple

### colorA.withoutAlpha

```wurst
public function colorA.withoutAlpha() returns color
```

### color.toHSV

```wurst
public function color.toHSV() returns colorHSV
```

Returns the HSV equivalent

### colorHSV.toRGB

```wurst
public function colorHSV.toRGB() returns color
```

Returns the RGB equivalent

### color.normalize

```wurst
public function color.normalize() returns color
```

### color.lerp

```wurst
public function color.lerp(color target, real smoothness) returns color
```

### colorA.mix

```wurst
public function colorA.mix(colorA c2, real s) returns colorA
```

### unit.setVertexColor

```wurst
public function unit.setVertexColor(colorA col)
```

Set a units color to the tuplevalues with alpha

### unit.setVertexColor

```wurst
public function unit.setVertexColor(color col)
```

Set a units color to the tuplevalues without alpha

### colorA.toColorString

```wurst
public function colorA.toColorString() returns string
```

Returns a string that is in the wc3 hexcolor format (|caarrggbb)

### color.toColorString

```wurst
public function color.toColorString() returns string
```

Returns a string that is in the wc3 hexcolor format (|crrggbb)

### color.toString

```wurst
public function color.toString() returns string
```

Returns the tuple in string format color(r,g,b)

### colorA.toString

```wurst
public function colorA.toString() returns string
```

Returns the tuple in string format colorA(r,g,b,a)

### colorHSV.toString

```wurst
public function colorHSV.toString() returns string
```

Returns the tuple in string format colorHSV(h,s,v)

### color.getName

```wurst
public function color.getName() returns string
```

Gets the name of the color. Only works on player colors. See PLAYER_COLORS.

### string.toColor

```wurst
public function string.toColor() returns color
```

Returns the color that the string describes. Only works on player colors.

### string.toPlayerColor

```wurst
public function string.toPlayerColor() returns playercolor
```

Returns the player color that the string describes. Only works on player colors.

### string.color

```wurst
public function string.color(string which) returns string
```

### string.color

```wurst
public function string.color(color which) returns string
```

### string.color

```wurst
public function string.color(colorA which) returns string
```

## Constants

### hexs

```wurst
public constant hexs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
```

Hexadecimal numbers

### COLOR_WHITE

```wurst
public constant COLOR_WHITE = colorA(255,255,255,255)
```

### COLOR_BLACK

```wurst
public constant COLOR_BLACK = colorA(0,0,0,0)
```

### COLOR_GOLD

```wurst
public constant COLOR_GOLD = colorA(255, 204, 0, 255)
```

### COLOR_WHITE_STR

```wurst
public constant COLOR_WHITE_STR = COLOR_WHITE.toColorString()
```

### COLOR_BLACK_STR

```wurst
public constant COLOR_BLACK_STR = COLOR_BLACK.toColorString()
```

### COLOR_GOLD_STR

```wurst
public constant COLOR_GOLD_STR = COLOR_GOLD.toColorString()
```

### DEFAULT_COLOR_NAME

```wurst
public constant DEFAULT_COLOR_NAME = "black"
```

### MAX_PLAYER_COLORS

```wurst
public constant MAX_PLAYER_COLORS = 23
```

### PLAYER_COLORS

```wurst
public constant PLAYER_COLORS = [
```

Player color array. Access through playercolor.toColor()

### PLAYER_COLOR_NAMES

```wurst
public constant PLAYER_COLOR_NAMES = [
```

Player color names array. Access through playercolor.getName()
