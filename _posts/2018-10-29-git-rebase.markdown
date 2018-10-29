---
layout: post
title: git压缩多个commit
date: 2018-10-29 00:32:20 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: how-to-start.jpg
fig-caption: # Add figcaption (optional)
tags: [Git, rebase]
---

压缩多个commit为一个commit, 应用场景是需要多次往主分支cherrypick多个commit.

操作步骤：
1. commit多个提交
2. git rebase -i HEAD^4
   压缩几个commits
3. i进入编辑
4. 除第一个，其他的pick改成squash，完成合并
5. change message
6. git push origin HEAD

