---
title: AttachmentPoints
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/assets/AttachmentPoints.wurst'
generated: true
toc: sections
---

Class that contains every known attachmentpoint in game

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/assets/AttachmentPoints.wurst)**

## Classes

### AttachmentPoints

```wurst
public class AttachmentPoints
```

**Members:**

- <a id="attachmentpoints-overhead"></a> `static constant overhead = "overhead"`
  The attachmentpoint 'overhead' floats over the unit's head, but doesn't sway with it
- <a id="attachmentpoints-head"></a> `static constant head = "head"`
  The attachmentpoint 'head' sways with the unit's animation
- <a id="attachmentpoints-chest"></a> `static constant chest = "chest"`
- <a id="attachmentpoints-origin"></a> `static constant origin = "origin"`
  The attachmentpoint 'origin' is usally fitted at the base of the unit's feet
- <a id="attachmentpoints-hand"></a> `static constant hand = "hand"`
- <a id="attachmentpoints-foot"></a> `static constant foot = "foot"`
- <a id="attachmentpoints-weapon"></a> `static constant weapon = "weapon"`
  The attachmentpoint 'weapon' is for heroes only
- <a id="attachmentpoints-sprite"></a> `static constant sprite = "sprite"`
- <a id="attachmentpoints-medium"></a> `static constant medium = "medium"`
  The attachmentpoint 'medium' is for buildings only
- <a id="attachmentpoints-large"></a> `static constant large = "large"`
  The attachmentpoint 'large' is for buildings only

### AttachmentPointModifiers

```wurst
public class AttachmentPointModifiers
```

Class that contains every known attachmentpointmodifier in game

**Members:**

- <a id="attachmentpointmodifiers-left"></a> `static constant left = "left"`
- <a id="attachmentpointmodifiers-right"></a> `static constant right = "right"`
- <a id="attachmentpointmodifiers-mount"></a> `static constant mount = "mount"`
  The attachmentpointmodifier 'mount' is for mounted units only
- <a id="attachmentpointmodifiers-rear"></a> `static constant rear = "rear"`
  The attachmentpointmodifier 'rear' is for quadrupeds only
- <a id="attachmentpointmodifiers-first"></a> `static constant first = "first"`
  The attachmentpointmodifier 'first' is for buildings only
- <a id="attachmentpointmodifiers-second"></a> `static constant second = "second"`
  The attachmentpointmodifier 'second' is for buildings only
- <a id="attachmentpointmodifiers-third"></a> `static constant third = "third"`
  The attachmentpointmodifier 'third' is for buildings only
- <a id="attachmentpointmodifiers-fourth"></a> `static constant fourth = "fourth"`
  The attachmentpointmodifier 'fourth' is for buildings only
- <a id="attachmentpointmodifiers-fifth"></a> `static constant fifth = "fifth"`
  The attachmentpointmodifier 'fifth' is for buildings only
- <a id="attachmentpointmodifiers-sixth"></a> `static constant sixth = "sixth"`
  The attachmentpointmodifier 'sixth' is for buildings only
- <a id="attachmentpointmodifiers-rallypoint"></a> `static constant rallypoint = "rallypoint"`
  The attachmentpointmodifier 'rallypoint' is for buildings only

### SpecialAttachmentPoints

```wurst
public class SpecialAttachmentPoints
```

Class that contains every known special attachmentpoint in game

**Members:**

- <a id="specialattachmentpoints-rightHand"></a> `static constant rightHand = "hand right"`
- <a id="specialattachmentpoints-leftHand"></a> `static constant leftHand = "hand left"`
- <a id="specialattachmentpoints-rightFoot"></a> `static constant rightFoot = "foot right"`
- <a id="specialattachmentpoints-leftFoot"></a> `static constant leftFoot = "foot left"`
- <a id="specialattachmentpoints-frontRightFoot"></a> `static constant frontRightFoot = "foot right front"`
  The attachmentpoint 'frontRightFoot' is for animals only
- <a id="specialattachmentpoints-frontLeftFoot"></a> `static constant frontLeftFoot = "foot left front"`
  The attachmentpoint 'frontLeftFoot' is for animals only
