import { Tile } from '../controllers/tile.controller';
import { getFreeBlocks, randomBlock } from '../utils/block.util';

export function tileGenerator(blocks) {
  const freeBlocks = getFreeBlocks(blocks);
  const block = randomBlock(freeBlocks);
  const tile = new Tile(1, '#eee4da');
  block.setTile(tile);
}

export function compareValues(blockA, blockB) {
  const valueA = blockA.getTileValue;
  const valueB = blockB.getTileValue;
  
  if (valueA === valueB) {
    return true;
  }
  return false;
}

export function combineTiles(blockA, blockB) {
  const value = blockA.getTileValue + blockB.getTileValue;
  const tile = new Tile(value, '#eee4da');
  blockA.clearTile();
  blockB.updateTile(tile);
}
export function moveTile(blockA, blockB) {
  const value = blockA.getTileValue;
  const tile = new Tile(value, '#eee4da');
  blockA.clearTile();
  blockB.setTile(tile);
}