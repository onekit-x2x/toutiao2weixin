import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{
        guideShow:'hide',
        guideTipsShow:'hide'
    },
    properties:{},
    methods:{
        switchGuideImage:function(e){
            this.setData({
            guideShow:'show'
        });
            setTimeout(()=>{this.setData({
            guideShow:'hide'
        })},5000);
        },
        switchGuideTips:function(e){
            this.setData({
            guideTipsShow:'show'
        });
            setTimeout(()=>{this.setData({
            guideTipsShow:'hide'
        })},5000);
        },
        closeGuide:function(){
            console.log('closeGuide:::::');
            this.setData({
            guideShow:'hide'
        });
        },
        closeTipsGuide:function(){
            this.setData({
            guideTipsShow:'hide'
        });
        },
        addToFavor:function(){
            console.log('calling');
            tt.showToast({
            title:'已添加到小程序列表'
        });
            this.setData({
            guideShow:'hide'
        });
        }
    }
});
