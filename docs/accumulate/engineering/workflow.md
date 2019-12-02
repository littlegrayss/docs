## git
scene:
> 1. 一般每个人同一时间只负责一个需求，总有例外
>    突然接到bug修复，或者更紧急的需求，但是正在开发一个需求时
> 2. 已经迭代过好几个版本了，但是前几个版本的代码有问题，一时之间找不出原因要马上回滚
> 3. ...

### work-flow
- git-flow
- github flow
- gitlab-flow
#### branch management

### commit messages rules
查看gitlab上的commit记录很费劲，要看哪些是新功能，哪些是修复
目前团队是根据一个需求所有改动进行commit的，[缺点]
建议每个功能点都commit一次，[优点]

Conventional Commits 约定式提交规范
> 它提供了一组用于创建清晰的提交历史的简单规则
messages格式：
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

#### 具体使用
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


### Version Number
```
主版本号.子版本号.修订版本号
```
主版本号：当功能模块有较大的变动，非向下兼容或者颠覆性更新，比如增加多个模块或者整体架构发生变化，主版本号+1。

子版本号：当功能有一定的增加或变化，向下兼容的修改或添加兼容性更新，比如增加了对权限控制、增加自定义视图等功能，子版本号+1。

修订版本号：一般是 Bug 修复或是一些小的变动，要经常发布修订版，时间间隔不限，修复一个严重的bug即可发布一个修订版，修订版本号+1。

希腊字母版本号(beta):此版本号用于标注当前版本的软件处于哪个开发阶段，当软件进入到另一个阶段时需要修改此版本号，比如alpha、beta。

版本号不会进位，但主版本或子版本+1之后，后面的版本号都清0，进行下一个周期的迭代。

#### git tag
用于记录发布版本的节点。

本身是对某次提交打上一个标签，实际上是指向特定提交对象的引用。可以帮助我们快速定位到某个版本，如果该版本出现问题可以快速修复。
用法：
`git tag v1.0.1`
`git tag v1.1.0 d7f80sd7`
`git checkout -b bugfix-1.3.4 v1.3.4`

### changelog
commit messages & version number

能够生成清晰的提交改动日志，方便查看每次版本的更新内容

``` bash
npm i conventional-changelog-cli --save-dev
```

``` js
scripts：{
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
}
```

npm run changelog => CHANGELOG.md


