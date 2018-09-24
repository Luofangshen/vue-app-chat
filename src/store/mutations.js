/*
包含了多个直接修改状态数据函数的对象
 */
import {RECEIVEUSER, ERRORMSG, RECEIVEUSERLIST, GETCHAT, LOGOUT, UPDATECHAT, READ} from './types'

export default {
  [RECEIVEUSER] (state, user) {
    state.user = user
    state.msg = ''
  },
  [ERRORMSG] (state, {msg}) {
    state.user = {}
    state.msg = msg
  },
  [RECEIVEUSERLIST] (state, userList) {
    state.userList = userList
  },
  [GETCHAT] (state, chat) {
    state.chat = chat
  },
  [LOGOUT] (state) {
    state.user = {}
    state.msg = ''
    state.chat = {users: {}, chatMsgs: []}
    state.userList = []
  },
  [UPDATECHAT] (state, chatMsg) {
    state.chat.chatMsgs.push(chatMsg)
  },
  [READ] (state, {data}) {
    state.read = data
  }
}
