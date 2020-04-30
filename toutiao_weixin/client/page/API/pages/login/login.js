import tt from "../../../../onekit/tt"

const app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: '头条登录',
      path: 'page/API/pages/login/login'
    }
  },

  onLoad() {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login() {
    const that = this
    tt.login({
      success() {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
      }
    })
  }
})
