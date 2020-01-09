import { Input } from './input.controller';
import { getBlocks } from '../utils/block.util';
import { tileGenerator, combineTiles, moveTile, compareValues } from '../utils/tile.util';

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
      this.processMoves(move, blocks);
    }
  }

  processMoves(move, blocks) {
    const moveDirection = move.move;

    for(let block of blocks) {
      if (block.getTile) {
        let nextBlock = block.nextBlock(moveDirection);

        if(nextBlock === null) {
          continue;
        }
        if (nextBlock.getTile) {
          // Check if values similar
          if(compareValues(block, nextBlock)) {
            // Remove both tiles and create a new one
            combineTiles(block, nextBlock);
          }
        } else {
          // Get faurthest available block
          while(nextBlock.nextBlock(moveDirection) != null) {
            const newNextBlock = nextBlock.nextBlock(moveDirection);
            if(newNextBlock.getTile) {
              break;
            }
            nextBlock = newNextBlock;
          }
          // Move block to last available block
          console.log(`Moving ${block.id} to: ${nextBlock.id}`);
          moveTile(block, nextBlock);
        } 
      }
    }
  }
}
