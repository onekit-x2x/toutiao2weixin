// onekit/ui/slider/slider.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    min:{type:String,value:0},
    max:{type:Number,value:100},
    step:{type:Number,value:1},
    disabled:{type:Boolean,value:false},
    value:{type:Number,value:0},
    color:{type:String,value:"#e9e9e9"},
    showValue:{type:Boolean,value:false},
    activeColor:{type:String,value:"#108ee9"},
    backgroundColor:{type:String,value:"#ddd"},
    blockSize:{type:Number,value:22},
    blockColor:{type:String,value:"#fff"},
    selectedColor:{type:String,value:"#1aad19"}
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
    slider_change(e){
      this.triggerEvent("Change",{})
    },
    slider_changing(e){
      this.triggerEvent("Changing",{})
    }
  }
})
