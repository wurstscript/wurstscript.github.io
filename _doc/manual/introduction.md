---
title: 介绍
sections:
- 概念
- 值与类型
- 语法
- 基础
---

### 概念

WurstScript是一种命令式的，面向对象的，静态类型的，对初学者友好的编程语言。

WurstScript提供了一个舒适的工作流程来生成可读和可维护的代码。 易于使用和无压力地图开发优先于最终产品的执行速度。 WurstScript易于使用和学习，特别是对于Jass或任何其他编程语言的先前知识，同时仍然对非程序员保持简单和易读性。

虽然我们知道WurstScript不会替换WC3映射场景中的vJass（原因之一是vJass脚本无法轻松移植），但我们仍然希望它能成为一个非常好的选择，特别是对于那些试图学习Jass的人。

> 请注意，本手册不是新手入门教程，需要读者具有编程知识。 
[点此查看入门教程](tutorials.html)

### 值与类型

WurstScript是一种静态类型语言。这意味着变量只能保存相同类型的值。
此外，由于所有类型都是在编译时确定的，不正确的赋值会抛出错误。

Wurst有与Jass相同的5种基本变量类型：**null, boolean, int, real, string**。

在这个例子中，你可以看到左侧变量的静态类型。如果右侧的赋值与左侧不属于同一类型，则会引发错误。
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

### 语法

WurstScript使用基于缩进的语法来定义块。您可以使用空格或制表符进行缩进，但将两者混合会引发警告。
在下面我们使用单词“tab”来指代制表符或4个空格字符。

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

一般而言，除了以下情况，换行符会在语句末出现：

- 当一行语句以 `(` 或 `[` 结束时。
- 当下一行以 `)`, `]`,`.`, `..`, 或 `begin` 开始时。
- 当行尾以下方符号结束时：
    `,`, `+`, `*`, `-`, `div`, `/`, `mod`, `%`, `and`, `or`, `?`, `:`

您可以使用它们来打破一些过长的表达式或长参数列表，或链式方法调用：
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

WurstScript试图避免过度冗长的语句和符号，以保持代码的简洁和可读性。

### 基础

以下是Wurst的核心功能的简要概述，阅读这些概述以便你可以立即开始编程。

关于每个主题的更详细的文档，请参阅页面下方的专用章节。

Wurst代码被组织成**包**。 任何一段代码都必须放在包中才能被识别。
包可以**导入**其他包，以访问导入包中定义的变量，函数和类。
包有一个可选的_init_块，在地图运行时执行。

我们来看一个经典的 **Hello World** 示例。

```wurst
package HelloWurst
// to use resources from other packages we have to import them at the top
import Printing

// the init block of each package is called when the map starts
init
	// calling the print function from the Printing package
	print("Hello Wurst!")
```

如果你运行这个例子，地图加载后将会显示 “Hello Wurst！” 。

正如你可能已经注意到的那样，```import Printing```会引发警告，因为它已经被自动导入。
您可以删除导入，它只是用来说明如何导入包。

有关包的更多信息，请参阅**包**章节。

你仍然可以在包之外使用普通的 Jass语法/代码 - Wurst World Editor 将解析Jass（如果启用了JassHelper，则为vJass），并且编译你的Wurst代码。

有关使用具有混合 Wurst/Jass 代码的地图的更多信息，请参阅“在传统地图中使用Wurst”部分。

#### 函数

**function** 定义由名称，形式参数列表和返回值类型组成。
返回类型是在使用 **returns** 关键字的参数之后声明的。
如果该函数没有返回值，则该部分将被忽略。

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

#### 变量

全局变量可以在包内的任何顶级层声明。
局部变量可以在函数内的任何地方声明。
常量可以使用 _constant_ 或 _let_ 关键字来声明。
变量通过使用 _var_ 关键字或其类型的名称来声明。

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
// however this is just a shorthand assignment and doesn't provide a length attribute
int array b = [1, 2, 3]
// but it allows having constant arrays
constant c = ["A", "B", "C"]

// inside a function
function getUnitInfo( unit u )
	let p = u.getOwner()
	var name = u.getName()
	print( name )
	var x = u.getX()
	var y = u.getY()
	let sum = x + y
```

有了这些基本概念，你应该可以做任何你在Jass学到的事情。
我们将在接下来的章节中谈谈更深入的话题。
