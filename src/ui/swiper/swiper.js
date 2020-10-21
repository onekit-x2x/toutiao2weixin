import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    indicatorDots: {
      type: Boolean,
      value: false
    },
    indicatorColor: {
      type: String,
      value: 'rgba(0, 0, 0, .3)'
    },
    indicatorActiveColor: {
      type: String,
      value: '#000'
    },
    autoplay: {
      type: Boolean,
      value: false
    },
    current: {
      type: Number,
      value: 0
    },
    duration: {
      type: Number,
      value: 500
    },
    interval: {
      type: Number,
      value: 5000
    },
    circular: {
      type: Boolean,
      value: false
    },
    vertical: {
      type: Boolean,
      value: false
    },
    previousMargin: {
      type: String,
      value: '0px'
    },
    nextMargin: {
      type: String,
      value: '0px'
    },
    activeClass: {
      type: String,
      value: ''
    },
    changingClass: {
      type: String,
      value: ''
    },
    acceleration: {
      type: Boolean,
      value: false
    },
    disableProgrammaticAnimation: {
      type: Boolean,
      value: false
    },
    disableTouch: {
      type: Boolean,
      value: false
    }
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
    swiper_change() {
      this.triggerEvent('change', {})
    },
    swiper_transition() {
      this.triggerEvent('Transition', {})
    },
    swiper_AnimationEnd() {
      this.triggerEvent('animationfinish', {})
    }
  }
})
