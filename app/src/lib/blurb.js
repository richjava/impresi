import TextItem from "./text-item.js";
export default class Blurb extends TextItem {
  constructor(impresi, text, options = {}) {
    super(impresi, options);
    this.text = text;
    this.addElement("div");
  }

  addElement(elementName) {
    super.addElement(elementName);
    this.element.style.maxWidth = `${this.options.width}vw`;
    this.element.classList.add("blurb", "item");
    this.element.style.zIndex = 1;
    var p = document.createElement("p");
    p.innerHTML = this.text;
    p.style.fontSize = "2vw";
    this.element.appendChild(p);
  }
}
