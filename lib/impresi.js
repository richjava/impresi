(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("impresi", [], factory);
	else if(typeof exports === 'object')
		exports["impresi"] = factory();
	else
		root["impresi"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _background = _interopRequireDefault(__webpack_require__(/*! ./lib/background */ "./src/lib/background.js"));

var _heading = _interopRequireDefault(__webpack_require__(/*! ./lib/heading */ "./src/lib/heading.js"));

var _blurb = _interopRequireDefault(__webpack_require__(/*! ./lib/blurb */ "./src/lib/blurb.js"));

var _group = _interopRequireDefault(__webpack_require__(/*! ./lib/group */ "./src/lib/group.js"));

var _action = _interopRequireDefault(__webpack_require__(/*! ./lib/action */ "./src/lib/action.js"));

var _image = _interopRequireDefault(__webpack_require__(/*! ./lib/image */ "./src/lib/image.js"));

var _styles = __webpack_require__(/*! ./styles */ "./src/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(void 0, function () {
  'use strict';

  var Impresi = function () {
    var Impresi =
    /*#__PURE__*/
    function () {
      function Impresi(boardId, data) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, Impresi);

        if (!boardId) {
          throw new Error('ID for board is required');
        }

        this.board = document.querySelector('#' + boardId);

        if (!this.board) {
          throw new Error('No HTML element with the ID: ' + boardId);
        }

        var self = this;

        window.onhashchange = function () {
          var newScreenIndex = self.getScreenIndex();

          if (self.previousScreenIndex < newScreenIndex) {
            self.next();
          } else {
            self.previous(self.index === self.groups.length - 1);
          }
        };

        this.options = options;
        this.groups = [];
        this.screenIndex = 0;
        this.index = 0;

        if (data) {
          this.addResources(data);
        }

        this.init();
      }

      _createClass(Impresi, [{
        key: "init",
        value: function init() {
          this.getStyles();
          this.setListeners();
          this.displayLoader();
        }
      }, {
        key: "setListeners",
        value: function setListeners() {
          var _this = this;

          var self = this;

          document.body.onkeyup = function (e) {
            //increment keys: space, down, right or enter
            if (e.keyCode === 32 || e.keyCode === 40 || e.keyCode === 39 || e.keyCode === 13) {
              if (_this.index < _this.groups.length - 1) {
                _this.previousScreenIndex = _this.screenIndex;
                _this.screenIndex++;
                window.location.hash = "screen".concat(_this.screenIndex);
              }
            } //decrement keys: up or left


            if (e.keyCode === 38 || e.keyCode === 37) {
              if (_this.screenIndex > 1) {
                _this.screenIndex--;
                window.location.hash = "screen".concat(_this.screenIndex);
              }
            }
          };
        }
      }, {
        key: "getStyles",
        value: function getStyles() {
          //core styles
          var styleEl = document.createElement('style');
          styleEl.type = 'text/css';
          styleEl.innerHTML = _styles.styles;
          this.board.appendChild(styleEl); //animation styles

          styleEl = document.createElement('style');
          styleEl.type = 'text/css';
          styleEl.innerHTML = '@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");';
          this.board.appendChild(styleEl);
        }
      }, {
        key: "displayLoader",
        value: function displayLoader() {
          var overlay = document.createElement('div');
          overlay.classList.add('overlay');
          var loader = document.createElement('div');
          loader.innerHTML = '<div></div><div></div>';
          loader.classList.add('lds-ripple');
          overlay.appendChild(loader);
          document.body.appendChild(overlay);
        }
      }, {
        key: "createBackground",
        value: function createBackground(options) {
          return new _background.default(this, options);
        }
      }, {
        key: "createHeading",
        value: function createHeading(text, options) {
          return new _heading.default(this, text, options);
        }
      }, {
        key: "createBlurb",
        value: function createBlurb(text, options) {
          return new _blurb.default(this, text, options);
        }
      }, {
        key: "createImage",
        value: function createImage(src, options) {
          return new _image.default(this, src, options);
        }
      }, {
        key: "addActions",
        value: function addActions(options) {
          if (options.out) {
            this.addGroup('out', options);
          }

          if (options.in) {
            this.addGroup('in', options);
          }

          return this;
        }
      }, {
        key: "addGroup",
        value: function addGroup(actionName, options) {
          var actions = [];
          options[actionName].forEach(function (item) {
            var action = new _action.default(item);
            actions.push(action);
          });
          var group = new _group.default(actionName, actions);
          this.groups.push(group);
        }
      }, {
        key: "next",
        value: function next() {
          var group = this.groups[this.index];

          if (group.actionName === 'out') {
            if (!group.actions.length) {
              throw new Error('No actions provided.');
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
      }, {
        key: "previous",
        value: function previous(isLast) {
          if (this.index !== 1) {
            if (!isLast) {
              this.decrement();
            }

            var group = this.groups[this.index];

            if (group.actionName === 'in') {
              if (!group.actions.length) {
                throw new Error('No actions provided.');
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
            }
          }
        }
      }, {
        key: "start",
        value: function start() {
          if (!this.groups.length) {
            throw new Error('No groups of actions have been added yet.');
          }

          if (window.location.hash) {
            // Fragment exists
            var screenIndex = this.getScreenIndex();

            if (screenIndex) {
              this.screenIndex = screenIndex;

              if (this.screenIndex > 0 && this.screenIndex <= this.groups.length / 2 + 1) {
                for (var i = 0; i < this.screenIndex; i++) {
                  this.next();
                }
              } else {
                this.screenIndex = 1;
                window.location.hash = 'screen1';
                this.next();
              }
            }
          } else {
            this.next();
            this.screenIndex++;
            window.location.hash = 'screen1';
          }

          document.querySelector('.overlay').classList.add('hide');
        }
      }, {
        key: "getScreenIndex",
        value: function getScreenIndex() {
          var frag = window.location.hash;

          if (frag.match('^#screen[0-9]+$')) {
            var matches = frag.match('[0-9]+');

            if (matches) {
              return parseInt(matches[0]);
            }
          }

          return null;
        }
      }, {
        key: "increment",
        value: function increment() {
          if (this.index !== this.groups.length - 1) {
            this.index++;
          }
        }
      }, {
        key: "decrement",
        value: function decrement() {
          if (this.index > 0) {
            this.index--;
          }
        }
      }, {
        key: "addResources",
        value: function addResources(data) {
          var _this2 = this;

          if (!data.resources) {
            throw new Error('No resources exist in the data.');
          }

          var items = [];
          data.resources.forEach(function (resource) {
            if (!resource.type) {
              throw new Error('All items must have a type.');
            }

            if (!resource.id) {
              throw new Error('All items must have an id.');
            }

            if (!resource.options) {
              resource.options = {};
            }

            resource.options.id = resource.id;

            switch (resource.type) {
              case 'background':
                items.push(_this2.createBackground(resource.options));
                break;

              case 'heading':
                items.push(_this2.createHeading(resource.text, resource.options));
                break;

              case 'blurb':
                items.push(_this2.createBlurb(resource.text, resource.options));
                break;

              case 'image':
                items.push(_this2.createImage(resource.src, resource.options));
                break;

              default:
                return;
            }
          });
          var actions = data.actions;
          actions.forEach(function (action) {
            for (var key in action) {
              if (action.hasOwnProperty(key)) {
                (function () {
                  var actionsObj = {};
                  actionsObj[key] = [];
                  var itemIds = action[key];
                  itemIds.forEach(function (itemId) {
                    for (var _i = 0; _i < items.length; _i++) {
                      var item = items[_i];

                      if (item.id == itemId) {
                        actionsObj[key].push(item);
                        break;
                      }
                    }
                  });

                  _this2.addActions(actionsObj);
                })();
              }
            }
          });
        }
      }]);

      return Impresi;
    }();

    global.Impresi = Impresi;
    return Impresi;
  }();

  return Impresi;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/lib/absolute-item.js":
/*!**********************************!*\
  !*** ./src/lib/absolute-item.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _item = _interopRequireDefault(__webpack_require__(/*! ./item */ "./src/lib/item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AbsoluteItem =
/*#__PURE__*/
function (_Item) {
  _inherits(AbsoluteItem, _Item);

  function AbsoluteItem(impresi, options) {
    var _this;

    _classCallCheck(this, AbsoluteItem);

    _this = _possibleConstructorReturn(this, (AbsoluteItem.__proto__ || Object.getPrototypeOf(AbsoluteItem)).call(this, impresi, options));

    if (options.x == undefined) {
      _this.options.x = 10; //default
    }

    if (options.y == undefined) {
      _this.options.y = 10; //default
    }

    return _this;
  }

  _createClass(AbsoluteItem, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(AbsoluteItem.prototype.__proto__ || Object.getPrototypeOf(AbsoluteItem.prototype), "addElement", this).call(this, elementName);

      this.element.style.left = "".concat(this.options.x, "vw");
      this.element.style.top = "".concat(this.options.y, "vh");
    }
  }]);

  return AbsoluteItem;
}(_item.default);

exports.default = AbsoluteItem;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/action.js":
/*!***************************!*\
  !*** ./src/lib/action.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Action =
/*#__PURE__*/
function () {
  function Action(item) {
    _classCallCheck(this, Action);

    this.item = item;
    this.inAnimationName = this.item.options.inAnimationName != undefined ? item.options.inAnimationName : "fadeIn";
    this.outAnimationName = item.options.outAnimationName != undefined ? item.options.outAnimationName : "fadeOut";
  }

  _createClass(Action, [{
    key: "run",
    value: function run() {
      this.item.element.classList.remove("hide");
      this.item.element.classList.remove(this.outAnimationName);
      this.item.element.classList.add("animated", this.inAnimationName);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.item.element.classList.remove("animated", this.inAnimationName);
      this.item.element.classList.add(this.outAnimationName);
      this.item.element.classList.add("hide");
    }
  }]);

  return Action;
}();

exports.default = Action;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/background.js":
/*!*******************************!*\
  !*** ./src/lib/background.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _item = _interopRequireDefault(__webpack_require__(/*! ./item */ "./src/lib/item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Background =
/*#__PURE__*/
function (_Item) {
  _inherits(Background, _Item);

  function Background(impresi) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Background);

    _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, impresi, options));

    _set(Background.prototype.__proto__ || Object.getPrototypeOf(Background.prototype), "defaultInAnimationName", "fadeIn", _this);

    _this.addElement("div");

    return _this;
  }

  _createClass(Background, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(Background.prototype.__proto__ || Object.getPrototypeOf(Background.prototype), "addElement", this).call(this, elementName);

      this.element.classList.add("background", "item");

      if (this.options.imageUrl) {
        var image = document.createElement("img");
        image.src = this.options.imageUrl;
        this.element.appendChild(image);
      } else if (this.options.backgroundColor) {
        this.element.style.backgroundColor = this.options.backgroundColor;
      }
    }
  }]);

  return Background;
}(_item.default);

