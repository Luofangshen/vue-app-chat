/*
包含多个状态数据
 */
export default {
  todos: JSON.parse(window.localStorage['todos'] || '[]')
}
