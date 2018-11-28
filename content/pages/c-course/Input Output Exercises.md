title: Input Output Exercises
type: tutorial
fullwidth: true
sortorder: 004
previous: #:Coming soon
next: #:Coming soon
back: /c-course/:Back to C Course

## Summary

### Printing
Use `printf` to display text on the screen.
```
printf("I like robotics!\n");
printf("%d pizzas cost %d.\n", pizzas, cost);
```

### Variables
Store numbers in variables. Start them with `int` (and maybe `float`).
```
int chickens = 17;
int people;
people = 10;
```

### Arithmetic
Use the various symbols to do mathematical operations.

| Action | Symbol | Example | Comment | 
|--------|--------|---------|---------|
| Addition | `+` | `pizzas = 5 + 3;` |
| Subtraction | `-` | `coolnessFactor = coolnessFactor - 1;` | Can refer to itself - e.g. it will count down by 1
| Multiplication | `*` | `money = money * money;` | This is equivalent to squaring the original
| Division | `/` | `printf("%d", 5 / 3)` | 
| Modulus | `%` | `printf("%d", 5 % 3)` |

### Input
Use `scanf` to allow input from the user. Remember the `&`!

```
int year;
printf("Enter a year: ");
scanf("%d", year);
```

### If Statements
Use `if` and a **condition** to make decisions.
```
int x = 1;
if (x != 3) {
    ...
}
else if (x <= 10) {
    ...
}
else {
    ...
}
```

## Exercises

**To do the exercises, use [Repl.it](https://repl.it/languages/c).**

### 2. Pizza Calculator
Write a program `pizzacalcs.c` that allows the user to enter the number of pizzas. The program should print out the **total slices** (each pizza is divided into **8 slices**) and the **total slices per person** if there are **5 people**.

Examples:
```
How many pizzas: 5
There are 40 slices of pizza.
Each person gets 8.
```
```
How many pizzas: 1
There are 8 slices of pizza.
Each person gets 1.
```
----

### 3. Soccer Robots
Using an `if` statement (with `else if` and `else`), write a program `soccerrobots.c` that allows the user to enter a number of robots. It should check if the **number of robots is 2**:

* If the number is 2, print `You have the correct number of robots!`
* If the number is **less than 2**, print `You don't have enough robots.`
* If the number is **more than 2**, print `You have too many robots.`

Examples:
```
Number of robots: 5
You have too many robots.
```
```
Number of robots: 2
You have the correct number of robots!
```
----

### 4. Icecream
Georgio has $10 dollars and he wants to buy his friend some icecream. Write a program so that he can input **the number of scoops** and **how much each scoop costs**, and it will tell him if he has enough money.

Your program should perform as follows:
```
How many scoops? 5
How much per scoop? 1
You can buy the icecream!
```
```
How many scoops? 5
How much per scoop? 3
Rip, you don't have enough money :(
```

### 5. Teen-age
At Petersham's station, the ticket office wants a simple program that can immediately tell which ticket someone should buy.

Write a program that allows the user to enter an age, and it should print out which ticket they should receive.

* If the age is **less than 13**, print `Child ticket`
* If the age is **between 13 and 19 inclusive**, print `Concession ticket`
* If the age is **equal to or above 65**, it should print `Concession ticket`
* **Otherwise**, print `Adult ticket`

Your program should perform as follows:
```
Enter your age: 12
Child ticket
```
```
Enter your age: 13
Concession ticket
```
```
Enter your age: 40
Adult ticket
```

### 6. Bad code
Uh oh! We gave Mr Semaan the task to write some C code. Unfortunately, it's a bit wrong. It's meant to ask you to put in his favourite number, and print out if it is right or not.

Your task is to fix up his program so that it is **indented properly**, **compiles with no errors** and it **returns the correct results**.

```cpp
#include stdio.h>
int main() {
    printf("Guess my favourite number: ");
        scanf("%d", n);
            int faveNumber;
if (faveNumber = 17) {
printf("You're right!\n");
} 
else {
printf("You're wrong.\n");
}
    return 0;
}
```
### 7. Leap year
Write a C program `leapyear.c` that reads a year and then prints whether that year is a leap year.

Note that leap years aren't just divisble by 4. Use this pseudocode from [Wikipedia](https://en.wikipedia.org/wiki/Leap_year#Algorithm):

```
if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)
```

* Hint: you only need use the int type, modulus (%) and if statement(s).

Examples:
```
Enter year: 2017
2017 is not a leap year.
```
```
Enter year: 2016
2016 is a leap year.
```
```
Enter year: 2000
2000 is a leap year.
```
```
Enter year: 3000
3000 is not a leap year.
```

### 8. Challenge: Tic Tac Toe
Write a program `tictactoe.c` that takes in a tic tac toe board and determines who wins in that game. Player 1 is represented by '1', Player 2 is represented by '2', and empty cells are represented by '0's.

* Your program should take in nine integers, three per line separated by spaces (so, three rows, each row has three integers separated by spaces)
* **Tip**: to get three integers instead of one, you can scanf 3 integers: `scanf("%d %d %d", &cell1, &cell2, &cell3);`
* Your program should print out who wins, or if no one has won

Your program should behave as follows:
```
Enter the board:
1 2 1
1 1 2
2 2 1
Player 1 has won!
```
```
Enter the board:
0 0 1
1 1 0
2 2 2
Player 2 has won!
```
```
Enter the board:
0 0 1
0 0 0
0 0 2
No players have won.
```
