---
title: Best of the Wurst 9 - Happy Holidays
layout: post
excerpt: We take a look at stack traces
icon:
  type: fa
  name: fa-servicestack
color: blue
author: Frotty & Coke
date: 2018-12-27
banner: /assets/images/blog/bestof9/wurstbanner9.png
---
------

![](/assets/images/blog/bestof9/wurstbanner9.png){: .img-responsive}

In the last couple of months, we have reached over 100 stars on GitHub, updated our [homepage](https://wurstlang.org), and as usual caught up with support for Warcraft 3 patches `1.30.2` and beyond.


Tool updates
---
* The wurst family of tools now supports the latest battle.net stable patch (1.30.2).
* The wurst language was updated to allow `class`es to contain tuple array members.
* Improper usage of generic types now throws proper compilation errors
* Attempting to access objects that are known to have already been destroyed now fails at compile time.
* Fixed a bug in local optimizations which caused unexpected behavior.
* Wurst no longer requires JavaFX, which enables wurst builds in a wider range of java distributions.

Standard library highlights
---
* Merged over a dozen awesome pull requests.
* Added `DummyCaster` in addition to `InstantDummyCaster` for channel based spells, and spells with delayed effects.
* Fixed some critical bugs in `HashList`, `HashSet` and `Knockback3D`.
* We have newly-added [code conventions](https://wurstlang.org/manual.html#coding-conventions) - go align your formatting!
* We have begun writing in-depth [package documentation](https://wurstlang.org/stdlib)

Spotlight: Stack traces
---

Did you know that WurstScript generates stack traces for calls of `error(string msg)` from the `ErrorHandling` package?
You might have seen this from a wurst error before - it will show you which lines in your code were executed in what order before the error occured.

Take a look at this example:

```wurst
package Test
import ErrorHandling

function foo()
	new A().bar()

class A

	function bar()
		error("This is an error message")

init
	foo()
```

It produces the following stacktrace ingame:

![](/assets/images/blog/bestof9/stacktrace.png){: .img-responsive}

As you can see the most recent line comes at the top and the oldest at the bottom. Stack traces help tremendously with debugging errors, as it gives you a history of what happened before the error. Naturally they cause quite a performance hit. If you verified your map working well, you can disable them via the corresponding runarg `-stacktraces`, which is enabled by default.
