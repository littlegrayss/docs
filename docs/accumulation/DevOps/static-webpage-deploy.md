# 静态网站部署
## vuepress
> 极简静态网站生成器，由vue、vue-router、webpack驱动的单页面应用。

步骤在[官网](https://vuepress.vuejs.org/zh/guide/)可以看到，就不放了

感觉坑点在侧边菜单吧，好难配

## GitHub Pages
### gh-pages
1. 安装 `npm install gh-pages --save-dev`
2. `package.json`配置
``` json
 "homepage": "https://用户名.github.io/项目名", //这里配置不对会404
 "scripts": {
     // 。。。
     "deploy": "gh-pages -d build"  // 这里的build是指要部署的文件夹，vue是dist，vuepress是.vuepress/dist
 }
```
3. 运行 `npm run deploy`
**注意要在github上配置`github pages`，并且选择分支`gh-pages`**
4. 访问`https://用户名.github.io/项目名`

::: tip
注意：打包出来的文件路径是相对与当前域名根目录的，如果要实现`域名/项目名`这种访问，要在`webpack`里配置`assetPublicPath: ''`，`vuepress`在`congfig.js`里设置`base: '/项目名/'`
:::

> 也可以手动推送dist文件到gh-pages分支： `git subtree push --prefix=dist origin gh-pages`

参考：
[如何用Github的gh-pages分支展示自己的项目](https://www.cnblogs.com/MuYunyun/p/6082359.html)
## Netlify
Netlify用于静态网站托管，自带 CI、支持自定义页面重定向、自定义插入代码、打包和压缩 JS 和 CSS、压缩图片、处理图片、CMS 等等功能。
缺点是无法直连，需要翻墙

步骤也就不放了，参考一下就行

参考：
1. [手把手教你使用 netlify 实现前端的 自动部署 + HTTPS](https://www.cnblogs.com/codernie/p/9062104.html)
2. [博客通过 Netlify 实现持续集成](https://blog.guanqr.com/study/blog/deploy-blog-to-netlify/)