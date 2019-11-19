# base64

## base64解码

`window.atob("")`

> mean ASCII to Binary

## base64编码

`window.btoa("")`

> mean Binary to ASCII

转换中文，先用encode转码

`window.btoa(window.encodeURIComponent('中文'))`

## 任意文件base64编码

```javascript
var reader = new FileReader()
reader.onload = function(e) {
    // e.target.result
}
reader.readAsDataURL(file)
```

