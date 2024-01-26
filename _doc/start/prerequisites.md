---
title: Prerequisites
sections:
  - Java
  - VSCode
---

WurstScript and its related tools require Java 11+ to run. Editor support is provided via a VSCode extension.

### Download JRE

[_&nbsp;_{: .fa .fa-download} Download Java from Adoptium](https://adoptium.net/?variant=openjdk11){: .btn .btn-orange}

Download the Java Runtime appropriate for your system and follow the installation procedure.

Once finished, continue to the next step.

### Verify Java Installation

Many tasks rely on a environment variable called **JAVA_HOME** which might not have been set by the installer.
To verify your installation, open a command prompt and enter `java -version`.

A valid installation will return something like this:

```powershell
> java -version
openjdk version "11.0.17" 2022-10-18
OpenJDK Runtime Environment Temurin-11.0.17+8 (build 11.0.17+8)
OpenJDK 64-Bit Server VM Temurin-11.0.17+8 (build 11.0.17+8, mixed mode)
```

The major version should be `11` or higher. If it is lower, you must update your Java installation.

If you get an error or get a lower versions displayed, even though you installed a newer one, your **JAVA_HOME** is either missing or configured wrong.

Refer to this [_&nbsp;_{: .fa .fa-external-link-square} Windows tutorial](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html) in order to setup your **JAVA_HOME** correctly.

Once you have setup Java correctly, continue by installing VSCode.
