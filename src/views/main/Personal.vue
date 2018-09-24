<template>
<div class="personal">
  <NavTitle>
    <span slot="text">我的</span>
  </NavTitle>
  <div class='content'>
    <div class='info'>
      <img v-if="user.header" :src="require(`../../assets/headers/${user.header}.png`)" alt="" />
      <p class='username'>{{user.username}}</p>
      <p class='introduction'>介绍:{{user.info}}</p>
    </div>
    <mt-cell title="收藏">
      <img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" slot="icon" alt="" width="25">
    </mt-cell>
    <mt-cell title="图片">
      <img src="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" slot="icon" alt="" width="25">
    </mt-cell>
    <mt-cell title="钱包">
      <img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" slot="icon" alt="" width="25">
    </mt-cell>
    <mt-cell title="设置">
      <img src="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" slot="icon" alt="" width="25">
    </mt-cell>
    <br>
    <mt-button type='primary' class="btn" @click="quit">退出登录</mt-button>
  </div>
</div>
</template>

<script>
import NavTitle from '../../components/NavTitle'
import {MessageBox} from 'mint-ui'
import {mapState} from 'vuex'
import Cookies from 'js-cookie'
export default {
  computed: {
    ...mapState(['user'])
  },
  methods: {
    quit () {
      MessageBox.confirm('确定执行此操作?').then(action => {
        Cookies.remove('userid')
        console.log('55')
        this.$router.replace('/login')
        this.$store.dispatch('logOut')
      }, cancel => {
      })
    }
  },
  components: {
    NavTitle
  }
}
</script>

<style lang="less">
  @import "../../assets/asset";
  .personal{
    padding-top: 2rem;
    .content{
      .info{
        position: relative;
        padding: 0.5rem;
        background-color: white;
        margin:1rem 0;
        height: 3rem;
        &:before{
          .top-1px();
        }
        &:after{
          .bottom-1px();
        }
        .username{
          position: absolute;
          left: 3.5rem;
          top: 0.3rem;
          font:bold 1rem '微软雅黑';
          font-size: 1rem;
        }
        .introduction{
          width: 6rem;
          position: absolute;
          left: 3.5rem;
          top: 1.8rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: .6rem;
        }
      }
      .btn{
        width: 100%;
      }
    }
  }
</style>
