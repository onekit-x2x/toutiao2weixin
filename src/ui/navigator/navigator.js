import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior],
  options: {
    virtualHost: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    openType: {
      type: String,
      value: 'navigate'
    },
    hoverClass: {
      type: String,
      value: 'none'
    },
    url: {
      type: String,
      value: ''
    },

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

  }
})
