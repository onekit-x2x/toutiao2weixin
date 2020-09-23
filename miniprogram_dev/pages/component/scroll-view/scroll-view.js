import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
var order = [
    'demo1',
    'demo2',
    'demo3'
];
OnekitPage({
    data:{
        toView:'green'
    },
    upper:function(e){
    },
    lower:function(e){
    },
    scroll:function(e){
    },
    scrollToTop:function(e){
        this.setAction({
        scrollTop:0
    });
    },
    tap:function(e){
        for(var i = 0;(i < order.length);++i){
        if((order[i] === this.data.toView)){
            this.setData({
                toView:order[(i + 1)],
                scrollTop:(((i + 1)) * 200)
            });
            break;
        }
    };
    },
    tapMove:function(e){
        this.setData({
        scrollTop:(this.data.scrollTop + 10)
    });
    }
});
