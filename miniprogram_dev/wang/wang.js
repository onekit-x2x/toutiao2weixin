import {tt} from '../toutiao2weixin/tt'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  



    const fileSystemManager = tt.getFileSystemManager();

try {
  const files = fileSystemManager.readdirSync("ttfile://user/");
  console.log("调用成功", files);
} catch (err) {
  console.log("调用失败", err);
}



    // tt.exitMiniProgram({
    //   fail: (res) => console.log("接口调用失败",res),
    //   success:(res) => console.log("接口调用成功",res),
    //   complete:(res) => console.log("接口调用结束的回调函数",res)
    // }); 
    // const bool = tt.canIPutStuffOverComponent('view')
    // console.log(bool)

    // tt.showFavoriteGuide({
    //   fail: (res) => console.log("接口调用失败",res),
    //   success:(res) => console.log("接口调用成功",res),
    //   complete:(res) => console.log("接口调用结束的回调函数",res) 
    // }); 

    // tt.showInteractionBar({  
    //   fail: (res) => console.log("接口调用失败",res),
    //   success:(res) => console.log("接口调用成功",res),
    //   complete:(res) => console.log("接口调用结束的回调函数",res) 
    // });  


    // tt.hideInteractionBar({  
    //   fail: (res) => console.log("接口调用失败",res),
    //   success:(res) => console.log("接口调用成功",res),
    //   complete:(res) => console.log("接口调用结束的回调函数",res) 
    // }); 
    
    
  //   const fileSystemManager = tt.getFileSystemManager();
  // tt.chooseImage({
  //   success: (res) => {
  //    const tempFilePath = res.tempFilePaths[0];
  //    //
  //   //  const savedFilePath = fileSystemManager.saveFileSync(tempFilePath);
  //    //
  //   const lastIndexOfExt = tempFilePath.lastIndexOf('.');
  //   const ext = tempFilePath.substring(lastIndexOfExt + 1)
  //   const randomString = Math.floor(Math.random()*( 10000000-1) + 1);
  //    const savedFilePath = fileSystemManager.saveFileSync(tempFilePath,`ttfile://user/${randomString}.${ext}`);
  //    console.log(tempFilePath,savedFilePath) 
  //   } 
  // });
  }, 



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})