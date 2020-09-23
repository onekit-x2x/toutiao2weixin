import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        enabled:true,
        direction:0
    },
    onReady:function(){
        const that = this;
        tt.onCompassChange(function(res){
        that.setData({
        direction:parseInt(res.direction,10)
    });
    });
    },
    startCompass:function(){
        if(this.data.enabled){
        return;
    }
        const that = this;
        tt.startCompass({
        success:function(){
            that.setData({
            enabled:true
        });
        }
    });
    },
    stopCompass:function(){
        if(!this.data.enabled){
        return;
    }
        const that = this;
        tt.stopCompass({
        success:function(){
            that.setData({
            enabled:false
        });
        }
    });
    }
});
