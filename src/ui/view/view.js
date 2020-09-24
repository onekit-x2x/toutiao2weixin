import onekit_behavior from "../onekit_behavior"
Component({
  behaviors: [onekit_behavior],

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
    view_Tap(e) {
      this.triggerEvent('Tap', e)
    }
  }
})
