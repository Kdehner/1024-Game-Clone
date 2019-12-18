import { Input } from './input.controller';
import { Block } from './block.controller';
import { Tile } from './tile.controller';

export class Game {

  constructor() {
    this.blocks = this.getBlocks();
    this.gameLoop(this.blocks);
  }

  getBlocks() {
    const game = document.querySelector('.game');
    const blocks = [];
    for (let i = 0; i < 16; i++) {
      const id = i + 1;
      blocks.push(new Block(id, game));
    }
    return blocks;
  }

  async gameLoop(blocks) {
    let newGame = true;
    const input = new Input();

    while(true) {

      if(newGame) {
        this.generateFirstTile(blocks);
        newGame = false;
      }
      const move = await input.movement();
      
    }
  }

  generateFirstTile(blocks) {
    const random = this.randomBlock();
    const block = blocks[random];
    const tile = new Tile(1, '#eee4da');
    block.setTile = tile;
  }
  
  randomBlock() {
    return Math.floor(Math.random() * Math.floor(16));
  }
}