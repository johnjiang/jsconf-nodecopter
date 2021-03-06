const arDrone = require("ar-drone");
const fs = require("fs");
const altCtrl = require('./altitude-ctrl');
const dirCtrl = require('./direction-ctrl');

const client = arDrone.createClient({
  frameRate: 2,
});

/*
function inititateStream() {
  const pngStream = client.getPngStream();
  pngStream.on("data", function(imageData) {
    savePhoto(imageData);
  });
}

function savePhoto(imageData) {
  console.log(imageData);
  fs.writeFile(`data/logo_${Date.now()}.png`, imageData, "binary", function(err) {
    if (err) throw err;
    console.log("File saved.");
  });
}
*/

altCtrl.init(client);
dirCtrl.init(client);

client.takeoff();

/*
client
  .after(5000, function() {
    this.stop();
    this.land();
  });
*/
