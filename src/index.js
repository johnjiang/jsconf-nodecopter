const arDrone = require('ar-drone');
const client = arDrone.createClient();

// const pngStream = client.getPngStream();

const altCtrl = require('./altitude-ctrl');

altCtrl.init(client);

client.takeoff();

// client
  // .after(3000, function() {
    // this.clockwise(0.5);
  // })
  // .after(3000, function() {
    // this.animate('flipLeft', 15);
  // })
  // .after(1000, function() {
    // this.stop();
    // this.land();
  // });
