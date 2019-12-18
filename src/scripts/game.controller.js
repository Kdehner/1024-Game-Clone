import { Input } from './input.controller';
import { Block } from './block.controller';

export class Game {

  constructor() {
    this.blocks = this.getBlocks();
    this.gameLoop();
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

  async gameLoop() {
    const input = new Input();

    while(true) {
      const move = await input.movement();
      
    }
  }

  // setFirstTile(tiles) {
  //   const random = this.randomTile();
  //   const newTile = tiles[newTile];
  //   newTile.setValue = 1;
  //   this.updateActiveTiles(newTile);
  // }

  // randomTile() {
  //   return Math.floor(Math.random() * Math.floor(16));
  // }

  // buildGame(blocks) {
  //   const game = document.querySelector('.game');

  //   for (const block of blocks) {
  //     block.createBlock(game);
  //   }
  // }

  // updateTiles() {
  //   for(const tile of this.tiles) {
  //     tile.updateDisplay();
  //   }
  // }



}