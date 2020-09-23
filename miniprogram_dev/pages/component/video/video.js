import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
function getRandomColor(){
    const rgb = [
    ];
    for(var i = 0;(i < 3);++i){
        var color = Math.floor((Math.random() * 256)).toString(16);
        color = (color.length == 1)?('0' + color):color;
        rgb.push(color);
    };
    return ('#' + rgb.join(''));
};
OnekitPage({
    onReady:function(res){
    },
    inputValue:'',
    data:{
        src:'',
        danmuList:[
            {
                text:'第 1s 出现的弹幕',
                color:'#ff0000',
                time:1
            },
            {
                text:'第 3s 出现的弹幕',
                color:'#ff00ff',
                time:3
            }
        ],
        isFullscreen:false,
        isLoopPlay:false,
        isShowPlayBtn:false,
        isShowControls:true,
        playBtnPosition:'center',
        objectFitNum:0,
        objectFitType:'contain'
    },
    bindInputBlur:function(e){
        this.inputValue = e.detail.value;
    },
    bindButtonTap:function(){
        var that = this;
        tt.chooseVideo({
        sourceType:[
            'album',
            'camera'
        ],
        maxDuration:60,
        camera:[
            'front',
            'back'
        ],
        success:function(res){
            that.setData({
            src:res.tempFilePath
        });
        }
    });
    },
    videoErrorCallback:function(e){
        console.log(e.detail.errMsg);
    },
    switchFullScreen:function(){
        this.setData({
        isFullscreen:!this.data.isFullscreen
    });
    },
    switchLoopPlay:function(){
        this.setData({
        isLoopPlay:!this.data.isLoopPlay
    });
    },
    switchPlayBtn:function(){
        this.setData({
        isShowPlayBtn:!this.data.isShowPlayBtn
    });
    },
    switchControls:function(){
        this.setData({
        isShowControls:!this.data.isShowControls
    });
    },
    switchPlayBtnPosition:function(){
        console.log('switchPlayBtnPosition:',this.data.playBtnPosition);
        this.setData({
        playBtnPosition:(this.data.playBtnPosition === 'center')?'bottom':'center'
    });
    },
    switchFit:function(){
        const objectFitEnum = [
        'contain',
        'fill',
        'cover'
    ];
        this.setData({
        objectFitType:objectFitEnum[(this.data.objectFitNum % 3)],
        objectFitNum:(this.data.objectFitNum + 1)
    });
    }
});
