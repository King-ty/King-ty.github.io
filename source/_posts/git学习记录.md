---
title: git学习记录
mathjax: false
date: 2021-09-14 11:55:09
tags: [学习, git]
categories: [学习, git]
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

暑假前我曾经用了一天的时间学习git和github的使用，为了练习在暑假第一周我把大学作业中勉强称得上是项目的东西传到了github上并借助gitpages配置了本blog。本想着git算是学会了，可惜暑假并没有及时进行练习，当我想上传数据结构课设作业时发现该忘的都忘记了，记性不好吗，看来还是有必要记录一下。

<!-- more -->

#### git clone和download zip区别
前者带一个.git，是一个仓库，也就是带有一些版本控制

#### git init
对于初始项目目录，使用git init初始化为git仓库

#### git add -A
将所有文件添加到暂存区
可用vscode左边点"+"实现

#### vscode的U/A
U:表示是新增文件
A:到达暂存区

#### git commit -m "提交信息"
提交暂存，每次提交有位移hash值，并用提交信息提醒这次提交了什么
可用vscode插件输入提交信息ctrl+enter实现

#### git log --stat
查看提交记录
可直接在vscode插件COMMITS中查看

#### git checkout [filename]
未提交时撤销修改，变为仓库中的状态
可在vscode插件中点放弃修改实现

#### git reset HEAD^[m]
退回到第前m个版本
可用COMMITS里undo commit做到

#### git checkout -b [branchname]
以当前分支为基础创建分支并切换到该分支
主分支一般是代码的起点和终点

#### git checkout [branchname]
切换分支

#### git merge [branchname]
把[branchname]分支合并到当前分支

#### git merge --abort
放弃本次合并

#### git branch
查看本地所有分支
*是当前分支

#### git branch -r
查看远程所有分支

#### git branch -a
查看本地和远程所有分支

#### git branch -d/D [branchname]
删除分支，其中D是强制删除

#### git remote add origin [远端仓库地址]
把远端仓库作为"origin"名添加到本地中

#### git branch -m/M [oldbranchname] [newbranchname]
修改分支名字，M是强制修改
可以只有[newbranchname]，修改当前分支
常用git branch -M main解决github上main和master的冲突

#### git push (-u) [remoteoriginname] ([localoriginname])
推送到远程仓库
常用git push -u origin main
[localoriginname]省略则为当前分支
其中-u用来绑定远程主机，之后就可以简写为git push和git pull而不用指定origin
<!-- ![](1631595461467.png) -->
{% asset_img 1631595461467.png [知乎大佬的解释] %}
<!-- > `$ git push origin`
上面命令表示，将当前分支推送到origin主机的对应分支。
如果当前分支只有一个追踪分支，那么主机名都可以省略。
`$ git push`
如果当前分支与多个主机存在追踪关系，那么这个时候-u选项会指定一个默认主机，这样后面就可以不加任何参数使用git push。
`$ git push -u origin master`
上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。 -->

#### git pull (--rebase) [remoteoriginname] ([localoriginname])
拉取远程分支内容
--rebase作用参考[这篇文章](https://blog.csdn.net/yao_hou/article/details/108178717)
其实就是git pull不在当前合并出新节点，而是在分支出来的结点进行合并并修改之后的结点
用来解决github新仓库第一次提交失败的问题

---

## 更新 2022-07-17

现在来看，当时的认识有许多地方都与实际有所出入，希望别误导了别人。这里先记录一下，有空更正。