/* eslint-disable camelcase */
// onekit/ui/switch/switch.js
import onekit_behavior from '../../behavior/onekit_behavior'

Component({

  /**
   * 组件的属性列表
   */
  behaviors: [onekit_behavior, 'wx://form-field-group'],
  options: {
    virtualHost: true
  },
  properties: {
    checked: {type: Boolean, value: false},
    disabled: {type: Boolean, value: false},
    color: {type: String},
    type: {type: String, value: 'switch'}

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
    switch_change() {
      this.triggerEvent('Change', {})
    }
  }
})
