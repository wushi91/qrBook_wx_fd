// pages/renter/renterDetail/renterDetail.js

const request = require('../../../utils/request.js')
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_status: [{ prop: 'renterDetail', label: '租房详情' },
    { prop: 'recordList', label: '交易记录' }],
    currentStatus: 'renterDetail',


    renterDetail:null,

    bookid:'',
    renterRecordList:[{},{},{}]
  },

  payTabClick: function (e) {

    let currentStatus = e.currentTarget.dataset.currentStatus
    this.setData({
      currentStatus: currentStatus
    })

    if (currentStatus === this.data.tab_status[0].prop) {
      console.log(this.data.tab_status[0].label)
      
    }

    if (currentStatus === this.data.tab_status[1].prop) {
      console.log(this.data.tab_status[1].label)
    }
    
  },

  getTheRenterDeatil: function (userId, bookid){
    if (this.data.renterDetail!==null){
      return
    }
    request.requestGetRenterDetail(userId, bookid, res => {
      let renterDetail = res.data.list
      renterDetail.address = renterDetail.houselist.address

      this.setData({
        renterDetail: renterDetail
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      bookid: options.bookid,
    })

    let userId = util.getMyUserId()
    this.getTheRenterDeatil(userId, options.bookid)
    
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