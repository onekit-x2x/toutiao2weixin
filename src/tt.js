/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-console */
import CanvasContext from './api/CanvasContext'
import LivePlayerContext from './api/LivePlayerContext'
import VideoContext from './api/VideoContext'
import FileSystemManager from './api/FileSystemManager'
import OneKit from './js/OneKit'

export default class tt {
  static get env() {
    return {
      USER_DATA_PATH: wx.env.USER_DATA_PATH
    }
  }

  // ///////////////// animation //////////////////////////
  static createAnimation(tt_object) {
    return wx.createAnimation(tt_object)
  }

  // /////////////// basic ////////////////////////////////
  static canIUse() {
    return true
  }

  static getSystemInfo(tt_object) {
    return wx.getSystemInfo(tt_object)
  }

  static getSystemInfoSync() {
    return wx.getSystemInfoSync()
  }

  static base64ToArrayBuffer(base64) {
    return wx.base64ToArrayBuffer(base64)
  }

  static arrayBufferToBase64(arrayBuffer) {
    return wx.arrayBufferToBase64(arrayBuffer)
  }

  static getUpdateManager(tt_object) {
    return wx.getUpdateManager(tt_object)
  }

  static getLaunchOptionsSync(tt_object) {
    return wx.getLaunchOptionsSync(tt_object)
  }

  static offPageNotFound(tt_object) {
    return wx.offPageNotFound(tt_object)
  }

  static onPageNotFound(tt_object) {
    return wx.onPageNotFound(tt_object)
  }

  static offError(tt_object) {
    return wx.offError(tt_object)
  }

  static onError(tt_object) {
    return wx.onError(tt_object)
  }

  static offAppShow(tt_object) {
    return wx.offAppShow(tt_object)
  }

  static onAppShow(tt_object) {
    return wx.onAppShow(tt_object)
  }

  static offAppHide(tt_object) {
    return wx.offAppHide(tt_object)
  }

  static onAppHide(tt_object) {
    return wx.onAppHide(tt_object)
  }

  static setEnableDebug(tt_object) {
    return wx.setEnableDebug(tt_object)
  }

  static getLogManager(tt_object) {
    return wx.getLogManager(tt_object)
  }

  static createCanvasContext(canvasId) {
    return new CanvasContext(wx.createCanvasContext(canvasId))
  }

  static createLivePlayerContext(livePlayerId) {
    return new LivePlayerContext(wx.createLivePlayerContext(livePlayerId))
  }

  static createVideoContext(videoId) {
    return new VideoContext(wx.createVideoContext(videoId))
  }

  static canvasToTempFilePath(tt_object) {
    return wx.canvasToTempFilePath(tt_object)
  }

  static canvasPutImageData(tt_object) {
    return wx.canvasPutImageData(tt_object)
  }

  static canvasGetImageData(tt_object) {
    return wx.canvasGetImageData(tt_object)
  }

  // //////////// Device //////////////////
  static onBeaconServiceChange(tt_object) {
    return wx.onBeaconServiceChange(tt_object)
  }

  static onBeaconUpdate(tt_object) {
    return wx.onBeaconUpdate(tt_object)
  }

  static getBeacons(tt_object) {
    return wx.getBeacons(tt_object)
  }

  static stopBeaconDiscovery(tt_object) {
    return wx.stopBeaconDiscovery(tt_object)
  }

  static startBeaconDiscovery(tt_object) {
    return wx.startBeaconDiscovery(tt_object)
  }

  static stopWifi(tt_object) {
    return wx.stopWifi(tt_object)
  }

  static startWifi(tt_object) {
    return wx.startWifi(tt_object)
  }

  static setWifiList(tt_object) {
    return wx.setWifiList(tt_object)
  }

  static onWifiConnected(tt_object) {
    return wx.onWifiConnected(tt_object)
  }

  static onGetWifiList(tt_object) {
    return wx.onGetWifiList(tt_object)
  }

  static getWifiList(tt_object) {
    return wx.getWifiList(tt_object)
  }

  static getConnectedWifi(tt_object) {
    return wx.getConnectedWifi(tt_object)
  }

  static connectWifi(tt_object) {
    return wx.connectWifi(tt_object)
  }

  //
  static onAccelerometerChange(callback) {
    return wx.onAccelerometerChange(callback)
  }

  static stopAccelerometer(tt_object) {
    return wx.stopAccelerometer(tt_object)
  }

