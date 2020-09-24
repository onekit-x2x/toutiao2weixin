/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import TheKit from '../../js/TheKit'
import OneKit from '../../js/OneKit'

import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  options: {
    virtualHost: true
  },
  properties: {
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
