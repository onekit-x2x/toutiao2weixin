import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
const pageData = {
    onShareAppMessage:function(){
        return {
        title:'slider',
        path:'page/component/pages/slider/slider'
    };
    }
};
for(var i = 1;(i < 5);++i){
    (function(index){
        pageData[((('slider' + index)) + 'change')] = function(e){
        console.log(((('slider' + index)) + '发生change事件，携带值为'),e.detail.value);
    };
    }(i));
};
OnekitPage(pageData);
