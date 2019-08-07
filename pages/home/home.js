// getApp()获取APP()产生的实例对象
// const app = getApp();

// const name = app.globalDate.name;
// const age = app.globalDate.age;

// 注册页面
// 每个页面也有生命周期
Page({
  // 2.初始化数据
  data:{
    name:'xiaobai',
    age:18,
    students:[
      { id: 1, name:'超强华',age:12},
      {id:2,name:'超强光',age:15},
      {id:3,name:'张三',age:18},
      {id:4,name:'李四',age:72},
      {id:5,name:'小白',age:19},
      {id:6,name:'小黑',age:22}
    ],
    lists:[],
    counter:0
  },
  

  // 1.监听页面的生面周期
  // 页面被加载出来
  onLoad(){
    // console.log('onLoad')
    // wx.request({
    //   // 网络请求
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:(res)=>{
    //     console.log(res)
    //     const data = res.data.data.list;
    //     this.setData({
    //       lists: data
    //     })
    //   }
    // })
  },
  // 页面显示出来
  onShow() {
    console.log('onShow')
  },
  // 页面初次渲染完成时回调
  onReady() {
    console.log('onReady')
  },
  // 当页面隐藏时
  onHide() {
    console.log('onHide')
  },
  // 监听页面卸载
  onUnload() {
    console.log('onUnload')
  },

// 3.监听wxml相关的一些事件
  handleBtnClick() {
    console.log('点了+号')
    // this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() { 
    console.log('点了-号')
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },

  // 4.其它事件
  // 监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('页面已经滚动到底部')
  },
  // 下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新中....')
  },

  // 分享
  onShareAppMessage:function(options){
    return {
      title:'你好，小白',
      path:'pages/cart/cart',
      imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565187963856&di=1d6fe67af3d15bf4dc7b348999d49af4&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cebba8b8e09c45d688d53f20fc.jpg'
    }
  },

  // 关于 弹窗
  // showToast
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      duration:1000,
      icon:'loading',
      // 不可引用网络地址
      // image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565187963856&di=1d6fe67af3d15bf4dc7b348999d49af4&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cebba8b8e09c45d688d53f20fc.jpg'
      mask:true,
      success:function(){
        console.log('展示弹窗成功')
      },
      fail: function () {
        console.log('展示弹窗失败')
      },
      complete: function () {
        console.log('展示弹窗完成')
      },
    })
  },
  // showModal 
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容，嘿嘿嘿',
      showCancel: true,
      cancelText: '再考虑下',
      cancelColor: 'red',
      confirmText: '确定啊',
      confirmColor: 'green',
      success: function (res) {
        console.log(res) 
        if(res.cancel){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // ShowLoading
  handleShowLoading(){
    wx.showLoading({
      title: '加载中....',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

    setTimeout(()=>{
      // 必须手动hideLoading才会让Loading消失
      wx.hideLoading()
    },1000)
  },
  // ShowActionSheet
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})