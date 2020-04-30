import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '页面跳转',
      path: 'page/API/pages/navigator/navigator'
    }
  },

  navigateTo() {
   tt.navigateTo({url: './navigator'})
  },

  navigateBack() {
    tt.navigateBack()
  },

  redirectTo() {
    tt.redirectTo({url: './navigator'})
  },

  switchTab() {
    tt.switchTab({url: '/page/component/index'})
  },

  reLaunch() {
    tt.reLaunch({url: '/page/component/index'})
  }
})
