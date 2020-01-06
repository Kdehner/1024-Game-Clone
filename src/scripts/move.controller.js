import { getPopulated } from './utils/block.util';

export class Move {

  constructor(move, blocks) {
    this.move = move;
    this.blocks = blocks;
    this.populated = getPopulated(this.blocks);
  }
}