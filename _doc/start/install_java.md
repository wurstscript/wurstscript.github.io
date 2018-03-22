---
title: 安装Java
sections:
  - 下载JRE
  - 验证/更新Java
---

WurstScript以及其相关工具需要Java8来正常运行，因此你需要确保你的电脑上安装了Java8。

### 下载 JRE

[*&nbsp;*{: .fa .fa-download} 下载 Java](https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html){: .btn .btn-orange} ![](/assets/images/setup/java_powered.png) 

下载适合你系统的Java Runtime，并跟随下方的安装步骤来安装。

一旦完成后，就可进入下一步。

### 验证/更新Java

WurstScript的许多功能依赖于电脑上的环境变量 **JAVA_HOME** ，但这个变量可能并没有在安装过程中自动被添加。
打开你的命令行窗口，输入 `java -version` 来验证你当前安装的JAVA版本。

如果你的Java正确安装了，就应该能够看到如下的消息：

![](/assets/images/setup/JavaVerify.png){: .img-responsive}

注意需要确保你的最小版本号 `1.8.0_xxx` (xxx部分) 大于 **101** ，从而避免一些证书问题。
如果最小版本号小于**101**，你应该更新你的Java，否则你的连接可能会不安全。

如果你输入了上方指令后得到了一个错误提示，或者在你安装了新版Java后，你的版本号仍然显示的是旧版本的话，有可能你的 **JAVA_HOME** 环境变量还没有设置，或者设置错了路径。

参考 [*&nbsp;*{: .fa .fa-external-link-square} 这些教程](http://www.baeldung.com/java-home-on-windows-7-8-10-mac-os-x-linux) 来正确设置你的 **JAVA_HOME** 环境变量。

当你正确安装完Java后，接着安装VSCode。
