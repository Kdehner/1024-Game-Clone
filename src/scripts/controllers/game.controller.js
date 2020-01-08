import { Input } from './input.controller';
import { getBlocks } from '../utils/block.util';
import { tileGenerator } from '../utils/tile.util';

export class Game {

  constructor() {
    this.blocks = getBlocks();
    this.gameLoop(this.blocks);
  }


  async gameLoop(blocks) {
    const input = new Input();

    while(true) {
      tileGenerator(blocks);
      const move = await input.movement();
      // this.processMoves(move, blocks);
    }
  }
}
