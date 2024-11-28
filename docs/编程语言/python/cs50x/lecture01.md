---
sidebar_position: 1
---
# 课程0

# 使用 Python 创建代码

- VS Code 是一种特殊类型的文本编辑器，称为编译器。在顶部，您会注意到一个文本编辑器。在底部，您将看到一个可以执行命令的终端。
- 在终端，您可以执行`code hello.py`以开始编码。
- 在上面的文本编辑器中，你可以输入`print("hello, world")`。这是一个著名的典型程序，几乎所有程序员在学习过程中都会编写它。
- 在终端窗口中，您可以执行命令。要运行此程序，您需要将光标移到屏幕底部，单击终端窗口。现在您可以在终端窗口中输入第二个命令。在美元符号旁边，输入`python hello.py`并按下键盘上的回车键。
- 回想一下，计算机实际上只理解零和一。因此，当您运行 时`python hello.py`，python 将解释您在 中创建的文本`hello.py`，并将其翻译成计算机可以理解的零和一。
- 程序运行的结果`python hello.py`是`hello, world`。
- 恭喜！您刚刚创建了您的第一个程序。

# 函数

- 函数是计算机或计算机语言已经知道如何执行的动词或动作。
- 在您的`hello.py`程序中，该`print`函数知道如何打印到终端窗口。
- 函数`print`接受参数。在本例中，`"hello, world"`是函数`print`接受的参数。

# Bug缺陷

- 缺陷是编码的一个自然组成部分。这些都是错误，是需要您解决的问题！不要气馁！这是成为优秀程序员的过程的一部分。
- 想象一下，在我们的hello.py程序中，`print("hello, world")`我们无意中输入了 `print("hello, world"`，而忽略了编译器要求的最后的 `)`。如果我故意犯了这个错误，你会发现编译器会在终端窗口中输出错误！
- 通常，错误消息会告知您错误并为您提供修复方法的线索。但是，很多时候编译器并不是这样友好。

# 完善您的第一个Python程序

- 我们可以个性化您的第一个 Python 程序。
- 在我们的文本编辑器中，`hello.py`我们可以添加另一个函数。`input`是一个以提示为参数的函数。我们可以编辑代码以表示：
  ```apache
  input("What's your name? ")
  print("hello, world")
  ```
- 但是，仅此编辑还不能让您的程序输出用户输入的内容。为此，我们需要向您介绍变量

## 变量

- 变量只是您自己的程序内值的容器。
- 在您的程序中，您可以通过编辑它来引入您自己的变量，以便读取

  ```apache
  name = input("What's your name? ")
  print("hello, world")
  ```

  请注意，`name = input("What's your name? ")`中间的这个等号`=`在编程中起着特殊作用。这个等号实际上将右边的内容赋值给左边的内容。因此， 返回的值`input("What's your name? ")`被赋值给`name`。
- 如果您按如下方式编辑代码，您将注意到一个错误

  ```apache
  name = input("What's your name? ")
  print("hello, name")
  ```
- 无论用户输入什么，程序都会返回`hello, name`到终端窗口。
- 进一步编辑我们的代码，你可以输入

  ```apache
  name = input("What's your name? ")
  print("hello,")
  print(name)
  ```
- 终端窗口中的结果将是

  ```apache
  What's your name? David
  hello
  David
  ```
- 我们正在接近我们想要的结果！
- 您可以在 Python 的[数据类型](https://docs.python.org/3/library/datatypes.html)文档中了解更多信息

## 注释

- 注释是程序员跟踪他们在程序中所做的事情的一种方式，甚至可以告知其他人他们对代码块的意图。简而言之，它们是您自己和其他将看到您的代码的人的注释！
- 您可以为程序添加注释，以便查看程序正在执行的操作。您可以按如下方式编辑代码：

  ```apache
  # Ask the user for their name
  name = input("What's your name? ")
  print("hello,")
  print(name)
  ```
- 注释还可以作为您的待办事项列表。

## 伪代码

伪代码是一种重要的注释类型，它成为一种特殊类型的待办事项列表，尤其是当您不了解如何完成编码任务时。例如，在您的代码中，您可以编辑代码以说明：

- ```apache
  # Ask the user for their name
  name = input("What's your name? ")

  # Print hello
  print("hello,")

  # Print the name inputted
  print(name)
  ```

# 进一步改进你的第一个Python程序

- 我们可以进一步编辑代码如下：

  ```apache
  # Ask the user for their name
  name = input("What's your name? ")

  # Print hello and the inputted name
  print("hello, " + name)
  ```
- 事实证明，有些函数需要许多参数。
- 我们可以通过使用逗号`,`来传递多个参数,如下编辑代码

  ```apache
  # Ask the user for their name
  name = input("What's your name? ")

  # Print hello and the inputted name
  print("hello,", name)
  ```
- 如果我们输入“David”，则终端中的输出为`hello, David`. 成功了。

# 字符串和参数
- to be continued