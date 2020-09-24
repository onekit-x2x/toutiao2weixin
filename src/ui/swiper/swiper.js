/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// onekit/ui/swiper/swiper.js
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

    indicatorDots: {
      type: Boolean,
      value: false,
    },
    indicatorColor: {
      type: String,
      value: 'Rgba(0, 0, 0, .3)',
    },
    indicatorActiveColor: {
      type: String,
      value: '#000000',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    current: {
      type: Number,
      value: '0',
    },
    interval: {
      type: Number,
      value: '5000',
    },
    duration: {
      type: Number,
      value: '5000',
    },
    circular: {
      type: Boolean,
      value: false,
    },
    vertical: {
      type: Boolean,
      value: false,
    },
    previousMargin: {
      type: String,
      value: '0px',
    },
    nextMargin: {
      type: String,
      value: '0px',
    },
    displayMultipleItems: {
      type: Number,
      value: '1',
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
    swiper_Change(e) {
      this.triggerEvent('change')
    },
    swiper_AnimationEnd(e) {
      this.triggerEvent('animationfinish')
    },
    swiper_transition(e) {
      this.triggerEvent('transition')
    }
  }
})
