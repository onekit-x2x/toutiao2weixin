import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '获取用户信息',
      path: 'page/API/pages/get-user-info/get-user-info'
    }
  },

  data: {
    hasUserInfo: false
  },
  getUserInfo() {
    tt.getUserInfo({
    success (res) {
        console.log(res);
    },
    fail (res) {
        console.log(`getUserInfo调用失败`);
    }
});
  },
  clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }
})
