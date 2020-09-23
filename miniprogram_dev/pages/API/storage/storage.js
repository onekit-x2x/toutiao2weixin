import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        key:'',
        value:'',
        storageKeys:'123'
    },
    onLoad:function(){
        this.updateStorageInfo();
    },
    keyChange:function(e){
        this.setData({
        key:e.detail.value
    });
    },
    valueChange:function(e){
        this.setData({
        value:e.detail.value
    });
    },
    setStorage:function(){
        var {key,value} = this.data;
        if((key === '')){
        return tt.showModal({
            title:'提示',
            content:'key 不能为空'
        });
    }
        tt.setStorageSync(key,value);
        return tt.showModal({
        title:'提示',
        content:'数据保存成功'
    });
    },
    getStorage:function(){
        var {key} = this.data;
        if((key === '')){
        return tt.showModal({
            title:'提示',
            content:'key 不能为空'
        });
    }
        var value = tt.getStorageSync(key);
        var content = `数据读取成功, value 为 ${value}`;
        if(!value){
        content = `找不到与${key}对应的数据`;
    }
        this.setData({
        value:value
    });
        return tt.showModal({
        title:'提示',
        content:content
    });
    },
    clearStorage:function(){
        try{
        tt.clearStorageSync();
        this.setData({
            key:'',
            value:''
        });
        return tt.showModal({
            title:'提示',
            content:'数据清空成功'
        });
    }
    catch{
    };
    },
    updateStorageInfo:function(){
        this.showStorageInfo();
    },
    showStorageInfo:function(){
        tt.getStorageInfo({
        success:(storageInfo)=>{
            tt.showModal({
                title:'存储信息',
                content:JSON.stringify(storageInfo)
            });
            const {keys,limitSize,currentSize} = storageInfo;
            this.setData({
                storageKeys:JSON.stringify(keys),
                limitSize:limitSize,
                currentSize:currentSize
            });
        }
    });
    }
});
