import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        now:Date.now()
    },
    onShow:function(){
        this.setData({
        now:Date.now()
    });
    },
    onLoad:function(par){
    },
    navigateTo:function(){
        tt.navigateTo({
        url:'./navigator?a=b&c=d'
    });
    },
    navigateBack:function(){
        tt.navigateBack();
    },
    redirectTo:function(){
        tt.redirectTo({
        url:'./navigator'
    });
    },
    reLaunch:function(){
        tt.reLaunch({
        url:'/pages/API/index',
        success:function(res){
        },
        fail:function(res){
        },
        complete:function(res){
        }
    });
    },
    switchTab:function(){
        tt.switchTab({
        url:'/pages/API/index',
        success:function(res){
        },
        fail:function(res){
        },
        complete:function(res){
        }
    });
    }
});
