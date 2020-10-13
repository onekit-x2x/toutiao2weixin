/* eslint-disable camelcase */
export default class FileSystemManager {
  constructor(weixinFileSystemManager) {
    this.weixinFileSystemManager = weixinFileSystemManager
  }

  // eslint-disable-next-line class-methods-use-this
  _fixPath(path) {
    // eslint-disable-next-line no-undef
    const result = getApp().ttSavePath2wxRandomPath[path]
    return result || path
  }

  accessSync(path) {
    return this.weixinFileSystemManager.accessSync(this._fixPath(path))
  }

  access(options) {
    return this.weixinFileSystemManager.access(options)
  }

  saveFileSync(tempFilePath, tt_filePath) {
    const ext = tempFilePath.substring(tempFilePath.lastIndexOf('.') + 1)
    const randomString = Math.floor(Math.random() * (1 - 10000000) + 10000000)
    const wx_filePath = `${wx.env.USER_DATA_PATH}/${randomString}.${ext}`
    if (tt_filePath) {
      // eslint-disable-next-line no-undef
      getApp().ttSavePath2wxRandomPath[tt_filePath] = wx_filePath
    }
    // console.log(ext)
    const savedFilePath = this.weixinFileSystemManager.saveFileSync(tempFilePath, wx_filePath)
    // console.log(tempFilePath, savedFilePath)
    return savedFilePath
  }


  saveFile(options) {
    return this.weixinFileSystemManager.saveFile(options)
  }

  getSavedFileList(options) {
    return this.weixinFileSystemManager.getSavedFileList(options)
  }

  removeSavedFile(options) {
    return this.weixinFileSystemManager.removeSavedFile(options)
  }

  copyFileSync(srcPath, destPath) {
    return this.weixinFileSystemManager.copyFileSync(srcPath, destPath)
  }

  copyFile(options) {
    return this.weixinFileSystemManager.copyFile(options)
  }

  getFileInfo(options) {
    return this.weixinFileSystemManager.getFileInfo(options)
  }

  mkdirSync(dirPath) {
    return this.weixinFileSystemManager.mkdirSync(dirPath)
  }

  mkdir(options) {
    return this.weixinFileSystemManager.mkdir(options)
  }

  readdirSync(dirPath) {
    return this.weixinFileSystemManager.readdirSync(dirPath)
  }

  readdir(options) {
    return this.weixinFileSystemManager.readdir(options)
  }

  readFileSync(filePath, encoding) {
    return this.weixinFileSystemManager.readFileSync(filePath, encoding)
  }

  readFile(options) {
    return this.weixinFileSystemManager.readFile(options)
  }

  renameSync(oldPath, newPath) {
    return this.weixinFileSystemManager.renameSync(oldPath, newPath)
  }

  rename(options) {
    return this.weixinFileSystemManager.rename(options)
  }

  rmdirSync(dirPath) {
    return this.weixinFileSystemManager.rmdirSync(dirPath)
  }

  rmdir(options) {
    return this.weixinFileSystemManager.rmdir(options)
  }

  statSync(path) {
    return this.weixinFileSystemManager.statSync(path)
  }

  stat(options) {
    return this.weixinFileSystemManager.stat(options)
  }

  unlinkSync(filePath) {
    return this.weixinFileSystemManager.unlinkSync(filePath)
  }

  unlink(options) {
    return this.weixinFileSystemManagerunlink(options)
  }

  unzip(options) {
    return this.weixinFileSystemManager.unzip(options)
  }

  writeFileSync(filePath, data, encoding) {
    return this.weixinFileSystemManager.writeFileSync(filePath, data, encoding)
  }

  writeFile(options) {
    return this.weixinFileSystemManager.writeFile(options)
  }
}
