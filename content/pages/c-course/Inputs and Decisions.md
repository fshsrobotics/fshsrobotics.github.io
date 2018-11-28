title: 5. Inputs and Decisions
type: tutorial
fullwidth: true
sortorder: 005
previous: /c-course/arithmetic:Arithmetic
next: /c-course/input-output-exercises/#exercises:Input Output Exercises
back: /c-course/:Back to C Course

## 5.1 Input, Process, Output
In Engineering, we use a common pattern called **"input-process-output"** that exists across many fields in both software and hardware. In Robotics, we use it as a model the work your code will do when interfacing with the environment.

![IPO Model](ipomodel.png)

* For robots:
    * **Input**: data from sensors that we take in. These are observations of the real world.
    * **Process**: we process this data from the sensors and transform it to useful results
    * **Output**: Producing movement or action as a result of a change in environment

* For solving problems in C:
    * **Input**: input using the function `scanf`
    * **Process**: processing the input - one way of making decisions is by using `if`
    * **Output**: output using the function `printf`

## 5.2 The `scanf` function
In Section 3, we were able to print out that we had 10 chickens.

```cpp
#include <stdio.h>

int main () {
	int numberOfChickens = 10;
	printf("I have %d chickens.\n", numberOfChickens);
    return 0;
}
```

What if we wanted the user to input that number instead? We can do exactly that with `scanf`:

```cpp
#include <stdio.h>

int main () {
	int numberOfChickens;
    printf("Enter the number of chickens: "); // ask for the number of chickens
    scanf("%d", &numberOfChickens); // record the user's input into numberOfChickens
	printf("I have %d chickens.\n", numberOfChickens);
    return 0;
}
```

Try and run this program. When you run it, it will wait for you to input some text. When you type a number and hit enter, the program will continue. In this case:

```
Enter the number of chickens: 6
I have 6 chickens.
```

## 5.3 Decision making
We use `if` statements to make decisions. Decisions usually have the following structure:

![](https://www.tutorialspoint.com/cprogramming/images/if_statement.jpg)

The best way to illustrate this is by example.

```cpp
// Check if a person is 18 and above, or not.
#include <stdio.h>

int main () {
	int age;
    printf("Enter an age: "); // ask for the number of chickens
    scanf("%d", &age); // record the user's input into numberOfChickens
	
    if (age >= 18) {
        printf("The person is 18 and above.\n");
    }

    return 0;
}
```

| Code | Comment |
|------|---------|
| `if ( condition ) { ... }` | The code between the curly brackets will **only run if the condition** is true. |
| `age >= 18` | A **condition**. There are many more symbols to compare two numbers. |

We can add more to this by using `else`.

```cpp
if (age >= 18) {
    printf("The person is 18 and above.\n");
}
else {
    printf("The person is under 18.\n");
}
```

The program will now choose two paths - the code in the first `{ ... }` will run **if `age >= 18`**, otherwise it will run the code in the second `{ ... }`.

Sometimes we want to add even more conditions. We can do this by using `else if`.

```cpp
if (age >= 18) {
    printf("The person is 18 and above.\n");
}
else if (age < 7) {
    printf("The person is very young.\n");
}
else {
    printf("The person is under 18.\n");
}
```

Things to note:

* The code **will only run one of these**, it will immediately 'fall into' the first `true` statement. So, this code will only print one line.
    * It will check from top to bottom. So, if the age is 12, it will check `(age >= 18) == false`, then `(age < 7) == false` before running the `else` code.
* We will need to use **nested if statements** (or another if statement) if we want it to print both lines.

## 5.3 Nested if statements
Try and figure out what this will do before running it. Note how the indentation is there to help you!

```cpp
if (age >= 18) {
    printf("The person is 18 and above.\n");
}
else {
    if (age < 7) {
        printf("The person is very young.\n");
    }
    printf("The person is under 18.\n");
}
```

## 5.4 Exercises
* There are exercises in the [grouped exercises](/c-course/input-output-exercises/).