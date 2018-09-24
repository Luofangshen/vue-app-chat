<template>
<div class="chat">
  <x-header v-if="chatUser" class="chat-header">{{chatUser.username}}</x-header>
  <div class="content">
    <div v-for="(msg, index) in chatMsg" :class="{'chatContent left': msg.from === $route.params.id, 'chatContent right': msg.from !== $route.params.id}" :key="index">
    <img v-if="msg.from === user._id && user.header" :src="require(`../../assets/headers/${user.header}.png`)" alt=""/>
    <img v-else-if="msg.to === user._id && chatUser.header"  :src="require(`../../assets/headers/${chatUser.header}.png`)" alt=""/>
    <p>{{msg.content}}</p>
    </div>
  </div>
  <group class="chat-input">
    <x-input v-model="content" @on-enter="send" placeholder="请输入信息">
      <i class="iconfont icon-fasong sendBtn" slot="right" @click="send"></i>
    </x-input>
  </group>
</div>
</template>

<script>
import {XHeader, Group, XInput} from 'vux'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      content: ''
    }
  },
  computed: {
    ...mapState(['chat', 'user']),
    chatUser () {
      if (!this.chat.users) {
        return
      }
      return this.chat.users[this.$route.params.id]
    },
    chatMsg () {
      if (!this.chat.chatMsgs) {
        return
      }
      let chatId = [this.user._id, this.$route.params.id].sort().join('_')
      return this.chat.chatMsgs.filter(chatMsg => chatMsg.chat_id === chatId)
    }
  },
  methods: {
    send () {
      if (this.content.trim()) {
        let from = this.user._id
        let to = this.$route.params.id
        let content = this.content
        this.socket.emit('sendMsg', {from, to, content})
      }
      this.content = ''
    }
  },
  watch: {
    chat: {
      deep: true,
      handler: function (value) {
        this.$nextTick(function () {
          document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight
        })
      }
    }
  },
  components: {
    XHeader,
    Group,
    XInput
  },
  props: ['socket', 'id'],
  mounted () {
    document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let cb = () => {
      this.$store.dispatch('getChat')
    }
    this.$store.dispatch('read', {from: this.id, cb})
  },
  beforeDestroy () {
    let cb = () => {
      this.$store.dispatch('getChat')
    }
    this.$store.dispatch('read', {from: this.id, cb})
  }
}
</script>

<style lang="less">
  .chat{
    position: relative;
    height: 100%;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
    .chat-header{
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
    }
    .chat-input{
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      .sendBtn{
        font-size: 1rem;
        color: green;
      }
    }
    .chatContent{
      height: 2.5rem;
      display: flex;
      &.left{
        flex-direction: row;
      }
      &.right{
        flex-direction: row-reverse;
      }
      p{
        width: inherit;
        height: 1.5rem;
        background-color: white;
        font: .8rem/1.5rem '微软雅黑';
        margin: 0.4rem;
        border: 1px solid rgba(0,0,0,.5);
        padding: 0 .2rem;
        border-radius: .5rem;

      }
      img{
        width: 2rem;
        height: 2rem;
        margin: 0 .2rem;
      }
    }
  }
</style>
