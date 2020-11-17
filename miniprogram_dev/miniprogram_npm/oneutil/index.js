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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.TheKit = exports.HTML = exports.DATE = exports.URL = exports.STRING = exports.PATH = exports.COLOR = void 0;
var COLOR_1 = __webpack_require__(1);
exports.COLOR = COLOR_1.default;
var PATH_1 = __webpack_require__(2);
exports.PATH = PATH_1.default;
var STRING_1 = __webpack_require__(3);
exports.STRING = STRING_1.default;
var URL_1 = __webpack_require__(4);
exports.URL = URL_1.default;
var DATE_1 = __webpack_require__(5);
exports.DATE = DATE_1.default;
var HTML_1 = __webpack_require__(6);
exports.HTML = HTML_1.default;
var TheKit_1 = __webpack_require__(7);
exports.TheKit = TheKit_1.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var COLOR = function () {
  function COLOR() {
    _classCallCheck(this, COLOR);
  }

  COLOR.rgba2str = function rgba2str(r, g, b, a) {
    function componentToHex(c) {
      c = c.trim();
      var hex = parseInt(c, 10).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a);
  };

  COLOR.color = function color(string) {
    var str = string;
    if (!str) {
      return null;
    }
    var COLORS = {
      aliceblue: '#F0F8FFFF',
      antiquewhite: 'FAEBD7FF',
      aqua: '00FFFFFF',
      aquamarine: '7FFFD4FF',
      azure: 'F0FFFFFF',
      beige: 'F5F5DCFF',
      bisque: 'FFE4C4FF',
      black: '000000FF',
      blanchedalmond: 'FFEBCDFF',
      blue: '0000FFFF',
      blueviolet: '8A2BE2FF',
      brown: 'A52A2AFF',
      burlywood: 'DEB887FF',
      cadetblue: '5F9EA0FF',
      chartreuse: '7FFF00FF',
      chocolate: 'D2691EFF',
      coral: 'FF7F50FF',
      cornflowerblue: '6495EDFF',
      cornsilk: 'FFF8DCFF',
      crimson: 'DC143CFF',
      cyan: '00FFFFFF',
      darkblue: '00008BFF',
      darkcyan: '008B8BFF',
      darkgoldenRod: 'B8860BFF',
      darkgray: 'A9A9A9FF',
      darkgreen: '006400FF',
      darkkhaki: 'BDB76BFF',
      darkmagenta: '8B008BFF',
      darkolivegreen: '556B2FFF',
      darkorange: 'FF8C00FF',
      darkorchid: '9932CCFF',
      darkred: '8B0000FF',
      darksalmon: 'E9967AFF',
      darkseaGreen: '8FBC8FFF',
      darkslateBlue: '483D8BFF',
      darkslateGray: '2F4F4FFF',
      darkturquoise: '00CED1FF',
      darkviolet: '9400D3FF',
      deeppink: 'FF1493FF',
      deepskyblue: '00BFFFFF',
      dimgray: '696969FF',
      dodgerblue: '1E90FFFF',
      feldspar: 'D19275FF',
      firebrick: 'B22222FF',
      floralwhite: 'FFFAF0FF',
      forestgreen: '228B22FF',
      fuchsia: 'FF00FFFF',
      gainsboro: 'DCDCDCFF',
      ghostwhite: 'F8F8FFFF',
      gold: 'FFD700FF',
      goldenRod: 'DAA520FF',
      gray: '808080FF',
      green: '008000FF',
      greenyellow: 'ADFF2FFF',
      honeydew: 'F0FFF0FF',
      hotpink: 'FF69B4FF',
      indianred: 'CD5C5CFF',
      indigo: '4B0082FF',
      ivory: 'FFFFF0FF',
      khaki: 'F0E68CFF',
      lavender: 'E6E6FAFF',
      lavendernlush: 'FFF0F5FF',
      lawngreen: '7CFC00FF',
      lemonchiffon: 'FFFACDFF',
      lightblue: 'ADD8E6FF',
      lightcoral: 'F08080FF',
      lightcyan: 'E0FFFFFF',
      lightgoldenRodYellow: 'FAFAD2FF',
      lightgrey: 'D3D3D3FF',
      lightgreen: '90EE90FF',
      lightpink: 'FFB6C1FF',
      lightsalmon: 'FFA07AFF',
      lightseaGreen: '20B2AAFF',
      lightskyBlue: '87CEFAFF',
      lightslateBlue: '8470FFFF',
      lightslateGray: '778899FF',
      lightsteelBlue: 'B0C4DEFF',
      lightyellow: 'FFFFE0FF',
      lime: '00FF00FF',
      limegreen: '32CD32FF',
      linen: 'FAF0E6FF',
      magenta: 'FF00FFFF',
      maroon: '800000FF',
      mediumaquaMarine: '66CDAAFF',
      mediumblue: '0000CDFF',
      mediumorchid: 'BA55D3FF',
      mediumpurple: '9370D8FF',
      mediumseagreen: '3CB371FF',
      mediumslateblue: '7B68EEFF',
      mediumspringgreen: '00FA9AFF',
      mediumturquoise: '48D1CCFF',
      mediumvioletred: 'C71585FF',
      midnightblue: '191970FF',
      mintcream: 'F5FFFAFF',
      mistyrose: 'FFE4E1FF',
      moccasin: 'FFE4B5FF',
      navajowhite: 'FFDEADFF',
      navy: '000080FF',
      oldlace: 'FDF5E6FF',
      olive: '808000FF',
      olivedrab: '6B8E23FF',
      orange: 'FFA500FF',
      Orangered: 'FF4500FF',
      Orchid: 'DA70D6FF',
      palegoldenrod: 'EEE8AAFF',
      palegreen: '98FB98FF',
      paleturquoise: 'AFEEEEFF',
      palevioletred: 'D87093FF',
      papayawhip: 'FFEFD5FF',
      peachpuff: 'FFDAB9FF',
      peru: 'CD853FFF',
      pink: 'FFC0CBFF',
      plum: 'DDA0DDFF',
      powderblue: 'B0E0E6FF',
      purple: '800080FF',
      red: 'FF0000FF',
      rosybrown: 'BC8F8FFF',
      royalblue: '4169E1FF',
      saddlebrown: '8B4513FF',
      salmon: 'FA8072FF',
      sandybrown: 'F4A460FF',
      seagreen: '2E8B57FF',
      seashell: 'FFF5EEFF',
      sienna: 'A0522DFF',
      silver: 'C0C0C0FF',
      skyblue: '87CEEBFF',
      slateblue: '6A5ACDFF',
      slategray: '708090FF',
      snow: 'FFFAFAFF',
      springgreen: '00FF7FFF',
      steelblue: '4682B4FF',
      tan: 'D2B48CFF',
      teal: '008080FF',
      thistle: 'D8BFD8FF',
      tomato: 'FF6347FF',
      turquoise: '40E0D0FF',
      violet: 'EE82EEFF',
      violetred: 'D02090FF',
      wheat: 'F5DEB3FF',
      white: 'FFFFFFFF',
      whitesmoke: 'F5F5F5FF',
      yellow: 'FFFF00FF',
      yellowgreen: '9ACD32FF'
    };
    var nameColor = COLORS[str.toLowerCase()];
    if (nameColor) {
      return nameColor;
    }
    if (str.indexOf('rgb') < 0) {
      if (str.length === 7) {
        str += '';
      }
      return str;
    }
    str = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
    var array = str.split(',');
    if (array.length === 3) {
      array.push(1);
    }
    var color = COLOR.rgba2str(array[0], array[1], array[2], array[3] * 255 + '');
    return color;
  };

  COLOR.str2array = function str2array(str) {
    return [parseInt(str.substr(1, 2), 16), parseInt(str.substr(3, 2), 16), parseInt(str.substr(5, 2), 16), parseInt(str.substr(7, 2), 16)];
  };

  COLOR.array2str = function array2str(array) {
    function f(v) {
      var s = v.toString(16);
      if (s.length === 1) {
        s = '0' + s;
      }
      return s;
    }
    var str = '#' + f(array[0]) + f(array[1]) + f(array[2]) + f(array[3]);
    return str;
  };

  return COLOR;
}();

