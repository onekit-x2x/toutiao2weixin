import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
const str = 'action-sheet';
var itemList = [
];
for(var i = 0;(i < 6);i++){
    itemList.push((str + i));
};
OnekitPage({
    actionSheetTap:function(){
        tt.showActionSheet({
        itemList:itemList,
        success:function(e){
            tt.showToast({
            title:`你点击了第${(e.tapIndex + 1)}个项目`
        });
        }
    });
    }
});
