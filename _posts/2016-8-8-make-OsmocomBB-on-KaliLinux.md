---
layout: post
title: 在Kali Linux上编译OsmocomBB
---


在虚拟机上装了kali Linux很久了，一直没整点成果出来，突发奇想看看试试看手机能不能被窃听。于是上网搜GSM Sniffing，折腾了一天，终于可以了。参考的文章如下（有需要的童鞋请参考大神们的成果）：

http://www.blogjava.net/baicker/archive/2013/11/13/406293.html
http://holmesian.org/GSM-SMS-Sniffing
http://bbs.acehat.com/forum.php?mod=viewthread&tid=6877&page=1
http://www.evil0x.com/posts/492.html
http://iluck.org/212.html
http://bbs.pediy.com/showthread.php?p=1319244
https://bb.osmocom.org/trac/wiki/Software/GettingStarted?redirectedfrom=GettingStarted
http://bb.osmocom.org/trac/wiki/GnuArmToolchain
（后面两篇是官方的，参考一下还可以）

-------------------

## 软件环境搭建

**Linux版本：**

Linux kali 3.18.0-kali1-586 #1 Debian 3.18.3-1~kali4 (2015-01-22) i686 GNU/Linux

开始
打开一个终端，获得root权限，如果不想获得，后面某些语句加 sudo也可以。

用vm编辑器或leafpad打开/etc/apt/sources.list文件，把下面三行加在后面
```
deb http://mirrors.ustc.edu.cn/kali kali main non-free contrib
deb-src http://mirrors.ustc.edu.cn/kali kali main non-free contrib
deb http://mirrors.ustc.edu.cn/kali-security kali/updates main contrib non-free
```
执行这两句
```
apt-get update
aptitude install libtool shtool autoconf git-core pkg-config make gcc
```
在根目录下创建一个文件夹
```
    mkdir osmcombb

    cd osmcombb
```
安装交叉编译环境
```
sudo apt-get install build-essential libgmp3-dev libmpfr-dev libx11-6 libx11-dev texinfo flex bison libncurses5  libncurses5-dbg libncurses5-dev libncursesw5 libncursesw5-dbg libncursesw5-dev libpcsclite-dev zlibc zlib1g-dev libmpfr4 libmpc-dev
```
```
aptitude install libtool shtool automake autoconf git-core pkg-config make gcc
```
```
wget http://bb.osmocom.org/trac/raw-attachment/wiki/GnuArmToolchain/gnu-arm-build.2.sh

chmod +x gnu-arm-build.2.sh
```
在osmcombb下创建三个文件夹install，build，src。
```
mkdir build install src
cd src/
wget http://ftp.gnu.org/gnu/gcc/gcc-4.5.2/gcc-4.5.2.tar.bz2
wget http://ftp.gnu.org/gnu/binutils/binutils-2.21.1a.tar.bz2
wget ftp://sources.redhat.com/pub/newlib/newlib-1.19.0.tar.g
```
（上面三个文件中，有些大神用的那个链接太久远了，文件损坏了，4.5.2是可以用的。）
```
cd ..
./gnu-arm-build.2.sh
export PATH=$PATH:/root/osmcombb/install/bin
(路径最好写成绝对路径。)
```
最好检查一下上面PATH语句有没有加到bashrc中。
```
vim ~/.bashrc
```
在最后一行如果没有export那句话，请手动加上。经过这么长时间的折腾，终于可以进入下一阶段了。

**先来获取libosmocore：**
```
git clone git://git.osmocom.org/libosmocore.git
cd libosmocore/
autoreconf -i
./configure
make
sudo make install
cd ..
sudo ldconfig
```
最后一句千万不能少，否则后面会发生错误。
![这里写图片描述](/myBlog/images/kali1.jpg)

**获取osmocom-bb：**
```
git clone git://git.osmocom.org/osmocom-bb.git
cd osmocom-bb
git pull --rebase
git checkout --track origin/luca/gsmmap
cd src
make
```
##硬件设备搭建
经过多天的等待，硬件终于配齐了。
1、C118手机一部
2、USB TO TTL接口一个
3、C118数据线一根。
注：某宝卖的USBTOTTL接口并不太稳定，建议多买一个做备份。上面帖子中有些自己DIY数据线，这个2.5mm的耳机线不太好找，还是直接买一根比较方便。本文只能接收到下行短信，如果某些童鞋要接收上行短信，建议买两个C118手机，防止改装的时候弄坏模块接口。

设备都有了，剩下就很快啦。

首先肯定是把设备都查上啦，不过在查上之前，得确保接线正确。数据线三根线分别是红、白、黑。
红->TXD
白->RXD
黑->GND
插上后，USBTOTTL应该是亮的，我这个只买了一个，有时候亮有时候不亮，很郁闷。打开一个终端，输入：
```
lsusb
```
如果显示有CP210x，那说明是没问题了。
![这里写图片描述](/myBlog/images/kali2.jpg)

接下来打开四个终端A、B、C、D。
A中输入：
```
cd osmocombb/osmocom-bb/src/host/osmocon/

./osmocon -m c123xor -p /dev/ttyUSB0../../target/firmware/board/compal_e88/layer1.compalram.bin
```
按一下手机上的红色按键，可能会出现异常：
*Received FTMTOOL from phone ,ramloder has aborted。*
这种情况很可能是USBTOTTL有问题，也可能是没插好，如果有备件的话就换一个试试，我这里没有，只能各种xxx了。。。

如果正常的话，在A中如图：
![这里写图片描述](/myBlog/images/kali3.jpg)

去B中输入：
```
cd osmcombb/osmocom-bb/src/host/layer23/src/misc/
./cell_log -O
```
注：大欧，O
扫描可用的ARFCN。查阅相关资料，移动占用890～909/935～954MHz，ARFCN：1-95；联通占用909～915/954～960MHz，ARFCN：96-124。测试后发现移动32，34能接受到的比较多一些。联通124接收到的比较多一些。
![这里写图片描述](/myBlog/images/kali4.jpg)

在C中，输入：
```
cd osmocombb/osmocom-bb/src/host/layer23/src/misc/

./ccch_scan -i 127.0.0.1 -a ARFCN值
```

在D中输入：
```
wireshark -k -i lo -f 'port 4729'
```
打开wireshark，修改过滤器为gsm_sms。点击apply就可以接受到gsm_sms协议的短信了。在最后一行的TP-USER-DATA中，可以看到短信内容，发送者的还有电话号码。
![这里写图片描述](/myBlog/images/kali5.jpg)

就到这里罢。
