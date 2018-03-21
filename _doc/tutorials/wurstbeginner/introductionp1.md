---
title: 介绍 (Part 1)
sections:
- 欢迎
- 项目结构
- Hello Wurst
---

{: .question}
### *&nbsp;*{: .fa .fa-question-circle} 还没有安装Wurst？跟随 __[安装指引](../start.html)__ 来安装并创建你的Wurst项目。

{: .answer}
### *&nbsp;*{: .fa .fa-exclamation-circle} 这个指引需要读者对函数和变量有**基本**的理解。
------

## 欢迎

欢迎来到WurstScript。本指南是对Wurst工作流程的非正式介绍，也是验证您的安装是否正确的简单方法。
我们将介绍如何构建代码、使用标准库、通过代码创建数据对象以及在魔兽争霸3中运行最终完成的地图。
本指南**不会**解释编程的核心概念，即函数和变量是什么、怎么工作，以及我们应该如何使用它们。

## 项目结构

如果您使用安装程序正确设置了项目，那么您选择的项目文件夹中应该已经生成了许多文件夹和文件。
否则，请现在设置您的项目。

通过再VSCode中打开项目文件夹 （`File` -> `Open Folder ...`） 来加载项目。
打开项目文件夹是很重要的，这样Wurst才能检测到项目。
打开后，您应该能看到如下所示的内容：

![](/assets/images/beginner/ProjectExplorer.png){: .img-rounded .img-responsive}

我们来看看所有的文件：
- **/_build** 包含动态生成的内容，不应该手动更改。
- **/.vscode** 包含将vSCode链接到Wurst工具的 **settings.json** 文件。您可以在此添加其他与项目相关的配置。
- **/imports** 此文件夹内的所有文件将在保存时导入到您的地图中。
- **/wurst** 该文件夹中以 **.wurst .jurst .j** 结尾的所有文件都将被解析为代码。
- **.gitignore** 如果你想让你的wurst项目被作为一个git仓库，这会是一个有用的文件。
- **MyMap.w3x** 一个包含血魔法师的w3x演示地图。
- **wurst_run.args** 定义从VSCode运行地图时使用的一些参数。
- **wurst.build** 包含项目相关的信息。
- **wurst.dependencies** 自动生成的链接库的文件，不应该手动更改。
- **wurst/Hello.wurst** 演示包。

{: .answer}
### *&nbsp;*{: .fa .fa-exclamation-circle} 确保始终至少有一个.wurst文件处于打开状态。否则，vscode内的Wurst插件将不会运行。

## Hello Wurst

打开 **wurst** 文件夹内的 **Hello.wurst** 文件来启动Wurst插件。
通过使用 `>runmap` 命令来运行项目。

![](/assets/images/beginner/RunMap.png){: .img-responsive .img-rounded}

文本 **Hello World** 将会显示在屏幕上。

![](/assets/images/beginner/HelloWorld.png){: .img-responsive .img-rounded}

让我们看看代码：

{: .line-numbers}
```wurst
package Hello

// Wurst demo package
init
	print("Hello World")
```
第一行
```wurst 
package Wurst
```
是包声明。每个文件只包含一个名称类似于文件名但没有后缀的包。除开注释以外，在任何.wurst文件中，包都必须在顶部声明。
```wurst 
// Wurst demo package
init
	print("Hello World")
```
第三行是注释，第四行通过包含 **init** 关键字而不缩进来声明一个 **init** 块。
在关键字后面缩进的所有内容都位于其内容块中，例如第5行中的 **print** 语句，该语句在所有玩家的屏幕上显示给定的文本。
所有块自动在文件末尾结束，例如本例中的 **init** 和 **package** 块。