exports.default = Background;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/blurb.js":
/*!**************************!*\
  !*** ./src/lib/blurb.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _textItem = _interopRequireDefault(__webpack_require__(/*! ./text-item.js */ "./src/lib/text-item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Blurb =
/*#__PURE__*/
function (_TextItem) {
  _inherits(Blurb, _TextItem);

  function Blurb(impresi, text) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Blurb);

    _this = _possibleConstructorReturn(this, (Blurb.__proto__ || Object.getPrototypeOf(Blurb)).call(this, impresi, options));
    _this.text = text;
    _this.zIndex = 2;
    _this.defaultFontSize = 1.5;

    _this.addElement("div");

    return _this;
  }

  _createClass(Blurb, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(Blurb.prototype.__proto__ || Object.getPrototypeOf(Blurb.prototype), "addElement", this).call(this, elementName);

      this.element.style.maxWidth = "".concat(this.options.width, "vw");
      this.element.classList.add("blurb", "item");
      this.element.style.zIndex = this.zIndex;
      var p = document.createElement("p");
      p.innerHTML = this.text;

      _get(Blurb.prototype.__proto__ || Object.getPrototypeOf(Blurb.prototype), "setChildOptions", this).call(this, p);

      this.element.appendChild(p);
    }
  }]);

  return Blurb;
}(_textItem.default);

