<template>
<div class="navfooter-wrap">
  <div class='nav-footer'>
    <div :class="{active: $route.path === '/message'}" @click="$router.push('/message')">
      <i class='iconfont icon-weixin3' v-if="$route.path === '/message'"></i>
      <i class='iconfont icon-weixin2' v-else></i>
    </div>
    <div :class="{active: $route.path === '/userlist'}" @click="$router.push('/userlist')">
      <i class='iconfont icon-group_fill' v-if="$route.path === '/userlist'"></i>
      <i class="iconfont icon-group" v-else></i>
    </div>
    <div :class="{active: $route.path === '/personal'}" @click="$router.push('/personal')">
      <i class='iconfont icon-people_fill' v-if="$route.path === '/personal'"></i>
      <i class='iconfont icon-people' v-else></i>
    </div>
  </div>
  <div class="empty" >
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  @import "../assets/asset";
  .navfooter-wrap{
    .nav-footer{
      width: 16rem;
      height: 2.5rem;
      position: fixed;
      bottom: 0;
      display: flex;
      background-color: white;
      &:before{
       .top-1px();
      }
      div{
        flex: 1;
        text-align: center;
        &.active{
           color: green;
        }
        &:nth-child(1):after{
           content: '信息';
           position: absolute;
           left: 2.2rem;
           bottom: 2px;
           font-size: 0.5rem;
        }
        &:nth-child(2):after{
           content: '通讯录';
           position: absolute;
           left: 7.3rem;
           bottom: 2px;
           font-size: 0.5rem;
        }
        &:nth-child(3):after{
           content: '我';
           position: absolute;
           left: 13.1rem;
           bottom: 2px;
           font-size: 0.5rem;
        }
        i{
          line-height: 1.9rem;
          font-size: 1.3rem;
        }
      }
    }
    .empty{
      height: 2.5rem;
      width: 16rem;
    }
  }
</style>
