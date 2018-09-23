/*
包含了多个直接修改状态数据函数的对象
 */
import {RECEIVEUSER, ERRORMSG} from './types'

export default {
  [RECEIVEUSER] (state, user) {
    state.user = user
    state.msg = ''
  },
  [ERRORMSG] (state, {msg}) {
    state.user = {}
    state.msg = msg
  }
}
