(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{225:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),s("p",[t._v("scene:")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("一般每个人同一时间只负责一个需求，总有例外\n突然接到bug修复，或者更紧急的需求，但是正在开发一个需求时")]),t._v(" "),s("li",[t._v("已经迭代过好几个版本了，但是前几个版本的代码有问题，一时之间找不出原因要马上回滚")]),t._v(" "),s("li",[t._v("...")])])]),t._v(" "),s("h3",{attrs:{id:"work-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#work-flow"}},[t._v("#")]),t._v(" work-flow")]),t._v(" "),s("ul",[s("li",[t._v("git-flow")]),t._v(" "),s("li",[t._v("github flow")]),t._v(" "),s("li",[t._v("gitlab-flow")])]),t._v(" "),s("h4",{attrs:{id:"branch-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#branch-management"}},[t._v("#")]),t._v(" branch management")]),t._v(" "),s("h3",{attrs:{id:"commit-messages-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commit-messages-rules"}},[t._v("#")]),t._v(" commit messages rules")]),t._v(" "),s("p",[t._v("查看gitlab上的commit记录很费劲，要看哪些是新功能，哪些是修复\n目前团队是根据一个需求所有改动进行commit的，[缺点]\n建议每个功能点都commit一次，[优点]")]),t._v(" "),s("p",[t._v("Conventional Commits 约定式提交规范")]),t._v(" "),s("blockquote",[s("p",[t._v("它提供了一组用于创建清晰的提交历史的简单规则\nmessages格式：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<类型>[可选的作用域]: <描述>\n<type>[<scope>]: <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")])])]),s("h4",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 主要type\nfeat:     增加新功能\nfix:      修复bug\n\n# 特殊type\ndocs:     只改动了文档相关的内容\nstyle:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号\nbuild:    构造工具的或者外部依赖的改动，例如webpack，npm\nrefactor: 代码重构时使用\nrevert:   执行git revert打印的message\n\n# 次要type\ntest:     添加测试或者修改现有测试\nperf:     提高性能的改动\nci:       与CI（持续集成服务）有关的改动\nchore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动\n")])])]),s("h4",{attrs:{id:"scope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" scope")]),t._v(" "),s("p",[t._v("用于描述改动范围，一般填写项目名/模块名")]),t._v(" "),s("h4",{attrs:{id:"subject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[t._v("#")]),t._v(" subject")]),t._v(" "),s("p",[t._v("简单描述")]),t._v(" "),s("h4",{attrs:{id:"body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" body")]),t._v(" "),s("p",[t._v("详细描述，一般项目这部分开始就不需要填写，subject里面说明就可以了，但是重要提交或者开源项目还是建议详细说明这次改动前的情况和改动动机")]),t._v(" "),s("h4",{attrs:{id:"break-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#break-changes"}},[t._v("#")]),t._v(" break changes")]),t._v(" "),s("p",[t._v("指出是否有破坏性修改，不兼容以前接口的改动，例如接口删除、参数减少。")]),t._v(" "),s("h4",{attrs:{id:"affect-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#affect-issues"}},[t._v("#")]),t._v(" affect issues")]),t._v(" "),s("p",[t._v("指出影响到的某个问题点，比如引用需求id，issues fixed等")]),t._v(" "),s("h4",{attrs:{id:"具体使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体使用"}},[t._v("#")]),t._v(" 具体使用")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i commitizen cz-conventional-changelog --save-dev\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitizen"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cz-conventional-changelog"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git-cz"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("或")]),t._v(" "),s("p",[t._v("vscode插件："),s("code",[t._v("Visual Studio Code Commitizen Support")])]),t._v(" "),s("h3",{attrs:{id:"version-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-number"}},[t._v("#")]),t._v(" Version Number")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("主版本号.子版本号.修订版本号\n")])])]),s("p",[t._v("主版本号：当功能模块有较大的变动，非向下兼容或者颠覆性更新，比如增加多个模块或者整体架构发生变化，主版本号+1。")]),t._v(" "),s("p",[t._v("子版本号：当功能有一定的增加或变化，向下兼容的修改或添加兼容性更新，比如增加了对权限控制、增加自定义视图等功能，子版本号+1。")]),t._v(" "),s("p",[t._v("修订版本号：一般是 Bug 修复或是一些小的变动，要经常发布修订版，时间间隔不限，修复一个严重的bug即可发布一个修订版，修订版本号+1。")]),t._v(" "),s("p",[t._v("希腊字母版本号(beta):此版本号用于标注当前版本的软件处于哪个开发阶段，当软件进入到另一个阶段时需要修改此版本号，比如alpha、beta。")]),t._v(" "),s("p",[t._v("版本号不会进位，但主版本或子版本+1之后，后面的版本号都清0，进行下一个周期的迭代。")]),t._v(" "),s("h4",{attrs:{id:"git-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-tag"}},[t._v("#")]),t._v(" git tag")]),t._v(" "),s("p",[t._v("用于记录发布版本的节点。")]),t._v(" "),s("p",[t._v("本身是对某次提交打上一个标签，实际上是指向特定提交对象的引用。可以帮助我们快速定位到某个版本，如果该版本出现问题可以快速修复。\n用法：\n"),s("code",[t._v("git tag v1.0.1")]),t._v(" "),s("code",[t._v("git tag v1.1.0 d7f80sd7")]),t._v(" "),s("code",[t._v("git checkout -b bugfix-1.3.4 v1.3.4")])]),t._v(" "),s("h3",{attrs:{id:"changelog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" changelog")]),t._v(" "),s("p",[t._v("commit messages & version number")]),t._v(" "),s("p",[t._v("能够生成清晰的提交改动日志，方便查看每次版本的更新内容")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i conventional-changelog-cli --save-dev\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("scripts："),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"changelog"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conventional-changelog -p angular -i CHANGELOG.md -s -r 0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("npm run changelog => CHANGELOG.md")])])}),[],!1,null,null,null);a.default=n.exports}}]);