// components/my-mslot/my-mslot.js
Component({
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  // 让使用者可以给组件传入数据
  properties: {
    title:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  
  // 组件中的生命周期函数
  // 1.监听所在页面的生命周期
  pageLifetimes:{
      show(){
        console.log('监听组件所在页面显示出来时')
      },
      hide(){
        console.log('监听组件所在页面隐藏时')
      },
      resize(){
        console.log('监听组件所在页面尺寸大改变')
      }
    },

  // 2.监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log('组件被创建出来')
    },
    attached: function () { 
      console.log('组件被添加到页面')
    },
    ready: function () {
      console.log('组件被渲染出来')
     },
    moved() {
      console.log('组件被移动到另外一个节点')
    },
    detached: function () {
      console.log('组件被移除出来')
    },
  }
})