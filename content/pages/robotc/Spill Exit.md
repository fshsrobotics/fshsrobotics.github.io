title: Spill Exit
type: tutorial
fullwidth: true
back: /c-course/:Back to C Course

## Pseudocode
- To exit the spill, you need to:
    - Store past data on where you came from and how you got to your current location
    - Backtrack and reverse those past actions
    - An action includes both motor's speeds and the degrees the motors have rotated (motor encoder)
- In code, this is pretty much equivalent to:

```
for each action within the spill
    reset counters
    do the action
    record the action speed and rotation counts
    store this data somewhere

drop the can

for each action taken so far, other than can drop
    start from the latest action
    reset counters
    do the action, in reverse
```

## Storing the values
### Storing action data
- To group the four data points into one 'block' of information, you can use a `struct`. 
    - [C Structures - tutorialspoint](https://www.tutorialspoint.com/cprogramming/c_structures.htm)
- A struct for this spill exit will look something like:

```cpp
// Place this before your main function
struct ActionData {
    int leftMotorSpeed;
    int rightMotorSpeed;
    int leftMotorCount;
    int rightMotorCount;
};
```

### Storing all actions
- To store all these blocks of information, you want to put them in an 'array'. This is an ordered list of items, with a maximum size.
    - [C Arrays - tutorialspoint](https://www.tutorialspoint.com/cprogramming/c_arrays.htm)
    - [How to make an array of struct in C?](https://stackoverflow.com/a/32185804)

```cpp
// Place this above the main function
struct ActionData allActions[3000]; // Create an array of ActionData
int currentAction = 0;       // Keep track of where we are

...

// For each action within the spill, record the data
nMotorEncoder[leftMotor] = 0;
nMotorEncoder[rightMotor] = 0;
// Rotate around until we find something on the sonar
move(10, -10);
while (SensorValue[Sonar] < 10) {
    // finding...
}
// Store this data
allActions[currentAction].leftMotorSpeed = 10;
allActions[currentAction].rightMotorSpeed = -10;
allActions[currentAction].leftMotorCount = nMotorEncoder[leftMotor];
allActions[currentAction].rightMotorCount = nMotorEncoder[rightMotor];
currentAction = currentAction + 1;

// Next action can now start!
...
```

### Backtracking through the actions
- We know that all the actions have been stored in our array, `allActions`, and that the latest action was number `currentAction - 1` (because we increment after the action is completed). So:
    - We can have a loop that goes through each action, but backwards
    - We start at `currentAction - 1`
    - We end when `currentAction == -1`
    - While we are in the loop, we do the action (also inversed).

Let's take a look at this in code:

```cpp
currentAction = currentAction - 1;
while (currentAction >= 0) {
    // Reset counters
    nMotorEncoder[leftMotor] = 0;
    nMotorEncoder[rightMotor] = 0;

    // Get the data out of the struct
    int leftSpeed = allActions[currentAction].leftMotorSpeed;
    int rightSpeed = allActions[currentAction].rightMotorSpeed;
    int leftCount = allActions[currentAction].leftMotorCount;
    int rightCount = allActions[currentAction].rightMotorCount;

    // Inverse these actions
    // We can just keep track of the absolute values of the counts
    // Because otherwise it gets messy with negative values.
    leftSpeed = -leftSpeed;
    rightSpeed = -rightSpeed;
    leftCount = abs(leftCount);
    rightCount = abs(rightCount);

    // Do the action
    move(leftSpeed, rightSpeed);
    while (leftCount < abs(nMotorEncoder[leftMotor]) || rightCount < abs(nMotorEncoder[rightMotor]))) {
        // moving...
    }

    move(0, 0);
    // We should be back to where we were before this action.
    currentAction = currentAction - 1;
    // Subtract so that we can take the previous action.
}
```

## It's not working
- Make sure you're resetting the motorEncoder count every time you store values.
- Try out the code separately - make a new file, make the robot go forward and watch it go backwards.
- If you want to store two paths separately and interchange between them, you'll need two allActions structs.
    - Remember that you only need to store the data when you need it!