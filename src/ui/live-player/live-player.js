/* eslint-disable camelcase */
// onekit/ui/live-player/live-player.js
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
    src: {type: String, value: ''},
    autoplay: {type: Boolean, value: false},
    muted: {type: String, value: false},
    orientation: {type: String, value: 'vertical'},
    objectFit: {type: String, value: 'contain'},

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
