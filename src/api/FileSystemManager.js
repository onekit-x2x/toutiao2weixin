/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import onekit from '../js/onekit'

export default class FileSystemManager {
  constructor(weixinFileSystemManager) {
    this.weixinFileSystemManager = weixinFileSystemManager
  }

  accessSync(tt_path) {
    return this.weixinFileSystemManager.accessSync(onekit.get_ttpath2wxpath(tt_path))
  }

  // eslint-disable-next-line class-methods-use-this
  access() {
    // this.weixinFileSystemManager.access(tt_object)
  }

  saveFileSync(tt_tempFilePath, tt_filePath) {
    const ext = tt_tempFilePath.substring(tt_tempFilePath.lastIndexOf('.'))
    const tt_wx_filePath = onekit.set_ttpath2wxpath(ext, tt_filePath)
    this.weixinFileSystemManager.saveFileSync(tt_tempFilePath, tt_wx_filePath[1])
    return tt_wx_filePath[0]
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
    const tt_wx_filePath = onekit.set_ttpath2wxpath(ext, tt_filePath)
    const wx_object = {
      tempFilePath: wx_tempFilePath,
      filePath: tt_wx_filePath[1],
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
    const wx_filePath = onekit.get_ttpath2wxpath(tt_filePath)
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
    const wx_srcPath = onekit.get_ttpath2wxpath(tt_srcPath)
    const ext = tt_destPath.substring(tt_destPath.lastIndexOf('.'))
    const tt_wx_destPath = onekit.set_ttpath2wxpath(ext, tt_destPath)
    return this.weixinFileSystemManager.saveFileSync(wx_srcPath, tt_wx_destPath[1])
  }

  copyFile(tt_object) {
    const tt_srcPath = tt_object.srcPath
    const tt_destPath = tt_object.destPath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_srcPath = onekit.get_ttpath2wxpath(tt_srcPath)
    const ext = tt_destPath.substring(tt_destPath.lastIndexOf('.'))
    const tt_wx_destPath = onekit.set_ttpath2wxpath(ext, tt_destPath)
    const wx_object = {
      srcPath: wx_srcPath,
      destPath: tt_wx_destPath[1],
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
    const wx_filePath = onekit.get_ttpath2wxpath(tt_filePath)
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
    const tt_wx_dirPath = onekit.set_ttpath2wxpath('', tt_dirPath)
    return this.weixinFileSystemManager.mkdirSync(tt_wx_dirPath[1])
  }

  mkdir(tt_object) {
    const tt_dirPath = tt_object.dirPath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const tt_wx_dirPath = onekit.set_ttpath2wxpath('', tt_dirPath)
    const wx_object = {
      dirPath: tt_wx_dirPath[1],
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

  readdirSync(tt_dirPath) {
    const wx_dirPath = onekit.get_ttpath2wxpath(tt_dirPath)
    // console.log('wx_dirPath', wx_dirPath)
    return this.weixinFileSystemManager.readdirSync(wx_dirPath)
  }

  readdir(tt_object) {
    const tt_dirPath = tt_object.dirPath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_dirPath = onekit.get_ttpath2wxpath(tt_dirPath)
    const wx_object = {
      dirPath: wx_dirPath,
      success(wx_res) {
        const tt_res = {
          files: wx_res.files,
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
    return this.weixinFileSystemManager.readdir(wx_object)
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
