# GCode Commands

## Current GCode Commands Supported by SwordFish

| G Commands | Use |
|-|-|
|G0|Rapid move, Linear|
|G1|Feed move, Linear|
|G2|Arc or circle, CW|
|G3|Arc or circle, CCW|
|G20|Inch Units|
|G21|mm units|
|G37|Single Z-Probe. Tool must be positioned above the probe, which is set by WCS (work coordinate system) G59.9 X0 Y0 position|
|G54 - G59.9|Workspace Coordinates|
|G90|Absolute Positioning|
|G91|Relative Positioning|

| M Commands | Use |
|-|-|
|M0-M1|Unconditional stop|
|M3|Spindle on, CW|
|M4|Spindle on, CCW|
|M5|Spindle stop|
|M7|Coolant - Mist|
|M9|Coolant off|
|M12|Coolant air|
|M20|List SD card|
|M21|Initialise SD card|
|M22|Release SD card|
|M23|Select SD file|
|M24|Start or resume SD program|
|M25|Pause SD program|
|M26|Set SD position|
|M27|Report SD program status|
|M28|Start SD write|
|M29|Stop SD write|
|M30|Delete SD file|
|M31|Program time|
|M32|Select and start|
|M33|Get long path|
|M34|SD card sorting|
|M119|Retrieve endstop status|
|M997|Restart into firmware update mode. This will open a USB drive and wait for you to copy and paste the new firmware file into the drive. *See [here](https://github.com/Zealandia-Systems/Swordfish/releases) for SwordFish firmware.* 