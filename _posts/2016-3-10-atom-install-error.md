---
layout: post
title: atom安装插件的问题
---

今天终于准备装最近很火的[atom](https://atom.io/)了，据说比SublimeText还牛，这么牛的东西咱肯定得试试啊！下载安装很给力，一键安装，好在软件也不大，只有80+M，听说windows下可以使用apm安装插件，模仿的是大名鼎鼎的npm，那想必非常Diao。

{{ excerpt_separator}}

前段时间看到<开发者头条>上分享的[atom酷炫打字效果](https://atom.io/packages/activate-power-mode/)，着实让人大开眼界。当然，最重要的是markdown支持要好，一边预览一边编辑，那真是飞一样的感觉~

![dialog](/images/atom1.jpg)

看看这界面是不是很帅？

快捷键一大堆，看的人眼花缭乱，还好有很多是和SublimeText相同的，然并卵。

插件是个大坑啊，有的人顺利直接就装上了，可惜很多人没那么幸运，安装第一个插件就卡住了。

```
Compiler Tool not found!
```

居然说我没有安装python和visual studio！！怎么可能？？

网上解决方案并不多，终于找到一个解决方案，还在知乎回答了下这个问题：

[我在知乎回答](https://www.zhihu.com/question/38098629/answer/90036256?from=profile_answer_card)

然而这种解决方式对我这样的强迫症并没有什么效果，解决不了？我跟你拼了！

所以？google啊！

综合各个论坛什么的，总结如下：

- apm代理问题
- node-gyp重定向
- 环境变量设置问题

到底怎么解决呢？
当然是开个代理了（自己找梯子），dos下设置代理

```
$ apm config set strict-ssl false
$ apm config set http-proxy http://127.0.0.1:1080
$ apm config set https-proxy http://127.0.0.1:1080
```

（具体可参考https://github.com/atom/apm）

这样应该解决了吧？什么？还不行？

参考下这篇文章中[@TedThiCo](https://github.com/atom/apm/issues/322)的回答。

这还差不多。。。

这个折腾好了，接下来使劲爽吧！！！
