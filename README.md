# Wifi Temperature Gauge
## Basic implementation using Espruino, Onewire DS18B20 on ESP8266

To use code unchanged, save with the addition of your Wifi SSID and password, 
Onewire data pin is GPIO 14.

Transmits temperature recorded by DS18B20, via websocket to HTML page served by the ESP8266
The temperature is displayed with an IoTUI.js thermometer component (which is basically a wrapper for Riot.js)

This is a working implementation, the web ui could be nicer maybe.