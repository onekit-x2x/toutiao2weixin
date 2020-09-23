import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{
        settings:{
            'userInfo':{
                title:'用户信息',
                hasAuth:false,
                btnTxt:'用户信息授权'
            },
            'userLocation':{
                title:'地理位置',
                hasAuth:false,
                btnTxt:'地理位置授权'
            },
            'address':{
                title:'通讯地址',
                hasAuth:false,
                btnTxt:'通讯地址授权'
            },
            'record':{
                title:'录音功能',
                hasAuth:false,
                btnTxt:'录音功能授权'
            },
            'album':{
                title:'保存到相册',
                hasAuth:false,
                btnTxt:'保存到相册授权'
            },
            'camera':{
                title:'摄像头',
                hasAuth:false,
                btnTxt:'摄像头授权'
            }
        }
    },
    attached:function(){
        this.showSetting();
    },
    methods:{
        showSetting:function(){
            tt.getSetting({
            success:({authSetting})=>{
                var setAuthObj = {};
                for(var scopeName in authSetting){
                        const settingName = scopeName.replace(/scope\./,'settings.');
                        setAuthObj[(settingName + '.hasAuth')] = true;
                    };
                this.setData(setAuthObj);
            }
        });
        },
        updateSetting:function(){
            this.showSetting();
        },
        authAction:function(e){
            const scopeName = ('scope.' + e.currentTarget.dataset.auth);
            console.log('scopeName::',scopeName);
            tt.authorize({
            scope:scopeName,
            success:(res)=>{
                console.log('authorize::',res);
                this.updateSetting();
            }
        });
        },
        openSetting:function(){
            tt.openSetting({
            success:(res)=>{
            }
        });
        }
    }
});
