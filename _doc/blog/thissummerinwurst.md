---
title: This Summer in Wurst
layout: post
excerpt: Summary of all the changes and updates to wurst during this summer.
icon:
  type: fa
  name: fa-sun-o
color: orange
author: Cokemonkey11
date: 2017-11-15
banner: /assets/images/blog/bestof1/ThisSummerInWurstBanner.png
---
------
![](/assets/images/blog/bestof1/ThisSummerInWurstBanner.png){: .img-responsive}

Hello! This is the first issue in a regular series of news posts about wurst and the wurstscript community. Actual years have passed since we last summarised wurst-related content for hive workshop news, so keep in mind that this is a very sparse summary, whereas our future news posts will more densely discuss current events.

Background on wurst: wurstscript is a programming language that compiles to JASS, and is developed alongside a suite of tools for a coherent development experience. It can even work alongside maps written in vJass. A usual workflow looks like this:

* Design a terrain in a world editor (vanilla editor, WEX, or anything really)
* Define objects, either using the object editor, or using the wurst “objectediting” subsystem
* Write scripts, get instant feedback, and compile & build in the lightweight [vscode](https://code.visualstudio.com/) editor
* Check in your code to version control

Unlike vJass, wurstscript is a higher level programming language with a strict type system and a powerful optimiser. The result tends to be shorter code written quicker, without any sacrifice to performance.

### So, what’s changed recently?

The Wurstscript community has been steadily active with frequent and regular changes, not only in the Wurstscript language, but across the whole map editing toolchain.

Wurstscript has found its niche as the toolchain that aims to maximise productivity and consistency of the development experience, without sacrificing quality.

The maintainers of Wurstscript are typically programmers first, and mappers second. Sadly, time constraints mean that we’ve not spent much time publicizing our progress for the larger modding community. This is something we’re keen to change, with more frequent curated summaries of what’s going on in our bubble.

With that context in mind, we hope this will be the first of many “Best of the Wurst” recap posts, wherein we highlight major changes - certainly more frequently than once every three years. There are too many changes to count, so in this post we’ll discuss some of the changes made just this summer that we’re excited about.


# GUI tool for compiler updates and map project setup

![](/assets/images/blog/bestof1/SetupToolUI.png){: .img-responsive}

Probably the most major development this summer is a new tool for maintaining your installation of wurst, bootstrapping new map projects using a template and importing existing projects.

This tool maintains a global instance of the wurst compiler, automatically updates it, and can generate & update projects in a way that’s friendly for version control repositories as well as the vscode plugin.

The key point here is that we’ve done some refactoring of the wurstscript project structure to make wurst play more nicely and consistently with vscode. With the addition of dependency management and template projects, we envisage great strides in productivity as the project template (or templates!) progress.


# New runmap/run-arguments design, with readonly terrain mapfile

Alongside great improvements to the [JMPQ](https://github.com/inwc3/JMPQ3) library, wurst now accesses your map project as a read-only archive file. Instead of overwriting it (as done traditionally), the compiler now writes built mapfiles out to a separate “_build” directory. This has tremendous gains, including:

* Map files can more safely be version controlled since they’re accessed read-only by the wurst compiler.
* In the extreme case, alongside native objediting, you can maintain your map end-to-end using your checked-in mapfile only for terraining purposes.
* Better integration with existing maps that have JASS/vJass, because wurst can reuse the existing map script without mutating the source file.
* Building and compiling wurst maps is now done independently in vscode by default - thus there is no need to use a custom editor (apart from for terraining) or even have warcraft3 installed at all.

## Map metadata in __wurst.build__

![](/assets/images/blog/bestof1/coolGraph.png){: .img-responsive}

The overall structure of a wurst map project has changed, and now comprises two new metadata files: `wurst.build` and `wurst_run.args` - the first providing build artifacts, and the second for passing arguments to the wurst compiler.

One advantage of using the `wurst.build` file is that consistency is maintained from build to build - dependencies are segregated, and maintaining library code can be more modular and convenient.

Another advantage is that the world editor is no longer needed for some metadata like the map's name, description, author, etc - that metadata is sourced from the build file and injected into the final map.

The setup tool also interacts with this metadata by importing the `wurst.build` file, thus updating the project's dependencies to keep the standard library and other used packages up-to-date.


# New docs and website, at a new address (updated 30.12.2017)

Documentation and tutorials for wurstscript now live at [wurstlang.org](https://wurstlang.org) - a new landing page which we believe provides a much more consistent and attractive experience for consuming wurst. We’re encouraging community-written tutorials, and indeed the [Wurst Introduction for vJass users](https://wurstlang.org/tutorials/wurst_for_vjass_users.html) is one such tutorial.

Take a look here as well for the wurst setup tool mentioned above!


# ...And more

As a lightning recap of the last few years, here’s more:

* Vscode plugin and workflow, which deprecates the Eclipse plugin and workflow.
* New Github organization - refeactoring work to split up repo; now using gradle for dependency management.
* Wurst standard library v2 now active and de facto standard.
* Improved JASS compliance in Jurst (the vjass-friendly wurst dialect).
* Compiler performance and RAM usage improved.

We hope you’ll find this summary informative. Please do give us some feedback as we plan to write curated content like this more frequently in the future.

As usual, we chat all things wurst at the [#inwc.de-maps](https://kiwiirc.com/client/irc.quakenet.org/#inwc.de-maps) IRC channel.
