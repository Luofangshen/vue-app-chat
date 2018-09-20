/*
包含了多个计算属性
 */
export default {
  checkNum (state) {
    return state.todos.reduce((total, todo) => total + (todo.isCheck ? 1 : 0), 0)
  }
}
