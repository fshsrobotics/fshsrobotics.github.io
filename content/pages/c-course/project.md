title: Project: Dangerous Chemicals
type: tutorial
fullwidth: true
sortorder: 002
back: /c-course/:Back to C Course

## Due Dates

* **Milestone 1**: Week 4 Term 1 2019.
* **Final Demonstration**: Week 6 Term 1 2019.
* Let me know if you cannot demonstrate on these weeks.

## Overview
A robot has been flown in and deployed on the ground floor of a recently quarantined factory. There is a green radioactive spill and all humans have been evacuated. There is also a container of dangerous chemicals sat within the spill, and it needs to be moved out of the area. The robot should enter by detecting a silver strip.

Your robot needs to autonomously enter the location, locate the container and push it safely out of the radioactive area without toppling it over (and spilling its contents!)

## Teams
Students should work in teams. Teams should be based on the submitted form. 

## Changelog
Changes to the project will be posted here.

1. I have added a new page with [some tips on getting started](/c-course/project-start/).

## Project Specification
<img src="{attach}end_tile.png" style="float:right;max-width:170px;" />

### Milestone 1
Write a program that moves forward until it detects a silver strip. When detected, it should print a message on the screen or play a sound. The robot should also stop for one second.

Continue the program by making it go into the centre of the spill and rotate 360 degrees. Stop after 360 degrees.

A demo robot will be available for students to upload code to.

Teams ahead of time can start building their competitions robots from Term 1.

### Milestone 2 (Final)
During its 360 degree spin, locate the can using sonar values. When located, push the silver can out and stop immediately after the robot's sensors see white.

Bonus points for robots that can return to the original starting point (silver strip).

## Scoring

| Action                                       | Score |
|----------------------------------------------|-------|
| Program compiles                             | 1     |
| Robot moves                                  | 1     |
| Robot identifies silver strip                | 2     |
| Robot stops for one second at silver strip   | 2     |
| Robot moves to the middle of the spill       | 3     |
| Robot rotates 360 degrees                    | 3     |
| **Milestone 1 subtotal**                     | /12   |
| Robot identifies can within the 360 degrees  | 4     |
| Robot pushes can out of the spill            | 4     |
| Bonus: robot exits the spill at silver strip | 10    |
| **Milestone 2 subtotal**                     | /8    |
| **Total**                                    | /20   |
