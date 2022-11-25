# Configuration Settings

# WARNING!!
**These functions are mainly designed for service technicians, or those that feel comfortable fiddling. If you are uncomfortable and are having issues with Gladius and the machine contact us for [support](https://zealandia.systems/pages/support).**

## Firmware update
In order to do a firmware update, you will need to enter M997 into the console in Gladius. Once you do this, the controller will restart and open a USB drive on your PC. Click and drag or copy and past this attached firmware file into the USB drive. Once complete, the controller will automatically reboot and install the update.

Latest firmware [here](https://github.com/Zealandia-Systems/Swordfish/releases)

![image](images/Firmware.png)

## SwordFish Post Processors
HSM Works Fusion360 Vectric Software

These are all supported by our Post Processor installer now located inside of Gladius.

*something here for tool library*

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

 ## Setting Workspace Limits
 You will need to make sure limits are set:
 ### P2 Workspace

    M212 X0 Y0 Z-150

    M213 X1330 Y930 Z0

    ### P3 Workspace

    M212 X0 Y0 Z-150

    M213 X1330 Y1330 Z0

    ### P4 Workspace

    M212 X0 Y0 Z-150

    M213 X1330 Y2630 Z0

## Enabling Automatic Tool Changer Function
    M2000 O2 ?/tooling >{"automatic":true}

## Configuring VFD and Spindle

Changzou H100

    M2000 O0 ?/tooling/drivers/0 >{"index":0,"type":0}

Fuling DZB

    M2000 O0 ?/tooling/drivers/0 >{"index":0,"type":1}

as well as the maximum rpm supported by the spindle:

18000 RPM
   
    M2000 O0 ?/tooling/driverParameters/0 >{"index":0,"driver":0,"id":10,"value":18000}

24000 RPM
    
    M2000 O0 ?/tooling/driverParameters/0 >{"index":0,"driver":0,"id":10,"value":24000}

and, if the spindle has an electric fan, you will need to enable it:
    
    M2000 O0 ?/tooling/driverParameters/1 >{"index":0,"driver":0,"id":11,"value":"true"}