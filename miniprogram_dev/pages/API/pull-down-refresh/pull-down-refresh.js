import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    onPullDownRefresh:function(){
        tt.showLoading({
        title:'loading...',
        icon:'loading'
    });
        setTimeout(()=>{this.stopPullDownRefresh()},10000);
    },
    stopPullDownRefresh:function(){
        tt.stopPullDownRefresh({
        complete:function(res){
            tt.hideLoading();
        }
    });
    },
    startPullDownRefresh:function(){
        tt.startPullDownRefresh();
    },
    onHide:function(){
    },
    onReachBottom:function(){
        tt.showToast({
        title:'onReachBottom'
    });
    }
});
