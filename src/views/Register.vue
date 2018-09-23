<template>
<div class='login'>
  <i class='iconfont icon-xiaofuquanlogo01 login-logo' />
  <p>聊天你我他</p>
  <div class='container item'>
    <i class='iconfont icon-wode tubiao' />
    <input type="text" placeholder='请输入注册用户名' maxLength={20} v-model="username" />
  </div>
  <div class='container item'>
    <i class='iconfont icon-mima tubiao' />
    <input type="password" placeholder='请输入密码' maxLength={16} v-model="password" />
  </div>
  <div class='container item'>
    <i class='iconfont icon-mima tubiao' />
    <input type="password" placeholder='请再次输入密码' maxLength={16} v-model="password1" />
  </div>
  <div class='container'>
    <mt-button type='primary' class="btn" @click="register">注册</mt-button>
  </div>
  <div class='container'>
    <mt-button type='primary' class="btn" @click="toLogin">已有账户</mt-button>
  </div>
</div>
</template>

<script>
import {Toast} from 'mint-ui'
import Cookies from 'js-cookie'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      password1: ''
    }
  },
  computed: {
    ...mapState(['user', 'msg'])
  },
  watch: {
    user () {
      let userid = Cookies.get('userid')
      if (userid) {
        this.$router.replace('/')
      }
    }
  },
  methods: {
    toLogin () {
      this.$router.replace('/login')
    },
    register () {
      let {username, password, password1} = this
      if (username.trim() && password.trim() && password1.trim()) {
        if (password !== password1) {
          Toast({
            message: '两次输入的密码要一致',
            position: 'middle',
            duration: 800
          })
        } else {
          let cb = () => {
            if (this.msg) {
              Toast({
                message: this.msg,
                position: 'middle',
                duration: 800
              })
            }
          }
          this.$store.dispatch('register', {user: {username, password}, cb})
        }
      } else {
        Toast({
          message: '用户名或者密码不能为空',
          position: 'middle',
          duration: 800
        })
      }
    }
  },
  mounted () {
    let userid = Cookies.get('userid')
    if (userid) {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="less">
  @import "../assets/asset";
  .login{
    .background();
    text-align: center;
    .login-logo{
      display: inline-block;
      margin-top: 1.2rem;
      font-size: 6rem;
    }
    p{
      font:bold 1rem '微软雅黑';
    }
    .container{
      margin: 20px auto;
      border-radius:80px;
      overflow: hidden;
      width: 14rem;
      .btn{
        width: 100%;
      }
    }
    .item{
      height: 2rem;
      .tubiao{
        font-size: 1.5rem;
        float: left;
        padding:0.2rem 0.3rem;
        color: darkolivegreen;
      }
      input{
        border: none;
        width: 80%;
        height: 50px;
        box-sizing: border-box;
        border-radius: 300px;
        padding: 0 0.7rem;
        background-color: rgba(255,255,255,.4);
        font-size: 0.6rem;
        font-family: '微软雅黑';
        color: rgba(0,0,0,.6);
      }
    }
  }
</style>
