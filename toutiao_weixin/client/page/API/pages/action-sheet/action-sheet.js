import tt from "../../../../onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '操作菜单',
      path: 'page/API/pages/action-sheet/action-sheet'
    }
  },

  actionSheetTap() {
    tt.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      success(e) {
        console.log(e.tapIndex)
      }
    })
  }
})
