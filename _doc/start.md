---
title: Installation
excerpt: Install WurstScript and setup your first project.
date: 2024-02-08
icon:
  type: fa
  name: fa-paper-plane
color: green
---

WurstScript is a programming language and modding toolkit working in unison to create awesome Warcraft 3 maps.
In this guide we will show you how to install WurstScript and set up your first project.

## Prerequisites

WurstScript and its related tools require Java 11+ to run. Editor support is provided via a VSCode extension.

### Java

[_&nbsp;_{: .fa .fa-download} Download Java from Adoptium](https://adoptium.net/?variant=openjdk11){: .btn .btn-orange}

Download the Java Runtime appropriate for your system and follow the installation procedure.

### VSCode

[_&nbsp;_{: .fa .fa-download} Download VSCode](https://code.visualstudio.com/){: .btn .btn-primary}

## Install Wurstscript

Now we will setup a Wurst compiler environment and create a project using the the WurstSetup, also known as `grill`.

[_&nbsp;_{: .fa .fa-download} Download WurstSetup](https://grill.wurstlang.org/hudson/job/WurstSetup/lastSuccessfulBuild/artifact/downloads/WurstSetup.jar){: .btn .btn-green}

Download WurstSetup and perform installation by running `java -jar WurstSetup.jar install wurstscript` or double-clicking to start the graphical user interface.

Now you need to add the `~/.wurst` folder to your PATH environment variable, so that `grill` is recognized from the commandline.
Refer to this [tutorial](https://www.java.com/en/download/help/path.xml).

## Commandline Usage

Using `grill` from the commandline you can now start with generating a new project or installing an existing project. The user experience is similar to tools such as `npm`, `mvn`. etc.

### Updating the Compiler

Use the special `wurstscript` keyword to install or update wurst on your system for the current user.

`grill install wurstscript`

### Create a new Wurst Project

Use `generate` to create new projects. The project will be generated in a folder inside your current location with the name provided.

`grill generate my-wurst-project`

### Open in VSCode

After you finished installation and project setup, you can open the project's root folder in VSCode.

`code my-wurst-project`

{: .answer}
_&nbsp;_{: .fa .fa-exclamation-circle} Make sure you are opening the project's root folder (contains wurst.build file) using `File -> Open Folder`

Once the project is opened, you can click the `Hello.wurst` file on the left to activate the Wurst plugin. The code should compile and the setup should be done. Using VSCode's command console (`F1`) you can execute wurst commands such as running or building your map.

If you are new to WurstScript but not new to programming, you probably want to continue with the [_&nbsp;_{: .fa .fa-external-link-square} Beginner's Guide](tutorials/wurstbeginner.html)

### Installing and Updating a project

Run the `install` command to update your project's dependencies, or to initially setup a fresly cloned project to work on your machine.

`grill install`

### Adding dependencies

To add a new dependency, run the `install` command with a second parameter that points to a git repo.

`grill install https://github.com/Frotty/wurst-astar-jps`

## Graphical User Interface

By running the `WurstSetup.jar` without any arguments or simply by double-clicking, you can alternatively use the deprecated, graphical user interface.

