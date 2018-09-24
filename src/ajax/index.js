import ajax from './ajax'

let baseApi = '/api'
// 登录API
export const reqLogin = (user) => ajax(baseApi + '/login', user, 'POST')
// 注册API
export const reqRegister = (user) => ajax(baseApi + '/register', user, 'POST')
// 自动登录获取user API
export const reqGetUser = () => ajax(baseApi + '/user')
// 更新用户信息 API
export const reqUpdate = (userInfo) => ajax(baseApi + '/update', userInfo, 'POST')
// 获取用户列表 API
export const reqGetUserList = () => ajax(baseApi + '/userlist')
// 获取聊天信息
export const reqGetChat = () => ajax(baseApi + '/msglist')
// 修改已读信息
export const reqRead = (from) => ajax(baseApi + '/readmsg', {from}, 'POST')
