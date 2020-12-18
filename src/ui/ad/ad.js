/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    preRollUnitId: {type: String, value: ''},
    adIntervals: {type: Number, value: 0},
    type: {type: String, value: 'banner'},
  },
  methods: {
    ad_load(e) {
      this.triggerEvent('load', e)
    },
    ad_error(e) {
      this.triggerEvent('error', e)
    },
    ad_close(e) {
      this.triggerEvent('close', e)
    },
  }
})
