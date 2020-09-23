import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{
        autoplay:false,
        src:'http://tosv.byted.org/obj/developer/bytdance.flv',
        objectFit:'contain',
        orientation:'vertical',
        minCache:1,
        maxCache:3,
        muted:false,
        backgroundMute:false
    },
    lifetimes:{
        attached:function(){
            this.ctx = tt.createLivePlayerContext('myLive');
        }
    },
    properties:{},
    methods:{
        statechange:function(e){
            console.log(('播放状态变化 statechange' + JSON.stringify(e)));
        },
        netstatus:function(e){
            console.log(('网络状态变化 netstatus' + JSON.stringify(e)));
        },
        livePlay:function(e){
            this.ctx.play();
        },
        objectFit:function(e){
            this.setData('objectFit',(this.getData('objectFit') === 'contain')?'fillCrop':'contain');
        },
        liveStop:function(e){
            this.ctx.stop();
        },
        liveMute:function(e){
            this.setData({
            muted:!this.data.muted
        });
        },
        backgroundMute:function(e){
            this.setData({
            'backgroundMute':true
        });
        }
    }
});
