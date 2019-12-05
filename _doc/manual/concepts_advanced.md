---
title: Advanced Concepts
sections:
- Enums
- Tuple Types
- Extension Functions
- Vararg Functions
- Lambdas and Closures
- Function Overloading
- Operator Overloading
- Annotations
- Compiletime Execution
- Automated Unit Tests
---

## Enums

In Wurst, __Enums__ are a shorthand wrapper for collections of named integer constants.
Enums are not related to classes and are directly translated into the integers they represent.
The main purpose is to add safe, comfortable API in places where otherwise ints would be used.

Usage is similar to static class members via the Enum's name:

```wurst
enum MyUnitState
	FLYING
	GROUND
	WATER

let currentState = MyUnitState.GROUND
```

Enums can be used as class members

```wurst
class C
	State currentState

	construct(State state)
		currentState = state
```

To check the current value of an enum, you can use the switch statement.
Note that all Enummembers have to be checked (or a defaut).

```wurst
let currentState = MyUnitState.GROUND
switch currentState
	case FLYING
		print("flying")
	case GROUND
		print("ground")
	case WATER
		print("water")
```
Note that in switch statements and variable assignments the qualifier `MyUnitState` can be ommited.

To retrieve the int an enum member represents, simply cast it to the int type:

```wurst
print((MyUnitState.GROUND castTo int).toString()) // Will print "1"
```

The coalescent integer value starts at 0, incrementing with each succeeding enum member. So for `MyUnitState` `FLYING` will be 0, `GROUND` 1 and `WATER` 2.


## Tuple Types

With _tuple_ types you can group several variables into one bundle. This can be used to return more than one value from a function, to create custom types and of course for better readability.

Note that tuples are not like classes. There are some important differences:
- You do not destroy tuple values.
- When you assign a tuple to a different variable or pass it to a function you create a copy of the tuple. Changes to this copy will not affect the original tuple.
- Tuple types cannot be bound to type parameters, so you can not have a List{vec} if vec is a tuple type.
- As tuple types are not created on the heap you have no performance overhead compared to using single variables.

```wurst
// Example 1:

// define a tuple
tuple vec(real x, real y, real z)

init
	// create a new tuple value
	let v = vec(1, 2, 3)
	// change parts of the tuple
	v.x = 4
	// create a copy of v and call it u
	let u = v
	u.y = 5
	if v.x == 4 and v.y == 2 and u.y == 5
		testSuccess()


// Example 2:

tuple pair(real x, real y)
init
	var p = pair(1, 2)
	// swap the values of p.x and p.y
	p = pair(p.y, p.x)
	if p.x == 2 and p.y == 1
		testSuccess()
```

Because tuples don't have any functions themselves, you can add extension
functions to an existing tuple type in order to achieve class-like
functionality.
Remember that you can't modify the value of a tuple in it's extension function
- so you have to return a new tuple every time if you wan't to change something.
Look at the Vector package in the Standard Library for some tuple usage
examples. (Math/Vectors.wurst)



## Extension Functions

Extension functions enable you to "add" functions to existing types without
creating a new derived type, recompiling, or otherwise modifying the original
type.
Extension functions are a special kind of static function, but they are called
as if they were instance functions of the extended type.

### Declaration
```wurst
public function TYPE.EXTFUNCTIONNAME(PARAMETERS) returns ...
	BODY
	// The keyword "this" inside the body refers to the instance of the extended type
```
### Examples

```wurst
// Declaration
public function unit.getX() returns real
	return GetUnitX(this)

// Works with any type
public function real.half() returns real
	return this/2

// Parameters
public function int.add( int value )
	return this + value

// Usage
let u = CreateUnit(...)
...
print(u.getX().half())

// Also classes, e.g. setter and getter for private vars
public function BlubClass.getPrivateMember() returns real
	return this.privateMember

// And tuples as mentioned above
public function vec2.lengthSquared returns real
	return this.x*this.x+this.y*this.y
```

## Vararg Functions

