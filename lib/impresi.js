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
                self.next();
                _this.screenIndex++;
                window.location.hash = "screen".concat(_this.screenIndex);
              }
            } //decrement keys: up or left


            if (e.keyCode === 38 || e.keyCode === 37) {
              if (_this.index > 0) {
                self.previous(self.index === self.groups.length - 1);
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
              this.screenIndex--;
              window.location.hash = "screen".concat(this.screenIndex);
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
            var frag = window.location.hash;

            if (frag.match('^#screen[0-9]+$')) {
              var matches = frag.match('[0-9]+');

              if (matches) {
                this.screenIndex = parseInt(matches[0]);
              }

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

    if (!options.x) {
      _this.options.x = "10"; //default
    }

    if (!options.y) {
      _this.options.y = "10"; //default
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

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Background =
/*#__PURE__*/
function (_Item) {
  _inherits(Background, _Item);

  function Background(impresi) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Background);

    _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, impresi, options));

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

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Image =
/*#__PURE__*/
function (_AbsoluteItem) {
  _inherits(Image, _AbsoluteItem);

  function Image(impresi, src, options) {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, impresi, options));
    _this.defaultInAnimationName = "slideInUp";
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
      }

      this.options.inAnimationName = this.options.inAnimationName != undefined ? this.options.inAnimationName : this.defaultInAnimationName;
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

var Item =
/*#__PURE__*/
function () {
  function Item(impresi, options) {
    _classCallCheck(this, Item);

    this.board = impresi.board;
    this.options = options;
    this.element = null; //resources created through JSON data provide an ID through the options

    if (options.id) {
      this.id = options.id;
    }
  }

  _createClass(Item, [{
    key: "addElement",
    value: function addElement(elementName) {
      this.element = document.createElement(elementName);
      this.board.appendChild(this.element);
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

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TextItem =
/*#__PURE__*/
function (_AbsoluteItem) {
  _inherits(TextItem, _AbsoluteItem);

  function TextItem(impresi, options) {
    var _this;

    _classCallCheck(this, TextItem);

    _this = _possibleConstructorReturn(this, (TextItem.__proto__ || Object.getPrototypeOf(TextItem)).call(this, impresi, options));
    _this.defaultInAnimationName = "slideInUp";
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

      this.options.inAnimationName = this.options.inAnimationName != undefined ? this.options.inAnimationName : this.defaultInAnimationName;
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
var styles = "\nbody {\n  margin: 0;\n  text-align: center;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nh1,\np {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.item {\n  visibility: hidden;\n}\n\n.animated {\n  visibility: visible;\n}\n\n.hide {\n  display: none;\n}\n\n.background {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n}\n\n.background img {\n  flex-shrink: 0;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.heading,\n.blurb,\n.background,\n.image {\n  position: absolute;\n  background-color: #333;\n}\n\n.heading,\n.blurb {\n  padding: 15px;\n}\n\n.heading h1 {\n  font-size: 2.4em;\n}\n\n.blurb p {\n  font-size: 1.4em;\n}\n\n.heading h1,\n.blurb p {\n  margin: 0;\n  color: #fff;\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  background-color: #333;\n  width: 100vw;\n  height: 100vh;\n}\n\n.lds-ripple {\n  display: inline-block;\n  position: fixed;\n  top: 40vh;\n  left: calc(50vw - 32px);\n  width: 64px;\n  height: 64px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n}\n\n\n@media only screen and (max-width: 600px) {\n  .heading,\n  .blurb,\n  .image {\n    position: static;\n    display: block;\n  }\n\n  .image {\n    width: 100vw;\n    max-width: 100vw !important;\n  }\n\n  .heading h1 {\n    font-size: 5vw;\n  }\n\n  .blurb p {\n    font-size: 4vw;\n  }\n}\n";
exports.styles = styles;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltcHJlc2kvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYWJzb2x1dGUtaXRlbS5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ibHVyYi5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ncm91cC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9oZWFkaW5nLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvbGliL2ltYWdlLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvbGliL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvdGV4dC1pdGVtLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiSW1wcmVzaSIsImJvYXJkSWQiLCJkYXRhIiwib3B0aW9ucyIsIkVycm9yIiwiYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cHMiLCJzY3JlZW5JbmRleCIsImluZGV4IiwiYWRkUmVzb3VyY2VzIiwiaW5pdCIsImdldFN0eWxlcyIsInNldExpc3RlbmVycyIsImRpc3BsYXlMb2FkZXIiLCJzZWxmIiwiYm9keSIsIm9ua2V5dXAiLCJlIiwia2V5Q29kZSIsImxlbmd0aCIsIm5leHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJwcmV2aW91cyIsInN0eWxlRWwiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwib3ZlcmxheSIsImNsYXNzTGlzdCIsImFkZCIsImxvYWRlciIsInRleHQiLCJzcmMiLCJvdXQiLCJhZGRHcm91cCIsImluIiwiYWN0aW9uTmFtZSIsImFjdGlvbnMiLCJmb3JFYWNoIiwiaXRlbSIsImFjdGlvbiIsInB1c2giLCJncm91cCIsInN0b3AiLCJpbmNyZW1lbnQiLCJydW4iLCJpc0xhc3QiLCJkZWNyZW1lbnQiLCJmcmFnIiwibWF0Y2giLCJtYXRjaGVzIiwicGFyc2VJbnQiLCJpIiwicmVzb3VyY2VzIiwiaXRlbXMiLCJyZXNvdXJjZSIsImlkIiwiY3JlYXRlQmFja2dyb3VuZCIsImNyZWF0ZUhlYWRpbmciLCJjcmVhdGVCbHVyYiIsImNyZWF0ZUltYWdlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhY3Rpb25zT2JqIiwiaXRlbUlkcyIsIml0ZW1JZCIsImFkZEFjdGlvbnMiLCJBYnNvbHV0ZUl0ZW0iLCJpbXByZXNpIiwieCIsInkiLCJlbGVtZW50TmFtZSIsImVsZW1lbnQiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJBY3Rpb24iLCJpbkFuaW1hdGlvbk5hbWUiLCJ1bmRlZmluZWQiLCJvdXRBbmltYXRpb25OYW1lIiwicmVtb3ZlIiwiQmFja2dyb3VuZCIsImFkZEVsZW1lbnQiLCJpbWFnZVVybCIsImltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiQmx1cmIiLCJ6SW5kZXgiLCJkZWZhdWx0Rm9udFNpemUiLCJtYXhXaWR0aCIsIndpZHRoIiwicCIsIkdyb3VwIiwiSGVhZGluZyIsImgxIiwiSW1hZ2UiLCJkZWZhdWx0SW5BbmltYXRpb25OYW1lIiwib3ZlcmZsb3ciLCJJdGVtIiwiVGV4dEl0ZW0iLCJjaGlsZCIsImZvbnRTaXplIiwiZ2V0Rm9udFNpemUiLCJmb250Q29sb3IiLCJjb2xvciIsInN0eWxlcyJdLCJtYXBwaW5n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QUNELFdBQUt2RixPQUFMLENBQWErRSxlQUFiLEdBQStCLEtBQUsvRSxPQUFMLENBQWErRSxlQUFiLElBQWdDQyxTQUFoQyxHQUN6QixLQUFLaEYsT0FBTCxDQUFhK0UsZUFEWSxHQUNNLEtBQUttQixzQkFEMUM7QUFFSDs7O29DQUVlSSxLLEVBQU87QUFDbkJBLFdBQUssQ0FBQzNCLEtBQU4sQ0FBWTRCLFFBQVosYUFBMEIsS0FBS0MsV0FBTCxFQUExQjs7QUFDQSxVQUFJLEtBQUt4RyxPQUFMLENBQWF5RyxTQUFqQixFQUE0QjtBQUN4QkgsYUFBSyxDQUFDM0IsS0FBTixDQUFZK0IsS0FBWixHQUFvQixLQUFLMUcsT0FBTCxDQUFheUcsU0FBakM7QUFDSDtBQUNKOzs7a0NBRWE7QUFDVixhQUFPLEtBQUt6RyxPQUFMLENBQWF1RyxRQUFiLElBQXlCdkIsU0FBekIsR0FDRCxLQUFLaEYsT0FBTCxDQUFhdUcsUUFEWixHQUN1QixLQUFLYixlQURuQztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JFLElBQU1pQixNQUFNLHl5REFBWiIsImZpbGUiOiJpbXByZXNpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJpbXByZXNpXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImltcHJlc2lcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaW1wcmVzaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKiFcbiAqIEBmaWxlT3ZlcnZpZXcgQSBKYXZhc2NyaXB0IGxpYnJhcnkgZm9yIGNyZWF0aW5nIGJlYXV0aWZ1bCBzbGlkZSBwcmVzZW50YXRpb25zLlxuICogQHZlcnNpb24gMC4wLjNcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkgUmljaGFyZCBMb3ZlbGwgYW5kIGNvbnRyaWJ1dG9yc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICdTb2Z0d2FyZScpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2xpYi9iYWNrZ3JvdW5kJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4vbGliL2hlYWRpbmcnO1xuaW1wb3J0IEJsdXJiIGZyb20gJy4vbGliL2JsdXJiJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2xpYi9ncm91cCc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vbGliL2FjdGlvbic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9saWIvaW1hZ2UnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAgIChnbG9iYWwuSW1wcmVzaSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuXG4gICB2YXIgSW1wcmVzaSA9IGZ1bmN0aW9uICgpIHtcbiAgY2xhc3MgSW1wcmVzaSB7XG4gICAgY29uc3RydWN0b3IoYm9hcmRJZCwgZGF0YSwgb3B0aW9ucyA9IFtdKSB7XG4gICAgICBpZiAoIWJvYXJkSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJRCBmb3IgYm9hcmQgaXMgcmVxdWlyZWQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvYXJkSWQpO1xuICAgICAgaWYgKCF0aGlzLmJvYXJkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gSFRNTCBlbGVtZW50IHdpdGggdGhlIElEOiAnICsgYm9hcmRJZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgICAgdGhpcy5zY3JlZW5JbmRleCA9IDA7XG4gICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHRoaXMuYWRkUmVzb3VyY2VzKGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuZ2V0U3R5bGVzKCk7XG4gICAgICB0aGlzLnNldExpc3RlbmVycygpO1xuICAgICAgdGhpcy5kaXNwbGF5TG9hZGVyKCk7XG4gICAgfVxuXG4gICAgc2V0TGlzdGVuZXJzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgZG9jdW1lbnQuYm9keS5vbmtleXVwID0gZSA9PiB7XG4gICAgICAgIC8vaW5jcmVtZW50IGtleXM6IHNwYWNlLCBkb3duLCByaWdodCBvciBlbnRlclxuICAgICAgICBpZiAoXG4gICAgICAgICAgZS5rZXlDb2RlID09PSAzMiB8fFxuICAgICAgICAgIGUua2V5Q29kZSA9PT0gNDAgfHxcbiAgICAgICAgICBlLmtleUNvZGUgPT09IDM5IHx8XG4gICAgICAgICAgZS5rZXlDb2RlID09PSAxM1xuICAgICAgICApIHtcblxuICAgICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5ncm91cHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICAgICAgICB0aGlzLnNjcmVlbkluZGV4Kys7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGBzY3JlZW4ke3RoaXMuc2NyZWVuSW5kZXh9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9kZWNyZW1lbnQga2V5czogdXAgb3IgbGVmdFxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgaWYgKHRoaXMuaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLnByZXZpb3VzKHNlbGYuaW5kZXggPT09IHNlbGYuZ3JvdXBzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRTdHlsZXMoKSB7XG4gICAgICAvL2NvcmUgc3R5bGVzXG4gICAgICBsZXQgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZUVsLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgc3R5bGVFbC5pbm5lckhUTUwgPSBzdHlsZXM7XG4gICAgICB0aGlzLmJvYXJkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuXG4gICAgICAvL2FuaW1hdGlvbiBzdHlsZXNcbiAgICAgIHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIHN0eWxlRWwuaW5uZXJIVE1MID1cbiAgICAgICAgJ0BpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvMy43LjAvYW5pbWF0ZS5taW4uY3NzXCIpOyc7XG4gICAgICB0aGlzLmJvYXJkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICAgIH1cblxuICAgIGRpc3BsYXlMb2FkZXIoKSB7XG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICBsZXQgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBsb2FkZXIuaW5uZXJIVE1MID0gJzxkaXY+PC9kaXY+PGRpdj48L2Rpdj4nO1xuICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2xkcy1yaXBwbGUnKTtcbiAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQobG9hZGVyKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQmFja2dyb3VuZChvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmV3IEJhY2tncm91bmQodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY3JlYXRlSGVhZGluZyh0ZXh0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmV3IEhlYWRpbmcodGhpcywgdGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQmx1cmIodGV4dCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5ldyBCbHVyYih0aGlzLCB0ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgY3JlYXRlSW1hZ2Uoc3JjLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmV3IEltYWdlKHRoaXMsIHNyYywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgYWRkQWN0aW9ucyhvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5vdXQpIHtcbiAgICAgICAgdGhpcy5hZGRHcm91cCgnb3V0Jywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5pbikge1xuICAgICAgICB0aGlzLmFkZEdyb3VwKCdpbicsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkR3JvdXAoYWN0aW9uTmFtZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFjdGlvbnMgPSBbXTtcbiAgICAgIG9wdGlvbnNbYWN0aW9uTmFtZV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGFjdGlvbiA9IG5ldyBBY3Rpb24oaXRlbSk7XG4gICAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgfSk7XG4gICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoYWN0aW9uTmFtZSwgYWN0aW9ucyk7XG4gICAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cHNbdGhpcy5pbmRleF07XG4gICAgICBpZiAoZ3JvdXAuYWN0aW9uTmFtZSA9PT0gJ291dCcpIHtcbiAgICAgICAgaWYgKCFncm91cC5hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWN0aW9ucyBwcm92aWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBncm91cC5zdG9wKCk7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JvdXAucnVuKCk7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5ncm91cHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHByZXZpb3VzKGlzTGFzdCkge1xuICAgICAgaWYgKHRoaXMuaW5kZXggIT09IDEpIHtcbiAgICAgICAgaWYgKCFpc0xhc3QpIHtcbiAgICAgICAgICB0aGlzLmRlY3JlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBzW3RoaXMuaW5kZXhdO1xuICAgICAgICBpZiAoZ3JvdXAuYWN0aW9uTmFtZSA9PT0gJ2luJykge1xuICAgICAgICAgIGlmICghZ3JvdXAuYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWN0aW9ucyBwcm92aWRlZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ3JvdXAuc3RvcCgpO1xuICAgICAgICAgIGlmIChpc0xhc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzKHRoaXMuaW5kZXggPT09IHRoaXMuZ3JvdXBzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBncm91cC5ydW4oKTtcbiAgICAgICAgICB0aGlzLnNjcmVlbkluZGV4LS07XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgc2NyZWVuJHt0aGlzLnNjcmVlbkluZGV4fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgIGlmICghdGhpcy5ncm91cHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZ3JvdXBzIG9mIGFjdGlvbnMgaGF2ZSBiZWVuIGFkZGVkIHlldC4nKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgICAgICAvLyBGcmFnbWVudCBleGlzdHNcbiAgICAgICAgbGV0IGZyYWcgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgaWYgKGZyYWcubWF0Y2goJ14jc2NyZWVuWzAtOV0rJCcpKSB7XG4gICAgICAgICAgdmFyIG1hdGNoZXMgPSBmcmFnLm1hdGNoKCdbMC05XSsnKTtcbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5JbmRleCA9IHBhcnNlSW50KG1hdGNoZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zY3JlZW5JbmRleCA+IDAgJiYgdGhpcy5zY3JlZW5JbmRleCA8PSB0aGlzLmdyb3Vwcy5sZW5ndGggLyAyICsgMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjcmVlbkluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuSW5kZXggPSAxO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnc2NyZWVuMSc7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHRoaXMuc2NyZWVuSW5kZXgrKztcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnc2NyZWVuMSc7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICBpZiAodGhpcy5pbmRleCAhPT0gdGhpcy5ncm91cHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KCkge1xuICAgICAgaWYgKHRoaXMuaW5kZXggPiAwKSB7XG4gICAgICAgIHRoaXMuaW5kZXgtLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRSZXNvdXJjZXMoZGF0YSkge1xuICAgICAgaWYgKCFkYXRhLnJlc291cmNlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlc291cmNlcyBleGlzdCBpbiB0aGUgZGF0YS4nKTtcbiAgICAgIH1cbiAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiB7XG4gICAgICAgIGlmICghcmVzb3VyY2UudHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWxsIGl0ZW1zIG11c3QgaGF2ZSBhIHR5cGUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNvdXJjZS5pZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWxsIGl0ZW1zIG11c3QgaGF2ZSBhbiBpZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc291cmNlLm9wdGlvbnMpIHtcbiAgICAgICAgICByZXNvdXJjZS5vcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmVzb3VyY2Uub3B0aW9ucy5pZCA9IHJlc291cmNlLmlkO1xuICAgICAgICBzd2l0Y2ggKHJlc291cmNlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdiYWNrZ3JvdW5kJzpcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVCYWNrZ3JvdW5kKHJlc291cmNlLm9wdGlvbnMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2hlYWRpbmcnOlxuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUhlYWRpbmcocmVzb3VyY2UudGV4dCwgcmVzb3VyY2Uub3B0aW9ucykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYmx1cmInOlxuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUJsdXJiKHJlc291cmNlLnRleHQsIHJlc291cmNlLm9wdGlvbnMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVJbWFnZShyZXNvdXJjZS5zcmMsIHJlc291cmNlLm9wdGlvbnMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbGV0IGFjdGlvbnMgPSBkYXRhLmFjdGlvbnM7XG4gICAgICBhY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFjdGlvbikge1xuICAgICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgbGV0IGFjdGlvbnNPYmogPSB7fTtcbiAgICAgICAgICAgIGFjdGlvbnNPYmpba2V5XSA9IFtdO1xuICAgICAgICAgICAgbGV0IGl0ZW1JZHMgPSBhY3Rpb25ba2V5XTtcbiAgICAgICAgICAgIGl0ZW1JZHMuZm9yRWFjaChpdGVtSWQgPT4ge1xuICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zT2JqW2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZEFjdGlvbnMoYWN0aW9uc09iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZ2xvYmFsLkltcHJlc2kgPSBJbXByZXNpO1xuICByZXR1cm4gSW1wcmVzaTtcbiAgIH0oKTtcblxuICAgcmV0dXJuIEltcHJlc2k7XG5cbn0pKSk7IiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVJdGVtIGV4dGVuZHMgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltcHJlc2ksIG9wdGlvbnMpIHtcbiAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMueCkge1xuICAgICAgdGhpcy5vcHRpb25zLnggPSBcIjEwXCI7IC8vZGVmYXVsdFxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMueSkge1xuICAgICAgdGhpcy5vcHRpb25zLnkgPSBcIjEwXCI7IC8vZGVmYXVsdFxuICAgIH1cbiAgIFxuICB9XG5cbiAgYWRkRWxlbWVudChlbGVtZW50TmFtZSkge1xuICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt0aGlzLm9wdGlvbnMueH12d2A7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMub3B0aW9ucy55fXZoYDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgdGhpcy5pbkFuaW1hdGlvbk5hbWUgPVxuICAgICAgICB0aGlzLml0ZW0ub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBpdGVtLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lXG4gICAgICAgICAgOiBcImZhZGVJblwiO1xuICAgICAgdGhpcy5vdXRBbmltYXRpb25OYW1lID1cbiAgICAgICAgaXRlbS5vcHRpb25zLm91dEFuaW1hdGlvbk5hbWUgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBpdGVtLm9wdGlvbnMub3V0QW5pbWF0aW9uTmFtZVxuICAgICAgICAgIDogXCJmYWRlT3V0XCI7XG4gICAgfVxuICBcbiAgICBydW4oKSB7XG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIHRoaXMuaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vdXRBbmltYXRpb25OYW1lKTtcbiAgICAgIHRoaXMuaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZFwiLCB0aGlzLmluQW5pbWF0aW9uTmFtZSk7XG4gICAgfVxuICBcbiAgICBzdG9wKCkge1xuICAgICAgdGhpcy5pdGVtLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVkXCIsIHRoaXMuaW5BbmltYXRpb25OYW1lKTtcbiAgICAgIHRoaXMuaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vdXRBbmltYXRpb25OYW1lKTtcbiAgICAgIHRoaXMuaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIH1cbiAgfVxuICAiLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltcHJlc2ksIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xuICAgIHRoaXMuYWRkRWxlbWVudChcImRpdlwiKTtcbiAgfVxuXG4gIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcbiAgICBzdXBlci5hZGRFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRcIiwgXCJpdGVtXCIpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaW1hZ2VVcmwpIHtcbiAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWFnZS5zcmMgPSB0aGlzLm9wdGlvbnMuaW1hZ2VVcmw7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVGV4dEl0ZW0gZnJvbSBcIi4vdGV4dC1pdGVtLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVyYiBleHRlbmRzIFRleHRJdGVtIHtcbiAgY29uc3RydWN0b3IoaW1wcmVzaSwgdGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoaW1wcmVzaSwgb3B0aW9ucyk7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnpJbmRleCA9IDI7XG4gICAgdGhpcy5kZWZhdWx0Rm9udFNpemUgPSAxLjU7XG4gICAgdGhpcy5hZGRFbGVtZW50KFwiZGl2XCIpO1xuICB9XG5cbiAgYWRkRWxlbWVudChlbGVtZW50TmFtZSkge1xuICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IGAke3RoaXMub3B0aW9ucy53aWR0aH12d2A7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibHVyYlwiLCBcIml0ZW1cIik7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMuekluZGV4O1xuICAgIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgc3VwZXIuc2V0Q2hpbGRPcHRpb25zKHApO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChwKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbk5hbWUsIGFjdGlvbnMpIHtcbiAgICAgIHRoaXMuYWN0aW9uTmFtZSA9IGFjdGlvbk5hbWU7XG4gICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIH1cbiAgXG4gICAgcnVuKCkge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgYWN0aW9uLnJ1bigpO1xuICAgICAgICBpKys7XG4gICAgICB9KTtcbiAgICB9XG4gIFxuICAgIHN0b3AoKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgICBhY3Rpb24uc3RvcCgpO1xuICAgICAgICBpKys7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IFRleHRJdGVtIGZyb20gXCIuL3RleHQtaXRlbS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGluZyBleHRlbmRzIFRleHRJdGVtIHtcbiAgY29uc3RydWN0b3IoaW1wcmVzaSwgdGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoaW1wcmVzaSwgb3B0aW9ucyk7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnpJbmRleCA9IDE7XG4gICAgdGhpcy5kZWZhdWx0Rm9udFNpemUgPSAyO1xuICAgIHRoaXMuYWRkRWxlbWVudChcImRpdlwiKTtcbiAgfVxuXG4gIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcbiAgICBzdXBlci5hZGRFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIiwgXCJpdGVtXCIpO1xuICAgIHZhciBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy56SW5kZXg7XG4gICAgaDEuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgIHN1cGVyLnNldENoaWxkT3B0aW9ucyhoMSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCBBYnNvbHV0ZUl0ZW0gZnJvbSBcIi4vYWJzb2x1dGUtaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBBYnNvbHV0ZUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGltcHJlc2ksIHNyYywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5BbmltYXRpb25OYW1lID0gXCJzbGlkZUluVXBcIjtcbiAgICAgICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMuekluZGV4ID0gMTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50KCdpbWcnKTtcbiAgICB9XG5cbiAgICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XG4gICAgICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSBgJHt0aGlzLm9wdGlvbnMud2lkdGh9dndgO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lID0gdGhpcy5vcHRpb25zLmluQW5pbWF0aW9uTmFtZSAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmluQW5pbWF0aW9uTmFtZSA6IHRoaXMuZGVmYXVsdEluQW5pbWF0aW9uTmFtZTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImltYWdlXCIsIFwiaXRlbVwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMuekluZGV4O1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGltcHJlc2ksIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuYm9hcmQgPSBpbXByZXNpLmJvYXJkO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAvL3Jlc291cmNlcyBjcmVhdGVkIHRocm91Z2ggSlNPTiBkYXRhIHByb3ZpZGUgYW4gSUQgdGhyb3VnaCB0aGUgb3B0aW9uc1xuICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkRWxlbWVudChlbGVtZW50TmFtZSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgICB0aGlzLmJvYXJkLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICB9XG4gICIsImltcG9ydCBBYnNvbHV0ZUl0ZW0gZnJvbSBcIi4vYWJzb2x1dGUtaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEl0ZW0gZXh0ZW5kcyBBYnNvbHV0ZUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGltcHJlc2ksIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoaW1wcmVzaSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEluQW5pbWF0aW9uTmFtZSA9IFwic2xpZGVJblVwXCI7XG5cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XG4gICAgICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSBgJHt0aGlzLm9wdGlvbnMud2lkdGh9dndgO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLmluQW5pbWF0aW9uTmFtZSA9IHRoaXMub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgOiB0aGlzLmRlZmF1bHRJbkFuaW1hdGlvbk5hbWU7XG4gICAgfVxuXG4gICAgc2V0Q2hpbGRPcHRpb25zKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmZvbnRTaXplID0gYCR7dGhpcy5nZXRGb250U2l6ZSgpfXZ3YDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb250Q29sb3IpIHtcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmNvbG9yID0gdGhpcy5vcHRpb25zLmZvbnRDb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvbnRTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvbnRTaXplICE9IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuZm9udFNpemUgOiB0aGlzLmRlZmF1bHRGb250U2l6ZTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IHN0eWxlcyA9IFxuYFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxLFxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLml0ZW0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5hbmltYXRlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhY2tncm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmFja2dyb3VuZCBpbWcge1xuICBmbGV4LXNocmluazogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGluZyxcbi5ibHVyYixcbi5iYWNrZ3JvdW5kLFxuLmltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4uaGVhZGluZyxcbi5ibHVyYiB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5oZWFkaW5nIGgxIHtcbiAgZm9udC1zaXplOiAyLjRlbTtcbn1cblxuLmJsdXJiIHAge1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG4uaGVhZGluZyBoMSxcbi5ibHVyYiBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5sZHMtcmlwcGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDB2aDtcbiAgbGVmdDogY2FsYyg1MHZ3IC0gMzJweCk7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4ubGRzLXJpcHBsZSBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XG59XG4ubGRzLXJpcHBsZSBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbn1cbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XG4gIDAlIHtcbiAgICB0b3A6IDI4cHg7XG4gICAgbGVmdDogMjhweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC0xcHg7XG4gICAgbGVmdDogLTFweDtcbiAgICB3aWR0aDogNThweDtcbiAgICBoZWlnaHQ6IDU4cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRpbmcsXG4gIC5ibHVyYixcbiAgLmltYWdlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhlYWRpbmcgaDEge1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICB9XG5cbiAgLmJsdXJiIHAge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG59XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=