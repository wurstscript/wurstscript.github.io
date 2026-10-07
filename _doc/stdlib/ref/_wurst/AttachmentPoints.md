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

- <a id="AttachmentPoints-overhead"></a> `static constant overhead = "overhead"`
  The attachmentpoint 'overhead' floats over the unit's head, but doesn't sway with it
- <a id="AttachmentPoints-head"></a> `static constant head = "head"`
  The attachmentpoint 'head' sways with the unit's animation
- <a id="AttachmentPoints-chest"></a> `static constant chest = "chest"`
- <a id="AttachmentPoints-origin"></a> `static constant origin = "origin"`
  The attachmentpoint 'origin' is usally fitted at the base of the unit's feet
- <a id="AttachmentPoints-hand"></a> `static constant hand = "hand"`
- <a id="AttachmentPoints-foot"></a> `static constant foot = "foot"`
- <a id="AttachmentPoints-weapon"></a> `static constant weapon = "weapon"`
  The attachmentpoint 'weapon' is for heroes only
- <a id="AttachmentPoints-sprite"></a> `static constant sprite = "sprite"`
- <a id="AttachmentPoints-medium"></a> `static constant medium = "medium"`
  The attachmentpoint 'medium' is for buildings only
- <a id="AttachmentPoints-large"></a> `static constant large = "large"`
  The attachmentpoint 'large' is for buildings only

### AttachmentPointModifiers

```wurst
public class AttachmentPointModifiers
```

Class that contains every known attachmentpointmodifier in game

**Members:**

- <a id="AttachmentPointModifiers-left"></a> `static constant left = "left"`
- <a id="AttachmentPointModifiers-right"></a> `static constant right = "right"`
- <a id="AttachmentPointModifiers-mount"></a> `static constant mount = "mount"`
  The attachmentpointmodifier 'mount' is for mounted units only
- <a id="AttachmentPointModifiers-rear"></a> `static constant rear = "rear"`
  The attachmentpointmodifier 'rear' is for quadrupeds only
- <a id="AttachmentPointModifiers-first"></a> `static constant first = "first"`
  The attachmentpointmodifier 'first' is for buildings only
- <a id="AttachmentPointModifiers-second"></a> `static constant second = "second"`
  The attachmentpointmodifier 'second' is for buildings only
- <a id="AttachmentPointModifiers-third"></a> `static constant third = "third"`
  The attachmentpointmodifier 'third' is for buildings only
- <a id="AttachmentPointModifiers-fourth"></a> `static constant fourth = "fourth"`
  The attachmentpointmodifier 'fourth' is for buildings only
- <a id="AttachmentPointModifiers-fifth"></a> `static constant fifth = "fifth"`
  The attachmentpointmodifier 'fifth' is for buildings only
- <a id="AttachmentPointModifiers-sixth"></a> `static constant sixth = "sixth"`
  The attachmentpointmodifier 'sixth' is for buildings only
- <a id="AttachmentPointModifiers-rallypoint"></a> `static constant rallypoint = "rallypoint"`
  The attachmentpointmodifier 'rallypoint' is for buildings only

### SpecialAttachmentPoints

```wurst
public class SpecialAttachmentPoints
```

Class that contains every known special attachmentpoint in game

**Members:**

- <a id="SpecialAttachmentPoints-rightHand"></a> `static constant rightHand = "hand right"`
- <a id="SpecialAttachmentPoints-leftHand"></a> `static constant leftHand = "hand left"`
- <a id="SpecialAttachmentPoints-rightFoot"></a> `static constant rightFoot = "foot right"`
- <a id="SpecialAttachmentPoints-leftFoot"></a> `static constant leftFoot = "foot left"`
- <a id="SpecialAttachmentPoints-frontRightFoot"></a> `static constant frontRightFoot = "foot right front"`
  The attachmentpoint 'frontRightFoot' is for animals only
- <a id="SpecialAttachmentPoints-frontLeftFoot"></a> `static constant frontLeftFoot = "foot left front"`
  The attachmentpoint 'frontLeftFoot' is for animals only
