export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems(cards) {
    cards.reverse().forEach(element => {
      this._renderer(element);
    })
  }


  addItem(element) {
    this._container.prepend(element);
  }
}