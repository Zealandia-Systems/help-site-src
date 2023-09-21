## Tool Offset Probe Calibration
For a brand new machine you will need to calibrate the tool probe.

Before calibrating the G59.9 (tool probe) WCS, you should install a tool into the spindle, sticking out roughly 35mm.

Move the spindle directly above the tool probe, before running the following g-code. (ATC machines will need to turn off soft limits)

     G49   //clear offset

     G59.9 //selecting tool probe WCS P60

     G37 //run probe

     G10 L20 P60 X0 Y0 // set coordinates

     M500 //save

     G54.0 / change back into another WCS

**IMPORTANT!! Run a tool change after calibration to make sure the correct tool height is set, as the calibration steps do not do this!**

 Video [here](https://youtu.be/LnDZ8_u_FLo) on how it functions once its calibrated. Get a 6mm drill bit or one of your new tools, measure it with some calipers as you will need it for the calibration.