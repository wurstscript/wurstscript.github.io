---
title: Best of the Wurst 8 - August Updates
layout: post
excerpt: The spotlight this month is VSCode integration
icon:
  type: fa
  name: fa-servicestack
color: blue
author: Frotty
date: 2018-09-15
banner: /assets/images/blog/bestof8/wurstbanner8.png
---
------

![](/assets/images/blog/bestof8/wurstbanner8.png){: .img-responsive}

This month we addressed some older issues, as well as adding juicy new features. Our spotlight this time is about new *vscode features*.

We also want to say thanks to the community for the avid support and contributions in the last few months, helping Wurst to become better than ever!

Tool updates
---
* Patch 1.30 is supported and the reccommended version for Wurst development.
* Vanilla Jass is now parsed with its own grammar, which improves compatibility for input maps.
* Added `@inline` and `@noinline` annotations to allow more fine grained control over inlining behavior.
* The inliner has also been improved and now handling inlining on a call by call basis.
* Added breadcrumbs, outline view and symbol renaming to vscode extension.
* Colors used in wurst color tuples and wc3 color codes are now shown in vscode.
* Functions from `blizzard.j` that are used during map initialization no longer get inlined, preventing map script bloat, in particular with more than 12 players.
* Added warnings for unused private class variables and functions.
* Fixed a case of dead code not being detected, which resulted in duplicate statements when manually nulling handles
* The error window's tab width has been reduced so the code isn't overly indented anymore.
* Profiled and addressed a couple CPU and Memory concerns (thanks to ej-technologies' open-source JProfiler license).

Standard library highlights
---

* FileIO and Network libraries have been updated for 24 players and new natives ([PR #94](https://github.com/wurstscript/WurstStdlib2/pull/94), [PR #106](https://github.com/wurstscript/WurstStdlib2/pull/106), [PR #107](https://github.com/wurstscript/WurstStdlib2/pull/107)).
* `DamageType` ([PR #95](https://github.com/wurstscript/WurstStdlib2/pull/95), [PR #97](https://github.com/wurstscript/WurstStdlib2/pull/97)), and `OnUnitEnterLeave`  ([PR #96](https://github.com/wurstscript/WurstStdlib2/pull/96))  received more fixes for edge cases.
* Asset lists have been improved by ([PR #98](https://github.com/wurstscript/WurstStdlib2/pull/98), [PR #103](https://github.com/wurstscript/WurstStdlib2/pull/103), [PR #114](https://github.com/wurstscript/WurstStdlib2/pull/114)).
* `trigger` API received fixes by ([PR #102](https://github.com/wurstscript/WurstStdlib2/pull/102), [PR #104](https://github.com/wurstscript/WurstStdlib2/pull/104))
* Added `Matrices` and `Quaternion` math packages which can also be used to manipulate effects ([PR #111](https://github.com/wurstscript/WurstStdlib2/pull/111), [PR #112](https://github.com/wurstscript/WurstStdlib2/pull/112)).
* Removed another `initlater` import from the stdlib which improves code quality.
* We have several more PRs currently in the reviewing process, regarding Damage Modification and FileIO.

Spotlight: VSCode Integration
---

One of the more noticable improvements these last months have been on making the wurst vscode development experience more feature rich and integrated. We implemented several more features of the language protocol, which we will preset here. Additionally, the wurst file icon is now an offical part of the [vscode-icons extension](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons).

![](https://i.imgur.com/AUrSWqt.png){: .img-responsive}

### Breadcrumbs

![](https://i.imgur.com/6Mj0tIC.png){: .img-responsive}

![](https://i.imgur.com/fQbsyQi.png){: .img-responsive}

Breadcrumbs show the model hiearachy from your cursor positon.
You can turn them on via `View->Toggle Breadcrumbs`.

The *Focus Breadcrumbs* command (shortcut `Ctrl` +`Shift`+`.`) lets you navigate your code quickly.
You can also search for symbols using the *Goto symbol in workspace* command (`Ctrl` + `t`) or using *Goto symbol in file* (`Ctrl`+`Shift`+`o`).

### Outline View

![](https://i.imgur.com/M0S88xJ.png){: .img-responsive}

The outline gives you a searchable overview over all elements in that file. Turn it on by rightclicking on the Explorer headline.

![](https://i.imgur.com/an0TDoP.png){: .img-responsive}

### Symbol Renaming

VSCode recognizes Wurst's symbols, allowing for consistent renaming.

![](https://i.imgur.com/93MPgE3.gif){: .img-responsive}

### Color Preview

![](https://i.imgur.com/mpQ0jmd.png){: .img-responsive}

![](https://i.imgur.com/uCIl2T3.gif){: .img-responsive}

Wurst color tuples and wc3 color strings are now previewed and you can use the vscode color picker to adjust them.

### Import Quickfix

![](https://i.imgur.com/wHPvvrn.gif){: .img-responsive}

When using types which are not imported into a given package yet, Wurst will suggest importing a package which will fulfill that type. If applied, the quickfix will add the import statement automatically.

### Themability

While not a Wurst feature, it should be noted that everything style related you see here can be customized in some way. There are default and user created themes, take a look:

![](https://i.imgur.com/xYnqc7L.png){: .img-responsive}![](https://i.imgur.com/T1Icm60.png){: .img-responsive}![](https://i.imgur.com/HVT0A5m.png){: .img-responsive}![](https://i.imgur.com/I0wWnCT.png){: .img-responsive}![](https://i.imgur.com/kpUzuSc.png){: .img-responsive}

The theme used for the screenshots above, is called "Atom One Dark"

Cheers!

-Frotty

