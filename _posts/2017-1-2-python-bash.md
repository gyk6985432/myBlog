---
layout: post
title: Windows下指定python所在目录
---

一般在安装python时要设置python的环境变量，运行.py文件：

```
python ***.py
```

另外一种执行python文件的方式是在.py文件中指定python程序所在路径:
```
#!/usr/bin/python
```

但是在最新的win10的bashonwindows上面要指定python.exe或在其他bash下执行.py文件时，指定方式要改为：
```
#!/c/Python27/python.exe
```

这样就可以直接执行了。

一个小坑:)
