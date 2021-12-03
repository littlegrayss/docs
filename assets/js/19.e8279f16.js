(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{378:function(v,_,t){"use strict";t.r(_);var a=t(25),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"微信小程序双线程架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序双线程架构"}},[v._v("#")]),v._v(" 微信小程序双线程架构")]),v._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[v._v("#")]),v._v(" 背景")]),v._v(" "),t("p",[v._v("微信目标是为了连接一切。订阅号推出连接了用户与内容，服务号推出是为了连接用户与服务，但没用达到预期。")]),v._v(" "),t("p",[v._v("微信在2013年专门拆分出一个服务号出来，其定位就是提供服务的平台。与公众号不同，服务号提供了更多的接口能力，例如获取用户信息、模版消息、微信支付等。这一点跟现在的小程序有点类似。")]),v._v(" "),t("blockquote",[t("p",[v._v('"公众号的本意不是为了媒体，我们的本意不是传播内容，我们要提供服务，是为了提供服务，但服务号没有达到预期，我们在讨论一个新的形态，叫应用号。平时不发东西，他安静的存在在那，低频的需求不需要安装App，微信尝试让更多App以轻量便捷的形态在微信中存在，就是应用号。"——张小龙')])]),v._v(" "),t("p",[v._v("张小龙推出应用号，也就是小程序的时候说过，小程序有4个特性：无须安装、触手可及、用完即走、无须卸载。本质上是一个提供服务的工具。")]),v._v(" "),t("p",[v._v("一个运行在微信上轻量便捷的工具，我们可以提炼出几点技术上的要求：")]),v._v(" "),t("ol",[t("li",[v._v("安全，易于管控")]),v._v(" "),t("li",[v._v("渲染快、加载快")]),v._v(" "),t("li",[v._v("独立于微信客户端来迭代")]),v._v(" "),t("li",[v._v("开发成本低")]),v._v(" "),t("li",[v._v("能调用微信的接口")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[v._v("假设你是一名架构师，你会如何设计小程序的技术架构呢？")])]),v._v(" "),t("h2",{attrs:{id:"双线程架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双线程架构"}},[v._v("#")]),v._v(" 双线程架构")]),v._v(" "),t("p",[v._v("想一下为什么小程序不直接用浏览器的线程模型，而要搞一套新的呢？")]),v._v(" "),t("ul",[t("li",[v._v("web的体验相对较差，受限于设备性能和网络速度，有个较长的白屏时间。")]),v._v(" "),t("li",[v._v("为了安全考虑，小程序不希望开发者能获取"),t("code",[v._v("dom")]),v._v("对象，因为这会带来很大的安全风险。")])]),v._v(" "),t("p",[v._v("微信肯定不希望小程序能够威胁微信客户端本身的安全。设想一下，把微信比作CodePen、JSFiddler的平台，用户可以在上面随意编写代码并执行，小程序就是用户编写的代码，为了避免平台因为用户编写的代码而挂掉，要用什么样的技术方案去实现呢？")]),v._v(" "),t("h3",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),t("p",[v._v("小程序框架系统分为两部分：逻辑层（App Service）和 视图层（View）。小程序的页面渲染和业务逻辑是隔离的，目的是为了安全与管控。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("逻辑层\n逻辑层运行JS脚本。每个小程序只有一个逻辑线程。因为与渲染层隔离，逻辑层是接触不到dom的，所以小程序本身是不支持获取"),t("code",[v._v("window")]),v._v("和"),t("code",[v._v("document")]),v._v("对象的。这种情况有点类似"),t("code",[v._v("web worker")]),v._v("。")])]),v._v(" "),t("li",[t("p",[v._v("渲染层\n小程序各个界面被管理在一个页面栈中，界面相关的任务都在webview线程里执行，通过逻辑层代码去控制渲染哪些页面。一个小程序会有多个页面，所以渲染层会包含多个webview线程。")])])]),v._v(" "),t("p",[v._v("webKit里，webCore和JSCore执行在一个线程里，并且会相互阻塞，小程序逻辑层的代码执行不会阻塞渲染层的渲染逻辑，页面更流畅。")]),v._v(" "),t("p",[v._v("为什么说分成两个隔离的线程可以安全呢？\n逻辑层操作不了渲染层意味着开发者不能随意地跳转网页，改变界面上的任意内容。不能获取页面的任何内容，包括用户的敏感数据。能够避免XSS类的安全漏洞。")]),v._v(" "),t("p",[v._v("既然逻辑层与渲染层不在同一个线程，相互之间是独立的，数据不能共享。要组成一个页面或者页面要更新，就需要两个线程的数据传递。")]),v._v(" "),t("p",[v._v("两个线程之间是通过客户端进行中转通信的，逻辑层与客户端，渲染层与客户端的通信是通过注入一个原生方法，封装成WeiXinJSBridge，类似jsBridge。开发者不需要理解Android和ios的差异，这些底层框架已经封装好了。")]),v._v(" "),t("p",[v._v("在我们知道两个线程是怎么通信之后，再来了解下线程之间通信的内容是什么。")]),v._v(" "),t("p",[v._v("小程序更新 UI 的方式与MVVM 框架类似，既然不能操作dom，那就用virtual DOM的方式，通过diff方法来最小化比较与修改")]),v._v(" "),t("ol",[t("li",[v._v("渲染层把wxml生成一个virtual DOM的js对象，并进行渲染。")]),v._v(" "),t("li",[v._v("逻辑层调用"),t("code",[v._v("setData")]),v._v("，更新数据到渲染层。")]),v._v(" "),t("li",[v._v("渲染层对需要更新的数据进行diff，得到差异，然后把差异应用到真实的dom中，从而更新页面。")])]),v._v(" "),t("p",[v._v("逻辑层调用"),t("code",[v._v("setData")]),v._v("的过程，就是逻辑层与渲染层通信的过程：")]),v._v(" "),t("ol",[t("li",[v._v("当开发者调用"),t("code",[v._v("setData")]),v._v(" API的时候，底层会使用"),t("code",[v._v("JSON.stringify")]),v._v("处理数据，一些不可序列化的数据将会被移除")]),v._v(" "),t("li",[v._v("逻辑层会将数据发送给渲染层，同步更新页面中的"),t("code",[v._v("data")]),v._v("数据，这样开发者可以在调用"),t("code",[v._v("setData")]),v._v("之后，从"),t("code",[v._v("this.data")]),v._v("中获取到变更后的最新数据")]),v._v(" "),t("li",[v._v("数据的传输还需要通过Native进行中转，因此不能实时地到达渲染层，所以"),t("code",[v._v("setData")]),v._v("函数将数据从逻辑层发送到渲染层是异步的。如果我们需要知道页面渲染完毕，可以在调用"),t("code",[v._v("setData")]),v._v("的时候传入"),t("code",[v._v("callback")]),v._v("回调进行监听。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.littlegrayss.com/84og9toabm",alt:""}})]),v._v(" "),t("p",[t("code",[v._v("setData")]),v._v("不是每次调用都立即进行通信，因为每次通信都要通过客户端进行，多次通信会造成效率低下，小程序是用一个同步队列，来保证消息的有序，同时一次通信会发送多个"),t("code",[v._v("setData")]),v._v("。")]),v._v(" "),t("p",[v._v("所以到这里我们就能理解为什么官方不建议这么做：")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("setData")]),v._v("传递大量的新数据。数据的传输会经历跨线程传输和脚本编译的过程，当数据量过大，会增加脚本编译的执行时间，占用 WebView JS 线程。")]),v._v(" "),t("li",[v._v("频繁的执行"),t("code",[v._v("setData")]),v._v("操作。\n"),t("ul",[t("li",[v._v("页面渲染结果有一定的延时。")]),v._v(" "),t("li",[v._v("用户触发页面事件时，因 WebView JS 线程忙碌，用户事件未能及时的传输到逻辑层而导致反馈延迟。")])])])]),v._v(" "),t("p",[v._v("但是有些场景我们不得不需要频繁的交互，比如点击、输入。")]),v._v(" "),t("p",[v._v("一次点击会导致四次通信，一次输入也需要4次通信。如果输入20个字，就需要80次通信。在频繁交互的场景会导致卡顿。")]),v._v(" "),t("ol",[t("li",[v._v("渲染层 -> Native(点击事件)")]),v._v(" "),t("li",[v._v("Native -> 逻辑层(点击事件)")]),v._v(" "),t("li",[v._v("逻辑层 -> Native(setData)")]),v._v(" "),t("li",[v._v("Native -> 渲染层(setData)")])]),v._v(" "),t("p",[v._v("为了应对这些场景，小程序也引入了原生组件，原生组件可以直接与逻辑层通信。避免了setData，能节省交互过程的通信次数和webview的计算与渲染工作。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("ol",[t("li",[v._v("一个小程序只有一个逻辑线程，即使切换了页面，在同一个页面的非data变量也会保存在内存中，非data变量不会在页面销毁的时候跟着销毁，一直保存在内存中，直到小程序被关闭。data的变量会随着页面注销而销毁。")]),v._v(" "),t("li",[v._v("每个页面都是一个单独的WebView线程，但每个小程序只有一个逻辑线程。但是由于小程序逻辑层有模块化的能力，每个页面都有单独的作用域，不用文件或页面的变量不会相互影响。")]),v._v(" "),t("li",[v._v("一个小程序里逻辑线程是共享的，业务代码还是执行在同一个上下文里，即使页面跳转了，跳转前的逻辑还会继续执行，很可能会多次跳转、重定向，参数丢失导致页面白屏")])])]),v._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),t("ol",[t("li",[v._v("使用 Webview 渲染 UI、使用类似Web Worker 的独立线程运行逻辑，既能够像 Web 一样将资源托管在云端，更新独立；同时又能够保证足够好的安全性和性能。")]),v._v(" "),t("li",[v._v("jscore 阻塞期间用户依然可以跟 webview 进行交互。（但比较有限）")]),v._v(" "),t("li",[v._v("所有的页面、组件逻辑都在一个线程里，比较好做状态共享。在传统的浏览器网页开发时，如果涉及到跨页面通信，往往要用到 "),t("code",[v._v("postMessage()")]),v._v(" 这种异步接口，一个页面的 js 不能同步调用另一个页面的逻辑。在小程序里是可以的，由于都在一个线程里，你完全可以在一个 Page 实例里找到另一个 Page 实例，页面间互操作。")])]),v._v(" "),t("h3",{attrs:{id:"不足"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不足"}},[v._v("#")]),v._v(" 不足")]),v._v(" "),t("ol",[t("li",[v._v("业务逻辑跟渲染层天然隔离，造成通信开销大、延迟高等问题。小程序的长列表、手势跟随交互、Canvas渲染的体验都不算好。")]),v._v(" "),t("li",[v._v("很多API都是异步的，需要改变编写习惯，把有前后逻辑关系的写在异步回调里。因为逻辑层和渲染层不是一个线程，通信有延迟，做同步的话逻辑层不就老是卡住了，所以很多接口都是异步的。")])]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("小程序双线程设计有效地保证了安全和管控，能够避免XSS攻击，同时js加载不会阻塞页面渲染。也因为原生组件和微信提供的api，能有类似原生的交互体验。开发成本也相对较低，拥有与web一样的更新迭代能力。只是同时因为双线程的设计，通信过程不可避免地有一些问题。")])])}),[],!1,null,null,null);_.default=e.exports}}]);