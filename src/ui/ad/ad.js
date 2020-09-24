import onekit_behavior from "../onekit_behavior"

Component({
  behaviors: [onekit_behavior],

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
