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

- The robot should be able to navigate around the maze. It goes around and looks for heat packs - they are 28 to 40 degrees Celcius.
- When a heat pack is spotted, it needs to drop a small piece (e.g. a flat Lego piece or a small 3D printed block) on the side where the heat pack is placed. You will need to store up to 12 of these 'rescue kits'.
- You need to avoid tiles that are black ('holes') and the silver tiles are checkpoints.
    - You can restart at either the checkpoint or at the start.
- Each round is timed. You are given a certain period of time to get all heat packs and return to the start.
- There's debris - things like rocks, spaghetti and water towers.

Full rules are here: [Official RCJA Rescue Maze Rules 2018 (KBTC)](https://www.robocupjunior.org.au/sites/default/files/Official%20RCJA%20Rescue%20Maze%20Rules%202018%20%28KBTC%29.pdf)

## Construction
### Construction: Sensors
- **One colour sensor** facing down for observing the tile colour
- Sensors to identify walls (choose one of the options):
    - **2 Pixy cameras**: harder to get right (in code), but less movement. Easier to quickly identify what's there, as long as the heat packs are coloured, and easier to identify when it's a possible route or a wall.
    - **2 Colour sensors**: you will need to drive up to the wall and properly see the heat pack to accurately detect the colour. Similarly, heat packs must be coloured. There should be enough detectable colour difference between the walls and not having a wall.
    - **1 colour, 1 sonar**: Colour is used to identify objects on the wall, sonar spins around to locate walls in the maze.
- **Compass or Gyro**: you need to know which way you're facing at all times. You may be able to make do with reorienting yourself by hitting the walls.

Ideally, you have more sensor ports. There are some sensor multiplexers and you may also build a hybrid robot, which will allow you to have more ports.

- **Distance/sonar sensors** to more accurately detect wall/path.
- **Heat sensors** to more accurately detect the victims. NXT/EV3 heat sensor available [here](http://www.mindsensors.com/products/170-ir-temperature-sensor-for-ev3-or-nxt).

### Construction: Motors
- **Two or three driving motors** - would be ideal to have the robot be omnidirectional, to save time. However, two wheels is absolutely fine.
    - Your robot needs to be able to look around, e.g. rotate 90 degrees to look at all walls.
    - Robot needs to easily traverse in any direction up/down/left/right in the maze
    - If spinning sensors around, use one motor for rotating the sensor around.
- **One package motor** for dropping the package

### General construction
- It seems like robots that have a square base are nicer - the 90 degree rotations won't be reliable but you will be able to readjust yourself easily by hitting the walls. Robots that don't self adjust will struggle with creating a good map.
- Using tracks for wheels (if having two driving motors) seems good as it lets you travel pretty efficiently around the course.