exports.default = COLOR;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PATH = function () {
  function PATH() {
    _classCallCheck(this, PATH);
  }

  PATH.rel2abs = function rel2abs(currentUrl, url) {
    if (url.startsWith('/')) {
      return url.substring(1);
    }
    // //////////////////
    var folder = void 0;
    if (currentUrl.indexOf('/') >= 0) {
      folder = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
      if (folder.startsWith('/')) {
        folder = folder.substring(1);
      }
    } else {
      folder = '';
    }
    url = url.trim();
    if (url.startsWith('./')) {
      url = url.substring('./'.length);
    }
    while (url.startsWith('../')) {
      folder = folder.substring(0, folder.length - 1);
      folder = folder.substring(0, folder.lastIndexOf('/') + 1);
      url = url.substring('../'.length);
    }

    return folder + url;
  };

  PATH.abs2rel = function abs2rel(currentUrl, url) {
    url = PATH.rel2abs(currentUrl, url);
    if (currentUrl.startsWith('/')) {
      currentUrl = currentUrl.substring(1);
    }
    var array = currentUrl.split('/');
    var result = '';
    if (array.length > 1) {
      for (var i = 0; i < array.length - 1; i++) {
        result += '../';
      }
    } else {
      result += './';
    }
    result += url;
    return result.toString();
  };

  return PATH;
}();

