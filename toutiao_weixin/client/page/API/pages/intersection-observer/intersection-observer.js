import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: 'WXML节点布局相交状态',
      path: 'page/API/pages/intersection-observer/intersection-observer'
    }
  },

  data: {
    appear: false
  },
  onLoad() {
    this._observer = tt.createIntersectionObserver(this)
    this._observer
      .relativeTo('.scroll-view')
      .observe('.ball', (res) => {
        console.log(res)
        this.setData({
          appear: res.intersectionRatio > 0
        })
      })
  },
  onUnload() {
    if (this._observer) this._observer.disconnect()
  }
})
