import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitComponent({
    data:{
        loading:false
    },
    properties:{},
    methods:{
        requestPayment:function(){
            this.setData({
            loading:true
        });
            tt.request({
            url:'https://tp-pay.snssdk.com/cashdesk/test/createmicoapporder',
            method:'POST',
            data:{
                debug:'',
                totalAmount:1,
                isDebug:0,
                isOffline:0,
                merchantId:'1300000004',
                appId:'800000040005',
                service:1
            },
            success:(res)=>{
                const data = res.data;
                this.setData({
                    loading:false
                });
                tt.pay({
                    orderInfo:data.data,
                    service:1,
                    success:function(res){
                        console.log('pay-success:',res);
                    }
                });
            },
            fail:function(err){
                tt.showModal({
                content:JSON.stringify(err)
            });
            }
        });
        }
    }
});
