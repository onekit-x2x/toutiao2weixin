import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{},
    properties:{},
    methods:{
        saveFile:function(){
            this.toast('正在保存','loading');
            tt.downloadFile({
            url:'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            success:(res)=>{tt.saveFile({
                tempFilePath:res.tempFilePath,
                success:(res)=>{
                    this.toast('保存成功','none');
                    this.setData({
                        'filePath':res.savedFilePath,
                        'hasFile':true
                    });
                },
                fail:(err)=>{this.toast('保存失败，请稍后重试','none')}
            })},
            fail:(err)=>{this.toast('保存失败，请稍后重试','none')}
        });
        },
        openFile:function(){
            const filePath = this.getFile('请先保存文件');
            if(!filePath){
            return;
        }
            tt.openDocument({
            filePath:filePath,
            fileType:'pdf'
        });
        },
        getFileInfo:function(){
            const filePath = this.getFile('请先保存文件');
            if(!filePath){
            return;
        }
            tt.getFileInfo({
            filePath:filePath,
            digestAlgorithm:'md5',
            success:(res)=>{
                tt.showModal({
                    title:'文件信息',
                    content:JSON.stringify(res),
                    showCancel:false
                });
                console.log('getFileInfo success',res);
            },
            fail:(err)=>{
                this.toast('fail','none');
                console.log('getFileInfo success',err);
            }
        });
        },
        getSavedFileList:function(){
            tt.getSavedFileList({
            success:(res)=>{
                tt.showModal({
                    title:'文件列表信息',
                    content:('目前保存文件数' + res.fileList.length),
                    showCancel:false
                });
                console.log('getSavedFileList success',res);
            },
            fail:(err)=>{
                this.toast('fail','none');
                console.log('getSavedFileList fail',err);
            }
        });
        },
        getLocalfileInfo:function(){
            const filePath = this.getFile('请先保存文件');
            if(!filePath){
            return;
        }
            tt.getSavedFileInfo({
            filePath:filePath,
            success:(res)=>{
                tt.showModal({
                    title:'文件信息',
                    content:JSON.stringify(res),
                    showCancel:false
                });
                console.log('getSavedFileInfo success',res);
            },
            fail:(err)=>{
                this.toast('fail','none');
                console.log('getSavedFileInfo fail',err);
            }
        });
        },
        deleteFile:function(){
            const filePath = this.getFile('无可删除文件');
            if(!filePath){
            return;
        }
            tt.removeSavedFile({
            filePath:filePath,
            success:(res)=>{
                this.setData({
                    filePath:''
                });
                this.setData({
                    disabled:true
                });
                this.toast('已删除','none');
            },
            fail:(err)=>{this.toast('操作失败，请稍后重试','none')}
        });
        },
        getFile:function(errTips){
            const filePath = this.data.filePath;
            if(!filePath){
            this.toast(errTips,'none');
        }
            return filePath;
        },
        toast:function(title,icon){
            tt.showToast({
            title:title,
            icon:icon
        });
        }
    }
});
