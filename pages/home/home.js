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
    counter:0,
    titles:['衣服','裤子','鞋子']
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongpress() {
    console.log('handleLongpress')
  },
  handleEventClick(event){
    console.log('-----',event)
  },
  handleTouchEndEvent(event){
    console.log('+++++++',event)
  },
  handleOut(event) {
    console.log('Outer:',event)
  },
  handleInner(event){
    console.log('inner:',event)
  },
  handleItemClick(event){
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index)
  },
  // ---------事件冒泡和捕获
  handleCaptureView1(){
    console.log('handleBindView1')
  },
  handleCaptureView2() {
    console.log('handleBindView2')
  },
  handleCaptureView3() {
    console.log('handleBindView3')
  },

  handleBindView1() {
    console.log('handleBindView1')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleBindView3() {
    console.log('handleBindView3')
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
    // console.log('onShow')
  },
  // 页面初次渲染完成时回调
  onReady() {
    // console.log('onReady')
  },
  // 当页面隐藏时
  onHide() {
    // console.log('onHide')
  },
  // 监听页面卸载
  onUnload() {
    // console.log('onUnload')
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
  }
})