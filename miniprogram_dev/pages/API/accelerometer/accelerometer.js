import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        acc:{},
        stop:true
    },
    onShow:function(){
        var that = this;
        tt.onAccelerometerChange(function(res){
        that.setData({
        acc:res,
        stop:false
    });
    });
    },
    start:function(){
        if(!this.data.stop){
        return;
    }
        this.setData({
        stop:false
    });
        tt.startAccelerometer({
        success:function(res){
            tt.showToast({
            title:'开始监听'
        });
        },
        fail:function(err){
            tt.showToast({
            title:'开始监听失败'
        });
        }
    });
    },
    clear:function(){
        this.setData({
        acc:{}
    });
    },
    stop:function(){
        if(this.data.stop){
        return;
    }
        this.setData({
        stop:true
    });
        tt.stopAccelerometer({
        success:function(res){
            tt.showToast({
            title:'停止监听'
        });
        },
        fail:function(err){
            tt.showToast({
            title:'停止监听失败'
        });
        }
    });
    }
});
