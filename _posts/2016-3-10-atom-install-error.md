---
layout: post
title: atom安装插件的问题
---

今天终于准备装最近很火的[atom](https://atom.io/)了，据说比SublimeText还牛，这么牛的东西咱肯定得试试啊！下载安装很给力，一键安装，好在软件也不大，只有80+M，听说windows下可以使用apm安装插件，模仿的是大名鼎鼎的npm，那想必非常Diao。
前段时间看到<开发者头条>上分享的“[atom酷炫打字效果](https://atom.io/packages/activate-power-mode)”，着实让人大开眼界。当然，最重要的是markdown支持要好，一边预览一边编辑，那真是飞一样的感觉~

![init](/myBlog/images/atom1.jpg)

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

###附atom快捷键：

####文件切换

ctrl-shift-s 保存所有打开的文件

cmd-shift-o 打开目录

cmd-\ 显示或隐藏目录树

ctrl-0 焦点移到目录树

目录树下，使用a，m，delete来增加，修改和删除

cmd-t或cmd-p 查找文件

cmd-b 在打开的文件之间切换

cmd-shift-b 只搜索从上次git commit后修改或者新增的文件

#### 导航

（等价于上下左右）
ctrl-p 前一行
ctrl-n 后一行
ctrl-f 前一个字符
ctrl-b 后一个字符

alt-B, alt-left 移动到单词开始
alt-F, alt-right 移动到单词末尾

cmd-right, ctrl-E 移动到一行结束
cmd-left, ctrl-A 移动到一行开始

cmd-up 移动到文件开始
cmd-down 移动到文件结束

ctrl-g 移动到指定行 row:column 处

cmd-r 在方法之间跳转

#### 目录树操作

cmd-\ 或者 cmd-k cmd-b 显示(隐藏)目录树

ctrl-0 焦点切换到目录树(再按一次或者Esc退出目录树)

a 添加文件
d 将当前文件另存为(duplicate)
i 显示(隐藏)版本控制忽略的文件

alt-right 和 alt-left 展开(隐藏)所有目录

ctrl-al-] 和 ctrl-al-[ 同上

ctrl-[ 和 ctrl-] 展开(隐藏)当前目录

ctrl-f 和 ctrl-b 同上

cmd-k h 或者 cmd-k left 在左半视图中打开文件

cmd-k j 或者 cmd-k down 在下半视图中打开文件

cmd-k k 或者 cmd-k up 在上半视图中打开文件

cmd-k l 或者 cmd-k right 在右半视图中打开文件

ctrl-shift-C 复制当前文件绝对路径

#### 书签

cmd-F2 在本行增加书签

F2 跳到当前文件的下一条书签

shift-F2 跳到当前文件的上一条书签

ctrl-F2 列出当前工程所有书签

#### 选取

大部分和导航一致，只不过加上shift

ctrl-shift-P 选取至上一行

ctrl-shift-N 选取至下一样

ctrl-shift-B 选取至前一个字符

ctrl-shift-F 选取至后一个字符

alt-shift-B, alt-shift-left 选取至字符开始

alt-shift-F, alt-shift-right 选取至字符结束

ctrl-shift-E, cmd-shift-right 选取至本行结束

ctrl-shift-A, cmd-shift-left 选取至本行开始

cmd-shift-up 选取至文件开始

cmd-shift-down 选取至文件结尾

cmd-A 全选

cmd-L 选取一行，继续按回选取下一行

ctrl-shift-W 选取当前单词

#### 编辑和删除文本

基本操作

ctrl-T 使光标前后字符交换

cmd-J 将下一行与当前行合并

ctrl-cmd-up, ctrl-cmd-down 使当前行向上或者向下移动

cmd-shift-D 复制当前行到下一行

cmd-K, cmd-U 使当前字符大写

cmd-K, cmd-L 使当前字符小写

#### 删除和剪切

ctrl-shift-K 删除当前行

cmd-backspace 删除到当前行开始

cmd-fn-backspace 删除到当前行结束

ctrl-K 剪切到当前行结束

alt-backspace 或 alt-H 删除到当前单词开始

alt-delete 或 alt-D 删除到当前单词结束

#### 多光标和多处选取

cmd-click 增加新光标

cmd-shift-L 将多行选取改为多行光标

ctrl-shift-up, ctrl-shift-down 增加上（下）一行光标

cmd-D 选取文档中和当前单词相同的下一处

ctrl-cmd-G 选取文档中所有和当前光标单词相同的位置

#### 括号跳转

ctrl-m 相应括号之间，html tag之间等跳转

ctrl-cmd-m 括号(tag)之间文本选取

alt-cmd-. 关闭当前XML/HTML tag

#### 编码方式

ctrl-shift-U 调出切换编码选项

#### 查找和替换

cmd-F 在buffer中查找

cmd-shift-f 在整个工程中查找

#### 代码片段

alt-shift-S 查看当前可用代码片段

在~/.atom目录下snippets.cson文件中存放了你定制的snippets

#### 定制说明

#### 自动补全

ctrl-space 提示补全信息

#### 折叠

alt-cmd-[ 折叠

alt-cmd-] 展开

alt-cmd-shift-{ 折叠全部

alt-cmd-shift-} 展开全部

cmd-k cmd-N 指定折叠层级 N为层级数

#### 文件语法高亮

ctrl-shift-L 选择文本类型

#### 使用Atom进行写作

ctrl-shift-M Markdown预览
可用代码片段

b, legal, img, l, i, code, t, table

#### git操作

cmd-alt-Z checkout HEAD 版本

cmd-shift-B 弹出untracked 和 modified文件列表

alt-g down alt-g up 在修改处跳转

alt-G D 弹出diff列表

alt-G O 在github上打开文件

alt-G G 在github上打开项目地址

alt-G B 在github上打开文件blame

alt-G H 在github上打开文件history

alt-G I 在github上打开issues

alt-G R 在github打开分支比较

alt-G C 拷贝当前文件在gihub上的网址