Variable argument functions can be passed an variable amount of parameters of the same type. They are most commonly used to prevent boilerplate code and provide better API.
Inside the function, the variable arguments can be accessed via a `for .. in` loop.

Example:
```wurst
function asNumberList(vararg int numbers) returns LinkedList<int>
	let list = new LinkedList<int>()
	for number in numbers
		list.add(number)
	return list

init
	asNumberList(1, 2, 3)
	asNumberList(44, 14, 651, 23)
	asNumberList(10)
```

All the calls to `asNumberList` are valid in this example and the benefit is apparent. We can pass any amount of integers (up to 31 arguments) to the function, but we only need to implement it once.

### Limitations

The current implementation creates a specialized function with the right number of parameters.
Since Jass allows at most 31 parameters, function calls must not use more than 31 arguments in total.


## Lambdas and Closures

A lambda expression (also called anonymous function) is a lightweight way to provide an implementation
of a functional interface or abstract class (To keep the text simple, the following
explanations are all referring to interfaces, but abstract classes can be used in the same way).

A *functional interface* is an interface which has only one method.
Here is an example:
```wurst
// the functional interface:
interface Predicate<T>
	function isTrueFor(T t) returns bool

// a simple implementation
class IsEven implements Predicate<int>
	function isTrueFor(int x) returns bool
		return x mod 2 == 0

// and then we can use it like so:
let x = 3
Predicate<int> pred = new IsEven()
if pred.isTrueFor(x)
	print("x is even")
else
	print("x is odd")
destroy pred
```

When using lambda expressions, it is not necessary to define a new class
implementing the functional interface. Instead the only function of the
functional interface can be implemented where it is used, like so:
```wurst
let x = 3
// Predicate is defined here:
Predicate<int> pred = (int x) -> x mod 2 == 0
if pred.isTrueFor(x)
	print("x is even")
else
	print("x is odd")
destroy pred
```
The important part is:
```wurst
(int x) -> x mod 2 == 0
```
This is a lambda expression. It consists of two parts and an arrow symbol *->*
between the two parts. The left hand side of the arrow is a list of formal parameters,
as you know them from function definitions. On the right hand side there
is an expression, which is the implementation. The implementation consists only
of a single expressions, because lambda expressions are typically small and used
in one line. But if one expression is not enough there is the begin-end expression.

Remember that, because closures are just like normal objects, you also have to destroy them
like normal objects. And you can do all the other stuff you can do with
other objects like putting them in a list or into a table.

### Type inference

It is not necessary to provide the parameter types for Lambda-parameters, if they can be inferred from the context.
Moreover, parenthesis are optional, when there is only one parameter without type or no parameter.

Therefore the following definitions are equivalent:

```wurst
Predicate<int> pred = (int x) -> x mod 2 == 0
Predicate<int> pred = (x) -> x mod 2 == 0
Predicate<int> pred = x -> x mod 2 == 0
```

### begin-end expression

Sometimes one expression is not enough for a closure. In this case, the begin-end
expression can be used. It allows to have statements inside an expression. The
begin keyword has to be followed by a newline and an increase in indentation.
It is possible to have multiple lines of statements within:
```wurst
doAfter(10.0, () -> begin
	u.kill()
	createNiceExplosion()
	doMoreStuff()
end)
```
It is also possible to have a return statement inside a begin-end expression
but only the very last statement can be a return.

### Lambda blocks

Often a lambda expression with begin-end-block is given as the last argument in a line.
Wurst offers a special Syntax for this case, which fits better with the general indentation based Syntax used in Wurst.

A lambda expression can be used after an assignment, local variable definition, return statement or function call.
The arrow `->` of the lambda expression must then be followed by a newline and an indented block of statements.

For example, the begin-end-block above can be replaced as follows:

```wurst
doAfter(10.0) ->
	u.kill()
	createNiceExplosion()
	doMoreStuff()
```

The following examples uses a lambda with parameter `u` to iterate over all units owned by a player:

