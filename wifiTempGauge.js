// Wifi Temp Gauge
// Ollie Phillips
// Simple remote temperature monitoring

var wifi = require("Wifi");
var ap = {
  "ssid": "ssid",
  "pwd": "password"
};

// HTTP handler
function servePage(req, res) {
  var page ='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport"';
  page += 'content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"></head>';
  page += '<body><div style="width:350px;margin-left:auto;margin-right:auto;"><div style="text-align:center;">';
  page += '<h1>Wifi Temperature Gauge</h1></div><iotui-thermometer id="temp-gauge" height="350" ';
  page += 'width="350" val="30" max="40" min="10"></iotui-thermometer></div>';
  page += '<script>var temp;var ws=new WebSocket("ws://" +';
  page += 'location.host + "/wifitempguage", "protocolOne");';
  page += 'ws.onmessage = function (event) {temp = parseFloat(event.data);console.log(temp);iotUI.thermometer.set("temp-gauge" , temp); };';
  page += '</script><script src="https://rawgit.com/olliephillips/iotUI.js/master/iotUI.js"></script>';
  page += '</body></html>';
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(page);
}

// Init function
function initTempGauge(){
  // Wifi connection
  wifi.connect(ap.ssid, {"password": ap.pwd}, function(err){
    if(!err){
      console.log("Connected on " + wifi.getIP().ip);
      var server = require('ws').createServer(servePage);
      server.listen(80);
      server.on("websocket", function(ws) {
        console.log("Upgraded");
        // Upgraded, start mesuring and sending temp
        var ow = new OneWire(D14);
        var sensor = require("DS18B20").connect(ow);
        setInterval(function() {
          sensor.getTemp(function (temp) {
            console.log("Temp is "+temp+"°C"); 
            ws.send(temp.toString());
          });
        }, 2000);
      });
    }
  });
}

// Start
E.on("init", initTempGauge);