exports.default = Blurb;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/group.js":
/*!**************************!*\
  !*** ./src/lib/group.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Group =
/*#__PURE__*/
function () {
  function Group(actionName, actions) {
    _classCallCheck(this, Group);

    this.actionName = actionName;
    this.actions = actions;
  }

  _createClass(Group, [{
    key: "run",
    value: function run() {
      var i = 0;
      this.actions.forEach(function (action) {
        action.run();
        i++;
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var i = 0;
      this.actions.forEach(function (action) {
        action.stop();
        i++;
      });
    }
  }]);

  return Group;
}();

exports.default = Group;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/heading.js":
/*!****************************!*\
  !*** ./src/lib/heading.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _textItem = _interopRequireDefault(__webpack_require__(/*! ./text-item.js */ "./src/lib/text-item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Heading =
/*#__PURE__*/
function (_TextItem) {
  _inherits(Heading, _TextItem);

  function Heading(impresi, text) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Heading);

    _this = _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).call(this, impresi, options));
    _this.text = text;
    _this.zIndex = 1;
    _this.defaultFontSize = 2;

    _this.addElement("div");

    return _this;
  }

  _createClass(Heading, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(Heading.prototype.__proto__ || Object.getPrototypeOf(Heading.prototype), "addElement", this).call(this, elementName);

      this.element.classList.add("heading", "item");
      var h1 = document.createElement("h1");
      this.element.style.zIndex = this.zIndex;
      h1.innerHTML = this.text;

      _get(Heading.prototype.__proto__ || Object.getPrototypeOf(Heading.prototype), "setChildOptions", this).call(this, h1);

      this.element.appendChild(h1);
    }
  }]);

  return Heading;
}(_textItem.default);

exports.default = Heading;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/image.js":
/*!**************************!*\
  !*** ./src/lib/image.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _absoluteItem = _interopRequireDefault(__webpack_require__(/*! ./absolute-item */ "./src/lib/absolute-item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Image =
/*#__PURE__*/
function (_AbsoluteItem) {
  _inherits(Image, _AbsoluteItem);

  function Image(impresi, src, options) {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, impresi, options));

    _set(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), "defaultInAnimationName", "slideInUp", _this);

    _this.src = src;
    _this.zIndex = 1;

    _this.addElement('img');

    return _this;
  }

  _createClass(Image, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), "addElement", this).call(this, elementName);

      if (this.options.width) {
        this.element.style.maxWidth = "".concat(this.options.width, "vw");
        this.element.style.overflow = "hidden";
      } // this.options.inAnimationName = this.options.inAnimationName != undefined
      //     ? this.options.inAnimationName : this.defaultInAnimationName;


      this.element.classList.add("image", "item");
      this.element.style.zIndex = this.zIndex;
      this.element.src = this.src;
    }
  }]);

  return Image;
}(_absoluteItem.default);

exports.default = Image;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/item.js":
/*!*************************!*\
  !*** ./src/lib/item.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Item =
/*#__PURE__*/
function () {
  function Item(impresi, options) {
    _classCallCheck(this, Item);

    this.board = impresi.board;
    this.options = options;
    this.element;

    _get(Item.prototype.__proto__ || Object.getPrototypeOf(Item.prototype), "defaultInAnimationName", this); //resources created through JSON data provide an ID through the options


    if (options.id) {
      this.id = options.id;
    }
  }

  _createClass(Item, [{
    key: "addElement",
    value: function addElement(elementName) {
      this.element = document.createElement(elementName);
      this.board.appendChild(this.element);
      this.options.inAnimationName = this.options.inAnimationName != undefined ? this.options.inAnimationName : this.defaultInAnimationName;
    }
  }]);

  return Item;
}();

exports.default = Item;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/text-item.js":
/*!******************************!*\
  !*** ./src/lib/text-item.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _absoluteItem = _interopRequireDefault(__webpack_require__(/*! ./absolute-item */ "./src/lib/absolute-item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextItem =
