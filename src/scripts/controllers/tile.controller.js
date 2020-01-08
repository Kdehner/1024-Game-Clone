export class Tile {

  constructor(value, color, block) {
    this.value = value;
    this.color = color;
    this.block = block;
    this.element = this.createElement();
  }

  createElement() {
    const div = document.createElement('div');
    div.classList.add('value');
    div.style.backgroundColor = this.color;
    div.innerHTML = String(this.value);
    return div;
  }

  get getDomElement() {
    return this.element;
  }
}