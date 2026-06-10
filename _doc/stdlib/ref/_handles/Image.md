---
title: Image
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Image.wurst'
generated: true
---

ImageLayer influences the order in which the images are drawn above one another:
L1 ("Selection") is drawn above all other ImageLayers.
L2 ("Indicator") is drawn above ImageLayer 4, but below 1 and 3.
L3 ("Occlusion Mask") is drawn above ImageLayer 4 and 2 and below ImageLayer 1.
L4 ("Ubersplat") is drawn below every other layer. Images of this layer are additionally affected by time of day and the fog of war (only for tinting).
Multiple images with the same layer are drawn in their order of creation - first image below all others, last image above all others.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Image.wurst)**

**Re-exports:** `Colors`

## Enums

### ImageLayer

```wurst
public enum ImageLayer
```

**Values:** `L1`, `L3`, `L2`, `L4`

## Functions

### createImage

```wurst
public function createImage(string path, vec2 pos, real sizeX, real sizeY) returns image
```

Create an image at the target location, the Image has to be a blp, with transparent borders

### createImage

```wurst
public function createImage(string path, vec2 pos, real sizeX, real sizeY, ImageLayer layer) returns image
```

Create an image at the target location, the Image has to be a blp, with transparent borders.
The layer specifies which image overlaps another: Level 1 is always on the top, and level 4 always in the background. Use the enums "ImageLayer.LX"

## Extension Functions

### image.show

```wurst
public function image.show()
```

Shows the image

### image.hide

```wurst
public function image.hide()
```

Hides the image

### image.showForPlayer

```wurst
public function image.showForPlayer(player p)
```

Shows the image for a specific player

### image.hideForPlayer

```wurst
public function image.hideForPlayer(player p)
```

Hides the image for a specific player

### image.setPos

```wurst
public function image.setPos(vec2 pos)
```

Set the image 2D position

### image.setPos

```wurst
public function image.setPos(vec3 pos)
```

Set the image 3D position

### image.setHeight

```wurst
public function image.setHeight(real z)
```

Set the image height

### image.wrap

```wurst
public function image.wrap()
```

Wrap the image on the terrain

### image.setColor

```wurst
public function image.setColor(colorA col)
```

Set the image color by using the colorA tuple

### image.setColor

```wurst
public function image.setColor(color col)
```

Set the image color by using the color tuple

### image.setLevel

```wurst
public function image.setLevel(ImageLayer layer)
```

Set the image layer (use the constants)

### image.remove

```wurst
public function image.remove()
```

Destroy the image

### image.setImageRender

```wurst
public function image.setImageRender(boolean flag)
```

### image.setImageAboveWater

```wurst
public function image.setImageAboveWater(boolean flag, boolean useWaterAlpha)
```
