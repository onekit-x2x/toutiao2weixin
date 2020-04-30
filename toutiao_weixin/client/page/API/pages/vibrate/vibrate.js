import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '振动',
      path: 'page/API/pages/vibrate/vibrate'
    }
  },

  vibrateShort() {
    tt.vibrateShort({
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.error(err)
      },
      complete() {
        console.log('completed')
      }
    })
  },

  vibrateLong() {
    tt.vibrateLong({
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.error(err)
      },
      complete() {
        console.log('completed')
      }
    })
  }
})
