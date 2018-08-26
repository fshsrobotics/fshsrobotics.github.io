title: 1. Basics of C
type: tutorial
previous: /c-course/welcome-to-robotics:Welcome to Robotics!
next: /c-course/basics-of-robotc:Basics of RobotC

## 1.1 A brief introduction to C and RobotC
C is a programming language. We learn it because:

 - Most of you have played around with Python or Scratch - this isn't much of a jump up.
 - It's sorta "low level", which means you can pretty directly talk to a robot's attachments (sensors, motors). 
 - It's pretty straight forward - code reads from top to bottom.

RobotC is a C-based editor and compiler. You'll be able to use most of what you learn in C in RobotC, and there are only some small differences.

## 1.2 Hello World
'Hello, World' is the standard way of starting any programming language. Let's see what it is:
```cpp
// A simple C program!
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

This program is complete - you probably can guess what it does! The key thing is to always read from top to bottom. It has a few things:

| Code | Comment |
|------|---------|
| `//` | A single line comment. Anything after it on the same line will not be part of your code. |
| `#include <stdio.h>` | Import the 'standard input/output' library. It supports functions (commands) like 'printf'. |
| `int main() { ... }` | The main function must appear in every C program. It is the first thing the computer looks for when you run the code. |
| `printf( ... )` | A string that we want to print out. Anything within double quotes is considered a string. |
| `Hello, World!\n` | A function that lets you print something out to the screen. The 'f' stands for 'formatted'. |
| `\n` | Inserts a new line - makes it pretty. |
| `return 0` | 0 tells the computer that the program finished without an error. |

## 1.3 Compiling your program
Copy and save the program above into a text editor (we suggest Notepad++ or Sublime Text) and **save it as `hello.c`**. All your code should have the `.c` file extension.

To run your program, you first need to **compile it using a compiler**. A compiler converts your `.c` code into an executable program - a file that is machine code, which can be read by the computer. This is the same in RobotC.

<p style="text-align:center">
<img alt="Compiler becomes C code" src="{attach}compiler.png" style="max-width:400px;">
</p>

In our course, we use TCC ('tiny C compiler') for Windows and GCC for Mac and Linux to compile our programs. To do so, follow the guide [here](/c-course/tcc-guide). 

## 1.4 Run your program
Make sure you have:

1. Copied and saved the code into a file called `hello.c`
2. Installed TCC or GCC using the instructions above
3. Navigated in your terminal/command prompt to the correct folder, or opened `cmd` in the desired folder with `tcc.exe`

To run the program on Mac:
```bash
./hello
```
To run the program on Windows:
```bash
hello
```
It should come up with:
```bash
Hello, World!
```
Congratulations, you've written and run your first program!
