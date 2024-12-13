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

##  [统一码](https://cs50.harvard.edu/x/2024/notes/0/#unicode)

-   随着时间的推移，通过文字进行交流的方式越来越多。
-   由于二进制中没有足够的数字来表示人类可以表示的所有各种字符，因此_Unicode_标准扩展了计算机可以传输和理解的位数。 Unicode 不仅包括特殊字符，还包括表情符号。
-   您可能每天都会使用一些表情符号。您可能会觉得以下内容很熟悉：
    
    ![emoji](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide103.png "emoji")
    
-   当计算机科学家想要为每个表情符号分配不同的肤色以使通信进一步个性化时，他们面临着一个挑战。在这种情况下，表情符号的创建者和贡献者决定最初的部分是表情符号本身的结构，然后是肤色。
-   例如，通用竖起大拇指的 unicode 是`U+1F44D` 。然而，以下代表不同肤色的相同竖起大拇指： `U+1F44D U+1F3FD` 。
-   Unicode 标准中添加了越来越多的功能来表示更多字符和表情符号。
-   如果您愿意，您可以了解有关[Unicode 的](https://en.wikipedia.org/wiki/Unicode)更多信息。
-   如果您愿意，您可以了解有关[表情符号](https://en.wikipedia.org/wiki/Emoji)的更多信息。

##  [表示](https://cs50.harvard.edu/x/2024/notes/0/#representation)

-   零和一可以用来表示颜色。
-   红、绿和蓝（称为`RGB` ）是三个数字的组合。
    
    ![red green blue boxes](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide118.png "red green blue boxes")
    
-   以我们之前使用过的 72、73 和 33 为例，它们表示`HI!`通过文本，图像阅读器会将其解释为浅黄色。红色值为 72，绿色值为 73，蓝色值为 33。
    
    ![yellow box](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide120.png "yellow box")
    
-   此外，零和一可以用来表示图像、视频和音乐！
-   图像只是 RGB 值的集合。
-   视频是存储在一起的许多图像的序列，就像活页簿一样。
-   音乐可以通过 MIDI 数据来表示。

##  [算法](https://cs50.harvard.edu/x/2024/notes/0/#algorithms)

-   解决问题是计算机科学和计算机编程的核心。
-   想象一下尝试在电话簿中查找单个姓名的基本问题。
-   你会怎样做呢？
-   一种方法可能是简单地从第一页读到下一页，直到读到最后一页。
-   另一种方法可能是一次搜索两个页面。
-   最后一种也许更好的方法可能是转到电话簿的中间并询问：“我要查找的名字是在左边还是右边？”然后，重复这个过程，将问题分成两半。
-   这些方法中的每一种都可以称为算法。这些算法的速度可以用所谓的_大 O 表示法_表示如下：
    
    ![big o notation](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide141.png "big o notation")
    
    请注意，第一个算法（以红色突出显示）的`n`为大 O，因为如果电话簿中有 100 个姓名，则可能需要最多 100 次尝试才能找到正确的姓名。第二种算法一次搜索两个页面，其大小为“n/2”，因为我们搜索页面的速度是原来的两倍。最终算法的 big-O 为 log <sub data-immersive-translate-walked="8991be99-747f-4531-abe0-8e84b62d7369">2</sub> n，因为将问题加倍只会导致解决问题需要多一步。
    

##  [伪代码](https://cs50.harvard.edu/x/2024/notes/0/#pseudocode)

-   创建_伪代码_的能力对于本课程和计算机编程的成功至关重要。
-   伪代码是代码的人类可读版本。例如，考虑上面的第三种算法，我们可以编写如下伪代码：
    
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
    
-   伪编码之所以如此重要，至少有两个原因。首先，当您在创建正式代码之前进行伪代码时，它可以让您提前思考问题的逻辑。其次，当您进行伪代码时，您可以稍后将此信息提供给其他寻求了解您的编码决策以及代码如何工作的人。
-   请注意，我们的伪代码中的语言具有一些独特的功能。首先，其中一些行以动词开头，例如_“pick up”、_ _“open”、_ _“look at”。_稍后我们将调用这些_函数_。
-   其次，请注意某些行包含`if`或`else if.`这些称为_条件语句_。
-   第三，请注意如何存在可以被表述为_真_或_假的表达方式，_例如“人在书的前面”。我们称这些_为布尔表达式_。
-   最后，请注意这些语句如何类似于“返回到第 3 行”。我们称这些为_循环_。
-   这些构建块是编程的基础。
-   在下面讨论的_Scratch_上下文中，我们将使用上述每个基本编程构建块。

##  [人工智能](https://cs50.harvard.edu/x/2024/notes/0/#artificial-intelligence)

-   考虑一下我们如何利用上面的构建模块来开始创建我们自己的人工智能。看下面的伪代码：
    
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
    
    请注意，仅对少量交互进行编程就需要许多行代码。数千或数万种可能的交互需要多少行代码？
    
-   `large language models`着眼于大型语言块中的模式。这种语言模型试图对哪些单词相继出现或并排出现进行最佳猜测。
-   由于在生活和工作的许多方面都非常有用，我们规定除了CS50自己的软件之外，使用基于人工智能的软件是_不合理的_。
-   CS50 自己的基于人工智能的软件工具[CS50 Duck](https://cs50.ai/)是您可以在本课程中使用的人工智能助手。它会对您有所帮助，但不会泄露课程问题的全部答案。

##  [划痕](https://cs50.harvard.edu/x/2024/notes/0/#scratch)

-   _Scratch_是麻省理工学院开发的一种可视化编程语言。
-   Scratch 使用了我们在本讲座前面介绍的相同的基本编码构建块。
-   Scratch 是进入计算机编程的好方法，因为它允许您以可视化方式使用这些构建块，而不必担心大括号、分号、括号等语法。
-   Scratch `IDE` （集成开发环境）如下所示：
    
    ![scratch interface](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide162.png "scratch interface")
    
    请注意，左侧有可在编程中使用的_构建块_。在构建块的右侧，有一个区域，您可以将块拖到其中来构建程序。在它的右边，你会看到一只猫站立的_舞台_。舞台是您的编程得以实现的地方。
    
-   Scratch 在坐标系上的操作如下：
    
    ![scratch coordinate system](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide167.png "scratch coordinate system")
    
    请注意，舞台中心位于坐标 (0,0) 处。现在，猫的位置是在同一个位置。
    

##  [你好世界](https://cs50.harvard.edu/x/2024/notes/0/#hello-world)

-   首先，将“当绿旗点击时”构建块拖到编程区域。然后，将`say`构建块拖到编程区域并将其附加到前一个块上。
    
    请注意，当您现在单击舞台上的绿旗时，猫会说：“你好，世界。”
    
-   这很好地说明了我们之前讨论的有关编程的内容：
    
    ![scratch with black box](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Slide172.png "scratch with black box")
    
    请注意，输入`hello world`被传递给函数`say` ，并且该函数运行的_副作用_是猫说`hello world` 。
    

##  [你好，你](https://cs50.harvard.edu/x/2024/notes/0/#hello-you)

-   我们可以让猫向特定的人`hello` ，从而使您的程序更具交互性。修改你的程序如下：
    
    请注意，当单击绿色标志时，将运行`ask`函数。程序会提示用户， `What's your name?`然后，它将该名称存储在名为`answer`的_变量_中。然后，程序将`answer`传递给一个名为`join`的特殊函数，该函数组合了两个文本字符串`hello`以及提供的任何名称。这些共同传递给`say`函数。猫说： `Hello,`还有名字。”您的程序现在是交互式的。
    
-   非常类似，我们可以修改我们的程序如下：
    
    请注意，当单击绿色标志时，该程序将与`hello`连接的同一变量传递给名为`speak`函数。
    

##  [喵与抽象](https://cs50.harvard.edu/x/2024/notes/0/#meow-and-abstraction)

-   与伪编码一样，_抽象_也是计算机编程中的一项基本技能和概念。
-   抽象是将问题简化为越来越小的问题的行为。
-   例如，如果您要为朋友举办一场盛大的晚宴，那么必须煮整顿饭的_问题_可能会令人难以承受！然而，如果你把做饭的任务分解成越来越小的任务（或问题），那么制作这顿美味佳肴的大任务可能会感觉不那么具有挑战性。
-   在编程中，甚至在 Scratch 中，我们可以看到抽象的实际应用。在您的编程区域中，编程如下：
    
    请注意，您正在一遍又一遍地做同样的事情。事实上，如果您发现自己重复编写相同的语句，那么您可能可以更巧妙地进行编程 - 抽象出这些重复的代码。
    
-   您可以按如下方式修改您的代码：
    
    请注意，循环的执行方式与之前的程序完全相同。然而，通过将重复抽象为一个为我们_重复_代码的块，问题得到了简化。
    
-   我们甚至可以通过使用`define`块进一步推进这一点，您可以在其中创建自己的块（您自己的函数）！编写代码如下：
    
    请注意，我们正在定义自己的块，称为`meow` 。该函数播放声音`meow` ，然后等待一秒钟。在下面，您可以看到当单击绿旗时，我们的喵叫函数会重复三次。
    
-   我们甚至可以提供一种方法，使函数可以接受输入`n`并重复多次：
    
    注意`n`是如何从“meow n times”中取出的。 `n`通过`define`块传递给 meow 函数。
    
-   顺便说一句，我们可以将猫称为“ `sprite` ”，这是游戏编程中用于与玩家交互的屏幕上的对象或角色的通用术语。

##  [条件句](https://cs50.harvard.edu/x/2024/notes/0/#conditionals)

-   _条件_是编程的一个重要组成部分，程序会在其中查看是否满足特定条件。如果满足条件，程序就会执行某些操作。
-   为了说明条件，请编写如下代码：
    
    请注意，使用了`forever`块，以便一遍又一遍地触发`if`块，这样它就可以连续检查猫是否正在触摸鼠标指针。
    
-   我们可以如下修改我们的程序来集成视频传感：
    
-   请记住，编程通常是一个反复试验的过程。如果您感到沮丧，请花时间与自己讨论当前的问题。您现在正在解决的具体问题是什么？什么在起作用？什么不起作用？

##  [奥斯卡时间](https://cs50.harvard.edu/x/2024/notes/0/#oscartime)

-   我们在本次讲座中向您展示了一些 Scratch 程序来激发您的想象力。
-   _Oscartime_是 David 自己的 Scratch 程序之一 - 尽管音乐可能会困扰他，因为他在创建该程序时听了很多个小时。花一些时间自己玩一下游戏。
-   我们自己构建 Oscartime，首先添加灯柱。
    
    ![oscartime interface](https://cs50.harvard.edu/x/2024/notes/0/cs50Week0Scratch10.png "oscartime interface")
    
-   然后，编写代码如下：
    
    请注意，将鼠标移到奥斯卡上会改变他的服装。您可以通过[探索这些代码块](https://scratch.mit.edu/projects/565100517)了解更多信息。
    
-   然后，按如下方式修改代码以创建一块掉落的垃圾：
    
    请注意，垃圾在 y 轴上的位置始终从 180 开始。x 位置是随机的。当垃圾在地板上方时，它会一次下降 3 个像素。您可以通过[探索这些代码块](https://scratch.mit.edu/projects/565117390)了解更多信息。
    
-   接下来，按如下方式修改代码以允许拖动垃圾的可能性。
    
    您可以通过[探索这些代码块](https://scratch.mit.edu/projects/565119737)了解更多信息。
    
-   接下来，我们可以按如下方式实现评分变量：
    
    您可以通过[探索这些代码块](https://scratch.mit.edu/projects/565472267)了解更多信息。
    
-   去尝试完整的游戏[Oscartime 吧](https://scratch.mit.edu/projects/277537196)。

##  [艾维最难的游戏](https://cs50.harvard.edu/x/2024/notes/0/#ivys-hardest-game)

-   从奥斯卡时间到常春藤最难的游戏，我们现在可以想象如何在我们的程序中实现运动。
-   我们的计划由三个主要部分组成。
-   首先编写代码如下：
    
    请注意，当单击绿色旗帜时，我们的精灵会移动到舞台中心坐标 (0,0) 处，然后监听键盘并永远检查墙壁。
    
-   其次，添加第二组代码块：
    
    请注意我们如何创建自定义的`listen for keyboard`脚本。对于键盘上的每个箭头键，它都会在屏幕上移动精灵。
    
-   最后添加这组代码块：
    
    请注意我们如何`feel for walls` 。当精灵接触到墙壁时，它会将其移回安全位置，防止它离开屏幕。
    
-   您可以通过[探索这些代码块](https://scratch.mit.edu/projects/326129433)了解更多信息。
-   去尝试完整版[《常春藤最难的游戏》](https://scratch.mit.edu/projects/326129433/)吧。
-   Scratch 允许多个精灵同时出现在屏幕上。
-   添加另一个精灵，将以下代码块添加到您的程序中：
    
    请注意，耶鲁精灵似乎是如何通过来回移动来妨碍哈佛精灵的。当它撞到墙壁时，它会转身，直到再次撞到墙壁。您可以通过[探索这些代码块](https://scratch.mit.edu/projects/565127193)了解更多信息。
    
-   您甚至可以让一个精灵跟随另一个精灵。添加另一个精灵，将以下代码块添加到您的程序中：
    
    请注意，麻省理工学院的徽标现在似乎是围绕着哈佛大学的徽标。您可以通过[探索这些代码块](https://scratch.mit.edu/projects/565479840)了解更多信息。
    
-   去尝试完整版[《常春藤最难的游戏》](https://scratch.mit.edu/projects/565742837)吧。

##  [总结](https://cs50.harvard.edu/x/2024/notes/0/#summing-up)

在本课程中，您了解了本课程在计算机科学和编程的广阔世界中的地位。你学到了……

-   很少有学生有编程经验来参加这门课！
-   你并不孤单！您是社区的一部分。
-   解决问题是计算机科学家工作的本质。
-   本课程不仅仅是关于编程——本课程将向您介绍一种新的学习方式，您可以将其应用于几乎生活的每个领域。
-   计算机如何理解数字、文本、图像、音乐和视频。
-   伪编码的基本编程技能。
-   在本课程中使用人工智能的合理和不合理的方式。
-   抽象将如何在您未来的本课程工作中发挥作用。
-   编程的基本构建块，包括函数、条件、循环和变量。
-   如何在 Scratch 中构建项目。

 下次见！