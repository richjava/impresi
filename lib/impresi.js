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
var styles = "\nbody {\n  margin: 0;\n  text-align: center;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nh1,\np {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.item {\n  visibility: hidden;\n}\n\n.animated {\n  visibility: visible;\n}\n\n.hide {\n  display: none;\n}\n\n.background {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n}\n\n.background img {\n  flex-shrink: 0;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.heading,\n.blurb,\n.background,\n.image {\n  position: absolute;\n  background-color: #333;\n}\n\n.heading,\n.blurb {\n  padding: 15px;\n}\n\n.heading h1 {\n  font-size: 2.4em;\n}\n\n.blurb p {\n  font-size: 1.4em;\n}\n\n.heading h1,\n.blurb p {\n  margin: 0;\n  color: #fff;\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  background-color: #333;\n  width: 100vw;\n  height: 100vh;\n}\n\n.lds-ripple {\n  display: inline-block;\n  position: fixed;\n  top: 40vh;\n  left: calc(50vw - 32px);\n  width: 64px;\n  height: 64px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n}\n\n\n@media only screen and (max-width: 600px) {\n  .heading:not(.hide),\n  .blurb:not(.hide),\n  .image:not(.hide){\n    position: static;\n    display: block;\n  }\n\n  .image:not(.hide) {\n    width: 100vw;\n    max-width: 100vw !important;\n  }\n\n  .heading:not(.hide) h1 {\n    font-size: 5vw;\n  }\n\n  .blurb p {\n    font-size: 4vw;\n  }\n}\n";
exports.styles = styles;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltcHJlc2kvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYWJzb2x1dGUtaXRlbS5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ibHVyYi5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ncm91cC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9oZWFkaW5nLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvbGliL2ltYWdlLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvbGliL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvdGV4dC1pdGVtLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiSW1wcmVzaSIsImJvYXJkSWQiLCJkYXRhIiwib3B0aW9ucyIsIkVycm9yIiwiYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cHMiLCJzY3JlZW5JbmRleCIsImluZGV4IiwiYWRkUmVzb3VyY2VzIiwiaW5pdCIsImdldFN0eWxlcyIsInNldExpc3RlbmVycyIsImRpc3BsYXlMb2FkZXIiLCJzZWxmIiwiYm9keSIsIm9ua2V5dXAiLCJlIiwia2V5Q29kZSIsImxlbmd0aCIsIm5leHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJwcmV2aW91cyIsInN0eWxlRWwiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwib3ZlcmxheSIsImNsYXNzTGlzdCIsImFkZCIsImxvYWRlciIsInRleHQiLCJzcmMiLCJvdXQiLCJhZGRHcm91cCIsImluIiwiYWN0aW9uTmFtZSIsImFjdGlvbnMiLCJmb3JFYWNoIiwiaXRlbSIsImFjdGlvbiIsInB1c2giLCJncm91cCIsInN0b3AiLCJpbmNyZW1lbnQiLCJydW4iLCJpc0xhc3QiLCJkZWNyZW1lbnQiLCJmcmFnIiwibWF0Y2giLCJtYXRjaGVzIiwicGFyc2VJbnQiLCJpIiwicmVzb3VyY2VzIiwiaXRlbXMiLCJyZXNvdXJjZSIsImlkIiwiY3JlYXRlQmFja2dyb3VuZCIsImNyZWF0ZUhlYWRpbmciLCJjcmVhdGVCbHVyYiIsImNyZWF0ZUltYWdlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhY3Rpb25zT2JqIiwiaXRlbUlkcyIsIml0ZW1JZCIsImFkZEFjdGlvbnMiLCJBYnNvbHV0ZUl0ZW0iLCJpbXByZXNpIiwieCIsInkiLCJlbGVtZW50TmFtZSIsImVsZW1lbnQiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJBY3Rpb24iLCJpbkFuaW1hdGlvbk5hbWUiLCJ1bmRlZmluZWQiLCJvdXRBbmltYXRpb25OYW1lIiwicmVtb3ZlIiwiQmFja2dyb3VuZCIsImFkZEVsZW1lbnQiLCJpbWFnZVVybCIsImltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiQmx1cmIiLCJ6SW5kZXgiLCJkZWZhdWx0Rm9udFNpemUiLCJtYXhXaWR0aCIsIndpZHRoIiwicCIsIkdyb3VwIiwiSGVhZGluZyIsImgxIiwiSW1hZ2UiLCJvdmVyZmxvdyIsIkl0ZW0iLCJkZWZhdWx0SW5BbmltYXRpb25OYW1lIiwiVGV4dEl0ZW0iLCJjaGlsZCIsImZvbnRTaXplIiwiZ2V0Rm9udFNpemUiLCJmb250Q29sb3IiLCJjb2xvciIsInN0eWxlcyJdLCJtYXBwaW5n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LEdBQXFDLEtBQUt2RixPQUFMLENBQWF1RixlQUFsRDtBQUNIO0FBRUo7OztvQ0FFZWUsSyxFQUFPO0FBQ25CQSxXQUFLLENBQUMzQixLQUFOLENBQVk0QixRQUFaLGFBQTBCLEtBQUtDLFdBQUwsRUFBMUI7O0FBQ0EsVUFBSSxLQUFLeEcsT0FBTCxDQUFheUcsU0FBakIsRUFBNEI7QUFDeEJILGFBQUssQ0FBQzNCLEtBQU4sQ0FBWStCLEtBQVosR0FBb0IsS0FBSzFHLE9BQUwsQ0FBYXlHLFNBQWpDO0FBQ0g7QUFDSjs7O2tDQUVhO0FBQ1YsYUFBTyxLQUFLekcsT0FBTCxDQUFhdUcsUUFBYixJQUF5QnZCLFNBQXpCLEdBQ0QsS0FBS2hGLE9BQUwsQ0FBYXVHLFFBRFosR0FDdUIsS0FBS2IsZUFEbkM7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRSxJQUFNaUIsTUFBTSwrMURBQVoiLCJmaWxlIjoiaW1wcmVzaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiaW1wcmVzaVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpbXByZXNpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImltcHJlc2lcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKiohXG4gKiBAZmlsZU92ZXJ2aWV3IEEgSmF2YXNjcmlwdCBsaWJyYXJ5IGZvciBjcmVhdGluZyBiZWF1dGlmdWwgc2xpZGUgcHJlc2VudGF0aW9ucy5cbiAqIEB2ZXJzaW9uIDAuMC4zXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE5IFJpY2hhcmQgTG92ZWxsIGFuZCBjb250cmlidXRvcnNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9saWIvYmFja2dyb3VuZCc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICcuL2xpYi9oZWFkaW5nJztcbmltcG9ydCBCbHVyYiBmcm9tICcuL2xpYi9ibHVyYic7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9saWIvZ3JvdXAnO1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2xpYi9hY3Rpb24nO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vbGliL2ltYWdlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJztcblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgICAoZ2xvYmFsLkltcHJlc2kgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cblxuICAgdmFyIEltcHJlc2kgPSBmdW5jdGlvbiAoKSB7XG4gIGNsYXNzIEltcHJlc2kge1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkSWQsIGRhdGEsIG9wdGlvbnMgPSBbXSkge1xuICAgICAgaWYgKCFib2FyZElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSUQgZm9yIGJvYXJkIGlzIHJlcXVpcmVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBib2FyZElkKTtcbiAgICAgIGlmICghdGhpcy5ib2FyZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEhUTUwgZWxlbWVudCB3aXRoIHRoZSBJRDogJyArIGJvYXJkSWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5ncm91cHMgPSBbXTtcbiAgICAgIHRoaXMuc2NyZWVuSW5kZXggPSAwO1xuICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICB0aGlzLmFkZFJlc291cmNlcyhkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLmdldFN0eWxlcygpO1xuICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuZGlzcGxheUxvYWRlcigpO1xuICAgIH1cblxuICAgIHNldExpc3RlbmVycygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGRvY3VtZW50LmJvZHkub25rZXl1cCA9IGUgPT4ge1xuICAgICAgICAvL2luY3JlbWVudCBrZXlzOiBzcGFjZSwgZG93biwgcmlnaHQgb3IgZW50ZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGUua2V5Q29kZSA9PT0gMzIgfHxcbiAgICAgICAgICBlLmtleUNvZGUgPT09IDQwIHx8XG4gICAgICAgICAgZS5rZXlDb2RlID09PSAzOSB8fFxuICAgICAgICAgIGUua2V5Q29kZSA9PT0gMTNcbiAgICAgICAgKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuZ3JvdXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHNlbGYubmV4dCgpO1xuICAgICAgICAgICAgdGhpcy5zY3JlZW5JbmRleCsrO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgc2NyZWVuJHt0aGlzLnNjcmVlbkluZGV4fWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vZGVjcmVtZW50IGtleXM6IHVwIG9yIGxlZnRcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgIGlmICh0aGlzLmluZGV4ID4gMCkge1xuICAgICAgICAgICAgc2VsZi5wcmV2aW91cyhzZWxmLmluZGV4ID09PSBzZWxmLmdyb3Vwcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0U3R5bGVzKCkge1xuICAgICAgLy9jb3JlIHN0eWxlc1xuICAgICAgbGV0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gc3R5bGVzO1xuICAgICAgdGhpcy5ib2FyZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcblxuICAgICAgLy9hbmltYXRpb24gc3R5bGVzXG4gICAgICBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBzdHlsZUVsLmlubmVySFRNTCA9XG4gICAgICAgICdAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzMuNy4wL2FuaW1hdGUubWluLmNzc1wiKTsnO1xuICAgICAgdGhpcy5ib2FyZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5TG9hZGVyKCkge1xuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuICAgICAgbGV0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbG9hZGVyLmlubmVySFRNTCA9ICc8ZGl2PjwvZGl2PjxkaXY+PC9kaXY+JztcbiAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdsZHMtcmlwcGxlJyk7XG4gICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGxvYWRlcik7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJhY2tncm91bmQob3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5ldyBCYWNrZ3JvdW5kKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUhlYWRpbmcodGV4dCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5ldyBIZWFkaW5nKHRoaXMsIHRleHQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJsdXJiKHRleHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBuZXcgQmx1cmIodGhpcywgdGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNyZWF0ZUltYWdlKHNyYywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5ldyBJbWFnZSh0aGlzLCBzcmMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGFkZEFjdGlvbnMob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMub3V0KSB7XG4gICAgICAgIHRoaXMuYWRkR3JvdXAoJ291dCcsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuaW4pIHtcbiAgICAgICAgdGhpcy5hZGRHcm91cCgnaW4nLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZEdyb3VwKGFjdGlvbk5hbWUsIG9wdGlvbnMpIHtcbiAgICAgIGxldCBhY3Rpb25zID0gW107XG4gICAgICBvcHRpb25zW2FjdGlvbk5hbWVdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGxldCBhY3Rpb24gPSBuZXcgQWN0aW9uKGl0ZW0pO1xuICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKGFjdGlvbk5hbWUsIGFjdGlvbnMpO1xuICAgICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBzW3RoaXMuaW5kZXhdO1xuICAgICAgaWYgKGdyb3VwLmFjdGlvbk5hbWUgPT09ICdvdXQnKSB7XG4gICAgICAgIGlmICghZ3JvdXAuYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFjdGlvbnMgcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXAuc3RvcCgpO1xuICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyb3VwLnJ1bigpO1xuICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuZ3JvdXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBwcmV2aW91cyhpc0xhc3QpIHtcbiAgICAgIGlmICh0aGlzLmluZGV4ICE9PSAxKSB7XG4gICAgICAgIGlmICghaXNMYXN0KSB7XG4gICAgICAgICAgdGhpcy5kZWNyZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3Vwc1t0aGlzLmluZGV4XTtcbiAgICAgICAgaWYgKGdyb3VwLmFjdGlvbk5hbWUgPT09ICdpbicpIHtcbiAgICAgICAgICBpZiAoIWdyb3VwLmFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGFjdGlvbnMgcHJvdmlkZWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdyb3VwLnN0b3AoKTtcbiAgICAgICAgICBpZiAoaXNMYXN0KSB7XG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91cyh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91cyh0aGlzLmluZGV4ID09PSB0aGlzLmdyb3Vwcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ3JvdXAucnVuKCk7XG4gICAgICAgICAgdGhpcy5zY3JlZW5JbmRleC0tO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYHNjcmVlbiR7dGhpcy5zY3JlZW5JbmRleH1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICBpZiAoIXRoaXMuZ3JvdXBzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGdyb3VwcyBvZiBhY3Rpb25zIGhhdmUgYmVlbiBhZGRlZCB5ZXQuJyk7XG4gICAgICB9XG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgLy8gRnJhZ21lbnQgZXhpc3RzXG4gICAgICAgIGxldCBmcmFnID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgIGlmIChmcmFnLm1hdGNoKCdeI3NjcmVlblswLTldKyQnKSkge1xuICAgICAgICAgIHZhciBtYXRjaGVzID0gZnJhZy5tYXRjaCgnWzAtOV0rJyk7XG4gICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuSW5kZXggPSBwYXJzZUludChtYXRjaGVzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc2NyZWVuSW5kZXggPiAwICYmIHRoaXMuc2NyZWVuSW5kZXggPD0gdGhpcy5ncm91cHMubGVuZ3RoIC8gMiArIDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zY3JlZW5JbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcmVlbkluZGV4ID0gMTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ3NjcmVlbjEnO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB0aGlzLnNjcmVlbkluZGV4Kys7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ3NjcmVlbjEnO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50KCkge1xuICAgICAgaWYgKHRoaXMuaW5kZXggIT09IHRoaXMuZ3JvdXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRlY3JlbWVudCgpIHtcbiAgICAgIGlmICh0aGlzLmluZGV4ID4gMCkge1xuICAgICAgICB0aGlzLmluZGV4LS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkUmVzb3VyY2VzKGRhdGEpIHtcbiAgICAgIGlmICghZGF0YS5yZXNvdXJjZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyByZXNvdXJjZXMgZXhpc3QgaW4gdGhlIGRhdGEuJyk7XG4gICAgICB9XG4gICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgIGRhdGEucmVzb3VyY2VzLmZvckVhY2gocmVzb3VyY2UgPT4ge1xuICAgICAgICBpZiAoIXJlc291cmNlLnR5cGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FsbCBpdGVtcyBtdXN0IGhhdmUgYSB0eXBlLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzb3VyY2UuaWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FsbCBpdGVtcyBtdXN0IGhhdmUgYW4gaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNvdXJjZS5vcHRpb25zKSB7XG4gICAgICAgICAgcmVzb3VyY2Uub3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJlc291cmNlLm9wdGlvbnMuaWQgPSByZXNvdXJjZS5pZDtcbiAgICAgICAgc3dpdGNoIChyZXNvdXJjZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYmFja2dyb3VuZCc6XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlQmFja2dyb3VuZChyZXNvdXJjZS5vcHRpb25zKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdoZWFkaW5nJzpcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVIZWFkaW5nKHJlc291cmNlLnRleHQsIHJlc291cmNlLm9wdGlvbnMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JsdXJiJzpcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVCbHVyYihyZXNvdXJjZS50ZXh0LCByZXNvdXJjZS5vcHRpb25zKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlSW1hZ2UocmVzb3VyY2Uuc3JjLCByZXNvdXJjZS5vcHRpb25zKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBhY3Rpb25zID0gZGF0YS5hY3Rpb25zO1xuICAgICAgYWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhY3Rpb24pIHtcbiAgICAgICAgICBpZiAoYWN0aW9uLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb25zT2JqID0ge307XG4gICAgICAgICAgICBhY3Rpb25zT2JqW2tleV0gPSBbXTtcbiAgICAgICAgICAgIGxldCBpdGVtSWRzID0gYWN0aW9uW2tleV07XG4gICAgICAgICAgICBpdGVtSWRzLmZvckVhY2goaXRlbUlkID0+IHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9uc09ialtrZXldLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnNPYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdsb2JhbC5JbXByZXNpID0gSW1wcmVzaTtcbiAgcmV0dXJuIEltcHJlc2k7XG4gICB9KCk7XG5cbiAgIHJldHVybiBJbXByZXNpO1xuXG59KSkpOyIsImltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlSXRlbSBleHRlbmRzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihpbXByZXNpLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoaW1wcmVzaSwgb3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLngpIHtcbiAgICAgIHRoaXMub3B0aW9ucy54ID0gXCIxMFwiOyAvL2RlZmF1bHRcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLnkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy55ID0gXCIxMFwiOyAvL2RlZmF1bHRcbiAgICB9XG4gICBcbiAgfVxuXG4gIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcbiAgICBzdXBlci5hZGRFbGVtZW50KGVsZW1lbnROYW1lKVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5vcHRpb25zLnh9dndgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHt0aGlzLm9wdGlvbnMueX12aGA7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoaXRlbSkge1xuICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgIHRoaXMuaW5BbmltYXRpb25OYW1lID1cbiAgICAgICAgdGhpcy5pdGVtLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lICE9IHVuZGVmaW5lZFxuICAgICAgICAgID8gaXRlbS5vcHRpb25zLmluQW5pbWF0aW9uTmFtZVxuICAgICAgICAgIDogXCJmYWRlSW5cIjtcbiAgICAgIHRoaXMub3V0QW5pbWF0aW9uTmFtZSA9XG4gICAgICAgIGl0ZW0ub3B0aW9ucy5vdXRBbmltYXRpb25OYW1lICE9IHVuZGVmaW5lZFxuICAgICAgICAgID8gaXRlbS5vcHRpb25zLm91dEFuaW1hdGlvbk5hbWVcbiAgICAgICAgICA6IFwiZmFkZU91dFwiO1xuICAgIH1cbiAgXG4gICAgcnVuKCkge1xuICAgICAgdGhpcy5pdGVtLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3V0QW5pbWF0aW9uTmFtZSk7XG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZWRcIiwgdGhpcy5pbkFuaW1hdGlvbk5hbWUpO1xuICAgIH1cbiAgXG4gICAgc3RvcCgpIHtcbiAgICAgIHRoaXMuaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlZFwiLCB0aGlzLmluQW5pbWF0aW9uTmFtZSk7XG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3V0QW5pbWF0aW9uTmFtZSk7XG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihpbXByZXNpLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcbiAgICBzdXBlci5kZWZhdWx0SW5BbmltYXRpb25OYW1lID0gXCJmYWRlSW5cIjtcbiAgICB0aGlzLmFkZEVsZW1lbnQoXCJkaXZcIik7XG4gIH1cblxuICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XG4gICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIsIFwiaXRlbVwiKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmltYWdlVXJsKSB7XG4gICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5vcHRpb25zLmltYWdlVXJsO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFRleHRJdGVtIGZyb20gXCIuL3RleHQtaXRlbS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmx1cmIgZXh0ZW5kcyBUZXh0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltcHJlc2ksIHRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy56SW5kZXggPSAyO1xuICAgIHRoaXMuZGVmYXVsdEZvbnRTaXplID0gMS41O1xuICAgIHRoaXMuYWRkRWxlbWVudChcImRpdlwiKTtcbiAgfVxuXG4gIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcbiAgICBzdXBlci5hZGRFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSBgJHt0aGlzLm9wdGlvbnMud2lkdGh9dndgO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmx1cmJcIiwgXCJpdGVtXCIpO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleDtcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgIHN1cGVyLnNldENoaWxkT3B0aW9ucyhwKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25OYW1lLCBhY3Rpb25zKSB7XG4gICAgICB0aGlzLmFjdGlvbk5hbWUgPSBhY3Rpb25OYW1lO1xuICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG4gIFxuICAgIHJ1bigpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgIGFjdGlvbi5ydW4oKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG4gICAgfVxuICBcbiAgICBzdG9wKCkge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgYWN0aW9uLnN0b3AoKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gICIsImltcG9ydCBUZXh0SXRlbSBmcm9tIFwiLi90ZXh0LWl0ZW0uanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmcgZXh0ZW5kcyBUZXh0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltcHJlc2ksIHRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy56SW5kZXggPSAxO1xuICAgIHRoaXMuZGVmYXVsdEZvbnRTaXplID0gMjtcbiAgICB0aGlzLmFkZEVsZW1lbnQoXCJkaXZcIik7XG4gIH1cblxuICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XG4gICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIsIFwiaXRlbVwiKTtcbiAgICB2YXIgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMuekluZGV4O1xuICAgIGgxLmlubmVySFRNTCA9IHRoaXMudGV4dDtcbiAgICBzdXBlci5zZXRDaGlsZE9wdGlvbnMoaDEpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChoMSk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgQWJzb2x1dGVJdGVtIGZyb20gXCIuL2Fic29sdXRlLWl0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgQWJzb2x1dGVJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpbXByZXNpLCBzcmMsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoaW1wcmVzaSwgb3B0aW9ucyk7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRJbkFuaW1hdGlvbk5hbWUgPSBcInNsaWRlSW5VcFwiO1xuICAgICAgICB0aGlzLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy56SW5kZXggPSAxO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnQoJ2ltZycpO1xuICAgIH1cblxuICAgIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcbiAgICAgICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IGAke3RoaXMub3B0aW9ucy53aWR0aH12d2A7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgPSB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lICE9IHVuZGVmaW5lZFxuICAgICAgICAvLyAgICAgPyB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lIDogdGhpcy5kZWZhdWx0SW5BbmltYXRpb25OYW1lO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIiwgXCJpdGVtXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy56SW5kZXg7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zcmMgPSB0aGlzLnNyYztcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaW1wcmVzaSwgb3B0aW9ucykge1xuICAgICAgdGhpcy5ib2FyZCA9IGltcHJlc2kuYm9hcmQ7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5lbGVtZW50O1xuICAgICAgc3VwZXIuZGVmYXVsdEluQW5pbWF0aW9uTmFtZTtcbiAgICAgIC8vcmVzb3VyY2VzIGNyZWF0ZWQgdGhyb3VnaCBKU09OIGRhdGEgcHJvdmlkZSBhbiBJRCB0aHJvdWdoIHRoZSBvcHRpb25zXG4gICAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcbiAgICAgIHRoaXMuYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgIHRoaXMub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgPSB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lICE9IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lIDogdGhpcy5kZWZhdWx0SW5BbmltYXRpb25OYW1lO1xuICAgIH1cbiAgfVxuICAiLCJpbXBvcnQgQWJzb2x1dGVJdGVtIGZyb20gXCIuL2Fic29sdXRlLWl0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJdGVtIGV4dGVuZHMgQWJzb2x1dGVJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpbXByZXNpLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xuICAgICAgICBzdXBlci5kZWZhdWx0SW5BbmltYXRpb25OYW1lID0gXCJzbGlkZUluVXBcIjtcblxuICAgIH1cblxuICAgIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcbiAgICAgICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IGAke3RoaXMub3B0aW9ucy53aWR0aH12d2A7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRDaGlsZE9wdGlvbnMoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuZm9udFNpemUgPSBgJHt0aGlzLmdldEZvbnRTaXplKCl9dndgO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvbnRDb2xvcikge1xuICAgICAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLm9wdGlvbnMuZm9udENvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9udFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9udFNpemUgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5mb250U2l6ZSA6IHRoaXMuZGVmYXVsdEZvbnRTaXplO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3Qgc3R5bGVzID0gXG5gXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaDEsXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uaXRlbSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmFuaW1hdGVkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5iYWNrZ3JvdW5kIGltZyB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkaW5nLFxuLmJsdXJiLFxuLmJhY2tncm91bmQsXG4uaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbi5oZWFkaW5nLFxuLmJsdXJiIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmhlYWRpbmcgaDEge1xuICBmb250LXNpemU6IDIuNGVtO1xufVxuXG4uYmx1cmIgcCB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi5oZWFkaW5nIGgxLFxuLmJsdXJiIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxkcy1yaXBwbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0MHZoO1xuICBsZWZ0OiBjYWxjKDUwdncgLSAzMnB4KTtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cbi5sZHMtcmlwcGxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcbn1cbi5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcbiAgMCUge1xuICAgIHRvcDogMjhweDtcbiAgICBsZWZ0OiAyOHB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogLTFweDtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHdpZHRoOiA1OHB4O1xuICAgIGhlaWdodDogNThweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGluZzpub3QoLmhpZGUpLFxuICAuYmx1cmI6bm90KC5oaWRlKSxcbiAgLmltYWdlOm5vdCguaGlkZSl7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5pbWFnZTpub3QoLmhpZGUpIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhlYWRpbmc6bm90KC5oaWRlKSBoMSB7XG4gICAgZm9udC1zaXplOiA1dnc7XG4gIH1cblxuICAuYmx1cmIgcCB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbn1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==