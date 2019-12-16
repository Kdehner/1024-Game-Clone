export class Input {

  constructor() {
    this.moves = [
      {
        move: 'up',
        keys: [38, 87],
        calculation: [+1, 0],
      },
      {
        move: 'down',
        keys: [40, 83],
        calculation: [-1, 0],
      },
      {
        move: 'left',
        keys: [37, 65],
        calculation: [0, -1],
      },
      {
        move: 'right',
        keys: [39, 68],
        calculation: [0, +1],
      },
    ];
  }

  movement() {
    return new Promise(resolve => {
      document.addEventListener('keydown', e => {
        const keyPressed = e.keyCode;
        if (this.moves.some(key => key.keys.includes(keyPressed))) {
          const key = this.moves.find(key => key.keys.includes(keyPressed));
          resolve(key);
        }
      });
    });
  }
}