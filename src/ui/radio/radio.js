import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    value: {type: String},
    checked: {type: Boolean, value: false},
    disabled: {type: Boolean, value: false},
    color: {type: String},
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
      console.log(e)
      // if(this.properties.checked){
      //   return;
      // }
      // this.properties.checked = !this.properties.checked;
      // console.log("xxxx",this.properties.checked)
      this.triggerEvent('click', {radio: e}, {bubbles: true, composed: true})
    },

  }
})
