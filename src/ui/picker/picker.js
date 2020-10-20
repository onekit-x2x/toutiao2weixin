import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    title: {type: String},
    range: {type: Array},
    rangeKey: {type: String},
    value: {type: Number, value: 0},
    disabled: {type: Boolean, value: Boolean}
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
    piker_change() {
      this.triggerEvent('Change', {})
    }
  }
})
