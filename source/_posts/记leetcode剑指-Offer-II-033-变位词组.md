---
title: 记leetcode剑指 Offer II 033. 变位词组
comments: true
mathjax: false
noticeOutdate:
  enable: true
  style: flat
  limit_day: 365
  position: top
  message_prev: It has been
  message_next: days since the last update, the content of the article may be outdated.
date: 2023-02-09 15:51:46
updated:
tags: [学习, leetcode, modern C++]
categories: [学习, leetcode]
keywords: [学习, leetcode, modern C++]
description:
top_img:
cover: 2023-02-09-15-53-01.png
---

# 题目和解法

## 题目

看这个神秘[链接](https://leetcode.cn/problems/sfvd7V/)~

## 思路和解法

其实这题思路上还是没什么难度的，看完题目可以想到最直接的思路是统计每个单词中各字母出现的次数，然后对这个次数序列作为hash的key进行构造。这里我的方法和题解是不一样的，我的hash的value是要返回的ret数组的行号，这样枚举一遍可以直接得到要返回的数组。因此直接撸码得到如下解法：

```c++
class Solution {
public:
  vector<vector<string>> groupAnagrams(vector<string> &strs) {
    unordered_map<vector<int>, int> mp;
    vector<vector<string>> ret;
    for (auto str : strs) {
      vector<int> cnts(26, 0);
      for (auto c : str) {
        cnts[c - 'a']++;
      }
      if (!mp.count(cnts)) {
        mp.insert({cnts, ret.size()});
        ret.push_back(vector<string>{str});
      } else {
        ret[mp.at(cnts)].push_back(str);
      }
    }
    return ret;
  }
};
```

但是这样的思路写出来的代码却会编译报错，看了一下报错信息，大概是`unordered_map<vector<int>, int> mp;`这句声明哈希表出现了问题，结合搜索工具，确定是因为无法对复杂对象`vector<int>`进行hash操作引起的（顺便吐槽一下，C++的报错真的难看QwQ）。

于是简单看了下CPPReference上的说法，如何构造一个符合要求的`unordered_map`，看完后决定摆烂，这部分就直接抄题解了...

最后的代码如下，哈希函数等部分抄了题解的写法：

```c++
class Solution {
public:
  vector<vector<string>> groupAnagrams(vector<string> &strs) {
    auto myHash = [fn = hash<int>{}](const array<int, 26> &arr) -> size_t {
      return accumulate(arr.begin(), arr.end(), 0U, [&](size_t acc, int num) {
        return (acc << 1) ^ fn(num);
      });
    };
    unordered_map<array<int, 26>, int, decltype(myHash)> mp(0, myHash);
    vector<vector<string>> ret;
    for (auto str : strs) {
      array<int, 26> cnts{};
      for (auto c : str) {
        cnts[c - 'a']++;
      }
      if (!mp.count(cnts)) {
        mp.insert({cnts, ret.size()});
        ret.push_back(vector<string>{str});
      } else {
        ret[mp.at(cnts)].push_back(str);
      }
    }
    return ret;
  }
};
```

## 学到的知识点

其实这题从难度上来说，完全不值得我来做一次详细的笔记。主要还是这个题解的写法中有不少C++11的特性涉及到了我的知识盲区，因此为了学习还是记录一下。

### [std::array](https://zh.cppreference.com/w/cpp/container/array)

首先是[std::array](https://zh.cppreference.com/w/cpp/container/array)的使用，我的第一版代码中使用的是`vector`，但这样一个动态可变的数组放在这里确实有一点“高射炮打蚊子”之感；但是如果使用C风格的数组`T[N]`，我感觉在这里又不够灵活。看了答案才知道C++11引入了`array`这一类型，非常适用于这里的场景。

### [decltype 说明符](https://zh.cppreference.com/w/cpp/language/decltype)

也是C++类型推导的一种形式，但是和`auto`不同，`auto`是推导右值的类型，而`decltype(expr)`则是推导括号内表达式`expr`的类型。也是十分灵活好用。

### [std::accumulate](https://zh.cppreference.com/w/cpp/algorithm/accumulate)

在标头`<numeric>`定义，算法库中的区间求累加结果的函数，可以传入一个lambda表达式来改变操作的性质，可以用来简化循环写法，非常灵活好用。

### 函数对象

重载了函数调用运算符`operator()`的类是函数对象 (FunctionObject) 类型。需要先实例化，然后当作函数使用。

`sort`和`accumulate`等工具函数都可以接受函数对象（或函数、lambda表达式等）

可以参考[链接](https://zh.cppreference.com/w/cpp/language/operators)中的**函数调用运算符**部分

### [std::hash](https://zh.cppreference.com/w/cpp/utility/hash)

在标头`<functional>`定义，是一种泛型函数对象，这里使用`fn = hash<int>{}`实例化后使用`fn(num)`产生num的hash值。

### [Lambda 表达式](https://zh.cppreference.com/w/cpp/language/lambda)

我个人非常喜欢[C++的lambda表达式](https://zh.cppreference.com/w/cpp/language/lambda)的语法，因为他非常简洁的表达出了**捕获**及**函数签名**，清晰明了！这里简单记录下这次代码中用到的特性：

1. 默认捕获：
   - &（以引用隐式捕获被使用的自动变量）和
   - =（以复制隐式捕获被使用的自动变量）。
2. 捕获中使用赋值语句：
   带有初始化器的捕获符的行为如同它声明并显式捕获一个以类型 auto 声明的变量，该变量的声明区是 lambda 表达式体（即它不在它的初始化器的作用域中），但：

   如果以复制捕获，那么闭包对象的非静态数据成员是指代这个 auto 变量的另一种方式。
   如果以引用捕获，那么引用变量的生存期在闭包对象的生存期结束时结束。
   这可以用于以像 x = std::move(x) 这样的捕获符捕获仅可移动的类型。
   
   这也可以使通过 const 引用进行捕获成为可能，比如以 &cr = std::as_const(x) 或类似的方式。

   ```c++
   int x = 4;
   auto y = [&r = x, x = x + 1]()->int
   {
       r += 2;
       return x * x;
   }(); // 更新 ::x 到 6 并初始化 y 为 25。
   ```

3. `-> type` 返回值类型，一般可省略，自动推导
4. lambda表达式类型：闭包类型，可以转变为相应的函数指针

### 定制key类型的unordered_map

可以使用函数对象、lambda表达式等构造hash和comp函数，以下是使用lambda表达式的示例（参考[链接](https://zh.cppreference.com/w/cpp/container/unordered_map/unordered_map)中最下面的*示例*部分）：

```c++
// 选项 3 ：用 lambdas
// 注意必须将初始桶数传递给构造函数
struct Goo {int val; };
auto hash = [](const Goo &g){ return std::hash<int>{}(g.val); };
auto comp = [](const Goo &l, const Goo &r){ return l.val == r.val; };
std::unordered_map<Goo, double, decltype(hash), decltype(comp)> m8(10,hash, comp);
```

# 感慨

终于搞定了~没想到为了解决这道题用了这么多Modern C++的特性，看来我之前对于modern C++确实了解偏少了。

PS：
最近有在尝试写一写leetcode上的剑指offer（[链接](https://github.com/King-ty/JianzhiOffer)），主要尝试练习Rust，也考虑借此熟悉Mondern C++、JAVA、Python、TypeScript、Go等语言，暂时来看，确实达到了我预想的目的。
只是Rust做链表相关的内容怎么这么难受啊啊啊...
