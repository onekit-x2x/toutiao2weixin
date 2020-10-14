/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
export default class FileSystemManager {
  constructor(weixinFileSystemManager) {
    this.weixinFileSystemManager = weixinFileSystemManager
  }


  _set_ttpath2wxpath(ext, tt_filePath) {
    const randomString = Math.floor(Math.random() * (1 - 10000000) + 10000000)
    const wx_filePath = `${wx.env.USER_DATA_PATH}/${randomString}${ext}`
    if (tt_filePath) {
    // eslint-disable-next-line no-undef
      getApp().ttSavePath2wxRandomPath[tt_filePath] = wx_filePath
    }
    return wx_filePath
  }

  _get_ttpath2wxpath(tt_path) {
    // eslint-disable-next-line no-undef
    const wx_path = getApp().ttSavePath2wxRandomPath[tt_path]
    return wx_path || tt_path
  }


  accessSync(tt_path) {
    return this.weixinFileSystemManager.accessSync(this._get_ttpath2wxpath(tt_path))
  }

  access(tt_object) {
    return this.weixinFileSystemManager.access(tt_object)
  }

  saveFileSync(tt_tempFilePath, tt_filePath) {
    const ext = tt_tempFilePath.substring(tt_tempFilePath.lastIndexOf('.'))
    const wx_filePath = this._set_ttpath2wxpath(ext, tt_filePath)
    return this.weixinFileSystemManager.saveFileSync(tt_tempFilePath, wx_filePath)
  }


  saveFile(tt_object) {
    const tt_tempFilePath = tt_object.tempFilePath
    const tt_filePath = tt_object.filePath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_tempFilePath = tt_tempFilePath
    const ext = tt_tempFilePath.substring(tt_tempFilePath.lastIndexOf('.'))
    const wx_filePath = this._set_ttpath2wxpath(ext, tt_filePath)
    const wx_object = {
      tempFilePath: wx_tempFilePath,
      filePath: wx_filePath,
      success(wx_res) {
        const tt_res = {
          errMsg: wx_res.errMsg,
          savedFilePath: tt_filePath || wx_res.savedFilePath
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
    return this.weixinFileSystemManager.saveFile(wx_object)
  }

  getSavedFileList(tt_object) {
    return this.weixinFileSystemManager.getSavedFileList(tt_object)
  }

  removeSavedFile(tt_object) {
    const tt_filePath = tt_object.filePath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_filePath = this._get_ttpath2wxpath(tt_filePath)
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
    return this.weixinFileSystemManager.removeSavedFile(wx_object)
  }

  copyFileSync(tt_srcPath, tt_destPath) {
    const wx_srcPath = this._get_ttpath2wxpath(tt_srcPath)
    const ext = tt_tempFilePath.substring(tt_destPath.lastIndexOf('.'))
    const wx_destPath = this._set_ttpath2wxpath(ext, tt_destPath)
    return this.weixinFileSystemManager.saveFileSync(wx_srcPath, wx_destPath)
  }

  copyFile(tt_object) {
    const tt_srcPath = tt_object.srcPath
    const tt_destPath = tt_object.destPath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_srcPath = this._get_ttpath2wxpath(tt_srcPath)
    const ext = tt_tempFilePath.substring(tt_destPath.lastIndexOf('.'))
    const wx_destPath = this._set_ttpath2wxpath(ext, tt_destPath)
    const wx_object = {
      srcPath: wx_srcPath,
      destPath: wx_destPath,
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
    return this.weixinFileSystemManager.copyFile(wx_object)
  }

  getFileInfo(tt_object) {
    const tt_filePath = tt_object.filePath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_filePath = this._get_ttpath2wxpath(tt_filePath)
    const wx_object = {
      filePath: wx_filePath,
      success(wx_res) {
        const tt_res = {
          size: wx_res.size,
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
    return this.weixinFileSystemManager.getFileInfo(wx_object)
  }

  mkdirSync(tt_dirPath) {
    const wx_dirPath = this._set_ttpath2wxpath('', wx_dirPath)
    return this.weixinFileSystemManager.mkdirSync(wx_dirPath)
  }

  mkdir(tt_object) {
    const tt_dirPath = tt_object.dirPath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_dirPath = this._set_ttpath2wxpath('', wx_dirPath)
    const wx_object = {
      dirPath: wx_dirPath,
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
    return this.weixinFileSystemManager.mkdir(wx_object)
  }

  readdirSync(dirPath) {
    return this.weixinFileSystemManager.readdirSync(dirPath)
  }

  readdir(tt_object) {
    return this.weixinFileSystemManager.readdir(tt_object)
  }

  readFileSync(filePath, encoding) {
    return this.weixinFileSystemManager.readFileSync(filePath, encoding)
  }

  readFile(tt_object) {
    return this.weixinFileSystemManager.readFile(tt_object)
  }

  renameSync(oldPath, newPath) {
    return this.weixinFileSystemManager.renameSync(oldPath, newPath)
  }

  rename(tt_object) {
    return this.weixinFileSystemManager.rename(tt_object)
  }

  rmdirSync(dirPath) {
    return this.weixinFileSystemManager.rmdirSync(dirPath)
  }

  rmdir(tt_object) {
    return this.weixinFileSystemManager.rmdir(tt_object)
  }

  statSync(path) {
    return this.weixinFileSystemManager.statSync(path)
  }

  stat(tt_object) {
    return this.weixinFileSystemManager.stat(tt_object)
  }

  unlinkSync(filePath) {
    return this.weixinFileSystemManager.unlinkSync(filePath)
  }

  unlink(tt_object) {
    return this.weixinFileSystemManagerunlink(tt_object)
  }

  unzip(tt_object) {
    return this.weixinFileSystemManager.unzip(tt_object)
  }

  writeFileSync(filePath, data, encoding) {
    return this.weixinFileSystemManager.writeFileSync(filePath, data, encoding)
  }

  writeFile(tt_object) {
    return this.weixinFileSystemManager.writeFile(tt_object)
  }
}