/*#__PURE__*/
function (_AbsoluteItem) {
  _inherits(TextItem, _AbsoluteItem);

  function TextItem(impresi, options) {
    var _this;

    _classCallCheck(this, TextItem);

    _this = _possibleConstructorReturn(this, (TextItem.__proto__ || Object.getPrototypeOf(TextItem)).call(this, impresi, options));

    _set(TextItem.prototype.__proto__ || Object.getPrototypeOf(TextItem.prototype), "defaultInAnimationName", "slideInUp", _this);

    return _this;
  }

  _createClass(TextItem, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(TextItem.prototype.__proto__ || Object.getPrototypeOf(TextItem.prototype), "addElement", this).call(this, elementName);

      if (this.options.width) {
        this.element.style.maxWidth = "".concat(this.options.width, "vw");
        this.element.style.overflow = "hidden";
      }

      if (this.options.backgroundColor) {
        this.element.style.backgroundColor = this.options.backgroundColor;
      }
    }
  }, {
    key: "setChildOptions",
    value: function setChildOptions(child) {
      child.style.fontSize = "".concat(this.getFontSize(), "vw");

      if (this.options.fontColor) {
        child.style.color = this.options.fontColor;
      }
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      return this.options.fontSize != undefined ? this.options.fontSize : this.defaultFontSize;
    }
  }]);

  return TextItem;
}(_absoluteItem.default);

