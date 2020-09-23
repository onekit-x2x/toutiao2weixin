import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
const SET_TAB_INDEX = 1;
OnekitComponent({
    data:{},
    properties:{},
    attached:function(){
        tt.setNavigationBarTitle({
        title:'设置tabbar'
    });
    },
    methods:{
        reset:function(){
        },
        toggleTabBarBadge:function(){
            const nextStatus = !this.data.hasSetTabBarBadge;
            this.setData({
            hasSetTabBarBadge:nextStatus
        });
            this.setTabBarAction(nextStatus);
        },
        toggleTabBarRedDot:function(){
            const nextStatus = !this.data.hasShownTabBarRedDot;
            this.setData({
            hasShownTabBarRedDot:nextStatus
        });
            this.setTabBarRedDotAction(nextStatus);
        },
        toggleCustomStyle:function(){
            const nextStatus = !this.data.hasCustomedStyle;
            this.setData({
            hasCustomedStyle:nextStatus
        });
            this.setCustomStyleAction(nextStatus);
        },
        toggleCustomItem:function(){
            const nextStatus = !this.data.hasCustomedItem;
            this.setData({
            hasCustomedItem:nextStatus
        });
            this.setCustomItemAction(nextStatus);
        },
        toggleTabBarVisible:function(){
            const nextStatus = !this.data.hasHiddenTabBar;
            this.setData({
            hasHiddenTabBar:nextStatus
        });
            this.setTabBarVisibleAction(!nextStatus);
        },
        setTabBarVisibleAction:function(show){
            if(show){
            wx.showTabBar();
        } else {
            wx.hideTabBar();
        }
        },
        setCustomItemAction:function(showCustom){
            if(showCustom){
            console.log('展示自定义的样式');
            tt.setTabBarItem({
                index:1,
                text:'接口',
                iconPath:'image/category/tab_api.png',
                selectedIconPath:'image/category/tab_api_selected.png'
            });
        } else {
            tt.setTabBarItem({
                index:1,
                text:'API',
                iconPath:'image/category/tab_api.png',
                selectedIconPath:'image/category/tab_api_selected.png'
            });
        }
        },
        setCustomStyleAction:function(showCustom){
            const tabBarConfig = {
            customStyle:{
                color:'#FFF',
                selectedColor:'#1AAD19',
                backgroundColor:'#000000'
            },
            defaultTabBarStyle:{
                color:'#7A7E83',
                selectedColor:'#3cc51f',
                backgroundColor:'#ffffff'
            }
        };
            if(showCustom){
            tt.setTabBarStyle(tabBarConfig.customStyle);
        } else {
            tt.setTabBarStyle(tabBarConfig.defaultTabBarStyle);
        }
        },
        setTabBarRedDotAction:function(showRedDot){
            if(showRedDot){
            tt.showTabBarRedDot({
                index:SET_TAB_INDEX
            });
        } else {
            wx.hideTabBarRedDot({
                index:SET_TAB_INDEX
            });
        }
        },
        setTabBarAction:function(show){
            if(show){
            tt.setTabBarBadge({
                index:SET_TAB_INDEX,
                text:'1'
            });
        } else {
            tt.removeTabBarBadge({
                index:SET_TAB_INDEX
            });
        }
        },
        navigateBack:function(){
            this.triggerEvent('unmount');
        }
    }
});
