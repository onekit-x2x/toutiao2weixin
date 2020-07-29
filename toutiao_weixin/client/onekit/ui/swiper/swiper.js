// onekit/ui/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    Class: {
      type: String,
      value: ""
    },
    Style: {
      type: String,
      value: ""
    },
    Id: {
      type: String,
      value: ""
    },
    indicatorDots: {
      type: Boolean,
      value: false,
    },
    indicatorColor: {
      type: String,
      value: "Rgba(0, 0, 0, .3)",
    },
    indicatorActiveColor: {
      type: String,
      value: '#000000',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    current: {
      type: Number,
      value: '0',
    },
    interval: {
      type: Number,
      value: '5000',
    },
    duration: {
      type: Number,
      value: '5000',
    },
    circular: {
      type: Boolean,
      value: false,
    },
    vertical: {
      type: Boolean,
      value: false,
    },
    previousMargin: {
      type: String,
      value: '0px',
    },
    nextMargin: {
      type: String,
      value: '0px',
    },
    displayMultipleItems: {
      type: Number,
      value: '1',
    },
    nextMargin: {
      type: String,
      value: '0px',
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
    swiper_Change(e){
      this.triggerEvent('change',e)
    },
  swiper_AnimationEnd(e){
      this.triggerEvent('animationfinish',e)
    },
  swiper_transition(e){
      this.triggerEvent('transition',e)
    }
  }
})
