# cdn

> 我们使用 cdn 的原因是，我们经常有一些比较频繁请求且容量比较大的文件，并且更新频率不那么高的文件。这些文件如果我们都放在自己的服务器上，于客户端问题在于访问时间长，于服务器端是占用服务器端的资源。所以我们采用分布式的方式扔在 cdn 上。

**CDN 仅会对于 GET 请求进行缓存，而对于其他的请求均不进行缓存，仅是起到中间代理、转发的功能。**

## 访问cdn过程
1. 首先访问本地dns，如果没有命中，则往上级cdn寻找，直到拿到对应的ip地址，如果到root服务器也拿不到的话，就会报域名解析错误。
2. 拿到对应的ip地址，这个ip地址不是cdn的服务器地址，而是一个全局负载均衡的系统的ip地址。
3. 全局负载均衡系统会根据客户端的 IP地址和请求的 url 和相应的区域负载均衡系统通信。
4. 区域负载均衡系统拿着这两个东西获取距离客户端最近且有相应资源的cdn 缓存服务器的地址，返回给全局负载均衡系统。
5. 全局负载均衡系统返回确定的 cdn 缓存服务器的地址给客户端。
6. 客户端请求缓存服务器上的文件。

### cdn命中率较低原因
- 源站动态资源较多，多为不可缓存的内容，也会导致频繁回源拉取。
- 资源访问量较低，文件热度不够，CDN 收到请求较少无法有效命中缓存。
- 缓存配置不合理，缓存时间过短，CDN 节点频繁回源。
- 访问资源的 URL 带参数，并且参数不断变化，当用不同的 URL 去访问 CDN 的时候，CDN 会认为这是一个新请求（即便这两个不同的 URL 其实是访问到了同一个文件，并且该文件已经缓存在节点上），会回源去拉取所请求的内容。

## cdn回源
当 cdn 缓存服务器中没有符合客户端要求的资源的时候，缓存服务器会请求上一级缓存服务器，以此类推，直到获取到。最后如果还是没有，就会回到源站（我们自己的服务器）去获取资源。

### 什么时候会回源
- 用户访问时，如节点上无缓存，则会回源拉取资源
- CDN 节点上的文件超时过期，会回源拉取资源
- 若为不缓存文件，用户访问时，会直接回源
- 未忽略 URL 参数域名，使用该形式域名带参数访问资源，会直接回源

## 缓存优先级
Cache-Control > expires
s-maxage > maxage

不进行缓存，回源站： s-maxage=0，no-cache，no-store，private

## cname
- A记录就是把一个域名解析到一个IP地址（Address，特制数字IP地址）
- CNAME记录就是把域名解析到另外一个域名

CNAME(Canonical Name)指别名记录也被称为规范名字，CNAME可以理解为对域名设置别名。比如一个域名www.domain.com，设置一个CNAME指向它，由于www.domain.com与一个ip进行绑定，如果设置多个CNAME指向它，以后修改CNAME指向的服务器时，只需要修改一个www.domain.com对应的ip即可。

举例
你在使用cdn服务的时候，服务商提供给你的就是一个cname地址，
如果服务商给你一个ip，假如哪天服务商想把ip地址换一个，很多人域名上对应的ip地址就要跟着变化，要让所有人都一起改完，完全没有办法做到的事情，换成cname就没事了，你用你的cdn，他改他的ip地址。唯一的坏处就是，第一次DNS解析域名的时候会多解析一次。

边缘节点：指距离最终用户接入具有较少的中间环节的网络节点