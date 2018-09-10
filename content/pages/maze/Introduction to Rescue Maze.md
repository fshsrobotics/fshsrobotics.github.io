title: Introduction to Rescue Maze
type: tutorial
tutorialtype:maze
back: /maze/:Back to Maze

## Overview
This is a video of the winning team in the 2017 National Competition in Brisbane.

<video width="100%" height="auto" controls>
    <source src="/file/maze1.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

- The robot should be able to navigate around the maze. It goes around and looks for heat packs - they are about 40 degrees Celcius.
- When a heat pack is spotted, it needs to drop a small piece (e.g. a flat Lego piece or a small 3D printed block) on the side where the heat pack is placed.
- You need to avoid tiles that are black ('holes') and the silver tiles are checkpoints.
    - You can restart at either the checkpoint or at the start.
- Each round is timed. You are given a certain period of time to get all heat packs and return to the start.
- There's debris - things like rocks, spaghetti and water towers.

## Construction
### Construction: Sensors
- **One colour sensor** facing down for observing the tile colour
- **Pixy camera OR two colour sensors OR two heat sensors** facing sideways to look at the walls.
    - **1 or 2 pixy cameras**, harder to get right (in code), but less movement. Easier to quickly identify what's there, as long as the heat packs are coloured (in NSW it's blue, in Brisbane it's red).
    - **2 Colour sensors**: you will need to drive up to the wall and properly see the heat pack to accurately detect the colour. Similarly, heat packs must be coloured.
    - **Heat sensors**: we don't have them yet but we can buy them [here](http://www.mindsensors.com/products/170-ir-temperature-sensor-for-ev3-or-nxt).
- **Compass or Gyro**: you need to know which way you're facing at all times. You may be able to make do with reorienting yourself by hitting the walls.

### Construction: Motors
- **Three driving motors** - would be ideal to have the robot be omnidirectional.
    - Your robot needs to be able to look around, e.g. rotate 90 degrees to look at all walls.
    - Robot needs to easily traverse in any direction up/down/left/right in the maze
- **One package motor** for dropping the package

