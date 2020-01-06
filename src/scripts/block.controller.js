export class Block {

  constructor(id, coordinates, game) {
    this.id = id;
    this.coordinates = coordinates;
    this.element = this.createElement();
    this.tile;
    this.injectDom(game);
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add('block');
    return div;
  }

  set setTile(tile) { 
    this.tile = tile;
    this.appendChild(tile);
  }

  removeChild() {
    const child = this.tile.getDomElement;
    this.element.removeChild(child);
    this.tile = null;
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
      return this.id;
    }
    return;
  }
}