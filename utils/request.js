const util = require('../utils/util.js')

const host = 'http://192.168.2.221:8080'//测试用
// const host = 'https://www.0755qr.com'

//登录
const login_get_user_id_url = host +'/rentBook/authorization/landlord.do'

//房东应收（首页）
const current_month_money_total_url = host + '/rentBook/payment/receivable.do'
//房东已收（首页）
const current_month_money_hasget_url = host + '/rentBook/payment/received.do'
//房东待收（首页）
const current_month_money_noget_url = host + '/rentBook/payment/waite.do'


//全部（账本）
const get_all_book_url = host + '/rentBook/book/AllUserBooks.do'
//闲置（账本）
const get_unused_book_url = host + '/rentBook/house/findIdleHouse.do'
//逾期（账本）
const get_outdate_book_url = host + '/rentBook/book/selectOverdue.do'


//
const to_add_room_url =  host + '/rentBook/house/addHousing.do'

//登录
const requestLoginTogetMyUserId = function (wxCode, wxUserInfo, code200) {
  let data = {
    code: wxCode,
    userInfo: wxUserInfo
  }
  util.wxGet(login_get_user_id_url, data, code200)
}

//房东已收（首页）
const requestCurrentMonthTotalMoney = function (user_id, code200, error){
  let data = {
    user_id: user_id
  }
  util.wxGet(current_month_money_total_url, data, code200, error)
}

//房东待收（首页）
const requestCurrentMonthHasGetMoney = function (user_id, code200, error) {
  let data = {
    user_id: user_id
  }
  util.wxGet(current_month_money_hasget_url, data, code200, error)
}

//房东应收（首页）
const requestCurrentMonthNoGetMoney = function (user_id, code200, error) {
  let data = {
    user_id: user_id
  }
  util.wxGet(current_month_money_noget_url, data, code200, error)
}

//全部（账本）
const requestBookAllList = function (user_id, code200, error) {
  let data = {
    user_id: user_id
  }
  util.wxGet(get_all_book_url, data, code200, error)
}
//闲置（账本）
const requestBookUnusedList = function (user_id, code200, error) {
  let data = {
    user_id: user_id
  }
  util.wxGet(get_unused_book_url, data, code200, error)
}
//逾期（账本）
const requestBookOutdateList = function (user_id, code200, error) {
  let data = {
    user_id: user_id
  }
  util.wxGet(get_outdate_book_url, data, code200, error)
}


//新建房子
const requestToAddRoom = function (user_id, province, city, address,code200, error) {
  let data = {
    user_id: user_id,
    province: province,
    city: city,
    address: address,
  }
  util.wxGet(to_add_room_url, data, code200, error)
}





module.exports = {
  requestLoginTogetMyUserId: requestLoginTogetMyUserId,
  requestCurrentMonthTotalMoney,
  requestCurrentMonthHasGetMoney,
  requestCurrentMonthNoGetMoney,
  requestBookAllList,
  requestBookUnusedList,
  requestBookOutdateList,
  requestToAddRoom,
}