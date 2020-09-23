/* eslint-disable camelcase */
import TheKit from '../../js/TheKit'
import OneKit from '../../js/OneKit'

Component({
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass: {type: String, value: ''},
    onekitStyle: {type: String, value: ''},
    onekitId: {type: String, value: ''},
    src: {
      type: String,
      value: '',
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    webp: {
      type: Boolean,
      value: false,
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
  },
  lifetimes: {
    attached() {
      let weixin_src = this.properties.src
      if (weixin_src.indexOf('://') < 0) {
        const currentUrl = OneKit.currentUrl()
        weixin_src = '/' + TheKit.fixurl(currentUrl, weixin_src)
      }
      this.setData({weixin_src})
    }
  },
  methods: {
    image_error(e) {
      this.triggerEvent('error', e.details)
    },
    image_load(e) {
      this.triggerEvent('load', e.details)
    },
  }
})
