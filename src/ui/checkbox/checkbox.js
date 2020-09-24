// onekit/ui/input/input.js
import onekit_behavior from '../../behavior/onekit_behavior'
Component({

  /**
   * 组件的属性列表
   */
  behaviors: [onekit_behavior,'wx://form-field'],
  options: {
    virtualHost: true
  },
properties: {
    value: {type: String},
    checked: {type: Boolean, value: false},
    disabled: {type: Boolean, value: false},
    color: {type: String}
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
