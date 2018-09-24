<template>
<div class="main">
  <router-view :socket="socket"></router-view>
  <NavFooter v-show="$route.meta.isShow"></NavFooter>
</div>
</template>

<script>
import Cookies from 'js-cookie'
import {mapState} from 'vuex'
import io from 'socket.io-client'

import NavFooter from '../../components/NavFooter'
export default {
  computed: {
    ...mapState(['user'])
  },
  components: {
    NavFooter
  },
  beforeMount () {
    let fb = () => {
      this.socket = io('http://127.0.0.1:4001')
      this.socket.on('receiveMsg', (chatMsg) => {
        if (chatMsg.from === this.user._id || chatMsg.to === this.user._id) {
          this.$store.dispatch('updateChat', chatMsg)
        }
      })
    }
    fb()
  },
  mounted () {
    let userid = Cookies.get('userid')
    if (userid) {
      if (!this.user.username) {
        let cb = () => {
          this.$router.replace('/login')
        }
        let success = () => {
          if (!this.user.header) {
            this.$router.replace('/userinfo')
          } else {
            this.$store.dispatch('getUserList')
            this.$store.dispatch('getChat')
            this.$router.replace('/message')
          }
        }
        this.$store.dispatch('getUser', {cb, success})
      } else if (!this.user.header) {
        this.$router.replace('/userinfo')
      } else {
        this.$store.dispatch('getChat')
        this.$store.dispatch('getUserList')
        this.$router.replace('/message')
      }
    } else {
      this.$router.replace('/login')
    }
  },
  beforeDestroy () {
    this.socket.close()
  }
}
</script>

<style lang="less">
  @import "../../assets/asset";
  .main{
    .background();
  }
</style>
