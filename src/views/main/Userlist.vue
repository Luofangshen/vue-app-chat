<template>
<div class="userlist">
  <NavTitle>
    <span slot="text">通讯录</span>
  </NavTitle>
  <div class="card" v-for="(user, index) in showUserList" :key="index" @click="toChat(user._id)">
    <div class="card-header">
      <img v-if="user.header" :src="require(`../../assets/headers/${user.header}.png`)" alt="">
      <span>{{user.username}}</span>
      <i class="iconfont icon-arrow-right-copy"></i>
    </div>
    <div class="vux-1px-t card-content">
      个人介绍：{{user.info}}
    </div>
  </div>
</div>
</template>

<script>
import NavTitle from '../../components/NavTitle'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['userList', 'user']),
    showUserList () {
      return this.userList.filter(user => user._id !== this.user._id)
    }
  },
  methods: {
    toChat (id) {
      this.$router.push(`/chat/${id}`)
    }
  },
  components: {
    NavTitle
  },
  mounted () {
    this.$store.dispatch('getUserList')
  },
  watch: {
    userList () {
      this.$store.dispatch('getChat')
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  .userlist{
    padding-top: 2rem;
    .card{
      margin: 1rem;
      border-radius: 10px;
      background-color: rgba(255, 255,255,1);
      .card-header{
        height: 3rem;
        padding: .5rem;
        i{
          float: right;
          font-size: 1.3rem;
          margin-top: .5rem;
        }
        span{
          position: relative;
          bottom: .5rem;
        }
      }
      .card-content{
        height: 2rem;
        padding: 0.5rem;
        font: .7rem '微软雅黑'
      }
    }
  }
</style>
