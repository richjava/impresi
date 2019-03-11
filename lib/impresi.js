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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9pbXByZXNpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltcHJlc2kvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYWJzb2x1dGUtaXRlbS5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ibHVyYi5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9ncm91cC5qcyIsIndlYnBhY2s6Ly9pbXByZXNpLy4vc3JjL2xpYi9oZWFkaW5nLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvbGliL2ltYWdlLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvbGliL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vaW1wcmVzaS8uL3NyYy9saWIvdGV4dC1pdGVtLmpzIiwid2VicGFjazovL2ltcHJlc2kvLi9zcmMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiSW1wcmVzaSIsImJvYXJkSWQiLCJkYXRhIiwib3B0aW9ucyIsIkVycm9yIiwiYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cHMiLCJzY3JlZW5JbmRleCIsImluZGV4IiwiYWRkUmVzb3VyY2VzIiwiaW5pdCIsImdldFN0eWxlcyIsInNldExpc3RlbmVycyIsImRpc3BsYXlMb2FkZXIiLCJzZWxmIiwiYm9keSIsIm9ua2V5dXAiLCJlIiwia2V5Q29kZSIsImxlbmd0aCIsIm5leHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJwcmV2aW91cyIsInN0eWxlRWwiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwib3ZlcmxheSIsImNsYXNzTGlzdCIsImFkZCIsImxvYWRlciIsInRleHQiLCJzcmMiLCJvdXQiLCJhZGRHcm91cCIsImluIiwiYWN0aW9uTmFtZSIsImFjdGlvbnMiLCJmb3JFYWNoIiwiaXRlbSIsImFjdGlvbiIsInB1c2giLCJncm91cCIsInN0b3AiLCJpbmNyZW1lbnQiLCJydW4iLCJpc0xhc3QiLCJkZWNyZW1lbnQiLCJmcmFnIiwibWF0Y2giLCJtYXRjaGVzIiwicGFyc2VJbnQiLCJpIiwicmVzb3VyY2VzIiwiaXRlbXMiLCJyZXNvdXJjZSIsImlkIiwiY3JlYXRlQmFja2dyb3VuZCIsImNyZWF0ZUhlYWRpbmciLCJjcmVhdGVCbHVyYiIsImNyZWF0ZUltYWdlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhY3Rpb25zT2JqIiwiaXRlbUlkcyIsIml0ZW1JZCIsImFkZEFjdGlvbnMiLCJBYnNvbHV0ZUl0ZW0iLCJpbXByZXNpIiwieCIsInVuZGVmaW5lZCIsInkiLCJlbGVtZW50TmFtZSIsImVsZW1lbnQiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJBY3Rpb24iLCJpbkFuaW1hdGlvbk5hbWUiLCJvdXRBbmltYXRpb25OYW1lIiwicmVtb3ZlIiwiQmFja2dyb3VuZCIsImFkZEVsZW1lbnQiLCJpbWFnZVVybCIsImltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiQmx1cmIiLCJ6SW5kZXgiLCJkZWZhdWx0Rm9udFNpemUiLCJtYXhXaWR0aCIsIndpZHRoIiwicCIsIkdyb3VwIiwiSGVhZGluZyIsImgxIiwiSW1hZ2UiLCJvdmVyZmxvdyIsIkl0ZW0iLCJkZWZhdWx0SW5BbmltYXRpb25OYW1lIiwiVGV4dEl0ZW0iLCJjaGlsZCIsImZvbnRTaXplIiwiZ2V0Rm9udFNpemUiLCJmb250Q29sb3IiLCJjb2xvciIsInN0eWxlcyJdLCJtYXBwaW5n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QUFiLENBQW1CVyxlQUFuQixHQUFxQyxLQUFLdkYsT0FBTCxDQUFhdUYsZUFBbEQ7QUFDSDtBQUVKOzs7b0NBRWVlLEssRUFBTztBQUNuQkEsV0FBSyxDQUFDMUIsS0FBTixDQUFZMkIsUUFBWixhQUEwQixLQUFLQyxXQUFMLEVBQTFCOztBQUNBLFVBQUksS0FBS3hHLE9BQUwsQ0FBYXlHLFNBQWpCLEVBQTRCO0FBQ3hCSCxhQUFLLENBQUMxQixLQUFOLENBQVk4QixLQUFaLEdBQW9CLEtBQUsxRyxPQUFMLENBQWF5RyxTQUFqQztBQUNIO0FBQ0o7OztrQ0FFYTtBQUNWLGFBQU8sS0FBS3pHLE9BQUwsQ0FBYXVHLFFBQWIsSUFBeUIvQixTQUF6QixHQUNELEtBQUt4RSxPQUFMLENBQWF1RyxRQURaLEdBQ3VCLEtBQUtiLGVBRG5DO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkUsSUFBTWlCLE1BQU0seTREQUFaIiwiZmlsZSI6ImltcHJlc2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImltcHJlc2lcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW1wcmVzaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbXByZXNpXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqIVxyXG4gKiBAZmlsZU92ZXJ2aWV3IEEgSmF2YXNjcmlwdCBsaWJyYXJ5IGZvciBjcmVhdGluZyBiZWF1dGlmdWwgc2xpZGUgcHJlc2VudGF0aW9ucy5cclxuICogQHZlcnNpb24gMC4wLjNcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IChjKSAyMDE5IFJpY2hhcmQgTG92ZWxsIGFuZCBjb250cmlidXRvcnNcclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG8gZGVhbFxyXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuICogU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9saWIvYmFja2dyb3VuZCc7XHJcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4vbGliL2hlYWRpbmcnO1xyXG5pbXBvcnQgQmx1cmIgZnJvbSAnLi9saWIvYmx1cmInO1xyXG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9saWIvZ3JvdXAnO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vbGliL2FjdGlvbic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL2xpYi9pbWFnZSc7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XHJcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxyXG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcclxuICAgICAgKGdsb2JhbC5JbXByZXNpID0gZmFjdG9yeSgpKTtcclxufSh0aGlzLCAoZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICB2YXIgSW1wcmVzaSA9IGZ1bmN0aW9uICgpIHtcclxuICBjbGFzcyBJbXByZXNpIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvYXJkSWQsIGRhdGEsIG9wdGlvbnMgPSBbXSkge1xyXG4gICAgICBpZiAoIWJvYXJkSWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lEIGZvciBib2FyZCBpcyByZXF1aXJlZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvYXJkSWQpO1xyXG4gICAgICBpZiAoIXRoaXMuYm9hcmQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEhUTUwgZWxlbWVudCB3aXRoIHRoZSBJRDogJyArIGJvYXJkSWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICB0aGlzLmdyb3VwcyA9IFtdO1xyXG4gICAgICB0aGlzLnNjcmVlbkluZGV4ID0gMDtcclxuICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hZGRSZXNvdXJjZXMoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgdGhpcy5nZXRTdHlsZXMoKTtcclxuICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5kaXNwbGF5TG9hZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlzdGVuZXJzKCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkub25rZXl1cCA9IGUgPT4ge1xyXG4gICAgICAgIC8vaW5jcmVtZW50IGtleXM6IHNwYWNlLCBkb3duLCByaWdodCBvciBlbnRlclxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGUua2V5Q29kZSA9PT0gMzIgfHxcclxuICAgICAgICAgIGUua2V5Q29kZSA9PT0gNDAgfHxcclxuICAgICAgICAgIGUua2V5Q29kZSA9PT0gMzkgfHxcclxuICAgICAgICAgIGUua2V5Q29kZSA9PT0gMTNcclxuICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuZ3JvdXBzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgc2VsZi5uZXh0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuSW5kZXgrKztcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgc2NyZWVuJHt0aGlzLnNjcmVlbkluZGV4fWA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZGVjcmVtZW50IGtleXM6IHVwIG9yIGxlZnRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pbmRleCA+IDApIHtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aW91cyhzZWxmLmluZGV4ID09PSBzZWxmLmdyb3Vwcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3R5bGVzKCkge1xyXG4gICAgICAvL2NvcmUgc3R5bGVzXHJcbiAgICAgIGxldCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgc3R5bGVFbC50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgc3R5bGVFbC5pbm5lckhUTUwgPSBzdHlsZXM7XHJcbiAgICAgIHRoaXMuYm9hcmQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcblxyXG4gICAgICAvL2FuaW1hdGlvbiBzdHlsZXNcclxuICAgICAgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgIHN0eWxlRWwuaW5uZXJIVE1MID1cclxuICAgICAgICAnQGltcG9ydCB1cmwoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy8zLjcuMC9hbmltYXRlLm1pbi5jc3NcIik7JztcclxuICAgICAgdGhpcy5ib2FyZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5TG9hZGVyKCkge1xyXG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuICAgICAgbGV0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBsb2FkZXIuaW5uZXJIVE1MID0gJzxkaXY+PC9kaXY+PGRpdj48L2Rpdj4nO1xyXG4gICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbGRzLXJpcHBsZScpO1xyXG4gICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGxvYWRlcik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmFja2dyb3VuZChvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBuZXcgQmFja2dyb3VuZCh0aGlzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVIZWFkaW5nKHRleHQsIG9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBIZWFkaW5nKHRoaXMsIHRleHQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJsdXJiKHRleHQsIG9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBCbHVyYih0aGlzLCB0ZXh0LCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUltYWdlKHNyYywgb3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gbmV3IEltYWdlKHRoaXMsIHNyYywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLm91dCkge1xyXG4gICAgICAgIHRoaXMuYWRkR3JvdXAoJ291dCcsIG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb25zLmluKSB7XHJcbiAgICAgICAgdGhpcy5hZGRHcm91cCgnaW4nLCBvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRHcm91cChhY3Rpb25OYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgIGxldCBhY3Rpb25zID0gW107XHJcbiAgICAgIG9wdGlvbnNbYWN0aW9uTmFtZV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBsZXQgYWN0aW9uID0gbmV3IEFjdGlvbihpdGVtKTtcclxuICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBncm91cCA9IG5ldyBHcm91cChhY3Rpb25OYW1lLCBhY3Rpb25zKTtcclxuICAgICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cHNbdGhpcy5pbmRleF07XHJcbiAgICAgIGlmIChncm91cC5hY3Rpb25OYW1lID09PSAnb3V0Jykge1xyXG4gICAgICAgIGlmICghZ3JvdXAuYWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWN0aW9ucyBwcm92aWRlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JvdXAuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ3JvdXAucnVuKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLmdyb3Vwcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cyhpc0xhc3QpIHtcclxuICAgICAgaWYgKHRoaXMuaW5kZXggIT09IDEpIHtcclxuICAgICAgICBpZiAoIWlzTGFzdCkge1xyXG4gICAgICAgICAgdGhpcy5kZWNyZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cHNbdGhpcy5pbmRleF07XHJcbiAgICAgICAgaWYgKGdyb3VwLmFjdGlvbk5hbWUgPT09ICdpbicpIHtcclxuICAgICAgICAgIGlmICghZ3JvdXAuYWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhY3Rpb25zIHByb3ZpZGVkLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZ3JvdXAuc3RvcCgpO1xyXG4gICAgICAgICAgaWYgKGlzTGFzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzKHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91cyh0aGlzLmluZGV4ID09PSB0aGlzLmdyb3Vwcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZ3JvdXAucnVuKCk7XHJcbiAgICAgICAgICB0aGlzLnNjcmVlbkluZGV4LS07XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGBzY3JlZW4ke3RoaXMuc2NyZWVuSW5kZXh9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgaWYgKCF0aGlzLmdyb3Vwcy5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGdyb3VwcyBvZiBhY3Rpb25zIGhhdmUgYmVlbiBhZGRlZCB5ZXQuJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgICAgLy8gRnJhZ21lbnQgZXhpc3RzXHJcbiAgICAgICAgbGV0IGZyYWcgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICBpZiAoZnJhZy5tYXRjaCgnXiNzY3JlZW5bMC05XSskJykpIHtcclxuICAgICAgICAgIHZhciBtYXRjaGVzID0gZnJhZy5tYXRjaCgnWzAtOV0rJyk7XHJcbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkluZGV4ID0gcGFyc2VJbnQobWF0Y2hlc1swXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5zY3JlZW5JbmRleCA+IDAgJiYgdGhpcy5zY3JlZW5JbmRleCA8PSB0aGlzLmdyb3Vwcy5sZW5ndGggLyAyICsgMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NyZWVuSW5kZXg7IGkrKykge1xyXG4gICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkluZGV4ID0gMTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnc2NyZWVuMSc7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5JbmRleCsrO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ3NjcmVlbjEnO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudCgpIHtcclxuICAgICAgaWYgKHRoaXMuaW5kZXggIT09IHRoaXMuZ3JvdXBzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNyZW1lbnQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmluZGV4ID4gMCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXgtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlc291cmNlcyhkYXRhKSB7XHJcbiAgICAgIGlmICghZGF0YS5yZXNvdXJjZXMpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlc291cmNlcyBleGlzdCBpbiB0aGUgZGF0YS4nKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyZXNvdXJjZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNvdXJjZS50eXBlKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FsbCBpdGVtcyBtdXN0IGhhdmUgYSB0eXBlLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc291cmNlLmlkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FsbCBpdGVtcyBtdXN0IGhhdmUgYW4gaWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzb3VyY2Uub3B0aW9ucykge1xyXG4gICAgICAgICAgcmVzb3VyY2Uub3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvdXJjZS5vcHRpb25zLmlkID0gcmVzb3VyY2UuaWQ7XHJcbiAgICAgICAgc3dpdGNoIChyZXNvdXJjZS50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdiYWNrZ3JvdW5kJzpcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUJhY2tncm91bmQocmVzb3VyY2Uub3B0aW9ucykpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2hlYWRpbmcnOlxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlSGVhZGluZyhyZXNvdXJjZS50ZXh0LCByZXNvdXJjZS5vcHRpb25zKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnYmx1cmInOlxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlQmx1cmIocmVzb3VyY2UudGV4dCwgcmVzb3VyY2Uub3B0aW9ucykpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUltYWdlKHJlc291cmNlLnNyYywgcmVzb3VyY2Uub3B0aW9ucykpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgYWN0aW9ucyA9IGRhdGEuYWN0aW9ucztcclxuICAgICAgYWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFjdGlvbikge1xyXG4gICAgICAgICAgaWYgKGFjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb25zT2JqID0ge307XHJcbiAgICAgICAgICAgIGFjdGlvbnNPYmpba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgaXRlbUlkcyA9IGFjdGlvbltrZXldO1xyXG4gICAgICAgICAgICBpdGVtSWRzLmZvckVhY2goaXRlbUlkID0+IHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSBpdGVtSWQpIHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uc09ialtrZXldLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBnbG9iYWwuSW1wcmVzaSA9IEltcHJlc2k7XHJcbiAgcmV0dXJuIEltcHJlc2k7XHJcbiAgIH0oKTtcclxuXHJcbiAgIHJldHVybiBJbXByZXNpO1xyXG5cclxufSkpKTsiLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlSXRlbSBleHRlbmRzIEl0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKGltcHJlc2ksIG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xyXG4gICAgaWYgKG9wdGlvbnMueCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLnggPSAxMDsgLy9kZWZhdWx0XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy55ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMueSA9IDEwOyAvL2RlZmF1bHRcclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG5cclxuICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XHJcbiAgICBzdXBlci5hZGRFbGVtZW50KGVsZW1lbnROYW1lKVxyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt0aGlzLm9wdGlvbnMueH12d2A7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7dGhpcy5vcHRpb25zLnl9dmhgO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoaXRlbSkge1xyXG4gICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgICB0aGlzLmluQW5pbWF0aW9uTmFtZSA9XHJcbiAgICAgICAgdGhpcy5pdGVtLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lICE9IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBpdGVtLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lXHJcbiAgICAgICAgICA6IFwiZmFkZUluXCI7XHJcbiAgICAgIHRoaXMub3V0QW5pbWF0aW9uTmFtZSA9XHJcbiAgICAgICAgaXRlbS5vcHRpb25zLm91dEFuaW1hdGlvbk5hbWUgIT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IGl0ZW0ub3B0aW9ucy5vdXRBbmltYXRpb25OYW1lXHJcbiAgICAgICAgICA6IFwiZmFkZU91dFwiO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcnVuKCkge1xyXG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgdGhpcy5pdGVtLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm91dEFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZWRcIiwgdGhpcy5pbkFuaW1hdGlvbk5hbWUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgdGhpcy5pdGVtLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVkXCIsIHRoaXMuaW5BbmltYXRpb25OYW1lKTtcclxuICAgICAgdGhpcy5pdGVtLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm91dEFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICB0aGlzLml0ZW0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgSXRlbSB7XHJcbiAgY29uc3RydWN0b3IoaW1wcmVzaSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcclxuICAgIHN1cGVyLmRlZmF1bHRJbkFuaW1hdGlvbk5hbWUgPSBcImZhZGVJblwiO1xyXG4gICAgdGhpcy5hZGRFbGVtZW50KFwiZGl2XCIpO1xyXG4gIH1cclxuXHJcbiAgYWRkRWxlbWVudChlbGVtZW50TmFtZSkge1xyXG4gICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRcIiwgXCJpdGVtXCIpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbWFnZVVybCkge1xyXG4gICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpbWFnZS5zcmMgPSB0aGlzLm9wdGlvbnMuaW1hZ2VVcmw7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUZXh0SXRlbSBmcm9tIFwiLi90ZXh0LWl0ZW0uanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmx1cmIgZXh0ZW5kcyBUZXh0SXRlbSB7XHJcbiAgY29uc3RydWN0b3IoaW1wcmVzaSwgdGV4dCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnpJbmRleCA9IDI7XHJcbiAgICB0aGlzLmRlZmF1bHRGb250U2l6ZSA9IDEuNTtcclxuICAgIHRoaXMuYWRkRWxlbWVudChcImRpdlwiKTtcclxuICB9XHJcblxyXG4gIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcclxuICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpO1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heFdpZHRoID0gYCR7dGhpcy5vcHRpb25zLndpZHRofXZ3YDtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmx1cmJcIiwgXCJpdGVtXCIpO1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMuekluZGV4O1xyXG4gICAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG4gICAgc3VwZXIuc2V0Q2hpbGRPcHRpb25zKHApO1xyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHApO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCB7XHJcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25OYW1lLCBhY3Rpb25zKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uTmFtZSA9IGFjdGlvbk5hbWU7XHJcbiAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBydW4oKSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcclxuICAgICAgICBhY3Rpb24ucnVuKCk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIHN0b3AoKSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcclxuICAgICAgICBhY3Rpb24uc3RvcCgpO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsImltcG9ydCBUZXh0SXRlbSBmcm9tIFwiLi90ZXh0LWl0ZW0uanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGluZyBleHRlbmRzIFRleHRJdGVtIHtcclxuICBjb25zdHJ1Y3RvcihpbXByZXNpLCB0ZXh0LCBvcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKGltcHJlc2ksIG9wdGlvbnMpO1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuekluZGV4ID0gMTtcclxuICAgIHRoaXMuZGVmYXVsdEZvbnRTaXplID0gMjtcclxuICAgIHRoaXMuYWRkRWxlbWVudChcImRpdlwiKTtcclxuICB9XHJcblxyXG4gIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcclxuICAgIHN1cGVyLmFkZEVsZW1lbnQoZWxlbWVudE5hbWUpO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIsIFwiaXRlbVwiKTtcclxuICAgIHZhciBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuICAgIGgxLmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuICAgIHN1cGVyLnNldENoaWxkT3B0aW9ucyhoMSk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCBBYnNvbHV0ZUl0ZW0gZnJvbSBcIi4vYWJzb2x1dGUtaXRlbVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEFic29sdXRlSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbXByZXNpLCBzcmMsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihpbXByZXNpLCBvcHRpb25zKTtcclxuICAgICAgICBzdXBlci5kZWZhdWx0SW5BbmltYXRpb25OYW1lID0gXCJzbGlkZUluVXBcIjtcclxuICAgICAgICB0aGlzLnNyYyA9IHNyYztcclxuICAgICAgICB0aGlzLnpJbmRleCA9IDE7XHJcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50KCdpbWcnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XHJcbiAgICAgICAgc3VwZXIuYWRkRWxlbWVudChlbGVtZW50TmFtZSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSBgJHt0aGlzLm9wdGlvbnMud2lkdGh9dndgO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lID0gdGhpcy5vcHRpb25zLmluQW5pbWF0aW9uTmFtZSAhPSB1bmRlZmluZWRcclxuICAgICAgICAvLyAgICAgPyB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lIDogdGhpcy5kZWZhdWx0SW5BbmltYXRpb25OYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImltYWdlXCIsIFwiaXRlbVwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy56SW5kZXg7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbXByZXNpLCBvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuYm9hcmQgPSBpbXByZXNpLmJvYXJkO1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICB0aGlzLmVsZW1lbnQ7XHJcbiAgICAgIHN1cGVyLmRlZmF1bHRJbkFuaW1hdGlvbk5hbWU7XHJcbiAgICAgIC8vcmVzb3VyY2VzIGNyZWF0ZWQgdGhyb3VnaCBKU09OIGRhdGEgcHJvdmlkZSBhbiBJRCB0aHJvdWdoIHRoZSBvcHRpb25zXHJcbiAgICAgIGlmIChvcHRpb25zLmlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRFbGVtZW50KGVsZW1lbnROYW1lKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xyXG4gICAgICB0aGlzLmJvYXJkLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgPSB0aGlzLm9wdGlvbnMuaW5BbmltYXRpb25OYW1lICE9IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5pbkFuaW1hdGlvbk5hbWUgOiB0aGlzLmRlZmF1bHRJbkFuaW1hdGlvbk5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsImltcG9ydCBBYnNvbHV0ZUl0ZW0gZnJvbSBcIi4vYWJzb2x1dGUtaXRlbVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SXRlbSBleHRlbmRzIEFic29sdXRlSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbXByZXNpLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoaW1wcmVzaSwgb3B0aW9ucyk7XHJcbiAgICAgICAgc3VwZXIuZGVmYXVsdEluQW5pbWF0aW9uTmFtZSA9IFwic2xpZGVJblVwXCI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVsZW1lbnQoZWxlbWVudE5hbWUpIHtcclxuICAgICAgICBzdXBlci5hZGRFbGVtZW50KGVsZW1lbnROYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IGAke3RoaXMub3B0aW9ucy53aWR0aH12d2A7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGlsZE9wdGlvbnMoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5zdHlsZS5mb250U2l6ZSA9IGAke3RoaXMuZ2V0Rm9udFNpemUoKX12d2A7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb250Q29sb3IpIHtcclxuICAgICAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLm9wdGlvbnMuZm9udENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGb250U2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvbnRTaXplICE9IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5mb250U2l6ZSA6IHRoaXMuZGVmYXVsdEZvbnRTaXplO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IHN0eWxlcyA9IFxyXG5gXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5oMSxcclxucCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5ib2R5LCAuYm9hcmQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJhY2tncm91bmQgaW1nIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRpbmcsXHJcbi5ibHVyYixcclxuLmJhY2tncm91bmQsXHJcbi5pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5oZWFkaW5nLFxyXG4uYmx1cmIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nIGgxIHtcclxuICBmb250LXNpemU6IDIuNGVtO1xyXG59XHJcblxyXG4uYmx1cmIgcCB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxufVxyXG5cclxuLmhlYWRpbmcgaDEsXHJcbi5ibHVyYiBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubGRzLXJpcHBsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQwdmg7XHJcbiAgbGVmdDogY2FsYyg1MHZ3IC0gMzJweCk7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcbi5sZHMtcmlwcGxlIGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XHJcbn1cclxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMjhweDtcclxuICAgIGxlZnQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmhlYWRpbmc6bm90KC5oaWRlKSxcclxuICAuYmx1cmI6bm90KC5oaWRlKSxcclxuICAuaW1hZ2U6bm90KC5oaWRlKXtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5pbWFnZTpub3QoLmhpZGUpIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDogMTAwdncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5nOm5vdCguaGlkZSkgaDEge1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgfVxyXG5cclxuICAuYmx1cmIgcCB7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICB9XHJcbn1cclxuYDsiXSwic291cmNlUm9vdCI6IiJ9