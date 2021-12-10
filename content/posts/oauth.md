---
title: "OAuth"
date: 2021-12-10T23:19:23+08:00
draft: false
---
### 原理
OAuth 引入了一个授权层，用来分离两种不同的角色：客户端和资源所有者。
客户端想要在一段时间内获得用户数据资源访问权限，需要请求资源服务器，由资源服务器来询问用户是否同意授权。用户同意以后，资源服务器可以向客户端颁发令牌。客户端通过令牌，去请求数据，这种互联网最普遍的授权方式被称作OAuth

如果你对oauth流程不了解，oauth原理可以看[阮一峰oauth介绍](https://www.ruanyifeng.com/blog/2019/04/oauth_design.html)，以及[github接口文档](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)。

这里简单描述下获取token数据流程，大致有两个阶段，如下图：
![xx](https://raw.githubusercontent.com/cit965/blog-picture/master/nextjs-oauth-github.png)
- 阶段一：前端访问服务器auth接口，服务器请求 github 并且重定向到用户授权页面
- 阶段二：用户点击授权按钮，github 回调服务器 callback 接口并携带 code 和 state 参数；服务器用 code 去交换 token，并重定向到前端页面
### 使用场景
本站采用的github评论系统其实就用到了OAuth，当你点击评论时，需要授权cit965.com这个网站能够访问你的用户信息，只有你手指点击了同意，我才能获取到你的头像和昵称，并且在一段时间内，你不需要再次登陆，你可以思考下为什么你再次打开网站评论时不需要授权？如果你知道token存在哪里，欢迎在下方评论给出你的答案！
### 引用
[1][阮一峰oauth介绍](https://www.ruanyifeng.com/blog/2019/04/oauth_design.html)