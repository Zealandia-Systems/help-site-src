# Tool Change

This function automatically calls an M6 command, sending the spindle to the front left of the machine, by the emergency stop, ready to accept a new tool. It will then ask for confirmation of the tool being installed, and upon accepting it will probe the Z height automatically using the Z offset probe.

