import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior,'wx://form-field-button'],
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
    plain: {type: Boolean, value: false},
    disabled: {type: Boolean, value: false},
    loading: {type: Boolean, value: false},
    'hover-class': {type: String, value: 'button-hover'},
    'hover-start-time': {type: Boolean, value: 20},
    'hover-stay-time': {type: Number, value: 70},
    'hover-stop-propagation': {type: Boolean, value: false},
    formType: {type: String, value: ''},
    'open-type': {type: String, value: ''},
    scope: {type: String, value: ''},
    'app-parameter': {type: String, value: ''},
    'public-id': {type: String, value: ''},
  },
  methods: {
    button_onTap(e) {
      const that = this
      //
      if (that.props.openType) {
        switch (that.props.openType) {
          case 'contact':
            break
          case 'share':
            break
          case 'launchApp':
            break
          case 'openSetting':
            break
          case 'feedback':
            break
          default:
            throw new Error(that.props.openType)
        }
      }
      that.props.onTap(e)
    },
  },
})
