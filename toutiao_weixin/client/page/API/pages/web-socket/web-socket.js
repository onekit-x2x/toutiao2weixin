import tt from "../../../../onekit/tt"
function showModal(title, content) {
  tt.showModal({
    title,
    content,
    showCancel: false
  })
}

function showSuccess(title) {
  tt.showToast({
    title,
    icon: 'success',
    duration: 1000
  })
}

let socketTask = tt.connectSocket({
   // url: 'wss://echo.websocket.org',
    protocols: ['p1']
});
Page({
  onShareAppMessage() {
    return {
      title: 'Web Socket',
      path: 'page/API/pages/web-socket/web-socket'
    }
  },

  data: {
    socketStatus: 'closed'
  },

  onLoad() {
    const self = this
    self.setData({
      hasLogin: true
    })
    // qcloud.setLoginUrl(loginUrl)

    // qcloud.login({
    //   success: function(result) {
    //     console.log('登录成功', result)
    //     self.setData({
    //       hasLogin: true
    //     })
    //   },

    //   fail: function(error) {
    //     console.log('登录失败', error)
    //   }
    // })
  },

  onUnload() {
    this.closeSocket()
  },

  toggleSocket(e) {
    const turnedOn = e.detail.value

    if (turnedOn && this.data.socketStatus === 'closed') {
      socketTask.onOpen(() => {
    console.log('WebSocket 已连接');
});

socketTask.onClose(() => {
    console.log('WebSocket 已断开');
});

socketTask.onError(error => {
    console.error('WebSocket 发生错误:', error);
});

socketTask.onMessage(message => {
    console.log('socket message:', message)

    let data = message.data;

    if (Object.prototype.toString.call(data) === '[object ArrayBuffer]') {
        data = Codec.read(data);
    }
});
    } else if (!turnedOn && this.data.socketStatus === 'connected') {
      const showSuccess = true
      this.closeSocket(showSuccess)
    }
  },


  closeSocket() {
    if (this.data.socketStatus === 'connected') {
      tt.closeSocket({
        success: () => {
          showSuccess('Socket已断开')
          this.setData({socketStatus: 'closed'})
        }
      })
    }
  },

  sendMessage() {
    if (this.data.socketStatus === 'connected') {
      tt.sendSocketMessage({
        data: 'Hello, Miniprogram!'
      })
    }
  },
})
