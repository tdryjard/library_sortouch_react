module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormContact = function FormContact(props) {
    var _useState = (0, _react.useState)(""),
        _useState2 = _slicedToArray(_useState, 2),
        phone = _useState2[0],
        setPhone = _useState2[1];

    var _useState3 = (0, _react.useState)(""),
        _useState4 = _slicedToArray(_useState3, 2),
        email = _useState4[0],
        setEmail = _useState4[1];

    var _useState5 = (0, _react.useState)(""),
        _useState6 = _slicedToArray(_useState5, 2),
        message = _useState6[0],
        setMessage = _useState6[1];

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    var validatePhone = function validatePhone(phone) {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(phone);
    };

    var takePhone = function takePhone(event) {
        setPhone(event.target.value);
    };

    var takeEmail = function takeEmail(event) {
        setEmail(event.target.value);
    };

    var sendMail = function sendMail() {
        if (!validateEmail(email)) {
            alert('email non valide');
        } else if (!validatePhone(phone)) {
            alert('numéro de téléphone non valide');
        } else {
            fetch('http://192.168.43.193:8000/api/mail/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Acces-Control-Allow-Origin': { origin: origin }
                },
                body: JSON.stringify({
                    phone: phone,
                    email: email,
                    message: message,
                    category_id: props.categoryId,
                    model_id: props.modelId,
                    user_id: props.userId,
                    view: 0
                })
            });
        }
    };

    var getMessage = function getMessage(e) {
        setMessage(e.target.value);
    };

    return _react2.default.createElement(
        'div',
        { className: 'containerForm' },
        _react2.default.createElement('input', { onChange: takeEmail, type: 'text', className: 'inputFormChat', placeholder: 'email' }),
        _react2.default.createElement('input', { onChange: takePhone, type: 'text', className: 'inputFormChat', placeholder: 'num\xE9ro de t\xE9l\xE9phone' }),
        _react2.default.createElement('textarea', { className: 'inputMessageFormChatbot', placeholder: 'message', onChange: getMessage }),
        _react2.default.createElement(
            'button',
            { onClick: sendMail, className: 'sendFormChatbot' },
            'Envoyer !'
        )
    );
};

exports.default = FormContact;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Questionchat = function Questionchat(props) {
    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        totalQuestion = _useState2[0],
        setTotalQuestion = _useState2[1];

    (0, _react.useEffect)(function () {
        printText(props.text);
    }, [props.text]);

    var printText = function printText(text) {
        if (props.text) {
            var index = 0;
            var question = text.split('');
            var stockQuestion = [];
            var questionPrint = setInterval(function () {
                stockQuestion = [].concat(_toConsumableArray(stockQuestion), [question[index]]);
                setTotalQuestion([].concat(_toConsumableArray(totalQuestion), [stockQuestion]));
                index++;
                if (index === question.length) {
                    clearInterval(questionPrint);
                    return true;
                }
            }, 50);
        }
    };

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            { className: 'textQuest' },
            totalQuestion
        )
    );
};

exports.default = Questionchat;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormContact = __webpack_require__(1);

var _FormContact2 = _interopRequireDefault(_FormContact);

var _QuestionChat = __webpack_require__(4);

