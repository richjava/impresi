import Background from "./lib/background";
import Heading from "./lib/heading";
import Blurb from "./lib/blurb";
import Group from "./lib/group";
import Action from "./lib/action";
import { styles } from './styles';

class Impresi {
  constructor(boardId, data, options = []) {
    if (!boardId) {
      throw new Error("ID for board is required");
    }
    this.board = document.querySelector("#" + boardId);
    if (!this.board) {
      throw new Error("No HTML element with the ID: " + boardId);
    }

    this.options = options;
    this.groups = [];
    this.screenIndex = 0;
    this.index = 0;
    if (data) {
      this.addResources(data);
    }
    this.init();
  }

  init() {
    this.getStyles();
    this.setListeners();
    this.displayLoader();
  }

  setListeners() {
    let self = this;
    document.body.onkeyup = e => {
      //increment keys: space, down, right or enter
      if (
        e.keyCode === 32 ||
        e.keyCode === 40 ||
        e.keyCode === 39 ||
        e.keyCode === 13
      ) {
        
        if (this.index < this.groups.length - 1) {
          self.next();
          this.screenIndex++;
          window.location.hash = `screen${this.screenIndex}`;
        }
      }
      //decrement keys: up or left
      if (e.keyCode === 38 || e.keyCode === 37) {
        if (this.index > 0) {
        self.previous(self.index === self.groups.length - 1);
        }
      }
    };
  }

  getStyles() {
    //core styles
    let styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.innerHTML = styles;
    this.board.appendChild(styleEl);

    //animation styles
    styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.innerHTML =
      '@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");';
    this.board.appendChild(styleEl);
  }

  displayLoader() {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    let loader = document.createElement("div");
    loader.innerHTML = "<div></div><div></div>";
    loader.classList.add("lds-ripple");
    overlay.appendChild(loader);
    document.body.appendChild(overlay);
  }

  createBackground(options) {
    return new Background(this, options);
  }

  createHeading(text, options) {
    return new Heading(this, text, options);
  }

  createBlurb(text, options) {
    return new Blurb(this, text, options);
  }

  addActions(options) {
    if (options.out) {
      this.addGroup("out", options);
    }
    if (options.in) {
      this.addGroup("in", options);
    }
    return this;
  }

  addGroup(actionName, options) {
    let actions = [];
    options[actionName].forEach(item => {
      let action = new Action(item);
      actions.push(action);
    });
    let group = new Group(actionName, actions);
    this.groups.push(group);
  }

  next() {
    let group = this.groups[this.index];
    if (group.actionName === "out") {
      if (!group.actions.length) {
        throw new Error("No actions provided.");
      }
      group.stop();
      this.increment();
      this.next();
    } else {
      group.run();
      if (this.index < this.groups.length - 1) {
        this.increment();
      }
    }

  }

  previous(isLast) {
    if (this.index !== 1) {
      if (!isLast) {
        this.decrement();
      }
      let group = this.groups[this.index];
      if (group.actionName === "in") {
        if (!group.actions.length) {
          throw new Error("No actions provided.");
        }
        group.stop();
        if (isLast) {
          this.decrement();
          this.previous(true);
        } else {
          this.previous(this.index === this.groups.length - 1);
        }
      } else {
        group.run();
        this.screenIndex--;
        window.location.hash = `screen${this.screenIndex}`;
      }
    }
  }

  start() {
    if (!this.groups.length) {
      throw new Error("No groups of actions have been added yet.");
    }
    if (window.location.hash) {
      // Fragment exists
      let frag = window.location.hash;
      if (frag.match("^#screen[0-9]+$")) {
        var matches = frag.match("[0-9]+");
        if (matches) {
          this.screenIndex = parseInt(matches[0]);
        }
        if (this.screenIndex > 0 && this.screenIndex <= this.groups.length/2 + 1) {
          for (let i = 0; i < this.screenIndex; i++) {
            this.next();
          }
        }else{
          this.screenIndex = 1;
          window.location.hash = "screen1";
          this.next();
        }
      }

    } else {
      this.next();
      this.screenIndex++;
      window.location.hash = "screen1";
    }
    document.querySelector(".overlay").classList.add("hide");
  }

  increment() {
    if (this.index !== this.groups.length - 1) {
      this.index++;
    }
  }

  decrement() {
    if (this.index > 0) {
      this.index--;
    }
  }
  
  addResources(data) {
    if (!data.resources) {
      throw new Error("No resources exist in the data.");
    }
    let items = [];
    data.resources.forEach(resource => {
      if (!resource.type) {
        throw new Error("All items must have a type.");
      }
      if (!resource.id) {
        throw new Error("All items must have an id.");
      }
      if(!resource.options){
        resource.options = {};
      }
      resource.options.id = resource.id;
      switch (resource.type) {
        case "background":
          items.push(this.createBackground(resource.options));
          break;
        case "heading":
          items.push(this.createHeading(resource.text, resource.options));
          break;
        case "blurb":
          items.push(this.createBlurb(resource.text, resource.options));
          break;
        default:
          return;
      }
    });
    let actions = data.actions;
    actions.forEach(action => {
      for (var key in action) {
        if (action.hasOwnProperty(key)) {
          let actionsObj = {};
          actionsObj[key] = [];
          let itemIds = action[key];
          itemIds.forEach(itemId => {
            for (let item of items) {
              if (item.id == itemId) {
                actionsObj[key].push(item);
                break;
              }
            }
          });
          this.addActions(actionsObj);
        }
      }
    });
  }
}

module.exports = Impresi;