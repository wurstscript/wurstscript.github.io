---
title: wurst.build file
excerpt: Introduction to wurst project and dependency management
date: 2021-12-06
icon:
  type: fa
  name: fa-map
color: purple
author: Frotty
layout: tutorialdoc
---


## File Structure

The `wurst.build` file is a yaml file that must reside in the root of your project. The `wurst` folder should be right next to it.
This file controls your project's dependencies and how the map is configured upon a build task.
Almost all values in this file are optional. Incomplete or invalid config will be completed by using the map's existing configuration and default values.
The schema is provided on project install for auto complete in vscode. You will also find a full example file below.

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
      model: MyModel.mdx # Use 'model' to specify a custom model as loading screen
      background: Generic # Use 'background' to use an existing loading screen
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

The project's dependencies are listed at the top of the `wurst.build` file and downloaded when the project is installed using `grill install`.
A dependency is a simple url to a public git repo, which can be pulled by the setup.
Projects created by the setup include the standard library dependency by default: `https://github.com/wurstscript/wurstStdlib2`.

To add a dependency run `grill install` with a valid, accesible git repo url, e.g. `grill install https://github.com/frotty/frentity`.
This will checkout the dependency locally and also add an entry to the `wurst.build` file.

The setup does no version locking for now, but this is planned for a future version. Transitive dependencies will not be resolved.
You can target specific branches using a suffix, e.g. `https://github.com/wurstscript/wurstStdlib2:pre1.29`.

## Build Map Data

Following the dependencies is the build map data, which offers most of the settings you would normally find in the `Scenario Settings` in the World Editor.
Such as the description, players, forces and the loading screen. The configuration will then be applied to the input map of any run or build task of the project.

