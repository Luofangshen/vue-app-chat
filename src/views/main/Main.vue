<template>
<div class="main">

  <router-view></router-view>
  <NavFooter v-show="$route.meta.isShow"></NavFooter>
</div>
</template>

<script>
import Cookies from 'js-cookie'
import {mapState} from 'vuex'

import NavFooter from '../../components/NavFooter'

export default {
  computed: {
    ...mapState(['user'])
  },
  components: {
    NavFooter
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
            this.$router.replace('/message')
          }
        }
        this.$store.dispatch('getUser', {cb, success})
      } else if (!this.user.header) {
        this.$router.replace('/userinfo')
      } else {
        this.$router.replace('/message')
      }
    } else {
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/asset";
  .main{
    .background()
  }
</style>
