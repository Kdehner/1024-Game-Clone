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
      this.processMoves(move, blocks);
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

  processMoves(move, blocks) {
    // Get all blocks with tiles
    const populatedBlocks = []
    
    for (let row of blocks) {
      for (let block of row) {
        if(block.getTile) {
          populatedBlocks.push(block);
        }
      }
    }

    console.log(populatedBlocks);
    // Check for block collision
    for(let block of populatedBlocks) {
      this.checkCollision(move, block, blocks);
    }
    // Process move logic
    // Process Dom changes.
  }

  checkCollision(move, block, blocks) {
    const moveDirection = move.move;
    const [moveY, moveX] = move.calculation;
    const [indexY, indexX] = block.getIndex;
    let nextBlock;

    if(moveDirection === 'up') {
      if(block.indexY <= 0) {
        return;
      }
    }
    if(moveDirection === 'down') {
      if(block.indexY >= 3) {
        return;
      }
    }
    if(moveDirection === 'left') {
      if(block.indexX <= 0) {
        return;
      }
    }
    if(moveDirection === 'right') {
      if(block.indexY >= 0) {
        return;
      }
    }

    const [nextY, nextX] = [(indexY + moveY), (indexX + moveX)];
    nextBlock = blocks[nextY][nextX];

    if(nextBlock.getTile) {
      // Process collision;
    }
  }
}
