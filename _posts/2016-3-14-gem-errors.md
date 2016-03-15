---
layout: post
title: 安装jekyll问题解决方案
---

最近忙于论文，更新博客有点少了。前两天写的博客push上来在博客页面也不显示，今天终于有时间弄一下了。
由于这台电脑经常换系统，所以博客出问题也是情理之中，断定是jekyll出问题了。既然如此就充装一下jekyll，但过程却相当曲折，因为要有ruby环境，用gem安装却一直连不上源。

国内现在比较推荐的是ruby.taobao.org，但我改了之后还是无法连接。

```
$ gem sources -r https://rubygems.org/
$ gem sources -a https://ruby.taobao.org/
```

![rubyError1](/myBlog/images/gemError1.png)

官方让加-V，似乎也不管用

![rubyError2](/myBlog/images/gemError2.png)

试了半天不管用，有换回原来的了：

```
$ gem sources -r https://ruby.taobao.org/
$ gem source -a http://rubygem.org/
```

还是不行，又更新了一下[rubygems]( http://rubygems.org/)，开了代理后，终于大功告成了。

![rubyError3](/myBlog/images/gemError3.png)

![rubyError4](/myBlog/images/gemError4.png)

真是要折腾死人啊。。。
