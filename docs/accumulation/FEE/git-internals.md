---
sidebar: auto
---
# 深入Git原理

现在新技术越来越多，需要掌握的技术也越来越多，以前是jquery、vue、react，现在还有node、nuxt。当我们熟练使用这些技术的时候，有种我掌握这种技术的感觉。
但是遇到一些问题的时候，发现自己

相信很多人用git都是用可视化工具，点几下就能完成我们需要的操作。

Git被认为是版本管理工具，其实更多的是作为一种存储工具来使用，我们把数据存到远程仓库，比如github或者gitlab。

虽然我们日常都在用，但是有没有想过一个问题：

> Git是怎么储存数据的？

假设有一个文件

**Git保存的不是文件差异或者变化量，而只是一系列文件快照**

为什么？优缺点是什么？

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
这里我们遇到了第一个Git对象——blob。

可以看到blob对象里存储了文件的内容，但是没有文件名、权限等信息。能够区分改文件与其他文件不一样的就只有带hash的文件名，作为Git里的唯一身份凭证。

这个hash是Git根据文件内容通过SHA-1算法算出来的，不同文件内容会有不同的hash，同样如果是相同的文件，它们的hash是一样的。

### tree
接下来我们把刚刚的文件都提交一下：
```bash
git commit -m 'feat(test): add two files'
```
再看到`.git/objects`里又多出了两个文件夹，我们用`git cat-file`来查看一下：
```bash
$ git cat-file -t 415646 
tree
$ git cat-file -p 415646
100644 blob d2676822271b14c11c7892f358937c5f6cacaf00    a.txt
100644 blob c200906efd24ec5e783bee7...	b.txt
```
在这里我们遇到了第二个Git对象——tree。

tree是文件目录树，记录了文件获取目录的名称、类型、模式信息。

### commit
接下来我们来看第二个文件夹里面是什么东西：
```bash
$ git cat-file -t 415646 
commit
$ git cat-file -p 415646
tree a7a7860d1250239273721334e822c18f4323b57f
author acetom** <acetom**@***.com> 1593432394 +0800
committer acetom** <acetom**@***.com> 1593432394 +0800

feat(test): add one files
```
最后我们终于遇到了最后一个Git对象——commit。

这么看是不是很像我们的提交记录

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
0c96bfc59d0f02317d002ebbf8318f46c7e47ab2
```

最后我们知道了Git是怎么储存一个文件的内容、目录结构、commit信息和分支的。

**其本质上是一个key-value的数据库加上默克尔树形成的有向无环图。**

到这里有个问题：
> 为什么Git不把文件名信息存在blob对象里，而要存在tree对象里呢？

原因主要是：
如果将文件名保存在blob里面，那么Git只能多复制一份原始内容形成一个新的blob object。

而Git的实现方法只需要创建一个新的tree object将对应的文件名更改成新的即可，原本的blob object可以复用，节约了空间。


> 为什么Git要把对象存储路径写成`.git/objects/hash[0, 2]/hash[2, 40]`的形式呢？直接用40个hash作为文件名不好吗？

原因主要有两点：
1. 有些文件系统对目录下的文件数量有限制。例如，FAT32限制单目录下的最大文件数量是65535个，如果使用U盘拷贝Git文件就可能出现问题。
2. 有些文件系统访问文件是一个线性查找的过程，目录下的文件越多，访问越慢。

> 为什么Git保存的是快照而不是差异或变化量呢？


::: tip
其实Git还有一个Tag对象，只是用得少，不展开了。
:::

## Git分区

## Git分支合并

## 总结