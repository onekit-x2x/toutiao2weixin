import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{
        isConnected:false
    },
    lifetimes:{
        attached:function(){
            this.listenChangeStatus();
            this.showNetWorkStatus();
        }
    },
    methods:{
        listenChangeStatus:function(){
            tt.onNetworkStatusChange((res)=>{this.setData({
            isConnected:res.isConnected,
            networkType:res.networkType
        })});
        },
        showNetWorkStatus:function(){
            tt.getNetworkType({
            success:(res)=>{this.setData({
                isConnected:(res.networkType !== 'none'),
                networkType:res.networkType
            })}
        });
        }
    }
});
