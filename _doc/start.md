---
title: Installation
excerpt: Install WurstScript and setup your first project.
date: 2023-11-16
icon:
  type: fa
  name: fa-paper-plane
color: green
---

WurstScript is a programming language and modding toolkit working in unison to create awesome Warcraft 3 maps.
In this guide we will show you how to install WurstScript and set up your first project.

## Prerequisites

WurstScript and its related tools require Java 11+ to run. Editor support is provided via a VSCode extension.

### Download JRE

[_&nbsp;_{: .fa .fa-download} Download Java from Adoptium](https://adoptium.net/?variant=openjdk11){: .btn .btn-orange}

Download the Java Runtime appropriate for your system and follow the installation procedure.

Once finished, continue to the next step.

### Verify Java Installation

Many tasks rely on a environment variable called **JAVA_HOME** which might not have been set by the installer.
To verify your installation, open a command prompt and enter `java -version`.

A valid installation will return something like this:

```powershell
> java -version
openjdk version "11.0.17" 2022-10-18
OpenJDK Runtime Environment Temurin-11.0.17+8 (build 11.0.17+8)
OpenJDK 64-Bit Server VM Temurin-11.0.17+8 (build 11.0.17+8, mixed mode)
```

The major version should be `11` or higher. If it is lower, you must update your Java installation.

If you get an error or get a lower versions displayed, even though you installed a newer one, your **JAVA_HOME** is either missing or configured wrong.

Refer to this [_&nbsp;_{: .fa .fa-external-link-square} Windows tutorial](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html) in order to setup your **JAVA_HOME** correctly.

Once you have setup Java correctly, continue by installing VSCode.

## Install Wurstscript

Now we will setup a Wurst compiler environment and create a project using the the WurstSetup, also known as `grill`.

[_&nbsp;_{: .fa .fa-download} Download WurstSetup](https://grill.wurstlang.org/hudson/job/WurstSetup/lastSuccessfulBuild/artifact/downloads/WurstSetup.jar){: .btn .btn-green}

The Wurstsetup can be used either from the commandline or as a graphical application.

## Commandline

Usage by invoking `grill` via the commandline is recommended and provides a similar user experience to tools such as `npm`, `maven`. etc. To use the setup from the commandline you need to complete the initial installation once.
After that you can invoke `grill` from your commandline.

### Initial installation

For the first time you have to run the .jar file directly, because the executable hasn't been installed yet.

`java -jar WurstSetup.jar install wurstscript`

Now you need to add the `~/.wurst` folder to your PATH environment variable, so you can use it from the commandline.
Refer to this [tutorial](https://www.java.com/en/download/help/path.xml). On Windows 10, the result should look like this:

![](https://i.imgur.com/8bFJJVT.jpg){: .img-responsive}

The `grill` command should now be recognized by your terminal of choice.

![](https://i.imgur.com/FNSBYgD.jpg){: .img-responsive}

If not, a restart might be required.

### Updating the Compiler

Use the special `wurstscript` keyword to install or update wurst on your system for the current user.

`grill install wurstscript`

### Create a Wurst Project

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

![](/assets/images/setup/WurstSetup.png){: .img-responsive}
