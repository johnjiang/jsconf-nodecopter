const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let client;
const SPEED = 0.1;

const init = (drone, altitude = 2.0) => {
  client = drone;
  process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    } else {
      switch (key.name) {
        case 's':
        case 'j':
          if (key.shift) {
            flip("Behind");
          } else {
            back();
          }
          break;
        case 'w':
        case 'k':
          if (key.shift) {
            flip("Ahead");
          } else {
            front();
          }
          break;
        case 'a':
        case 'h':
          if (key.shift) {
            flip("Left");
          } else {
            left();
          }
          break;
        case 'd':
        case 'l':
          if (key.shift) {
            flip("Right");
          } else {
            right();
          }
          break;
        case 'q':
          rl.close();
      }
    }
  });
};

function left() {
  client.left(SPEED);
  client.stop();
}

function right() {
  client.right(SPEED);
  client.stop();
}

function front() {
  client.front(SPEED);
  client.stop();
}

function back() {
  client.back(SPEED);
  client.stop();
}

function flip(direction) {
  client.animate(`flip${direction}`, 15);
}


// ==========================================
const ctrl = {
  init,
  left,
  right,
  back,
};

module.exports = ctrl;
