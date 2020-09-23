Component({
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass: {type: String, value: ''},
    onekitStyle: {type: String, value: ''},
    onekitId: {type: String, value: ''},
    src: {
      type: String,
      value: '',
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    webp: {
      type: Boolean,
      value: false,
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    image_error(e) {
      this.triggerEvent('error', e.details)
    },
    image_load(e) {
      this.triggerEvent('load', e.details)
    },
  }
})
