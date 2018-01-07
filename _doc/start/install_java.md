---
title: Install Java
sections:
  - Download JRE
  - Verify/Update Java Intallation
---

WurstScript and it's related tools require Java 8 to run. Please install or verify your installation.

### Download JRE

[*&nbsp;*{: .fa .fa-download} Download Java](https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html){: .btn .btn-orange} ![](/assets/images/setup/java_powered.png) 

Download the Java Runtime appropriate for your system and follow the installation procedure.

Once finished, continue to the next step

### Verify/Update Java Installation

Many tasks rely on a environment variable called **JAVA_HOME** which might not have been set by the installer.
To verify your installation, open a command prompt and enter `java -version`

A valid installation will return something like this:

![](/assets/images/setup/JavaVerify.png){: .img-responsive}

Make sure your minor version `1.8.0_xxx` (xxx) is higher than **101** to avoid any certificate issues. If it is lower, make sure to update your Java installation.

If you get an error or get a lower version displayed even though you installed a newer one, your **JAVA_HOME** is either missing or configured wrong.

Refer to [*&nbsp;*{: .fa .fa-external-link-square} These Tutorials](http://www.baeldung.com/java-home-on-windows-7-8-10-mac-os-x-linux) in order to setup your **JAVA_HOME** correctly.

Once you have setup Java correctly, continue by installing VSCode.
