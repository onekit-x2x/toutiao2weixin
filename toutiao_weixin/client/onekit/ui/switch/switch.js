// onekit/ui/switch/switch.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field-group'],
  options: {
    virtualHost: true
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
    checked:{type:Boolean,value:false},
    disabled:{type:Boolean,value:false},
    color:{type:String},
    type:{type:String,value:"switch"}

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
    switch_change(e) {
      this.triggerEvent("Change", {})
    }
  }
})