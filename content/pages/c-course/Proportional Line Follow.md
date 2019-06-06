title: Proportional Line Follow, EV3
type: tutorial
sortorder:1
fullwidth:true
back: /resources/:Back to Resources

To begin, you're expected to know how to manipulate C variables, obtain sensor values and output motor speeds.

Make sure you can:

- Get sensor values
- Send motor speeds

## Threshold Line Follow
So far, we have learnt how to detect certain colours that are within certain ranges. For example, we can get the colours from both sensors, add them together, and repeatedly check if they are between 300 and 400.

Note: code won't work when simply copy pasting.

```cpp
task main() {
    // Initialise sensor variables (left rgb, right rgb)
    int lr, lg, lb;
    int rr, rg, rb;
    int lall, rall; // Store sums of rgb

    // Repeatedly get sensor values and process them
    while (1) {
        getColorRawRGB(sensorLeft, lr, lg, lb);
        getColorRawRGB(sensorRight, rr, rg, rb);
        lall = lr + lg + lb;
        rall = rr + rg + rb;

        // if both are between 300 and 400, stop
        if (lall > 300 && rall > 300 && lall < 400 && rall < 400) {
            motor[mLeft] = 0;
            motor[mRight] = 0;
        }
        // Otherwise, continue forwards
        else {
            motor[mLeft] = 20;
            motor[mRight] = 20;
        }
    }
}
```

The thresholds here is "between 300 and 400". It's easy to see that this can be extended to thresholds for white/white, white/black, black/white and black/black.

```cpp
// #defines are CONSTANTS, they stay the same throughout the whole code. Use them for fixed numbers like thresholds.
#define L_MIN_WHITE 200
#define L_MAX_WHITE 1000
#define R_MIN_WHITE 200
#define R_MAX_WHITE 1000

#define L_MIN_BLACK 0
#define L_MAX_BLACK 199
#define R_MIN_BLACK 0
#define R_MAX_BLACK 199

task main() {
    // Initialise sensor variables (left rgb, right rgb)
    int lr, lg, lb;
    int rr, rg, rb;
    int lall, rall; // Store sums of rgb

    // Repeatedly get sensor values and process them
    while (1) {
        getColorRawRGB(sensorLeft, lr, lg, lb);
        getColorRawRGB(sensorRight, rr, rg, rb);
        lall = lr + lg + lb;
        rall = rr + rg + rb;

        // both white, go forward
        if (lAll > L_MIN_WHITE && lAll < L_MAX_WHITE && rAll > R_MIN_WHITE && rAll < R_MAX_WHITE) {
            motor[mLeft] = 20;
            motor[mRight] = 20;
        }
        // left is white, right is black, turn right
        else if (lAll > L_MIN_WHITE && lAll < L_MAX_WHITE && rAll > R_MIN_BLACK && rAll < R_MAX_BLACK) {
            motor[mLeft] = 20;
            motor[mRight] = 0;
        }
        
        // ... etc
        
    }
}
```

## Proportional Line Follow

<img src="http://www.ermicro.com/blog/wp-content/uploads/2011/01/op-amp_lfr_01.jpg" width="100%" />

Proportional line follow is a smoother way of doing line follow. Thresholds usually make jerking motions, which aren't desireable.

Threshold line follow is bad because:

* Robot has only three fixed speeds, so it will either turn left, turn right or go straight
* If it only needs a slight adjustment, it will either do no adjustment or a sudden adjustment
* You may start zigzagging to follow the line - which will be worse if the light sensors are further away from each other.

Instead, we want to **incrementally adjust the speeds based on how dark or how bright** the light sensor reads.

How? Consider the extremes. Let's say very black is 1 and white is 5

* When left is very black (1) and right is white (5), we want to turn very left - difference is 1 - 5 = -4
* When left is slightly black (3) and right is white (5), we want to turn slightly left - difference is 3 - 5 = -2
* When left is white (5) and right is white (5), difference is 0
* When left is white (5) and right is slightly black (3), difference is 5 - 3 = 2
* When left is white (5) and right is very black (1), difference is 5 - 1 = 4

Cool? We can scale this number to fit the motor speeds. We basically need to use these values to make the left and right motors change speed.

```
Base speed = 20

l, r => difference | motor left | motor right
5, 5 => 0          | 20 + 0     | 20 - 0
5, 1 => 4          | 20 + 4     | 20 - 4
1, 5 => -4         | 20 + (-4)  | 20 - (-4)
```

* In case 1, both wheels turn at the same speed so it goes straight
* In case 2, left is white, right is black and so it turns right - hence left wheel spins faster than right
* In case 3, it's the opposite, so right wheel spins faster.

In RobotC, we can code this up and use some extra variables for scaling.

```cpp
// #defines are CONSTANTS, they stay the same throughout the whole code. Use them for fixed numbers like thresholds.
#define L_MIN_WHITE 200
#define L_MAX_WHITE 1000
#define R_MIN_WHITE 200
#define R_MAX_WHITE 1000

#define L_MIN_BLACK 0
#define L_MAX_BLACK 199
#define R_MIN_BLACK 0
#define R_MAX_BLACK 199

task main() {
    // Initialise sensor variables (left rgb, right rgb)
    int lr, lg, lb;
    int rr, rg, rb;
    int lall, rall; // Store sums of rgb
    int difference;

    float multiplier = 0.05; // multiplier to the speed differences

    // Repeatedly get sensor values and process them
    while (1) {
        getColorRawRGB(sensorLeft, lr, lg, lb);
        getColorRawRGB(sensorRight, rr, rg, rb);
        lall = lr + lg + lb;
        rall = rr + rg + rb;

        difference = lall - rall;

        motor[mLeft] = 20 + difference * multiplier;
        motor[mRight] = 20 - difference * multiplier;
        // So, the extremes are left-right = 1000 - 150
        // difference = 850
        // Multiplying by multiplier 850 * 0.05 = 42.5
        // left motor goes at 20 + 42.5 = 62.5
        // right motor goes at 20 - 42.5 = -22.5
        // Is this too much? yes
    }
}
```