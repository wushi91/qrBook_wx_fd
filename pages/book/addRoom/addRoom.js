// pages/book/addBook/addBook.js


const util = require('../../../utils/util.js')
const request = require('../../../utils/request.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '深圳市', '罗湖区'],
    inputHouseName: ''
  },

  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindHouseNameInput: function (e) {
    this.setData({
      inputHouseName: e.detail.value
    })
  },
  toAddRoom: function () {
    let userId = util.getMyUserId()
    if (!userId) {
      //未登录
      return
    }
    request.requestToAddRoom(userId, this.data.region[0], this.data.region[1], this.data.inputHouseName,res=>{
      console.log(res)
      wx.navigateBack({
        delta: 1
      })
      wx.switchTab({
        url: '/pages/book/book'
      })
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