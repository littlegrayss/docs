---
sidebar: auto
---
# workflow
scene:
> 1. 一般每个人同一时间只负责一个需求，总有例外：
>    突然接到bug修复，或者更紧急的需求，但是正在开发一个需求时
> 2. 已经迭代过好几个版本了，但是前几个版本的代码有问题，一时之间找不出原因要马上回滚。修复的代码要怎么才能被包含到正在开发其他功能的开发人员代码里
> 3. ...

## Branch Management
### 分类
- git-flow
- github flow
- gitlab-flow

**git-flow**
> 使用既定策略区分和管理开发、测试、生产环境的代码版本，对测试与持续集成友好，与敏捷、迭代的思路一致。

有5种分支：
- master、develop分支，长期维护不会被删除

  master分支是发布最新代码的，develop分支是存最新的开发版本

- feature、release、hotfix

  feature分支是从develop分支切出来的，所以切之前要保证develop分支是最新的
  一般我们开发一个模块或功能的时候，就切一个feature分支出来，开发完成之后再合并回develop分支。规范一点的话是在本地merge，然后提一个PR（pull request），让大家code review之后才能合并到远程分支。该分支可用于项目环境测试。

  release分支是当develop分支上的功能开发完毕之后，准备发布时候切出来的一个分支。该分支只用于发布、bug修复等，不允许进行功能变更或需求变更。该分支可用于预发布测试。测试完毕后合并到master分支进行发布。

  hotfix分支是修复分支，是用于修复线上bug的。hotfix跟release不同的是，hotfix是从master切出来的，修复完成后直接合并到master分支。

