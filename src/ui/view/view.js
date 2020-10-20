import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior],
  options: {
    virtualHost: true
   
  },
  properties: {
    hoverClass:{
      type:String,
      value:""
    },
    hoverStarTime:{
      type:Number,
      value:""
    },
    hoverStayTime:{
      type:Number,
      value:""
    },
    hoverStopPropagation:{
      type:Boolean,
      value:false
    },
    disableScroll:{
      type:Boolean,
      value:false
    },
    hidden:{
      type:Boolean,
      value:false
    },
    disableScroll:{
      type:Object,
      value:{}
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
    view_Tap(e){
      this.triggerEvent("Tap",e)
    }
  }
})
