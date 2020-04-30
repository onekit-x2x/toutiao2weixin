import tt from "../../../../onekit/tt"
Page({
  onShareAppMessage() {
    return {
      title: '屏幕亮度',
      path: 'page/API/pages/screen-brightness/screen-brightness'
    }
  },
setKeepScreenOn(){
  tt.setKeepScreenOn({
    keepScreenOn: false,
    success (res) {
        console.log(`屏幕常亮已关闭，省电中`);
    },
    fail (res) {
        console.log(`setKeepScreenOn调用失败`);
    }
})
}
})
