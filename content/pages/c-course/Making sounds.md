title: 7. Making Sounds
type: tutorial
fullwidth: true
sortorder: 002
previous: /c-course/sensors-and-motors:Sensors and Motors
next: /c-course/sonar:Sonar
back: /c-course/:Back to C Course

## 7.1 Playing tones
Beep beep! Tones are very useful for testing purposes. If you are confused at where you are in a piece of code, you can make the robot make a noise, so you have a 'breakpoint'.

To make a noise, use the function:

<pre class="rds-code">
<code class="cpp">playTone(500, 100);</code>
</pre>

This plays a <strong>tone at frequency of 500 Hz for 1000 milliseconds (1 second)</strong>. That second number is the number of 10 milliseconds.

To make different noises, simply change the frequency or time. Try changing 500 to 100, and 900.

## 7.2 Playing sounds
You can also play some other patterns:
<pre class="rds-code">
<code class="cpp">playSound(soundUpwardTones);</code>
</pre>

You can do the following sounds. Try them out!
* soundBlip
* soundBeepBeep
* soundDownwardTones
* soundUpwardTones
* soundLowBuzz
* soundFastUpwardTones
* soundShortBlip
* soundException
* soundLowBuzzShort

## 7.3 Discovering more functions in 'Text Functions'
In RobotC, you should be able to see a section on the left called 'Text Functions'. This panel lets you drag and drop functions into the code. Look for playSound and playTone under 'Sound':

<img src="{attach}text_functions.png" style="max-width:400px;width:100%;">

Try dragging functions out from this menu and into the code area.

If you cannot see this panel, go to the top menu and select View > Function Libarry (text).