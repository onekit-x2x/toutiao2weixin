/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],

  options: {
    virtualHost: true
  },

  data: {},
  properties: {
    unitId: {type: String, value: ''},
    adIntervals: {type: Number, value: 0},
  },
  methods: {

  }
})
