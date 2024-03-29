---
sidebar_label: 14.pointers
sidebar_position: 14
title: 14.pointers
---

Welcome to tutorial no. 15 in [Golang tutorial series](https://golangbot.com/learn-golang-series/).

In this tutorial, we will learn how pointers work in Go and we will also understand how Go pointers differ from pointers in other languages such as C and C++.

This tutorial has the following sections.

-   What is a pointer?
-   Declaring pointers
-   Zero value of a pointer
-   Creating pointers using the new function
-   Dereferencing a pointer
-   Passing pointer to a function
-   Returning pointer from a function
-   Do not pass a pointer to an array as an argument to a function. Use slice instead.
-   Go does not support pointer arithmetic

### What is a pointer?

A pointer is a variable that stores the memory address of another variable.

![Pointers in Go](https://golangbot.com/content/images/2017/05/pointer-explained.png)

In the above illustration, variable `b` has value `156` and is stored at memory address `0x1040a124`. The variable `a` holds the address of `b`. Now `a` is said to point to `b`.

### Declaring pointers

**\*T** is the type of the pointer variable which points to a value of type **T**.

Let's write a program that declares a pointer.

```
package main

import (  
    "fmt"
)

func main() {  
    b := 255
    var a *int = &b
    fmt.Printf("Type of a is %T\n", a)
    fmt.Println("address of b is", a)
}
```

[Run in playground](https://play.golang.org/p/A4vmlgxAy8)

The **&** operator is used to get the address of a variable. In line no. 9 of the above program we are assigning the address of `b` to `a` whose type is `*int`. Now a is said to point to b. When we print the value in `a`, the address of `b` will be printed. This program outputs

```
Type of a is *int  
address of b is 0x1040a124  
```

You might get a different address for b since the location of b can be anywhere in memory.

### Zero value of a pointer

The zero value of a pointer is `nil`.

```
package main

import (  
    "fmt"
)

func main() {  
    a := 25
    var b *int
    if b == nil {
        fmt.Println("b is", b)
        b = &a
        fmt.Println("b after initialization is", b)
    }
}
```

[Run in playground](https://play.golang.org/p/yAeGhzgQE1)

b is initially nil in the above program and then later it is assigned to the address of a. This program outputs

```
b is <nil>  
b after initialisation is 0x1040a124  
```

### Creating pointers using the new function

Go also provides a handy function `new` to create pointers. The `new` function takes a type as an argument and returns a pointer to a newly allocated zero value of the type passed as argument.

The following example will make things more clear.

```
package main

import (  
    "fmt"
)

func main() {  
    size := new(int)
    fmt.Printf("Size value is %d, type is %T, address is %v\n", *size, size, size)
    *size = 85
    fmt.Println("New size value is", *size)
}
```

[Run in playground](https://play.golang.org/p/BNkfB3RZCOY)

In the above program, in line no. 8 we use the `new` function to create a pointer of type `int`. This function will return a pointer to a newly allocated zero value of the type `int`. The zero value of type `int` is `0`. Hence size will be of type `*int` and will point to `0` i.e `*size` will be `0`.

The above program will print

```
Size value is 0, type is *int, address is 0x414020  
New size value is 85  
```

### Dereferencing a pointer

Dereferencing a pointer means accessing the value of the variable to which the pointer points. `*a` is the syntax to deference a.

Let's see how this works in a program.

```
package main  
import (  
    "fmt"
)

func main() {  
    b := 255
    a := &b
    fmt.Println("address of b is", a)
    fmt.Println("value of b is", *a)
}
```

[Run in playground](https://play.golang.org/p/m5pNbgFwbM)

In line no 10 of the above program, we deference `a` and print the value of it. As expected it prints the value of b. The output of the program is

```
address of b is 0x1040a124  
value of b is 255  
```

Let's write one more program where we change the value in `b` using the pointer.

```
package main

import (  
    "fmt"
)

func main() {  
    b := 255
    a := &b
    fmt.Println("address of b is", a)
    fmt.Println("value of b is", *a)
    *a++
    fmt.Println("new value of b is", b)
}
```

[Run in playground](https://play.golang.org/p/cdmvlpBNmb)

In line no. 12 of the above program, we increment the value pointed by `a` by 1 which changes the value of b _since a points to b_. Hence the value of b becomes 256. The output of the program is

```
address of b is 0x1040a124  
value of b is 255  
new value of b is 256  
```

### Passing pointer to a function

```
package main

import (  
    "fmt"
)

func change(val *int) {  
    *val = 55
}
func main() {  
    a := 58
    fmt.Println("value of a before function call is",a)
    b := &a
    change(b)
    fmt.Println("value of a after function call is", a)
}
```

[Run in playground](https://play.golang.org/p/3n2nHRJJqn)

In the above program, in line no. 14 we are passing the pointer variable b which holds the address of a to the function `change`. Inside `change` function, the value of a is changed using dereference in line no 8. This program outputs,

```
value of a before function call is 58  
value of a after function call is 55  
```

### Returning pointer from a function

It is perfectly legal for a function to return a pointer of a local variable. The Go compiler is intelligent enough and it will allocate this variable on the heap.

```
package main

import (  
    "fmt"
)

func hello() *int {  
    i := 5
    return &i
}
func main() {  
    d := hello()
    fmt.Println("Value of d", *d)
}
```

[Run in playground](https://play.golang.org/p/I6r-fRx2qML)

In line no. 9 of the program above, we return the address of the local variable `i` from the function `hello`. **The behaviour of this code is undefined in programming languages such as C and C++ as the variable `i` goes out of scope once the function `hello` returns. But in the case of Go, the compiler does an escape analysis and allocates `i` on the heap as the address escapes the local scope.** Hence this program will work and it will print,

```
Value of d 5  
```

### Do not pass a pointer to an array as an argument to a function. Use slice instead.

Let's assume that we want to make some modifications to an array inside the function and the changes made to that array inside the function should be visible to the caller. One way of doing this is to pass a pointer to an array as an argument to the function.

```
package main

import (  
    "fmt"
)

func modify(arr *[3]int) {  
    (*arr)[0] = 90
}

func main() {  
    a := [3]int{89, 90, 91}
    modify(&a)
    fmt.Println(a)
}
```

[Run in playground](https://play.golang.org/p/lOIznCbcvs)

In line no. 13 of the above program, we are passing the address of the array `a` to the `modify` function. In line no.8 in the `modify` function we are dereferencing arr and assigning `90` to the first element of the array. This program outputs `[90 90 91]`

**a\[x\] is shorthand for (\*a)\[x\]. So (\*arr)\[0\] in the above program can be replaced by arr\[0\]**. Let's rewrite the above program using this shorthand syntax.

```
package main

import (  
    "fmt"
)

func modify(arr *[3]int) {  
    arr[0] = 90
}

func main() {  
    a := [3]int{89, 90, 91}
    modify(&a)
    fmt.Println(a)
}
```

[Run in playground](https://play.golang.org/p/k7YR0EUE1G)

This program also outputs `[90 90 91]`

**Although this way of passing a pointer to an array as an argument to a function and making modification to it works, it is not the idiomatic way of achieving this in Go. We have [slices](https://golangbot.com/arrays-and-slices/) for this.**

Let's rewrite the same program using [slices](https://golangbot.com/arrays-and-slices/).

```
package main

import (  
    "fmt"
)

func modify(sls []int) {  
    sls[0] = 90
}

func main() {  
    a := [3]int{89, 90, 91}
    modify(a[:])
    fmt.Println(a)
}
```

[Run in playground](https://play.golang.org/p/rRvbvuI67W)

In line no.13 of the program above, we pass a slice to the `modify` function. The first element of the slice is changed to `90` inside the `modify` function. This program also outputs `[90 90 91]`. **So forget about passing pointers to arrays around and use slices instead :)**. This code is much cleaner and is idiomatic Go :).

### Go does not support pointer arithmetic

Go does not support pointer arithmetic which is present in other languages like C and C++.

```
package main

func main() {  
    b := [...]int{109, 110, 111}
    p := &b
    p++
}
```

[Run in playground](https://play.golang.org/p/WRaj4pkqRD)

The above program will throw compilation error **main.go:6: invalid operation: p++ (non-numeric type \*\[3\]int)**

I have created a single program in [github](https://github.com/golangbot/pointers) which covers everything we have discussed.

That's it for pointers in Go. Have a good day.

**Next tutorial - [Structs](https://golangbot.com/structs/)**