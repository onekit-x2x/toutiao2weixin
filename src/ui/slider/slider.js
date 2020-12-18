/* eslint-disable no-dupe-keys */
/* eslint-disable camelcase */

import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({

  /**
   * 组件的属性列表
   */
  behaviors: [onekit_behavior, toutiao_behavior, 'wx://form-field'],
  options: {
    virtualHost: true
  },
  data: {
    value: ''
  },
  properties: {
    min: {type: String, value: 0},
    max: {type: Number, value: 100},
    step: {type: Number, value: 1},
    disabled: {type: Boolean, value: false},
    value: {type: Number, value: 0},
    color: {type: String, value: '#e9e9e9'},
    showValue: {type: Boolean, value: false},
    activeColor: {type: String, value: '#f85959'},
    backgroundColor: {type: String, value: '#e9e9e9'},
    blockSize: {type: Number, value: 28},
    blockColor: {type: String, value: '#fff'},
    selectedColor: {type: String, value: '#1aad19'}
  },
  methods: {
    slider_change(e) {
      this.setData({
        value: e.detail.value,
      })
      this.triggerEvent('change', e.detail)
    },
    slider_changing(e) {
      this.triggerEvent('changing', e.detail)
    }
  },
})
