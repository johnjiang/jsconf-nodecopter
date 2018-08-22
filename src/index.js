const arDrone = require('ar-drone');
const client = arDrone.createClient();

const pngStream = client.getPngStream();

client.config('control:altitude_max', 3000); // 3m altitude

client.takeoff();
// client.on('navdata', console.log);
// pngStream.on('data', console.log);

client
  .after(3000, function() {
    this.clockwise(0.5);
  })
  .after(3000, function() {
    this.animate('flipLeft', 15);
    
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });