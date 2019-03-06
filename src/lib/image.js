import AbsoluteItem from "./absolute-item";
export default class Image extends AbsoluteItem {
    constructor(impresi, src, options) {
        super(impresi, options);
        super.defaultInAnimationName = "slideInUp";
        this.src = src;
        this.zIndex = 1;
        this.addElement('img');
    }

    addElement(elementName) {
        super.addElement(elementName);
        if (this.options.width) {
            this.element.style.maxWidth = `${this.options.width}vw`;
            this.element.style.overflow = "hidden";
        }
        // this.options.inAnimationName = this.options.inAnimationName != undefined
        //     ? this.options.inAnimationName : this.defaultInAnimationName;

        this.element.classList.add("image", "item");
        this.element.style.zIndex = this.zIndex;
        this.element.src = this.src;
    }
}