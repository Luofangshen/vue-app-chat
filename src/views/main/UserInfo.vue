<template>
  <div class='userinfo'>
    <p v-if="!header" class="check">请选择头像</p>
    <div v-else class="checkImg">
      <span>你选择的是</span>
      <img :src="require(`../../assets/headers/${header}.png`)" alt="" />
    </div>
    <ul class="header">
      <li v-for="(item, index) in image" :key="index" @click="header = item">
        <div class="box">
          <img :src="require(`../../assets/headers/${item}.png`)" alt="">
        </div>
      </li>
    </ul>
    <p class="text">介绍</p>
    <div class="introduction">
      <textarea class="area" maxlength="100" placeholder="100字以内" v-model="info"></textarea>
    </div>
    <mt-button type='primary' class="btn" @click="save">完善信息</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: '',
      info: '',
      image: [...new Array(20)].map((item, index) => {
        return `头像${index + 1}`
      })
    }
  },
  methods: {
    save () {
      let userInfo = {header: this.header, info: this.info}
      this.$store.dispatch('update', userInfo)
      this.$nextTick(function () {
        this.$router.replace('/message')
      })
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/asset";
  @rem: 16rem / 980;
  .userinfo{
    .btn{
      width: 100%;
    }
    .check{
      padding: 0.8rem;
      font: 0.9rem '微软雅黑';
    }
    .checkImg{
      padding: 0.8rem;
      font: 0.9rem '微软雅黑';
      span{
        float: left;
        margin-top: 0.5rem;
        margin-right: 1rem;
      }
    }
    .header{
      &:after{
        content: '';
        display: block;
        clear: both;
      }
      li{
        float: left;
        .box{
          width: 3.2rem;
          height: 3rem;
          text-align: center;
          background-color: white;
          position: relative;
          &:active{
            background-color: rgba(0,0,0,.2);
          }
          &:after{
            .bottom-1px()
          }
          &:before{
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            background-color: rgba(0,0,0,.3);
            width: 1px;
            height: 100%;
            @media (-webkit-device-pixel-ratio: 2) {
              transform: scaleX(.5);
            }
            @media (-webkit-device-pixel-ratio: 3) {
              transform: scaleX(.33333333);
            }
          }
          img{
            margin-top: 0.4rem;

          }
        }
      }
    }
    .text{
      font-size: 0.6rem;
      padding: .5rem;
      color: rgba(0,0,0,.3);
    }
    .introduction{
      width: 16rem;
      height: 8rem;
      background-color: white;
      padding: .8rem;
      margin-bottom: .5rem;
      .area{
        width: 14rem;
        height: 7rem;
        border: none;
        font: .8rem '微软雅黑';
      }
    }
  }
</style>
