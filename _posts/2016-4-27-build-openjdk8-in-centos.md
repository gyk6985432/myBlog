---
layout: post
titile: 在CentOS中编译JDK8
---

最近在看《深入理解java虚拟机》，第一章内容就是获取JDK源码，书看了一大半了才决定来亲自试试，毕竟在windows系统上这些东西折腾起来很麻烦。书上编译的是jdk7，因为作者出书的时候还没发布jdk8，既然都2016年了，咱们也得做点新工作，直接编译jdk8，废话不多说了，直接上手吧。

首先是在VMWare上安装linux，我在这有被坑了，一直比较喜欢ubuntu，所以先在ubuntu上试试，没想到别的都没问题，在make时出现错误，说checked_os_version failed，上网找了半天也没什么结果，所以又装了一个CentOS系统，实践证明，CentOS果然不负众望，怪不得很多书都推荐用这款操作系统，编译过程极其顺利。我的VMWare是32位的，只能编译32的jdk，64位的估计也差不多，下载对了即可。

安装CentOS就不必多说了，装系统比较简单，无非就是下载，安装，分区。。。

比较重要的是配置国内的源，默认的CentOS源有点慢，国内还是有很多问题，推荐的是163的源，[百度经验](http://jingyan.baidu.com/article/d2b1d1027b76c75c7e37d4d0.html)里有相关的教程，不会的同学可以参考一下。

接下来下载对应的[jdk8源码包](http://download.java.net/openjdk/jdk8/)和bootstrap jdk，这里参考README-builds.html里的教程，应该采用的比较新的jdk7作为bootstrap jdk，直接下载安装jdk7，解压后改名为java，移动到/usr/lib/jvm/下面

把java环境变量设置一下：

```
export JAVA_HOME=/usr/lib/jvm/java
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```

![Alt text](/myBlog/images/javaversion.JPG)

解压jdk8源码包后，进入该文件夹

```
sudo bash ./configure
```

根据提示安装需要的依赖，其中要求安装ccache，在163源里没找到，没有安装也没事，然后直接make即可。

![Alt text](/myBlog/images/finishJDK.JPG)

当然中间省略了很多书中介绍到的命令，本人linux玩的不熟练，那些命令大多都是用来优化编译速度的，也无关紧要。。。

在openjdk/build下可以看到编译好的jdk源码，大功告成。

欢迎遇到同样问题的同学前来讨论~~
