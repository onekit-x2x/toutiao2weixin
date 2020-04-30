import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '文件',
      path: 'page/API/pages/file/file'
    }
  },

  onLoad() {
    this.setData({
      savedFilePath: tt.getStorageSync('savedFilePath')
    })
  },
  data: {
    tempFilePath: '',
    savedFilePath: '',
    dialog: {
      hidden: true
    }
  },
  chooseImage() {
    const that = this
    tt.chooseImage({
      count: 1,
      success(res) {
        that.setData({
          tempFilePath: res.tempFilePaths[0]
        })
      }
    })
  },
  saveFile() {
    if (this.data.tempFilePath.length > 0) {
      const that = this
      tt.saveFile({
        tempFilePath: this.data.tempFilePath,
        success(res) {
          that.setData({
            savedFilePath: res.savedFilePath
          })
          tt.setStorageSync('savedFilePath', res.savedFilePath)
          that.setData({
            dialog: {
              title: '保存成功',
              content: '下次进入应用时，此文件仍可用',
              hidden: false
            }
          })
        },
        fail() {
          that.setData({
            dialog: {
              title: '保存失败',
              content: '应该是有 bug 吧',
              hidden: false
            }
          })
        }
      })
    }
  },
  clear() {
    tt.setStorageSync('savedFilePath', '')
    this.setData({
      tempFilePath: '',
      savedFilePath: ''
    })
  },
  confirm() {
    this.setData({
      'dialog.hidden': true
    })
  }
})
