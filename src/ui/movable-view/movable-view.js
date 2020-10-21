import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    direction: {
      type: String,
      value: 'none'
    },
    inertia: {
      type: Boolean,
      value: false
    },
    outOfBounds: {
      type: Boolean,
      value: false
    },
    x: {
      type: Number,
      value: 0
    },
    y: {
      type: Number,
      value: 0
    },
    damping: {
      type: Number,
      value: 20
    },
    friction: {
      type: Number,
      value: 2
    },
    disabled: {
      type: Boolean,
      value: false
    },
    scale: {
      type: Boolean,
      value: false
    },
    scaleMin: {
      type: Number,
      value: 0.5
    },
    scaleMax: {
      type: Number,
      value: 10
    },
    scaleValue: {
      type: Number,
      value: 1
    },
    animation: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    movable_Change() {
      this.triggerEvent('change', {})
    },
    movable_scale() {
      this.triggerEvent('scale', {})
    }
  }
})
