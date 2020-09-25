/* eslint-disable camelcase */
// onekit/ui/switch/switch.js
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({

  /**
   * 组件的属性列表
   */
  behaviors: [onekit_behavior, toutiao_behavior, 'wx://form-field-group'],
  options: {
    virtualHost: true
  },
  properties: {
    checked: {type: Boolean, value: false},
    disabled: {type: Boolean, value: false},
    color: {type: String, value: '#F85959'},
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
    switch_change(wx_e) {
      const wx_detail = wx_e.wx_detail
      const tt_detail = wx_detail
      this.triggerEvent('Change', tt_detail)
    }
  }
})
