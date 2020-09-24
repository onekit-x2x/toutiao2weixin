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

})
