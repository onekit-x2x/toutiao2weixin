import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: 'Wi-Fi',
      path: 'page/API/pages/wifi/wifi'
    }
  },

  data: {
    wifiList: []
  },
  startSearch() {
    tt.getConnectedWifi({
    success (res) {
      console.log(res);
      const wifiList = res.wifiList
    },
    fail (res) {
        console.log(`getConnectedWifi调用失败`);
    }
});
  }
})
