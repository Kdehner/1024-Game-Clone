import { Block } from '../controllers/block.controller';

export function getFreeBlocks(blocks) {
  const freeBlocks = [];
  for (let block of blocks) {
    if (!block.getTile) {
      freeBlocks.push(block);
    }
  }
  return freeBlocks;
}

export function randomBlock(freeBlocks) {
  const min = Math.ceil(1);
  const max = Math.floor(freeBlocks.length);
  const random = Math.floor(Math.random() * (max - min + 1));
  return freeBlocks[random];
}

export function getBlocks() {
  const game = document.querySelector('.game');
  const blocks = [];
  for (let i = 0; i < 16; i++) {
    const id = i + 1;
    blocks.push(new Block(id, game))
  }

  for (let block of blocks) {
    const id = block.getId;

    if ((id - 4) <= 0) {
      block.neighbors.up = null;
    } else {
      block.neighbors.up = blocks[(id - 4) - 1];
    }

    if ((id + 4) >= 17) {
      block.neighbors.down = null;
    } else {
      block.neighbors.down = blocks[(id + 4) - 1];
    }

    if ((id - 1) <= 0) {
      block.neighbors.left = null;
    } else {
      block.neighbors.left = blocks[(id - 1) - 1];
    }
    
    if ((id + 1) >= 17) {
      block.neighbors.right = null;
    } else {
      block.neighbors.right = blocks[(id + 1) - 1];
    }
  }

  return blocks;
}
