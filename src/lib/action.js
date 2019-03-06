export default class Action {
    constructor(item) {
      this.item = item;
      this.inAnimationName =
        this.item.options.inAnimationName != undefined
          ? item.options.inAnimationName
          : "fadeIn";
      this.outAnimationName =
        item.options.outAnimationName != undefined
          ? item.options.outAnimationName
          : "fadeOut";
    }
  
    run() {
      this.item.element.classList.remove("hide");
      this.item.element.classList.remove(this.outAnimationName);
      this.item.element.classList.add("animated", this.inAnimationName);
    }
  
    stop() {
      this.item.element.classList.remove("animated", this.inAnimationName);
      this.item.element.classList.add(this.outAnimationName);
      this.item.element.classList.add("hide");
    }
  }
  