  static startAccelerometer(tt_object) {
    return wx.startAccelerometer(tt_object)
  }

  static getBatteryInfoSync(tt_object) {
    return wx.getBatteryInfoSync(tt_object)
  }

  static _getBatteryInfo(tt_res) {
    return wx._getBatteryInfo(tt_res)
  }

  static getBatteryInfo(tt_object) {
    return wx.getBatteryInfo(tt_object)
  }

  //
  static getClipboardData(tt_object) {
    return wx.getClipboardData(tt_object)
  }

  static setClipboardData(tt_object) {
    return wx.setClipboardData(tt_object)
  }

  static onCompassChange(callback) {
    return wx.onCompassChange(callback)
  }

  static stopCompass(tt_object) {
    return wx.stopCompass(tt_object)
  }

  static startCompass(tt_object) {
    return wx.startCompass(tt_object)
  }

  static addPhoneContact(tt_object) {
    return wx.addPhoneContact(tt_object)
  }

  static onGyroscopeChange(callback) {
    return wx.onGyroscopeChange(callback)
  }

  static stopGyroscope(tt_object) {
    return wx.stopGyroscope(tt_object)
  }

  static startGyroscope(tt_object) {
    return wx.startGyroscope(tt_object)
  }

  //
  static onDeviceMotionChange(tt_object) {
    return wx.onDeviceMotionChange(tt_object)
  }

  static stopDeviceMotionListening(tt_object) {
    return wx.stopDeviceMotionListening(tt_object)
  }

  static startDeviceMotionListening(tt_object) {
    return wx.startDeviceMotionListening(tt_object)
  }

  //
  static getNetworkType(tt_object) {
    return wx.getNetworkType(tt_object)
  }

  static _network(wx_res) {
    return wx._network(wx_res)
  }

  static onNetworkStatusChange(callback) {
    return wx.onNetworkStatusChange(callback)
  }

  //
  static makePhoneCall(tt_object) {
    return wx.makePhoneCall(tt_object)
  }

  static scanCode(tt_object) {
    return wx.scanCode(tt_object)
  }

  //
  static vibrateLong(tt_object) {
    return wx.vibrateLong(tt_object)
  }

  static vibrateShort(tt_object) {
    return wx.vibrateShort(tt_object)
  }

  //
  static onMemoryWarning(tt_object) {
    return wx.onMemoryWarning(tt_object)
  }

  //
  static setScreenBrightness(tt_object) {
    return wx.setScreenBrightness(tt_object)
  }

  static setKeepScreenOn(tt_object) {
    return wx.setKeepScreenOn(tt_object)
  }

  static onUserCaptureScreen(tt_object) {
    return wx.onUserCaptureScreen(tt_object)
  }

  static getScreenBrightness(tt_object) {
    return wx.getScreenBrightness(tt_object)
  }

  // ///////////////// Ext //////////////
  static getExtConfigSync(tt_object) {
    return wx.getExtConfigSync(tt_object)
  }

  static getExtConfig(tt_object) {
    return wx.getExtConfig(tt_object)
  }

  // ////////////////// File //////////
  static getFileSystemManager() {
    return new FileSystemManager(wx.getFileSystemManager())
  }

  static getFileInfo(tt_object) {
    const tt_filePath = tt_object.filePath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_filePath = OneKit.tt_filePath2wx_filePath(tt_filePath)
    const wx_object = {
      filePath: wx_filePath,
      success(wx_res) {
        const tt_res = {
          errMsg: wx_res.errMsg,
          size: wx_res.size
        }
        if (tt_success) {
          tt_success(tt_res)
        }
        if (tt_complete) {
          tt_complete(tt_res)
        }
      },
      fail(wx_res) {
        const tt_res = wx_res
        if (tt_fail) {
          tt_fail(tt_res)
        }
        if (tt_complete) {
          tt_complete(tt_res)
        }
      }
    }
    return wx.getFileInfo(wx_object)
  }

  static removeSavedFile(tt_object) {
    const tt_filePath = tt_object.filePath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_filePath = OneKit.tt_filePath2wx_filePath(tt_filePath)
    const wx_object = {
      filePath: wx_filePath,
      success(wx_res) {
        const tt_res = {
          errMsg: wx_res.errMsg
        }
        if (tt_success) {
          tt_success(tt_res)
        }
        if (tt_complete) {
          tt_complete(tt_res)
        }
      },
      fail(wx_res) {
        const tt_res = wx_res
        if (tt_fail) {
          tt_fail(tt_res)
        }
        if (tt_complete) {
          tt_complete(tt_res)
        }
      }
    }
    return wx.removeSavedFile(wx_object)
  }

