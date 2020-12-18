/* eslint-disable camelcase */
/* eslint-disable no-console */
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
    autoplay: {
      type: Boolean,
      value: false,
    },
    poster: {
      type: String,
      value: '',
    },
    loop: {
      type: Boolean,
      value: false,
    },
    showFullscreenBtn: {
      type: Boolean,
      value: false,
    },
    showPlayBtn: {
      type: Boolean,
      value: false,
    },
    controls: {
      type: Boolean,
      value: true,
    },
    objectFit: {
      type: String,
      value: 'contain',
    },
    playBtnPosition: {
      type: String,
      value: 'center',
    },
    preRollUnitId: {
      type: String,
      value: '',
    },
  },
  methods: {
    video_play(e) {
      this.triggerEvent('Play', e)
    },
    video_pause(e) {
      this.triggerEvent('Pause', e)
    },
    video_ended(e) {
      this.triggerEvent('Ended', e)
    },
    video_error(e) {
      this.triggerEvent('Error', e)
    },
    video_timeupdate(e) {
      this.triggerEvent('Timeupdate', e.detail)
    },
    video_fullscreenchange(e) {
      this.triggerEvent('Fullscreenchange', e)
    },
  }

})
