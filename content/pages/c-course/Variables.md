title: 3. Variables
type: tutorial
tutorialtype: c-course
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
Variables always have a type in C. To create one, you put in the **type followed by the name**. The convention for the name is camelCase – words are stringed together and all except the first word start with a capital.

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
To print out variables, we need to append it into the printf statement. Let's modify our Hello World code to print out more than just text.

```cpp
// A simple C program!
#include <stdio.h>

int main () {
	int numberOfChickens = 10;
	printf("I have %d chickens.\n", numberOfChickens);
	return 0;
}
```

