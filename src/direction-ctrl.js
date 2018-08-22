const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let client;
const SPEED = 0.05;

const init = (drone, altitude = 2.0) => {
  client = drone;

  rl.question('Direction(j/k, h/l, q): ', (answer) => {
    console.log(' =>  =>  => dir:', answer)

    switch(answer) {
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