exports.default = PATH;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STRING = function () {
  function STRING() {
    _classCallCheck(this, STRING);
  }

  STRING.firstUpper = function firstUpper(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  };

  STRING.firstLower = function firstLower(str) {
    return str.substr(0, 1).toLowerCase() + str.substr(1);
  };

  STRING.replace = function replace(string, str1, str2) {
    var result = '';
    var inTag = false;
    for (var i = 0; i < string.length; i++) {
      var chr = string.substr(i, 1);
      switch (chr) {
        case '<':
          inTag = true;
          result += chr;
          break;
        case '>':
          inTag = false;
          result += chr;
          break;
        case str1:
          result += inTag ? chr : str2;
          break;
        default:
          result += chr;
          break;
      }
    }
    return result;
  };

  STRING.string2arraybuffer = function string2arraybuffer(str) {
    return new TextEncoder().encode(str).buffer;
  };

  return STRING;
}();

exports.default = STRING;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URL = function URL(url) {
  _classCallCheck(this, URL);

  var p1 = url.indexOf(':');
  if (p1 > 0) {
    var temp = url.substring(p1 + 1);
    var flag = temp.startsWith('//') ? 3 : 1;
    //
    this.scheme = url.substring(0, p1);
    var p2 = url.indexOf('/', p1 + flag);
    if (p2 > 0) {
      this.host = url.substring(p1 + flag, p2);
      var p3 = url.indexOf('?');
      if (p2 < url.length) {
        if (p3 > 0) {
          this.path = url.substring(p2, p3);
        } else {
          this.path = url.substring(p2);
        }
      }
    } else {
      this.host = url.substring(p1 + flag);
    }
  }
  //
  this.params = {};
  var p4 = url.indexOf('?');
  if (p4 > 0) {
    this.querystring = url.substring(p4 + 1);
    var querys = this.querystring.split('&');
    for (var _iterator = querys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var query = _ref;

      var pair = query.split('=');
      this.params[pair[0]] = decodeURIComponent(pair[1]);
    }
  }
};

exports.default = URL;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DATE = function () {
  function DATE() {
    _classCallCheck(this, DATE);
  }

  DATE.monthDays = function monthDays(year, month) {
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) >= 0) {
      return 31;
    } else if (month === 2) {
      if (year % 4 === 0 && year % 100 !== 0 || year % 100 === 0 && year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    } else {
      return 30;
    }
  };

  return DATE;
}();

