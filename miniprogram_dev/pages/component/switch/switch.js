import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    switch1Change:function(e){
        console.log('switch1 发生 change 事件，携带值为',e.detail.value);
    },
    switch2Change:function(e){
        console.log('switch2 发生 change 事件，携带值为',e.detail.value);
    }
});
