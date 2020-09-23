import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        hasNetworkType:false
    },
    getNetworkType:function(){
        var that = this;
        tt.getNetworkType({
        success:function(res){
            that.setData({
            hasNetworkType:true,
            networkType:res.networkType
        });
        }
    });
    },
    clear:function(){
        this.setData({
        hasNetworkType:false,
        networkType:''
    });
    },
    onShow:function(){
        tt.onNetworkStatusChange(({isConnected,networkType})=>{if(isConnected){
        tt.hideLoading();
    } else {
        tt.showLoading({
            title:'请连接网络'
        });
    }});
    }
});