  static getSavedFileInfo(tt_object) {
    return wx.getSavedFileInfo(tt_object)
  }

  static getSavedFileList(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_object = {
      success(wx_res) {
        const tt_res = {
          fileList: wx_res.fileList.map(function (wx_file) {
            const tt_file = {

              filePath: getApp().wxStorePath2ttSavePath[wx_file.filePath],
              createTime: wx_file.createTime,
              size: wx_file.size
            }
            return tt_file
          })
        }
        if (tt_success) {
          tt_success(tt_res)
        }
        if (tt_complete) {
          tt_complete(tt_res)
        }
      },
      fail(wx_res) {
        const tt_res = wx_res
        if (tt_fail) {
          tt_fail(tt_res)
        }
        if (tt_complete) {
          tt_complete(tt_res)
        }
      }
    }
    return wx.getSavedFileList(wx_object)
  }

  static openDocument(tt_object) {
    return wx.openDocument(tt_object)
  }


  // ////////// Location ///////////////


  static saveFile(tt_object) {
    const tt_tempFilePath = tt_object.tempFilePath
    const ext = tt_tempFilePath.substring(tt_tempFilePath.lastIndexOf('.'))
    const tt_filePath = tt_object.filePath || OneKit.new_tt_filePath(ext)
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_tempFilePath = tt_tempFilePath
    const wx_object = {
      tempFilePath: wx_tempFilePath,
      success(wx_res) {
        OneKit.save_wx_storePath(tt_filePath, wx_res.savedFilePath)

        const tt_res = {
          errMsg: wx_res.errMsg,
          savedFilePath: tt_filePath
        }
        if (tt_success) {
          tt_success(tt_res)
        }
        if (tt_complete) {
          tt_complete(tt_res)
        }
      },
      fail(wx_res) {
        const tt_res = wx_res
        if (tt_fail) {
          tt_fail(tt_res)
        }
        if (tt_complete) {
          tt_complete(tt_res)
        }
      }
    }
    wx.saveFile(wx_object)
  }

  static openLocation(tt_object) {
    return wx.openLocation(tt_object)
  }

  static getLocation(tt_object) {
    return wx.getLocation(tt_object)
  }

  static chooseLocation(tt_object) {
    return wx.chooseLocation(tt_object)
  }

  // //////// Media ////////////////////
  static createMapContext(tt_object) {
    return wx.createMapContext(tt_object)
  }

  static compressImage(tt_object) {
    return wx.compressImage(tt_object)
  }

  static saveImageToPhotosAlbum(tt_object) {
    return wx.saveImageToPhotosAlbum(tt_object)
  }

  static getImageInfo(tt_object) {
    return wx.getImageInfo(tt_object)
  }

  static previewImage(tt_object) {
    return wx.previewImage(tt_object)
  }

  static chooseImage(tt_object) {
    return wx.chooseImage(tt_object)
  }

  static saveVideoToPhotosAlbum(tt_object) {
    return wx.saveVideoToPhotosAlbum(tt_object)
  }

  static chooseVideo(tt_object) {
    return wx.chooseVideo(tt_object)
  }

  static stopVoice(tt_object) {
    return wx.stopVoice(tt_object)
  }

  static pauseVoice(tt_object) {
    return wx.pauseVoice(tt_object)
  }

  static playVoice(tt_object) {
    return wx.playVoice(tt_object)
  }

  static setInnerAudioOption(tt_object) {
    return wx.setInnerAudioOption(tt_object)
  }

  static getAvailableAudioSources(tt_object) {
    return wx.getAvailableAudioSources(tt_object)
  }

  static createInnerAudioContext(tt_object) {
    return wx.createInnerAudioContext(tt_object)
  }

  static createAudioContext(tt_object) {
    return wx.createAudioContext(tt_object)
  }

  static onBackgroundAudioStop(tt_object) {
    return wx.onBackgroundAudioStop(tt_object)
  }

  static onBackgroundAudioPause(tt_object) {
    return wx.onBackgroundAudioPause(tt_object)
  }

  static onBackgroundAudioPlay(tt_object) {
    return wx.onBackgroundAudioPlay(tt_object)
  }

