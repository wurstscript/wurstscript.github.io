---
title: Linked List
sections:
- Intro
- Basic Usage
- Other Examples
- Factory Functions
- High Level Lambdas
- Comparators
---

### Intro

A linked list is a linear data structure where each element is a separate object. The objects are then linked together by saving references to their neighbours.
The `LinkedList` inside the standard library is a doubly linked list and implements numerous functions so that it can be used as a stack or queue, replacing other packages with very similar code.

### Basic Usage

Just like most other data structures, `LinkedList<T>` is generic, with `T` being the type of the elements you want to save.

```wurst
@Test function testMap()
	let list = new LinkedList<int>
	list.add(1, 2, 3, 4, 5)
	// Weakly shuffles the entries
	list.shuffle()
	// Gets and removes the last element
	list.pop()
	list.size().assertEquals(4)
```

### Other Examples

Using the `TypeCasting` package, which is imported by default, we can also use jass types other than int for T.
For example a list of units by using `unit` as type.

```wurst
let unitList = new LinkedList<unit>
```

### Factory Functions

A nice one-liner to create a list from a bunch of values directly, is `asList`.
It takes a variable amount of parameters and returns a `LinkedList` containing them.

```wurst
let numbers = asList(1, 2, 3, 4, 5)
```

### High Level Lambdas

If performance doesn't matter and you want nice a nice high level list api similar to java and kotlin,
use the functions with closure parameters e.g.: `forEach`, `filter`, `map`, `foldl`.
The results and usage are very similar to other languages.
To see this unit test in action, copy it into a package in your project and run it using `F1 -> run unit tests in file`.
The output will be in the Output->wurstLangServer log tab.

```wurst
@Test function coolStuff()
	let myList = asList(1, 2, 3, 4, 5, 6, 7, 8, 9)
	// Keep values that divide evenly by 3, then sum up
	let sum3 = myList.filter(elem -> elem % 3 == 0).foldl(0, (i, q) -> q + i)
	// Map all values to a new list
	let mapped = myList.map(elem -> elem * (5 - elem))
	// Print list. Introduced minus values
	print(mapped.toString())
	// Print sorted the map
	print(mapped.sort().toString())
```

### Comparators

The linked list comes with an in place merge sort that allows you to efficiently sort lists of any type using a `Comparator<T>`.
Int and Real comparators are provided. To sort arbitrary types, implement a custom comparator.
A comparator is a closure that takes two parameters `(p1, p2)` of the same type and returns an integer, indicating the result of the comparison.
If the result is negative, `p1` will be considered smaller than `p2`. If it is positive, `p1` is considered bigger than `p2`.
Zero indicates two indentical values and the position in the resulting list is undefined.
In the following example we sort a list of units by distance to a target. The closest unit is then popped off the list.

```wurst
let ll = new LinkedList<unit>()
let target = vec2(0, 0)
ll.sortWith((u1, u2) -> (u1.getPos().distanceTo(target) - u2.getPos().distanceTo(target)).toInt())
// Get closest unit
let closest = ll.pop()
```

### The Linked List Module

If you encounter the case that you always want to iterate over all instances of a class, creating LinkedList objects and storing the instances in it is unnecessary overhead.

```wurst
// external
let list = new LinkedList<A>
class A
  construct()
    list.add(this)

...
for a in list

```

Instead the class itself can act as a linked list, so that each instance knows it's next and previous neighbour.

```wurst
// better, but still allocating iterators
class A
  use LinkedListModule

...
for a in A

```

### Efficiently Iterating LinkedLists

If you have a for each loop over a list like so:

```wurst
LinkedList<X> list
for elem in list
```

Then wurst will create and destroy an iterator object each time you execute the loop.

If you know that your loop is not nested, you can use the static iterator instead and save the overhead.

```wurst
# better, but limited
LinkedList<X> list
for elem from list.staticItr()
```

**Note** that it has to be a for .. *from* loop now.

