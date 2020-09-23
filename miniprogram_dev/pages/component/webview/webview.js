import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        webview_url:"https://m.toutiao.com/i6584908261948916238/"
    },
    onLoad:function(option){
        if(option.url){
        this.setData({
            webview_url:decodeURIComponent(option.url)
        });
    }
    }
});