```wurst
forUnitsOfPlayer(lastRinger) u ->
	if u.getTypeId() == TOWER_ID
		let pos = u.getPos()
		let facing = u.getFacingAngle()
		addEffect(UI.goldCredit, pos).destr()
		u.remove()
		createUnit(players[8], DUMMY_ID, pos, facing)
```

### Capturing of Variables


The really cool feature with lambda expressions is, that they create a *closure*.
This means that they can close over local variables outside their scope
and capture them.
Here is a very simple example:
```wurst
let min = 10
let max = 50
// remove all elements not between min and max:
myList.removeWhen((int x) ->  x < min or x > max)
```
In this example the lambda expression captured the local variables min and max.

It is important to know, that variables are captured by value. When a closure
is created the value is copied into the closure and the closure only works on that copy.
The variable can still be changed in the environment or in the closure, but this will have no effect
on the respective other copy of the variable.

This can be observed when a variable is changed after the closure is created:
```wurst
var s = "Hello!"
let f = () ->
	print(s)
	s = s + "!"

s = "Bye!"
f.run()  // will print "Hello!"
f.run()  // will print "Hello!!"
print(s) // will print "Bye!"
```

### Behind the scenes

The compiler will just create a new class for every lambda expression in your code.
This class implements the interface which is given by the context in which
the lambda expression is used.
The generated class has fields for all local variables which are captured.
Whenever the lambda expression is evaluated, a new object of the class is created
and the fields are set.

So the "Hello!" example above is roughly equivalent to the following code:
```wurst
// (the interface was not shown in the above code, but it is the same):
interface CallbackFunc
	function run()

// compiler creates this closure class implementing the interface:
class Closure implements CallbackFunc
	// a field for each captured variable:
	string s

	function run()
		// body of the lambda expression == body of the function
		print(s)
		s = s + "!"

var s = "Hello!"
let f = new Closure()
// captured fields are set
f.s = s
s = "Bye!"
f.run()  // will print "Hello!"
f.run()  // will print "Hello!!"
print(s) // will print "Bye!"
```
### Function types

A lambda expression has a special type which captures the type of the parameter
and the return type. This type is called a *function type*. Here are some examples with their type:
```wurst
() -> 1
	// type: () -> integer

(real r) -> 2 * r
	// type: (real) -> real

(int x, string s) -> s + I2S(x)
	// type: (int, string) -> string
```

While function types are part of the type system, Wurst has no way to write down
a function type. There are no variables of type "(int,string) -> string".
Because of this, a lambda expression can only be used in places where
a concrete interface or class type is known.
This can be an assignment where the type of the variable is given.
```wurst
Predicate<int> pred = (int x) -> x mod 2 == 0
```
However it is not possible to use lambda expressions if the type of the variable is only inferred:
```wurst
// will not compile, error "Could not get super class for closure"
let pred = (int x) -> x mod 2 == 0
```
### Lambda expressions as code-type

Lambda expressions can also be used where an expression of type `code` is expected.
The prerequisite for this is, that the lambda expression does not have any parameters
and does not capture any variables. For example the following code is _not_ valid,
because the local variable `x` is captured.

```wurst
let t = getTimer()
let x = 3
t.start(3.0, () -> doSomething(x)) // error: Cannot capture local variable 'x'
```

This can be fixed by attaching the data to the timer manually:
```wurst
let t = getTimer()
let x = 3
t.setData(x)
t.start(3.0, () -> doSomething(GetExpiredTimer().getData()))
```
If a lambda expression is used as `code`, there is no new object created and
thus there is no object which has to be destroyed. The lambda expression will just
be translated to a normal Jass function, so there is no performance overhead when
using lambda expressions in this way.

## Function Overloading

Function overloading allows you to have several functions with the same name.
The compiler will then decide which function to call based on the static type
of the arguments.

Wurst uses a very simple form of overloading. If there is exactly one function in
scope which is feasible for the given arguments, then this function will be used.
If there is more than one feasible function the compiler will give an error.

