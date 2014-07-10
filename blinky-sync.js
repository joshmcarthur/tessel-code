// Import Tessel library
var tessel = require('tessel');

// Set the pins as outputs with the initial
// states. Truthy sets high, falsy set low.
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(1);

setInterval(function() {
  console.log("I'm blinking. (Press CTRL+C to stop)");

  // Toggle the LED states
  led1.toggle();
  led2.toggle();
}, 100);
