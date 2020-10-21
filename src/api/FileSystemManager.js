

/* eslint-disable max-len */
/* eslint-disable camelcase */
import onekit from '../js/onekit'

export default class FileSystemManager {
  constructor(weixinFileSystemManager) {
    this.weixinFileSystemManager = weixinFileSystemManager
  }

  accessSync(tt_filePath) {
    const wx_filePath = onekit.tt_filePath2wx_filePath(tt_filePath)
    return this.weixinFileSystemManager.accessSync(wx_filePath)
  }


  access(tt_object) {
    const tt_path = tt_object.Path
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_path = onekit.tt_filePath2wx_filePath(tt_path)
    const wx_object = {
      path: wx_path,
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
    return this.weixinFileSystemManager.access(wx_object)
  }

  saveFileSync(tt_tempFilePath, tt_filePath) {
    if (!tt_filePath) {
      const ext = tt_tempFilePath.substring(tt_tempFilePath.lastIndexOf('.'))
      tt_filePath = onekit.new_tt_filePath(ext)
    }
    const wx_tempFilePath = tt_tempFilePath
    const wx_filePath = onekit.tt_filePath2wx_filePath(tt_filePath)
    this.weixinFileSystemManager.saveFileSync(wx_tempFilePath, wx_filePath)
    return tt_filePath
  }


  saveFile(tt_object) {
    const tt_tempFilePath = tt_object.tempFilePath
    const ext = tt_tempFilePath.substring(tt_tempFilePath.lastIndexOf('.'))
    const tt_filePath = tt_object.filePath || onekit.new_tt_filePath(ext)
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_tempFilePath = tt_tempFilePath
    const wx_filePath = onekit.tt_filePath2wx_filePath(tt_filePath)
    const wx_object = {
      tempFilePath: wx_tempFilePath,
      filePath: wx_filePath,
      success(wx_res) {
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
    const wx_filePath = onekit.tt_filePath2wx_filePath(tt_filePath)
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
    const wx_srcPath = onekit.tt_filePath2wx_filePath(tt_srcPath)
    const wx_destPath = onekit.tt_filePath2wx_filePath(tt_destPath)
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
    const wx_srcPath = onekit.tt_filePath2wx_filePath(tt_srcPath)
    const wx_destPath = onekit.tt_filePath2wx_filePath(tt_destPath)
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
    const wx_filePath = onekit.tt_filePath2wx_filePath(tt_filePath)
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
    const wx_dirPath = onekit.tt_filePath2wx_filePath(tt_dirPath)
    return this.weixinFileSystemManager.mkdirSync(wx_dirPath)
  }

  mkdir(tt_object) {
    const tt_dirPath = tt_object.dirPath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_dirPath = onekit.tt_filePath2wx_filePath(tt_dirPath)
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

  readdirSync(tt_dirPath) {
    const wx_dirPath = onekit.tt_filePath2wx_filePath(tt_dirPath)
    return this.weixinFileSystemManager.readdirSync(wx_dirPath)
  }

  readdir(tt_object) {
    const tt_dirPath = tt_object.dirPath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_dirPath = onekit.tt_filePath2wx_filePath(tt_dirPath)
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

  readFileSync(tt_filePath, tt_encoding) {
    const wx_filePath = onekit.tt_filePath2wx_filePath(tt_filePath)
    const wx_encoding = tt_encoding
    return this.weixinFileSystemManager.readFileSync(wx_filePath, wx_encoding)
  }

  readFile(tt_object) {
    const tt_filePath = tt_object.filePath
    const tt_encoding = tt_object.encoding
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_filePath = onekit.tt_filePath2wx_filePath(tt_filePath)
    const wx_encoding = tt_encoding
    const wx_object = {
      filePath: wx_filePath,
      encoding: wx_encoding,
      success(wx_res) {
        const tt_res = {
          data: wx_res.data,
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
    return this.weixinFileSystemManager.readFile(wx_object)
  }

  renameSync(tt_oldPath, tt_newPath) {
    const wx_oldPath = onekit.tt_filePath2wx_filePath(tt_oldPath)
    const wx_newPath = onekit.tt_filePath2wx_filePath(tt_newPath)
    return this.weixinFileSystemManager.renameSync(wx_oldPath, wx_newPath)
  }

  rename(tt_object) {
    const tt_newPath = tt_object.newPath
    const tt_oldPath = tt_object.oldPath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    //
    const wx_newPath = onekit.tt_filePath2wx_filePath(tt_newPath)
    const wx_oldPath = onekit.tt_filePath2wx_filePath(tt_oldPath)
    const wx_object = {
      oldPath: wx_oldPath,
      newPath: wx_newPath,
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
    return this.weixinFileSystemManager.rename(wx_object)
  }

  rmdirSync(tt_dirPath) {
    const wx_dirPath = onekit.tt_filePath2wx_filePath(tt_dirPath)
    return this.weixinFileSystemManager.rmdirSync(wx_dirPath)
  }

  rmdir(tt_object) {
    const tt_dirPath = tt_object.dirPath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_dirPath = onekit.tt_filePath2wx_filePath(tt_dirPath)
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
    return this.weixinFileSystemManager.rmdir(wx_object)
  }

  statSync(tt_path) {
    const wx_path = onekit.tt_filePath2wx_filePath(tt_path)
    return this.weixinFileSystemManager.statSync(wx_path)
  }

  stat(tt_object) {
    const tt_path = tt_object.Path
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    //
    const wx_path = onekit.tt_filePath2wx_filePath(tt_path)
    const wx_object = {
      path: wx_path,
      success(wx_res) {
        const tt_res = {
          errMsg: wx_res.errMsg,
          stats: wx_res.stats
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
    return this.weixinFileSystemManager.stat(wx_object)
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
