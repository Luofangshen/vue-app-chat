<template>
<div class='login'>
  <i class='iconfont icon-xiaofuquanlogo01 login-logo' />
  <p>聊天你我他</p>
  <div class='container item'>
    <i class='iconfont icon-wode tubiao' />
    <input type="text" placeholder='请输入注册用户名' maxLength={20} />
  </div>
  <div class='container item'>
    <i class='iconfont icon-mima tubiao' />
    <input type="password" placeholder='请输入密码' maxLength={16} />
  </div>
  <div class='container item'>
    <i class='iconfont icon-mima tubiao' />
    <input type="password" placeholder='请再次输入密码' maxLength={16} />
  </div>
  <div class='container'>
    <mt-button type='primary' class="btn">注册</mt-button>
  </div>
  <div class='container'>
    <mt-button type='primary' class="btn" @click="toLogin">已有账户</mt-button>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    toLogin () {
      this.$router.replace('/login')
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
