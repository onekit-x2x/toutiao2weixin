import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior],
  behaviors: ['wx://form-field-group'],
  options: {
    virtualHost: true
  },
  properties: {
    
    name: {type: String, value: ''}
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      // this.selectComponent('radio')
      // let child = this.selectComponent(".radio-child");
      // console.log("child",child);
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  observers: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    // radio_click(e){
    //   //console.log(e)
    //   this.createSelectorQuery().in(this).selectAll('.onekit-radio-group').boundingClientRect(function(e){
    //     console.log("createSelectorQuery",e);
    //   }).exec();
    // //  console.log("radios",radios);
    //  // this.triggerEvent("Change",{})
    // },
    radio_Change() {
      // console.log('xxxxxxxxxxx', e.detail)
    }
  }
})
