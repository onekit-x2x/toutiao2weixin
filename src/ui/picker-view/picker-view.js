/* eslint-disable camelcase */
// onekit/ui/picker-view/picker-view.js
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    value: {type: Array, value: '[]'},
    indicatorStyle: {type: String, value: ''},
    maskStyle: {type: String, value: ''},
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
    pickerView_change(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Change', tt_e)
    }
  }
})
