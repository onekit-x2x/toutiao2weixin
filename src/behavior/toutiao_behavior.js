/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = Behavior({

  properties: {

  },
  methods: {
    ui_tap(tt_e) {
      console.log('ui_tap')
      this.triggerEvent('Tap', tt_e)
    },
    ui_touchstart(tt_e) {
      console.log('ui_touchstart')
      this.triggerEvent('Touchstart', tt_e)
    },
    ui_touchmove(tt_e) {
      console.log('ui_touchmove')
      this.triggerEvent('Touchmove', tt_e)
    },
    ui_touchcancel(tt_e) {
      console.log('ui_touchcancel')
      this.triggerEvent('Touchcancel', tt_e)
    },
    ui_touchend(tt_e) {
      console.log('ui_touchend')
      this.triggerEvent('Touchend', tt_e)
    },
    ui_longpress(tt_e) {
      console.log('ui_longpress')
      this.triggerEvent('Longpress', tt_e)
    },
    ui_longtap(tt_e) {
      console.log('ui_longtap')
      this.triggerEvent('Longtap', tt_e)
    },
    ui_transitionend(tt_e) {
      console.log('ui_transitionend')
      this.triggerEvent('Transitionend', tt_e)
    },
    ui_animationstart(tt_e) {
      console.log('ui_animationstart')
      this.triggerEvent('Animationstart', tt_e)
    },
    ui_animationiteration(tt_e) {
      console.log('ui_animationiteration')
      this.triggerEvent('Animationiteration', tt_e)
    },
    ui_animationend(tt_e) {
      console.log('ui_animationend')
      this.triggerEvent('Animationend', tt_e)
    },
    ui_touchforcechange(tt_e) {
      console.log('ui_touchforcechange')
      this.triggerEvent('Touchforcechange', tt_e)
    },
  },
})
