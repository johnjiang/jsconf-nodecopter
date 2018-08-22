const _ = require('lodash');

let client;
let max_alt = 2.0;
const THRESH_HOLD = 0.7;

const init = (drone, altitude = 2.0) => {
  client = drone;
  client.config('control:altitude_max', 3000);

  client.on('navdata', data => {
    let alt = _.get(data, 'demo.altitudeMeters', 0);
    // console.log('Altitude => ', alt);
    if (alt < altitude) up(alt);
    else down();
  });
};

function up(alt) {
  let inc = alt < max_alt * THRESH_HOLD ? 0.5 : 0.1;
  client.up(inc)
}

function down() {
  client.down(0.1);
}

// ==========================================
const altCtrl = {
  init,
};

module.exports = altCtrl;
