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
    this.defaul;
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

    _this.addElement("span");

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
      // if (this.options.fontSize) {
      child.style.fontSize = "".concat(this.getFontSize(), "vw"); // }

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
var styles = "\nbody {\n  margin: 0;\n  text-align: center;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nh1,\np {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.item {\n  visibility: hidden;\n}\n\n.animated {\n  visibility: visible;\n}\n\n.hide {\n  display: none;\n}\n\n.background {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n}\n\n.background img {\n  flex-shrink: 0;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.heading,\n.blurb,\n.background {\n  position: absolute;\n  background-color: #333;\n}\n\n.heading,\n.blurb {\n  padding: 15px;\n}\n\n.heading h1 {\n  font-size: 2.4em;\n}\n\n.blurb p {\n  font-size: 1.4em;\n}\n\n.heading h1,\n.blurb p {\n  margin: 0;\n  color: #fff;\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  background-color: #333;\n  width: 100vw;\n  height: 100vh;\n}\n\n.lds-ripple {\n  display: inline-block;\n  position: fixed;\n  top: 40vh;\n  left: calc(50vw - 32px);\n  width: 64px;\n  height: 64px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n}\n\n\n@media only screen and (max-width: 600px) {\n  .heading,\n  .blurb {\n    position: static;\n    display: block;\n  }\n\n  .heading h1 {\n    font-size: 5vw;\n  }\n\n  .blurb p {\n    font-size: 4vw;\n  }\n}\n";
exports.styles = styles;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltcHJlc2kvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYWJzb2x1dGUtaXRlbS5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ibHVyYi5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ncm91cC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9oZWFkaW5nLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvbGliL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvdGV4dC1pdGVtLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiSW1wcmVzaSIsImJvYXJkSWQiLCJkYXRhIiwib3B0aW9ucyIsIkVycm9yIiwiYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cHMiLCJzY3JlZW5JbmRleCIsImluZGV4IiwiYWRkUmVzb3VyY2VzIiwiaW5pdCIsImdldFN0eWxlcyIsInNldExpc3RlbmVycyIsImRpc3BsYXlMb2FkZXIiLCJzZWxmIiwiYm9keSIsIm9ua2V5dXAiLCJlIiwia2V5Q29kZSIsImxlbmd0aCIsIm5leHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJwcmV2aW91cyIsInN0eWxlRWwiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwib3ZlcmxheSIsImNsYXNzTGlzdCIsImFkZCIsImxvYWRlciIsInRleHQiLCJvdXQiLCJhZGRHcm91cCIsImluIiwiYWN0aW9uTmFtZSIsImFjdGlvbnMiLCJmb3JFYWNoIiwiaXRlbSIsImFjdGlvbiIsInB1c2giLCJncm91cCIsInN0b3AiLCJpbmNyZW1lbnQiLCJydW4iLCJpc0xhc3QiLCJkZWNyZW1lbnQiLCJmcmFnIiwibWF0Y2giLCJtYXRjaGVzIiwicGFyc2VJbnQiLCJpIiwicmVzb3VyY2VzIiwiaXRlbXMiLCJyZXNvdXJjZSIsImlkIiwiY3JlYXRlQmFja2dyb3VuZCIsImNyZWF0ZUhlYWRpbmciLCJjcmVhdGVCbHVyYiIsImtleSIsImhhc093blByb3BlcnR5IiwiYWN0aW9uc09iaiIsIml0ZW1JZHMiLCJpdGVtSWQiLCJhZGRBY3Rpb25zIiwiQWJzb2x1dGVJdGVtIiwiaW1wcmVzaSIsIngiLCJ5IiwiZWxlbWVudE5hbWUiLCJlbGVtZW50Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiQWN0aW9uIiwiZGVmYXVsIiwiaW5BbmltYXRpb25OYW1lIiwidW5kZWZpbmVkIiwib3V0QW5pbWF0aW9uTmFtZSIsInJlbW92ZSIsIkJhY2tncm91bmQiLCJhZGRFbGVtZW50IiwiaW1hZ2VVcmwiLCJpbWFnZSIsInNyYyIsImJhY2tncm91bmRDb2xvciIsIkJsdXJiIiwiekluZGV4IiwiZGVmYXVsdEZvbnRTaXplIiwibWF4V2lkdGgiLCJ3aWR0aCIsInAiLCJHcm91cCIsIkhlYWRpbmciLCJoMSIsIkl0ZW0iLCJUZXh0SXRlbSIsImRlZmF1bHRJbkFuaW1hdGlvbk5hbWUiLCJvdmVyZmxvdyIsImNoaWxkIiwiZm9udFNpemUiLCJnZXRGb250U2l6ZSIsImZvbnRDb2xvciIsImNvbG9yIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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YUFBMEIsS0FBS0MsV0FBTCxFQUExQixRQUZlLENBR25COztBQUNBLFVBQUksS0FBS3ZHLE9BQUwsQ0FBYXdHLFNBQWpCLEVBQTRCO0FBQ3hCSCxhQUFLLENBQUM1QixLQUFOLENBQVlnQyxLQUFaLEdBQW9CLEtBQUt6RyxPQUFMLENBQWF3RyxTQUFqQztBQUNIO0FBQ0o7OztrQ0FFWTtBQUNULGFBQU8sS0FBS3hHLE9BQUwsQ0FBYXNHLFFBQWIsSUFBeUJ2QixTQUF6QixHQUNMLEtBQUsvRSxPQUFMLENBQWFzRyxRQURSLEdBQ21CLEtBQUtaLGVBRC9CO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0EsSUFBTWdCLE1BQU0sNnNEQUFaIiwiZmlsZSI6ImltcHJlc2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImltcHJlc2lcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW1wcmVzaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbXByZXNpXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqIVxuICogQGZpbGVPdmVydmlldyBBIEphdmFzY3JpcHQgbGlicmFyeSBmb3IgY3JlYXRpbmcgYmVhdXRpZnVsIHNsaWRlIHByZXNlbnRhdGlvbnMuXG4gKiBAdmVyc2lvbiAwLjAuM1xuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOSBSaWNoYXJkIExvdmVsbCBhbmQgY29udHJpYnV0b3JzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vbGliL2JhY2tncm91bmQnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9saWIvaGVhZGluZyc7XG5pbXBvcnQgQmx1cmIgZnJvbSAnLi9saWIvYmx1cmInO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vbGliL2dyb3VwJztcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9saWIvYWN0aW9uJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJztcblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgICAoZ2xvYmFsLkltcHJlc2kgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cblxuICAgdmFyIEltcHJlc2kgPSBmdW5jdGlvbiAoKSB7XG4gIGNsYXNzIEltcHJlc2kge1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkSWQsIGRhdGEsIG9wdGlvbnMgPSBbXSkge1xuICAgICAgaWYgKCFib2FyZElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSUQgZm9yIGJvYXJkIGlzIHJlcXVpcmVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBib2FyZElkKTtcbiAgICAgIGlmICghdGhpcy5ib2FyZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEhUTUwgZWxlbWVudCB3aXRoIHRoZSBJRDogJyArIGJvYXJkSWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5ncm91cHMgPSBbXTtcbiAgICAgIHRoaXMuc2NyZWVuSW5kZXggPSAwO1xuICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICB0aGlzLmFkZFJlc291cmNlcyhkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLmdldFN0eWxlcygpO1xuICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuZGlzcGxheUxvYWRlcigpO1xuICAgIH1cblxuICAgIHNldExpc3RlbmVycygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGRvY3VtZW50LmJvZHkub25rZXl1cCA9IGUgPT4ge1xuICAgICAgICAvL2luY3JlbWVudCBrZXlzOiBzcGFjZSwgZG93biwgcmlnaHQgb3IgZW50ZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGUua2V5Q29kZSA9PT0gMzIgfHxcbiAgICAgICAgICBlLmtleUNvZGUgPT09IDQwIHx8XG4gICAgICAgICAgZS5rZXlDb2RlID09PSAzOSB8fFxuICAgICAgICAgIGUua2V5Q29kZSA9PT0gMTNcbiAgICAgICAgKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuZ3JvdXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHNlbGYubmV4dCgpO1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5JbmRleCsrO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgc2NyZWVuJHt0aGlzLnNjcmVlbkluZGV4fWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vZGVjcmVtZW50IGtleXM6IHVwIG9yIGxlZnRcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgIGlmICh0aGlzLmluZGV4ID4gMCkge1xuICAgICAgICAgICAgc2VsZi5wcmV2aW91cyhzZWxmLmluZGV4ID09PSBzZWxmLmdyb3Vwcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0U3R5bGVzKCkge1xuICAgICAgLy9jb3JlIHN0eWxlc1xuICAgICAgbGV0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gc3R5bGVzO1xuICAgICAgdGhpcy5ib2FyZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcblxuICAgICAgLy9hbmltYXRpb24gc3R5bGVzXG4gICAgICBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBzdHlsZUVsLmlubmVySFRNTCA9XG4gICAgICAgICdAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzMuNy4wL2FuaW1hdGUubWluLmNzc1wiKTsnO1xuICAgICAgdGhpcy5ib2FyZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5TG9hZGVyKCkge1xuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuICAgICAgbGV0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbG9hZGVyLmlubmVySFRNTCA9ICc8ZGl2PjwvZGl2PjxkaXY+PC9kaXY+JztcbiAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdsZHMtcmlwcGxlJyk7XG4gICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGxvYWRlcik7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJhY2tncm91bmQob3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5ldyBCYWNrZ3JvdW5kKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUhlYWRpbmcodGV4dCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5ldyBIZWFkaW5nKHRoaXMsIHRleHQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJsdXJiKHRleHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBuZXcgQmx1cmIodGhpcywgdGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgYWRkQWN0aW9ucyhvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5vdXQpIHtcbiAgICAgICAgdGhpcy5hZGRHcm91cCgnb3V0Jywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5pbikge1xuICAgICAgICB0aGlzLmFkZEdyb3VwKCdpbicsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkR3JvdXAoYWN0aW9uTmFtZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFjdGlvbnMgPSBbXTtcbiAgICAgIG9wdGlvbnNbYWN0aW9uTmFtZV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGFjdGlvbiA9IG5ldyBBY3Rpb24oaXRlbSk7XG4gICAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgfSk7XG4gICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoYWN0aW9uTmFtZSwgYWN0aW9ucyk7XG4gICAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cHNbdGhpcy5pbmRleF07XG4gICAgICBpZiAoZ3JvdXAuYWN0aW9uTmFtZSA9PT0gJ291dCcpIHtcbiAgICAgICAgaWYgKCFncm91cC5hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWN0aW9ucyBwcm92aWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBncm91cC5zdG9wKCk7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JvdXAucnVuKCk7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5ncm91cHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHByZXZpb3VzKGlzTGFzdCkge1xuICAgICAgaWYgKHRoaXMuaW5kZXggIT09IDEpIHtcbiAgICAgICAgaWYgKCFpc0xhc3QpIHtcbiAgICAgICAgICB0aGlzLmRlY3JlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBzW3RoaXMuaW5kZXhdO1xuICAgICAgICBpZiAoZ3JvdXAuYWN0aW9uTmFtZSA9PT0gJ2luJykge1xuICAgICAgICAgIGlmICghZ3JvdXAuYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWN0aW9ucyBwcm92aWRlZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ3JvdXAuc3RvcCgpO1xuICAgICAgICAgIGlmIChpc0xhc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzKHRoaXMuaW5kZXggPT09IHRoaXMuZ3JvdXBzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBncm91cC5ydW4oKTtcbiAgICAgICAgICB0aGlzLnNjcmVlbkluZGV4LS07XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgc2NyZWVuJHt0aGlzLnNjcmVlbkluZGV4fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgIGlmICghdGhpcy5ncm91cHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZ3JvdXBzIG9mIGFjdGlvbnMgaGF2ZSBiZWVuIGFkZGVkIHlldC4nKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgICAgICAvLyBGcmFnbWVudCBleGlzdHNcbiAgICAgICAgbGV0IGZyYWcgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgaWYgKGZyYWcubWF0Y2goJ14jc2NyZWVuWzAtOV0rJCcpKSB7XG4gICAgICAgICAgdmFyIG1hdGNoZXMgPSBmcmFnLm1hdGNoKCdbMC05XSsnKTtcbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5JbmRleCA9IHBhcnNlSW50KG1hdGNoZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zY3JlZW5JbmRleCA+IDAgJiYgdGhpcy5zY3JlZW5JbmRleCA8PSB0aGlzLmdyb3Vwcy5sZW5ndGggLyAyICsgMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjcmVlbkluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuSW5kZXggPSAxO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnc2NyZWVuMSc7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHRoaXMuc2NyZWVuSW5kZXgrKztcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnc2NyZWVuMSc7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICBpZiAodGhpcy5pbmRleCAhPT0gdGhpcy5ncm91cHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KCkge1xuICAgICAgaWYgKHRoaXMuaW5kZXggPiAwKSB7XG4gICAgICAgIHRoaXMuaW5kZXgtLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRSZXNvdXJjZXMoZGF0YSkge1xuICAgICAgaWYgKCFkYXRhLnJlc291cmNlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlc291cmNlcyBleGlzdCBpbiB0aGUgZGF0YS4nKTtcbiAgICAgIH1cbiAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiB7XG4gICAgICAgIGlmICghcmVzb3VyY2UudHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWxsIGl0ZW1zIG11c3QgaGF2ZSBhIHR5cGUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNvdXJjZS5pZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWxsIGl0ZW1zIG11c3QgaGF2ZSBhbiBpZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc291cmNlLm9wdGlvbnMpIHtcbiAgICAgICAgICByZXNvdXJjZS5vcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmVzb3VyY2Uub3B0aW9ucy5pZCA9IHJlc291cmNlLmlkO1xuICAgICAgICBzd2l0Y2ggKHJlc291cmNlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdiYWNrZ3JvdW5kJzpcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVCYWNrZ3JvdW5kKHJlc291cmNlLm9wdGlvbnMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2hlYWRpbmcnOlxuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUhlYWRpbmcocmVzb3VyY2UudGV4dCwgcmVzb3VyY2Uub3B0aW9ucykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYmx1cmInOlxuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUJsdXJiKHJlc291cmNlLnRleHQsIHJlc291cmNlLm9wdGlvbnMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbGV0IGFjdGlvbnMgPSBkYXRhLmFjdGlvbnM7XG4gICAgICBhY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFjdGlvbikge1xuICAgICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgbGV0IGFjdGlvbnNPYmogPSB7fTtcbiAgICAgICAgICAgIGFjdGlvbnNPYmpba2V5XSA9IFtdO1xuICAgICAgICAgICAgbGV0IGl0ZW1JZHMgPSBhY3Rpb25ba2V5XTtcbiAgICAgICAgICAgIGl0ZW1JZHMuZm9yRWFjaChpdGVtSWQgPT4ge1xuICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zT2JqW2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZEFjdGlvbnMoYWN0aW9uc09iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZ2xvYmFsLkltcHJlc2kgPSBJbXByZXNpO1xuICByZXR1cm4gSW1wcmVzaTtcbiAgIH0oKTtcblxuICAgcmV0dXJuIEltcHJlc2k7XG5cbn0pKSk7IiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVJdGVtIGV4dGVuZHMgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltcHJlc2ksIG9wdGlvbnMpIHtcbiAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMueCkge1xuICAgICAgdGhpcy5vcHRpb25zLnggPSBcIjEwXCI7IC8vZGVmYXVsdFxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMueSkge1xuICAgICAgdGhpcy5vcHRpb25zLnkgPSBcIjEwXCI7IC8vZGVmYXVsdFxuICAgIH1cbiAgIFxuICB9XG5cbiAgYWRkRWxlbWVudChlbGVtZW50TmFtZSkge1xuICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt0aGlzLm9wdGlvbnMueH12d2A7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMub3B0aW9ucy55fXZoYDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgdGhpcy5kZWZhdWxcbiAgICAgIHRoaXMuaW5BbmltYXRpb25OYW1lID1cbiAgICAgICAgdGhpcy5pdGVtLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lICE9IHVuZGVmaW5lZFxuICAgICAgICAgID8gaXRlbS5vcHRpb25zLmluQW5pbWF0aW9uTmFtZVxuICAgICAgICAgIDogXCJmYWRlSW5cIjtcbiAgICAgIHRoaXMub3V0QW5pbWF0aW9uTmFtZSA9XG4gICAgICAgIGl0ZW0ub3B0aW9ucy5vdXRBbmltYXRpb25OYW1lICE9IHVuZGVmaW5lZFxuICAgICAgICAgID8gaXRlbS5vcHRpb25zLm91dEFuaW1hdGlvbk5hbWVcbiAgICAgICAgICA6IFwiZmFkZU91dFwiO1xuICAgIH1cbiAgXG4gICAgcnVuKCkge1xuICAgICAgdGhpcy5pdGVtLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3V0QW5pbWF0aW9uTmFtZSk7XG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZWRcIiwgdGhpcy5pbkFuaW1hdGlvbk5hbWUpO1xuICAgIH1cbiAgXG4gICAgc3RvcCgpIHtcbiAgICAgIHRoaXMuaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlZFwiLCB0aGlzLmluQW5pbWF0aW9uTmFtZSk7XG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3V0QW5pbWF0aW9uTmFtZSk7XG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihpbXByZXNpLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcbiAgICB0aGlzLmFkZEVsZW1lbnQoXCJkaXZcIik7XG4gIH1cblxuICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XG4gICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIsIFwiaXRlbVwiKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmltYWdlVXJsKSB7XG4gICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5vcHRpb25zLmltYWdlVXJsO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFRleHRJdGVtIGZyb20gXCIuL3RleHQtaXRlbS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmx1cmIgZXh0ZW5kcyBUZXh0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltcHJlc2ksIHRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy56SW5kZXggPSAyO1xuICAgIHRoaXMuZGVmYXVsdEZvbnRTaXplID0gMS41O1xuICAgIHRoaXMuYWRkRWxlbWVudChcImRpdlwiKTtcbiAgfVxuXG4gIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcbiAgICBzdXBlci5hZGRFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSBgJHt0aGlzLm9wdGlvbnMud2lkdGh9dndgO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmx1cmJcIiwgXCJpdGVtXCIpO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleDtcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgIHN1cGVyLnNldENoaWxkT3B0aW9ucyhwKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25OYW1lLCBhY3Rpb25zKSB7XG4gICAgICB0aGlzLmFjdGlvbk5hbWUgPSBhY3Rpb25OYW1lO1xuICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG4gIFxuICAgIHJ1bigpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgIGFjdGlvbi5ydW4oKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG4gICAgfVxuICBcbiAgICBzdG9wKCkge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgYWN0aW9uLnN0b3AoKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gICIsImltcG9ydCBUZXh0SXRlbSBmcm9tIFwiLi90ZXh0LWl0ZW0uanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmcgZXh0ZW5kcyBUZXh0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltcHJlc2ksIHRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy56SW5kZXggPSAxO1xuICAgIHRoaXMuZGVmYXVsdEZvbnRTaXplID0gMjtcbiAgICB0aGlzLmFkZEVsZW1lbnQoXCJzcGFuXCIpO1xuICB9XG5cbiAgYWRkRWxlbWVudChlbGVtZW50TmFtZSkge1xuICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiLCBcIml0ZW1cIik7XG4gICAgdmFyIGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleDtcbiAgICBoMS5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG4gICAgc3VwZXIuc2V0Q2hpbGRPcHRpb25zKGgxKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaDEpO1xuICB9XG5cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaW1wcmVzaSwgb3B0aW9ucykge1xuICAgICAgdGhpcy5ib2FyZCA9IGltcHJlc2kuYm9hcmQ7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIC8vcmVzb3VyY2VzIGNyZWF0ZWQgdGhyb3VnaCBKU09OIGRhdGEgcHJvdmlkZSBhbiBJRCB0aHJvdWdoIHRoZSBvcHRpb25zXG4gICAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICAgIHRoaXMuYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IEFic29sdXRlSXRlbSBmcm9tIFwiLi9hYnNvbHV0ZS1pdGVtXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SXRlbSBleHRlbmRzIEFic29sdXRlSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaW1wcmVzaSwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0SW5BbmltYXRpb25OYW1lID0gXCJzbGlkZUluVXBcIjtcblxuICAgIH1cblxuICAgIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcbiAgICAgICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IGAke3RoaXMub3B0aW9ucy53aWR0aH12d2A7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lID0gdGhpcy5vcHRpb25zLmluQW5pbWF0aW9uTmFtZSAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmluQW5pbWF0aW9uTmFtZSA6IHRoaXMuZGVmYXVsdEluQW5pbWF0aW9uTmFtZTtcbiAgICB9XG5cbiAgICBzZXRDaGlsZE9wdGlvbnMoY2hpbGQpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMub3B0aW9ucy5mb250U2l6ZSkge1xuICAgICAgICAgICAgY2hpbGQuc3R5bGUuZm9udFNpemUgPSBgJHt0aGlzLmdldEZvbnRTaXplKCl9dndgO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9udENvbG9yKSB7XG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5jb2xvciA9IHRoaXMub3B0aW9ucy5mb250Q29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRGb250U2l6ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvbnRTaXplICE9IHVuZGVmaW5lZFxuICAgICAgICA/IHRoaXMub3B0aW9ucy5mb250U2l6ZSA6IHRoaXMuZGVmYXVsdEZvbnRTaXplO1xuICAgICAgfVxufSIsImV4cG9ydCBjb25zdCBzdHlsZXMgPSBcbmBcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5oMSxcbnAge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pdGVtIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uYW5pbWF0ZWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJhY2tncm91bmQgaW1nIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRpbmcsXG4uYmx1cmIsXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cblxuLmhlYWRpbmcsXG4uYmx1cmIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uaGVhZGluZyBoMSB7XG4gIGZvbnQtc2l6ZTogMi40ZW07XG59XG5cbi5ibHVyYiBwIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLmhlYWRpbmcgaDEsXG4uYmx1cmIgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmY7XG59XG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubGRzLXJpcHBsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQwdmg7XG4gIGxlZnQ6IGNhbGMoNTB2dyAtIDMycHgpO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLmxkcy1yaXBwbGUgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xufVxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xuICAwJSB7XG4gICAgdG9wOiAyOHB4O1xuICAgIGxlZnQ6IDI4cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgd2lkdGg6IDU4cHg7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkaW5nLFxuICAuYmx1cmIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuaGVhZGluZyBoMSB7XG4gICAgZm9udC1zaXplOiA1dnc7XG4gIH1cblxuICAuYmx1cmIgcCB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbn1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==