### 初始化
一般git都会内置git flow，在工程文件夹里面执行`git flow init`，就可以初始化。
```bash
PS D:\code\practice\workflow-example> git flow init
No branches exist yet. Base branches must be created now.
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? []
Bugfix branches? []
Release branches? []
Hotfix branches? []
Support branches? []
Version tag prefix? []
Hooks and filters directory? [D:/code/practice/workflow-example/.git/hooks]
```
![](http://img.littlegrayss.com/mpxaur63n4){.zoom-img}
### 功能开发
开发新功能的时候，需要创建一个功能分支。

执行`git flow feature start branch_name`会自动创建一个新的分支并切到该分支上。

**执行之前必须pull一下develop分支**
```bash
PS D:\code\practice\workflow-example> git flow feature start feature-docs-init
Switched to a new branch 'feature-docs-init'

Summary of actions:
- A new branch 'feature-docs-init' was created, based on 'develop'
- You are now on branch 'feature-docs-init'

Now, start committing on your feature. When done, use:

     git flow feature finish feature-docs-init
```

![](http://img.littlegrayss.com/c0gyaosl1i){.zoom-img}

可以用`git branch -a`查看一下该工程的分支及目前所在分支。
```bash
PS D:\code\practice\workflow-example> git branch -a
  develop
* feature-docs-init
  master
```
功能开发完成后，可以执行`git flow feature finish branch_name`结束掉该功能开发，合并到develop分支并切回到develop分支，等待发布或者继续新功能开发。
```bash
PS D:\code\practice\workflow-example> git flow feature finish feature-docs-init
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Already up to date.
Deleted branch feature-docs-init (was eb046e6).

Summary of actions:
- The feature branch 'feature-docs-init' was merged into 'develop'
- Feature branch 'feature-docs-init' has been locally deleted
- You are now on branch 'develop'
```
### 版本发布
等所有功能开发完成并可以上线时，执行`git flow release start tag`来创建发布分支，该分支主要是用来进行修改版本号、生成文档等操作。
> 推荐操作
> - 修改版本号：package.json里的版本号+1
> - 生成changelog：`npm run changelog`
> - 修改config.js的环境
```bash
PS D:\code\practice\workflow-example> git flow release start 1.1.0
Fatal: Prefix parameter missing.
Switched to a new branch '1.1.0'

Summary of actions:
- A new branch '1.1.0' was created, based on 'develop'
- You are now on branch '1.1.0'

Follow-up actions:
- Bump the version number now!
- Start committing last-minute fixes in preparing your release
- When done, run:

     git flow release finish '1.1.0'
```

![](http://img.littlegrayss.com/6fyqqqlfq2){.zoom-img}

一般到了这个阶段是可以交付给测试做上线前最后的测试，即预发布测试。

测试通过，把所有操作提交后就可以结束release分支。

结束过程中会提示要添加tag提交记录，可以把changelog中关于当前修改的内容提交，若是不提交或为空时会finish失败，需要切回该分支重新finish。

```bash
PS D:\code\practice\workflow-example> git flow release finish 1.1.0
Branches 'develop' and 'origin/develop' have diverged.
And local branch 'develop' is ahead of 'origin/develop'.
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Merge made by the 'recursive' strategy.
 CHANGELOG.md | 8 +++++++-
 index.js     | 3 +++
 package.json | 2 +-
 3 files changed, 11 insertions(+), 2 deletions(-)
 create mode 100644 index.js
Already on 'master'
Your branch is ahead of 'origin/master' by 6 commits.
  (use "git push" to publish your local commits)
hint: Waiting for your editor to close the file...
Switched to branch 'develop'
Your branch is ahead of 'origin/develop' by 3 commits.
  (use "git push" to publish your local commits)
warning: refname '1.1.0' is ambiguous.
warning: refname '1.1.0' is ambiguous.
Merge made by the 'recursive' strategy.
 CHANGELOG.md | 8 +++++++-
 package.json | 2 +-
 2 files changed, 8 insertions(+), 2 deletions(-)
Deleted branch 1.1.0 (was 87eae98).

Summary of actions:
- Release branch '1.1.0' has been merged into 'master'
- The release was tagged '1.1.0'
- Release tag '1.1.0' has been back-merged into 'develop'
- Release branch '1.1.0' has been merged into 'develop'
- Release branch '1.1.0' has been locally deleted
- You are now on branch 'develop'
```

finish完成后会回到develop分支，需要把develop、master分支和tag标签push到远端并进行发布。
```bash
git push origin develop
git checkout master
git push --tags
```
### 版本修复
修复线上bug需要从master切分支出来修复，不能直接从develop分支切，因为develop可能会有尚未上线的功能点，会把还没通过测试的内容带到线上。

```bash
PS D:\code\practice\workflow-example> git flow hotfix start 1.1.1
Fatal: Prefix parameter missing.
Switched to a new branch '1.1.1'

Summary of actions:
- A new branch '1.1.1' was created, based on 'master'
- You are now on branch '1.1.1'

Follow-up actions:
- Start committing your hot fixes
- Bump the version number now!
- When done, run:

     git flow hotfix finish '1.1.1'

```
![](http://img.littlegrayss.com/sc76lwx0nu){.zoom-img}

把错误修复完成后结束hotfix分支，会分别合并到master和develop分支，并回到develop分支。
```bash
PS D:\code\practice\workflow-example> git flow hotfix finish 1.1.1
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Merge made by the 'recursive' strategy.
 CHANGELOG.md | 7 ++++++-
 index.js     | 2 +-
 package.json | 2 +-
 3 files changed, 8 insertions(+), 3 deletions(-)
hint: Waiting for your editor to close the file...
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
warning: refname '1.1.1' is ambiguous.
warning: refname '1.1.1' is ambiguous.
Merge made by the 'recursive' strategy.
 CHANGELOG.md | 7 ++++++-
 index.js     | 2 +-
 package.json | 2 +-
 3 files changed, 8 insertions(+), 3 deletions(-)
Deleted branch 1.1.1 (was 565fd01).

Summary of actions:
- Hotfix branch '1.1.1' has been merged into 'master'
- The hotfix was tagged '1.1.1'
- Hotfix tag '1.1.1' has been back-merged into 'develop'
- Hotfix branch '1.1.1' has been merged into 'develop'
- Hotfix branch '1.1.1' has been locally deleted
- You are now on branch 'develop'

```

### 分支示意图
![](http://img.littlegrayss.com/h4e32n2ys){.zoom-img}

![](http://img.littlegrayss.com/qkcvqz4df){.zoom-img}

### 优缺点
#### 优点
- 单个功能独立开发，并行开发不受影响
- 修复快速，不受正在开发的功能影响

#### 缺点
- 复杂，分支繁多
- 对开发者要求高（理解工作流，熟悉Git命令）

::: tip
支持Git Flow的图形化工具 - SourceTree
:::

::: warning
git flow在Windows运行特别慢，详情可以参考：[all commands are taking lot of time](https://github.com/nvie/gitflow/issues/6384)、[Speed issues on Windows](https://github.com/petervanderdoes/gitflow-avh/issues/52)

建议使用其他系统或者Windows subsystem for Linux 
:::


## Commit Messages Rules
查看gitlab上的commit记录很费劲，要看哪些是新功能，哪些是修复

建议每个功能点都commit一次，写好 log ，不仅有助于他人 review, 还可以有效的输出 CHANGELOG

[Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/) 约定式提交规范
> 它提供了一组用于创建清晰的提交历史的简单规则

### messages格式：
```
<类型>[可选的作用域]: <描述>
<type>[<scope>]: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

#### type
```
# 主要type
feat:     增加新功能
fix:      修复bug

# 特殊type
docs:     只改动了文档相关的内容
style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
build:    构造工具的或者外部依赖的改动，例如webpack，npm
refactor: 代码重构时使用
revert:   执行git revert打印的message

# 次要type
test:     添加测试或者修改现有测试
perf:     提高性能的改动
ci:       与CI（持续集成服务）有关的改动
chore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动
```

#### scope
用于描述改动范围，一般填写项目名/模块名

#### subject
简单描述
#### body
详细描述，一般项目这部分开始就不需要填写，subject里面说明就可以了，但是重要提交或者开源项目还是建议详细说明这次改动前的情况和改动动机
#### break changes
指出是否有破坏性修改，不兼容以前接口的改动，例如接口删除、参数减少。
#### affect issues
指出影响到的某个问题点，比如引用需求id，issues fixed等

### 具体使用
借助工具，既规范，又格式化，还能够支持后续分析
``` bash
npm i commitizen cz-conventional-changelog --save-dev
```

```json
// package.json
"config": {
    "commitizen": {
        "path": "cz-conventional-changelog"
    }
},
"scripts": {
    "commit": "git-cz"
}
```
或

vscode插件：`Visual Studio Code Commitizen Support`


## Version Number
### 版本号介绍
```
主版本号.子版本号.修订版本号
```
主版本号：当功能模块有较大的变动，非向下兼容或者颠覆性更新，比如增加多个模块或者整体架构发生变化，主版本号+1。

子版本号：当功能有一定的增加或变化，向下兼容的修改或添加兼容性更新，比如增加了对权限控制、增加自定义视图等功能，子版本号+1。

修订版本号：一般是 Bug 修复或是一些小的变动，要经常发布修订版，时间间隔不限，修复一个严重的bug即可发布一个修订版，修订版本号+1。

希腊字母版本号(beta):此版本号用于标注当前版本的软件处于哪个开发阶段，当软件进入到另一个阶段时需要修改此版本号，比如alpha、beta。

版本号不会进位，但主版本或子版本+1之后，后面的版本号都清0，进行下一个周期的迭代。

### git tag
用于记录发布版本的节点。

本身是对某次提交打上一个标签，实际上是指向特定提交对象的引用。可以帮助我们快速定位到某个版本，如果该版本出现问题可以快速修复。

用法：

`git tag v1.0.1`

`git tag v1.1.0 d7f80sd7`

`git checkout -b bugfix-1.3.4 v1.3.4`

## Changelog
commit messages & version number

能够生成清晰的提交改动日志，方便查看每次版本的更新内容

``` bash
npm i conventional-changelog-cli --save-dev
```

``` json
// package.json
scripts：{
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
}
```

`npm run changelog` => `CHANGELOG.md`

::: tip
运行该命令前需要修改package.json里的version
:::

![](http://img.littlegrayss.com/ztf4lh98xg)

### References
- [git-flow 的工作流程](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)
- [git-flow 备忘清单](http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html)