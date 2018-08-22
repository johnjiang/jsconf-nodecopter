const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);


let client;
const SPEED = 0.1;

const init = (drone, altitude = 2.0) => {
  client = drone;
  process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    } else {

      switch(str) {
        case 'j':
          back();
          break;
        case 'k':
          front();
          break;
        case 'h':
          left();
          break;
        case 'l':
          right();
          break;
        case 'q':
          rl.close();
      }
    }
  });
}

function left() { client.left(SPEED); }
function right() { client.right(SPEED); }
function front() { client.front(SPEED); }
function back() { client.back(SPEED); }


// ==========================================
const ctrl = {
  init,
  left,
  right,
  back,
}

module.exports = ctrl;
