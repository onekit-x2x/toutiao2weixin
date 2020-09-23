import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{},
    properties:{},
    methods:{
        showNavigationBarLoading:function(){
            tt.showNavigationBarLoading();
        },
        hideNavigationBarLoading:function(){
            tt.hideNavigationBarLoading();
        },
        showNavigationBarColor:function(){
            tt.setNavigationBarColor({
            frontColor:"#ffffff",
            backgroundColor:"#F85959",
            success:function(res){
                console.log(res);
            },
            fail:function(res){
                console.log("setNavigationBarColor调用失败");
            }
        });
        },
        reverseNavigationBarColor:function(){
            tt.setNavigationBarColor({
            frontColor:"#000000",
            backgroundColor:"#ffffff",
            success:function(res){
                console.log(res);
            },
            fail:function(res){
                console.log("setNavigationBarColor调用失败");
            }
        });
        }
    }
});
