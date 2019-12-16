import { Input } from './input.controller';
import { Tile } from './tile.controller';

export class Game {

  constructor() {
    this.tiles = this.getTiles();
    this.setFirstTile(this.tiles);
    this.buildGame(this.tiles);
    this.gameLoop();
  }

  getTiles() {
    const tiles = [];
    const locations = [
      '1,1', '1,2', '1,3', '1,4',
      '2,1', '2,2', '2,3', '2,4',
      '3,1', '3,2', '3,3', '3,4',
      '4,1', '4,2', '4,3', '4,4'    
    ]
    for (let i = 0; i < 16; i++) {
      const id = i + 1;
      const location = locations[i];
      tiles.push(new Tile(id, location));
    }
    return tiles;
  }

  setFirstTile(tiles) {
    const newTile = this.randomTile();
    tiles[newTile].setValue =  1;
  }

  randomTile() {
    return Math.floor(Math.random() * Math.floor(16));
  }

  buildGame(tiles) {
    const game = document.querySelector('.game');

    for (const tile of tiles) {
      tile.createTile(game);
    }
  }

  updateTiles() {
    for(const tile of this.tiles) {
      tile.updateDisplay();
    }
  }

  async gameLoop() {
    const input = new Input();

    while(true) {
      this.updateTiles();
      const move = await input.movement();
      console.log(move);
    }
  }


}