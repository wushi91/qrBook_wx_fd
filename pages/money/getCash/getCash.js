// pages/money/getCash/getCash.js

const request = require('../../../utils/request.js')
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputMoney:''
  },

  bindMoneyInput: function (e) {
    this.setData({
      inputMoney: e.detail.value
    })
  },

  toGetCashOut:function(){
    console.log(this.data.inputMoney)
    let userId = util.getMyUserId()
    if (!userId) {
      //未登录
      return
    }
    request.requestGetCashOut(userId, 1, res=>{
      console.log('000---000')
      console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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