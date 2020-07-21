Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  attached() { 
    // var openType;
    // var scope;
    // switch(this.props.openType){
    //   default:openType=openType;
    // }
    // this.setData({openType,scope});
  },
  detached() { },
  properties: { 
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    size: { type: String, value:"default"},
    type: { type: String, value: "default" },
    plain: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    loading: { type: Boolean, value: false },
    "hoverClass": { type: String, value: "button-hover"},
    "hoverStartTime": { type: Boolean, value: 20 },
    "hoverStayTime": { type: Number, value: 70 },
    "hoverStopPropagation": { type: Boolean, value: false },
    "formType": { type: String, value: '' },
    "openType": { type: String, value: '' },
    },
  methods: {   
    
  },
});
