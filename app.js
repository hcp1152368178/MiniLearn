// 定义一个常量，改变量方便
const TOKEN = 'token'

App({
  // 对象： 小程序关闭就会回收，所以还得存到本地storage
  globalDate:{
    token:''
  },
  // 生命周期函数   
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    // 2.判断token是否有值
    if(token && token.lenght !==0){
      // 已存在token，验证token是否过期
      this.check_token(token)
    }else{
      // 没有token，进行登录操作
      this.login()
    }
  },
  // 登录方法
  login(){
    console.log('执行了登录操作');
    // 登录操作
    wx.login({
      // code 只有5分钟的有效期
      success: (res) => {
        // console.log(res)
        // 1.获取code
        const code = res.code;

        // 2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code
          },
          method: 'post',
          success: (res) => {
            console.log(res)
            // 1.取出token
            const token = res.data.token;

            //2.将token保存到globaDate中
            this.globalDate.token = token;
            // console.log(this.globalDate.token)

            // 3.进行本地存储 wx.setStorageSync(key, data){}
            // wx.setStorageSync('token', token)
            wx.setStorageSync(TOKEN, token);
          },
        })
      },
    })
  },
  // 验证token是否过期
  check_token(token){
    console.log('执行了验证token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header:{
        token
      },
      success: (res) =>{
        if (!res.data.errCode) {
          console.log('token有效')
          this.globalDate.taken = token;
        } else {
          this.login()
        }
      },
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序界面显示出来之后会执行的生命周期函数
   */
  onShow: function (options) {
    // console.log('界面显示出来:onshow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    // console.log('界面隐藏时执行:onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    // console.log('小程序出现一些错误的时候执行:onError')
  },
  globalDate(){
    name:'chaichaiya';
    age:'16'
  }
})
