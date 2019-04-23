---
title: Best of the Wurst 10
layout: post
excerpt: Big spring update & 420
icon:
  type: fa
  name: fa-servicestack
color: blue
author: Frotty & Coke
date: 2019-04-20
banner: /assets/images/blog/bestof10/wurstbanner10.png
---
------

Best of the Wurst 10
===
![](/assets/images/blog/bestof10/wurstbanner10.png){: .img-responsive}

In March and early April, we rolled out the previously announced `wurst.build` configuration file improvements, allowing for further code-based map metadata customization, and also laying additional groundwork for the independent map generation pipeline we envisage for the future of wurst.

You can now make full use of the toolsuite from the command line with our new Grill package manager. Additionally, welcome `DamageEvent` to the standard library: a new damage detection and modification API, which supports and uses the new 1.29 natives.

Tooling
---
* Upgrades to the `wurst.build` configuration workflow. You can now modify scenario data such as players, teams, and loading screens, all without opening the world-editor. See the [Tutorial](https://wurstlang.org/tutorials/wurstbuild.html) for more information.
* The WurstSetup received a face lift, including auto-update, better async tasks, and complete CLI functionality for power users.
* Objects and other allocations inside `compiletime` expressions are now retained for use during runtime.
* Updated `switch` statement with joined cases, duplicate case detection, and control flow improvements.
* Experimental support for @lep's ["hot code reload"](https://wurstlang.org/tutorials/jhcr.html), which enables code modifications while the map is running.

Standard library
---

We merged over a dozen pull requests, and fixed plenty of bugs, thanks to many contributors, which we're very excited about. The highlights:

* Added the new package `DamageEvent` for damage detection and modification, and deprecated the older `DamageType` package.
* The timer used for `ClosureTimer` executions can now be customized, allowing for the creation of a timer dialog.
* Package `LastOrder` has been cleaned up and fixed.
* Package `Printing` can now be fully configured.
* Package `ClosureEvents` now only listens to mouse events if those events are used.
* Package `OrderStringFactory` no longer generates default unit order strings, so they can be distinguished in events.
* Generalized `damageTarget` and `isAliveTrick` from unit to widget.
* Added additional overloads for `flashEffect`.
* Added shorthand `.setDummyAbility()` to make any ability castable by a dummy caster.
* `DummyCaster` dummy units can now be accessed via the dummy caster API.
* Fixed nested indexing/deindexing in UnitIndexer.
* Fixed counted callbacks not stopping properly in certain cases.
* Fixed `image.hideForPlayer`, and improved image documentation.
* Fixed `TimedLoop` instances being executed incorrectly after stopping the loop.

Website
---
* Added further - and improved existing - standard library [documentation](https://wurstlang.org/stdlib) pages.
* We also recently rolled out a new [tutorial on closures](https://wurstlang.org/tutorials/getclose.html) - be sure to check it out.
* Webpage interface breadcrumbs for tutorial, stdlib, and blog posts now include all parents.
* Our domain is now verified on GitHub.


Spotlight
===

![](/assets/images/blog/bestof10/grillpm.jpg){: .img-responsive}

## Introduction

If you have been using Wurst for some time, you most likely made use of the Wurst Setup tool to install WurstScript, generate your project, and update dependencies. We started with a graphical solution first, to enable everyone to install and use wurst easily. Now that the Setup tool has matured, we are improving the command line interface for more advanced terminal users.

Note that all of these improvements are added to the existing setup, and if you don't want to make use of them, you don't have to! The only breaking change here is the new command line argument syntax, which is now unified and more aligned with other package managers. Running grill without any arguments will open the GUI (Wurst Setup) frontend, as before. Passing any argument will assume CLI usage.

## Grill Wrapper

Since all additions are kept in the setup, we proudly present the `grill` wrapper for easy CLI usage of the setup tool on any system.

### How do I get it ?

Simply use the setup tool UI to install or update your wurstscript installation. Everything new is shipped inside.

To make proper use of the `grill` command in shells system wide, you need to add the Wurst installation folder (~/.wurst) to your environment PATH variable. How this is done varies a lot depending on your platform - refer to this [tutorial](https://www.java.com/en/download/help/path.xml). On Windows 10, the final result should look like this:
![](https://i.imgur.com/8bFJJVT.jpg){: .img-responsive}

Now you can use the grill commands. Emoji support depends on the particular terminal you are using.

![](https://i.imgur.com/FNSBYgD.jpg){: .img-responsive}

### Headless Execution

The main benefit to having a fully-featured command line interface is that you can run it on systems that have no display (headless). This enables us to automate the wurst mapfile build process easily - for example in continuous integration, as described below.

Passing any command-line argument to `grill` ensures that no user interface will prompt the user.

### The special wurstscript package

Use `grill install wurstscript` to install, or update an existing installation of, the WurstScript tools. The installation will be the same as for the setup, inside your user's home folder `~/.wurst`.

### Generating a new project

`grill generate <project_name>` will create a new directory with your chosen name, and generate a new wurst project inside. The generation includes an up-to-date copy of the default standard library dependency, and basic vscode project configuration metadata.

### Importing an existing project

Unlike installing WurstScript or generating a project, the following commands are expected to be run from your project's root folder.

If you have an existing project, or want to contribute to someone else's project, you only need to install the project once after cloning/copying. This fetches a local copy of any dependencies that the project requires.

```
$ git clone <git_repo_url>
$ cd <repo_name>
$ grill install
```

### Package Management

`grill` is not a fully-fledged package manager, as it doesn't resolve transitive dependencies.
It mainly pulls a list of git repositories for you, and configures them for the wurst compilation.
Soon, we'll add support for dependencies on branch or commit ID.
The following commands must be executed from within a project's root folder.

Installing a new git dependency:
`grill install <git_repo_url>`

Removing a git dependency:
`grill remove <git_repo_url>`

Updating existing dependencies:
`grill install`

### Continuous Integration

Simplified, CI is the process of automating the building and testing of your project on each version change (commit).
Popular git hosts such as bitbucket, gitlab, and github enable us to use CI with our wurst projects.
Arguably, the easiest way to do this is to use the docker-wurst image.

#### Wurst Docker Image

Docker provides mechanisms to containerize applications and systems into images, which can be run similarly to a virtual machine.
That machine then comes with all the tools and dependencies installed and preconfigured, so that you can immediately use `grill` from the command line.

```
$ docker run --rm -it frotty/wurstscript /bin/sh -c "grill help"
```

[Travis CI example](https://github.com/wurstscript/WurstStdlib2/blob/master/.travis.yml)

[Circle CI example](https://github.com/island-troll-tribes/island-troll-tribes/blob/master/.circleci/config.yml)

That's it. We hope you enjoyed the tenth entry in the BotW series.
