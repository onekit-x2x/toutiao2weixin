import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior,'wx://form-field'],
  options: {
    virtualHost: true
  },
  properties: {
    value:{type:String},
    name:{type:String},
    placeholder:{type:String,value:""},
    placeholderStyle :{type:String,value:""},
    placeholderClass :{type:String,value:""},
    disabled :{type:Boolean,value:false},
    maxlength :{type:Number,value:"140"},
    focus :{type:Boolean,value:false},
    autoHeight:{type:Boolean,value:false},
    
    showCount:{type:Boolean,value:true},
    controlled:{type:Boolean,value:false}
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
