// pages/renter/renterDetail/renterDetail.js
const app = getApp()
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
    userId:'',

    renterRecordList:null
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
      if (this.data.renterRecordList===null){
        if (this.data.renterDetail!==null)
          this.getRenterRecordList(this.data.renterDetail.phone, this.data.renterDetail.name)
      }
    }
    
  },


  getRenterRecordList: function (phone, name){
    request.requestRenterRecordList(phone,name,res=>{
      this.setData({
        renterRecordList: res.data.list
      })
      console.log(res.data)
    },res=>{
      console.log(res)
    })
  },
  getTheRenterDeatil: function (userId, bookid){
    if (this.data.renterDetail!==null){
      return
    }
    request.requestGetRenterDetail(userId, bookid, res => {
      
      let renterDetail = res.data.list
      console.log(renterDetail)
      renterDetail.address = renterDetail.houselist.address
      renterDetail.end_time = util.getFormateDate(renterDetail.end_time)
      renterDetail.start_time = util.getFormateDate(renterDetail.start_time)
      this.setData({
        renterDetail: renterDetail
      })
    })
  },

  //收租详情
  toRentDetailPage: function (e) {

    let payId = e.currentTarget.dataset.payId

    let recordType = e.currentTarget.dataset.recordType
    wx.navigateTo({
      url: '/pages/beanDetail/beanDetail?type=rent_detail&recordType=' + recordType + '&payId=' + payId
    })
  },
  deleteTheRenter: function (userId, bookid){
    request.requestToDeleteRenter(userId, bookid,res=>{
      app.updateMyBookPage()
      console.log(res)

      wx.showToast({
        title: '退房成功',
        icon: 'success',
        duration: 1000
      })
      
      setTimeout(function(){
        wx.navigateBack({
          delta: 1
        })
      },1000)
      
    })
  },

  showDeleteTheRenter: function () {
    wx.showModal({
      title: '租客退房',
      content: '确认租客退房之后将删除该租客的租房信息，请和租客确认好已结清所有房租',
      cancelText: '确定',
      cancelColor: '#F24949',
      confirmText: '取消',
      confirmColor: '#000000',
      success:res=> {
        if (res.confirm) {
          //这里是取消，因为调换了按钮的位置
          console.log('用户点击确定')
        } else if (res.cancel) {
          //这里是确定
          this.deleteTheRenter(this.data.userId,this.data.bookid)
        }
      }
    })
  },

  //收租详情
  toRentDetailPage: function (e) {
    let payId = e.currentTarget.dataset.payId
    let recordType = e.currentTarget.dataset.recordType
    wx.navigateTo({
      url: '/pages/beanDetail/beanDetail?type=rent_detail&recordType=' + recordType + '&payId=' + payId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = util.getMyUserId()
    this.setData({
      bookid: options.bookid,
      userId: userId,
    })

    
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