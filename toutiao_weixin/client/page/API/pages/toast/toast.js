import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '消息提示框',
      path: 'page/API/pages/toast/toast'
    }
  },

  toast1Tap() {
    tt.showToast({
      title: '默认'
    })
  },

  toast2Tap() {
    tt.showToast({
      title: 'duration 3000',
      duration: 3000
    })
  },

  toast3Tap() {
    tt.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 5000
    })
  },

  hideToast() {
    tt.hideToast()
  }
})
