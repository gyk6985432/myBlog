---
layout: post
title: locate: /var/lib/mlocate/mlocate.db'
---

今天在CentOS里使用`locate`命令时候，报错了：
```
locate: can not stat () `/var/lib/mlocate/mlocate.db': No such file or directory

```
![](/myBlog/images/locateError.jpg)
原因是找不到`mlocate.db`数据库文件，因为使用`locate`命令时候不是通过遍历文件目录下所有文件来查找的，而是通过数据库进行搜索，这样大大提升了搜索速度。

解决方法：
```
sudo yum install mlocate

sudo updatedb
```
![](/myBlog/images/updateDB.jpg)
