// onekit/ui/canvas/canvas.js
import onekit_behavior from "../onekit_behavior"
Component({

  behaviors: [onekit_behavior,'wx://form-field'],
  options: {
    virtualHost: true
  },

  /**
   * 组件的属性列表
   */
properties: {
    canvasId: {
      type: String,
      value: ''
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
