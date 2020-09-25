/* eslint-disable camelcase */
// onekit/ui/radio/radio.js
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
    value: {type: String, value: ''},
    checked: {type: Boolean, value: false},
    disabled: {type: Boolean, value: false},
    colors: {type: String, value: '#F85959'},
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
