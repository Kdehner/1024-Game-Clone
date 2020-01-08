import { Tile } from '../controllers/tile.controller';
import { getFreeBlocks, randomBlock } from '../utils/block.util';
export function tileGenerator(blocks) {
  const freeBlocks = getFreeBlocks(blocks);
  const block = randomBlock(freeBlocks);
  const tile = new Tile(1, '#eee4da');
  block.setTile = tile;
}