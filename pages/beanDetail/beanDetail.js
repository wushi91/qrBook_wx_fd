// pages/beanDetail/beanDetail.js
const request = require('../../utils/request.js')
const util = require('../../utils/util.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: [
      { bill_detail_haspay:'租房详情'},
      { bill_detail_nopay: '租房详情' },
      { rent_detail: '收租详情' },
      { get_cash_detail: '提现详情' },
      { outdate_detail: '逾期详情' },],
    type:'outdate_detail',
    address:'',
    outdateDetail:null,
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type,
    })


    if (options.type ==='outdate_detail'){
      let outdateDetail = {}
      
      outdateDetail.overdueNum = options.overdueNum
      outdateDetail.name = options.name
      outdateDetail.phone = options.phone
      outdateDetail.pay_time = options.pay_time
      outdateDetail.rent = options.rent

      console.log(options)
      this.setData({
        address : options.address,
        outdateDetail: outdateDetail,
      })
    }
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