# 七牛云图床上传插件（chrome 扩展）

能提供简便的方式上传图片资源到七牛云，目前支持选择上传并生成图片地址和markdown，支持浏览上传历史。

## feature：
- 选择上传
- 生成图片地址与markdown
- 浏览上传历史

## todo：
- 拖放上传
- 复制上传
- ...

## 使用
### 配置
需要一个七牛云账号并创建对象储存

到[七牛云个人中心](https://portal.qiniu.com/user/key)，获取公钥（ak）和私钥（sk），

到[七牛云管理控制台](https://portal.qiniu.com/bucket/)，获取对象储存空间名称（bucket），并获取域名或自定义域名（domain）

![](http://img.littlegrayss.com/5o12rfi6o8)

### 上传
点击上传按钮，上传成功后可手动复制或点击复制

![](http://img.littlegrayss.com/h71mx3xaq4)

### 浏览历史
点击历史按钮，弹出历史上传记录

![](http://img.littlegrayss.com/4ecui6e1a6)

## 技术点
- 纯原生js
- js加密算法
- js点击复制粘贴板
- 图片懒加载
- css动画效果
- chrome扩展配置