export default class Group {
    constructor(actionName, actions) {
      this.actionName = actionName;
      this.actions = actions;
    }
  
    run() {
      let i = 0;
      this.actions.forEach(action => {
        action.run();
        i++;
      });
    }
  
    stop() {
      let i = 0;
      this.actions.forEach(action => {
        action.stop();
        i++;
      });
    }
  }
  