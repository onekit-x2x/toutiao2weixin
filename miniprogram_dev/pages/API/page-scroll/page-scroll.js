import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{},
    properties:{},
    methods:{
        scrollToBottom:function(){
            wx.pageScrollTo({
            scrollTop:3000,
            duration:300
        });
        },
        scrollToTop:function(){
            wx.pageScrollTo({
            scrollTop:0,
            duration:300
        });
        }
    }
});
