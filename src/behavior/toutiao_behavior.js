/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = Behavior({

  properties: {

  },
  methods: {
    ui_tap(tt_e) {
      this.triggerEvent('Tap', tt_e)
    },
    ui_touchstart(tt_e) {
      this.triggerEvent('Touchstart', tt_e)
    },
    ui_touchmove(tt_e) {
      this.triggerEvent('Touchmove', tt_e)
    },
    ui_touchcancel(tt_e) {
      this.triggerEvent('Touchcancel', tt_e)
    },
    ui_touchend(tt_e) {
      this.triggerEvent('Touchend', tt_e)
    },
    ui_longpress(tt_e) {
      this.triggerEvent('Longpress', tt_e)
    },
    ui_longtap(tt_e) {
      this.triggerEvent('Longtap', tt_e)
    },
    ui_transitionend(tt_e) {
      this.triggerEvent('Transitionend', tt_e)
    },
    ui_animationstart(tt_e) {
      this.triggerEvent('Animationstart', tt_e)
    },
    ui_animationiteration(tt_e) {
      this.triggerEvent('Animationiteration', tt_e)
    },
    ui_animationend(tt_e) {
      this.triggerEvent('Animationend', tt_e)
    },
    ui_touchforcechange(tt_e) {
      this.triggerEvent('Touchforcechange', tt_e)
    },
  },
})
