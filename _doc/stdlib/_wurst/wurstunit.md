---
title: Wurst Unit
sections:
- Intro
- Magic functions
---

### Intro

We already discussed unit testing in [BOTW 4](https://wurstlang.org/blog/bestofthewurst4.html) so let's take a closer look at the package.

### Magic functions

The first three functions of the package are annotated with `@compiletimenative` and have no implementation.
They are named that way because they are a custom native that is implemented inside the wurst compiler and only available at compiletime, disjuct from warcraft and Jass.

```
@compiletimenative public function println(string msg)
	DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 60, msg)
@compiletimenative public function testFail(string msg)
@compiletimenative public function testSuccess()
```

`println` is just a function to print something to vscode's output tab.
You can use it and `print` to perform logs in your code that will show up in tests.
`testFail` and `testSuccess` are the functions that make a unit test fail or succeed, depending on which one is called first.
Tests succeed by default and you should usually use asertions instead of these natives directly.

### Assertions

Below the natives we have a list of assert functions that build upon `testFail` and `testSuccess` providing better API and error output.
As by code conventions you should prefer the typed extension functions over lower level ones.
Let's look an one example, first a bad assertion of two integers:

```wurst
// Bad
assertTrue(someInt == someOtherInt)
```

If the test fails, you will only get a failed assertion:

```
	FAILED assertion:
	Test failed: Assertion failed
... when calling foo() in Test.wurst:6
... when calling assertTrue(false) in Wurstunit.wurst:18
```

If you use the proper assertion:

```wurst
// Good
someInt.assertEquals(someOtherInt)
```

You will get better code and a better output:

```
	FAILED assertion:
	Test failed: Expected <2>, Actual <1>
... when calling foo() in Wurstunit.wurst:17
... when calling real_assertEquals(1, 2) in Wurstunit.wurst:18
```

You can write custom `equals` assertions for your own classes. Just take a look at the existing ones and duplicate the functionality.



