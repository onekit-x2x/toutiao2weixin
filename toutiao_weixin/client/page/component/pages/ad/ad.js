import tt from "../../../../onekit/tt"

const info = tt.getSystemInfoSync()

Page({
  onShareAppMessage() {
    return {
      title: 'ad',
      path: 'page/component/pages/ad/ad'
    }
  },

  data: {
    platform: info.platform
  }
})
