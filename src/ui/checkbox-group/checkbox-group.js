// onekit/ui/checkbox-group/checkbox-group.js
import onekit_behavior from "../onekit_behavior"
Component({

  /**
   * 组件的属性列表
   */
  behaviors: [onekit_behavior,'wx://form-field-group'],
  options: {
    virtualHost: true
  },
properties: {
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
    checkboxGroup_change() {
      this.triggerEvent('Change', {})
    }
  }
})
