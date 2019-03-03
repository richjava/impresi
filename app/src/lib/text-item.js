import AbsoluteItem from "./absolute-item";
export default class TextItem extends AbsoluteItem {
    constructor(impresi, options) {
        super(impresi, options);
        this.defaultInAnimationName = "slideInUp";
        this.options.inAnimationName = this.options.inAnimationName != undefined
          ? this.options.inAnimationName : this.defaultInAnimationName;
    }

    addElement(elementName) {
        super.addElement(elementName);
        if (this.options.width) {
            this.element.style.maxWidth = `${this.options.width}vw`;
            this.element.style.overflow = "hidden";
        }
    }
}