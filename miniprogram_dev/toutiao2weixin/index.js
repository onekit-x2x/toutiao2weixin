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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-len */
/* eslint-disable camelcase */
var TT_USER_FOLDER = 'ttfile://user/';
var WX_USER_FOLDER = wx.env.USER_DATA_PATH + '/';

function current() {
  var pages = getCurrentPages();
  if (pages.length === 0) {
    return {};
  }
  return pages[pages.length - 1];
}
function currentUrl() {
  return current().route;
}

function new_tt_filePath(ext) {
  var randomString = Math.floor(Math.random() * (1 - 10000000) + 10000000);
  var tt_filePath = '' + TT_USER_FOLDER + randomString + ext;
  return tt_filePath;
}

function tt_filePath2wx_filePath(tt_filePath) {
  // eslint-disable-next-line no-undef
  if (!getApp().ttSavePath2wxStorePath) {
    return tt_filePath;
  }
  // eslint-disable-next-line no-undef
  var wx_storePath = getApp().ttSavePath2wxStorePath[tt_filePath];
  if (wx_storePath) {
    return wx_storePath;
  } else {
    var wx_filePath = tt_filePath.replace(TT_USER_FOLDER, WX_USER_FOLDER);
    return wx_filePath;
  }
}

function save_wx_storePath(tt_filePath, wx_storePath) {
  // eslint-disable-next-line no-undef
  if (!getApp().ttSavePath2wxStorePath) {
    // eslint-disable-next-line no-undef
    getApp().ttSavePath2wxStorePath = {};
  }
  // eslint-disable-next-line no-undef
  getApp().ttSavePath2wxStorePath[tt_filePath] = wx_storePath;
  // ///////////////////////
  // eslint-disable-next-line no-undef
  if (!getApp().wxStorePath2ttSavePath) {
    // eslint-disable-next-line no-undef
    getApp().wxStorePath2ttSavePath = {};
  }
  // eslint-disable-next-line no-undef
  getApp().wxStorePath2ttSavePath[wx_storePath] = tt_filePath;
}
module.exports = {
  save_wx_storePath: save_wx_storePath,
  new_tt_filePath: new_tt_filePath,
  tt_filePath2wx_filePath: tt_filePath2wx_filePath,
  current: current,
  currentUrl: currentUrl
};

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.OneKit = exports.tt = exports.OnekitPage = exports.OnekitComponent = exports.OnekitBehavior = exports.OnekitApp = void 0;
var OnekitApp_1 = __webpack_require__(10);
exports.OnekitApp = OnekitApp_1.default;
var OnekitBehavior_1 = __webpack_require__(11);
exports.OnekitBehavior = OnekitBehavior_1.default;
var OnekitComponent_1 = __webpack_require__(12);
exports.OnekitComponent = OnekitComponent_1.default;
var OnekitPage_1 = __webpack_require__(13);
exports.OnekitPage = OnekitPage_1.default;
var tt_1 = __webpack_require__(14);
exports.tt = tt_1.default;
var OneKit_1 = __webpack_require__(2);
exports.OneKit = OneKit_1.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitApp;
/* eslint-disable camelcase */

