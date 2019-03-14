title: Code Design
type: tutorial
tutorialtype:line
back: /line/:Back to Rescue Line
tutoriallinks: /line/,Rescue Line,c||/line/tiles,Tiles and Turns,c||/line/obstacles,Obstacles,c||/line/spill,Chemical Spill,c||/line/competition,At the Competition,c||/line/logbooks,Sample Logbooks,c||/line/robot-design,Robot Design,c||/line/code-design,Code Design,a

## General tips
* Print things to the screen, make sounds to know which part of the code you are up to.
* Structure your code and add comments (`// this is a comment`). Make sure that you indent correctly, it saves me time and saves you time.

## Tips for Line Follow
* Use `#define` to define any thresholds you want. This makes it easier to adjust when you are recalibrating for different lighting conditions. For example, if you want to store the RGB values for green turns, do the following:

```cpp
#define GTURN_LEFT_RED_LOWER 100
#define GTURN_LEFT_RED_UPPER 150

...

task main() {
    int lr, lg, lb;
    while (1) {
        if (lr > GTURN_LEFT_RED_LOWER && lr < GTURN_LEFT_RED_UPPER) {
            // left red value is between low and high
        }
    }
}
```
* Instead of using thresholds (lower and upper bounds), try and use proportional line follow or PID. More information coming soon.
    * Don't use proportional line follow for green turns or silver detection.
    * Ask Kris for resources

## Tips for Obstacles
* For the water tower, use **motor encoders** to measure the distance you have travelled, instead of time. There is information on motor encoders [here](/robotc/nxt-motor-encoder/) (for NXT, find the correct functions for EV3).
* Touch sensor values are simple - use `SensorValue[sensorTouch]` (sensorTouch is the name you set in the setup). The number you get out of it is 0 or 1.
* Make sure your speed is high enough for it to drive up ramps, but slow enough to be accurate.

## Tips for Spill
* Don't worry about black cans first - start by finding a can, picking it up and then finding the block and placing it down.
    * The most points is in control (50 points) and placing it down (50 points). Master this and don't worry about other cans.
* Work fast and test frequently. You don't need a tile to test - you just need a can and a way to trigger the chemical spill code.
