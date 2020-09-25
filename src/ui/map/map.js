/* eslint-disable camelcase */

import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    longitude: {type: Number},
    latitude: {type: Number},
    scale: {type: Number, value: 16},
    markers: {type: Array, value: '[]'},
    circles: {type: Array, value: '[]'},
    showLocation: {type: Boolean, value: false},
    polyline: {type: Array, value: '[]'},
    includePoints: {type: Array, value: '[]'},


  },
  methods: {
    map_tap(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Tap', tt_e)
    },
    map_markertap(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Markertap', tt_e)
    },
    map_callouttap(wx_e) {
      const wx_detail = wx_e.detail
      const tt_e = {}// wx_e;
      const tt_detail = wx_detail// {};
      tt_e.detail = tt_detail
      this.triggerEvent('Callouttap', tt_e)
    },

  }

})
