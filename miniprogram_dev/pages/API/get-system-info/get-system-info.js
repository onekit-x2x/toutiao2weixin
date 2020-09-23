import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        systemInfo:{}
    },
    clear:function(){
        this.setData({
        systemInfo:{}
    });
    },
    getSystemInfoSync:function(){
        try{
        var res = tt.getSystemInfoSync();
        this.setData({
            systemInfo:res
        });
    }
    catch{
        console.error('getSystemInfoSync:error',e);
    };
    }
});
