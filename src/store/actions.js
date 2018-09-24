/*
包含了多个间接修改状态数据的函数的对象
 */
import {RECEIVEUSER, ERRORMSG, RECEIVEUSERLIST, GETCHAT, LOGOUT, UPDATECHAT, READ} from './types'

import {reqLogin, reqRegister, reqGetUser, reqUpdate, reqGetUserList, reqGetChat, reqRead} from '../ajax/index'

export default {
  async login ({commit}, {user, cb}) {
    let result = await reqLogin(user)
    if (result.code === 0) {
      commit(RECEIVEUSER, result.data)
    } else if (result.code === 1) {
      commit(ERRORMSG, {msg: result.msg})
      cb()
    }
  },
  async register ({commit}, {user, cb}) {
    let result = await reqRegister(user)
    if (result.code === 0) {
      commit(RECEIVEUSER, result.data)
    } else if (result.code === 1) {
      commit(ERRORMSG, {msg: result.msg})
      cb()
    }
  },
  async getUser ({commit}, {cb, success}) {
    let result = await reqGetUser()
    if (result.code === 0) {
      commit(RECEIVEUSER, result.data)
      success()
    } else if (result.code === 1) {
      commit(ERRORMSG, {msg: result.msg})
      cb()
    }
  },
  async update ({commit}, userInfo) {
    let result = await reqUpdate(userInfo)
    if (result.code === 0) {
      commit(RECEIVEUSER, result.data)
    } else if (result.code === 1) {
      commit(ERRORMSG, {msg: result.msg})
    }
  },
  async getUserList ({commit}) {
    let result = await reqGetUserList()
    if (result.code === 0) {
      commit(RECEIVEUSERLIST, result.data)
    }
  },
  async getChat ({commit}) {
    let result = await reqGetChat()
    if (result.code === 0) {
      commit(GETCHAT, result.data)
    }
  },
  logOut ({commit}) {
    commit(LOGOUT)
  },
  updateChat ({commit}, chatMsg) {
    commit(UPDATECHAT, chatMsg)
  },
  async read ({commit}, {from, cb}) {
    let result = await reqRead(from)
    if (result.code === 0) {
      commit(READ, {data: result.data})
      cb()
    }
  }
}