function OnekitApp(tt_object) {
  var wx_object = tt_object;
  return App(wx_object);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;
/* eslint-disable camelcase */
function OnekitBehavior(tt_object) {
  var wx_object = tt_object;
  return Behavior(wx_object);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;
/* eslint-disable camelcase */
function OnekitComponent(tt_object) {
  var wx_object = tt_object;
  return Component(wx_object);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable camelcase */
function OnekitPage(tt_object) {
  var wx_object = tt_object;
  wx_object.animate = function () {};

  return Page(wx_object);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-console */

// import LivePlayerContext from './api/LivePlayerContext'


var _CanvasContext = __webpack_require__(15);

var _CanvasContext2 = _interopRequireDefault(_CanvasContext);

var _VideoContext = __webpack_require__(16);

var _VideoContext2 = _interopRequireDefault(_VideoContext);

var _FileSystemManager = __webpack_require__(17);

var _FileSystemManager2 = _interopRequireDefault(_FileSystemManager);

var _OneKit = __webpack_require__(2);

var _OneKit2 = _interopRequireDefault(_OneKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tt = function () {
  function tt() {
    _classCallCheck(this, tt);
  }

  // ///////////////// animation //////////////////////////
  tt.createAnimation = function createAnimation(tt_object) {
    return wx.createAnimation(tt_object);
  };

  // /////////////// basic ////////////////////////////////


  tt.canIUse = function canIUse() {
    return true;
  };

  tt.getSystemInfo = function getSystemInfo(tt_object) {
    return wx.getSystemInfo(tt_object);
  };

  tt.getSystemInfoSync = function getSystemInfoSync() {
    return wx.getSystemInfoSync();
  };

  tt.base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
    return wx.base64ToArrayBuffer(base64);
  };

  tt.arrayBufferToBase64 = function arrayBufferToBase64(arrayBuffer) {
    return wx.arrayBufferToBase64(arrayBuffer);
  };

  tt.getUpdateManager = function getUpdateManager(tt_object) {
    return wx.getUpdateManager(tt_object);
  };

  tt.getLaunchOptionsSync = function getLaunchOptionsSync(tt_object) {
    return wx.getLaunchOptionsSync(tt_object);
  };

  tt.offPageNotFound = function offPageNotFound(tt_object) {
    return wx.offPageNotFound(tt_object);
  };

  tt.onPageNotFound = function onPageNotFound(tt_object) {
    return wx.onPageNotFound(tt_object);
  };

  tt.offError = function offError(tt_object) {
    return wx.offError(tt_object);
  };

  tt.onError = function onError(tt_object) {
    return wx.onError(tt_object);
  };

  tt.offAppShow = function offAppShow(tt_object) {
    return wx.offAppShow(tt_object);
  };

  tt.onAppShow = function onAppShow(tt_object) {
    return wx.onAppShow(tt_object);
  };

  tt.offAppHide = function offAppHide(tt_object) {
    return wx.offAppHide(tt_object);
  };

  tt.onAppHide = function onAppHide(tt_object) {
    return wx.onAppHide(tt_object);
  };

  tt.setEnableDebug = function setEnableDebug(tt_object) {
    return wx.setEnableDebug(tt_object);
  };

  tt.getLogManager = function getLogManager(tt_object) {
    return wx.getLogManager(tt_object);
  };

  tt.createCanvasContext = function createCanvasContext(canvasId) {
    return new _CanvasContext2.default(wx.createCanvasContext(canvasId));
    // return wx.createCanvasContext(canvasId)
  };

  tt.createLivePlayerContext = function createLivePlayerContext(livePlayerId) {
    // return new LivePlayerContext(wx.createLivePlayerContext(livePlayerId))
    return wx.createLivePlayerContext(livePlayerId);
  };

  tt.createVideoContext = function createVideoContext(videoId) {
    return new _VideoContext2.default(wx.createVideoContext(videoId));
  };

  tt.canvasToTempFilePath = function canvasToTempFilePath(tt_object) {
    return wx.canvasToTempFilePath(tt_object);
  };

  tt.canvasPutImageData = function canvasPutImageData(tt_object) {
    return wx.canvasPutImageData(tt_object);
  };

  tt.canvasGetImageData = function canvasGetImageData(tt_object) {
    return wx.canvasGetImageData(tt_object);
  };

  // //////////// Device //////////////////


  tt.onBeaconServiceChange = function onBeaconServiceChange(tt_object) {
    return wx.onBeaconServiceChange(tt_object);
  };

  tt.onBeaconUpdate = function onBeaconUpdate(tt_object) {
    return wx.onBeaconUpdate(tt_object);
  };

  tt.getBeacons = function getBeacons(tt_object) {
    return wx.getBeacons(tt_object);
  };

  tt.stopBeaconDiscovery = function stopBeaconDiscovery(tt_object) {
    return wx.stopBeaconDiscovery(tt_object);
  };

  tt.startBeaconDiscovery = function startBeaconDiscovery(tt_object) {
    return wx.startBeaconDiscovery(tt_object);
  };

  tt.stopWifi = function stopWifi(tt_object) {
    return wx.stopWifi(tt_object);
  };

  tt.startWifi = function startWifi(tt_object) {
    return wx.startWifi(tt_object);
  };

  tt.setWifiList = function setWifiList(tt_object) {
    return wx.setWifiList(tt_object);
  };

  tt.onWifiConnected = function onWifiConnected(tt_object) {
    return wx.onWifiConnected(tt_object);
  };

  tt.onGetWifiList = function onGetWifiList(tt_object) {
    return wx.onGetWifiList(tt_object);
  };

  tt.getWifiList = function getWifiList(tt_object) {
    return wx.getWifiList(tt_object);
  };

  tt.getConnectedWifi = function getConnectedWifi(tt_object) {
    return wx.getConnectedWifi(tt_object);
  };

  tt.connectWifi = function connectWifi(tt_object) {
    return wx.connectWifi(tt_object);
  };

  //


  tt.onAccelerometerChange = function onAccelerometerChange(callback) {
    return wx.onAccelerometerChange(callback);
  };

  tt.stopAccelerometer = function stopAccelerometer(tt_object) {
    return wx.stopAccelerometer(tt_object);
  };

  tt.startAccelerometer = function startAccelerometer(tt_object) {
    return wx.startAccelerometer(tt_object);
  };

  tt.getBatteryInfoSync = function getBatteryInfoSync(tt_object) {
    return wx.getBatteryInfoSync(tt_object);
  };

  tt._getBatteryInfo = function _getBatteryInfo(tt_res) {
    return wx._getBatteryInfo(tt_res);
  };

  tt.getBatteryInfo = function getBatteryInfo(tt_object) {
    return wx.getBatteryInfo(tt_object);
  };

  //


  tt.getClipboardData = function getClipboardData(tt_object) {
    return wx.getClipboardData(tt_object);
  };

  tt.setClipboardData = function setClipboardData(tt_object) {
    return wx.setClipboardData(tt_object);
  };

  tt.onCompassChange = function onCompassChange(callback) {
    return wx.onCompassChange(callback);
  };

  tt.stopCompass = function stopCompass(tt_object) {
    return wx.stopCompass(tt_object);
  };

  tt.startCompass = function startCompass(tt_object) {
    return wx.startCompass(tt_object);
  };

  tt.addPhoneContact = function addPhoneContact(tt_object) {
    return wx.addPhoneContact(tt_object);
  };

  tt.onGyroscopeChange = function onGyroscopeChange(callback) {
    return wx.onGyroscopeChange(callback);
  };

  tt.stopGyroscope = function stopGyroscope(tt_object) {
    return wx.stopGyroscope(tt_object);
  };

  tt.startGyroscope = function startGyroscope(tt_object) {
    return wx.startGyroscope(tt_object);
  };

  //


  tt.onDeviceMotionChange = function onDeviceMotionChange(tt_object) {
    return wx.onDeviceMotionChange(tt_object);
  };

  tt.stopDeviceMotionListening = function stopDeviceMotionListening(tt_object) {
    return wx.stopDeviceMotionListening(tt_object);
  };

  tt.startDeviceMotionListening = function startDeviceMotionListening(tt_object) {
    return wx.startDeviceMotionListening(tt_object);
  };

  //


  tt.getNetworkType = function getNetworkType(tt_object) {
    return wx.getNetworkType(tt_object);
  };

  tt._network = function _network(wx_res) {
    return wx._network(wx_res);
  };

  tt.onNetworkStatusChange = function onNetworkStatusChange(callback) {
    return wx.onNetworkStatusChange(callback);
  };

  //


  tt.makePhoneCall = function makePhoneCall(tt_object) {
    return wx.makePhoneCall(tt_object);
  };

  tt.scanCode = function scanCode(tt_object) {
    return wx.scanCode(tt_object);
  };

  //


  tt.vibrateLong = function vibrateLong(tt_object) {
    return wx.vibrateLong(tt_object);
  };

  tt.vibrateShort = function vibrateShort(tt_object) {
    return wx.vibrateShort(tt_object);
  };

  //


  tt.onMemoryWarning = function onMemoryWarning(tt_object) {
    return wx.onMemoryWarning(tt_object);
  };

  //


  tt.setScreenBrightness = function setScreenBrightness(tt_object) {
    return wx.setScreenBrightness(tt_object);
  };

  tt.setKeepScreenOn = function setKeepScreenOn(tt_object) {
    return wx.setKeepScreenOn(tt_object);
  };

  tt.onUserCaptureScreen = function onUserCaptureScreen(tt_object) {
    return wx.onUserCaptureScreen(tt_object);
  };

  tt.getScreenBrightness = function getScreenBrightness(tt_object) {
    return wx.getScreenBrightness(tt_object);
  };

  // ///////////////// Ext //////////////


  tt.getExtConfigSync = function getExtConfigSync(tt_object) {
    return wx.getExtConfigSync(tt_object);
  };

  tt.getExtConfig = function getExtConfig(tt_object) {
    return wx.getExtConfig(tt_object);
  };

  // ////////////////// File //////////


  tt.getFileSystemManager = function getFileSystemManager() {
    return new _FileSystemManager2.default(wx.getFileSystemManager());
  };

  tt.getFileInfo = function getFileInfo(tt_object) {
    var tt_filePath = tt_object.filePath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    var wx_object = {
      filePath: wx_filePath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg,
          size: wx_res.size
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return wx.getFileInfo(wx_object);
  };

  tt.removeSavedFile = function removeSavedFile(tt_object) {
    var tt_filePath = tt_object.filePath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    var wx_object = {
      filePath: wx_filePath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return wx.removeSavedFile(wx_object);
  };

  tt.getSavedFileInfo = function getSavedFileInfo(tt_object) {
    return wx.getSavedFileInfo(tt_object);
  };

  tt.getSavedFileList = function getSavedFileList(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_object = {
      success: function success(wx_res) {
        var tt_res = {
          fileList: wx_res.fileList.map(function (wx_file) {
            var tt_file = {

              filePath: getApp().wxStorePath2ttSavePath[wx_file.filePath],
              createTime: wx_file.createTime,
              size: wx_file.size
            };
            return tt_file;
          })
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return wx.getSavedFileList(wx_object);
  };

  tt.openDocument = function openDocument(tt_object) {
    return wx.openDocument(tt_object);
  };

  // ////////// Location ///////////////


  tt.saveFile = function saveFile(tt_object) {
    var tt_tempFilePath = tt_object.tempFilePath;
    var ext = tt_tempFilePath.substring(tt_tempFilePath.lastIndexOf('.'));
    var tt_filePath = tt_object.filePath || _OneKit2.default.new_tt_filePath(ext);
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_tempFilePath = tt_tempFilePath;
    var wx_object = {
      tempFilePath: wx_tempFilePath,
      success: function success(wx_res) {
        _OneKit2.default.save_wx_storePath(tt_filePath, wx_res.savedFilePath);

        var tt_res = {
          errMsg: wx_res.errMsg,
          savedFilePath: tt_filePath
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    wx.saveFile(wx_object);
  };

  tt.openLocation = function openLocation(tt_object) {
    return wx.openLocation(tt_object);
  };

  tt.getLocation = function getLocation(tt_object) {
    return wx.getLocation(tt_object);
  };

  tt.chooseLocation = function chooseLocation(tt_object) {
    return wx.chooseLocation(tt_object);
  };

  // //////// Media ////////////////////


  tt.createMapContext = function createMapContext(tt_object) {
    return wx.createMapContext(tt_object);
  };

  tt.compressImage = function compressImage(tt_object) {
    return wx.compressImage(tt_object);
  };

  tt.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(tt_object) {
    return wx.saveImageToPhotosAlbum(tt_object);
  };

  tt.getImageInfo = function getImageInfo(tt_object) {
    return wx.getImageInfo(tt_object);
  };

  tt.previewImage = function previewImage(tt_object) {
    return wx.previewImage(tt_object);
  };

  tt.chooseImage = function chooseImage(tt_object) {
    return wx.chooseImage(tt_object);
  };

  tt.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(tt_object) {
    return wx.saveVideoToPhotosAlbum(tt_object);
  };

  tt.chooseVideo = function chooseVideo(tt_object) {
    return wx.chooseVideo(tt_object);
  };

  tt.stopVoice = function stopVoice(tt_object) {
    return wx.stopVoice(tt_object);
  };

  tt.pauseVoice = function pauseVoice(tt_object) {
    return wx.pauseVoice(tt_object);
  };

  tt.playVoice = function playVoice(tt_object) {
    return wx.playVoice(tt_object);
  };

  tt.setInnerAudioOption = function setInnerAudioOption(tt_object) {
    return wx.setInnerAudioOption(tt_object);
  };

  tt.getAvailableAudioSources = function getAvailableAudioSources(tt_object) {
    return wx.getAvailableAudioSources(tt_object);
  };

  tt.createInnerAudioContext = function createInnerAudioContext(tt_object) {
    return wx.createInnerAudioContext(tt_object);
  };

  tt.createAudioContext = function createAudioContext(tt_object) {
    return wx.createAudioContext(tt_object);
  };

  tt.onBackgroundAudioStop = function onBackgroundAudioStop(tt_object) {
    return wx.onBackgroundAudioStop(tt_object);
  };

  tt.onBackgroundAudioPause = function onBackgroundAudioPause(tt_object) {
    return wx.onBackgroundAudioPause(tt_object);
  };

  tt.onBackgroundAudioPlay = function onBackgroundAudioPlay(tt_object) {
    return wx.onBackgroundAudioPlay(tt_object);
  };

  tt.stopBackgroundAudio = function stopBackgroundAudio(tt_object) {
    return wx.stopBackgroundAudio(tt_object);
  };

  tt.seekBackgroundAudio = function seekBackgroundAudio(tt_object) {
    return wx.seekBackgroundAudio(tt_object);
  };

  tt.pauseBackgroundAudio = function pauseBackgroundAudio(tt_object) {
    return wx.pauseBackgroundAudio(tt_object);
  };

  tt.playBackgroundAudio = function playBackgroundAudio(tt_object) {
    return wx.playBackgroundAudio(tt_object);
  };

  tt.getBackgroundAudioPlayerState = function getBackgroundAudioPlayerState(tt_object) {
    return wx.getBackgroundAudioPlayerState(tt_object);
  };

  tt.getBackgroundAudioManager = function getBackgroundAudioManager(tt_object) {
    return wx.getBackgroundAudioManager(tt_object);
  };

  tt.createLivePusherContext = function createLivePusherContext(tt_object) {
    return wx.createLivePusherContext(tt_object);
  };

  tt.getRecorderManager = function getRecorderManager(tt_object) {
    return wx.getRecorderManager(tt_object);
  };

  // ////////////// Network ///////////////


  tt.request = function request(tt_object) {
    return wx.request(tt_object);
  };

  tt.downloadFile = function downloadFile(tt_object) {
    return wx.downloadFile(tt_object);
  };

  tt.uploadFile = function uploadFile(tt_object) {
    return wx.uploadFile(tt_object);
  };

  //


  tt.connectSocket = function connectSocket(tt_object) {
    return wx.connectSocket(tt_object);
  };

  tt.onSocketError = function onSocketError(tt_object) {
    return wx.onSocketError(tt_object);
  };

  tt.onSocketMessage = function onSocketMessage(tt_object) {
    return wx.onSocketMessage(tt_object);
  };

  tt.onSocketClose = function onSocketClose(tt_object) {
    return wx.onSocketClose(tt_object);
  };

  tt.onSocketOpen = function onSocketOpen(tt_object) {
    return wx.connectSocket(tt_object);
  };

  tt.sendSocketMessage = function sendSocketMessage(tt_object) {
    return wx.sendSocketMessage(tt_object);
  };

  tt.closeSocket = function closeSocket(tt_object) {
    return wx.closeSocket(tt_object);
  };

  tt.offLocalServiceResolveFail = function offLocalServiceResolveFail(tt_object) {
    return wx.offLocalServiceResolveFail(tt_object);
  };

  tt.onLocalServiceResolveFail = function onLocalServiceResolveFail(tt_object) {
    return wx.onLocalServiceResolveFail(tt_object);
  };

  tt.offLocalServiceDiscoveryStop = function offLocalServiceDiscoveryStop(tt_object) {
    return wx.offLocalServiceDiscoveryStop(tt_object);
  };

  tt.onLocalServiceDiscoveryStop = function onLocalServiceDiscoveryStop(tt_object) {
    return wx.onLocalServiceDiscoveryStop(tt_object);
  };

  tt.offLocalServiceLost = function offLocalServiceLost(tt_object) {
    return wx.offLocalServiceLost(tt_object);
  };

  tt.onLocalServiceLost = function onLocalServiceLost(tt_object) {
    return wx.onLocalServiceLost(tt_object);
  };

  tt.offLocalServiceFound = function offLocalServiceFound(tt_object) {
    return wx.offLocalServiceFound(tt_object);
  };

  tt.onLocalServiceFound = function onLocalServiceFound(tt_object) {
    return wx.onLocalServiceFound(tt_object);
  };

  tt.stopLocalServiceDiscovery = function stopLocalServiceDiscovery(tt_object) {
    return wx.stopLocalServiceDiscovery(tt_object);
  };

  tt.startLocalServiceDiscovery = function startLocalServiceDiscovery(tt_object) {
    return wx.startLocalServiceDiscovery(tt_object);
  };

  // /////// Open Interface //////////


  tt._checkSession = function _checkSession() {
    var now = new Date().getTime();
    return getApp().onekit_code && getApp().onekit_login && now <= getApp().onekit_login + 1000 * 60 * 60 * 24 * 3;
  };

  tt.login = function login(tt_object) {
    if (tt_object == null) {
      return;
    }
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    // //////////////////////
    if (tt._checkSession()) {
      var tt_res = {
        anonymousCode: getApp().onekit_code,
        code: getApp().onekit_code,
        errMsg: 'login:ok',
        isLogin: true
      };
      if (tt_success) {
        tt_success(tt_res);
      }
      if (tt_complete) {
        tt_complete(tt_res);
      }
      return;
    }

    var wx_object = {};
    wx_object.success = function (wx_res) {
      getApp().onekit_code = wx_res.code;

      getApp().onekit_login = new Date().getTime();
      var tt_res = {
        anonymousCode: wx_res.code,
        code: wx_res.code,
        errMsg: 'login:ok',
        isLogin: true
      };
      if (tt_success) {
        tt_success(tt_res);
      }
      if (tt_complete) {
        tt_complete(tt_res);
      }
    };
    wx_object.fail = function (wx_res) {
      getApp().onekit_code = wx_res.code;

      getApp().onekit_login = new Date().getTime();
      var tt_res = {
        anonymousCode: wx_res.code,
        code: wx_res.code,
        errMsg: 'login:false',
        isLogin: true
      };
      if (tt_fail) {
        tt_fail(tt_res);
      }
      if (tt_complete) {
        tt_complete(tt_res);
      }
    };
    wx.login(wx_object);
  };

  tt._getUserInfo = function _getUserInfo(data, callback) {
    tt.login({
      success: function success(wx_res) {
        console.log(wx_res);
        var code = wx_res.code;

        var withCredentials = getApp().onekit_getuserinfo_withCredentials === true;

        var url = getApp().onekit_server + 'userinfo';
        wx.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            code: code,
            withCredentials: withCredentials,
            data: JSON.stringify(data)
          },
          success: function success(wx_res) {
            callback(wx_res.data);
          },
          fail: function fail(wx_res) {
            console.log(wx_res);
            callback(wx_res);
          }
        });
      },
      fail: function fail(wx_res) {
        console.log(wx_res);
      }
    });
  };

  tt.getUserInfo = function getUserInfo(tt_object) {
    var tt_withCredentials = tt_object.withCredentials;
    var tt_success = tt_object.success;
    // const tt_fail = tt_object.fail
    var tt_complete = tt_object.complete;
    // ///////
    getApp().onekit_getuserinfo_withCredentials = tt_withCredentials;

    // const wx_object = {}
    // wx_object.success (data, (wx_res) => {
    //   getApp().onekit_code = wx_res.code
    //   const tt_res = {
    //     errMsg: 'getuserinfo:ok',
    //     rawData: data,
    //     userinfo: {
    //       avatartar:'',
    //       nickname:'',
    //       gender:0,
    //       city:'',
    //       province:'',
    //       country:'',
    //       language:''
    //     },
    //     // if (tt_withCredentials) {
    //     //   tt_res.call({
    //     //     signature:'',
    //     //     encryptedData:{
    //     //       //
    //     //     },
    //     //     lv:''
    //     //   })
    //     // }
    //   }
    //   if (tt_success) {
    //     tt_success(tt_res)
    //   }
    //   if (tt_complete) {
    //     tt_complete(tt_res)
    //   }
    // },

    // wx_object.fail = function (wx_res) {
    //   getApp().onekit_code = wx_res.code
    //   const tt_res = {
    //     errMsg: 'getuserinfo::false',
    //   }
    //   if (tt_fail) {
    //     tt_fail(tt_res)
    //   }
    //   if (tt_complete) {
    //     tt_complete(tt_res)
    //   }
    // }

    getApp().onekit_getuserinfo = function (data) {
      tt._getUserInfo(data, function (wx_res) {
        if (tt_success) {
          tt_success(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      });
    };
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    });
    wx.getUserInfo({});
  };

  tt.getOpenData = function getOpenData(tt_object) {
    return wx.getOpenData(tt_object);
  };

  tt._getPhoneNumber = function _getPhoneNumber(data, callback) {
    tt.login({
      success: function success(wx_res) {
        var code = wx_res.code;

        var url = getApp().onekit_server + 'phonenumber';
        console.log(data, code);
        wx.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            data: JSON.stringify(data),
            code: code
          },
          success: function success(wx_res) {
            var data = wx_res.data;
            callback(data);
          },
          fail: function fail(wx_res) {
            console.log(wx_res.data);
          }
        });
      }
    });
  };

  tt.getPhoneNumber = function getPhoneNumber(tt_object) {
    var tt_success = tt_object.success;
    // const tt_fail = tt_object.fail
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    getApp().onekit__bindgetphonenumber = function (data) {
      tt._getPhoneNumber(data, function (wx_res) {
        if (tt_success) {
          tt_success(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      });
    };
    wx.navigateTo({ url: 'page/getphonenumber' });
  };

  tt.navigateToMiniProgram = function navigateToMiniProgram(tt_object) {
    return wx.navigateToMiniProgram(tt_object);
  };

  tt.navigateBackMiniProgram = function navigateBackMiniProgram(tt_object) {
    return wx.navigateBackMiniProgram(tt_object);
  };

  tt.getAccountInfoSync = function getAccountInfoSync(tt_object) {
    return wx.getAccountInfoSync(tt_object);
  };

  tt.reportMonitor = function reportMonitor(tt_object) {
    return wx.reportMonitor(tt_object);
  };

  tt.reportAnalytics = function reportAnalytics(tt_object, eventName) {
    return wx.reportAnalytics(tt_object, eventName);
  };

  tt.pay = function pay(tt_object) {
    var url = getApp().onekit_server + 'orderinfo';
    wx.request({
      url: url,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        orderInfo: JSON.stringify(tt_object.orderInfo)
      },
      success: function success(wx_res) {
        var data = {
          out_trade_no: wx_res.data.out_trade_no
        };
        wx.requestPayment({
          timeStamp: wx_res.data.timeStamp,
          nonceStr: wx_res.data.nonceStr,
          package: wx_res.data.package,
          signType: wx_res.data.signType,
          paySign: wx_res.data.paySign,
          success: function success() {
            if (tt_object.getOrderStatus) {
              tt_object.getOrderStatus(data);
              console.log('ok');
            }
          },
          fail: function fail(wx_res) {
            console.log(wx_res);
          }
        });
      },
      fail: function fail(wx_res) {
        console.log(wx_res);
      }
    });
  };

  tt.authorize = function authorize(tt_object) {
    return wx.authorize(tt_object);
  };

  tt.openSetting = function openSetting(tt_object) {
    return wx.openSetting(tt_object);
  };

  tt.getSetting = function getSetting(tt_object) {
    return wx.getSetting(tt_object);
  };

  tt.chooseAddress = function chooseAddress(tt_object) {
    return wx.chooseAddress(tt_object);
  };

  tt.openCard = function openCard(tt_object) {
    return wx.openCard(tt_object);
  };

  tt.addCard = function addCard(tt_object) {
    return wx.addCard(tt_object);
  };

  tt.chooseInvoiceTitle = function chooseInvoiceTitle(tt_object) {
    return wx.chooseInvoiceTitle(tt_object);
  };

  tt.chooseInvoice = function chooseInvoice(tt_object) {
    return wx.chooseInvoice(tt_object);
  };

  tt.startSoterAuthentication = function startSoterAuthentication(tt_object) {
    return wx.startSoterAuthentication(tt_object);
  };

  tt.checkIsSupportSoterAuthentication = function checkIsSupportSoterAuthentication(tt_object) {
    return wx.checkIsSupportSoterAuthentication(tt_object);
  };

  tt.checkIsSoterEnrolledInDevice = function checkIsSoterEnrolledInDevice(tt_object) {
    return wx.checkIsSoterEnrolledInDevice(tt_object);
  };

  tt.getWeRunData = function getWeRunData(tt_object) {
    return wx.getWeRunData(tt_object);
  };

  // //////// Router //////////////


  tt.navigateBack = function navigateBack(tt_object) {
    return wx.navigateBack(tt_object);
  };

  tt.switchTab = function switchTab(tt_object) {
    return wx.switchTab(tt_object);
  };

  tt.navigateTo = function navigateTo(tt_object) {
    return wx.navigateTo(tt_object);
  };

  tt.reLaunch = function reLaunch(tt_object) {
    return wx.reLaunch(tt_object);
  };

  tt.redirectTo = function redirectTo(tt_object) {
    return wx.redirectTo(tt_object);
  };

  // /////////// Share /////////////


  tt.updateShareMenu = function updateShareMenu(tt_object) {
    return wx.updateShareMenu(tt_object);
  };

  tt.showShareMenu = function showShareMenu(tt_object) {
    return wx.showShareMenu(tt_object);
  };

  tt.hideShareMenu = function hideShareMenu(tt_object) {
    return wx.hideShareMenu(tt_object);
  };

  tt.getShareInfo = function getShareInfo(tt_object) {
    return wx.getShareInfo(tt_object);
  };

  // ///////////// Storage //////////////


  tt.getStorageInfoSync = function getStorageInfoSync(tt_object) {
    return wx.getStorageInfoSync(tt_object);
  };

  tt.getStorageInfo = function getStorageInfo(tt_object) {
    return wx.getStorageInfo(tt_object);
  };

  tt.clearStorageSync = function clearStorageSync(tt_object) {
    return wx.clearStorageSync(tt_object);
  };

  tt.clearStorage = function clearStorage(tt_object) {
    return wx.clearStorage(tt_object);
  };

  tt.removeStorageSync = function removeStorageSync(tt_object) {
    return wx.removeStorageSync(tt_object);
  };

  tt.removeStorage = function removeStorage(tt_object) {
    return wx.removeStorage(tt_object);
  };

  tt.setStorageSync = function setStorageSync(key, value) {
    return wx.setStorageSync(key, value);
  };

  tt.setStorage = function setStorage(tt_object) {
    return wx.setStorage(tt_object);
  };

  tt.getStorageSync = function getStorageSync(key) {
    return wx.getStorageSync(key);
  };

  tt.getStorage = function getStorage(tt_object) {
    return wx.getStorage(tt_object);
  };

  // //////////// UI ////////////////


  tt.showActionSheet = function showActionSheet(tt_object) {
    return wx.showActionSheet(tt_object);
  };

  // static redirectTo(tt_object) { return wx.redirectTo(tt_object) }
  // static redirectTo(tt_object) { return wx.redirectTo(tt_object) }


  tt.hideLoading = function hideLoading(tt_object) {
    return wx.hideLoading(tt_object);
  };

  tt.showLoading = function showLoading(tt_object) {
    return wx.showLoading(tt_object);
  };

  tt.hideToast = function hideToast(tt_object) {
    return wx.hideToast(tt_object);
  };

  tt.showToast = function showToast(tt_object) {
    return wx.showToast(tt_object);
  };

  tt.showModal = function showModal(tt_object) {
    return wx.showModal(tt_object);
  };

  tt.setNavigationBarColor = function setNavigationBarColor(tt_object) {
    return wx.setNavigationBarColor(tt_object);
  };

  tt.hideNavigationBarLoading = function hideNavigationBarLoading(tt_object) {
    return wx.hideNavigationBarLoading(tt_object);
  };

  tt.showNavigationBarLoading = function showNavigationBarLoading(tt_object) {
    return wx.showNavigationBarLoading(tt_object);
  };

  tt.setNavigationBarTitle = function setNavigationBarTitle(tt_object) {
    return wx.setNavigationBarTitle(tt_object);
  };

  tt.setBackgroundTextStyle = function setBackgroundTextStyle(tt_object) {
    return wx.setBackgroundTextStyle(tt_object);
  };

  tt.setBackgroundColor = function setBackgroundColor(tt_object) {
    return wx.setBackgroundColor(tt_object);
  };

  tt.setTabBarItem = function setTabBarItem(tt_object) {
    return wx.setTabBarItem(tt_object);
  };

  tt.setTabBarStyle = function setTabBarStyle(tt_object) {
    return wx.setTabBarStyle(tt_object);
  };

  tt.hideTabBar = function hideTabBar(tt_object) {
    return wx.hideTabBar(tt_object);
  };

  tt.showTabBar = function showTabBar(tt_object) {
    return wx.showTabBar(tt_object);
  };

  tt.hideTabBarRedDot = function hideTabBarRedDot(tt_object) {
    return wx.hideTabBarRedDot(tt_object);
  };

  tt.showTabBarRedDot = function showTabBarRedDot(tt_object) {
    return wx.showTabBarRedDot(tt_object);
  };

  tt.removeTabBarBadge = function removeTabBarBadge(tt_object) {
    return wx.removeTabBarBadge(tt_object);
  };

  tt.setTabBarBadge = function setTabBarBadge(tt_object) {
    return wx.setTabBarBadge(tt_object);
  };

  tt.loadFontFace = function loadFontFace(tt_object) {
    return wx.loadFontFace(tt_object);
  };

  tt.stopPullDownRefresh = function stopPullDownRefresh(tt_object) {
    return wx.stopPullDownRefresh(tt_object);
  };

  tt.startPullDownRefresh = function startPullDownRefresh(tt_object) {
    return wx.startPullDownRefresh(tt_object);
  };

  tt.pageScrollTo = function pageScrollTo(tt_object) {
    return wx.pageScrollTo(tt_object);
  };

  tt.setTopBarText = function setTopBarText(tt_object) {
    return wx.setTopBarText(tt_object);
  };

  tt.nextTick = function nextTick(tt_object) {
    return wx.nextTick(tt_object);
  };

  tt.getMenuButtonBoundingClientRect = function getMenuButtonBoundingClientRect(tt_object) {
    return wx.getMenuButtonBoundingClientRect(tt_object);
  };

  tt.offWindowResize = function offWindowResize(tt_object) {
    return wx.offWindowResize(tt_object);
  };

  tt.onWindowResize = function onWindowResize(tt_object) {
    return wx.onWindowResize(tt_object);
  };

  // //////////// WXML ///////////////


  tt.createSelectorQuery = function createSelectorQuery(tt_object) {
    return wx.createSelectorQuery(tt_object);
  };

  tt.createIntersectionObserver = function createIntersectionObserver(tt_object) {
    return wx.createIntersectionObserver(tt_object);
  };

  // ///////////////////////////////////


  tt.hideKeyboard = function hideKeyboard(tt_object) {
    return wx.hideKeyboard(tt_object);
  };

  // /////////////////////////////////


  tt.createARCameraContext = function createARCameraContext() {
    throw new Error('createARCameraContext�ݲ�֧��!!');
  };

  tt.exitMiniProgram = function exitMiniProgram(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    wx.showToast({

      title: '点右上角圆退出',
      success: function success() {
        var wx_res = {
          errMsg: 'exitMiniProgram:ok'
        };
        if (tt_success) {
          tt_success(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      },
      fail: function fail() {
        var wx_res = {
          errMsg: 'exitMiniProgram:fail'
        };
        if (tt_fail) {
          tt_fail(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      }
    });
  };

  tt.canIPutStuffOverComponent = function canIPutStuffOverComponent(componentName) {
    return ['map', 'viedo', 'canvas', 'camera', 'live-player', 'live-pusher'].indexOf(componentName) < 0;
  };

  tt.showFavoriteGuide = function showFavoriteGuide(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    wx.showToast({
      title: '点击右上三个点',
      success: function success() {
        var wx_res = {
          errMsg: 'showFavoriteGuide:ok'
        };
        if (tt_success) {
          tt_success(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      },
      fail: function fail() {
        var wx_res = {
          errMsg: 'showFavoriteGuide:fail'
        };
        if (tt_fail) {
          tt_fail(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      }
    });
  };

  tt.showInteractionBar = function showInteractionBar(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    wx.showToast({
      title: '不支持此类型',
      icon: 'none',
      success: function success() {
        var wx_res = {
          errMsg: 'showInteractionBar:ok'
        };
        if (tt_success) {
          tt_success(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      },
      fail: function fail() {
        var wx_res = {
          errMsg: 'showInteractionBar:fail'
        };
        if (tt_fail) {
          tt_fail(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      }
    });
  };

  tt.hideInteractionBar = function hideInteractionBar(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    wx.showToast({
      title: '不支持此类型',
      icon: 'none',
      success: function success() {
        var wx_res = {
          errMsg: 'showInteractionBar:ok'
        };
        if (tt_success) {
          tt_success(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      },
      fail: function fail() {
        var wx_res = {
          errMsg: 'showInteractionBar:fail'
        };
        if (tt_fail) {
          tt_fail(wx_res);
        }
        if (tt_complete) {
          tt_complete(wx_res);
        }
      }
    });
  };

  _createClass(tt, null, [{
    key: 'env',
    get: function get() {
      return {
        USER_DATA_PATH: wx.env.USER_DATA_PATH
      };
    }
  }]);

  return tt;
}();
/*
tt.ai = {}
for (const api of ['ocrIdCard', 'ocrBankCard', 'ocrDrivingLicense', 'ocrVehicleLicense', 'textReview', 'textToAudio', 'imageAudit', 'advancedGeneralIdentify', 'objectDetectIdentify', 'carClassify', 'dishClassify', 'logoClassify', 'animalClassify', 'plantClassify', 'getVoiceRecognizer', 'faceDetect', 'faceMatch', 'faceSearch', 'facePersonVerify', 'facePersonIdmatch', 'faceLivenessSessioncode', 'nlpLexerCustom']) {
  wx.ai_init(api)
}

function ai_init(api) {
  tt.ai[api] = (tt_object) => swan_ai.run(api, tt_object)
}
*/


exports.default = tt;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasContext = function () {
  function CanvasContext(weixinCanvasContext) {
    _classCallCheck(this, CanvasContext);

    this.weixinCanvasContext = weixinCanvasContext;
  }

  CanvasContext.prototype.draw = function draw() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return this.weixinCanvasContext.draw.apply(this, args);
  };

  CanvasContext.prototype.beginPath = function beginPath() {
    return this.weixinCanvasContext.beginPath();
  };

  CanvasContext.prototype.clip = function clip() {
    return this.weixinCanvasContext.clip();
  };

  CanvasContext.prototype.lineTo = function lineTo() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.weixinCanvasContext.lineTo.apply(this, args);
  };

  CanvasContext.prototype.setFontSize = function setFontSize() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.weixinCanvasContext.setFontSize.apply(this, args);
  };

  CanvasContext.prototype.setFillStyle = function setFillStyle() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return this.weixinCanvasContext.setFillStyle.apply(this, args);
  };

  CanvasContext.prototype.createLinearGradient = function createLinearGradient() {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return this.weixinCanvasContext.createLinearGradient.apply(this, args);
  };

  CanvasContext.prototype.setStrokeStyle = function setStrokeStyle() {
    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return this.weixinCanvasContext.setStrokeStyle.apply(this, args);
  };

  CanvasContext.prototype.setGlobalAlpha = function setGlobalAlpha() {
    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    return this.weixinCanvasContext.setGlobalAlpha.apply(this, args);
  };

  CanvasContext.prototype.setShadow = function setShadow() {
    for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    return this.weixinCanvasContext.setShadow.apply(this, args);
  };

  CanvasContext.prototype.setLineDash = function setLineDash() {
    for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    return this.weixinCanvasContext.setLineDash.apply(this, args);
  };

  CanvasContext.prototype.fill = function fill() {
    return this.weixinCanvasContext.fill();
  };

  CanvasContext.prototype.stroke = function stroke() {
    return this.weixinCanvasContext.stroke();
  };

  CanvasContext.prototype.fillRect = function fillRect() {
    for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    return this.weixinCanvasContext.fillRect.apply(this, args);
  };

  CanvasContext.prototype.strokeRect = function strokeRect() {
    for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }

    return this.weixinCanvasContext.strokeRect.apply(this, args);
  };

  CanvasContext.prototype.drawImage = function drawImage() {
    for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }

    return this.weixinCanvasContext.drawImage.apply(this, args);
  };

  CanvasContext.prototype.measureText = function measureText() {
    for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      args[_key13] = arguments[_key13];
    }

    return this.weixinCanvasContext.measureText.apply(this, args);
  };

  CanvasContext.prototype.scale = function scale() {
    for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
      args[_key14] = arguments[_key14];
    }

    return this.weixinCanvasContext.scale.apply(this, args);
  };

  CanvasContext.prototype.rotate = function rotate() {
    for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
      args[_key15] = arguments[_key15];
    }

    return this.weixinCanvasContext.rotate.apply(this, args);
  };

  CanvasContext.prototype.translate = function translate() {
    for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
      args[_key16] = arguments[_key16];
    }

    return this.weixinCanvasContext.translate.apply(this, args);
  };

  CanvasContext.prototype.save = function save() {
    return this.weixinCanvasContext.save();
  };

  CanvasContext.prototype.restore = function restore() {
    return this.weixinCanvasContext.restore();
  };

  CanvasContext.prototype.clearRect = function clearRect() {
    for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
      args[_key17] = arguments[_key17];
    }

    return this.weixinCanvasContext.clearRect.apply(this, args);
  };

  CanvasContext.prototype.fillText = function fillText() {
    for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
      args[_key18] = arguments[_key18];
    }

    return this.weixinCanvasContext.fillText.apply(this, args);
  };

  CanvasContext.prototype.setTextAlign = function setTextAlign() {
    for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
      args[_key19] = arguments[_key19];
    }

    return this.weixinCanvasContext.setTextAlign.apply(this, args);
  };

  CanvasContext.prototype.setLineCap = function setLineCap() {
    for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
      args[_key20] = arguments[_key20];
    }

    return this.weixinCanvasContext.setLineCap.apply(this, args);
  };

  CanvasContext.prototype.setLineJoin = function setLineJoin() {
    for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
      args[_key21] = arguments[_key21];
    }

    return this.weixinCanvasContext.setLineJoin.apply(this, args);
  };

  CanvasContext.prototype.setLineWidth = function setLineWidth() {
    for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
      args[_key22] = arguments[_key22];
    }

    return this.weixinCanvasContext.setLineWidth.apply(this, args);
  };

  CanvasContext.prototype.setMiterLimit = function setMiterLimit() {
    for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
      args[_key23] = arguments[_key23];
    }

    return this.weixinCanvasContext.setMiterLimit.apply(this, args);
  };

  CanvasContext.prototype.setTextBaseline = function setTextBaseline() {
    for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
      args[_key24] = arguments[_key24];
    }

    return this.weixinCanvasContext.setTextBaseline.apply(this, args);
  };

  CanvasContext.prototype.transform = function transform() {
    for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
      args[_key25] = arguments[_key25];
    }

    return this.weixinCanvasContext.transform.apply(this, args);
  };

  CanvasContext.prototype.setTransform = function setTransform() {
    for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
      args[_key26] = arguments[_key26];
    }

    return this.weixinCanvasContext.setTransform.apply(this, args);
  };

  CanvasContext.prototype.moveTo = function moveTo() {
    for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
      args[_key27] = arguments[_key27];
    }

    return this.weixinCanvasContext.moveTo.apply(this, args);
  };

  CanvasContext.prototype.arc = function arc() {
    for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
      args[_key28] = arguments[_key28];
    }

    return this.weixinCanvasContext.arc.apply(this, args);
  };

  CanvasContext.prototype.quadraticCurveTo = function quadraticCurveTo() {
    for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
      args[_key29] = arguments[_key29];
    }

    return this.weixinCanvasContext.quadraticCurveTo.apply(this, args);
  };

  CanvasContext.prototype.bezierCurveTo = function bezierCurveTo() {
    for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
      args[_key30] = arguments[_key30];
    }

    return this.weixinCanvasContext.bezierCurveTo.apply(this, args);
  };

  CanvasContext.prototype.closePath = function closePath() {
    return this.weixinCanvasContext.closePath();
  };

  _createClass(CanvasContext, [{
    key: "font",
    set: function set(font) {
      this.weixinCanvasContext.font = font;
    }

    // toutiao is not support

    // set lineWidth(lineWidth) {
    //   this.weixinCanvasContext.lineWidth = lineWidth
    // }

    // set textAlign(textAlign) {
    //   this.weixinCanvasContext.textAlign = textAlign
    // }

    // set textBaseline(textBaseline) {
    //   this.weixinCanvasContext.textBaseline = textBaseline
    // }

    // set fillStyle(fillStyle) {
    //   this.weixinCanvasContext.fillStyle = fillStyle
    // }

    // set lineCap(lineCap) {
    //   this.weixinCanvasContext.lineCap = lineCap
    // }

  }]);

  return CanvasContext;
}();

