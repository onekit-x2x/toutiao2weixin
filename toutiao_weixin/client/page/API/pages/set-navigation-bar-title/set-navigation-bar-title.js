import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '设置页面标题',
      path: 'page/API/pages/set-navigation-bar-title/set-navigation-bar-title'
    }
  },

  setNaivgationBarTitle(e) {
    const title = e.detail.value.title
    console.log(title)
    tt.setNavigationBarTitle({
      title,
      success() {
        console.log('setNavigationBarTitle success')
      },
      fail(err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    })

    return false
  }
})
