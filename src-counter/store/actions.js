/*
间接修改状态数据的action
 */
import {INCREMENT, DECREMENT} from './mutation-type'
export default {
  incrementSync ({commit}) {
    commit(INCREMENT)
  },
  decrementSync ({commit}) {
    commit(DECREMENT)
  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit(INCREMENT)
    }, 1000)
  }
}
