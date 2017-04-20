---
layout: post
title: Kali linux上为apt-get设置shadowsocks
---

折腾了一下午，终于大功告成了。在国内真是要命，上个网都要费半天劲，废话少说，直接上干货。

由于阿里源出现了问题，在未fq的情况下用不了官方源，配置不当的话中科大的源也用不了。

阿里源有时候就不好用了，sana和rolling都不行：
```
deb http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
deb-src http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
deb http://mirrors.aliyun.com/kali-security kali-rolling/updates main contrib non-free
deb-src http://mirrors.aliyun.com/kali-security kali-rolling/updates main contrib non-free
```

改成中科大的有时候可以用：
```
deb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb http://mirrors.ustc.edu.cn/kali-security kali-current/updates main contrib non-free
deb-src http://mirrors.ustc.edu.cn/kali-security kali-current/updates main contrib non-free
```

但有时候还是要用官方源：
```
deb http://http.kali.org/kali kali-rolling main non-free contrib
deb-src http://http.kali.org/kali kali-rolling main non-free contrib
```
然后更新
```
apt-get update && apt-get upgrade && apt-get dist-upgrade
```

前提是要设置shadowsocks：
```
sslocal -c config.json
```

其中config.json内容为，错了容易出问题：
```
{
    "server": "your_server_ip",
    "server_port": your_server_port,
    "local_address": "127.0.0.1",
    "local_port": 1080,
    "password": "your_password",
    "timeout": 300,
    "method": "aes-256-cfb",
    "fast_open": false
}
```

然后还要安装polipo，端口转发：
```
apt-get install polipo
```

启动/停止polipo:
```
service polipo start
service polipo stop
```

polipo默认用的是8123端口，要在终端里fq，设置全局代理http_proxy：
```
export http_proxy=http://1272.0.0.1:8123
#停止使用代理
#unset http_proxy
```

最后让apt-get使用polipo的代理：
```
vi /etc/apt/apt.conf
#把下面代码复制进去即可
Acquire::http::Proxy "http://12722.0.0.1：8123";
```

这样就可以使用官方源了。。。