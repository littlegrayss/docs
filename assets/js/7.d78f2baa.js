(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{218:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"静态网站部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态网站部署"}},[t._v("#")]),t._v(" 静态网站部署")]),t._v(" "),s("h2",{attrs:{id:"vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" vuepress")]),t._v(" "),s("blockquote",[s("p",[t._v("极简静态网站生成器，由vue、vue-router、webpack驱动的单页面应用。")])]),t._v(" "),s("p",[t._v("步骤在"),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("可以看到，就不放了")]),t._v(" "),s("p",[t._v("感觉坑点在侧边菜单吧，好难配")]),t._v(" "),s("h2",{attrs:{id:"github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[t._v("#")]),t._v(" GitHub Pages")]),t._v(" "),s("h3",{attrs:{id:"gh-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gh-pages"}},[t._v("#")]),t._v(" gh-pages")]),t._v(" "),s("ol",[s("li",[t._v("安装 "),s("code",[t._v("npm install gh-pages --save-dev")])]),t._v(" "),s("li",[s("code",[t._v("package.json")]),t._v("配置")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"homepage"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://用户名.github.io/项目名"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里配置不对会404")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 。。。")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gh-pages -d build"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的build是指要部署的文件夹，vue是dist，vuepress是.vuepress/dist")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("运行 "),s("code",[t._v("npm run deploy")]),t._v(" "),s("strong",[t._v("注意要在github上配置"),s("code",[t._v("github pages")]),t._v("，并且选择分支"),s("code",[t._v("gh-pages")])])]),t._v(" "),s("li",[t._v("访问"),s("code",[t._v("https://用户名.github.io/项目名")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("注意：打包出来的文件路径是相对与当前域名根目录的，如果要实现"),s("code",[t._v("域名/项目名")]),t._v("这种访问，要在"),s("code",[t._v("webpack")]),t._v("里配置"),s("code",[t._v("assetPublicPath: ''")]),t._v("，"),s("code",[t._v("vuepress")]),t._v("在"),s("code",[t._v("congfig.js")]),t._v("里设置"),s("code",[t._v("base: '/项目名/'")])])]),t._v(" "),s("blockquote",[s("p",[t._v("也可以手动推送dist文件到gh-pages分支： "),s("code",[t._v("git subtree push --prefix=dist origin gh-pages")])])]),t._v(" "),s("p",[t._v("参考：\n"),s("a",{attrs:{href:"https://www.cnblogs.com/MuYunyun/p/6082359.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何用Github的gh-pages分支展示自己的项目"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"netlify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netlify"}},[t._v("#")]),t._v(" Netlify")]),t._v(" "),s("p",[t._v("Netlify用于静态网站托管，自带 CI、支持自定义页面重定向、自定义插入代码、打包和压缩 JS 和 CSS、压缩图片、处理图片、CMS 等等功能。\n缺点是无法直连，需要翻墙")]),t._v(" "),s("p",[t._v("步骤也就不放了，参考一下就行")]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/codernie/p/9062104.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("手把手教你使用 netlify 实现前端的 自动部署 + HTTPS"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.guanqr.com/study/blog/deploy-blog-to-netlify/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客通过 Netlify 实现持续集成"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);