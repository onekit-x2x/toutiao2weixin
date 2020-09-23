import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
function success(){
    tt.showToast({
        title:'success'
    });
};
function fail(){
    tt.showToast({
        title:'fail'
    });
};
OnekitPage({
    data:{},
    onShow:function(){
    },
    short:function(){
        tt.vibrateShort({
        success:success,
        fail:fail
    });
    },
    long:function(){
        tt.vibrateLong({
        success:success,
        fail:fail
    });
    }
});
