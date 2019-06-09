---
title: Install WurstScript
sections:
  - Install Compiler
  - Create Project
  - Update and import Projects
---

Now we will setup a Wurst compiler environment and create a project using the the Wurst Setup.

[*&nbsp;*{: .fa .fa-download} Download WurstSetup](https://grill.wurstlang.org/hudson/job/WurstSetup/lastSuccessfulBuild/artifact/downloads/WurstSetup.jar){: .btn .btn-green}

The Wurstsetup can be used from either the commandline or a graphical application.

## Commandline

To use the setup from the commandline you need to complete the initial installation once.
After that you can make use of the setup via the `grill` executable.

### Initial installation

For the first time you have to run the .jar file directly, because the executable hasn't been installed yet.

`java -jar WurstSetup.jar install wurstscript`

Now you need to add the `~/.wurst` folder to your PATH environment variable, so you can use it from the commandline.
Refer to this [tutorial](https://www.java.com/en/download/help/path.xml). On Windows 10, the result should look like this:

![](https://i.imgur.com/8bFJJVT.jpg){: .img-responsive}

The `grill` command should now be recognized by your terminal of choice.

![](https://i.imgur.com/FNSBYgD.jpg){: .img-responsive}

If not, a restart might be required.

## Graphical UI

If you prefer not using the commandline, simply running the setup without any arguments will open the graphical user interface (double-click).

![](/assets/images/setup/WurstSetup.png){: .img-responsive}

### Install & Update Compiler

#### Grill

Use the special `wurstscript` keyword to install or update wurst on your system for the current user.

`grill install wurstscript`

#### UI

To install or update the compiler simply click the **Install Wurst** button.
When everything is done, the setup should tell you that your installation is up to date and the **Create Project** button is now enabled:

![](/assets/images/setup/WurstInstallDone.png){: .img-responsive}

### Create Project

#### Grill

Use `generate` to create new projects. The project will be generated in a folder inside your current location with the name provided.

`grill generate myProjectName`

#### UI

Now that the compiler is installed you can go ahead and create your Wurst project.
Select your desired project folder and name and start the process by clicking the **Create Project** button.
The setup will now create a wurst project structure and download the necessary dependencies.
If everything setup correctly, you should see the following message:

![](/assets/images/setup/ProjectSetupDone.png){: .img-responsive}

### Open in VSCode

After you finished installation and project setup, you can open the project's root folder in VSCode.

{: .answer}
### *&nbsp;*{: .fa .fa-exclamation-circle} Make sure you are opening the project's root folder (contains wurst.build file) using `File -> Open Folder`

Once the project is opened, you can click the Hello.wurst file on the left to activate the Wurst plugin. The code should compile and the setup should be done. Using VSCode's command console (`F1`) you can execute wurst commands such as running or building your map.

If you are new to WurstScript but not new to programming, you probably want to continue with the [*&nbsp;*{: .fa .fa-external-link-square} Beginner's Guide](tutorials/wurstbeginner.html)

### Updating existing projects

If you want to import someone else's project or work on a different machine, you need to setup the project with local configuration and pull dependencies first.

#### Grill

Navigate to the project's root and run `install` to update dependencies and configuration of the wurst project.

`grill install`

#### UI

By clicking the import button you can load an existing wurst.build file. After a successful load clicking the `Update Project` button will update your dependencies and generate local files as necessary.

