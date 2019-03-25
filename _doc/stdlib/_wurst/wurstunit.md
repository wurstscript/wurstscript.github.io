---
title: Wurst Unit
sections:
- Intro
- Magic functions
- Assertions
---

### Intro

We already discussed unit testing in [BOTW 4](https://wurstlang.org/blog/bestofthewurst4.html) so let's take a closer look at the package.

### Magic functions

The first three functions of the package are annotated with `@compiletimenative` and the latter two have no implementation.
They have that annotation to indicate that they are a custom native that is implemented inside the wurst compiler and only available at compiletime, disjuct from warcraft and Jass. In case of `println` it has an implementation when used in Jass (DisplayTimedTextToPlayer) but another one at runtime, inside the compiler.

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
```

To make assertions on custom data types you can write a custom `assertEquals` extension function for that class.
Just take a look at the existing ones and duplicate the functionality.

```wurst
class MyData
	var x = 0
	var p = players[0]

public function MyData.assertEquals(MyData expected) returns boolean
		if  this.x != expected.x or this.p != expected.p
			testFail("Expected <" + expected.toString() + ">, Actual <" + this.toString() + ">")
```

