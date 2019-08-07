// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title:String//这种写法没有默认值，也写不了
    // 推荐下面这种写法
    title:{
      type:String,
      value:"我是默认标题",
      // 监听器
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    }
  },
  // 根据传入的样式进行改变
  externalClasses:['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
