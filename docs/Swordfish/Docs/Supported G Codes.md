# G-Code Commands

## Current GCode Commands Supported by SwordFish

| G Commands | Use |
|-|-|
|G0|Rapid move, Linear|
|G1|Feed move, Linear|
|G2|Arc or circle, CW|
|G3|Arc or circle, CCW|
|G4|Dwell, (P) in MilliSeconds or (S) in Seconds
|G17-G19| Workspace Planes|
|G20|Inch Units|
|G21|mm units|
|G28.2| Homing an axis to saved stops
|G28.2 A| Reset Homing using endstops  i.e     G28.8 A X Y Z  will home the machine,   G28.8 A Z will home Z axis only.
|G37|Single Z-Probe. Tool must be positioned above the probe, which is set by WCS (work coordinate system) G59.9 X0 Y0 position|
|G54 - G59.9|Workspace Coordinates|
|G90|Absolute Positioning|
|G91|Relative Positioning|