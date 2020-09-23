import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    openLocation:function(e){
        var value = e.detail.value;
        tt.openLocation({
        longitude:Number(value.longitude),
        latitude:Number(value.latitude),
        name:value.name,
        address:value.address,
        scale:Number(value.scale)
    });
    },
    getLocation:function(){
        tt.getLocation({
        type:'gcj02',
        success:function(res){
            tt.openLocation({
            longitude:Number(res.longitude),
            latitude:Number(res.latitude),
            name:'我',
            address:'我的位置',
            scale:18,
            success:function(){
                tt.showToast({
                title:'success'
            });
            },
            fail:function(res){
                tt.showToast({
                title:res.errMsg
            });
            }
        });
        },
        fail:function(res){
            tt.showToast({
            title:res.errMsg
        });
        }
    });
    }
});
