import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '剪切板',
      path: 'page/API/pages/clipboard-data/clipboard-data'
    }
  },

  data: {
    value: 'edit and copy me',
    pasted: '',
  },

  valueChanged(e) {
    this.setData({
      value: e.detail.value
    })
  },

  copy() {
    tt.setClipboardData({
      data: this.data.value,
      success() {
        tt.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  },

  paste() {
    const self = this
    tt.getClipboardData({
      success(res) {
        self.setData({
          pasted: res.data
        })
        tt.showToast({
          title: '粘贴成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  }
})
