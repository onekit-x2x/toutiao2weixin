// onekit/ui/picker-view/picker-view.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
    value:{type:Array},
    indicatorStyle:{type:String},
    maskStyle:{type:String},
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
    pickerView_change(e){
      this.triggerEvent("Change",{})
    }
  }
})