var _QuestionChat2 = _interopRequireDefault(_QuestionChat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
window.React = React;

module.exports = __webpack_require__(8);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(7);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".containerForm{\n    height: 450px;\n    margin-top: 30px;\n    width: 300px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.inputFormChat{\n    width: 80%;\n    border-radius: 30px;\n    height: 30px;\n    padding: 5px;\n    background-color: white;\n    box-shadow: inset 0px 0px 3px rgb(66, 66, 66);\n    border: none;\n    font-size: 15px;\n    font-family: 'Sen', sans-serif;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.inputMessageFormChatbot{\n    width: 80%;\n    border-radius: 15px;\n    height: 40%;\n    padding: 10px;\n    background-color: white;\n    box-shadow: inset 0px 0px 3px rgb(66, 66, 66);\n    border: none;\n    font-size: 15px;\n    font-family: 'Sen', sans-serif;\n    text-align: center;\n    margin-bottom: 20px;\n    font-size: 15px;\n    font-family: 'Sen', sans-serif;\n}\n\n.sendFormChatbot{\n    width: 100px;\n    height: 40px;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    font-size: 15px;\n    font-weight: 600;\n    font-family: 'Sen', sans-serif;\n    box-shadow: 0px 0px 10px 0px rgb(143, 109, 182);\n    color: #b36fff;\n    cursor: pointer;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _QuestionChat = __webpack_require__(4);

var _QuestionChat2 = _interopRequireDefault(_QuestionChat);

var _FormContact = __webpack_require__(1);

var _FormContact2 = _interopRequireDefault(_FormContact);

var _cross = __webpack_require__(9);

var _cross2 = _interopRequireDefault(_cross);

var _logo = __webpack_require__(10);

var _logo2 = _interopRequireDefault(_logo);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var ChatBotArea = function ChatBotArea(_ref) {
    var modelId = _ref.modelId,
        userId = _ref.userId;

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        containers = _useState2[0],
        setContainers = _useState2[1];

    var _useState3 = (0, _react.useState)([]),
        _useState4 = _slicedToArray(_useState3, 2),
        cardsQuest = _useState4[0],
        setCardsQuest = _useState4[1];

    var _useState5 = (0, _react.useState)([]),
        _useState6 = _slicedToArray(_useState5, 2),
        cardsRes = _useState6[0],
        setCardsRes = _useState6[1];

    var _useState7 = (0, _react.useState)([]),
        _useState8 = _slicedToArray(_useState7, 2),
        cardsCategory = _useState8[0],
        setCardsCategory = _useState8[1];

    var _useState9 = (0, _react.useState)(0),
        _useState10 = _slicedToArray(_useState9, 2),
        responseSelect = _useState10[0],
        setResponseSelect = _useState10[1];

    var _useState11 = (0, _react.useState)(),
        _useState12 = _slicedToArray(_useState11, 2),
        storageContainers = _useState12[0],
        setStorageContainers = _useState12[1];

    var _useState13 = (0, _react.useState)([]),
        _useState14 = _slicedToArray(_useState13, 2),
        responseSelected = _useState14[0],
        setResponseSelected = _useState14[1];

    var _useState15 = (0, _react.useState)(false),
        _useState16 = _slicedToArray(_useState15, 2),
        pair = _useState16[0],
        setPair = _useState16[1];

    var _useState17 = (0, _react.useState)([]),
        _useState18 = _slicedToArray(_useState17, 2),
        cardsQuestFilter = _useState18[0],
        setCardsQuestFilter = _useState18[1];

    var _useState19 = (0, _react.useState)(false),
        _useState20 = _slicedToArray(_useState19, 2),
        chatActive = _useState20[0],
        setChatActive = _useState20[1];

    var _useState21 = (0, _react.useState)(true),
        _useState22 = _slicedToArray(_useState21, 2),
        textIcon = _useState22[0],
        setTextIcon = _useState22[1];

    (0, _react.useEffect)(function () {
        printContainers();
    }, [userId, responseSelected]);

    (0, _react.useEffect)(function () {
        setTimeout(function () {
            setTextIcon(false);
        }, 7000);
    });

    var printContainers = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            try {
                                fetch('http://192.168.43.193:8000/api/container/findAll/' + userId + '/' + responseSelect + '/' + modelId).then(function (res) {
                                    return res.json();
                                }).then(function (res) {
                                    if (res.length) {
                                        if (storageContainers) {
                                            var resResult = res.filter(function (res) {
                                                return res.response_id != null;
                                            });
                                            var newContainer = [].concat(_toConsumableArray(storageContainers), _toConsumableArray(resResult));
                                            setContainers(newContainer);
                                            takeCard(newContainer);
                                        } else {
                                            setContainers(res);
                                            takeCard(res);
                                        }
                                    }
                                });
                            } catch (error) {
                                console.log(error);
                            }
                            setStorageContainers(containers);

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function printContainers() {
            return _ref2.apply(this, arguments);
        };
    }();

    var takeCard = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
            var stock, i, resulted, result, stockFilter, stockRes, _i, _resulted, _result, stockCategory, _i2, _resulted2, _result2;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            stock = [];
                            i = 0;

                        case 2:
                            if (!(i < res.length + 3)) {
                                _context2.next = 14;
                                break;
                            }

                            if (!res[i]) {
                                _context2.next = 11;
                                break;
                            }

                            _context2.next = 6;
                            return fetch('http://192.168.43.193:8000/api/relation/findCardQuestion/' + res[i].id + '/' + userId + '/' + modelId, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });

                        case 6:
                            resulted = _context2.sent;
                            _context2.next = 9;
                            return resulted.json();

                        case 9:
                            result = _context2.sent;

                            stock = [].concat(_toConsumableArray(stock), [result]);

                        case 11:
                            i++;
                            _context2.next = 2;
                            break;

                        case 14:
                            if (!stock.length) {
                                _context2.next = 20;
                                break;
                            }

                            setCardsQuest(stock);
                            _context2.next = 18;
                            return stock.filter(function (quest) {
                                return quest[0];
                            });

                        case 18:
                            stockFilter = _context2.sent;

                            setCardsQuestFilter(stockFilter);

                        case 20:
                            stockRes = [];
                            _i = 0;

                        case 22:
                            if (!(_i < res.length + 3)) {
                                _context2.next = 34;
                                break;
                            }

                            if (!res[_i]) {
                                _context2.next = 31;
                                break;
                            }

                            _context2.next = 26;
                            return fetch('http://192.168.43.193:8000/api/relation/findCardResponse/' + res[_i].id + '/' + userId + '/' + modelId, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });

                        case 26:
                            _resulted = _context2.sent;
                            _context2.next = 29;
                            return _resulted.json();

                        case 29:
                            _result = _context2.sent;

                            stockRes = [].concat(_toConsumableArray(stockRes), [_result]);

                        case 31:
                            _i++;
                            _context2.next = 22;
                            break;

                        case 34:
                            setCardsRes(stockRes);
                            stockCategory = [];
                            _i2 = 0;

                        case 37:
                            if (!(_i2 < res.length + 3)) {
                                _context2.next = 49;
                                break;
                            }

                            if (!(_typeof(res[_i2]) === 'object')) {
                                _context2.next = 46;
                                break;
                            }

                            _context2.next = 41;
                            return fetch('http://192.168.43.193:8000/api/relation/findCardCategory/' + res[_i2].id + '/' + userId + '/' + modelId, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });

                        case 41:
                            _resulted2 = _context2.sent;
                            _context2.next = 44;
                            return _resulted2.json();

                        case 44:
                            _result2 = _context2.sent;

                            stockCategory = [].concat(_toConsumableArray(stockCategory), [_result2]);

                        case 46:
                            _i2++;
                            _context2.next = 37;
                            break;

                        case 49:
                            setCardsCategory(stockCategory);

                        case 50:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function takeCard(_x) {
            return _ref3.apply(this, arguments);
        };
    }();

    var selectResponse = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(cardId, index) {
            var stockContainers, numberCard, containerIndex, stockResponseSelected, a, b, c, nbRes, i, _a;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            setPair(!pair);
                            stockContainers = containers;
                            numberCard = cardId;
                            containerIndex = index + 1;

                            setResponseSelect(numberCard);

                            responseSelected.length = cardId;
                            stockContainers.length = containerIndex;

                            stockResponseSelected = [].concat(_toConsumableArray(responseSelected), [numberCard]);


                            for (a = 0; a < cardsRes.length; a++) {
                                if (cardsRes[a].length) {
                                    for (b = 0; b < cardsRes[a].length; b++) {
                                        for (c = 0; c < stockResponseSelected.length; c++) {
                                            nbRes = cardsRes[a].filter(function (card) {
                                                return stockResponseSelected.includes(card.id);
                                            });

                                            if (nbRes.length > 1) {
                                                for (i = 0; i < stockResponseSelected.length; i++) {
                                                    for (_a = 0; _a < nbRes.length - 1; _a++) {
                                                        if (nbRes[_a].id === stockResponseSelected[i]) {
                                                            stockResponseSelected.splice(i, 1);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            setResponseSelected(stockResponseSelected);

                            setStorageContainers(stockContainers);

                            if (stockContainers) {
                                printContainers();
                            }

                            setTimeout(function () {
                                window.scrollTo(0, document.body.scrollHeight);
                            }, 700);

                        case 13:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function selectResponse(_x2, _x3) {
            return _ref4.apply(this, arguments);
        };
    }();

    var activeChat = function activeChat() {
        setChatActive(true);
    };

    return _react2.default.createElement(
        'div',
        { className: !chatActive ? "containerIconChat" : "containerChatbot" },
        chatActive && _react2.default.createElement(
            'div',
            { className: 'headChatbot' },
            _react2.default.createElement('img', { onClick: function onClick() {
                    setChatActive(!chatActive);
                }, alt: 'close sortouch', src: _cross2.default, className: 'crossChatbot' }),
            _react2.default.createElement(
                'a',
                { target: '__blank', href: 'https://sortouch.com', className: 'sortouch' },
                'Sortouch'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: chatActive ? "contentChatbot" : "contentIcon" },
            !chatActive ? _react2.default.createElement(
                'div',
                null,
                textIcon && _react2.default.createElement(
                    'div',
                    { className: 'contentTextIconChat' },
                    _react2.default.createElement(
                        'p',
                        { onClick: activeChat, className: 'textIconCard' },
                        _react2.default.createElement(_QuestionChat2.default, { text: "Prenez contact avec moi !" })
                    )
                ),
                _react2.default.createElement('img', { alt: 'icon chat', onClick: activeChat, src: _logo2.default, className: 'iconChat' })
            ) : Array.isArray(containers) && containers.map(function (container, index) {
                return _react2.default.createElement(
                    'div',
                    { className: container.content_type === "question" && index % 3 !== 0 ? "contentQuestionChat" : container.content_type === "question" && index % 3 === 0 ? "contentQuestionChatDecale" : container.content_type === "response" ? "contentResponseChat" : "contentDestinationChat" },
                    Array.isArray(cardsQuest[index]) && container.content_type === "question" && cardsQuest[index].map(function (card) {
                        return cardsQuestFilter[cardsQuestFilter.length - 1] && card.id === cardsQuestFilter[cardsQuestFilter.length - 1][0].id ? _react2.default.createElement(
                            'div',
                            { className: 'contentQuestChat' },
                            _react2.default.createElement(_QuestionChat2.default, { text: card.content }),
                            _react2.default.createElement('img', { alt: 'sortouch', src: _logo2.default, className: 'logoChat' })
                        ) : _react2.default.createElement(
                            'div',
                            { className: 'contentQuestChat' },
                            _react2.default.createElement(
                                'p',
                                { className: 'textQuest' },
                                card.content
                            ),
                            _react2.default.createElement('img', { alt: 'sortouch', src: _logo2.default, className: 'logoChat' })
                        );
                    }),
                    Array.isArray(cardsRes[index]) && container.content_type === "response" && cardsRes[index].map(function (card) {
                        return _react2.default.createElement(
                            'div',
                            { onClick: function onClick() {
                                    selectResponse(card.id, index);
                                }, className: responseSelected.includes(card.id) ? 'containerCardResChatActive' : 'containerCardResChat' },
                            _react2.default.createElement(
                                'p',
                                { id: 'container' + index, className: 'textCardResChat' },
                                card.content
                            )
                        );
                    }),
                    Array.isArray(cardsCategory[index]) && container.content_type === "category" && cardsCategory[index].map(function (card) {
                        return _react2.default.createElement(_FormContact2.default, { categoryId: card.id, userId: userId, modelId: modelId });
                    })
                );
            })
        )
    );
};

exports.default = ChatBotArea;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3a04b5990648696c4b221811fe526047.png");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6bb2566e0dc97c59f3f30a295a4a1fd1.png");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(12);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(14);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".containerIconChat{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    bottom: 8%;\n    right: 8%;\n    border-radius: 50%;\n    box-shadow: 0px 0px 5px #6d6d6d;\n    padding: 5px;\n    background-color: #ffffff;\n    border: 3px #b36fff solid;\n}\n\n.iconChat{\n    width: 90px;\n    height: auto;\n    background-color: #b36fff;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.contentTextIconChat{\n    display: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 220px;\n    height: 90px;\n    right: 50%;\n    bottom: 30%;\n    animation: textIcon 7s;\n} @keyframes textIcon{\n    0%{\n        opacity: 100%\n    }\n    85%{\n        opacity: 100%;\n    }\n    100%{\n        opacity: 0%;\n        display: none;\n    }\n}\n\n.textIconCard{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 15px;\n    width: 70%;\n    margin: 0;\n    text-align: center;\n    margin-right: 8px;\n    margin-top: 5px;\n    font-family: 'Varela Round', sans-serif;\n}\n\n\n.textQuest{\n    margin: 0;\n    font-family: 'Sen', sans-serif;\n    font-size: 18px;\n    overflow: hidden;\n}\n\n\n.containerChatbot{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    height: 500px;\n    width: 320px;\n    position: fixed;\n    bottom: 8%;\n    right: 8%;\n    border-radius: 15px;\n    box-shadow: 0px 0px 15px #b8b8b8;\n    padding: 5px;\n    background: rgb(216,181,255);\n    background: linear-gradient(0deg, rgb(196, 147, 255) 0%, rgb(207, 164, 255) 100%);\n    overflow: auto;\n}\n\n.contentChatbot{\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: column;\n    height: 95%;\n    width: 100%;\n    margin-top: 30px;\n}\n\n.contentIcon{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.headChatbot{\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    flex-direction: row;\n    position: fixed;\n    width: 320px;\n    background-color: white;\n    height: 30px;\n    padding: 5px;\n    margin-top: -5px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    z-index: 2;\n    box-shadow: 0px 4px 5px rgb(174, 134, 219);\n}\n\n.crossChatbot{\n    height: 18px;\n    width: auto;\n    background-color: rgb(255, 111, 86);\n    padding: 5px;\n    border-radius: 50%;\n    margin-left: 5px;\n    cursor: pointer;\n}\n\n.sortouch{\n    font-family: 'Lobster', cursive;\n    color: #b36fff;\n    font-size: 22px;\n    text-decoration: none;\n    margin-left: 55%;\n    letter-spacing: 1px;\n}\n\n.contentQuestChat{\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    flex-direction: row;\n    width: 220px;\n    min-height: 80px;\n    border-radius: 10px;\n    padding: 10px;\n    padding-right: 50px;\n    margin-top: 35px;\n    margin-bottom: 10px;\n    background-color: #fdfbfb;\n    position: relative;\n}\n\n\n.logoChat{\n    width: 50px;\n    height: auto;\n    background-color: #b36fff;\n    border-radius: 50%;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n\n\n.contentResponseChat{\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    width: 40%;\n    margin-left: 10%;\n    margin-bottom: 10px;\n    border-radius: 15px;\n    padding: 10px;\n}\n\n.containerCardResChat{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(255, 240, 242);\n    box-shadow: -4px -3px 2px 0px #ffffff, 2px 2px 7px 0px rgb(158, 122, 199);\n    margin: 15px;\n    margin-right: 0;\n    margin-left: 0;\n    padding: 10px 20px 10px 20px;\n    border-radius: 25px;\n    cursor: pointer;\n}\n\n.containerCardResChat:hover{\n    background-color: rgb(252, 235, 235);\n}\n\n.containerCardResChat:active{\n    box-shadow: inset -5px -4px 4px 0px #c9c9c9, inset 2px 2px 9px 0px #ffffff;\n}\n\n.containerCardResChatActive{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(252, 235, 235);\n    box-shadow: inset 1px 1px 4px 0px #868686, inset -3px -3px 2px 0px #ffffff;\n    padding: 10px 20px 10px 20px;\n    border-radius: 25px;\n    cursor: pointer;\n    width: 100%;\n}\n\n.contentResponseChat{\n    width: 75%;\n    margin-left: 0;\n    max-height: 50%;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.containerCardResChat{\n    width: 80%;\n    text-align: center;\n    margin-left: 0;\n}\n\n.textCardResChat{\n    font-size: 17px;\n    font-family: 'Sen', sans-serif;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c7243418f54be53735928de0f44ea4d9.png");

/***/ })
/******/ ]);