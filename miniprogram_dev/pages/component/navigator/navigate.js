import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    onShareAppMessage:function(){
        return {
        title:'navigatePage',
        path:'page/component/pages/navigator/navigate'
    };
    },
    onLoad:function(options){
        console.log(options);
        this.setData({
        title:options.title
    });
    }
});
