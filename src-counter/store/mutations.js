/*
mutation 包含了多个直接修改状态数据的函数
 */
import {INCREMENT, DECREMENT} from './mutation-type'

export default {
  [INCREMENT] (state) {
    state.count++
  },
  [DECREMENT] (state) {
    state.count--
  }
}
