---
sidebar_position: 2
---


-    [欢迎！](https://cs50.harvard.edu/x/2024/notes/0/#welcome)
-    [未来会发生什么](https://cs50.harvard.edu/x/2024/notes/0/#whats-ahead)
-    [社区！](https://cs50.harvard.edu/x/2024/notes/0/#community)
-    [计算机科学](https://cs50.harvard.edu/x/2024/notes/0/#computer-science)
-    [ASCII码](https://cs50.harvard.edu/x/2024/notes/0/#ascii)
-    [统一码](https://cs50.harvard.edu/x/2024/notes/0/#unicode)
-    [表示](https://cs50.harvard.edu/x/2024/notes/0/#representation)
-    [算法](https://cs50.harvard.edu/x/2024/notes/0/#algorithms)
-    [伪代码](https://cs50.harvard.edu/x/2024/notes/0/#pseudocode)
-    [人工智能](https://cs50.harvard.edu/x/2024/notes/0/#artificial-intelligence)
-    [划痕](https://cs50.harvard.edu/x/2024/notes/0/#scratch)
-    [你好世界](https://cs50.harvard.edu/x/2024/notes/0/#hello-world)
-    [你好，你](https://cs50.harvard.edu/x/2024/notes/0/#hello-you)
-    [喵与抽象](https://cs50.harvard.edu/x/2024/notes/0/#meow-and-abstraction)
-    [条件句](https://cs50.harvard.edu/x/2024/notes/0/#conditionals)
-    [奥斯卡时间](https://cs50.harvard.edu/x/2024/notes/0/#oscartime)
-    [艾维最难的游戏](https://cs50.harvard.edu/x/2024/notes/0/#ivys-hardest-game)
-    [总结](https://cs50.harvard.edu/x/2024/notes/0/#summing-up)

##  [欢迎！](https://cs50.harvard.edu/x/2024/notes/0/#welcome)

-   本课程不仅仅涉及计算机编程！
-   事实上，这门课是关于以一种极其赋权的方式解决问题的！您在这里学到的解决问题的方法可能会立即适用于您本课程之外的工作，甚至您的整个职业生涯！
-   然而，这并不容易！在本课程中，您将“从消防水带中汲取知识”。你会对未来几周所取得的成就感到惊讶。
-   本课程更多的是让你从“你今天的位置”提升“你”，而不是达到一些想象的标准。
-   本课程最重要的开场考虑因素：给予您学习本课程所需的时间。每个人的学习方式都不同。如果一开始效果不佳，要知道随着时间的推移，你的技能会不断提高。
-   如果这是您的第一堂计算机科学课，请不要害怕！对于大多数同龄人来说，这也是他们的第一堂计算机科学课！

##  [未来会发生什么](https://cs50.harvard.edu/x/2024/notes/0/#whats-ahead)

-   本周您将学习 Scratch，一种可视化编程语言。
-   然后，在接下来的几周里，您将学习 C。看起来像这样：
    
    ```
    <span>#include</span> <span>&lt;stdio.h&gt;</span><span>
    </span>
    <span>int</span> <span>main</span><span>(</span><span>void</span><span>)</span>
    <span>{</span>
      <span>printf</span><span>(</span><span>"hello, world</span><span>\n</span><span>"</span><span>);</span>
    <span>}</span>
    ```
    
-   此外，随着几周的进展，您将了解算法。
-   您将学习有关记忆的知识。
-   您将了解有缺陷的代码以及导致计算机崩溃的原因。
-   您将了解哈希表等数据结构。
-   然后，我们将过渡到一种新的、更高级的语言，称为_Python_ 。您的代码将如下所示：
    
-   本课程将使您深入了解最新的编程语言是如何从早期的语言发展而来的。
-   您将学习 SQL、JavaScript、HTML 和 CSS。
-   我们还将研究如何使用数据库和第三方框架来构建 Web 应用程序。

##  [社区！](https://cs50.harvard.edu/x/2024/notes/0/#community)

-   您是在哈佛大学、哈佛延伸学院和通过 edX.org 学习本课程的社区的一员。
-   拼图日和 CS50 博览会
-   如果您是哈佛大学校园的学生，您可以参加 CS50 午餐会和 CS50 黑客马拉松。

##  [计算机科学](https://cs50.harvard.edu/x/2024/notes/0/#computer-science)

-   本质上，计算机编程就是接受一些输入并创建一些输出 - 从而解决问题。输入和输出之间发生的事情（我们可以称之为_黑匣子）_是本课程的重点。
    
    ![Black box with input and output](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide38.png "Black box with input and output")
    
-   例如，我们可能需要点名上课。我们可以使用一种称为_一元的_系统来计数，一次一根手指。
-   今天的计算机使用一种称为_二进制的_系统进行计数。从术语_“二进制数字”_中，我们得到了一个熟悉的术语_“位”_ 。_位_是零或一：开或关。
-   计算机只用零和一来说话。零代表_关闭。_代表_上。_计算机是数百万甚至数十亿个打开和关闭的晶体管。
-   如果你想象使用一个灯泡，单个灯泡只能从零数到一。
-   然而，如果您有三个灯泡，还有更多选择可供您选择！
-   使用三个灯泡，以下可以代表零：
    
-   同样，以下内容代表其中之一：
    
-   根据这个逻辑，我们可以提出以下等于二：
    
-   进一步扩展这个逻辑，以下代表三个：
    
-    四个将显示为：
    
-   事实上，我们只使用三个灯泡就可以算到七个！
    
-   作为启发式，我们可以想象以下值代表_二进制数字_中每个可能的位置：
    
-   计算机使用“base-2”进行计数。这可以如下图所示：
    
-   因此，您可以说需要三位（四位、二位和一位）来表示高达七的数字。
-   计算机通常使用八位（也称为_字节_）来表示数字。例如， `00000101`是_二进制_中的数字 5。 `11111111`代表数字255。

##  [ASCII码](https://cs50.harvard.edu/x/2024/notes/0/#ascii)

-   正如数字是由 1 和 0 组成的二进制模式一样，字母也用 1 和 0 来表示！
-   由于表示数字和字母的 1 和 0 之间存在重叠，因此创建了_ASCII_标准来将特定字母映射到特定数字。
-   例如，决定将字母`A`映射到数字 65。01000001 表示`01000001`的数字 65。
-   如果您收到一条文本消息，该消息下的二进制可能代表数字 72、73 和 33。将这些映射到 ASCII，您的消息将如下所示：
    
-   感谢上帝像 ASCII 这样的标准让我们能够就这些值达成一致！
-   这是 ASCII 值的扩展映射：
    
    ![ASCII map](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide93.png "ASCII map")
    
-   如果您愿意，您可以了解有关[ASCII 的](https://en.wikipedia.org/wiki/ASCII)更多信息。
-   由于二进制最多只能计数_255，_因此我们受到 ASCII 表示的字符数的限制。

## [Unicode](https://cs50.harvard.edu/x/2024/notes/0/#unicode)

-   As time has rolled on, there are more and more ways to communicate via text.
-   Since there were not enough digits in binary to represent all the various characters that could be represented by humans, the _Unicode_ standard expanded the number of bits that can be transmitted and understood by computers. Unicode includes not only special characters, but emoji as well.
-   There are emoji that you probably use every day. The following may look familiar to you:
    
    ![emoji](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide103.png "emoji")
    
-   Computer scientists faced a challenge when wanting to assign various skin tones to each emoji to allow the communication to be further personalized. In this case, the creators and contributors of emoji decided that the initial bits would be the structure of the emoji itself, followed by skin tone.
-   For example, the unicode for a generic thumbs up is `U+1F44D`. However, the following represents the same thumbs up with a different skin tone: `U+1F44D U+1F3FD`.
-   More and more features are being added to the Unicode standard to represent further characters and emoji.
-   If you wish, you can learn more about [Unicode](https://en.wikipedia.org/wiki/Unicode).
-   If you wish, you can learn more about [emoji](https://en.wikipedia.org/wiki/Emoji).

## [Representation](https://cs50.harvard.edu/x/2024/notes/0/#representation)

-   Zeros and ones can be used to represent color.
-   Red, green, and blue (called `RGB`) is a combination of three numbers.
    
    ![red green blue boxes](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide118.png "red green blue boxes")
    
-   Taking our previously used 72, 73, and 33, which said `HI!` via text, would be interpreted by image readers as a light shade of yellow. The red value would be 72, the green value would be 73, and the blue would be 33.
    
    ![yellow box](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide120.png "yellow box")
    
-   Further, zeros and ones can be used to represent images, videos, and music!
-   Images are simply collections of RGB values.
-   Videos are sequences of many images that are stored together, just like a flipbook.
-   Music can be represented through MIDI data.

## [Algorithms](https://cs50.harvard.edu/x/2024/notes/0/#algorithms)

-   Problem-solving is central to computer science and computer programming.
-   Imagine the basic problem of trying to locate a single name in a phone book.
-   How might you go about this?
-   One approach could be to simply read from page one to the next to the next until reaching the last page.
-   Another approach could be to search two pages at a time.
-   A final and perhaps better approach could be to go to the middle of the phone book and ask, “Is the name I am looking for to the left or to the right?” Then, repeat this process, cutting the problem in half and half and half.
-   Each of these approaches could be called algorithms. The speed of each of these algorithms can be pictured as follows in what is called _big-O notation_:
    
    ![big o notation](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide141.png "big o notation")
    
    Notice that the first algorithm, highlighted in red, has a big-O of `n` because if there are 100 names in the phone book, it could take up to 100 tries to find the correct name. The second algorithm, where two pages were searched at a time, has a big-O of ‘n/2’ because we searched twice as fast through the pages. The final algorithm has a big-O of log<sub data-immersive-translate-walked="8991be99-747f-4531-abe0-8e84b62d7369">2</sub>n as doubling the problem would only result in one more step to solve the problem.
    

## [Pseudocode](https://cs50.harvard.edu/x/2024/notes/0/#pseudocode)

-   The ability to create _pseudocode_ is central to one’s success in both this class and in computer programming.
-   Pseudocode is a human-readable version of your code. For example, considering the third algorithm above, we could compose pseudocode as follows:
    
    ```
    1  Pick up phone book
    2  Open to middle of phone book
    3  Look at page
    4  If person is on page
    5      Call person
    6  Else if person is earlier in book
    7      Open to middle of left half of book
    8      Go back to line 3
    9  Else if person is later in book
    10     Open to middle of right half of book
    11     Go back to line 3
    12 Else
    13     Quit
    ```
    
-   Pseudocoding is such an important skill for at least two reasons. First, when you pseudocode before you create formal code, it allows you to think through the logic of your problem in advance. Second, when you pseudocode, you can later provide this information to others that are seeking to understand your coding decisions and how your code works.
-   Notice that the language within our pseudocode has some unique features. First, some of these lines begin with verbs like _pick up,_ _open,_ _look at._ Later, we will call these _functions_.
-   Second, notice that some lines include statements like `if` or `else if.` These are called _conditionals_.
-   Third, notice how there are expressions that can be stated as _true_ or _false,_ such as “person is earlier in the book.” We call these _boolean expressions_.
-   Finally, notice how these statements like “go back to line 3.” We call these _loops_.
-   These building blocks are the fundamentals of programming.
-   In the context of _Scratch_, which is discussed below, we will use each of the above basic building blocks of programming.

## [Artificial Intelligence](https://cs50.harvard.edu/x/2024/notes/0/#artificial-intelligence)

-   Consider how we can utilize the building blocks above to start creating our own artificial intelligence. Look at the following pseudocode:
    
    ```
    If student says hello
        Say hello back
    Else if student says goodbye
        Say goodbye back
    Else if student asks how you are
        Say you're well
    Else if student asks why 111 in binary is 7 in decimal
    ...
    ```
    
    Notice how just to program a handful of interactions, many lines of code would be required. How many lines of code would be required for thousands or tens of thousands of possible interactions?
    
-   `large language models` look at patterns in large blocks of language. Such language models attempt to create a best guess of what words come after one another or alongside one another.
-   As very useful in many avenues of life and work, we stipulate that the utilization of AI-based software other than CS50’s own is _not reasonable_.
-   CS50’s own AI-based software tool called [CS50 Duck](https://cs50.ai/) is an AI helper that you can use during this course. It will help you, but not give away the entire answers to the course’s problems.

## [Scratch](https://cs50.harvard.edu/x/2024/notes/0/#scratch)

-   _Scratch_ is a visual programming language developed by MIT.
-   Scratch utilizes the same essential coding building blocks that we covered earlier in this lecture.
-   Scratch is a great way to get into computer programming because it allows you to play with these building blocks in a visual manner, not having to be concerned about the syntax of curly braces, semicolons, parentheses, and the like.
-   Scratch `IDE` (integrated development environment) looks like the following:
    
    ![scratch interface](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide162.png "scratch interface")
    
    Notice that on the left, there are _building blocks_ that you can use in your programming. To the immediate right of the building blocks, there is the area to which you can drag blocks to build a program. To the right of that, you see the _stage_ where a cat stands. The stage is where your programming comes to life.
    
-   Scratch operates on a coordinate system as follows:
    
    ![scratch coordinate system](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide167.png "scratch coordinate system")
    
    Notice that the center of the stage is at coordinate (0,0). Right now, the cat’s position is at that same position.
    

## [Hello World](https://cs50.harvard.edu/x/2024/notes/0/#hello-world)

-   To begin, drag the “when green flag clicked” building block to the programming area. Then, drag the `say` building block to the programming area and attach it to the previous block.
    
    Notice that when you click the green flag now, on the stage, the cat says, “hello world.”
    
-   This illustrates quite well what we were discussing earlier regarding programming:
    
    ![scratch with black box](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide172.png "scratch with black box")
    
    Notice that the input `hello world` is passed to the function `say`, and the _side effect_ of that function running is the cat saying `hello world`.
    

## [Hello, You](https://cs50.harvard.edu/x/2024/notes/0/#hello-you)

-   We can make your program more interactive by having the cat say `hello` to someone specific. Modify your program as below:
    
    Notice that when the green flag is clicked, the function `ask` is run. The program prompts you, the user, `What's your name?` It then stores that name in the _variable_ called `answer`. The program then passes `answer` to a special function called `join`, which combines two strings of text `hello`, and whatever name was provided. These collectively are passed to the `say` function. The cat says, `Hello,` and a name. Your program is now interactive.
    
-   Quite similarly, we can modify our program as follows:
    
    Notice that this program, when the green flag is clicked, passes the same variable, joined with `hello`, to a function called `speak`.
    

## [Meow and Abstraction](https://cs50.harvard.edu/x/2024/notes/0/#meow-and-abstraction)

-   Along with pseudocoding, _abstraction_ is an essential skill and concept within computer programming.
-   Abstraction is the act of simplifying a problem into smaller and smaller problems.
-   For example, if you were hosting a huge dinner for your friends, the _problem_ of having to cook the entire meal could be quite overwhelming! However, if you break down the task of cooking the meal into smaller and smaller tasks (or problems), the big task of creating this delicious meal might feel less challenging.
-   In programming, and even within Scratch, we can see abstraction in action. In your programming area, program as follows:
    
    Notice that you are doing the same thing over and over again. Indeed, if you see yourself repeatedly coding the same statements, it’s likely the case that you could program more artfully – abstracting away this repetitive code.
    
-   You can modify your code as follows:
    
    Notice that the loop does exactly as the previous program did. However, the problem is simplified by abstracting away the repetition to a block that _repeats_ the code for us.
    
-   We can even advance this further by using the `define` block, where you can create your own block (your own function)! Write code as follows:
    
    Notice that we are defining our own block called `meow`. The function plays the sound `meow`, then waits one second. Below that, you can see that when the green flag is clicked, our meow function is repeated three times.
    
-   We can even provide a way by which the function can take an input `n` and repeat a number of times:
    
    Notice how `n` is taken from “meow n times.” `n` is passed to the meow function through the `define` block.
    
-   The cat, by the way, we can call a `sprite` – a general term used in game programming for an object or character on the screen with which the player will interact.

## [Conditionals](https://cs50.harvard.edu/x/2024/notes/0/#conditionals)

-   _conditionals_ are an essential building block of programming, where the program looks to see if a specific condition has been met. If a condition is met, the program does something.
-   To illustrate a conditional, write code as follows:
    
    Notice that the `forever` block is utilized such that the `if` block is triggered over and over again, such that it can check continuously if the cat is touching the mouse pointer.
    
-   We can modify our program as follows to integrate video sensing:
    
-   Remember, programming is often a process of trial and error. If you get frustrated, take time to talk yourself through the problem at hand. What is the specific problem that you are working on right now? What is working? What is not working?

## [Oscartime](https://cs50.harvard.edu/x/2024/notes/0/#oscartime)

-   We showed you in this lecture a number of Scratch programs to stoke your imagination.
-   _Oscartime_ is one of David’s own Scratch programs – though the music may haunt him because of the number of hours he listened to it while creating this program. Take a few moments to play through the game yourself.
-   Building Oscartime ourselves, we first add the lamp post.
    
    ![oscartime interface](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Scratch10.png "oscartime interface")
    
-   Then, write code as follows:
    
    Notice that moving your mouse over Oscar changes his costume. You can learn more by [exploring these code blocks](https://scratch.mit.edu/projects/565100517).
    
-   Then, modify your code as follow to create a falling piece of trash:
    
    Notice that the trash’s position on the y-axis always begins at 180. The x position is randomized. While the trash is above the floor, it goes down 3 pixels at a time. You can learn more by [exploring these code blocks](https://scratch.mit.edu/projects/565117390).
    
-   Next, modify your code as follows to allow for the possibility of dragging trash.
    
    You can learn more by [exploring these code blocks](https://scratch.mit.edu/projects/565119737).
    
-   Next, we can implement the scoring variables as follows:
    
    You can learn more by [exploring these code blocks](https://scratch.mit.edu/projects/565472267).
    
-   Go try the full game [Oscartime](https://scratch.mit.edu/projects/277537196).

## [Ivy’s Hardest Game](https://cs50.harvard.edu/x/2024/notes/0/#ivys-hardest-game)

-   Moving away from Oscartime to Ivy’s Hardest Game, we can now imagine how to implement movement within our program.
-   Our program has three main components.
-   First, write code as follows:
    
    Notice that when the green flag is clicked, our sprite moves to the center of the stage at coordinates (0,0) and then listens for the keyboard and checks for walls forever.
    
-   Second, add this second group of code blocks:
    
    Notice how we have created a custom `listen for keyboard` script. For each of our arrow keys on the keyboard, it will move the sprite around the screen.
    
-   Finally, add this group of code blocks:
    
    Notice how we also have a custom `feel for walls` script. When a sprite touches a wall, it moves it back to a safe position – preventing it from walking off the screen.
    
-   You can learn more by [exploring these code blocks](https://scratch.mit.edu/projects/326129433).
-   Go try the full game [Ivy’s Hardest Game](https://scratch.mit.edu/projects/326129433/).
-   Scratch allows for many sprites to be on the screen at once.
-   Adding another sprite, add the following code blocks to your program:
    
    Notice how the Yale sprite seems to get in the way of the Harvard sprite by moving back and forth. When it bumps into a wall, it turns around until it bumps the wall again. You can learn more by [exploring these code blocks](https://scratch.mit.edu/projects/565127193).
    
-   You can even make a sprite follow another sprite. Adding another sprite, add the following code blocks to your program:
    
    Notice how the MIT logo now seems to follow around the Harvard one. You can learn more by [exploring these code blocks](https://scratch.mit.edu/projects/565479840).
    
-   Go try the full game [Ivy’s Hardest Game](https://scratch.mit.edu/projects/565742837).

## [Summing Up](https://cs50.harvard.edu/x/2024/notes/0/#summing-up)

In this lesson, you learned how this course sits in the wide world of computer science and programming. You learned…

-   Few students come to this class with prior programming experience!
-   You are not alone! You are part of a community.
-   Problem solving is the essence of the work of computer scientists.
-   This course is not simply about programming – this course will introduce you to a new way of learning that you can apply to almost every area of life.
-   How numbers, text, images, music, and video are understood by computers.
-   The fundamental programming skill of pseudocoding.
-   Reasonable and unreasonable ways to utilize AI in this course.
-   How abstraction will play a role in your future work in this course.
-   The basic building blocks of programming, including functions, conditionals, loops, and variables.
-   How to build a project in Scratch.

See you next time!