export default class Item {
    constructor(impresi, options) {
      this.board = impresi.board;
      this.options = options;
      this.element = null;
      //resources created through JSON data provide an ID through the options
      if (options.id) {
        this.id = options.id;
      }
    }

    addElement(elementName) {
      this.element = document.createElement(elementName);
      this.board.appendChild(this.element);
    }
  }
  