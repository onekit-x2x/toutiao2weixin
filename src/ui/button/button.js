/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior, 'wx://form-field-button'],
  options: {
    virtualHost: true
  },

  attached() {
    // var openType;
    // var scope;
    // switch(this.props.openType){
    //   default:openType=openType;
    // }
    // this.setData({openType,scope});
  },
  detached() { },
  properties: {
    size: {type: String, value: 'default'},
    type: {type: String, value: 'default'},
    disabled: {type: Boolean, value: false},
    loading: {type: Boolean, value: false},
    hoverClass: {type: String, value: 'button-hover'},
    hoverStartTime: {type: Boolean, value: 20},
    hoverStayTime: {type: Number, value: 70},
    hoverStopPropagation: {type: Boolean, value: false},
    formType: {type: String, value: ''},
    openType: {type: String, value: ''},
  },
  methods: {
    button_getphonenumber(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Getphonenumber', tt_e)
    },

  },
})
