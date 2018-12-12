title: NXT Motors
type: tutorial
fullwidth: true
back: ../:Back to RobotC NXT Docs

## Setting motor speed
`motor` sets the motor speed to a particular value between -100 to 100.

### Example

```cpp
motor[motorA] = 100;  // motor A set to 100 speed (forwards)
motor[motorD] = -100; // motor D set to -100 speed (reverse)
```

* Sets the motor speed level: -100 to 100
* Setting the motor speed to 0 stops the motor
* Negative values are reverse, positive values are forwards
* `motorA` stands for the motor plugged into port A
