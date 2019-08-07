import request from '../../service/network.js'
// 注册页面
// 每个页面也有生命周期
Page({
  // 2.初始化数据
  data:{
    name:'xiaobai'
  },
  // 1.监听页面的生面周期
  // 页面被加载出来
  onLoad:function(options){
    // 1.原生发送网络请求
    this.get_data_origin()

    // 2.使用封装的request发送网络请求
    // promise最大的好处就是可以防止回调地狱
   request({
     url:'http://123.207.32.32:8000/recommend'
   })
   .then(res=>{
     console.log(res)
   }).catch(err=>{
     console.log(err)
   })



    // 发送网络请求
    // 发送最简单的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })

    // 2.get 请求，但携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

    // 2.post 请求，携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data: {
    //    name:'xiaobai',
    //    age:18
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   fail:function(err){
    //     console.log(err)
    //   }
    // })

  },
  get_data_origin(){
    // 发送网络请求
    // 发送最简单的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })

    // 2.get 请求，但携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

    // 2.post 请求，携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data: {
    //    name:'xiaobai',
    //    age:18
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   fail:function(err){
    //     console.log(err)
    //   }
    // })

  }
})