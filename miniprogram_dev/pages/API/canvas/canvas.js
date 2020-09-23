import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
const example = require('./example.js');
OnekitComponent({
    data:{},
    lifetimes:{
        attached:function(){
            const methods = Object.keys(example);
            this.setData({
            methods:methods
        });
            this.context = tt.createCanvasContext('canvas');
            methods.forEach((method)=>{this[method] = function(){
            example[method](this.context);
            this.context.draw();
        }});
        }
    },
    properties:{},
    methods:{
        toTempFilePath:function(){
            tt.canvasToTempFilePath({
            canvasId:'canvas',
            success:function(res){
                tt.showToast({
                title:'成功保存图片到临时文件夹'
            });
            },
            fail:function(res){
                console.log(res);
            }
        });
        }
    }
});
