// onekit/ui/radio/radio.js
import onekit_behavior from '../../behavior/onekit_behavior'
Component({
  behaviors: [onekit_behavior],
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
properties: {
    value: {type: String},
    checked: {type: Boolean, value: false},
    disabled: {type: Boolean, value: false},
    colors: {type: String},
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
    item_tap(e) {
      // if(this.properties.checked){
      //   return;
      // }
      // this.properties.checked = !this.properties.checked;
      // console.log("xxxx",this.properties.checked)
      this.triggerEvent('click', {radio: e}, {bubbles: true, composed: true})
    }
  }
})
