import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
var app = getApp();
var userActions = require('../../../util/user-actions.js');
OnekitPage({
    onLoad:function(){
        var that = this;
        tt.checkSession({
        success:function(){
            that.setData({
            hasLogin:true
        });
        },
        fail:function(){
            that.setData({
            hasLogin:false
        });
        }
    });
    },
    data:{
        hasLogin:false,
        code:tt.getStorageSync('login.code')
    },
    login:function(){
        userActions.getUserInfo().then((loginInfo)=>{this.setData(loginInfo)});
    }
});
