/* eslint-disable camelcase */
module.exports = Behavior({

  properties: {

  },
  methods: {
    ui_tap(tt_e) { this.triggerEvent('tap', tt_e) },
    ui_touchstart(tt_e) { this.triggerEvent('touchstart', tt_e) },
    ui_touchmove(tt_e) { this.triggerEvent('touchmove', tt_e) },
    ui_touchcancel(tt_e) { this.triggerEvent('touchcancel', tt_e) },
    ui_touchend(tt_e) { this.triggerEvent('touchend', tt_e) },
    ui_longpress(tt_e) { this.triggerEvent('longpress', tt_e) },
    ui_longtap(tt_e) { this.triggerEvent('longtap', tt_e) },
    ui_transitionend(tt_e) { this.triggerEvent('transitionend', tt_e) },
    ui_animationstart(tt_e) { this.triggerEvent('animationstart', tt_e) },
    ui_animationiteration(tt_e) { this.triggerEvent('animationiteration', tt_e) },
    ui_animationend(tt_e) { this.triggerEvent('animationend', tt_e) },
    ui_touchforcechange(tt_e) { this.triggerEvent('touchforcechange', tt_e) },
  },
})