- <a id="specialattachmentpoints-backRightFoot"></a> `static constant backRightFoot = "foot right back"`
  The attachmentpoint 'backRightFoot' is for animals only
- <a id="specialattachmentpoints-backLeftFoot"></a> `static constant backLeftFoot = "foot left back"`
  The attachmentpoint 'backLeftFoot' is for animals only
- <a id="specialattachmentpoints-firstSprite"></a> `static constant firstSprite = "first sprite"`
  The attachmentpoint 'firstSprite' is for buildings only
- <a id="specialattachmentpoints-secondSprite"></a> `static constant secondSprite = "second sprite"`
  The attachmentpoint 'secondSprite' is for buildings only
- <a id="specialattachmentpoints-thirdSprite"></a> `static constant thirdSprite = "third sprite"`
  The attachmentpoint 'thirdSprite' is for buildings only
- <a id="specialattachmentpoints-fourthSprite"></a> `static constant fourthSprite = "fourth sprite"`
  The attachmentpoint 'fourthSprite' is for buildings only
- <a id="specialattachmentpoints-fifthSprite"></a> `static constant fifthSprite = "fifth sprite"`
  The attachmentpoint 'fifthSprite' is for buildings only
- <a id="specialattachmentpoints-sixthSprite"></a> `static constant sixthSprite = "sixth sprite"`
  The attachmentpoint 'sixthSprite' is for buildings only
- <a id="specialattachmentpoints-rallypointSprite"></a> `static constant rallypointSprite = "rallypoint sprite"`
  The attachmentpoint 'rallypointSprite' is for buildings only
- <a id="specialattachmentpoints-firstMedium"></a> `static constant firstMedium = "first medium"`
  The attachmentpoint 'firstMedium' is for buildings only
- <a id="specialattachmentpoints-secondMedium"></a> `static constant secondMedium = "second medium"`
  The attachmentpoint 'secondMedium' is for buildings only
- <a id="specialattachmentpoints-thirdMedium"></a> `static constant thirdMedium = "third medium"`
  The attachmentpoint 'thirdMedium' is for buildings only
- <a id="specialattachmentpoints-fourthMedium"></a> `static constant fourthMedium = "fourth medium"`
  The attachmentpoint 'fourthMedium' is for buildings only
- <a id="specialattachmentpoints-fifthMedium"></a> `static constant fifthMedium = "fifth medium"`
  The attachmentpoint 'fifthMedium' is for buildings only
- <a id="specialattachmentpoints-sixthMedium"></a> `static constant sixthMedium = "sixth medium"`
  The attachmentpoint 'sixthMedium' is for buildings only
- <a id="specialattachmentpoints-rallypointMedium"></a> `static constant rallypointMedium = "rallypoint medium"`
  The attachmentpoint 'rallypointMedium' is for buildings only
- <a id="specialattachmentpoints-firstLarge"></a> `static constant firstLarge = "first large"`
  The attachmentpoint 'firstLarge' is for buildings only
- <a id="specialattachmentpoints-secondLarge"></a> `static constant secondLarge = "second large"`
  The attachmentpoint 'secondLarge' is for buildings only
- <a id="specialattachmentpoints-thirdLarge"></a> `static constant thirdLarge = "third large"`
  The attachmentpoint 'thirdLarge' is for buildings only
- <a id="specialattachmentpoints-fourthLarge"></a> `static constant fourthLarge = "fourth large"`
  The attachmentpoint 'fourthLarge' is for buildings only
- <a id="specialattachmentpoints-fifthLarge"></a> `static constant fifthLarge = "fifth large"`
  The attachmentpoint 'fifthLarge' is for buildings only
- <a id="specialattachmentpoints-sixthLarge"></a> `static constant sixthLarge = "sixth large"`
  The attachmentpoint 'sixthLarge' is for buildings only
- <a id="specialattachmentpoints-rallypointLarge"></a> `static constant rallypointLarge = "rallypoint large"`
  The attachmentpoint 'rallypointLarge' is for buildings only
