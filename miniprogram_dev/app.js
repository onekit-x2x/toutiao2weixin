import OnekitApp from 'toutiao2weixin/OnekitApp';
import tt from 'toutiao2weixin/tt';
global = {};
OnekitApp({
    onLaunch:function(){
        console.log('App Launch');
    },
    onShow:function(){
        console.log('App Show');
    },
    onHide:function(){
        console.log('App Hide');
    }
});
