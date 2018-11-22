title: 3. Variables
type: tutorial
fullwidth: true
sortorder: 003
previous: /c-course/basics-of-robotc:Basics of RobotC
next: #:Coming soon
back: /c-course/:Back to C Course

## 3.1 Introduction to Variables
In maths at school, you learn algebra - substituting numbers for letters. In code, we do the same - we **name our numbers** to make it clearer for everyone to understand.

There are many types of variables:

- **Integers**: these are counting numbers that go into positives and negative.
    - E.g. the number of slices of pizza, the number of seconds past
- **Characters**: these are ASCII characters that you can type out on a keyboard.
    - 'A', 'z', '1'
- **Floats**: these are 'floating decimal numbers', which represents a number that can have decimal points.
    - E.g. pi (3.141592654...), 12.0

## 3.2 Creating a variable
Variables always have a type in C. To create one, you put in the **type followed by the name**. The convention for the name is camelCase - words are stringed together and all except the first word start with a capital.

```c
int numberOfChickens;
char myFirstNameInitial;
float pi;
```

When created, you can assign it numbers. 

```c
int numberOfChickens;
numberOfChickens = 10;
```

You can also string both together - but be careful, as you can only do that once.

```c
float pi = 3.14; // Set it to this at the start
pi = 3.14159; // Change it later
```

## 3.3 Printing variables
To print out variables, we need to add it into the printf statement. Let's modify our Hello World code to print out more than just text.

```cpp
#include <stdio.h>

int main () {
	int numberOfChickens = 10;
	printf("I have %d chickens.\n", numberOfChickens);
	return 0;
}
```
Note the syntax - there are two parts of the `printf` function:

| Code | Comment |
|------|---------|
| `printf( ... );` | Like before, we surround everything with parentheses. |
| `"I have %d chickens.\n"` | Like before, we place what we want printed out in double quotation marks. We have a `%d`, which is a 'placeholder' - it will be filled in later by the next item you enter in printf. |
| `numberOfChickens` | Our variable name. This is what will be immediately inserted into the %d from the string. |

You'll get used to this syntax soon. When you run it, you should get the following output:

```bash
I have 10 chickens.
```

## 3.4 Errors
> The worst errors are those that don't show up as errors.

When you code, you are bound to get errors. Errors you receive from the compiler are like a seatbelt
– they help you a lot but the worst errors you get are those that don't show up as errors.

Let's try and change the code to make it wrong. Here, I have moved the quotation to the end of the `printf( ... )` statement, and removed the `return 0`.

```cpp
#include <stdio.h>

int main () {
	int numberOfChickens = 10;
	printf("I have %d chickens.\n, numberOfChickens");
}
```

When attempting to run this program, you will get the following error:

```bash
chickens.c: In function 'main':
chickens.c:5:2: warning: format '%d' expects a matching 'int' argument [-Wformat=]
printf("I have %d chickens.\n, numberOfChickens");
^
...
```

This error is very cryptic! The first thing you want to look at is `chickens.c:5:2:`: this means the error occurred on the 5th line.

It says that it's **expecting a matching 'int' argument**. This means that you have used a `%d` placeholder, but it cannot find the variable you want to put into that slot. That's because `numberOfChickens` is part of the string and not an argument (not on its own, after a comma).

## 3.5 Numbers and Rounding
Integers cannot have decimal points. If you do, the compiler will always round down for you.

```cpp
#include <stdio.h>

int main () {
    int numberOfChickens = 3.5;
    printf("I got %d chickens.\n", numberOfChickens);
    
    return 0;
}
```

Running the program:

```bash
I have 3 chickens.
```

Remember we talked about floats above, which could be used to represent a number like PI? Try and make it print 3.5.

## 3.6 Exercises
1. **Building**: Write a program that prints out the following. It should use two variables, `height` (a float) and `year` (an integer).

```bash
The building is 3.513 metres high.
The year is 2018!
```
