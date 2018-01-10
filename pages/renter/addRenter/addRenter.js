// pages/renter/addRenter/addRenter.js

const request = require('../../../utils/request.js')
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    houseid:'',

    renterName: '',
    renterPhone: '',
    rentStartDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    rentLength: '',
    rentOverDate: '',
    rentPayWay: '',//默认1月一付
    rentPayDate: '',
    yaJinMoney: '',
    rentMoney: '',


    rentLengthArrayIndex: 5,//默认为6个月
    payDayArrayIndex: new Date().getDate() - 1,//默认为当天号
    payWayArrayIndex: 0,//默认为1月1付

    rentLengthArray: util.generaRentLengthArray(),//1月到24月
    payDayArray: util.generaPayDayArray(),//1号到31号
    payWayArray: [1, 2, 3, 4, 5, 6, 12],//1月1付
   
    
  },


  bindRenterNameInput: function (e) {
    this.setData({
      renterName: e.detail.value
    })
  },
  bindRenterPhoneInput: function (e) {
    this.setData({
      renterPhone: e.detail.value
    })
  },
  bindYaJinMoneyInput: function (e) {
    this.setData({
      yaJinMoney: e.detail.value
    })
  },
  bindRentMoneyInput: function (e) {
    this.setData({
      rentMoney: e.detail.value
    })
  },
  //起租日期
  bindRentStartDateChange: function (e) {
    this.setData({
      rentStartDate: e.detail.value
    })
  },
  //租期时长
  bindRentLengthChange: function (e) {
    this.setData({
      rentLengthArrayIndex: e.detail.value
    })
  },
  //交租方式
  bindPayWayChange: function (e) {
    this.setData({
      payWayArrayIndex: e.detail.value
    })
  },
  //交租日期
  bindPayDayChange: function (e) {
    this.setData({
      payDayArrayIndex: e.detail.value
    })
  },

  toAddRenter:function(){
    let rentOverDate = util.getNextMonth(new Date(this.data.rentStartDate), this.data.rentLengthArray[this.data.rentLengthArrayIndex])
    console.log(rentOverDate)

    let renterDetail = {
      renterName: this.data.renterName,
      renterPhone: this.data.renterPhone,
      rentStartDate: this.data.rentStartDate,
      rentLength: this.data.rentLengthArray[this.data.rentLengthArrayIndex],
    
      rentPayDate: this.data.payDayArray[this.data.payDayArrayIndex],
      rentPayWay: this.data.payWayArray[this.data.payWayArrayIndex],
      yaJinMoney: this.data.yaJinMoney,
      rentMoney: this.data.rentMoney,
      rentOverDate: rentOverDate.getFullYear() + '-' + (rentOverDate.getMonth() + 1) + '-' + rentOverDate.getDate(),
    }
    let userId = util.getMyUserId()
    request.requestToAddRenter(userId,this.data.houseid, renterDetail, res=>{
      wx.navigateBack({
        delta: 1
      })
    })

    
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      address: options.address,
      houseid: options.houseid,
     
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