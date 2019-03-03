import Item from "./item";
export default class Background extends Item {
  constructor(impresi, options = {}) {
    super(impresi, options);
    this.addElement("div");
  }

  addElement(elementName) {
    super.addElement(elementName);
    this.element.classList.add("background", "item");
    if (this.options.imageUrl) {
      let image = document.createElement("img");
      image.src = this.options.imageUrl;
      this.element.appendChild(image);
    } else if (this.options.backgroundColor) {
      this.element.style.backgroundColor = this.options.backgroundColor;
    }
  }
}
