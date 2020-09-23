import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{
        captured:false
    },
    attached:function(){
        tt.onUserCaptureScreen(()=>{this.setData({
        captured:true
    })});
    },
    properties:{},
    methods:{}
});
