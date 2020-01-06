export class Block {

  constructor(id, index, game) {
    this.id = id;
    this.index = index;
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

  get getId() {
    return this.id
  }

  get getIndex() {
    return this.index
  }
}