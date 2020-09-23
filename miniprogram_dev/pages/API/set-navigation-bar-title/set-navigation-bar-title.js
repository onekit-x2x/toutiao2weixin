import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    setNaivgationBarTitle:function(e){
        var title = (e.detail.value.title || "title");
        tt.setNavigationBarTitle({
        title:title,
        success:function(){
        },
        fail:function(err){
        }
    });
    }
});
