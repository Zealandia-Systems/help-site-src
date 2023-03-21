# Machine Startup

## Connecting to the machine

1. Open Gladius
1. Click on the blue button "Disconnected" at the top right of Gladius. It will show a drop down menu.
1. Select the com port that is connected to controller and hit "Open"

![image](images/GladiusConnect.png)

On the top left side of Gladius, the console should pop up with a black terminal and the "Disconnected" button should now be "Connected"
![image](images/GladiusConnected.png)

## Homing the machine

Press the "Homing" button at the top right of Gladius to home the machine. The machine should start moving to it's home position. 
![image](images/homing.png)

Before running up the machine we reccomend you follow the startup procedure and spindle warm up below.

## Startup Procedure
    Turn on your Machine at the controller
    Make sure the USB is connected to the Computer
    Connect to your machine through Gladius
    Home the machine
    Run a tool change to set machine work co-ordinates
    Run the XYZ Probe, or manually set work coordinates
    Press X0Y0 and Z0 to move the machine to work coordinate origin to verify position.
    Ready to go! Run your GCode

## Spindle Warmup
The warm up should be performed before use to increase the longevity of your machine. Each stage should be held for 120 seconds (two minutes). Macro link [here]

    7,500 RPM
    9,000 RPM
    11,500 RPM
    15,000 RPM
    18,000 RPM

