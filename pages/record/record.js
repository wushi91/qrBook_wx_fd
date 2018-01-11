// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  //收租详情
  toRentDetailPage: function (e) {
    let payId = e.currentTarget.dataset.payId
    let recordType = e.currentTarget.dataset.recordType
    wx.navigateTo({
      url: '/pages/beanDetail/beanDetail?type=rent_detail&recordType=' + recordType + '&payId=' + payId
    })
  },
  //提现详情
  toGetCashDetailPage: function (e) {
    let payId = e.currentTarget.dataset.payId
    let recordType = e.currentTarget.dataset.recordType
    wx.navigateTo({
      url: '/pages/beanDetail/beanDetail?type=get_cash_detail&recordType=' + recordType + '&payId=' + payId
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