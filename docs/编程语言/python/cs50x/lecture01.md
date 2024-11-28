---
sidebar_position: 1
---

# 创建 Python 代码

![](https://raw.githubusercontent.com/mouuii/picture/master/1732779862345.png)

- VSCode 是常用的代码编译器。在顶部，您会注意到一个文本编辑器。在底部，您将看到一个可以执行命令的终端。
- 在终端中，您可以执行code hello.py开始编码。
- 在文本编辑器中输入print("hello, world")。这是一个著名的程序，几乎所有程序员在学习过程中都会编写。
- 在终端窗口中，您可以执行命令。要运行该程序，您需要将光标移动到屏幕底部，然后单击终端窗口。您现在可以在终端窗口中键入第二个命令。在美元符号旁边，输入python hello.py并按键盘上的 Enter 键。
- 计算机实际上只理解0和1。因此，当您运行python hello.py时，python 将解释您在hello.py中创建的文本，并将其翻译为计算机可以理解的0和1。
- 运行python hello.py 程序的结果是hello, world 。

# Fuction

- 函数是计算机或计算机语言已经知道如何执行的动词或动作。
- 在hello.py程序中， print函数知道如何打印到终端窗口。
- print函数接受参数。在本例中， "hello, world"是print函数采用的参数。

# Bugs

- Bugs 是编码的错误部分，是需要你解决的问题！不要灰心！这是成为一名优秀程序员过程的一部分。

- 想象一下，在我们的hello.py程序中，意外地输入了print("hello, world" 请注意我们少了一个) 。如果我故意犯这个错误，编译器将在终端窗口中输出错误！
- 通常，错误消息会告知您所犯的错误，并为您提供如何修复这些错误的线索。然而，很多时候编译器不是这样的。

# 改进你的第一个 Python 程序

- 我们可以个性化您的第一个 Python 程序。
- 在hello.py的文本编辑器中，我们可以添加另一个函数。 input是一个以提示作为参数的函数。我们可以编辑我们的代码来表示

```python
input("What's your name? ")
print("hello, world")
```

然而，上面的代码不能让您的程序输出用户输入的内容。为此，我们需要向您介绍变量

# Variables 变量

- 变量用来存储值
- 在你的程序中，你可以在你的程序中引入你自己的变量。

```python
name = input("What's your name? ")
print("hello, world")
```

请注意，这个等号=位于中间 name = input("What's your name? ") 在编程中具有特殊的作用。这个等号字面上将右侧的内容分配给左侧的内容。因此， input("What's your name? ")返回的值被分配给name 。

- 如果您按如下方式编辑代码，您会注意到一个错误: 无论用户输入什么内容，程序都会返回hello, name 。 

```python
name = input("What's your name? ")
print("hello, name")
```
- 进一步编辑我们的代码，您可以输入

```python
name = input("What's your name? ")
print("hello,")
print(name)
```
- 终端窗口中的结果将是
```python
What's your name? David
hello
David
```
