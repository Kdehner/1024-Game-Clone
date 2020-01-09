export class Block {

  constructor(id, game) {
    this.id = id;
    this.neighbors = {};
    this.element = this.createElement();
    this.tile = null;
    this.injectDom(game);
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add('block');
    return div;
  }

  setTile(tile) { 
    this.tile = tile;
    this.appendChild(tile);
  }

  clearTile() {
    const child = this.tile.getDomElement;
    this.element.removeChild(child);
    this.tile = null;
  }

  updateTile(tile) {
    this.clearTile();
    this.setTile(tile);
  }

  injectDom(game) {
    game.appendChild(this.element);
  }

  appendChild (tile) {
    const tileElement = tile.getDomElement;
    this.element.appendChild(tileElement);
  }

  get getTile() {
    if (this.tile != null) {
      return true;
    }
    return false;
  }

  get getId() {
    return this.id
  }

  get getTileValue() {
    return this.tile.value;
  }

  nextBlock(direction) {
    return this.neighbors[direction];
  }
}