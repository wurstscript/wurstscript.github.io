---
title: The wurst.build file
sections:
- Welcome
- File Structure
- Dependencies
---

## Welcome

This tutorial documents the usage of the wurst setup tool in combination with the wurst.build file to create versionable map and project configuration.

## File Structure

The `wurst.build` file is a yaml file that must reside at the root of your project. The `wurst` folder therefore should be right next to it.
This file controls your project's dependencies and how the map is configured upon a build task.
All values in this file are optional. Incomplete or invalid config will be completed by using the map's existing configuration and default values.
The following is a complete wurst.build file with all fields containing the default values. If you are not changing this default values, you can omit the fields.

```yml
projectName: Escape Builder Reloaded
dependencies:
- https://github.com/wurstscript/wurstStdlib2
- https://github.com/frotty/frentity
buildMapData:
  name: JustAnotherWurstMap # Name shown ingame, may be colored
  fileName: MyWurstMap # Name of the map file
  author: SomeWurstUser # Name of the author
  scenarioData:
    description: WurstScript powered! # The map's description
    suggestedPlayers: DefaultSuggestedPlayers # Hint text displayed in lobby
    loadingScreen:
      model: Generic.mdx
      title: DefaultTitle
      subTitle: DefaultSubtitle
      text: DefaultText
  optionsFlags:
    hideMinimapPreview: false
	forcesFixed: false
    maskedAreasPartiallyVisible: false
    showWavesOnCliffShores: false
    showWavesOnRollingShores: false
    useItemClassificationSystem: false
  players:
  - id: 0
    name: DefaultPlayer
    race: HUMAN
    controller: USER
    fixedStartLoc: false
  forces:
  - name: DefaultForce
    playerIds:
    - 0
    flags:
      allied: true
      alliedVictory: true
      sharedVision: true
      sharedControl: false
      sharedControlAdvanced: false
```

## Dependencies

The setup does no version locking for now, but this is planned for a future version. Transitive dependencies will not be resolved.

A dependency is a simple url to a public git repo, which can be pulled by the setup.
Projects created by the setup include the standard library dependency by default: `https://github.com/wurstscript/wurstStdlib2`.

To add a dependency, add an entry with a valid git https url. Then update your project via the setup UI or CLI `grill -projectDir ~./Documents/MyProject/ update`.

