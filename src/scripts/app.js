import { Tile } from './tile.controller';
import { Input } from './input.controller';


const tiles = getTiles();

buildGame(tiles);

setFirstTile();

updateTiles();


async function game() {
  const input = new Input();

  while(true) {
    const move = await input.movement();
    console.log(move);
  }
}

function setFirstTile() {
  const newTile = randomTile();
  tiles[newTile].setValue =  1;
}

function updateTiles() {
  for(const tile of tiles) {
    tile.updateDisplay();
  }
}

function randomTile() {
  return Math.floor(Math.random() * Math.floor(16));
}

function getTiles(){
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

function buildGame() {
  const game = document.querySelector('.game');

  for (const tile of tiles) {
    tile.createTile(game);
  }
}


