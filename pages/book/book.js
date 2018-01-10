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

    isBlankBook:false,
    currentStatus: 'ss',

    allBookList: null,
    unusedBookList: null,
    outdateBookList: null,
  },


  payTabClick: function (e) {
    
    let currentStatus = e.currentTarget.dataset.currentStatus
    this.setData({
      currentStatus: currentStatus
    })
    if (currentStatus === this.data.tab_status[0].prop){
      console.log(this.data.tab_status[0].label)
      //全部
      if (this.data.allBookList===null){
        let userId = util.getMyUserId()
        this.getAllBook(userId)
      }
    }
    if (currentStatus === this.data.tab_status[1].prop) {
      console.log(this.data.tab_status[1].label)
      //闲置

      if (this.data.unusedBookList === null) {
        let userId = util.getMyUserId()
        this.getUnusedBook(userId)
      }
      
    }
    if (currentStatus === this.data.tab_status[2].prop) {
      console.log(this.data.tab_status[2].label)
      //逾期
      if (this.data.outdateBookList === null) {
        let userId = util.getMyUserId()
        this.getOutDateBook(userId)
      }
      
    }
  },

  getAllBook: function (userId){
    request.requestBookAllList(userId,res=>{
      let allBookList = res.data.Nolist.concat(res.data.list)
      // console.log(res.data)
      // console.log('--------------------------')
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
    request.requestBookOutdateList(userId, res => {
      let outdateBookList = res.data.list
      for (let i = 0; i < outdateBookList.length; i++) {
        let item = outdateBookList[i]
        item.end_time = util.getFormateDate(item.end_time)
        item.start_time = util.getFormateDate(item.start_time)
      }
      this.setData({
        outdateBookList: outdateBookList
      })
      console.log(outdateBookList)
    })
  },

  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      currentStatus: this.data.tab_status[0].prop
    })
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