import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    data:{
        pickerHidden:true,
        chosen:''
    },
    pickerConfirm:function(e){
        this.setData({
        pickerHidden:true
    });
        this.setData({
        chosen:e.detail.value
    });
    },
    pickerCancel:function(e){
        this.setData({
        pickerHidden:true
    });
    },
    pickerShow:function(e){
        this.setData({
        pickerHidden:false
    });
    },
    formSubmit:function(e){
    },
    formReset:function(e){
        this.setData({
        chosen:''
    });
    }
});
