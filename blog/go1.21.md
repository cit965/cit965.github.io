---
slug: go1.21
title: go1.21
authors: mouuii
tags: [go]
---


### 1.21.0 简介
最新的 Go 1.21版本，在 Go 1.20 六个月后发布。它的大部分更改都在工具链、运行时和库的实现中。与往常一样，该版本保持了Go 1的兼容性承诺;事实上，Go 1.21 改进了这一承诺。我们希望几乎所有的 Go 程序都能像以前一样继续编译和运行。

Go 1.21 对版本的编号进行了一个小的更改。过去，我们使用 Go 1.N 来指代整个 Go 语言版本和发行版系列以及该系列中的第一个版本。从 Go 1.21 开始，第一个版本现在是 Go 1.N.0。今天，我们将发布 Go 1.21 语言及其初始实现 Go 1.21.0 版本。

go 现在支持向后和向前语言兼容性。

### 语言改变

Go 1.21 为该语言添加了三个新的内置函数。

- 新函数 min 并 max 计算固定数量的给定参数的最小（或最大 max ）值
- 新函数 clear 从 map 中删除所有元素或将 slice 的所有元素归零

对泛型函数的类型推断进行了几项改进。规范中对类型推断的描述已得到扩展和澄清

在 Go 的未来版本中，我们计划解决 Go 编程中最常见的问题之一：循环变量捕获。Go 1.21 附带了此功能的预览，您可以使用环境变量在代码中启用该功能。

### 标准库添加

- 用于结构化日志记录的新日志/日志包 log/slog

- 新的 slice 包，用于对任何元素类型的切片进行常见操作

- 新的 map 包 ，用于对任何键或元素类型的映射进行常见操作

- 新的 cmp 包，带有用于比较有序值的新实用程

### 性能改进

- 启用 PGO 提升编译性能 
- 调整垃圾回收
- 优化对 amd64 和 arm64 对于 trace 的CPU 消耗


### WASI 添加新的端口

Go 1.21 为 WebAssembly System Interface （WASI） 添加了一个实验性端口，预览版 1 （ GOOS=wasip1 ， GOARCH=wasm ）。

### 代码

```go
package main

import "fmt"

func main() {
 var sl = []int{1, 2, 3, 4, 5, 6}
 fmt.Printf("before clear, sl=%v, len(sl)=%d, cap(sl)=%d\n", sl, len(sl), cap(sl))
 clear(sl)
 fmt.Printf("after clear, sl=%v, len(sl)=%d, cap(sl)=%d\n", sl, len(sl), cap(sl))

 var m = map[string]int{
  "tony": 13,
  "tom":  14,
  "amy":  15,
 }
 fmt.Printf("before clear, m=%v, len(m)=%d\n", m, len(m))
 clear(m)
 fmt.Printf("after clear, m=%v, len(m)=%d\n", m, len(m))
}
```