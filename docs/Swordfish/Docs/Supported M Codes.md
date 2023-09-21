# M-Code Commands

## Current MCode Commands Supported by SwordFish

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
|M92|Set Axis Steps-Per-Unit
|M111|Set Debug Level; (S1) Echo, (S2) Info, (S4) Errors, (S128) VFD Commmunication Debug
|M115|Read Firmware Version
|M119|Retrieve endstop status|
|M120|Enable Hardware Endstops|
|M121|Disable Hardware Endstops|
|M211|Software Endstops (Soft Limits) toggle with S0 or S1
|M500|Save Settings
|M503|Retrieve Hardware Settings|
|M997|Restart into firmware update mode. This will open a USB drive and wait for you to copy and paste the new firmware file into the drive. *See [here](https://github.com/Zealandia-Systems/Swordfish/releases) for SwordFish firmware.* 