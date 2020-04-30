import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '下拉刷新',
      path: 'page/API/pages/pull-down-refresh/pull-down-refresh'
    }
  },

  onPullDownRefresh() {
    tt.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
  },

  stopPullDownRefresh() {
    tt.stopPullDownRefresh({
      complete(res) {
        tt.hideToast()
        console.log(res, new Date())
      }
    })
  }
})
