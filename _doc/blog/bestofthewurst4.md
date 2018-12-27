---
title: Best of the Wurst 4 - February Update
layout: post
excerpt: This month we show our roadmap and explain unit testing
icon:
  type: fa
  name: fa-servicestack
color: blue
author: Frotty
date: 2018-02-01
banner: /assets/images/blog/bestof4/februaryBanner.png
---
------

![](/assets/images/blog/bestof4/februaryBanner.png){: .img-responsive}

In this fourth issue of our blog we look at wurstscript's start into 2018, and our roadmap. Once again we're excited to mention that users within our awesome community are getting involved and contribute to the wurst.

The theme for this months code snippet is **unit testing in wurst**.

WurstScript, or *Wurst* for short, aims to be a completely integrated wc3 modding solution, with a focus on higher level programming and IDE experience, without sacrificing efficiency of the generated map script.


Updates
===

* The `runmap` command now uses `war3.exe` if it is present, which can improve loading time. The game executable detection has also been improved.
* Removed obsolete temp file creation when handling MPQ files, which prevents permission problems on certain systems.
* Compiletime mocks added for `force` and `gamecache`, enabling them to be ued in object editing and unit tests.
* The compiletime implementation of`StringHash` now returns values identical to those at runtime, thanks to @lep
* We merged many awesome pull requests for the standard library ([#23](https://github.com/wurstscript/WurstStdlib2/pull/23), [#25](https://github.com/wurstscript/WurstStdlib2/pull/25), [#26](https://github.com/wurstscript/WurstStdlib2/pull/26), [#27](https://github.com/wurstscript/WurstStdlib2/pull/27), [#28](https://github.com/wurstscript/WurstStdlib2/pull/28), [#30](https://github.com/wurstscript/WurstStdlib2/pull/30), [#31](https://github.com/wurstscript/WurstStdlib2/pull/31), [#33](https://github.com/wurstscript/WurstStdlib2/pull/33), [#34](https://github.com/wurstscript/WurstStdlib2/pull/34), [#35](https://github.com/wurstscript/WurstStdlib2/pull/35), [#36](https://github.com/wurstscript/WurstStdlib2/pull/36), [#37](https://github.com/wurstscript/WurstStdlib2/pull/37), [#38](https://github.com/wurstscript/WurstStdlib2/pull/38), [#41](https://github.com/wurstscript/WurstStdlib2/pull/41), [#42](https://github.com/wurstscript/WurstStdlib2/pull/42))
    * Big thanks to @HappyTauren @Trokkin @Jampi0n @Karlek @Krankx and @Chaosy
    * Special thanks to @Sir Moriarty for providing us with new and improved FileIO and Sync packages. The biggest PR we have merged so far!
* We have made some improvements to our continuous integration process, so standard library changes, and pull requests to it are more seamless and powerful.
* Wurst's underlying mpq library [JMPQ](https://github.com/inwc3/JMPQ3) has been updated to support pkware decompression and file-less data extraction.
* The [Wc3libs](https://github.com/inwc3/wc3libs) have been updated as well, providing WTS support and Jass's `StringHash` implementation.

*Note*: The [showcase](https://wurstlang.org/showcase.html) is now official - you should submit your wurst maps for a chance in the spotlight!


2018 Roadmap
===

Our main goals for this year are:

* Enhance `wurst.build` and the setup tool to allow more complete and seamless map compilation. In detail:
    * Support configuring `scenario` and `force` options
    * Provide a seamles API for running external tools before or after map builds
    * Make the setup tools fully functional from the commandline
* Reach 100+ github repos to become a supported language on Github Linguist. We need you to publish your wurst repos on Github!
* Implement most Jass natives/types for compiletime. Mainly for unit-testing wc3-specific code.
* Refine, extend, and unit test the standard library.


Unit Testing in Warcraft 3
===
![](/assets/images/blog/bestof4/unitTestsBanner.png){: .img-responsive}

Preamble: The 'unit' in [unit testing](https://en.wikipedia.org/wiki/Unit_testing) does not refer to wc3 units - rather, a unit is an individual piece of source code that is being tested.

Tests allow you to verify the behaviour of your code outside of warcraft 3 at compiletime. Instead of the game interpreting your generated Jass code, Wurst interprets it and can therefore assert correctness and find errors in code, before they happen in the game.

The major benefit of a unit test is that it can cover most imaginable behaviours, even those that rarely happens inside the game, easily, and without wasting time executing such behaviours inside the game.

One of the caveats of unit testing is that compiletime jass interpretation depends on the completeness and correctness of the wurst compiler that is performing the testing instead of the warcraft engine. Wurst does not implement every native, and since we don't know the inner workings of wc3, it can't emulate everything identically.

There are many benefits of unit testing overall, such as:
* Prove that your code does what it's supposed to do.
* Help you improve and understand your code through by to break it.
* Make big changes to your codebase and verify that everything still works.
* Inherently reduce the number of bugs.

The easiest units to test are the ones that don't include warcraft specific elements. Here are some condensed example unit tests for our data structures, arithmetics and string manipulation from the standard library.

```wurst
@Test function testAdd()
	new HashList<int>..add(5).get(0).assertEquals(5)

@Test function linearVecTest()
	let v = linear(vec2(3,4), vec2(6,2), 0.5)
	v.x.assertEquals(4.5)
	v.y.assertEquals(3)

@Test function testJoin()
    new LinkedList<string>()..add("this")..add("is")..add("a")..add("string")
    .joinBy(" ").assertEquals("this is a string")
```

Writing Unit Tests
---

To make any function a test, just annotate it with `@Test`. All functions with this annotation will then be recognized by wurst. This doesn't limit the function in any way and it could theoretically still be used inside your code and not exclusivly as test, however that is not recommended.

A unit test consists of two parts - the execution of the to be tested code and an assertion, that compares the actual result with an expected value.
You can find the assert functions inside the `Wurstunit` package.

The most simple example is an arithmetic test, because we can easily find out the expected value. E.g.

```wurst
@Test function example()
    let actual = (10 .squared()) * 6
    let expected = 600
    actual.assertEquals(expected)
```

As you can see, we calculate what we want to test and then assert that the value is what we expect it to be.

Running Unit Tests
---

In VScode, use F1 to open the task prompt and enter "run test" and choose one of the options.
![](/assets/images/blog/bestof4/runTestVS.png){: .img-responsive}

You can see the result inside the __Output__ tab.

![](/assets/images/blog/bestof4/testOutputVS.png){: .img-responsive}

And that's it! You are now a testing guru. We hope you enjoyed reading this, and we look forward to next month's blog post wherein we'll take a practical look at composing visually beautiful spells in wurst.
