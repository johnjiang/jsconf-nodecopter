const readline = require('readline');

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

      switch (str) {
        case 's':
        case 'j':
          back();
          break;
        case 'w':
        case 'k':
          front();
          break;
        case 'a':
        case 'h':
          if (key.ctrl) {
            flipLeft();
          } else {
            left();
          }
          break;
        case 'd':
        case 'l':
          if (key.ctrl) {
            flipRight();
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
}

function right() {
  client.right(SPEED);
}

function front() {
  client.front(SPEED);
}

function back() {
  client.back(SPEED);
}

function flipLeft() {
  flip("Left");
}

function flipRight() {
  flip("Right");
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
