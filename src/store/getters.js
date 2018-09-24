/*
包含了多个计算属性的数据
 */
export default {
  chatMsgArr (state) {
    return Object.keys(state.chat.users).map((userid, index) => {
      let chatId = [state.user._id, userid].sort().join('_')
      return state.chat.chatMsgs.filter(chatMsg => chatMsg.chat_id === chatId)
    })
  },
  chatArr (state, getters) {
    let arr = getters.chatMsgArr.filter(chatMsg => chatMsg.length !== 0)
    return arr.sort((a, b) => {
      return b[b.length - 1].create_time - a[a.length - 1].create_time
    })
  }
}
