/* eslint-disable camelcase */

import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    longitude: {type: Number, value: 0},
    latitude: {type: Number, value: 0},
    scale: {type: Number, value: 16},
    markers: {type: Array, value: []},
    circles: {type: Array, value: []},
    showLocation: {type: Boolean, value: false},
    polyline: {type: Array, value: []},
    includePoints: {type: Array, value: []},


  },
  methods: {
    map_tap(wx_e) {
      const wx_detail = wx_e.wx_detail
      const tt_detail = wx_detail
      this.triggerEvent('Tap', tt_detail)
    },
    map_markertap(wx_e) {
      const wx_detail = wx_e.wx_detail
      const tt_detail = wx_detail
      this.triggerEvent('Markertap', tt_detail)
    },
    map_callouttap(wx_e) {
      const wx_detail = wx_e.wx_detail
      const tt_detail = wx_detail
      this.triggerEvent('Callouttap', tt_detail)
    },

  }

})
