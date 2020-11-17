import {tt,OnekitPage} from '../toutiao2weixin/index'
const SERVER = 'https://192.168.22.172:41443'
const API = `${SERVER}/`
const header = { 'content-type': "application/x-www-form-urlencoded" }
var code, anonymous_code, openid, session_key, unionid, anonymous_openid, access_token;

OnekitPage({
  tt_login_tap() {
    tt.login({
      success(res) {
        console.log('tt.login', 'success', res)
        code = res.code
        anonymous_code = res.anonymousCode
      }, fail(res) {
        console.log('tt.login', 'fail', res)
      }
    })
  },
  tt_getUserInfo_tap() {
    tt.getUserInfo({
      withCredentials: true,
      success(res) {
        console.log('tt.getUserInfo', 'success', res)
        const encryptedData = res.encryptedData
        const iv = res.iv
        const rawData = res.rawData
        const signature = res.signature
        //
        const url = `${API}decrypt`
        tt.request({
          url,
          data: {
            session_key,
            iv,
            encryptedData,
            rawData,
            signature
          },
          success(res) {
            console.log('getUserInfo(decrypt)', 'success', res)
          }, fail(res) {
            console.log('getUserInfo(decrypt)', 'fail', res)
          }
        });
      }, fail(res) {
        console.log('tt.getUserInfo', 'fail', res)
      }
    })
  },
  button_getphonenumber(e) {
    console.log(e)
    /*
    tt.getUserInfo({
      withCredentials: true,
      success(res) {
        console.log('tt.getUserInfo', 'success', res)
        const encryptedData = res.encryptedData
        const iv = res.iv
        const rawData = res.rawData
        const signature = res.signature
        //
        const url = `${API}decrypt`
        tt.request({
          url,
          data: {
            session_key,
            iv,
            encryptedData,
            rawData,
            signature
          },
          success(res) {
            console.log('getUserInfo(decrypt)', 'success', res)
          }, fail(res) {
            console.log('getUserInfo(decrypt)', 'fail', res)
          }
        });
      }, fail(res) {
        console.log('tt.getUserInfo', 'fail', res)
      }
    })*/
  },
  code2Session1_tap() {
    const url = `${API}code2Session1`
    console.log(url)
    tt.request({
      url,
      data: {
        code
      },
      success(res) {
        console.log('code2Session(code)', 'success', res)
        openid = res.data.openid
        session_key = res.data.session_key
        unionid = res.data.unionid
      }, fail(res) {
        console.log('code2Session(code)', 'fail', res)
      }
    });
  },
  code2Session2_tap() {
    const url = `${API}code2Session2`
    console.log(url)
    tt.request({
      url,
      data: {
        anonymous_code
      },
      success(res) {
        console.log('code2Session(anonymousCode)', 'success', res)
        anonymous_openid = res.data.anonymous_openid
      }, fail(res) {
        console.log('code2Session(anonymousCode)', 'fail', res)
      }
    });
  },
  getAccessToken_tap() {
    const url = `${API}getAccessToken`
    console.log(url)
    tt.request({
      url,
      success(res) {
        console.log('getAccessToken', 'success', res)
        access_token = res.data.access_token
      }, fail(res) {
        console.log('getAccessToken', 'fail', res)
      }
    });
  },
  setUserStorage_tap() {
    const url = `${API}setUserStorage`
    const method = "POST";
    console.log(url)
    tt.request({
      url,
      data: {
        session_key,
        access_token,
        openid
      },
      success(res) {
        console.log('setUserStorage', 'success', res)
      }, fail(res) {
        console.log('setUserStorage', 'fail', res)
      }
    });
  },
  removeUserStorage_tap() {
    const url = `${API}removeUserStorage`
    const method = "POST";
    console.log(url)
    const key = JSON.stringify(["key1"])
    tt.request({
      url,
      data: {
        session_key,
        access_token,
        openid,
        key,
      },
      success(res) {
        console.log('removeUserStorage', 'success', res)
      }, fail(res) {
        console.log('removeUserStorage', 'fail', res)
      }
    });
  },
  createQRCode_tap() {
    const that = this
    const url = `${API}createQRCode`
    const method = "POST";
    console.log(url)
    tt.request({
      url,
      data: {
        access_token
      },
      success(res) {
        console.log('createQRCode', 'success', res)
        const qrcode = res.data;
        that.setData({ qrcode })
      }, fail(res) {
        console.log('createQRCode', 'fail', res)
      }
    });
  },
  checkContent_tap() {
    const that = this
    const url = `${API}checkContent`
    const method = "POST";
    console.log(url)
    tt.request({
      url,
      data: {
        access_token,
        content: "法轮功"
      },
      success(res) {
        console.log('checkContent', 'success', res)
        const qrcode = res.data;
        that.setData({ qrcode })
      }, fail(res) {
        console.log('checkContent', 'fail', res)
      }
    });
  },
  checkImage_tap() {
    const that = this
    const url = `${API}checkImage`
    const method = "POST";
    console.log(url)
    tt.request({
      url,
      data: {
        access_token
      },
      success(res) {
        console.log('checkImage', 'success', res)
        const qrcode = res.data;
        that.setData({ qrcode })
      }, fail(res) {
        console.log('checkImage', 'fail', res)
      }
    });
  },
})
