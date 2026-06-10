---
title: Camera
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Camera.wurst'
generated: true
---

Pans the camera to pos.x, pos.y and absolute height pos.z
	If pos.z > pos.getTerrainZ, the camera will not drop below
	the terrain on its path.

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Camera.wurst)**

**Re-exports:** `Vectors`

## Functions

### getCameraBoundMin

```wurst
public function getCameraBoundMin() returns vec2
```

### getCameraBoundMax

```wurst
public function getCameraBoundMax() returns vec2
```

### getCameraTargetPosition

```wurst
public function getCameraTargetPosition() returns vec2
```

### getCameraTargetPosition3

```wurst
public function getCameraTargetPosition3() returns vec3
```

### getCameraEyePosition

```wurst
public function getCameraEyePosition() returns vec2
```

### getCameraEyePosition3

```wurst
public function getCameraEyePosition3() returns vec3
```

### setCameraPosition

```wurst
public function setCameraPosition(vec2 pos)
```

### setCameraQuickPosition

```wurst
public function setCameraQuickPosition(vec2 pos)
```

### setCameraBounds

```wurst
public function setCameraBounds(vec2 bottomLeft, vec2 topRight, vec2 topLeft, vec2 bottomRight)
```

### panCameraTo

```wurst
public function panCameraTo(vec2 pos)
```

### panCameraToTimed

```wurst
public function panCameraToTimed(vec2 pos, real duration)
```

### panCameraTo

```wurst
public function panCameraTo(vec3 pos)
```

### panCameraToTimed

```wurst
public function panCameraToTimed(vec3 pos, real duration)
```

### setCameraRotateMode

```wurst
public function setCameraRotateMode(vec2 pos, angle toSweep, real duration)
```

### setCinematicCamera

```wurst
public function setCinematicCamera(string cameraModelFile)
```

Runs the camera through the cinematic camera
	specified in cameraModelFile. Existing cameras are available
	via Objects.cameraXXX paths"

## Extension Functions

### camerafield.set

```wurst
public function camerafield.set(real value, real duration)
```

### camerafield.adjust

```wurst
public function camerafield.adjust(real offset, real duration)
```

### camerafield.get

```wurst
public function camerafield.get() returns real
```

### camerafield.getFieldSwap

```wurst
public function camerafield.getFieldSwap(camerasetup whichSetup) returns real
```

### camerafield.setCameraField

```wurst
public function camerafield.setCameraField(player whichPlayer, real value, real duration)
```

### camerasetup.setField

```wurst
public function camerasetup.setField(camerafield whichField, real value, real duration)
```

### camerasetup.getField

```wurst
public function camerasetup.getField(camerafield whichField) returns real
```

### camerasetup.setDestPosition

```wurst
public function camerasetup.setDestPosition(vec2 pos, real duration)
```

### camerasetup.getDestPosition

```wurst
public function camerasetup.getDestPosition() returns vec2
```

### camerasetup.apply

```wurst
public function camerasetup.apply(boolean doPan, boolean panTimed)
```

### camerasetup.applyWithZ

```wurst
public function camerasetup.applyWithZ(real zDestOffset)
```

### camerasetup.applyForceDuration

```wurst
public function camerasetup.applyForceDuration(boolean doPan, real forceDuration)
```

### camerasetup.applyForceDurationWithZ

```wurst
public function camerasetup.applyForceDurationWithZ(real zDestOffset, real forceDuration)
```

### camerasetup.apply

```wurst
public function camerasetup.apply(boolean doPan, player whichPlayer, real duration)
```

### camerasetup.getFieldSwap

```wurst
public function camerasetup.getFieldSwap(camerafield whichField) returns real
```

### camerasetup.applyForceDurationSmooth

```wurst
public function camerasetup.applyForceDurationSmooth(boolean doPan, real forcedDuration, real easeInDuration, real easeOutDuration, real smoothFactor)
```

### player.cameraSetupApply

```wurst
public function player.cameraSetupApply(boolean doPan, camerasetup whichSetup, real duration)
```

### player.setCameraField

```wurst
public function player.setCameraField(camerafield whichField, real value, real duration)
```

### player.setCameraTargetControllerNoZ

```wurst
public function player.setCameraTargetControllerNoZ(unit whichUnit, vec2 offset, boolean inheritOrientation)
```

### player.setCameraPosition

```wurst
public function player.setCameraPosition(vec2 pos)
```

### player.panCameraTo

```wurst
public function player.panCameraTo(vec2 pos)
```

### player.panCameraTo

```wurst
public function player.panCameraTo(vec3 pos)
```

### player.panCameraToTimed

```wurst
public function player.panCameraToTimed(vec2 pos, real duration)
```

### player.panCameraToTimed

```wurst
public function player.panCameraToTimed(vec3 pos, real duration)
```

### player.smartCameraPan

```wurst
public function player.smartCameraPan(vec2 pos, real duration)
```

Pans the camera depending on how far pos is from the current
	camera target:
	- If the distance is larger than
	  bj_SMARTPAN_TRESHOLD_SNAP, the camera snaps instantenously
	- If the distance is larger than bj_SMARTPAN_TRESHOLD_PAN, the
	  camera pans over the specified duration
	- If the distance is smaller than bj_SMARTPAN_TRESHOLD_PAN, the
	  camera doesn't move at all.

### player.setCinematicCamera

```wurst
public function player.setCinematicCamera(string cameraModelFile)
```

Runs the camera for the player through the cinematic camera
	specified in  cameraModelFile. Existing cameras are available
	via Objects.cameraXXX paths"

### player.resetToGameCamera

```wurst
public function player.resetToGameCamera(real duration)
```

### player.cameraSetSourceNoise

```wurst
public function player.cameraSetSourceNoise(real magnitude, real velocity)
```

### player.cameraSetTargetNoise

```wurst
public function player.cameraSetTargetNoise(real magnitude, real velocity)
```

### player.cameraSetEQNoise

```wurst
public function player.cameraSetEQNoise(real magnitude)
```

### player.cameraClearNoise

```wurst
public function player.cameraClearNoise()
```

### player.setCameraBoundsToRect

```wurst
public function player.setCameraBoundsToRect(rect r)
```

### player.adjustCameraBounds

```wurst
public function player.adjustCameraBounds(integer adjustMethod, real dxWest, real dxEast, real dyNorth, real dySouth)
```

### player.setCameraQuickPosition

```wurst
public function player.setCameraQuickPosition(vec2 pos)
```

### player.stopCamera

```wurst
public function player.stopCamera()
```

### player.setCameraOrientController

```wurst
public function player.setCameraOrientController(unit whichUnit, vec2 offset)
```

### unit.setCameraTargetController

```wurst
public function unit.setCameraTargetController(vec2 offset, boolean inheritOrientation)
```

### unit.setCameraOrientController

```wurst
public function unit.setCameraOrientController(vec2 offset)
```

### unit.setCameraOrientControllerForPlayer

```wurst
public function unit.setCameraOrientControllerForPlayer(vec2 offset, player whichPlayer)
```
