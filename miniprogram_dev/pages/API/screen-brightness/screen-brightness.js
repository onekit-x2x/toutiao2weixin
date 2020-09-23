import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{
        screenBrightness:0
    },
    properties:{},
    attached:function(){
        this._updateScreenBrightness();
    },
    methods:{
        changeBrightness:function(e){
        },
        _updateScreenBrightness:function(){
        }
    }
});
