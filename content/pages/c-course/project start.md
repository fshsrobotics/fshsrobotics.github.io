title: Project: tips
type: tutorial
fullwidth: true
sortorder: 002
back: /c-course/:Back to C Course

## Detecting the silver strip
To detect the silver strip, you will need to:

1. Get colour readings for the silver strip (RGB) for at least one sensor (more accurate with both left and right).
2. Set up a big loop for your program, e.g.

```cpp
task main() {
    // put variables here
    int leftR, leftG, leftB;
    int rightR, rightG, rightB;

    while (1) {
        // repeatedly get the sensor values
        // repeatedly check the sensor values to see if it is silver
    }
}
```
3. Make an if statement within the big loop that checks the sensor values to see if it is silver.
4. When you see silver, make a sound and stop for a second.

## Transitioning from silver strip detection to other code
Code likes to run from top to bottom, but you want your code to _either_ be detecting the silver strip OR performing the search. 

The easiest way to do this is to set up a **flag** that tells the code which task we want to do. If the flag is 1, we do strip detection, if the flag is 2 we go forward, if the flag is 3, we are done.

```cpp
task main() {
    // put variables here
    int leftR, leftG, leftB;
    int rightR, rightG, rightB;

    int currentTask = 1; // our 'task' flag
                         // 1: silver strip detection
                         // 2: going forward
                         // 3: idle/stop program
    while (1) {
        if (currentTask == 1) {
            // repeatedly get the sensor values
            // repeatedly check the sensor values to see if it is silver
            if (silver) {
                // beep and wait a second
                currentTask = 2; // change task to 'go forward'
            }
        }
        else if (currentTask == 2) {
            // go forward
            if (forward enough) {
                currentTask = 3;
            }
        }
        else if (currentTask == 3) {
            // stop all motors, do nothing else
        }
    }
}
```

