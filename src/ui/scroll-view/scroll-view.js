/* eslint-disable no-bitwise */
// onekit/ui/scroll-view/scroll-view.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass: {
      type: String,
      value: ''
    },
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitId: {
      type: String,
      value: ''
    },
    scrollX: {
      type: Boolean,
      value: false,
    },
    scrollY: {
      type: Boolean,
      value: false,
    },
    upperThreshold: {
      type: Number | String,
      value: '50',
    },
    lowerThreshold: {
      type: Number | String,
      value: '50',
    },
    scrollTop: {
      type: Number | String,
      value: '',
    },
    scrollLeft: {
      type: Number | String,
      value: '',
    },
    scrollIntoView: {
      type: String,
      value: '',
    },
    scrollWithAnimation: {
      type: Boolean,
      value: false,
    },
    enableBackToTop: {
      type: Boolean,
      value: false,
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
