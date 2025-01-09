---
title: Manual
excerpt: Formal description of all language features.
date: 2024-02-09
icon:
  name: icon_info
color: blue
redirect_from:
  - /WurstScript/manual/
---

## Introduction

### About

__Wurst__ (/vʊʁst/), is the german word for sausage.

__WurstScript__ is an imperative, object-oriented, statically-typed, beginner-friendly programming language.

Both are delicious.

WurstScript is a robust programming language and toolkit developed to enhance the Warcraft III modding experience. It was initially created to improve upon Jass, Warcraft III's original scripting language, by introducing modern programming features while maintaining syntax similarity to Jass for ease of transition.

With a focus on a code-first approach, WurstScript is built from developers for developers. It extends Jass by adding static typing, classes, and more, bringing these advanced features to a familiar environment. Beyond Jass, WurstScript also supports Lua output, expanding its applicability to Warcraft III: Reforged. This integration also enhances the development of Lua with static types and compile-time execution, among other features, providing a richer, more robust development experience.

By bridging traditional scripting with advanced programming concepts, WurstScript streamlines the Warcraft III modding process. It offers tools and features that boost productivity, improve code quality, and encourage innovative game development. The language's support for both Jass and Lua outputs enables developers to maintain a single codebase while targeting multiple environments, leveraging the strengths of each language.

