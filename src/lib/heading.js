import TextItem from "./text-item.js";
export default class Heading extends TextItem {
  constructor(impresi, text, options = {}) {
    super(impresi, options);
    this.text = text;
    this.zIndex = 1;
    this.defaultFontSize = 2;
    this.addElement("div");
  }

  addElement(elementName) {
    super.addElement(elementName);
    this.element.classList.add("heading", "item");
    var h1 = document.createElement("h1");
    this.element.style.zIndex = this.zIndex;
    h1.innerHTML = this.text;
    super.setChildOptions(h1);
    this.element.appendChild(h1);
  }


}
