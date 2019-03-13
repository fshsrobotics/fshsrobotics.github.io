title: Tiles and Turns
type: tutorial
tutorialtype:line
back: /line/:Back to Rescue Line
tutoriallinks: /line/,Rescue Line,c||/line/tiles,Tiles and Turns,a||/line/obstacles,Obstacles,-||/line/spill,Chemical Spill,-||/line/competition,At the Competition,-||/line/logbooks,Sample Logbooks,-||/line/robot-design,Robot Design,-||/line/code-design,Code Design,-

## Tiles
<img src="{filename}small.jpg" style="width:100%;max-width:500px">
<img src="{filename}large.jpg" style="width:100%;max-width:500px">

* Before the spill, the robot must navigate a selection of large and small tiles. The smallest tile will be 300 x 300mm, the largest tile is 600 x 600mm.
* The course has some tight bends, which are very difficult on small tiles - make sure your line follow algorithm can handle these!

<img src="{filename}green.jpg" style="width:100%;max-width:140px">
<img src="{filename}gridlock.jpg" style="width:100%;max-width:140px">

* **Green turns** are turns that tell you which way to turn. In the above image, going up the tile, you must turn left. 
* **Gridlock** is a special tile that might look complicated, but is simple. Think about what you want to do at each intersection. 
* There are many other tiles - see these PDFs:
    * [600 x 600 tiles]({filename}600x600.pdf)
    * [300 x 300 tiles]({filename}300x300.pdf)

## Markers
* In some rounds, you may see a coloured (non-green) line. The judge will ask you to do a particular action, such as:
    * When you reach the red line, stop for 3 seconds
    * When you reach the blue line, make a noise or flash a light
    * The yellow line is a shortcut you may use

## Colours
* While all tiles and boards are black line on white background, this may change in the future and may be inversed or changed in some way. In the past we've practiced with black line on orange background, white on black, etc. Make sure you are able to change your code to deal with this.

## Tips
* You will get more reliable readings from your colour sensors if you shield them. You can wrap white paper around the sensor so that the paper is right above the ground.
* Don't make your robot travel too fast - start slow. If the tiles are small, 
* Using black electrical tape, create your own sharp turns (we do not own 300 x 300mm tiles).
* A good rule is your robot should be able to do complete a tile at least 9 of 10 tries. 
