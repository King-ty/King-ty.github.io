---
title: 记leetcode剑指 Offer II 071. 按权重生成随机数
comments: true
mathjax: false
noticeOutdate:
  enable: true
  style: flat
  limit_day: 365
  position: top
  message_prev: It has been
  message_next: days since the last update, the content of the article may be outdated.
date: 2023-02-25 21:11:02
updated:
tags: [学习, leetcode, modern C++]
categories: [学习, leetcode]
keywords: [学习, leetcode, modern C++]
description:
top_img:
cover: 2023-02-25-21-13-01.png
---

# 题目和解法

## 题目

看这个神秘[链接](https://leetcode.cn/problems/cuyjEf/)~

## 思路和解法

这题思路十分简单。如果每个数的权重都是1，那么只要对下标范围求一下随机数就行了；现在权重不是1了，可以看作每个数关联一串连续的下标，那么可以在所有权重的和的范围内找一个随机数，然后看一个随机数位于哪个数对应的范围内即可。如何找到是哪个范围呢？可以使用前缀和presum数组，这样就变成了在presum数组中二分找一个值大于等于当前随机数，这个数对应的下标即为所求。思路可以转化为以下代码：

```c++
class Solution {
  vector<int> nums;
  int tot;

public:
  Solution(vector<int>& w) : nums(std::move(w)) {
    for (auto it = nums.begin() + 1; it != nums.end(); ++it) {
      *it += *(it - 1);
    };
    tot = nums[nums.size() - 1];
  }

  int pickIndex() { return upper_bound(nums.begin(), nums.end(), rand() % tot) - nums.begin(); }
};
```

但是在modern C++中使用C的`rand()`函数十分刺眼，而且这种传统的生成方式也会存在生成的随机数质量不好、分布不均匀的问题，因此正好借此机会学习一下C++的随机数生成方式。

最后我自己的代码如下，和封面上的题解做法还是有点区别，原因是题解做法求了2遍和，有性能和内存损耗：

```c++
class Solution {
  vector<int> nums;
  mt19937 gen;
  uniform_int_distribution<int> dis;

public:
  Solution(vector<int>& w) : nums(std::move(w)), gen(random_device{}()) {
    for (auto it = nums.begin() + 1; it != nums.end(); ++it) {
      *it += *(it - 1);
    };
    int tot = nums[nums.size() - 1];
    dis = uniform_int_distribution<int>(1, tot);
  }

  int pickIndex() {
    int x = dis(gen);
    return lower_bound(nums.begin(), nums.end(), x) - nums.begin();
  }
};
```

题解做法：
```c++
class Solution {
  vector<int> nums;
  mt19937 gen;
  uniform_int_distribution<int> dis;

public:
  Solution(vector<int>& w) : gen(random_device{}()), dis(1, accumulate(w.begin(), w.end(), 0)) {
    partial_sum(w.begin(), w.end(), back_inserter(nums));
  }

  int pickIndex() {
    int x = dis(gen);
    return lower_bound(nums.begin(), nums.end(), x) - nums.begin();
  }
};
```

## 学到的知识点

这次主要是学到了modern C++生成随机数的方式，这里简单记录下本次做题用到的一些内容：

### [std::mt19937](https://zh.cppreference.com/w/cpp/numeric/random/mersenne_twister_engine)

`std::mt19937`是C++11引入的伪随机数产生器，名字由来：

- mt是因为这个伪随机数产生器基于**M**ersenne **T**wister算法。
- 19937是因为产生随的机数的周期长，可达到$2^{19937}-1$。

常使用`std::random_device{}`或时间参数进行初始化：
```c++
std::mt19937 mt_rand(std::random_device{}());
std::mt19937 mt_rand(time(0));
std::mt19937 mt_rand(std::chrono::system_clock::now().time_since_epoch().count());
```

### [std::random_device](https://zh.cppreference.com/w/cpp/numeric/random/random_device)

`std::random_device`是均匀分布的整数随机数生成器，产生非确定性随机数。
可以以实现定义的伪随机数引擎实现，若非确定源（例如硬件设备）对实现不可用。此情况下每个 std::random_device 对象可生成同一数值序列。
通常用来生成种子。
例子见上条

### [std::uniform_int_distribution](https://zh.cppreference.com/w/cpp/numeric/random/uniform_int_distribution)

变换伪随机数生成器生成的值，生成新随机整数值$i$，均匀分布于闭区间$[a, b]$，即按照以下离散概率函数分布：
$$P(i|a,b)=\frac{1}{b-a+1}$$

使用闭区间上下界a,b初始化，每次使用需传入一个伪随机数生成器。eg：
```c++
std::random_device rd;  // 将用于为随机数引擎获得种子
std::mt19937 gen(rd()); // 以播种标准 mersenne_twister_engine
std::uniform_int_distribution<> dis(1, 6);

for (int n=0; n<10; ++n)
    // 用 dis 变换 gen 所生成的随机 unsigned int 到 [1, 6] 中的 int
    std::cout << dis(gen) << ' ';
```

### [std::partial_sum](https://zh.cppreference.com/w/cpp/algorithm/partial_sum)

求每项前缀和并写入第3个参数对应的迭代器。

### [std::back_inserter](https://zh.cppreference.com/w/cpp/iterator/back_inserter)

返回能用于添加元素到容器 c 尾端的`std::back_insert_iterator`。

### 关于构造函数

可以看出我的代码中和题解相比，构造`uniform_int_distribution<int> dis`时采用了先默认构造，再正常构造临时对象，最后赋值的方法。这样构造时其实是有额外损耗的，单从构造角度，肯定不如题解使用的冒号初始化一步到位的方法；但是由于复用前缀和可以少一次求和，其实要比题解方法好一点。我暂时没有想到两全的好方法...

# 感慨

记忆中有一次区域赛遇到了必须用`mt19937`能过而`rand`过不了的怪题，当时全靠队友C，自己赛后偷懒没有补，没想到直到今天才正式了解了C++的随机数生成方法...
