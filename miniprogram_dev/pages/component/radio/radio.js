import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        items:[
            {
                value:'xigua',
                name:'西瓜视频'
            },
            {
                value:'toutiao',
                name:'今日头条',
                checked:'true'
            },
            {
                value:'huoshan',
                name:'火山小视频'
            },
            {
                value:'douyin',
                name:'抖音'
            },
            {
                value:'flipgaram',
                name:'Flipagram'
            }
        ]
    },
    checkboxChange:function(e){
    }
});