  static stopBackgroundAudio(tt_object) {
    return wx.stopBackgroundAudio(tt_object)
  }

  static seekBackgroundAudio(tt_object) {
    return wx.seekBackgroundAudio(tt_object)
  }

  static pauseBackgroundAudio(tt_object) {
    return wx.pauseBackgroundAudio(tt_object)
  }

  static playBackgroundAudio(tt_object) {
    return wx.playBackgroundAudio(tt_object)
  }

  static getBackgroundAudioPlayerState(tt_object) {
    return wx.getBackgroundAudioPlayerState(tt_object)
  }

  static getBackgroundAudioManager(tt_object) {
    return wx.getBackgroundAudioManager(tt_object)
  }

  static createLivePusherContext(tt_object) {
    return wx.createLivePusherContext(tt_object)
  }

  static getRecorderManager(tt_object) {
    return wx.getRecorderManager(tt_object)
  }

  // ////////////// Network ///////////////
  static request(tt_object) {
    return wx.request(tt_object)
  }

  static downloadFile(tt_object) {
    return wx.downloadFile(tt_object)
  }

  static uploadFile(tt_object) {
    return wx.uploadFile(tt_object)
  }

  //
  static connectSocket(tt_object) {
    return wx.connectSocket(tt_object)
  }

  static onSocketError(tt_object) {
    return wx.onSocketError(tt_object)
  }

  static onSocketMessage(tt_object) {
    return wx.onSocketMessage(tt_object)
  }

  static onSocketClose(tt_object) {
    return wx.onSocketClose(tt_object)
  }

  static onSocketOpen(tt_object) {
    return wx.connectSocket(tt_object)
  }

  static sendSocketMessage(tt_object) {
    return wx.sendSocketMessage(tt_object)
  }

  static closeSocket(tt_object) {
    return wx.closeSocket(tt_object)
  }

  static offLocalServiceResolveFail(tt_object) {
    return wx.offLocalServiceResolveFail(tt_object)
  }

  static onLocalServiceResolveFail(tt_object) {
    return wx.onLocalServiceResolveFail(tt_object)
  }

  static offLocalServiceDiscoveryStop(tt_object) {
    return wx.offLocalServiceDiscoveryStop(tt_object)
  }

  static onLocalServiceDiscoveryStop(tt_object) {
    return wx.onLocalServiceDiscoveryStop(tt_object)
  }

  static offLocalServiceLost(tt_object) {
    return wx.offLocalServiceLost(tt_object)
  }

  static onLocalServiceLost(tt_object) {
    return wx.onLocalServiceLost(tt_object)
  }

  static offLocalServiceFound(tt_object) {
    return wx.offLocalServiceFound(tt_object)
  }

  static onLocalServiceFound(tt_object) {
    return wx.onLocalServiceFound(tt_object)
  }

  static stopLocalServiceDiscovery(tt_object) {
    return wx.stopLocalServiceDiscovery(tt_object)
  }

  static startLocalServiceDiscovery(tt_object) {
    return wx.startLocalServiceDiscovery(tt_object)
  }

  // /////// Open Interface //////////
  static _checkSession() {
    const now = new Date().getTime()
    return getApp().onekit_code && getApp().onekit_login && now <= getApp().onekit_login + 1000 * 60 * 60 * 24 * 3
  }

  static login(tt_object) {
    if (tt_object == null) {
      return
    }
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    // //////////////////////
    if (tt._checkSession()) {
      const tt_res = {
        anonymousCode: getApp().onekit_code,
        code: getApp().onekit_code,
        errMsg: 'login:ok',
        isLogin: true
      }
      if (tt_success) {
        tt_success(tt_res)
      }
      if (tt_complete) {
        tt_complete(tt_res)
      }
      return
    }

    const wx_object = {}
    wx_object.success = function (wx_res) {
      getApp().onekit_code = wx_res.code

      getApp().onekit_login = new Date().getTime()
      const tt_res = {
        anonymousCode: wx_res.code,
        code: wx_res.code,
        errMsg: 'login:ok',
        isLogin: true
      }
      if (tt_success) {
        tt_success(tt_res)
      }
      if (tt_complete) {
        tt_complete(tt_res)
      }
    }
    wx_object.fail = function (wx_res) {
      getApp().onekit_code = wx_res.code

      getApp().onekit_login = new Date().getTime()
      const tt_res = {
        anonymousCode: wx_res.code,
        code: wx_res.code,
        errMsg: 'login:false',
        isLogin: true
      }
      if (tt_fail) {
        tt_fail(tt_res)
      }
      if (tt_complete) {
        tt_complete(tt_res)
      }
    }
    wx.login(wx_object)
  }

