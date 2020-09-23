import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        result:''
    },
    onLoad:function(){
    },
    chooseAdress:function(){
        var that = this;
        tt.chooseAddress({
        success:function(res){
            tt.showToast({
            title:'success'
        });
            that.setData({
            result:JSON.stringify(res,null,4)
        });
        },
        fail:function(res){
            tt.showToast({
            title:'fail'
        });
            that.setData({
            result:JSON.stringify(res,null,4)
        });
        }
    });
    }
});
