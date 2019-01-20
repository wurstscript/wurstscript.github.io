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

```wurst
@compiletimenative public function println(string msg)
	DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 60, msg)
@compiletimenative public function testFail(string msg)
@compiletimenative public function testSuccess()
```

`println` is just a function to print something to vscode's output tab.
You can use it and `print` to perform logs in your code that will show up in tests.
`testFail` and `testSuccess` are the functions that make a unit test fail or succeed, depending on which one is called first.
Tests succeed by default and you should thus make sure to use asertions instead of these natives directly.

### Assertions

After the compiletime natives we have a list of __assertXX__ functions that build upon `testFail` and `testSuccess`, providing better API and debug output.
As by code conventions you should prefer the typed extension functions over the lower level ones.
Let's look at one example, first a not ideal assertion of two integers:

```wurst
// Not ideal
assertTrue(someInt == someOtherInt)
```

If the test fails, you will only get a failed assertion without further information:

```
	FAILED assertion:
	Test failed: Assertion failed
... when calling foo() in Test.wurst:6
... when calling assertTrue(false) in Wurstunit.wurst:18
```

On the other hand if you use the proper assertion:

```wurst
// Better
someInt.assertEquals(someOtherInt)
```

The result will be better styled code and improved debug output:

```
	FAILED assertion:
	Test failed: Expected <2>, Actual <1>
... when calling foo() in Wurstunit.wurst:17
... when calling real_assertEquals(1, 2) in Wurstunit.wurst:18
```

To make assertions on custom data types you can write a custom `assertEquals` assertions that classes. Just take a look at the existing ones and duplicate the functionality.

```wurst
class MyData
	var x = 0
	var y = player[0]

public function MyData.assertEquals(MyData other) returns boolean
	return this.x == other.x and this.y == other.y
```

