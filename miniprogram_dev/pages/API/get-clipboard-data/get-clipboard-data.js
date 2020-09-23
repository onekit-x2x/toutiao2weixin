import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        copyed:'',
        pasted:''
    },
    copy:function(){
        var that = this;
        if(!that.data.copyed){
        return tt.showToast({
            icon:'none',
            title:'请输入内容'
        });
    }
        tt.setClipboardData({
        data:that.data.copyed,
        success:function(){
            tt.showToast({
            title:'复制好了'
        });
        }
    });
    },
    input:function(event){
        this.setData({
        copyed:event.detail.value
    });
    },
    paste:function(){
        var that = this;
        tt.getClipboardData({
        success:function(res){
            that.setData({
            pasted:res.data
        });
            tt.showToast({
            title:'粘贴好了'
        });
        }
    });
    }
});
