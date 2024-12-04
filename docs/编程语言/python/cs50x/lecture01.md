---
sidebar_position: 1
---
# 课程0

![](https://raw.githubusercontent.com/mouuii/picture/master/1732779862345.png)

# 创建 Python 代码

- VS Code 是一种特殊类型的文本编辑器，称为编译器。在顶部，您会注意到一个文本编辑器。在底部，您将看到一个可以执行命令的终端。
- 在终端，您可以执行`code hello.py`以开始编码。
- 在上面的文本编辑器中，你可以输入`print("hello, world")`。这是一个著名的典型程序，几乎所有程序员在学习过程中都会编写它。
- 在终端窗口中，您可以执行命令。要运行此程序，您需要将光标移到屏幕底部，单击终端窗口。现在您可以在终端窗口中输入第二个命令。在美元符号旁边，输入`python hello.py`并按下键盘上的回车键。
- 回想一下，计算机实际上只理解0和1。因此，当您运行 时`python hello.py`，python 将解释您在 中创建的文本`hello.py`，并将其翻译成计算机可以理解的0和1。
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

- 字符串，在 Python 中称为`str`，是一串文本。
- 回顾一下我们下面的代码，在多行结果展示上会产生一个视觉副作用：

  ```apache
  # Ask the user for their name
  name = input("What's your name? ")
  print("hello,")
  print(name)
  ```
- 函数接受的参数会影响它们的行为。如果我们查看文档[print](https://docs.python.org/3/library/functions.html#print)您会注意到我们可以学到很多有关print函数接受的参数的知识。
- 查看此文档，您将了解到打印函数自动包含一段代码`end='\n'`. `This \n indicates that the print function will automatically create a line break when run. The print function takes an argument called end`，并且默认是创建一个新行。
- 但是，从技术上来，我们可以为`end`自己提供一个参数，这样就不会创建新行！
- 我们可以修改我们的代码如下：

  ```apache
  # Ask the user for their name
  name = input("What's your name? ")
  print("hello,", end="")
  print(name)
  ```

通过提供，`end=""`我们将覆盖`end`的默认值，这样它就不会在第一个打印语句之后创建新行。提供名称为`“David”`，终端窗口中的输出将是`hello, David`。

- 因此，参数是函数可以采用的参数。
- 您可以在 Python 的文档中了解更多信息[print](https://docs.python.org/3/library/functions.html#print)。

## 引号的一个小问题

- 请注意，如何在字符串中添加引号是多么困难。
- `print("hello,"friend"")`将不起作用，编译器将抛出错误。
- 一般来说，有两种方法可以解决这个问题。首先，你可以简单地将引号改为单引号。
- 另一种更常用的方法是将代码编码为`print("hello, \"friend\"")`。反斜杠告诉编译器应将后面的字符视为字符串中的引号，并避免编译器错误。

# 格式化字符串

- 使用字符串最优雅的方式可能如下：

  ```apache
  # Ask the user for their name
  name = input("What's your name? ")
  print(f"hello, {name}")
  ```

注意`print(f"hello, {name}")`中的`f`。这个`f`是 Python 中以特殊方式处理此字符串的特殊指示符，与我们在本讲座中介绍的先前方法不同。期望您将在本课程中经常使用这种风格的字符串。

# 有关字符串的更多信息

- 你永远不应该期望你的用户会按照你的意愿合作。因此，你需要确保你的用户的输入得到纠正或检查。
- 事实证明，字符串内置有从字符串中删除空格的功能。
- 通过在`name`上使用`strip`方法，即 `name = name.strip()`，将删除用户输入左侧和右侧的所有空格。您可以将代码修改为：

  ```apache
  # Ask the user for their name
  name = input("What's your name? ")

  # Remove whitespace from the str
  name = name.strip()

  # Print the output
  print(f"hello, {name}")
  ```

重新运行该程序，无论您在名称之前或之后输入多少个空格，它都会删除所有空格。

- 使用该`title`方法，它将把用户的名字变为大写：

  ```apache
  # Ask the user for their name
  name = input("What's your name? ")

  # Remove whitespace from the str
  name = name.strip()

  # Capitalize the first letter of each word
  name = name.title()

  # Print the output
  print(f"hello, {name}")
  ```
- 到此时，您可能已经厌倦了在终端窗口中反复输入python。您可以使用键盘的向上箭头来调用您最近执行的终端命令。
- 知道这点您可以更高效地修改代码：

  ```apache
  # Ask the user for their name
  name = input("What's your name? ")

  # Remove whitespace from the str and capitalize the first letter of each word
  name = name.strip().title()

  # Print the output
  print(f"hello, {name}")
  ```

这会产生与您之前的代码相同的结果。

- 我们甚至可以更进一步！

  ```apache
  # Ask the user for their name, remove whitespace from the str and capitalize the first letter of each word
  name = input("What's your name? ").strip().title()

  # Print the output
  print(f"hello, {name}")
  ```
- 您可以在 Python 文档中了解有关字符串的更多信息[str](https://docs.python.org/3/library/stdtypes.html#str)

# 整数或Int

- 在 Python 中，整数被称为`int`。
- 在数学世界中，我们熟悉 +、-、*、/ 和 % 运算符。最后一个运算符`%`或模运算符可能对您来说不太熟悉。
- 您不是必须使用编译器中的文本编辑器窗口来运行 Python 代码。在终端中，您可以python单独运行。您将在终端窗口中看到`>>>`。然后您可以运行实时交互式代码。您可以输入`1+1`，它将运行该计算。本课程中通常不会使用此模式。
- 再次打开 VS Code，我们可以在终端中输入`code calculator.py`。这将创建一个新文件，我们将在其中创建自己的计算器。
- 首先，我们可以声明几个变量。

  ```apache
  x = 1
  y = 2

  z = x + y

  print(z)
  ```

当然，当我们运行`python calculator.py`我们会在终端窗口中得到结果`3`。我们可以使用`input`函数使其更具交互性。

```apache
x = input("What's x? ")
y = input("What's y? ")

z = x + y

print(z)
```

- 运行这个程序，我们发现输出了并不正确地12。为什么会这样呢？
- 之前，我们已经了解了`+`符号如何连接两个字符串。由于您从计算机键盘输入的内容以文本形式进入编译器，因此它被视为字符串。因此，我们需要将此输入从字符串转换为整数。我们可以按如下方式进行操作：

  ```apache
  x = input("What's x? ")
  y = input("What's y? ")

  z = int(x) + int(y)

  print(z)
  ```

现在结果是正确的。 使用的`int(x)`称为“强制转换”，即将值暂时从一种类型的变量（本例中为字符串）更改为另一种类型的变量（本例中为整数）。

- 我们可以进一步改进我们的程序如下：

  ```apache
  x = int(input("What's x? "))
  y = int(input("What's y? "))

  print(x + y)
  ```

这说明你可以在函数上运行函数。首先运行内部函数，然后运行外部函数。首先函数`input`运行。然后是函数`int`。

- 您可以在 Python 的文档中了解更多信息[int](https://docs.python.org/3/library/functions.html?highlight=float#int)。

# 可读性获胜

- 当决定编码任务的方法时，请记住，人们可以对同一问题的多种方法做出合理的论证。
- 无论您采用何种方法完成编程任务，请记住您的代码必须具有可读性。您应该使用注释来为自己和他人提供关于代码功能的信息。此外，您还应以易于阅读的方式编写代码。

# 浮点基础知识

- 浮点值是其中包含小数的实数，例如`0.52`。
- 您可以更改代码以支持浮点数，如下所示：

  ```apache
  x = float(input("What's x? "))
  y = float(input("What's y? "))

  print(x + y)
  ```

此更改允许您的用户输入`1.2`和`3.4`展示总计`4.6`.

- 但是，让我们想象一下，您想将总数四舍五入为最接近的整数。查看 Python 文档中的`round`，您将看到可用的参数是`round(number[n, ndigits])`。这些方括号表示程序员可以指定一些可选内容。因此，您可以`round(n)`将数字四舍五入为最接近的整数。或者，您可以按如下方式编写代码：

  ```apache
  # Get the user's input
  x = float(input("What's x? "))
  y = float(input("What's y? "))

  # Create a rounded result
  z = round(x + y)

  # Print the result
  print(z)
  ```

输出将四舍五入为最接近的整数。

- 如果我们想格式化长数字的输出，该怎么办？例如，您可能希望看到`1,000` ，而不是`1000`。您可以按如下方式修改代码：

  ```apache
  # Get the user's input
  x = float(input("What's x? "))
  y = float(input("What's y? "))

  # Create a rounded result
  z = round(x + y)

  # Print the formatted result
  print(f"{z:,}")
  ```

虽然相当神秘，但这`print(f"{z:,}")`会产生一种情况，其中输出`z`将包含逗号，结果可能看起来像`1,000`或`2,500`。

# 关于浮点数的更多信息

- 我们如何对浮点值取整？首先，按如下方式修改代码：

```apache
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result
z = x / y

# Print the result
print(z)
```

当输入`x`为 `2` 和`y`为 `3` 时，结果 `z` 为`0.6666666666`，似乎如我们预期的那样趋于无穷。

- 假设我们想将其向下取整。我们可以按如下方式修改代码：

  ```apache
  # Get the user's input
  x = float(input("What's x? "))
  y = float(input("What's y? "))

  # Calculate the result and round
  z = round(x / y, 2)

  # Print the result
  print(z)
  ```

正如我们所料，这会将结果四舍五入到最接近的小数点后两位。

- 我们还可以用来`fstring`格式化输出，如下所示：
  ```apache
  # Get the user's input
  x = float(input("What's x? "))
  y = float(input("What's y? "))

  # Calculate the result
  z = x / y

  # Print the result
  print(f"{z:.2f}")
  ```

此神秘`fstring`代码显示的内容与我们之前的取整策略相同。

- 您可以在 Python 的文档中了解更多信息[float](https://docs.python.org/3/library/functions.html?highlight=float#float)。

# Def 关键字

- 创建我们自己的函数不是很好吗？
- 让我们通过在终端窗口中输入`code hello.py`来恢复最终代码`hello.py`。您的起始代码应如下所示：
  ```apache
  # Ask the user for their name, remove whitespace from the str and capitalize the first letter of each word
  name = input("What's your name? ").strip().title()

  # Print the output
  print(f"hello, {name}")
  ```

我们可以改进我们的代码来创建我们自己的特殊函数来为我们说“你好”！

- 删除文本编辑器中的所有代码，让我们从头开始：
  ```apache
  name = input("What's your name? ")
  hello()
  print(name)
  ```

尝试运行此代码时，编译器会抛出错误。毕竟，没有定义函数`hello`。

- 我们可以创建自己的函数`hello`如下所示：
  ```apache
  def hello():
      print("hello")

  name = input("What's your name? ")
  hello()
  print(name)
  ```

请注意，`def hello()`下面的所有内容都是缩进的。Python 是一种缩进语言。它使用缩进来理解哪些是上述函数的一部分。因此，函数`hello`中的所有内容都必须缩进。当某些内容未缩进时，它会将其视为不在`hello`函数内。在终端窗口中运行`python hello.py`，你会发现你的输出并不完全符合你的要求。

- 我们可以进一步改进我们的代码：
  ```apache
  # Create our own function
  def hello(to):
      print("hello,", to)


  # Output using our own function
  name = input("What's your name? ")
  hello(name)
  ```

在这里，在第一行中，您正在创建`hello`函数。但是，这一次，您告诉编译器此函数只接受一个参数：一个名为`to`的变量。因此，当您调用`hello(name)`计算机会将 传递`name`给`hello`函数中的`to`。这就是我们将值传递给函数的方式。非常有用！在终端窗口中运行`python hello.py`，您会看到输出更接近我们在本讲座前面提出的理想值。

- 我们可以更改代码以添加默认值hello：
  ```apache
  # Create our own function
  def hello(to="world"):
      print("hello,", to)


  # Output using our own function
  name = input("What's your name? ")
  hello(name)

  # Output without passing the expected arguments
  hello()
  ```

亲自测试一下你的代码。注意第一个`hello`代码的行为是否符合你的预期，第二个 hello 代码没有传递任何值，默认情况下会输出`hello, world`。

- 我们不必将函数放在程序的开头。我们可以将其向下移动，但我们需要告诉编译器我们有一个`main`函数和一个单独的`hello`函数.
  ```apache
  def main():

      # Output using our own function
      name = input("What's your name? ")
      hello(name)

      # Output without passing the expected arguments
      hello()


  # Create our own function
  def hello(to="world"):
      print("hello,", to)
  ```

然而，仅此一点就会产生某种错误。如果我们运行`python hello.py`，什么也不会发生！原因是此代码中没有任何内容真正调用该`main`函数并使我们的程序运行起来。

- 以下很小的修改将调用该`main`函数并使我们的程序恢复正常运行：

```apache
def main():

    # Output using our own function
    name = input("What's your name? ")
    hello(name)

    # Output without passing the expected arguments
    hello()


# Create our own function
def hello(to="world"):
    print("hello,", to)


main()
```

# 返回值

- 您可以想象许多场景，您不仅希望函数执行操作，还希望函数将值返回到主函数。例如，您可能希望函数`x + y`将此计算值返回到程序的另一部分，而不是简单地打印计算结果。我们将这种“传回”的值称为`return`值。
- 通过输入`code calculator.py`返回到我们的代码`calculator.py`中。删除那里的所有代码。按如下方式重新编写代码：

```apache
def main():
    x = int(input("What's x? "))
    print("x squared is", square(x))


def square(n):
    return n * n


main()
```

实际上，x传递给square。然后，的计算x * x返回到主函数。

# 总结

通过本堂课的学习，您已经学会了在自己的程序中会用到无数次的技能。您已经了解了……

- 用 Python 创建您的第一个程序；
- 函数；
- 错误；
- 变量；
- 注释;
- 伪代码;
- 字符串；
- 参数;
- 格式化字符串；
- 整数；
- 可读性原则；
- 浮点数；
- 创建自己的函数；以及
- 返回值。
