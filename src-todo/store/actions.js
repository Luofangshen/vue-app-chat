/*
包含了多个事件回调函数 间接修改状态数据
 */
import {DELCOMPLETE, AddTodo, DELTODO, ALLCHECK} from './types'

export default {
  delComplete ({commit}) {
    commit(DELCOMPLETE)
  },
  AddTodo ({commit}, todo) {
    commit(AddTodo, todo)
  },
  delTodo ({commit}, index) {
    commit(DELTODO, index)
  },
  allCheck ({commit}, prop) {
    commit(ALLCHECK, prop)
  }
}
