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
      value: 'rgba(0, 0, 0, 0)',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    current: {
      type: Number,
      value: 0,
    },
    currentItemId: {
      type: String,
      value: '',
    },
    interval: {
      type: Number,
      value: 5000,
    },
    previousMargin: {
      type: String,
      value: '',
    },
    nextMargin: {
      type: String,
      value: '',
    },
    displayMultipleItems: {
      type: Number,
      value: 1,
    },
    duration: {
      type: Number,
      value: 5000,
    },
    circular: {
      type: Boolean,
      value: false,
    },
    vertical: {
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
    swiper_change(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Change', tt_e)
    },
    swiper_animationEnd(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('AnimationEnd', tt_e)
    },
    swiper_transition(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Transition', tt_e)
    }
  }
})
