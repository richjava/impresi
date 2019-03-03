import TextItem from "./text-item.js";
export default class Heading extends TextItem {
  constructor(impresi, text, options = {}) {
    super(impresi, options);
    this.text = text;
    this.addElement("span");
  }

  addElement(elementName) {
    super.addElement(elementName);
    this.element.classList.add("heading", "item");
    var h1 = document.createElement("h1");
    this.element.style.zIndex = 2;
    h1.innerHTML = this.text;
    h1.style.fontSize = `${this.options.fontSize}vw`;
    this.element.appendChild(h1);
  }
}
