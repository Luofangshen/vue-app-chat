<template>
<div class="message">
  <NavTitle>
    <span slot="text">消息</span>
  </NavTitle>
  <Group gutter="0">
    <Cell is-link :link="`/chat/${chatMsgs[0].from === user._id ? chatMsgs[0].to : chatMsgs[0].from}`" v-for="(chatMsgs, index) in chatArr" :key="index" class="cell">
      <img slot="icon" v-if="chat.users[chatMsgs[0].from === user._id ? chatMsgs[0].to : chatMsgs[0].from].header"  :src="require(`../../assets/headers/${chat.users[chatMsgs[0].from === user._id ? chatMsgs[0].to : chatMsgs[0].from].header}.png`)" alt="">
      <div slot="after-title" class="username">{{chat.users[chatMsgs[0].from === user._id ? chatMsgs[0].to : chatMsgs[0].from].username}}</div>
      <div slot="child" class="content">{{chatMsgs[chatMsgs.length - 1].content}}</div>
      <Badge slot="child" v-if="unRead(chatMsgs)" :text="unRead(chatMsgs)" class="bge"></Badge>
    </Cell>
  </Group>
</div>
</template>

<script>
import NavTitle from '../../components/NavTitle'
import {Cell, Group, Badge} from 'vux'
import {mapGetters, mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['chat', 'user']),
    ...mapGetters(['chatArr'])
  },
  methods: {
    unRead (chatMsgs) {
      let arr = chatMsgs.filter(chatMsg => chatMsg.from !== this.user._id)
      return arr.reduce((total, chatMsg) => {
        return total + (chatMsg.read ? 0 : 1)
      }, 0)
    }
  },
  components: {
    NavTitle,
    Cell,
    Group,
    Badge
  }
}
</script>

<style lang="less">
  .message{
    padding-top: 2rem;
    .cell{
      height: 3.5rem;
    }
    .username{
      font:bold .8rem '微软雅黑';
      position: absolute;
      left: 3.8rem;
      top: 0.7rem;
    }
    .content{
      width: 10rem;
      position: absolute;
      left: 3.8rem;
      top: 2rem;
      color: rgba(0,0,0,.4);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .bge{
      position: absolute;
      left: 13.6rem;
      top: 1.2rem;
    }
  }
</style>