exports.default = TextItem;
module.exports = exports["default"];

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var styles = "\nbody {\n  margin: 0;\n  text-align: center;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nh1,\np {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.item {\n  visibility: hidden;\n}\n\nbody, .board {\n  overflow: hidden;\n}\n\n.animated {\n  visibility: visible;\n}\n\n.hide {\n  display: none;\n}\n\n.background {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n}\n\n.background img {\n  flex-shrink: 0;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.heading,\n.blurb,\n.background,\n.image {\n  position: absolute;\n  background-color: #333;\n}\n\n.heading,\n.blurb {\n  padding: 15px;\n}\n\n.heading h1 {\n  font-size: 2.4em;\n}\n\n.blurb p {\n  font-size: 1.4em;\n}\n\n.heading h1,\n.blurb p {\n  margin: 0;\n  color: #fff;\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  background-color: #333;\n  width: 100vw;\n  height: 100vh;\n}\n\n.lds-ripple {\n  display: inline-block;\n  position: fixed;\n  top: 40vh;\n  left: calc(50vw - 32px);\n  width: 64px;\n  height: 64px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n}\n\n\n@media only screen and (max-width: 600px) {\n  .heading:not(.hide),\n  .blurb:not(.hide),\n  .image:not(.hide){\n    position: static;\n    display: block;\n  }\n\n  .image:not(.hide) {\n    width: 100vw;\n    max-width: 100vw !important;\n  }\n\n  .heading:not(.hide) h1 {\n    font-size: 5vw;\n  }\n\n  .blurb p {\n    font-size: 4vw;\n  }\n}\n";
exports.styles = styles;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltcHJlc2kvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYWJzb2x1dGUtaXRlbS5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ibHVyYi5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ncm91cC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9oZWFkaW5nLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvbGliL2ltYWdlLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvbGliL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvdGV4dC1pdGVtLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiSW1wcmVzaSIsImJvYXJkSWQiLCJkYXRhIiwib3B0aW9ucyIsIkVycm9yIiwiYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxmIiwid2luZG93Iiwib25oYXNoY2hhbmdlIiwibmV3U2NyZWVuSW5kZXgiLCJnZXRTY3JlZW5JbmRleCIsInByZXZpb3VzU2NyZWVuSW5kZXgiLCJuZXh0IiwicHJldmlvdXMiLCJpbmRleCIsImdyb3VwcyIsImxlbmd0aCIsInNjcmVlbkluZGV4IiwiYWRkUmVzb3VyY2VzIiwiaW5pdCIsImdldFN0eWxlcyIsInNldExpc3RlbmVycyIsImRpc3BsYXlMb2FkZXIiLCJib2R5Iiwib25rZXl1cCIsImUiLCJrZXlDb2RlIiwibG9jYXRpb24iLCJoYXNoIiwic3R5bGVFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJvdmVybGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwibG9hZGVyIiwidGV4dCIsInNyYyIsIm91dCIsImFkZEdyb3VwIiwiaW4iLCJhY3Rpb25OYW1lIiwiYWN0aW9ucyIsImZvckVhY2giLCJpdGVtIiwiYWN0aW9uIiwicHVzaCIsImdyb3VwIiwic3RvcCIsImluY3JlbWVudCIsInJ1biIsImlzTGFzdCIsImRlY3JlbWVudCIsImkiLCJmcmFnIiwibWF0Y2giLCJtYXRjaGVzIiwicGFyc2VJbnQiLCJyZXNvdXJjZXMiLCJpdGVtcyIsInJlc291cmNlIiwiaWQiLCJjcmVhdGVCYWNrZ3JvdW5kIiwiY3JlYXRlSGVhZGluZyIsImNyZWF0ZUJsdXJiIiwiY3JlYXRlSW1hZ2UiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFjdGlvbnNPYmoiLCJpdGVtSWRzIiwiaXRlbUlkIiwiYWRkQWN0aW9ucyIsIkFic29sdXRlSXRlbSIsImltcHJlc2kiLCJ4IiwidW5kZWZpbmVkIiwieSIsImVsZW1lbnROYW1lIiwiZWxlbWVudCIsInN0eWxlIiwibGVmdCIsInRvcCIsIkFjdGlvbiIsImluQW5pbWF0aW9uTmFtZSIsIm91dEFuaW1hdGlvbk5hbWUiLCJyZW1vdmUiLCJCYWNrZ3JvdW5kIiwiYWRkRWxlbWVudCIsImltYWdlVXJsIiwiaW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJCbHVyYiIsInpJbmRleCIsImRlZmF1bHRGb250U2l6ZSIsIm1heFdpZHRoIiwid2lkdGgiLCJwIiwiR3JvdXAiLCJIZWFkaW5nIiwiaDEiLCJJbWFnZSIsIm92ZXJmbG93IiwiSXRlbSIsImRlZmF1bHRJbkFuaW1hdGlvbk5hbWUiLCJUZXh0SXRlbSIsImNoaWxkIiwiZm9udFNpemUiLCJnZXRGb250U2l6ZSIsImZvbnRDb2xvciIsImNvbG9yIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7O0FDTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVDLFdBQVVBLE1BQVYsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQzFCLGdDQUFPQyxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9DLE1BQVAsS0FBa0IsV0FBakQsR0FBK0RBLE1BQU0s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aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJpbXByZXNpXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImltcHJlc2lcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaW1wcmVzaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKiFcclxuICogQGZpbGVPdmVydmlldyBBIEphdmFzY3JpcHQgbGlicmFyeSBmb3IgY3JlYXRpbmcgYmVhdXRpZnVsIHNsaWRlIHByZXNlbnRhdGlvbnMuXHJcbiAqIEB2ZXJzaW9uIDAuMC4zXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAoYykgMjAxOSBSaWNoYXJkIExvdmVsbCBhbmQgY29udHJpYnV0b3JzXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvIGRlYWxcclxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcbiAqIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vbGliL2JhY2tncm91bmQnO1xyXG5pbXBvcnQgSGVhZGluZyBmcm9tICcuL2xpYi9oZWFkaW5nJztcclxuaW1wb3J0IEJsdXJiIGZyb20gJy4vbGliL2JsdXJiJztcclxuaW1wb3J0IEdyb3VwIGZyb20gJy4vbGliL2dyb3VwJztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2xpYi9hY3Rpb24nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9saWIvaW1hZ2UnO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcclxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XHJcbiAgICAgIChnbG9iYWwuSW1wcmVzaSA9IGZhY3RvcnkoKSk7XHJcbn0odGhpcywgKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gICB2YXIgSW1wcmVzaSA9IGZ1bmN0aW9uICgpIHtcclxuICBjbGFzcyBJbXByZXNpIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvYXJkSWQsIGRhdGEsIG9wdGlvbnMgPSBbXSkge1xyXG4gICAgICBpZiAoIWJvYXJkSWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lEIGZvciBib2FyZCBpcyByZXF1aXJlZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvYXJkSWQpO1xyXG4gICAgICBpZiAoIXRoaXMuYm9hcmQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEhUTUwgZWxlbWVudCB3aXRoIHRoZSBJRDogJyArIGJvYXJkSWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgd2luZG93Lm9uaGFzaGNoYW5nZSA9IGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgIGxldCBuZXdTY3JlZW5JbmRleCA9IHNlbGYuZ2V0U2NyZWVuSW5kZXgoKTtcclxuICAgICAgICBpZiAoc2VsZi5wcmV2aW91c1NjcmVlbkluZGV4IDwgbmV3U2NyZWVuSW5kZXgpIHsgIFxyXG4gICAgICAgICAgc2VsZi5uZXh0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgIHNlbGYucHJldmlvdXMoc2VsZi5pbmRleCA9PT0gc2VsZi5ncm91cHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgIHRoaXMuZ3JvdXBzID0gW107XHJcbiAgICAgIHRoaXMuc2NyZWVuSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmFkZFJlc291cmNlcyhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICB0aGlzLmdldFN0eWxlcygpO1xyXG4gICAgICB0aGlzLnNldExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmRpc3BsYXlMb2FkZXIoKTtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgZG9jdW1lbnQuYm9keS5vbmtleXVwID0gZSA9PiB7XHJcbiAgICAgICAgLy9pbmNyZW1lbnQga2V5czogc3BhY2UsIGRvd24sIHJpZ2h0IG9yIGVudGVyXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZS5rZXlDb2RlID09PSAzMiB8fFxyXG4gICAgICAgICAgZS5rZXlDb2RlID09PSA0MCB8fFxyXG4gICAgICAgICAgZS5rZXlDb2RlID09PSAzOSB8fFxyXG4gICAgICAgICAgZS5rZXlDb2RlID09PSAxM1xyXG4gICAgICAgICkge1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5ncm91cHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2NyZWVuSW5kZXggPSB0aGlzLnNjcmVlbkluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkluZGV4Kys7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYHNjcmVlbiR7dGhpcy5zY3JlZW5JbmRleH1gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9kZWNyZW1lbnQga2V5czogdXAgb3IgbGVmdFxyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNjcmVlbkluZGV4ID4gMSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JlZW5JbmRleC0tO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgc2NyZWVuJHt0aGlzLnNjcmVlbkluZGV4fWA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0eWxlcygpIHtcclxuICAgICAgLy9jb3JlIHN0eWxlc1xyXG4gICAgICBsZXQgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gc3R5bGVzO1xyXG4gICAgICB0aGlzLmJvYXJkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xyXG5cclxuICAgICAgLy9hbmltYXRpb24gc3R5bGVzXHJcbiAgICAgIHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICBzdHlsZUVsLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICBzdHlsZUVsLmlubmVySFRNTCA9XHJcbiAgICAgICAgJ0BpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvMy43LjAvYW5pbWF0ZS5taW4uY3NzXCIpOyc7XHJcbiAgICAgIHRoaXMuYm9hcmQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUxvYWRlcigpIHtcclxuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbiAgICAgIGxldCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbG9hZGVyLmlubmVySFRNTCA9ICc8ZGl2PjwvZGl2PjxkaXY+PC9kaXY+JztcclxuICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2xkcy1yaXBwbGUnKTtcclxuICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChsb2FkZXIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJhY2tncm91bmQob3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gbmV3IEJhY2tncm91bmQodGhpcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSGVhZGluZyh0ZXh0LCBvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBuZXcgSGVhZGluZyh0aGlzLCB0ZXh0LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCbHVyYih0ZXh0LCBvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBuZXcgQmx1cmIodGhpcywgdGV4dCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVJbWFnZShzcmMsIG9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBJbWFnZSh0aGlzLCBzcmMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjdGlvbnMob3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9ucy5vdXQpIHtcclxuICAgICAgICB0aGlzLmFkZEdyb3VwKCdvdXQnLCBvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAob3B0aW9ucy5pbikge1xyXG4gICAgICAgIHRoaXMuYWRkR3JvdXAoJ2luJywgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkR3JvdXAoYWN0aW9uTmFtZSwgb3B0aW9ucykge1xyXG4gICAgICBsZXQgYWN0aW9ucyA9IFtdO1xyXG4gICAgICBvcHRpb25zW2FjdGlvbk5hbWVdLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IG5ldyBBY3Rpb24oaXRlbSk7XHJcbiAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoYWN0aW9uTmFtZSwgYWN0aW9ucyk7XHJcbiAgICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBzW3RoaXMuaW5kZXhdO1xyXG4gICAgICBpZiAoZ3JvdXAuYWN0aW9uTmFtZSA9PT0gJ291dCcpIHtcclxuICAgICAgICBpZiAoIWdyb3VwLmFjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFjdGlvbnMgcHJvdmlkZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3VwLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdyb3VwLnJ1bigpO1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5ncm91cHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXMoaXNMYXN0KSB7XHJcbiAgICAgIGlmICh0aGlzLmluZGV4ICE9PSAxKSB7XHJcbiAgICAgICAgaWYgKCFpc0xhc3QpIHtcclxuICAgICAgICAgIHRoaXMuZGVjcmVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBzW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgIGlmIChncm91cC5hY3Rpb25OYW1lID09PSAnaW4nKSB7XHJcbiAgICAgICAgICBpZiAoIWdyb3VwLmFjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWN0aW9ucyBwcm92aWRlZC4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGdyb3VwLnN0b3AoKTtcclxuICAgICAgICAgIGlmIChpc0xhc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91cyh0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXModGhpcy5pbmRleCA9PT0gdGhpcy5ncm91cHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGdyb3VwLnJ1bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICBpZiAoIXRoaXMuZ3JvdXBzLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZ3JvdXBzIG9mIGFjdGlvbnMgaGF2ZSBiZWVuIGFkZGVkIHlldC4nKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuICAgICAgICAvLyBGcmFnbWVudCBleGlzdHNcclxuICAgICAgICBsZXQgc2NyZWVuSW5kZXggPSB0aGlzLmdldFNjcmVlbkluZGV4KCk7XHJcbiAgICAgICAgICBpZihzY3JlZW5JbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuSW5kZXggPSBzY3JlZW5JbmRleDtcclxuICAgICAgIFxyXG4gICAgICAgICAgaWYgKHRoaXMuc2NyZWVuSW5kZXggPiAwICYmIHRoaXMuc2NyZWVuSW5kZXggPD0gdGhpcy5ncm91cHMubGVuZ3RoIC8gMiArIDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjcmVlbkluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5JbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ3NjcmVlbjEnO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5JbmRleCsrO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ3NjcmVlbjEnO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjcmVlbkluZGV4KCl7XHJcbiAgICAgIGxldCBmcmFnID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgIGlmIChmcmFnLm1hdGNoKCdeI3NjcmVlblswLTldKyQnKSkge1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gZnJhZy5tYXRjaCgnWzAtOV0rJyk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcclxuICAgICAgICAgIHJldHVybiBwYXJzZUludChtYXRjaGVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVtZW50KCkge1xyXG4gICAgICBpZiAodGhpcy5pbmRleCAhPT0gdGhpcy5ncm91cHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY3JlbWVudCgpIHtcclxuICAgICAgaWYgKHRoaXMuaW5kZXggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleC0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUmVzb3VyY2VzKGRhdGEpIHtcclxuICAgICAgaWYgKCFkYXRhLnJlc291cmNlcykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcmVzb3VyY2VzIGV4aXN0IGluIHRoZSBkYXRhLicpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBkYXRhLnJlc291cmNlcy5mb3JFYWNoKHJlc291cmNlID0+IHtcclxuICAgICAgICBpZiAoIXJlc291cmNlLnR5cGUpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWxsIGl0ZW1zIG11c3QgaGF2ZSBhIHR5cGUuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzb3VyY2UuaWQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWxsIGl0ZW1zIG11c3QgaGF2ZSBhbiBpZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXNvdXJjZS5vcHRpb25zKSB7XHJcbiAgICAgICAgICByZXNvdXJjZS5vcHRpb25zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc291cmNlLm9wdGlvbnMuaWQgPSByZXNvdXJjZS5pZDtcclxuICAgICAgICBzd2l0Y2ggKHJlc291cmNlLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2JhY2tncm91bmQnOlxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlQmFja2dyb3VuZChyZXNvdXJjZS5vcHRpb25zKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaGVhZGluZyc6XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVIZWFkaW5nKHJlc291cmNlLnRleHQsIHJlc291cmNlLm9wdGlvbnMpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdibHVyYic6XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVCbHVyYihyZXNvdXJjZS50ZXh0LCByZXNvdXJjZS5vcHRpb25zKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlSW1hZ2UocmVzb3VyY2Uuc3JjLCByZXNvdXJjZS5vcHRpb25zKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBhY3Rpb25zID0gZGF0YS5hY3Rpb25zO1xyXG4gICAgICBhY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uKSB7XHJcbiAgICAgICAgICBpZiAoYWN0aW9uLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbnNPYmogPSB7fTtcclxuICAgICAgICAgICAgYWN0aW9uc09ialtrZXldID0gW107XHJcbiAgICAgICAgICAgIGxldCBpdGVtSWRzID0gYWN0aW9uW2tleV07XHJcbiAgICAgICAgICAgIGl0ZW1JZHMuZm9yRWFjaChpdGVtSWQgPT4ge1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGl0ZW1JZCkge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zT2JqW2tleV0ucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnNPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdsb2JhbC5JbXByZXNpID0gSW1wcmVzaTtcclxuICByZXR1cm4gSW1wcmVzaTtcclxuICAgfSgpO1xyXG5cclxuICAgcmV0dXJuIEltcHJlc2k7XHJcblxyXG59KSkpOyIsImltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVJdGVtIGV4dGVuZHMgSXRlbSB7XHJcbiAgY29uc3RydWN0b3IoaW1wcmVzaSwgb3B0aW9ucykge1xyXG4gICAgc3VwZXIoaW1wcmVzaSwgb3B0aW9ucyk7XHJcbiAgICBpZiAob3B0aW9ucy54ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMueCA9IDEwOyAvL2RlZmF1bHRcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy55ID0gMTA7IC8vZGVmYXVsdFxyXG4gICAgfVxyXG4gICBcclxuICB9XHJcblxyXG4gIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcclxuICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpXHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3RoaXMub3B0aW9ucy54fXZ3YDtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHt0aGlzLm9wdGlvbnMueX12aGA7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpdGVtKSB7XHJcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICAgIHRoaXMuaW5BbmltYXRpb25OYW1lID1cclxuICAgICAgICB0aGlzLml0ZW0ub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgIT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IGl0ZW0ub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWVcclxuICAgICAgICAgIDogXCJmYWRlSW5cIjtcclxuICAgICAgdGhpcy5vdXRBbmltYXRpb25OYW1lID1cclxuICAgICAgICBpdGVtLm9wdGlvbnMub3V0QW5pbWF0aW9uTmFtZSAhPSB1bmRlZmluZWRcclxuICAgICAgICAgID8gaXRlbS5vcHRpb25zLm91dEFuaW1hdGlvbk5hbWVcclxuICAgICAgICAgIDogXCJmYWRlT3V0XCI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBydW4oKSB7XHJcbiAgICAgIHRoaXMuaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3V0QW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgIHRoaXMuaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZFwiLCB0aGlzLmluQW5pbWF0aW9uTmFtZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZWRcIiwgdGhpcy5pbkFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3V0QW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgIHRoaXMuaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBJdGVtIHtcclxuICBjb25zdHJ1Y3RvcihpbXByZXNpLCBvcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xyXG4gICAgc3VwZXIuZGVmYXVsdEluQW5pbWF0aW9uTmFtZSA9IFwiZmFkZUluXCI7XHJcbiAgICB0aGlzLmFkZEVsZW1lbnQoXCJkaXZcIik7XHJcbiAgfVxyXG5cclxuICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XHJcbiAgICBzdXBlci5hZGRFbGVtZW50KGVsZW1lbnROYW1lKTtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiLCBcIml0ZW1cIik7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmltYWdlVXJsKSB7XHJcbiAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltYWdlLnNyYyA9IHRoaXMub3B0aW9ucy5pbWFnZVVybDtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFRleHRJdGVtIGZyb20gXCIuL3RleHQtaXRlbS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVyYiBleHRlbmRzIFRleHRJdGVtIHtcclxuICBjb25zdHJ1Y3RvcihpbXByZXNpLCB0ZXh0LCBvcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuekluZGV4ID0gMjtcclxuICAgIHRoaXMuZGVmYXVsdEZvbnRTaXplID0gMS41O1xyXG4gICAgdGhpcy5hZGRFbGVtZW50KFwiZGl2XCIpO1xyXG4gIH1cclxuXHJcbiAgYWRkRWxlbWVudChlbGVtZW50TmFtZSkge1xyXG4gICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSBgJHt0aGlzLm9wdGlvbnMud2lkdGh9dndgO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibHVyYlwiLCBcIml0ZW1cIik7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy56SW5kZXg7XHJcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XHJcbiAgICBzdXBlci5zZXRDaGlsZE9wdGlvbnMocCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIHtcclxuICAgIGNvbnN0cnVjdG9yKGFjdGlvbk5hbWUsIGFjdGlvbnMpIHtcclxuICAgICAgdGhpcy5hY3Rpb25OYW1lID0gYWN0aW9uTmFtZTtcclxuICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcclxuICAgIH1cclxuICBcclxuICAgIHJ1bigpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xyXG4gICAgICAgIGFjdGlvbi5ydW4oKTtcclxuICAgICAgICBpKys7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xyXG4gICAgICAgIGFjdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiaW1wb3J0IFRleHRJdGVtIGZyb20gXCIuL3RleHQtaXRlbS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkaW5nIGV4dGVuZHMgVGV4dEl0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKGltcHJlc2ksIHRleHQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoaW1wcmVzaSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy56SW5kZXggPSAxO1xyXG4gICAgdGhpcy5kZWZhdWx0Rm9udFNpemUgPSAyO1xyXG4gICAgdGhpcy5hZGRFbGVtZW50KFwiZGl2XCIpO1xyXG4gIH1cclxuXHJcbiAgYWRkRWxlbWVudChlbGVtZW50TmFtZSkge1xyXG4gICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIiwgXCJpdGVtXCIpO1xyXG4gICAgdmFyIGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMuekluZGV4O1xyXG4gICAgaDEuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG4gICAgc3VwZXIuc2V0Q2hpbGRPcHRpb25zKGgxKTtcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChoMSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IEFic29sdXRlSXRlbSBmcm9tIFwiLi9hYnNvbHV0ZS1pdGVtXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgQWJzb2x1dGVJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGltcHJlc2ksIHNyYywgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xyXG4gICAgICAgIHN1cGVyLmRlZmF1bHRJbkFuaW1hdGlvbk5hbWUgPSBcInNsaWRlSW5VcFwiO1xyXG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgICAgIHRoaXMuekluZGV4ID0gMTtcclxuICAgICAgICB0aGlzLmFkZEVsZW1lbnQoJ2ltZycpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcclxuICAgICAgICBzdXBlci5hZGRFbGVtZW50KGVsZW1lbnROYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IGAke3RoaXMub3B0aW9ucy53aWR0aH12d2A7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgPSB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lICE9IHVuZGVmaW5lZFxyXG4gICAgICAgIC8vICAgICA/IHRoaXMub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgOiB0aGlzLmRlZmF1bHRJbkFuaW1hdGlvbk5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIiwgXCJpdGVtXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGltcHJlc2ksIG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5ib2FyZCA9IGltcHJlc2kuYm9hcmQ7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgIHRoaXMuZWxlbWVudDtcclxuICAgICAgc3VwZXIuZGVmYXVsdEluQW5pbWF0aW9uTmFtZTtcclxuICAgICAgLy9yZXNvdXJjZXMgY3JlYXRlZCB0aHJvdWdoIEpTT04gZGF0YSBwcm92aWRlIGFuIElEIHRocm91Z2ggdGhlIG9wdGlvbnNcclxuICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XHJcbiAgICAgIHRoaXMuYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgdGhpcy5vcHRpb25zLmluQW5pbWF0aW9uTmFtZSA9IHRoaXMub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgIT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmluQW5pbWF0aW9uTmFtZSA6IHRoaXMuZGVmYXVsdEluQW5pbWF0aW9uTmFtZTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiaW1wb3J0IEFic29sdXRlSXRlbSBmcm9tIFwiLi9hYnNvbHV0ZS1pdGVtXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJdGVtIGV4dGVuZHMgQWJzb2x1dGVJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGltcHJlc2ksIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcclxuICAgICAgICBzdXBlci5kZWZhdWx0SW5BbmltYXRpb25OYW1lID0gXCJzbGlkZUluVXBcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRWxlbWVudChlbGVtZW50TmFtZSkge1xyXG4gICAgICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heFdpZHRoID0gYCR7dGhpcy5vcHRpb25zLndpZHRofXZ3YDtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNldENoaWxkT3B0aW9ucyhjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnN0eWxlLmZvbnRTaXplID0gYCR7dGhpcy5nZXRGb250U2l6ZSgpfXZ3YDtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvbnRDb2xvcikge1xyXG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5jb2xvciA9IHRoaXMub3B0aW9ucy5mb250Q29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbnRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9udFNpemUgIT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmZvbnRTaXplIDogdGhpcy5kZWZhdWx0Rm9udFNpemU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3Qgc3R5bGVzID0gXHJcbmBcclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgxLFxyXG5wIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbmJvZHksIC5ib2FyZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFuaW1hdGVkIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCBpbWcge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGluZyxcclxuLmJsdXJiLFxyXG4uYmFja2dyb3VuZCxcclxuLmltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxuLmhlYWRpbmcsXHJcbi5ibHVyYiB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmhlYWRpbmcgaDEge1xyXG4gIGZvbnQtc2l6ZTogMi40ZW07XHJcbn1cclxuXHJcbi5ibHVyYiBwIHtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG59XHJcblxyXG4uaGVhZGluZyBoMSxcclxuLmJsdXJiIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5sZHMtcmlwcGxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNDB2aDtcclxuICBsZWZ0OiBjYWxjKDUwdncgLSAzMnB4KTtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuLmxkcy1yaXBwbGUgZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcclxufVxyXG4ubGRzLXJpcHBsZSBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAyOHB4O1xyXG4gICAgbGVmdDogMjhweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgd2lkdGg6IDU4cHg7XHJcbiAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaGVhZGluZzpub3QoLmhpZGUpLFxyXG4gIC5ibHVyYjpub3QoLmhpZGUpLFxyXG4gIC5pbWFnZTpub3QoLmhpZGUpe1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlOm5vdCguaGlkZSkge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRpbmc6bm90KC5oaWRlKSBoMSB7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICB9XHJcblxyXG4gIC5ibHVyYiBwIHtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIH1cclxufVxyXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=