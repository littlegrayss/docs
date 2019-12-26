---
sidebar: auto
---
# web component

## 先聊点别的
### 以前是怎么写组件的
- bootstrap

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
```

- 自己写

```html
<!DOTYPE html>
<html>
	<head>
		<style>
		.pagination {
		}
		</style>
	</head>
	<body>
		<div id="pagination" class="pagination" data-current="current" data-total="total"></div>
		<script src="./pagination.js" />
		<script>
			var pagination = new Pagination({
	      parent: document.getElementById('pagination'),
	      total: parent.dataset.total,
	      current: parent.dataset.current || 1,
	      showNum: 8,
	      itemsLimit: 10,
	      callback: function (currentPage) {
	        let pathname = location.pathname;
	        location.href = pathname + "?page=" + currentPage;
	      }
	    })
		</script>
	</body>
</html>
```

```js
class Pagination {
    constructor(options) {
        const DEFAULT_CURRENT_PAGE = 1;
        const DEFAULT_SHOW_NUM = 8;
        const DEFAULT_ITEMS_LIMIT = 10;
        this.options = options;
        this.render();
    }
    render() {
        this.destroy();
				innerHTML = `
					<ul class="">
						<li></li>
					</ul>
				`;
        this.setStatus();
        this.addEvent();
    }
    destroy() {}
    setStatus() {}
    addEvent() {}
```

- vue

```html
<!-- XlPagination.vue -->
<template>
  <div :class="[className]" v-show='visible'>
    <a @click='prev' :class="is-disabled" v-html='prevName'></a>
    <template v-if="!arrowOnly" v-for="(item, index) in page">
      <a v-if="item !== '...'" :key='index' :class="is-current" @click='handlePageChange(item, "")'>{{item}}</a>
      <span v-else :key='index'>{{item}}</span>
    </template>
    <a @click='next' :class="is-disabled" v-html='nextName'></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true,
      page: [],
      currentCopy: 1,
      disabled: false
    }
  },
  props: {
    className,
    prevClassName,
    nextClassName,
    prevName,
    nextName,
    sum,
    current,
    arrowOnly,
    beforeChange
  },
  methods: {
    updateCurrent (v, action) {},
    handlePageChange (v, action) {},
    prev () {},
    next () {},
    handlePage () {}
  }
}
</script>

<style>
// ...
</style>
```

## 什么是web component
原生实现html组件

四大构件
- Custom Elements
- HTML Templates
- Shadow DOM
- HTML Imports

### Custom Elements
自定义html标签

```js
// pagination.js
class Pagination extends HTMLElement {
  constructor() {
    super(); 
  }
  
}

customElements.define('pagination', Pagination);
```

共有两种 custom elements：
- Autonomous custom elements 是独立的元素，它不继承其他内建的HTML元素。你可以直接把它们写成HTML标签的形式，来在页面上使用。例如 `<popup-info>`，或者是document.createElement("popup-info")这样。
- Customized built-in elements 继承自基本的HTML元素。在创建时，你必须指定所需扩展的元素（正如上面例子所示），使用时，需要先写出基本的元素标签，并通过 is 属性指定custom element的名称。例如`<p is="word-count">`, 或者 document.createElement("p", { is: "word-count" })。

生命周期：
- connectedCallback：当custom element首次被插入文档DOM时，被调用
- disconnectedCallback： 当custom element从文档DOM中删除时，被调用
- attributeChangedCallback： 当custom element增加、删除、修改自身属性时，被调用

实例化：
- `<x-foo></x-foo>`
- `var xFoo = document.createElement('x-foo');`
-   
```js
var xFoo = new XFoo();
document.body.appendChild(xFoo);
```

### Html Templates
`<template>`

```html
// pagination.html
<template id="pagination-template">
	<style>
	
	</style>
  <ul>
		<li class="pre-page">上一页</li>
		<li class="item-1" active></li>
		<li class="item-2"></li>
		<li class="item-3"></li>
		<li class="item-4"></li>
		<li class="item-5"></li>
		<li class="next-page">下一页</li>
  </ul>
</template>
<script src="/pagination/pagination.js"></script>
```

``` html
<!--index.html -->
<pagination page=1 size=7></pagination>
```

### Shadow DOM
封装DOM和CSS
```js
// pagination.js
	connectedCallback() {
	  const shadowRoot = this.attachShadow({mode: 'open'});
	  const template = currentDocument.querySelector('#pagination-template');
	  const instance = template.content.cloneNode(true);
	  shadowRoot.appendChild(instance);

		const page = this.getAttribute('page');
		const size = this.getAttribute('size');
  }
```

### HTML Imports
```html
<link rel="import" href="./pagination.html">
```
## 兼容

## 对比react
- 
## 对比vue
- Vue在实现上遵从了部分Web Components规范
- Web Components是相对底层的组件规范，Vue除了定义组件规范，还提供了组件通信，数据绑定等上层方案

## 应用：Polymer，Youtube