exports.default = DATE;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/* eslint-disable guard-for-in */
var HTML = function () {
  function HTML() {
    _classCallCheck(this, HTML);
  }

  HTML.html2nodes = function html2nodes(html) {
    function _html2node(xParent) {
      var nodes = [];
      for (var _iterator = xParent.childNodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var xNode = _ref;

        var node = void 0;
        switch (xNode.nodeType) {
          case 3:
            node = {
              type: 'text',
              text: xNode.nodeValue
            };
            break;
          case 1:
            node = {
              name: xNode.tagName.toLowerCase(),
              children: _html2node(xNode),
              attrs: {}
            };
            if (xNode.attributes.class) {
              node.attrs.class = xNode.attributes.class.value;
            }
            if (xNode.attributes.style) {
              node.attrs.style = xNode.attributes.style.value;
            }
            break;
          default:
            console.warn(xNode.nodeType);
            node = null;
            break;
        }
        if (node) {
          nodes.push(node);
        }
      }
      return nodes;
    }
    // eslint-disable-next-line no-undef
    var document = new DOMParser().parseFromString(html, 'text/html');
    return _html2node(document.querySelector('body'));
  };

  HTML.nodes2html = function nodes2html(nodes) {
    function _node2html(node) {
      var selfCloses = ['br', 'img'];
      switch (node.type) {
        case 'text':
          return node.text;
        default:
          {
            var attributs = '';
            if (node.attrs) {
              for (var key in node.attrs) {
                var value = node.attrs[key];
                attributs += ' ' + key + '="' + value + '"';
              }
            }
            //
            var children = node.children ? HTML.nodes2html(node.children) : '';
            if (selfCloses.indexOf(node.name) >= 0) {
              return '<' + node.name + attributs + '/>';
            } else {
              return '<' + node.name + attributs + '>' + children + '</' + node.name + '>';
            }
          }
      }
    }
    var html = '';
    for (var _iterator2 = nodes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var node = _ref2;

      html += _node2html(node);
    }
    return html;
  };

  return HTML;
}();

exports.default = HTML;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TheKit = function () {
  function TheKit() {
    _classCallCheck(this, TheKit);
  }

  TheKit.firstUpper = function firstUpper(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  };

  TheKit.trim = function trim(str) {
    return str.replace(/^\s+|\s+$/gm, '');
  };

  TheKit.color = function color(string) {
    var str = string;
    if (!str) {
      return null;
    }
    switch (str) {
      case 'transparent':
        return '#00000000';
      case 'black':
        return '#000000FF';
      default:
        break;
    }
    if (str.indexOf('rgb') < 0) {
      if (str.length === 7) {
        str += 'FF';
      }
      return str;
    }
    str = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
    var array = str.split(',');
    if (array.length === 3) {
      array.push(1);
    }
    var color = TheKit.color.rgba2str(array[0], array[1], array[2], array[3] * 255 + '');
    return color;
  };

  TheKit.rgba2str = function rgba2str(r, g, b, a) {
    function componentToHex(c) {
      c = TheKit.trim(c);
      var hex = parseInt(c, 10).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a);
  };

  TheKit.str2array = function str2array(str) {
    return [parseInt(str.substr(1, 2), 16), parseInt(str.substr(3, 2), 16), parseInt(str.substr(5, 2), 16), parseInt(str.substr(7, 2), 16)];
  };

  TheKit.array2str = function array2str(array) {
    function f(v) {
      var s = v.toString(16);
      if (s.length === 1) {
        s = '0' + s;
      }
      return s;
    }
    var str = '#' + f(array[0]) + f(array[1]) + f(array[2]) + f(array[3]);
    return str;
  };

  TheKit.rel2abs = function rel2abs(currentUrl, url) {
    if (url.startsWith('/')) {
      return url.substring(1);
    }
    // //////////////////
    var folder = void 0;
    if (currentUrl.indexOf('/') >= 0) {
      folder = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
      if (folder.startsWith('/')) {
        folder = folder.substring(1);
      }
    } else {
      folder = '';
    }
    url = url.trim();
    if (url.startsWith('./')) {
      url = url.substring('./'.length);
    }
    while (url.startsWith('../')) {
      folder = folder.substring(0, folder.length - 1);
      folder = folder.substring(0, folder.lastIndexOf('/') + 1);
      url = url.substring('../'.length);
    }

    return folder + url;
  };

  TheKit.abs2rel = function abs2rel(currentUrl, url) {
    url = TheKit.rel2abs(currentUrl, url);
    if (currentUrl.startsWith('/')) {
      currentUrl = currentUrl.substring(1);
    }
    var array = currentUrl.split('/');
    var result = '';
    if (array.length > 1) {
      for (var i = 0; i < array.length - 1; i++) {
        result += '../';
      }
    } else {
      result += './';
    }
    result += url;
    return result.toString();
  };

  return TheKit;
}();

exports.default = TheKit;

/***/ })
/******/ ]);