import { Input } from './input.controller';
import { Block } from './block.controller';
import { Tile } from './tile.controller';
import { getPopulated, randomBlock, getBlockIndex } from './utils/block.util';

export class Game {

  constructor() {
    this.blocks = this.getBlocks();
    this.gameLoop(this.blocks);
  }

  getBlocks() {
    const game = document.querySelector('.game');
    const blocks = [[],[],[],[]];
    let [indexY, indexX] = [0,0];
    for (let i = 0; i < 16; i++) {
      if (blocks[indexY].length === 4) {
        indexY++;
        indexX = 0;
      }
      const id = i + 1;
      const index = [indexY, indexX]
      blocks[indexY].push(new Block(id,index, game));
      indexX++
    }
    return blocks;
  }

  async gameLoop(blocks) {
    const input = new Input();

    while(true) {
      this.tileGenerator(blocks);
      const move = await input.movement();
      // processMoves(move, blocks);
    }
  }

  tileGenerator(blocks) {
    const populated = getPopulated(blocks);
    if(populated.length === 16) {
      return;
    }
    const blockId = randomBlock(populated);
    const [indexY, indexX] = getBlockIndex(blockId, blocks);
    const block = blocks[indexY][indexX];
    const tile = new Tile(1, '#eee4da');
    block.setTile = tile;
  }

}