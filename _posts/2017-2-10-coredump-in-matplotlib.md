---
layout: post
title: bash on window10中core dump解决方案
---

在bash on windows10使用python的数据处理模块pandas时，无法画图并报错：

<!--more-->

```
OMP: Error #100: Fatal system error detected.
OMP: System error #22: Invalid argument
Aborted (core dumped)
```

解决方案为：
[export KMP_AFFINITY=disabled](https://github.com/Microsoft/BashOnWindows/issues/785)

由于bash on windows仅仅是一个bash, 无法运行画图程序。