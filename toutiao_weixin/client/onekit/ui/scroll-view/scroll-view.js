// onekit/ui/scroll-view/scroll-view.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    Class: {
      type: String,
      value: ""
    },
    Style: {
      type: String,
      value: ""
    },
    Id: {
      type: String,
      value: ""
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
      value: "",
    },
    scrollLeft: {
      type: Number | String,
      value: "",
    },
    scrollIntoView: {
      type: String,
      value: "",
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
    on_toupper(e) {
      this.triggerEvent('scrolltoupper', {})
    },
    on_tolower(e) {
      this.triggerEvent('scrolltolower', {})
    },
    on_scroll(e) {
      this.triggerEvent('scroll', {})
    }
  }
})
