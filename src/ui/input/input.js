import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior,'wx://form-field'],
  options: {
    virtualHost: true

  },
  properties: {
    name: {type: String, value: ''},
    value: {type: String, value: ''},
    type: {type: String, value: 'text'},
    password: {type: Boolean, value: false},
    placeholder: {type: String, value: ''},
    placeholderStyle: {type: String, value: ''},
    placeholderClass: {type: String, value: ''},
    disabled: {type: Boolean, value: false},
    maxlength: {type: Number, value: '140'},
    focus: {type: Boolean, value: false},
    confirmType: {type: String, value: 'done'},
    onfirmHold: {type: Boolean, value: false},
    cursor: {type: Number},
    selectionStart: {type: Number, value: -1},
    selectionEnd: {type: Number, value: -1},
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      // console.log('input', e)
      this.setData({
        value: e.detail.value,
      })
    }
  }
})
