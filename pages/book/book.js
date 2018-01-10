// pages/book/book.js

const util = require('../../utils/util.js')
const request = require('../../utils/request.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_status: [{ prop: 'allBook', label: '全部' },
      { prop: 'unusedBook', label: '闲置' }, 
      { prop: 'outdateBook', label: '逾期'}],
    currentStatus: 'allBook',
    isBlankBook:false,
    

    allBookList: null,
    unusedBookList: null,
    outdateBookList: null,
  },


  payTabClick: function (e) {
    
    let currentStatus = e.currentTarget.dataset.currentStatus
    this.setData({
      currentStatus: currentStatus
    })

    let userId = util.getMyUserId()
    //点击tab对应的点击事件
    switch (currentStatus){
      //全部
      case this.data.tab_status[0].prop: this.getAllBook(userId)
        break
      //闲置
      case this.data.tab_status[1].prop: this.getUnusedBook(userId)
        break
      //逾期
      case this.data.tab_status[2].prop: this.getOutDateBook(userId)
        break
    }
  },

  getAllBook: function (userId){
    if (this.data.allBookList !== null) {
      //已经有数据了不请求
      return
    }
    request.requestBookAllList(userId,res=>{
      let allBookList = res.data.Nolist.concat(res.data.list)
      console.log(allBookList)
      for (let i = 0; i < allBookList.length; i++) {
        let item = allBookList[i]
        if (item.name) {
          //有租客
          item.isUnused = false
          item.end_time = util.getFormateDate(item.end_time)
          item.start_time = util.getFormateDate(item.start_time)
        } else {
          item.isUnused = true
        }
      }
      this.setData({
        allBookList: allBookList
      })
      
    })
  },

  getUnusedBook: function (userId) {

    if (this.data.unusedBookList !== null) {
      //已经有数据了不请求
      return
    }
    request.requestBookUnusedList(userId, res => {
      let unusedBookList = res.data.Nolist
      for (let i = 0; i < unusedBookList.length; i++) {
        let item = unusedBookList[i]
        
        
        if (item.name) {
          //有租客
          item.isUnused = false
          item.end_time = util.getFormateDate(item.end_time)
          item.start_time = util.getFormateDate(item.start_time)
        } else {
          item.isUnused = true
        }

      }
      this.setData({
        unusedBookList: unusedBookList
      })
      console.log(unusedBookList)
    })
  },

  getOutDateBook: function (userId) {

    if (this.data.outdateBookList !== null) {
      //已经有数据了不请求
      return
    }
    request.requestBookOutdateList(userId, res => {
      let outdateBookList = res.data.list
      for (let i = 0; i < outdateBookList.length; i++) {
        let item = outdateBookList[i]
        item.end_time = util.getFormateDate(item.end_time)
        item.start_time = util.getFormateDate(item.start_time)
      }
      this.setData({
        outdateBookList: outdateBookList
        // outdateBookList: [{ overdueNum: 3, name:'z'}]
      })
      console.log(outdateBookList)
    })
  },

  toAddRenterPage:function(e){
    let bookid = e.currentTarget.dataset.bookid
    let address = e.currentTarget.dataset.address
    let houseid = e.currentTarget.dataset.houseid
    
    wx.navigateTo({
      url: '/pages/renter/addRenter/addRenter?houseid=' + houseid + '&address=' + address
    })
  },
  toRenterDetailPage:function(e){
    let bookid = e.currentTarget.dataset.bookid
    let address = e.currentTarget.dataset.address
    let houseid = e.currentTarget.dataset.houseid

    wx.navigateTo({
      url: '/pages/renter/renterDetail/renterDetail?bookid=' + bookid 
    })
  },

  toBeanDetailPage:function(e){
    let item = e.currentTarget.dataset.item
    console.log(item)
    // outdateDetail.overdueNum = options.overdueNum
    // outdateDetail.name = options.name
    // outdateDetail.phone = options.phone
    // outdateDetail.pay_time = options.pay_time
    // outdateDetail.rent = options.rent
    wx.navigateTo({
      url: '/pages/beanDetail/beanDetail?type=outdate_detail'
      + '&address=' + item.address 
      + '&overdueNum=' + item.overdueNum 
      + '&name=' + item.name
      + '&phone=' + item.phone
      + '&pay_time=' + item.pay_time
      + '&rent=' + item.rent
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

    this.getAllBook(userId)
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