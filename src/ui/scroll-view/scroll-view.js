import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    scrollX: {
      type: Boolean,
      value: false,
    },
    scrollY: {
      type: Boolean,
      value: false
    },
    UpperThreshold: {
      type: Number,
      value: 50
    },
    LowerThreshold: {
      type: Number,
      value: 50
    },
    ScrollIntoView: {
      type: String,
      value: ''
    },
    ScrollTop: {
      type: Number,
      value: 0
    },
    ScrollLeft: {
      type: Number,
      value: 0
    },
    ScrollWithAnimation: {
      type: Boolean,
      value: false
    },
    EnableBackToTop: {
      type: Boolean,
      value: false
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
    on_toupper() {
      this.triggerEvent('scrolltoupper', {})
    },
    on_tolower() {
      this.triggerEvent('scrolltolower', {})
    },
    on_scroll() {
      this.triggerEvent('scroll', {})
    }

  }
})
