import AbsoluteItem from "./absolute-item";
export default class TextItem extends AbsoluteItem {
    constructor(impresi, options) {
        super(impresi, options);
        this.defaultInAnimationName = "slideInUp";

    }

    addElement(elementName) {
        super.addElement(elementName);
        if (this.options.width) {
            this.element.style.maxWidth = `${this.options.width}vw`;
            this.element.style.overflow = "hidden";
        }
        if (this.options.backgroundColor) {
            this.element.style.backgroundColor = this.options.backgroundColor;
        }
        this.options.inAnimationName = this.options.inAnimationName != undefined
            ? this.options.inAnimationName : this.defaultInAnimationName;
    }

    setChildOptions(child) {
        child.style.fontSize = `${this.getFontSize()}vw`;
        if (this.options.fontColor) {
            child.style.color = this.options.fontColor;
        }
    }

    getFontSize() {
        return this.options.fontSize != undefined
            ? this.options.fontSize : this.defaultFontSize;
    }
}