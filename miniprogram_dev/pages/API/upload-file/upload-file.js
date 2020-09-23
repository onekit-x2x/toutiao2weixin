import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
const uploadFileUrl = 'https://jsonplaceholder.typicode.com/posts/';
OnekitPage({
    chooseImage:function(){
        var self = this;
        tt.chooseImage({
        count:1,
        sizeType:[
            'compressed'
        ],
        sourceType:[
            'album'
        ],
        success:function(res){
            var localImagePath = res.tempFilePaths[0];
            tt.uploadFile({
            url:uploadFileUrl,
            filePath:localImagePath,
            name:'data',
            header:{
                a:'b'
            },
            formData:{
                c:'d'
            },
            success:function(res){
                tt.showToast({
                title:'上传成功',
                icon:'success',
                duration:1000
            });
                self.setData({
                localImagePath:localImagePath
            });
            },
            fail:function({errMsg}){
                tt.showToast({
                icon:'none',
                title:'上传失败'
            });
            }
        });
        },
        fail:function({errMsg}){
            tt.showToast({
            icon:'none',
            title:'选择图片失败'
        });
        }
    });
    }
});
