/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import CanvasContext from './api/CanvasContext'
import VideoContext from './api/VideoContext'
import Context from './api/Context'
import onekit from './js/onekit'

export default class my {
  static triggerEvent(THIS, eventName, data) {
    eventName = onekit.firstUpper(eventName)
    return THIS.props['on' + eventName](data)
  }

  // ///////////////// animation //////////////////////////
  static createAnimation(my_object) {
    return wx.createAnimation(my_object)
  }

  // /////////////// basic ////////////////////////////////
  static canIUse(string) { return wx.canIUse(string) }

  static getSystemInfo(my_object) { return wx.getSystemInfo(my_object) }

  static getSystemInfoSync(my_object) { return (wx.getSystemInfoSync(my_object)) }

  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+')
    const commonContent = Buffer.from(base64, 'base64')
    return commonContent
  }

  static arrayBufferToBase64(arrayBuffer) {
    const base64Content = Buffer.from(arrayBuffer).toString('base64')
    return base64Content
  }

  static getUpdateManager(my_object) { return wx.getUpdateManager(my_object) }

  static getLaunchOptionsSync(my_object) { return wx.getLaunchOptionsSync(my_object) }

  static offPageNotFound(my_object) { return wx.offPageNotFound(my_object) }

  static onPageNotFound(my_object) { return wx.onPageNotFound(my_object) }

  static offError(my_object) { return wx.offError(my_object) }

  static onError(my_object) { return wx.onError(my_object) }

  static offAppShow(my_object) { return wx.offAppShow(my_object) }

  static onAppShow(my_object) { return wx.onAppShow(my_object) }

  static offAppHide(my_object) { return wx.offAppHide(my_object) }

  static onAppHide(my_object) { return wx.onAppHide(my_object) }

  static setEnableDebug(my_object) { return wx.setEnableDebug(my_object) }

  static getLogManager(my_object) { return wx.getLogManager(my_object) }

  static rsa() { return /* wx.esa(my_object) */ console.log('暂不支持') }

  // ///////////////// Canvas ///////////////////
  // eslint-disable-next-line complexity
  static drawCanvas(my_object) {
    const canvasId = my_object.canvasId
    const actions = my_object.actions
    my_object = null
    //
    const canvasContext = wx.createCanvasContext(canvasId)
    for (const action of actions) {
      const data = action.data
      switch (action.method) {
        case 'save':
          canvasContext.save()
          break
        case 'restore':
          canvasContext.restore()
          break
        case 'setFillStyle':
          canvasContext.setFillStyle(onekit.color.array2str(data[1]))
          break
        case 'setStrokeStyle':
          canvasContext.setStrokeStyle(onekit.color.array2str(data[1]))
          break
        case 'setFontSize':
          canvasContext.setFontSize(data[0])
          break
        case 'setGlobalAlpha':
          canvasContext.setGlobalAlpha(data[0])
          break
        case 'setShadow':
          canvasContext.setShadow(data[0], data[1], data[2], onekit.color.array2str(data[3]))
          break
        case 'drawImage':
          // eslint-disable-next-line prefer-spread
          canvasContext.drawImage.apply(canvasContext, data)
          break
        case 'fillText':
          // eslint-disable-next-line prefer-spread
          canvasContext.fillText.apply(canvasContext, data)
          break
        case 'setLineCap': canvasContext.setLineCap(data[0]); break
        case 'setLineJoin': canvasContext.setLineJoin(data[0]); break
        case 'setLineWidth': canvasContext.setLineWidth(data[0]); break
        case 'setMiterLimit': canvasContext.setMiterLimit(data[0]); break
        case 'rotate': canvasContext.rotate(data[0]); break
        case 'scale': canvasContext.scale(data[0], data[1]); break
        case 'translate': canvasContext.translate(data[0], data[1]); break
        case 'strokePath':
          canvasContext.beginPath()
          for (const dat of data) {
            const dt = dat.data
            switch (dat.method) {
              case 'rect': canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]); break
              case 'moveTo': canvasContext.moveTo(dt[0], dt[1]); break
              case 'lineTo': canvasContext.lineTo(dt[0], dt[1]); break
              case 'closePath': canvasContext.closePath(); break
              // eslint-disable-next-line prefer-spread
              case 'arc': canvasContext.arc.apply(canvasContext, dt); break
              // eslint-disable-next-line prefer-spread
              case 'quadraticCurveTo': canvasContext.quadraticCurveTo.apply(canvasContext, dt); break
              // eslint-disable-next-line prefer-spread
              case 'bezierCurveTo': canvasContext.bezierCurveTo.apply(canvasContext, dt); break

              default:
                console.log('[drawCanvas-strokePath]', dat.method)
                break
            }
          }
          canvasContext.stroke()
          break
        case 'fillPath':
          for (const dat of data) {
            const dt = dat.data
            switch (dat.method) {
              case 'rect': canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]); break
              // eslint-disable-next-line prefer-spread
              case 'arc': canvasContext.arc.apply(canvasContext, dt); break
              default:
                console.log('[drawCanvas-fillPath]', dat.method)
                break
            }
          }
          canvasContext.fill()
          break
        case 'clearRect': canvasContext.clearRect(data[0], data[1], data[2], data[3]); break
        default:
          console.log('[drawCanvas]', action.method)
          break
      }
    }
    return canvasContext.draw()
  }

  static createContext() {
    const context = new Context()
    return context
  }

  static createCanvasContext(id) {
    return new CanvasContext(wx.createCanvasContext(id))
  }

  static createVideoContext(videoId) {
    return new VideoContext(wx.createVideoContext(videoId))
  }

  static canvasToTempFilePath(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    //
    const wx_object = {
      canvasId: my_object.canvasId
    }
    wx_object.success = function (wx_res) {
      const my_res = {
        errMsg: 'canvasToTempFilePath:ok',
        tempFilePath: wx_res.apFilePath
      }
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      const my_res = wx_res
      if (my_fail) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    return wx.canvasToTempFilePath(wx_object)
  }

  static canvasPutImageData(my_object) { return wx.canvasPutImageData(my_object) }

  static canvasGetImageData(my_object) { return wx.canvasGetImageData(my_object) }

  // //////////// Device //////////////////
  static onBeaconServiceChange(my_object) { return wx.onBeaconServiceChange(my_object) }

  static onBeaconUpdate(my_object) { return wx.onBeaconUpdate(my_object) }

  static getBeacons(my_object) { return wx.getBeacons(my_object) }

  static stopBeaconDiscovery(my_object) { return wx.stopBeaconDiscovery(my_object) }

  static startBeaconDiscovery(my_object) { return wx.startBeaconDiscovery(my_object) }

  static stopWifi(my_object) { return wx.stopWifi(my_object) }

  static startWifi(my_object) { return wx.startWifi(my_object) }

  static setWifiList(my_object) { return wx.setWifiList(my_object) }

  static onWifiConnected(my_object) { return wx.onWifiConnected(my_object) }

  static onGetWifiList(my_object) { return wx.onGetWifiList(my_object) }

  static getWifiList(my_object) { return wx.getWifiList(my_object) }

  static getConnectedWifi(my_object) { return wx.getConnectedWifi(my_object) }

  static connectWifi(my_object) { return wx.connectWifi(my_object) }

  static setNavigationBar(my_object) { return wx.setNavigationBarTitle(my_object) }

  //
  static onAccelerometerChange(callback) {
    wx.onAccelerometerChange(function (wx_res) {
      if (wx._stopAccelerometer) {
        return
      }
      callback(wx_res)
    })
  }

  static stopAccelerometer(my_object) {
    const my_success = my_object.success
    // const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    wx._stopAccelerometer = true
    if (my_success) {
      my_success()
    }
    if (my_complete) {
      my_complete()
    }
  }

  static startAccelerometer(my_object) {
    const my_success = my_object.success
    // const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    wx._stopAccelerometer = false
    if (my_success) {
      my_success()
    }
    if (my_complete) {
      my_complete()
    }
  }

  static getBatteryInfoSync(my_object) { return wx.getBatteryInfoSync(my_object) }

  static _getBatteryInfo(my_res) {
    wx.getSystemInfo({
      success: (wx_res) => {
        const percent = wx_res.currentBattery
        function toPoint(percent) {
          let str = percent.replace('%', '')
          str /= 100
          return str
        }
        toPoint(percent)
        const results = toPoint(percent)
        my_res.level = results
      }
    })
    return my_res
  }

  static getBatteryInfo(my_object) {
    return wx.getSystemInfo(my_object)
  }

  static onCompassChange(callback) {
    wx.onCompassChange(function (wx_res) {
      if (wx._stopCompass) {
        return
      }
      callback(wx_res)
    })
  }

  static stopCompass(my_object) {
    const my_success = my_object.success
    // const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    wx._stopCompass = true
    if (my_success) {
      my_success()
    }
    if (my_complete) {
      my_complete()
    }
  }

  static startCompass(my_object) {
    const my_success = my_object.success
    // const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    wx._stopCompass = false
    if (my_success) {
      my_success()
    }
    if (my_complete) {
      my_complete()
    }
  }

  static addPhoneContact(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const my_res = {
        errMsg: wx_res = wx_res.errMsg
      }
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      const my_res = wx_res
      if (my_fail) {
        my_fail(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    return wx.addPhoneContact(wx_object)
  }

  static onGyroscopeChange(callback) {
    wx.onGyroscopeChange(function (wx_res) {
      if (wx._stopGyroscope) {
        return
      }
      callback(wx_res)
    })
  }

  static stopGyroscope(my_object) {
    const my_success = my_object.success
    // const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    wx._stopGyroscope = true
    if (my_success) {
      my_success()
    }
    if (my_complete) {
      my_complete()
    }
  }

  static startGyroscope(my_object) {
    const my_success = my_object.success
    // const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    wx._startGyroscope = false
    if (my_success) {
      my_success()
    }
    if (my_complete) {
      my_complete()
    }
  }

  //
  static onDeviceMotionChange(my_object) { return wx.onDeviceMotionChange(my_object) }

  static stopDeviceMotionListening(my_object) { return wx.stopDeviceMotionListening(my_object) }

  static startDeviceMotionListening(my_object) { return wx.startDeviceMotionListening(my_object) }

  //
  static getNetworkType(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const my_res = {
        networkType: my._network(wx_res).networkType
      }
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) {
        my_success(wx_res)
      }
      if (my_complete) {
        my_complete(wx_res)
      }
    }
    return wx.getNetworkType(wx_object)
  }

  static _network(wx_res) {
    let networkType
    if (wx_res.networkAvailable) {
      switch (wx_res.networkType) {
        case 'WWAN':
          networkType = 'WIFI'
          break
        default:
          networkType = wx_res.networkType
          break
      }
    } else {
      networkType = 'NONE'
    }
    return {isConnected: wx_res.networkAvailable, networkType: networkType.toLowerCase()}
  }

  static onNetworkStatusChange(callack) {
    wx.onNetworkStatusChange(function (wx_res) {
      callack(wx._network(wx_res))
    })
  }


  //
  static makePhoneCall(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    const wx_object = {}
    wx_object.success = function () {
      const my_res = {
      }
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) {
        my_success(wx_res)
      }
      if (my_complete) {
        my_complete(wx_res)
      }
    }

    return wx.makePhoneCall(wx_object)
  }

  static scan(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    const my_onlyFromCamera = my_object.hideAlbum
    const my_scanType = my_object.type
    my_object = null
    //
    const wx_object = {
      onlyFromCamera: my_onlyFromCamera,
      scanType: my_scanType
    }
    wx_object.success = function (wx_res) {
      const my_res = {}
      if (wx_res.my_res) {
        my_res.charSet = 'UTF-8'
        my_res.my_res = wx_res.my_res
        if (wx_res.qrCode) {
          my_res.scanType = 'QR_CODE'
        } else if (wx_res.barCode) {
          my_res.scanType = 'EAN_8'
        }
      }
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) {
        my_fail(wx_res)
      }
      if (my_complete) {
        my_complete(wx_res)
      }
    }

    return wx.scanCode(wx_object)
  }

  //
  static vibrate(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const my_res = {
        errMsg: wx_res.errMsg
      }
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      const my_res = {
        errMsg: wx_res.errMsg
      }
      if (my_success) {
        my_fail(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    return wx.vibrateShort(wx_object)
  }

  static vibrateLong(my_success) {
    const wx_object = {}
    wx_object.success = my_success
    return wx.vibrateLong(wx_object)
  }

  static vibrateShort(my_success) {
    const wx_object = {}
    wx_object.success = my_success
    return wx.vibrateShort(wx_object)
  }

  //
  static onMemoryWarning(my_object) { return wx.onMemoryWarning(my_object) }

  static offMemoryWarning(callback) { return wx.offMemoryWarning(callback) }

  //
  static writeBLECharacteristicValue(my_object) { return wx.writeBLECharacteristicValue(my_object) }

  static readBLECharacteristicValue(my_object) { return wx.readBLECharacteristicValue(my_object) }

  static onBLEConnectionStateChange(my_object) { return wx.onBLEConnectionStateChange(my_object) }

  static onBLECharacteristicValueChange(my_object) { return wx.onBLECharacteristicValueChange(my_object) }

  static notifyBLECharacteristicValueChange(my_object) { return wx.notifyBLECharacteristicValueChange(my_object) }

  static getBLEDeviceServices(my_object) { return wx.getBLEDeviceServices(my_object) }

  static getBLEDeviceCharacteristics(my_object) { return wx.getBLEDeviceCharacteristics(my_object) }

  static createBLEConnection(my_object) { return wx.createBLEConnection(my_object) }

  static closeBLEConnection(my_object) { return wx.closeBLEConnection(my_object) }

  static offBLECharacteristicValueChange(callback) { return wx.offBLECharacteristicValueChange(callback) }

  static offBluetoothAdapterStateChange(callback) { return wx.offBluetoothAdapterStateChange(callback) }

  static onBLEConnectionStateChanged(callback) { return wx.onBLEConnectionStateChanged(callback) }

  static offBLEConnectionStateChanged(callback) { return wx.offBLEConnectionStateChange(callback) }

  //
  static stopBluetoothDevicesDiscovery(my_object) {
    const wx_object = {}
    for (const key in my_object) {
      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break
        default:
          wx_object[key] = my_object[key]
          break
      }
    }
    return wx.stopBluetoothDevicesDiscovery(wx_object)
  }

  static startBluetoothDevicesDiscovery(my_object) {
    return wx.openBluetoothAdapter(my_object)
  }

  static openBluetoothAdapter(my_object) {
    return wx.openBluetoothAdapter(my_object)
  }

  static onBluetoothDeviceFound(my_object) { return wx.onBluetoothDeviceFound(my_object) }

  static onBluetoothAdapterStateChange(my_object) { return wx.onBluetoothAdapterStateChange(my_object) }

  static getConnectedBluetoothDevices(my_object) { return wx.getConnectedBluetoothDevices(my_object) }

  static getBluetoothDevices(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    const wx_object = {}
    wx_object.success = (wx_res) => {
      const my_res = {
        errMsg: wx_res.errMsg,
        devices: wx_res.devices
      }
      if (my_success) { my_success(my_res) }
      if (my_complete) { my_complete(my_res) }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) { my_fail(wx_res) }
      if (my_complete) { my_complete(wx_res) }
    }
    return wx.getBluetoothDevices(wx_object)
  }

  static getBluetoothAdapterState(my_object) { return wx.getBluetoothAdapterState(my_object) }

  static closeBluetoothAdapter(my_object) { return wx.closeBluetoothAdapter(my_object) }

  //
  static connectBLEDevice(my_object) { return wx.createBLEConnection(my_object) }

  static disconnectBLEDevice(my_object) { return wx.closeBLEConnection(my_object) }

  //
  static stopHCE(my_object) { return wx.stopHCE(my_object) }

  static startHCE(my_object) { return wx.startHCE(my_object) }

  static sendHCEMessage(my_object) { return wx.sendHCEMessage(my_object) }

  static onHCEMessage(my_object) { return wx.onHCEMessage(my_object) }

  static getHCEState(my_object) { return wx.getHCEState(my_object) }

  //
  static setScreenBrightness(my_object) {
    let wx_object
    if (my_object) {
      wx_object = {}
      for (const key in my_object) {
        switch (key) {
          case 'brightness':
            wx_object.value = my_object[key]
            break
          default:
            wx_object[key] = my_object[key]
            break
        }
      }
    }
    return wx.setScreenBrightness(wx_object)
  }

  static setKeepScreenOn(my_object) { return wx.setKeepScreenOn(my_object) }

  static onUserCaptureScreen(my_object) { return wx.onUserCaptureScreen(my_object) }

  static offUserCaptureScreen(callback) { return wx.offUserCaptureScreen(callback) }

  static watchShake() { return /* wx.watchShake */console.log('暂不支持') }

  static getServerTime() { return /* wx.getServerTime */console.log('暂不支持') }

  //
  static getScreenBrightness(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const my_res = {brightness: wx_res.value}
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) {
        my_success(wx_res)
      }
      if (my_complete) {
        my_complete(wx_res)
      }
    }
    return wx.getScreenBrightness(wx_object)
  }

  // ///////////////// Ext //////////////
  static getExtConfigSync(my_object) { return wx.getExtConfigSync(my_object) }

  static getExtConfig(my_object) { return wx.getExtConfig(my_object) }

  // ////////////////// File //////////
  static getFileSystemManager(my_object) { return wx.getFileSystemManager(my_object) }

  static getFileInfo(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const res2 = {value: wx_res.brightness}
      if (my_success) {
        my_success(res2)
      }
      if (my_complete) {
        my_complete(res2)
      }
    }
    wx_object.fail = function (wx_res) {
      const res2 = wx_res
      if (my_fail) {
        my_success(res2)
      }
      if (my_complete) {
        my_complete(res2)
      }
    }
    return my.g(wx_object)
  }

  static removeSavedFile(my_object) { return wx.removeSavedFile(my_object) }

  static getSavedFileInfo(my_object) { return wx.getSavedFileInfo(my_object) }

  static getSavedFileList(my_object) { return wx.getSavedFileList(my_object) }

  static openDocument(my_object) { return wx.openDocument(my_object) }

  static saveFile(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    //
    const wx_object = {
      tempFilePath: my_object.apFilePath,
      success(wx_res) {
        const my_res = {savedFilePath: wx_res.savedFilePath}
        if (my_success) {
          my_success(my_res)
        }
        if (my_complete) {
          my_complete(my_res)
        }
      },
      fail(wx_res) {
        if (my_fail) {
          my_fail(wx_res)
        }
        if (my_complete) {
          my_complete(wx_res)
        }
      }
    }
    wx.saveFile(wx_object)
  }

  // ////////// Location ///////////////
  static openLocation(my_object) { return wx.openLocation(my_object) }

  static getLocation(my_object) { return wx.getLocation(my_object) }

  static chooseLocation(my_object) { return wx.chooseLocation(my_object) }

  // //////// Media ////////////////////
  static createMapContext(my_object) { return wx.createMapContext(my_object) }

  static compressImage(my_object) { return wx.compressImage(my_object) }

  static saveImage(my_object) { return wx.saveImageToPhotosAlbum(my_object) }

  static getImageInfo(my_object) { return wx.getImageInfo(my_object) }

  static previewImage(my_object) { return wx.previewImage(my_object) }

  static chooseImage(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    const my_count = my_object.count || 0
    const my_sizeType = my_object.sizeType
    const my_scourceType = my_object.scourceType
    my_object = null
    //
    const wx_object = {
      count: my_count,
      sizeType: my_sizeType,
      scourceType: my_scourceType,
      success: (wx_res) => {
        const apFilePaths = []
        for (const path of wx_res.tempFilePaths) {
          apFilePaths.push(path)
        }
        const my_res = {
          apFilePaths,
        }
        if (my_success) {
          my_success(my_res)
        }
        if (my_complete) {
          my_complete(my_res)
        }
      },
      fail: (wx_res) => {
        if (my_fail) {
          my_fail(wx_res)
        }
        if (my_complete) {
          my_complete(wx_res)
        }
      }
    }
    return wx.chooseImage(wx_object)
  }

  static saveVideoToPhotosAlbum(my_object) { return wx.saveVideoToPhotosAlbum(my_object) }

  static chooseVideo(my_object) { return wx.chooseVideo(my_object) }

  static stopVoice(my_object) { return wx.stopVoice(my_object) }

  static pauseVoice(my_object) { return wx.pauseVoice(my_object) }

  static playVoice(my_object) { return wx.playVoice(my_object) }

  static setInnerAudioOption(my_object) { return wx.setInnerAudioOption(my_object) }

  static getAvailableAudioSources(my_object) { return wx.getAvailableAudioSources(my_object) }

  static createInnerAudioContext(my_object) { return wx.createInnerAudioContext(my_object) }

  static createAudioContext(my_object) { return wx.createAudioContext(my_object) }

  static onBackgroundAudioStop(my_object) { return wx.onBackgroundAudioStop(my_object) }

  static onBackgroundAudioPause(my_object) { return wx.onBackgroundAudioPause(my_object) }

  static onBackgroundAudioPlay(my_object) { return wx.onBackgroundAudioPlay(my_object) }

  static stopBackgroundAudio(my_object) { return wx.stopBackgroundAudio(my_object) }

  static seekBackgroundAudio(my_object) { return wx.seekBackgroundAudio(my_object) }

  static pauseBackgroundAudio(my_object) { return wx.pauseBackgroundAudio(my_object) }

  static playBackgroundAudio(my_object) { return wx.playBackgroundAudio(my_object) }

  static getBackgroundAudioPlayerState(my_object) { return wx.getBackgroundAudioPlayerState(my_object) }

  static getBackgroundAudioManager(my_object) { return wx.getBackgroundAudioManager(my_object) }

  static createLivePusherContext(my_object) { return wx.createLivePusherContext(my_object) }

  static startRecord(my_object) { return wx.startRecord(my_object) }

  static stopRecord(my_object) { return wx.stopRecord(my_object) }

  static getRecorderManager(my_object) { return wx.getRecorderManager(my_object) }

  // ////////////// Network ///////////////
  static httpRequest(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    const my_headers = my_object.headers
    my_object = null
    //
    const wx_object = {
      header: my_headers
    }
    wx_object.success = function (wx_res) {
      const my_res = {
        headers: wx_res.header
      }
      for (const key in my_object) {
        switch (key) {
          case 'status':
            my_res.statusCode = wx_res[key]
            break
          case 'headers':
            my_res.header = wx_res[key]
            break
          default:
            my_res[key] = wx_res[key]
            break
        }
      }
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) {
        my_fail(wx_res)
      }
      if (my_complete) {
        my_complete(wx_res)
      }
    }

    return wx.request(wx_object)
  }

  static downloadFile(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    const my_url = my_object.url
    const my_header = my_object.header
    my_object = null
    //
    const wx_object = {
      url: my_url,
      header: my_header,
      complete: my_complete,
      success: (wx_res) => {
        const my_res = {
          apFilePath: wx_res.tempFilePath
        }
        if (my_success) {
          my_success(my_res)
        }
        if (my_complete) {
          my_complete(my_res)
        }
      },
      fail: (wx_res) => {
        if (my_fail) {
          my_fail(wx_res)
        }
        if (my_complete) {
          my_complete(wx_res)
        }
      }
    }
    return wx.downloadFile(wx_object)
  }

  static uploadFile(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    const my_url = my_object.url
    const my_header = my_object.header
    const my_fileName = my_object.fileName
    const my_fileType = my_object.fileType
    const my_formData = my_object.formData
    my_object = null
    //
    wx.uploadFile({
      url: my_url,
      filePath: my_object.filePath,
      name: my_fileName,
      fileType: my_fileType,
      header: my_header,
      formData: my_formData,
      success: my_success,
      fail: my_fail,
      complete: my_complete
    })
  }

  //
  static connectSocket(my_object) { return wx.connectSocket(my_object) }

  static onSocketError(my_object) { return wx.onSocketError(my_object) }

  static onSocketMessage(my_object) { return wx.onSocketMessage(my_object) }

  static onSocketClose(my_object) { return wx.onSocketClose(my_object) }

  static onSocketOpen(my_object) { return wx.onSocketOpen(my_object) }

  static sendSocketMessage(my_object) { return wx.sendSocketMessage(my_object) }

  static closeSocket(my_object) { return wx.closeSocket(my_object) }

  static offLocalServiceResolveFail(my_object) { return wx.offLocalServiceResolveFail(my_object) }

  static onLocalServiceResolveFail(my_object) { return wx.onLocalServiceResolveFail(my_object) }

  static offLocalServiceDiscoveryStop(my_object) { return wx.offLocalServiceDiscoveryStop(my_object) }

  static onLocalServiceDiscoveryStop(my_object) { return wx.onLocalServiceDiscoveryStop(my_object) }

  static offLocalServiceLost(my_object) { return wx.offLocalServiceLost(my_object) }

  static onLocalServiceLost(my_object) { return wx.onLocalServiceLost(my_object) }

  static offLocalServiceFound(my_object) { return wx.offLocalServiceFound(my_object) }

  static onLocalServiceFound(my_object) { return wx.onLocalServiceFound(my_object) }

  static stopLocalServiceDiscovery(my_object) { return wx.stopLocalServiceDiscovery(my_object) }

  static startLocalServiceDiscovery(my_object) { return wx.startLocalServiceDiscovery(my_object) }

  // /////// Open Interface //////////
  static _checkSession() {
    const now = new Date().getTime()
    // eslint-disable-next-line no-undef
    return getApp().onekitwx.jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60
  }

  static getAuthCode(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    const wx_object = {
      scopes: 'auth_user'
    }
    wx_object.success = function (wx_res) {
      // eslint-disable-next-line no-undef
      getApp().onekitwx._login = new Date().getTime()
      // eslint-disable-next-line no-undef
      getApp().onekitwx.jscode = wx_res.code
      const my_res = {authCode: wx_res.code}

      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
      // if(!getApp().onekitwx.hasuserinfo){
      my._getUserInfo(my_object)
      // }
    }
    wx_object.fail = function (wx_res) {
      const my_res = wx_res
      if (my_fail) {
        my_fail(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    if (my._checkSession()) {
      // eslint-disable-next-line no-undef
      wx_object.success({code: getApp().onekitwx.jscode})
    } else {
      wx.login(wx_object)
    }
  }

  static getOpenUserInfo(my_object) {
    const my_success = my_object.success
    // const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    // eslint-disable-next-line no-undef
    getApp().onekitwx.getuserinfo = (data) => {
      console.log(data)
      //
      // { "response": { "code": "10000", "msg": "Success", "avatar": "https:\/\/tfs.alipayobjects.com\/images\/partner\/TB1domvbyRADuNkUuBbXXcvopXa", "city": "成都市", "countryCode": "CN", "gender": "m", "nickName": "安好", "province": "四川省" } }
      let gender
      if (data.userInfo.gender === 1) {
        gender = 'm'
      } else if (data.userInfo.gender === 2) {
        gender = 'f'
      } else {
        gender = 't'
      }
      const wx_userinfo = {
        code: '10000',
        msg: 'Success',
        avatar: data.userInfo.avatarUrl,
        city: data.userInfo.city,
        countryCode: 'CN',
        gender,
        nickName: data.userInfo.nickName,
        province: data.userInfo.province
      }
      const response = {
        response: wx_userinfo
      }
      const my_res = {
        response: JSON.stringify(response)
      }
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }

  static _getUserInfo() {
    // eslint-disable-next-line no-undef
    getApp().onekitwx.getuserinfo = (data, callback) => {
      // eslint-disable-next-line no-undef
      const code = getApp().onekitwx.jscode
      // eslint-disable-next-line no-undef
      const url = getApp().onekitwx.server + 'userinfo'
      wx.request({
        url,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        data: {
          code,
          data: JSON.stringify(data)
        },
        success(wx_res) {
          console.log(wx_res)
          // if(my_success){
          //   my_object.sccess(wx_res);
          // }
          // if(my_complete){
          //   my_complete(wx_res);
          // }
          callback()
        },
        fail(wx_res) {
          console.log(wx_res)
          /* if (my_fail) {
             my_fail(wx_res);
           }
           if (my_complete) {
             my_complete(wx_res);
           }
           */
          callback()
        }
      })
    }
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }

  static getOpenData(my_object) {
    const my_success = my_object.success
    // const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    let opendata = null
    function success(opendata) {
      opendata = opendata.userInfo
      // eslint-disable-next-line no-undef
      getApp().onekit.opendata = opendata
      // eslint-disable-next-line no-undef
      for (let cb = 0; cb < getApp().onekit.opendataCallbacks.length; cb++) {
        // eslint-disable-next-line no-undef
        getApp().onekit.opendataCallbacks[cb](opendata)
      }
      // eslint-disable-next-line no-undef
      getApp().onekit.opendataCallbacks = []
      if (my_success) {
        my_success(opendata)
      }
      if (my_complete) {
        my_complete(opendata)
      }
    }
    // eslint-disable-next-line no-undef
    opendata = getApp().onekit.opendata
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        my_success(opendata)
      } else if (my_success) {
        // eslint-disable-next-line no-undef
        getApp().onekit.opendataCallbacks.push(my_success)
      }
      return
    }
    // eslint-disable-next-line no-undef
    getApp().onekit.opendata = {}
    wx.login({
      success(wx_res) {
        const jscode = wx_res.code
        wx.getAuthUserInfo({
          success(wx_res) {
            // eslint-disable-next-line no-undef
            const url = getApp().onekit.server + 'opendata'
            wx.httpRequest({
              url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              data: {
                nickname: wx_res.nickName,
                avatarUrl: wx_res.avatar,
                js_code: jscode
              },
              success(wx_res) {
                success(wx_res.data)
              },
              fail(wx_res) {
                console.log(wx_res)
              }
            })
          }
        })
      }
    })
  }

  static getPhoneNumber(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    // eslint-disable-next-line no-undef
    getApp().onekitwx.getphonenumber = (data, callback) => {
      console.log(data)
      // eslint-disable-next-line no-undef
      const code = getApp().onekitwx.jscode
      // eslint-disable-next-line no-undef
      const url = getApp().onekitwx.server + 'phonenumber'
      wx.request({
        url,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        data: {
          code,
          encryptedData: data.encryptedData,
          iv: data.iv
        },
        success(wx_res) {
          console.log(wx_res)

          const my_res = {
            response: JSON.stringify(wx_res.data)
          }
          if (my_success) {
            my_success(my_res)
          }
          if (my_complete) {
            my_complete(my_res)
          }
          callback()
        },
        fail(wx_res) {
          console.log(wx_res)
          if (my_fail) {
            my_fail(wx_res)
          }
          if (my_complete) {
            my_complete(wx_res)
          }
          callback()
        }
      })
    }
    wx.navigateTo({
      url: '/onekitwx/page/getphonenumber/getphonenumber'
    })
  }

  static navigateToMiniProgram(my_object) { return wx.navigateToMiniProgram(my_object) }

  static navigateBackMiniProgram(my_object) { return wx.navigateBackMiniProgram(my_object) }

  static getAccountInfoSync(my_object) { return wx.getAccountInfoSync(my_object) }

  // static reportMonitor(my_object) { return wx.reportMonitor(my_object) }

  static reportAnalytics(my_object) { return wx.reportAnalytics(my_object) }

  static tradePay(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    const trade_no = my_object.tradeNO
    // eslint-disable-next-line no-undef
    const url = getApp().onekitwx.server + 'orderinfo'
    wx.request({
      url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        trade_no
      },
      success(wx_res) {
        console.log(wx_res)
        wx.requestPayment({
          timeStamp: wx_res.data.timeStamp,
          nonceStr: wx_res.data.nonceStr,
          package: wx_res.data.package,
          signType: wx_res.data.signType,
          paySign: wx_res.data.paySign,
          success(wx_res) {
            console.log(wx_res)
            if (my_success) {
              my_success(wx_res)
            }
            if (my_complete) {
              my_complete(wx_res)
            }
          }
        })
      },
      fail(wx_res) {
        if (my_fail) {
          my_fail(wx_res)
        }
        if (my_complete) {
          my_complete(wx_res)
        }
      }
    })
  }

  static authorize(my_object) { return wx.authorize(my_object) }

  static openSetting(my_object) { return wx.openSetting(my_object) }

  static getSetting(my_object) { return wx.getSetting(my_object) }

  static chooseAddress(my_object) { return wx.chooseAddress(my_object) }

  static openCard() {
    /*
    const my_success = my_object.success
    // const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    wx.openCardList()
    if (my_success) {
      my_success()
    }
    if (my_complete) {
      my_complete()
    } */
  }

  static addCard() {
    /*
    // eslint-disable-next-line no-undef
    const url = getApp().onekit.server + 'addcard'
    wx.httpRequest({
      url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        cardList: JSON.stringify(my_object.cardList),
        js_code: my_object.jscode
      },
      success(wx_res) {
        const data = wx_res.data
        if (my_success) {
          my_success(data)
        }
        if (my_complete) {
          my_complete(data)
        }
      },
      fail(wx_res) {
        console.log(wx_res.data)
      }
    }) */
  }

  static chooseInvoiceTitle(my_object) { return wx.chooseInvoiceTitle(my_object) }

  static chooseInvoice(my_object) { return wx.chooseInvoice(my_object) }

  static startSoterAuthentication(my_object) { return wx.startSoterAuthentication(my_object) }

  static checkIsSupportSoterAuthentication(my_object) { return wx.checkIsSupportSoterAuthentication(my_object) }

  static checkIsSoterEnrolledInDevice(my_object) { return wx.checkIsSoterEnrolledInDevice(my_object) }

  static getWeRunData(my_object) { return wx.getWeRunData(my_object) }

  static reportMonitor(name, value) {
    // eslint-disable-next-line no-undef
    const js_code = getApp().onekit.jscode
    wx.httpRequest({
      url: 'http://192.168.0.106:8080/onekit-adapter/reportMonitor',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        js_code,
        name,
        number: value
      },
      success: (wx_res) => {
        console.log('success')
        console.log(wx_res.data)
      },
      fail(wx_res) {
        console.log(wx_res)
      },
      complete(wx_res) {
        console.log(wx_res)
      }

    })
  }

  // //////// Router //////////////
  static navigateBack(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    let wx_object
    if (my_object) {
      wx_object = {}
      for (const key in my_object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break
          default:
            wx_object[key] = my_object[key]
            break
        }
      }
      wx_object.success = function (wx_res) {
        const my_res = wx_res
        if (my_success) {
          my_success(my_res)
        }
        if (my_complete) {
          my_complete(my_res)
        }
      }
      wx_object.fail = function (wx_res) {
        if (my_fail) {
          my_success(wx_res)
        }
        if (my_complete) {
          my_complete(wx_res)
        }
      }
    }
    return wx.navigateBack(wx_object)
  }

  static switchTab(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    let wx_object
    if (my_object) {
      wx_object = {}
      for (const key in my_object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break
          default:
            wx_object[key] = my_object[key]
            break
        }
      }
    }
    wx_object.success = function (wx_res) {
      const my_res = wx_res
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) {
        my_success(wx_res)
      }
      if (my_complete) {
        my_complete(wx_res)
      }
    }
    return wx.switchTab(wx_object)
  }

  static navigateTo(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    const wx_object = {}
    for (const key in my_object) {
      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break
        default:
          wx_object[key] = my_object[key]
          break
      }
    }

    wx_object.success = function (wx_res) {
      const my_res = wx_res
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) {
        my_success(wx_res)
      }
      if (my_complete) {
        my_complete(wx_res)
      }
    }
    return wx.navigateTo(wx_object)
  }

  static reLaunch(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    let wx_object
    if (my_object) {
      wx_object = {}
      for (const key in my_object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break
          default:
            wx_object[key] = my_object[key]
            break
        }
      }
    }
    wx_object.success = function (wx_res) {
      const my_res = wx_res
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) {
        my_success(wx_res)
      }
      if (my_complete) {
        my_complete(wx_res)
      }
    }
    return wx.reLaunch(wx_object)
  }

  static redirectTo(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    let wx_object
    if (my_object) {
      wx_object = {}
      for (const key in my_object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break
          default:
            wx_object[key] = my_object[key]
            break
        }
      }
    }
    wx_object.success = function (wx_res) {
      const my_res = wx_res
      if (my_success) {
        my_success(my_res)
      }
      if (my_complete) {
        my_complete(my_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (my_fail) {
        my_success(wx_res)
      }
      if (my_complete) {
        my_complete(wx_res)
      }
    }
    return wx.redirectTo(wx_object)
  }

  // /////////// Share /////////////
  static updateShareMenu(my_object) { return wx.updateShareMenu(my_object) }

  static showShareMenu() {
    wx.navigateTo({
      url: '/my/page/share/share'
    })
  }

  static hideShareMenu(my_object) { return wx.hideShareMenu(my_object) }

  static getShareInfo(my_object) { return wx.getShareInfo(my_object) }

  // ///////////// Storage //////////////
  static getStorageInfoSync(my_object) { return wx.getStorageInfoSync(my_object) }

  static getStorageInfo(my_object) { return wx.getStorageInfo(my_object) }

  static clearStorageSync(my_object) { wx.clearStorageSync(my_object); return {} }

  static clearStorage(my_object) { return wx.clearStorage(my_object) }

  static removeStorageSync(my_object) { wx.removeStorageSync(my_object.key); return {} }

  static removeStorage(my_object) { return wx.removeStorage(my_object) }

  static setStorageSync(my_object) { wx.setStorageSync(my_object.key, my_object.data); return {} }

  static setStorage(my_object) { return wx.setStorage(my_object) }

  static getStorageSync(my_object) { return {data: wx.getStorageSync(my_object.key)} }

  static getStorage(my_object) { return wx.getStorage(my_object) }

  // //////////// UI ////////////////
  static showActionSheet(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    let wx_object
    if (my_object) {
      wx_object = {}
      for (const key in my_object) {
        switch (key) {
          case 'items':
            wx_object.itemList = my_object[key]
            break
          default:
            wx_object[key] = my_object[key]
            break
        }
      }
      wx_object.success = function (wx_res) {
        const my_res = {tapIndex: wx_res.index}
        if (my_success) {
          my_success(my_res)
        }
        if (my_complete) {
          my_complete(my_res)
        }
      }
      wx_object.fail = function (wx_res) {
        const my_res = wx_res
        if (my_fail) {
          my_fail(my_res)
        }
        if (my_complete) {
          my_complete(my_res)
        }
      }
    }
    return wx.showActionSheet(wx_object)
  }

  // static redirectTo(my_object) { return wx.redirectTo(my_object) }
  // static redirectTo(my_object) { return wx.redirectTo(my_object) }
  static hideLoading(my_object) { return wx.hideLoading(my_object) }

  static showLoading(my_object) {
    let wx_object
    if (my_object) {
      if (!my_object.icon) {
        my_object.icon = 'success'
      }
      //
      wx_object = {}
      for (const key in my_object) {
        switch (key) {
          case 'content':
            wx_object.title = my_object[key]
            break
          case 'type':
            wx_object.icon = my_object[key]
            break
          default:
            wx_object[key] = my_object[key]
            break
        }
      }
    }
    return wx.showLoading(wx_object)
  }

  static SDKVersion() { return console.log('不支持此功能') }

  static hideToast(my_object) { return wx.hideToast(my_object) }

  static showToast(my_object) {
    let wx_object
    if (my_object) {
      if (!my_object.icon) {
        my_object.icon = 'success'
        wx_object = {}
        for (const key in my_object) {
          switch (key) {
            case 'content':
              wx_object.title = my_object[key]
              break
            case 'type':
              wx_object.icon = my_object[key]
              break
            default:
              wx_object[key] = my_object[key]
              break
          }
        }
      }
    }
    return wx.showToast(wx_object)
  }

  static confirm(my_object) {
    const my_cancelButtonText = my_object.cancelButtonText
    const my_confirmButtonText = my_object.confirmButtonText
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    const wx_cancelText = my_cancelButtonText
    const wx_confirmText = my_confirmButtonText
    const wx_object = {
      cancelText: wx_cancelText,
      confirmText: wx_confirmText,
      success(wx_res) {
        const my_res = wx_res
        if (my_success) { my_success(my_res) }
        if (my_complete) { my_complete(my_res) }
      },
      fail(wx_res) {
        const my_res = wx_res
        if (my_fail) { my_fail(my_res) }
        if (my_complete) { my_complete(my_res) }
      },
    }
    return wx.showModal(wx_object)
  }

  static alert(my_object) { return wx.showModal(my_object) }

  static setNavigationBarColor(my_object) { return wx.setNavigationBarColor(my_object) }

  static hideNavigationBarLoading(my_object) {
    const wx_object = my_object
    return wx.hideNavigationBarLoading(wx_object)
  }

  static showNavigationBarLoading(my_object) {
    const wx_object = my_object
    return wx.showNavigationBarLoading(wx_object)
  }

  static setBackgroundTextStyle(my_object) { return wx.setBackgroundTextStyle(my_object) }

  static setBackgroundColor(my_object) { return wx.setBackgroundColor(my_object) }

  static setTabBarItem(my_object) { return wx.setTabBarItem(my_object) }

  static setTabBarStyle(my_object) { return wx.setTabBarStyle(my_object) }

  static hideTabBar(my_object) { return wx.hideTabBar(my_object) }

  static showTabBar(my_object) { return wx.showTabBar(my_object) }

  static hideTabBarRedDot(my_object) { return wx.hideTabBarRedDot(my_object) }

  static showTabBarRedDot(my_object) { return wx.showTabBarRedDot(my_object) }

  static removeTabBarBadge(my_object) { return wx.removeTabBarBadge(my_object) }

  static setTabBarBadge(my_object) { return wx.setTabBarBadge(my_object) }

  static loadFontFace(my_object) { return wx.loadFontFace(my_object) }

  static stopPullDownRefresh(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    const wx_object = {}
    if (my_object) {
      wx_object.success = function (wx_res) {
        if (my_success) {
          my_success(wx_res)
        }
        if (my_complete) {
          my_complete(wx_res)
        }
      }
      wx_object.fail = function (wx_res) {
        if (my_fail) {
          my_fail(wx_res)
        }
        if (my_complete) {
          my_complete(wx_res)
        }
      }
    }
    return wx.stopPullDownRefresh(wx_object)
  }

  static startPullDownRefresh(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    // ///////////////////////
    const wx_object = {}
    if (my_object) {
      wx_object.success = function (wx_res) {
        if (my_success) {
          my_success(wx_res)
        }
        if (my_complete) {
          my_complete(wx_res)
        }
      }
      wx_object.fail = function (wx_res) {
        if (my_fail) {
          my_fail(wx_res)
        }
        if (my_complete) {
          my_complete(wx_res)
        }
      }
    }
    return wx.startPullDownRefresh(wx_object)
  }

  static pageScrollTo(my_object) { return wx.pageScrollTo(my_object) }

  static setTopBarText(my_object) { return wx.setTopBarText(my_object) }

  static nextTick(my_object) { return wx.nextTick(my_object) }

  static getMenuButtonBoundingClientRect(my_object) { return wx.getMenuButtonBoundingClientRect(my_object) }

  static offWindowResize(my_object) { return wx.offWindowResize(my_object) }

  static onWindowResize(my_object) { return wx.onWindowResize(my_object) }

  // //////////// Worker ///////////////
  static createWorker(my_object) { return wx.createWorker(my_object) }

  // //////////// WXML ///////////////
  static createSelectorQuery(my_object) { return wx.createSelectorQuery(my_object) }

  static createIntersectionObserver(my_object) { return wx.createIntersectionObserver(my_object) }

  // ///////////////////////////////////
  static hideKeyboard(my_object) { return wx.hideKeyboard(my_object) }

  // /////////// cloud ////////////////
  /*
  static get cloud() {

  }
  */
}