exports.default = CanvasContext;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoContext = function () {
  function VideoContext(weixinVideoContext) {
    _classCallCheck(this, VideoContext);

    this.weixinVideoContext = weixinVideoContext;
  }

  VideoContext.prototype.play = function play() {
    return this.weixinVideoContext.play();
  };

  VideoContext.prototype.pause = function pause() {
    return this.weixinVideoContext.pause();
  };

  VideoContext.prototype.stop = function stop() {
    return this.weixinVideoContext.stop();
  };

  VideoContext.prototype.seek = function seek(position) {
    return this.weixinVideoContext.seek(position);
  };

  VideoContext.prototype.requestFullScreen = function requestFullScreen() {
    return this.weixinVideoContext.requestFullScreen();
  };

  VideoContext.prototype.exitFullScreen = function exitFullScreen() {
    return this.weixinVideoContext.exitFullScreen();
  };

  return VideoContext;
}();

exports.default = VideoContext;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _OneKit = __webpack_require__(2);

var _OneKit2 = _interopRequireDefault(_OneKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */


var FileSystemManager = function () {
  function FileSystemManager(weixinFileSystemManager) {
    _classCallCheck(this, FileSystemManager);

    this.weixinFileSystemManager = weixinFileSystemManager;
  }

  FileSystemManager.prototype.accessSync = function accessSync(tt_path) {
    try {
      var wx_path = _OneKit2.default.tt_filePath2wx_filePath(tt_path);
      this.weixinFileSystemManager.accessSync(wx_path);
    } catch (ex) {
      throw new Error('accessSync:fail no such file or directory, accessSync');
    }
  };

  FileSystemManager.prototype.access = function access(tt_object) {
    var tt_path = tt_object.path;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_path = _OneKit2.default.tt_filePath2wx_filePath(tt_path);
    var wx_object = {
      path: wx_path,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.access(wx_object);
  };

  FileSystemManager.prototype.saveFileSync = function saveFileSync(tt_tempFilePath, tt_filePath) {
    if (!tt_filePath) {
      var ext = tt_tempFilePath.substring(tt_tempFilePath.lastIndexOf('.'));
      tt_filePath = _OneKit2.default.new_tt_filePath(ext);
    }
    var wx_tempFilePath = tt_tempFilePath;
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    this.weixinFileSystemManager.saveFileSync(wx_tempFilePath, wx_filePath);
    return tt_filePath;
  };

  FileSystemManager.prototype.saveFile = function saveFile(tt_object) {
    var tt_tempFilePath = tt_object.tempFilePath;
    var ext = tt_tempFilePath.substring(tt_tempFilePath.lastIndexOf('.'));
    var tt_filePath = tt_object.filePath || _OneKit2.default.new_tt_filePath(ext);
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_tempFilePath = tt_tempFilePath;
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    var wx_object = {
      tempFilePath: wx_tempFilePath,
      filePath: wx_filePath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg,
          savedFilePath: tt_filePath
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.saveFile(wx_object);
  };

  FileSystemManager.prototype.getSavedFileList = function getSavedFileList(tt_object) {
    return this.weixinFileSystemManager.getSavedFileList(tt_object);
  };

  FileSystemManager.prototype.removeSavedFile = function removeSavedFile(tt_object) {
    var tt_filePath = tt_object.filePath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    var wx_object = {
      filePath: wx_filePath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.removeSavedFile(wx_object);
  };

  FileSystemManager.prototype.copyFileSync = function copyFileSync(tt_srcPath, tt_destPath) {
    var wx_srcPath = _OneKit2.default.tt_filePath2wx_filePath(tt_srcPath);
    var wx_destPath = _OneKit2.default.tt_filePath2wx_filePath(tt_destPath);
    return this.weixinFileSystemManager.saveFileSync(wx_srcPath, wx_destPath);
  };

  FileSystemManager.prototype.copyFile = function copyFile(tt_object) {
    var tt_srcPath = tt_object.srcPath;
    var tt_destPath = tt_object.destPath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_srcPath = _OneKit2.default.tt_filePath2wx_filePath(tt_srcPath);
    var wx_destPath = _OneKit2.default.tt_filePath2wx_filePath(tt_destPath);
    var wx_object = {
      srcPath: wx_srcPath,
      destPath: wx_destPath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.copyFile(wx_object);
  };

  FileSystemManager.prototype.getFileInfo = function getFileInfo(tt_object) {
    var tt_filePath = tt_object.filePath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    var wx_object = {
      filePath: wx_filePath,
      success: function success(wx_res) {
        var tt_res = {
          size: wx_res.size,
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.getFileInfo(wx_object);
  };

  FileSystemManager.prototype.mkdirSync = function mkdirSync(tt_dirPath) {
    var wx_dirPath = _OneKit2.default.tt_filePath2wx_filePath(tt_dirPath);
    return this.weixinFileSystemManager.mkdirSync(wx_dirPath);
  };

  FileSystemManager.prototype.mkdir = function mkdir(tt_object) {
    var tt_dirPath = tt_object.dirPath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_dirPath = _OneKit2.default.tt_filePath2wx_filePath(tt_dirPath);
    var wx_object = {
      dirPath: wx_dirPath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.mkdir(wx_object);
  };

  FileSystemManager.prototype.readdirSync = function readdirSync(tt_dirPath) {
    var wx_dirPath = _OneKit2.default.tt_filePath2wx_filePath(tt_dirPath);
    return this.weixinFileSystemManager.readdirSync(wx_dirPath);
  };

  FileSystemManager.prototype.readdir = function readdir(tt_object) {
    var tt_dirPath = tt_object.dirPath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_dirPath = _OneKit2.default.tt_filePath2wx_filePath(tt_dirPath);
    var wx_object = {
      dirPath: wx_dirPath,
      success: function success(wx_res) {
        var tt_res = {
          files: wx_res.files,
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.readdir(wx_object);
  };

  FileSystemManager.prototype.readFileSync = function readFileSync(tt_filePath, tt_encoding) {
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    var wx_encoding = tt_encoding;
    return this.weixinFileSystemManager.readFileSync(wx_filePath, wx_encoding);
  };

  FileSystemManager.prototype.readFile = function readFile(tt_object) {
    var tt_filePath = tt_object.filePath;
    var tt_encoding = tt_object.encoding;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    var wx_encoding = tt_encoding;
    var wx_object = {
      filePath: wx_filePath,
      encoding: wx_encoding,
      success: function success(wx_res) {
        var tt_res = {
          data: wx_res.data,
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.readFile(wx_object);
  };

  FileSystemManager.prototype.renameSync = function renameSync(tt_oldPath, tt_newPath) {
    var wx_oldPath = _OneKit2.default.tt_filePath2wx_filePath(tt_oldPath);
    var wx_newPath = _OneKit2.default.tt_filePath2wx_filePath(tt_newPath);
    return this.weixinFileSystemManager.renameSync(wx_oldPath, wx_newPath);
  };

  FileSystemManager.prototype.rename = function rename(tt_object) {
    var tt_newPath = tt_object.newPath;
    var tt_oldPath = tt_object.oldPath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    //
    var wx_newPath = _OneKit2.default.tt_filePath2wx_filePath(tt_newPath);
    var wx_oldPath = _OneKit2.default.tt_filePath2wx_filePath(tt_oldPath);
    var wx_object = {
      oldPath: wx_oldPath,
      newPath: wx_newPath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.rename(wx_object);
  };

  FileSystemManager.prototype.rmdirSync = function rmdirSync(tt_dirPath) {
    var wx_dirPath = _OneKit2.default.tt_filePath2wx_filePath(tt_dirPath);
    return this.weixinFileSystemManager.rmdirSync(wx_dirPath);
  };

  FileSystemManager.prototype.rmdir = function rmdir(tt_object) {
    var tt_dirPath = tt_object.dirPath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_dirPath = _OneKit2.default.tt_filePath2wx_filePath(tt_dirPath);
    var wx_object = {
      dirPath: wx_dirPath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.rmdir(wx_object);
  };

  FileSystemManager.prototype.statSync = function statSync(tt_path) {
    var wx_path = _OneKit2.default.tt_filePath2wx_filePath(tt_path);
    return this.weixinFileSystemManager.statSync(wx_path);
  };

  FileSystemManager.prototype.stat = function stat(tt_object) {
    var tt_path = tt_object.path;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_path = _OneKit2.default.tt_filePath2wx_filePath(tt_path);
    var wx_object = {
      path: wx_path,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg,
          stats: wx_res.stats
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.stat(wx_object);
  };

  FileSystemManager.prototype.unlinkSync = function unlinkSync(tt_filePath) {
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    return this.weixinFileSystemManager.unlinkSync(wx_filePath);
  };

  FileSystemManager.prototype.unlink = function unlink(tt_object) {
    var tt_filePath = tt_object.filePath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    var wx_object = {
      filePath: wx_filePath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.unlink(wx_object);
  };

  FileSystemManager.prototype.unzip = function unzip(tt_object) {
    var tt_zipFilePath = tt_object.zipFilePath;
    var tt_targetPath = tt_object.targetPath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    //
    var wx_targetPath = _OneKit2.default.tt_filePath2wx_filePath(tt_targetPath);
    var wx_object = {
      zipFilePath: tt_zipFilePath,
      targetPath: wx_targetPath,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.unzip(wx_object);
  };

  FileSystemManager.prototype.writeFileSync = function writeFileSync(tt_filePath, data, encoding) {
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    return this.weixinFileSystemManager.writeFileSync(wx_filePath, data, encoding);
  };

  FileSystemManager.prototype.writeFile = function writeFile(tt_object) {
    var tt_filePath = tt_object.filePath;
    var tt_data = tt_object.data;
    var tt_encoding = tt_object.encoding;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    //
    var wx_filePath = _OneKit2.default.tt_filePath2wx_filePath(tt_filePath);
    var wx_object = {
      filePath: wx_filePath,
      data: tt_data,
      encoding: tt_encoding,
      success: function success(wx_res) {
        var tt_res = {
          errMsg: wx_res.errMsg
        };
        if (tt_success) {
          tt_success(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      },
      fail: function fail(wx_res) {
        var tt_res = wx_res;
        if (tt_fail) {
          tt_fail(tt_res);
        }
        if (tt_complete) {
          tt_complete(tt_res);
        }
      }
    };
    return this.weixinFileSystemManager.writeFile(wx_object);
  };

  return FileSystemManager;
}();

exports.default = FileSystemManager;

/***/ })
/******/ ]);