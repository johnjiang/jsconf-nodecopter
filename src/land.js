const arDrone = require('ar-drone');
const client = arDrone.createClient();

client
  .after(500, function() {
    this.stop();
    this.land();
  });
