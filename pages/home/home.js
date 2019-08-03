Page({
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
    counter:0
  },
  handleBtnClick(){
    console.log('点了+号') 
    // this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction(){
    console.log('点了-号') 
    this.setData({
      counter:this.data.counter - 1
    })
  }
})