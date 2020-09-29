
import tt from '../toutiao2weixin/tt';
import OnekitComponent from '../toutiao2weixin/OnekitComponent';
OnekitComponent({
    data:{},
    attached:function(){
        this.fs = tt.getFileSystemManager();
        tt.downloadFile({
        url:'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
        success:(res)=>{
            this.data.tempFilePath = res.tempFilePath;
            tt.showToast({
                title:'下载临时文件成功',
                icon:'none'
            });
            console.log(this.data.tempFilePath);
        },
        fail:(err)=>{this.toast('保存失败，请稍后重试','none')}
    });
    },
    properties:{},
    methods:{
        access:function(){
            this.fs.access({
            path:this.data.tempFilePath,
            success:(res)=>{
                tt.showModal({
                    title:'文件存在',
                    content:JSON.stringify(res),
                    showCancel:false
                });
                console.log('access success',res);
            },
            fail:(err)=>{
                tt.showModal({
                    title:'文件不存在',
                    content:JSON.stringify(err),
                    showCancel:false
                });
                console.log('access fail',err);
            }
        });
        },
        accessSync:function(){
            try{
            var result = this.fs.accessSync(this.data.tempFilePath);
            console.log('accessSync success',result);
        }
        catch{
            console.log('accessSync fail',err);
        };
        },
        appendFile:function(){
            this.fs.appendFile({
            tempFilePath:this.data.tempFilePath,
            data:'appendFile',
            success:(res)=>{console.log('appendFile success',res)},
            fail:(err)=>{console.log('appendFile fail',err)}
        });
        },
        appendFileSync:function(){
            try{
            var result = this.fs.appendFileSync(this.data.tempFilePath,'appendFileSync');
            console.log('appendFileSync success',result);
        }
        catch{
            console.log('appendFileSync fail',err);
        };
        },
        copyFile:function(){
            this.fs.copyFile({
            srcPath:this.data.tempFilePath,
            destPath:`${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
            success:(res)=>{
                tt.showModal({
                    title:'拷贝成功',
                    content:'请点击下方获取用户列表按钮查看复制路径',
                    showCancel:false
                });
                console.log('copyFile success',res);
            },
            fail:(err)=>{
                tt.showModal({
                    title:'拷贝失败',
                    content:JSON.stringify(err),
                    showCancel:false
                });
                console.log('copyFile fail',err);
            }
        });
        },
        copyFileSync:function(){
            try{
            var result = this.fs.copyFileSync(this.data.tempFilePath,`${tt.env.USER_DATA_PATH}/mkdir/copyFileSync.txt`);
            console.log('copyFileSync success',result);
        }
        catch{
            console.log('copyFileSync fail',err);
        };
        },
        getFileInfo:function(){
            this.fs.getFileInfo({
            filePath:this.data.tempFilePath,
            success:(res)=>{
                tt.showModal({
                    title:'文件信息',
                    content:JSON.stringify(res),
                    showCancel:false
                });
                console.log('getFileInfo success',res);
            },
            fail:(err)=>{console.log('getFileInfo fail',err)}
        });
        },
        getSavedFileList:function(){
            this.fs.getSavedFileList({
            success:(res)=>{
                console.log('res::',res);
                tt.showModal({
                    title:'文件列表',
                    content:JSON.stringify(res.fileList),
                    showCancel:false
                });
                console.log('getSavedFileList success',res);
            },
            fail:(err)=>{console.log('getSavedFileList fail',err)}
        });
        },
        mkdir:function(){
            this.fs.mkdir({
            dirPath:`${tt.env.USER_DATA_PATH}/mkdir`,
            success:(res)=>{
                tt.showModal({
                    title:'创建成功',
                    content:JSON.stringify(res),
                    showCancel:false
                });
                console.log('mkdir success',res);
            },
            fail:(err)=>{
                tt.showModal({
                    title:'创建失败',
                    content:JSON.stringify(err),
                    showCancel:false
                });
                console.log('mkdir fail',err);
            }
        });
        },
        mkdirSync:function(){
            try{
            var result = this.fs.mkdirSync(`${tt.env.USER_DATA_PATH}/mkdirSyc`);
            console.log('mkdirSync success',result);
        }
        catch{
            console.log('mkdirSync fail',err);
        };
        },
        readdir:function(){
            this.fs.readdir({
            dirPath:`${tt.env.USER_DATA_PATH}/mkdir`,
            success:(res)=>{
                tt.showModal({
                    title:'读取成功',
                    content:(((`${tt.env.USER_DATA_PATH}/mkdir` + '目录下文件有：')) + JSON.stringify(res.files)),
                    showCancel:false
                });
                console.log('readdir success',res);
            },
            fail:(err)=>{
                console.log('readdir fail',err);
                tt.showModal({
                    title:'读取失败',
                    content:JSON.stringify(err),
                    showCancel:false
                });
            }
        });
        },
        readdirSync:function(){
            try{
            var result = this.fs.readdirSync(`${tt.env.USER_DATA_PATH}/readdirSyc'`);
            console.log('readdirSync success',result);
        }
        catch{
            console.log('readdirSync fail',err);
        };
        },
        readFile:function(){
            tt.showModal({
            title:'文件地址',
            content:this.data.tempFilePath
        });
            this.fs.readFile({
            filePath:this.data.tempFilePath,
            encoding:'hex',
            success:(res)=>{
                tt.showModal({
                    title:'读取本地文件内容',
                    content:res.data,
                    showCancel:false
                });
                console.log('readFile success',res);
            },
            fail:(err)=>{
                console.log('readFile fail',err);
                tt.showModal({
                    title:'读取本地文件内容',
                    content:JSON.stringify(err),
                    showCancel:false
                });
            }
        });
        },
        readFileSync:function(){
            try{
            var result = this.fs.readFileSync(this.data.tempFilePath);
            console.log('readFileSync success',result);
        }
        catch{
            console.log('readFileSync fail',err);
        };
        },
        removeSavedFile:function(){
            this.fs.removeSavedFile({
            filePath:`${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
            encoding:'utf8',
            success:(res)=>{tt.showModal({
                title:'删除成功',
                content:JSON.stringify(res),
                showCancel:false
            })},
            fail:(err)=>{
                tt.showModal({
                    title:'删除失败',
                    content:JSON.stringify(err),
                    showCancel:false
                });
                console.log('removeSavedFile fail',err);
            }
        });
        },
        rename:function(){
            this.fs.rename({
            oldPath:`${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
            newPath:`${tt.env.USER_DATA_PATH}/demo.txt`,
            encoding:'utf8',
            success:(res)=>{
                tt.showModal({
                    title:'重命名成功',
                    content:JSON.stringify(res),
                    showCancel:false
                });
                console.log('rename success',res);
            },
            fail:(err)=>{
                tt.showModal({
                    title:'重命名失败',
                    content:JSON.stringify(err),
                    showCancel:false
                });
                console.log('rename fail',err);
            }
        });
        },
        renameSync:function(){
            try{
            var result = this.fs.renameSync(this.data.tempFilePath,`${tt.env.USER_DATA_PATH}/renameSync/demo.txt`);
            console.log('renameSync success',result);
        }
        catch{
            console.log('renameSync fail',err);
        };
        },
        rmdir:function(){
            this.fs.rmdir({
            dirPath:`${tt.env.USER_DATA_PATH}/mkdir`,
            success:(res)=>{
                tt.showModal({
                    title:'删除成功',
                    content:JSON.stringify(res),
                    showCancel:false
                });
                console.log('rmdir success',res);
            },
            fail:(err)=>{
                tt.showModal({
                    title:'删除失败',
                    content:JSON.stringify(err),
                    showCancel:false
                });
                console.log('rmdir fail',err);
            }
        });
        },
        rmdirSync:function(){
            try{
            var result = this.fs.rmdirSync(`${tt.env.USER_DATA_PATH}/rmdirSync`);
            console.log('rmdirSync success',result);
        }
        catch{
            console.log('rmdirSync fail',err);
        };
        },
        saveFile:function(){
            this.fs.saveFile({
            tempFilePath:this.data.tempFilePath,
            filePath:`${tt.env.USER_DATA_PATH}/mkdir`,
            success:(res)=>{console.log('saveFile success',res)},
            fail:(err)=>{console.log('saveFile fail',err)}
        });
        },
        saveFileSync:function(){
            try{
            var result = this.fs.saveFileSync('/usr/temp.txt',`${tt.env.USER_DATA_PATH}/`);
            console.log('saveFileSync success',result);
        }
        catch{
            console.log('saveFileSync fail',err);
        };
        },
        stat:function(){
            this.fs.stat({
            path:this.data.tempFilePath,
            success:(res)=>{
                tt.showModal({
                    title:'stat获取成功',
                    content:JSON.stringify(res.stats),
                    showCancel:false
                });
                console.log('stat success',res);
            },
            fail:(err)=>{
                tt.showModal({
                    title:'stat获取失败',
                    content:JSON.stringify(res.stats),
                    showCancel:false
                });
                console.log('stat fail',err);
            }
        });
        },
        statSync:function(){
            try{
            var result = this.fs.statSync(this.data.tempFilePath);
            console.log('statSync success',result);
        }
        catch{
            console.log('statSync fail',err);
        };
        },
        unlink:function(){
            this.fs.unlink({
            filePath:`${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
            success:(res)=>{
                tt.showModal({
                    title:'已删除',
                    content:JSON.stringify(res),
                    showCancel:false
                });
                console.log('unlink success',res);
            },
            fail:(err)=>{
                tt.showModal({
                    title:'删除失败',
                    content:JSON.stringify(err.errMsg),
                    showCancel:false
                });
                console.log('unlink fail',err);
            }
        });
        },
        unlinkSync:function(){
            try{
            var result = this.fs.unlinkSync(this.data.tempFilePath);
            console.log('unlinkSync success',result);
        }
        catch{
            console.log('unlinkSync fail',err);
        };
        },
        unzip:function(){
            this.fs.unzip({
            ziptempFilePath:`${tt.env.USER_DATA_PATH}/demo/a.zip`,
            targetPath:`${tt.env.USER_DATA_PATH}/demo/b`,
            success:(res)=>{console.log('unzip success',res)},
            fail:(err)=>{console.log('unzip fail',err)}
        });
        },
        writeFile:function(){
            this.fs.writeFile({
            filePath:this.data.tempFilePath,
            data:'writeFile',
            success:(res)=>{console.log('writeFile success',res)},
            fail:(err)=>{console.log('writeFile fail',err)}
        });
        },
        writeFileSync:function(){
            try{
            var result = this.fs.writeFileSync(this.data.tempFilePath,'writeFileSync');
            console.log('writeFileSync success',result);
        }
        catch{
            console.log('writeFileSync fail',err);
        };
        }
    }
});
