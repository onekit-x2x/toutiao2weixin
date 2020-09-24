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
  },
  methods: {
    video_play(e) {
      console.log('video_play', e)
      this.triggerEvent('Play', e.details)
    },
    video_pause(e) {
      console.log('video_pause', e)
      this.triggerEvent('Pause', e.details)
    },
    video_ended(e) {
      console.log('video_ended', e)
      this.triggerEvent('Ended', e.details)
    },
    video_timeupdate(e) {
      console.log('video_timeupdate', e)
      this.triggerEvent('Timeupdate', e.details)
    },
    video_fullscreenchang(e) {
      console.log('video_fullscreenchang', e)
      this.triggerEvent('Fullscreenchang', e.details)
    },
    video_waiting(e) {
      console.log('video_waiting', e)
      this.triggerEvent('Waiting', e.details)
    },
    video_error(e) {
      console.log('video_error', e)
      this.triggerEvent('Error', e.details)
    },
    video_loadedmetadata(e) {
      console.log('video_loadedmetadata', e)
      this.triggerEvent('Loadedmetadata', e.details)
    },
  }

})