  static _getUserInfo(data, callback) {
    tt.login({
      success(wx_res) {
        console.log(wx_res)
        const code = wx_res.code

        const withCredentials = getApp().onekit_getuserinfo_withCredentials === true

        const url = getApp().onekit_server + 'userinfo'
        wx.request({
          url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            code,
            withCredentials,
            data: JSON.stringify(data)
          },
          success(wx_res) {
            callback(wx_res.data)
          },
          fail(wx_res) {
            console.log(wx_res)
            callback(wx_res)
          }
        })
      },
      fail(wx_res) {
        console.log(wx_res)
      }

    })
  }

  static getUserInfo(tt_object) {
    const tt_withCredentials = tt_object.withCredentials
    const tt_success = tt_object.success
    // const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    // ///////
    getApp().onekit_getuserinfo_withCredentials = tt_withCredentials

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

    getApp().onekit_getuserinfo = (data) => {
      tt._getUserInfo(data, (wx_res) => {
        if (tt_success) {
          tt_success(wx_res)
        }
        if (tt_complete) {
          tt_complete(wx_res)
        }
      })
    }
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
    wx.getUserInfo({

    })
  }

  static getOpenData(tt_object) {
    return wx.getOpenData(tt_object)
  }

  static _getPhoneNumber(data, callback) {
    tt.login({
      success: (wx_res) => {
        const code = wx_res.code

        const url = getApp().onekit_server + 'phonenumber'
        console.log(data, code)
        wx.request({
          url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            data: JSON.stringify(data),
            code
          },
          success(wx_res) {
            const data = wx_res.data
            callback(data)
          },
          fail(wx_res) {
            console.log(wx_res.data)
          }
        })
      }
    })
  }

  static getPhoneNumber(tt_object) {
    const tt_success = tt_object.success
    // const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    getApp().onekit__bindgetphonenumber = (data) => {
      tt._getPhoneNumber(data, (wx_res) => {
        if (tt_success) {
          tt_success(wx_res)
        }
        if (tt_complete) {
          tt_complete(wx_res)
        }
      })
    }
    wx.navigateTo({url: 'page/getphonenumber'})
  }

  static navigateToMiniProgram(tt_object) {
    return wx.navigateToMiniProgram(tt_object)
  }

  static navigateBackMiniProgram(tt_object) {
    return wx.navigateBackMiniProgram(tt_object)
  }

  static getAccountInfoSync(tt_object) {
    return wx.getAccountInfoSync(tt_object)
  }

  static reportMonitor(tt_object) {
    return wx.reportMonitor(tt_object)
  }

  static reportAnalytics(tt_object, eventName) {
    return wx.reportAnalytics(tt_object, eventName)
  }

  static pay(tt_object) {
    const url = getApp().onekit_server + 'orderinfo'
    wx.request({
      url,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        orderInfo: JSON.stringify(tt_object.orderInfo)
      },
      success(wx_res) {
        const data = {
          out_trade_no: wx_res.data.out_trade_no
        }
        wx.requestPayment({
          timeStamp: wx_res.data.timeStamp,
          nonceStr: wx_res.data.nonceStr,
          package: wx_res.data.package,
          signType: wx_res.data.signType,
          paySign: wx_res.data.paySign,
          success() {
            if (tt_object.getOrderStatus) {
              tt_object.getOrderStatus(data)
              console.log('ok')
            }
          },
          fail(wx_res) {
            console.log(wx_res)
          }
        })
      },
      fail(wx_res) {
        console.log(wx_res)
      }
    })
  }

  static authorize(tt_object) {
    return wx.authorize(tt_object)
  }

  static openSetting(tt_object) {
    return wx.openSetting(tt_object)
  }

  static getSetting(tt_object) {
    return wx.getSetting(tt_object)
  }

  static chooseAddress(tt_object) {
    return wx.chooseAddress(tt_object)
  }

  static openCard(tt_object) {
    return wx.openCard(tt_object)
  }

  static addCard(tt_object) {
    return wx.addCard(tt_object)
  }

  static chooseInvoiceTitle(tt_object) {
    return wx.chooseInvoiceTitle(tt_object)
  }

  static chooseInvoice(tt_object) {
    return wx.chooseInvoice(tt_object)
  }

  static startSoterAuthentication(tt_object) {
    return wx.startSoterAuthentication(tt_object)
  }

  static checkIsSupportSoterAuthentication(tt_object) {
    return wx.checkIsSupportSoterAuthentication(tt_object)
  }

  static checkIsSoterEnrolledInDevice(tt_object) {
    return wx.checkIsSoterEnrolledInDevice(tt_object)
  }

  static getWeRunData(tt_object) {
    return wx.getWeRunData(tt_object)
  }

  // //////// Router //////////////
  static navigateBack(tt_object) {
    return wx.navigateBack(tt_object)
  }

  static switchTab(tt_object) {
    return wx.switchTab(tt_object)
  }

  static navigateTo(tt_object) {
    return wx.navigateTo(tt_object)
  }

  static reLaunch(tt_object) {
    return wx.reLaunch(tt_object)
  }

  static redirectTo(tt_object) {
    return wx.redirectTo(tt_object)
  }

  // /////////// Share /////////////
  static updateShareMenu(tt_object) {
    return wx.updateShareMenu(tt_object)
  }

  static showShareMenu(tt_object) {
    return wx.showShareMenu(tt_object)
  }

  static hideShareMenu(tt_object) {
    return wx.hideShareMenu(tt_object)
  }

  static getShareInfo(tt_object) {
    return wx.getShareInfo(tt_object)
  }

  // ///////////// Storage //////////////
  static getStorageInfoSync(tt_object) {
    return wx.getStorageInfoSync(tt_object)
  }

  static getStorageInfo(tt_object) {
    return wx.getStorageInfo(tt_object)
  }

  static clearStorageSync(tt_object) {
    return wx.clearStorageSync(tt_object)
  }

  static clearStorage(tt_object) {
    return wx.clearStorage(tt_object)
  }

  static removeStorageSync(tt_object) {
    return wx.removeStorageSync(tt_object)
  }

  static removeStorage(tt_object) {
    return wx.removeStorage(tt_object)
  }

  static setStorageSync(key, value) {
    return wx.setStorageSync(key, value)
  }

  static setStorage(tt_object) {
    return wx.setStorage(tt_object)
  }

  static getStorageSync(key) {
    return wx.getStorageSync(key)
  }

  static getStorage(tt_object) {
    return wx.getStorage(tt_object)
  }

  // //////////// UI ////////////////
  static showActionSheet(tt_object) {
    return wx.showActionSheet(tt_object)
  }

  // static redirectTo(tt_object) { return wx.redirectTo(tt_object) }
  // static redirectTo(tt_object) { return wx.redirectTo(tt_object) }
  static hideLoading(tt_object) {
    return wx.hideLoading(tt_object)
  }

  static showLoading(tt_object) {
    return wx.showLoading(tt_object)
  }

  static hideToast(tt_object) {
    return wx.hideToast(tt_object)
  }

  static showToast(tt_object) {
    return wx.showToast(tt_object)
  }

  static showModal(tt_object) {
    return wx.showModal(tt_object)
  }

  static setNavigationBarColor(tt_object) {
    return wx.setNavigationBarColor(tt_object)
  }

  static hideNavigationBarLoading(tt_object) {
    return wx.hideNavigationBarLoading(tt_object)
  }

  static showNavigationBarLoading(tt_object) {
    return wx.showNavigationBarLoading(tt_object)
  }

  static setNavigationBarTitle(tt_object) {
    return wx.setNavigationBarTitle(tt_object)
  }

  static setBackgroundTextStyle(tt_object) {
    return wx.setBackgroundTextStyle(tt_object)
  }

  static setBackgroundColor(tt_object) {
    return wx.setBackgroundColor(tt_object)
  }

  static setTabBarItem(tt_object) {
    return wx.setTabBarItem(tt_object)
  }

  static setTabBarStyle(tt_object) {
    return wx.setTabBarStyle(tt_object)
  }

  static hideTabBar(tt_object) {
    return wx.hideTabBar(tt_object)
  }

  static showTabBar(tt_object) {
    return wx.showTabBar(tt_object)
  }

  static hideTabBarRedDot(tt_object) {
    return wx.hideTabBarRedDot(tt_object)
  }

  static showTabBarRedDot(tt_object) {
    return wx.showTabBarRedDot(tt_object)
  }

  static removeTabBarBadge(tt_object) {
    return wx.removeTabBarBadge(tt_object)
  }

  static setTabBarBadge(tt_object) {
    return wx.setTabBarBadge(tt_object)
  }

  static loadFontFace(tt_object) {
    return wx.loadFontFace(tt_object)
  }

  static stopPullDownRefresh(tt_object) {
    return wx.stopPullDownRefresh(tt_object)
  }

  static startPullDownRefresh(tt_object) {
    return wx.startPullDownRefresh(tt_object)
  }

  static pageScrollTo(tt_object) {
    return wx.pageScrollTo(tt_object)
  }

  static setTopBarText(tt_object) {
    return wx.setTopBarText(tt_object)
  }

  static nextTick(tt_object) {
    return wx.nextTick(tt_object)
  }

  static getMenuButtonBoundingClientRect(tt_object) {
    return wx.getMenuButtonBoundingClientRect(tt_object)
  }

  static offWindowResize(tt_object) {
    return wx.offWindowResize(tt_object)
  }

  static onWindowResize(tt_object) {
    return wx.onWindowResize(tt_object)
  }

  // //////////// WXML ///////////////
  static createSelectorQuery(tt_object) {
    return wx.createSelectorQuery(tt_object)
  }

  static createIntersectionObserver(tt_object) {
    return wx.createIntersectionObserver(tt_object)
  }

  // ///////////////////////////////////
  static hideKeyboard(tt_object) {
    return wx.hideKeyboard(tt_object)
  }

  // /////////////////////////////////
  static createARCameraContext() {
    throw new Error('createARCameraContext�ݲ�֧��!!')
  }

  static exitMiniProgram(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    wx.showToast({

      title: '点右上角圆退出',
      success() {
        const wx_res = {
          errMsg: 'exitMiniProgram:ok'
        }
        if (tt_success) { tt_success(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      },
      fail() {
        const wx_res = {
          errMsg: 'exitMiniProgram:fail'
        }
        if (tt_fail) { tt_fail(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      }
    })
  }


  static canIPutStuffOverComponent(componentName) {
    return ['map', 'viedo', 'canvas', 'camera', 'live-player', 'live-pusher'].indexOf(componentName) < 0
  }


  static showFavoriteGuide(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    wx.showToast({
      title: '点击右上三个点',
      success() {
        const wx_res = {
          errMsg: 'showFavoriteGuide:ok'
        }
        if (tt_success) { tt_success(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      },
      fail() {
        const wx_res = {
          errMsg: 'showFavoriteGuide:fail'
        }
        if (tt_fail) { tt_fail(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      }
    })
  }


  static showInteractionBar(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    wx.showToast({
      title: '不支持此类型',
      icon: 'none',
      success() {
        const wx_res = {
          errMsg: 'showInteractionBar:ok'
        }
        if (tt_success) { tt_success(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      },
      fail() {
        const wx_res = {
          errMsg: 'showInteractionBar:fail'
        }
        if (tt_fail) { tt_fail(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      }
    })
  }


  static hideInteractionBar(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    wx.showToast({
      title: '不支持此类型',
      icon: 'none',
      success() {
        const wx_res = {
          errMsg: 'showInteractionBar:ok'
        }
        if (tt_success) { tt_success(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      },
      fail() {
        const wx_res = {
          errMsg: 'showInteractionBar:fail'
        }
        if (tt_fail) { tt_fail(wx_res) }
        if (tt_complete) { tt_complete(wx_res) }
      }
    })
  }
}
/*
tt.ai = {}
for (const api of ['ocrIdCard', 'ocrBankCard', 'ocrDrivingLicense', 'ocrVehicleLicense', 'textReview', 'textToAudio', 'imageAudit', 'advancedGeneralIdentify', 'objectDetectIdentify', 'carClassify', 'dishClassify', 'logoClassify', 'animalClassify', 'plantClassify', 'getVoiceRecognizer', 'faceDetect', 'faceMatch', 'faceSearch', 'facePersonVerify', 'facePersonIdmatch', 'faceLivenessSessioncode', 'nlpLexerCustom']) {
  wx.ai_init(api)
}

function ai_init(api) {
  tt.ai[api] = (tt_object) => swan_ai.run(api, tt_object)
}
*/
