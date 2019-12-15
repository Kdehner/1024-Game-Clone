export class Tile {

  constructor(id, location) {
    this.id = id;
    this.location = location;
    this.value = 0;
    this.tileElement = this.tileDomElement();
    this.valueElement = this.valueDomElement();
  }

  tileDomElement() {
    const div = document.createElement('div');
    div.classList.add('tile');
    return div;
  }

  valueDomElement() {
    const div = document.createElement('div');
    div.classList.add('value');
    return div;
  }

  injectDom(game) {
    this.tileElement.appendChild(this.valueElement);
    game.appendChild(this.tileElement);
  }

  createTile(game) {
    this.injectDom(game);
  }

  set setValue(value) {
    this.value += value;
  }

  updateDisplay() {
    if (this.value != 0) {
      this.valueElement.innerHTML = String(this.value);
    }
  }
}