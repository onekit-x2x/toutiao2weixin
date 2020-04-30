import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '用户截屏事件',
      path: 'page/API/pages/capture-screen/capture-screen'
    }
  },

  data: {
    captured: false,
  },
  onLoad() {
    tt.onUserCaptureScreen(() => {
      this.setData({
        captured: true
      })
    })
  }
})
