import TextItem from "./text-item.js";
export default class Blurb extends TextItem {
  constructor(impresi, text, options = {}) {
    super(impresi, options);
    this.text = text;
    this.zIndex = 2;
    this.defaultFontSize = 1.5;
    this.addElement("div");
  }

  addElement(elementName) {
    super.addElement(elementName);
    this.element.style.maxWidth = `${this.options.width}vw`;
    this.element.classList.add("blurb", "item");
    this.element.style.zIndex = this.zIndex;
    var p = document.createElement("p");
    p.innerHTML = this.text;
    super.setChildOptions(p);
    this.element.appendChild(p);
  }
}
