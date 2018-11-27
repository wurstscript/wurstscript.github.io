---
title: Coding Conventions
sections:
- Source Code Organization
- Naming Rules
- Formatting
- Documentation comments
- Avoiding warnings
- Idiomatic use of language features
---

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

### Documentation comments (hot doc)

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
