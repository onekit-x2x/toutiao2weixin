import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
var util = require('../../../util/util');
var dataUrl = 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0001.mp3';
const defaultFormatedTime = '00:00:00';
OnekitPage({
    data:{
        formatedCurrentTime:defaultFormatedTime,
        formatedDuration:defaultFormatedTime,
        duration:0,
        currentTime:0,
        playing:false,
        paused:false,
        buffered:0
    },
    onLoad:function({src}){
        if(src){
        src = decodeURIComponent(src);
        dataUrl = src;
    }
    },
    onShow:function(){
        if(this.innerAudioContext){
        return;
    }
        this.canUpdateUI = true;
        var iac = this.innerAudioContext = tt.createInnerAudioContext();
        iac.src = dataUrl;
        iac.startTime = 0;
        iac.autoplay = false;
        iac.loop = false;
        iac.obeyMuteSwitch = false;
        iac.onCanplay(()=>{this.updateUI()});
        iac.onPlay(()=>{this.updateUI()});
        iac.onPause(()=>{this.updateUI()});
        iac.onStop(()=>{this.updateUI()});
        iac.onEnded(()=>{this.updateUI()});
        iac.onTimeUpdate(()=>{this.updateUI()});
        iac.onError((err)=>{this.updateUI()});
        iac.onWaiting(()=>{this.updateUI()});
        iac.onSeeking(()=>{this.updateUI()});
        iac.onSeeked(()=>{this.updateUI()});
    },
    updateUI:function(){
        var iac = this.innerAudioContext;
        if(this.canUpdateUI){
        this.setData({
            formatedCurrentTime:(util.formatTime((parseInt(iac.currentTime) || 0)) || defaultFormatedTime),
            formatedDuration:(util.formatTime((parseInt(iac.duration) || 0)) || defaultFormatedTime),
            duration:(parseInt(iac.duration) || 0),
            currentTime:(iac.currentTime || 0),
            playing:!iac.paused,
            buffered:(parseInt(iac.buffered) || 0)
        });
    }
    },
    onUnload:function(){
        if(this.innerAudioContext){
        this.innerAudioContext.destroy();
    }
    },
    pause:function(){
        this.innerAudioContext.pause();
        this.updateUI();
    },
    play:function(){
        this.innerAudioContext.play();
        this.updateUI();
    },
    stop:function(){
        this.innerAudioContext.stop();
        this.updateUI();
    },
    seeking:function(e){
        this.canUpdateUI = false;
    },
    seek:function(e){
        this.canUpdateUI = true;
        try{
        this.innerAudioContext.seek(e.detail.value);
    }
    catch{
    };
    },
    setloop:function(e){
        this.innerAudioContext.loop = e.detail.value;
    },
    setmute:function(e){
        this.innerAudioContext.obeyMuteSwitch = e.detail.value;
    }
});
