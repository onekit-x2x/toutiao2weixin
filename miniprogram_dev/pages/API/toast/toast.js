import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    toast1Tap:function(){
        tt.showToast({
        title:"默认内容"
    });
    },
    toast2Tap:function(){
        tt.showToast({
        title:"duration 3000",
        duration:3000
    });
    },
    toast3Tap:function(){
        tt.showToast({
        title:"loading",
        icon:"loading"
    });
    },
    hideToast:function(){
        tt.hideToast();
    },
    showLoadingTap:function(){
        tt.showLoading({
        title:'loading',
        mask:false
    });
    },
    hideLoadingTap:function(){
        tt.hideLoading();
    }
});
