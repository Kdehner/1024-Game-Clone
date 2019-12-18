export class Block {

  constructor(id, game) {
    this.id = id;
    this.element = this.createElement();
    this.injectDom(game);
    this.adjacent = getAdjacent();
  }

  createElement() {
    const div = document.createElement('div');
    div.dataset.id = this.id;
    div.classList.add('block');
    return div;
  }

  injectDom(game) {
    game.appendChild(this.element);
  }

  getAdjacent() {
    // Determin adjacent blocks in each direction.
  }

}