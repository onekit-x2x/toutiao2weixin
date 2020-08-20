// onekit/ui/progress/progress.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass: {
      type: String,
      value: ""
    },
    onekitStyle: {
      type: String,
      value: ""
    },
    onekitId: {
      type: String,
      value: ""
    },
    percent: {
      type: Number,
      observer: function (newVal, oldVal, changedPath) {
        var that = this;
        setTimeout(() => {
          that.triggerEvent("activeend");
        }, 1000);
      }
    },
    showInfo: {
      type: Boolean,
      value: false
    },
    borderRadius: {
      type: String,
      value: 0
    },
    strokeWidth: {
      type: String,
      value: 6
    },
    color: {
      type: String,
      value: "#09BB07"
    },
    activeColor: {
      type: String,
      value: "#09BB07"
    },
    backgroundColor: {
      type: String,
      value: "#EBEBEB"
    },
    active: {
      type: Boolean,
      value: false
    },
    activeMode: {
      type: String,
      value: "backwards"
    },
    "bindactiveend": {
      type: "Eventhandle"
    },
    fontSize: {
      type: String,
      value: 16
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
 // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
 attached: function () {
  var borderRadius = this.properties.borderRadius;
  borderRadius = this._num2str(borderRadius);
  //
  var strokeWidth = this.properties.strokeWidth;
  strokeWidth =this._str2num(strokeWidth);
  //
  var fontSize = this.properties.fontSize;
  fontSize = this._num2str(fontSize);
  //
  this.setData({ borderRadius, strokeWidth, fontSize })

  // console.log(borderRadius)
},
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
