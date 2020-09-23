import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{
        data:'内存充足',
        hasMemory:true
    },
    properties:{},
    attached:function(){
        console.log('attached');
        tt.onMemoryWarning(function(res){
        console.log('onMemoryWarningReceive',res);
        if((res[level] === 10)){
        this.setData('data','内存不足');
    }
    });
    },
    methods:{}
});
