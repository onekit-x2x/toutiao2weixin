import tt from "../../../onekit/tt"
Component({
  behaviors: ['wx://form-field-button'],
  options: {
    virtualHost: true
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
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    Id:{type:String,value:""},
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
    
    button_bindtap(e) {
      var that = this;
      if (this.properties.openType) {
        switch (this.properties.openType) {
         
          case "getPhoneNumber":
            break;
          
          default:
          throw new Error(this.properties.openType);
        }
      }

      this.triggerEvent("tap",{}); 
    },
  
  },
});
