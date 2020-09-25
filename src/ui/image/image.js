/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
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
    image_error(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Error', tt_e)
    },
    image_load(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Load', tt_e)
    },
  }
})
