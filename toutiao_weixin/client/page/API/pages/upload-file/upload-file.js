import tt from "../../../../onekit/tt"

const uploadFileUrl = require('../../../../config').uploadFileUrl

Page({
  onShareAppMessage() {
    return {
      title: '上传文件',
      path: 'page/API/pages/upload-file/upload-file'
    }
  },

  chooseImage() {
    const self = this

    tt.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success(res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths[0])

        const imageSrc = res.tempFilePaths[0]

        tt.uploadFile({
          url: uploadFileUrl,
          filePath: imageSrc,
          name: 'data',
          success(res) {
            console.log('uploadImage success, res is:', res)

            tt.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })

            self.setData({
              imageSrc
            })
          },
          fail({errMsg}) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })
      },

      fail({errMsg}) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  }
})
