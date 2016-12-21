# Wifi Temperature Gauge
## Basic implementation using Espruino, Onewire DS18B20 on ESP8266

To use code unchanged, save with the addition of your Wifi SSID and password.

Note the Onewire data pin to connect to is GPIO14 (D14) - or you can change it.

Transmits temperature recorded by DS18B20, every 2 seconds via websocket to HTML page served by the ESP8266.
The temperature is displayed and updated in realtime with an IoTUI.js thermometer component (which is basically a wrapper for Riot.js)

This is a working implementation, the web ui could be nicer maybe.