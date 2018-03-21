# WurstScript 网站与文档 （中文）

在线访问：https://wurst.wow8.org/

该文件夹包含WurstScript网站的完整源代码。这是一个jekyll项目，并通过github-pages进行部署。

* 网站设计来源：https://github.com/xriley/PrettyDocs-Theme
* 原仓库：https://github.com/wurstscript/wurstscript.github.io

## 教程

教程作为文档的一部分包含在它们自己的章节中。

创建一个新的教程:

* 在`_doc/tutorials/`中创建一个新的目录索引文件，比如`cp wurstbeginner.md new_tutorial.md`。
* Create a new set of tuturial pages in `_doc/tutorials/` - e.g. `cp -r wurstbeginner new_tutorial`.
* Define the pages by changing the contents of `_doc/tutorials/new_tutorial/` - usually one or two markdown files will suffice.
* Add the new tutorial to the tutorials listing in `_doc/tutorials.md` - just need to add a uri in the `navigation` section.
* Setup `new_tutorial.md` as necessary for your pages:
    - Edit the title, excerpt, date, icon, color.
    - Change the `sections` to match the uri of the pages of your tutorial.
* Write your tutorial pages, being sure to update the heading sections as necessary.

## 在本地搭建页面

1. 检查你是否安装了ruby 2.1.0或者更高的版本：`ruby --version`
2. 安装 Bundler：`gem install bundler`
3. 在本仓库的根目录中执行 `bundle install`
4. 运行服务器：`bundle exec jekyll serve`
