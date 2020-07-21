// onekit/ui/form/form.js
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
    reportSubmit:{type:Boolean},
    reportSubmitTimeout:{type:Number,value:0},
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
    form_bindreset(e){
      this.triggerEvent("reset",{})
    },
    form_bindsubmit(e){
      this.triggerEvent("submit",{})
    }
  }
})
