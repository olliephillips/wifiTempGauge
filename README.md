# Wifi Temperature Gauge
## Basic implementation using Espruino, Onewire DS18B20 on ESP8266

To use code unchanged, save with the addition of your Wifi SSID and password.

Note the Onewire data pin to connect to is GPIO14 (D14) - or you can change it.

Transmits temperature recorded by DS18B20, every 2 seconds via websocket to HTML page served by the ESP8266.
The temperature is displayed and updated in realtime with an IoTUI.js thermometer component (which is basically a wrapper for Riot.js)

This is a working implementation, the web ui could be nicer maybe.

### Wiring
The DS18B20 is wired to 3.3v, GND and GPIO14 (in this code). Depending on the variant the DS18B20 data wire is likely to be green or yellow. Red is 3.3v. Whatver is left is GND.
For short runs (I'm using a metre wire), no resistor is required to be attached to the DS18B20.

## Need a case?
I'm using an unpinned D1 Mini development board, which has small form factor and includes USB to serial/power interface.
STL files for a 3D printed case for D1 Mini, which includes a hole for the DS18B20 can be
[found on Thingiverse here](http://www.thingiverse.com/thing:1983890).

## Espruino version
There's an issue with websockets between webkit based browsers on iPhone and Espruino since Espruino HTTP uses the HTTP/1.0 standard, which is no longer supported in Webkit.
If you edit your binaries with a Hex editor and do find/replace "HTTP/1.0" with "HTTP/1.1" then flash the binaries to the ESP8266 this should rectify the problem.

