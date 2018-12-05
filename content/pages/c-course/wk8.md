title: Week 8 Introduction
type: tutorial
fullwidth: true
sortorder: 004
back: /c-course/:Back to C Course

## Week 8

## What we doin
* Continue C introduction
  * Work on exercises
* The future: much more coding in 'workshop' style, less of me talking (I'm bad at talking)
  * Week 9: Installing and trying out RobotC, with our three demo robots
  * Week 10: Doing some more RobotC, introducing the project

**To do the exercises, use [https://repl.it/languages/c](https://repl.it/languages/c).**

Repl.it not working? Try [http://cpp.sh/](http://cpp.sh/) - the input (e.g. `scanf`) is a bit funky and not quite right. But it's nearly as good as repl.it.

## 1. Chickens solution
1. Ask the user for the number of chickens
2. Make sure the number of chickens is reasonable
3. Print out the number of chickens
4. The area for the chickens to live in is based on the number of chickens, and is dictated by this formula: `area = (chickens + 1) * 3`. Print out the area needed to house the chickens.

```cpp
#include <stdio.h>

int main(void) {
  int numChickens;
  printf("How many chickens? ");
  scanf("%d", &numChickens);

  if (numChickens < 0) {
    printf("Your number isn't correct.\n");
  }
  else {
    printf("I have %d chickens.\n", numChickens);
    int area = (numChickens + 1) * 3;
    printf("Area for chickens to live in is %d.\n", area);
  }

  return 0;
}
```

## 2. Pizza
1. Ask the user for the number of pizzas.
2. Ask the user for the number of slices per pizza.
3. Ask the user how many people to share these slices between.
4. Calculate how many slices per person, and print it out.
5. Calculate how many slices would be left, and print it out.

----
## Exercises

Now time to do some questions - [https://fshsrobotics.gitlab.io/c-course/input-output-exercises](https://fshsrobotics.gitlab.io/c-course/input-output-exercises)