> Note that this manual is not a beginner's tutorial and expects the reader to have prior knowledge in programming.
[Click here for a beginner's guide.](https://wurstlang.org/tutorials/wurstbeginner.html)

### Values and Types

WurstScript is a statically typed language. This means variables can only hold values of the same type. Additionally since all types are determined at compiletime,
incorrect assignments will throw errors.

Wurst has the same 5 basic types (or primitives) as Jass: **null, boolean, int, real, string**

In this example you can see the static types of the variables on the left. If the assignment on the right isn't of the same type, it will throw an error.
```wurst
boolean b = true // true or false
int i = 1337 // integer, i.e. value without decimals
real r = 3.14 // floating point value
string s = "wurst is great" // text

// Examples
int i = 0 // OK
int j = "no" // Error
string r = "yes" // OK
string s = i // Error
```

### Syntax

WurstScript uses indentation based syntax to define Blocks. You can use either spaces or tabs for indentation, but mixing both will throw a warning.
In the following we use the word "tab" to refer to the tab character or to 4 space characters.

```wurst
// Wurst example. 'ifStatements' need to be indented
if condition
	ifStatements
nextStatements

// Other example using curly brackets (e.g. Java or Zinc)
if condition {
	ifStatements
}
nextStatements
// Other example using keywords (e.g. Jass)
if condition
	ifStatements
endif
nextStatements
```

In general newlines come at the end of a statement, except for the following cases:

- A newline is ignored if the line ends with `(` or `[`
- A newline is ignored before a line beginning with `)`, `]`,`.`, `..`, or `begin`
- A newline is ignored, if the line ends or begins with:
    `,`, `+`, `*`, `-`, `div`, `/`, `mod`, `%`, `and`, `or`, `?`, `:`

You can use this to break longer expressions or long parameter lists over several lines, or to chain method invocations:
```wurst
someFunction(param1, param2,
	param3, param4)

someUnit..setX(...)
	..setY(...)
	..setName(...)

new Object()
	..setName("Foo")
	..doSomething()
```

WurstScript tries to avoid excessive verbosity and symbols, to stay concise and readable.


### Basics

The following is a short overview of the core language features so you can get coding in no time. For a more detailed documentation of each topic,
refer to the dedicated chapters further down the page.

Wurst code is organized into **packages**. Any piece of code must be inside a package in order to be recognized.
Packages can **import** other packages in order to gain access to variables, functions, classes, defined in the imported package.
Packages have an optional _init_ block that is executed when the map is run.

Let's look at a classic **Hello World** example.

```wurst
package HelloWurst
// to use resources from other packages we have to import them at the top
import Printing

// the init block of each package is called when the map starts
init
	// calling the print function from the Printing package
	print("Hello Wurst!")
```

If you run this example, the message "Hello Wurst!" will be displayed after the map has loaded.

As you might have noticed, the ```import Printing``` will throw a warning, because it is already automatically imported.
You can remove the import, it just served as illustration on how to import packages.

For more information about packages, refer to the packages section.

You can still use normal Jass syntax/code outside of packages - the Wurst World Editor will parse jass (and vjass, if jasshelper is enabled), in addition to compiling your Wurst code.

For more information about using maps with mixed wurst/jass code, refer to the "Using Wurst with legacy maps" section.

### Functions

A **function** definition consists of a name, a list of formal parameters and a return
type. The return type is declared after the formal parameters using the **returns** keyword.
If the function does not return a value this part is omitted.
```wurst
// this function returns the maximum of two integers
function max(int a, int b) returns int
	if a > b
		return a
	else
		return b

// this function prints the maximum of two integers
function printMax(int a, int b)
	print(max(a,b).toString())

function foo() // parentheses instead of "takes", "returns nothing" obsolete.
	...

function foo2(unit u) // parameters
	RemoveUnit(u)

function bar(int i) returns int // "returns" [type]
	return i + 4

function blub() returns int // without parameters
	return someArray[5]

function foobar()
	int i // local variable
	i = i + 1 // variable assignment
	int i2 = i // support for locals anywhere inside a function
```

### Variables

Global variables can be declared anywhere in the top level of a package.
Local variables can be declared anywhere inside a function.
A constant value may be declared using the _constant_ or _let_ keyword.
Mutable variables are declared by using the _var_ keyword or the name of it's type.
```wurst
// declaring a constant - the type is inferred from the initial expression
constant x = 5
let x2 = 25
// The same but with explicit type
constant real x = 5
// declaring a variable - the inferring works the same as 'let', but the value can be changed
var y = 5
// declaring a variable with explicit type
int z = 7
// declaring an array
int array a
// arrays can be initialized as well.
// however this is just a shorthand assignment
int array b = [1, 2, 3]
// but it allows having constant arrays
constant c = ["A", "B", "C"]
// Initialized arrays provide a length attribute which is equal to the initial amount of items in the array
// It is not updated when you modify the array and mostly intended for iteration
constant blen = b.length

// inside a function
function getUnitInfo(unit u)
	let p = u.getOwner()
	var name = u.getName()
	print(name)
	var x = u.getX()
	var y = u.getY()
	let sum = x + y
```


With these basic concepts you should be able to do anything you already know from Jass.
We will touch on more advanced topics in the next chapters.

### Expressions

The Wurst expressions in semi-formal syntax:
```wurst
Expr ::=
      Expr + Expr       // addition
    | Expr - Expr       // subtraction
	| Expr * Expr       // multiplication
    | Expr / Expr       // real division
    | Expr div Expr     // integer division
    | Expr % Expr       // real modulo
    | Expr mod Expr     // integer modulo
    | Expr and Expr     // boolean and
    | Expr or Expr      // boolean or
    | Expr ? Expr : Expr // Conditional expression / ternary operator
    | Expr < Expr       // smaller than
    | Expr <= Expr      // smaller or equal than
    | Expr > Expr       // greater than
    | Expr >= Expr      // greater than or equal
    | Expr == Expr      // equal
    | Expr != Expr      // unequal
    | - Expr            // unary minus
    | not Expr          // invert expression
    | IDENTIFIER                    // variable access
    | IDENTIFIER(Expr, Expr, ...)   // function call
    | Expr . IDENTIFIER             // member variable
    | Expr . IDENTIFIER(Expr, Expr, ...)    // member function
    | Expr .. IDENTIFIER(Expr, Expr, ...)   // member function, same as single dot
                                            // but returns the receiver type
    | new IDENTIFIER(Expr, Expr, ...)       // constructor call
    | destroy Expr                  // destroy object
    | Expr castTo Type              // casting
    | Expr instanceof Type          // instance checking
    | begin                         // multi-line lambda expression
        Statements
        end // statement expr
    | (param1, param2, ...) -> Expr  // anonymous function
    | (Expr)                        // parantheses
```


An _IDENTIFIER_ is a name of a variable or function. It may start with letters and may
contain letters, numbers and underscores.

**Note**: For calls to generic functions refer to the Generics chapter.


### Cascade operator

The cascade operator `..` is similar to the normal `.` operator and can be used for calling methods, but instead of returning the result
of the called method, the cascade operator returns the receiver. This makes it possible to easily chain function calls on the same variable.
Take a look at the following example:
```wurst
CreateTrigger()
    ..registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
    ..addCondition(Condition(function cond))
    ..addAction(function action)
```
The above code is equivalent to:
```wurst
let temp = CreateTrigger()
temp.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER)
temp.addCondition(Condition(function cond))
temp.addAction(function action)
```

### Conditional operator

The conditional operator (also called ternary operator) has the form `condition ? ifTrue : ifFalse`.
First the condition is evaluated.
If the condition is `true`, then the `ifTrue` expression is evaluated and the result of the overall expression.
Otherwise the `ifFalse` expression is evaluated.

The type of the expression is the union-type of both result-expressions, meaning that both expressions must have a type that is allowed where the conditional expression is used.

The conditional operator should only be used in some rare cases.
A typical use is as a shorthand for choosing between two alternatives like in the following example:

```wurst
// handle the special case of one enemy left:
let enemyCount = n.toString() + " " + (n == 1 ? "enemy" : "enemies")
```

### Statements

Wurst adds some modern statements to Jass' existing ones, like switches and for-loops.

### If Statement
The if statement is a conditional control structure that executes certain parts of code when a condition is met.
An optional **else** case can be provided to also handle false results.
```wurst
// simple if
if u.getHP() < 100
    print("unit s hurt") // the content inside the if has to be indented

// if with else case
if x > y
    print("x is greater than y")
else if x < y // closing the if, opening the elseif-block
    print("x is less than y")
else // handle remaining cases
    print("x is equal to y")

// Finish the if by indenting back

// More examples:

if caster.getOwner() == BOT_PLAYER
    print("caster owned by BOT_PLAYER")

if GetSpellAbilityId() == SPELL_ID
    flashEffect(getSpellTargetPos(), FX_PATH)

if x > 0 and x < 100 and y > 0 and y < 100
    print("inside box")
```
### Switch Statement
```wurst
// i is of type int
switch i
    case 1
        print("1")
    case 3
        print("3")
    case 88
        print("88")
    default
        print("not implemented")
```
As you see in the example, a switch statement is basically a nicer syntax for
nesting ifs and else ifs, with the special default case.

**Abbreviations**: Several cases can be combined using a pipe symbol (`|`) and enum members can be referenced by just using the case name instead of the full name.

```wurst
enum Animal
    Sheep
    Dog
    Eagle

function canFly(Animal animal) returns boolean
    switch animal
        case Dog | Sheep
            return false
        case Eagle
            return true
```


### Loops
```wurst
while a > b // while-loop with input condition
    ...

for i = 0 to 10 // for-loop
    ...

for i = 0 to 10 step 2 // for-loop with step 2
    ...

for i = 10 downto 0 // wurst can also count downwards
    ...

for u in someGroup // loop over all units in a group
    ...

for u from someGroup // loop over all units in group and remove the units from the group
    ...

for i in myList
    ...
```

### For Loops

The for-in loop lets you iterate over any object which provides an iterator.
A for-in loop can be transformed into an equivalent while-loop very easily:

```wurst
for A a in b
    Statements

// is equivalent to:
let iterator = b.iterator()
while iterator.hasNext()
    A a = iterator.next()
    Statements*
iterator.close()
```

**Note** that iterator.close() will also be called before any return statement inside the body of the while loop.

If you already have an iterator or want to access further functions of the iterator you can use the for-from loop.
The translation is very similar:
```wurst
let iterator = myList.iterator()
for segment from iterator
    //Statements
iterator.close()

// is equivalent to:
let iterator = myList.iterator()
while iterator.hasNext()
    segment = iterator.next()
    //Statements
iterator.close()
```
**Note** that you have to close the iterator yourself.

### Skip

The most basic statement is the _skip_ statement. It has no effect and can be useful in rare cases.

### Iterators


You can provide Wurst with an iterator for your desired type by providing a set of functions. By providing an iterator, the type can be used in for-loops:
-  function **hasNext()** returns boolean (return if there is another object left)
-  function **next()** returns TYPE (return the next element for your type)

With this two functions you get an iterator which can be used in for-from loops.

To make a type usable in for-in loops you have to provide

-  function **iterator()** returns Iterator

for your type, that returns the object for the iteration.
This can either be a handle, like in the group-iterator or an object like the List-iterator.
Your iterator should also provide a close function which clears all resources allocated by it.
Most often the iterator just destroys itself in the close function.

Look at the 2 examples from the standard library:

#### Group-Iterator
```wurst
public function group.iterator() returns group
    // return a copy of the group:
    bj_groupAddGroupDest = CreateGroup()
    ForGroup(this, function GroupAddGroupEnum)
    return bj_groupAddGroupDest

public function group.hasNext() returns boolean
    return FirstOfGroup(this) != null

public function group.next() returns unit
    let u = FirstOfGroup(this)
    GroupRemoveUnit(this, u)
    return u

public function group.close()
    DestroyGroup(this)
```
As you can see, the iterator is a group, therefore the group needs to provide the functions mentioned above.
This is done via extension functions.

#### LinkedList-Iterator

```wurst
public class LinkedList<T>
    ...

    // get an iterator for this list
    function iterator() returns LLIterator<T>
        return new LLIterator(dummy)

class LLIterator<Q>
    LLEntry<Q> dummy
    LLEntry<Q> current

    construct(LLEntry<Q> dummy)
        this.dummy = dummy
        this.current = dummy

    function hasNext() returns boolean
        return current.next != dummy

    function next() returns Q
        current = current.next
        return current.elem

    function close()
        destroy this
```
The LinkedList Iterator is a little different, because it's a class. Still it provides the needed functions and is therefore viable as iterator.
It also contains some members to help iterating. A new instance if LLIterator is returned from the .iterator() function of the LinkedList.

### Assignment Shorthands

WurstScript supports the following shorthands for assignments:
```wurst
i++         // i = i + 1
i--         // i = i - 1
x += y      // x = x + y
x -= y      // x = x - y
x *= y      // x = x * y
x /= y      // x = x / y
```
Because these shorthands simply get translated into their equivalents, they can
be used with overloaded operators, too.

### Packages
As mentioned above every code-segment written in Wurst has to be inside a _package_,
packages define the code organization and separate name-spaces.
Packages can also have global variables - every variable that is not inside another block (function/class/module)
is declared global for that package.

When creating a new `.wurst` file in vscode, the package header is automatically added:

```wurst
package SomeVSCodePackage
...
```

### Imports

Packages can import other packages to access classes, functions, variables, etc. that are defined public.

```wurst
// declaring
package SomePackage

// importing
package Blub
import SomePackage
import AnotherPackge // importing more than 1 package
import public PackageX // public import (see below)
```

The import directive searches for packages in the wurst folder of your project and all linked projects from your wurst.dependencies file.

### import public

By default imported names are not exported by the package. For example the following will not compile:
```wurst
package A
public constant x = 5

package B
import A

package C
import B
constant z = x
```

The variable x is usable in package B but it is not exported from B. So in package C we cannot use the variable x.
We could fix this by simply importing A into C but sometimes you want to avoid those imports.
Using public imports solves this problem because they will export everything that is imported. Thus the following code will work:

```wurst
package A
public constant x = 5

package B
import public A

package C
import B
constant z = x
```

### The special Wurst package

By default, every package imports a package named Wurst.wurst which is defined in the standard library. This package exports some
packages which are used very often.

If you do not want this standard import you can disable it by importing a package NoWurst. This directive is mainly used to
resolve some cyclic dependencies in the standard library.


### Public declarations
All members of a package are private by default.
If you want to make them visible inside packages that import that package you have to add the keyword "public".

### Constants
You can declare a variable constant to prohibit changes after initialization.
This has no impact on the generated code but throws an error when trying to compile.



### Examples
```wurst
package First
int i // (private by default) Visible inside the package
public int j // public, gets exported

package Second
import First

int k = i // Error
int m = j // Works, because j is public


package Foo
constant int myImportantNumber = 21364 // has to be initialized with declaration

function blub()
    myImportantNumber = 123 // Error

public constant int myPrivateNumber2 = 123 // Correct keyword order
```


### Init blocks
Another package feature are init blocks.
Every package can have one or multiple init blocks anywhere inside it.
All operations inside the init block of a package are executed at mapstart.

At the beginning of an init block you can assume that all global variables inside the
current package are initialized.
```wurst
package MyPackage
init
    print("this is the initblock")
```

*Note:* Wurst executes each package init in a separate thread using `TriggerEvaluate` to determine whether the package was successfully initialized.
If an issue occurs inside the package init (exception, excessive computation) the map initialization will stop and an error is displayed.


### Initialization and initlater

The initialization rules for Wurst are simple:

1. Inside a package initialization is done from top to bottom.
    The initializer of a package is the union of all global variable static initializers
    (including static class variables) and all init blocks.
2. If package A imports package B and the import is not a `initlater` import,
    then the initializer of package B is run before A's.
    Cyclic imports without `initlater` are not allowed.

In general you should avoid cylcic dependencies between packages by moving the affected code. However if you must, you can manually define which package can be
initialized later by adding the keyword `initlater` to the import of the package:

```wurst
package A
import initlater B
import public initlater C
import D
```
Here only package `D` is guaranteed to be initialized before package `A`.
Packages `B` and `C` are allowed to be initialized later.

### Configuring Packages

Global variables and functions can be configured.
Configuration is done via configuration packages.
Each package has at most one configuration package and every configuration package configures exactly one package.
The relation between a package and its configuration package is expressed via the following naming convention:
For a package named `Blub` the configuration package must be named `Blub_config`.

Inside a configuration global variables can be annotated with the `@config` annotation.
This has the effect that the variable with the same name in the original package will be overridden with
the variable in the configuration package.
In the original package, the variable should be annotated with `@configurable` to signal that it is safe to configure.
Here is an example:
```wurst
package Example
@configurable int x = 5

package Example_config
@config int x = 42
```
Configuring functions works basically the same:
```wurst
package Example
@configurable public function math(int x, int y) returns int
    return x + y


package Example_config
@config public function math(int x, int y) returns int
    return x*y
```

## Classes

Classes are easy, powerful and very helpful constructs. A _class_ defines data and related functions working with this data. Take a look at this small example:


```wurst
let dummyCaster = new Caster(200.0, 400.0)
dummyCaster.castFlameStrike(500.0, 30.0)
destroy dummyCaster
```

In this example we created a Caster named "dummyCaster" at the location(200, 400).
Then we ordered **dummyCaster** to cast a flame strike at another position and finally we destroyed **dummyCaster**.

This example shows you how to create a new object (line 1), invoke a function on an object (line 2) and how to destroy an object (line 3).
But how can you define a new object type like "Caster"? This is where classes come in. A class defines a new kind of object.
A class defines variables and functions, which every instance of this class should understand.
A class can also define how a new object is constructed (_construct_) and what should happen, when it is destroyed (_ondestroy_).

Defining a caster-class might look like this:

```wurst
class Caster // opening the class-block. "Caster" is the name of the class
    unit u // class variables can be defined anywhere inside a class

    construct(real x, real y)
        u = createUnit(...)

    function castFlameStrike(real x, real y)
        u.issueOrder(...)

    ondestroy
        u.kill()
```

### Constructors

WurstScript allows you to define your own constructors for each class. A constructor
is a function to _construct_ a new instance of a class.
The constructor is called when creating the class via the _new_ keyword and allows operations being done to the class-instance before returning it.

```wurst
class Pair
    int a
    int b

    construct(int pA, int pB)
        a = pA
        b = pB

    function add() returns int
        return a + b


function test()
    let pair = new Pair(2, 4)
    let sum = p.add()
    print(sum)
```



In this example the constructor takes two integers a and b as parameters and sets the class variables to those.
You can define more than one constructor as long as the parameters differ.

```wurst
class Pair
    int a
    int b

    construct(int pA, int pB)
        a = pA
        b = pB

    construct(int pA, int pB, int pC)
        a = pA
        b = pB
        a += pC
        b += pC

function test()
    let p = new Pair(2, 4)
    let p2 = new Pair(3, 4, 5)
```



In this example the class pair has two constructors - one taking 2 and the second one taking three parameters.
Depending on parameter-type and -count Wurst automatically decides which constructor to take when using "new".

### This

The _this_ keyword refers to the current instance of the class on which the function was called. This also allows us to name the parameters the same as the class variables.
However it can be left out in classfunctions, as seen above.
```wurst
class Pair
    int a
    int b

    // With the this keyword we can access the classmembers
    construct(int a, int b)
        this.a = a
        this.b = b
```

### ondestroy

Each class can have one _ondestroy_ block. This block is executed before the instance is destroyed.
Ondestroy blocks are defined as previously shown

```wurst
class UnitWrapper
    unit u
    ...

    ondestroy
        u.remove()
```


### Static Elements

You can declare variables and functions as _static_ by writing the keyword "static" in front of the declaration. Static variables and functions belong to the class whereas
other elements belong to instances of the class. So you can call static functions without having an instance of the class.

```wurst
class Terrain
    static var someVal = 12.

    static int array someArr

    static function getZ(real x, real y) returns real
        ...

function foo()
    let z = Terrain.getZ(0, 0) // call with $Classname$.$StaticFunctionName$()
    let r = Terrain.someVal // Same with members
    let s = Terrain.someArr[0]
```

### Array Members

Wurstscript supports sized arrays as classmembers by translating it to SIZE times arrays and then resolve the array in a get/set function via binary search.

Example Usage:

```wurst
class Rectangle
    Point array[4] points

    function getPoint(int index)
        return points[index]

    function setPoint(int index, Point nP)
        points[index] = nP
```

### Visibility Rules

By default class elements are visible everywhere. You can add the modifiers _private_ or _protected_ in front of a variable or function definition to restrict its visibility.
Private elements can only be seen from within the class. Protected elements can be seen within the enclosing package and in subclasses.

### Inheritance
A class can _extend_ an other class. The class then inherits all the non-private functions and variables from that class
and can be used anywhere where the super class can be used.

Constructors of the class have to specify how the super class should be constructed. This is done using a _super_ call,
which defines the arguments for the super constructor. There can not be any statement before this call.

If a constructor does not provide a super call, the compiler tries to insert a super call with no arguments.

Functions inherited from super classes can be overridden in the subclass. Such functions have to be annotated with _override_.

### Example
```wurst
class Missile
    construct(string fx, real x, real y)
        // ...

    function onCollide(unit u)


// a fireball missile is a special kind of missile
class FireballMissile extends Missile
    // we construct it using a fireball fx
    construct(real x, real y)
        super("Abilities\\Weapons\\RedDragonBreath\\RedDragonMissile.mdl", x, y)
    // a fireball does some special things when it collides
    // with a unit, so we override the onCollide method
    override function onCollide(unit u)
        // create a big explosion here ;)
```

### Typecasting

In order to typecast, you use the _castTo_ operator

You need typecasting for several reasons.

One being to save class instances and for example attaching them onto a timer, like done in TimerUtils.wurst
This process can also be reversed (casting from int to a classtype).

```wurst
class Test
    int val

init
    let t = new Test()
    let i = t castTo int
```


Typecasting is sometimes useful when using subtyping. If you have an object of static type A but know
that the dynamic type of the object is B, you can cast the object to B to change the static type.

```wurst
class Shape

class Triangle extends Shape
    function calculate()
        ...

init
    // Triangle is assignable to Shape
    Shape myShape = new Triangle()
    // Since we know that 'myShape' is actually of type Triangle, so we can safely cast it
    Triangle tri = myShape castTo Triangle
    // Now we can call functions from class Triangle
    b.calculate()
```


_Note_: You should avoid castTo whenever possible. Casts are not checked at runtime so they can go horribly wrong.
Casts can be avoided by using high level libraries and object oriented programming.


### Dynamic dispatch

Wurst features dynamic dispatching when accessing class instances.
What this means is simple: If you have a classinstance of a subclass B, casted into a variable of
the superclass A, calling a function with that reference will automatically call the overridden function from
the original type.
It is easier to understand with an example:

### Example 1
```wurst
class Recipe
    function printOut()
        print("I'm a recipe")

class SwordRecipe extends Recipe
    override function printOut()
        print("I'm a sword recipe")

init
    Recipe recipe = new SwordRecipe()
    recipe.printOut()
    // This will print "I'm a sword recipe", even though it's a type Recipe variable
```
### Example 2
```wurst
class A
    string name

    construct(string name)
        this.name = name

    function printName()
        print("Instance of A named: " + name )


class B extends A

    construct(string name)
        super(name)

    override function printName()
        print("Instance of B named: " + name )

init
    A a = new B("first") // This works because B extends A
    a.printName() // This will print "Instance of B named: first", because a is an Instance of B.
```

This is especially useful when iterating through ClassInstances of the same supertype,
meaning you don't have to cast the instance to it's proper subtype.

### super calls

When you override a method you can still call to the original implementation by using the *super* keyword. This is useful since
subclasses often just add some functionality to its base classes.

As an example consider a fireball spell for which we want to create a more powerful version:
```wurst
class FireBall
    ...
    function hitUnit(unit u, real damage)
        ...

class PowerFireBall extends FireBall
    ...
    // here we override the original behavior of the hitUnit function
    override function hitUnit(unit u, real damage)
        // first we create a big explosion effect
        createSomeBigExplosionEffect(u)
        // then we call the original hitUnit function but with doubled damage
        super.hitUnit(u, damage * 2)
```
The **super** keyword also should be used when defining custom constructors. The Constructor of the superclass has to be called in the constructor of the subclass. When no super constructor call is given, the compiler will try to call a constructor with no arguments. If no such constructor exists, then you will get an error like: "Incorrect call to super constructor: Missing parameters."
```wurst
class Missile
    ...
    construct(vec2 position)
        ...

class TimedMissile extends Missile
    ...
    construct(vec2 position, real duration)
        // Here the constructor of the superclass is called
        // The super statement has to be the first statement in the constructor of the subclass
        super(position)
        ...
```

### instanceof

In Wurst you can check the type of a classinstance with the _instanceof_ keyword.

_Note_: You should avoid instanceof checks whenever possible and prefer object oriented programming.

The instanceof expression "o instanceof C" returns true, if object o is a subtype of type C.

It is not possible to use instanceof with types from different type partitions, as instanceof
is based on typeIds (see following chapter). This is also the reason why you cannot use instanceof
to check the type of an integer.

The compiler will try to reject instanceof expressions, which will always yield true or always yield false.

###Example
```wurst
class A

class B extends A

init
    A a = new B()

    if a instanceof B
        print("It's a B")
```

### typeId

*NOTE*: typeIds are an experimental feature. Try to avoid using them.

Sometimes it is necessary to check the exact type of an object. To do this you can write "a.typeId" if a is an object or "A.typeId" if A is a class.
```wurst
// check if a is of class A
if a.typeId == A.typeId
    print("It's an A")
```

The typeId is an integer which is unique for each class inside a type partition.

### type partitions

The type partition of A is the smallest set containing A such that for all classes or interfaces T1 and T2 it holds that:
If T1 is in the set and T1 is a subtype or supertype of T2, then T2 is also in the set.
Or expressed differently: A and B are in the same partition if and only if their type hierarchies are somehow connected.


### Abstract Classes

An _abstract_ class is a class, that is declared abstract — it may or may not
include abstract functions. You cannot create an instance of an abstract class,
but you can create subclasses for it which are not abstract.

An abstract function is declared with the keyword 'abstract' and by leaving out
an implementation.
```wurst
abstract function onHit()
```

Abstract classes are similar to interfaces, but they can have own, implemented
functions and variables like normal classes.

The advantage of an abstract class is, that you can reference and call the
abstract functions inside the abstract class, without having a vlid
implementation.

Take Collision-Responses as example. You have several Bodies in your map, and
you want each of them to behave differently.
You could do this by centralizing the updating function, or by using abstract
classes like so:
```wurst
abstract class CollidableObject

    abstract function onHit()

    function checkCollision(CollidableObject o)
        if this.inRange(o)
            onHit()
            o.onHit()

class Ball extends CollidableObject

    override function onHit()
        print("I'm a ball")

class Rect extends CollidableObject

    override function onHit()
        print("I'm a Rect")
```


Because CollidableObject requires it's subclasses to implement the function
onHit; it can be called within the abstract class and without knowing it's
type.

If a subclass of an abstract class does not implement all abstract functions
from its superclass, it has to be abstract, too.


### Interfaces

```wurst
interface Listener
    function onClick()

    function onAttack(real x, real y) returns boolean


class ExpertListener implements Listener
    function onClick()
        print("clicked")


    function onAttack(real x, real y) returns boolean
        flashEffect(EFFECT_STRING, x, y)
```


An _interface_ is a group of related functions with empty bodies.
If a class implements a certain interface it has to replace all the empty functions from the interface.
A class can _implement_ multiple interfaces, meaning that it complies to more interface requirements at the same time.
```wurst
class ExampleClass implements Interface1, Interface2, ...
    // all functions from the implemented interfaces
```

With interfaces (and modules if implicit) you can now up- and downcast any Class that implements it.
This is especially useful for saving all instances from classes that inherit 1 interface in only 1 List/Array

### Defender methods

An interface can have functions with an implementation. This implementation is used, when a class implementing the interface
does not provide an implementation of the method itself. Usually this is not needed but in some cases it might
be necessary in order to evolve an interface without breaking its implementing classes.



### Generics

Generics make it possible to abstract from specific types and only program with placeholders
for types. This is especially useful for container types (e.g. Lists) where we do not want to code a
ListOfA, ListOfB, ListOfC for every class A, B, C which we need a list for.
Think of it as creating a general List with all it's functionality, but for an
unknown type, that gets defined when creating the instance.

With generics we can instead write only one implementation for lists and use it with all types.
Generic type parameter and arguments are
written in angled  bracket s  (<  an d >) after the identifier.


```wurst
// a generic interface for Sets with type parameter T
interface Set<T>
    // adds an element to the set
    function add(T t)

    // removes an element from the set
    function remove(T t)

    // returns the number of elements in the set
    function size() returns int

    // checks whether a certain element is in the set
    function contains(T t) returns boolean

class SetImpl<T> implements Set<T>
    // [...] implementation of the interface
```
If we have a class defined like this, we can then use it with a concrete type (e.g. Missile):
```wurst
// create a set of missiles
Set<Missile> missiles = new SetImpl<Missile>();
// add a missile m
missiles.add(m);
```
Generic parameters in Wurst can be bound to integers, class types and interface types directly.
In order to bind generic parameters to primitive-, handle- and tuple types you have to provide the functions
```wurst
function [TYPE]ToIndex([TYPE] t) returns int

function [TYPE]FromIndex(int index) returns [TYPE]
    return ...
```
The typecasting functions for primitive- and handle types are provided in _Typecasting.wurst_ using the fogstate bug.
```wurst
function unitToIndex(unit u) returns int
    return u.getHandleId()

function unitFromIndex(int index) returns unit
    data.saveFogState(0,ConvertFogState(index))
    return data.loadUnit(0)
```
### Generic Functions

Functions can use generic types. The type parameter is written after the name of the function.
In the following example the function *forall* tests if a predicate is true for all elements in a list.
The function has to be generic, because it has to work on all kinds of lists.
```wurst
function forall<T>(LinkedList<T> l, LinkedListPredicate<T> pred) returns boolean
    for x in l
        if not pred.isTrueFor(x)
            return false
    return true

// usage:
    LinkedList<int> l = ...
    // check if all elements in the list are even
    if forall<int>(l, (int x) -> x mod 2 == 0)
        print("true")
```
When calling a generic function, the type arguments can be omitted if they can be inferred
from the arguments to the function:
```wurst
...
if forall(l, (int x) -> x mod 2 == 0)
    ...
```
Extension functions can also be generic, as shown by the following example:
```wurst
function LinkedList<T>.forall<T>(LinkedListPredicate<T> pred) returns boolean
    for x in this
        if not pred.isTrueFor(x)
            return false
    return true

// usage:
    ...
    if l.forall((int x) -> x mod 2 == 0)
        ...
```

### Modules

A _module_ is a small package which provides some functionality for classes. Classes can _use_ modules to inherit the functionality of the module.

You can use the functions from the used module as if they were declared in the class. You can also _override_ functions defined in a module to adjust its behavior.

If you know object oriented languages like Java or C#: Modules are like abstract classes and using a module is like inheriting from an abstract class but *without the sub-typing*. Modules encapsulate behaviour that you might want to add to several classes, without overhead and hierarchical structure.

### Example 1

In this example we just have a class which uses a module A. The resulting program behaves as if the code from module A would be pasted into Class C.

```wurst
module A
    public function foo()
        ...

class C
    use A
```

### Example 2

Modules are more than just a mechanism to copy code. Classes and modules can override functions defined in used modules:

```wurst
// a module to store an integer variable
module IntContainer
    int x

    public function getX() returns int
        return int

    public function setX(int x)
        this.x = x

// a container which only stores positive ints
module PositiveIntContainer
    use IntContainer

    // override the setter to only store positive integers
    override function setX(int x)
        if x >= 0
            IntContainer.setX(x)
```

### Visibility & Usage Rules

 * Variables of modules are always private
 * private functions are only usable from the module itself
 * each function of a module must be declared public or private
 * if a class uses a module it inherits only the public functions of the module
    * you can use a module with *private* (not implemented yet). This will let you use the functionality of the module without exposing its functions to the outside.


### Overriding Functions

 * You can *override* functions which are defined in used modules by writing the override keyword in front of a function.
 * If two modules are used, which have the same function, it *must* be overridden by the underlying class or module in order to avoid ambiguousness (of course this is only possible if the function signatures match. We are thinking about a solution for this)
 * private functions cannot be overridden

### Abstract Functions

Modules can declare abstract functions: Functions without a given implementation. Abstract functions have to be implemented by the underlying classes.

### Thistype

You can use _thistype_ inside a module to refer to the type of the class which uses the module. This can be useful if you need to cast the class to an integer and back.

## Advanced Concepts

### Enums

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


### Tuple Types

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



### Extension Functions

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

### Vararg Functions

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


### Lambdas and Closures

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

### Function Overloading

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


### Operator Overloading

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

### Annotations

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

### Compiletime Execution

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
Many functions from the `common.j` are implemented in the Wurst compiler to emulate the respective function behavior in the game for use at compiletime and unit tests.

The currently implemented functions can be found their respective classes in the [Providers](https://github.com/wurstscript/WurstScript/tree/68e0abc2f2c1913aabad4cc15e3623778db9e022/de.peeeq.wurstscript/src/main/java/de/peeeq/wurstio/jassinterpreter/providers) package.


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
In proper code you should generate your IDs so you don't have to deal with them directly. See [this blog entry](https://wurstlang.org/news/bestofthewurst3.html#objectediting%20)
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

### Automated Unit Tests

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

## Coding Conventions
Coding Conventions describe a set of rules that aren't directly enforced as errors by the language, but still commonly accepted guidelines among developers to produce consistently structured and formatted code.

### Source Code Organization

#### Directory structure

All your packages should be inside the `wurst/` folder of your project. You can have any custom folder structure inside the `wurst/` folder, as packages are not affected by it. Folders should be used to group together packages and files.

#### Source file names

If a `.wurst` file contains a single class or tuple (with potentially closely related declarations), its name should be the same as the name of the class or tuple. If a file contains multiple classes, tuples or just top-level declarations, choose a name describing what the file contains. multiple words, use camel case (e.g. `ClosureEvents.wurst`).

#### Source file organization

Placing multiple declarations (classes, tuples, top-level functions) in the same Wurst source file is encouraged as long as these declarations are closely related to each other semantically and the file size remains reasonable (not exceeding a few hundred lines).

#### Class layout

In general, the contents of a class are sorted in the following order:
* Variable member declarations
* Constructors
* Function declarations

Do not sort the function declarations alphabetically, and do not separate regular functions from extension methods. Instead, put related stuff together, so that someone reading the class from top to bottom would be able to follow the logic of what's happening. Choose an order (either higher-level stuff first, or vice versa) and stick to it. The API of a package should be at the top, immediately visible once opening it, including a hot doc description.

Put nested classes next to the code that uses those classes. If the classes are intended to be used externally and aren't referenced inside the class, put them in the end.

#### Interface implementation

When implementing an interface, keep the implementing members in the same order as members of the interface (if necessary, interspersed with additional private methods used for the implementation)

#### Overload layout

Always put overloads next to each other in a class.

### Naming Rules

Wurst follows naming conventions similar to Java. In particular:

Names of packages and classes always start uppercase and use camel case (MyExamplePackage).

Names of classes start with an upper case letter and use camel case.

Names of tuples start with a lower case letter and use camel case.

Names of functions, properties and local variables start with a lower case letter and use camel humps and no underscores.

Names of top-level constants (marked with `constant` or `let`) should use uppercase underscore-separated names.

#### Choosing good names

The name of a class or tuple is usually a noun or a noun phrase explaining what the class is: `LinkedList`, `InstantDummyCaster`.

The name of a function is usually a verb or a verb phrase saying what the method does: `add`, `castImmediate`. The name should also suggest if the method is mutating the object or returning a new one.

The names should make it clear what the purpose of the entity is, so it's best to avoid using meaningless words (Manager, Wrapper etc.) in names.

When using an acronym as part of a declaration name, capitalize it if it consists of two letters (`IOTaskExecutor`); capitalize only the first letter if it is longer (`LzwCompressor`, `Wc3String`).

### Formatting

In most cases, Wurst follows the Java coding conventions.

Use either 4 spaces or tabs for indentation. But don't mix the two in the same file.

#### Horizontal whitespace

Put spaces around binary operators (`a + b`).

Do not put spaces around unary operators (`a++`)

Put single spaces between control flow keywords (`if`, `switch`, `for` and `while`) and the following expression. Do not use parenthesis unless it improves the readability of big terms.

Do not put a space before an opening parenthesis in a method declaration or method call.

```wurst
function foo(int x)

init
    foo(1)
```

Never put a space after `(`, `[`, or before `]`, `)`.

Never put a space around `.` or `..`

Put a space after `//`: `// This is a comment`

Do not put spaces around angle brackets used to specify type parameters: `class HashMap<K, V>`

As a general rule, avoid horizontal alignment of any kind. Renaming an identifier to a name with a different length should not affect the formatting of either the declaration or any of the usages.

#### Lambda formatting

In lambda expressions, spaces should be used around the `begin` and `end` keywords, as well as around the arrow which separates the parameters from the body. If a call takes a single lambda, it should be passed outside of parentheses whenever possible. Prefer putting lambda parameters as the last argument, so it can be written without `begin` and `end`.

```wurst
list.filter(t -> t > 10)

execute() ->
	hash = hash()
```

### Documentation comments

For documentation comments, also known as hot doc, that will show up in auto-completion, place the opening `/**` and close them with `*/`. Short comments can be placed on a single line.

`/** This is a short documentation comment. */`

Wurst does not provide support @param and @return tags right now. Instead, you should incorporate the description of parameters and return values directly into the documentation comment, and add links to parameters wherever they are mentioned.

### Avoiding warnings

Address any warnings the compiler shows for your code. If you need to ignore a warning for an intentionally unused variable, prefix it with an underscore `_`.

### Idiomatic use of language features

#### Local variable declaration

Prefer declaring locals at the location where they are needed over declaring them all at the top like in Jass. Merge declarations and first assignments if sensible.

#### Type inference

Prefer using `var` and `let` over explicit types whenever possible.

#### Immutability

Prefer using immutable data to mutable. Always declare local variables and members as `let` rather than `var` if they are not modified after initialization.

#### Using loops

Prefer using higher-order functions (`filter`, `map` etc.) to loops. Exception: `forEach` (prefer using a regular for loop instead, unless the receiver of `forEach` is nullable or `forEach` is used as part of a longer call chain).

When making a choice between a complex expression using multiple higher-order functions and a loop, understand the cost of the operations being performed in each case and keep performance considerations in mind.

### Unit Testing

Prefer test driven development if the feature is not too dependent on wc3 game mechanics. Create small, self-contained functions, annotate them with `@Test` individually and give them a descriptive name.
Make sure to have at least one **assertion** inside your test to verify the behavior.

Tests should either be placed at the end of a package, or into a separate package suffixed `Tests` which will be ignored for autocomplete suggestions. Code and Tests should not be mixed.
