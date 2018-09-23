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
