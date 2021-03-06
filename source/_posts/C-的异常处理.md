---
title: C++的异常处理
mathjax: false
date: 2021-09-28 13:35:56
tags: [学习, C++]
categories: [学习, C++]
comments: true
noticeOutdate:
  enable: true
  style: flat
  limit_day: 365
  position: top
  message_prev: It has been
  message_next: days since the last update, the content of the article may be outdated.
updated:
keywords:
description:
top_img:
cover:
---

C++的异常处理使用try throw catch进行，高程课并没有学习，我当时也就懒得自己研究，虽然老师建议要自学。近来随着接触一些东西意识到这玩意还是有必要学一下的，稍做记录。

<!-- more -->
唉我又懒了，贴几个学习网站...
[stream 相关](https://blog.csdn.net/Sleeping_Zky/article/details/78174312)
[整体学习网站](http://c.biancheng.net/view/422.html)
比较奇特的是，catch(...)可以捕获所有类型的异常，这种写法我没有见过。

另外就是**为什么要用异常处理**，我理解的很浅薄。
一方面是为了多种操作减轻异常处理的代码复杂度，例如：
```
int a,b,c;
cin>>a;
cin>>b;
cin>>c;
```
正常情况下似乎每个输入语句都要进行相同的错误判断，非常麻烦，而使用异常处理可以简化这种判断，只需要一种catch就可以捕获这些问题。
第二是可以作为一种“返回”的形式，可以借此错误返回并给出相应通知信息。
第三是抛出异常的返回值其实是没有的，不影响函数调用处接收变量的原值。