Note that this is different to many other languages like Java, where the
function with the most specific feasible type is chosen instead of giving an error.
```wurst
function unit.setPosition(vec2 pos)
	...

function unit.setPosition(vec3 pos)
	...

function real.add(real r)
	...

function real.add(real r1, real r2)
	...
```
This works because the parameters are of different types or have a different amount of paramaters and the correct function can therefore be determined at compiletime.
```wurst
function real.add(real r1)
	...

function real.add(real r1) returns real
```
This does not work because only the returntype is different and the correct function cannot be determined.

```wurst
class A
class B extends A

function foo(A c)
	...

function foo(B c)
	...

// somewhere else:
	foo(new B)
```

This does not work either, because B is a subtype of A. If you would call the function foo
with a value of type B, both functions would be viable. Other languages just take the
"most specific type" but Wurst does not allow this. If A and B are incomparable types, the overloading is allowed.


## Operator Overloading

Operator Overloading allows you to change the behavior of internal operators +, -, \* and / for custom arguments.
A quick example from the standard library (Vectors.wurst):
```wurst
// Defining the "+" operator for the tupletype vec3
public function vec3.op_plus( vec3 v ) returns vec3
	return vec3(this.x + v.x, this.y + v.y, this.z + v.z)

// Usage example
vec3 a = vec3(1., 1., 1.)
vec3 b = vec3(1., 1., 1.)
// Without Operator Overloading (the add function was replaced by it)
vec3 c = a.add(b)
// With operator Overloading
vec3 c = a + b
```
You can overload operators for existing types via Extension-Functions or via class-functions for the specific classtype.
In order to define an overloading function it has to be named as following:
```wurst
+  "op_plus"
-  "op_minus"
*  "op_mult"
/  "op_divReal"
```

## Annotations

Almost any definition in wurst can be annotated with one or more optionally named annotations.
Annotations are compiletime only metadata which can be used for compiletime function, tests and `callFunctionsWithAnnotation`.
In most cases annotations are generally disregarded unless you use them yourself.
As of build#1124 annotations must be defined as a top level, bodiless function using `@annotation`, in order to be valid.

```wurst
@annotation public function my_annotation() // Definition

@my_annotation function someOtherFunc() // Usage
```

The wurst reserved annotations are defined in the `Annotations` package.

```wurst
@annotation public function compiletime()
@annotation public function deprecated()
@annotation public function deprecated(string _message)
@annotation public function compiletimenative()
@annotation public function configurable()
@annotation public function inline()
@annotation public function config()
@annotation public function extern()
```

## Compiletime Execution

Wurst includes an interpreter and can execute code at compiletime, which can be useful for testing and for object editing.

### Compiletime Functions

Compiletime Functions are functions, that are executed when compiling your script/map.
They mainly offer the possibility to create Object-Editor Objects via code.

A compiletime function is just a normal Wurst function annotated with @compiletime.
```wurst
@compiletime function foo()
```
Compiletime functions have no parameters and no return value.

Compiletime functions are run by default. You can change this with the cmdline arguments `-runcompiletimefunctions` and `-injectobjects`.
When you use compiletime functions to generate objects, Wurst will generate the object files
next to your map and you can import them into your map using the object editors normal import
function. Compared to ObjectMerger this has the advantage, that you can directly see your new
objects in the object editor.
You can also enable an option to directly inject the objects into the map file, though the changes will not be visible in the object-editor directly.

You can use the same code during runtime and compiletime.
The special constant `compiletime` can be used to distinguish the two.
The constant is `true` when the function was called at compiletime and `false` otherwise.
The following example shows how this could be useful:
```wurst
init
	doInit()

@compiletime
function doInit()
	for i = 1 to 100
		if compiletime
			// create item object
		else
			// place item on map
```

### Compiletime Expressions

Similar to compiletime functions, Wurst also has compiletime expressions.
As the name suggests, these are expressions, which are evaluated at compiletime.
The result of executing the expression is placed into the mapscript instead of the original expression.

The syntax for compiletime expressions is a simple function call to the `compiletime` function defined in package `MagicFunctions` in the standard library.
This function takes one argument, which is the expression to evaluate.

For example the following defines a global variable `blub` and initializes it with the compiletime expression `fac(5)`:

