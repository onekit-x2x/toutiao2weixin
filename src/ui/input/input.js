/* eslint-disable camelcase */
// onekit/ui/input/input.js
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({

  /**
   * 组件的属性列表
   */
  behaviors: [onekit_behavior, toutiao_behavior, 'wx://form-field'],
  options: {
    virtualHost: true
  },
  properties: {
    value: {type: String, value: ''},
    type: {type: String, value: 'text'},
    password: {type: Boolean, value: false},
    placeholder: {type: String, value: ''},
    placeholderStyle: {type: String, value: ''},
    disabled: {type: Boolean, value: false},
    maxlength: {type: Number, value: '140'},
    focus: {type: Boolean, value: false},
    cursorSpacing: {type: Number, value: 0},
    cursor: {type: Number, value: -1},
    selectionStart: {type: Number, value: -1},
    selectionEnd: {type: Number, value: -1},
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    input_bindinput() {
      this.triggerEvent('input', {})
    },
    input_bindfocus() {
      this.triggerEvent('focus', {})
    },
    input_bindblur() {
      this.triggerEvent('blur', {})
    },
    input_bindconfirm() {
      this.triggerEvent('confirm', {})
    },
  }
})
