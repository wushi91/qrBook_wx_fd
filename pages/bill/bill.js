// pages/bill/bill.js
const util = require('../../utils/util.js')
const request = require('../../utils/request.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_status: [{ prop: 'allBill', label: '全部' },
      { prop: 'unpayBill', label: '未结清' },
      { prop: 'haspayBill', label: '已结清' }],
    currentStatus: 'allBill',
    allBillList: null,
    unpayBillList: null,
    haspayBillList: null,
  },

  payTabClick: function (e) {
    let currentStatus = e.currentTarget.dataset.currentStatus
    this.setData({
      currentStatus: currentStatus
    })

    let userId = util.getMyUserId()
    //点击tab对应的点击事件
    switch (currentStatus) {
      //全部
      case this.data.tab_status[0].prop: this.getAllBill(userId)
        break
      //闲置
      case this.data.tab_status[1].prop: this.getUnpayBill(userId)
        break
      //逾期
      case this.data.tab_status[2].prop: this.getHaspayBill(userId)
        break
    }
  },


  getAllBill: function (userId){
    if (this.data.allBillList !== null) {
      //已经有数据了不请求
      return
    }
    
    request.requestAllBillList(userId,res=>{
      console.log(res)
      this.setData({
        allBillList: res.data.list
      })
    })

    console.log('getAllBill')
  },

  getUnpayBill: function (userId) {
    if (this.data.unpayBillList !== null) {
      //已经有数据了不请求
      return
    }
    console.log('getUnpayBill')
  },
  getHaspayBill: function (userId) {
    if (this.data.haspayBillList !== null) {
      //已经有数据了不请求
      return
    }
    console.log('getHaspayBill')
  },

  toUnpayBillDetailPage: function (e) {
    let billId = e.currentTarget.dataset.billId
    wx.navigateTo({
      url: '/pages/beanDetail/beanDetail?type=bill_detail_nopay&billId=' + billId
    })
  },

  toHaspayBillDetailPage: function (e) {
    let billId = e.currentTarget.dataset.billId
    wx.navigateTo({
      url: '/pages/beanDetail/beanDetail?type=bill_detail_haspay&billId=' + billId
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