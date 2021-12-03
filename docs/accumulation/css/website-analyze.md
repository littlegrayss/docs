# 网站技术解析
## 233
[https://233.nie.im/](https://233.nie.im/)
- 背景图
背景图有两张，其中一张是底图
``` css
    background-image: url(https://cdn.guaiwola.com/img/background.1ea260dc.jpg);
    background-size: 1920px 1080px;
    background-repeat: no-repeat;
```
另一张略小放在里面的框框里面，定位很有趣，绝对定位跟另一个框框一样
``` css
    background-position: -111.8px -48.45px;
    background-image: url(https://cdn.guaiwola.com/img/background.1ea260dc.jpg);
    background-size: 1920px 1080px;
    background-repeat: no-repeat;
    width: 80%;
    height: 90%;
    left: 10%;
    top: 5%;
```
2张图原因不详，里面的框框加了`filter: blur(10px);`

- 有个半透明的阴影 `box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.5);`
- 绝对定位    
``` css 
    position: absolute;
    width: 80%;
    height: 90%;
    left: 10%;
    top: 5%;
```    
- 最小宽度有这个属性
``` css
    min-width: min-content;
```
- 背景颜色半透明
``` css
    background-color: var(--primary-color-8)
        --primary-color-8: #4a90e2cc;
```
- 背景颜色unset 
``` css
    background-color: unset;
```
- 各种颜色参考
``` css
    --primary-color-0: #4a90e200;
    --primary-color-0_5: #4a90e20d;
    --primary-text-color-0: #f7f7f700;
    --primary-color-1: #4a90e21a;
    --primary-color-1_5: #4a90e226;
    --primary-text-color-1: #f7f7f71a;
    --primary-color-2: #4a90e233;
    --primary-color-2_5: #4a90e240;
    --primary-text-color-2: #f7f7f733;
    --primary-color-3: #4a90e24d;
    --primary-color-3_5: #4a90e259;
    --primary-text-color-3: #f7f7f74d;
    --primary-color-4: #4a90e266;
    --primary-color-4_5: #4a90e273;
    --primary-text-color-4: #f7f7f766;
    --primary-color-5: #4a90e280;
    --primary-color-5_5: #4a90e28c;
    --primary-text-color-5: #f7f7f780;
    --primary-color-6: #4a90e299;
    --primary-color-6_5: #4a90e2a6;
    --primary-text-color-6: #f7f7f799;
    --primary-color-7: #4a90e2b3;
    --primary-color-7_5: #4a90e2bf;
    --primary-text-color-7: #f7f7f7b3;
    --primary-color-8: #4a90e2cc;
    --primary-color-8_5: #4a90e2d9;
    --primary-text-color-8: #f7f7f7cc;
    --primary-color-9: #4a90e2e6;
    --primary-color-9_5: #4a90e2f2;
    --primary-text-color-9: #f7f7f7e6;
    --primary-color-10: #4a90e2;
    --primary-color-10_5: #4a90e2;
    --primary-text-color-10: #f7f7f7;
```
头像图片image使用了box-radius
``` css   
    border-radius: 24px;
```
借个地方：
检测用户系统主题是深色还是浅色（mac，ios）:
``` css
prefers-color-scheme: no-preference | light | dark
@media (prefers-color-scheme: light) {
  .themed {
    background: white;
    color: black;
  }
}
```
js测试代码
``` js
window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
```