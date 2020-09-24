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

    percent: {
      type: Number,
    },
    showInfo: {
      type: Boolean,
      value: false
    },
    borderRadius: {
      type: String,
      value: 0
    },
    strokeWidth: {
      type: String,
      value: 6
    },
    color: {
      type: String,
      value: '#09BB07'
    },
    activeColor: {
      type: String,
      value: '#09BB07'
    },
    backgroundColor: {
      type: String,
      value: '#EBEBEB'
    },
    active: {
      type: Boolean,
      value: false
    },
    activeMode: {
      type: String,
      value: 'backwards'
    },
    bindactiveend: {
      type: 'Eventhandle'
    },
    fontSize: {
      type: String,
      value: 16
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() {
    let borderRadius = this.properties.borderRadius
    borderRadius = this._num2str(borderRadius)
    //
    let strokeWidth = this.properties.strokeWidth
    strokeWidth = this._str2num(strokeWidth)
    //
    let fontSize = this.properties.fontSize
    fontSize = this._num2str(fontSize)
    //
    this.setData({borderRadius, strokeWidth, fontSize})

  // console.log(borderRadius)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
