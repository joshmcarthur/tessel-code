// Require Tessel Library
var tessel = require('tessel');

// Require climate library
var climateLib = require('climate-si7005');

// Set up climate module
var climate = climateLib.use(tessel.port['A']);

climate.on('ready', function() {
  console.log('Connected to si7005 climate module');

  // Loop forever
  setImmediate(function loop() {
    climate.readTemperature('c', function(err, temp) {
      climate.readHumidity(function(err, humid) {
        console.log('Degrees: ', temp.toFixed(4) + 'C', 'Humidity: ', humid.toFixed(4) + '%RH');
        setTimeout(loop, 300);
      });
    });
  })
});

climate.on('error', function(err) {
  console.log('Error connecting module', err);
});
