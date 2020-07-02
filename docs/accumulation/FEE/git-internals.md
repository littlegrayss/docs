---
sidebar: auto
---
# 深入Git原理

现在新技术越来越多，需要掌握的技术也越来越多，以前是jquery、vue、react，现在还有node、nuxt。当我们熟练使用这些技术的时候，有种我掌握这种技术的感觉。
但是遇到一些问题的时候，会发现自己掌握的还不够，这里为什么会出问题？要怎么解决？

相信很多人用git都是用可视化工具，点几下就能完成我们需要的操作。但是越方便快捷的工具越有可能把内在的原理深埋起来，令人难以去注意到这究竟是怎么运行的。

经常性地会碰到拉取代码的时候冲突、合并分支莫名丢失文件、回滚代码不知怎么做之类的问题。

其实当我们了解了Git的原理的时候，有些问题或许会变得浅显简单。

这里不会跟大家分享怎么做的内容，而是会分享一些原理性的东西。

Git被认为是版本管理工具，其实更多的是作为一种存储工具来使用，我们把数据存到远程仓库，比如github或者gitlab。

虽然我们日常都在用，但是有没有想过一个问题：

> Git是怎么储存数据的？

假设有一个文件内容是111的，后面增加了一行222并提交，这时候Git记录的是文件的变更记录呢？还是新增另一个文件呢？
![](http://img.littlegrayss.com/6k8ebzw7p)

::: details tips
**Git保存的不是文件差异或者变化量，而只是一系列文件快照**


为什么？优缺点是什么？
:::

## Git对象
先来看一下初始化本地git仓库会有什么东西。

``` bash
git init
```
可以看到，有以下这几个文件和文件夹：

``` bash
$ ls
HEAD          # 文件指示目前被检出的分支
config*
description
hooks/
info/
objects/      # 目录存储所有数据内容
refs/         # 目录存储指向数据（分支）的提交对象的指针
index         # 文件保存暂存区信息
```

其中object、refs、index、HEAD是Git核心组成部分。

### blob
我们来创建两个文件
```bash
echo '111' > a.txt
echo '222' > b.txt
git add *.txt
```
之后来到`.git/objects`里，可以看到新增了两个文件夹，文件夹里面有一串hash的文件

尝试用`cat`查看一下里面是什么
> 一堆乱码

这是因为git把文件压缩成二进制文件了，我们可以用`git cat-file`这个api来查看。
```bash
$ git cat-file -t d2676822
blob
$ git cat-file -p d2676822
111
```
这时候我们的仓库是这样子的：

![](http://img.littlegrayss.com/l0lrm8qqmd)

这里我们遇到了第一个Git对象——**blob**。

可以看到blob对象里存储了文件的内容，但是没有文件名、权限等信息。

能够区分改文件与其他文件不一样的就只有带hash的文件名，作为Git里的唯一身份凭证。

这个hash是Git根据文件内容通过[SHA-1](https://zh.wikipedia.org/wiki/SHA-1)算法算出来的，不同文件内容会有不同的hash，如果是相同的文件，它们的hash是一样的。

Git会通过zlib压缩算法压缩成二进制文件，它并没有一种固定的格式，几乎可以是任何类型的文件。

### tree
接下来我们把刚刚的文件都提交一下：
```bash
git commit -m 'feat(test): add two files'
```
再看到`.git/objects`里又多出了两个文件夹，我们用`git cat-file`来查看一下：
```bash
$ git cat-file -t be377229 
tree
$ git cat-file -p be377229
100644 blob d2676822271b14c11c7892f358937c5f6cacaf00    a.txt
100644 blob 748a11ed65b7a52f7bcd0a113868d57adeeb259c	b.txt
```

这时候我们的仓库是这样子的：

![](http://img.littlegrayss.com/ra9dc5e0cq)

在这里我们遇到了第二个Git对象——**tree**。

tree对象是文件目录树，记录了文件目录的名称、类型、模式信息。可以理解为一个文件的目录。

tree对象里面可以包含tree对象以及blob对象。

### commit
接下来我们来看第二个文件夹里面是什么东西：
```bash
$ git cat-file -t da5f553d 
commit
$ git cat-file -p da5f553d
tree be3772294d07301ab5b182f02cc2d480a04b67d8
author acetom** <acetom**@***.com> 1593432394 +0800
committer acetom** <acetom**@***.com> 1593432394 +0800

feat(test): add two files
```
最后我们终于遇到了最后一个Git对象——**commit**。

里面记录了tree对象、作者和提交者信息以及commit的message。（这么看是不是很像我们的提交记录？）

因为这是第一条commit，它没有parent的记录，如果是第二条以及之后的commit，parent会记录上一条commit的hash，形成一条提交链，记录了Git提交的日志。

这时候我们的仓库是这样子的：

![](http://img.littlegrayss.com/483ivcg5hu)

到了这里大家应该了解了git commit命令的流程以及做了什么。

最后我们结合分支信息，就能组成一个完整的提交流程了。

查看当前分支：
```bash
$ cat .git/HEAD
ref: refs/heads/master
```
HEAD可以看成是一个指针，指向当前分支，
可以看到当前分支是master，
然后再看master的最新提交：
```bash
$ cat .git/refs/heads/master
da5f553d79b9a9a85e8bfabb794287142c7b60bc
```
![](http://img.littlegrayss.com/gegl3a4xdf)

如果我们切换分支的话，就是把HEAD的指向变成其他分支的路径，分支里面永远只记录当前分支最新一条commit的hash值。

最后我们知道了Git是怎么储存一个文件的内容、目录结构、commit信息和分支的。

**其本质上是一个key-value的数据库加上[默克尔树](https://zh.wikipedia.org/wiki/%E5%93%88%E5%B8%8C%E6%A0%91)(又叫哈希树)形成的[有向无环图](https://zh.wikipedia.org/wiki/%E6%9C%89%E5%90%91%E6%97%A0%E7%8E%AF%E5%9B%BE)。**

问题：

::: details 为什么Git不把文件名信息存在blob对象里，而要存在tree对象里呢？
原因主要是：

修改文件名的时候，

如果将文件名保存在blob里面，那么Git只能多复制一份原始内容形成一个新的blob object。

而Git的实现方法只需要创建一个新的tree object将对应的文件名更改成新的即可，原本的blob object可以复用，节约了空间。
:::

::: details 为什么Git要把对象存储路径写成`.git/objects/hash[0, 2]/hash[2, 40]`的形式呢？直接用40个hash作为文件名不好吗？

原因主要有两点：

1. 有些文件系统对目录下的文件数量有限制。例如，FAT32限制单目录下的最大文件数量是65535个，如果使用U盘拷贝Git文件就可能出现问题。
2. 有些文件系统访问文件是一个线性查找的过程，目录下的文件越多，访问越慢。
:::

::: details 为什么Git保存的是快照而不是差异或变化量呢？

如果Git储存的是文件的变更部分，那么为了拿到一个commit的内容，Git都只能从第一个commit开始，然后一直计算变更，直到目标commit，这会花费很长时间。

而相反，Git采用的储存全新文件快照的方法能使这个操作变得很快，直接从快照里面拿取内容就行了。

Git只对于相同的文件只会保存一个，根据hash去取就好了。

只是这样的话，Git的仓库会变得非常大，不过还好Git有自己的压缩规则，会在pack的时候把相似的文件压缩，抛弃无用的object。
:::

::: tip
其实Git还有一个Tag对象，只是用得少，不展开了。
:::

## Git分区
Git有3个分区：工作目录、Index 索引区域、Git仓库。

目前仓库是这个样子的：

里面有3个区域

- 工作目录 （working directory）： 操作系统上的文件，所有代码开发编辑都在这上面完成。
- 索引 （index or staging area）： 可以理解为一个暂存区域，这里面的代码会在下一次commit被提交到Git仓库。
- Git仓库 （git repository）： 由Git object记录着每一次提交的快照，以及链式结构记录的提交变更历史。

![](http://img.littlegrayss.com/8g00dtnes)

我们来尝试一下修改一个文件，把a.txt的111改成333：

``` bash
echo '333' > a.txt
```

工作目录会直接把文件内容改变了，这时候和Git仓索引区库没有改变。

![](http://img.littlegrayss.com/rjegoz0s1l)

然后执行`git add a.txt`把a.txt文件提交到索引区。

可以发现Git仓库新增了一个blob object， index从原来的指向变成了改变文件内容新增的object，未改变内容的文件还是指向原来的blob不变。

![](http://img.littlegrayss.com/t7nxwt17e4)

执行`git commit`，可以发现Git仓库新增了tree和commit两个object，commit的parent指向了上一条commit，master的指针指向了最新的commit。

![](http://img.littlegrayss.com/vamtz40rt)

问题

::: details 为什么Git要先add之后再commit？
因为工作区可能包含很多改动文件，但又不想全部都提交（**保持commit干净的重要性**），

add命令提供了一个缓冲的方法：把想要提交的部分文件先add进暂存区，然后再commit。

题外话： 一个理想的开发过程是**每个commit仅包含一个feature或bugfix**。
:::

## 总结
我们了解了Git的三个对象blob、tree、commit。

blob存储了文件的内容，tree记录的是文件名、目录的结构，commit记录的是提交所在的tree、parent是谁、作者及message信息。

还了解到Git的三个分区工作目录、暂存区、Git仓库。

工作目录是我们编辑文件的地方、暂存区是提交前的过渡区、Git仓库是记录了一系列提交的快照。

结合以上这些讲述了git add、git commit命令在三个对象之间，对象与分区之间的联系。

希望能通过这次分享能让大家了解到Git的基本工作原理，能够知道命令或者工具的操作背后都做了什么。

## 参考
[Pro Git](https://www.progit.cn/)