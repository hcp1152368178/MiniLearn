// 注册小程序示例
App({
  // 生命周期函数   

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成:onLaunch')
    // 异步调用
    // wx.getUserInfo({
    //   // 拿到数据之后,再进行回调
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    // setTimeout(()=>{
    //   const err = new Error()
    //   throw err
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序界面显示出来之后会执行的生命周期函数
   */
  onShow: function (options) {
    console.log('界面显示出来:onshow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面隐藏时执行:onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序出现一些错误的时候执行:onError')
  }
})
