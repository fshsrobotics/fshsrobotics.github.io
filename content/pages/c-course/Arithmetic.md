title: 4. Arithmetic
type: tutorial
fullwidth: true
sortorder: 004
previous: /c-course/variables:Variables
next: /c-course/inputs-and-decisions:Inputs and Decisions
back: /c-course/:Back to C Course

## 4.1 Introduction to Arithmetic
Computers are useful because it can do calculations very quickly. C allows us to perform some arithmetic operations, as well as some logical operations (the next topic!)

We'll introduce some new symbols - addition, subtraction, multiplication and 'division'!

| Action | Symbol | Comment |
|--------|--------|---------|
| Addition | `+` | Adds two numbers, e.g. `5 + 3 = 8` |
| Subtraction | `-` | Subtracts two numbers, e.g. `5 - 3 = 2` |
| Multiplication | `*` | Multiplies two numbers, e.g. `5 * 3 = 15` |
| Division | `/` | Divides and rounds down, e.g. `5 / 3 = 1` | 
| Modulus | `%` | Gets the remainder, e.g. `5 % 3 = 2` |

## 4.2 Multiplication example
Let's buy some pizza.

```cpp
#include <stdio.h>

int main () {
    int pizzas = 10; // Create a variable
    int cost = pizzas * 8;

    // print out the number and price of pizzas
    printf("%d pizzas cost %d.\n", pizzas, cost);
    return 0;
}
```

* The cost of the pizzas is **8 dollars**, and we purchase **10 pizzas**. 
    * We calculate the cost in this line: `cost = pizzas * 8`
* To print out both numbers, we add another placeholder `%d`, and fill it in with another argument, `cost`. Look carefully at the location of the quotes and commas.

## 4.3 Division and Remainder example

Let's split our pizza and share some slices!

```cpp
#include <stdio.h>

int main () {
    // We have 17 slices of pizza to share between 4 people.
    int slices = 17;
    int people = 4;

    // print out how many slices per person
    printf("Each person gets %d slices.\n", slices / people);
    // print out the remainder
    printf("There will be %d slices left.\n", slices % people);
    return 0;
}
```

* Note that wherever you can place a number of variable, you can place the arithmetic equation. Here, we don't create new variables (e.g. there's no `slicesPerPerson` and `slicesLeft` - we just let `printf` calculate it before printing.

## 4.3 Exercises
* There are exercises in the [grouped exercises](/c-course/input-output-exercises/).