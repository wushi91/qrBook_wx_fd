// pages/index/index.js

const request = require('../../utils/request.js')
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_month:'',
    current_month_total_money:0,
    current_month_hasget_money: 0,
    current_month_noget_money: 0,
  },

  toAddRoomPage:function(){
    wx.navigateTo({
      url: "/pages/book/addRoom/addRoom"
    })
  },
  toMoneyPage: function () {
    wx.navigateTo({
      url: "/pages/money/money"
    })
  },
  toBillPage: function () {
    wx.navigateTo({
      url: "/pages/bill/bill"
    })
  },
  toRecordPage: function () {
    wx.navigateTo({
      url: "/pages/record/record"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let userId = util.getMyUserId()
    if (!userId) {
      //未登录
      return
    }

    request.requestCurrentMonthTotalMoney(userId,res=>{
      console.log(res)
      this.setData({
        current_month_total_money: res.data.money,
        current_month: res.data.month + '月'
      })
    })
    request.requestCurrentMonthHasGetMoney(userId, res => {
      this.setData({
        current_month_hasget_money: res.data.money
      })
    })
    request.requestCurrentMonthNoGetMoney(userId, res => {
      this.setData({
        current_month_noget_money: res.data.money
      })
    })
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
    this.onLoad()
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