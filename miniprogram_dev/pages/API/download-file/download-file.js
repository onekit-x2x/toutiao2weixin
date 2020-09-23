import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
const smallImageUrl = 'https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png';
OnekitPage({
    data:{
        percent:0
    },
    downloadImage:function(){
        this.download('image',smallImageUrl);
    },
    saveImageToPhotosAlbum:function(){
        this.save('saveImageToPhotosAlbum',this.data.imageSrc);
    },
    download:function(type,url){
        var that = this;
        if(this.downloading){
        tt.showToast({
            title:'已有任务正在下载'
        });
        return;
    }
        this.downloading = true;
        tt.downloadFile({
        url:url,
        success:function(res){
            that.setData({
            [`${type}Src`]:res.tempFilePath
        });
        },
        fail:function(res){
            tt.showToast({
            title:res.errMsg,
            icon:'none'
        });
        },
        complete:function(){
            that.downloading = false;
        }
    });
    },
    save:function(api,path){
        if(!path){
        tt.showToast({
            title:'NO FILE'
        });
        return;
    }
        tt[api]({
        filePath:path,
        success:function(){
            tt.showToast({
            title:'succeed'
        });
        },
        fail:function(res){
            tt.showToast({
            title:res.errMsg,
            icon:'none'
        });
        }
    });
    }
});