- <a id="SpecialAttachmentPoints-backRightFoot"></a> `static constant backRightFoot = "foot right back"`
  The attachmentpoint 'backRightFoot' is for animals only
- <a id="SpecialAttachmentPoints-backLeftFoot"></a> `static constant backLeftFoot = "foot left back"`
  The attachmentpoint 'backLeftFoot' is for animals only
- <a id="SpecialAttachmentPoints-firstSprite"></a> `static constant firstSprite = "first sprite"`
  The attachmentpoint 'firstSprite' is for buildings only
- <a id="SpecialAttachmentPoints-secondSprite"></a> `static constant secondSprite = "second sprite"`
  The attachmentpoint 'secondSprite' is for buildings only
- <a id="SpecialAttachmentPoints-thirdSprite"></a> `static constant thirdSprite = "third sprite"`
  The attachmentpoint 'thirdSprite' is for buildings only
- <a id="SpecialAttachmentPoints-fourthSprite"></a> `static constant fourthSprite = "fourth sprite"`
  The attachmentpoint 'fourthSprite' is for buildings only
- <a id="SpecialAttachmentPoints-fifthSprite"></a> `static constant fifthSprite = "fifth sprite"`
  The attachmentpoint 'fifthSprite' is for buildings only
- <a id="SpecialAttachmentPoints-sixthSprite"></a> `static constant sixthSprite = "sixth sprite"`
  The attachmentpoint 'sixthSprite' is for buildings only
- <a id="SpecialAttachmentPoints-rallypointSprite"></a> `static constant rallypointSprite = "rallypoint sprite"`
  The attachmentpoint 'rallypointSprite' is for buildings only
- <a id="SpecialAttachmentPoints-firstMedium"></a> `static constant firstMedium = "first medium"`
  The attachmentpoint 'firstMedium' is for buildings only
- <a id="SpecialAttachmentPoints-secondMedium"></a> `static constant secondMedium = "second medium"`
  The attachmentpoint 'secondMedium' is for buildings only
- <a id="SpecialAttachmentPoints-thirdMedium"></a> `static constant thirdMedium = "third medium"`
  The attachmentpoint 'thirdMedium' is for buildings only
- <a id="SpecialAttachmentPoints-fourthMedium"></a> `static constant fourthMedium = "fourth medium"`
  The attachmentpoint 'fourthMedium' is for buildings only
- <a id="SpecialAttachmentPoints-fifthMedium"></a> `static constant fifthMedium = "fifth medium"`
  The attachmentpoint 'fifthMedium' is for buildings only
- <a id="SpecialAttachmentPoints-sixthMedium"></a> `static constant sixthMedium = "sixth medium"`
  The attachmentpoint 'sixthMedium' is for buildings only
- <a id="SpecialAttachmentPoints-rallypointMedium"></a> `static constant rallypointMedium = "rallypoint medium"`
  The attachmentpoint 'rallypointMedium' is for buildings only
- <a id="SpecialAttachmentPoints-firstLarge"></a> `static constant firstLarge = "first large"`
  The attachmentpoint 'firstLarge' is for buildings only
- <a id="SpecialAttachmentPoints-secondLarge"></a> `static constant secondLarge = "second large"`
  The attachmentpoint 'secondLarge' is for buildings only
- <a id="SpecialAttachmentPoints-thirdLarge"></a> `static constant thirdLarge = "third large"`
  The attachmentpoint 'thirdLarge' is for buildings only
- <a id="SpecialAttachmentPoints-fourthLarge"></a> `static constant fourthLarge = "fourth large"`
  The attachmentpoint 'fourthLarge' is for buildings only
- <a id="SpecialAttachmentPoints-fifthLarge"></a> `static constant fifthLarge = "fifth large"`
  The attachmentpoint 'fifthLarge' is for buildings only
- <a id="SpecialAttachmentPoints-sixthLarge"></a> `static constant sixthLarge = "sixth large"`
  The attachmentpoint 'sixthLarge' is for buildings only
- <a id="SpecialAttachmentPoints-rallypointLarge"></a> `static constant rallypointLarge = "rallypoint large"`
  The attachmentpoint 'rallypointLarge' is for buildings only
