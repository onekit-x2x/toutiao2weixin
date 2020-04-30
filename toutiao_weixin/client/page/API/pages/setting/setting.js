import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '设置',
      path: 'page/API/pages/setting/setting'
    }
  },

  data: {
    setting: {}
  },

  getSetting() {
    tt.getSetting({
      success: (res) => {
        console.log(res)
        this.setData({setting: res.authSetting})
      }
    })
  }
})
