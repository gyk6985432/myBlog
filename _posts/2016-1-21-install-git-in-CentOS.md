---
layout: post
title: CentOS6.7上安装git
---

昨天把原先用的电脑翻出来，发现还是WindowsXP，虽然换了新电脑，但也不能让旧的就压箱底吧，所以为了让它继续发挥价值，给它装个linux，也好让我多熟悉熟悉linux，以后说不定要用到呢，废话不多说了，制作启动U盘，装系统什么的直接略过，先给它武装一个神武器git，别的慢慢再说吧。

由于CentOS的默认源上没有git，改成国内最大的163源也还是没有.

1. 进入目录

```
cd /usr/local/src
```

2. 安装git需要的依赖：

```
yum install curl curl-devel zlib-devel openssl-devel perl cpio expat-devel gettext-devel
```

3. 下载git包

```
wget http://git-core.googlecode.com/files/git-1.7.7.5.tar.gz
autoconf
./configure
make
make install
```

4. 安装完成

```
git --version
```

