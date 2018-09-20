/*
包含了多个直接修改状态数据的函数
 */
import {DELCOMPLETE, AddTodo, DELTODO, ALLCHECK} from './types'

export default {
  [DELCOMPLETE] (state) {
    state.todos = state.todos.filter((todo, index) => !todo.isCheck)
  },
  [AddTodo] (state, todo) {
    state.todos.unshift(todo)
  },
  [DELTODO] (state, index) {
    if (state.todos.length === 1) {
      state.todos = []
    } else {
      state.todos = state.todos.splice(index, 1)
    }
  },
  [ALLCHECK] (state, prop) {
    state.todos.forEach((todo, index) => {
      state.todos[index].isCheck = prop
    })
  }
}
