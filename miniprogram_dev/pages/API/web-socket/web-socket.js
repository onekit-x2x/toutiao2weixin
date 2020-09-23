import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
var gTexts = [
    '今日头条是一款基于数据挖掘的推荐引擎产品',
    '它由中国互联网创业者张一鸣于2012年3月创建',
    '于2012年8月发布第一个版本',
    '截至2015年12月',
    '今日头条累计激活用户3.5亿',
    '日活跃度超过3500万',
    '其中，“头条号”平台的账号数量已超过4.1万个',
    '各类媒体、政府、机构总计超过11000家',
    '其中签约合作的传统媒体过千家',
    '头条号”自媒体账号总数超过3万个',
    '......'
];
var gCounter = 0;
function gRead(ab){
    var str = '';
    var i8a = new Int8Array(ab);
    for(var i = 0;(i < i8a.length);i++){
        str += (i8a[i] + ' ');
    };
    return str;
};
function showModal(title,content){
    tt.showModal({
        title:title,
        content:content,
        showCancel:false
    });
};
function showSuccess(title){
    tt.showToast({
        title:title,
        icon:'success',
        duration:1000
    });
};
OnekitPage({
    data:{
        socketStatus:'closed',
        text:'显示消息\n'
    },
    onUnload:function(){
        this.closeSocket();
    },
    toggleSocket:function(e){
        const turnedOn = e.detail.value;
        if((turnedOn && ((this.data.socketStatus == 'closed')))){
        this.openSocket();
    } else if((!turnedOn && ((this.data.socketStatus == 'connected')))){
        this.closeSocket();
    }
    },
    openSocket:function(){
        var that = this;
        var url = 'wss://frontier.snssdk.com/ws/v2?aid=1288&device_id=98543534&fpid=72&access_key=f075e82cde98601fc5d41302af325631';
        this.socket = tt.connectSocket({
        url:url,
        success:function(){
            setTimeout(()=>{that.operateData()},0);
        },
        fail:function(err){
            console.error('建立 WebSocketTask 失败',err);
            tt.showToast({
            title:'建立WebSocketTask 失败',
            icon:"none"
        });
        }
    });
    },
    operateData:function(){
        var that = this;
        console.log('开始链接！！！');
        that.socket.onOpen(()=>{
        console.log('链接成功');
        that.setData({
            socketStatus:'connected',
            text:''
        });
    });
        that.socket.onClose(()=>{
        that.setData({
            socketStatus:'closed'
        });
        tt.showToast({
            title:'WebSocket已断开',
            icon:"none"
        });
    });
        that.socket.onError((error)=>{
        console.error('WebSocket 发生错误:',error);
        that.setData({
            socketStatus:'errored'
        });
        tt.showToast({
            title:'WebSocket发生错误',
            icon:"none"
        });
    });
        that.socket.onMessage((message)=>{
        showSuccess('收到信道消息');
        var data = message.data;
        if((Object.prototype.toString.call(data) === '[object ArrayBuffer]')){
            data = gRead(data);
        }
        that.setData({
            text:(((((that.data.text + '[rec] ')) + data)) + '\n')
        });
    });
    },
    closeSocket:function(){
        if(this.socket){
        this.socket.close({
            code:1000,
            reason:'pageclose'
        });
    }
        this.setData({
        socketStatus:'closed'
    });
    },
    sendMessage:function(){
        var that = this;
        var {socketStatus} = this.data;
        if((socketStatus != 'connected')){
        return;
    }
        if(this.socket){
        this.socket.send({
            data:gTexts[gCounter],
            success:function(){
                that.setData({
                text:(((((that.data.text + '[send] ')) + gTexts[gCounter])) + '\n')
            });
                gCounter += 1;
                if((gCounter >= gTexts.length)){
                gCounter = 0;
            }
            },
            fail:function(){
                console.error('发送失败');
            }
        });
    }
    },
    sendMessageAB:function(){
        var that = this;
        var {socketStatus} = this.data;
        if((socketStatus != 'connected')){
        return;
    }
        if(this.socket){
        var ab = new ArrayBuffer(10);
        var i8a = new Int8Array(ab);
        for(var i = 0;(i < i8a.length);i++){
            i8a[i] = parseInt((Math.random() * 16));
        }
        this.socket.send({
            data:ab,
            success:function(){
                that.setData({
                text:(((((that.data.text + '[send] ')) + gRead(ab))) + '\n')
            });
                gCounter += 1;
                if((gCounter >= gTexts.length)){
                gCounter = 0;
            }
            },
            fail:function(){
                console.error('发送失败');
            }
        });
    }
    }
});
