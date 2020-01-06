import { Input } from './input.controller';
import { Block } from './block.controller';
import { Tile } from './tile.controller';
import { getPopulated, randomBlock } from './utils/block.util';

export class Game {

  constructor() {
    this.blocks = this.getBlocks();
    this.gameLoop(this.blocks);
  }

  getBlocks() {
    const game = document.querySelector('.game');
    const blocks = [];
    const coordinates = [
      [1,1], [1,2], [1,3], [1,4],
      [2,1], [2,2], [2,3], [2,4],
      [3,1], [3,2], [3,3], [3,4],
      [4,1], [4,2], [4,3], [4,4]
    ]
    for (let i = 0; i < 16; i++) {
      const cords = { 'x':coordinates[i][0], 'y':coordinates[i][1] };
      const id = i + 1;
      blocks.push(new Block(id, cords, game));
    }
    return blocks;
  }

  async gameLoop(blocks) {
    const input = new Input();

    while(true) {
      this.tileGenerator(blocks);
      const move = await input.movement();
      processMoves(move, blocks);
    }
  }

  tileGenerator(blocks) {
    const populated = getPopulated(blocks);

    if(populated.length === 16) {
      return;
    }
    const random = randomBlock(populated);
    const block = blocks[random];
    const tile = new Tile(1, '#eee4da');
    block.setTile = tile;
  }

}