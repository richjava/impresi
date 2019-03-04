import Item from "./item";
export default class AbsoluteItem extends Item {
  constructor(impresi, options) {
    super(impresi, options);
    if (!options.x) {
      this.options.x = "10"; //default
    }
    if (!options.y) {
      this.options.y = "10"; //default
    }
   
  }

  addElement(elementName) {
    super.addElement(elementName)
    this.element.style.left = `${this.options.x}vw`;
    this.element.style.top = `${this.options.y}vh`;
  }
}
