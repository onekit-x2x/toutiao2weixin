// onekit/ui/canvas/canvas.js
Component({
  behaviors: ['wx://form-field'],
  options: {
    virtualHost: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
    canvasId:{
      type:String,
      value:""
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
