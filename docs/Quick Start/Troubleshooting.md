## Golden rule of finding issues!

we need clear instructions on how to repeat the error at our end, otherwise we are just crystal ball gazing.  

If you can't get it to repeat at your end, it might've just been a fluke or an error in your processes, but if you can get it to repeat, then we may have a bug, but it means we can also look at and verify the process to check for errors.

Generally there are two types of issues

1.  Doing something when it shouldn't be
2.  Not doing something when it should be


## Start with updating all your software!

The bug may have already been solved, so there is no point chasing our tails if you haven't updated the software!
Update both Gladius, and the Swordfish Firmware on your machine.

## What are you trying to accomplish?

Give accurate detailed instructions on what you have been doing to acheive what you are trying to accomplish.

## What are you experiencing?

1.  Doing something when it shouldn't be
2.  Not doing something when it should be

## Read your Gcode!

Computers, and especially ours, are extemely fast, incredibly accurate but insanely stupid!  They will do exactly as they are told and make ZERO assumptions, let's make sure we aren't telling it to do something silly :)

## Common Issues:

1. Cutting in the wrong place
2. Pneumatics not working
3. WCS (XYZ) Probe not working
4. Tool [setter] Probe not working
5. Spindle not turning on or off
6. Limit Exception
7. Machine Stalling, typically on Y Axis
8. Tool Change not Functioning
9. Tool Height Incorrect after Tool Change

### Cutting in the wrong place

    SYMPTOMS:  
    Cutting in the wrong place

    DIAGNOSIS:
    Machine has stalled and lost it's poistion
    Gladius isn't set to the same work coordinate system as your file, typically G54.0
    The WCS (Work Coordinate System) Zero has been set wrong

    SOLUTIONS:
    Home your Machine
    Ensure you are in the correct WCS workspace (i.e G54.0)
    Verify your X0Y0, and your Z0 coordinate position is the same as your CAM setup


### Pnuematics not working

    SYMPTOMS:
    Machine halts during tool change

    DIAGNOSIS:
    Insufficient Air
    Water in Air

    SOLUTIONS:
    Ensure air line is connected (YES! Silly but it happens)
    Ensure compressor is up to the task (See machine requirements)
    Ensure air has sufficient drainage or dryer is on compressor.  If there is moisture in the lines, you will be blowing water directly into the bearings causing rust and damage leading to eventual failure of the spindle.

### Work Coordinate Setter (WCS) Probe not working

    SYMPTOMS: 
    Machine drives into base of probe, stalls or snaps tool.
    Machine not making contact with probe
    Machine not moving (or moving veerrry slowly)
    Button is greyed out in Gladius

    DIAGNOSIS:
    Ensure probe is plugged in and firmly seated.
    Red LED on probe should be lit up.
    Touch XYZ (WCS) Probe against general mass of earth and visually check that LED goes brighter
    Check M119 function for "TRIGGERED" or "OPEN" response while both touching and not touching mass of earth
    Corner not selected in software

    SOLUTIONS:
    Plug Probe in
    Probe is damaged and needs replacing
    Machine has been set too far away from the probe, relative to it's safe probing distance.  Default 10mm.
    Machine has been set to probe far too slowly (default 20mm/minute).  Can appear like it's not moving.  Change to 200mm/min rate in the probing function.
    ATC Spindle are supplied with Ceramic bearings, which do not conduct.  Use a crocodile clip to go between the machine's general mass of earth, and the tool.  I.e clip the top of the tool to a bolt, such as the spindle mount, on the Z axis.
    Select the correct corner probe is touching inside gladius and the button should darken and enable.

### Tool Setter/Z Probe not working

    SYMPTOMS:
    Upon Tool change, spindle does not go downwards, only upwards.
    May throw a limit exception error
    Drives tool into wrong spot on the bed
    Tool fails to reach probe

    DIAGNOSIS:
    M119 to check the status of the probe.  Check Z Probe for "TRIGGERED" or "OPEN. 
    Push and hold probe down while executing another M119 to verify operation

    SOLUTIONS:
    Probe has been damaged and is stuck in downwards position, will need to be replaced
    The work-coordinate location of the probe has been overwritten by the user.  Reset position required.
    Tool is not protruding sufficiently out of the spindle.  Machine has run out of Z travel while probing.  Run tool change function again and lower tool slightly.

### Spindle not turning on or off

    SYMPTOMS:

    DIAGNOSIS:

    SOLUTIONS:

### Limit Exception

    SYMPTOMS:

    DIAGNOSIS:

    SOLUTIONS:

### Machine Stalling

This issue is typical of the Y (long) axis on P4, when some dirt and debris gets onto the motion system.

    SYMPTOMS:  
    A grinding and a binding noise, followed by the toolhead moving to the wrong spot

    DIAGNOSIS:  
    Ballscrew may be tensioned incorrectly
    Ballscrew Tensioner bearing may have failed
    Dirt and detritis on Ballscrew
    Dirt and detritis on Linear Rail

    SOLUTIONS:
    Replace Tensioner bearing
    Retention Ballscrew
    Clean Ballscrew, and apply grease
    Clean linear rail, and apply grease

Please note: 
You may need to grease at multiple points along the rail and ballscrew.  It is also good practice to apply some grease directly to the rails and screw with a brush or rag. 
Grease should be a high-speed lithium grease.  Also known as an EP2 or EP3 grease by some brands

GREASE IS CHEAP!  Bearings and down time are not!   Go wild with the grease, it'll spit out what it doesn't want.


### Tool Change not Functioning (Non-ATC Variants)

    SYMPTOMS:

    DIAGNOSIS:

    SOLUTIONS:


### Tool Change not Functioning (ATC Variants)

    SYMPTOMS:

    DIAGNOSIS:

    SOLUTIONS:

### Tool Height Incorrect after Tool Change

    SYMPTOMS:

    DIAGNOSIS:

    SOLUTIONS: