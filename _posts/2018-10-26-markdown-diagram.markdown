---
layout: post
title: Markdown下的Diagram
date: 2018-10-26 17:32:20 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: software.jpg
fig-caption: # Add figcaption (optional)
tags: [sequenceDiagram, flowChart, formula]
---

#### 流程图
 流程图（Flow Chart）：以特定的图形符号加上说明，表示算法的图

· 流程图样式

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```

· 引用js

    flowchart-latest.js和raphael.min.js


#### 公式
 公式（Formula）：用数学符号表示，各个量之间的一定关系(如定律或定理)的式子，能普遍应用于同类事物的方式方法.

· 公式样式

$$ f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right) $$

$$E=mc^2$$

· 引用js

    MathJax.js

#### 代码块

```Python
@requires_authorization
class SomeClass:
    pass

if __name__ == '__main__':
    # A comment
    print 'hello world'
```

#### 序列图
  序列图（Sequence Diagram）：主要用于按照交互发生的一系列顺序，显示对象之间的这些交互

· 序列图样式

```seq
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

```sequence
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
```

· 引用js

    js-sequence-diagrams