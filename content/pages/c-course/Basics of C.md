title: 1. Basics of C
type: tutorial
fullwidth: true
sortorder: 001
previous: /c-course/welcome-to-robotics:Welcome to Robotics!
next: /c-course/basics-of-robotc:Basics of RobotC
back: /c-course/:Back to C Course

## 1.1 A brief introduction to C and RobotC
C is a programming language. We learn it because:

 - Most of you have played around with Python or Scratch - this isn't much of a jump up.
 - It's sorta "low level", which means you can pretty directly talk to a robot's attachments (sensors, motors), as well as interface well with custom sensors.
 - It's pretty straight forward - code reads from top to bottom.

RobotC is a C-based editor and compiler. You'll be able to use most of what you learn in C in RobotC, and there are only some small differences.

**Note**: We're going to be going to and from C and RobotC. This is mainly so that you learn all the sorts of things standard to coding, that isn't possible with just RobotC. (Also, because we don't have enough licenses for RobotC, as it's not free).

## 1.2 Hello World in C
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

## 1.3 Running your C program
We're going to be using an online C compiler - there's many out there but you can use (Repl.it)[https://repl.it/languages/c]. Copy the code above into the left panel of Repl.it. 

It should come up with:
```bash
Hello, World!
```

Congratulations, you've written and run your first program!

## 1.4 Exercises
1. **Monkey**: Print out the following ASCII art:
```
     __
 )  ( ')
(  /  )
 \(__)|
```
Make sure the spacing is correct! To print a new line, you need to use the `\n` symbol. `\` is a special character, so you need to use `\\` (e.g. `printf("\\");`).
