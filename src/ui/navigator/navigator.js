/* eslint-disable camelcase */
// onekit/ui/navigator/navigator.js
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  options: {
    virtualHost: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: String,
      value: ''
    },
    delta: {
      type: Number,
      value: 0
    },
    openType: {
      type: String,
      value: 'navigate'
    },
    hoverClass: {
      type: String,
      value: 'navigator-hover'
    },
    hoverStartTime: {
      type: Number,
      value: 50
    },
    hoverStayTime: {
      type: Number,
      value: 400
    },
    hoverStopPropagation: {
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

  }
})
