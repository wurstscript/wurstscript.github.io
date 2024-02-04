---
title: Introduction Part One
sections:
- Welcome
- Project Structure
- Hello Wurst
---

{: .question}
### *&nbsp;*{: .fa .fa-question-circle} Wurst not installed yet? Follow the __[Setup Guide](../start.html)__ and create a new Project.

{: .answer}
### *&nbsp;*{: .fa .fa-exclamation-circle} This guide expects the reader to have **basic** knowledge of functions and variables.
------

## Welcome

Hello and welcome to WurstScript. This guide is an informal introduction to the Wurst workflow and an easy way to verify your installation.
We will cover how to structure code, use the standard library, create data objects through code and run the final product in warcraft 3.
This guide will **not** explain the core principles of programming, i.e. how functions and variables work and how we use them.

## Project Structure

If you setup your project correctly using the setup app, there will be many folders and files generated in the project folder you chose.
Otherwise setup your project now.
Load the project in VSCode by opening the project folder (`File` -> `Open Folder...`).
It is important to open the project **folder** so that Wurst can detect the project.
After opening you should see something like this:

![](/assets/images/beginner/ProjectExplorer.png){: .img-rounded .img-responsive}

Let's go through all the files:
- **/_build** Contains dynamically generated content and shouldn't be touched by the user, except for copying the compiled map.
- **/.vscode** Contains a **settings.json** file that links vscode to the wurst tools. You can add additional project-wide configuration here.
- **/imports** All files inside this folder will be imported into your map upon saving, retaining paths.
- **/wurst** All files in this folder that end with **.wurst, .jurst, .j** will be parsed as code.
- **.gitignore** Useful template if you want to make your wurst project a git repo as well
- **ExampleMap.w3x** An example tft map containing a Bloodmage
- **wurst_run.args** Defines a set of flags to use when running a map from VSCode
- **wurst.build** Contains project build information
- **wurst.dependencies** Generated file that links libraries. Shouldn't be touched.
- **wurst/Hello.wurst** Demo package

{: .answer}
### *&nbsp;*{: .fa .fa-exclamation-circle} Make sure to always open a .wurst file. Otherwise the vscode plugin might not load.

## Hello Wurst

Open the **Hello.wurst** file inside the **wurst** folder to start the wurst plugin.
Run the project by opening the command console `F1` and using the `>runmap` command.

![](/assets/images/beginner/RunMap.png){: .img-responsive .img-rounded}

The text **Hello World** will be displayed.

![](/assets/images/beginner/HelloWorld.png){: .img-responsive .img-rounded}

Let's take a look at the code:

{: .line-numbers}
```wurst
package Hello

/* Hello and welcome to Wurst!
This is just a demo package.
You can modify it to tests things out
and then later delete it and create your own, new packages.
Enjoy WurstScript? Consider starring our repo https://github.com/wurstscript/WurstScript */
init
	print("Hello World")
```

The first line

```wurst
package Hello
```

is the package declaration. Each file contains exactly one package that is named like the file without the ending. Apart from comments this must be the first line in any .wurst file. The next bunch of lines

```wurst
/* Hello and welcome to Wurst!
This is just a demo package.
You can modify it to tests things out
and then later delete it and create your own, new packages.
Enjoy WurstScript? Consider starring our repo https://github.com/wurstscript/WurstScript */
```

are comments. The final two lines

```wurst
init
	print("Hello World")
```

consist of an **init**-block by just containing the **init** keyword without indentation.
And then everything indented after this keyword is inside it's block of contents, such as the **print** statement, which displays the given text on the screen for all players.
All blocks automatically end at the end of the file, such as the **init** and **package** blocks in this example.
