import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        background:[
            'demo-text-1',
            'demo-text-2',
            'demo-text-3'
        ],
        indicatorDots:true,
        vertical:false,
        autoplay:false,
        interval:2000,
        duration:500
    },
    changeIndicatorDots:function(e){
        this.setData({
        indicatorDots:!this.data.indicatorDots
    });
    },
    changeAutoplay:function(e){
        this.setData({
        autoplay:!this.data.autoplay
    });
    },
    intervalChange:function(e){
        this.setData({
        interval:e.detail.value
    });
    },
    durationChange:function(e){
        this.setData({
        duration:e.detail.value
    });
    }
});
