/* eslint-disable no-console */
/* eslint-disable camelcase */
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

    hoverClass: {
      type: String,
      value: ''
    },
    hoverStarTime: {
      type: Number,
      value: ''
    },
    hoverStayTime: {
      type: Number,
      value: ''
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    disableScroll: {
      type: Boolean,
      value: false
    },
    hidden: {
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
  }
})
