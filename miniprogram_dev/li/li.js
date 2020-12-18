import {OnekitPage} from '../toutiao2weixin/index';
import {tt} from '../toutiao2weixin/index';
OnekitPage({
    data: {
      pickerHidden: true,
      chosen: ''
    },
    pickerConfirm: function (e) {
      this.setData({
        pickerHidden: true
      })
      this.setData({
        chosen: e.detail.value
      })
    },
    pickerCancel: function (e) {
      this.setData({
        pickerHidden: true
      })
    },
    pickerShow: function (e) {
      this.setData({
        pickerHidden: false
      })
    },
    formSubmit: function (e) {
      console.log(e)
    },
    formReset: function (e) {
      this.setData({
        chosen: ''
      })
    }
  })
