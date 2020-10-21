import my from '../../my'
import onekit_behavior from `../../behavior/onekit_behavior`
import alipay_behavior from `../../behavior/alipay_behavior`
Component({
  behaviors:[onekit_behavior,alipay_behavior],
  options: {
    virtualHost: true

  },
  data: {},
  props: {
    //     longitude: function(longitude) {
    // this.setData({longitude:longitude});
    //     },
    //     latitude: function(latitude) {
    // this.setData({latitude:latitude});
    //     },
    //     scale: function(scale) {
    // this.setData({scale:scale});
    //     },
    //     markers: function(markers) {
    // this.setData({markers:markers});
    //     },
    //     covers: function(covers) {
    // this.setData({markers:covers});
    //     },
    //     polyline: function(polyline) {
    // this.setData({polyline:polyline});
    //     },
    //     polygons: function(polygons) {
    // this.setData({polygon:polygon});
    //     },
    //     circles: function(circles) {
    // this.setData({circles:circles});
    //     },
    //     controls: function(controls) {
    // this.setData({controls:controls});
    //     },
    //     "include-points": function(includePoints) {
    // this.setData({"include-points":includePoints});
    //     },
    //     "show-location": function(showLocation) {
    // this.setData({"show-location":showLocation});
    //     },
    //     subkey: function(subkey) {
    // this.setData({"subkey":subkey});
    //     },
    //     "enable-3D": function(enable3D) {
    // console.log("[onekit]enable-3D");
    //     },
    //     "show-compass": function(showCompass) {
    // this.mapCtx.showsCompass({isShowCompass:showCompass});
    //     },
    //     "enable-overlooking": function(enableOverlooking) {
    // this.mapCtx.gestureEnable({isGestureEnable:enableOverlooking});
    //     },
    //     "enable-zoom": function(enableZoom) {
    // this.mapCtx.showsScale({isShowsScale:enableZoom});
    //     },
    //     "enable-scroll": function(enableScroll) {
    // console.log("[onekit]enable-scroll");
    //     },
    //     "enable-rotate": function(enableRotate) {
    // this.mapCtx.gestureEnable({isGestureEnable:enableRotate});
    //     }
  },
  didMount() {
    this.mapCtx = my.createMapContext('map')
  },

  methods: {
    onMarkertap() {

    },
    onCallouttap() {

    },
    onControltap() {

    },
    onRegionchange() {

    },
    onTap() {

    },
    onUpdated() {

    },
    onPoitap() {

    }
  },
})