```wurst
let blub = compiletime(fac(5))

function fac(int x) returns int
    if x <= 1
        return 1
    return x * fac(x - 1)
```

The factorial function is evaluated at compiletime and returns `120`.
The number `120` then replaces the compiletime expression in the generated mapscript.

Just like compiletime functions, it is also possible to use compiletime expressions with object editing natives (see below).

Compiletime expressions have the restriction, that it is not possible to compile the map without the `-runcompiletimefunctions` flag.

### Execution order

Compiletime expressions and functions are executed from top to bottom inside a package.
Imported packages are executed before the importing package if the import-relation is one directional.
Otherwise the execution order is not specified and depends on implementation details.

### Functions available at compiletime

Not all functions which can be used in the game can be used at compiletime.
Only a few functions are implemented in the Wurst compiler and emulate the respective functions from `common.j`.

The currently implemented functions can be found in the compiler code in the class [NativeFunctionsIO](https://github.com/wurstscript/WurstScript/blob/master/de.peeeq.wurstscript/src/main/java/de/peeeq/wurstio/jassinterpreter/NativeFunctionsIO.java).


### Object Editing Natives

The standard library provides some functions to edit objects in compiletime functions.
You can find the corresponding natives and higher level libraries in the objediting folder of the standard library.

The package ObjEditingNatives contains natives to create and manipulate objects. If you are familiar with
the object format of Wc3 and know similar tools like [Lua Object Generation](https://www.hiveworkshop.com/forums/jass-ai-scripts-tutorials-280/lua-object-generation-191740/)
or the ObjectMerger from JNGP, you should have no problems in using them. If you run Wurst with compiletime functions enabled, it will generate
the object creation code for all the objects in your map. This code is saved in files named similar to "WurstExportedObjects_w3a.wurst.txt" and
can be found right next to your map file. You can use this code as a starting point if you want to use the natives.

Wurst also provides a higher level of abstraction. For example the package AbilityObjEditing provides many classes
for the different base abilities of Wc3 with readable method names. That way you do not have to look up the IDs.

The following example creates a new spell based on "Thunder Bolt". The created spell has the ID "A005" for illustratory purpose.
In proper code you should generate your IDs so you don't have to deal with them directly. See [this blog entry](https://wurstlang.org/blog/bestofthewurst3.html#objectediting%20)
In the next line the name of the spell is changed to "Test Spell".
Level specific properties are changed using level closures, which calculate values for all levels.

```wurst
package Objects
import AbilityObjEditing

@compiletime function myThunderBolt()
	// create new spell based on thunder bolt from mountain king
	new AbilityDefinitionMountainKingThunderBolt("A005")
	// change the name
	..setName("Wurst Bolt")
	..setTooltipLearn("The Wurstinator throws a Salami at the target.")
	// 400 damage, increase by 100 every level
	..presetDamage(lvl -> 400. + lvl * 100)
	// 10 seconds cooldown
	..presetCooldown(lvl -> 10.)
	// 0 mana, because no magic is needed to master Wurst
	..presetManaCost(lvl -> 0)
	// ... and so on
```

> *NOTE* Packages exist for all object types.

## Automated Unit Tests

You can add the annotation `@Test` to any function. Open the task runner `F1` and type `run test` to see the available commands. You can either run the test under cursour, all in the package or all tests overall.

To perform assertions you need to import the `Wurstunit` package.

Example:

```wurst
package Test
import Wurstunit

@Test public function a()
	12 .assertEquals(3 * 4)

@Test public function b()
	12 .assertEquals(5 + 8)
```

If you run this, you get the following output:

```
Running <PlayerData:114 - a>..
	OK!
Running <PlayerData:117 - b>..
	FAILED assertion:
	Test failed: Expected <13>, Actual <12>
... when calling b() in PlayerData.wurst:117
... when calling int_assertEquals(12, 13) in PlayerData.wurst:118

Tests succeeded: 1/2
>> 1 Tests have failed!
```

You can search the standard library for "@Test" to get some more examples.
